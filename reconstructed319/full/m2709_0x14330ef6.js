// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  vt,
  t,
  ee,
  ds,
  gP
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  tm,
  wpr,
  nso
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Ahe,
  RWo,
  AWo
} from "B:/~BUN/root/chunk-f2s91mvm.js";
import {
  CP,
  qKo,
  QKo,
  dYr,
  Nbn
} from "B:/~BUN/root/chunk-xyec2542.js";
import {
  Vp
} from "B:/~BUN/root/chunk-1b2nf93s.js";
import {
  o,
  E,
  I,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var _ = 1,
  oDo = "upgrade_relay_marker";

function k(e) {
  return e === oDo
}
var h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  S = p(() => u({
    schema_version: E().int(),
    conversation_uuid: o().regex(h),
    anchor_line_uuid: o().regex(h),
    anthropic_version: o().regex(/^\d{4}-\d{2}-\d{2}$/),
    model: o().min(1).optional(),
    automation_tools: I().optional().catch(void 0)
  })),
  y = 16384;

function HUr(e) {
  if (Buffer.byteLength(e, "utf8") > y) return {
    ok: !1,
    reason: `marker exceeds the ${y}-byte cap`
  };
  let i;
  try {
    i = ee(e)
  } catch {
    return {
      ok: !1,
      reason: "marker is not valid JSON"
    }
  }
  let a = u({
    schema_version: E().int()
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
  let s = S().safeParse(i);
  if (!s.success) return {
    ok: !1,
    reason: `marker shape invalid: ${s.error.issues[0]?.message??"unknown issue"}`
  };
  return {
    ok: !0,
    marker: s.data
  }
}
var w = p(() => u({
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

function sPe(e) {
  V(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e)
}
var T = 67108864;

function x(e) {
  try {
    let i = ds(e),
      a = w().safeParse(i);
    return a.success ? a.data : null
  } catch {
    return null
  }
}

function L({
  rawSeedLines: e,
  liveMessages: i,
  ingressOrigin: a,
  remoteSessionId: s
}) {
  if (CP().status !== "inactive") return v;
  let d = null;
  for (let m = e.length - 1; m >= 0; m--) {
    let f = e[m];
    if (f.trim() === "") continue;
    let l = x(f);
    if (l?.type === "system" && k(l.subtype)) {
      d = l;
      break
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
  return $Ur({
    markerLineUuid: r,
    markerContent: n,
    liveMessages: i,
    ingressOrigin: a,
    remoteSessionId: s
  })
}

function $Ur({
  markerLineUuid: e,
  markerContent: i,
  liveMessages: a,
  ingressOrigin: s,
  remoteSessionId: d
}) {
  if (CP().status !== "inactive") return v;
  let r = HUr(i);
  if (!r.ok) return {
    armed: !1,
    code: "marker_refused",
    reason: r.reason
  };
  let n = a.map((l) => l.uuid),
    m = n.indexOf(r.marker.anchor_line_uuid);
  if (m === -1) return {
    armed: !1,
    code: "anchor_not_in_view",
    reason: "marker anchor line uuid is not present in the hydrated view"
  };
  if (n.indexOf(r.marker.anchor_line_uuid, m + 1) !== -1) return {
    armed: !1,
    code: "anchor_not_unique",
    reason: "marker anchor line uuid occurs more than once in the hydrated view \u2014 refusing a possibly planted duplicate"
  };
  if (a.slice(m + 1).some((l) => l.type === "attachment" && l.attachment.type === "thinking_stripped" && nso(l.attachment) === void 0)) return {
    armed: !1,
    code: "relay_already_ended",
    reason: "the relay already ended: a whole-history thinking_stripped marker follows the marker anchor in the hydrated view"
  };
  let f = n.slice(0, m + 1);
  return qKo({
    status: "active",
    marker: r.marker,
    markerLineUuid: e,
    preAnchorLineUuids: f,
    ingressOrigin: s,
    remoteSessionId: d
  }), t(`teleport relay armed (server-driven): marker line ${e}, anchor ${r.marker.anchor_line_uuid}, ${f.length} guarded pre-anchor lines`), {
    armed: !0
  }
}

function fma(e, i) {
  if (dYr(), !AWo()) {
    sPe({
      outcome: "absent"
    });
    return
  }
  if (i) {
    b(`boot_unreached_${e}`);
    return
  }
  c("upgrade_teleport_cache", `boot_unreached_${e}`), sPe({
    outcome: "refused",
    error_code: `boot_unreached_${e}`
  }), t(`teleport relay carriers present but the resume lane exited before boot (${e}) \u2014 standard path`, {
    level: "warn"
  })
}
async function O(e, i) {
  let a = tm(e),
    s = Vp(a, i);
  if (s !== void 0) {
    let r = await wpr(s.key, T, s.backend).catch((n) => {
      t(`teleport relay seed read through storage threw; falling back to the file: ${String(n)}`, {
        level: "warn"
      });
      return
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
      })
    }
  }
  let {
    content: d
  } = await gP(a, T);
  return d
}
async function pma(e, i, a, s) {
  try {
    let d = Ahe();
    if (!d) {
      let r = RWo();
      if (r !== null) c("upgrade_teleport_cache", "env_config_refused"), sPe({
        outcome: "refused",
        error_code: "env_config_refused",
        cause: r
      }), t(`teleport relay carriers present but env config refused (${r}) \u2014 standard path`, {
        level: "warn"
      });
      else sPe({
        outcome: "absent"
      });
      return
    }
    try {
      let r = await O(e, a),
        n = L({
          rawSeedLines: r.split(`
`),
          liveMessages: i,
          ingressOrigin: d.ingressOrigin,
          remoteSessionId: d.remoteSessionId
        });
      if (s && !n.armed && n.code === "no_marker_line") b(n.code);
      else if (!n.armed) c("upgrade_teleport_cache", n.code), sPe({
        outcome: "refused",
        error_code: n.code
      }), t(`teleport relay not armed: ${n.reason}`);
      else g("upgrade_teleport_cache"), sPe({
        outcome: "armed"
      })
    } catch (r) {
      c("upgrade_teleport_cache", "boot_failed"), sPe({
        outcome: "refused",
        error_code: "boot_failed"
      }), t(`teleport relay boot failed: ${String(r)}`, {
        level: "warn"
      })
    }
  } finally {
    dYr()
  }
}

function b(e) {
  vt(Nbn), QKo(e), sPe({
    outcome: "awaiting_handoff"
  }), t(`prompt-cache relay not armed at boot (${e}); a hand-off may still arm it`)
}
export {
  oDo,
  HUr,
  sPe,
  $Ur,
  fma,
  pma
};
