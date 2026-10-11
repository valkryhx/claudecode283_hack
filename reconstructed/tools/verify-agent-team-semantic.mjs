// verify-agent-team-semantic.mjs - compare deminified/ vs deminified-agent-team/
// on strings, numeric literals, property keys, and AST node-type counts.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = _traverse.default ?? _traverse;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const A_DIR = path.join(ROOT, "deminified");
const B_DIR = path.join(ROOT, "deminified-agent-team");
const FILES = ["m1578_0xdd0c821.js", "m0511_0xcd25473.js", "m0527_0xcd4a41f.js"];
const OPTS = {
  sourceType: "module",
  allowAwaitOutsideFunction: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  allowUndeclaredExports: true,
  allowImportExportEverywhere: true,
};

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
    if (a !== b) {
      bad++;
      if (bad <= 20) console.log(`  ${label} DIFF ${JSON.stringify(k)}: ${a} -> ${b}`);
    }
  }
  console.log(`${label}: ${bad} differing keys`);
  return bad;
}

let total = 0;
for (const file of FILES) {
  console.log(`== ${file} ==`);
  const pa = profile(path.join(A_DIR, file));
  const pb = profile(path.join(B_DIR, file));
  total += diff(pa.nodeTypes, pb.nodeTypes, "nodeType");
  total += diff(pa.strings, pb.strings, "string/num literal");
  total += diff(pa.props, pb.props, "property/class key");
}
console.log("TOTAL differing keys:", total);
if (total !== 0) process.exitCode = 1;