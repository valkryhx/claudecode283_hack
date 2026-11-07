// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-z6138ats.js";
import { LMr, aUt, NMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import "B:/~BUN/root/chunk-r8p1hzqw.js";
import "B:/~BUN/root/chunk-acjt1b7f.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, oi } from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import { bi, h7 as maxCodeUnits_2 } from "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-begxsvab.js";
import "B:/~BUN/root/chunk-2f1svh63.js";
import "B:/~BUN/root/chunk-44q965xg.js";
import { uoe, G9e } from "B:/~BUN/root/chunk-cxcakgnv.js";
import "B:/~BUN/root/chunk-wxhfn3za.js";
import { G6n, V6n } from "B:/~BUN/root/chunk-2s5nnyq9.js";
import { kPe } from "B:/~BUN/root/chunk-r7xy6c5a.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
var te = 65536,
  oe = 600,
  maxCodeUnits = 200,
  re = 5000,
  ae = 300000;
function ee(o) {
  return Math.min(600, Math.max(5, Math.round(o ?? 60)));
}
function ne(o, m) {
  if (o === void 0) return "unknown_template";
  if (!o.digests.some(item => item.sha256 === m.digest)) return "version_mismatch";
  if (m.event !== o.event || !uoe(m.event)) return "event_not_allowed";
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
    I = async () => {
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
        state: (await we(s.promise.then(i => i ? "on" : "off", () => "pending"), c)) ?? "pending",
        waitMs: o.now() - a,
        shared: shared
      };
    },
    E = async () => {
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
      let s = await I(),
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
    O = async l => {
      let s = {
        flagWaitMs: 0,
        sharedFlagRead: !1
      };
      if (oi(l).length > te) return {
        ok: !1,
        error: "invalid_registration: request larger than 64 KiB",
        outcome: "invalid",
        ...s
      };
      let a = LMr().safeParse(l.request);
      if (!a.success) return {
        ok: !1,
        error: `invalid_registration: ${bi(a.error.issues[0]?.message ?? "malformed", {
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
      let c = await E();
      return c.ok ? {
        ok: !0,
        parsed: a.data,
        flagWaitMs: c.flagWaitMs,
        sharedFlagRead: c.sharedFlagRead
      } : c;
    },
    A = async l => {
      let s = await O(l);
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
        success = aUt().safeParse({
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
        let n = kPe(e.id),
          p = e.matcher === void 0 || e.matcher === "" || e.matcher === "*" || G9e.test(e.matcher),
          W = S.has(e.id);
        if (S.add(e.id), W || n === null || n.instanceId !== parsed.instance_id || n.event !== e.event || !uoe(e.event) || !p) {
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
        T = y.get(parsed.instance_id) ?? new Map(),
        h = new Map(),
        K = e => {
          let n = T.get(e);
          if (n === void 0) return !1;
          return R.set(n.matcher, e), f[n.event] = [...(f[n.event] ?? []), n.matcher], h.set(e, n), r.add(e), !0;
        },
        j = (e, timeout) => {
          if (!G6n(e) || !v.get(parsed.instance_id)?.has(e.id)) return;
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
        G = new Map(parsed.templates.map(item => [item.template, item]));
      for (let e of G.values()) {
        let n = o.templates.template(e.template),
          status = ne(n, e),
          W = status === "awaiting_upload" ? o.templates.bytesFor(e.digest) : void 0;
        if (n === void 0 || W === void 0) {
          if (g.set(e.template, {
            template: e.template,
            status: status
          }), !K(e.template) && n !== void 0) j(n, ee(e.timeout_s));
          continue;
        }
        let timeout_2 = ee(e.timeout_s);
        if ((await o.templateRunner.resolveInterpreter()) === null) {
          if (g.set(e.template, {
            template: e.template,
            status: "interpreter_unavailable"
          }), !K(e.template)) j(n, timeout_2);
          continue;
        }
        let callback;
        try {
          if (callback = await we(o.templateRunner.prepare(n, e.digest, W, timeout_2), re), callback === void 0) throw Error("template prepare timed out");
        } catch (error) {
          if (t(`[deviceHooks] template ${e.template} install failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
          }), g.set(e.template, {
            template: e.template,
            status: "install_failed"
          }), !K(e.template)) j(n, timeout_2);
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
      let lease_s = parsed.lease_s ?? oe,
        leaseExpiresAt = o.now() + lease_s * 1000,
        w = {
          instanceId: parsed.instance_id,
          displayName: bi(parsed.display_name ?? "", {
            maxCodeUnits: maxCodeUnits_2
          }) || parsed.instance_id,
          epoch: o.workerEpoch,
          leaseExpiresAt: leaseExpiresAt,
          entries: entries,
          templates: [...G.values()].flatMap(item => {
            let n = g.get(item.template)?.status,
              event = r.has(item.template) ? h.get(item.template)?.event ?? item.event : item.event;
            return (n === "awaiting_upload" || n === "installed" || r.has(item.template)) && uoe(event) ? [{
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
      let V = v.get(w.instanceId) ?? new Set();
      for (let e of g.values()) if (e.status === "installed") V.add(e.template);
      v.set(w.instanceId, V);
      let templatesAwaitingUpload = U(templates, e => e.status === "awaiting_upload"),
        templatesInstalled = U(templates, e => e.status === "installed");
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
    P = 400000,
    x = async l => {
      let s = (outcome, template = "unknown", bytes = 0) => o.telemetry.upload({
        outcome: outcome,
        template: template,
        bytes: bytes
      });
      if (oi(l).length > P) return s("invalid"), {
        kind: "error",
        error: "invalid_upload: request larger than 400 KB"
      };
      let a = NMr().safeParse(l.request);
      if (!a.success) return s("invalid"), {
        kind: "error",
        error: `invalid_upload: ${bi(a.error.issues[0]?.message ?? "malformed", {
          maxCodeUnits: maxCodeUnits
        })}`
      };
      let c = a.data;
      if (c.worker_epoch !== void 0 && c.worker_epoch !== o.workerEpoch) return s("stale_epoch", c.template), {
        kind: "error",
        error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`
      };
      let u = await E();
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
          return A(l);
        case "upload_device_hook_template":
          return x(l);
        default:
          return {
            kind: "error",
            error: `Unsupported control request subtype: ${l.request.subtype}`
          };
      }
    }
  };
}
function se(o) {
  return o !== void 0 && Number.isInteger(o) && o >= 1 ? o : 1;
}
async function ve(o) {
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
      productionRegistryTimer: x
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
    }] = await Promise.all([import("B:/~BUN/root/chunk-bs7spsrr.js"), import("B:/~BUN/root/chunk-4hjgnhev.js"), import("B:/~BUN/root/chunk-pkar55x4.js"), import("B:/~BUN/root/chunk-fbb75p5p.js"), import("B:/~BUN/root/chunk-s3e3nmea.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-9sknzy2h.js"), import("B:/~BUN/root/chunk-nwqa5q9q.js"), import("B:/~BUN/root/chunk-1dkpvf6f.js"), import("B:/~BUN/root/chunk-848djrt1.js"), import("B:/~BUN/root/chunk-tbhz6sq9.js"), import("B:/~BUN/root/chunk-ezdxjagn.js"), import("B:/~BUN/root/chunk-frw5aym1.js")]),
    registry = createDeviceHookRegistry({
      now: Date.now,
      setTimer: x,
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
        let [r, T] = await Promise.all([isToolServingEnabled({
          cloudClient: !0
        }), isViolinAmatiEnabled()]);
        if (r && T) {
          if (!V6n()) return !0;
          return logEvent("tengu_device_hooks_shelved", {
            side: fromEnum("worker")
          }), !1;
        }
        let h = getToolServingFlagAnsweredOff({
          cloudClient: !0
        }) ?? (!T && isAccountGateServed("tengu_violin_amati") ? "tengu_violin_amati" : void 0);
        if (h === void 0) throw refreshGrowthBookFeatures().catch(() => {}), Error("account flags not served yet");
        return logEvent("tengu_device_hooks_account_flag_off", {
          flag: fromEnum(h)
        }), !1;
      },
      flagWaitCapMs: 5000,
      now: Date.now,
      workerEpoch: se(o.workerEpoch),
      projectRoot: o.projectRoot,
      cwd: o.cwd,
      registry: registry,
      forwarder: forwarder,
      templates: createDeviceHookTemplateStore(),
      templateRunner: q() ? {
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
      if (r - g >= ae) g = r, refreshGrowthBookFeatures().catch(() => {});
      return R.readAccountFlags();
    }
  };
}
export { he as createDeviceHooksWorker, ve as productionDeviceHooksWorkerDeps };