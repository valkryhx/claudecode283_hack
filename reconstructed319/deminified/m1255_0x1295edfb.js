// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, Ee, q, er, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { Jc } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Kz as id_2, na as name, kAe } from "B:/~BUN/root/chunk-5az22yft.js";
import { sT, Qs, CVe, UIr, y8i, mie, v4 } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Od } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { xg } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { id, NPo } from "B:/~BUN/root/chunk-65j2302z.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { Tp } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { gte, Yl } from "B:/~BUN/root/chunk-ja520myc.js";
import { s_t, qy } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { Qt as name_2, iu, Bn, jv } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { xd } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { $d } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { SA, Ten, Cen, yCe } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { gGe, yGe } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { Wl, lo } from "B:/~BUN/root/chunk-detjgwj4.js";
import { aO } from "B:/~BUN/root/chunk-tdekz3md.js";
import { ZSs, rse } from "B:/~BUN/root/chunk-eak7wp7z.js";
import { Avr, XBi } from "B:/~BUN/root/chunk-17gxersm.js";
import { xu, mmo } from "B:/~BUN/root/chunk-17caj8fw.js";
import { Jpo, Qpo, ien, bLt, aen, zLn, KJe, Dvr, ZBi, Lvr, pCe, QSs } from "B:/~BUN/root/chunk-0q69tvcp.js";
import { YSs } from "B:/~BUN/root/chunk-tqwjx62y.js";
import { qBi, YBi } from "B:/~BUN/root/chunk-n2pqrkhp.js";
import { xvr } from "B:/~BUN/root/chunk-nm2asfkw.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
function z(e) {
  for (let r of e) {
    let o = D(r) && typeof r.text === "string" ? et(r.text, !1) : null;
    if (D(o)) {
      let n = o.type;
      if (o.creatable !== !0 || !D(n) || n.tier !== "core") return;
      return n.title === "Slides" ? "slides" : n.title === "Design" ? "design" : void 0;
    }
  }
  return;
}
function U(e) {
  let r = e.call;
  e.call = async (...o) => {
    let n = await r.apply(e, o),
      [p, u] = o,
      d = n.data;
    try {
      if (!Array.isArray(d) || D(p) && p.file !== void 0) return n;
      let s = z(d);
      if (s === void 0 || er() || !Avr(u)) return n;
      return g("artifact_mcp_ask_first", {
        intent: f(s)
      }), {
        ...n,
        data: [{
          type: "text",
          text: XBi(s)
        }, ...d]
      };
    } catch (error) {
      return m("artifact_mcp_ask_first", "threw"), a(error), n;
    }
  };
}
var P = {
    wire: b("mcp_server_tool")
  },
  J = new Set(["bad_entry", "input_schema", "relative_path", "too_many_files", "path_rejected", "resolves_elsewhere", "name_direction", "hard_links", "not_regular", "too_large", "too_large_total", "input_changed", "policy_denied", "uploads_off", "egress_blocked", "essential_traffic", "rule_not_applicable", "moved", "grew", "changed"]);
function x(e) {
  try {
    e();
  } catch (error) {
    a(qe(F(error), "The outcome of an Artifacts MCP publish could not be counted in analytics; the call itself is unaffected"));
  }
}
async function N(e, r, o, n) {
  if (!bLt.has(e)) return n();
  let p = e === "create_from_type",
    u = () => ({
      is_redeploy: !aen(e, r()),
      ...P
    }),
    d;
  try {
    d = await n();
  } catch (error) {
    throw x(() => {
      if (o()) return;
      let _ = error instanceof qy,
        k = !_ ? void 0 : error.message === "not found" ? "404" : /^[a-z_]+ failed \(HTTP (\d{3})\): /m.exec(error.message)?.[1],
        h = k === void 0 ? void 0 : Number(k);
      if (p) {
        if (!_) m("artifact_create_from_type", "request_error", P);else if (h === void 0) m("artifact_create_from_type", "mcp_tool_error", P);else m("artifact_create_from_type", h === 404 ? "not_found" : h === 403 ? "denied" : `status_${h}`, {
          status: h,
          ...P
        });
        return;
      }
      let S = u();
      if (error instanceof s_t) m("artifact_publish", J.has(error.code) || error.code.startsWith("model_") ? `attach_refused_${error.code}` : `attach_failed_${error.code}`, S);else if (!_) m("artifact_publish", "request_error", S);else if (h === void 0) m("artifact_publish", "deploy_failed", S);else m("artifact_publish", h === 403 ? "publish_denied" : h === 404 && S.is_redeploy ? "slug_gone" : "deploy_failed", {
        ...S,
        deploy_status: h
      });
    }), error;
  }
  return x(() => {
    if (KJe(d.data) === null) return;
    if (p) g("artifact_create_from_type", P);else g("artifact_publish", u());
  }), d;
}
var j = new Set(["artifact_tool_off", "org_policy_cache_miss"]),
  vca = new W(() => ({
    built: new WeakSet(),
    laterBuild: {
      kind: "closed"
    },
    loginsCompleted: {
      count: 0,
      account: null
    }
  }));
function T() {
  return vca.of(H().host);
}
function CSa(e) {
  let startup = G(e, null),
    o = T();
  if (o.laterBuild = {
    kind: "closed"
  }, startup.skip === void 0) return startup.entry;
  if (j.has(startup.skip)) o.laterBuild = {
    kind: "waiting",
    startup: startup
  }, o.loginsCompleted = {
    count: 0,
    account: R()
  };
  return K(startup, !1), null;
}
function GSs(e) {
  let r = T(),
    {
      laterBuild: laterBuild
    } = r;
  if (laterBuild.kind === "closed") return null;
  if (!Xpo()) return "waiting";
  let n = G(e, laterBuild.kind === "built" ? laterBuild.entry : null);
  if (n.skip !== void 0 && j.has(n.skip)) return "waiting";
  if (laterBuild.kind === "built") return n.entry ?? null;
  if (n.skip !== void 0) return r.laterBuild = {
    kind: "closed"
  }, K(n, !0), null;
  return r.laterBuild = {
    kind: "built",
    entry: n.entry
  }, l("tengu_artifact_mcp_laptop_entry_added_later", {
    startup_reason: f(laterBuild.startup.skip),
    startup_part: de(laterBuild.startup.part)
  }), n.entry;
}
function Ypo(count, r) {
  let o = T();
  if (count > o.loginsCompleted.count) o.loginsCompleted = {
    count: count,
    account: r === "as_it_completed" ? R() : null
  };
}
function Xpo() {
  let e = R();
  return e !== null && e === T().loginsCompleted.account;
}
function VSs() {
  return T().laterBuild.kind !== "closed";
}
function R() {
  try {
    if (!gGe()) return null;
    let e = yGe();
    if (!e?.accountUuid) return null;
    return `${e.accountUuid}|${e.organizationUuid}`;
  } catch (error) {
    return a(error), null;
  }
}
function K({
  skip: skip,
  part: part,
  agentCloudSession: agentCloudSession
}, after_start) {
  let p = part === "growthbook_off" ? "feature_flag_off" : part;
  switch (t(`Artifacts MCP server not added: ${skip}${p === void 0 ? "" : ` (${p})`}`), skip) {
    case "threw":
    case "remote_session":
    case "desktop_host":
    case "desktop_share_action":
      return;
    case "managed_or_strict_mcp_config":
    case "safe_or_bare_mode":
    case "artifact_tool_off":
    case "artifact_tool_denied":
      if (!q() && agentCloudSession === !0) Cen(() => l("tengu_artifact_mcp_laptop_entry_skipped", {
        reason: f(skip),
        part: de(part),
        after_start: after_start
      }));
      return;
    default:
      Cen(() => c("artifact_mcp_laptop_entry", skip));
  }
}
function G({
  toolPermissionContext: toolPermissionContext,
  configuredNames: configuredNames,
  fixedServerSet: fixedServerSet,
  allowedByPolicy: allowedByPolicy
}, entry) {
  try {
    let u = Q(toolPermissionContext, configuredNames, fixedServerSet);
    if (u.skip !== void 0) return u;
    if (u.stubDir !== void 0) {
      let _ = {
        ...YBi(u.stubDir, qBi(Ee(), toolPermissionContext)),
        scope: "dynamic"
      };
      if (!allowedByPolicy(name, _)) return {
        skip: "org_mcp_policy"
      };
      if (entry !== null) return {
        entry: entry
      };
      let config = gte(_);
      return T().built.add(config), {
        entry: {
          name: name,
          config: config
        }
      };
    }
    let d = {
      type: "http",
      url: u.url,
      headers: {
        "anthropic-beta": Jc
      },
      scope: "dynamic",
      toolPermissions: {
        ...YSs
      }
    };
    if (!allowedByPolicy(name, d)) return {
      skip: "org_mcp_policy"
    };
    if (entry !== null) return {
      entry: entry
    };
    let config_2 = gte(d, {
      firstPartyServer: {
        id: id_2,
        allowsFileUpload: () => !V() && allowedByPolicy(name, d)
      },
      resolveBearerToken: resolveBearerToken,
      withheldBearerRefusal: rse() ? "Artifacts request not sent: this session can no longer use Artifacts. A permission rule or policy stops it, or its own token no longer works." : "Artifacts request not sent: this session can no longer use Artifacts with its login. In a terminal, check /login, /permissions and /config.",
      requestHeaders: () => xg(xu(), mmo)
    });
    return T().built.add(config_2), Cen(() => g("artifact_mcp_laptop_entry")), {
      entry: {
        name: name,
        config: config_2
      }
    };
  } catch {
    return Cen(() => m("artifact_mcp_laptop_entry", "threw")), {
      skip: "threw"
    };
  }
}
function Q(e, r, part_2) {
  if (xn() || Tp()) return {
    skip: "remote_session"
  };
  let agentCloudSession_2 = rse();
  if (agentCloudSession_2) {
    let _ = import.meta.require("B:/~BUN/root/chunk-fb61ryza.js");
    if (_.relayIsOnlyRoute() || !_.agentSessionMaySendDirect()) return {
      skip: "remote_session"
    };
  }
  if ((id() || NPo()) && i.CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP !== !0) return {
    skip: "desktop_host"
  };
  if (xvr()) return {
    skip: "desktop_share_action"
  };
  if (part_2 !== null) return {
    skip: "managed_or_strict_mcp_config",
    part: part_2,
    agentCloudSession: agentCloudSession_2
  };
  if (Nr() || ur("mcpAutoDiscovered")) return {
    skip: "safe_or_bare_mode",
    agentCloudSession: agentCloudSession_2
  };
  if (!SA()) return {
    skip: "artifact_tool_off",
    part: gGe() ? Ten() ?? (yCe() ? "not_found" : "admin_policy") : "login",
    agentCloudSession: agentCloudSession_2
  };
  let p = Wl(e);
  if (lo(e, {
    name: name_2
  }, p) !== null) return {
    skip: "artifact_tool_denied",
    part: lo(e, {
      name: name_2
    }, p.filter(item => item.source !== "toolsNarrowing")) === null ? "tools_list" : "deny_rule",
    agentCloudSession: agentCloudSession_2
  };
  let stubDir = iu();
  if (stubDir !== null) return r.has(name) ? {
    skip: "name_taken"
  } : {
    stubDir: stubDir
  };
  let d = xd("allow_cobalt_plinth");
  if (d !== null) return {
    skip: `org_policy_${d}`
  };
  if (!mie()) return {
    skip: "essential_traffic_or_3p"
  };
  if (CVe() !== void 0) return {
    skip: "dev_frame_override"
  };
  let s;
  try {
    s = new URL(UIr());
  } catch {
    return {
      skip: "base_not_first_party"
    };
  }
  if (s.protocol !== "https:" || s.username !== "" || s.password !== "" || s.pathname !== "/" || s.search !== "" || s.hash !== "" || !Od(s.href)) return {
    skip: "base_not_first_party"
  };
  if (r.has(name)) return {
    skip: "name_taken"
  };
  return {
    url: new URL(kAe, s.origin).href
  };
}
function KSs(e) {
  return typeof e === "object" && e !== null && T().built.has(e) && Yl(e);
}
function RSa(e) {
  if (!KSs(e)) return {};
  return {
    skipAggregateToolResultBudget: !0
  };
}
function ASa(e, r) {
  let o = r.mcpInfo?.toolName;
  if (o === void 0 || !(KSs(e) || v4(e))) return;
  if (o === ZSs) {
    U(r);
    return;
  }
  if (!(bLt.has(o) || o === zLn)) return;
  if (bLt.has(o)) Object.assign(r, {
    preserveToolUseResultInSubagents: !0
  });
  let n = r.call;
  r.call = async (p, u, d, s, _, k) => {
    let h = te(),
      {
        accountEpoch: accountEpoch,
        conversationEpoch: conversationEpoch
      } = h,
      y = await N(o, () => {
        let A = s?.message?.content,
          M = Array.isArray(A) ? A.find(item => item.type === "tool_use" && item.id === u.toolUseId) : void 0;
        return M?.type === "tool_use" ? M.input : p;
      }, () => u.abortController.signal.aborted, () => n.call(r, p, u, d, s, _, k));
    if (o === zLn) {
      try {
        let A = Lvr(y.data);
        if (A !== null && D(p) && p.slug === A) pCe.loaded()?.forgetArtifactDeletedThroughMcp(u, A);
      } catch (error) {
        m("artifact_mcp_laptop_publish_row", "forget_threw"), a(error);
      }
      return y;
    }
    let C = te();
    if (C.accountEpoch !== accountEpoch || C.conversationEpoch !== conversationEpoch) return y;
    let w;
    try {
      w = KJe(y.data);
    } catch (error) {
      return m("artifact_mcp_laptop_publish_row", "threw"), a(error), y;
    }
    if (w === null) return c("artifact_mcp_laptop_publish_row", "unlisted"), y;
    let I = KSs(e);
    if (X(u, w, o, p, I, Dvr(y.data).read === "owner", o === ien && ZBi(y.data) && u.options.tools.some(item => item.mcpInfo?.serverName === r.mcpInfo?.serverName && item.mcpInfo?.toolName === Jpo)), !I) return y;
    let arm = QSs.arm;
    if (arm === null) return c("artifact_mcp_laptop_publish_row", "no_wake_arm"), y;
    let L = !1;
    try {
      let {
          title: title,
          ...M
        } = w,
        title_2 = D(p) && typeof p.title === "string" ? jv(p.title) : null,
        B = title_2 === null ? M : {
          ...M,
          title: title_2
        },
        {
          version: version,
          ...Y
        } = B;
      L = arm(u, o === ien ? Y : B);
    } catch (error) {
      m("artifact_mcp_laptop_publish_row", "wake_threw"), a(error);
    }
    return L !== !1 && Array.isArray(y.data) ? {
      ...y,
      data: [...y.data, {
        type: "text",
        text: Z[L]
      }]
    } : y;
  };
}
function X(e, r, o, n, p, u, d) {
  try {
    let ownPublishedSlugs = te().ownPublishedSlugs,
      _ = ownPublishedSlugs.get(r.slug);
    if (!u && _ !== void 0) ownPublishedSlugs.set(r.slug, {
      env: _.env
    });
    if (p && u && o !== ien && o !== Qpo && !Qs(e.agentContext) && sT(e.messages)) ownPublishedSlugs.set(r.slug, {
      env: r.env,
      byPerson: !0
    });
    let k = aen(o, n);
    if (k && o !== ien && p && !Qs(e.agentContext)) te().ownCreatedSlugs.set(r.slug, {
      env: r.env,
      wrotePage: !0
    });
    let h = pCe.loaded();
    if (h === null) {
      c("artifact_mcp_laptop_publish_row", "no_writer");
      return;
    }
    let S = h.addOpenedFrameRow(e, r, r.title, {
      mcpPublished: !0
    });
    g("artifact_mcp_laptop_publish_row");
    let E = {
        slug: r.slug,
        url: Bn(r)
      },
      y = h.derivePublishContext(e).hasInteractiveUI && e.agentId === void 0,
      {
        deferredSurface: deferredSurface
      } = te();
    if (d) {
      if (y) deferredSurface.set(r.slug, E);
      return;
    }
    let w = o !== Qpo && deferredSurface.delete(r.slug),
      I = h.surfacePublishedArtifact(e, w || y, E, !k && !w, v => h.markFrameOpenOutcome(e, S.rowKey, v));
    if (w && I === "auto_open_skipped_remote_control") deferredSurface.set(r.slug, E);
  } catch (error) {
    m("artifact_mcp_laptop_publish_row", "threw"), a(error);
  }
}
var local = `Once this session's watch on this artifact connects, when the user sends a comment on the artifact to Claude, this session gets a message naming the artifact and the thread. Plain comments, and comments other people send to Claude, do not wake it. Any "wake" field in this answer describes cloud sessions only.`,
  cloud = 'A wake for this session is registered with the artifact service, or is being registered (a notice follows if it cannot be). With it, this session gets a new turn when anyone sends a comment on the artifact to Claude, or when the artifact is republished elsewhere. Plain comments do not wake it. A wake carries neither the comment nor the new version. Any "wake" field in this answer does not describe this registration.',
  cloud_unwoken = 'No wake could be registered for this session, so comments on this artifact and republishes of it will not start a turn here: this session is not watching the artifact. Any "wake" field in this answer does not describe this session.',
  Z = {
    local: local,
    cloud: cloud,
    cloud_unwoken: cloud_unwoken
  };
function V() {
  return !SA() || xd("allow_cobalt_plinth") !== null || lo($d(), {
    name: name_2
  }, aO().filter(item => item.ruleBehavior === "deny")) !== null;
}
async function resolveBearerToken() {
  if (V()) return null;
  return await y8i();
}
export { vca, CSa, GSs, Ypo, Xpo, VSs, KSs, RSa, ASa, local as Eca, cloud as Tca, cloud_unwoken as Cca };