// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { vt, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { bOi, cyr, uyr, wOi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { HEn } from "B:/~BUN/root/chunk-fk1gx2mz.js";
import { x4s, iPe } from "B:/~BUN/root/chunk-w1b2264n.js";
import { U6o, B6o } from "B:/~BUN/root/chunk-whgfznrh.js";
import { arn } from "B:/~BUN/root/chunk-psjm1gcn.js";
import { zun } from "B:/~BUN/root/chunk-wtn1bdtj.js";
import { a8 } from "B:/~BUN/root/chunk-bpeb7mmy.js";
import { fre } from "B:/~BUN/root/chunk-3e8b6pq9.js";
import { YIe } from "B:/~BUN/root/chunk-an15mqdc.js";
async function gDo(e) {
  let i = e.session.then(session => ({
    read: !0,
    session: session
  }), error => ({
    read: !1,
    error: error
  }));
  if (!(await (e.isEnabled ?? arn)().catch(() => !1))) return {
    status: "disabled"
  };
  let o = await i;
  if (!o.read) return B("session_unreadable", o.error);
  if (o.session.archived) return {
    status: "disabled"
  };
  if (o.session.boundDeviceId === void 0) {
    let reason = await (e.readUnboundCreateReason ?? (A => U6o(A, bOi, B6o(e.storageV5))))(e.sessionId).catch(() => {
      return;
    });
    return l("tengu_device_bind_attach", {
      outcome: b("session_unbound"),
      created_here: reason !== void 0
    }), reason === void 0 ? {
      status: "not_applicable"
    } : {
      status: "created_unbound",
      reason: reason
    };
  }
  let s;
  try {
    s = (e.isEgressAllowed ?? YIe)();
  } catch {
    s = !1;
  }
  if (!s) return y("egress");
  let n = await (e.getAccount?.() ?? fre(e.credentials));
  if (n.status === "missing") return y("account");
  if (n.status === "mismatch") return y("account_mismatch");
  let u = await (e.loadLocalDevice?.(n.accountUuid) ?? HEn(n.accountUuid, e.credentials)).then(held => ({
    read: !0,
    held: held
  }), error_2 => ({
    read: !1,
    error: error_2
  }));
  if (!u.read) return B("local_device_unreadable", u.error);
  if (u.held === void 0) return y("no_device_here");
  let deviceId = u.held.rowPk.toLowerCase();
  if (deviceId !== o.session.boundDeviceId.toLowerCase()) return y("other_device");
  let {
    toolHostLink: toolHostLink
  } = o.session;
  return l("tengu_device_bind_attach", {
    outcome: b("bound"),
    tool_host_link: f(toolHostLink)
  }), g("device_bind_attach"), {
    status: "bound",
    deviceId: deviceId,
    held: u.held,
    toolHostLink: toolHostLink
  };
}
function yDo(e) {
  return {
    archived: e.session_status === "archived",
    boundDeviceId: e.bound_device_uuid,
    toolHostLink: x4s(e.tool_host_status, e.device_bind_posture)
  };
}
async function yma(e, {
  isEnabled = arn,
  isEgressAllowed = YIe
} = {}) {
  if (e.catch(() => {}), !(await isEnabled().catch(() => !1))) return;
  let {
    archived: archived,
    boundDeviceId: boundDeviceId
  } = await e;
  if (archived) return;
  try {
    return isEgressAllowed() ? boundDeviceId : void 0;
  } catch {
    return;
  }
}
function _Do(e) {
  return e.then(i => i.status === "bound", () => !1);
}
function bDo(e) {
  return e.then(i => i.status === "bound" ? i.deviceId : void 0, () => {
    return;
  });
}
function SDo(e) {
  return e.then(i => i.status === "bound" ? i.held : void 0, () => {
    return;
  });
}
function k({
  viewerOnly: viewerOnly,
  binding: binding
}) {
  return !viewerOnly && binding.status === "bound" && iPe(binding.toolHostLink) ? {
    owner: !0,
    deviceId: binding.deviceId
  } : {
    owner: !1
  };
}
async function ZUr(e, i) {
  try {
    let o = await i();
    return o.session_status !== "archived" && typeof o.bound_device_uuid === "string" && o.bound_device_uuid.toLowerCase() === e.toLowerCase();
  } catch (error) {
    t(`[attachBinding] re-reading the session's binding failed (keeping it): ${d(error)}`);
    return;
  }
}
async function _ma({
  sessionId: sessionId,
  binding: binding_2,
  deviceBridge: deviceBridge,
  onNotice: onNotice,
  repositoryTrust: repositoryTrust,
  readSession: readSession
}) {
  return (await import("B:/~BUN/root/chunk-gxq403px.js")).servedToolsAttachOptions({
    owner: binding_2.then(binding_3 => {
      let h = k({
        viewerOnly: !1,
        binding: binding_3
      });
      return () => h;
    }, () => () => ({
      owner: !1
    })),
    cloudClient: !0,
    ...(deviceBridge && {
      deviceBridge: deviceBridge
    }),
    ...(onNotice && {
      onNotice: onNotice
    }),
    ...(repositoryTrust && {
      repositoryTrust: repositoryTrust
    }),
    stillBound: () => binding_2.then(v => v.status === "bound" ? ZUr(v.deviceId, readSession) : void 0, () => {
      return;
    }),
    plumbing: (await import("B:/~BUN/root/chunk-6zmn8wha.js")).servedSessionPlumbing(sessionId)
  });
}
var wDo = "This session can run tools on this computer, so Claude Code must first keep a copy of this folder's settings, and it could not. Check free disk space and that ~/.claude/state can be written, then attach again; add --debug to see the cause.";
function kDo(e, i = {}) {
  let o = {
      status: "disabled"
    },
    s = (a, p) => t(`[remote-tools] ${a}: ${p}`),
    n = [],
    u = a => {
      let p = n ?? [];
      n = void 0, p.forEach(([_, D]) => {
        try {
          a(_, D);
        } catch {
          s(_, D);
        }
      });
    },
    v = i.onNotice ?? s,
    h = !1,
    r,
    A,
    S = e.catch(a => (t(`[deviceBind] attach binding failed unexpectedly: ${d(a)}`), o)).then(async a => {
      if (a.status !== "bound" || iPe(a.toolHostLink)) return a;
      if (h) return o;
      let p = i.loadHoldSettings ? await i.loadHoldSettings() : (await import("B:/~BUN/root/chunk-nbfere92.js")).holdSettingsBesideAHelper;
      if (h) return o;
      return r = p((_, D) => n ? void n.push([_, D]) : v(_, D)), A = vt(async () => r?.end()), u(v), a;
    });
  return S.then(() => {
    if (r !== void 0) g("attach_settings_held_beside_helper");
  }, a => {
    m("attach_settings_held_beside_helper", "hold_failed"), u(s), t(`[deviceBind] attach could not hold the settings beside the session's helper: ${d(a)}`);
  }).catch(() => {}), {
    binding: S.catch(() => o),
    kept: S.then(() => !0, () => !1),
    end: () => {
      h = !0, A?.(), r?.end();
    }
  };
}
function vDo(e) {
  let i = e.binding.catch(n => (t(`[deviceBind] attach binding failed unexpectedly: ${d(n)}`), {
      status: "disabled"
    })),
    o = !1,
    s;
  return i.then(n => {
    if (o || n.status !== "bound" || !iPe(n.toolHostLink)) return;
    s = (e.startRegistration ?? zun)({
      sessionId: e.sessionId,
      getAccessToken: e.getAccessToken,
      orgUuid: e.orgUuid,
      getDeviceId: () => n.deviceId,
      cloudClient: e.cloudClient,
      storageV5: e.storageV5,
      ...(e.dirSync !== void 0 && {
        dirSync: e.dirSync
      }),
      ...(e.folderRelation !== void 0 && {
        folderRelation: e.folderRelation
      }),
      ...(e.onNotice && {
        onNotice: e.onNotice
      }),
      ...(e.servedSettingsChanged && {
        servedSettingsChanged: e.servedSettingsChanged
      }),
      ...(e.deviceMcpQuestion && {
        deviceMcpQuestion: e.deviceMcpQuestion
      })
    });
  }).catch(n => {
    t(`[deviceBind] attach could not start the device registration: ${d(n)}`);
  }), {
    announceSettled: n => s?.announceSettled(n),
    serving: i.then(() => s?.serving),
    notice: i.then(n => n.status === "unbound" ? {
      text: uyr(n.reason),
      toast: !0
    } : n.status === "created_unbound" ? {
      text: cyr(n.reason),
      toast: !0
    } : n.status === "bound" && e.toolServingOn && !iPe(n.toolHostLink) ? wOi(n.toolHostLink) : void 0),
    stop: async () => {
      o = !0, await s?.stop();
    },
    heldServedCall: n => s?.heldServedCall(n) ?? a8
  };
}
function y(reason_2) {
  return l("tengu_device_bind_attach", {
    outcome: f(reason_2)
  }), c("device_bind_attach", reason_2), {
    status: "unbound",
    reason: reason_2
  };
}
function B(reason_3, i) {
  if (l("tengu_device_bind_attach", {
    outcome: f(reason_3)
  }), reason_3 === "session_unreadable") c("device_bind_attach", reason_3);else m("device_bind_attach", reason_3);
  return t(`[deviceBind] attach could not check the session's binding (${reason_3}): ${d(i)}`), {
    status: "unbound",
    reason: reason_3
  };
}
export { gDo, yDo, yma, _Do, bDo, SDo, ZUr, _ma, wDo, kDo, vDo };