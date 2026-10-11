// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j, qe, md, eVr, ejt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { gt, m9e, b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { J0 } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Bo, ZN } from "B:/~BUN/root/chunk-2swveyqa.js";
import { $h, F_ } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { cl } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { r5e, vD } from "B:/~BUN/root/chunk-3hn9fzjy.js";
import { CLo } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Vl } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { pM, LIe } from "B:/~BUN/root/chunk-qaw9ka5b.js";
import { IT, yk, Ggo, nen } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Ynr, Lqt } from "B:/~BUN/root/chunk-q1b7bx45.js";
import { xs } from "B:/~BUN/root/chunk-p4t9nwg2.js";
import { Ubt, Bbt } from "B:/~BUN/root/chunk-mvdr6ncg.js";
import { Jc } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { ja, ml, Ir, Rqe, xqe, ry as needs_3, $De, Rke } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { Kh, JC } from "B:/~BUN/root/chunk-hjz4emsq.js";
import { tkt } from "B:/~BUN/root/chunk-qq6w89ha.js";
import { o, E, C, u, z } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { unlink as T } from "fs/promises";
import { createServer as ie } from "net";
import { join as N } from "path";
import { StringDecoder as ae } from "string_decoder";
class O {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var I = new q(() => new O());
function Fbt(e, r) {
  I.of(e).registerResolver(r);
}
function x(e, r) {
  return I.of(e).resolver?.(r) ?? !1;
}
import { rm as P } from "fs/promises";
import { join as W } from "path";
var L = ".prompt-stash",
  U = 262144,
  M = 256,
  ee = f(() => u({
    text: o(),
    cursorOffset: E().int().nonnegative(),
    pasteIds: C(E().int().nonnegative()).max(M),
    launchWarning: u({
      type: z(["deep-link", "prefill"]),
      prefillLength: E().int().nonnegative()
    }).optional()
  }));
function te(e) {
  return b({
    text: e.text,
    cursorOffset: e.cursorOffset,
    pasteIds: Object.values(e.pastedContents).filter(item => !item.inline).slice(0, M).map(item => item.id),
    launchWarning: e.launchWarning
  });
}
function R(e) {
  let r = [],
    n = "";
  for (let s of e.replace(/\r\n|\r/g, `
`).replaceAll("\t", "    ").split(/\u200C+/)) {
    let i = J0(s, "", {
      keepNewlines: !0
    });
    if (i === "") continue;
    if (n !== "" && /\S$/.test(n) && /^\S/.test(i)) r.push("\u200C");
    r.push(i), n = i;
  }
  return r.join("");
}
async function D(e, r) {
  await P(e, {
    force: !0
  });
  let n = await ZN(e, r, 384);
  try {
    await Bo(n, e);
  } catch (error) {
    throw await P(n, {
      force: !0
    }).catch(() => {}), error;
  }
}
function oe(e) {
  let r;
  try {
    r = J(e);
  } catch {
    return null;
  }
  let n = ee().safeParse(r);
  if (!n.success) return null;
  let {
      cursorOffset: cursorOffset,
      pasteIds: pasteIds,
      launchWarning: launchWarning
    } = n.data,
    h = R(n.data.text),
    k = new Set(pasteIds),
    text = "",
    g = 0;
  for (let S of Jc(h)) if (k.has(S.id)) text += h.slice(g, S.index), g = S.index + S.match.length;
  if (text += h.slice(g), text.trim() === "") return null;
  return {
    text: text,
    mode: "prompt",
    cursorOffset: re(text, Math.min(cursorOffset, text.length)).length,
    pastedContents: {},
    launchWarning: launchWarning
  };
}
async function ne(e, r) {
  let n = W(e, L),
    s = r === null ? "" : te(r);
  if (Buffer.byteLength(s) > U) t("[bg] prompt stash too large to persist; kept in memory only", {
    level: "warn"
  }), s = "";
  try {
    let i = await P(n, {
      force: !0
    }).then(() => !0, c => (ml(c), !1));
    if (s === "" && i) return;
    await D(n, s);
  } catch (error) {
    if (!B(error)) ml(error);
  }
}
async function se(e) {
  let r = await cl(W(e, L), U);
  if (!r) return null;
  let n = oe(r);
  if (n === null) t("[bg] persisted prompt stash unreadable or empty", {
    level: "warn"
  }), m("bg_prompt_stash_restore", "unreadable_or_empty");
  return n;
}
class A {
  #e;
  #t;
  #r = Promise.resolve();
  #o = !1;
  #n;
  constructor(e) {
    this.#e = e, this.#t = e.getState().stash, this.#n = e.subscribe(this.#s);
  }
  #s = () => {
    let stash = this.#e.getState().stash;
    if (stash === this.#t) return;
    this.#t = stash;
    let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    this.#r = this.#r.then(() => ne(CLAUDE_JOB_DIR, stash));
  };
  async restore() {
    let CLAUDE_JOB_DIR_2 = a.CLAUDE_JOB_DIR;
    if (this.#o || !CLAUDE_JOB_DIR_2) return !1;
    this.#o = !0;
    let stash_2 = await se(CLAUDE_JOB_DIR_2);
    if (stash_2 === null) return !1;
    if (this.#e.getState().stash !== null) return p("bg_prompt_stash_restore", "slot_taken"), !1;
    return this.#t = stash_2, this.#e.setState(n => ({
      ...n,
      stash: stash_2
    })), _("bg_prompt_stash_restore"), !0;
  }
  flush() {
    return this.#r;
  }
  dispose() {
    this.#n();
  }
}
var de = 3;
class F {
  server;
  current = void 0;
  heartbeat;
  wedgeTimer = void 0;
  wedgeDisarmed = !1;
  authToken;
  currentAuthed = !1;
  unauthedDrops = 0;
  gateReported = !1;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  promptInput = pM(V());
  promptStash = new A(this.promptInput);
  constructor(e, r, n, s, i) {
    this.authToken = r, this.storageV5 = i, this.nativeBrowserEnv = n, this.pendingInteractiveMarks = s, this.server = ie(c => this.onConnection(c)), this.server.on("error", c => t(`[bg-rv] server error: ${String(c)}`, {
      level: "warn"
    })), this.server.listen(e), this.server.unref(), this.heartbeat = setInterval(() => this.send({
      type: "heartbeat"
    }), 30000), this.heartbeat.unref();
  }
  onConnection(e) {
    this.current?.destroy(), this.current = e, this.currentAuthed = !1, ejt(!1);
    while (this.pendingInteractiveMarks.length > 0) {
      let s = this.pendingInteractiveMarks[0];
      if (s === void 0 || !this.send(s)) break;
      this.pendingInteractiveMarks.shift();
    }
    this.unauthedDrops = 0, this.gateReported = !1, this.clearPreBootState().catch(s => {
      if (!B(s)) ml(s);
    }), this.restorePromptDraft().catch(() => {}), this.promptStash.restore().catch(d), e.on("error", () => e.destroy()), e.once("close", () => {
      if (this.current === e) this.current = void 0, ejt(!1);
    });
    let r = "",
      n = new ae("utf8");
    e.on("data", s => {
      if (this.current !== e) {
        e.destroy();
        return;
      }
      r += n.write(s);
      let i;
      while ((i = r.indexOf(`
`)) >= 0) {
        let c = r.slice(0, i);
        if (r = r.slice(i + 1), c) this.handleLine(c);
      }
      if (r.length > 1048576) r = "", e.destroy();
    });
  }
  stop() {
    clearInterval(this.heartbeat), clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0, this.current?.destroy(), this.current = void 0, ejt(!1), this.restoreNativeBrowserEnv(), this.promptStash.dispose(), this.server.close();
  }
  send(e) {
    if (!this.current || this.current.destroyed) return !1;
    try {
      return this.current.write(b(e) + `
`), !0;
    } catch {
      return !1;
    }
  }
  noteUnauthedRejection() {
    if (this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= de) this.gateReported = !0, m("bg_rv_gate", "unauthed_drops");
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) delete process.env.BROWSER;else process.env.BROWSER = this.nativeBrowserEnv;
  }
  handleLine(e) {
    let r;
    try {
      r = J(e);
    } catch {
      return;
    }
    if (!r || typeof r !== "object") return;
    if ("role" in r) {
      if (this.authToken) if ("auth" in r && vD(r.auth, this.authToken)) {
        if (this.currentAuthed = !0, !this.gateReported) this.gateReported = !0, _("bg_rv_gate");
      } else {
        if (!this.currentAuthed) this.noteUnauthedRejection();
        this.send({
          type: "auth-rejected"
        });
      }
      return;
    }
    let n = r;
    if (this.authToken && !this.currentAuthed && n.type !== "repaint") {
      if (t(`[bg-rv] dropped ${typeof n.type === "string" ? n.type : "unknown"} from un-authed connection`, {
        level: "warn"
      }), n.type !== "attacher-caps") this.noteUnauthedRejection();
      this.send({
        type: "reply-rejected"
      });
      return;
    }
    if (n.type === "shutdown") {
      pe(this.promptInput, this.storageV5);
      return;
    }
    if (n.type === "repaint") {
      ce();
      return;
    }
    if (n.type === "attacher-caps") {
      this.handleAttacherCaps(n);
      return;
    }
    if (n.type === "reply" && typeof n.text === "string") le(n);
  }
  handleAttacherCaps(e) {
    if (eVr(e.caps), ejt(!0), e.caps) Ynr(Date.now());else Lqt();
    if (CLo(e.caps?.colorLevel), !e.caps) this.restoreNativeBrowserEnv();else if (typeof e.caps.browser === "string") process.env.BROWSER = e.caps.browser;else delete process.env.BROWSER;
    if (e.caps?.systemTheme) tkt(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let r = 0; !xs().has(process.stdout); r++) {
      if (r >= 60 || this.current !== e) return !1;
      await Q(500);
    }
    return !0;
  }
  async clearPreBootState() {
    let CLAUDE_JOB_DIR_3 = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR_3) return;
    if (!(await this.waitForInkMount(this.current))) return;
    await Rqe(async () => {
      let r = await Ir(CLAUDE_JOB_DIR_3, this.storageV5);
      if (!r) return;
      if (!r.forkSourceAlive) {
        let s = nen(a.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (s) await ja(CLAUDE_JOB_DIR_3, {
          ...r,
          ...s
        }, this.storageV5), Object.assign(r, s);
      }
      if (r.state === "working" && r.detail === xqe) this.armStartupWedgeWatchdog(CLAUDE_JOB_DIR_3);
      let n = s => {
        let i = IT.current();
        return s.tempo === "blocked" && $De(s) && !(i?.overlay === !0 && i.text === s.needs);
      };
      if (n(r)) {
        let s = (await Ir(CLAUDE_JOB_DIR_3, this.storageV5)) ?? r;
        if (!n(s)) return;
        await ja(CLAUDE_JOB_DIR_3, {
          ...s,
          ...(Rke.includes(s.state) && {
            state: "running"
          }),
          tempo: "idle",
          needs: void 0,
          needsOverlay: void 0,
          block: void 0,
          updatedAt: new Date().toISOString()
        }, this.storageV5), this.send({
          type: "state",
          patch: {
            ...(Rke.includes(s.state) && {
              state: "running"
            }),
            tempo: "idle",
            needs: ""
          }
        });
        return;
      }
      if (!Rke.includes(r.state)) return;
      if (r.tempo === "blocked") return;
      await ja(CLAUDE_JOB_DIR_3, {
        ...r,
        state: "running",
        tempo: "idle",
        updatedAt: new Date().toISOString()
      }, this.storageV5), this.send({
        type: "state",
        patch: {
          state: "running",
          tempo: "idle"
        }
      });
    });
  }
  armStartupWedgeWatchdog(e) {
    if (this.wedgeDisarmed) return;
    clearTimeout(this.wedgeTimer);
    let r = a.CLAUDE_BG_STARTUP_WEDGE_MS || 45000;
    this.wedgeTimer = setTimeout(n => this.onStartupWedgeTimeout(n), r, e), this.wedgeTimer.unref();
  }
  disarmStartupWedgeWatchdog() {
    this.wedgeDisarmed = !0, clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0;
  }
  onStartupWedgeTimeout(e) {
    Ir(e, this.storageV5).then(async r => {
      if (this.wedgeDisarmed || r?.state !== "working" || r.detail !== xqe || r.tempo === "blocked") return;
      await ja(e, {
        ...r,
        tempo: "blocked",
        detail: detail,
        needs: needs,
        updatedAt: new Date().toISOString()
      }, this.storageV5), this.send({
        type: "state",
        patch: {
          tempo: "blocked",
          detail: detail,
          needs: needs
        }
      });
    }).catch(r => {
      if (!B(r)) ml(r);
    });
  }
  async restorePromptDraft() {
    let CLAUDE_JOB_DIR_4 = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR_4) return;
    let r = N(CLAUDE_JOB_DIR_4, Z),
      n = await cl(r, 4 * Y);
    if (n === null) return;
    await T(r).catch(() => {});
    let s = R(n);
    if (!s) return;
    if (!Ubt()) Bbt(s);
    if (!(await this.waitForInkMount(this.current))) return;
    if (this.promptInput.getState().value === "") LIe(this.promptInput, s);
  }
}
class H {
  server = void 0;
}
var ue = new q(() => new H());
function V() {
  return j();
}
function G() {
  return V().host;
}
function y() {
  return ue.of(G());
}
async function zqo(e) {
  let CLAUDE_BG_RENDEZVOUS_SOCK = a.CLAUDE_BG_RENDEZVOUS_SOCK,
    n = y();
  if (!CLAUDE_BG_RENDEZVOUS_SOCK || n.server) return;
  let BROWSER = a.BROWSER,
    i = [];
  Ggo(l => {
    let g = {
      type: "interactive-mark",
      ...l
    };
    if (goe(g)) return !0;
    return i.push(g), !0;
  }), delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK;
  let CLAUDE_BG_RV_AUTH = a.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let CLAUDE_BG_SOCKET_TOKENS_PATH = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, CLAUDE_BG_SOCKET_TOKENS_PATH) {
    let l = await r5e(CLAUDE_BG_SOCKET_TOKENS_PATH);
    if (l?.rvAuth) CLAUDE_BG_RV_AUTH = l.rvAuth;
    await T(CLAUDE_BG_SOCKET_TOKENS_PATH).catch(() => {});
  }
  await T(CLAUDE_BG_RENDEZVOUS_SOCK).catch(() => {}), n.server = new F(CLAUDE_BG_RENDEZVOUS_SOCK, CLAUDE_BG_RV_AUTH, BROWSER, i, e);
  let server = n.server;
  gt(() => server.promptStash.flush());
}
function goe(e) {
  return y().server?.send(e) ?? !1;
}
function pe(e, r) {
  goe({
    type: "shutting-down"
  });
  let n = Vl(),
    s = [],
    CLAUDE_JOB_DIR_5 = a.CLAUDE_JOB_DIR;
  if (CLAUDE_JOB_DIR_5) s.push(me(e, CLAUDE_JOB_DIR_5).catch(() => {}));
  if (n) {
    let c = n.getLastSequenceNum();
    n.teardown({
      skipArchive: !0
    }).catch(() => {});
    let CLAUDE_JOB_DIR_6 = a.CLAUDE_JOB_DIR;
    if (CLAUDE_JOB_DIR_6 && c > 0) s.push(fe(CLAUDE_JOB_DIR_6, c, r).catch(() => {}));
  }
  s.push(m9e()), Promise.race([Promise.all(s), Q(5000)]).finally(() => {
    process.exit(0);
  });
}
function ce() {
  if (md() !== null) Ynr(Date.now());
  if (!xs().get(process.stdout)?.forceRedraw({
    flushReact: !0
  })) process.stdout.write(F_ + $h + `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`);
  goe({
    type: "repaint-done"
  });
}
function le(e) {
  if (x(G(), e.text)) {
    t(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  let mode = Kh(e.text);
  yk({
    agentId: qe(),
    mode: mode,
    value: JC(e.text),
    priority: "next",
    origin: {
      kind: "human"
    }
  }), t(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}
var detail = "stuck on a startup dialog",
  needs = "open this session to continue setup";
function $nr() {
  y().server?.disarmStartupWedgeWatchdog();
}
async function K(e, needs_2, detail_2, s) {
  let i = await Ir(e, s);
  if (!i) return {
    kind: "refused"
  };
  if (i.tempo === "blocked" && i.needs === needs_2) return {
    kind: "already"
  };
  if (i.tempo === "blocked" && i.needs !== needs_3) return {
    kind: "refused"
  };
  return await ja(e, {
    ...i,
    tempo: "blocked",
    detail: detail_2,
    needs: needs_2,
    updatedAt: new Date().toISOString()
  }, s), goe({
    type: "state",
    patch: {
      tempo: "blocked",
      detail: detail_2,
      needs: needs_2
    }
  }), {
    kind: "wrote",
    prior: {
      tempo: i.tempo,
      needs: i.needs,
      detail: i.detail
    }
  };
}
async function X(e, r, n, s) {
  let i = await Ir(e, s);
  if (!i || i.tempo !== "blocked" || i.needs !== r) return;
  await ja(e, {
    ...i,
    ...n,
    updatedAt: new Date().toISOString()
  }, s), goe({
    type: "state",
    patch: {
      tempo: n.tempo,
      needs: n.needs,
      detail: n.detail
    }
  });
}
async function Gqo(e, r) {
  let CLAUDE_JOB_DIR_7 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_7 || y().server?.wedgeDisarmed) return;
  let s = e ? `${detail} (${e})` : detail,
    i = await K(CLAUDE_JOB_DIR_7, needs, s, r);
  return i.kind === "wrote" ? i.prior : void 0;
}
async function Vqo(e, r) {
  let CLAUDE_JOB_DIR_8 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_8) return;
  await X(CLAUDE_JOB_DIR_8, needs, e, r);
}
async function Unr(e, r, n) {
  let CLAUDE_JOB_DIR_9 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_9) return {
    kind: "refused"
  };
  return Rqe(() => K(CLAUDE_JOB_DIR_9, e, r, n));
}
async function Bnr(e, r, n) {
  let CLAUDE_JOB_DIR_10 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_10) return;
  await Rqe(() => X(CLAUDE_JOB_DIR_10, e, r, n));
}
async function jnr(e) {
  let CLAUDE_JOB_DIR_11 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_11 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  let n = await Ir(CLAUDE_JOB_DIR_11, e);
  if (!n || n.state !== "working" || n.tempo !== "active") return;
  await ja(CLAUDE_JOB_DIR_11, {
    ...n,
    tempo: "blocked",
    needs: needs_3,
    updatedAt: new Date().toISOString()
  }, e), goe({
    type: "state",
    patch: {
      tempo: "blocked",
      needs: needs_3
    }
  });
}
var Z = ".prompt-draft",
  Y = 262144;
async function me(e, r) {
  let n = e.getState().value;
  if (!n) return;
  await D(N(r, Z), re(n, Y));
}
async function fe(e, bridgeSessionSeq, n) {
  let s = await Ir(e, n);
  if (!s || s.bridgeSessionSeq === bridgeSessionSeq) return;
  await ja(e, {
    ...s,
    bridgeSessionSeq: bridgeSessionSeq,
    updatedAt: new Date().toISOString()
  }, n);
}
export { Fbt, zqo, goe, $nr, Gqo, Vqo, Unr, Bnr, jnr };