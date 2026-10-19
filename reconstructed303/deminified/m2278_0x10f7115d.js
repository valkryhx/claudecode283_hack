// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { bt, J, jo, mR, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Tf, QFn, gwr } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { aoe, C5r, R5r } from "B:/~BUN/root/chunk-vxjz05ze.js";
import { UI, YQr, ZQr, bdr, jYt } from "B:/~BUN/root/chunk-1be7rd4w.js";
import { Vp } from "B:/~BUN/root/chunk-k798mzph.js";
import { o, v, M, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var _ = 1,
  czr = "upgrade_relay_marker";
function k(e) {
  return e === czr;
}
var h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  E = f(() => u({
    schema_version: v().int(),
    conversation_uuid: o().regex(h),
    anchor_line_uuid: o().regex(h),
    anthropic_version: o().regex(/^\d{4}-\d{2}-\d{2}$/),
    model: o().min(1).optional(),
    automation_tools: M().optional().catch(void 0)
  })),
  y = 16384;
function GQn(e) {
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
    schema_version: v().int()
  }).loose().safeParse(i);
  if (!a.success) return {
    ok: !1,
    reason: "marker has no integer schema_version"
  };
  if (a.data.schema_version > _) return {
    ok: !1,
    reason: `marker schema_version ${a.data.schema_version} exceeds this consumer's ceiling ${_}`
  };
  if (a.data.schema_version < 1) return {
    ok: !1,
    reason: `marker schema_version ${a.data.schema_version} is below the producer's floor of 1`
  };
  let s = E().safeParse(i);
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
  b = {
    armed: !1,
    code: "latch_not_inactive",
    reason: "teleport state is not inactive"
  };
function kye(e) {
  X(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e);
}
var T = 67108864;
function x(e) {
  try {
    let i = jo(e),
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
  if (UI().status !== "inactive") return b;
  let d = null;
  for (let c = rawSeedLines.length - 1; c >= 0; c--) {
    let m = rawSeedLines[c];
    if (m.trim() === "") continue;
    let l = x(m);
    if (l?.type === "system" && k(l.subtype)) {
      d = l;
      break;
    }
  }
  if (d === null) return {
    armed: !1,
    code: "no_marker_line",
    reason: "no teleport marker line in the seed transcript"
  };
  let r = d.uuid,
    n = d.content;
  if (typeof r !== "string" || typeof n !== "string") return {
    armed: !1,
    code: "marker_line_shape",
    reason: "marker line is missing its uuid or string content"
  };
  return VQn({
    markerLineUuid: r,
    markerContent: n,
    liveMessages: liveMessages,
    ingressOrigin: ingressOrigin,
    remoteSessionId: remoteSessionId
  });
}
function VQn({
  markerLineUuid: markerLineUuid,
  markerContent: markerContent,
  liveMessages: liveMessages_2,
  ingressOrigin: ingressOrigin_2,
  remoteSessionId: remoteSessionId_2
}) {
  if (UI().status !== "inactive") return b;
  let r = GQn(markerContent);
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
  if (liveMessages_2.slice(c + 1).some(item => item.type === "attachment" && item.attachment.type === "thinking_stripped" && gwr(item.attachment) === void 0)) return {
    armed: !1,
    code: "relay_already_ended",
    reason: "the relay already ended: a whole-history thinking_stripped marker follows the marker anchor in the hydrated view"
  };
  let preAnchorLineUuids = n.slice(0, c + 1);
  return YQr({
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
function XZs(e, i) {
  if (bdr(), !R5r()) {
    kye({
      outcome: "absent"
    });
    return;
  }
  if (i) {
    R(`boot_unreached_${e}`);
    return;
  }
  p("upgrade_teleport_cache", `boot_unreached_${e}`), kye({
    outcome: "refused",
    error_code: `boot_unreached_${e}`
  }), t(`teleport relay carriers present but the resume lane exited before boot (${e}) \u2014 standard path`, {
    level: "warn"
  });
}
async function O(e, i) {
  let a = Tf(e),
    s = Vp(a, i);
  if (s !== void 0) {
    let r = await QFn(s.key, T, s.backend).catch(n => {
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
  } = await mR(a, T);
  return content;
}
async function JZs(e, liveMessages_3, a, s) {
  try {
    let d = aoe();
    if (!d) {
      let cause = C5r();
      if (cause !== null) p("upgrade_teleport_cache", "env_config_refused"), kye({
        outcome: "refused",
        error_code: "env_config_refused",
        cause: cause
      }), t(`teleport relay carriers present but env config refused (${cause}) \u2014 standard path`, {
        level: "warn"
      });else kye({
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
          ingressOrigin: d.ingressOrigin,
          remoteSessionId: d.remoteSessionId
        });
      if (s && !n.armed && n.code === "no_marker_line") R(n.code);else if (!n.armed) p("upgrade_teleport_cache", n.code), kye({
        outcome: "refused",
        error_code: n.code
      }), t(`teleport relay not armed: ${n.reason}`);else g("upgrade_teleport_cache"), kye({
        outcome: "armed"
      });
    } catch (error) {
      p("upgrade_teleport_cache", "boot_failed"), kye({
        outcome: "refused",
        error_code: "boot_failed"
      }), t(`teleport relay boot failed: ${String(error)}`, {
        level: "warn"
      });
    }
  } finally {
    bdr();
  }
}
function R(e) {
  bt(jYt), ZQr(e), kye({
    outcome: "awaiting_handoff"
  }), t(`prompt-cache relay not armed at boot (${e}); a hand-off may still arm it`);
}
export { czr, GQn, kye, VQn, XZs, JZs };