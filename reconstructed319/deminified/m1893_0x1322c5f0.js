// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { lU, BTr, wn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { H9, H$, PTe } from "B:/~BUN/root/chunk-tdg0k3wq.js";
import { Nq } from "B:/~BUN/root/chunk-nwbzcxqm.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { mT } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
function g(e) {
  return Nq(e) ? e.message : "a value that is not a Claude Code error, so it is not shown";
}
var k = 1e4;
function N(e) {
  return e.length > 1000 && /^[A-Za-z0-9+/=]+$/.test(e.slice(0, 256));
}
function P(e) {
  let n = 0,
    i = 0,
    r = [e];
  while (r.length > 0) {
    if (++i > k) return 1 / 0;
    let o = r.pop();
    if (typeof o === "string") {
      if (!N(o)) n += o.length;
    } else if (o !== null && typeof o === "object") {
      let s = Array.isArray(o) ? o : Object.values(o);
      if (i + r.length + s.length > k) return 1 / 0;
      for (let u of s) r.push(u);
    }
  }
  return n;
}
function R(e) {
  return `Output too large to show here${Number.isFinite(e) ? ` (about ${en(e)})` : ""}. The whole output is in the Claude Code session on the computer running it.`;
}
function x(e, n) {
  let {
      preview: preview,
      hasMore: hasMore
    } = PTe(e, H$),
    o = Q(e, preview.length),
    s = n ? " The whole output is in the Claude Code session on the computer running it." : "";
  return `Output too large to show here (${en(Buffer.byteLength(e, "utf8"))}).${s} First ${en(H$)}:
${o}${hasMore ? `
...` : ""}`;
}
function j(e, n, i) {
  if (n === "") return;
  let r = H9(e.name, e.maxResultSizeChars, e.persistenceThresholdCeiling, e.skipAggregateToolResultBudget === !0),
    o = Number.isFinite(r) ? r : mT;
  return n.length <= o ? n : x(n, i);
}
function VKo(e, n) {
  if (e === Me || e === kt) return;
  return n !== null && typeof n === "object" && "result" in n && typeof n.result === "string" ? n.result : void 0;
}
function C(e, n) {
  if (e !== Me && e !== kt || n === null || typeof n !== "object" || !("persistedOutputPath" in n) || typeof n.persistedOutputPath !== "string" || n.persistedOutputPath === "") return;
  return "persistedOutputSize" in n && typeof n.persistedOutputSize === "number" ? n.persistedOutputSize : 1 / 0;
}
function cii(e, n, i) {
  if (n.servedText !== void 0) return {
    kind: "built",
    toolName: e.name,
    from: "servedText"
  };
  let r = C(e.name, i);
  if (r === void 0) return {
    kind: "built",
    toolName: e.name,
    from: n.mcpContent === !0 ? "mcpContent" : "toolOutput"
  };
  let text = n.resultBeforeReadBack === void 0 ? R(r) : w(e, n.resultBeforeReadBack, n.toolUseId, n.mcpContent === !0, !0);
  return text === void 0 ? void 0 : {
    kind: "stored",
    text: text
  };
}
function b(e, n, i, r, o) {
  if (n === "servedText") {
    let u = VKo(e.name, i);
    return u === void 0 ? void 0 : j(e, u, o);
  }
  let s = C(e.name, i);
  if (s !== void 0) return R(s);
  return w(e, i, r, n === "mcpContent", o);
}
function w(e, n, i, r, o) {
  try {
    let s = H9(e.name, e.maxResultSizeChars, e.persistenceThresholdCeiling, e.skipAggregateToolResultBudget === !0),
      u = Number.isFinite(s),
      l = u ? s : mT;
    if (!u) {
      let a = P(n);
      if (a > l * 10) return R(a);
    }
    let f = e.mapToolResultToToolResultBlockParam(n, i)?.content,
      d = Array.isArray(f) && (e.isMcp !== !0 || r),
      c = typeof f === "string" ? f : d ? f.filter(item => item?.type === "text" && typeof item.text === "string").map(item => item.text).join(`
`) : f !== void 0 && f !== null ? _(f) : "";
    if (c === "") return;
    return c.length <= l ? c : x(c, o);
  } catch (error) {
    t(`Could not build the Remote Control result text for a script's ${e.name} call; the Remote Control apps will show an empty result: ${g(error)}`, {
      level: "error"
    });
    return;
  }
}
var T = 1e4,
  y = 50000,
  m = 1e4;
function Lbn(e, n, i) {
  let chars = 0,
    values = 0,
    s = [e];
  while (s.length > 0 && chars <= n && values <= i) {
    let u = s.pop();
    if (values++, typeof u === "string") chars += u.length;else if (Array.isArray(u)) {
      for (let l of u) if (s.push(l), values + s.length > i) return {
        chars: chars,
        values: values + s.length
      };
    } else if (u !== null && typeof u === "object") for (let l in u) {
      if (!Object.hasOwn(u, l)) continue;
      if (chars += l.length, s.push(u[l]), values + s.length > i || chars > n) return {
        chars: chars,
        values: values + s.length
      };
    }
  }
  return {
    chars: chars,
    values: values
  };
}
function A(e, n) {
  if (e.isMcp === !0 || C(e.name, n) !== void 0) return;
  let i = e.stripForCreation ? e.stripForCreation(n) : e.stripToolUseResultAtCreation && e.stripForStorage ? e.stripForStorage(n, !1) : n,
    r = Lbn(i, y, m);
  return r.chars <= y && r.values <= m ? i : void 0;
}
function U(e) {
  if (typeof e === "string") {
    if (e.length <= T) return;
    let l = Q(e, T);
    return `${l}
\u2026[${e.length - l.length} more characters, not sent to Remote Control]`;
  }
  if (Array.isArray(e)) {
    let l = Lbn(e, y, m);
    return l.chars > y || l.values > m ? "[too large to send to Remote Control]" : void 0;
  }
  if (e === null || typeof e !== "object") return;
  let n = e,
    i = !1,
    r = 0,
    o = 0,
    s = {},
    u = Object.keys(n);
  for (let [l, f] of u.entries()) {
    let d = n[f],
      c = d;
    if (typeof d === "string" && d.length > T) {
      let p = Q(d, T);
      c = `${p}
\u2026[${d.length - p.length} more characters, not sent to Remote Control]`;
    } else if (d !== null && typeof d === "object") {
      let p = Lbn(d, T, m);
      if (p.chars > T || p.values > m) c = "[too large to send to Remote Control]";
    }
    let a = Lbn(c, y, m);
    if (r + a.chars + f.length > y || o + a.values + 1 > m) {
      let p = u.length - l;
      return s["[not sent to Remote Control]"] = `${p} more ${p === 1 ? "field" : "fields"}`, s;
    }
    if (r += a.chars + f.length, o += a.values + 1, c !== d) i = !0;
    s[f] = c;
  }
  return i ? s : void 0;
}
function bya(e, n, i) {
  let {
      visibleToRemoteClients: visibleToRemoteClients,
      remoteToolResult: remoteToolResult,
      hiddenToolUseIds: hiddenToolUseIds,
      isVirtual: isVirtual,
      detachedToolUseIds: detachedToolUseIds,
      withheldScriptToolUseId: withheldScriptToolUseId,
      ...d
    } = e,
    c = visibleToRemoteClients === !0,
    a = c ? remoteToolResult : void 0,
    tool_use_result = D(a, d.toolUseResultStripped === !0, d.toolUseResult, i);
  return n(d).map(item => {
    if (item.type !== "user") return item;
    let F = c ? B(item) : item,
      hidden_tool_use_ids = I(item, hiddenToolUseIds);
    return {
      ...F,
      ...(tool_use_result !== void 0 && {
        tool_use_result: tool_use_result
      }),
      ...(a !== void 0 && O(item, a, d, i)),
      ...(hidden_tool_use_ids.length > 0 && {
        hidden_tool_use_ids: hidden_tool_use_ids
      }),
      ...(isVirtual === !0 && {
        is_virtual: !0
      })
    };
  });
}
function D(e, n, i, r) {
  if (n || e === null || typeof e !== "object" || !("kind" in e) || e.kind !== "built" || !("toolName" in e) || typeof e.toolName !== "string" || !("from" in e) || e.from !== "toolOutput") return;
  try {
    let o = wn(r ?? [], e.toolName);
    return o === void 0 ? void 0 : A(o, i);
  } catch (error) {
    t(`Could not build the structured result of a script's ${e.toolName} call for Remote Control; the Remote Control apps get its text alone: ${g(error)}`, {
      level: "error"
    });
    return;
  }
}
function v(e, n, i, r, o, s) {
  if (e === null || typeof e !== "object" || !("kind" in e)) return;
  if (e.kind === "stored") return "text" in e && typeof e.text === "string" ? e.text : void 0;
  if (e.kind !== "built" || i || !("toolName" in e) || typeof e.toolName !== "string" || !("from" in e) || e.from !== "toolOutput" && e.from !== "mcpContent" && e.from !== "servedText") return;
  try {
    let u = wn(o ?? [], e.toolName);
    return u === void 0 ? void 0 : b(u, e.from, n, r, s);
  } catch (error) {
    t(`Could not build the Remote Control result text for a script's ${e.toolName} call; the Remote Control apps will show an empty result: ${g(error)}`, {
      level: "error"
    });
    return;
  }
}
function yZn(e, n, i) {
  let remoteToolResult_2 = e.remoteToolResult;
  if (e.visibleToRemoteClients !== !0 || remoteToolResult_2?.kind !== "built") return;
  try {
    let content = e.message.content,
      s = Array.isArray(content) ? content.find(item => item?.type === "tool_result") : void 0;
    if (s?.type !== "tool_result") return;
    let text_2 = v(remoteToolResult_2, e.toolUseResult, e.toolUseResultStripped === !0, s.tool_use_id, n, i);
    return text_2 === void 0 ? void 0 : {
      kind: "stored",
      text: text_2
    };
  } catch (error) {
    t(`Could not keep the Remote Control text of a script's ${typeof remoteToolResult_2.toolName === "string" ? remoteToolResult_2.toolName : "tool"} call when Claude Code dropped the call's result text to save space; the Remote Control apps will show an empty result for that call: ${g(error)}`, {
      level: "error"
    });
    return;
  }
}
function Sya(e, n, i) {
  let r = n.visibleToRemoteClients === !0 ? n.remoteToolResult : void 0,
    hidden_tool_use_ids_2 = I(e, n.hiddenToolUseIds),
    detached_tool_use_ids = M(n.detachedToolUseIds),
    u = n.withheldScriptToolUseId;
  return {
    ...e,
    ...(r !== void 0 && O(e, r, n, L(i))),
    ...(hidden_tool_use_ids_2.length > 0 && {
      hidden_tool_use_ids: hidden_tool_use_ids_2
    }),
    ...(detached_tool_use_ids.length > 0 && {
      detached_tool_use_ids: detached_tool_use_ids
    }),
    ...(typeof u === "string" && {
      withheld_script_tool_use_id: u
    })
  };
}
function L(e) {
  try {
    return [...(e ?? []), ...(BTr() ?? []), ...(lU() ?? [])];
  } catch (error) {
    return t(`Could not list the tools for a script's calls; the VS Code extension will show an empty result for some of them: ${g(error)}`, {
      level: "error"
    }), e ?? [];
  }
}
function I(e, n) {
  let content_2 = e.message.content;
  if (!Array.isArray(content_2)) return [];
  let r = new Set(content_2.flatMap(item => item?.type === "tool_result" ? [item.tool_use_id] : []));
  return M(n).filter(item => r.has(item));
}
function M(e) {
  return Array.isArray(e) ? e.filter(item => typeof item === "string") : [];
}
function O(e, n, i, r) {
  let content_3 = e.message.content;
  if (!Array.isArray(content_3)) return;
  return {
    message: {
      ...e.message,
      content: content_3.map(item => {
        if (item?.type !== "tool_result") return item;
        let content_4 = v(n, i.toolUseResult, i.toolUseResultStripped === !0, item.tool_use_id, r, !0);
        return content_4 === void 0 ? item : {
          ...item,
          content: content_4
        };
      })
    }
  };
}
function B(e) {
  if (!("tool_use_result" in e)) return e;
  let {
    tool_use_result: tool_use_result_2,
    ...i
  } = e;
  return i;
}
function wya(e, n) {
  let {
    visibleToRemoteClients: visibleToRemoteClients_2,
    ...r
  } = e;
  return n(r).map(item => {
    let s = item.type === "assistant" ? item.message.content : null;
    if (item.type !== "assistant" || !Array.isArray(s)) return item;
    return {
      ...item,
      message: {
        ...item.message,
        content: s.map(item => {
          if (item.type !== "tool_use") return item;
          let input;
          try {
            input = U(item.input);
          } catch (error) {
            t(`Could not shorten the input of a script's ${typeof item.name === "string" ? item.name : "tool"} call for Remote Control; the Remote Control apps get a note in place of the input: ${g(error)}`, {
              level: "error"
            }), input = "[not sent to Remote Control]";
          }
          return input === void 0 ? item : {
            ...item,
            input: input
          };
        })
      }
    };
  });
}
export { VKo, cii, Lbn, bya, yZn, Sya, wya };