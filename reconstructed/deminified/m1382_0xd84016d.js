// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { uEo, Qon, Zon } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { B7e } from "B:/~BUN/root/chunk-ngj4p673.js";
import { fir, mir } from "B:/~BUN/root/chunk-6yh4zck0.js";
import { jd } from "B:/~BUN/root/chunk-f6h9k5ss.js";
import { vgt } from "B:/~BUN/root/chunk-2gjsd62e.js";
import { mU } from "B:/~BUN/root/chunk-ap9x1xq2.js";
import { DSe } from "B:/~BUN/root/chunk-2yea34mb.js";
import { Aoe } from "B:/~BUN/root/chunk-y1yq0gxq.js";
async function uXn(e) {
  let o = e.session.then(session => ({
    read: !0,
    session: session
  }), error => ({
    read: !1,
    error: error
  }));
  if (!(await (e.isEnabled ?? jd)().catch(() => !1))) return {
    status: "disabled"
  };
  let d = await o;
  if (!d.read) return v("session_unreadable", d.error);
  if (d.session.archived) return {
    status: "disabled"
  };
  if (d.session.boundDeviceId === void 0) {
    let reason = await (e.readUnboundCreateReason ?? (g => fir(g, uEo, mir(e.storageV5))))(e.sessionId).catch(() => {
      return;
    });
    return i("tengu_device_bind_attach", {
      outcome: y("session_unbound"),
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
    s = (e.isEgressAllowed ?? Aoe)();
  } catch {
    s = !1;
  }
  if (!s) return u("egress");
  let n = await (e.getAccount ?? DSe)();
  if (n.status === "missing") return u("account");
  if (n.status === "mismatch") return u("account_mismatch");
  let a = await (e.readLocalDeviceId ?? B7e)(n.accountUuid).then(r => ({
    read: !0,
    deviceId: r?.toLowerCase()
  }), error_2 => ({
    read: !1,
    error: error_2
  }));
  if (!a.read) return v("local_device_unreadable", a.error);
  if (a.deviceId === void 0) return u("no_device_here");
  if (a.deviceId !== d.session.boundDeviceId.toLowerCase()) return u("other_device");
  return i("tengu_device_bind_attach", {
    outcome: y("bound")
  }), _("device_bind_attach"), {
    status: "bound",
    deviceId: a.deviceId
  };
}
function WVo(e) {
  return {
    archived: e.session_status === "archived",
    boundDeviceId: e.bound_device_uuid
  };
}
async function zVo(e, {
  isEnabled = jd,
  isEgressAllowed = Aoe
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
function u_n(e) {
  return e.then(o => o.status === "bound", () => !1);
}
function f({
  viewerOnly: viewerOnly,
  binding: binding
}) {
  return !viewerOnly && binding.status === "bound" ? {
    owner: !0,
    deviceId: binding.deviceId
  } : {
    owner: !1
  };
}
async function GVo({
  sessionId: sessionId,
  binding: binding_2,
  deviceBridge: deviceBridge,
  onNotice: onNotice,
  repositoryTrust: repositoryTrust
}) {
  return (await import("B:/~BUN/root/chunk-dnefc5kg.js")).servedToolsAttachOptions({
    owner: binding_2.then(binding_3 => {
      let r = f({
        viewerOnly: !1,
        binding: binding_3
      });
      return () => r;
    }, () => () => ({
      owner: !1
    })),
    ...(deviceBridge && {
      deviceBridge: deviceBridge
    }),
    ...(onNotice && {
      onNotice: onNotice
    }),
    ...(repositoryTrust && {
      repositoryTrust: repositoryTrust
    }),
    plumbing: (await import("B:/~BUN/root/chunk-0m1daq1r.js")).servedSessionPlumbing(sessionId)
  });
}
function pXn(e) {
  let o = e.binding.catch(n => (t(`[deviceBind] attach binding failed unexpectedly: ${l(n)}`), {
      status: "disabled"
    })),
    d = !1,
    s;
  return o.then(n => {
    if (d || n.status !== "bound") return;
    s = (e.startRegistration ?? vgt)({
      sessionId: e.sessionId,
      getAccessToken: e.getAccessToken,
      orgUuid: e.orgUuid,
      getDeviceId: () => n.deviceId,
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
    t(`[deviceBind] attach could not start the device registration: ${l(n)}`);
  }), {
    announceSettled: n => s?.announceSettled(n),
    serving: o.then(() => s?.serving),
    notice: o.then(n => n.status === "unbound" ? Zon(n.reason) : n.status === "created_unbound" ? Qon(n.reason) : void 0),
    stop: async () => {
      d = !0, await s?.stop();
    },
    heldServedCall: n => s?.heldServedCall(n) ?? mU
  };
}
function u(reason_2) {
  return i("tengu_device_bind_attach", {
    outcome: c(reason_2)
  }), p("device_bind_attach", reason_2), {
    status: "unbound",
    reason: reason_2
  };
}
function v(reason_3, o) {
  if (i("tengu_device_bind_attach", {
    outcome: c(reason_3)
  }), reason_3 === "session_unreadable") p("device_bind_attach", reason_3);else m("device_bind_attach", reason_3);
  return t(`[deviceBind] attach could not check the session's binding (${reason_3}): ${l(o)}`), {
    status: "unbound",
    reason: reason_3
  };
}
export { uXn, WVo, zVo, u_n, GVo, pXn };