// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { tK } from "B:/~BUN/root/chunk-x4gdh7dq.js";
import { F, K, Hzo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { zh, Ds } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, J, KW, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { MBr, VB, xA, ns, KB } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { q1t, _Br, Sg, mXn, bBr, kTe, m$, fR } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { pin } from "B:/~BUN/root/chunk-1s3ejbv6.js";
import { GS } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { OTe, e6s } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { nde, bf, Yx } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { D_ } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Zyt, NJ, fn } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { WNs, zNs } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Ca, mo, Zfe, kft, $Lt, PCo } from "B:/~BUN/root/chunk-c44qc88s.js";
import { PS } from "B:/~BUN/root/chunk-cvj1wxdh.js";
import { m_o } from "B:/~BUN/root/chunk-3a551r0y.js";
import { o, oe, T, u, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { WW, hde, Hne, _y } from "B:/~BUN/root/chunk-3rzwkd15.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
var context = 3,
  timeout = 5000;
function YHn(e, n) {
  if (n === 0) return e;
  return e.map(item => ({
    ...item,
    oldStart: item.oldStart + n,
    newStart: item.newStart + n
  }));
}
var ge = "<<:AMPERSAND_TOKEN:>>",
  pe = "<<:DOLLAR_TOKEN:>>";
function j(e) {
  return e.replaceAll("&", ge).replaceAll("$", pe);
}
function he(e) {
  return e.replaceAll(ge, "&").replaceAll(pe, "$");
}
function XHn(e, n, r, s) {
  let lines_added = 0,
    lines_removed = 0;
  if (e.length === 0 && (r || s)) lines_added = r ? $t(r, `
`) + 1 : 0, lines_removed = s ? $t(s, `
`) + 1 : 0;else lines_added = e.reduce((acc, item) => acc + F(item.lines, w => w.startsWith("+")), 0), lines_removed = e.reduce((acc, item) => acc + F(item.lines, w => w.startsWith("-")), 0);
  return Hzo(lines_added, lines_removed), m_o()?.add(lines_added, {
    type: "added",
    model: pin(n)
  }), m_o()?.add(lines_removed, {
    type: "removed",
    model: pin(n)
  }), {
    lines_added: lines_added,
    lines_removed: lines_removed
  };
}
function rIt(...e) {
  i("tengu_file_changed", XHn(...e));
}
function Dpe({
  filePath: filePath,
  oldContent: oldContent,
  newContent: newContent,
  ignoreWhitespace = !1,
  singleHunk = !1,
  convertTabs = !1,
  rawText = !1
}) {
  let S = rawText ? y => y : convertTabs ? y => j(m$(y)) : j,
    w = tK(filePath, filePath, S(oldContent), S(newContent), void 0, void 0, {
      ignoreWhitespace: ignoreWhitespace,
      context: singleHunk ? 1e5 : context,
      timeout: timeout
    });
  if (!w) return [];
  if (rawText) return w.hunks;
  return w.hunks.map(item => ({
    ...item,
    lines: item.lines.map(he)
  }));
}
function R6({
  filePath: filePath_2,
  fileContents: fileContents,
  edits: edits,
  ignoreWhitespace: ignoreWhitespace_2 = !1
}) {
  let a = j(m$(fileContents)),
    h = tK(filePath_2, filePath_2, a, edits.reduce((acc, item) => {
      let {
          old_string: old_string,
          new_string: new_string
        } = item,
        b = "replace_all" in item ? item.replace_all : !1,
        P = j(m$(old_string)),
        v = j(m$(new_string));
      if (b) return acc.replaceAll(P, () => v);else return acc.replace(P, () => v);
    }, a), void 0, void 0, {
      context: context,
      ignoreWhitespace: ignoreWhitespace_2,
      timeout: timeout
    });
  if (!h) return [];
  return h.hunks.map(item => ({
    ...item,
    lines: item.lines.map(he)
  }));
}
import { join as Ge } from "path";
import { randomBytes as we } from "crypto";
import { constants as me } from "fs";
import { lstat as re, open as Re, readdir as Fe, realpath as Oe, stat as Ie, unlink as ye } from "fs/promises";
import { homedir as De } from "os";
import { basename as Ce, dirname as A, join as L } from "path";
function O9(e) {
  return (e.startsWith("\uFEFF") ? e.slice(1) : e).replaceAll(`\r
`, `
`);
}
var version = 1,
  Ae = 64,
  Ne = 1048576,
  jwr = ".proposed-",
  We = /^[0-9a-f]{8}$/,
  Le = 900000,
  Be = {
    userSettings: "user_settings",
    projectSettings: "project_settings",
    localSettings: "local_settings",
    flagSettings: "policy_settings",
    policySettings: "policy_settings"
  },
  Me = f(() => u({
    id: o().min(1),
    path: o().min(1),
    resolvedPath: o().min(1),
    baseSha256: o().nullable(),
    proposedSha256: o(),
    proposedContent: o(),
    stagedAt: o(),
    by: u({
      tool: U(["Write", "Edit"]),
      origin: U(["local", "served"]),
      sessionId: o()
    })
  })),
  He = f(() => u({
    version: C(version),
    entries: T(Me())
  }));
function ne() {
  return L(De(), ".claude", "state", "settings-review.json");
}
var be = ["policySettings", "flagSettings", ...D_];
function M(e) {
  let n = mo(e);
  return be.find(item => {
    let s = fn(item);
    return s !== void 0 && mo(s) === n;
  });
}
async function ve(e) {
  let n;
  try {
    n = await locate(e);
  } catch {
    return M(e);
  }
  return Y(e, n);
}
async function Y(e, n) {
  let r = M(e);
  if (r !== void 0) return r;
  let s = mo(n);
  for (let a of be) {
    let h = fn(a);
    if (h === void 0) continue;
    try {
      if (mo(await locate(h)) === s) return a;
    } catch {}
  }
  return;
}
function Se(e) {
  let bom = e.content.startsWith("\uFEFF");
  return {
    text: bom ? e.content.slice(1) : e.content,
    encoding: e.encoding,
    bom: bom,
    lineEndings: e.lineEndings
  };
}
function q(e) {
  return {
    readStore: async () => {
      try {
        return await gn().read(ne());
      } catch (error) {
        if (G(error)) return;
        throw error;
      }
    },
    writeStore: async n => {
      let r = ne();
      await gn().mkdir(A(r), 448), await gn().atomicWrite(r, n, 384);
    },
    deleteStore: async () => {
      try {
        await gn().delete(ne());
      } catch (error) {
        if (!G(error)) throw error;
      }
    },
    readTarget: async n => {
      try {
        return Se(await _y(await Pe(n), bf)).text;
      } catch (error) {
        if (G(error)) return null;
        throw error;
      }
    },
    writeTarget: async ({
      path: path,
      resolvedPath: resolvedPath,
      baseSha256: baseSha256,
      content: content,
      blockedOnceWritten: blockedOnceWritten
    }) => {
      let p;
      try {
        p = await GS(resolvedPath, [resolvedPath], {
          createParents: !0
        });
      } catch (error) {
        if (error instanceof Sg) return "redirected";
        throw error;
      }
      let S = Ce(resolvedPath),
        w = `${jwr}${we(4).toString("hex")}`,
        stagingDir = L(A(resolvedPath), VB),
        b = L(A(p.ioPath), `${S}${w}`),
        P = !1;
      try {
        b = _Br(stagingDir, p.ioPath, w, !1);
        let v = A(b) !== A(p.ioPath);
        await ze(A(b), S);
        let R = async () => {
            let B;
            try {
              B = await p.readExisting(bf);
            } catch (error) {
              if (WW(error)) return "changed";
              throw error;
            }
            let te = B === null ? null : Se(B);
            return (te === null ? null : st(te.text)) === baseSha256 ? te : "changed";
          },
          D = await R();
        if (D === "changed") return "changed";
        let encoding = D?.encoding ?? "utf8",
          N = (D?.bom ? "\uFEFF" : "") + kTe(content, D?.lineEndings ?? "LF"),
          z = Buffer.from(N, encoding);
        await KB(b, z, 384), P = !0;
        let X = v ? b : L(A(resolvedPath), `${S}${w}`);
        if (await blockedOnceWritten(X)) return "blocked";
        if ((await R()) === "changed") return "changed";
        let E = await $e(b, X, z);
        if (E === null) return "tampered";
        await p.recheckBeforeWrite();
        let W = await re(b).catch(() => null);
        if (W === null || W.isSymbolicLink() || W.ino !== E.ino || W.dev !== E.dev) return "tampered";
        if (v) q1t(stagingDir);
        try {
          await ns(b, p.ioPath), P = !1;
        } catch (error) {
          if (!xA.has(k(error) ?? "")) throw error;
          await fR(p.ioPath, N, {
            encoding: encoding,
            stagingDir: stagingDir,
            refuseHardLinkedInPlace: !0
          });
        }
        let ce = await Y(path, resolvedPath),
          de = ce === void 0 ? void 0 : fn(ce);
        if (de !== void 0) Zyt(de);
        return "written";
      } catch (error) {
        if (error instanceof mXn) return "hard_linked";
        if (error instanceof Sg) return "redirected";
        if (error instanceof bBr) return "tampered";
        throw error;
      } finally {
        if (P) await ye(b).catch(v => {
          t(`settings review store: could not remove the proposal sibling (${d(v)}); the next accept of this file sweeps it`, {
            level: "warn"
          });
        });
        await p.close();
      }
    },
    locate: locate,
    isSettingsFile: async n => Zfe(n) || $Lt(n) && kft(n, await Z()),
    configChangeBlocked: async (n, r, s) => {
      let a = await Y(n, r);
      if (a === void 0) return !1;
      if (e?.configChangeHookGate === void 0) return l(Error("settings review store: ConfigChange hook gate not wired")), !0;
      return e.configChangeHookGate(Be[a], s);
    },
    afterApplied: async (n, r) => {
      let s = await Y(n, r);
      if (s !== void 0) Ca.notifyChange(s);
    },
    now: () => new Date()
  };
}
async function $e(e, n, r) {
  try {
    let s = I() === "windows";
    if (s && (await re(e)).isSymbolicLink()) return null;
    let a = await Re(e, me.O_RDONLY | (s ? 0 : me.O_NOFOLLOW));
    try {
      let h = await a.stat();
      if (!h.isFile() || h.nlink !== 1) return null;
      if (st(await a.readFile()) !== st(r)) return null;
      let p = await Ie(n);
      return p.dev === h.dev && p.ino === h.ino ? {
        dev: h.dev,
        ino: h.ino
      } : null;
    } finally {
      await a.close();
    }
  } catch {
    return null;
  }
}
async function ze(e, n) {
  let r;
  try {
    r = await Fe(e);
  } catch {
    return;
  }
  let s = `${n}${jwr}`,
    a = Date.now() - Le;
  for (let h of r) {
    if (!h.startsWith(s) || !We.test(h.slice(s.length))) continue;
    try {
      if ((await re(L(e, h))).mtimeMs < a) await ye(L(e, h));
    } catch {}
  }
}
async function Pe(e) {
  if (M(e) === "policySettings" || Yx(e)) return e;
  let n = await KW(se(), e);
  return n.linksResolvedPath ?? n.resolvedPath;
}
async function locate(e) {
  return ie(await Pe(e));
}
async function ie(e) {
  try {
    return await Oe(e);
  } catch (error) {
    if (!G(error) || A(e) === e) throw error;
    return L(await ie(A(e)), Ce(e));
  }
}
async function Z() {
  return PCo(ie);
}
async function V(e) {
  let n = await e.readStore();
  if (n === void 0) return [];
  let r;
  try {
    r = J(n);
  } catch {
    r = void 0;
  }
  let s = He().safeParse(r);
  if (!s.success) throw new Ee();
  return s.data.entries;
}
class Ee extends Error {
  constructor() {
    super("settings review store: malformed or of an unknown version");
  }
}
async function je(e, n) {
  return (await n.isSettingsFile(e.path)) || (await n.isSettingsFile(e.resolvedPath));
}
async function Q(entries, n) {
  if (entries.length === 0) {
    await n.deleteStore();
    return;
  }
  await n.writeStore(_({
    version: version,
    entries: entries
  }, null, 2) + `
`);
}
async function ke(e, n = q()) {
  let r = await V(n),
    s = await n.readTarget(e.path),
    proposedContent = O9(e.proposedContent),
    h = {
      id: we(6).toString("hex"),
      path: e.path,
      resolvedPath: await n.locate(e.path),
      baseSha256: s === null ? null : st(s),
      proposedSha256: st(proposedContent),
      proposedContent: proposedContent,
      stagedAt: n.now().toISOString(),
      by: e.by
    },
    p = mo(h.path),
    S = mo(h.resolvedPath),
    w = [...r.filter(item => mo(item.path) !== p && mo(item.resolvedPath) !== S), h],
    y = 0;
  while (w.length > Ae || _(w).length > Ne) {
    let b = w.findIndex(item => item !== h && item.by.sessionId === h.by.sessionId);
    if (b === -1) throw Error("settings review store: no room, proposal not staged");
    w.splice(b, 1), y++;
  }
  if (y > 0) t(`settings review store: full, dropped the ${y} oldest pending proposal(s)`, {
    level: "warn"
  });
  return await Q(w, n), h;
}
async function wSs(e, n = q()) {
  let s = (await V(n)).find(item => item.id === e.id);
  if (s === void 0 || !(await je(s, n))) return "gone";
  if (_(s) !== _(e) || st(s.proposedContent) !== s.proposedSha256) return "stale";
  if ((await n.locate(s.path)) !== s.resolvedPath) return "redirected";
  let a = await n.readTarget(s.resolvedPath);
  if ((a === null ? null : st(a)) !== s.baseSha256) return "conflict";
  let p;
  try {
    p = await n.writeTarget({
      path: s.path,
      resolvedPath: s.resolvedPath,
      baseSha256: s.baseSha256,
      content: s.proposedContent,
      blockedOnceWritten: S => n.configChangeBlocked(s.path, s.resolvedPath, S)
    });
  } catch (error) {
    let w = k(error);
    if (w === "EACCES" || w === "EPERM" || w === "EROFS" || w === "EBUSY") return "not_writable";
    throw error;
  }
  switch (p) {
    case "changed":
      return "conflict";
    case "redirected":
    case "hard_linked":
    case "blocked":
    case "tampered":
      return p;
    case "written":
      break;
  }
  await n.afterApplied(s.path, s.resolvedPath);
  try {
    let S = await V(n);
    await Q(S.filter(item => item.id !== s.id), n);
  } catch (error) {
    t(`settings review store: applied, but the store could not be updated (${d(error)})`, {
      level: "warn"
    });
  }
  return "applied";
}
async function vSs(e, n = q()) {
  let r = await V(n),
    s = r.filter(item => item.id !== e);
  if (s.length === r.length) return !1;
  return await Q(s, n), !0;
}
async function kSs(e, n = q()) {
  let r = await V(n),
    s = n.now().getTime(),
    a = r.filter(item => {
      let p = Date.parse(item.stagedAt);
      return Number.isFinite(p) && p >= e.getTime() && p <= s;
    });
  if (a.length !== r.length || r.length === 0) await Q(a, n);
  return r.length - a.length;
}
function Wwr(e, n) {
  let r = p => {
      if (p === null) return {};
      try {
        let S = fe(o(), oe()).safeParse(J(O9(p)));
        return S.success ? S.data : void 0;
      } catch {
        return;
      }
    },
    s = r(e),
    a = r(n);
  if (a === void 0) return ["not valid JSON"];
  if (s === void 0) return ["replaces a file that was not valid JSON"];
  let h = [];
  for (let p of new Set([...Object.keys(s), ...Object.keys(a)])) if (!(p in s)) h.push(`adds ${p}`);else if (!(p in a)) h.push(`removes ${p}`);else if (_(s[p]) !== _(a[p])) h.push(`changes ${p}`);
  return h;
}
function Ue({
  session: session,
  served: served
}) {
  return !served && OTe() && WNs(session);
}
function zwr({
  session: session_2,
  served: served_2,
  cause: cause
}) {
  if (cause !== "unapproved") return cause;
  if (Ue({
    session: session_2,
    served: served_2
  })) return "card";
  return !served_2 && e6s() ? "cloud" : "review";
}
function Gwr(e, n) {
  switch (n) {
    case "card":
      return `Not applied: ${e} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "cloud":
      return `Not applied: ${e} was NOT modified. A change to a Claude Code settings file applies only when a person approves it at the computer that Claude Code runs on, and a cloud session cannot take that approval. Approving the edit in this session does not apply it. The /settings-review command does not run in a cloud session, and on another computer it would not list this change. Tell the user what you meant to change. If the file is committed to a repository, the user can make the change themselves outside this session and push it. Do not retry the edit or try to make the same change another way.`;
    case "linked":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "policy":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "review":
      return `Staged for review: ${e} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
  }
}
class ae extends x {
  constructor(e) {
    super(`Not written: ${e} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`, "settings write refused: a managed drop-in directory did not resolve");
  }
}
var KHn = "Staged for your review \xB7 not applied until you accept it in /settings-review";
async function Vwr(e, n, r) {
  let served_3 = e.remoteCall !== void 0;
  if (!MBr({
    served: served_3
  })) return;
  if (served_3) {
    let {
        settingsSpellings: settingsSpellings,
        unclassified: unclassified
      } = await Te(n),
      [path_2] = settingsSpellings;
    if (path_2 !== void 0) return {
      path: path_2,
      cause: "unapproved"
    };
    if (unclassified !== void 0) throw new ae(r.absolutePath);
    return;
  }
  if (e.permissionSurface !== void 0) return;
  let {
      settingsSpellings: settingsSpellings_2,
      unclassified: unclassified_2,
      dropIns: dropIns
    } = await Te(n),
    [path_3] = settingsSpellings_2;
  if (path_3 === void 0) {
    if (unclassified_2 !== void 0) throw new ae(r.absolutePath);
    return;
  }
  if (!zNs(e.session, e.toolUseId, r)) return {
    path: path_3,
    cause: "unapproved"
  };
  let cause_2 = await Ke(r.absolutePath, n, settingsSpellings_2, dropIns ?? (await Z()));
  return cause_2 === "covered" ? void 0 : {
    path: path_3,
    cause: cause_2
  };
}
async function Te(e) {
  let dropIns_2 = e.some($Lt) ? await Z() : void 0;
  return {
    settingsSpellings: e.filter(item => Zfe(item) || dropIns_2 !== void 0 && kft(item, dropIns_2)),
    unclassified: dropIns_2 === void 0 || dropIns_2.allResolved ? void 0 : e.find($Lt),
    dropIns: dropIns_2
  };
}
async function Ke(e, n, r, s) {
  if (!r.includes(e)) return "linked";
  let a = n.filter(item => item !== e);
  if (await Ve(n, s)) return a.length === 0 ? "policy" : "linked";
  if (a.length === 0) return "covered";
  let h = M(e);
  if (h === void 0) return "linked";
  for (let p of a) if ((await ve(p)) !== h) return "linked";
  return "covered";
}
async function Ve(e, n) {
  if (!n.allResolved || !n.allLocated) return !0;
  let r = new Set();
  for (let s of Xe()) {
    r.add(PS(s));
    try {
      r.add(PS(await locate(s)));
    } catch {
      return !0;
    }
  }
  for (let s of e) {
    let a;
    try {
      a = await locate(s);
    } catch {
      return !0;
    }
    if (kft(s, n) || kft(a, n) || r.has(PS(it(s))) || r.has(PS(a))) return !0;
  }
  return !1;
}
function Xe() {
  let e = fn("flagSettings");
  return [...nde(NJ()).map(item => Ge(item, "managed-settings.json")), ...(e === void 0 ? [] : [e])];
}
async function qwr(e) {
  let origin = e.writeCtx.remoteCall === void 0 ? "local" : "served",
    r;
  try {
    r = await ke({
      path: e.absolutePath,
      proposedContent: e.proposedContent,
      by: {
        tool: e.tool,
        origin: origin,
        sessionId: e.writeCtx.remoteCall?.origin.callerSessionId ?? K()
      }
    });
  } catch (error) {
    throw m("settings_quarantine", "stage_failed"), new x(`Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${d(error)})`, "settings review store: stage failed");
  }
  return i("tengu_settings_change_staged", {
    origin: c(origin),
    tool: c(e.tool),
    source_kind: c(M(e.absolutePath) ?? "other"),
    key_count: Wwr(e.currentContent, e.proposedContent).length
  }), g("settings_quarantine"), r;
}
import { open as Je } from "fs/promises";
var gdt = 8192,
  W6e = 10485760,
  ee = 10,
  Ye = 13;
async function ESs(e, n, r = 3) {
  let s = await b7t(e);
  if (s === null) return null;
  try {
    return await $mo(s, n, r);
  } finally {
    await s.close();
  }
}
async function b7t(e) {
  if (Ds(e) || zh(e)) return null;
  if (e.includes("\x00")) return null;
  try {
    return await Je(e, "r");
  } catch (error) {
    if (G(error)) return null;
    throw error;
  }
}
async function $mo(e, n, r) {
  if (n === "") return {
    content: "",
    lineOffset: 1,
    truncated: !1
  };
  let s = Buffer.from(n, "utf8"),
    a = 0;
  for (let P = 0; P < s.length; P++) if (s[P] === ee) a++;
  let h,
    p = s.length + a - 1,
    S = Buffer.allocUnsafe(gdt + p),
    w = 0,
    y = 0,
    b = 0;
  while (w < W6e) {
    let {
      bytesRead: bytesRead
    } = await e.read(S, b, gdt, w);
    if (bytesRead === 0) break;
    let v = b + bytesRead;
    if (w === 0 && hde(S.subarray(0, v)) !== "utf8") return {
      content: "",
      lineOffset: 1,
      truncated: !1
    };
    let R = xe(S, s, v),
      D = s.length;
    if (R === -1 && a > 0) h ??= Buffer.from(n.replaceAll(`
`, `\r
`), "utf8"), R = xe(S, h, v), D = h.length;
    if (R !== -1) {
      let N = w - b + R;
      return await Qe(e, S, N, D, r, y + le(S, 0, R));
    }
    w += bytesRead;
    let O = Math.min(p, v);
    y += le(S, 0, v - O), b = O, S.copyWithin(0, v - b, v);
  }
  return {
    content: "",
    lineOffset: 1,
    truncated: w >= W6e
  };
}
async function JHn(e) {
  let n = Buffer.allocUnsafe(gdt),
    r = 0;
  for (;;) {
    if (r === n.length) {
      let a = Buffer.allocUnsafe(Math.min(n.length * 2, W6e + gdt));
      n.copy(a, 0, 0, r), n = a;
    }
    let {
      bytesRead: bytesRead_2
    } = await e.read(n, r, n.length - r, r);
    if (bytesRead_2 === 0) break;
    if (r += bytesRead_2, r > W6e) return null;
  }
  return Hne(n.subarray(0, r));
}
function xe(e, n, r) {
  let s = e.indexOf(n);
  return s === -1 || s + n.length > r ? -1 : s;
}
function le(e, n, r) {
  let s = 0;
  for (let a = n; a < r; a++) if (e[a] === ee) s++;
  return s;
}
function _e(e) {
  return (e & 192) === 128;
}
function qe(e) {
  return e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
function Ze(e, n) {
  let r = e.toString("utf8", 0, n);
  return r.includes("\r") ? r.replaceAll(`\r
`, `
`) : r;
}
async function Qe(e, n, r, s, a, h) {
  let p = Math.min(r, gdt),
    {
      bytesRead: bytesRead_3
    } = await e.read(n, 0, p, r - p),
    w = r,
    y = 0;
  for (let E = bytesRead_3 - 1; E >= 0 && y <= a; E--) {
    if (n[E] === ee) {
      if (y++, y > a) break;
    }
    w--;
  }
  let b = r - bytesRead_3;
  for (let E = 0; E < 3 && w < r && _e(n[w - b]); E++) w++;
  let P = r - w,
    lineOffset = h - le(n, bytesRead_3 - P, bytesRead_3) + 1,
    R = r + s,
    {
      bytesRead: bytesRead_4
    } = await e.read(n, 0, gdt, R),
    O = R;
  y = 0;
  for (let E = 0; E < bytesRead_4; E++) if (O++, n[E] === ee) {
    if (y++, y >= a + 1) break;
  }
  for (let E = 0; E <= 3 && O - 1 - E >= R; E++) {
    let W = n[O - 1 - E - R];
    if (_e(W)) continue;
    if (W >= 192 && qe(W) > E + 1) O -= E + 1;
    break;
  }
  if (O > R && n[O - 1 - R] === Ye) O--;
  let N = O - w,
    z = N <= n.length ? n : Buffer.allocUnsafe(N),
    {
      bytesRead: bytesRead_5
    } = await e.read(z, 0, N, w);
  return {
    content: Ze(z, bytesRead_5),
    lineOffset: lineOffset,
    truncated: !1
  };
}
var hdt = e => `+ ${Math.max(e.oldStart + e.oldLines - 1, e.newStart + e.newLines - 1, 1)} `.length;
export { O9, version as Bwr, jwr, wSs, vSs, kSs, Wwr, zwr, Gwr, KHn, Vwr, qwr, context as nIt, timeout as Kwr, YHn, XHn, rIt, Dpe, R6, gdt, W6e, ESs, b7t, $mo, JHn, hdt };