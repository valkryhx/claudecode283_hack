// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { gt, J, Vo, Gv, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { _f, cZt, RHn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { JQ, Grr, Vrr } from "B:/~BUN/root/chunk-gfmj6kr7.js";
import { fL, hcr, bcr, Ovt } from "B:/~BUN/root/chunk-ecry0sdj.js";
import { Ff } from "B:/~BUN/root/chunk-esqb9g1a.js";
import { o, E, M, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
var h = 1,
  nXn = "upgrade_relay_marker";
function k(e) {
  return e === nXn;
}
var g = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  R = f(() => u({
    schema_version: E().int(),
    conversation_uuid: o().regex(g),
    anchor_line_uuid: o().regex(g),
    anthropic_version: o().regex(/^\d{4}-\d{2}-\d{2}$/),
    model: o().min(1).optional(),
    automation_tools: M().optional().catch(void 0)
  })),
  y = 16384;
function e_n(e) {
  if (Buffer.byteLength(e, "utf8") > y) return {
    ok: !1,
    reason: `marker exceeds the ${y}-byte cap`
  };
  let i;
  try {
    i = J(e);
  } catch {
    return {
      ok: !1,
      reason: "marker is not valid JSON"
    };
  }
  let a = u({
    schema_version: E().int()
  }).loose().safeParse(i);
  if (!a.success) return {
    ok: !1,
    reason: "marker has no integer schema_version"
  };
  if (a.data.schema_version > h) return {
    ok: !1,
    reason: `marker schema_version ${a.data.schema_version} exceeds this consumer's ceiling ${h}`
  };
  if (a.data.schema_version < 1) return {
    ok: !1,
    reason: `marker schema_version ${a.data.schema_version} is below the producer's floor of 1`
  };
  let s = R().safeParse(i);
  if (!s.success) return {
    ok: !1,
    reason: `marker shape invalid: ${s.error.issues[0]?.message ?? "unknown issue"}`
  };
  return {
    ok: !0,
    marker: s.data
  };
}
var w = f(() => u({
    type: o().optional(),
    subtype: o().optional(),
    uuid: o().optional(),
    content: o().optional()
  }).loose()),
  v = {
    armed: !1,
    code: "latch_not_inactive",
    reason: "teleport state is not inactive"
  };
function Ere(e) {
  K(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e);
}
var T = 67108864;
function x(e) {
  try {
    let i = Vo(e),
      a = w().safeParse(i);
    return a.success ? a.data : null;
  } catch {
    return null;
  }
}
function L({
  rawSeedLines: rawSeedLines,
  liveMessages: liveMessages,
  ingressOrigin: ingressOrigin,
  remoteSessionId: remoteSessionId
}) {
  if (fL().status !== "inactive") return v;
  let l = null;
  for (let c = rawSeedLines.length - 1; c >= 0; c--) {
    let m = rawSeedLines[c];
    if (m.trim() === "") continue;
    let d = x(m);
    if (d?.type === "system" && k(d.subtype)) {
      l = d;
      break;
    }
  }
  if (l === null) return {
    armed: !1,
    code: "no_marker_line",
    reason: "no teleport marker line in the seed transcript"
  };
  let r = l.uuid,
    n = l.content;
  if (typeof r !== "string" || typeof n !== "string") return {
    armed: !1,
    code: "marker_line_shape",
    reason: "marker line is missing its uuid or string content"
  };
  return t_n({
    markerLineUuid: r,
    markerContent: n,
    liveMessages: liveMessages,
    ingressOrigin: ingressOrigin,
    remoteSessionId: remoteSessionId
  });
}
function t_n({
  markerLineUuid: markerLineUuid,
  markerContent: markerContent,
  liveMessages: liveMessages_2,
  ingressOrigin: ingressOrigin_2,
  remoteSessionId: remoteSessionId_2
}) {
  if (fL().status !== "inactive") return v;
  let r = e_n(markerContent);
  if (!r.ok) return {
    armed: !1,
    code: "marker_refused",
    reason: r.reason
  };
  let n = liveMessages_2.map(item => item.uuid),
    c = n.indexOf(r.marker.anchor_line_uuid);
  if (c === -1) return {
    armed: !1,
    code: "anchor_not_in_view",
    reason: "marker anchor line uuid is not present in the hydrated view"
  };
  if (n.indexOf(r.marker.anchor_line_uuid, c + 1) !== -1) return {
    armed: !1,
    code: "anchor_not_unique",
    reason: "marker anchor line uuid occurs more than once in the hydrated view \u2014 refusing a possibly planted duplicate"
  };
  if (liveMessages_2.slice(c + 1).some(item => item.type === "attachment" && item.attachment.type === "thinking_stripped" && RHn(item.attachment) === void 0)) return {
    armed: !1,
    code: "relay_already_ended",
    reason: "the relay already ended: a whole-history thinking_stripped marker follows the marker anchor in the hydrated view"
  };
  let preAnchorLineUuids = n.slice(0, c + 1);
  return hcr({
    status: "active",
    marker: r.marker,
    markerLineUuid: markerLineUuid,
    preAnchorLineUuids: preAnchorLineUuids,
    ingressOrigin: ingressOrigin_2,
    remoteSessionId: remoteSessionId_2
  }), t(`teleport relay armed (server-driven): marker line ${markerLineUuid}, anchor ${r.marker.anchor_line_uuid}, ${preAnchorLineUuids.length} guarded pre-anchor lines`), {
    armed: !0
  };
}
function $Vo(e, i) {
  if (!Vrr()) {
    Ere({
      outcome: "absent"
    });
    return;
  }
  if (i) {
    b(`boot_unreached_${e}`);
    return;
  }
  p("upgrade_teleport_cache", `boot_unreached_${e}`), Ere({
    outcome: "refused",
    error_code: `boot_unreached_${e}`
  }), t(`teleport relay carriers present but the resume lane exited before boot (${e}) \u2014 standard path`, {
    level: "warn"
  });
}
async function O(e, i) {
  let a = _f(e),
    s = Ff(a, i);
  if (s !== void 0) {
    let r = await cZt(s.key, T, s.backend).catch(n => {
      t(`teleport relay seed read through storage threw; falling back to the file: ${String(n)}`, {
        level: "warn"
      });
      return;
    });
    if (r === null) throw Error("seed transcript stream not found");
    if (r?.ok) return r.content;
    if (r !== void 0) {
      let n = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
      if (n === "ELOOP" || n === "ENXIO") throw t(`teleport relay seed read refused by storage (${n}); the file is not re-read directly`, {
        level: "warn"
      }), Error("seed transcript refused by storage: a linked or indirect transcript file is not read");
      t(`teleport relay seed read through storage failed (${r.error.code}); falling back to the file`, {
        level: "warn"
      });
    }
  }
  let {
    content: content
  } = await Gv(a, T);
  return content;
}
async function UVo(e, liveMessages_3, a, s) {
  let l = JQ();
  if (!l) {
    let cause = Grr();
    if (cause !== null) p("upgrade_teleport_cache", "env_config_refused"), Ere({
      outcome: "refused",
      error_code: "env_config_refused",
      cause: cause
    }), t(`teleport relay carriers present but env config refused (${cause}) \u2014 standard path`, {
      level: "warn"
    });else Ere({
      outcome: "absent"
    });
    return;
  }
  try {
    let r = await O(e, a),
      n = L({
        rawSeedLines: r.split(`
`),
        liveMessages: liveMessages_3,
        ingressOrigin: l.ingressOrigin,
        remoteSessionId: l.remoteSessionId
      });
    if (s && !n.armed && n.code === "no_marker_line") b(n.code);else if (!n.armed) p("upgrade_teleport_cache", n.code), Ere({
      outcome: "refused",
      error_code: n.code
    }), t(`teleport relay not armed: ${n.reason}`);else _("upgrade_teleport_cache"), Ere({
      outcome: "armed"
    });
  } catch (error) {
    p("upgrade_teleport_cache", "boot_failed"), Ere({
      outcome: "refused",
      error_code: "boot_failed"
    }), t(`teleport relay boot failed: ${String(error)}`, {
      level: "warn"
    });
  }
}
function b(e) {
  gt(Ovt), bcr(e), Ere({
    outcome: "awaiting_handoff"
  }), t(`prompt-cache relay not armed at boot (${e}); a hand-off may still arm it`);
}
export { nXn, e_n, Ere, t_n, $Vo, UVo };