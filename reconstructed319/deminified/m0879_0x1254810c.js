// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Ee, Rk, qR } from "B:/~BUN/root/chunk-game8aqv.js";
import { R, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { wcn, jVn, WVn } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { lN, Vie, WAe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { vn, WF, ho } from "B:/~BUN/root/chunk-wd9jb4af.js";
import { o_t } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Qr, _r, ql } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { zVn } from "B:/~BUN/root/chunk-sxvr9rzb.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { lU } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { $o, hf } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { gs } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { yr } from "B:/~BUN/root/chunk-44q965xg.js";
import { R0r, vNs, be, $4, ozn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { ap, v3, NX } from "B:/~BUN/root/chunk-m749kjym.js";
import { Fi } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { da } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { _2e } from "B:/~BUN/root/chunk-d1t1tzcz.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { oe, C, u, xt, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { resolve as y } from "path";
var Y = 268435456,
  D = Symbol("first line too long"),
  A = 65536,
  E,
  b,
  Q = p(() => u({
    type: T("control_request"),
    request: xt({
      subtype: T("initialize"),
      plugins: oe().optional()
    })
  }));
function wZs(e) {
  if (E) return;
  let n = x(e);
  E = Z(n).then(te, r => (n.error = r, c("sdk_launch_initialize", "stdin_error"), {
    kind: "absent"
  })).catch(() => (m("sdk_launch_initialize", "parse_threw"), {
    kind: "absent"
  })), E.then(() => j(n));
}
function kZs(e) {
  if (b) return;
  let n = x(e);
  j(n);
}
function vZs(watcher) {
  let n = b;
  if (!n || !n.pumping || n.capped || n.adopted || n.watch) return;
  let r = {
    watcher: watcher,
    held: [],
    heldChars: 0,
    passing: !1
  };
  n.watch = r;
  for (let s of n.stash.splice(0)) G(n, s);
  if (n.ended || n.error !== void 0) watcher.ended();
  return () => F(n, r);
}
function RVr() {
  return E ?? Promise.resolve(void 0);
}
function AVr() {
  let e = b;
  if (!e || e.adopted) return;
  if (e.watch) F(e, e.watch);
  return e.adopted = !0, ne(e);
}
function Ajo(e) {
  let n = C(o_t()).optional().safeParse(e);
  if (!n.success) return !1;
  let r = n.data;
  if (r === void 0 || r.length === 0) return;
  let s = ql(),
    l = s?.preEnterOriginalCwd ?? s?.originalCwd ?? Ee(),
    o = new Set(Rk().map(item => y(l, item))),
    f = new Set(qR().map(item => y(l, item)));
  return r.every(item => item.skipMcpDiscovery ? f.has(y(l, item.path)) : o.has(y(l, item.path)));
}
function x(e) {
  let n = {
    generator: e(),
    stash: [],
    inflight: void 0,
    ended: !1,
    error: void 0,
    adopted: !1,
    capped: !1,
    pumping: !1,
    watch: void 0
  };
  return b = n, n;
}
async function Z(e) {
  let n = "";
  for (;;) {
    let r = n.indexOf(`
`);
    if (r !== -1) {
      let l = n.slice(0, r);
      if (l.trim() !== "") return l;
      n = n.slice(r + 1);
      continue;
    }
    if (n.length > Y) return e.capped = !0, D;
    e.inflight = e.generator.next();
    let s = await e.inflight;
    if (e.inflight = void 0, s.done) return e.ended = !0, null;
    e.stash.push(s.value), n += s.value;
  }
}
async function j(e) {
  e.pumping = !0;
  try {
    while (!e.adopted && !e.ended && !e.capped && e.error === void 0) {
      e.inflight = e.generator.next();
      let n = await e.inflight;
      if (e.inflight = void 0, n.done) e.ended = !0;else G(e, n.value);
    }
  } catch (n) {
    e.inflight = void 0, e.error = n;
  }
  if (e.ended || e.error !== void 0) e.watch?.watcher.ended();
}
function G(e, n) {
  let watch = e.watch;
  if (!watch) {
    e.stash.push(n);
    return;
  }
  let s = 0;
  for (;;) {
    let o = n.indexOf(`
`, s);
    if (o === -1) break;
    let f = n.slice(s, o);
    s = o + 1;
    let h = !watch.passing && watch.heldChars + f.length <= A;
    if (watch.passing = !1, h && watch.watcher.takes(watch.held.join("") + f)) {
      watch.held = [], watch.heldChars = 0;
      continue;
    }
    O(e, watch), e.stash.push(f + `
`);
  }
  if (s === n.length) return;
  let l = s === 0 ? n : n.slice(s);
  if (watch.passing) {
    e.stash.push(l);
    return;
  }
  if (watch.held.push(l), watch.heldChars += l.length, watch.heldChars > A) O(e, watch), watch.passing = !0;
}
function O(e, n) {
  for (let r of n.held) e.stash.push(r);
  n.held = [], n.heldChars = 0;
}
function F(e, n) {
  if (e.watch !== n) return;
  O(e, n), e.watch = void 0;
}
async function* ne(e) {
  let n = !1;
  try {
    while (e.stash.length > 0) yield e.stash.shift();
    if (e.inflight) {
      await e.inflight.catch(() => {});
      while (e.stash.length > 0) yield e.stash.shift();
    }
    if (e.error !== void 0) throw e.error;
    if (e.ended) return;
    n = !0, yield* e.generator;
  } finally {
    if (!n && !e.ended) e.generator.return(void 0).catch(() => {});
  }
}
function te(e) {
  if (e === null) return t("--await-initialize: stdin ended before an initialize request arrived", {
    level: "warn"
  }), c("sdk_launch_initialize", "stdin_ended"), {
    kind: "absent"
  };
  if (e === D) return t("--await-initialize: first stdin line exceeds the line-size ceiling; not parsed", {
    level: "error"
  }), m("sdk_launch_initialize", "first_line_too_long"), {
    kind: "absent"
  };
  let n;
  try {
    n = _2e(ee(gs(e)));
  } catch {
    return m("sdk_launch_initialize", "first_line_not_json"), {
      kind: "violation",
      cause: "first_line",
      message: "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is not valid JSON."
    };
  }
  let r = Q().safeParse(n);
  if (!r.success) return m("sdk_launch_initialize", "first_line_not_initialize"), {
    kind: "violation",
    cause: "first_line",
    message: "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is a different message."
  };
  let s = C(o_t()).optional().safeParse(r.data.request.plugins);
  if (!s.success) return m("sdk_launch_initialize", "plugins_malformed"), {
    kind: "violation",
    cause: "plugins",
    message: "Error: initialize.plugins must be an array of { type: 'local', path: string, skipMcpDiscovery?: boolean } entries."
  };
  let l = s.data ?? [];
  return g("sdk_launch_initialize"), {
    kind: "applied",
    pluginDirs: l.filter(item => !item.skipMcpDiscovery).map(item => item.path),
    pluginDirsNoMcp: l.filter(item => item.skipMcpDiscovery).map(item => item.path)
  };
}
var H = 10485760,
  W = Symbol("stream-json messages of this process's stdin");
function EZs(e) {
  return typeof e !== "string" && W in e;
}
async function* SVt() {
  try {
    process.stdin.setEncoding("utf8"), yield* WVn(process.stdin);
  } catch (error) {
    if (!wcn(error)) throw error;
    t(`getInputPrompt: stream-json stdin unreadable: ${d(error)}`, {
      level: "error"
    }), a(Object.assign(Error("getInputPrompt: stream-json stdin unreadable"), {
      code: k(error)
    })), await ho(`Error: cannot read --input-format=stream-json messages from stdin (${k(error)}): stdin is unreadable. stream-json input requires a readable stdin for the lifetime of the session.`);
  }
}
async function TZs(e, n) {
  if (!process.stdin.isTTY && zVn() !== "mcp") {
    if (n === "stream-json") return Object.defineProperty(AVr() ?? SVt(), W, {
      value: !0
    });
    let r = "",
      s = o => {
        if (r.length + o.length > H) return process.stdin.off("data", s), vn(`Error: piped stdin input exceeds ${H / 1024 / 1024}MB. Pass large content as a file path in your prompt instead.`);
        r += o;
      };
    try {
      process.stdin.setEncoding("utf8"), process.stdin.on("data", s);
    } catch (error) {
      if (process.stdin.off("data", s), !wcn(error)) throw error;
      return t(`getInputPrompt: piped stdin unreadable: ${d(error)}`, {
        level: "error"
      }), a(Object.assign(Error("getInputPrompt: piped stdin unreadable"), {
        code: k(error)
      })), WF(`Warning: stdin is unreadable (${k(error)}), proceeding without piped input. ` + "If you piped input, it was not received \u2014 pass it as a prompt argument, or check that the process launching Claude Code wires stdin to a pipe or /dev/null."), e;
    }
    let l = await jVn(process.stdin, 3000);
    if (process.stdin.off("data", s), l) WF("Warning: no stdin data received in 3s, proceeding without it. If piping from a slow command, redirect stdin explicitly: < /dev/null to skip, or wait longer.");
    return [e, r].filter(Boolean).join(`
`);
  }
  return e;
}
var S = "[REDACTED]";
function z(e) {
  let n = e;
  for (let r = 0; n && r < 32; r++) {
    let def = n._zod.def;
    switch (def.type) {
      case "optional":
      case "nullable":
      case "default":
      case "prefault":
      case "catch":
      case "nonoptional":
      case "readonly":
        n = def.innerType;
        break;
      case "pipe":
        n = def.in?._zod.def.type === "transform" ? def.out : def.in;
        break;
      case "lazy":
        n = def.getter?.();
        break;
      default:
        return n;
    }
  }
  return;
}
function P(e, n) {
  let r = z(e);
  if (r?._zod.def.type !== "union") return r;
  let s = r._zod.def.options?.find(l => l.safeParse(n).success);
  return s && P(s, n);
}
function ie(e) {
  let n = e?._zod.def.type;
  return n !== void 0 && n !== "unknown" && n !== "any";
}
function re(e, n) {
  let r = P(e, n)?._zod.def;
  return r?.type === "array" ? r.element : void 0;
}
function N(e, n) {
  let r = z(e)?._zod.def;
  switch (r?.type) {
    case "boolean":
      return typeof n === "boolean";
    case "number":
      return typeof n === "number";
    case "enum":
      return Object.values(r.entries ?? {}).includes(n);
    case "literal":
      return r.values?.includes(n) ?? !1;
    case "union":
      return r.options?.some(s => N(s, n)) ?? !1;
    default:
      return !1;
  }
}
var B = new Set(["permissions.allow", "permissions.deny", "permissions.ask"]),
  se = /^mcp__[\w-]+(?:__(?:[\w.-]+|\*))?$/;
function ae() {
  return new Set([...(lU() ?? []).flatMap(item => [item.name, ...(item.aliases ?? [])]), Me, kt, Qr, _r]);
}
function de(e, n) {
  if (typeof e !== "string") return S;
  let {
    toolName: toolName,
    ruleContent: ruleContent
  } = yr(e);
  if (!(n.has(toolName) || se.test(toolName))) return S;
  return ruleContent === void 0 ? toolName : `${toolName}(${S})`;
}
var ce = "sandbox.ignoreViolations";
function le(e, n) {
  let r = P(n, e)?._zod.def;
  if (r?.type === "object" && r.shape) {
    let {
      shape: shape
    } = r;
    return Object.keys(e).filter(item => Object.hasOwn(shape, item)).map(item => [item, shape[item]]);
  }
  let {
    keyType: keyType,
    valueType: valueType
  } = r ?? {};
  if (r?.type === "record" && keyType && valueType && ie(z(valueType))) return Object.keys(e).filter(item => keyType.safeParse(item).success).map(item => [item, valueType]);
  return;
}
var ue = new Set(["sandbox.network.httpProxyPort", "sandbox.network.socksProxyPort"]);
function w(e, n, r, s) {
  switch (typeof e) {
    case "string":
    case "boolean":
      return N(n, e) ? e : S;
    case "number":
      return N(n, e) && !ue.has(r) ? e : S;
    case "undefined":
      return;
    case "object":
      break;
    default:
      return S;
  }
  if (e === null) return null;
  if (Array.isArray(e)) {
    if (B.has(r)) return e.map(item => de(item, s));
    let f = re(n, e);
    return f ? e.map(item => w(item, f, r, s)) : S;
  }
  if (B.has(r)) return S;
  let l = le(e, n);
  if (!l) return S;
  let o = e;
  if (r === ce) return l.map(([f, h]) => w(o[f], h, r, s));
  return Object.fromEntries(l.map(([f, h]) => [f, w(o[f], h, r ? `${r}.${f}` : f, s)]));
}
var q = 8192;
function fe(e) {
  let content = _(w(e, Vie(e), "", ae()));
  if (Buffer.byteLength(content) <= q) return {
    content: content,
    truncated: !1
  };
  let r = 0,
    s = 0;
  for (let l of content) {
    if (r += Buffer.byteLength(l), r > q) break;
    s += l.length;
  }
  return {
    content: content.slice(0, s),
    truncated: !0
  };
}
function U(e) {
  let {
      sources: sources,
      behavior: behavior
    } = ozn(),
    s = R0r(),
    entry = s.entry,
    o = s.state === "none" && entry?.path === void 0 && entry?.script === void 0 && $4() === "remote" && vNs().errors.some(item => WAe().chain.some(L => item.path === `policyHelpers.${L}`)),
    f = {
      "managed_settings.trigger": e,
      "managed_settings.sources": sources,
      "managed_settings.source_behavior": behavior,
      "managed_settings.helper.state": o ? "entry_invalid" : s.state,
      "managed_settings.helper.applied": s.applied
    };
  if (entry) {
    if (f["managed_settings.helper.entry"] = entry.key, entry.path !== void 0) f["managed_settings.helper.path"] = entry.path;else if (entry.script !== void 0) f["managed_settings.helper.script_sha256"] = nt(entry.script);
  }
  return f;
}
function v(e) {
  let n = e instanceof Error ? e.constructor.name : typeof e;
  a(new R(`managed_settings_resolved emit failed (${n})`, "managed_settings_resolved emit failed"));
}
function K() {
  let e = v3()?.OTEL_LOG_MANAGED_SETTINGS;
  for (let r of $o()) {
    if (hf.has(r)) continue;
    e = NX(be(r)?.env, r).OTEL_LOG_MANAGED_SETTINGS ?? e;
  }
  let n = ap();
  return Pe(e ?? (n ? n.OTEL_LOG_MANAGED_SETTINGS : i.OTEL_LOG_MANAGED_SETTINGS));
}
function J(e, n) {
  if (!n) delete e["managed_settings.resolved_sha256"], delete e["managed_settings.helper.script_sha256"];
}
function CZs() {
  let e = !1,
    n = null,
    r = l => {
      try {
        let o = U(l),
          f = be("policySettings");
        if (f) o["managed_settings.resolved_sha256"] = nt(_(lN(f)));
        let {
            "managed_settings.trigger": h,
            ...L
          } = o,
          I = _(L);
        if (I === n) return;
        n = I;
        let M = K();
        if (J(o, M), f && M) {
          let {
            content: content_2,
            truncated: truncated
          } = fe(f);
          o["managed_settings.settings"] = content_2, o["managed_settings.settings_truncated"] = truncated;
        }
        da("managed_settings_resolved", o).catch(v);
      } catch (error) {
        v(error);
      }
    },
    s = Fi.subscribe(l => {
      if (l === "policySettings" && e) r("change");
    });
  return r("startup"), e = !0, s;
}
function xjo(e) {
  try {
    let n = U("refused");
    J(n, K()), da("managed_settings_resolved", {
      ...n,
      "error.type": e
    }).catch(v);
  } catch (error) {
    v(error);
  }
}
export { wZs, kZs, vZs, RVr, AVr, Ajo, EZs, SVt, TZs, CZs, xjo };