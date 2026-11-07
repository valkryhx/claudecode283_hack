// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Ca } from "B:/~BUN/root/chunk-65zedn3n.js";
var i = 1000,
  p = 32;
function HSa(e) {
  let {
    data: data
  } = e;
  if (data.type !== "repl_tool_call") return e;
  try {
    return {
      ...e,
      data: Smo(data)
    };
  } catch {
    return;
  }
}
function Smo(e) {
  let toolInput = c(e.toolInput),
    o = {
      type: e.type,
      toolName: e.toolName,
      toolInput: toolInput,
      toolUseId: e.toolUseId,
      phase: e.phase,
      ...(e.nativeTimeoutMs !== void 0 && {
        nativeTimeoutMs: e.nativeTimeoutMs
      }),
      ...(e.scriptStartedAt !== void 0 && {
        scriptStartedAt: e.scriptStartedAt
      }),
      ...(e.shellProgress !== void 0 && {
        shellProgress: {
          elapsedTimeSeconds: e.shellProgress.elapsedTimeSeconds,
          totalLines: e.shellProgress.totalLines
        }
      }),
      ...(typeof e.error === "string" && {
        error: n(e.error)
      }),
      ...(e.scriptHelper === !0 && {
        scriptHelper: !0
      })
    };
  return weakMap.set(o, toolInput), o;
}
function xca(e) {
  let t = new Map();
  for (let {
    data: data_2
  } of e) if (data_2.type === "repl_tool_call") {
    let input = weakMap.get(data_2);
    if (input === void 0) {
      try {
        input = c(data_2.toolInput);
      } catch {
        input = {};
      }
      weakMap.set(data_2, input);
    }
    t.set(data_2.toolUseId, {
      id: data_2.toolUseId,
      name: data_2.toolName,
      input: input,
      phase: data_2.phase,
      ...(data_2.shellProgress !== void 0 && {
        shellProgress: data_2.shellProgress
      })
    });
  }
  return [...t.values()];
}
function Pca(e) {
  return e === "start" || e === "executing";
}
function $Sa(e) {
  let t = xca(e),
    call = t.findLast(s => Pca(s.phase)) ?? t.at(-1);
  if (call === void 0) return;
  let r = e.findLast(s => s.data.type === "repl_tool_call" && s.data.toolUseId === call.id)?.data;
  return {
    call: call,
    scriptStartedAt: r?.type === "repl_tool_call" ? r.scriptStartedAt : void 0
  };
}
function USa(e, t) {
  try {
    let o = e?.getActivityDescription?.(t);
    return typeof o === "string" ? o : void 0;
  } catch {
    return;
  }
}
var weakMap = new WeakMap();
function c(e) {
  let t = {};
  if (typeof e !== "object" || e === null || Array.isArray(e)) return t;
  let o = e;
  for (let r of Object.keys(o).slice(0, p)) {
    let s = o[r];
    if (typeof s === "string") t[n(r)] = n(s);else if (typeof s === "number" || typeof s === "boolean") t[n(r)] = s;
  }
  return t;
}
function n(e) {
  let t = e.length > i ? `${Q(e, i)}\u2026` : e;
  return Ca(t);
}
export { HSa, Smo, xca, Pca, $Sa, USa };