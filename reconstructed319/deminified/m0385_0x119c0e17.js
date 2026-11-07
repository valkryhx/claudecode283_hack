// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, q, er } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, A7 } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { Wqe } from "B:/~BUN/root/chunk-65j2302z.js";
import { Qd } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { dPs, Dwo, cPs, qHt, Nwo, bV, KRe, pn, v, Vy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { oS, qy } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { oan, TDr, jFe, J3 } from "B:/~BUN/root/chunk-grwykqvw.js";
import { Jl } from "B:/~BUN/root/chunk-nzh2qzgc.js";
import { oFr } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { hs, bk, nv } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Sz, hgt } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { co } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { bGe } from "B:/~BUN/root/chunk-s9vv4h32.js";
import { WZ, tZt, Dys, wJe, q$ } from "B:/~BUN/root/chunk-4ffx6rrs.js";
import { yw } from "B:/~BUN/root/chunk-x0zaah42.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var oFi = "anthropic/chromeUploadFiles",
  ze = "anthropic/chromeUploadMaxBytes",
  sFi = "anthropic/chromeUploadAutoModeOnly",
  Dze = new Je(() => ({}));
function USr(n, e) {
  let t = n?.[ze];
  return typeof t === "number" && Number.isInteger(t) && t > 0 ? Math.min(t, e) : e;
}
var o_e = "x-mcp-server-origin",
  Hoe = "x-ccr-owner-slack-user-id",
  BSr = "x-ccr-gmail-attachments";
function kL(n, e) {
  return Object.entries(n ?? {}).filter(([t]) => t.toLowerCase() === e).map(([, t]) => t);
}
var F0e = new Je(() => ({}));
function qDt(n) {
  if (q() && Dze.peek(H())?.host === void 0) return "diskless";
  if (Wqe()) return "slack_or_teams_relay";
  return ee(n);
}
function ee(n) {
  let e = qe();
  if (e !== void 0) return e;
  if (nv()) return "policy_not_loaded";
  if (hgt() && hs("hipaa")) return "policy_not_loaded";
  if (!bk(n.policy)) return "policy_denied";
  return;
}
function qe() {
  let n;
  try {
    n = Sz();
  } catch {
    return "policy_not_asked";
  }
  switch (n) {
    case void 0:
    case "prosumer_oauth":
      return;
    case "third_party_provider":
    case "custom_base_url":
      return "policy_never_served";
    default:
      return "policy_not_asked";
  }
}
class Ee {
  #i = new Set();
  #e = new Map();
  #n = "not_checked";
  #t = !1;
  mayLogTypedRow(n) {
    if (this.#t) return !1;
    let e = fe(n);
    if (e === "no") this.#r();
    return e === "yes";
  }
  undecidedReason() {
    return this.#n;
  }
  holdUndecidedReason(n) {
    this.#n = n;
  }
  note(row, availability_2) {
    try {
      let t = availability_2.state === "offered" ? availability_2.state : `${availability_2.state}:${availability_2.reason}`;
      if (availability_2.state === "offered" || availability_2.state === "latched_off") {
        this.#n = "not_checked";
        for (let [r, {
          availability: availability
        }] of this.#e) if (availability.state === "latched_off") this.#e.delete(r);
      }
      if (availability_2.state === "latched_off" && availability_2.reason === "policy_denied" || fe(row) === "no") this.#r();
      if (!this.#t && !this.#i.has(t)) this.#e.set(t, {
        row: row,
        availability: availability_2
      });
    } catch {}
    this.flush();
  }
  flush() {
    try {
      for (let [n, {
        row: row_2,
        availability: availability_3
      }] of this.#e) {
        if (!v(row_2.flag, !1)) continue;
        let r = fe(row_2);
        if (r === "no") {
          this.#r();
          return;
        }
        if (r === "pending") continue;
        this.#e.delete(n), this.#i.add(n), l("tengu_mcp_drive_file_reference_availability", {
          state: f(availability_3.state),
          ...(availability_3.state !== "offered" && {
            reason: f(availability_3.reason)
          })
        });
      }
    } catch {}
  }
  #r() {
    this.#t = !0, this.#e.clear();
  }
}
function fe(n) {
  if (hs("hipaa")) return "no";
  let e = ee(n);
  if (e === "policy_not_asked" || e === "policy_not_loaded" || nv()) return "pending";
  return e === "policy_denied" ? "no" : "yes";
}
var Ve = new Je(() => new Ee());
function YDt() {
  return Ve.of(H());
}
function Oe(n) {
  let e = Dwo(n.flag);
  if (e !== null) return e && x(n);
  let t = pn(n.flag, !1),
    r = n.recipientCheck === void 0 ? YDt() : void 0;
  if (!t.value) {
    if (Vy(t.source)) cPs(n.flag, !1), r?.note(n, {
      state: "latched_off",
      reason: "flag_off_served"
    });else r?.holdUndecidedReason("flag_not_served");
    return !1;
  }
  let reason = qDt(n);
  if (!Vy(t.source)) return r?.holdUndecidedReason("flag_not_served"), !1;
  if (reason === "policy_not_loaded" || reason === "policy_not_asked") return r?.holdUndecidedReason(reason), !1;
  if (nv()) return r?.holdUndecidedReason("policy_verdict_absent"), !1;
  let d = reason === void 0;
  return cPs(n.flag, d), r?.note(n, reason === void 0 ? {
    state: "offered"
  } : {
    state: "latched_off",
    reason: reason
  }), d;
}
function uSa(n) {
  G(() => YDt().flush());
  let e = n.mcpInfo?.fileReference === !0 && (!i.CLAUDE_CODE_REMOTE || n.mcpInfo.remoteFileReferenceFill === !0) ? q$.find(item => item.toolName === n.mcpInfo?.toolName) : void 0;
  return e?.descriptionHint !== void 0 && Oe(e) ? "FR1:" : "";
}
function Pe(n, e) {
  if (!q$.some(item => item.toolName === e)) return;
  if (n.config.type === "sdk") {
    let r = bGe(n);
    return r === void 0 ? void 0 : q$.find(item => item.toolName === e && (te(r, item) === "fill" || te(r, item) === "hostFill"));
  }
  if (yw(n.config) === void 0 || !("url" in n.config) || typeof n.config.url !== "string") return;
  let {
    url: url
  } = n.config;
  return q$.find(item => {
    let o = `${item.connectorOrigin}${item.connectorPath}`;
    return item.toolName === e && (url === o || url === `${o}/`);
  });
}
function s_e(n, e) {
  if (!q$.some(item => item.toolName === e)) return;
  try {
    let t = bGe(n),
      r = Pe(n, e) ?? (t === void 0 ? void 0 : q$.find(item => item.toolName === e && te(t, item) === "conflicting"));
    if (r !== void 0 || i.CLAUDE_CODE_REMOTE !== !0) return r;
    let {
      config: config
    } = n;
    if (config.type !== "http" || config.scope !== "dynamic" || Qd(config) || !("url" in config) || typeof config.url !== "string") return;
    let d = new URL(config.url, "https://no-origin.invalid"),
      u = oan.find(item => d.pathname.startsWith(item));
    if (u === void 0 || !/^[^/]+\/mcp$/.test(d.pathname.slice(u.length))) return;
    let y = d.searchParams.getAll("mcp_url");
    return q$.find(item => {
      let k = `${item.connectorOrigin}${item.connectorPath}`;
      return item.toolName === e && y.some(item => item === k || item === `${k}/`);
    });
  } catch (error) {
    if (i.CLAUDE_CODE_REMOTE !== !0) throw error;
    return a(new R(`[file reference] could not check whether an MCP server is a connector whose uploads may carry a file's contents (${A7(error instanceof Error ? error.name : typeof error)}), so it is treated as one: the text of errors from its upload tool is left out of logs and traces.`, "[file reference] could not check whether an MCP server is a connector whose uploads may carry a file's contents; it is treated as one")), q$.find(item => item.toolName === e);
  }
}
function kDn(n) {
  return n.flatMap(({
    name: name,
    description: description
  }) => q$.some(item => item.proxyFills?.toolName === name) ? [{
    name: name,
    description: description
  }] : []);
}
function Lze(n, e, t = []) {
  if (!q$.some(item => item.toolName === e)) return;
  if (!i.CLAUDE_CODE_REMOTE) {
    let o = Pe(n, e),
      d = bGe(n);
    if (o !== void 0) {
      if (d === void 0) return o;
      return te(d, o) === "hostFill" ? {
        ...o,
        hostFills: !0
      } : o;
    }
    let u = q$.find(item => item.toolName === e),
      y = d !== void 0 && Object.hasOwn(d, "connectorUrl") ? Reflect.get(d, "connectorUrl") : void 0,
      _ = u === void 0 ? void 0 : `${u.connectorOrigin}${u.connectorPath}`;
    if (u === void 0 || d === void 0 || y !== void 0 && y !== _ && y !== `${_}/`) {
      let {
          config: config_2
        } = n,
        S = "url" in config_2 ? config_2.url : void 0;
      return D(n, e, "not_claudeai_connector", u?.recipientCheck !== void 0 && d === void 0 && (S === _ || S === `${_}/`) ? {
        ...u,
        refusesReferences: "not_filled_here"
      } : void 0);
    }
    let refusesReferences = te(d, u) === "conflicting" ? "conflicting" : "undeclared";
    if (refusesReferences === "conflicting") D(n, e, "desktop_conflicting");
    return {
      ...u,
      refusesReferences: refusesReferences
    };
  }
  let r;
  try {
    let {
        config: config_3
      } = n,
      d = er(),
      u = "url" in config_3 && typeof config_3.url === "string" ? J3(config_3.url)?.upstreamUrl : void 0,
      y = q$.find(item => {
        let B = `${item.connectorOrigin}${item.connectorPath}`;
        return item.toolName === e && item.recipientCheck !== void 0 && (u === B || u === `${B}/`);
      });
    if (r = y === void 0 || be(y, config_3, t) ? void 0 : {
      ...y,
      refusesReferences: "not_filled_here"
    }, !(oFr() || d)) {
      let CLAUDE_CODE_ENVIRONMENT_KIND = i.CLAUDE_CODE_ENVIRONMENT_KIND;
      return D(n, e, CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" ? "environment_byoc" : CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" ? "environment_bridge" : "environment_other", r);
    }
    if (config_3.type !== "http" || config_3.scope !== "dynamic" || Qd(config_3)) return D(n, e, "entry_shape", r);
    if (Jl.bridgeCarrier !== void 0) return D(n, e, "bridge_carrier", r);
    if (!jFe(config_3.url)) return D(n, e, "not_own_route", r);
    if (!KRe(config_3.url, TDr)) return D(n, e, "route_query_ambiguous", r);
    let _ = F0e.peek(H()),
      k = _?.read?.(n.name, config_3.url);
    if (k === void 0) return D(n, e, "no_startup_headers", r);
    if (kL(k, Hoe).length > 0) return D(n, e, "owner_header", r);
    let E = kL(k, o_e);
    if (E.length !== 1) return D(n, e, E.length === 0 ? "origin_missing" : "origin_multiple", r);
    if (E[0] !== "directory" && E[0] !== "custom") return D(n, e, "origin_other", r);
    let S = q$.find(item => {
      let B = `${item.connectorOrigin}${item.connectorPath}`;
      return item.toolName === e && (u === B || u === `${B}/`);
    });
    if (S === void 0) return D(n, e, u === void 0 ? "upstream_unread" : "upstream_not_drive");
    if (S.proxyFills !== void 0 && (kL(k, BSr).length > 0 || be(S, config_3, t))) return;
    if (!d && _?.isStartupEntry?.(n.name, config_3) !== !0) return D(n, e, "not_startup_entry", r);
    let {
        name: name_2
      } = n,
      {
        url: url_2
      } = config_3;
    return {
      ...S,
      approvalSeesContent: !0,
      stillHeld: () => F0e.peek(H())?.read?.(name_2, url_2) !== void 0
    };
  } catch {
    return r;
  }
}
function D(n, e, reason_2, r) {
  return G(() => {
    let {
        config: config_4
      } = n,
      d = "url" in config_4 ? config_4.url : void 0,
      u = s_e(n, e) ?? q$.find(item => {
        let _ = `${item.connectorOrigin}${item.connectorPath}`;
        return item.toolName === e && (d === _ || d === `${_}/`);
      });
    if (u !== void 0 && u.recipientCheck === void 0) YDt().note(u, {
      state: "not_wrapped",
      reason: reason_2
    });
  }), r;
}
function be(n, e, t) {
  let {
    proxyFills: proxyFills
  } = n;
  if (proxyFills === void 0) return !1;
  return "headers" in e && kL(e.headers, BSr).length > 0 || t.some(item => item.name === proxyFills.toolName && typeof item.description === "string" && item.description.includes(proxyFills.descriptionIncludes));
}
var Ye = "anthropic/filledFromFileReference",
  je = "anthropic/hostFillsFileReference";
function vDn(n) {
  return n.config.type === "sdk" ? {
    [Ye]: "true"
  } : void 0;
}
function xQt(n, e) {
  return n !== void 0 && (qHt(e) || x(n));
}
function hpt(n, e) {
  return n !== void 0 && (i.CLAUDE_CODE_REMOTE || xQt(n, e));
}
function duo(n, e) {
  return n.mcpInfo?.fileReference === !0 && hpt(q$.find(item => item.toolName === n.mcpInfo?.toolName), e);
}
function XDt(n, e, t = "McpToolCallError") {
  return `${t}; its message (${e.length} characters) is not logged because errors from ${n.serviceName}'s ${n.toolName} tool can contain the file being uploaded. The tool result in this session's transcript shows the message, shortened if long.`;
}
var ve = /^[\r\n]*[A-Za-z0-9+/_-][A-Za-z0-9+/_\r\n-]*(?:=[\r\n]*){0,2}$/,
  We = 100,
  Xe = 16;
function re(n, e) {
  if (typeof n !== "string") return;
  let t = Buffer.from(n, "base64");
  if (nt(t) !== e.split(":")[1]) return;
  let r = o => o.replace(/[\s=]/g, "").replace(/-/g, "+").replace(/_/g, "/");
  return r(n) === r(t.toString("base64")) ? t.length : void 0;
}
function EDn(n, e, t, r, o) {
  let d = () => import("B:/~BUN/root/chunk-3rystsr1.js");
  if (e.refusesReferences) {
    let b = {
        validateInput: n.validateInput,
        call: n.call
      },
      detail = e.refusesReferences === "conflicting" ? "desktop_drive_fill_declaration_conflict" : e.refusesReferences === "not_filled_here" ? "gmail_entry_not_filled_here" : "desktop_drive_fill_not_declared";
    n.validateInput = async (p, T) => {
      let O = Me(e, p, !1);
      if (O === void 0) return (await b.validateInput?.(p, T)) ?? {
        result: !0
      };
      c(e.featureName, "not_available"), N(e, {
        stage: "plan",
        outcome: "refused",
        reason: "not_available",
        detail: detail,
        toolUseId: T.toolUseId
      });
      let {
        refusalText: refusalText
      } = await d();
      return {
        result: !1,
        message: refusalText(O, "not_available", {}),
        errorCode: 2,
        notAnError: !0
      };
    }, n.call = async (p, T, ...O) => {
      let h = Me(e, p, T.toolUseId !== void 0 && qHt(T.toolUseId));
      if (h === void 0) return ce(e, p, T, O[1], () => b.call(p, T, ...O));
      c(e.featureName, "not_available"), N(e, {
        stage: "fill",
        outcome: "refused",
        reason: "not_available",
        detail: detail,
        toolUseId: T.toolUseId,
        requestId: O[1]?.requestId
      });
      let {
        refusalText: refusalText_2
      } = await d();
      return {
        data: refusalText_2(h, "not_available", {})
      };
    };
    return;
  }
  let prompt = n.prompt;
  n.prompt = async b => {
    let s = await prompt(b),
      descriptionHint = e.descriptionHint;
    if (descriptionHint === void 0 || !Oe(e) || e.recipientCheck !== void 0 && Te(b.tools)) return s;
    return s === "" ? descriptionHint : `${descriptionHint} ${s}`;
  };
  let y = new Map(),
    _ = new Set(),
    k,
    E = new Map(),
    S = {
      validateInput: n.validateInput,
      call: n.call,
      askInputPreparer: n.askInputPreparer
    },
    w = b => b !== void 0 && qHt(b) ? t : S;
  n.validateInput = async (b, s) => {
    k = void 0;
    let p = E.size > 0 ? WZ(b, e) : [];
    for (let {
      value: value
    } of p) {
      if (typeof value !== "string") continue;
      let L = nt(Buffer.from(value, "base64")),
        W = E.get(L);
      if (W !== void 0 && !W.toolUses.has(s.toolUseId ?? "") && re(value, W.reference) !== void 0) E.delete(L);
    }
    let T = s.toolUseId === void 0 ? void 0 : y.get(s.toolUseId);
    if (s.toolUseId !== void 0 && T !== void 0 && !(e.approvalSeesContent && Fe(b, e, T.references) !== void 0)) y.delete(s.toolUseId);
    if (!Q(e)) {
      if (Se(e, b)) return {
        result: !1,
        message: await Ae(e, "plan", {
          toolUseId: s.toolUseId
        }),
        errorCode: 2,
        notAnError: !0
      };
      return (await w(s.toolUseId).validateInput?.(b, s)) ?? {
        result: !0
      };
    }
    let O = (await t.validateInput?.(b, s)) ?? {
      result: !0
    };
    if (!O.result) return O;
    Nwo(s.toolUseId);
    let h = Dys(e.recipientCheck === void 0 ? b : ke(b), e);
    if (!ne(h, e)) return O;
    if (e.recipientCheck !== void 0 && Te(s.options.tools)) {
      N(e, {
        stage: "plan",
        outcome: "refused",
        reason: "not_available",
        detail: "code_mode",
        toolUseId: s.toolUseId
      }), c(e.featureName, "not_available");
      let {
        refusalText: refusalText_3
      } = await d();
      return {
        result: !1,
        message: refusalText_3(e, "not_available", {
          case: "code_mode"
        }),
        errorCode: 2,
        notAnError: !0
      };
    }
    let {
        readReferencedFile: readReferencedFile,
        callBinding: callBinding
      } = await d(),
      V = Date.now(),
      M = await readReferencedFile(h, se(s), "check", e, {
        session: s.session,
        signal: s.abortController.signal
      }),
      checkReadMs = Date.now() - V;
    if ("refusal" in M) return N(e, {
      stage: M.beforeRead ? "plan" : "check",
      outcome: "refused",
      reason: M.refusal,
      detail: M.detail,
      fileRefPathKind: M.fileRefPathKind,
      checkReadMs: checkReadMs,
      toolUseId: s.toolUseId
    }), {
      result: !1,
      message: M.message,
      errorCode: 2,
      ...(M.notAnError && {
        notAnError: M.notAnError
      })
    };
    N(e, "files" in M ? {
      stage: "check",
      outcome: "passed",
      sizeBytes: M.files.reduce((acc, item) => acc + item.buf.length, 0),
      checkReadMs: checkReadMs,
      toolUseId: s.toolUseId
    } : {
      stage: "plan",
      outcome: "passed",
      detail: "host_fills",
      checkReadMs: checkReadMs,
      toolUseId: s.toolUseId
    });
    let references = "files" in M ? M.files.map(({
      entry: entry,
      reference: reference
    }) => ({
      entry: entry,
      reference: reference
    })) : M.references;
    if (s.toolUseId !== void 0 && references.length > 0) {
      if (y.size >= We) {
        let A = y.keys().next().value;
        if (A !== void 0) {
          if (y.delete(A), e.approvalSeesContent) {
            let L = _.values().next().value;
            if (_.size >= dPs && L !== void 0) _.delete(L);
            _.add(A);
          }
        }
      }
      if (_.delete(s.toolUseId), y.set(s.toolUseId, {
        references: references,
        checkReadMs: checkReadMs,
        ...(e.recipientCheck !== void 0 && {
          binding: callBinding(h, e, references)
        })
      }), e.approvalSeesContent && "files" in M) k = {
        fills: M.files.map(({
          entry: entry_2,
          reference: reference_2,
          buf: buf
        }) => ({
          entry: entry_2,
          reference: reference_2,
          base64: buf.toString("base64")
        })),
        toolUseId: s.toolUseId
      };
    }
    return O;
  };
  let checkPermissions = n.checkPermissions;
  if (n.checkPermissions = async (b, s) => {
    let p = s.toolUseId === void 0 ? void 0 : y.get(s.toolUseId);
    if (p?.binding !== void 0) p.binding = (await d()).callBinding(b, e, p.references);
    return checkPermissions.call(n, b, s);
  }, e.approvalSeesContent) {
    if (n.mcpInfo !== void 0) n.mcpInfo = {
      ...n.mcpInfo,
      remoteFileReferenceFill: !0
    };
    let backfillObservableInput = n.backfillObservableInput;
    n.backfillObservableInput = p => {
      let T = backfillObservableInput?.call(n, p),
        O = new Map(k === void 0 ? [] : WZ(p, e).map(({
          entry: entry_3,
          value: value_2
        }) => [entry_3, value_2]));
      if (k !== void 0 && k.fills.every(item => O.get(item.entry) === item.reference)) {
        if (x(e)) {
          p[e.argument] = tZt(p, e, new Map(k.fills.map(item => [item.entry, item.base64])))[e.argument];
          for (let h of k.fills) {
            let F = h.reference.split(":")[1] ?? "",
              z = E.get(F);
            E.delete(F), E.set(F, {
              reference: h.reference,
              toolUses: (z?.toolUses ?? new Set()).add(k.toolUseId)
            });
          }
          for (let [h, F] of E) {
            if (E.size <= Xe) break;
            if (!F.toolUses.has(k.toolUseId)) E.delete(h);
          }
        }
        k = void 0;
      }
      return T;
    };
    let toAutoClassifierInput = n.toAutoClassifierInput;
    n.toAutoClassifierInput = p => {
      let T = Ce(p, e, E);
      return toAutoClassifierInput.call(n, T.size === 0 ? p : tZt(p, e, T));
    };
  }
  let toAutoClassifierInput_2 = n.toAutoClassifierInput;
  n.toAutoClassifierInput = b => {
    let s = toAutoClassifierInput_2.call(n, b);
    return ne(b, e) || Ce(b, e, E).size > 0 ? `${String(s)} (this reference ${e.referenceEffect})` : s;
  };
  let B = t.call;
  if (n.call = async (b, s, ...p) => {
    let {
      toolUseId: toolUseId
    } = s;
    for (let [C, I] of E) if (I.toolUses.delete(toolUseId ?? "") && I.toolUses.size === 0) E.delete(C);
    if (!(toolUseId !== void 0 && (y.has(toolUseId) || _.has(toolUseId) || qHt(toolUseId))) && !Q(e)) {
      if (Se(e, b)) return {
        data: await Ae(e, "fill", {
          toolUseId: toolUseId,
          requestId: p[1]?.requestId
        })
      };
      return ce(e, b, s, p[1], () => S.call(b, s, ...p));
    }
    Nwo(toolUseId ?? (p[1] === void 0 ? void 0 : r(p[1])));
    let h = Dys(e.recipientCheck === void 0 ? b : ke(b), e),
      F = toolUseId === void 0 ? void 0 : y.get(toolUseId),
      z = ne(h, e);
    if (e.recipientCheck !== void 0 && (s.innerCall === !0 || bV(s) !== void 0) && (z || F !== void 0)) {
      let {
        refusalText: refusalText_4
      } = await d();
      throw c(e.featureName, "not_available"), N(e, {
        toolUseId: toolUseId,
        requestId: p[1]?.requestId,
        stage: "fill",
        outcome: "refused",
        reason: "not_available",
        detail: "not_a_direct_call"
      }), new R(refusalText_4(e, "not_available", {
        case: "not_a_direct_call"
      }), "file reference refused");
    }
    let V = F !== void 0 && e.approvalSeesContent && !z ? Fe(h, e, F.references) : void 0,
      M = !z && F === void 0 && toolUseId !== void 0 && _.has(toolUseId) && (!Q(e) || qDt(e) !== void 0 || e.stillHeld?.() === !1 || e.recipientCheck !== void 0),
      j = e.recipientCheck === void 0 || F === void 0 || z ? void 0 : new Map(WZ(h, e).map(({
        entry: entry_4,
        value: value_3
      }) => [entry_4, value_3]));
    if (j !== void 0 && F !== void 0 && (V === void 0 || F.references.some(({
      entry: entry_5,
      reference: reference_3
    }) => re(j.get(entry_5), reference_3) === void 0))) {
      let {
        refusalText: refusalText_5
      } = await d();
      return c(e.featureName, "not_available"), N(e, {
        toolUseId: toolUseId,
        requestId: p[1]?.requestId,
        checkReadMs: F.checkReadMs,
        stage: "fill",
        outcome: "refused",
        reason: "not_available",
        detail: "call_changed"
      }), {
        data: refusalText_5(e, "not_available", {
          case: "call_changed"
        })
      };
    }
    if (V === void 0 && !z && !M) {
      if (e.recipientCheck !== void 0) return ce(e, h, s, p[1], () => B(h, s, ...p));
      let C = Dwo(e.flag);
      if (!(C === !0 && De(Y => Y.mayLogTypedRow(e))) || !x(e)) {
        if (C === null && x(e)) G(() => {
          let Y = YDt();
          Y.note(e, {
            state: "undecided",
            reason: Y.undecidedReason()
          });
        });
        return B(h, s, ...p);
      }
      let P = He(h, e);
      return P === void 0 ? B(h, s, ...p) : Ne(e, P, s, p[1], () => B(h, s, ...p));
    }
    let Z = {
        toolUseId: toolUseId,
        requestId: p[1]?.requestId,
        checkReadMs: F?.checkReadMs
      },
      {
        readReferencedFile: readReferencedFile_2,
        callBinding: callBinding_2,
        gmailShapeRefusal: gmailShapeRefusal,
        recipientsNotShown: recipientsNotShown,
        refusalText: refusalText_6
      } = await d(),
      K = (reason_3, detail_2, fileRefPathKind) => N(e, {
        ...Z,
        stage: "fill",
        outcome: "refused",
        reason: reason_3,
        detail: detail_2,
        fileRefPathKind: fileRefPathKind
      });
    if (!Q(e)) return c(e.featureName, "not_available"), K("not_available", ue(e)), {
      data: refusalText_6(e, "not_available", {})
    };
    let pe = V === void 0 && !M ? void 0 : qDt(e) ?? (e.stillHeld?.() === !1 ? "entry_not_held" : void 0);
    if (pe !== void 0) return c(e.featureName, "not_available"), K("not_available", pe), {
      data: refusalText_6(e, "not_available", {})
    };
    if (F?.binding !== void 0 && callBinding_2(h, e, F.references) !== F.binding) return c(e.featureName, "not_available"), K("not_available", "call_changed"), {
      data: refusalText_6(e, "not_available", {
        case: "call_changed"
      })
    };
    if (M && e.recipientCheck !== void 0) return c(e.featureName, "not_available"), K("not_available", "record_dropped"), {
      data: refusalText_6(e, "not_available", {
        case: "record_dropped"
      })
    };
    let oe = V === void 0 ? void 0 : recipientsNotShown(h, e.recipientCheck),
      ge = V === void 0 || oe !== void 0 || e.recipientCheck === void 0 ? void 0 : gmailShapeRefusal(h, e);
    if (oe !== void 0 || ge !== void 0) {
      let C = ge ?? {
        error: "not_available",
        case: oe
      };
      return c(e.featureName, C.error), K(C.error, C.case), {
        data: refusalText_6(e, C.error, C)
      };
    }
    let ae = h,
      fillMs,
      sizeBytes = V,
      J = !1;
    if (V === void 0) {
      let C = Date.now(),
        I = await readReferencedFile_2(h, se(s), "send", e, {
          session: s.session,
          signal: s.abortController.signal
        }, F?.references);
      if (fillMs = Date.now() - C, "refusal" in I) {
        if (K(I.refusal, I.detail, I.fileRefPathKind), I.notAnError) return {
          data: I.message
        };
        throw new R(I.message, "file reference refused");
      }
      if ("files" in I) ae = tZt(h, e, new Map(I.files.map(({
        entry: entry_6,
        buf: buf_2
      }) => [entry_6, buf_2.toString("base64")]))), sizeBytes = I.files.reduce((acc, {
        buf: buf_3
      }) => acc + buf_3.length, 0);else if (!Q(e)) return c(e.featureName, "not_available"), K("not_available", ue(e)), {
        data: refusalText_6(e, "not_available", {})
      };else ae = h, J = !0;
    }
    if (e.stillHeld?.() === !1) return c(e.featureName, "not_available"), K("not_available", "entry_not_held"), {
      data: refusalText_6(e, "not_available", {})
    };
    let Re = J ? {
        [je]: "true"
      } : o,
      de = Date.now(),
      ye = {
        ...Z,
        ...Be(s, p[1], de),
        ...(J ? {
          stage: "host_fill"
        } : {
          stage: "fill",
          outcome: "filled",
          fillMs: fillMs,
          sizeBytes: sizeBytes
        })
      },
      le;
    try {
      le = await B(ae, Re === void 0 ? s : {
        ...s,
        mcpRequestMeta: {
          ...s.mcpRequestMeta,
          ...Re
        }
      }, ...p);
    } catch (error) {
      let callMs = Date.now() - de;
      throw G(() => {
        let result = Ue(error, s.abortController.signal);
        if (J) ;else if (result === "aborted" || result === "auth_failed") c(e.featureName, result);else m(e.featureName, result);
        N(e, {
          ...ye,
          result: result,
          callMs: callMs
        });
      }), error;
    }
    let callMs_2 = Date.now() - de;
    return G(() => {
      let result_2 = Le(le, s.taskRegistry, toolUseId);
      if (J) ;else if (result_2 === "auth_failed") c(e.featureName, result_2);else if (result_2 === "uploaded") g(e.featureName);
      N(e, {
        ...ye,
        result: result_2,
        callMs: callMs_2
      });
    }), le;
  }, S.askInputPreparer !== t.askInputPreparer) n.askInputPreparer = async (b, s, p) => {
    if (!Q(e)) return w(p).askInputPreparer?.(b, s, p);
    return Nwo(p), t.askInputPreparer?.(b, s, p);
  };
}
function Te(n) {
  return n?.some(e => e.isMcp !== !0 && ht(e, co)) === !0;
}
function ke(n) {
  let e = {
    ...n
  };
  for (let t of Object.keys(e)) {
    let r = e[t];
    if (Array.isArray(r)) e[t] = [...r];
  }
  return e;
}
function Ce(n, e, t) {
  let r = new Map();
  if (t.size === 0) return r;
  for (let {
    entry: entry_7,
    value: value_4
  } of WZ(n, e)) {
    let u = typeof value_4 === "string" ? t.get(nt(Buffer.from(value_4, "base64"))) : void 0;
    if (u !== void 0 && re(value_4, u.reference) !== void 0) r.set(entry_7, u.reference);
  }
  return r;
}
function Fe(n, e, t) {
  let r = new Map(t.map(({
      reference: reference_4
    }) => [reference_4.split(":")[1] ?? "", reference_4])),
    o;
  for (let {
    value: value_5
  } of WZ(n, e)) {
    let u = typeof value_5 === "string" ? r.get(nt(Buffer.from(value_5, "base64"))) : void 0,
      y = u === void 0 ? void 0 : re(value_5, u);
    if (y !== void 0) o = (o ?? 0) + y;
  }
  return o;
}
function G(n) {
  try {
    n();
  } catch {}
}
function Ue(n, e) {
  if (e.aborted) return "aborted";
  if (Ge(n)) return "auth_failed";
  return n instanceof qy ? "error_result" : "call_failed";
}
function Le(n, e, t) {
  if (n.urlElicitationDeclined !== void 0) return "auth_failed";
  return we(e, t) ? "backgrounded" : "uploaded";
}
function Ge(n) {
  if (n instanceof oS) return !0;
  if (!(n instanceof Error)) return !1;
  if ("code" in n && n.code === "CLAUDEAI_BEARER_REJECTED") return !0;
  return n instanceof R && /^(McpError|ProtocolError) -32042$/.test(n.telemetryMessage);
}
function we(n, e) {
  return e !== void 0 && Object.values(n.all()).some(item => item.type === "mcp_task" && item.toolUseId === e);
}
function De(n) {
  try {
    return n(YDt());
  } catch {
    return !1;
  }
}
function He(n, e) {
  try {
    let t = WZ(n, e).flatMap(({
        value: value_6
      }) => typeof value_6 === "string" && ve.test(value_6) ? [value_6] : []),
      r = e.wrongArguments.map(item => n[item]).find(item => typeof item === "string" && ve.test(item)),
      o = t.length > 0 ? t : typeof r === "string" ? [r] : [];
    if (o.length > 0) {
      let sizeBytes_2 = 0;
      for (let y of o) {
        let _ = 0;
        for (let k = 0; k < y.length; k++) {
          let E = y.charCodeAt(k);
          _ += Number(E !== 10 && E !== 13 && E !== 61);
        }
        sizeBytes_2 += Math.floor(_ * 3 / 4);
      }
      return {
        stage: "typed_base64",
        sizeBytes: sizeBytes_2
      };
    }
    let d = e.textArgument === void 0 ? void 0 : n[e.textArgument];
    return typeof d === "string" ? {
      stage: "typed_text",
      sizeBytes: Buffer.byteLength(d, "utf8")
    } : void 0;
  } catch {
    return;
  }
}
function ce(n, e, t, r, o) {
  let d = n.recipientCheck === void 0 ? void 0 : He(e, n);
  return d === void 0 || !De(u => ee(n) !== "policy_never_served" && u.mayLogTypedRow(n)) ? o() : Ne(n, d, t, r, o);
}
async function Ne(n, e, t, r, o) {
  let {
      toolUseId: toolUseId_2
    } = t,
    u = Date.now(),
    y = {
      ...e,
      ...Be(t, r, u),
      ...(n.recipientCheck !== void 0 && {
        offered: n.descriptionHint !== void 0 && n.refusesReferences === void 0 && t.innerCall !== !0 && bV(t) === void 0 && Dwo(n.flag) === !0 && x(n)
      }),
      toolUseId: toolUseId_2,
      requestId: r?.requestId
    },
    _;
  try {
    _ = await o();
  } catch (error) {
    let callMs_3 = Date.now() - u;
    throw G(() => N(n, {
      ...y,
      result: Ue(error, t.abortController.signal),
      callMs: callMs_3
    })), error;
  }
  let callMs_4 = Date.now() - u;
  return G(() => N(n, {
    ...y,
    result: Le(_, t.taskRegistry, toolUseId_2),
    callMs: callMs_4
  })), _;
}
function Be(n, e, t) {
  let r = Date.parse(e?.timestamp ?? "");
  if (!Number.isSafeInteger(e?.toolInputStreamMs) || !Number.isFinite(r) || n.innerCall === !0) return {};
  return {
    toolInputStreamMs: e?.toolInputStreamMs,
    waitMs: Math.max(0, t - r)
  };
}
function N(n, e) {
  l(n.uploadEvent, {
    stage: f(e.stage),
    ...(e.outcome !== void 0 && {
      outcome: f(e.outcome)
    }),
    ...(e.reason !== void 0 && {
      reason: A7(e.reason)
    }),
    ...(e.detail !== void 0 && {
      detail: A7(e.detail)
    }),
    ...(e.fileRefPathKind !== void 0 && {
      fileRefPathKind: A7(e.fileRefPathKind)
    }),
    ...(e.result !== void 0 && {
      result: f(e.result)
    }),
    ...(e.checkReadMs !== void 0 && {
      checkReadMs: e.checkReadMs
    }),
    ...(e.fillMs !== void 0 && {
      fill_ms: e.fillMs
    }),
    ...(e.callMs !== void 0 && {
      callMs: e.callMs
    }),
    ...(e.sizeBytes !== void 0 && {
      size_bytes: e.sizeBytes
    }),
    ...(e.toolInputStreamMs !== void 0 && {
      tool_input_stream_ms: e.toolInputStreamMs
    }),
    ...(e.waitMs !== void 0 && {
      wait_ms: e.waitMs
    }),
    ...(e.offered !== void 0 && {
      offered: e.offered
    }),
    toolUseID: _e(e.toolUseId),
    requestId: _e(e.requestId)
  });
}
function ne(n, e) {
  return WZ(n, e).some(item => wJe(item.value)) || e.wrongArguments.some(item => wJe(n?.[item]));
}
var Ie = /^sha256:[0-9a-f]{64}:(?:[A-Za-z]:)?\//;
function Me(n, e, t) {
  return q$.find(item => item.toolName === n.toolName && (t ? ne(e, item) : item.recipientCheck !== void 0 && WZ(e, item).some(item => typeof item.value === "string" && Ie.test(item.value)) || (WZ(e, item).some(item => wJe(item.value)) || item.wrongArguments.some(item => {
    let d = e?.[item];
    return typeof d === "string" && Ie.test(d);
  })) && x(item)));
}
function te(n, e) {
  let t = e.desktopMark !== void 0 && Reflect.get(n, e.desktopMark) === !0,
    r = e.desktopHostFillMark === void 0 ? void 0 : Reflect.get(n, e.desktopHostFillMark),
    o = t && r !== void 0 && r !== !1 ? "conflicting" : t ? "fill" : r === !0 ? "hostFill" : void 0;
  if (!Object.hasOwn(n, "connectorUrl")) return o;
  let d = Reflect.get(n, "connectorUrl"),
    u = `${e.connectorOrigin}${e.connectorPath}`;
  if (d !== u && d !== `${u}/`) return;
  let y = Ze(n, "fileReferenceFill"),
    _ = Object.hasOwn(n, "fileReferenceHostFill") ? Reflect.get(n, "fileReferenceHostFill") : void 0,
    k = y && _ !== void 0 && _ !== !1 ? "conflicting" : y ? "fill" : _ === !0 ? "hostFill" : void 0;
  return [[e.desktopMark, "fill"], [e.desktopHostFillMark, "hostFill"]].some(([S, w]) => S !== void 0 && Object.hasOwn(n, S) && Reflect.get(n, S) !== (k === w)) ? "conflicting" : k;
}
function Ze(n, e) {
  return e !== void 0 && Object.hasOwn(n, e) && Reflect.get(n, e) === !0;
}
function Se(n, e) {
  return (n.recipientCheck !== void 0 || x(n)) && ne(e, n);
}
async function Ae(n, stage, t) {
  c(n.featureName, "not_available"), N(n, {
    stage: stage,
    outcome: "refused",
    reason: "not_available",
    detail: ue(n),
    ...t
  });
  let {
    refusalText: refusalText_7
  } = await import("B:/~BUN/root/chunk-3rystsr1.js");
  return refusalText_7(n, "not_available", {});
}
function x(n) {
  return v(n.flag, !1);
}
function Q(n) {
  let e = pn(n.flag, !1);
  return e.value && Vy(e.source);
}
function ue(n) {
  return x(n) ? "flag_not_served" : "flag_off_at_fill";
}
var Qe = 1048576,
  en = 40,
  nn = 300000;
function TDn(n, e) {
  if (typeof e !== "string" || e.length <= Qe || !q$.some(x)) return n;
  return Math.max(n, Math.min(nn, Math.ceil(e.length / en)));
}
export { oFi, sFi, Dze, USr, o_e, Hoe, BSr, kL, F0e, qDt, YDt, uSa, s_e, kDn, Lze, vDn, xQt, hpt, duo, XDt, EDn, TDn };