// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var l = String.fromCharCode(0),
  p = /^\.[0-9a-f]{16}\.aside$/;
function ZBt(e) {
  if (e.charCodeAt(0) !== 46) return !1;
  return cK(e).some(item => p.test(item));
}
var g = /(^\.[0-9a-f]{16}\.tmp~?$)|(\.tmp[.~][0-9a-f]{8}$)|(\.purge\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.tmp$)/;
function SUo(e) {
  return cK(e).some(item => g.test(item));
}
function u(e) {
  return typeof e === "string" && /^[. ]+$/.test(e);
}
function jn(e) {
  return !(typeof e !== "string" || e.length === 0 || u(e) || e.includes("/") || e.includes("\\") || e.includes(l) || ZBt(e));
}
function sA(e) {
  return e.length > 0 && e.every(jn);
}
function e1t(e) {
  return cK(e).some(item => item.endsWith(".jsonl"));
}
var t1t = "team";
function cK(e) {
  let n = s.get(e);
  if (n !== void 0) return n;
  let a = Object.freeze(m(e));
  if (s.size >= d) s.clear();
  return s.set(e, a), a;
}
function m(e) {
  let n = e.toLowerCase(),
    a = n.indexOf(":");
  return a === -1 ? [i(n)] : [i(n), i(n.slice(0, a))];
}
var s = new Map(),
  d = 32768;
function i(e) {
  let n = e.length;
  while (n > 0) {
    let a = e.charCodeAt(n - 1);
    if (a !== 46 && a !== 32) break;
    n -= 1;
  }
  return n === e.length ? e : e.slice(0, n);
}
function r(e, n, a) {
  return a === void 0 ? e : {
    ...e,
    [n]: a
  };
}
function transcript(projectKey, sessionId, a, t) {
  let o = r({
    namespace: "transcript",
    projectKey: projectKey,
    sessionId: sessionId
  }, "agentId", a);
  return r(o, "agentRelPath", t);
}
function log(sessionId_2, channel, a) {
  let c = r({
    namespace: "log",
    sessionId: sessionId_2,
    channel: channel
  }, "agentId", a?.agentId);
  return r(c, "runId", a?.runId);
}
var Ae = {
  transcript: transcript,
  journal: (projectKey_2, sessionId_3, agentRelPath) => ({
    namespace: "transcript",
    projectKey: projectKey_2,
    sessionId: sessionId_3,
    agentRelPath: agentRelPath,
    journal: !0
  }),
  sessionJournal: (projectKey_3, sessionId_4, sessionJournal) => ({
    namespace: "transcript",
    projectKey: projectKey_3,
    sessionId: sessionId_4,
    sessionJournal: sessionJournal
  }),
  history: () => ({
    namespace: "history"
  }),
  log: log,
  globalConfig: () => ({
    namespace: "globalConfig"
  }),
  globalConfigCopy: (kind, stamp) => ({
    namespace: "globalConfig",
    kind: kind,
    stamp: stamp
  }),
  userSettings: () => ({
    namespace: "settings",
    layer: "user"
  }),
  projectSettings: projectKey_4 => ({
    namespace: "settings",
    layer: "project",
    projectKey: projectKey_4
  }),
  localSettings: consentRootKey => ({
    namespace: "settings",
    layer: "local",
    consentRootKey: consentRootKey
  }),
  task: (listId, taskId) => ({
    namespace: "task",
    listId: listId,
    taskId: taskId
  }),
  taskListMeta: listId_2 => ({
    namespace: "task",
    listId: listId_2,
    meta: !0
  }),
  taskListHighWaterMark: listId_3 => ({
    namespace: "task",
    listId: listId_3,
    highWaterMark: !0
  }),
  memory: (projectKey_5, relPath) => ({
    namespace: "memory",
    projectKey: projectKey_5,
    relPath: relPath
  }),
  pluginRegistry: file => ({
    namespace: "pluginRegistry",
    file: file
  }),
  marketplaceCache: (marketplace, form) => ({
    namespace: "marketplaceCache",
    marketplace: marketplace,
    form: form
  }),
  marketplaceTree: (marketplace_2, relPath_2) => ({
    namespace: "marketplaceCache",
    marketplace: marketplace_2,
    relPath: relPath_2
  }),
  pluginCache: (marketplace_3, plugin, version, relPath_3) => ({
    namespace: "pluginCache",
    marketplace: marketplace_3,
    plugin: plugin,
    version: version,
    relPath: relPath_3
  }),
  cache: (store, id) => ({
    namespace: "cache",
    store: store,
    id: id
  }),
  paste: id_2 => ({
    namespace: "paste",
    id: id_2
  }),
  state: id_3 => ({
    namespace: "state",
    id: id_3
  }),
  pluginAssetCache: digest => ({
    namespace: "pluginAssetCache",
    digest: digest
  }),
  plan: name => ({
    namespace: "plan",
    name: name
  }),
  daemon: relPath_4 => ({
    namespace: "daemon",
    relPath: relPath_4
  }),
  feedbackDraft: draftId => ({
    namespace: "feedbackDraft",
    draftId: draftId
  }),
  agentMemory: (agentType, relPath_5) => ({
    namespace: "agentMemory",
    layer: "user",
    agentType: agentType,
    relPath: relPath_5
  }),
  identity: () => ({
    namespace: "identity"
  }),
  team: team => ({
    namespace: "team",
    team: team
  }),
  sidecar: (projectKey_6, sessionId_5, relPath_6) => ({
    namespace: "sidecar",
    projectKey: projectKey_6,
    sessionId: sessionId_5,
    relPath: relPath_6
  }),
  mailbox: (team_2, teammate) => ({
    namespace: "mailbox",
    team: team_2,
    teammate: teammate
  }),
  scratch: (sessionId_6, relPath_7) => ({
    namespace: "scratch",
    sessionId: sessionId_6,
    relPath: relPath_7
  }),
  userConfigDir: (dir, relPath_8) => ({
    namespace: "userConfigDir",
    dir: dir,
    relPath: relPath_8
  }),
  fileHistory: (sessionId_7, backupFileName) => ({
    namespace: "fileHistory",
    sessionId: sessionId_7,
    backupFileName: backupFileName
  }),
  job: (jobId, relPath_9) => ({
    namespace: "job",
    jobId: jobId,
    relPath: relPath_9
  }),
  jobTimeline: jobId_2 => ({
    namespace: "jobTimeline",
    jobId: jobId_2
  }),
  recording: (projectKey_7, sessionId_8, stamp_2) => ({
    namespace: "recording",
    projectKey: projectKey_7,
    sessionId: sessionId_8,
    stamp: stamp_2
  }),
  sessionLog: (projectKey_8, n, logName) => ({
    namespace: "sessionLog",
    projectKey: projectKey_8,
    year: n.year,
    month: n.month,
    day: n.day,
    logName: logName
  }),
  jobPins: () => ({
    namespace: "jobsRoot",
    file: "pins"
  }),
  jobDraft: draftKey => ({
    namespace: "jobsRoot",
    draftKey: draftKey
  }),
  session: file_2 => ({
    namespace: "session",
    file: file_2
  }),
  bridgePointer: projectKey_9 => ({
    namespace: "bridgePointer",
    projectKey: projectKey_9
  }),
  sessionAliases: projectKey_10 => ({
    namespace: "sessionAliases",
    projectKey: projectKey_10
  }),
  dirSyncRecord: (projectKey_11, sessionId_9) => ({
    namespace: "dirSyncRecord",
    projectKey: projectKey_11,
    sessionId: sessionId_9
  })
};
function wUo(projectKey_12, sessionId_10) {
  return {
    namespace: "transcript",
    projectKey: projectKey_12,
    sessionId: sessionId_10,
    agentRelPath: []
  };
}
function Shn(e) {
  return JSON.stringify(K(e));
}
function vUo(e, n) {
  return Shn(e) === Shn(n);
}
function K(e) {
  switch (e.namespace) {
    case "transcript":
      return e.journal === !0 ? [e.namespace, e.projectKey, e.sessionId, null, e.agentRelPath, "journal"] : e.sessionJournal !== void 0 ? [e.namespace, e.projectKey, e.sessionId, null, null, e.sessionJournal] : [e.namespace, e.projectKey, e.sessionId, e.agentId ?? null, e.agentRelPath ?? null];
    case "history":
    case "identity":
      return [e.namespace];
    case "globalConfig":
      return "kind" in e ? [e.namespace, e.kind, e.stamp] : [e.namespace];
    case "settings":
      return e.layer === "user" ? [e.namespace, e.layer] : e.layer === "project" ? [e.namespace, e.layer, e.projectKey] : [e.namespace, e.layer, e.consentRootKey];
    case "task":
      return "meta" in e ? [e.namespace, e.listId, e.meta] : "highWaterMark" in e ? [e.namespace, e.listId, ["highWaterMark"]] : [e.namespace, e.listId, e.taskId];
    case "memory":
      return [e.namespace, e.projectKey, e.relPath];
    case "pluginRegistry":
      return [e.namespace, e.file];
    case "marketplaceCache":
      return "relPath" in e ? [e.namespace, e.marketplace, e.relPath] : [e.namespace, e.marketplace, e.form];
    case "pluginCache":
      return [e.namespace, e.marketplace, e.plugin, e.version, e.relPath];
    case "cache":
      return [e.namespace, e.store, e.id];
    case "paste":
      return [e.namespace, e.id];
    case "pluginAssetCache":
      return [e.namespace, e.digest];
    case "state":
      return [e.namespace, e.id];
    case "plan":
      return [e.namespace, e.name];
    case "feedbackDraft":
      return [e.namespace, e.draftId];
    case "agentMemory":
      return [e.namespace, e.layer, e.layer === "user" ? null : e.projectKey, e.agentType, e.relPath];
    case "team":
      return [e.namespace, e.team];
    case "sidecar":
      return [e.namespace, e.projectKey, e.sessionId, e.relPath];
    case "scratch":
      return [e.namespace, e.sessionId, e.relPath];
    case "userConfigDir":
      return [e.namespace, e.dir, e.relPath];
    case "fileHistory":
      return [e.namespace, e.sessionId, e.backupFileName];
    case "job":
      return [e.namespace, e.jobId, e.relPath];
    case "daemon":
      return [e.namespace, e.relPath];
    case "jobsRoot":
      return "file" in e ? [e.namespace, e.file] : [e.namespace, "draft", e.draftKey];
    case "session":
      return [e.namespace, e.file];
    case "bridgePointer":
    case "sessionAliases":
      return [e.namespace, e.projectKey];
    case "dirSyncRecord":
      return [e.namespace, e.projectKey, e.sessionId];
    case "mailbox":
      return [e.namespace, e.team, e.teammate];
    case "log":
      return [e.namespace, e.sessionId, e.channel, e.agentId ?? null, e.runId ?? null];
    case "jobTimeline":
      return [e.namespace, e.jobId];
    case "recording":
      return [e.namespace, e.projectKey, e.sessionId, e.stamp];
    case "sessionLog":
      return [e.namespace, e.projectKey, e.year, e.month, e.day, e.logName];
  }
}
function kUo() {
  return {
    namespace: "bridgeSpawn"
  };
}
function EUo(marketplace_4, relPath_10) {
  return relPath_10 === void 0 || relPath_10.length === 0 ? {
    namespace: "marketplaceCache",
    marketplace: marketplace_4
  } : {
    namespace: "marketplaceCache",
    marketplace: marketplace_4,
    relPath: relPath_10
  };
}
export { ZBt, SUo, jn, sA, e1t, t1t, cK, Ae, wUo, Shn, vUo, kUo, EUo };