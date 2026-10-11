// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { dT, Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { We, P, l, v, ao, B, Pf } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { q, vs, Nt, j, Y, we, V1t, _H, Yn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { xn, Dn, sM, _i, Wi, bH, kl, Km } from "B:/~BUN/root/chunk-54p0h65d.js";
import { zg, xf, Gu, gt, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { XS, nT, Bo } from "B:/~BUN/root/chunk-2swveyqa.js";
import { mn, vb, No, tt, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { pg, oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { sc, I$ } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { WBt, mu, Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { zu, nS, gu, qUe, emt } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { Iy as scratchRoot_2, nhn } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { jn, sA, e1t, cK, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Ho, Ro } from "B:/~BUN/root/chunk-y72v2pst.js";
import { Ks } from "B:/~BUN/root/chunk-1652axk8.js";
import { pd } from "B:/~BUN/root/chunk-tndjj29v.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
import { ji, R1t, A1t, CBo } from "B:/~BUN/root/chunk-mmkravm0.js";
import { closeSync as zo, constants as Xo, fstatSync as qo, lstatSync as Jo, openSync as Zo, readlinkSync as Qo, readSync as es, statSync as ts, unwatchFile as re } from "fs";
import { lstat as ns, readdir as rs, readFile as Re, realpath as os, stat as ss } from "fs/promises";
import * as G from "fs/promises";
import { randomUUID as Or } from "crypto";
import { constants as vt } from "fs";
import { copyFile as Nr, mkdir as Mr, mkdtemp as Br, open as Kr, readdir as jt, readFile as Gr, rm as Hr } from "fs/promises";
import { basename as $r, dirname as Ur, join as J, win32 as At } from "path";
var T$o = 10485760;
var qAe = 512000;
var Sn = {
    imageMaxRawBytes: 307200,
    wholePdfMaxRawBytes: 0,
    pdfMaxPagesPerRead: 3
  },
  En = {
    imageMaxRawBytes: 512000,
    wholePdfMaxRawBytes: 2500000,
    pdfMaxPagesPerRead: 6
  };
function jYn(e) {
  return e === "session" ? En : Sn;
}
var Be = 28;
function WYn(e, n) {
  if (e <= 0 || n <= 0) return 0;
  return Math.ceil(e / Be) * Math.ceil(n / Be);
}
var Vx = {
    maxWidth: 2000,
    maxHeight: 2000,
    maxBase64Size: 5242880,
    targetRawSize: 3932160
  },
  OBt = 33554432,
  Xgn = 20971520,
  C$o = 100,
  R$o = 3145728,
  Jgn = 104857600,
  KAe = 20,
  Qgn = 10,
  A$o = 100,
  x$o = 600,
  P$o = 20,
  I$o = 78643200,
  O$o = OBt - 8388608,
  M$o = 10485760,
  zYn = 64000;
import { basename as vr, dirname as Ar, isAbsolute as Fr, join as xe, relative as Dr, sep as It } from "path";
import { basename as _t, dirname as Pt } from "path";
import { constants as Ke } from "fs";
import { link as Os, lstat as le, open as $e, readlink as Cn, realpath as vn, stat as Ns, unlink as Ms } from "fs/promises";
import { basename as Gs, dirname as Ge, isAbsolute as Hs, join as $s, parse as Us } from "path";
var _n = new Set(["ENOENT", "ENOTDIR"]),
  Pn = new Set(["EAGAIN", "EBUSY", "EMFILE", "ENFILE", "ENOSPC", "EDQUOT", "ENOMEM"]);
function In(e) {
  let n = v(e);
  return n !== void 0 && _n.has(n);
}
function Vgn(e, n) {
  return v(e) === n;
}
function qgn(e) {
  let n = v(e);
  return n !== void 0 && Pn.has(n);
}
function kn(error) {
  return In(error) ? {
    kind: "absent"
  } : {
    kind: "fs",
    error: error
  };
}
async function L(e) {
  try {
    return zg(await e);
  } catch (error) {
    return xf(kn(error));
  }
}
var NYn = 384;
async function An(e, n, r = NYn) {
  let o = await L(le(e));
  if (!o.ok && o.error.kind !== "absent") return xf(o.error);
  if (o.ok && !o.value.isFile()) return xf(Ln(e, o.value));
  return L($e(e, n | mu, r));
}
async function jI(e) {
  if (mu === 0) return An(e, Ke.O_RDONLY);
  return Tn(e, await L($e(e, Ke.O_RDONLY | mu)));
}
function Tn(e, n) {
  return !n.ok && n.error.kind === "fs" && Vgn(n.error.error, "ELOOP") ? xf({
    kind: "fs",
    error: Ue(e, "ELOOP")
  }) : n;
}
function Ue(path, code) {
  return Object.assign(On(code), {
    code: code,
    path: path
  });
}
function Ln(e, n) {
  return {
    kind: "fs",
    error: Ue(e, n.isSymbolicLink() ? "ELOOP" : "ENXIO")
  };
}
function On(e) {
  switch (e) {
    case "ELOOP":
      return Error("refusing a symlinked path");
    case "ENXIO":
      return Error("refusing a non-regular file");
    case "EISDIR":
      return Error("refusing a directory at the leaf");
    case "ENOTDIR":
      return Error("refusing a non-directory node on a write path");
    case "EFBIG":
      return Error("refusing a file over the size cap");
    case R1t:
      return Error("refusing a value that has a second name (hard link)");
    case A1t:
      return Error("refusing a value whose opened object is no longer at its key");
    case CBo:
      return Error("refusing a hardened read the host cannot verify");
  }
}
async function y$o(e, n) {
  let r = await Bn();
  if (!r.ok) return r;
  if (r.value) {
    let y = await L(Cn(`/proc/self/fd/${e.fd}`));
    if (y.ok) return zg(!y.value.endsWith(" (deleted)") && y.value === n);
    if (y.error.kind === "fs" && qgn(y.error.error)) return y;
    return y.error.kind === "fs" && Vgn(y.error.error, "ENAMETOOLONG") ? zg(!1) : zg("unavailable");
  }
  let [o, s] = await Promise.all([L(le(n, {
    bigint: !0
  })), L(e.stat({
    bigint: !0
  }))]);
  if (!s.ok) return s;
  let i = He(o, s.value);
  if (!i.ok || i.value !== !0) return i;
  let a = await L(vn(Ge(n)));
  if (!a.ok) return a.error.kind === "absent" ? zg(!1) : a;
  if (a.value !== Ge(n)) return zg(!1);
  let u = await L(le(n, {
      bigint: !0
    })),
    f = He(u, s.value);
  if (!f.ok || f.value !== !0) return f;
  return o.ok && o.value.nlink > 1n || u.ok && u.value.nlink > 1n || s.value.nlink > 1n ? zg("otherNames") : zg(!0);
}
function He(e, n) {
  if (!e.ok) return e.error.kind === "absent" ? zg(!1) : e;
  if (!e.value.isFile()) return zg(!1);
  if (!HYn(n.ino) || !HYn(e.value.ino) || n.nlink === 0n || e.value.nlink === 0n) return zg("unavailable");
  return zg(e.value.ino === n.ino && e.value.dev === n.dev);
}
class Ye {
  available = void 0;
  probing = void 0;
  procUnreadableLogged = !1;
}
var Nn = new q(() => new Ye());
function Mn() {
  return Nn.of(j().host);
}
async function Bn() {
  let e = Mn();
  if (e.available !== void 0) return zg(e.available);
  return e.available = !1, zg(!1);
}
function HYn(e) {
  return e !== 0n && e !== -1n && e !== 0xffffffffffffffffn;
}
var _$o = "LinkMisdirected",
  b$o = "LinkUnverified";
function Kn(e) {
  return ji(e, "expected a segment that is not empty or made only of dots and spaces, with no path separator, NUL or set-aside shape");
}
function em(e) {
  if (typeof e !== "object" || e === null) return ji("key", "expected a key object");
  let n = Jn(e);
  if (n !== void 0) return n;
  let r = _r(e);
  if (r === void 0) return ji("key", `${e.namespace} is not a storage namespace`);
  return Xe("key", r);
}
function Xe(e, n) {
  for (let [r, o, s] of n) {
    let i = `${e}.${r}`;
    if (o === void 0) {
      if (s !== "optional") return ji(i, "required");
    } else if (Gn(r)) {
      if (!(e === "scope" && r === "agentRelPath" && Array.isArray(o) && o.length === 0) && (!Array.isArray(o) || !sA(o))) return ji(i, "expected a non-empty array of segments, none empty or made only of dots and spaces, with no path separator, NUL or set-aside shape");
    } else if (typeof o !== "string" || !jn(o)) return Kn(i);
  }
  return;
}
function Gn(e) {
  return e === "relPath" || e === "agentRelPath";
}
var qe = ["commands", "agents", "output-styles", "skills", "workflows", "routines", "themes", "rules", "session-env", "uploads", "mcp-skill-archives", "usage-data", "mcp-discovery-cache"];
var Je = new Set(qe),
  Qe = `must be one of the userConfigDir directory names (${qe.join(", ")})`,
  et = ["installed", "marketplaces", "flagged", "catalog", "inUseSweep"];
var Hn = new Set(et),
  $n = `must be one of the pluginRegistry files (${et.join(", ")})`,
  nt = ["manifest", "catalog"];
var Un = new Set(nt),
  Wn = `must be one of the marketplaceCache forms (${nt.join(", ")})`;
var rt = ["world"];
var Vn = new Set(rt),
  zn = `must be one of the session journal names (${rt.join(", ")})`;
function Xn(e) {
  return Vn.has(e);
}
function qn(e) {
  return typeof e === "string" && /^[0-9a-f]{64}$/.test(e);
}
function Jn(e) {
  if (e.namespace === "transcript") return er(e);
  if (e.namespace === "pluginAssetCache" && !qn(e.digest)) return ji("key.digest", "must be a SHA-256 digest: 64 lowercase hexadecimal characters");
  if (e.namespace === "globalConfig" && "kind" in e) {
    if (!at(e.kind)) return ji("key.kind", it);
    if (typeof e.stamp !== "string") return ji("key.stamp", "a recovery copy key carries its stamp");
  }
  if (e.namespace === "task") return gr(e);
  if (e.namespace === "sidecar") {
    let n = de("key.sessionId", e.sessionId);
    if (n !== void 0) return n;
    if (fe(e.relPath)) return ji("key.relPath", ne);
    return dt(e.relPath) ? ji("key.relPath", lt) : void 0;
  }
  if (e.namespace === "recording") return de("key.sessionId", e.sessionId) ?? (ut(e.stamp) ? void 0 : ji("key.stamp", nr));
  if (e.namespace === "jobsRoot") return mr(e);
  if (e.namespace === "userConfigDir" && !Je.has(e.dir)) return ji("key.dir", Qe);
  if (e.namespace === "fileHistory") return Zn(e);
  if (e.namespace === "settings" && !fr(e.layer)) return ji("key.layer", "must be user, project or local");
  if (e.namespace === "log") return pr(e);
  if (e.namespace === "job" && Et(e.relPath)) return ji("key.relPath", St);
  if (e.namespace === "sessionLog") return wt("key", e) ?? (Sr(e.logName) ? void 0 : ji("key.logName", "must be the session-log stem <sessionId8>[-<title-slug>]: up to eight word characters, then lower-case a-z / 0-9 runs joined by single hyphens; not a bare device name"));
  if (e.namespace === "pluginRegistry" && !Hn.has(e.file)) return ji("key.file", $n);
  if (e.namespace === "marketplaceCache") {
    if (!("relPath" in e)) return Un.has(e.form) ? void 0 : ji("key.form", Wn);
    return e.form === void 0 ? void 0 : ji("key.form", "a tree file key carries relPath, not form");
  }
  if (e.namespace !== "agentMemory") return;
  if (!ot(e.layer)) return ji("key.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e) return ji("key.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string") return ji("key.projectKey", "required for the project and local layers");
  return typeof e.agentType === "string" ? void 0 : ji("key.agentType", "an agent memory key names its agent");
}
function Zn(e) {
  return typeof e.backupFileName !== "string" || !emt.test(e.backupFileName) ? ji("key.backupFileName", "must be a backup file name the engine has ever written (hex hash @v version)") : void 0;
}
function ot(e) {
  return e === "user" || e === "project" || e === "local";
}
var st = ["backup", "corrupted"];
var Qn = new Set(st),
  it = `must be one of the global-config copy kinds (${st.join(", ")})`;
function at(e) {
  return Qn.has(e);
}
function er(e) {
  let n = de("key.sessionId", e.sessionId);
  if (n !== void 0) return n;
  if (fe(e.agentRelPath)) return ji("key.agentRelPath", ne);
  if ("sessionJournal" in e) {
    if (typeof e.sessionJournal !== "string" || !Xn(e.sessionJournal)) return ji("key.sessionJournal", zn);
    return e.agentId === void 0 && e.agentRelPath === void 0 && !("journal" in e) ? void 0 : ji("key.sessionJournal", "a session journal key names the session's own journal: no agentId, agentRelPath or run journal");
  }
  if ("journal" in e) {
    if (e.journal !== !0) return ji("key.journal", "must be true");
    if (!Array.isArray(e.agentRelPath)) return ji("key.agentRelPath", "a run journal key carries its run directory");
    return e.agentId === void 0 ? void 0 : ji("key.agentId", "a transcript key names an agent transcript or the run journal, never both");
  }
  return e.agentRelPath !== void 0 && e.agentId === void 0 ? ji("key.agentRelPath", "requires agentId or journal") : void 0;
}
var gde = "cloud-snapshots",
  W8e = "side.git",
  S$o = "archive-sync",
  Kgn = "folder-sync",
  ct = new Set(["memory", "tiny_memory", "bagel", gde, "bridge-pointer.json", ".session-aliases"]),
  tr = /^[0-9]{1,16}$/,
  nr = "must be the recording stamp: 1 to 16 decimal digits (epoch milliseconds)",
  ue = ".cast",
  lt = `<stamp>${ue} inside a session's folder is that session's terminal recording stream: address it as keys.recording(projectKey, sessionId, stamp)`;
function ut(e) {
  return typeof e === "string" && tr.test(e);
}
function dt(e) {
  return Array.isArray(e) && typeof e[0] === "string" && cK(e[0]).some(item => PWr(item) !== void 0);
}
function PWr(e) {
  if (!e.endsWith(ue)) return;
  let n = e.slice(0, -ue.length);
  return ut(n) ? n : void 0;
}
var ft = [".ccr-tip.json", ".precompact.json", ue],
  rr = `must not end with ${ft.join(", ")}: those name a session's project-level sibling files`;
function pt(e) {
  return cK(e).some(item => ft.some(r => item.endsWith(r)));
}
var FYn = ".dir-sync.json",
  or = `must not end with ${FYn}: that names a cloud session's directory-sync record at the project level`;
function sr(e) {
  return cK(e).some(item => item.endsWith(FYn));
}
var ir = `${[...ct].join(", ")} are reserved: they name project-level entries, not sessions`;
function mt(e) {
  return cK(e).some(item => ct.has(item));
}
function w$o(e) {
  return !mt(e) && !e1t(e) && !pt(e);
}
function de(e, n) {
  if (typeof n !== "string") return;
  if (mt(n)) return ji(e, ir);
  if (pt(n)) return ji(e, rr);
  if (sr(n)) return ji(e, or);
  return e1t(n) ? ji(e, ne) : void 0;
}
var ar = ".meta.json",
  cr = ".meta is reserved for the list metadata key, under every spelling that opens its file";
function ur(e) {
  return dr(`${e}.json`);
}
function dr(e) {
  return cK(e).includes(ar);
}
var ne = "names a .jsonl stream, which only a transcript key addresses";
function fe(e) {
  return Array.isArray(e) && e.some(item => typeof item === "string" && e1t(item));
}
function fr(e) {
  return e === "user" || e === "project" || e === "local";
}
var ht = "must be debug, telemetry or apiDump";
function bt(e) {
  return e === "debug" || e === "telemetry" || e === "apiDump";
}
function pr(e) {
  if (!bt(e.channel)) return ji("key.channel", ht);
  if (e.channel !== "apiDump") return;
  for (let n of ["agentId", "runId"]) if (n in e && e[n] !== void 0) return ji(`key.${n}`, "an apiDump key names its dump by one id \u2014 the agent's for a subagent's requests, else the session's (today's dump-prompts/<id>.jsonl); agentId and runId nest nothing on this channel");
  return;
}
function gr(e) {
  if ("taskId" in e && ("meta" in e || "highWaterMark" in e)) return ji("key.taskId", "a task key names an item, the list metadata or the list high-water mark, never more than one");
  if ("meta" in e && "highWaterMark" in e) return ji("key.highWaterMark", "a task key names an item, the list metadata or the list high-water mark, never more than one");
  if ("meta" in e && e.meta !== !0) return ji("key.meta", "must be true");
  if ("highWaterMark" in e && e.highWaterMark !== !0) return ji("key.highWaterMark", "must be true");
  if (typeof e.listId !== "string") return ji("key.listId", "a task key carries its listId");
  if ("meta" in e || "highWaterMark" in e) return;
  if (typeof e.taskId !== "string") return ji("key.taskId", "a task item key carries its taskId");
  if (ur(e.taskId)) return ji("key.taskId", cr);
  return;
}
function mr(e) {
  if ("file" in e && "draftKey" in e) return ji("key.draftKey", "a jobs-root key names the pins file or one draft, never both");
  if ("file" in e) return e.file === "pins" ? void 0 : ji("key.file", "must be pins");
  if (typeof e.draftKey !== "string") return ji("key.draftKey", "a jobs-root draft key carries its draftKey");
  return wr.test(e.draftKey) ? void 0 : ji("key.draftKey", "must be 8 lowercase hex characters");
}
var Rt = "timeline.jsonl",
  St = `${Rt} is the job's timeline stream: address it as keys.jobTimeline(jobId)`;
function Et(e) {
  return Array.isArray(e) && typeof e[0] === "string" && cK(e[0]).includes(Rt);
}
var hr = /^\d{4}$/,
  ze = /^\d{2}$/,
  yr = /^[A-Za-z0-9_-]{1,8}(?:-[a-z0-9]+)*$/,
  br = 128,
  Rr = /^(?:con|prn|aux|nul|com\d|lpt\d)$/i;
function Sr(e) {
  return typeof e === "string" && e.length <= br && yr.test(e) && !Rr.test(e);
}
function wt(e, n) {
  if (n.year !== void 0 && !Ie(hr, n.year)) return ji(`${e}.year`, "must be four digits (YYYY)");
  if (n.month !== void 0 && !Ie(ze, n.month)) return ji(`${e}.month`, "must be two digits (MM)");
  if (n.day !== void 0 && !Ie(ze, n.day)) return ji(`${e}.day`, "must be two digits (DD)");
  return;
}
function Ie(e, n) {
  return typeof n === "string" && e.test(n);
}
function Er(e) {
  if (e.year !== void 0 && e.projectKey === void 0) return ji("scope.projectKey", "required when year is given");
  if (e.month !== void 0 && e.year === void 0) return ji("scope.year", "required when month is given");
  if (e.day !== void 0 && e.month === void 0) return ji("scope.month", "required when day is given");
  return wt("scope", e);
}
var wr = /^[0-9a-f]{8}$/;
function _r(e) {
  switch (e.namespace) {
    case "transcript":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["agentId", e.agentId, "optional"], ["agentRelPath", e.agentRelPath, "optional"]];
    case "history":
    case "identity":
      return [];
    case "globalConfig":
      return "kind" in e ? [["stamp", e.stamp]] : [];
    case "settings":
      return e.layer === "user" ? [] : e.layer === "project" ? [["projectKey", e.projectKey]] : [["consentRootKey", e.consentRootKey]];
    case "task":
      return "taskId" in e ? [["listId", e.listId], ["taskId", e.taskId]] : [["listId", e.listId]];
    case "memory":
      return [["projectKey", e.projectKey], ["relPath", e.relPath]];
    case "pluginRegistry":
      return [];
    case "marketplaceCache":
      return "relPath" in e ? [["marketplace", e.marketplace], ["relPath", e.relPath]] : [["marketplace", e.marketplace]];
    case "pluginCache":
      return [["marketplace", e.marketplace], ["plugin", e.plugin], ["version", e.version], ["relPath", e.relPath]];
    case "cache":
      return [["store", e.store], ["id", e.id]];
    case "paste":
      return [["id", e.id]];
    case "pluginAssetCache":
      return [["digest", e.digest]];
    case "state":
      return [["id", e.id]];
    case "plan":
      return [["name", e.name]];
    case "feedbackDraft":
      return [["draftId", e.draftId]];
    case "agentMemory":
      return [...(e.layer === "user" ? [] : [["projectKey", e.projectKey]]), ["agentType", e.agentType], ["relPath", e.relPath]];
    case "team":
      return [["team", e.team]];
    case "sidecar":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["relPath", e.relPath]];
    case "scratch":
      return [["sessionId", e.sessionId], ["relPath", e.relPath]];
    case "userConfigDir":
      return [["relPath", e.relPath]];
    case "fileHistory":
      return [["sessionId", e.sessionId], ["backupFileName", e.backupFileName]];
    case "job":
      return [["jobId", e.jobId], ["relPath", e.relPath]];
    case "daemon":
      return [["relPath", e.relPath]];
    case "jobsRoot":
      return "file" in e ? [] : [["draftKey", e.draftKey]];
    case "session":
      return [["file", e.file]];
    case "bridgePointer":
    case "sessionAliases":
      return [["projectKey", e.projectKey]];
    case "dirSyncRecord":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId]];
    case "mailbox":
      return [["team", e.team], ["teammate", e.teammate]];
    case "log":
      return [["sessionId", e.sessionId], ["agentId", e.agentId, "optional"], ["runId", e.runId, "optional"]];
    case "jobTimeline":
      return [["jobId", e.jobId]];
    case "recording":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["stamp", e.stamp]];
    case "sessionLog":
      return [["projectKey", e.projectKey], ["year", e.year], ["month", e.month], ["day", e.day], ["logName", e.logName]];
  }
  return;
}
function IWr(e) {
  if (typeof e !== "object" || e === null) return ji("scope", "expected a scope object");
  let n = kr(e);
  if (n === void 0) return ji("scope", `${String(e.namespace)} is not a listable namespace`);
  return Ir(e) ?? Xe("scope", n);
}
var Pr = {
  transcript: [["agentId", "names one agent transcript, a stream key, not a scope: narrow a scope with agentRelPath"], ["journal", "names a run journal, a stream key, not a scope: narrow a scope with agentRelPath"], ["sessionJournal", "names a session's own journal, a stream key, not a scope: the session scope lists it"]],
  log: [["agentId", "names one log stream, a stream key, not a scope"], ["runId", "names one log stream, a stream key, not a scope"]],
  sessionLog: [["logName", "names one session's log, a stream key, not a scope: a day scope lists its logs"]],
  task: [["taskId", "names one task value, a key, not a scope: a list scope narrows with listId only"], ["meta", "names one task value, a key, not a scope: a list scope narrows with listId only"], ["highWaterMark", "names one task value, a key, not a scope: a list scope narrows with listId only"]],
  mailbox: [["teammate", "names one inbox, a key, not a scope"]],
  cache: [["id", "names one cached value, a key, not a scope: a cache scope narrows with store only"]],
  pluginAssetCache: [["digest", "names one cached asset, a key, not a scope"]],
  fileHistory: [["backupFileName", "names one backup, a key, not a scope: a file-history scope narrows with sessionId only"]],
  state: [["id", "names one value, a key, not a scope"]],
  feedbackDraft: [["draftId", "names one draft, a key, not a scope"]],
  jobsRoot: [["file", "names one value, a key, not a scope"], ["draftKey", "names one value, a key, not a scope"]],
  plan: [["name", "names one plan, a key, not a scope"]],
  paste: [["id", "names one paste, a key, not a scope"]],
  session: [["file", "names one value, a key, not a scope"]],
  globalConfig: [["stamp", "names one recovery copy, a key, not a scope: the scope narrows with kind only"]],
  marketplaceCache: [["form", "names one of the marketplace's two engine-written files, a key, not a scope: the tree narrows with relPath only"]],
  memory: [],
  pluginCache: [],
  daemon: [],
  sidecar: [],
  agentMemory: [],
  scratch: [],
  userConfigDir: [],
  job: [],
  bridgeSpawn: []
};
function Ir(e) {
  let n = e.namespace === "agentMemory" ? xr(e) : void 0;
  if (n !== void 0) return n;
  if (e.namespace === "transcript" || e.namespace === "sidecar") {
    let o = de("scope.sessionId", e.sessionId);
    if (o !== void 0) return o;
  }
  for (let [o, s] of Pr[e.namespace]) if (o in e && e[o] !== void 0) return ji(`scope.${o}`, s);
  if (e.namespace === "sidecar" && fe(e.relPath)) return ji("scope.relPath", ne);
  if (e.namespace === "sidecar" && dt(e.relPath)) return ji("scope.relPath", lt);
  if (e.namespace === "log" && e.channel !== void 0 && !bt(e.channel)) return ji("scope.channel", ht);
  if (e.namespace === "job" && Et(e.relPath)) return ji("scope.relPath", St);
  let r = e.namespace === "sessionLog" ? Er(e) : void 0;
  if (r !== void 0) return r;
  if (e.namespace === "scratch" && e.sessionId === void 0 && e.relPath !== void 0) return ji("scope.relPath", "requires scope.sessionId: a scratch relPath narrows one session directory, and no cross-session prefix filter exists");
  if (e.namespace === "userConfigDir" && !Je.has(e.dir)) return ji("scope.dir", Qe);
  if (e.namespace === "transcript" && e.agentRelPath !== void 0 && (e.projectKey === void 0 || e.sessionId === void 0)) return ji("scope.agentRelPath", "requires scope.projectKey and scope.sessionId: an agentRelPath narrows the subagents/ tree of one session directory");
  if (e.namespace === "transcript" && fe(e.agentRelPath)) return ji("scope.agentRelPath", ne);
  if (e.namespace === "pluginCache") {
    if (e.marketplace === void 0 && e.plugin !== void 0) return ji("scope.plugin", "requires scope.marketplace: a plugin narrows one marketplace folder");
    if (e.plugin === void 0 && e.version !== void 0) return ji("scope.version", "requires scope.plugin: a version narrows one plugin folder");
    if (e.version === void 0 && e.relPath !== void 0) return ji("scope.relPath", "requires scope.version: a relPath narrows one version folder");
  }
  if (e.namespace === "job" && e.jobId === void 0 && e.relPath !== void 0) return ji("scope.relPath", "requires scope.jobId: a job relPath narrows one job directory, and no cross-job prefix filter exists");
  if (e.namespace === "transcript" && e.projectKey === void 0 && e.sessionId !== void 0) return ji("scope.sessionId", "requires scope.projectKey: a session narrows one project folder, and no cross-project session filter exists");
  if (e.namespace === "globalConfig" && e.kind !== void 0 && !at(e.kind)) return ji("scope.kind", it);
  return;
}
function xr(e) {
  if (!ot(e.layer)) return ji("scope.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e) return ji("scope.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string") return ji("scope.projectKey", "required for the project and local layers");
  return e.agentType === void 0 && e.relPath !== void 0 ? ji("scope.relPath", "requires scope.agentType: an agent-memory relPath narrows one agent directory") : void 0;
}
function kr(e) {
  switch (e.namespace) {
    case "transcript":
      return [["projectKey", e.projectKey, "optional"], ["sessionId", e.sessionId, "optional"], ["agentRelPath", e.agentRelPath, "optional"]];
    case "task":
      return [["listId", e.listId, "optional"]];
    case "mailbox":
      return [["team", e.team, "optional"]];
    case "memory":
      return [["projectKey", e.projectKey], ["relPath", e.relPath, "optional"]];
    case "pluginCache":
      return [["marketplace", e.marketplace, "optional"], ["plugin", e.plugin, "optional"], ["version", e.version, "optional"], ["relPath", e.relPath, "optional"]];
    case "marketplaceCache":
      return [["marketplace", e.marketplace], ["relPath", e.relPath, "optional"]];
    case "cache":
      return [["store", e.store]];
    case "state":
    case "plan":
    case "paste":
    case "pluginAssetCache":
    case "feedbackDraft":
      return [];
    case "sidecar":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["relPath", e.relPath, "optional"]];
    case "agentMemory":
      return [["projectKey", e.layer === "user" ? void 0 : e.projectKey, "optional"], ["agentType", e.agentType, "optional"], ["relPath", e.relPath, "optional"]];
    case "scratch":
      return [["sessionId", e.sessionId, "optional"], ["relPath", e.relPath, "optional"]];
    case "userConfigDir":
      return [["relPath", e.relPath, "optional"]];
    case "fileHistory":
      return [["sessionId", e.sessionId, "optional"]];
    case "job":
      return [["jobId", e.jobId, "optional"], ["relPath", e.relPath, "optional"]];
    case "daemon":
      return [["relPath", e.relPath, "optional"]];
    case "jobsRoot":
    case "session":
      return [];
    case "bridgeSpawn":
      return [["dir", e.dir, "optional"]];
    case "globalConfig":
      return [["kind", e.kind, "optional"]];
    case "log":
      return [["sessionId", e.sessionId, "optional"]];
    case "sessionLog":
      return [["projectKey", e.projectKey, "optional"], ["year", e.year, "optional"], ["month", e.month, "optional"], ["day", e.day, "optional"]];
  }
  return;
}
var Cr = 6;
function MBt(e) {
  return e.endsWith(".meta.json") ? eA(e) : void 0;
}
function eA(e) {
  let n = _t(e);
  if (e1t(n)) return;
  let r = zu(),
    o = [n],
    s = Pt(e);
  while (s !== r && o.length <= Cr + 1) {
    let y = Pt(s);
    if (y === s) return;
    o.unshift(_t(s)), s = y;
  }
  if (s !== r || o.length < 3) return;
  let [i, a, ...u] = o;
  if (!jn(i) || !jn(a) || u.length === 0 || !u.every(jn)) return;
  let f = Ae.sidecar(i, a, u);
  return em(f) === void 0 ? f : void 0;
}
var hde = "tool-results";
function Py(e) {
  return xt(e.root.id, () => vs(e.root).originalCwd);
}
function s_() {
  return xt(Y(), we);
}
function xt(e, n) {
  return xe(qUe() ?? gu(n()), e, hde);
}
function ij(e, n) {
  if (vr(e) !== hde || !jn(n)) return;
  return eA(xe(e, n));
}
function Tr(e) {
  let n = ij(e, "probe");
  if (n === void 0 || n.namespace !== "sidecar") return;
  return {
    namespace: "sidecar",
    projectKey: n.projectKey,
    sessionId: n.sessionId,
    relPath: n.relPath.slice(0, -1)
  };
}
async function aj(e, n) {
  if (H() && n !== void 0) {
    let s = Tr(e);
    if (s !== void 0) try {
      if ((await n.ensureScope(s)).ok) return;
    } catch {}
  }
  let r = Qt(),
    o = !1;
  try {
    o = await jr(r, e);
  } catch {}
  if (!o) return;
  try {
    await r.mkdir(e);
  } catch {}
}
var Lr = 3;
async function jr(e, n) {
  return (await kt(e, n)) === void 0;
}
async function kt(e, n) {
  let r = zu(),
    o = Dr(r, n);
  if (o === "" || o === ".." || o.startsWith(".." + It) || Fr(o)) return;
  let s = r;
  for (let i of o.split(It)) {
    s = xe(s, i);
    let a = await e.lstat(s);
    if (a === void 0) return;
    if (a.isSymbolicLink || !a.isDirectory) return s;
  }
  return;
}
async function LWr(e, n) {
  let r = await kt(n, e);
  if (r !== void 0) throw new P(`tool-results path refused: ${r} is a link or not a directory`, "tool-results path refused: a directory on the way is a link or not a directory");
}
async function MUe(e, n, r) {
  let o = Qt();
  await LWr(Ar(e), o);
  for (let s = 1;; s++) {
    if (s > 1) await Ct(o, e);else await NWr(e, o);
    try {
      await o.writeBytesExclusive(e, n, r);
      return;
    } catch (error) {
      if (v(error) !== "EEXIST" || s >= Lr) throw error;
    }
  }
}
async function NWr(e, n) {
  if ((await n.lstat(e))?.isSymbolicLink) await Ct(n, e);
}
async function Ct(e, n) {
  try {
    await e.delete(n);
  } catch (error) {
    if (v(error) !== "ENOENT") throw error;
  }
}
function Wr(e) {
  let {
    firstPage: firstPage,
    lastPage: lastPage
  } = e ?? {};
  if (firstPage === void 0) return "page range";
  if (lastPage === void 0 || lastPage === 1 / 0) return `pages ${firstPage}-`;
  if (firstPage === lastPage) return `page ${firstPage}`;
  return `pages ${firstPage}-${lastPage}`;
}
async function D$o(filePath) {
  try {
    let originalSize = (await ce().stat(filePath)).size;
    if (originalSize === 0) return {
      success: !1,
      error: {
        reason: "empty",
        message: `PDF file is empty: ${filePath}`
      }
    };
    if (originalSize > Xgn) return {
      success: !1,
      error: {
        reason: "too_large",
        message: `PDF file exceeds maximum allowed size of ${Ut(Xgn)}.`
      }
    };
    let s = await Gr(filePath);
    if (!s.subarray(0, 5).toString("ascii").startsWith("%PDF-")) return {
      success: !1,
      error: {
        reason: "corrupted",
        message: `File is not a valid PDF (missing %PDF- header): ${filePath}`
      }
    };
    let base64 = s.toString("base64");
    return {
      success: !0,
      data: {
        type: "pdf",
        file: {
          filePath: filePath,
          base64: base64,
          originalSize: originalSize
        }
      }
    };
  } catch (n) {
    if (Pf(n)) throw n;
    return {
      success: !1,
      error: {
        reason: "unknown",
        message: l(n),
        category: pe(n),
        site: "read"
      }
    };
  }
}
async function GYn(e, n = "win32") {
  let {
    code: code_2,
    stdout: stdout,
    exitCode: exitCode,
    timedOut: timedOut
  } = await tt("pdfinfo", [Mt(e, n)], {
    timeout: 1e4,
    useCwd: !1
  });
  if (code_2 === 0) {
    let f = /^Pages:\s+(\d+)/m.exec(stdout);
    return f ? {
      pageCount: parseInt(f[1], 10)
    } : {
      pageCount: null,
      pdfinfoFailure: {
        reason: "no_page_count"
      }
    };
  }
  if (timedOut) return {
    pageCount: null,
    pdfinfoFailure: {
      reason: "timeout"
    }
  };
  if (exitCode !== void 0) return {
    pageCount: null,
    pdfinfoFailure: {
      reason: "nonzero_exit",
      exitCode: exitCode
    }
  };
  return {
    pageCount: null,
    pdfinfoFailure: {
      reason: (await sc("pdfinfo").catch(() => null)) === null ? "not_found" : "no_exit_status"
    }
  };
}
function L$o(e) {
  switch (e.reason) {
    case "timeout":
      return "pdfinfo timed out";
    case "not_found":
      return "pdfinfo was not found";
    case "no_exit_status":
      return "pdfinfo did not run to completion";
    case "nonzero_exit":
      return `pdfinfo failed (exit code ${e.exitCode})`;
    case "no_page_count":
      return "pdfinfo did not report a page count";
  }
}
function ke(e) {
  let n = e === "win32" ? 0 : vt.O_NONBLOCK ?? 0;
  return vt.O_RDONLY | n;
}
var Ot = 259,
  Yr = String(2147483647).length;
function Mt(e, n) {
  if (n !== "win32" || e.length <= Ot || !At.isAbsolute(e)) return e;
  return At.toNamespacedPath(e);
}
async function Vr(e, {
  platform: platform,
  scratchRoot: scratchRoot
}) {
  let o = {
      prefix: J(e, "page"),
      collect: () => Promise.resolve(),
      [Symbol.asyncDispose]: () => Promise.resolve()
    },
    s = o.prefix.length + 1 + Yr + 4;
  if (platform !== "win32" || s <= Ot) return o;
  let i;
  try {
    i = await Br(J(scratchRoot(), nhn));
  } catch (error) {
    return t(`PDF extraction: could not create a scratch directory under the temp dir (${v(error) ?? l(error)}); rendering page images directly into the tool-results directory`, {
      level: "warn"
    }), o;
  }
  let a = () => Hr(i, {
      recursive: !0,
      force: !0
    }),
    u = gt(a);
  return {
    prefix: J(i, "p"),
    collect: () => zr(i, e),
    [Symbol.asyncDispose]: () => a().then(u, f => t(`PDF extraction: scratch directory not removed (${v(f) ?? l(f)}); removal is retried at exit`, {
      level: "warn"
    }))
  };
}
async function zr(e, n) {
  let r = await jt(e),
    s = (await Promise.allSettled(r.filter(item => /^p-\d+\.jpg$/.test(item)).map(item => Xr(J(e, item), J(n, `page${item.slice(1)}`))))).find(item => item.status === "rejected");
  if (s !== void 0) throw s.reason;
}
async function Xr(e, n) {
  try {
    await Bo(e, n);
  } catch (error) {
    let o = v(error);
    if (o === void 0 || !(XS.has(o) || nT.has(o))) throw error;
    await Nr(e, n);
  }
}
class Bt {
  available = void 0;
  markAvailable() {
    this.available = !0;
  }
  reset() {
    this.available = void 0;
  }
}
var qr = new q(() => new Bt());
function Jr() {
  return qr.of(j().host);
}
async function HWr() {
  let e = Jr();
  if (e.available !== void 0) return e.available;
  let {
      code: code_3,
      stderr: stderr
    } = await tt("pdftoppm", ["-v"], {
      timeout: 5000,
      useCwd: !1
    }),
    o = code_3 === 0 || code_3 !== 127 && stderr.length > 0;
  if (o) e.markAvailable();
  return o;
}
async function FWr(filePath_2, n, r, o = {
  platform: "win32",
  scratchRoot: scratchRoot_2
}) {
  try {
    let s = await Kr(filePath_2, ke("win32")),
      i = await s.stat().finally(() => s.close());
    if (!i.isFile()) return {
      success: !1,
      error: {
        reason: "corrupted",
        message: `Path is not a regular file: ${filePath_2}`
      }
    };
    let originalSize_2 = i.size;
    if (originalSize_2 === 0) return {
      success: !1,
      error: {
        reason: "empty",
        message: `PDF file is empty: ${filePath_2}`
      }
    };
    if (originalSize_2 > Jgn) return {
      success: !1,
      error: {
        reason: "too_large",
        message: `PDF file exceeds maximum allowed size for text extraction (${Ut(Jgn)}).`
      }
    };
    if (n?.signal?.aborted) throw new We();
    if (!(await HWr())) return {
      success: !1,
      error: {
        reason: "unavailable",
        message: "pdftoppm is not installed. Install poppler-utils (e.g. `brew install poppler` or `apt-get install poppler-utils`) to enable PDF page rendering."
      }
    };
    let f = Or(),
      outputDir = J(s_(), `pdf-${f}`),
      b = r === void 0 ? void 0 : Gt(outputDir);
    await Mr(outputDir, {
      recursive: !0
    });
    await using h = await Vr(outputDir, o);
    let c = Mt(filePath_2, o.platform),
      g = ["-jpeg", "-r", "100"];
    if (n?.firstPage) g.push("-f", String(n.firstPage));
    if (n?.lastPage && n.lastPage !== 1 / 0) g.push("-l", String(n.lastPage));
    g.push(c, h.prefix);
    let {
      code: code_4,
      stderr: stderr_2,
      exitCode: exitCode_2
    } = await tt("pdftoppm", g, {
      timeout: 120000,
      abortSignal: n?.signal,
      waitForExitAfterKill: !0,
      useCwd: !1
    });
    if (code_4 !== 0) {
      if (n?.signal?.aborted && exitCode_2 === void 0) throw new We();
      let k = Dt(c),
        Se = stderr_2.replaceAll(k, () => filePath_2).replaceAll(c, () => filePath_2),
        Ee = category => ({
          success: !1,
          error: {
            reason: "unknown",
            message: `pdftoppm failed: ${Se}`,
            category: category,
            site: "extract",
            exitCode: exitCode_2
          }
        }),
        te = stderr_2.split(/\r?\n/);
      if (te.some(item => Kt.test(item))) return Ee(Ft(stderr_2));
      let _e = `I/O Error: Couldn't open file '${k}'`,
        Pe = te.find(item => {
          let X = item.trimEnd();
          return X === _e || X.startsWith(`${_e}: `) && !X.endsWith("'") && !X.slice(_e.length + 2).includes("': ");
        }),
        ae = te.filter(item => item !== Pe).join(`
`).replaceAll(k, " ").replaceAll(c, " ").replaceAll(Dt(h.prefix), " ").replaceAll(h.prefix, " ");
      if (/password/i.test(ae)) return {
        success: !1,
        error: {
          reason: "password_protected",
          message: "PDF is password-protected. Please provide an unprotected version."
        }
      };
      let je = /Wrong page range given.*last page \((\d+)\)/i.exec(ae);
      if (je) {
        let C = Number(je[1]);
        if (C === 0) return {
          success: !1,
          error: {
            reason: "corrupted",
            message: "PDF reports 0 pages (empty page tree). The PDF may be invalid."
          }
        };
        let X = Math.min(C, KAe);
        return {
          success: !1,
          error: {
            reason: "page_out_of_range",
            message: `Requested ${Wr(n)} is outside the document (PDF has ${C} ${I(C, "page")}). Use a range within 1-${C}, maximum ${KAe} pages per request (e.g. pages: "1-${X}").`
          }
        };
      }
      let Rn = /Syntax Error(?: \(\d+\))?: Couldn't (?:find trailer dictionary|read xref table)/i;
      if (/damaged|corrupt|invalid/i.test(ae) || Rn.test(ae)) return {
        success: !1,
        error: {
          reason: "corrupted",
          message: "PDF file is corrupted or invalid."
        }
      };
      let Oe = te[0] ?? "",
        Ne = te.some(item => /^(Command Line Error|Internal Error)(?: \(\d+\))?: /.test(item));
      if (!Ne && Pe !== void 0 && exitCode_2 === 1) {
        if (c !== filePath_2) return Ee("rewritten_input_unopenable");
        return {
          success: !1,
          error: {
            reason: "pdftoppm_input_error",
            message: `Could not render PDF: ${Pe.replaceAll(k, () => filePath_2)}`
          }
        };
      }
      if (!Ne && Oe.startsWith("Permission Error: ")) return {
        success: !1,
        error: {
          reason: "pdftoppm_input_error",
          message: `Could not render PDF: ${Oe}`
        }
      };
      return Ee(Ft(stderr_2));
    }
    try {
      await h.collect();
    } catch (k) {
      return {
        success: !1,
        error: {
          reason: "unknown",
          message: `Could not move the rendered PDF pages into ${outputDir} (${v(k) ?? "no error code"})`,
          category: pe(k),
          site: "extract",
          exitCode: exitCode_2
        }
      };
    }
    let pageNames;
    if (r !== void 0) {
      let k = await $Wr(r, outputDir, b);
      if (!k.ok) return {
        success: !1,
        error: {
          reason: "unknown",
          message: `Failed to list extracted PDF pages: ${k.code}`,
          category: `storage_list_${k.code}`,
          site: "extract"
        }
      };
      if (k.names.length === 0 && !k.directoryExists) return {
        success: !1,
        error: {
          reason: "unknown",
          message: `Extraction directory missing after pdftoppm ran: ${outputDir}`,
          category: pe({
            code: "ENOENT"
          }),
          site: "extract"
        }
      };
      pageNames = k.names;
    } else pageNames = (await jt(outputDir)).filter(item => item.endsWith(".jpg")).sort();
    if (pageNames.length === 0) return {
      success: !1,
      error: {
        reason: "corrupted",
        message: "pdftoppm produced no output pages. The PDF may be invalid."
      }
    };
    let count = pageNames.length;
    return {
      success: !0,
      data: {
        type: "parts",
        file: {
          filePath: filePath_2,
          originalSize: originalSize_2,
          outputDir: outputDir,
          count: count
        },
        ...(b !== void 0 && {
          v5SidecarScope: {
            ...b,
            pageNames: pageNames
          }
        })
      }
    };
  } catch (s) {
    let i = s && typeof s === "object" && "path" in s ? s.path : void 0;
    if (s instanceof We || Pf(s) && (i === filePath_2 || i === void 0)) throw s;
    return {
      success: !1,
      error: {
        reason: "unknown",
        message: l(s),
        category: pe(s),
        site: "extract"
      }
    };
  }
}
var Kt = /^Could not write image to [\s\S]*; exiting\s*$/,
  Zr = [[/^Internal Error(?: \(\d+\))?: /, "internal_error"], [/^Command Line Error(?: \(\d+\))?: /, "command_line_error"], [Kt, "output_write_failed"], [/^Config Error(?: \(\d+\))?: /, "config_error"], [/^Unimplemented Feature(?: \(\d+\))?: /, "unimplemented_feature"], [/^I\/O Error(?: \(\d+\))?: /, "io_output"], [/^Syntax (?:Error|Warning)(?: \(\d+\))?: /, "syntax_diagnostics"]];
function Ft(e) {
  if (e.trim() === "") return "empty_stderr";
  let n = e.split(/\r?\n/);
  return Zr.find(([o]) => n.some(item => o.test(item)))?.[1] ?? "other";
}
function Dt(e) {
  return Array.from(Buffer.from(e, "utf8"), n => n < 32 || n >= 127 ? `<${n.toString(16).padStart(2, "0")}>` : String.fromCharCode(n)).join("");
}
function pe(e) {
  return `fs_wrapped_${ao(e) ?? "none"}`;
}
var code_5 = "ListCapExceeded";
function Gt(e) {
  let n = s_();
  if (Ur(e) !== n) throw new P(`PDF extraction directory is outside the session tool-results store: ${e}`, "pdf extraction dir outside tool-results");
  return {
    projectKey: nS(we()),
    sessionId: Y(),
    relPath: [hde, $r(e)]
  };
}
async function $Wr(e, n, r) {
  let scope = r ?? Gt(n),
    {
      projectKey: projectKey,
      sessionId: sessionId,
      relPath: relPath
    } = scope,
    names = [],
    f = await Ks(cursor => e.listEntries({
      namespace: "sidecar",
      projectKey: projectKey,
      sessionId: sessionId,
      relPath: relPath
    }, {
      cursor: cursor,
      skipKeyStats: !0,
      skipScopeStats: !0
    }), b => {
      for (let h of b) {
        if (h.kind !== "key" || h.key.namespace !== "sidecar") continue;
        let c = h.key.relPath.at(-1);
        if (c === void 0 || h.key.relPath.length !== relPath.length + 1) continue;
        if (!c.endsWith(".jpg")) continue;
        names.push(c);
      }
    });
  switch (f.status) {
    case "done":
      break;
    case "error":
      return {
        ok: !1,
        code: f.error.code
      };
    case "capped":
      return {
        ok: !1,
        code: code_5
      };
  }
  names.sort();
  let directoryExists = !0;
  if (names.length === 0) {
    directoryExists = !1;
    let suffix = relPath.at(-1),
      h = await Ks(cursor_2 => e.listEntries({
        namespace: "sidecar",
        projectKey: projectKey,
        sessionId: sessionId,
        relPath: relPath.slice(0, -1)
      }, {
        suffix: suffix,
        cursor: cursor_2,
        skipScopeStats: !0
      }), c => {
        directoryExists ||= c.some(item => item.kind === "scope" && item.scope.namespace === "sidecar" && (item.scope.relPath ?? []).length === relPath.length && item.scope.relPath?.at(-1) === suffix);
      }, {
        until: () => directoryExists
      });
    switch (h.status) {
      case "done":
        break;
      case "error":
        return {
          ok: !1,
          code: h.error.code
        };
      case "capped":
        return {
          ok: !1,
          code: code_5
        };
    }
  }
  return {
    ok: !0,
    names: names,
    directoryExists: directoryExists,
    scope: scope
  };
}
async function tA(e, n, r) {
  let o = r?.fromTail === !0 ? "unreadable" : null,
    s;
  try {
    let i = (r?.noFollow, 0);
    s = await G.open(e, ke("win32") | i);
    let a = await s.stat();
    if (!a.isFile()) return o;
    if (r?.requireNlink1 && a.nlink !== 1) return o;
    if (r?.verifyHandlePath) {
      let h = null;
      if (h === null) {
        h = await G.realpath(e);
        let c = await G.stat(h);
        if (c.dev !== a.dev || c.ino !== a.ino) return o;
      }
      if (!r.verifyHandlePath(h)) return o;
    }
    if (r?.fromTail === !0) {
      let h = a.size > n ? a.size - n : 0,
        c = Buffer.alloc(a.size - h),
        g = await Ht(s, c, h),
        content = Ce(c.subarray(0, g), r.sniffEncoding);
      if (h === 0) return {
        content: content,
        truncated: !1
      };
      let R = content.indexOf(`
`);
      return {
        content: R === -1 ? "" : content.slice(R + 1),
        truncated: !0
      };
    }
    let u = Math.min(a.size, n + 1),
      f = Buffer.alloc(u),
      y = await Ht(s, f, 0);
    if (r?.sniffEncoding === !0) {
      let h = a.size > n ? Math.min(y, n) : y,
        bytes = f.subarray(0, h),
        g = Ce(bytes, !0),
        truncated = a.size > n,
        content_2 = truncated ? `${g}
\u2026[truncated at ${n} bytes of ${a.size} bytes]` : g;
      return r.withBytes === !0 ? {
        content: content_2,
        bytes: bytes,
        truncated: truncated
      } : content_2;
    }
    let b = Ce(f.subarray(0, y), !1);
    return b.length > n ? `${b.slice(0, n)}
\u2026[truncated at ${n} chars of ${a.size} bytes]` : b;
  } catch (error) {
    return DUe(error) ? null : o;
  } finally {
    await s?.close().catch(() => {
      return;
    });
  }
}
function DUe(e) {
  let n = v(e);
  return n === "ENOENT" || n === "ENOTDIR";
}
async function Ht(e, n, r) {
  let o = 0;
  while (o < n.length) {
    let {
      bytesRead: bytesRead
    } = await e.read(n, o, n.length - o, r + o);
    if (bytesRead === 0) break;
    o += bytesRead;
  }
  return o;
}
function Ce(e, n) {
  if (n !== !0) return e.toString("utf8");
  if (e.length >= 2 && e[0] === 255 && e[1] === 254) return e.subarray(2).toString("utf16le");
  if (e.length >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191) return e.subarray(3).toString("utf8");
  let r = e.subarray(0, Math.min(e.length, 512)),
    o = 0,
    s = 0;
  for (let i = 0; i < r.length; i++) if (r[i] === 0) if (i % 2 === 0) o++;else s++;
  if (r.length >= 8 && (o + s) * 4 > r.length) return e.subarray(o > s ? 1 : 0).toString("utf16le");
  return e.toString("utf8");
}
import { dirname as he, isAbsolute as is, join as x, relative as as, resolve as T, sep as ye } from "path";
var $t = {
  ccr: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !0,
    fanout: !0,
    presence: !0,
    catchupReplay: !0,
    bashExec: !0,
    fileRead: !0
  },
  ssh: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !0
  },
  direct: {
    controlChannel: !1,
    modelCatalog: !1,
    setPermissionMode: !1,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !1
  }
};
var $Yn = {
  isRemoteMode: !1
};
function lr() {
  return _H().remote;
}
var Ygn = "Stopped waiting for the remote \u2014 the command may still complete there";
function Lt() {
  return Yn() || lr() !== null;
}
function va() {
  let e = lr();
  return e?.caps?.controlChannel === !0 && !e.viewerOnly;
}
function zv(e) {
  return lr()?.caps?.[e] === !0;
}
function UYn(e, n) {
  return n && !(e.isRemoteMode && e.viewerOnly);
}
function Qr(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}
function BYn(kind, n, viewerOnly, sessionId_2) {
  if (!n.isRemoteMode) return $Yn;
  return {
    kind: kind,
    isRemoteMode: !0,
    viewerOnly: viewerOnly,
    caps: $t[kind],
    sessionId: sessionId_2,
    sendMessage: n.sendMessage,
    cancelRequest: n.cancelRequest,
    cancelHeldMessages: n.cancelHeldMessages ?? (() => !1),
    disconnect: n.disconnect,
    sendControlRequest: n.sendControlRequest ?? (() => Qr(kind))
  };
}
import { createHash as So } from "crypto";
import { accessSync as Eo, constants as wo, lstatSync as Xt, readFileSync as M, realpathSync as me, statSync as qt } from "fs";
import { lstat as _o, realpath as Po } from "fs/promises";
import { homedir as Io } from "os";
import { basename as ge, dirname as V, isAbsolute as De, join as S, resolve as O, sep as A } from "path";
function VAe(e) {
  return e.flatMap(item => [`Bash(${item})`, `PowerShell(${item})`]);
}
function Wt(e) {
  return e.filter(item => item !== "PowerShell(git checkout -b *)");
}
var TBt = ["git commit *--fil*", "git commit * -F*", "git commit *--te*", "git commit * -t*", "git commit *--pathspec-fr*", "git commit *--no-veri*", "git commit *--no-g*", "git commit *--am*", "git commit *--allow-empty*", "git commit *--reu*", "git commit *--ree*"],
  CBt = ["git push *--force*", "git push * -f*", "git push *--de*", "git push * -d*", "git push * :**", 'git push *":**', "git push *':**", "git push * +*", 'git push *"+*', "git push *'+*", "git push *--pu*", "git push * -o*", "git push *--m*", "git push *--pru*", "git push *--no-veri*", "git push *--rece*", "git push *--e*"],
  RBt = ["gh pr create *--repo*", "gh pr create * -R*", "gh pr create *--body-file*", "gh pr create * -F*", "gh pr create *--head*", "gh pr create * -H*", "gh pr create *--recover*"],
  ABt = ["gh pr create *--base*", "gh pr create * -B*"],
  OWr = ["git *--output*"],
  xBt = ["git checkout *--f*", "git checkout * -f*"],
  PBt = ["git add --f*", "git add * --f*", "git add -f*", "git add * -f*", "git add --c*", "git add * --c*"],
  MWr = ["gh pr edit *--repo*", "gh pr edit -R*", "gh pr edit * -R*", "gh pr edit *--body-file*", "gh pr edit -F*", "gh pr edit * -F*", "gh pr edit *--base*", "gh pr edit -B*", "gh pr edit * -B*", "gh pr edit http*"],
  N = "A skill active in this turn",
  Z = "The match is on the raw command text (case-insensitive in PowerShell, so a lowercase short flag can trip an uppercase one), so message, body or path text that merely contains one of these fragments trips it too; reword that text if so.",
  W = "If the user explicitly asked for the refused form, say it cannot run inside this skill instead of substituting something else or routing it through another tool.",
  eo = `${N} refuses \`git commit\` options that read the message from a file or template, skip hooks, amend, reuse a message or allow an empty commit (tokens starting \`--fil\`, \`--te\`, \`--pathspec-fr\`, \`--no-veri\`, \`--no-g\`, \`--am\`, \`--allow-empty\`, \`--reu\`, \`--ree\`, \` -F\`, \` -t\`). The option is refused, not the commit: pass the message inline with \`-m\` as the skill's example shows. ${Z} ${W}`,
  to = `${N} refuses \`git push\` forms that force, delete, mirror or prune refs, set push options, skip the pre-push hook or name a receive-pack (tokens starting \`--force\`, \` -f\`, \` +\`, \`--de\`, \` -d\`, \` :\`, \`--m\`, \`--pru\`, \`--pu\`, \` -o\`, \`--no-veri\`, \`--rece\`, \`--e\`). A plain push of the branch to the configured remote is fine. The match is on the raw command text, so a ref name containing one of these fragments trips it too; tell the user rather than rewriting the command to slip past. ${W}`,
  no = `${N} runs \`gh pr create\` only in its instructed form and refuses \`--repo\`/\`-R\`, \`--head\`/\`-H\`, \`--body-file\`/\`-F\` and \`--recover\` on it. The option is refused, not opening the pull request: re-run it with the title and body passed inline as the skill's example shows; that retry is the intended fix, not a workaround. ${Z} ${W}`,
  ro = `${N} refuses \`--base\`/\`-B\` on \`gh pr create\` in PowerShell, where the \`-b\` short form of \`--body\` trips it too: spell it \`--body\`. The option is refused, not opening the pull request: if the default branch is the intended target, re-run it without \`--base\`, with the title and body passed inline as the skill's example shows, and the pull request opens against it. ${Z} ${W}`,
  oo = `${N} refuses \`gh pr edit\` with \`--repo\`/\`-R\`, \`--body-file\`/\`-F\`, \`--base\`/\`-B\` or a URL selector: edit the current branch's PR with the title and body passed inline and no selector. ${Z} ${W}`,
  so = `${N} refuses \`--output\` on git commands (it writes to an arbitrary path): drop it and read stdout. ${Z}`,
  io = `${N} refuses \`git checkout\` with \`--force\`/\`-f\` (tokens starting \`--f\` or \` -f\`): create the branch with a plain \`git checkout -b\`. The match is on the raw command text, so a branch name containing \`--f\` trips it too. ${W}`,
  co = `${N} refuses \`git add\` with \`--force\`/\`-f\` (it stages ignored files such as \`.env\`) or \`--chmod\` (tokens starting \`--f\`, \`-f\`, \`--c\`): stage the paths by name without the option. ${Z} ${W}`;
function U(e, n) {
  return VAe(e).map(item => [item, n]);
}
var v$o = Object.fromEntries([...U(TBt, eo), ...U(CBt, to), ...U(RBt, no), ...ABt.map(item => [`PowerShell(${item})`, ro]), ...U(MWr, oo), ...U(OWr, so), ...U(xBt, io), ...U(PBt, co)]);
import { open as lo } from "fs/promises";
import { join as uo } from "path";
async function IBt(e, n, r, o) {
  try {
    let s = await lo(uo(e, "config"), "r");
    try {
      let a = Buffer.allocUnsafe(1e6),
        u = 0;
      while (u < 1e6) {
        let {
          bytesRead: bytesRead_2
        } = await s.read(a, u, 1e6 - u, u);
        if (bytesRead_2 === 0) break;
        u += bytesRead_2;
      }
      let f = !1;
      if (u === 1e6) {
        let b = Buffer.allocUnsafe(1),
          {
            bytesRead: bytesRead_3
          } = await s.read(b, 0, 1, u);
        f = bytesRead_3 > 0;
      }
      let y = a.subarray(0, u).toString("utf-8");
      if (f) {
        let b = y.lastIndexOf(`
`);
        y = b === -1 ? "" : y.slice(0, b);
      }
      return Q(y, n, r, o);
    } finally {
      await s.close();
    }
  } catch {
    return null;
  }
}
function Q(e, n, r, o) {
  for (let s of Fe(e, n, r, o)) return s;
  return null;
}
function DWr(e, n, r, o) {
  return [...Fe(e, n, r, o)];
}
function k$o(e, n, r, o) {
  return [...Fe(e, n, r, o, "true")];
}
var fo = /^([A-Za-z][A-Za-z0-9-]*)\s*(?:[#;].*)?$/;
function* Fe(e, n, r, o, s) {
  let i = e.split(`
`),
    a = n.toLowerCase(),
    u = o.toLowerCase(),
    f = !1;
  for (let y of i) {
    let b = y.trim();
    if (b.length === 0 || b[0] === "#" || b[0] === ";") continue;
    if (b[0] === "[") {
      f = ve(b, a, r);
      continue;
    }
    if (!f) continue;
    let h = Yt(b);
    if (h && h.key.toLowerCase() === u) yield h.value;else if (s !== void 0 && fo.exec(b)?.[1]?.toLowerCase() === u) yield s;
  }
}
function E$o(e) {
  let includes = [],
    files = [],
    o = null;
  for (let s of e.split(`
`)) {
    let i = s.trim();
    if (i.length === 0 || i[0] === "#" || i[0] === ";") continue;
    if (i[0] === "[") {
      o = ve(i, "include", null) || po.test(i) ? "include" : ve(i, "core", null) ? "core" : null;
      continue;
    }
    let a = o === null ? null : Yt(i);
    if (!a || a.value.length === 0) continue;
    let u = a.key.toLowerCase();
    if (o === "include" && u === "path") includes.push(a.value);else if (o === "core" && (u === "excludesfile" || u === "attributesfile")) files.push(a.value);
  }
  return {
    includes: includes,
    files: files
  };
}
var po = /^\[includeif[ \t]*"(?:[^"\\]|\\.)*"\]/i;
function Yt(e) {
  let n = 0;
  while (n < e.length && yo(e[n])) n++;
  if (n === 0) return null;
  let key = e.slice(0, n);
  while (n < e.length && (e[n] === " " || e[n] === "\t")) n++;
  if (n >= e.length || e[n] !== "=") return null;
  n++;
  while (n < e.length && (e[n] === " " || e[n] === "\t")) n++;
  let value = go(e, n);
  return {
    key: key,
    value: value
  };
}
function go(e, n) {
  let r = "",
    o = !1,
    s = n;
  while (s < e.length) {
    let i = e[s];
    if (!o && (i === "#" || i === ";")) break;
    if (i === '"') {
      o = !o, s++;
      continue;
    }
    if (i === "\\" && s + 1 < e.length) {
      let a = e[s + 1];
      if (o) {
        switch (a) {
          case "n":
            r += `
`;
            break;
          case "t":
            r += "\t";
            break;
          case "b":
            r += "\b";
            break;
          case '"':
            r += '"';
            break;
          case "\\":
            r += "\\";
            break;
          default:
            r += a;
            break;
        }
        s += 2;
        continue;
      }
      if (a === "\\") {
        r += "\\", s += 2;
        continue;
      }
    }
    r += i, s++;
  }
  if (!o) r = mo(r);
  return r;
}
function mo(e) {
  let n = e.length;
  while (n > 0 && (e[n - 1] === " " || e[n - 1] === "\t")) n--;
  return e.slice(0, n);
}
function ve(e, n, r) {
  let o = ho(e);
  return o !== null && o.sectionLower === n && o.subsection === r;
}
function ho(e) {
  let n = 1;
  while (n < e.length && e[n] !== "]" && e[n] !== " " && e[n] !== "\t" && e[n] !== '"') n++;
  let sectionLower = e.slice(1, n).toLowerCase();
  if (n < e.length && e[n] === "]") return {
    sectionLower: sectionLower,
    subsection: null
  };
  while (n < e.length && (e[n] === " " || e[n] === "\t")) n++;
  if (n >= e.length || e[n] !== '"') return null;
  n++;
  let subsection = "";
  while (n < e.length && e[n] !== '"') {
    if (e[n] === "\\" && n + 1 < e.length) {
      let s = e[n + 1];
      if (s === "\\" || s === '"') {
        subsection += s, n += 2;
        continue;
      }
      subsection += s, n += 2;
      continue;
    }
    subsection += e[n], n++;
  }
  if (n >= e.length || e[n] !== '"') return null;
  if (n++, n >= e.length || e[n] !== "]") return null;
  return {
    sectionLower: sectionLower,
    subsection: subsection
  };
}
function yo(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "-";
}
var oK = Symbol("git-repo-negative-result");
class Vt {
  rootByPath = new pd({
    max: 50
  });
  canonicalRootByRoot = new pd({
    max: 50
  });
  remoteSlugByRoot = new pd({
    max: 50
  });
  monorepoRuledOutByRoot = new pd({
    max: 50
  });
  monorepoVerdictByDir = new pd({
    max: 50
  });
  gitDirByCwd = new Map();
  linkedFromRootByPin = new pd({
    max: 64
  });
  markersByRoot = new pd({
    max: 50
  });
  repositoryByCwd = new Map();
  remoteHostByCwd = new Map();
  repoClassByCanonicalRoot = new Map();
  linguistGeneratedByPath = new Map();
  wcRootByPath = new pd({
    max: 50
  });
  wcTrunkByRoot = new Map();
  wcWorktreesByRoot = new pd({
    max: 50,
    ttl: 60000
  });
  wcRemoteHashByRoot = new pd({
    max: 50
  });
  wcHeadByRoot = new Map();
  sessionRepoNameByCwd = new pd({
    max: 50
  });
  diffCheckoutIsRepo = new Map();
  gitExecutable = null;
  reportedHookInstallSkips = new Set();
  clear() {
    this.rootByPath.clear(), this.canonicalRootByRoot.clear(), this.remoteSlugByRoot.clear(), this.monorepoRuledOutByRoot.clear(), this.monorepoVerdictByDir.clear(), this.gitDirByCwd.clear(), this.linkedFromRootByPin.clear(), this.markersByRoot.clear(), this.repositoryByCwd.clear(), this.remoteHostByCwd.clear(), this.repoClassByCanonicalRoot.clear(), this.linguistGeneratedByPath.clear(), this.wcRootByPath.clear(), this.wcTrunkByRoot.clear(), this.wcWorktreesByRoot.clear(), this.wcRemoteHashByRoot.clear(), this.wcHeadByRoot.clear(), this.sessionRepoNameByCwd.clear(), this.diffCheckoutIsRepo.clear(), this.gitExecutable = null, this.reportedHookInstallSkips.clear();
  }
}
function Gne(e, n, r) {
  let o = e.get(n);
  if (o !== void 0) return o;
  let s = r(n);
  return e.set(n, s), s;
}
var bo = new q(() => new Vt());
function Kd() {
  return bo.of(j().host);
}
function Te(e, n) {
  try {
    let r = Xt(e);
    if (r.isSymbolicLink()) {
      let o = LBt(e);
      if (o === null) return !1;
      if (_i(o, n)) return !1;
      if (Bm(o, n)) return !1;
      let s = qt(e);
      return s.isDirectory() || s.isFile();
    }
    return r.isDirectory() || r.isFile();
  } catch {
    return !1;
  }
}
function Jt(e) {
  let n = Date.now();
  K("info", "find_git_root_started");
  let r = O(e),
    o = r.substring(0, r.indexOf(A) + 1) || A,
    stat_count = 0;
  while (r !== o) {
    let i = S(r, ".git");
    if (stat_count++, Te(i, r)) return K("info", "find_git_root_completed", {
      duration_ms: Date.now() - n,
      stat_count: stat_count,
      found: !0
    }), xn(r);
    let a = V(r);
    if (a === r) break;
    r = a;
  }
  if (stat_count++, Te(S(o, ".git"), o)) return K("info", "find_git_root_completed", {
    duration_ms: Date.now() - n,
    stat_count: stat_count,
    found: !0
  }), xn(o);
  return K("info", "find_git_root_completed", {
    duration_ms: Date.now() - n,
    stat_count: stat_count,
    found: !1
  }), oK;
}
function Fn(e) {
  let n = Gne(Kd().rootByPath, e, Jt);
  return n === oK ? null : n;
}
function eS(e) {
  let n = Jt(e);
  return n === oK ? null : n;
}
async function YYn(e, n) {
  let r = O(n),
    o = r.substring(0, r.indexOf(A) + 1) || A;
  for (;;) {
    let s = await e.stat(Gu.workspace(S(r, ".git")), {
      follow: !1
    });
    if (!s.ok || s.value.kind === "link") return;
    if (s.value.kind === "directory" || s.value.kind === "file") return {
      gitRoot: xn(r),
      entry: s.value.kind
    };
    if (r === o) return {
      gitRoot: null
    };
    let i = V(r);
    r = i === r ? o : i;
  }
}
function tS(e) {
  let rootByPath = Kd().rootByPath;
  if (rootByPath.peek(e) === oK) rootByPath.delete(e);
  return Fn(e);
}
async function NBt(e) {
  let n = tS(e);
  if (n === null) return null;
  try {
    return await _o(S(n, ".git")), n;
  } catch (error) {
    let o = error?.code;
    if (o !== "ENOENT" && o !== "ENOTDIR") return n;
    return Kd().rootByPath.delete(e), tS(e);
  }
}
function z8e(e) {
  let n = xn(O(e)),
    r = Kd();
  for (let o of [r.rootByPath, r.canonicalRootByRoot, r.remoteSlugByRoot, r.monorepoRuledOutByRoot, r.monorepoVerdictByDir, r.gitDirByCwd, r.markersByRoot, r.repositoryByCwd, r.repoClassByCanonicalRoot, r.wcRootByPath, r.wcWorktreesByRoot]) for (let s of [...o.keys()]) if (Km(n, xn(O(s)))) o.delete(s);
}
function Le(e) {
  try {
    return Zt(e, M(S(e, ".git"), "utf-8"));
  } catch {
    return e;
  }
}
function Zt(e, n) {
  try {
    let r = n.trim();
    if (!r.startsWith("gitdir:")) return e;
    let o = r.slice(7).trim();
    if (_i(o, e)) return e;
    if (Bm(o, e)) return e;
    let s = O(e, o);
    if (qx(S(s, "commondir"), s)) return e;
    let i = M(S(s, "commondir"), "utf-8").trim();
    if (_i(i, s)) return e;
    if (Bm(i, s)) return e;
    let a = O(s, i);
    if (O(V(s)) !== S(a, "worktrees")) return e;
    if (qx(S(s, "gitdir"), s)) return e;
    let u = M(S(s, "gitdir"), "utf-8").trim();
    if (_i(u, e)) return e;
    if (Bm(u, s, e)) return e;
    if (me(O(s, u)) !== S(me(e), ".git")) return e;
    if (ge(a) !== ".git") {
      if (Te(S(a, ".git"), a)) return e;
      return xn(a);
    }
    return xn(V(a));
  } catch {
    return e;
  }
}
async function xo(e, n) {
  let r = await e.readText(Gu.workspace(S(n, ".git")));
  if (!r.ok || !r.value.found) return;
  return Zt(n, r.value.value);
}
function Lo(e) {
  let n = Fn(e);
  if (!n) return null;
  return Gne(Kd().canonicalRootByRoot, n, Le);
}
function dj(e) {
  let n = eS(e);
  if (!n) return null;
  return Le(n);
}
async function qWr(e, n) {
  if (e.hostFiles.serving("workspace") !== "host") return;
  let r = Kd(),
    o = r.rootByPath.peek(n);
  if (o !== void 0) {
    let gitRoot = o === oK ? null : o;
    return {
      gitRoot: gitRoot,
      canonicalRoot: gitRoot === null ? null : r.canonicalRootByRoot.peek(gitRoot)
    };
  }
  let s = await YYn(e.hostFiles, n);
  if (s === void 0) return;
  let i = s.gitRoot === null ? {
    gitRoot: null,
    canonicalRoot: null
  } : {
    gitRoot: s.gitRoot,
    canonicalRoot: s.entry === "directory" ? s.gitRoot : await xo(e.hostFiles, s.gitRoot)
  };
  return XYn(n, i.gitRoot, i.canonicalRoot), i;
}
function XYn(e, n, r) {
  let o = Kd(),
    s = n ?? oK,
    i = o.rootByPath.peek(e);
  if (i === void 0) o.rootByPath.set(e, s);else if (i !== s) {
    t("git root prime: findGitRoot already holds a different answer for the start path; keeping the first", {
      level: "warn"
    });
    return;
  }
  if (n === null || r === void 0 || r === null) return;
  let a = o.canonicalRootByRoot.peek(n);
  if (a === void 0) o.canonicalRootByRoot.set(n, r);else if (a !== r) t("git root prime: findCanonicalGitRoot already holds a different answer for the root; keeping the first", {
    level: "warn"
  });
}
function KN(e) {
  let n = Fn(e);
  return n !== null && Lo(e) !== n;
}
function KWr(e) {
  let n = eS(e);
  return n !== null && Le(n) !== n;
}
async function YWr(e) {
  if (Lt()) return null;
  let n = await eT(e);
  if (!n || ge(n) === ".git" || ge(V(n)) !== "worktrees") return null;
  return ge(n);
}
var zft = ["--no-ext-diff", "--no-textconv"],
  XWr = ["--no-color", "--src-prefix=a/", "--dst-prefix=b/", "--submodule=short"];
function yt() {
  let e = Kd();
  return e.gitExecutable ??= I$("git") || "git", e.gitExecutable;
}
var en = new Nt(() => new Map());
async function ko() {
  let e = Date.now();
  K("info", "is_git_check_started");
  let n = pg(),
    is_git = n !== null && Fn(n) !== null;
  return K("info", "is_git_check_completed", {
    duration_ms: Date.now() - e,
    is_git: is_git
  }), is_git;
}
function tn() {
  return j();
}
function nA() {
  let e = en.of(tn()),
    n = Y(),
    r = e.get(n);
  if (r !== void 0) return r;
  let o = ko();
  return e.set(n, o), o;
}
function Gft(e) {
  en.of(e).clear(), Kd().diffCheckoutIsRepo.clear();
}
function $Ue() {
  Gft(tn());
}
function S2(e) {
  return eT(e);
}
var JWr = async e => Fn(e) !== null,
  Vft = async () => ehn(),
  Xl = async (cwd, n = {
    env: No()
  }) => {
    if (cwd === void 0) return N$o();
    let {
      stdout: stdout_2,
      code: code_6
    } = await Ve(yt(), [...mn, "rev-parse", "--abbrev-ref", "HEAD"], {
      cwd: cwd,
      preserveOutputOnError: !1,
      ...n
    });
    return code_6 === 0 ? stdout_2.trim() || "HEAD" : "HEAD";
  };
async function HBt(e, n) {
  return (await Ve(yt(), [...mn, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${e}`], {
    cwd: n ?? oe(),
    preserveOutputOnError: !1,
    env: No()
  })).code === 0;
}
var tE = async (cwd_2, n = {
    env: No()
  }) => {
    if (cwd_2 === void 0) return H$o();
    let r = await JYn(cwd_2, n);
    if (r) return r;
    for (let o of jft) if ((await Ve(yt(), [...mn, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${o}`], {
      cwd: cwd_2,
      preserveOutputOnError: !1,
      ...n
    })).code === 0) return o;
    return "main";
  },
  JYn = async (e, n = {
    env: No()
  }) => {
    let {
      stdout: stdout_3,
      code: code_7
    } = await Ve(yt(), [...mn, "symbolic-ref", "--short", "refs/remotes/origin/HEAD"], {
      cwd: e ?? oe(),
      preserveOutputOnError: !1,
      ...n
    });
    if (code_7 !== 0) return null;
    let s = stdout_3.trim().replace(/^origin\//, "");
    if (!s) return null;
    return (await Ve(yt(), [...mn, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${s}`], {
      cwd: e ?? oe(),
      preserveOutputOnError: !1,
      ...n
    })).code === 0 ? s : null;
  },
  Co = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
async function thn(e) {
  let {
    stdout: stdout_4,
    code: code_8
  } = await tt(yt(), [...mn, "config", "--get", e], {
    preserveOutputOnError: !1,
    useCwd: !0,
    env: No()
  });
  if (code_8 !== 0) return null;
  let o = stdout_4.trim();
  return o.length > 0 ? o : null;
}
async function vo(e) {
  let n = await thn("remote.pushDefault");
  if (n && e.includes(n)) return n;
  if (e.length === 1) return e[0] ?? null;
  return null;
}
async function FBt() {
  let {
    stdout: stdout_5,
    code: code_9
  } = await tt(yt(), [...mn, "remote"], {
    preserveOutputOnError: !1,
    useCwd: !0,
    env: No()
  });
  if (code_9 !== 0) return [];
  let r = stdout_5.split(`
`).map(item => item.trim()).filter(Boolean),
    o = new Set();
  if (r.includes("origin")) o.add("origin");
  let s = await vo(r);
  if (s && Co.test(s)) o.add(s);
  return [...o];
}
function $Bt(e) {
  return e.flatMap(item => [`git push ${item} *`, `git push -u ${item} *`]);
}
function f_e(e) {
  return Wt(VAe(e)).filter(item => item.startsWith("PowerShell("));
}
var Vne = async () => UWr(),
  QYn = async () => {
    let e = pg(),
      n = e === null ? null : Fn(e);
    if (n === null || (await ZYn(n))) return null;
    return UWr();
  };
async function ZYn(e) {
  let n;
  try {
    n = Io();
  } catch {
    return !1;
  }
  if (!n) return !1;
  if (e === xn(O(n))) return !0;
  let r = await Po(n).then(o => xn(o), () => null);
  return r !== null && e === r;
}
var UUe = async () => {
  let [branch, gitRepoUrl, defaultBranch] = await Promise.all([Xl(), QYn(), F$o()]);
  return {
    branch: branch,
    gitRepoUrl: gitRepoUrl,
    defaultBranch: defaultBranch
  };
};
function YAe(e) {
  return e == null ? e : e.replace(/:\/\/[^/]*@/, "://***@");
}
function w2(e) {
  let n = e.trim();
  if (!n) return null;
  let r = n.match(/^git@([^:/@]+):(.+?)(?:\.git)?$/);
  if (r && r[1] && r[2]) return `${r[1]}/${r[2]}`.toLowerCase();
  let o = n.match(/^(?:https?|ssh):\/\/(?:[^@/?#]*@)?([^/?#@]+)\/(.+?)(?:\.git)?$/);
  if (o && o[1] && o[2]) {
    let s = o[1],
      i = o[2];
    if (n5n(s) && i.startsWith("git/")) {
      let a = i.slice(4),
        u = a.split("/");
      if (u.length >= 3 && u[0].includes(".")) return a.toLowerCase();
      return `github.com/${a}`.toLowerCase();
    }
    return `${s}/${i}`.toLowerCase();
  }
  return null;
}
function Ao(e) {
  let n = e ? Ze(e, ":").toLowerCase() : null;
  if (!n) return "none";
  if (Ro(n) || n.endsWith(`.${Ho}`)) return "github";
  if (n.endsWith(".ghe.com") || n.includes("github")) return "ghe";
  if (n === "gitlab.com" || n.includes("gitlab")) return "gitlab";
  if (n === "bitbucket.org" || n.includes("bitbucket")) return "bitbucket";
  if (n === "dev.azure.com" || n === "ssh.dev.azure.com" || n.endsWith(".visualstudio.com") || n.endsWith(".azure.com")) return "azure";
  return "other";
}
async function QWr() {
  if (Lt()) return null;
  let [is_git_2, n] = await Promise.all([nA(), Vne()]).catch(() => [!1, null]),
    r = n ? w2(n) : null;
  return {
    is_git: is_git_2,
    has_remote: r !== null,
    remote_host_class: Ao(r ? Ze(r, "/") : null)
  };
}
function Fo(e) {
  for (let n of [S(e, ".git", "config"), S(e, "config")]) try {
    if (lj(n, e)) continue;
    return M(n, "utf-8");
  } catch {}
  return null;
}
function Do(e) {
  let n = Fo(e);
  if (!n) return oK;
  let r = o => {
    let s = Q(n, "remote", "origin", o);
    return s ? w2(s) : null;
  };
  return r("pushurl") ?? r("url") ?? oK;
}
function G8e(e) {
  let n = Gne(Kd().remoteSlugByRoot, e, Do);
  return n === oK ? null : n;
}
var To = 128000;
function jo(e, n) {
  try {
    let r = !0;
    try {
      if (Xt(S(e, ".git")).isFile()) return {
        ok: !1,
        cause: "pointer_file"
      };
    } catch (error) {
      if (!B(error)) return {
        ok: !1,
        cause: "read_failed"
      };
      r = !1;
    }
    let gitDir = r ? S(e, ".git") : e,
      s = Oo(S(gitDir, "config"), e, n);
    return s.ok ? {
      ...s,
      gitDir: gitDir
    } : s;
  } catch {
    return {
      ok: !1,
      cause: "read_failed"
    };
  }
}
function Oo(e, n, r) {
  if (lj(e, n)) return {
    ok: !1,
    cause: "unsafe_path"
  };
  let o = qt(e);
  if (!o.isFile()) return {
    ok: !1,
    cause: "not_a_file"
  };
  if (o.size > r) return {
    ok: !1,
    cause: "oversize"
  };
  return {
    ok: !0,
    text: M(e, "utf-8")
  };
}
function UBt(e) {
  let n = jo(e, To);
  return n.ok ? n.text : null;
}
async function ZWr() {
  let e = await Vne();
  if (!e) return null;
  let n = w2(e);
  if (!n) return null;
  return So("sha256").update(n).digest("hex").substring(0, 16);
}
var e5n = async () => {
    let {
      code: code_10
    } = await tt(yt(), [...mn, "rev-parse", "@{u}"], {
      preserveOutputOnError: !1,
      env: No()
    });
    return code_10 === 0;
  },
  BBt = async cwd_3 => {
    let {
      stdout: stdout_6,
      code: code_11
    } = await Ve(yt(), [...mn, "rev-list", "--count", "@{u}..HEAD"], {
      cwd: cwd_3,
      preserveOutputOnError: !1,
      env: No()
    });
    return code_11 === 0 && parseInt(stdout_6.trim(), 10) > 0;
  },
  BUe = async e => {
    let n = [...mn, "--no-optional-locks", "status", "--porcelain", vb];
    if (e?.ignoreUntracked) n.push("-uno");
    let {
      stdout: stdout_7
    } = await tt(yt(), n, {
      preserveOutputOnError: !1,
      env: No()
    });
    return stdout_7.trim().length === 0;
  },
  jBt = async (cwd_4, env = No()) => {
    let r = [...mn, "--no-optional-locks", "status", "--porcelain", vb],
      {
        stdout: stdout_8
      } = cwd_4 === void 0 ? await tt(yt(), r, {
        preserveOutputOnError: !1,
        env: env
      }) : await Ve(yt(), r, {
        cwd: cwd_4,
        preserveOutputOnError: !1,
        env: env
      }),
      tracked = [],
      untracked = [];
    return stdout_8.trim().split(`
`).filter(item => item.length > 0).forEach(item => {
      let u = item.substring(0, 2),
        f = item.substring(2).trim();
      if (u === "??") untracked.push(f);else if (f) tracked.push(f);
    }), {
      tracked: tracked,
      untracked: untracked
    };
  },
  qft = async () => $$o();
async function t5n() {
  try {
    let [commitHash, branchName, remoteUrl, isHeadOnRemote, isClean, worktreeCount] = await Promise.all([Vft(), Xl(), Vne(), e5n(), BUe(), qft()]);
    return _("git_status_fetch"), {
      commitHash: commitHash,
      branchName: branchName,
      remoteUrl: remoteUrl,
      isHeadOnRemote: isHeadOnRemote,
      isClean: isClean,
      worktreeCount: worktreeCount
    };
  } catch (error) {
    return m("git_status_fetch", "git_status_fetch_failed"), null;
  }
}
async function ezr() {
  let {
      parseGitRemote: parseGitRemote
    } = await import("B:/~BUN/root/chunk-12npfqes.js"),
    n = await Vne();
  if (!n) return t("Local GitHub repo: unknown"), null;
  let r = parseGitRemote(n);
  if (r && Ro(r.host)) {
    let o = `${r.owner}/${r.name}`;
    return t(`Local GitHub repo: ${o}`), o;
  }
  return t("Local GitHub repo: unknown"), null;
}
function n5n(e) {
  let n = e.indexOf(":"),
    r = n === -1 ? e : e.slice(0, n),
    o = n === -1 ? "" : e.slice(n + 1);
  if (o !== "" && !/^\d+$/.test(o)) return !1;
  return r === "localhost" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(r);
}
var Mo = 4096;
function zt(e, n, r) {
  let o = /[\\/]+/,
    s = n.split(o),
    i = s[0] === "" ? A : s[0] + A,
    a = 0;
  for (let u = 1; u < s.length; u++) {
    let f = s[u];
    if (f === "" || f === ".") continue;
    if (f === "..") {
      i = V(i);
      continue;
    }
    let y = i.endsWith(A) ? i + f : i + A + f;
    if (r !== void 0 ? sM(y, r) : Wi(y)) return null;
    let b;
    try {
      b = e.lstatSync(y);
    } catch {
      return null;
    }
    if (!b.isSymbolicLink()) {
      i = y;
      continue;
    }
    if (++a > 64) return null;
    let h;
    try {
      h = e.readlinkSync(y);
    } catch {
      return null;
    }
    if (Dn(h)) return null;
    if (r !== void 0 ? sM(h, r) : Wi(h)) return null;
    let c = h.split(o);
    if (De(h)) s.splice(0, u + 1, ...c), i = c[0] === "" ? A : c[0] + A, u = 0;else s.splice(u, 1, ...c), u--;
  }
  return i;
}
function jUe() {
  let e = ce(),
    n = oe(),
    r = zt(e, n, n) ?? n;
  try {
    r = me.native(r);
  } catch {}
  r = r.normalize("NFC").toLowerCase();
  let o = r.endsWith(A) ? r : r + A,
    s = c => {
      let g = c.toLowerCase();
      return g === r || g.startsWith(o);
    };
  function i(c) {
    if (sM(c, n)) return null;
    if (Dn(c)) {
      if (!kl(c)) return null;
      if (!Dn(n)) return {
        canonical: c.normalize("NFC"),
        crossOs: !0
      };
    }
    let g = zt(e, c, n);
    if (g === null) return null;
    try {
      g = me.native(g);
    } catch {
      return null;
    }
    return {
      canonical: g.normalize("NFC"),
      crossOs: !1
    };
  }
  function a(c, g) {
    if (!g && s(c)) return !0;
    for (let E of c.split(g ? /[\\/]+/ : A)) if (E.toLowerCase() === ".git") return !1;
    return !0;
  }
  function u(c) {
    try {
      let g = e.lstatSync(S(c, "HEAD"));
      if (!g.isFile() || g.size > 4096) return !1;
      let E = M(S(c, "HEAD"), "utf8").slice(0, 255);
      return /^ref:[ \t]*refs\//.test(E) || /^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(E);
    } catch {
      return !1;
    }
  }
  function f(c) {
    try {
      let g = S(c, "HEAD"),
        E = e.lstatSync(g);
      if (!E.isFile() || E.size > 4096) return !1;
      let R = M(g, "utf8").slice(0, 255);
      if (!/^ref:[ \t]*refs\//.test(R) && !/^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(R)) return !1;
      for (let w of ["objects", "refs"]) {
        let F = S(c, w);
        if (!e.statSync(F).isDirectory()) return !1;
        Eo(F, wo.X_OK);
      }
      try {
        return e.statSync(S(c, "commondir")), !1;
      } catch {}
      return !0;
    } catch {
      return !1;
    }
  }
  function y(c) {
    try {
      let g = e.lstatSync(S(c, "HEAD"));
      if (g.isFile() || g.isSymbolicLink()) return !0;
    } catch {}
    for (let g of ["objects", "refs"]) try {
      return e.statSync(S(c, g)), !0;
    } catch {}
    return !1;
  }
  function b(c) {
    let g = E => {
      let R = i(E);
      if (R === null) return p("git_bare_repo_gate", "gitdir_target_uncanonical"), "plantable";
      if (a(R.canonical, R.crossOs)) return p("git_bare_repo_gate", "gitdir_target_plantable"), "plantable";
      return u(R.canonical) ? "trusted" : "none";
    };
    try {
      let E = e.lstatSync(S(c, ".git"));
      if (E.isSymbolicLink()) {
        let R;
        try {
          R = e.readlinkSync(S(c, ".git"));
        } catch {
          return "plantable";
        }
        return g(De(R) ? R : c + A + R);
      }
      if (E.isFile()) {
        if (E.size > Mo) return "oversized";
        try {
          let R = M(S(c, ".git"), "utf8");
          if (R.includes("\x00")) return "plantable";
          if (!R.startsWith("gitdir: ")) return "none";
          let w = R.slice(8).replace(/[\r\n]+$/, "");
          return g(De(w) ? w : c + A + w);
        } catch {
          return "none";
        }
      }
      if (E.isDirectory()) return f(S(c, ".git")) ? "trusted" : "none";
    } catch {}
    return "none";
  }
  switch (b(n)) {
    case "plantable":
      return "gitdir-redirect-plantable";
    case "oversized":
      return "gitdir-file-oversized";
    case "trusted":
      return _("git_bare_repo_gate"), !1;
    case "none":
      break;
  }
  let h = n;
  for (;;) {
    if (y(h)) return p("git_bare_repo_gate", "bare_indicators"), "bare-indicators";
    let c = V(h);
    if (c === h) break;
    switch (b(c)) {
      case "trusted":
        return _("git_bare_repo_gate"), !1;
      case "plantable":
        return "gitdir-redirect-plantable";
      case "oversized":
        return "gitdir-file-oversized";
      case "none":
        break;
    }
    h = c;
  }
  return _("git_bare_repo_gate"), !1;
}
import { watchFile as Ko } from "fs";
function Zgn(e, n, r) {
  let o = (s, i) => {
    try {
      r(s, i);
    } catch (error) {
      d(error);
    }
  };
  try {
    Ko(e, n, o);
  } catch (error) {
    d(error);
  }
  return o;
}
import { open as Go } from "fs/promises";
import { join as $o } from "path";
var nn = 65536,
  Uo = 4096,
  z = 10,
  Wo = 32,
  rn = 94,
  Yo = 35,
  Vo = /^[0-9a-f]+$/;
async function on(e, n) {
  let r = Buffer.from(n, "utf-8"),
    o = r.length,
    s = Buffer.allocUnsafe(nn + 1),
    i,
    a = 0,
    u = 0,
    f = 0,
    y = 0,
    b = 0,
    h = 0,
    c = 0,
    g = 0,
    E = 0,
    R = 0,
    w = 0,
    F = 0,
    ie;
  try {
    i = await Go($o(e, "packed-refs"), "r"), a = (await i.stat()).size, f = a;
    while (u < f) {
      if (y = u + Math.floor((f - u) / 2), h = Math.max(u, y - Uo), c = (await i.read(s, 0, Math.min(nn, a - h), h)).bytesRead, b = y - h, b >= c) return null;
      if (s[c] = z, g = b > 0 ? s.lastIndexOf(z, b - 1) + 1 : 0, g > 1 && s[g] === rn) g = s.lastIndexOf(z, g - 2) + 1;
      if (s[g] === Yo) {
        w = s.indexOf(z, g), u = h + (w < 0 || w >= c ? c : w + 1);
        continue;
      }
      if (E === 0) E = g + 40 < c && s[g + 40] === Wo ? 40 : 64;
      if (R = g + E + 1, R >= c) return null;
      if (F = s.compare(r, 0, o, R, Math.min(R + o, c)), F === 0) {
        if (R + o < c && s[R + o] !== z) {
          f = h + g;
          continue;
        }
        return ie = s.toString("ascii", g, g + E), Vo.test(ie) ? ie : null;
      }
      if (F < 0) {
        if (w = s.indexOf(z, b), w < 0 || w >= c) w = c - 1;
        if (w + 1 < c && s[w + 1] === rn) {
          if (w = s.indexOf(z, w + 1), w < 0 || w >= c) w = c - 1;
        }
        u = h + w + 1;
      } else f = h + g;
    }
    return null;
  } catch {
    return null;
  } finally {
    await i?.close();
  }
}
function DBt() {
  Kd().gitDirByCwd.clear();
}
async function eT(e) {
  let n = e ?? pg();
  if (n === null) return null;
  let r = T(n),
    o = Kd().gitDirByCwd.get(r);
  if (o !== void 0) return o;
  return dn(r, Fn(r));
}
async function b5o(e) {
  let n = T(e);
  return dn(n, eS(n));
}
async function dn(e, n) {
  let gitDirByCwd = Kd().gitDirByCwd;
  if (!n) return gitDirByCwd.set(e, null), null;
  let o = x(n, ".git");
  try {
    if ((await ss(o)).isFile()) {
      let i = await tA(o, NUe, {
        sniffEncoding: !0,
        withBytes: !0
      });
      if (i === null || i.truncated) return gitDirByCwd.set(e, null), null;
      let a = i.content.trim();
      if (a.startsWith("gitdir:")) {
        let u = a.slice(7).trim();
        if (_i(u, n)) return gitDirByCwd.set(e, null), null;
        let f = T(n, u);
        if (ee(u, n)) return gitDirByCwd.set(e, null), null;
        return gitDirByCwd.set(e, f), f;
      }
    }
    return gitDirByCwd.set(e, o), o;
  } catch {
    return gitDirByCwd.set(e, null), null;
  }
}
function fn(e) {
  try {
    let n = Jo(e);
    if (n.isSymbolicLink()) return "symlink";
    return n.isFile() ? "file" : n.isDirectory() ? "dir" : "other";
  } catch (error) {
    let r = v(error);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "other";
  }
}
function LBt(e) {
  try {
    let n = Qo(e, {
        encoding: "buffer"
      }),
      r = n.toString("utf-8");
    if (r.includes("\x00") || !Buffer.from(r, "utf-8").equals(n)) return null;
    return r;
  } catch {
    return null;
  }
}
function qx(e, n) {
  if (!se(e, n)) return !0;
  let r = fn(e);
  return r === "symlink" || r === "other";
}
function cs(e, n) {
  let r = as(n, e);
  return !(r === "" || r.startsWith("..") || is(r));
}
function lj(e, n) {
  if (!cs(e, n)) return !0;
  return !se(e, n);
}
function ls(e, n) {
  return _i(e, n);
}
var us = /[/\\]+/,
  ds = /[\\/]$/,
  pn = /^(?:[/\\]|[A-Za-z]:[/\\])/,
  fs = /^(?:[/\\]{2}[^/\\]+[/\\][^/\\]+[/\\]?|[A-Za-z]:[/\\]|[/\\])/;
function se(e, n, r = 40, o = n) {
  if (r <= 0) return !1;
  let s = fs.exec(e),
    i = s ? s[0] : "",
    a = e.slice(i.length).split(us);
  for (let u = 0; u < a.length; u++) {
    let f = a[u];
    if (f === "" || f === ".") continue;
    if (f === "..") {
      i = he(i);
      continue;
    }
    if (i = x(i, f), sM(i, o) || bH(i)) return !1;
    let y = fn(i);
    if (y === "other") return !1;
    if (y === "symlink") {
      let b = LBt(i);
      if (b === null) return !1;
      if (ls(b, he(i))) return !1;
      let h = pn.test(b) ? b : he(i) + ye + b,
        c = a.slice(u + 1).join(ye),
        g = c ? ds.test(h) ? h + c : h + ye + c : h;
      return se(g, n, r - 1, o);
    }
  }
  return !0;
}
function ee(e, n, r = n) {
  if (!se(pn.test(e) ? e : n + ye + e, n, void 0, r)) return !0;
  return !se(T(n, e), n, void 0, r);
}
function Bm(e, n, r = n) {
  return ee(e, n, r);
}
function UJ(e) {
  return /^[0-9a-f]{40}$/.test(e) || /^[0-9a-f]{64}$/.test(e);
}
async function LUe(e) {
  try {
    if (lj(x(e, "HEAD"), e)) return null;
    let sha_2 = (await Re(x(e, "HEAD"), "utf-8")).trim();
    if (sha_2.startsWith("ref:")) {
      let r = sha_2.slice(4).trim();
      if (r.startsWith("refs/heads/")) {
        let name = r.slice(11);
        if (!dT(name)) return null;
        return {
          type: "branch",
          name: name
        };
      }
      if (!dT(r)) return null;
      let sha = await sK(e, r);
      return sha ? {
        type: "detached",
        sha: sha
      } : {
        type: "detached",
        sha: ""
      };
    }
    if (!UJ(sha_2)) return null;
    return {
      type: "detached",
      sha: sha_2
    };
  } catch {
    return null;
  }
}
async function sK(e, n, r = 5) {
  if (r <= 0) return null;
  let o = await sn(e, n, r);
  if (o) return o;
  let s = await cj(e);
  if (s && s !== e) return sn(s, n, r);
  return null;
}
async function sn(e, n, r) {
  try {
    if (lj(x(e, n), e)) return null;
    let o = (await Re(x(e, n), "utf-8")).trim();
    if (o.startsWith("ref:")) {
      let s = o.slice(4).trim();
      if (!dT(s)) return null;
      return sK(e, s, r - 1);
    }
    if (!UJ(o)) return null;
    return o;
  } catch {}
  if (lj(x(e, "packed-refs"), e)) return null;
  return on(e, n);
}
var NUe = 65536;
async function cj(e) {
  try {
    if (qx(x(e, "commondir"), e)) return null;
    let n = await tA(x(e, "commondir"), NUe, {
      sniffEncoding: !0,
      withBytes: !0
    });
    if (n === null || n.truncated) return null;
    let r = n.content.trim();
    if (_i(r, e)) return null;
    if (ee(r, e)) return null;
    return T(e, r);
  } catch {
    return null;
  }
}
async function gn(e, n, r) {
  try {
    if (lj(x(e, n), e)) return null;
    let o = (await Re(x(e, n), "utf-8")).trim();
    if (o.startsWith("ref:")) {
      let s = o.slice(4).trim();
      if (s.startsWith(r)) {
        let i = s.slice(r.length);
        if (!dT(i)) return null;
        return i;
      }
    }
  } catch {}
  return null;
}
var interval = 1000;
class hn {
  gitDir = null;
  commonDir = null;
  initialized = !1;
  initPromise = null;
  watchedFiles = [];
  branchRefPath = null;
  generation = 0;
  cache = new Map();
  stateChanged = Me();
  repoBranches = new Map();
  repoWatchers = new Map();
  repoBranchListeners = [];
  async ensureStarted() {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;
    return this.initPromise = this.start(), this.initPromise;
  }
  cleanupHandle = null;
  async start() {
    let generation = this.generation;
    if (Lt()) {
      this.gitDir = null, this.initialized = !0;
      return;
    }
    let n = await eT();
    if (generation !== this.generation) return;
    if (this.gitDir = n, this.initialized = !0, !this.cleanupHandle) this.cleanupHandle = gt(async () => {
      this.stopWatching();
    });
    if (!this.gitDir) return;
    let r = await cj(this.gitDir);
    if (generation !== this.generation) return;
    this.commonDir = r, this.watchPath(x(this.gitDir, "HEAD"), this.gitDir, () => {
      this.onHeadChanged();
    }), this.watchPath(x(this.commonDir ?? this.gitDir, "config"), this.commonDir ?? this.gitDir, () => {
      this.invalidate();
    }), this.watchPath(x(this.commonDir ?? this.gitDir, "refs", "remotes", "origin", "HEAD"), this.commonDir ?? this.gitDir, () => {
      this.invalidate();
    }), await this.watchCurrentBranchRef();
  }
  watchPath(path_2, n, r) {
    if (lj(path_2, n)) return;
    let listener = Zgn(path_2, {
      interval: interval
    }, r);
    this.watchedFiles.push({
      path: path_2,
      listener: listener
    });
  }
  async watchCurrentBranchRef() {
    if (!this.gitDir) return;
    let generation_2 = this.generation,
      n = await LUe(this.gitDir);
    if (generation_2 !== this.generation) return;
    let r = this.commonDir ?? this.gitDir,
      o = n?.type === "branch" ? x(r, "refs", "heads", n.name) : null;
    if (o === this.branchRefPath) return;
    if (this.branchRefPath) {
      for (let {
        path: path_3,
        listener: listener_2
      } of this.watchedFiles) if (path_3 === this.branchRefPath) re(path_3, listener_2);
      this.watchedFiles = this.watchedFiles.filter(item => item.path !== this.branchRefPath);
    }
    if (this.branchRefPath = o, !o) return;
    this.watchPath(o, r, () => {
      this.invalidate();
    });
  }
  async onHeadChanged() {
    this.invalidate(), await V1t(), await this.watchCurrentBranchRef();
  }
  invalidate() {
    for (let e of this.cache.values()) e.dirty = !0;
    this.stateChanged.emit();
  }
  onStateChange(e) {
    return this.stateChanged.subscribe(e);
  }
  stopWatching() {
    for (let {
      path: path_4,
      listener: listener_3
    } of this.watchedFiles) re(path_4, listener_3);
    for (let {
      headPath: headPath,
      listener: listener_4
    } of this.repoWatchers.values()) re(headPath, listener_4);
    this.watchedFiles = [], this.branchRefPath = null;
  }
  async get(e, n) {
    for (;;) {
      let generation_3 = this.generation;
      await this.ensureStarted();
      let o = this.cache.get(e);
      if (o && !o.dirty) return o.value;
      if (o) o.dirty = !1;
      let value_2 = await n();
      if (generation_3 !== this.generation) continue;
      let i = this.cache.get(e);
      if (i && !i.dirty) i.value = value_2;
      if (!i) this.cache.set(e, {
        value: value_2,
        dirty: !1
      });
      return value_2;
    }
  }
  async getDefaultBranchIfKnownAnchored() {
    let e = await this.get("defaultBranchIfKnown", this.computeDefaultBranchIfKnownAnchored);
    if (e === null) return e;
    let n = this.commonDir ?? this.gitDir;
    if (n && (await sK(n, `refs/remotes/origin/${e}`))) return e;
    let r = this.cache.get("defaultBranchIfKnown");
    if (r) r.dirty = !0;
    return this.get("defaultBranchIfKnown", this.computeDefaultBranchIfKnownAnchored);
  }
  computeDefaultBranchIfKnownAnchored = async () => {
    let gitDir_2 = this.gitDir;
    if (!gitDir_2) return null;
    let n = this.commonDir ?? gitDir_2,
      r = await gn(n, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
    if (r && (await sK(n, `refs/remotes/origin/${r}`))) return r;
    return null;
  };
  async addRepo(e) {
    if (this.repoWatchers.has(e)) return;
    let gitDir_3 = await eT(e);
    if (!gitDir_3) return;
    if (this.repoWatchers.has(e)) return;
    let headPath_2 = x(gitDir_3, "HEAD");
    if (lj(headPath_2, gitDir_3)) return;
    let listener_5 = Zgn(headPath_2, {
      interval: interval
    }, () => {
      this.repoBranches.delete(e);
      for (let s of this.repoBranchListeners) s();
    });
    this.repoWatchers.set(e, {
      gitDir: gitDir_3,
      headPath: headPath_2,
      listener: listener_5
    });
  }
  removeRepo(e) {
    let n = this.repoWatchers.get(e);
    if (!n) return;
    re(n.headPath, n.listener), this.repoWatchers.delete(e), this.repoBranches.delete(e);
  }
  onRepoBranchChange(e) {
    return this.repoBranchListeners.push(e), () => {
      let n = this.repoBranchListeners.indexOf(e);
      if (n !== -1) this.repoBranchListeners.splice(n, 1);
    };
  }
  async getBranchForRepo(e) {
    if (this.repoBranches.has(e)) return this.repoBranches.get(e);
    let n = this.repoWatchers.get(e)?.gitDir;
    if (!n) return;
    let r = await LUe(n),
      o = r?.type === "branch" ? r.name : null;
    return this.repoBranches.set(e, o), o;
  }
  reset() {
    this.generation++, this.stopWatching(), this.cleanupHandle?.(), this.cleanupHandle = null, this.cache.clear(), this.stateChanged.clear(), this.repoBranches.clear(), this.repoWatchers.clear(), this.repoBranchListeners = [], this.initialized = !1, this.initPromise = null, this.gitDir = null, this.commonDir = null;
  }
  reanchor() {
    this.generation++;
    for (let {
      path: path_5,
      listener: listener_6
    } of this.watchedFiles) re(path_5, listener_6);
    this.watchedFiles = [], this.branchRefPath = null, this.cache.clear(), this.initialized = !1, this.initPromise = null, this.gitDir = null, this.commonDir = null;
  }
}
var ps = new q(() => new hn());
function D() {
  return ps.of(j().host);
}
async function gs() {
  let e = await eT();
  if (!e) return "HEAD";
  let n = await LUe(e);
  if (!n) return "HEAD";
  return n.type === "branch" ? n.name : "HEAD";
}
async function ms() {
  let e = await eT();
  if (!e) return "";
  let n = await LUe(e);
  if (!n) return "";
  if (n.type === "branch") return (await sK(e, `refs/heads/${n.name}`)) ?? "";
  return n.sha;
}
async function be(e) {
  if (lj(x(e, "config"), e)) return null;
  return (await IBt(e, "remote", "origin", "pushurl")) || (await IBt(e, "remote", "origin", "url"));
}
async function hs() {
  let e = await eT();
  if (!e) return null;
  let n = await be(e);
  if (n) return n;
  let r = await cj(e);
  if (r && r !== e) return be(r);
  return null;
}
var jft = ["main", "master"];
async function ys() {
  let e = await eT();
  if (!e) return "main";
  let n = (await cj(e)) ?? e,
    r = await gn(n, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
  if (r && (await sK(n, `refs/remotes/origin/${r}`))) return r;
  for (let o of jft) if (await sK(n, `refs/remotes/origin/${o}`)) return o;
  return "main";
}
function N$o() {
  return D().get("branch", gs);
}
function ehn() {
  return D().get("head", ms);
}
function UWr() {
  return D().get("remoteUrl", hs);
}
function H$o() {
  return D().get("defaultBranch", ys);
}
function F$o() {
  return D().getDefaultBranchIfKnownAnchored();
}
function BWr(e) {
  return D().addRepo(e);
}
function S5o(e) {
  D().removeRepo(e);
}
function jWr(e) {
  return D().onRepoBranchChange(e);
}
function WWr(e) {
  let n = D();
  return n.ensureStarted(), n.onStateChange(e);
}
function zWr(e) {
  return D().getBranchForRepo(e);
}
function GWr() {
  D().reset();
}
function RY() {
  D().reanchor();
}
async function VYn(e) {
  let n = await eT(e);
  if (!n) return null;
  let r = await LUe(n);
  if (!r) return null;
  if (r.type === "branch") return sK(n, `refs/heads/${r.name}`);
  return r.sha;
}
async function VWr(e, n) {
  let r = T(e),
    o = Fn(r),
    s = xn(T(n));
  if (o === null || !Km(s, o, {
    alreadyComparable: !0
  })) return (await cn(r, s)) ? {
    repo: !1
  } : {
    repo: !0,
    sha: null
  };
  let [i, a] = await Promise.all([ln(s), ln(o)]);
  if (i === null || a === null || !Km(i, a, {
    alreadyComparable: !0
  })) return {
    repo: !0,
    sha: null
  };
  let u = await eT(r);
  if (u !== null && (await yn(x(u, "HEAD")))) {
    if (await cn(r, s, o)) return {
      repo: !1
    };
    return {
      repo: !0,
      sha: null
    };
  }
  return {
    repo: !0,
    sha: await VYn(r)
  };
}
async function cn(e, n, r) {
  let o = e;
  for (;;) {
    let s = xn(o);
    if (s !== r && !(await yn(x(o, ".git")))) return !1;
    let i = he(o);
    if (s === n || i === o) return !0;
    o = i;
  }
}
async function yn(e) {
  try {
    return await ns(e), !1;
  } catch (error) {
    let r = v(error);
    return r === "ENOENT" || r === "ENOTDIR";
  }
}
async function ln(e) {
  try {
    return xn(await os(e));
  } catch {
    return null;
  }
}
async function qYn(e) {
  let n;
  try {
    if (qx(x(e, ".git"), e)) return null;
    let o = (await Re(x(e, ".git"), "utf-8")).trim();
    if (!o.startsWith("gitdir:")) return null;
    let s = o.slice(7).trim();
    if (_i(s, e)) return null;
    if (ee(s, e)) return null;
    n = T(e, s);
  } catch {
    return null;
  }
  let r = await LUe(n);
  if (!r) return null;
  if (r.type === "branch") return sK(n, `refs/heads/${r.name}`);
  return r.sha;
}
async function HUe(e) {
  let n = await eT(e);
  if (!n) return null;
  return KYn(n);
}
async function KYn(e, n) {
  let r = await be(e);
  if (r) return r;
  let o = n ?? (await cj(e));
  if (o && o !== e) return be(o);
  return null;
}
function w5o(e) {
  let n = bs(e);
  if (!n) return null;
  let r = un(n);
  if (r) return r;
  let o = Rs(n);
  return o && o !== n ? un(o) : null;
}
function bs(e) {
  let n = T(e),
    r = Kd().gitDirByCwd.get(n);
  if (r !== void 0) return r;
  let o = Fn(n);
  if (!o) return null;
  let s = x(o, ".git");
  try {
    if (!ts(s).isFile()) return s;
    let i = FUe(s, NUe)?.trim();
    if (i === void 0 || !i.startsWith("gitdir:")) return i === void 0 ? null : s;
    let a = i.slice(7).trim();
    return _i(a, o) || ee(a, o) ? null : T(o, a);
  } catch {
    return null;
  }
}
function Rs(e) {
  try {
    if (qx(x(e, "commondir"), e)) return null;
    let n = FUe(x(e, "commondir"), NUe)?.trim();
    return n === void 0 || _i(n, e) || ee(n, e) ? null : T(e, n);
  } catch {
    return null;
  }
}
var Wft = 1e6;
function un(e) {
  let n = x(e, "config");
  if (lj(n, e)) return null;
  let r = FUe(n, Wft, {
    keepWholeLines: !0
  });
  if (r === void 0) return null;
  return Q(r, "remote", "origin", "pushurl") || Q(r, "remote", "origin", "url");
}
function FUe(e, n, {
  keepWholeLines = !1
} = {}) {
  let o;
  try {
    o = Zo(e, Xo.O_RDONLY | WBt);
    let s = qo(o);
    if (!s.isFile() || s.size > n) return;
    let i = Buffer.allocUnsafe(n),
      a = 0;
    while (a < n) {
      let f = es(o, i, a, n - a, a);
      if (f === 0) break;
      a += f;
    }
    let u = i.subarray(0, a).toString("utf-8");
    return keepWholeLines && a === n ? u.slice(0, Math.max(u.lastIndexOf(`
`), 0)) : u;
  } catch {
    return;
  } finally {
    if (o !== void 0) zo(o);
  }
}
async function $$o() {
  try {
    let e = await eT();
    if (!e) return 0;
    let n = (await cj(e)) ?? e;
    if (lj(x(n, "worktrees"), n)) return 1;
    return (await rs(x(n, "worktrees"))).length + 1;
  } catch {
    return 1;
  }
}
export { Vgn, qgn, NYn, jI, y$o, HYn, _$o, b$o, em, gde, W8e, S$o, Kgn, PWr, FYn, w$o, IWr, $Yn, lr, Ygn, Lt, va, zv, UYn, BYn, oK, Gne, Kd, VAe, TBt, CBt, RBt, ABt, OWr, xBt, PBt, MWr, v$o, IBt, DWr, k$o, E$o, T$o, qAe, jYn, WYn, Vx, OBt, Xgn, C$o, R$o, Jgn, KAe, Qgn, A$o, x$o, P$o, I$o, O$o, M$o, zYn, MBt, eA, hde, Py, s_, ij, aj, LWr, MUe, NWr, D$o, GYn, L$o, HWr, FWr, $Wr, tA, DUe, Zgn, DBt, eT, b5o, LBt, qx, lj, Bm, UJ, LUe, sK, NUe, cj, jft, N$o, ehn, UWr, H$o, F$o, BWr, S5o, jWr, WWr, zWr, GWr, RY, VYn, VWr, qYn, HUe, KYn, w5o, Wft, FUe, $$o, Fn, eS, YYn, tS, NBt, z8e, Lo, dj, qWr, XYn, KN, KWr, YWr, zft, XWr, yt, nA, Gft, $Ue, S2, JWr, Vft, Xl, HBt, tE, JYn, thn, FBt, $Bt, f_e, Vne, QYn, ZYn, UUe, YAe, w2, QWr, G8e, UBt, ZWr, e5n, BBt, BUe, jBt, qft, t5n, ezr, n5n, jUe };