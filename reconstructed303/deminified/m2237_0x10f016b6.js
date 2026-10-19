// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f3n, Zht, m3n } from "B:/~BUN/root/chunk-kad4nq7y.js";
import "B:/~BUN/root/chunk-8z3a373v.js";
import "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-x50ytcx8.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import { F, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import { Bi, ti, jZe as maxCodeUnits_2, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import "B:/~BUN/root/chunk-a0k8qg0d.js";
import { q9, $Ue } from "B:/~BUN/root/chunk-dn8rakwm.js";
import "B:/~BUN/root/chunk-sajqdp4j.js";
import { Cbn, Rbn } from "B:/~BUN/root/chunk-r5j4gtpc.js";
import { Nye } from "B:/~BUN/root/chunk-znfad60d.js";
var ee = 65536,
  te = 600,
  maxCodeUnits = 200,
  oe = 5000,
  re = 300000;
function Z(o) {
  return Math.min(600, Math.max(5, Math.round(o ?? 60)));
}
function ae(o, m) {
  if (o === void 0) return "unknown_template";
  if (!o.digests.some(item => item.sha256 === m.digest)) return "version_mismatch";
  if (m.event !== o.event || !q9(m.event)) return "event_not_allowed";
  return "awaiting_upload";
}
function he(o) {
  let m = null,
    v = new Map(),
    y = new Map();
  o.registry.onLeaseExpired(l => o.forwarder.removeForOwner(l.instanceId));
  let M = () => o.policy.pluginOnly() || o.policy.customizationDisabled() || o.policy.managedOnly() || o.policy.allDisabled(),
    b = () => {
      let l = o.registry.current();
      if (l !== null) o.forwarder.removeForOwner(l.instanceId), o.templateRunner.remove(l.instanceId);
      o.registry.clear(), y.clear(), o.templates.clear();
    },
    O = async () => {
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
        state: (await je(s.promise.then(i => i ? "on" : "off", () => "pending"), c)) ?? "pending",
        waitMs: o.now() - a,
        shared: shared
      };
    },
    A = async () => {
      let l = {
        flagWaitMs: 0,
        sharedFlagRead: !1
      };
      if (M()) return b(), {
        ok: !1,
        error: "hook_forwarding_disabled: policy",
        outcome: "disabled_policy",
        ...l
      };
      let s = await O(),
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
      if (s.state === "off") return b(), {
        ok: !1,
        error: "hook_forwarding_disabled: flag_off",
        outcome: "disabled_flag_off",
        ...a
      };
      if (M()) return b(), {
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
    P = async l => {
      let s = {
        flagWaitMs: 0,
        sharedFlagRead: !1
      };
      if (Bi(l).length > ee) return {
        ok: !1,
        error: "invalid_registration: request larger than 64 KiB",
        outcome: "invalid",
        ...s
      };
      let a = f3n().safeParse(l.request);
      if (!a.success) return {
        ok: !1,
        error: `invalid_registration: ${ti(a.error.issues[0]?.message ?? "malformed", {
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
      let c = await A();
      return c.ok ? {
        ok: !0,
        parsed: a.data,
        flagWaitMs: c.flagWaitMs,
        sharedFlagRead: c.sharedFlagRead
      } : c;
    },
    T = async l => {
      let s = await P(l);
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
        success = Zht().safeParse({
          status: "unregistered",
          project_dir: project_dir,
          cwd: cwd,
          worker_epoch: o.workerEpoch
        }).success,
        d = {
          project_dir: project_dir,
          cwd: success ? cwd : project_dir,
          worker_epoch: o.workerEpoch
        },
        D = (e, n) => {
          if (o.registry.removeOwner(parsed.instance_id)) o.forwarder.removeForOwner(parsed.instance_id), o.templateRunner.remove(parsed.instance_id);
          return y.delete(parsed.instance_id), o.telemetry.register({
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
              ...d,
              ...(e.length > 0 && {
                ignored_ids: e.slice(0, 128)
              }),
              ...(n.length > 0 && {
                templates: [...n]
              })
            }
          };
        };
      if (parsed.hooks.length === 0 && parsed.templates.length === 0) return D([], []);
      let entries = [],
        _ = [],
        S = new Set();
      for (let e of parsed.hooks) {
        let n = Nye(e.id),
          p = e.matcher === void 0 || e.matcher === "" || e.matcher === "*" || $Ue.test(e.matcher),
          C = S.has(e.id);
        if (S.add(e.id), C || n === null || n.instanceId !== parsed.instance_id || n.event !== e.event || !q9(e.event) || !p) {
          _.push(e.id);
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
      let f = {},
        R = new Map(),
        g = new Map(),
        r = new Set(),
        W = y.get(parsed.instance_id) ?? new Map(),
        h = new Map(),
        q = e => {
          let n = W.get(e);
          if (n === void 0) return !1;
          return R.set(n.matcher, e), f[n.event] = [...(f[n.event] ?? []), n.matcher], h.set(e, n), r.add(e), !0;
        },
        K = (e, timeout) => {
          if (!Cbn(e) || !v.get(parsed.instance_id)?.has(e.id)) return;
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
          R.set(matcher, e.id), f[e.event] = [...(f[e.event] ?? []), matcher], h.set(e.id, {
            event: e.event,
            matcher: matcher
          }), r.add(e.id);
        },
        N = new Map(parsed.templates.map(item => [item.template, item]));
      for (let e of N.values()) {
        let n = o.templates.template(e.template),
          status = ae(n, e),
          C = status === "awaiting_upload" ? o.templates.bytesFor(e.digest) : void 0;
        if (n === void 0 || C === void 0) {
          if (g.set(e.template, {
            template: e.template,
            status: status
          }), !q(e.template) && n !== void 0) K(n, Z(e.timeout_s));
          continue;
        }
        let timeout_2 = Z(e.timeout_s);
        if ((await o.templateRunner.resolveInterpreter()) === null) {
          if (g.set(e.template, {
            template: e.template,
            status: "interpreter_unavailable"
          }), !q(e.template)) K(n, timeout_2);
          continue;
        }
        let callback;
        try {
          if (callback = await je(o.templateRunner.prepare(n, e.digest, C, timeout_2), oe), callback === void 0) throw Error("template prepare timed out");
        } catch (error) {
          if (t(`[deviceHooks] template ${e.template} install failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
          }), g.set(e.template, {
            template: e.template,
            status: "install_failed"
          }), !q(e.template)) K(n, timeout_2);
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
        R.set(matcher_2, n.id), f[n.event] = [...(f[n.event] ?? []), matcher_2], h.set(n.id, {
          event: n.event,
          matcher: matcher_2
        }), g.set(e.template, {
          template: e.template,
          status: "installed"
        });
      }
      let templates = [...g.values()];
      if (M()) return b(), o.telemetry.register({
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
        w = {
          instanceId: parsed.instance_id,
          displayName: ti(parsed.display_name ?? "", {
            maxCodeUnits: maxCodeUnits_2
          }) || parsed.instance_id,
          epoch: o.workerEpoch,
          leaseExpiresAt: leaseExpiresAt,
          entries: entries,
          templates: [...N.values()].flatMap(item => {
            let n = g.get(item.template)?.status,
              event = r.has(item.template) ? h.get(item.template)?.event ?? item.event : item.event;
            return (n === "awaiting_upload" || n === "installed" || r.has(item.template)) && q9(event) ? [{
              template: item.template,
              digest: item.digest,
              event: event,
              ...(item.timeout_s !== void 0 && {
                timeoutS: item.timeout_s
              })
            }] : [];
          })
        };
      if (w.entries.length === 0 && w.templates.length === 0) return D(_, templates);
      let {
        replaced: H,
        awaySince: awaySince
      } = o.registry.replaceOwner(w);
      if (H !== void 0) o.forwarder.removeForOwner(H), o.templateRunner.remove(H), y.delete(H);
      o.forwarder.installForOwner(w), o.templateRunner.install(w.instanceId, f, (e, n) => R.get(n) ?? "template"), y.set(w.instanceId, h);
      let Y = v.get(w.instanceId) ?? new Set();
      for (let e of g.values()) if (e.status === "installed") Y.add(e.template);
      v.set(w.instanceId, Y);
      let templatesAwaitingUpload = F(templates, e => e.status === "awaiting_upload"),
        templatesInstalled = F(templates, e => e.status === "installed");
      return o.telemetry.register({
        outcome: "accepted",
        accepted: entries.length,
        ignored: _.length,
        templatesAwaitingUpload: templatesAwaitingUpload,
        templatesInstalled: templatesInstalled,
        templatesRefused: templates.length - templatesAwaitingUpload - templatesInstalled,
        flagWaitMs: s.flagWaitMs,
        sharedFlagRead: s.sharedFlagRead
      }), {
        kind: "success",
        response: {
          status: "registered",
          ...d,
          lease_s: lease_s,
          lease_expires_at: new Date(leaseExpiresAt).toISOString(),
          accepted: entries.length,
          ignored: _.length,
          ...(_.length > 0 && {
            ignored_ids: _.slice(0, 128)
          }),
          templates: templates,
          ...(H !== void 0 && {
            replaced_owner: H
          }),
          ...(awaySince !== void 0 && {
            away_since: new Date(awaySince).toISOString()
          })
        }
      };
    },
    x = 400000,
    U = async l => {
      let s = (outcome, template = "unknown", bytes = 0) => o.telemetry.upload({
        outcome: outcome,
        template: template,
        bytes: bytes
      });
      if (Bi(l).length > x) return s("invalid"), {
        kind: "error",
        error: "invalid_upload: request larger than 400 KB"
      };
      let a = m3n().safeParse(l.request);
      if (!a.success) return s("invalid"), {
        kind: "error",
        error: `invalid_upload: ${ti(a.error.issues[0]?.message ?? "malformed", {
          maxCodeUnits: maxCodeUnits
        })}`
      };
      let c = a.data;
      if (c.worker_epoch !== void 0 && c.worker_epoch !== o.workerEpoch) return s("stale_epoch", c.template), {
        kind: "error",
        error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`
      };
      let u = await A();
      if (!u.ok) return s(u.outcome, c.template), {
        kind: "error",
        error: u.error
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
          return T(l);
        case "upload_device_hook_template":
          return U(l);
        default:
          return {
            kind: "error",
            error: `Unsupported control request subtype: ${l.request.subtype}`
          };
      }
    }
  };
}
function ne(o) {
  return o !== void 0 && Number.isInteger(o) && o >= 1 ? o : 1;
}
async function we(o) {
  let [{
      isRestrictedToPluginOnly: isRestrictedToPluginOnly
    }, {
      isCustomizationDisabled: isCustomizationDisabled
    }, {
      shouldHoldDeviceHooksByPolicy: y,
      shouldDisableAllHooksIncludingManaged: M
    }, {
      isAccountGateServed: isAccountGateServed,
      isViolinAmatiEnabled: isViolinAmatiEnabled
    }, {
      getToolServingFlagAnsweredOff: getToolServingFlagAnsweredOff,
      isToolServingEnabled: isToolServingEnabled
    }, {
      refreshGrowthBookFeatures: refreshGrowthBookFeatures
    }, {
      createDeviceHookRegistry: createDeviceHookRegistry,
      productionRegistryTimer: U
    }, {
      createDeviceHookForwarder: createDeviceHookForwarder,
      productionForwarderTimer: s
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
    }] = await Promise.all([import("B:/~BUN/root/chunk-e4av978z.js"), import("B:/~BUN/root/chunk-0epw09na.js"), import("B:/~BUN/root/chunk-rvja6fg8.js"), import("B:/~BUN/root/chunk-hbtp1f7f.js"), import("B:/~BUN/root/chunk-73213syt.js"), import("B:/~BUN/root/chunk-xvnv0v80.js"), import("B:/~BUN/root/chunk-ycs94jfn.js"), import("B:/~BUN/root/chunk-gb6g61fb.js"), import("B:/~BUN/root/chunk-59b4t1rs.js"), import("B:/~BUN/root/chunk-7hp9frnb.js"), import("B:/~BUN/root/chunk-n5ww75r3.js"), import("B:/~BUN/root/chunk-5md36m0h.js"), import("B:/~BUN/root/chunk-sq2t846p.js")]),
    registry = createDeviceHookRegistry({
      now: Date.now,
      setTimer: U,
      onLeaseExpired: () => logEvent("tengu_device_hooks_lease_expired", {})
    }),
    forwarder = createDeviceHookForwarder({
      registry: registry,
      sender: o.sender,
      toolAliases: o.toolAliases,
      now: Date.now,
      setTimer: s,
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
    }),
    R = {
      policy: {
        pluginOnly: () => isRestrictedToPluginOnly("hooks"),
        customizationDisabled: () => isCustomizationDisabled("hooks"),
        managedOnly: y,
        allDisabled: M
      },
      readAccountFlags: async () => {
        let [r, W] = await Promise.all([isToolServingEnabled({
          cloudClient: !0
        }), isViolinAmatiEnabled()]);
        if (r && W) {
          if (!Rbn()) return !0;
          return logEvent("tengu_device_hooks_shelved", {
            side: fromEnum("worker")
          }), !1;
        }
        let h = getToolServingFlagAnsweredOff({
          cloudClient: !0
        }) ?? (!W && isAccountGateServed("tengu_violin_amati") ? "tengu_violin_amati" : void 0);
        if (h === void 0) throw refreshGrowthBookFeatures().catch(() => {}), Error("account flags not served yet");
        return logEvent("tengu_device_hooks_account_flag_off", {
          flag: fromEnum(h)
        }), !1;
      },
      flagWaitCapMs: 5000,
      now: Date.now,
      workerEpoch: ne(o.workerEpoch),
      projectRoot: o.projectRoot,
      cwd: o.cwd,
      registry: registry,
      forwarder: forwarder,
      templates: createDeviceHookTemplateStore(),
      templateRunner: de() ? {
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
    },
    g = Date.now();
  return {
    ...R,
    readAccountFlags: () => {
      let r = Date.now();
      if (r - g >= re) g = r, refreshGrowthBookFeatures().catch(() => {});
      return R.readAccountFlags();
    }
  };
}
export { he as createDeviceHooksWorker, we as productionDeviceHooksWorkerDeps };