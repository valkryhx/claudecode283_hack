// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Bpn, VYe, jpn } from "B:/~BUN/root/chunk-bt3h0syz.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Wo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import { fa, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import { po, EUe as maxCodeUnits_2 } from "B:/~BUN/root/chunk-rwwxddqq.js";
import "B:/~BUN/root/chunk-1f9marcm.js";
import { EV, ULe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import "B:/~BUN/root/chunk-myd8edm1.js";
import { b2t } from "B:/~BUN/root/chunk-1qtzvebk.js";
import { Nre } from "B:/~BUN/root/chunk-wnwck3ar.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
var ee = 65536,
  te = 600,
  maxCodeUnits = 200,
  oe = 5000;
function Q(o) {
  return Math.min(600, Math.max(5, Math.round(o ?? 60)));
}
function re(o, m) {
  if (o === void 0) return "unknown_template";
  if (!o.digests.some(item => item.sha256 === m.digest)) return "version_mismatch";
  if (m.event !== o.event || !EV(m.event)) return "event_not_allowed";
  return "awaiting_upload";
}
function fe(o) {
  let m = null,
    _ = new Map(),
    h = new Map();
  o.registry.onLeaseExpired(l => o.forwarder.removeForOwner(l.instanceId));
  let D = () => o.policy.pluginOnly() || o.policy.customizationDisabled() || o.policy.managedOnly() || o.policy.allDisabled(),
    w = () => {
      let l = o.registry.current();
      if (l !== null) o.forwarder.removeForOwner(l.instanceId), o.templateRunner.remove(l.instanceId);
      o.registry.clear(), h.clear(), o.templates.clear();
    },
    C = async () => {
      let shared = m !== null && !m.settled;
      if (m === null || m.settled) {
        let i = {
          promise: o.readAccountFlags(),
          startedAt: o.now(),
          settled: !1
        };
        i.promise.then(() => i.settled = !0, () => i.settled = !0), m = i;
      }
      let s = m,
        a = o.now(),
        c = Math.max(0, o.flagWaitCapMs - (a - s.startedAt));
      return {
        state: (await nt(s.promise.then(i => i ? "on" : "off", () => "pending"), c)) ?? "pending",
        waitMs: o.now() - a,
        shared: shared
      };
    },
    S = async () => {
      let l = {
        flagWaitMs: 0,
        sharedFlagRead: !1
      };
      if (D()) return w(), {
        ok: !1,
        error: "hook_forwarding_disabled: policy",
        outcome: "disabled_policy",
        ...l
      };
      let s = await C(),
        a = {
          flagWaitMs: s.waitMs,
          sharedFlagRead: s.shared
        };
      if (s.state === "pending") return {
        ok: !1,
        error: "hook_forwarding_not_ready: feature flags not yet available; retry",
        outcome: "not_ready",
        ...a
      };
      if (s.state === "off") return w(), {
        ok: !1,
        error: "hook_forwarding_disabled: flag_off",
        outcome: "disabled_flag_off",
        ...a
      };
      if (D()) return w(), {
        ok: !1,
        error: "hook_forwarding_disabled: policy",
        outcome: "disabled_policy",
        ...a
      };
      return {
        ok: !0,
        ...a
      };
    },
    A = async l => {
      let s = {
        flagWaitMs: 0,
        sharedFlagRead: !1
      };
      if (fa(l).length > ee) return {
        ok: !1,
        error: "invalid_registration: request larger than 64 KiB",
        outcome: "invalid",
        ...s
      };
      let a = Bpn().safeParse(l.request);
      if (!a.success) return {
        ok: !1,
        error: `invalid_registration: ${po(a.error.issues[0]?.message ?? "malformed", {
          maxCodeUnits: maxCodeUnits
        })}`,
        outcome: "invalid",
        ...s
      };
      if (a.data.worker_epoch !== void 0 && a.data.worker_epoch !== o.workerEpoch) return {
        ok: !1,
        error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`,
        outcome: "stale_epoch",
        ...s
      };
      let c = await S();
      return c.ok ? {
        ok: !0,
        parsed: a.data,
        flagWaitMs: c.flagWaitMs,
        sharedFlagRead: c.sharedFlagRead
      } : c;
    },
    I = async l => {
      let s = await A(l);
      if (!s.ok) return o.telemetry.register({
        outcome: s.outcome,
        accepted: 0,
        ignored: 0,
        templatesAwaitingUpload: 0,
        templatesRefused: 0,
        flagWaitMs: s.flagWaitMs,
        sharedFlagRead: s.sharedFlagRead
      }), {
        kind: "error",
        error: s.error
      };
      let parsed = s.parsed,
        project_dir = o.projectRoot(),
        cwd = o.cwd(),
        success = VYe().safeParse({
          status: "unregistered",
          project_dir: project_dir,
          cwd: cwd,
          worker_epoch: o.workerEpoch
        }).success,
        v = {
          project_dir: project_dir,
          cwd: success ? cwd : project_dir,
          worker_epoch: o.workerEpoch
        },
        R = (e, n) => {
          if (o.registry.removeOwner(parsed.instance_id)) o.forwarder.removeForOwner(parsed.instance_id), o.templateRunner.remove(parsed.instance_id);
          return h.delete(parsed.instance_id), o.telemetry.register({
            outcome: "unregistered",
            accepted: 0,
            ignored: e.length,
            templatesAwaitingUpload: 0,
            templatesRefused: n.length,
            flagWaitMs: s.flagWaitMs,
            sharedFlagRead: s.sharedFlagRead
          }), {
            kind: "success",
            response: {
              status: "unregistered",
              ...v,
              ...(e.length > 0 && {
                ignored_ids: e.slice(0, 128)
              }),
              ...(n.length > 0 && {
                templates: [...n]
              })
            }
          };
        };
      if (parsed.hooks.length === 0 && parsed.templates.length === 0) return R([], []);
      let entries = [],
        p = [],
        F = new Set();
      for (let e of parsed.hooks) {
        let n = Nre(e.id),
          u = e.matcher === void 0 || e.matcher === "" || e.matcher === "*" || ULe.test(e.matcher),
          T = F.has(e.id);
        if (F.add(e.id), T || n === null || n.instanceId !== parsed.instance_id || n.event !== e.event || !EV(e.event) || !u) {
          p.push(e.id);
          continue;
        }
        entries.push({
          id: e.id,
          event: e.event,
          ...(e.matcher !== void 0 && e.matcher !== "" && e.matcher !== "*" && {
            matcher: e.matcher
          }),
          kind: e.kind,
          ...(e.timeout_s !== void 0 && {
            timeoutS: e.timeout_s
          }),
          source: e.source,
          hasCondition: e.has_condition === !0,
          targetPinned: e.target_pinned === !0
        });
      }
      let r = {},
        y = new Map(),
        f = new Map(),
        E = new Set(),
        Z = h.get(parsed.instance_id) ?? new Map(),
        H = new Map(),
        x = e => {
          let n = Z.get(e);
          if (n === void 0) return !1;
          return y.set(n.matcher, e), r[n.event] = [...(r[n.event] ?? []), n.matcher], H.set(e, n), E.add(e), !0;
        },
        q = (e, timeout) => {
          if (!b2t(e) || !_.get(parsed.instance_id)?.has(e.id)) return;
          let matcher = {
            matcher: e.matcher,
            hooks: [{
              type: "callback",
              timeout: timeout,
              callback: async () => (o.telemetry.templateStandInBlocked?.({
                template: e.id
              }), {
                decision: "block",
                reason: `cloud template ${e.id} could not be installed on this worker; matching calls are blocked until it is (register again to retry)`
              })
            }]
          };
          y.set(matcher, e.id), r[e.event] = [...(r[e.event] ?? []), matcher], H.set(e.id, {
            event: e.event,
            matcher: matcher
          }), E.add(e.id);
        },
        L = new Map(parsed.templates.map(item => [item.template, item]));
      for (let e of L.values()) {
        let n = o.templates.template(e.template),
          status = re(n, e),
          T = status === "awaiting_upload" ? o.templates.bytesFor(e.digest) : void 0;
        if (n === void 0 || T === void 0) {
          if (f.set(e.template, {
            template: e.template,
            status: status
          }), !x(e.template) && n !== void 0) q(n, Q(e.timeout_s));
          continue;
        }
        let timeout_2 = Q(e.timeout_s);
        if ((await o.templateRunner.resolveInterpreter()) === null) {
          if (f.set(e.template, {
            template: e.template,
            status: "interpreter_unavailable"
          }), !x(e.template)) q(n, timeout_2);
          continue;
        }
        let callback;
        try {
          if (callback = await nt(o.templateRunner.prepare(n, e.digest, T, timeout_2), oe), callback === void 0) throw Error("template prepare timed out");
        } catch (error) {
          if (t(`[deviceHooks] template ${e.template} install failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
          }), f.set(e.template, {
            template: e.template,
            status: "install_failed"
          }), !x(e.template)) q(n, timeout_2);
          continue;
        }
        let matcher_2 = {
          matcher: n.matcher,
          hooks: [{
            type: "callback",
            timeout: timeout_2,
            callback: callback
          }]
        };
        y.set(matcher_2, n.id), r[n.event] = [...(r[n.event] ?? []), matcher_2], H.set(n.id, {
          event: n.event,
          matcher: matcher_2
        }), f.set(e.template, {
          template: e.template,
          status: "installed"
        });
      }
      let templates = [...f.values()];
      if (D()) return w(), o.telemetry.register({
        outcome: "disabled_policy",
        accepted: 0,
        ignored: 0,
        templatesAwaitingUpload: 0,
        templatesRefused: 0,
        flagWaitMs: s.flagWaitMs,
        sharedFlagRead: s.sharedFlagRead
      }), {
        kind: "error",
        error: "hook_forwarding_disabled: policy"
      };
      let lease_s = parsed.lease_s ?? te,
        leaseExpiresAt = o.now() + lease_s * 1000,
        k = {
          instanceId: parsed.instance_id,
          displayName: po(parsed.display_name ?? "", {
            maxCodeUnits: maxCodeUnits_2
          }) || parsed.instance_id,
          epoch: o.workerEpoch,
          leaseExpiresAt: leaseExpiresAt,
          entries: entries,
          templates: [...L.values()].flatMap(item => {
            let n = f.get(item.template)?.status,
              event = E.has(item.template) ? H.get(item.template)?.event ?? item.event : item.event;
            return (n === "awaiting_upload" || n === "installed" || E.has(item.template)) && EV(event) ? [{
              template: item.template,
              digest: item.digest,
              event: event,
              ...(item.timeout_s !== void 0 && {
                timeoutS: item.timeout_s
              })
            }] : [];
          })
        };
      if (k.entries.length === 0 && k.templates.length === 0) return R(p, templates);
      let {
        replaced: b,
        awaySince: awaySince
      } = o.registry.replaceOwner(k);
      if (b !== void 0) o.forwarder.removeForOwner(b), o.templateRunner.remove(b), h.delete(b);
      o.forwarder.installForOwner(k), o.templateRunner.install(k.instanceId, r, (e, n) => y.get(n) ?? "template"), h.set(k.instanceId, H);
      let X = _.get(k.instanceId) ?? new Set();
      for (let e of f.values()) if (e.status === "installed") X.add(e.template);
      _.set(k.instanceId, X);
      let templatesAwaitingUpload = U(templates, e => e.status === "awaiting_upload"),
        templatesInstalled = U(templates, e => e.status === "installed");
      return o.telemetry.register({
        outcome: "accepted",
        accepted: entries.length,
        ignored: p.length,
        templatesAwaitingUpload: templatesAwaitingUpload,
        templatesInstalled: templatesInstalled,
        templatesRefused: templates.length - templatesAwaitingUpload - templatesInstalled,
        flagWaitMs: s.flagWaitMs,
        sharedFlagRead: s.sharedFlagRead
      }), {
        kind: "success",
        response: {
          status: "registered",
          ...v,
          lease_s: lease_s,
          lease_expires_at: new Date(leaseExpiresAt).toISOString(),
          accepted: entries.length,
          ignored: p.length,
          ...(p.length > 0 && {
            ignored_ids: p.slice(0, 128)
          }),
          templates: templates,
          ...(b !== void 0 && {
            replaced_owner: b
          }),
          ...(awaySince !== void 0 && {
            away_since: new Date(awaySince).toISOString()
          })
        }
      };
    },
    O = 400000,
    P = async l => {
      let s = (outcome, template = "unknown", bytes = 0) => o.telemetry.upload({
        outcome: outcome,
        template: template,
        bytes: bytes
      });
      if (fa(l).length > O) return s("invalid"), {
        kind: "error",
        error: "invalid_upload: request larger than 400 KB"
      };
      let a = jpn().safeParse(l.request);
      if (!a.success) return s("invalid"), {
        kind: "error",
        error: `invalid_upload: ${po(a.error.issues[0]?.message ?? "malformed", {
          maxCodeUnits: maxCodeUnits
        })}`
      };
      let c = a.data;
      if (c.worker_epoch !== void 0 && c.worker_epoch !== o.workerEpoch) return s("stale_epoch", c.template), {
        kind: "error",
        error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`
      };
      let d = await S();
      if (!d.ok) return s(d.outcome, c.template), {
        kind: "error",
        error: d.error
      };
      let i = o.templates.accept({
        template: c.template,
        digest: c.digest,
        contentBase64: c.content_base64
      });
      if (!i.ok) return s(i.kind, c.template), {
        kind: "error",
        error: i.error
      };
      return s(i.status, i.template.id, i.bytes), {
        kind: "success",
        response: {
          template: i.template.id,
          digest: c.digest,
          status: i.status
        }
      };
    };
  return {
    async handle(l) {
      switch (l.request.subtype) {
        case "register_device_hooks":
          return I(l);
        case "upload_device_hook_template":
          return P(l);
        default:
          return {
            kind: "error",
            error: `Unsupported control request subtype: ${l.request.subtype}`
          };
      }
    }
  };
}
function ae(o) {
  return o !== void 0 && Number.isInteger(o) && o >= 1 ? o : 1;
}
async function ke(o) {
  let [{
      isRestrictedToPluginOnly: isRestrictedToPluginOnly
    }, {
      isCustomizationDisabled: isCustomizationDisabled
    }, {
      shouldHoldDeviceHooksByPolicy: h,
      shouldDisableAllHooksIncludingManaged: D
    }, {
      isAccountGateServed: isAccountGateServed,
      isViolinAmatiEnabled: isViolinAmatiEnabled,
      isViolinWoodEnabled: isViolinWoodEnabled
    }, {
      refreshGrowthBookFeatures: refreshGrowthBookFeatures
    }, {
      createDeviceHookRegistry: createDeviceHookRegistry,
      productionRegistryTimer: O
    }, {
      createDeviceHookForwarder: createDeviceHookForwarder,
      productionForwarderTimer: l
    }, {
      createDeviceHookTemplateStore: createDeviceHookTemplateStore
    }, {
      productionDeviceHookTemplateRunner: productionDeviceHookTemplateRunner,
      telemetryTemplateId: telemetryTemplateId
    }, {
      logEvent: logEvent
    }, {
      fromEnum: fromEnum
    }, {
      logFeatureBad: logFeatureBad,
      logFeatureOk: logFeatureOk,
      logFeatureSad: logFeatureSad
    }] = await Promise.all([import("B:/~BUN/root/chunk-kpg015s8.js"), import("B:/~BUN/root/chunk-mm7t66c6.js"), import("B:/~BUN/root/chunk-dycc38rh.js"), import("B:/~BUN/root/chunk-60s15mr3.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-sm43h0x2.js"), import("B:/~BUN/root/chunk-1ze5h26w.js"), import("B:/~BUN/root/chunk-9kcxh8t1.js"), import("B:/~BUN/root/chunk-39b0f945.js"), import("B:/~BUN/root/chunk-m1txwwpz.js"), import("B:/~BUN/root/chunk-hca4xbgs.js"), import("B:/~BUN/root/chunk-sd62g3gg.js")]),
    registry = createDeviceHookRegistry({
      now: Date.now,
      setTimer: O,
      onLeaseExpired: () => logEvent("tengu_device_hooks_lease_expired", {})
    }),
    forwarder = createDeviceHookForwarder({
      registry: registry,
      sender: o.sender,
      toolAliases: o.toolAliases,
      now: Date.now,
      setTimer: l,
      telemetry: {
        forwarded: r => logEvent("tengu_device_hook_forwarded", {
          event: fromEnum(r.event),
          outcome: fromEnum(r.outcome),
          fields_dropped: r.fieldsDropped,
          blocked: r.blocked,
          rtt_ms: r.rttMs,
          error_replies_ignored: r.errorRepliesIgnored,
          malformed_replies_ignored: r.malformedRepliesIgnored
        })
      }
    });
  return {
    policy: {
      pluginOnly: () => isRestrictedToPluginOnly("hooks"),
      customizationDisabled: () => isCustomizationDisabled("hooks"),
      managedOnly: h,
      allDisabled: D
    },
    readAccountFlags: async () => {
      let [r, y] = await Promise.all([isViolinWoodEnabled(), isViolinAmatiEnabled()]);
      if (r && y) return !0;
      if (!(!r && isAccountGateServed("tengu_violin_wood") || !y && isAccountGateServed("tengu_violin_amati"))) throw refreshGrowthBookFeatures().catch(() => {}), Error("account flags not served yet");
      return !1;
    },
    flagWaitCapMs: 5000,
    now: Date.now,
    workerEpoch: ae(o.workerEpoch),
    projectRoot: o.projectRoot,
    cwd: o.cwd,
    registry: registry,
    forwarder: forwarder,
    templates: createDeviceHookTemplateStore(),
    templateRunner: Wo() ? {
      resolveInterpreter: async () => null,
      prepare: async () => {
        throw Error("no device hook templates in a diskless session");
      },
      install: () => {},
      remove: () => {}
    } : productionDeviceHookTemplateRunner(o.projectRoot),
    telemetry: {
      templateStandInBlocked: r => logEvent("tengu_device_hook_template_run", {
        template: fromEnum(telemetryTemplateId(r.template)),
        outcome: fromEnum("stand_in_blocked"),
        duration_ms: 0
      }),
      upload: r => logEvent("tengu_device_hook_template_upload", {
        outcome: fromEnum(r.outcome),
        template: fromEnum(telemetryTemplateId(r.template)),
        bytes: r.bytes
      }),
      register: r => {
        if (logEvent("tengu_device_hooks_register", {
          outcome: fromEnum(r.outcome),
          accepted: r.accepted,
          ignored: r.ignored,
          templates_awaiting_upload: r.templatesAwaitingUpload,
          templates_installed: r.templatesInstalled ?? 0,
          templates_refused: r.templatesRefused,
          flag_wait_ms: r.flagWaitMs,
          shared_flag_read: r.sharedFlagRead
        }), r.outcome === "accepted" || r.outcome === "unregistered") logFeatureOk("device_hooks_register", {
          accepted: r.accepted
        });else if (r.outcome === "not_ready") logFeatureSad("device_hooks_register", r.outcome);else logFeatureBad("device_hooks_register", r.outcome);
      }
    }
  };
}
export { fe as createDeviceHooksWorker, ke as productionDeviceHooksWorkerDeps };