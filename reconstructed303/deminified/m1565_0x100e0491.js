// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, Ze, ZZe, $c, WGo, Egn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { bt, Vbt, _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { oS, gv } from "B:/~BUN/root/chunk-nvgn0qsr.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { Cyt, BD } from "B:/~BUN/root/chunk-m3q01n4y.js";
import { A_ } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { TGs } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { Rd } from "B:/~BUN/root/chunk-aqd86p9a.js";
import { DI, KLe } from "B:/~BUN/root/chunk-rrdg7btm.js";
import { qms, QDn, aw, SC } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { p3r, Ukn } from "B:/~BUN/root/chunk-3xc6vbb9.js";
import { ai } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { iin, ain } from "B:/~BUN/root/chunk-b5bxtj5p.js";
import { $l, hl, qp, Zr, m3e, zpe, Hb as needs_3, Gdt, rUe, kC } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { i3r, qLe, a3r } from "B:/~BUN/root/chunk-2mqa0za1.js";
import { xb, LI } from "B:/~BUN/root/chunk-qtwzafn7.js";
import { w6t } from "B:/~BUN/root/chunk-cy4hjzy6.js";
import { unlink as S } from "fs/promises";
import { createServer as U } from "net";
import { join as M } from "path";
import { StringDecoder as L } from "string_decoder";
class k {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var R = new z(() => new k());
function XVt(e, r) {
  R.of(e).registerResolver(r);
}
function E(e, r) {
  return R.of(e).resolver?.(r) ?? !1;
}
class D {
  runner = null;
  registerRunner(e) {
    this.runner = e;
  }
}
var P = new z(() => new D());
function t3r(e, r) {
  P.of(e).registerRunner(r);
}
function b(e, r) {
  try {
    return P.of(e).runner?.(r) ?? !1;
  } catch (error) {
    return t(`[bg-rv] command runner threw, queueing the reply: ${d(error)}`, {
      level: "warn"
    }), !1;
  }
}
import { rm as x } from "fs/promises";
import { join as W } from "path";
class u {
  static NAME = ".prompt-draft";
  static MAX_BYTES = 262144;
  #t;
  #r;
  #e = Promise.resolve();
  #o;
  constructor(e) {
    this.#t = e;
  }
  follow() {
    return this.#o ??= this.#t.subscribe(this.#s), this.#n();
  }
  settled() {
    return this.#i(this.#e);
  }
  dispose() {
    this.#o?.(), this.#o = void 0;
  }
  #s = () => {
    let {
      value: value,
      cameBack: cameBack
    } = this.#t.getState();
    if (value !== this.#r?.value || cameBack !== this.#r.cameBack) this.#n();
  };
  #n(e = a.CLAUDE_JOB_DIR) {
    if (this.#r = this.#t.getState(), e) this.#e = this.#e.then(() => this.#a(e)).catch(hl);
    return this.#e;
  }
  #a(e) {
    let {
        value: value_2,
        cameBack: cameBack_2
      } = this.#t.getState(),
      n = W(e, u.NAME);
    return value_2 !== "" && !cameBack_2 ? qLe(n, ne(value_2, u.MAX_BYTES)) : x(n, {
      force: !0
    }).catch(s => (hl(s), qLe(n, "")));
  }
  async #i(e) {
    return await e, e === this.#e ? void 0 : this.#i(this.#e);
  }
}
var H = 3;
class A {
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
  promptInput = DI(T());
  promptDraftFile = new u(this.promptInput);
  promptStash = new a3r(this.promptInput);
  constructor(e, r, o, n, i) {
    this.authToken = r, this.storageV5 = i, this.nativeBrowserEnv = o, this.pendingInteractiveMarks = n, this.server = U(s => this.onConnection(s)), this.server.on("error", s => t(`[bg-rv] server error: ${String(s)}`, {
      level: "warn"
    })), this.server.listen(e), this.server.unref(), this.heartbeat = setInterval(() => this.send({
      type: "heartbeat"
    }), 30000), this.heartbeat.unref();
  }
  onConnection(e) {
    this.current?.destroy(), this.current = e, this.currentAuthed = !1, Egn(!1);
    while (this.pendingInteractiveMarks.length > 0) {
      let n = this.pendingInteractiveMarks[0];
      if (n === void 0 || !this.send(n)) break;
      this.pendingInteractiveMarks.shift();
    }
    this.unauthedDrops = 0, this.gateReported = !1, this.clearPreBootState().catch(n => {
      if (!G(n)) hl(n);
    }), this.restorePromptDraft().catch(() => {}), this.promptStash.restore().catch(l), e.on("error", () => e.destroy()), e.once("close", () => {
      if (this.current === e) this.current = void 0, Egn(!1);
    });
    let r = "",
      o = new L("utf8");
    e.on("data", n => {
      if (this.current !== e) {
        e.destroy();
        return;
      }
      r += o.write(n);
      let i;
      while ((i = r.indexOf(`
`)) >= 0) {
        let s = r.slice(0, i);
        if (r = r.slice(i + 1), s) this.handleLine(s);
      }
      if (r.length > 1048576) r = "", e.destroy();
    });
  }
  stop() {
    clearInterval(this.heartbeat), clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0, this.current?.destroy(), this.current = void 0, Egn(!1), this.restoreNativeBrowserEnv(), this.promptDraftFile.dispose(), this.promptStash.dispose(), this.server.close();
  }
  send(e) {
    if (!this.current || this.current.destroyed) return !1;
    try {
      return this.current.write(_(e) + `
`), !0;
    } catch {
      return !1;
    }
  }
  noteUnauthedRejection() {
    if (this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= H) this.gateReported = !0, m("bg_rv_gate", "unauthed_drops");
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
      if (this.authToken) if ("auth" in r && BD(r.auth, this.authToken)) {
        if (this.currentAuthed = !0, !this.gateReported) this.gateReported = !0, g("bg_rv_gate");
      } else {
        if (!this.currentAuthed) this.noteUnauthedRejection();
        this.send({
          type: "auth-rejected"
        });
      }
      return;
    }
    let o = r;
    if (this.authToken && !this.currentAuthed && o.type !== "repaint") {
      if (t(`[bg-rv] dropped ${typeof o.type === "string" ? o.type : "unknown"} from un-authed connection`, {
        level: "warn"
      }), o.type !== "attacher-caps") this.noteUnauthedRejection();
      this.send({
        type: "reply-rejected"
      });
      return;
    }
    if (o.type === "shutdown") {
      F(this.promptDraftFile, this.storageV5);
      return;
    }
    if (o.type === "repaint") {
      V();
      return;
    }
    if (o.type === "attacher-caps") {
      this.handleAttacherCaps(o);
      return;
    }
    if (o.type === "reply" && typeof o.text === "string") q(o);
  }
  handleAttacherCaps(e) {
    if (WGo(e.caps), Egn(!0), e.caps) p3r(Date.now());else Ukn();
    if (TGs(e.caps?.colorLevel), !e.caps) this.restoreNativeBrowserEnv();else if (typeof e.caps.browser === "string") process.env.BROWSER = e.caps.browser;else delete process.env.BROWSER;
    if (e.caps?.systemTheme) w6t(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let r = 0; !ai().has(process.stdout); r++) {
      if (r >= 60 || this.current !== e) return !1;
      await Y(500);
    }
    return !0;
  }
  async clearPreBootState() {
    let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    if (!(await this.waitForInkMount(this.current))) return;
    await m3e(async () => {
      let r = await Zr(CLAUDE_JOB_DIR, this.storageV5);
      if (!r) return;
      if (!r.forkSourceAlive) {
        let n = QDn(a.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (n) await $l(CLAUDE_JOB_DIR, {
          ...r,
          ...n
        }, this.storageV5), Object.assign(r, n);
      }
      if (r.state === "working" && r.detail === zpe) this.armStartupWedgeWatchdog(CLAUDE_JOB_DIR);
      let o = n => {
        let i = aw.current();
        return n.tempo === "blocked" && Gdt(n) && !(i?.overlay === !0 && i.text === n.needs);
      };
      if (o(r)) {
        let n = (await Zr(CLAUDE_JOB_DIR, this.storageV5)) ?? r;
        if (!o(n)) return;
        await $l(CLAUDE_JOB_DIR, {
          ...n,
          ...(rUe.includes(n.state) && {
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
            ...(rUe.includes(n.state) && {
              state: "running"
            }),
            tempo: "idle",
            needs: ""
          }
        });
        return;
      }
      if (!rUe.includes(r.state)) return;
      if (r.tempo === "blocked") return;
      await $l(CLAUDE_JOB_DIR, {
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
    this.wedgeTimer = setTimeout(o => this.onStartupWedgeTimeout(o), r, e), this.wedgeTimer.unref();
  }
  disarmStartupWedgeWatchdog() {
    this.wedgeDisarmed = !0, clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0;
  }
  onStartupWedgeTimeout(e) {
    Zr(e, this.storageV5).then(async r => {
      if (this.wedgeDisarmed || r?.state !== "working" || r.detail !== zpe || r.tempo === "blocked") return;
      await $l(e, {
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
      if (!G(r)) hl(r);
    });
  }
  async restorePromptDraft() {
    let CLAUDE_JOB_DIR_2 = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR_2) return;
    let r = M(CLAUDE_JOB_DIR_2, u.NAME),
      o = await al(r, 4 * u.MAX_BYTES);
    if (o === null) return;
    await S(r).catch(() => {});
    let n = i3r(o);
    if (!n) return;
    if (!iin()) ain(n);
    if (!(await this.waitForInkMount(this.current))) return;
    if (this.promptInput.getState().value === "") KLe(this.promptInput, n);
  }
}
class B {
  server = void 0;
}
var N = new z(() => new B());
function T() {
  return j();
}
function w() {
  return T().host;
}
function v() {
  return N.of(w());
}
async function Cti(e) {
  let CLAUDE_BG_RENDEZVOUS_SOCK = a.CLAUDE_BG_RENDEZVOUS_SOCK,
    o = v();
  if (!CLAUDE_BG_RENDEZVOUS_SOCK || o.server) return;
  let BROWSER = a.BROWSER,
    i = [];
  qms(c => {
    let y = {
      type: "interactive-mark",
      ...c
    };
    if (vce(y)) return !0;
    return i.push(y), !0;
  }), delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK;
  let CLAUDE_BG_RV_AUTH = a.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let CLAUDE_BG_SOCKET_TOKENS_PATH = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, CLAUDE_BG_SOCKET_TOKENS_PATH) {
    let c = await Cyt(CLAUDE_BG_SOCKET_TOKENS_PATH);
    if (c?.rvAuth) CLAUDE_BG_RV_AUTH = c.rvAuth;
    await S(CLAUDE_BG_SOCKET_TOKENS_PATH).catch(() => {});
  }
  await S(CLAUDE_BG_RENDEZVOUS_SOCK).catch(() => {}), o.server = new A(CLAUDE_BG_RENDEZVOUS_SOCK, CLAUDE_BG_RV_AUTH, BROWSER, i, e);
  let server = o.server;
  bt(() => server.promptStash.flush());
}
function vce(e) {
  return v().server?.send(e) ?? !1;
}
function F(e, r) {
  vce({
    type: "shutting-down"
  });
  let o = Rd(),
    n = [e.follow()];
  if (o) {
    let i = o.getLastSequenceNum();
    o.teardown({
      skipArchive: !0
    }).catch(() => {});
    let CLAUDE_JOB_DIR_3 = a.CLAUDE_JOB_DIR;
    if (CLAUDE_JOB_DIR_3 && i > 0) n.push(K(CLAUDE_JOB_DIR_3, i, r).catch(() => {}));
  }
  n.push(Vbt()), Promise.race([Promise.all(n).catch(() => {}).then(() => e.settled()), Y(5000)]).finally(() => {
    process.exit(0);
  });
}
function V() {
  if ($c() !== null) p3r(Date.now());
  if (!ai().get(process.stdout)?.forceRedraw({
    flushReact: !0
  })) process.stdout.write(gv + oS + `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`);
  vce({
    type: "repaint-done"
  });
}
function q(e) {
  if (e.nextTurn === !0) {
    SC({
      agentId: Ze(),
      mode: "prompt",
      value: e.text,
      priority: "next",
      origin: {
        kind: "human"
      },
      skipSlashCommands: !0
    }), ZZe(), t(`[bg-rv] enqueued next-turn prompt: ${e.text.slice(0, 80)}`);
    return;
  }
  if (E(w(), e.text)) {
    t(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  if (b(w(), e.text)) {
    t(`[bg-rv] peer reply ran at once: ${e.text.slice(0, 80)}`);
    return;
  }
  let mode = xb(e.text);
  if (SC({
    agentId: Ze(),
    mode: mode,
    value: LI(e.text),
    priority: "next",
    origin: {
      kind: "human"
    }
  }), mode === "prompt" && !e.text.trim().startsWith("/")) ZZe();
  t(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}
var detail = "stuck on a startup dialog",
  needs = "open this session to continue setup";
function n3r() {
  v().server?.disarmStartupWedgeWatchdog();
}
async function C(e, needs_2, detail_2, n) {
  let i = await Zr(e, n);
  if (!i) return {
    kind: "refused"
  };
  if (i.tempo === "blocked" && i.needs === needs_2) return {
    kind: "already"
  };
  if (i.tempo === "blocked" && i.needs !== needs_3) return {
    kind: "refused"
  };
  return await $l(e, {
    ...i,
    tempo: "blocked",
    detail: detail_2,
    needs: needs_2,
    updatedAt: new Date().toISOString()
  }, n), vce({
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
async function O(e, r, o, n) {
  let i = await Zr(e, n);
  if (!i || i.tempo !== "blocked" || i.needs !== r) return;
  await $l(e, {
    ...i,
    ...o,
    updatedAt: new Date().toISOString()
  }, n), vce({
    type: "state",
    patch: {
      tempo: o.tempo,
      needs: o.needs,
      detail: o.detail
    }
  });
}
async function Rti(e, r) {
  let CLAUDE_JOB_DIR_4 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_4 || v().server?.wedgeDisarmed) return;
  let n = e ? `${detail} (${e})` : detail,
    i = await C(CLAUDE_JOB_DIR_4, needs, n, r);
  return i.kind === "wrote" ? i.prior : void 0;
}
async function Ati(e, r) {
  let CLAUDE_JOB_DIR_5 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_5) return;
  await O(CLAUDE_JOB_DIR_5, needs, e, r);
}
async function r3r(e, r, o) {
  let CLAUDE_JOB_DIR_6 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_6) return {
    kind: "refused"
  };
  return m3e(() => C(CLAUDE_JOB_DIR_6, e, r, o));
}
async function o3r(e, r, o) {
  let CLAUDE_JOB_DIR_7 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_7) return;
  await m3e(() => O(CLAUDE_JOB_DIR_7, e, r, o));
}
async function s3r(e) {
  let r = a.CLAUDE_CODE_SESSION_KIND === "bg" ? a.CLAUDE_JOB_DIR : void 0,
    o = r ?? A_()?.jobDir;
  if (!o) return;
  let n = await Zr(o, e);
  if (n?.replayOwed === !0 && (await m3e(async () => {
    qp(o);
    let s = await Zr(o, e);
    if (s?.replayOwed !== !0 || s.tempo !== "active" || !kC(s.state)) return !1;
    return $l(o, {
      ...s,
      tempo: "idle",
      replayOwed: void 0,
      updatedAt: new Date().toISOString()
    }, e).then(() => !0, p => (hl(p), !1));
  }))) {
    vce({
      type: "state",
      patch: {
        tempo: "idle"
      }
    });
    return;
  }
  if (!r || !n || n.state !== "working" || n.tempo !== "active") return;
  await $l(o, {
    ...n,
    tempo: "blocked",
    needs: needs_3,
    updatedAt: new Date().toISOString()
  }, e), vce({
    type: "state",
    patch: {
      tempo: "blocked",
      needs: needs_3
    }
  });
}
async function K(e, bridgeSessionSeq, o) {
  let n = await Zr(e, o);
  if (!n || n.bridgeSessionSeq === bridgeSessionSeq) return;
  await $l(e, {
    ...n,
    bridgeSessionSeq: bridgeSessionSeq,
    updatedAt: new Date().toISOString()
  }, o);
}
export { XVt, t3r, Cti, vce, n3r, Rti, Ati, r3r, o3r, s3r };