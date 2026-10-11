// verify-hooks-semantic.mjs - prove the hooks rename changed ONLY identifier bindings.
//
// Baseline choice matters: the deminified/ m0357 file was produced by js-beautify,
// but BOTH deminified-rewind/ and deminified-hooks/ are Babel AST round-trips
// (same parser + generator options). Babel's generator normalizes some single-statement
// bodies by adding braces, so a Babel round-trip adds +35 BlockStatement nodes vs
// deminified/ - an artifact of regeneration, not of any rename (deminified-rewind has
// the exact same +35). To isolate the rename effect we therefore compare m0357 against
// deminified-rewind/ (same round-trip), and the other three files against deminified/.
//
// What we compare (must all be 0 for a clean pass):
//   - string literals (values)
//   - numeric literals
//   - object/class property keys
//   - AST node-type histogram
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = _traverse.default ?? _traverse;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const B_DIR = path.join(ROOT, "deminified-hooks");
const OPTS = {
  sourceType: "module",
  allowAwaitOutsideFunction: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  allowUndeclaredExports: true,
  allowImportExportEverywhere: true,
};

// file -> baseline directory (rename-isolated comparison)
const FILES = [
  ["m0357_0xc63ba04.js", "deminified-rewind"],
  ["m0247_0xc49fe84.js", "deminified"],
  ["m0094_0xc0d9ae5.js", "deminified"],
  ["m0052_0xbfaae5d.js", "deminified"],
];

function profile(file) {
  const ast = parse(fs.readFileSync(file, "utf8"), OPTS);
  const nodeTypes = new Map(), strings = new Map(), props = new Map();
  const bump = (m, k) => m.set(k, (m.get(k) || 0) + 1);
  traverse(ast, {
    enter(p) {
      bump(nodeTypes, p.node.type);
      if (p.node.type === "StringLiteral") bump(strings, p.node.value);
      if (p.node.type === "NumericLiteral") bump(strings, "#num:" + p.node.value);
      if (p.node.type === "ObjectProperty" || p.node.type === "ObjectMethod" || p.node.type === "ClassMethod" || p.node.type === "ClassProperty") {
        const k = p.node.key;
        const kn = k.type === "Identifier" ? k.name : (k.type === "StringLiteral" ? k.value : null);
        if (kn != null) bump(props, kn);
      }
    },
  });
  return { nodeTypes, strings, props };
}

function diff(ma, mb, label) {
  const keys = new Set([...ma.keys(), ...mb.keys()]);
  let bad = 0;
  for (const k of keys) {
    const a = ma.get(k) || 0, b = mb.get(k) || 0;
    if (a !== b) { bad++; if (bad <= 20) console.log(`  ${label} DIFF ${JSON.stringify(k)}: ${a} -> ${b}`); }
  }
  console.log(`${label}: ${bad} differing keys`);
  return bad;
}

let total = 0;
for (const [file, baseDir] of FILES) {
  console.log(`== ${file} (baseline: ${baseDir}/) ==`);
  const pa = profile(path.join(ROOT, baseDir, file));
  const pb = profile(path.join(B_DIR, file));
  total += diff(pa.nodeTypes, pb.nodeTypes, "nodeType");
  total += diff(pa.strings, pb.strings, "string/num literal");
  total += diff(pa.props, pb.props, "property/class key");
}
console.log("TOTAL differing keys:", total);
if (total !== 0) process.exitCode = 1;
