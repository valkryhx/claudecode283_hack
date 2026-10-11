// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Y, J2r } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Vg, ns } from "B:/~BUN/root/chunk-54p0h65d.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { y5n, ND, XS, Bo, A$ } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { OJ } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { $pt, q3n, sf, dmn, K3n, G$e, Y0, Hv } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { ore } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { r_ } from "B:/~BUN/root/chunk-290k5gh5.js";
import { I5e, m$, wr } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Hi, to, eCe, Q3e, Z3e, a0r, XT } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Fxo, $xo } from "B:/~BUN/root/chunk-msy8grqx.js";
import { g3 } from "B:/~BUN/root/chunk-6wgkxd9a.js";
import { oTr } from "B:/~BUN/root/chunk-cn8bxjex.js";
import { cy } from "B:/~BUN/root/chunk-q1gfnztc.js";
import { ug } from "B:/~BUN/root/chunk-t1t358ee.js";
import { o, ae, C, u, fe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { createHash as De, randomBytes as le } from "crypto";
import { constants as oe } from "fs";
import { lstat as ce, open as Ie, readdir as Ae, realpath as Ne, stat as de, unlink as ue } from "fs/promises";
import { homedir as We } from "os";
import { basename as ge, dirname as D, join as L } from "path";
var version = 1,
  Le = 64,
  Be = 1048576,
  he = ".proposed-",
  Me = /^[0-9a-f]{8}$/,
  He = 900000,
  ze = {
    userSettings: "user_settings",
    projectSettings: "project_settings",
    localSettings: "local_settings",
    flagSettings: "policy_settings",
    policySettings: "policy_settings"
  },
  $e = f(() => u({
    id: o().min(1),
    path: o().min(1),
    resolvedPath: o().min(1),
    baseSha256: o().nullable(),
    proposedSha256: o(),
    proposedContent: o(),
    stagedAt: o(),
    by: u({
      tool: z(["Write", "Edit"]),
      origin: z(["local", "served"]),
      sessionId: o()
    })
  })),
  je = f(() => u({
    version: A(version),
    entries: C($e())
  }));
function ee() {
  return L(We(), ".claude", "state", "settings-review.json");
}
function j(e) {
  return De("sha256").update(e).digest("hex");
}
var me = ["policySettings", "flagSettings", ...r_];
function G(e) {
  let n = to(e);
  return me.find(item => {
    let s = wr(item);
    return s !== void 0 && to(s) === n;
  });
}
async function Se(e) {
  let n;
  try {
    n = await locate(e);
  } catch {
    return G(e);
  }
  return X(e, n);
}
async function X(e, n) {
  let r = G(e);
  if (r !== void 0) return r;
  let s = to(n);
  for (let a of me) {
    let p = wr(a);
    if (p === void 0) continue;
    try {
      if (to(await locate(p)) === s) return a;
    } catch {}
  }
  return;
}
function we(e) {
  return (e.startsWith("\uFEFF") ? e.slice(1) : e).replaceAll(`\r
`, `
`);
}
function se(e) {
  let bom = e.content.startsWith("\uFEFF");
  return {
    text: bom ? e.content.slice(1) : e.content,
    encoding: e.encoding,
    bom: bom,
    lineEndings: e.lineEndings
  };
}
function ye(e) {
  return {
    readStore: async () => {
      try {
        return await Qt().read(ee());
      } catch (error) {
        if (B(error)) return;
        throw error;
      }
    },
    writeStore: async n => {
      let r = ee();
      await Qt().mkdir(D(r), 448), await Qt().atomicWrite(r, n, 384);
    },
    deleteStore: async () => {
      try {
        await Qt().delete(ee());
      } catch (error) {
        if (!B(error)) throw error;
      }
    },
    readTarget: async n => {
      try {
        return se(await ug(n)).text;
      } catch (error) {
        if (B(error)) return null;
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
      let g;
      try {
        g = await cy(resolvedPath, [resolvedPath], {
          createParents: !0
        });
      } catch (error) {
        if (error instanceof sf) return "redirected";
        throw error;
      }
      let h = ge(resolvedPath),
        S = `${he}${le(4).toString("hex")}`,
        stagingDir = L(D(resolvedPath), ND),
        y = L(D(g.ioPath), `${h}${S}`),
        k = !1;
      try {
        y = q3n(stagingDir, g.ioPath, S, !1);
        let E = D(y) !== D(g.ioPath);
        await Ue(D(y), h);
        let T = async () => {
            let H = await g.readExisting(),
              Q = H === null ? null : se(H);
            return (Q === null ? null : j(Q.text)) === baseSha256 ? Q : "changed";
          },
          F = await T();
        if (F === "changed") return "changed";
        let encoding = F?.encoding ?? "utf8",
          I = (F?.bom ? "\uFEFF" : "") + G$e(content, F?.lineEndings ?? "LF"),
          M = Buffer.from(I, encoding);
        await A$(y, M, 384), k = !0;
        let V = E ? y : L(D(resolvedPath), `${h}${S}`);
        if (await blockedOnceWritten(V)) return "blocked";
        if ((await T()) === "changed") return "changed";
        let x = await Ge(y, V, M);
        if (x === null) return "tampered";
        await g.recheckBeforeWrite();
        let N = await ce(y).catch(() => null);
        if (N === null || N.isSymbolicLink() || N.ino !== x.ino || N.dev !== x.dev) return "tampered";
        if (E) $pt(stagingDir);
        try {
          await Bo(y, g.ioPath), k = !1;
        } catch (error) {
          if (!XS.has(v(error) ?? "")) throw error;
          await Hv(g.ioPath, I, {
            encoding: encoding,
            stagingDir: stagingDir,
            refuseHardLinkedInPlace: !0
          });
        }
        let re = await X(path, resolvedPath),
          ie = re === void 0 ? void 0 : wr(re);
        if (ie !== void 0) I5e(ie);
        return "written";
      } catch (error) {
        if (error instanceof dmn) return "hard_linked";
        if (error instanceof sf) return "redirected";
        if (error instanceof K3n) return "tampered";
        throw error;
      } finally {
        if (k) await ue(y).catch(E => {
          t(`settings review store: could not remove the proposal sibling (${l(E)}); the next accept of this file sweeps it`, {
            level: "warn"
          });
        });
        await g.close();
      }
    },
    locate: locate,
    isSettingsFile: async n => eCe(n) || Z3e(n) && Q3e(n, await q()),
    configChangeBlocked: async (n, r, s) => {
      let a = await X(n, r);
      if (a === void 0) return !1;
      if (e?.configChangeHookGate === void 0) return d(Error("settings review store: ConfigChange hook gate not wired")), !0;
      return e.configChangeHookGate(ze[a], s);
    },
    afterApplied: async (n, r) => {
      let s = await X(n, r);
      if (s !== void 0) Hi.notifyChange(s);
    },
    now: () => new Date()
  };
}
async function Ge(e, n, r) {
  try {
    let s = O() === "windows";
    if (s && (await ce(e)).isSymbolicLink()) return null;
    let a = await Ie(e, oe.O_RDONLY | (s ? 0 : oe.O_NOFOLLOW));
    try {
      let p = await a.stat();
      if (!p.isFile() || p.nlink !== 1) return null;
      if (j(await a.readFile()) !== j(r)) return null;
      let g = await de(n);
      return g.dev === p.dev && g.ino === p.ino ? {
        dev: p.dev,
        ino: p.ino
      } : null;
    } finally {
      await a.close();
    }
  } catch {
    return null;
  }
}
async function Ue(e, n) {
  let r;
  try {
    r = await Ae(e);
  } catch {
    return;
  }
  let s = `${n}${he}`,
    a = Date.now() - He;
  for (let p of r) {
    if (!p.startsWith(s) || !Me.test(p.slice(s.length))) continue;
    try {
      if ((await de(L(e, p))).mtimeMs < a) await ue(L(e, p));
    } catch {}
  }
}
async function locate(e) {
  try {
    return await Ne(e);
  } catch (error) {
    if (!B(error) || D(e) === e) throw error;
    return L(await locate(D(e)), ge(e));
  }
}
async function q() {
  return a0r(locate);
}
async function Ce(e) {
  let n = await e.readStore();
  if (n === void 0) return [];
  let r;
  try {
    r = J(n);
  } catch {
    r = void 0;
  }
  let s = je().safeParse(r);
  if (!s.success) throw new be();
  return s.data.entries;
}
class be extends Error {
  constructor() {
    super("settings review store: malformed or of an unknown version");
  }
}
async function ve(entries, n) {
  if (entries.length === 0) {
    await n.deleteStore();
    return;
  }
  await n.writeStore(b({
    version: version,
    entries: entries
  }, null, 2) + `
`);
}
async function Pe(e, n = ye()) {
  let r = await Ce(n),
    s = await n.readTarget(e.path),
    proposedContent = we(e.proposedContent),
    p = {
      id: le(6).toString("hex"),
      path: e.path,
      resolvedPath: await n.locate(e.path),
      baseSha256: s === null ? null : j(s),
      proposedSha256: j(proposedContent),
      proposedContent: proposedContent,
      stagedAt: n.now().toISOString(),
      by: e.by
    },
    g = to(p.path),
    h = to(p.resolvedPath),
    S = [...r.filter(item => to(item.path) !== g && to(item.resolvedPath) !== h), p],
    w = 0;
  while (S.length > Le || b(S).length > Be) {
    let y = S.findIndex(item => item !== p && item.by.sessionId === p.by.sessionId);
    if (y === -1) throw Error("settings review store: no room, proposal not staged");
    S.splice(y, 1), w++;
  }
  if (w > 0) t(`settings review store: full, dropped the ${w} oldest pending proposal(s)`, {
    level: "warn"
  });
  return await ve(S, n), p;
}
async function Nyo(e, n = ye()) {
  let r = await Ce(n),
    s = n.now().getTime(),
    a = r.filter(item => {
      let g = Date.parse(item.stagedAt);
      return Number.isFinite(g) && g >= e.getTime() && g <= s;
    });
  if (a.length !== r.length || r.length === 0) await ve(a, n);
  return r.length - a.length;
}
function Ee(e, n) {
  let r = g => {
      if (g === null) return {};
      try {
        let h = fe(o(), ae()).safeParse(J(we(g)));
        return h.success ? h.data : void 0;
      } catch {
        return;
      }
    },
    s = r(e),
    a = r(n);
  if (a === void 0) return ["not valid JSON"];
  if (s === void 0) return ["replaces a file that was not valid JSON"];
  let p = [];
  for (let g of new Set([...Object.keys(s), ...Object.keys(a)])) if (!(g in s)) p.push(`adds ${g}`);else if (!(g in a)) p.push(`removes ${g}`);else if (b(s[g]) !== b(a[g])) p.push(`changes ${g}`);
  return p;
}
import { join as Ke } from "path";
function Ve({
  session: session,
  served: served
}) {
  return !served && ore() && Fxo(session);
}
function d$n({
  session: session_2,
  served: served_2,
  cause: cause
}) {
  if (cause !== "unapproved") return cause;
  return Ve({
    session: session_2,
    served: served_2
  }) ? "card" : "review";
}
function u$n(e, n) {
  switch (n) {
    case "card":
      return `Not applied: ${e} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "linked":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "policy":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "review":
      return `Staged for review: ${e} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
  }
}
class te extends P {
  constructor(e) {
    super(`Not written: ${e} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`, "settings write refused: a managed drop-in directory did not resolve");
  }
}
var stn = "Staged for your review \xB7 not applied until you accept it in /settings-review";
async function p$n(e, n, r) {
  let served_3 = e.remoteCall !== void 0;
  if (!y5n({
    served: served_3
  })) return;
  if (served_3) {
    let {
        settingsSpellings: settingsSpellings,
        unclassified: unclassified
      } = await ke(n),
      [path_2] = settingsSpellings;
    if (path_2 !== void 0) return {
      path: path_2,
      cause: "unapproved"
    };
    if (unclassified !== void 0) throw new te(r.absolutePath);
    return;
  }
  if (e.permissionSurface !== void 0) return;
  let {
      settingsSpellings: settingsSpellings_2,
      unclassified: unclassified_2,
      dropIns: dropIns
    } = await ke(n),
    [path_3] = settingsSpellings_2;
  if (path_3 === void 0) {
    if (unclassified_2 !== void 0) throw new te(r.absolutePath);
    return;
  }
  if (!$xo(e.session, e.toolUseId, r)) return {
    path: path_3,
    cause: "unapproved"
  };
  let cause_2 = await Xe(r.absolutePath, n, settingsSpellings_2, dropIns ?? (await q()));
  return cause_2 === "covered" ? void 0 : {
    path: path_3,
    cause: cause_2
  };
}
async function ke(e) {
  let dropIns_2 = e.some(Z3e) ? await q() : void 0;
  return {
    settingsSpellings: e.filter(item => eCe(item) || dropIns_2 !== void 0 && Q3e(item, dropIns_2)),
    unclassified: dropIns_2 === void 0 || dropIns_2.allResolved ? void 0 : e.find(Z3e),
    dropIns: dropIns_2
  };
}
async function Xe(e, n, r, s) {
  if (!r.includes(e)) return "linked";
  let a = n.filter(item => item !== e);
  if (await Je(n, s)) return a.length === 0 ? "policy" : "linked";
  if (a.length === 0) return "covered";
  let p = G(e);
  if (p === void 0) return "linked";
  for (let g of a) if ((await Se(g)) !== p) return "linked";
  return "covered";
}
async function Je(e, n) {
  if (!n.allResolved || !n.allLocated) return !0;
  let r = new Set();
  for (let s of qe()) {
    r.add(XT(s));
    try {
      r.add(XT(await locate(s)));
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
    if (Q3e(s, n) || Q3e(a, n) || r.has(XT(Ye(s))) || r.has(XT(a))) return !0;
  }
  return !1;
}
function qe() {
  let e = wr("flagSettings");
  return [...OJ(m$()).map(item => Ke(item, "managed-settings.json")), ...(e === void 0 ? [] : [e])];
}
async function f$n(e) {
  let origin = e.writeCtx.remoteCall === void 0 ? "local" : "served",
    r;
  try {
    r = await Pe({
      path: e.absolutePath,
      proposedContent: e.proposedContent,
      by: {
        tool: e.tool,
        origin: origin,
        sessionId: e.writeCtx.remoteCall?.origin.callerSessionId ?? Y()
      }
    });
  } catch (error) {
    throw m("settings_quarantine", "stage_failed"), new P(`Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${l(error)})`, "settings review store: stage failed");
  }
  return i("tengu_settings_change_staged", {
    origin: c(origin),
    tool: c(e.tool),
    source_kind: c(G(e.absolutePath) ?? "other"),
    key_count: Ee(e.currentContent, e.proposedContent).length
  }), _("settings_quarantine"), r;
}
var context = 3,
  timeout = 5000;
function itn(e, n) {
  if (n === 0) return e;
  return e.map(item => ({
    ...item,
    oldStart: item.oldStart + n,
    newStart: item.newStart + n
  }));
}
var xe = "<<:AMPERSAND_TOKEN:>>",
  Te = "<<:DOLLAR_TOKEN:>>";
function K(e) {
  return e.replaceAll("&", xe).replaceAll("$", Te);
}
function _e(e) {
  return e.replaceAll(xe, "&").replaceAll(Te, "$");
}
function atn(e, model, r, s) {
  let lines_added = 0,
    lines_removed = 0;
  if (e.length === 0 && (r || s)) lines_added = r ? Gt(r, `
`) + 1 : 0, lines_removed = s ? Gt(s, `
`) + 1 : 0;else lines_added = e.reduce((acc, item) => acc + U(item.lines, S => S.startsWith("+")), 0), lines_removed = e.reduce((acc, item) => acc + U(item.lines, S => S.startsWith("-")), 0);
  J2r(lines_added, lines_removed), oTr()?.add(lines_added, {
    type: "added",
    model: model
  }), oTr()?.add(lines_removed, {
    type: "removed",
    model: model
  }), i("tengu_file_changed", {
    lines_added: lines_added,
    lines_removed: lines_removed
  });
}
function Oke({
  filePath: filePath,
  oldContent: oldContent,
  newContent: newContent,
  ignoreWhitespace = !1,
  singleHunk = !1,
  convertTabs = !1,
  rawText = !1
}) {
  let h = rawText ? w => w : convertTabs ? w => K(Y0(w)) : K,
    S = g3(filePath, filePath, h(oldContent), h(newContent), void 0, void 0, {
      ignoreWhitespace: ignoreWhitespace,
      context: singleHunk ? 1e5 : context,
      timeout: timeout
    });
  if (!S) return [];
  if (rawText) return S.hunks;
  return S.hunks.map(item => ({
    ...item,
    lines: item.lines.map(_e)
  }));
}
function XW({
  filePath: filePath_2,
  fileContents: fileContents,
  edits: edits,
  ignoreWhitespace: ignoreWhitespace_2 = !1
}) {
  let a = K(Y0(fileContents)),
    p = g3(filePath_2, filePath_2, a, edits.reduce((acc, item) => {
      let {
          old_string: old_string,
          new_string: new_string
        } = item,
        y = "replace_all" in item ? item.replace_all : !1,
        k = K(Y0(old_string)),
        E = K(Y0(new_string));
      if (y) return acc.replaceAll(k, () => E);else return acc.replace(k, () => E);
    }, a), void 0, void 0, {
      context: context,
      ignoreWhitespace: ignoreWhitespace_2,
      timeout: timeout
    });
  if (!p) return [];
  return p.hunks.map(item => ({
    ...item,
    lines: item.lines.map(_e)
  }));
}
import { open as Ze } from "fs/promises";
var Bqe = 8192,
  XDe = 10485760,
  Z = 10,
  Qe = 13;
async function Hyo(e, n, r = 3) {
  let s = await APt(e);
  if (s === null) return null;
  try {
    return await Kkr(s, n, r);
  } finally {
    await s.close();
  }
}
async function APt(e) {
  if (ns(e) || Vg(e)) return null;
  if (e.includes("\x00")) return null;
  try {
    return await Ze(e, "r");
  } catch (error) {
    if (B(error)) return null;
    throw error;
  }
}
async function Kkr(e, n, r) {
  if (n === "") return {
    content: "",
    lineOffset: 1,
    truncated: !1
  };
  let s = Buffer.from(n, "utf8"),
    a = 0;
  for (let k = 0; k < s.length; k++) if (s[k] === Z) a++;
  let p,
    g = s.length + a - 1,
    h = Buffer.allocUnsafe(Bqe + g),
    S = 0,
    w = 0,
    y = 0;
  while (S < XDe) {
    let {
      bytesRead: bytesRead
    } = await e.read(h, y, Bqe, S);
    if (bytesRead === 0) break;
    let E = y + bytesRead,
      T = Re(h, s, E),
      F = s.length;
    if (T === -1 && a > 0) p ??= Buffer.from(n.replaceAll(`
`, `\r
`), "utf8"), T = Re(h, p, E), F = p.length;
    if (T !== -1) {
      let I = S - y + T;
      return await tt(e, h, I, F, r, w + ne(h, 0, T));
    }
    S += bytesRead;
    let R = Math.min(g, E);
    w += ne(h, 0, E - R), y = R, h.copyWithin(0, E - y, E);
  }
  return {
    content: "",
    lineOffset: 1,
    truncated: S >= XDe
  };
}
async function ltn(e) {
  let n = Buffer.allocUnsafe(Bqe),
    r = 0;
  for (;;) {
    if (r === n.length) {
      let a = Buffer.allocUnsafe(Math.min(n.length * 2, XDe + Bqe));
      n.copy(a, 0, 0, r), n = a;
    }
    let {
      bytesRead: bytesRead_2
    } = await e.read(n, r, n.length - r, r);
    if (bytesRead_2 === 0) break;
    if (r += bytesRead_2, r > XDe) return null;
  }
  return Oe(n, r);
}
function Re(e, n, r) {
  let s = e.indexOf(n);
  return s === -1 || s + n.length > r ? -1 : s;
}
function ne(e, n, r) {
  let s = 0;
  for (let a = n; a < r; a++) if (e[a] === Z) s++;
  return s;
}
function Fe(e) {
  return (e & 192) === 128;
}
function et(e) {
  return e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
function Oe(e, n) {
  let r = e.toString("utf8", 0, n);
  return r.includes("\r") ? r.replaceAll(`\r
`, `
`) : r;
}
async function tt(e, n, r, s, a, p) {
  let g = Math.min(r, Bqe),
    {
      bytesRead: bytesRead_3
    } = await e.read(n, 0, g, r - g),
    S = r,
    w = 0;
  for (let x = bytesRead_3 - 1; x >= 0 && w <= a; x--) {
    if (n[x] === Z) {
      if (w++, w > a) break;
    }
    S--;
  }
  let y = r - bytesRead_3;
  for (let x = 0; x < 3 && S < r && Fe(n[S - y]); x++) S++;
  let k = r - S,
    lineOffset = p - ne(n, bytesRead_3 - k, bytesRead_3) + 1,
    T = r + s,
    {
      bytesRead: bytesRead_4
    } = await e.read(n, 0, Bqe, T),
    R = T;
  w = 0;
  for (let x = 0; x < bytesRead_4; x++) if (R++, n[x] === Z) {
    if (w++, w >= a + 1) break;
  }
  for (let x = 0; x <= 3 && R - 1 - x >= T; x++) {
    let N = n[R - 1 - x - T];
    if (Fe(N)) continue;
    if (N >= 192 && et(N) > x + 1) R -= x + 1;
    break;
  }
  if (R > T && n[R - 1 - T] === Qe) R--;
  let I = R - S,
    M = I <= n.length ? n : Buffer.allocUnsafe(I),
    {
      bytesRead: bytesRead_5
    } = await e.read(M, 0, I, S);
  return {
    content: Oe(M, bytesRead_5),
    lineOffset: lineOffset,
    truncated: !1
  };
}
var jqe = e => `+ ${Math.max(e.oldStart + e.oldLines - 1, e.newStart + e.newLines - 1, 1)} `.length;
export { Nyo, d$n, u$n, stn, p$n, f$n, context as ist, timeout as m$n, itn, atn, Oke, XW, Bqe, XDe, Hyo, APt, Kkr, ltn, jqe };