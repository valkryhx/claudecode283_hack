// rewind-rename.mjs - scope-aware rename of the rewind subsystem inside a big module.
//
// m0357 (4.1MB) was skipped by deminify's ">1MB skip" rule, so identifiers stay mangled.
// This script renames ONLY rewind-related bindings, using:
//   - authoritative names: m1497 export table (`export { Jse as reduceFileHistoryState, ... }`)
//   - semantic inference: internal helpers derived from call sites / strings / behavior
// Safety: Babel binding-level scope.rename renames only within the binding's scope, so
//   same-named bindings in other scopes are untouched. Output is re-parsed; on failure, fall back.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";

const traverse = _traverse.default ?? _traverse;
const generate = _generate.default ?? _generate;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "deminified", "m0357_0xc63ba04.js");
const OUT = path.join(ROOT, "deminified-rewind", "m0357_0xc63ba04.js");
const REPORT = path.join(ROOT, "rewind-rename-report.json");

const PARSE_OPTS = {
  sourceType: "module",
  allowAwaitOutsideFunction: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  allowUndeclaredExports: true,
  allowImportExportEverywhere: true,
  errorRecovery: false,
  plugins: [],
};
const GEN_OPTS = { comments: true, compact: false, concise: false, retainLines: false, jsescOption: { minimal: true } };

const MAP = {
  Jse: "reduceFileHistoryState",
  pR:  "fileHistoryEnabled",
  JGe: "fileHistoryTrackEdit",
  kfe: "fileHistoryMakeSnapshot",
  SQt: "RewindNoFilesRestoredError",
  fRt: "fileHistoryRewind",
  mRt: "fileHistoryCanRestore",
  Mnt: "fileHistoryGetDiffStats",
  gRt: "fileHistoryRestoreStateFromLog",
  wQt: "copyFileHistoryForResume",
  Isr: "applyFileHistoryRewind",
  Bsr: "restoreFileFromBackup",
  dXt: "shouldRestoreFile",
  Lsr: "makeBackupFileName",
  $R:  "resolveBackupPath",
  uXt: "createFileBackup",
  $sr: "checkPathLinkSafety",
  Fsr: "getFileHistoryEntry",
  Psr: "pruneSnapshotBackups",
  cue: "normalizeTrackedPath",
};

const src = fs.readFileSync(SRC, "utf8").replace(/\u0000/g, " ");
const ast = parse(src, PARSE_OPTS);

const renamed = [], skipped = [];
for (const [oldName, newName] of Object.entries(MAP)) {
  const bindings = [];
  traverse(ast, {
    Program(p) {
      const b = p.scope.getBinding(oldName);
      if (b) bindings.push(b);
    },
  });
  if (bindings.length === 0) { skipped.push({ old: oldName, new: newName, why: "no-binding" }); continue; }
  for (const b of bindings) {
    const existing = b.scope.getBinding(newName);
    if (existing && existing !== b) { skipped.push({ old: oldName, new: newName, why: "name-collision-in-scope" }); continue; }
    try {
      b.scope.rename(oldName, newName);
      renamed.push({ old: oldName, new: newName });
    } catch (e) {
      skipped.push({ old: oldName, new: newName, why: "rename: " + e.message });
    }
  }
}

const out = generate(ast, GEN_OPTS, src).code;
let fellBack = false;
try { parse(out, PARSE_OPTS); } catch (e) { fellBack = true; }

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, fellBack ? src : out);
fs.writeFileSync(REPORT, JSON.stringify({ src: SRC, out: OUT, inBytes: src.length, outBytes: (fellBack ? src : out).length, renamed, skipped, fellBack }, null, 2));
console.log("rewind-rename: renamed=" + renamed.length + " skipped=" + skipped.length + " fellBack=" + fellBack);
for (const s of skipped) console.log("  skip", s.old, "->", s.new, s.why);

