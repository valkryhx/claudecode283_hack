// agent-team-rename.mjs - focused scope-aware rename of the agent-team subsystem.
//
// Input : reconstructed/deminified/{m1578,m0511,m0527}
// Output: reconstructed/deminified-agent-team/{same files}
//
// Only binding identifiers are renamed. Strings, property keys, export names,
// control flow, and module API surface stay unchanged. Every output is reparsed;
// on parse failure the original source is copied verbatim.
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
const SRC_DIR = path.join(ROOT, "deminified");
const OUT_DIR = path.join(ROOT, "deminified-agent-team");
const REPORT = path.join(ROOT, "agent-team-rename-report.json");

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

const FILES = [
  {
    id: "m1578",
    file: "m1578_0xdd0c821.js",
    map: {
      Ot: "spawnTeammate",
      ge: "handleSpawn",
      j: "reserveTeammateIdentity",
      pe: "sanitizeTeammateName",
      ce: "handleSpawnSplitPane",
      ue: "handleSpawnSplitPaneAlt",
      z: "handleSpawnInProcess",
      te: "registerInProcessTeammateTask",
      K: "updateTeammatePane",
      _e: "showTeammateAutoFallback",
      ne: "TeammateFallbackNotice",
    },
  },
  {
    id: "m0511",
    file: "m0511_0xcd25473.js",
    map: {
      tool_2: "agentTool",
      Ftr: "getAgentToolInputSchema",
      Wkn: "validateAgentToolInput",
      name_2: "agentToolName",
    },
  },
  {
    id: "m0527",
    file: "m0527_0xcd4a41f.js",
    map: {
      Hbt: "inProcessTeammateTask",
      Oqt: "killInProcessTeammate",
      Gue: "findTaskByAgentId",
      KJr: "findTaskByAgentName",
      YJr: "getRunningAgentIds",
      eWe: "getTeammateTasks",
      p: "PANE_TEARDOWN_TIMEOUT_MS",
    },
  },
];

fs.mkdirSync(OUT_DIR, { recursive: true });
const report = { generatedAt: new Date().toISOString(), files: [] };

for (const spec of FILES) {
  const srcPath = path.join(SRC_DIR, spec.file);
  const outPath = path.join(OUT_DIR, spec.file);
  const src = fs.readFileSync(srcPath, "utf8").replace(/\u0000/g, " ");
  const ast = parse(src, PARSE_OPTS);
  const renamed = [];
  const skipped = [];

  for (const [oldName, newName] of Object.entries(spec.map)) {
    let binding = null;
    traverse(ast, {
      Program(p) {
        binding = p.scope.getBinding(oldName) || binding;
      },
    });
    if (!binding) {
      skipped.push({ old: oldName, new: newName, why: "no-program-binding" });
      continue;
    }
    const existing = binding.scope.getBinding(newName);
    if (existing && existing !== binding) {
      skipped.push({ old: oldName, new: newName, why: "name-collision-in-scope" });
      continue;
    }
    try {
      binding.scope.rename(oldName, newName);
      renamed.push({ old: oldName, new: newName });
    } catch (e) {
      skipped.push({ old: oldName, new: newName, why: "rename: " + e.message });
    }
  }

  const out = generate(ast, GEN_OPTS, src).code;
  let fellBack = false;
  try {
    parse(out, PARSE_OPTS);
  } catch {
    fellBack = true;
  }
  fs.writeFileSync(outPath, fellBack ? src : out);
  report.files.push({
    id: spec.id,
    src: srcPath,
    out: outPath,
    inBytes: src.length,
    outBytes: (fellBack ? src : out).length,
    renamed,
    skipped,
    fellBack,
  });
}

fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));
for (const f of report.files) {
  console.log(`${f.id}: renamed=${f.renamed.length} skipped=${f.skipped.length} fellBack=${f.fellBack}`);
  for (const s of f.skipped) console.log(`  skip ${s.old} -> ${s.new}: ${s.why}`);
}