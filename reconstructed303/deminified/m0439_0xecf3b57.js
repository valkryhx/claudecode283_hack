// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Bd } from "B:/~BUN/root/chunk-jwh3r245.js";
import { at } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { rL } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { gKn } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { zWe, VUt, Ncn } from "B:/~BUN/root/chunk-e4q58xft.js";
import { Kzn } from "B:/~BUN/root/chunk-f561y43v.js";
import { Rn } from "B:/~BUN/root/chunk-hwnj8m4g.js";
var jq = "SendFile",
  VEs = "Send one or more files to another Claude Code session";
function qEs(e, r) {
  return `Send files to another Claude Code session \u2014 a peer session on this machine, or a Remote Control / cloud session on another machine. The receiving Claude gets the files on its own filesystem with @path references, plus your message.

Use this when a file is the thing to hand over \u2014 a doc with figures, a screenshot, a report, a build artifact. For plain text, use ${Rn} instead. For agents inside this session (subagents, teammates), also use ${Rn} \u2014 they share your filesystem and can read the file at its path directly.

\`to\` accepts a peer session name from ${Bd}, or an explicit \`uds:<socket>\` / \`bridge:<session id>\` address.

Each file is capped at ${r} MiB, at most ${e} files per send. Files must exist on the local filesystem \u2014 write content to a file first if needed. The receiver verifies each file against a sha256 digest of what was sent (where the transport carries it) and refuses a mismatch with a visible note.

Example: ${jq}({ to: "devbox", files: ["report.pdf", "figures/plot.png"], message: "Here's the doc with figures." })`;
}
var Ykr = "Remote Control";
function Myo(e) {
  return zWe(e) ? "cloud" : Ykr;
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
var b = new at(() => new _());
async function Oct(e = {
  refresh: !0
}) {
  {
    let {
      primePeerIdentityOwner: primePeerIdentityOwner
    } = import.meta.require("B:/~BUN/root/chunk-bxhhymyx.js");
    await primePeerIdentityOwner(e);
  }
}
function p() {
  let {
      getPeerBridgeIdentity: getPeerBridgeIdentity
    } = import.meta.require("B:/~BUN/root/chunk-bxhhymyx.js"),
    r = getPeerBridgeIdentity();
  return r?.live ? r.key : null;
}
async function zUn(e, r) {
  {
    let identityKey_2 = p();
    if (!identityKey_2) return {
      rows: [],
      failed: !1,
      identityKey: null
    };
    let i = b.of(e),
      inFlight = i.inFlight;
    if (inFlight !== void 0 && inFlight.identityKey === identityKey_2) return inFlight.promise;
    let {
        listBridgePeerSessions: listBridgePeerSessions
      } = import.meta.require("B:/~BUN/root/chunk-7rtd6995.js"),
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
          i.settle(l.record);
        }
      })();
    return l.record = {
      identityKey: identityKey_2,
      promise: promise
    }, i.begin(l.record), promise;
  }
  return {
    rows: [],
    failed: !1,
    identityKey: null
  };
}
function GUn(e) {
  {
    let r = p();
    return r !== null && e.identityKey === r;
  }
  return !1;
}
function ten(e, r, n) {
  {
    let i = p();
    if (!i) return;
    if (r.identityKey !== i) {
      t("[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one");
      return;
    }
    let o = b.of(e);
    if (r.failed) {
      let listed_2 = o.listed;
      if (listed_2 !== void 0 && listed_2.identityKey === i) o.forget(), t("[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)");
      return;
    }
    o.record(n, i, r.truncated === !0), t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`);
  }
}
function VUn(e, r) {
  {
    let n = p();
    if (!n || r.identityKey !== n) return;
    let i = b.of(e),
      listed_3 = i.listed;
    if (listed_3 !== void 0 && listed_3.identityKey === n) i.forget(), t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
  }
}
function qUn(e) {
  return Dyo(e)?.rows;
}
function Dyo(e) {
  {
    let r = p(),
      listed_4 = b.of(e).listed;
    if (!r || listed_4 === void 0 || listed_4.identityKey !== r) return;
    let i = Date.now() - listed_4.at;
    if (i >= 0 && i < v) return t(`[bridge:population] warm recorded set: ${listed_4.listed.length} rows (age ${i}ms)`), {
      rows: listed_4.listed,
      truncated: listed_4.truncated
    };
  }
  return;
}
function Lyo(e, r, n) {
  let i = VUt(r),
    o = new Set(n.filter(item => !Ncn(r, item.id)).map(item => er(item.id)));
  return e.filter(item => {
    let l = er(item.id);
    return !i.has(l) && !o.has(l);
  });
}
function nen(e, r) {
  return Lyo(e, [], r);
}
function EMt(e) {
  return e === "timeout" || e === "fetch_failed";
}
var I = 30000,
  P = 5000;
class C {
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
  } = import.meta.require("B:/~BUN/root/chunk-bxhhymyx.js");
  return walkCredentialKey();
}
var B = new at(() => new C());
async function K3e(e, r) {
  {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess
    } = import.meta.require("B:/~BUN/root/chunk-ckxj8mfp.js");
    if (!hasCloudPeerAccess()) return {
      sessions: [],
      unavailable: "gate_off"
    };
    let {
        walkCcrSessionList: walkCcrSessionList
      } = import.meta.require("B:/~BUN/root/chunk-b8vnjt4y.js"),
      o = B.of(e),
      s = S(),
      l = o.warm(s);
    if (l !== void 0) return {
      sessions: l.sessions,
      unavailable: void 0,
      ...(l.truncated && {
        truncated: !0
      })
    };
    let inFlight_2 = o.inFlight,
      f = inFlight_2 !== void 0 && inFlight_2.credential === s ? inFlight_2.promise : R(o, walkCcrSessionList, s, r),
      g = await je(f, P);
    if (g === void 0) return t(`[agents:cloud] session list not ready within ${P}ms \u2014 not searched this call, disclosing`, {
      level: "warn"
    }), {
      sessions: [],
      unavailable: "timeout"
    };
    if (s !== S()) return t("[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing", {
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
  let includeBridgeKind = a.CLAUDE_CODE_REMOTE === !0,
    s = includeBridgeKind ? er(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (s === "") {
    let {
        getPeerBridgeIdentity: getPeerBridgeIdentity_2
      } = import.meta.require("B:/~BUN/root/chunk-bxhhymyx.js"),
      f = getPeerBridgeIdentity_2()?.bridgeSessionId;
    s = typeof f === "string" ? er(f) : "";
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
      return t(`[agents:cloud] session list threw: ${error instanceof TypeError ? "malformed session-list response \u2014 " : ""}${gKn(error)}`, {
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
      } = import.meta.require("B:/~BUN/root/chunk-2fnw3gv0.js");
      g = isRemoteControlPeerUnreachableFromHere();
    }
    let sessions_2 = (s === "" ? c : c.filter(item => er(item.id) !== s)).map(item => {
      let w = Date.parse(item.last_event_at ?? item.created_at ?? "");
      return {
        id: item.id,
        title: item.title ?? null,
        lastActive: Number.isNaN(w) ? void 0 : w,
        workerStatus: item.worker_status === "running" || item.worker_status === "idle" || item.worker_status === "requires_action" ? item.worker_status : void 0,
        remoteControl: item.environment_kind === "bridge",
        unreachableFromHere: g && item.environment_kind === "bridge",
        ...Kzn(item.external_metadata),
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
function KUn(e) {
  {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess_2
    } = import.meta.require("B:/~BUN/root/chunk-ckxj8mfp.js");
    if (!hasCloudPeerAccess_2()) return;
    return B.of(e).warm(S())?.sessions;
  }
  return;
}
var TMt = "target is an elevated-security session unreachable from a cloud session",
  CMt = "target session reports it cannot receive cross-session messages";
function Nyo(e) {
  if (e.reason !== "denied") return "handler_rewrite";
  if (e.decisionReason?.type === "other") {
    if (e.decisionReason.reason === TMt) return "bridge_auth";
    if (e.decisionReason.reason === CMt) return "recipient_gate_off";
  }
  return "permission_denied";
}
function Ict(e, r, n, i) {
  try {
    let o = KUn(e)?.find(c => er(c.id) === er(r));
    if (!o?.unreachableFromHere) return;
    let {
        formatUnreachableElevatedRefusal: formatUnreachableElevatedRefusal
      } = import.meta.require("B:/~BUN/root/chunk-2fnw3gv0.js"),
      sendTool;
    try {
      sendTool = o.acceptsPeerMessages === !1 ? void 0 : i?.();
    } catch {
      sendTool = void 0;
    }
    return formatUnreachableElevatedRefusal(n, sendTool === void 0 ? void 0 : {
      sendTool: sendTool,
      sessionId: o.id
    });
  } catch (error) {
    t(`[agents:cloud] warm unreachable lookup failed (${rL(d(error))}) \u2014 treating as not known unreachable`, {
      level: "warn"
    });
    return;
  }
}
var ren = "can't receive cross-session messages (off in that session)";
function kUe(e, r, n) {
  try {
    let i = er(r);
    if (!(KUn(e)?.some(s => er(s.id) === i && s.acceptsPeerMessages === !1) === !0 || qUn(e)?.some(s => er(s.id) === i && s.acceptsPeerMessages === !1) === !0)) return;
    return `Not sent: '${n}' ${ren} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (error) {
    t(`[agents:cloud] warm cannot-receive lookup failed (${rL(d(error))}) \u2014 treating as unknown`, {
      level: "warn"
    });
    return;
  }
}
function YUn(e, r) {
  try {
    let n = er(r),
      i = KUn(e)?.find(s => er(s.id) === n),
      o = qUn(e)?.find(s => er(s.id) === n);
    if (i !== void 0 && !i.remoteControl || o !== void 0 && zWe(o)) return !1;
    if (o?.inboundReportUnavailable && i?.acceptsPeerMessages === void 0) return !1;
    return !(i?.acceptsPeerMessages === !0 || o?.acceptsPeerMessages === !0);
  } catch (error) {
    return t(`[agents:cloud] warm inbound-report lookup failed (${rL(d(error))}) \u2014 treating as unreported`, {
      level: "warn"
    }), !0;
  }
}
export { Ykr, Myo, Oct, zUn, GUn, ten, VUn, qUn, Dyo, Lyo, nen, EMt, K3e, KUn, TMt, CMt, Nyo, Ict, ren, kUe, YUn, jq, VEs, qEs };