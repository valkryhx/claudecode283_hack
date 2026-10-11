// hooks-rename.mjs - focused scope-aware rename of the hooks subsystem.
//
// Input : reconstructed/deminified/{m0357, m0247, m0094, m0052}
// Output: reconstructed/deminified-hooks/{same files}
//
// Why these four:
//   m0357 (5.4MB) and m0247 (1.3MB) were SKIPPED by deminify's ">1MB skip" rule,
//   so their hooks identifiers are still fully mangled. m0094 / m0052 carry the
//   input / config schemas and are deminified, but their hooks bindings are still
//   short names (v, Dq, kq, ...).
//
// Safety: Babel binding-level scope.rename. Only the exact binding in its scope is
//   renamed; strings, property keys, control flow and the exported API surface stay
//   unchanged (exported bindings keep their exported name: `export { newName as old }`).
//   Every output is re-parsed; on failure the original source is copied verbatim.
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
const OUT_DIR = path.join(ROOT, "deminified-hooks");
const REPORT = path.join(ROOT, "hooks-rename-report.json");

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

// --- m0357: the execution engine -------------------------------------------------
const M0357 = {
  // dispatch + generators
  kE: "dispatchHookEvent",
  WLt: "runClassicHooksGenerator",
  RLt: "runHookGenerators",
  NNn: "filterAgentContextHookResult",
  HNn: "enforceConfinedSessionHookResult",
  Xxo: "executeHookEvent",
  Yxo: "runFunctionHookChain",
  BA: "runClassicHooks",
  FNn: "resolveHookCwd",
  Vbr: "runDeviceHook",
  CLt: "shouldYieldBeforeHooks",
  jLt: "formatHookName",
  s0: "runCommandHook",
  // matching
  HLt: "matchHooks",
  d0: "collectHookConfigs",
  OLt: "getMatcherQuery",
  GIe: "matcherMatches",
  _xo: "parseMatcherNameSet",
  DLt: "getMatcherFamilyNames",
  Cxo: "getMatcherFamilyParent",
  jIe: "normalizeMatcherQuery",
  xxo: "buildIfConditionEvaluator",
  LLt: "getToolPermissionMatcherInfo",
  Txo: "warnMatcherMatchesNoTool",
  Kbr: "hookMatcherMatchesInput",
  qbr: "toolInputMatchesPermissionRule",
  Bmo: "hasMatchingHookForTool",
  mR: "hookPatternForEvent",
  PAt: "hasRegisteredHookForEvent",
  Lxo: "sameHookDefinition",
  Nxo: "findHookDefinitionOwner",
  Fxo: "isProjectConfiguredHook",
  $Lt: "isInternalCallbackHook",
  t0: "hookDedupKey",
  Exo: "MATCHER_NAME_SET_REGEX",
  WIe: "TOOL_HOOK_EVENTS",
  $Re: "MCP_MATCHER_WARN_EVENTS",
  kxo: "isMcpMatcherName",
  // output parsing
  hq: "interpretHookOutput",
  $Ve: "parseHookOutput",
  MLt: "getHookResultStdout",
  Z7t: "augmentHookValidationError",
  eZt: "parseHttpHookBody",
  MNn: "isAsyncMarkerOutput",
  ZRo: "isJsonLinesHookOutput",
  hxo: "mergeResultStdout",
  vLt: "hookRanByContract",
  ILt: "scriptHookRan",
  HIe: "makeScriptHookBlockingError",
  pre: "describeHookExit",
  DNn: "isBenignMissingFileError",
  ure: "emitHookTerminalSequence",
  OSe: "sanitizeTerminalSequence",
  // hook-type runners
  jOt: "runPromptHook",
  tDt: "runAgentHook",
  K7t: "runHttpHook",
  Zxo: "runFunctionHook",
  Tvn: "runFunctionHookChainInternal",
  Pvn: "runSessionFunctionHooks",
  bQe: "hasFunctionHook",
  v0n: "isFunctionHookEvent",
  cSe: "classicHookName",
  x9: "classicHookPattern",
  yWo: "isClassicHookLoaded",
  $Qe: "makeManagedOrCoreHookHandler",
  Avn: "mergeFunctionHookResults",
  O9: "functionHookResultToBlock",
  rL: "lastNonEmptyLine",
  Cvn: "lastLine",
  FQe: "makeBlockedHookResult",
  BQe: "makeSucceededHookResult",
  Rdo: "isHookAttributionKind",
  SMe: "truncateWithBudget",
  Bvn: "formatAttributionLabel",
  Nvn: "HOOK_ATTRIBUTION_KINDS",
  Fvn: "ATTRIBUTION_MIN_WIDTH",
  $vn: "ATTRIBUTION_MAX_WIDTH",
  // cloud / served calls
  Axo: "canForwardHook",
  Pxo: "makeHeldModelHookResult",
  Bxo: "makeHeldServedCallHookResult",
  NLt: "recordHeldHookTelemetry",
  Mxo: "buildServedCallReach",
  Oxo: "judgeServedCallHook",
  Uxo: "rewriteBlockingErrorCommand",
  Hxo: "refuseUnverifiableServedCallHook",
  // progress / async
  OJe: "AsyncHookRegistry",
  DJe: "registerAsyncHook",
  LSe: "deliverAsyncHookResponse",
  LJe: "parseAsyncHookResponse",
  W9: "emitHookStarted",
  zTn: "emitHookProgress",
  G9: "startHookProgressPolling",
  ec: "emitHookResponse",
  j9: "shouldEmitHookSystemMessage",
  $do: "setAllHookEventsEnabled",
  q9: "warnUnrecognizedHookOutputKeys",
  IJe: "validateAsyncHookOutput",
  rW: "describeJsonValueType",
  PJe: "HookEventsSettings",
  GTn: "hookEventsSettingsStore",
  MJe: "getHookEventsSettings",
  WTn: "ALWAYS_EMITTED_HOOK_EVENTS",
  qTn: "asyncHookRegistryStore",
  sW: "getAsyncHookRegistry",
  wLt: "registerBackgroundHookProcess",
  // terminal-sequence writer
  AJe: "TerminalSequenceWriter",
  jTn: "terminalSequenceWriterStore",
  H9: "getTerminalSequenceWriter",
  DSe: "writeTerminalSequence",
  nyr: "setTerminalSequenceWriter",
  ryr: "unregisterTerminalSequenceWriter",
  // constants / misc
  Na: "DEFAULT_HOOK_TIMEOUT_MS",
  Kxo: "HOOK_EVENTS_NEEDING_YIELD",
  Aie: "isWorkspaceUntrusted",
  sxo: "pluginDirectoryExists",
  Qxo: "WARNED_HOOK_CWD_FALLBACKS",
  $xo: "isAnchorableHookPath",
};

// --- m0247: output schema + sources + event classification -----------------------
const M0247 = {
  P2: "HookOutputSchema",
  P9: "HookOutputOrAsyncMarkerSchema",
  O2: "HookPermissionDecisionSchema",
  tI: "isSyncHookOutput",
  Jme: "isAsyncHookOutputMarker",
  cy: "HOOK_SOURCES",
  dvo: "collectAllHookConfigs",
  A2: "iterateSettingsSources",
  hT: "collectNonFunctionHooks",
  jIt: "HOOK_EVENTS_WITHOUT_TOOL_CGROUP",
  LKe: "hookToolCgroupCategory",
  D2: "LOCAL_BLOCKING_HOOK_EVENTS",
  I2: "LOCAL_BLOCKING_HOOK_EVENT_SET",
  L2: "HOOK_EVENT_EXECUTION_LOCATION",
  EV: "isLocalBlockingHookEvent",
  Fwo: "getHookEventExecutionLocation",
  N2: "FILE_EDIT_TOOL_NAMES",
  _T: "FILE_EDIT_TOOL_SET",
  Xh: "isFileEditTool",
  HLe: "hasMcpHookForServer",
  T2: "MCP_TOOL_CGROUP_MAX",
  yrn: "trackMcpServerPid",
  Hwo: "releaseMcpServerAtHookFire",
  x2: "releaseStaleMcpServers",
  qh: "pruneDeadMcpServers",
  uvo: "sortHookEventsBySource",
  XIt: "describeHookSource",
  Frn: "hookSourceHeader",
  lRr: "hookSourceInline",
  zM: "formatHookCommand",
  aRr: "hookDisplayInfo",
  QA: "hookStatusMessage",
  jK: "HOOK_PATH_PLACEHOLDERS",
  lvo: "anchorScriptHookFile",
  cvo: "expandHookPathPlaceholders",
  iRr: "unsupportedScriptHook",
  avo: "SCRIPT_HOOK_ACK_ENV",
  dSe: "SCRIPT_HOOK_MAX_BYTES",
  _Bn: "formatScriptHookPreview",
  GL: "PermissionUpdateSchema",
  Ta: "PermissionUpdateDestinationSchema",
  $u: "PermissionBehaviorSchema",
  Hu: "PermissionRuleSchema",
};

// --- m0094: input schema ---------------------------------------------------------
const M0094 = {
  Iq: "HOOK_EVENT_NAMES",
  DR: "HookEventNameSchema",
  v: "HookInputBaseSchema",
  Dq: "PreToolUseHookInputSchema",
  kq: "PermissionRequestHookInputSchema",
  Lq: "PostToolUseHookInputSchema",
  xq: "PostToolUseFailureHookInputSchema",
  Vq: "PostToolBatchHookInputSchema",
  Gq: "PermissionDeniedHookInputSchema",
  jq: "NotificationHookInputSchema",
  Bq: "UserPromptSubmitHookInputSchema",
  Hq: "UserPromptExpansionHookInputSchema",
  qq: "SessionStartHookInputSchema",
  Kq: "SetupHookInputSchema",
  Fq: "StopHookInputSchema",
  Yq: "StopFailureHookInputSchema",
  Wq: "SubagentStartHookInputSchema",
  $q: "SubagentStopHookInputSchema",
  Xq: "PreCompactHookInputSchema",
  Qq: "PostCompactHookInputSchema",
  f0: "SessionEndHookInputSchema",
  l0: "ConfigChangeHookInputSchema",
  u0: "InstructionsLoadedHookInputSchema",
  h0: "WorktreeCreateHookInputSchema",
  p0: "WorktreeRemoveHookInputSchema",
  _0: "CwdChangedHookInputSchema",
  m0: "FileChangedHookInputSchema",
  E0: "DirectoryAddedHookInputSchema",
  g0: "MessageDisplayHookInputSchema",
  M4n: "HookInputSchema",
  b0: "AsyncHookOutputMarkerSchema",
  rF: "SdkHookConfigSchema",
  xe: "McpServerInfoSchema",
  kR: "BackgroundTaskSchema",
  LR: "SessionCronSchema",
  ne: "PermissionModeSchema",
};

// --- m0052: config schema --------------------------------------------------------
const M0052 = {
  Ru: "defineHookSchemas",
  xAe: "HookSchema",
  on: "HookMatcherSchema",
  _Y: "SettingsHooksSchema",
  sn: "knownHookTypes",
  cFo: "validateScriptHookFilePath",
  Mm: "HOOK_EVENT_NAMES",
  lFo: "HOOK_OUTPUT_MAX_BYTES",
};

const FILES = [
  { id: "m0357", file: "m0357_0xc63ba04.js", map: M0357 },
  { id: "m0247", file: "m0247_0xc49fe84.js", map: M0247 },
  { id: "m0094", file: "m0094_0xc0d9ae5.js", map: M0094 },
  { id: "m0052", file: "m0052_0xbfaae5d.js", map: M0052 },
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
      Program(p) { binding = p.scope.getBinding(oldName) || binding; },
    });
    if (!binding) { skipped.push({ old: oldName, new: newName, why: "no-program-binding" }); continue; }
    const existing = binding.scope.getBinding(newName);
    if (existing && existing !== binding) { skipped.push({ old: oldName, new: newName, why: "name-collision-in-scope" }); continue; }
    try {
      binding.scope.rename(oldName, newName);
      renamed.push({ old: oldName, new: newName });
    } catch (e) {
      skipped.push({ old: oldName, new: newName, why: "rename: " + e.message });
    }
  }

  const out = generate(ast, GEN_OPTS, src).code;
  let fellBack = false;
  try { parse(out, PARSE_OPTS); } catch { fellBack = true; }
  fs.writeFileSync(outPath, fellBack ? src : out);
  report.files.push({
    id: spec.id, src: srcPath, out: outPath,
    inBytes: src.length, outBytes: (fellBack ? src : out).length,
    renamed, skipped, fellBack,
  });
  console.log(`${spec.id}: renamed=${renamed.length} skipped=${skipped.length} fellBack=${fellBack}`);
}

fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));
console.log("report ->", REPORT);
for (const f of report.files) for (const s of f.skipped) console.log(`  skip ${s.old} -> ${s.new}: ${s.why}`);
