// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, st, Owt, sf, EGs, uKn } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vt, Ijt, t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { ov, RT } from "B:/~BUN/root/chunk-1w2vha2y.js";
import { yd } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { AUt, OU } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { tb } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { tXi } from "B:/~BUN/root/chunk-x24hm796.js";
import { Ad } from "B:/~BUN/root/chunk-x4zqd4cy.js";
import { $M, P6e } from "B:/~BUN/root/chunk-zr04rj0q.js";
import { zbi, ocr, lE, GT } from "B:/~BUN/root/chunk-27h4st9h.js";
import { ojo, mXn } from "B:/~BUN/root/chunk-chv9g988.js";
import { Ii } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { ZHn, e$n } from "B:/~BUN/root/chunk-rmd6bs96.js";
import { ic, Td, rh, Fo, B9e, eTe, Uk as needs_3, JIt, j9e, $P } from "B:/~BUN/root/chunk-4vcs773m.js";
import { njo, VYe, rjo } from "B:/~BUN/root/chunk-t7hmm90h.js";
import { Mk, HM } from "B:/~BUN/root/chunk-y8c6wwat.js";
import { JSn } from "B:/~BUN/root/chunk-qed5a8pe.js";
import { unlink as S } from "fs/promises";
import { createServer as L } from "net";
import { join as N } from "path";
import { StringDecoder as j } from "string_decoder";
class k {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var E = new W(() => new k());
function Vgn(e, r) {
  E.of(e).registerResolver(r);
}
function R(e, r) {
  return E.of(e).resolver?.(r) ?? !1;
}
class D {
  runner = null;
  registerRunner(e) {
    this.runner = e;
  }
}
var P = new W(() => new D());
function J1o(e, r) {
  P.of(e).registerRunner(r);
}
function A(e, r) {
  try {
    return P.of(e).runner?.(r) ?? !1;
  } catch (error) {
    return t(`[bg-rv] command runner threw, queueing the reply: ${d(error)}`, {
      level: "warn"
    }), !1;
  }
}
import { rm as M } from "fs/promises";
import { join as U } from "path";
class c {
  static NAME = ".prompt-draft";
  static MAX_BYTES = 262144;
  #t;
  #r;
  #e = Promise.resolve();
  #n;
  constructor(e) {
    this.#t = e;
  }
  follow() {
    return this.#n ??= this.#t.subscribe(this.#s), this.#o();
  }
  settled() {
    return this.#i(this.#e);
  }
  dispose() {
    this.#n?.(), this.#n = void 0;
  }
  #s = () => {
    let {
      value: value,
      cameBack: cameBack
    } = this.#t.getState();
    if (value !== this.#r?.value || cameBack !== this.#r.cameBack) this.#o();
  };
  #o(e = i.CLAUDE_JOB_DIR) {
    if (this.#r = this.#t.getState(), e) this.#e = this.#e.then(() => this.#a(e)).catch(Td);
    return this.#e;
  }
  #a(e) {
    let {
        value: value_2,
        cameBack: cameBack_2
      } = this.#t.getState(),
      o = U(e, c.NAME);
    return value_2 !== "" && !cameBack_2 ? VYe(o, Q(value_2, c.MAX_BYTES)) : M(o, {
      force: !0
    }).catch(u => (Td(u), VYe(o, "")));
  }
  async #i(e) {
    return await e, e === this.#e ? void 0 : this.#i(this.#e);
  }
}
var F = 3,
  V = 5000;
class b {
  server;
  current = void 0;
  heartbeat;
  wedgeTimer = void 0;
  wedgeDisarmed = !1;
  authToken;
  currentAuthed = !1;
  unadmitted = new Set();
  admitOnAccept;
  silentPeerTimeoutMs = i.CLAUDE_BG_SILENT_PEER_TIMEOUT_MS || V;
  unauthedDrops = 0;
  gateReported = !1;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  promptInput = $M(B());
  promptDraftFile = new c(this.promptInput);
  promptStash = new rjo(this.promptInput);
  constructor(e, r, n, o, s, u) {
    this.authToken = r, this.admitOnAccept = n, this.storageV5 = u, this.nativeBrowserEnv = o, this.pendingInteractiveMarks = s, this.server = L(p => this.onConnection(p)), this.server.on("error", p => t(`[bg-rv] server error: ${String(p)}`, {
      level: "warn"
    })), this.server.listen(e), this.server.unref(), this.heartbeat = setInterval(() => this.send({
      type: "heartbeat"
    }), 30000), this.heartbeat.unref();
  }
  admit(e) {
    e.setTimeout(0), this.current?.destroy(), this.current = e, this.currentAuthed = !1, uKn(!1);
    while (this.pendingInteractiveMarks.length > 0) {
      let r = this.pendingInteractiveMarks[0];
      if (r === void 0 || !this.send(r)) break;
      this.pendingInteractiveMarks.shift();
    }
    this.unauthedDrops = 0, this.gateReported = !1, this.clearPreBootState().catch(r => {
      if (!K(r)) Td(r);
    }), this.restorePromptDraft().catch(() => {}), this.promptStash.restore().catch(a), e.once("close", () => {
      if (this.current === e) this.current = void 0, uKn(!1);
    });
  }
  onConnection(e) {
    if (e.on("error", () => e.destroy()), this.admitOnAccept) this.admit(e);else this.unadmitted.add(e), e.once("close", () => this.unadmitted.delete(e)), e.setTimeout(this.silentPeerTimeoutMs, () => {
      t(`[bg-rv] closed a connection that wrote nothing in ${this.silentPeerTimeoutMs}ms`), e.destroy();
    });
    let r = "",
      n = new j("utf8");
    e.on("data", o => {
      if (this.current !== e && !this.unadmitted.has(e)) {
        e.destroy();
        return;
      }
      r += n.write(o);
      let s;
      while ((s = r.indexOf(`
`)) >= 0) {
        let u = r.slice(0, s);
        if (r = r.slice(s + 1), u) {
          if (this.unadmitted.delete(e)) this.admit(e);
          this.handleLine(u);
        }
      }
      if (r.length > 1048576) r = "", e.destroy();
    });
  }
  stop() {
    clearInterval(this.heartbeat), clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0, this.current?.destroy(), this.current = void 0;
    for (let e of this.unadmitted) e.destroy();
    this.unadmitted.clear(), uKn(!1), this.restoreNativeBrowserEnv(), this.promptDraftFile.dispose(), this.promptStash.dispose(), this.server.close();
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
    if (this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= F) this.gateReported = !0, m("bg_rv_gate", "unauthed_drops");
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) delete process.env.BROWSER;else process.env.BROWSER = this.nativeBrowserEnv;
  }
  handleLine(e) {
    let r;
    try {
      r = ee(e);
    } catch {
      return;
    }
    if (!r || typeof r !== "object") return;
    if ("role" in r) {
      if (this.authToken) if ("auth" in r && OU(r.auth, this.authToken)) {
        if (this.currentAuthed = !0, !this.gateReported) this.gateReported = !0, g("bg_rv_gate");
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
      q(this.promptDraftFile, this.storageV5);
      return;
    }
    if (n.type === "repaint") {
      z();
      return;
    }
    if (n.type === "attacher-caps") {
      this.handleAttacherCaps(n);
      return;
    }
    if (n.type === "reply" && typeof n.text === "string") X(n);
  }
  handleAttacherCaps(e) {
    if (EGs(e.caps), uKn(!0), e.caps) ojo(Date.now());else mXn();
    if (tXi(e.caps?.colorLevel), !e.caps) this.restoreNativeBrowserEnv();else if (typeof e.caps.browser === "string") process.env.BROWSER = e.caps.browser;else delete process.env.BROWSER;
    if (e.caps?.systemTheme) JSn(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let r = 0; !Ii().has(process.stdout); r++) {
      if (r >= 60 || this.current !== e) return !1;
      await J(500);
    }
    return !0;
  }
  async clearPreBootState() {
    let CLAUDE_JOB_DIR = i.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    if (!(await this.waitForInkMount(this.current))) return;
    await B9e(async () => {
      let r = await Fo(CLAUDE_JOB_DIR, this.storageV5);
      if (!r) return;
      if (!r.forkSourceAlive) {
        let o = ocr(i.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (o) await ic(CLAUDE_JOB_DIR, {
          ...r,
          ...o
        }, this.storageV5), Object.assign(r, o);
      }
      if (r.state === "working" && r.detail === eTe) this.armStartupWedgeWatchdog(CLAUDE_JOB_DIR);
      let n = o => {
        let s = lE.current();
        return o.tempo === "blocked" && JIt(o) && !(s?.overlay === !0 && s.text === o.needs);
      };
      if (n(r)) {
        let o = (await Fo(CLAUDE_JOB_DIR, this.storageV5)) ?? r;
        if (!n(o)) return;
        await ic(CLAUDE_JOB_DIR, {
          ...o,
          ...(j9e.includes(o.state) && {
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
            ...(j9e.includes(o.state) && {
              state: "running"
            }),
            tempo: "idle",
            needs: ""
          }
        });
        return;
      }
      if (!j9e.includes(r.state)) return;
      if (r.tempo === "blocked") return;
      await ic(CLAUDE_JOB_DIR, {
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
    let r = i.CLAUDE_BG_STARTUP_WEDGE_MS || 45000;
    this.wedgeTimer = setTimeout(n => this.onStartupWedgeTimeout(n), r, e), this.wedgeTimer.unref();
  }
  disarmStartupWedgeWatchdog() {
    this.wedgeDisarmed = !0, clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0;
  }
  onStartupWedgeTimeout(e) {
    Fo(e, this.storageV5).then(async r => {
      if (this.wedgeDisarmed || r?.state !== "working" || r.detail !== eTe || r.tempo === "blocked") return;
      await ic(e, {
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
      if (!K(r)) Td(r);
    });
  }
  async restorePromptDraft() {
    let CLAUDE_JOB_DIR_2 = i.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR_2) return;
    let r = N(CLAUDE_JOB_DIR_2, c.NAME),
      n = await yd(r, 4 * c.MAX_BYTES);
    if (n === null) return;
    await S(r).catch(() => {});
    let o = njo(n);
    if (!o) return;
    if (!ZHn()) e$n(o);
    if (!(await this.waitForInkMount(this.current))) return;
    if (this.promptInput.getState().value === "") P6e(this.promptInput, o);
  }
}
class T {
  server = void 0;
}
var G = new W(() => new T());
function B() {
  return H();
}
function w() {
  return B().host;
}
function v() {
  return G.of(w());
}
async function tga(e) {
  let CLAUDE_BG_RENDEZVOUS_SOCK = i.CLAUDE_BG_RENDEZVOUS_SOCK,
    n = v();
  if (!CLAUDE_BG_RENDEZVOUS_SOCK || n.server) return;
  let BROWSER = i.BROWSER,
    s = [];
  zbi(l => {
    let y = {
      type: "interactive-mark",
      ...l
    };
    if (Tke(y)) return !0;
    return s.push(y), !0;
  }), delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK;
  let CLAUDE_BG_RV_AUTH = i.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let CLAUDE_BG_SOCKET_TOKENS_PATH = i.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, CLAUDE_BG_SOCKET_TOKENS_PATH) {
    let l = await AUt(CLAUDE_BG_SOCKET_TOKENS_PATH);
    if (l?.rvAuth) CLAUDE_BG_RV_AUTH = l.rvAuth;
    await S(CLAUDE_BG_SOCKET_TOKENS_PATH).catch(() => {});
  }
  let C = i.CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS === "1" || !CLAUDE_BG_RV_AUTH && !CLAUDE_BG_SOCKET_TOKENS_PATH;
  await S(CLAUDE_BG_RENDEZVOUS_SOCK).catch(() => {}), n.server = new b(CLAUDE_BG_RENDEZVOUS_SOCK, CLAUDE_BG_RV_AUTH, C, BROWSER, s, e);
  let server = n.server;
  vt(() => server.promptStash.flush());
}
function Tke(e) {
  return v().server?.send(e) ?? !1;
}
function q(e, r) {
  Tke({
    type: "shutting-down"
  });
  let n = Ad(),
    o = [e.follow()];
  if (n) {
    let s = n.getLastSequenceNum();
    n.teardown({
      skipArchive: !0
    }).catch(() => {});
    let CLAUDE_JOB_DIR_3 = i.CLAUDE_JOB_DIR;
    if (CLAUDE_JOB_DIR_3 && s > 0) o.push(Y(CLAUDE_JOB_DIR_3, s, r).catch(() => {}));
  }
  o.push(Ijt()), Promise.race([Promise.all(o).catch(() => {}).then(() => Promise.all([e.settled(), B9e(async () => {})])), J(5000)]).finally(() => {
    process.exit(0);
  });
}
function z() {
  if (sf() !== null) ojo(Date.now());
  if (!Ii().get(process.stdout)?.forceRedraw({
    flushReact: !0
  })) process.stdout.write(RT + ov + `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`);
  Tke({
    type: "repaint-done"
  });
}
function X(e) {
  if (e.nextTurn === !0) {
    GT({
      agentId: st(),
      mode: "prompt",
      value: e.text,
      priority: "next",
      origin: {
        kind: "human"
      },
      skipSlashCommands: !0
    }), Owt(), t(`[bg-rv] enqueued next-turn prompt: ${e.text.slice(0, 80)}`);
    return;
  }
  if (R(w(), e.text)) {
    t(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  if (A(w(), e.text)) {
    t(`[bg-rv] peer reply ran at once: ${e.text.slice(0, 80)}`);
    return;
  }
  let mode = Mk(e.text);
  if (GT({
    agentId: st(),
    mode: mode,
    value: HM(e.text),
    priority: "next",
    origin: {
      kind: "human"
    }
  }), mode === "prompt" && !e.text.trim().startsWith("/")) Owt();
  t(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}
var detail = "stuck on a startup dialog",
  needs = "open this session to continue setup";
function Q1o() {
  v().server?.disarmStartupWedgeWatchdog();
}
async function O(e, needs_2, detail_2, o) {
  let s = await Fo(e, o);
  if (!s) return {
    kind: "refused"
  };
  if (s.tempo === "blocked" && s.needs === needs_2) return {
    kind: "already"
  };
  if (s.tempo === "blocked" && s.needs !== needs_3) return {
    kind: "refused"
  };
  return await ic(e, {
    ...s,
    tempo: "blocked",
    detail: detail_2,
    needs: needs_2,
    updatedAt: new Date().toISOString()
  }, o), Tke({
    type: "state",
    patch: {
      tempo: "blocked",
      detail: detail_2,
      needs: needs_2
    }
  }), {
    kind: "wrote",
    prior: {
      tempo: s.tempo,
      needs: s.needs,
      detail: s.detail
    }
  };
}
async function I(e, r, n, o) {
  let s = await Fo(e, o);
  if (!s || s.tempo !== "blocked" || s.needs !== r) return;
  await ic(e, {
    ...s,
    ...n,
    updatedAt: new Date().toISOString()
  }, o), Tke({
    type: "state",
    patch: {
      tempo: n.tempo,
      needs: n.needs,
      detail: n.detail
    }
  });
}
async function nga(e, r) {
  let CLAUDE_JOB_DIR_4 = i.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_4 || v().server?.wedgeDisarmed) return;
  let o = e ? `${detail} (${e})` : detail,
    s = await O(CLAUDE_JOB_DIR_4, needs, o, r);
  return s.kind === "wrote" ? s.prior : void 0;
}
async function rga(e, r) {
  let CLAUDE_JOB_DIR_5 = i.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_5) return;
  await I(CLAUDE_JOB_DIR_5, needs, e, r);
}
async function Z1o(e, r, n) {
  let CLAUDE_JOB_DIR_6 = i.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_6) return {
    kind: "refused"
  };
  return B9e(() => O(CLAUDE_JOB_DIR_6, e, r, n));
}
async function ejo(e, r, n) {
  let CLAUDE_JOB_DIR_7 = i.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_7) return;
  await B9e(() => I(CLAUDE_JOB_DIR_7, e, r, n));
}
async function tjo(e) {
  let r = i.CLAUDE_CODE_SESSION_KIND === "bg" ? i.CLAUDE_JOB_DIR : void 0,
    n = r ?? tb()?.jobDir;
  if (!n) return;
  let o = await Fo(n, e);
  if (o?.replayOwed === !0 && (await B9e(async () => {
    rh(n);
    let u = await Fo(n, e);
    if (u?.replayOwed !== !0 || u.tempo !== "active" || !$P(u.state)) return !1;
    return ic(n, {
      ...u,
      tempo: "idle",
      replayOwed: void 0,
      updatedAt: new Date().toISOString()
    }, e).then(() => !0, p => (Td(p), !1));
  }))) {
    Tke({
      type: "state",
      patch: {
        tempo: "idle"
      }
    });
    return;
  }
  if (!r || !o || o.state !== "working" || o.tempo !== "active") return;
  await ic(n, {
    ...o,
    tempo: "blocked",
    needs: needs_3,
    updatedAt: new Date().toISOString()
  }, e), Tke({
    type: "state",
    patch: {
      tempo: "blocked",
      needs: needs_3
    }
  });
}
async function Y(e, bridgeSessionSeq, n) {
  let o = await Fo(e, n);
  if (!o || o.bridgeSessionSeq === bridgeSessionSeq) return;
  await ic(e, {
    ...o,
    bridgeSessionSeq: bridgeSessionSeq,
    updatedAt: new Date().toISOString()
  }, n);
}
export { Vgn, J1o, tga, Tke, Q1o, nga, rga, Z1o, ejo, tjo };