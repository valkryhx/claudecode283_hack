// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { T_ } from "B:/~BUN/root/chunk-2f1svh63.js";
import { AAr } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { jn } from "B:/~BUN/root/chunk-rr294jrm.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Net, Xin, Ajn } from "B:/~BUN/root/chunk-smrt7z22.js";
import { Skr } from "B:/~BUN/root/chunk-a5dg1k4h.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var Ylo = "Remote Control";
function Pfs(e) {
  return Net(e) ? "cloud" : Ylo;
}
var v = 300000;
class _ {
  listed = void 0;
  inFlight = void 0;
  record(listed, identityKey, truncated) {
    this.listed = {
      at: Date.now(),
      listed: listed,
      identityKey: identityKey,
      truncated: truncated
    };
  }
  forget() {
    this.listed = void 0;
  }
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var h = new Je(() => new _());
async function rDt(e = {
  refresh: !0
}) {
  {
    let {
      primePeerIdentityOwner: primePeerIdentityOwner
    } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js");
    await primePeerIdentityOwner(e);
  }
}
function p() {
  let {
      getPeerBridgeIdentity: getPeerBridgeIdentity
    } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js"),
    r = getPeerBridgeIdentity();
  return r?.live ? r.key : null;
}
async function c_r(e, r) {
  {
    let identityKey_2 = p();
    if (!identityKey_2) return {
      rows: [],
      failed: !1,
      identityKey: null
    };
    let o = h.of(e),
      inFlight = o.inFlight;
    if (inFlight !== void 0 && inFlight.identityKey === identityKey_2) return inFlight.promise;
    let {
        listBridgePeerSessions: listBridgePeerSessions
      } = import.meta.require("B:/~BUN/root/chunk-7ahw1j86.js"),
      l = {
        record: void 0
      },
      c = Date.now(),
      promise = (async () => {
        try {
          let g = {
              failed: !1,
              truncated: !1
            },
            rows;
          try {
            rows = await listBridgePeerSessions(g, r);
          } catch (error) {
            return t(`[bridge:population] fetch threw: ${d(error)} \u2014 treated as failed`, {
              level: "warn"
            }), {
              rows: [],
              failed: !0,
              identityKey: identityKey_2
            };
          }
          return t(`[bridge:population] fetched ${rows.length} rows in ${Date.now() - c}ms${g.failed ? " (FAILED \u2014 not recordable)" : ""}${g.truncated ? " (truncated at page budget)" : ""}`), {
            rows: rows,
            failed: g.failed,
            ...(g.truncated && {
              truncated: !0
            }),
            identityKey: identityKey_2
          };
        } finally {
          o.settle(l.record);
        }
      })();
    return l.record = {
      identityKey: identityKey_2,
      promise: promise
    }, o.begin(l.record), promise;
  }
  return {
    rows: [],
    failed: !1,
    identityKey: null
  };
}
function u_r(e) {
  {
    let r = p();
    return r !== null && e.identityKey === r;
  }
  return !1;
}
function OIn(e, r, n) {
  {
    let o = p();
    if (!o) return;
    if (r.identityKey !== o) {
      t("[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one");
      return;
    }
    let s = h.of(e);
    if (r.failed) {
      let listed_2 = s.listed;
      if (listed_2 !== void 0 && listed_2.identityKey === o) s.forget(), t("[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)");
      return;
    }
    s.record(n, o, r.truncated === !0), t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`);
  }
}
function f_r(e, r) {
  {
    let n = p();
    if (!n || r.identityKey !== n) return;
    let o = h.of(e),
      listed_3 = o.listed;
    if (listed_3 !== void 0 && listed_3.identityKey === n) o.forget(), t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
  }
}
function p_r(e) {
  return Ofs(e)?.rows;
}
function Ofs(e) {
  {
    let r = p(),
      listed_4 = h.of(e).listed;
    if (!r || listed_4 === void 0 || listed_4.identityKey !== r) return;
    let o = Date.now() - listed_4.at;
    if (o >= 0 && o < v) return t(`[bridge:population] warm recorded set: ${listed_4.listed.length} rows (age ${o}ms)`), {
      rows: listed_4.listed,
      truncated: listed_4.truncated
    };
  }
  return;
}
function Ifs(e, r, n) {
  let o = Xin(r),
    s = new Set(n.filter(item => !Ajn(r, item.id)).map(item => jn(item.id)));
  return e.filter(item => {
    let l = jn(item.id);
    return !o.has(l) && !s.has(l);
  });
}
function IIn(e, r) {
  return Ifs(e, [], r);
}
function a7t(e) {
  return e === "timeout" || e === "fetch_failed";
}
var I = 30000,
  P = 5000;
class B {
  memo = void 0;
  inFlight = void 0;
  record(sessions, truncated_2, credential) {
    if (credential !== S()) return;
    this.memo = {
      at: Date.now(),
      sessions: sessions,
      truncated: truncated_2,
      credential: credential
    };
  }
  begin(promise_2, credential_2) {
    this.inFlight = {
      promise: promise_2,
      credential: credential_2
    };
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0;
  }
  warm(e) {
    let memo = this.memo;
    if (memo === void 0 || memo.credential !== e) return;
    let n = Date.now() - memo.at;
    return n >= 0 && n < I ? memo : void 0;
  }
}
function S() {
  let {
    walkCredentialKey: walkCredentialKey
  } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js");
  return walkCredentialKey();
}
var C = new Je(() => new B());
async function Cft(e, r) {
  {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess
    } = import.meta.require("B:/~BUN/root/chunk-2zzr6yqg.js");
    if (!hasCloudPeerAccess()) return {
      sessions: [],
      unavailable: "gate_off"
    };
    let {
        walkCcrSessionList: walkCcrSessionList
      } = import.meta.require("B:/~BUN/root/chunk-ffg7e7ec.js"),
      s = C.of(e),
      a = S(),
      l = s.warm(a);
    if (l !== void 0) return {
      sessions: l.sessions,
      unavailable: void 0,
      ...(l.truncated && {
        truncated: !0
      })
    };
    let inFlight_2 = s.inFlight,
      f = inFlight_2 !== void 0 && inFlight_2.credential === a ? inFlight_2.promise : R(s, walkCcrSessionList, a, r),
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
    return g;
  }
  return {
    sessions: [],
    unavailable: void 0
  };
}
function R(e, r, n, credentials) {
  let includeBridgeKind = i.CLAUDE_CODE_REMOTE === !0,
    a = includeBridgeKind ? jn(i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (a === "") {
    let {
        getPeerBridgeIdentity: getPeerBridgeIdentity_2
      } = import.meta.require("B:/~BUN/root/chunk-2pzh3ha4.js"),
      f = getPeerBridgeIdentity_2()?.bridgeSessionId;
    a = typeof f === "string" ? jn(f) : "";
  }
  let l = (async () => {
    let c,
      status = {
        truncated: !1
      };
    try {
      c = await r({
        status: status,
        throwOnError: !0,
        exhaustive: !0,
        includeBridgeKind: includeBridgeKind,
        credentials: credentials
      });
    } catch (error) {
      return t(`[agents:cloud] session list threw: ${error instanceof TypeError ? "malformed session-list response \u2014 " : ""}${AAr(error)}`, {
        level: "error"
      }), {
        sessions: [],
        unavailable: "fetch_failed"
      };
    }
    let g = !1;
    if (includeBridgeKind) {
      let {
        isRemoteControlPeerUnreachableFromHere: isRemoteControlPeerUnreachableFromHere
      } = import.meta.require("B:/~BUN/root/chunk-r0p2edvv.js");
      g = isRemoteControlPeerUnreachableFromHere();
    }
    let sessions_2 = (a === "" ? c : c.filter(item => jn(item.id) !== a)).map(item => {
      let w = Date.parse(item.last_event_at ?? item.created_at ?? "");
      return {
        id: item.id,
        title: item.title ?? null,
        lastActive: Number.isNaN(w) ? void 0 : w,
        workerStatus: item.worker_status === "running" || item.worker_status === "idle" || item.worker_status === "requires_action" ? item.worker_status : void 0,
        remoteControl: item.environment_kind === "bridge",
        unreachableFromHere: g && item.environment_kind === "bridge",
        ...Skr(item.external_metadata),
        ...(item.environment_kind === "bridge" && item.connection_status === "disconnected" && {
          offline: !0
        })
      };
    });
    return e.record(sessions_2, status.truncated, n), {
      sessions: sessions_2,
      unavailable: void 0,
      ...(status.truncated && {
        truncated: !0
      })
    };
  })();
  return e.begin(l, n), l.finally(() => e.settle(l)), l;
}
function m_r(e) {
  {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess_2
    } = import.meta.require("B:/~BUN/root/chunk-2zzr6yqg.js");
    if (!hasCloudPeerAccess_2()) return;
    return C.of(e).warm(S())?.sessions;
  }
  return;
}
var l7t = "target is an elevated-security session unreachable from a cloud session",
  d7t = "target session reports it cannot receive cross-session messages";
function Mfs(e) {
  if (e.reason !== "denied") return "handler_rewrite";
  if (e.decisionReason?.type === "other") {
    if (e.decisionReason.reason === l7t) return "bridge_auth";
    if (e.decisionReason.reason === d7t) return "recipient_gate_off";
  }
  return "permission_denied";
}
function oDt(e, r, n, o) {
  try {
    let s = m_r(e)?.find(c => jn(c.id) === jn(r));
    if (!s?.unreachableFromHere) return;
    let {
        formatUnreachableElevatedRefusal: formatUnreachableElevatedRefusal
      } = import.meta.require("B:/~BUN/root/chunk-r0p2edvv.js"),
      sendTool;
    try {
      sendTool = s.acceptsPeerMessages === !1 ? void 0 : o?.();
    } catch {
      sendTool = void 0;
    }
    return formatUnreachableElevatedRefusal(n, sendTool === void 0 ? void 0 : {
      sendTool: sendTool,
      sessionId: s.id
    });
  } catch (error) {
    t(`[agents:cloud] warm unreachable lookup failed (${T_(d(error))}) \u2014 treating as not known unreachable`, {
      level: "warn"
    });
    return;
  }
}
var MIn = "can't receive cross-session messages (off in that session)";
function bXe(e, r, n) {
  try {
    let o = jn(r);
    if (!(m_r(e)?.some(a => jn(a.id) === o && a.acceptsPeerMessages === !1) === !0 || p_r(e)?.some(a => jn(a.id) === o && a.acceptsPeerMessages === !1) === !0)) return;
    return `Not sent: '${n}' ${MIn} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (error) {
    t(`[agents:cloud] warm cannot-receive lookup failed (${T_(d(error))}) \u2014 treating as unknown`, {
      level: "warn"
    });
    return;
  }
}
function h_r(e, r) {
  try {
    let n = jn(r),
      o = m_r(e)?.find(a => jn(a.id) === n),
      s = p_r(e)?.find(a => jn(a.id) === n);
    if (o !== void 0 && !o.remoteControl || s !== void 0 && Net(s)) return !1;
    if (s?.inboundReportUnavailable && o?.acceptsPeerMessages === void 0) return !1;
    return !(o?.acceptsPeerMessages === !0 || s?.acceptsPeerMessages === !0);
  } catch (error) {
    return t(`[agents:cloud] warm inbound-report lookup failed (${T_(d(error))}) \u2014 treating as unreported`, {
      level: "warn"
    }), !0;
  }
}
export { Ylo, Pfs, rDt, c_r, u_r, OIn, f_r, p_r, Ofs, Ifs, IIn, a7t, Cft, m_r, l7t, d7t, Mfs, oDt, MIn, bXe, h_r };