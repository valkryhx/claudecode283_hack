// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { bt, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { BAs, tjn, njn, WAs } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { T3t } from "B:/~BUN/root/chunk-wm0xaa4j.js";
import { NKo, Eye } from "B:/~BUN/root/chunk-ewx8w1cz.js";
import { nto, rto } from "B:/~BUN/root/chunk-87m2trmf.js";
import { tHt } from "B:/~BUN/root/chunk-r4y1700s.js";
import { NWt } from "B:/~BUN/root/chunk-e1hprz12.js";
import { EV } from "B:/~BUN/root/chunk-s1ge8s1b.js";
import { sue } from "B:/~BUN/root/chunk-enq05gxv.js";
import { Abe } from "B:/~BUN/root/chunk-5yjgxv55.js";
async function bzr(e) {
  let o = e.session.then(session => ({
    read: !0,
    session: session
  }), error => ({
    read: !1,
    error: error
  }));
  if (!(await (e.isEnabled ?? tHt)().catch(() => !1))) return {
    status: "disabled"
  };
  let s = await o;
  if (!s.read) return B("session_unreadable", s.error);
  if (s.session.archived) return {
    status: "disabled"
  };
  if (s.session.boundDeviceId === void 0) {
    let reason = await (e.readUnboundCreateReason ?? (A => nto(A, BAs, rto(e.storageV5))))(e.sessionId).catch(() => {
      return;
    });
    return i("tengu_device_bind_attach", {
      outcome: b("session_unbound"),
      created_here: reason !== void 0
    }), reason === void 0 ? {
      status: "not_applicable"
    } : {
      status: "created_unbound",
      reason: reason
    };
  }
  let r;
  try {
    r = (e.isEgressAllowed ?? Abe)();
  } catch {
    r = !1;
  }
  if (!r) return y("egress");
  let n = await (e.getAccount?.() ?? sue(e.credentials));
  if (n.status === "missing") return y("account");
  if (n.status === "mismatch") return y("account_mismatch");
  let l = await (e.loadLocalDevice?.(n.accountUuid) ?? T3t(n.accountUuid, e.credentials)).then(held => ({
    read: !0,
    held: held
  }), error_2 => ({
    read: !1,
    error: error_2
  }));
  if (!l.read) return B("local_device_unreadable", l.error);
  if (l.held === void 0) return y("no_device_here");
  let deviceId = l.held.rowPk.toLowerCase();
  if (deviceId !== s.session.boundDeviceId.toLowerCase()) return y("other_device");
  let {
    toolHostLink: toolHostLink
  } = s.session;
  return i("tengu_device_bind_attach", {
    outcome: b("bound"),
    tool_host_link: c(toolHostLink)
  }), g("device_bind_attach"), {
    status: "bound",
    deviceId: deviceId,
    held: l.held,
    toolHostLink: toolHostLink
  };
}
function Szr(e) {
  return {
    archived: e.session_status === "archived",
    boundDeviceId: e.bound_device_uuid,
    toolHostLink: NKo(e.tool_host_status, e.device_bind_posture)
  };
}
async function oei(e, {
  isEnabled = tHt,
  isEgressAllowed = Abe
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
function wzr(e) {
  return e.then(o => o.status === "bound", () => !1);
}
function vzr(e) {
  return e.then(o => o.status === "bound" ? o.deviceId : void 0, () => {
    return;
  });
}
function kzr(e) {
  return e.then(o => o.status === "bound" ? o.held : void 0, () => {
    return;
  });
}
function k({
  viewerOnly: viewerOnly,
  binding: binding
}) {
  return !viewerOnly && binding.status === "bound" && Eye(binding.toolHostLink) ? {
    owner: !0,
    deviceId: binding.deviceId
  } : {
    owner: !1
  };
}
async function i7n(e, o) {
  try {
    let s = await o();
    return s.session_status !== "archived" && typeof s.bound_device_uuid === "string" && s.bound_device_uuid.toLowerCase() === e.toLowerCase();
  } catch (error) {
    t(`[attachBinding] re-reading the session's binding failed (keeping it): ${d(error)}`);
    return;
  }
}
async function sei({
  sessionId: sessionId,
  binding: binding_2,
  deviceBridge: deviceBridge,
  onNotice: onNotice,
  repositoryTrust: repositoryTrust,
  readSession: readSession
}) {
  return (await import("B:/~BUN/root/chunk-8c7kzgxs.js")).servedToolsAttachOptions({
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
    stillBound: () => binding_2.then(v => v.status === "bound" ? i7n(v.deviceId, readSession) : void 0, () => {
      return;
    }),
    plumbing: (await import("B:/~BUN/root/chunk-th93rd1x.js")).servedSessionPlumbing(sessionId)
  });
}
var Ezr = "This session can run tools on this computer, so Claude Code must first keep a copy of this folder's settings, and it could not. Check free disk space and that ~/.claude/state can be written, then attach again; add --debug to see the cause.";
function Tzr(e, o = {}) {
  let s = {
      status: "disabled"
    },
    r = (u, f) => t(`[remote-tools] ${u}: ${f}`),
    n = [],
    l = u => {
      let f = n ?? [];
      n = void 0, f.forEach(([_, D]) => {
        try {
          u(_, D);
        } catch {
          r(_, D);
        }
      });
    },
    v = o.onNotice ?? r,
    h = !1,
    a,
    A,
    S = e.catch(u => (t(`[deviceBind] attach binding failed unexpectedly: ${d(u)}`), s)).then(async u => {
      if (u.status !== "bound" || Eye(u.toolHostLink)) return u;
      if (h) return s;
      let f = o.loadHoldSettings ? await o.loadHoldSettings() : (await import("B:/~BUN/root/chunk-3t5fd47g.js")).holdSettingsBesideAHelper;
      if (h) return s;
      return a = f((_, D) => n ? void n.push([_, D]) : v(_, D)), A = bt(async () => a?.end()), l(v), u;
    });
  return S.then(() => {
    if (a !== void 0) g("attach_settings_held_beside_helper");
  }, u => {
    m("attach_settings_held_beside_helper", "hold_failed"), l(r), t(`[deviceBind] attach could not hold the settings beside the session's helper: ${d(u)}`);
  }).catch(() => {}), {
    binding: S.catch(() => s),
    kept: S.then(() => !0, () => !1),
    end: () => {
      h = !0, A?.(), a?.end();
    }
  };
}
function Czr(e) {
  let o = e.binding.catch(n => (t(`[deviceBind] attach binding failed unexpectedly: ${d(n)}`), {
      status: "disabled"
    })),
    s = !1,
    r;
  return o.then(n => {
    if (s || n.status !== "bound" || !Eye(n.toolHostLink)) return;
    r = (e.startRegistration ?? NWt)({
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
    announceSettled: n => r?.announceSettled(n),
    serving: o.then(() => r?.serving),
    notice: o.then(n => n.status === "unbound" ? {
      text: njn(n.reason),
      toast: !0
    } : n.status === "created_unbound" ? {
      text: tjn(n.reason),
      toast: !0
    } : n.status === "bound" && e.toolServingOn && !Eye(n.toolHostLink) ? WAs(n.toolHostLink) : void 0),
    stop: async () => {
      s = !0, await r?.stop();
    },
    heldServedCall: n => r?.heldServedCall(n) ?? EV
  };
}
function y(reason_2) {
  return i("tengu_device_bind_attach", {
    outcome: c(reason_2)
  }), p("device_bind_attach", reason_2), {
    status: "unbound",
    reason: reason_2
  };
}
function B(reason_3, o) {
  if (i("tengu_device_bind_attach", {
    outcome: c(reason_3)
  }), reason_3 === "session_unreadable") p("device_bind_attach", reason_3);else m("device_bind_attach", reason_3);
  return t(`[deviceBind] attach could not check the session's binding (${reason_3}): ${d(o)}`), {
    status: "unbound",
    reason: reason_3
  };
}
export { bzr, Szr, oei, wzr, vzr, kzr, i7n, sei, Ezr, Tzr, Czr };