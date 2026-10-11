// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { m$e, sne, upt, AFt } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { aNt } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { enn } from "B:/~BUN/root/chunk-467d5w8j.js";
import { XR } from "B:/~BUN/root/chunk-w5bkq1td.js";
var K$n = "Remote Control";
function BEr(e) {
  return m$e(e) ? "cloud" : K$n;
}
function rbo(e) {
  return sne(e) ?? "(untitled)";
}
var _ = 300000;
class P {
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
var S = new Nt(() => new P());
async function lKe(e = {
  refresh: !0
}) {
  {
    let {
      primePeerIdentityOwner: primePeerIdentityOwner
    } = import.meta.require("B:/~BUN/root/chunk-5jg0b6gg.js");
    await primePeerIdentityOwner(e);
  }
}
function p() {
  let {
      getPeerBridgeIdentity: getPeerBridgeIdentity
    } = import.meta.require("B:/~BUN/root/chunk-5jg0b6gg.js"),
    r = getPeerBridgeIdentity();
  return r?.live ? r.key : null;
}
async function Gtn(e, r) {
  {
    let identityKey_2 = p();
    if (!identityKey_2) return {
      rows: [],
      failed: !1,
      identityKey: null
    };
    let i = S.of(e),
      inFlight = i.inFlight;
    if (inFlight !== void 0 && inFlight.identityKey === identityKey_2) return inFlight.promise;
    let {
        listBridgePeerSessions: listBridgePeerSessions
      } = import.meta.require("B:/~BUN/root/chunk-4kew5r27.js"),
      u = {
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
            return t(`[bridge:population] fetch threw: ${l(error)} \u2014 treated as failed`, {
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
          i.settle(u.record);
        }
      })();
    return u.record = {
      identityKey: identityKey_2,
      promise: promise
    }, i.begin(u.record), promise;
  }
  return {
    rows: [],
    failed: !1,
    identityKey: null
  };
}
function Vtn(e) {
  {
    let r = p();
    return r !== null && e.identityKey === r;
  }
  return !1;
}
function ZPt(e, r, n) {
  {
    let i = p();
    if (!i) return;
    if (r.identityKey !== i) {
      t("[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one");
      return;
    }
    let s = S.of(e);
    if (r.failed) {
      let listed_2 = s.listed;
      if (listed_2 !== void 0 && listed_2.identityKey === i) s.forget(), t("[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)");
      return;
    }
    s.record(n, i, r.truncated === !0), t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`);
  }
}
function qtn(e, r) {
  {
    let n = p();
    if (!n || r.identityKey !== n) return;
    let i = S.of(e),
      listed_3 = i.listed;
    if (listed_3 !== void 0 && listed_3.identityKey === n) i.forget(), t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
  }
}
function Ktn(e) {
  return jEr(e)?.rows;
}
function jEr(e) {
  {
    let r = p(),
      listed_4 = S.of(e).listed;
    if (!r || listed_4 === void 0 || listed_4.identityKey !== r) return;
    let i = Date.now() - listed_4.at;
    if (i >= 0 && i < _) return t(`[bridge:population] warm recorded set: ${listed_4.listed.length} rows (age ${i}ms)`), {
      rows: listed_4.listed,
      truncated: listed_4.truncated
    };
  }
  return;
}
function WEr(e, r, n) {
  let i = upt(r),
    s = new Set(n.filter(item => !AFt(r, item.id)).map(item => pr(item.id)));
  return e.filter(item => {
    let u = pr(item.id);
    return !i.has(u) && !s.has(u);
  });
}
function eIt(e, r) {
  return WEr(e, [], r);
}
function Nst(e) {
  return e === "timeout" || e === "fetch_failed";
}
var j = 30000,
  B = 5000;
class C {
  memo = void 0;
  inFlight = void 0;
  record(sessions, truncated_2, credential) {
    if (credential !== h()) return;
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
    return n >= 0 && n < j ? memo : void 0;
  }
}
function h() {
  let {
    walkCredentialKey: walkCredentialKey
  } = import.meta.require("B:/~BUN/root/chunk-5jg0b6gg.js");
  return walkCredentialKey();
}
var v = new Nt(() => new C());
async function pLe(e, r) {
  {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess
    } = import.meta.require("B:/~BUN/root/chunk-7g24s31w.js");
    if (!hasCloudPeerAccess()) return {
      sessions: [],
      unavailable: "gate_off"
    };
    let {
        walkCcrSessionList: walkCcrSessionList
      } = import.meta.require("B:/~BUN/root/chunk-fhnme1d0.js"),
      s = v.of(e),
      o = h(),
      u = s.warm(o);
    if (u !== void 0) return {
      sessions: u.sessions,
      unavailable: void 0,
      ...(u.truncated && {
        truncated: !0
      })
    };
    let inFlight_2 = s.inFlight,
      f = inFlight_2 !== void 0 && inFlight_2.credential === o ? inFlight_2.promise : D(s, walkCcrSessionList, o, r),
      g = await nt(f, B);
    if (g === void 0) return t(`[agents:cloud] session list not ready within ${B}ms \u2014 not searched this call, disclosing`, {
      level: "warn"
    }), {
      sessions: [],
      unavailable: "timeout"
    };
    if (o !== h()) return t("[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing", {
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
function D(e, r, n, credentials) {
  let includeBridgeKind = a.CLAUDE_CODE_REMOTE === !0,
    o = includeBridgeKind ? pr(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (o === "") {
    let {
        getPeerBridgeIdentity: getPeerBridgeIdentity_2
      } = import.meta.require("B:/~BUN/root/chunk-5jg0b6gg.js"),
      f = getPeerBridgeIdentity_2()?.bridgeSessionId;
    o = typeof f === "string" ? pr(f) : "";
  }
  let u = (async () => {
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
      return t(`[agents:cloud] session list threw: ${error instanceof TypeError ? "malformed session-list response \u2014 " : ""}${aNt(error)}`, {
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
      } = import.meta.require("B:/~BUN/root/chunk-7y6ync74.js");
      g = isRemoteControlPeerUnreachableFromHere();
    }
    let sessions_2 = (o === "" ? c : c.filter(item => pr(item.id) !== o)).map(item => {
      let w = Date.parse(item.last_event_at ?? item.created_at ?? "");
      return {
        id: item.id,
        title: item.title ?? null,
        lastActive: Number.isNaN(w) ? void 0 : w,
        workerStatus: item.worker_status === "running" || item.worker_status === "idle" || item.worker_status === "requires_action" ? item.worker_status : void 0,
        remoteControl: item.environment_kind === "bridge",
        unreachableFromHere: g && item.environment_kind === "bridge",
        ...enn(item.external_metadata),
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
  return e.begin(u, n), u.finally(() => e.settle(u)), u;
}
function Ytn(e) {
  {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess_2
    } = import.meta.require("B:/~BUN/root/chunk-7g24s31w.js");
    if (!hasCloudPeerAccess_2()) return;
    return v.of(e).warm(h())?.sessions;
  }
  return;
}
function Hst(e, r, n) {
  try {
    if (!Ytn(e)?.find(o => pr(o.id) === pr(r))?.unreachableFromHere) return;
    let {
      formatUnreachableElevatedRefusal: formatUnreachableElevatedRefusal
    } = import.meta.require("B:/~BUN/root/chunk-7y6ync74.js");
    return formatUnreachableElevatedRefusal(n);
  } catch (error) {
    t(`[agents:cloud] warm unreachable lookup failed (${XR(l(error))}) \u2014 treating as not known unreachable`, {
      level: "warn"
    });
    return;
  }
}
var tIt = "can't receive cross-session messages (off in that session)";
function Vke(e, r, n) {
  try {
    let i = pr(r);
    if (!(Ytn(e)?.some(o => pr(o.id) === i && o.acceptsPeerMessages === !1) === !0 || Ktn(e)?.some(o => pr(o.id) === i && o.acceptsPeerMessages === !1) === !0)) return;
    return `Not sent: '${n}' ${tIt} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (error) {
    t(`[agents:cloud] warm cannot-receive lookup failed (${XR(l(error))}) \u2014 treating as unknown`, {
      level: "warn"
    });
    return;
  }
}
function Xtn(e, r) {
  try {
    let n = pr(r),
      i = Ytn(e)?.find(o => pr(o.id) === n),
      s = Ktn(e)?.find(o => pr(o.id) === n);
    if (i !== void 0 && !i.remoteControl || s !== void 0 && m$e(s)) return !1;
    if (s?.inboundReportUnavailable && i?.acceptsPeerMessages === void 0) return !1;
    return !(i?.acceptsPeerMessages === !0 || s?.acceptsPeerMessages === !0);
  } catch (error) {
    return t(`[agents:cloud] warm inbound-report lookup failed (${XR(l(error))}) \u2014 treating as unreported`, {
      level: "warn"
    }), !0;
  }
}
export { K$n, BEr, rbo, lKe, Gtn, Vtn, ZPt, qtn, Ktn, jEr, WEr, eIt, Nst, pLe, Ytn, Hst, tIt, Vke, Xtn };