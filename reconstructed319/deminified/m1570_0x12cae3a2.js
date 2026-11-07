// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Id } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { iB } from "B:/~BUN/root/chunk-09sn55yf.js";
import { yo } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { wC, mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { gT } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { sT, c1n, Qs, Iz } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ss, I4, Qt as name, Xe, iu, Bn, tv, Pie, Oie, _k, Vz, yWn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { dp, QFt } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { hue, wmt, rse } from "B:/~BUN/root/chunk-eak7wp7z.js";
import { Op, bw, Eue } from "B:/~BUN/root/chunk-jxvayzd7.js";
import { Mt, wue, o3, uR, mD, Dy, Yws, Mmt, bCe, d7e, c7e, wNn } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { Gg, dk, sh, se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { xv, SA } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { pmo } from "B:/~BUN/root/chunk-17caj8fw.js";
import { e6, j8, Alt } from "B:/~BUN/root/chunk-x29v5gdt.js";
import { Qle } from "B:/~BUN/root/chunk-syedbbsr.js";
import { Lm } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { qJe, YJe } from "B:/~BUN/root/chunk-cejfpzdt.js";
import { l1e, ARt, c1e } from "B:/~BUN/root/chunk-e2g6ph6a.js";
import { Wl, Vc, q2, X_, lo, dl, Wf, bE } from "B:/~BUN/root/chunk-detjgwj4.js";
import { NRt, f1e, FRt, tW, Skn, x8r, Hat, gIe } from "B:/~BUN/root/chunk-3vayx43w.js";
import { N0e } from "B:/~BUN/root/chunk-5x4j33v9.js";
import { E7e } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { JSs, aen, KJe, QBi, Dvr } from "B:/~BUN/root/chunk-0q69tvcp.js";
import { fkn, pkn, Err, a8r } from "B:/~BUN/root/chunk-n6zs7e8r.js";
import { Pp } from "B:/~BUN/root/chunk-qn600xqp.js";
import { vrr } from "B:/~BUN/root/chunk-b6a4drf5.js";
import { R1i, PLe } from "B:/~BUN/root/chunk-ymgf3kpk.js";
import { Vn } from "B:/~BUN/root/chunk-tacrdmts.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var P = new Set(["db_op", "collection", "doc_id", "query", "data", "writes", "as_level"]),
  Te = new Set(["method", "path", "body", "body_file", "mode", "script"]),
  Oe = ["read_db", "write_db", "call_endpoint", "run_script"];
function oe(n, e) {
  for (let [s, r] of bE(n, name, e)) {
    let a = s.indexOf(":"),
      l = a <= 0 ? "" : s.slice(a + 1).trim();
    if (l === "") continue;
    let u = s.slice(0, a).trim();
    if (P.has(u) || Te.has(u) || u === "action" && Oe.some(item => wC(l, item))) return r;
  }
  return;
}
var ve = () => import.meta.require("B:/~BUN/root/chunk-mqm0p7rv.js"),
  T = {
    name: name,
    mcpInfo: void 0,
    ruleContentField: void 0
  },
  e2 = {
    publish_version: {
      action: "publish",
      target: "slug"
    },
    edit_version: {
      action: "publish",
      target: "slug"
    },
    publish_files: {
      action: "publish",
      target: "slug"
    },
    copy_file: {
      action: "publish",
      target: "slug",
      source: "from_slug"
    },
    create_from_type: {
      action: "publish",
      type: "slug",
      givesStoredText: !0
    },
    declare_capabilities: {
      action: "publish",
      target: "slug"
    },
    get_artifact: {
      action: "read",
      target: "slug"
    },
    read_artifact: {
      action: "read",
      target: "slug"
    },
    read_shared_artifact: {
      action: "read",
      target: "slug"
    },
    list_artifacts: {
      action: "list"
    },
    list_types: {
      action: "list_types"
    },
    describe_type: {
      action: "describe_type",
      type: "slug"
    },
    guide: {
      givesStoredText: !0
    },
    pin_artifact: {
      action: "pin",
      target: "slug"
    },
    unpin_artifact: {
      action: "unpin",
      target: "slug"
    },
    read_comments: {
      action: "comments",
      target: "slug"
    },
    reply_comment: {
      action: "reply",
      target: "slug"
    },
    reply_shared_comment: {
      action: "reply",
      target: "slug"
    },
    resolve_comment: {
      action: "resolve",
      target: "slug"
    },
    watch: {
      action: "watch",
      target: "slug"
    },
    unwatch: {
      action: "unwatch",
      target: "slug"
    },
    upload_asset: {
      action: "upload_asset",
      target: "slug"
    },
    list_assets: {
      action: "list_assets",
      target: "slug"
    },
    read_asset: {
      action: "read_asset",
      target: "slug"
    },
    copy_asset: {
      action: "copy_from",
      target: "slug",
      source: "from"
    },
    delete_asset: {
      action: "delete_asset",
      target: "slug"
    },
    list_files: {
      action: "list_files",
      target: "slug"
    },
    read_file: {
      action: "read_file",
      target: "slug"
    },
    read_declaration: {
      action: "read",
      target: "slug"
    },
    describe_capabilities: {},
    authorize_upload: {
      action: "publish",
      target: "slug"
    },
    delete_artifact: {
      action: "delete",
      target: "slug"
    },
    db_write: {
      action: "write_db",
      target: "slug"
    },
    db_get: {
      action: "read_db",
      target: "slug"
    },
    db_list: {
      action: "read_db",
      target: "slug"
    },
    db_query: {
      action: "read_db",
      target: "slug"
    },
    db_usage: {
      action: "read_db",
      target: "slug"
    },
    db_whoami: {
      action: "read_db",
      target: "slug"
    },
    db_profiles: {
      action: "read_db",
      target: "slug"
    },
    db_rules_get: {
      action: "read_db",
      target: "slug"
    },
    db_str_replace: {
      action: "write_db",
      target: "slug",
      readsBack: !0
    },
    ...{}
  },
  Ie = {
    db_get: "get",
    db_list: "list",
    db_query: "query",
    db_profiles: "profiles",
    db_str_replace: "str_replace"
  },
  Pe = new Set(["slug", "shared_live", "owned_by", "asLevel"]),
  De = {
    db_get: {
      names: "document",
      takes: new Set(["path"])
    },
    db_list: {
      names: "collection",
      takes: new Set(["collection", "limit", "cursor"])
    },
    db_query: {
      names: "collection",
      takes: new Set(["collection", "where", "orderBy", "limit", "cursor"])
    },
    db_write: {
      names: "operations",
      takes: new Set(["ops", "idempotencyKey"])
    },
    db_str_replace: {
      names: "document",
      takes: new Set(["path", "field", "old_str", "new_str", "replace_all", "ifVersion", "idempotencyKey"])
    },
    db_profiles: {
      takes: new Set(["ids"])
    },
    db_usage: {
      takes: new Set()
    },
    db_whoami: {
      takes: new Set()
    },
    db_rules_get: {
      takes: new Set()
    }
  },
  Ne = new Set(["op", "path", "data", "ifVersion"]),
  Fe = new Set(["set", "merge", "update", "delete"]);
function ie(n) {
  if (typeof n !== "string") return !1;
  let e = n.lastIndexOf("/");
  return j8.test(n.slice(0, Math.max(e, 0))) && e6.test(n.slice(e + 1));
}
var X = "[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}",
  regExp = new RegExp(`^${X.replaceAll("A-F", "")}$`),
  regExp_2 = new RegExp(`^https://(?:preview\\.)?(?:claude\\.ai|claude\\.com|claude-ai\\.staging\\.ant\\.dev)/(?:code/(?:artifact|frame)|artifact)/(?:[A-Za-z0-9_-]*-)?(${X}|[1-9A-HJ-NP-Za-km-z]{22})(?:[/?#]|$)`),
  regExp_3 = new RegExp(`^https://(${X})\\.frame\\.(?:staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`);
function Pat(n) {
  let e = n.toLowerCase();
  if (regExp.test(e)) return e;
  let s = n.trim(),
    r = s.match(/^[^:/?#]+:\/\/[^/?#]*/)?.[0] ?? "",
    a = r.toLowerCase() + s.slice(r.length),
    l = a.match(regExp_2)?.[1];
  if (l !== void 0) return l.length === 22 ? I4(l) : l.toLowerCase();
  return a.match(regExp_3)?.[1]?.toLowerCase() ?? null;
}
function r8r(n, e, s) {
  let known = Object.hasOwn(e2, n),
    a = known ? e2[n] : {
      target: "slug"
    },
    l = D(e) ? e : {},
    input = {},
    unread = !known,
    d = !1,
    A = !1,
    rawUrl = a?.target === void 0 ? void 0 : l[a.target],
    rawSourceUrl = a?.source === void 0 ? void 0 : l[a.source];
  for (let [m, o] of [["url", a?.target], ["from_url", a?.source], ["type_url", a?.type]]) {
    let i = o === void 0 ? void 0 : l[o];
    if (typeof i !== "string") {
      if (i !== void 0 && i !== null) unread = !0, d ||= m === "from_url";
      continue;
    }
    let slug = Pat(i);
    if (slug === null) unread = !0, d ||= m === "from_url";else input[m] = Bn({
      slug: slug,
      env: ss()
    });
  }
  if (a?.action !== void 0) input.action = a.action;
  if (typeof l.title === "string") input.title = l.title;
  let w = a?.action === "read_db" || a?.action === "write_db",
    h = bw(l.ops);
  if (!w && typeof l.path === "string") input.path = l.path;
  if (Array.isArray(l.paths)) input.paths = l.paths;
  if (w) {
    let m = s?.op ?? Ie[n] ?? (h !== void 0 ? "batch" : void 0);
    if (m !== void 0) input.db_op = m;
    let o = s?.path ?? (typeof l.path === "string" ? l.path : void 0),
      i = De[n];
    if (A = i === void 0 || Object.keys(l).some(item => !Pe.has(item) && !i.takes.has(item)) || l.asLevel !== void 0 && !Alt.some(item => item === l.asLevel) || i.names === "document" && !ie(l.path) || i.names === "collection" && !(typeof l.collection === "string" && j8.test(l.collection)) || i.names === "operations" && !(h !== void 0 && h !== Op && h.length > 0 && h.every(item => D(item) && Object.keys(item).every(item => Ne.has(item)) && Fe.has(item.op) && ie(item.path))), typeof l.asLevel === "string") input.as_level = l.asLevel;
    let p = o === void 0 ? -1 : o.lastIndexOf("/");
    if (o !== void 0 && p > 0) input.collection = o.slice(0, p), input.doc_id = o.slice(p + 1);else if (typeof l.collection === "string") input.collection = l.collection;
  }
  if (typeof l.id === "string" && a?.action?.endsWith("_asset")) input.asset_id = l.id;
  if (a?.action === "upload_asset" || n === "publish_files") {
    let m = (Eue(l.files) ?? []).flatMap(item => D(item) && typeof item.path === "string" ? [item.path] : []);
    if (input.file_paths = m, m.length === 1) input.file_path = m[0];
  }
  return {
    input: input,
    unread: unread,
    known: known,
    ...(typeof rawUrl === "string" && {
      rawUrl: rawUrl
    }),
    ...(typeof rawSourceUrl === "string" && {
      rawSourceUrl: rawSourceUrl
    }),
    ...(d && {
      copies: !0
    }),
    ...(A && {
      dbUnread: !0
    }),
    ...((a?.readsBack === !0 || l.ifVersion !== void 0 || h === Op || (h ?? []).some(item => D(item) && item.ifVersion !== void 0)) && {
      readsBack: !0
    })
  };
}
function $e(n, e) {
  for (let [s, r] of n) if (e(s)) return r;
  return null;
}
function G(n, e) {
  for (let [s, r] of n) {
    let a = s.indexOf(":");
    if (a > 0 && e.includes(s.slice(0, a).trim())) return r;
  }
  return null;
}
function B(n) {
  if ((n.alwaysDenyRules.toolsNarrowing?.length ?? 0) === 0) return n;
  let {
    toolsNarrowing: toolsNarrowing,
    ...alwaysDenyRules
  } = n.alwaysDenyRules;
  return {
    ...n,
    alwaysDenyRules: alwaysDenyRules
  };
}
var slug_4 = "00000000-0000-4000-8000-000000000000";
function waa(n, e, s) {
  let {
      action: action,
      ...a
    } = e.input,
    l = e.input.url,
    slug_2 = typeof l === "string" ? Pat(l) : null,
    from_url = e.input.from_url,
    slug_3 = typeof from_url === "string" ? Pat(from_url) : null,
    rule = (s === "deny" ? lo(B(n), T) : dl(n, T)) ?? tW(n, e.input, s) ?? Skn(n, T, e.input, s) ?? Wf(n, T, a, s) ?? FRt(s === "deny" ? B(n) : n, T, e.input, s) ?? ((!e.known || x8r.has(String(e.input.action)) || e.readsBack === !0) && slug_2 !== null ? Hat(n, {
      slug: slug_2,
      env: ss()
    }, e.rawUrl ?? l, s) : null) ?? (slug_3 !== null && typeof from_url === "string" ? Hat(n, {
      slug: slug_3,
      env: ss()
    }, e.rawSourceUrl ?? from_url, s) : null);
  if (rule !== null) return {
    rule: rule,
    why: "named"
  };
  if (e.input.action === "run_script" || e.input.action === "call_endpoint") {
    let rule_2 = oe(s === "deny" ? B(n) : n, s) ?? G(bE(n, NRt.data, s), [...P, "action"]) ?? void 0;
    if (rule_2 !== void 0) return {
      rule: rule_2,
      why: "named"
    };
  }
  let y = Qle(e.input);
  if (D(y) && y !== e.input) {
    let {
        action: action_2,
        ...w
      } = y,
      rule_3 = Wf(n, T, Lm() ? y : w, s);
    if (rule_3 !== null) return {
      rule: rule_3,
      why: "named"
    };
  }
  if (e.dbUnread === !0) for (let c of [name, NRt.data]) {
    let rule_4 = G(bE(n, c, s), c === name ? [...P] : [...P, "action"]);
    if (rule_4 !== null) return {
      rule: rule_4,
      why: "unread"
    };
  }
  for (let name_2 of [name, ...Object.values(NRt)]) {
    let w = bE(n, name_2, s),
      rule_5 = e.unread ? G(w, ["url", "from_url", "type_url"]) : null;
    if (rule_5 !== null) return {
      rule: rule_5,
      why: "unread"
    };
    let m = {
        name: name_2,
        mcpInfo: void 0,
        ruleContentField: void 0
      },
      rule_6 = e.known ? null : [...w.values()][0] ?? (name_2 === name ? null : s === "deny" ? lo(B(n), m) : dl(n, m));
    if (rule_6 !== null) return {
      rule: rule_6,
      why: "unknown"
    };
  }
  if (e.unread && (!e.known || x8r.has(String(e.input.action)) || e.readsBack === !0 || e.copies === !0)) {
    let c = {
      slug: slug_4,
      env: ss()
    };
    for (let h of [e.rawUrl, e.rawSourceUrl, Bn(c)]) {
      let rule_7 = h === void 0 ? null : Hat(n, c, h, s);
      if (rule_7 !== null) return {
        rule: rule_7,
        why: "unread"
      };
    }
    let rule_8 = $e(bE(n, Vn, s), h => /^domain:(?:.*[.*])?claudeusercontent\.com$/i.test(h.trim()));
    if (rule_8 !== null) return {
      rule: rule_8,
      why: "unread"
    };
  }
  return null;
}
function he(n) {
  let e = n;
  if (D(n)) for (let [s, r] of Object.entries(n)) {
    let a = typeof r === "string" ? r.trimEnd() : "";
    if (!a.toLowerCase().endsWith("</invoke>")) continue;
    let l = a.slice(0, -9).trimEnd();
    if (l.toLowerCase().endsWith(`</${s.toLowerCase()}>`)) l = l.slice(0, -`</${s}>`.length).trimEnd();
    e = {
      ...(D(e) ? e : n),
      [s]: l
    };
  }
  return e;
}
function F(n, e, s, r) {
  let a = he(s),
    l = D(s) && Array.isArray(s.files) && s.files.length > 1 ? s.files : [],
    u = [s, ...(a === s ? [] : [a]), ...l.map(item => ({
      ...(D(s) ? s : {}),
      files: [item]
    }))].map(item => [item, void 0]),
    g = !D(s) ? [] : e === "db_str_replace" ? [{
      op: "update",
      path: s.path
    }] : e === "db_write" && Array.isArray(s.ops) ? s.ops.filter(D).flatMap(item => (item.op === "merge" ? ["set", "update"] : [item.op]).map(A => ({
      op: A,
      path: item.path
    }))) : [];
  for (let [d, A] of [...u, ...g.flatMap(({
    op: op,
    path: path
  }) => typeof op === "string" && typeof path === "string" ? [[s, {
    op: op,
    path: path
  }]] : [])]) {
    let y = waa(n, r8r(e, d, A), r);
    if (y !== null) return y;
  }
  return null;
}
function Ve() {
  let n = Object.values(NRt);
  return n.length < 2 ? n.join("") : `${n.slice(0, -1).join(", ")}, or ${n.at(-1)}`;
}
function ye(n) {
  return n === "unread" ? " Claude Code couldn't tell what this call names or does, so the rule applies to it." : n === "unknown" ? ` Claude Code doesn't know what this tool does, so every ${name} rule that names something in parentheses, and every rule on ${Ve()}, applies to it.` : "";
}
var we = new Set(["slug", "artifacts", "from_slug", "from", "shared_live", "contract", "title", "path", "paths", "files", "id", "collection", "op", "ops", "ifVersion", "asLevel"]),
  We = new Set([...we].map(item => item.toUpperCase()));
function wrr(n) {
  return n.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().toUpperCase();
}
function krr(n, e) {
  if (!D(n)) return;
  let s = e === void 0 ? [] : [e.arg, e.local, e.ref],
    r = s.map(item => item.toUpperCase());
  return [n, ...[n.files, n.ops, e && n[e.arg]].flat().filter(D)].flatMap(Object.keys).find(item => {
    let l = wrr(item);
    return !s.includes(item) && (r.includes(l) || !we.has(item) && We.has(l));
  });
}
var Ke = new Set(["publish_files", "declare_capabilities", "authorize_upload", ...[]]),
  He = new Set(["read", "comments", "read_db", "list_assets", "read_asset", "list_files", "read_file", "get_endpoints"]);
function Ye(n, e) {
  let file_paths = r8r("publish_files", n).input.file_paths;
  return Array.isArray(file_paths) && file_paths.every(item => typeof item === "string" && E7e(item, e));
}
function Ae(n) {
  return (n !== "laptop" || iu() === null ? dp("allow_cobalt_plinth", "Artifacts", "are") : null) ?? (SA() ? null : `The Artifact tool isn't available in this session, so the Artifacts MCP tools aren't available either.${n === "laptop" ? " Check /login and /config." : ""}`);
}
function N(n, e, s, r, a, l = !1) {
  let u = Ae(n);
  if (u !== null) return {
    behavior: "deny",
    message: u,
    decisionReason: {
      type: "other",
      reason: u
    }
  };
  let g = krr(r);
  if (g !== void 0) {
    let c = `${s} takes no argument spelled ${Pie(g)}. Spell argument names exactly as the tool lists them.`;
    return {
      behavior: "deny",
      message: c,
      decisionReason: {
        type: "other",
        reason: c
      }
    };
  }
  let d = e2[e];
  if (xv() && sh(a) && !l && (d === void 0 || d.action === "publish" || d.target !== void 0 || Z.has(d.action)) && !((He.has(d?.action) ? Se(e, r) : x(e, r)) && D(r) && (r.shared_live ?? "") === "" && r.contract === void 0 && d?.source === void 0 && d?.action !== "upload_asset" && d?.action !== "call_endpoint" && d?.action !== "run_script" && !Ke.has(e) && I(e, r) === null)) {
    let c = `In Cowork ${s} doesn't run here, where no one can answer an approval card. ${I(e, r) === null ? "Do not retry this call in this session." : "Tell the user in chat; do not retry it on this turn."}`;
    return {
      behavior: "deny",
      message: c,
      decisionReason: {
        type: "safetyCheck",
        reason: c,
        classifierApprovable: !1
      }
    };
  }
  let A = F(se(a), e, r, "deny");
  if (A !== null) return {
    behavior: "deny",
    message: `Permission to use ${s} has been denied: ${gIe(A.rule)} covers it.${ye(A.why)}`,
    decisionReason: {
      type: "rule",
      rule: A.rule
    }
  };
  if (n === "laptop" && e === "publish_files" && iu() !== null && !Ye(r, se(a))) {
    let c = `A Read rule refuses a file sent to ${s}, so nothing was read.`;
    return {
      behavior: "deny",
      message: c,
      decisionReason: {
        type: "other",
        reason: c
      }
    };
  }
  let y = e2[e]?.action;
  if (dk(a) && (L(e, r) || !Ee.has(y) || y === "resolve" || Z.has(y))) return {
    behavior: "deny",
    message: `${s} doesn't run in plan mode in this session, where no one can answer a prompt. Keep planning, and make this call once the plan is approved.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "This session cannot show prompts in plan mode, so this Artifacts call can run only after the plan is approved",
      classifierApprovable: !1
    }
  };
  return;
}
function ae(n) {
  let e = `Claude Code doesn't know what ${n} does yet, so each call needs your approval.`;
  return {
    behavior: "ask",
    message: e,
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "safetyCheck",
      reason: e,
      classifierApprovable: !1
    }
  };
}
function le(n, e, s) {
  let r = n.mcpInfo?.toolName,
    a = se(s);
  if (r === void 0 || a.mode === "plan" || Id(n, a) === "bypassPermissions" || !L(r, e)) return;
  let l = I(r, e),
    u = l === null ? null : W(e),
    g = u === null ? null : `the database of ${Bn(u)} \u2014 prompted by the new-comments notification; rows there are written by artifact viewers`,
    d = g !== null && l === "rows" ? `Claude wants to read ${g}.` : g !== null && l === "edit" ? `Claude wants to edit a document in ${g}, so only a person can approve this edit.` : `Each call of the Artifacts tool ${r} like this one is approved by itself.`;
  return {
    behavior: "ask",
    message: d,
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "safetyCheck",
      reason: d,
      classifierApprovable: l !== "edit"
    }
  };
}
function q(n, e, s, r) {
  return n === "laptop" && e === "publish_version" && D(s) && (s.slug ?? "") === "" && (s.shared_live ?? "") === "" && s.contract === void 0 && r.agentId === void 0 && c1n() && l1e(r) && ARt() && ![...Vc(se(r)), ...Wl(se(r))].some(item => X_(se(r), T, item) || Object.values(NRt).includes(item.ruleValue.toolName));
}
function ue(n, e) {
  return `The ${Pie(mn(n.rule.ruleValue))} ask rule from ${gT(n.rule.source)} covers ${e}, so this call needs your approval.${ye(n.why)}`;
}
function W(n) {
  let slug_5 = D(n) && typeof n.slug === "string" ? Pat(n.slug) : null;
  return slug_5 === null ? null : {
    slug: slug_5,
    env: ss()
  };
}
function U(n) {
  let e = W(n);
  return e === null ? Yws() : Dy(e.slug);
}
function ce(n) {
  return U(n) ? a8r.loaded() : a8r.read;
}
var J = "Nothing was read: while a new-comments notification is pending, reading an artifact's comments needs the user's approval first,",
  z = `${J} and Claude Code couldn't tell which artifact this call names. Pass the artifact's full id (a UUID) or its link.`,
  Ge = new Set(["upload_asset", "copy_from", "pin", "write_db", "call_endpoint", "run_script"]),
  o8r = new Set(["users", "org"]),
  Re = new Set([void 0, null, "", ...o8r, "others", "agent_scoped"]);
function I(n, e) {
  let s = be(n);
  return s !== null && U(e) ? s : null;
}
function s8r(n) {
  let e = Object.hasOwn(e2, n) ? e2[n]?.action : "unknown";
  return e === "unknown" || e === "get_endpoints" || e === "call_endpoint" || e === "run_script" || be(n) !== null;
}
var qe = new Set(["read", "read_file", "read_asset", "list", "list_files", "list_types", "describe_type"]),
  ze = new Set(["get_artifact", "read_declaration", "list_artifacts", ...[]]);
function Y5o(n) {
  let {
    action: action_3,
    givesStoredText: givesStoredText
  } = e2[n] ?? {};
  return s8r(n) || !(givesStoredText === !0 || qe.has(action_3)) ? null : ze.has(n) ? "cannot" : "by_mark";
}
function be(n) {
  let {
    action: action_4,
    readsBack: readsBack
  } = e2[n] ?? {};
  return readsBack === !0 ? "edit" : action_4 === "read_db" ? "rows" : action_4 === "comments" ? "comments" : null;
}
function L(n, e) {
  return Ge.has(e2[n]?.action) || n === "declare_capabilities" || e2[n]?.source !== void 0 || e2[n]?.action === "publish" && xv() && !x(n, e) || !D(e) || !Re.has(e.shared_live) || I(n, e) !== null;
}
var de = new Set(["users", "org", "others", "agent_scoped", "public"]),
  V = "(unrecognized address)",
  Je = ", anyone may be a viewer, not only the user's colleagues: internal code and infrastructure detail count as sensitive";
function je(n) {
  let e = typeof n === "string" ? Pat(n) : null,
    s = e === null ? void 0 : te().ownCreatedSlugs.get(e);
  return s?.wrotePage === !0 && s.env === ss();
}
function ke(n) {
  return n === null ? "" : ` [requested after a new-comments notification${n === "rows" ? ": rows are written by artifact viewers" : n === "comments" ? ": the comment text it ingests is written by artifact viewers" : ""}]`;
}
function kaa(n, e, s, r) {
  let {
      input: input_2,
      unread: unread_2,
      copies: copies
    } = r8r(n, e),
    g = aen(n, e),
    d = !g && (typeof input_2.url === "string" || unread_2),
    A = d ? _e(input_2.url) : "",
    y = ke(I(n, e)),
    c = r.statesAudience && D(e) ? e.shared_live : void 0,
    w = c === void 0 || c === null || c === "",
    h = (g || d) && !r.readOnly && w && rse(),
    m = c !== void 0 && c !== null && c !== "" ? de.has(c) ? String(c) : "unknown" : d && !r.statesAudience && !r.readOnly ? "unknown" : h ? "agent_scoped" : void 0,
    o = m === void 0 ? "" : ` [${c === void 0 && !h ? "shared" : "shared-live"}: ${m}${c === void 0 && !h ? "" : m === "agent_scoped" || !Re.has(m) ? Je : ""}]`,
    {
      shared_live: shared_live,
      ...p
    } = D(e) ? e : {},
    f = s(r.statesAudience && de.has(shared_live) ? p : e),
    R = typeof input_2.from_url === "string" || copies === !0 ? ` [copies from: ${tv(input_2.from_url, V)}]${_e(input_2.from_url).replace("[ownership:", "[copy source:").replace("[artifact created", "[copy source: created")}` : "",
    S = g ? ` \u2192 a new ${m === void 0 ? "private " : ""}artifact${n === "create_from_type" ? ` from the Artifact type ${tv(input_2.type_url, V)}` : ""}` : d ? ` \u2192 ${tv(input_2.url, V)}` : "";
  return `${name} ${typeof input_2.action === "string" ? input_2.action : "tool"}${r.readOnly ? " [read-only]" : ""}${A}${o}${y}${R}${S}, as Claude wrote it: ${Vz(Oie(iB(typeof f === "string" ? f : _(f)).replace(N0e, "?")).replace(_k, " "))}`;
}
function i8r(n, e) {
  let s = D(e) ? e.slug : void 0,
    r = typeof s === "string" ? Pat(s) : null;
  return n === "create_from_type" || JSs.has(n) && (r === null || te().reservedMints.has(r));
}
function j(n, e) {
  return i8r(n, e) ? QFt() : null;
}
function N4t(n, e, s) {
  let r = j(n, e);
  if (r === null) return;
  let a = `Claude wants to create a new artifact on claude.ai. ${r}`;
  return pkn(s) ?? {
    behavior: "ask",
    message: a,
    ...fkn,
    decisionReason: {
      type: "safetyCheck",
      reason: a,
      classifierApprovable: !1
    }
  };
}
function fe(n, e) {
  let s = e2[n]?.target,
    r = he(e),
    a = s !== void 0 && D(r) ? r[s] : void 0;
  return typeof a === "string" ? Pat(a) : null;
}
function Q(n, e) {
  let s = e2[n]?.target,
    r = s !== void 0 && D(e) ? e[s] : void 0,
    slug_6 = typeof r === "string" ? Pat(r) : null,
    l = slug_6 === null ? void 0 : te().ownPublishedSlugs.get(slug_6);
  return slug_6 !== null && l?.byPerson === !0 ? {
    slug: slug_6,
    env: l.env
  } : null;
}
function Se(n, e) {
  let s = Q(n, e);
  if (s !== null && iu() !== null) return !0;
  let r = s === null ? void 0 : Mt(s.slug);
  return r?.mode === "owner" && r.probeFailed !== !0;
}
function x(n, e) {
  let s = Q(n, e);
  return s !== null && Se(n, e) && !d7e(s.slug);
}
var Z = new Set([]),
  Ee = new Set([...Z, "list", "list_types", "describe_type", "resolve", "unpin", "unwatch", void 0]),
  pe = new Set(["publish_version", "edit_version", "publish_files", "reply_comment"]);
function P_a(n, e) {
  let s = Iz(n) ? "runner" : ve()?.isArtifactsMcpLaptopEntry(n) === !0 ? "laptop" : null;
  if (s === null || e.mcpInfo === void 0) return;
  if (s === "runner") {
    e.mcpInfo = {
      ...e.mcpInfo,
      standsInForBuiltIn: !0
    };
    let o = e.call;
    e.call = async (...i) => {
      let p = PLe();
      try {
        return await o.apply(e, i);
      } catch (error) {
        if (R1i(error)) te().mcpEntryRowNotServed = p ?? null;
        throw error;
      }
    };
  }
  let toolName = e.mcpInfo.toolName;
  if (!Object.hasOwn(e2, toolName)) e.requiresUserInteraction = () => !0, e.suppressesAlwaysAllowRule = () => !0;
  let suppressesAlwaysAllowRule = e.suppressesAlwaysAllowRule;
  e.suppressesAlwaysAllowRule = (o, i) => L(toolName, o) || j(toolName, o) !== null || suppressesAlwaysAllowRule?.call(e, o, i) === !0;
  let ignoresWholeToolAllowRule = e.ignoresWholeToolAllowRule;
  e.ignoresWholeToolAllowRule = o => L(toolName, o) || j(toolName, o) !== null || ignoresWholeToolAllowRule?.call(e, o) === !0;
  let u = `the Artifacts tool ${toolName}`,
    {
      checkPermissions: checkPermissions,
      permissionCheckFailureDecision: permissionCheckFailureDecision,
      toAutoClassifierInput: toAutoClassifierInput
    } = e;
  e.toAutoClassifierInput = o => {
    try {
      let i = D(o) ? {
        ...o
      } : {};
      return kaa(toolName, i, p => toAutoClassifierInput.call(e, D(p) ? p : {}), {
        statesAudience: e.inputJSONSchema?.properties?.shared_live !== void 0,
        readOnly: e.isReadOnly(i)
      });
    } catch {
      return t(`[artifacts-mcp] the classifier's line for ${toolName} could not be built`, {
        level: "warn"
      }), `${name} ${e2[toolName]?.action ?? "tool"}${uR({
        role: void 0
      })} [shared: unknown]${ke(I(toolName, {}))} \u2192 ${V}, as Claude wrote it: (unreadable arguments)`;
    }
  };
  let y = new Set(),
    c = new Set(),
    w = new Map();
  e.hookMatcherFamilyNames = o => {
    let i = f1e(T, r8r(toolName, o).input);
    if (!Object.hasOwn(e2, toolName)) return [name, ...Object.values(NRt)];
    return i === void 0 ? [name] : Lm() ? [name, i.tool.name] : [i.tool.name, name];
  }, e.checkPermissions = async (updatedInput, i) => {
    let p = s === "laptop" ? Q(toolName, updatedInput) : null;
    if (p !== null && iu() === null && Ae(s) === null && krr(updatedInput) === void 0 && F(se(i), toolName, updatedInput, "deny") === null) await Pp(p, i, "artifacts-mcp-published");
    let f = N(s, toolName, u, updatedInput, i, q(s, toolName, updatedInput, i));
    if (f !== void 0) return f;
    if (toolName === hue) {
      let v = W(updatedInput);
      if (v === null && U(updatedInput)) return {
        behavior: "deny",
        message: z,
        decisionReason: {
          type: "other",
          reason: z
        }
      };
      let Y = v === null ? null : await ce(updatedInput)?.decide(i, v, {
        replyGrant: null,
        threadId: () => D(updatedInput) && typeof updatedInput.thread === "string" ? updatedInput.thread : void 0,
        lateDeny: () => N(s, toolName, u, updatedInput, i) ?? null,
        askRule: re => F(re, toolName, updatedInput, "ask")?.rule ?? dl(re, e),
        updatedInput: () => {
          return;
        }
      });
      if (Y !== null && Y !== void 0) return Y;
    }
    let R = Object.hasOwn(e2, toolName) ? await checkPermissions.call(e, updatedInput, i) : ae(u),
      S = N(s, toolName, u, updatedInput, i, q(s, toolName, updatedInput, i));
    if (S !== void 0) return S;
    let b = F(se(i), toolName, updatedInput, "ask"),
      k = await vrr(R, b?.rule ?? null, async () => b === null ? "" : ue(b, u)),
      E = k.behavior === "deny" ? void 0 : N4t(toolName, updatedInput, i);
    if (E !== void 0) {
      if (E.behavior === "ask" && i.toolUseId !== void 0) ge(y, i.toolUseId);
      return E;
    }
    if (b !== null && k.behavior === "ask") return {
      ...k,
      suppressAlwaysAllowRule: !0
    };
    if (k.behavior !== "passthrough") return k;
    let C = se(i);
    if (C.mode === "plan") return k;
    if (q(s, toolName, updatedInput, i)) {
      if (i.toolUseId === void 0) te().routineRunTainted = !0;else c.add(i.toolUseId);
      return {
        behavior: "allow",
        updatedInput: updatedInput,
        decisionReason: {
          type: "other",
          reason: "A scheduled task's new artifact, private to the person"
        }
      };
    }
    let O = N(s, toolName, u, updatedInput, i);
    if (O !== void 0) return O;
    let slug_7 = toolName !== wmt && pe.has(toolName) ? fe(toolName, updatedInput) : null,
      seq = slug_7 === null ? void 0 : c7e(slug_7);
    if (slug_7 !== null && seq !== void 0 && i.toolUseId !== void 0 && Gg(i) && !yo(C.mode) && !Qs(i.agentContext)) {
      w.set(i.toolUseId, {
        slug: slug_7,
        seq: seq
      });
      let v = `A comment that may not be the person's own is pending on this artifact, so ${u} needs their answer.`;
      return {
        behavior: "ask",
        message: v,
        suppressAlwaysAllowRule: !0,
        decisionReason: {
          type: "safetyCheck",
          reason: v,
          classifierApprovable: !1
        }
      };
    }
    let ee = le(e, updatedInput, i);
    if (ee !== void 0) return ee;
    if (!Object.hasOwn(e2, toolName) || L(toolName, updatedInput)) return k;
    if (s === "laptop" && (toolName === "publish_version" || toolName === "edit_version") && x(toolName, updatedInput) && D(updatedInput) && (updatedInput.shared_live ?? "") === "" && updatedInput.contract === void 0 && !Qs(i.agentContext) && sT(i.messages)) return {
      behavior: "allow",
      updatedInput: updatedInput,
      decisionReason: {
        type: "other",
        reason: "Redeploy of an artifact already published this session"
      }
    };
    let Ce = e2[toolName]?.action;
    if (Ee.has(Ce)) return {
      behavior: "allow",
      updatedInput: updatedInput,
      decisionReason: {
        type: "other",
        reason: "Nobody is asked about this Artifacts action"
      }
    };
    let rule_9 = pe.has(toolName) && D(updatedInput) && (updatedInput.shared_live ?? "") === "" && seq === void 0 && !yo(C.mode) && (C.modeBeforeRewrite === void 0 || !yo(C.modeBeforeRewrite)) ? q2(C, T) : null;
    return rule_9 === null ? k : {
      behavior: "allow",
      updatedInput: updatedInput,
      decisionReason: {
        type: "rule",
        rule: rule_9
      }
    };
  }, e.permissionCheckFailureDecision = (o, i) => {
    let p = N(s, toolName, u, o, i);
    if (p !== void 0) return p;
    if (toolName === hue && U(o)) {
      let b = `${J} and the permission check for this call couldn't finish. Try once more; if it fails again, tell the user the comments couldn't be read.`;
      return {
        behavior: "deny",
        message: b,
        decisionReason: {
          type: "other",
          reason: b
        }
      };
    }
    let f = Object.hasOwn(e2, toolName) ? permissionCheckFailureDecision?.call(e, o, i) ?? le(e, o, i) : ae(u),
      R = f?.behavior === "deny" ? void 0 : N4t(toolName, o, i);
    if (R !== void 0) {
      if (R.behavior === "ask" && i.toolUseId !== void 0) ge(y, i.toolUseId);
      return R;
    }
    let S = F(se(i), toolName, o, "ask");
    if (S === null || f?.behavior === "deny") return f;
    return f?.behavior === "ask" ? {
      ...f,
      matchedAskRule: f.matchedAskRule ?? S.rule
    } : {
      behavior: "ask",
      message: `${ue(S, u)} This tool's permission check couldn't finish, so approving covers this call only.`,
      suppressAlwaysAllowRule: !0,
      decisionReason: {
        type: "rule",
        rule: S.rule
      }
    };
  };
  let h = e.call;
  e.call = async (o, i, p, f, R, S) => {
    let b = i.toolUseId !== void 0 && c.delete(i.toolUseId),
      k = i.toolUseId === void 0 ? void 0 : w.get(i.toolUseId);
    if (i.toolUseId !== void 0) w.delete(i.toolUseId);
    try {
      let E = await h.call(e, o, i, p, f, R, Qe(S, i, y));
      if (k !== void 0 && Gg(i) && !yo(se(i).mode)) wNn(k.slug, k.seq);
      if (b) {
        let {
          read: read,
          shared: shared
        } = Dvr(E.data);
        c1e(KJe(E.data)?.slug, read === void 0 ? "unknown_outcome" : read === "" ? "empty" : wue(read, shared).mode);
      }
      return E;
    } catch (error) {
      if (b) c1e(void 0, "unknown_outcome");
      throw error;
    }
  };
  let m = e2[toolName]?.action;
  if (m === "delete_asset" || m === "delete") {
    let {
      checkPermissions: checkPermissions_2,
      permissionCheckFailureDecision: permissionCheckFailureDecision_2
    } = e;
    e.checkPermissions = async (p, f) => me(e, await checkPermissions_2.call(e, p, f)), e.permissionCheckFailureDecision = (p, f) => {
      let R = me(e, permissionCheckFailureDecision_2?.call(e, p, f) ?? {
        behavior: "passthrough",
        message: `The permission check for ${u} couldn't finish.`,
        checkIncomplete: !0
      });
      return R.behavior === "passthrough" ? void 0 : R;
    };
  }
  if (toolName === hue) {
    let o = e.call;
    e.call = async (i, p, ...f) => {
      let R = W(i);
      if (R === null && U(i)) throw new Xe(z, "mcp_comments_slug_unread");
      let S = R === null ? void 0 : ce(i)?.consume(p, R.slug);
      if (S?.noticeStood === !0 && !S.judged) throw new Xe(`${J} and this call's permission check did not ask for it. Call read_comments again for this artifact so the user can be asked.`, "mcp_comments_notice_unchecked");
      let b = s === "laptop" ? await qJe(p.credentials) : null,
        k = await o.call(e, i, p, ...f),
        E = fe(toolName, i);
      if (E !== null && !Qs(p.agentContext)) {
        let C = b === null ? {
            account: void 0,
            tokens: YJe()
          } : await qJe(p.credentials),
          O = QBi(k.data, C, b === null || b.account !== void 0 && b.account === C.account);
        if (O === null) bCe(E, "fromRead");else Mmt(E, O);
      }
      return k;
    };
  }
}
function me(n, e) {
  if (e.behavior === "ask") return {
    ...e,
    defaultToNo: !0
  };
  if (e.behavior !== "passthrough" || n.mcpInfo?.effectiveMaxPermission !== "ask") return e;
  return {
    behavior: "ask",
    message: e.message,
    suppressAlwaysAllowRule: !0,
    defaultToNo: !0,
    ...(e.checkIncomplete === !0 && {
      checkIncomplete: !0
    })
  };
}
var Ze = 64;
function ge(n, e) {
  n.add(e);
  let s = n.values().next().value;
  if (n.size > Ze && s !== void 0) n.delete(s);
}
function Qe(n, e, s) {
  return e.toolUseId !== void 0 && s.delete(e.toolUseId) && Err(e) ? {
    ...n,
    mcpCallMeta: {
      ...n?.mcpCallMeta,
      [pmo]: !0
    }
  } : n;
}
function _e(n) {
  let e = typeof n === "string" ? Pat(n) : null,
    s = e === null ? void 0 : Mt(e);
  return `${je(n) ? yWn : uR(mD(s) ? s : {
    role: void 0
  })}${o3(s)}`;
}
export { e2, Pat, r8r, waa, wrr, krr, o8r, s8r, Y5o, kaa, i8r, N4t, P_a };