// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  T_
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  AAr
} from "B:/~BUN/root/chunk-5w7xhbnh.js";
import {
  jn
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Net,
  Xin,
  Ajn
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  Skr
} from "B:/~BUN/root/chunk-a5dg1k4h.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
var Ylo = "Remote Control";

function Pfs(e) {
  return Net(e) ? "cloud" : Ylo
}
var v = 300000;
class _ {
  listed = void 0;
  inFlight = void 0;
  record(e, r, n) {
    this.listed = {
      at: Date.now(),
      listed: e,
      identityKey: r,
      truncated: n
    }
  }
  forget() {
    this.listed = void 0
  }
  begin(e) {
    this.inFlight = e
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0
  }
}
var h = new Je(() => new _);
async function rDt(e = {
  refresh: !0
}) {
  {
    let {
      primePeerIdentityOwner: r
    } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js");
    await r(e)
  }
}

function p() {
  let {
    getPeerBridgeIdentity: e
  } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js"), r = e();
  return r?.live ? r.key : null
}
async function c_r(e, r) {
  {
    let n = p();
    if (!n) return {
      rows: [],
      failed: !1,
      identityKey: null
    };
    let o = h.of(e),
      s = o.inFlight;
    if (s !== void 0 && s.identityKey === n) return s.promise;
    let {
      listBridgePeerSessions: a
    } = import.meta.require("B:/~BUN/root/chunk-7ahw1j86.js"), l = {
      record: void 0
    }, c = Date.now(), f = (async () => {
      try {
        let g = {
            failed: !1,
            truncated: !1
          },
          y;
        try {
          y = await a(g, r)
        } catch (b) {
          return t(`[bridge:population] fetch threw: ${d(b)} \u2014 treated as failed`, {
            level: "warn"
          }), {
            rows: [],
            failed: !0,
            identityKey: n
          }
        }
        return t(`[bridge:population] fetched ${y.length} rows in ${Date.now()-c}ms${g.failed?" (FAILED \u2014 not recordable)":""}${g.truncated?" (truncated at page budget)":""}`), {
          rows: y,
          failed: g.failed,
          ...g.truncated && {
            truncated: !0
          },
          identityKey: n
        }
      } finally {
        o.settle(l.record)
      }
    })();
    return l.record = {
      identityKey: n,
      promise: f
    }, o.begin(l.record), f
  }
  return {
    rows: [],
    failed: !1,
    identityKey: null
  }
}

function u_r(e) {
  {
    let r = p();
    return r !== null && e.identityKey === r
  }
  return !1
}

function OIn(e, r, n) {
  {
    let o = p();
    if (!o) return;
    if (r.identityKey !== o) {
      t("[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one");
      return
    }
    let s = h.of(e);
    if (r.failed) {
      let a = s.listed;
      if (a !== void 0 && a.identityKey === o) s.forget(), t("[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)");
      return
    }
    s.record(n, o, r.truncated === !0), t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`)
  }
}

function f_r(e, r) {
  {
    let n = p();
    if (!n || r.identityKey !== n) return;
    let o = h.of(e),
      s = o.listed;
    if (s !== void 0 && s.identityKey === n) o.forget(), t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)")
  }
}

function p_r(e) {
  return Ofs(e)?.rows
}

function Ofs(e) {
  {
    let r = p(),
      n = h.of(e).listed;
    if (!r || n === void 0 || n.identityKey !== r) return;
    let o = Date.now() - n.at;
    if (o >= 0 && o < v) return t(`[bridge:population] warm recorded set: ${n.listed.length} rows (age ${o}ms)`), {
      rows: n.listed,
      truncated: n.truncated
    }
  }
  return
}

function Ifs(e, r, n) {
  let o = Xin(r),
    s = new Set(n.filter((a) => !Ajn(r, a.id)).map((a) => jn(a.id)));
  return e.filter((a) => {
    let l = jn(a.id);
    return !o.has(l) && !s.has(l)
  })
}

function IIn(e, r) {
  return Ifs(e, [], r)
}

function a7t(e) {
  return e === "timeout" || e === "fetch_failed"
}
var I = 30000,
  P = 5000;
class B {
  memo = void 0;
  inFlight = void 0;
  record(e, r, n) {
    if (n !== S()) return;
    this.memo = {
      at: Date.now(),
      sessions: e,
      truncated: r,
      credential: n
    }
  }
  begin(e, r) {
    this.inFlight = {
      promise: e,
      credential: r
    }
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0
  }
  warm(e) {
    let r = this.memo;
    if (r === void 0 || r.credential !== e) return;
    let n = Date.now() - r.at;
    return n >= 0 && n < I ? r : void 0
  }
}

function S() {
  let {
    walkCredentialKey: e
  } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js");
  return e()
}
var C = new Je(() => new B);
async function Cft(e, r) {
  {
    let {
      hasCloudPeerAccess: n
    } = import.meta.require("B:/~BUN/root/chunk-2zzr6yqg.js");
    if (!n()) return {
      sessions: [],
      unavailable: "gate_off"
    };
    let {
      walkCcrSessionList: o
    } = import.meta.require("B:/~BUN/root/chunk-ffg7e7ec.js"), s = C.of(e), a = S(), l = s.warm(a);
    if (l !== void 0) return {
      sessions: l.sessions,
      unavailable: void 0,
      ...l.truncated && {
        truncated: !0
      }
    };
    let c = s.inFlight,
      f = c !== void 0 && c.credential === a ? c.promise : R(s, o, a, r),
      g = await we(f, P);
    if (g === void 0) return t(`[agents:cloud] session list not ready within ${P}ms \u2014 not searched this call, disclosing`, {
      level: "warn"
    }), {
      sessions: [],
      unavailable: "timeout"
    };
    if (a !== S()) return t("[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing", {
      level: "warn"
    }), {
      sessions: [],
      unavailable: "fetch_failed"
    };
    return g
  }
  return {
    sessions: [],
    unavailable: void 0
  }
}

function R(e, r, n, o) {
  let s = i.CLAUDE_CODE_REMOTE === !0,
    a = s ? jn(i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (a === "") {
    let {
      getPeerBridgeIdentity: c
    } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js"), f = c()?.bridgeSessionId;
    a = typeof f === "string" ? jn(f) : ""
  }
  let l = (async () => {
    let c, f = {
      truncated: !1
    };
    try {
      c = await r({
        status: f,
        throwOnError: !0,
        exhaustive: !0,
        includeBridgeKind: s,
        credentials: o
      })
    } catch (u) {
      return t(`[agents:cloud] session list threw: ${u instanceof TypeError?"malformed session-list response \u2014 ":""}${AAr(u)}`, {
        level: "error"
      }), {
        sessions: [],
        unavailable: "fetch_failed"
      }
    }
    let g = !1;
    if (s) {
      let {
        isRemoteControlPeerUnreachableFromHere: u
      } = import.meta.require("B:/~BUN/root/chunk-r0p2edvv.js");
      g = u()
    }
    let b = (a === "" ? c : c.filter((u) => jn(u.id) !== a)).map((u) => {
      let w = Date.parse(u.last_event_at ?? u.created_at ?? "");
      return {
        id: u.id,
        title: u.title ?? null,
        lastActive: Number.isNaN(w) ? void 0 : w,
        workerStatus: u.worker_status === "running" || u.worker_status === "idle" || u.worker_status === "requires_action" ? u.worker_status : void 0,
        remoteControl: u.environment_kind === "bridge",
        unreachableFromHere: g && u.environment_kind === "bridge",
        ...Skr(u.external_metadata),
        ...u.environment_kind === "bridge" && u.connection_status === "disconnected" && {
          offline: !0
        }
      }
    });
    return e.record(b, f.truncated, n), {
      sessions: b,
      unavailable: void 0,
      ...f.truncated && {
        truncated: !0
      }
    }
  })();
  return e.begin(l, n), l.finally(() => e.settle(l)), l
}

function m_r(e) {
  {
    let {
      hasCloudPeerAccess: r
    } = import.meta.require("B:/~BUN/root/chunk-2zzr6yqg.js");
    if (!r()) return;
    return C.of(e).warm(S())?.sessions
  }
  return
}
var l7t = "target is an elevated-security session unreachable from a cloud session",
  d7t = "target session reports it cannot receive cross-session messages";

function Mfs(e) {
  if (e.reason !== "denied") return "handler_rewrite";
  if (e.decisionReason?.type === "other") {
    if (e.decisionReason.reason === l7t) return "bridge_auth";
    if (e.decisionReason.reason === d7t) return "recipient_gate_off"
  }
  return "permission_denied"
}

function oDt(e, r, n, o) {
  try {
    let s = m_r(e)?.find((c) => jn(c.id) === jn(r));
    if (!s?.unreachableFromHere) return;
    let {
      formatUnreachableElevatedRefusal: a
    } = import.meta.require("B:/~BUN/root/chunk-r0p2edvv.js"), l;
    try {
      l = s.acceptsPeerMessages === !1 ? void 0 : o?.()
    } catch {
      l = void 0
    }
    return a(n, l === void 0 ? void 0 : {
      sendTool: l,
      sessionId: s.id
    })
  } catch (s) {
    t(`[agents:cloud] warm unreachable lookup failed (${T_(d(s))}) \u2014 treating as not known unreachable`, {
      level: "warn"
    });
    return
  }
}
var MIn = "can't receive cross-session messages (off in that session)";

function bXe(e, r, n) {
  try {
    let o = jn(r);
    if (!(m_r(e)?.some((a) => jn(a.id) === o && a.acceptsPeerMessages === !1) === !0 || p_r(e)?.some((a) => jn(a.id) === o && a.acceptsPeerMessages === !1) === !0)) return;
    return `Not sent: '${n}' ${MIn} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`
  } catch (o) {
    t(`[agents:cloud] warm cannot-receive lookup failed (${T_(d(o))}) \u2014 treating as unknown`, {
      level: "warn"
    });
    return
  }
}

function h_r(e, r) {
  try {
    let n = jn(r),
      o = m_r(e)?.find((a) => jn(a.id) === n),
      s = p_r(e)?.find((a) => jn(a.id) === n);
    if (o !== void 0 && !o.remoteControl || s !== void 0 && Net(s)) return !1;
    if (s?.inboundReportUnavailable && o?.acceptsPeerMessages === void 0) return !1;
    return !(o?.acceptsPeerMessages === !0 || s?.acceptsPeerMessages === !0)
  } catch (n) {
    return t(`[agents:cloud] warm inbound-report lookup failed (${T_(d(n))}) \u2014 treating as unreported`, {
      level: "warn"
    }), !0
  }
}
export {
  Ylo,
  Pfs,
  rDt,
  c_r,
  u_r,
  OIn,
  f_r,
  p_r,
  Ofs,
  Ifs,
  IIn,
  a7t,
  Cft,
  m_r,
  l7t,
  d7t,
  Mfs,
  oDt,
  MIn,
  bXe,
  h_r
};
