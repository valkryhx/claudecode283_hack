// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pfi, m9o, Dsr, Ofi, h9o, o9r, ire } from "B:/~BUN/root/chunk-44wgxs8c.js";
import { jE, s1e, lkn, $K, ukn, i1e, a1e, P8, a3e, D4t, L4t, RRt } from "B:/~BUN/root/chunk-1pb6cmje.js";
import { lstat as pe, mkdir as ge, mkdtemp as we, writeFile as me } from "fs/promises";
import { tmpdir as ye } from "os";
import { join as z } from "path";
var W = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/webp": "webp",
    "image/gif": "gif"
  },
  Te = "Screenshot saved to: ",
  _e = 0,
  R;
function J() {
  return R ??= we(z(ye(), "claude-chrome-screenshots-")).catch(e => {
    throw R = void 0, e;
  }), R;
}
async function Ce(e) {
  if (e.getScreenshotSaveDir) {
    let t = e.getScreenshotSaveDir();
    if (t === void 0) return;
    return await ge(t, {
      recursive: !0,
      mode: 448
    }), t;
  }
  let n = await J();
  try {
    let t = await pe(n),
      getuid = process.getuid;
    if (t.isDirectory() && (getuid === void 0 || t.uid === getuid() && (t.mode & 511) === 448)) return n;
  } catch {}
  return R = void 0, J();
}
async function K(e, n) {
  if (e.isError || !e.content.some(item => item.type === "image")) return e;
  let t;
  try {
    t = await Ce(n);
  } catch (error) {
    return n.logger.warn(`[${n.serverName}] save_to_disk: could not prepare screenshot directory: ${error instanceof Error ? error.message : String(error)}`), {
      ...e,
      content: [...e.content, {
        type: "text",
        text: "Note: save_to_disk failed \u2014 the screenshot directory could not " + "be created. The image is included inline above."
      }]
    };
  }
  if (t === void 0) return {
    ...e,
    content: [...e.content, {
      type: "text",
      text: "Note: save_to_disk had no effect \u2014 screenshots are not " + "persisted to disk in this session. The image is included inline above; refer to it directly. Do not retry with save_to_disk."
    }]
  };
  let content = [],
    r = !1,
    a = !1;
  for (let i of e.content) {
    if (content.push(i), i.type !== "image") continue;
    let s = Object.hasOwn(W, i.mimeType) ? W[i.mimeType] : "png",
      d = z(t, `screenshot-${Date.now()}-${_e++}.${s}`);
    try {
      await me(d, Buffer.from(i.data, "base64"), {
        flag: "wx",
        mode: 384
      }), r = !0, content.push({
        type: "text",
        text: `${Te}${d}`
      });
    } catch (error) {
      a = !0, n.logger.warn(`[${n.serverName}] save_to_disk: failed to write screenshot: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  if (r) content.push({
    type: "text",
    text: "Include the saved path(s) in your response so they can be attached for the user."
  });
  if (a) content.push({
    type: "text",
    text: "Note: save_to_disk failed for at least one screenshot \u2014 it could " + "not be written to disk. The image is included inline above."
  });
  return {
    ...e,
    content: content
  };
}
var weakMap = new WeakMap();
function Q5r(e) {
  weakMap.delete(e), P(e), e.clearSelection?.();
}
var ve = 500,
  weakMap_2 = new WeakMap(),
  weakMap_3 = new WeakMap(),
  weakMap_4 = new WeakMap(),
  ie = 0;
function P(e) {
  weakMap_2.delete(e), weakMap_3.set(e, ie);
}
function X(e, n, t) {
  let o = weakMap_4.get(e);
  if (!o) o = new Map(), weakMap_4.set(e, o);
  let r = (o.get(n) ?? 0) + t;
  if (r > 0) o.set(n, r);else o.delete(n);
}
function ae(e, n, t) {
  let o = weakMap_2.get(e);
  if (!o) o = new Map(), weakMap_2.set(e, o);
  if (o.delete(n), o.set(n, t), o.size > ve) {
    let r = o.keys().next().value;
    if (r !== void 0) {
      let a = o.get(r)?.seq ?? 0;
      weakMap_3.set(e, Math.max(weakMap_3.get(e) ?? 0, a)), o.delete(r);
    }
  }
}
function Se(e) {
  let n = typeof e === "string" && e.trim() !== "" ? Number(e) : e;
  return typeof n === "number" && Number.isInteger(n) ? n : void 0;
}
function ke(e) {
  return typeof e?.input === "object" && e.input !== null ? e.input : {};
}
function Ie(e) {
  return e === void 0 || e === null ? "default" : Se(e);
}
function Q(e, n) {
  if (typeof e !== "string") return;
  let t = Ie(n.tabId);
  if (e === "navigate" && m9o(e, n)) return {
    historyMove: t ?? "default"
  };
  return t !== void 0 && Pfi.has(e) && !m9o(e, n) ? {
    set: t
  } : void 0;
}
function xe(e, n) {
  if (e !== "browser_batch") {
    let r = Q(e, n);
    return r ? [r] : [];
  }
  let o = (Array.isArray(n.actions) ? n.actions : []).flatMap(item => Q(item?.name, ke(item)) ?? []);
  return n.tabId === void 0 || n.tabId === null || typeof n.tabId === "number" ? o : o.filter(item => "historyMove" in item);
}
var G = e => e?.hostSessionId ?? e?.sessionScope?.sessionId;
function V(e, n, t, o) {
  let r = t.flatMap(item => "historyMove" in item ? [item.historyMove] : []);
  if (!n || r.length === 0) return;
  let a = weakMap_2.get(e)?.get(n),
    seq = Math.max(a?.seq ?? 0, o),
    s = a?.tabId === void 0 || r.some(item => item === "default" || item === a.tabId);
  ae(e, n, s ? {
    historyMoved: !0,
    seq: seq
  } : {
    ...a,
    seq: seq
  });
}
function Ee(e, n, t, {
  ownerBefore: ownerBefore,
  ...r
}) {
  let a = G(n);
  if (!a || !t.some(item => "set" in item)) return;
  let i = weakMap_2.get(e)?.get(a);
  if (i && i.seq > r.seq || r.seq <= (weakMap_3.get(e) ?? 0)) return;
  let tabId = i?.tabId,
    historyMoved = i?.historyMoved;
  for (let u of t) if ("set" in u) tabId = u.set === "default" ? void 0 : u.set, historyMoved = void 0;else if (tabId === void 0 || u.historyMove === "default" || u.historyMove === tabId) tabId = void 0, historyMoved = !0;
  ae(e, a, {
    ...r,
    ...(e.browserOfTab && {
      deviceId: tabId !== void 0 && e.browserOfTab(tabId) === ownerBefore ? ownerBefore : void 0
    }),
    ...(tabId !== void 0 && {
      tabId: tabId
    }),
    ...(historyMoved && {
      historyMoved: historyMoved
    }),
    tabGroupId: n?.sessionScope?.tabGroupId
  });
}
function M(e, n) {
  return U(e, n).replace(/[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}]/gu, " ").replace(/[\p{Quotation_Mark}\u02BA\u02DD\u02EE\u05F4\u2033\u3003]+/gu, "'").replace(/\s+/g, " ").replace(/this\s*computer/giu, "[?]").trim() || `Browser ${n + 1}`;
}
function U(e, n) {
  let t = (e.name ?? "").replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  if (!t) return `Browser ${n + 1}`;
  return t.length > 50 ? `${t.slice(0, 50)}\u2026` : t;
}
var de = new Map([["macOS", "macOS"], ["Windows", "Windows"], ["Linux", "Linux"], ["Chrome OS", "Chrome OS"], ["Chromium OS", "Chromium OS"], ["Android", "Android"], ["iOS", "iOS"], ["MacIntel", "macOS"], ["Win32", "Windows"], ["Linux x86_64", "Linux"], ["Linux aarch64", "Linux"], ["Linux armv8l", "Linux"]]);
function Re(e) {
  return e !== void 0 && de.get(e) || "unknown OS";
}
async function ue(e, n) {
  if (!n.listConnectedExtensions) return weakMap.set(n, !0), null;
  if (weakMap.get(n) && n.hasActiveSelection?.()) return null;
  weakMap.delete(n), P(n);
  let t = await n.listConnectedExtensions();
  if (t.length === 0) return null;
  if (await n.awaitPreviousBrowser?.()) return ue(e, n);
  let o = t.length > 1 ? await RRt(e.getLocalDeviceIds) : void 0,
    r = L4t(t, n.getSelectedDeviceId?.(), o);
  if (r.kind !== "ask") return weakMap.set(n, !0), null;
  let {
      candidates: candidates,
      localCount: localCount
    } = r,
    s = candidates.slice(0, 8),
    d = (f, g) => `${g + 1}. "${M(f, g)}" (${Re(f.osPlatform)})${o?.get(f.deviceId) === "remembered" ? " \u2014 seen recently, not answering right now" : ""} \u2014 deviceId: ${f.deviceId}`,
    u = s.slice(0, localCount).map(d),
    l = s.slice(localCount).map((item, index) => d(item, index + u.length)),
    c = localCount > 0 ? `Browsers on this computer:
${u.join(`
`)}

Other connected browsers:
${l.join(`
`) || (candidates.length === localCount ? "(none)" : "")}` : `Connected browsers:
${l.join(`
`)}`,
    b = candidates.length > s.length ? `
\u2026and ${candidates.length - s.length} more not shown` : "";
  return {
    content: [{
      type: "text",
      text: `${localCount > 0 ? `${candidates.length} Chrome browsers are connected to this account, ${localCount} of them on this computer, and none has been selected for this session. ` : "Multiple Chrome browsers are connected to this account and none has been selected for this session. "}${o9r(e.askUserToolName)}${localCount > 0 ? " List the browsers on this computer first, in the order below." : ""}

${c}${b}`
    }],
    isError: !0,
    _meta: _("no_browser_selected")
  };
}
function ce(e) {
  return JSON.stringify(e, (n, t) => typeof t === "string" && t.length > 256 ? `<${t.length} chars elided>` : t);
}
class F extends Error {}
function D(e, n, t, o, r, a) {
  if (e.isDisabled?.()) return Promise.reject(new F(`disabled: ${t} not sent`));
  return a ? n.callTool(t, o, r, a) : n.callTool(t, o, r);
}
async function j(e, n, t, o) {
  if (e.isDisabled?.()) return;
  try {
    if (!(await n.ensureConnected())) return;
    let a = (await D(e, n, "tabs_context_mcp", {}, t ? {
      ...t,
      permissionMode: "ask"
    } : void 0, o))?.result?.content;
    if (!Array.isArray(a)) return;
    let i;
    for (let s of a) {
      if (typeof s !== "object" || s === null || s.type !== "text" || typeof s.text !== "string") continue;
      try {
        let d = JSON.parse(s.text);
        if (Array.isArray(d.availableTabs)) {
          i = {
            ...d,
            availableTabs: d.availableTabs
          };
          break;
        }
      } catch {}
    }
    if (!i) return;
    return {
      tabs: i.availableTabs.filter(item => typeof item === "object" && item !== null && typeof item.tabId === "number" && typeof item.url === "string"),
      ...(typeof i.selectedTabId === "number" && {
        selectedTabId: i.selectedTabId
      }),
      ...(typeof i.tabGroupId === "number" && {
        tabGroupId: i.tabGroupId
      })
    };
  } catch (error) {
    e.logger.debug(`[${e.serverName}] tab lookup failed`, error);
    return;
  }
}
function H(e, deviceId) {
  try {
    return {
      tabId: e.tabId,
      origin: new URL(e.url).origin,
      ...(deviceId !== void 0 && {
        deviceId: deviceId
      })
    };
  } catch {
    return;
  }
}
function O(e) {
  return e.hasActiveSelection?.() === !1 ? void 0 : e.getSelectedDeviceId?.();
}
async function le(e, n, t) {
  let o = async s => {
      let probe = await j(e, n, t, s !== void 0 ? {
        requireDeviceId: s
      } : void 0);
      return probe && {
        probe: probe,
        deviceId: s
      };
    },
    r = O(n);
  if (r !== void 0) return o(r);
  let a = await o(void 0),
    i = O(n);
  if (i !== void 0) return o(i);
  return n.getSelectedDeviceId ? void 0 : a;
}
async function Y(e, n, t, o) {
  let r = await le(e, n, t);
  if (!r) return;
  let {
      probe: probe_2,
      deviceId: deviceId_2
    } = r,
    {
      tabs: tabs,
      selectedTabId: selectedTabId
    } = probe_2,
    u = G(t),
    l = e.useLastActedTab?.() ?? !0,
    c = u && l ? weakMap_2.get(n)?.get(u) : void 0,
    b = u !== void 0 && weakMap_4.get(n)?.has(u) === !0,
    p = !b && c?.tabId !== void 0 && (n.browserOfTab ? c.deviceId !== void 0 && c.deviceId === n.browserOfTab(c.tabId) : c.deviceId === deviceId_2) && (c.tabGroupId === void 0 || probe_2.tabGroupId === void 0 || c.tabGroupId === probe_2.tabGroupId) ? tabs.find(item => item.tabId === c.tabId) : void 0,
    fallback = p ? void 0 : !u ? "no_session" : !l ? "switched_off" : !c ? "never_acted" : b || c.historyMoved ? "history_moved" : c.tabId === void 0 ? "acted_on_main_tab" : "not_in_group",
    [g, target] = p ? [p, "agent_last_tab"] : selectedTabId !== void 0 ? [tabs.find(item => item.tabId === selectedTabId), "group_main_tab"] : [tabs.length === 1 ? tabs[0] : void 0, "only_tab"],
    w = deviceId_2 ?? (g && n.browserOfTab?.(g.tabId)),
    C = g && (w !== void 0 || !n.browserOfTab) ? H(g, w) : void 0;
  return o?.({
    ...(C && {
      target: target
    }),
    ...(fallback && {
      fallback: fallback
    })
  }), C;
}
async function Ae(e, n, t, o, r) {
  if (n.browserOfTab) {
    let d = (await j(e, n, t))?.tabs.find(u => u.tabId === o);
    return d && n.browserOfTab(o) === r ? H(d, r) : void 0;
  }
  let a = r !== void 0 ? await j(e, n, t, {
    requireDeviceId: r
  }).then(probe_3 => probe_3 && {
    probe: probe_3,
    deviceId: r
  }) : await le(e, n, t);
  if (!a || a.deviceId !== r) return;
  let i = a.probe.tabs.find(item => item.tabId === o);
  return i && H(i, r);
}
function $e(e) {
  if (typeof e !== "object" || e === null) return "";
  let t = e.error?.content;
  return typeof t === "string" || Array.isArray(t) ? t : "";
}
function fe(e) {
  let result = typeof e === "object" && e !== null && !("error" in e) ? e.result : void 0,
    resultErrored = typeof result === "object" && result !== null && (result.isError === !0 || result.is_error === !0);
  return {
    ok: result !== void 0 && result !== null && result !== !1 && !resultErrored,
    result: result,
    resultErrored: resultErrored
  };
}
async function Oe(e, n, t, tabId_2, text, expected_origin, requireDeviceId) {
  if (e.isDisabled?.()) return {
    ok: !1,
    reason: "disabled"
  };
  try {
    if (!(await n.ensureConnected())) return {
      ok: !1,
      reason: "disconnected"
    };
    let s = await D(e, n, "computer", {
        action: "type",
        text: text,
        tabId: tabId_2,
        ...(expected_origin !== void 0 ? {
          expected_origin: expected_origin
        } : {})
      }, {
        ...t,
        permissionMode: "skip_all_permission_checks",
        onPermissionRequest: void 0
      }, {
        singleBrowser: !0,
        ...(requireDeviceId !== void 0 && {
          requireDeviceId: requireDeviceId
        })
      }),
      {
        ok: ok,
        result: result_2,
        resultErrored: resultErrored_2
      } = fe(s);
    if (ok) return {
      ok: !0
    };
    let c = resultErrored_2 ? result_2.content ?? "" : "";
    if ((q($e(s)) || q(c)).startsWith("Origin mismatch")) return {
      ok: !1,
      reason: "origin_mismatch"
    };
    return {
      ok: !1,
      reason: "tool_error"
    };
  } catch (error) {
    return e.logger.debug(`[${e.serverName}] typeIntoTab failed`, error), {
      ok: !1,
      reason: error instanceof F ? "disabled" : error instanceof a3e ? "browser_changed" : "transport"
    };
  }
}
function Z(e, n, t, sessionId) {
  return {
    sessionId: sessionId,
    getActiveTabOrigin: async () => (await Y(e, n, t))?.origin,
    getActiveTab: r => Y(e, n, t, r),
    getSessionTab: (r, a) => Ae(e, n, t, r, a),
    typeIntoTab: (r, a, i, s) => Oe(e, n, t, r, a, i, s)
  };
}
function Pe(e, args) {
  if (e === "browser_batch" && Array.isArray(args.actions)) {
    let {
        save_to_disk: save_to_disk,
        ...a
      } = args,
      wantsSave = save_to_disk === !0,
      actions = args.actions.map(item => {
        if (typeof item !== "object" || item === null) return item;
        let u = item;
        if (typeof u.input !== "object" || u.input === null) return item;
        let {
          save_to_disk: save_to_disk_2,
          ...input
        } = u.input;
        if (save_to_disk_2 === !0 && u.name === "computer") wantsSave = !0;
        return {
          ...u,
          input: input
        };
      });
    return {
      args: {
        ...a,
        actions: actions
      },
      wantsSave: wantsSave
    };
  }
  if (!("save_to_disk" in args)) return {
    args: args,
    wantsSave: !1
  };
  let {
    save_to_disk: save_to_disk_3,
    ...args_2
  } = args;
  return {
    args: args_2,
    wantsSave: e === "computer" && save_to_disk_3 === !0
  };
}
function Me(e, n, t) {
  let o = Dsr(n, t).find(item => typeof item === "string" && (Ofi.has(item) || e.excludedTools?.has(item) === !0));
  if (o === void 0) return;
  return o === n ? `Unknown tool: ${o}` : `Unknown tool: ${o}. None of this browser_batch's actions ran; send the others again without it.`;
}
var L = new Map(),
  Fe = new Set(["javascript_tool"]);
function De(e, n) {
  if (h9o(e, n) !== void 0) return e;
  return Dsr(e, n).find(item => typeof item === "string" && Fe.has(item));
}
function Le(e, n, t) {
  let o = new Set([...ire.map(item => item.name), ...(e.hostTools?.() ?? []).map(item => item.name)]);
  return Dsr(n, t).find(item => typeof item === "string" && !o.has(item));
}
function ee(e, n, t, o, r = {
  done: !1
}) {
  if (!e.hostToolPutsSecretInPage) return;
  let a = e.fillExcludesPageCode?.() !== !1,
    i = e.hostToolPutsSecretInPage(n),
    s = !i && e.hostToolPreparesFill?.(n) === !0,
    d = i || s ? void 0 : De(n, t),
    u = i || s ? void 0 : d === "browser_batch" && n === "browser_batch" ? "browser_batch" : Le(e, n, t);
  if (!i && !s && d === void 0 && u === void 0) return;
  let l = [o?.hostSessionId, o?.sessionScope?.sessionId].map(item => item?.trim()).filter(item => Boolean(item));
  if (l.length === 0) return;
  let c = p => l.some(item => L.get(item)?.has(p) === !0),
    b = p => {
      for (let f of l) {
        let g = L.get(f) ?? new Set();
        L.set(f, g.add(p));
      }
    };
  if (u !== void 0) {
    if (a) return u === "browser_batch" ? "This browser_batch was refused and none of its actions ran: a batch must be a list of named actions with no browser_batch inside it." : Ne(n, u);
    if (u !== "browser_batch") b("script");
    return;
  }
  if (i || s) {
    if (c("script")) {
      if (!r.done) r.done = !0, e.onHostToolRefusedForPageCode?.(n, a);
      if (a) return `${n} was refused: this session has already run code in a page, and the two can't be combined in one session. Don't ask the person to send anything private in this chat or type it in this session's tabs instead: code already run in those tabs could capture it. If they want to do it themselves, ask them to open a new tab on their own. To use ${n}, ask the person to start a new session.`;
    }
    if (i) b("fill");
    return;
  }
  if (c("fill")) {
    if (!r.done) r.done = !0, e.onPageCodeAfterFill?.(d ?? n, a);
    if (a) return Be(n, d);
  }
  b("script");
  return;
}
var ne = "A tool used earlier in this session can't be combined with code run in a page.";
function Ne(e, n) {
  let t = JSON.stringify(n);
  return e === "browser_batch" ? `This browser_batch was refused and none of its actions ran, because ${t} isn't a browser tool this app knows, and it might run code in a page. Send the other actions again without ${t}.` : `${t} was refused: it isn't a browser tool this app knows, and it might run code in a page. Other browser tools still work.`;
}
function Be(e, n) {
  return e === "browser_batch" ? `This browser_batch was refused and none of its actions ran, because it includes ${n}. ${ne} Send the other actions again without ${n}. To run code in a page, ask the person to start a new session.` : `${e} was refused. ${ne} Other browser tools still work. To run code in a page, ask the person to start a new session.`;
}
function je(e, n) {
  let t = n?.onPermissionRequest,
    isDisabled = e.isDisabled;
  if (!n || !t || !isDisabled) return n;
  return {
    ...n,
    onPermissionRequest: async r => !isDisabled() && (await t(r)) && !isDisabled()
  };
}
var grr = async (e, n, toolName, o, r) => {
  let {
    args: args_3,
    wantsSave: wantsSave_2
  } = Pe(toolName, o);
  if (e.isDisabled?.()) return h(`Unknown tool: ${toolName}`);
  let s = je(e, r),
    d = Me(e, toolName, args_3);
  if (d !== void 0) return h(d);
  let sessionScope = s?.sessionScope;
  if (toolName === "switch_browser") return ze(e, n, sessionScope);
  if (toolName === "list_connected_browsers") return Ke(e, n, sessionScope);
  if (toolName === "select_browser") return Qe(e, n, args_3, sessionScope);
  let l = s?.hostSessionId ?? s?.sessionScope?.sessionId ?? "",
    c = {
      done: !1
    },
    b = ee(e, toolName, args_3, s, c);
  if (b !== void 0) return h(b);
  let p = h9o(toolName, args_3);
  if (p !== void 0) return h(p);
  if (e.handleHostTool && e.hostToolBypassesBrowser?.(toolName, args_3)) {
    let y = await e.handleHostTool(toolName, args_3, Z(e, n, s, l));
    if (y !== void 0) return y;
  }
  let f = {
      args: args_3
    },
    g = "connecting";
  try {
    let y = await n.ensureConnected();
    if (e.logger.silly(`[${e.serverName}] Server is connected: ${y}. Received tool call: ${$K(toolName)} with args: ${ce(args_3)}.`), y) {
      if (g = "connected", e.isDisabled?.()) return h(`Unknown tool: ${toolName}`);
      let w = await ue(e, n);
      if (w) return w;
      if (e.isDisabled?.()) return h(`Unknown tool: ${toolName}`);
      if (e.handleHostTool) {
        let T = ee(e, toolName, args_3, s, c);
        if (T !== void 0) return h(T);
        let v = await e.handleHostTool(toolName, args_3, Z(e, n, s, l));
        if (v !== void 0) return v;
      }
      if (g = "tabLookup", f = await Ue(e, n, toolName, args_3, s), g = "connected", f.error) return N(f, f.error);
      let C = await We(e, n, toolName, f.args, s);
      if (wantsSave_2) C = await K(C, e);
      return N(f, C);
    }
    return x(e, "not_connected", {
      toolName: toolName,
      sessionScope: sessionScope
    });
  } catch (error) {
    return N(f, He(error, toolName, e, sessionScope, g));
  }
};
function _(e) {
  return {
    [lkn]: e
  };
}
function h(text_2, _meta) {
  return {
    content: [{
      type: "text",
      text: text_2
    }],
    isError: !0,
    ...(_meta && {
      _meta: _meta
    })
  };
}
function He(e, toolName_2, t, sessionScope_2, r) {
  let a = r !== "tabLookup";
  if (t.logger.info(`[${t.serverName}] Error calling tool:`, e), e instanceof F) return h(`Unknown tool: ${toolName_2}`);
  if (e instanceof s1e && a) return h(oe(toolName_2), _("connection_lost_mid_call"));
  if (e instanceof s1e || e instanceof jE && r !== "connecting" && t.bridgeConfig) return h(te(toolName_2), _("connection_lost_before_call"));
  if (e instanceof jE) return x(t, "socket_error", {
    toolName: toolName_2,
    sessionScope: sessionScope_2
  });
  if (e instanceof i1e) return x(t, "no_extension_selected", {
    toolName: toolName_2,
    sessionScope: sessionScope_2
  });
  if (e instanceof a1e && e.routingAckReceived === !1) return h(`The "${toolName_2}" call was never delivered to the Chrome extension: the computer running that browser appears to be offline or asleep, or Chrome is not running there. This is a connection problem, not a permission or site-access issue. Ask the user to make sure that computer is awake and Chrome is open with the Claude extension, then retry.`, {
    isBridgeTimeout: !0,
    ..._("bridge_timeout_not_acked")
  });
  if (e instanceof a1e) return h(qe(toolName_2, e), {
    isBridgeTimeout: !0,
    ..._(e.routingAckReceived ? "bridge_timeout_acked" : "bridge_timeout_ack_unavailable")
  });
  if (e instanceof ukn) return h(`The "${toolName_2}" tool call was displaced by a newer call on the same browser connection before its result arrived. ` + 'The action may already have executed \u2014 check the page state (e.g. "get_page_text") before repeating it.', _("superseded"));
  if (e instanceof P8) return h(a && e.routingAckReceived === !0 ? oe(toolName_2) : `The "${toolName_2}" tool call failed because the Chrome extension disconnected mid-operation. This is usually transient (Chrome service worker restart, tab closed, network blip) and the extension often reconnects automatically. Retry the same tool call in a few seconds. If it keeps failing, ask the user to switch to Chrome (which wakes the extension) or check that the extension is still logged in.`, _("extension_disconnected_mid_call"));
  if (e instanceof D4t) return h(`The "${toolName_2}" tool call was not sent: ${e.message} Do not retry the identical call.`, _("request_too_large"));
  return h(te(toolName_2), _("unknown"));
}
function te(e) {
  return `The "${e}" tool call failed unexpectedly. This is usually transient \u2014 retry the same call in a few seconds.`;
}
function oe(e) {
  return `The "${e}" tool call was sent, but the connection was lost before its result came back. The action may have happened, may still be in progress or waiting for the user in Chrome, or may not have happened. If the call only reads the page, call it again. Otherwise do not repeat it yet: first check the page's current state (for example with "get_page_text" or a screenshot), and repeat the action only if it clearly did not take effect.`;
}
function qe(e, n) {
  let t = `The "${e}" tool did not respond in time.`,
    o = 'a lighter operation (e.g., "get_page_text" instead of a screenshot)';
  if (n.routingAckReceived === void 0) return `${t} The page or Chrome may be unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot), or ask the user to check Chrome.`;
  return `${t} If Chrome is on another computer, that computer may be closed or asleep. The page may also be loading or unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot) once. If that also gets no response, ask the user to check that the computer running Chrome is awake, that Chrome is open, and that nothing in Chrome is waiting for them.`;
}
function ikn(e) {
  let n = e?.result?.content;
  if (!Array.isArray(n)) return {};
  for (let t of n) {
    if (typeof t !== "object" || t === null || t.type !== "text" || typeof t.text !== "string") continue;
    let json = t.text;
    try {
      let r = JSON.parse(json);
      if (!Array.isArray(r.availableTabs)) continue;
      let tabId_3 = r.availableTabs.find(item => typeof item?.tabId === "number")?.tabId,
        tabGroupId = typeof r.tabGroupId === "number" ? r.tabGroupId : void 0;
      return {
        tabId: tabId_3,
        tabGroupId: tabGroupId,
        json: json
      };
    } catch {}
  }
  return {};
}
var be = Symbol("timed-out");
async function Ge(e, n) {
  let t;
  try {
    return await Promise.race([e, new Promise(o => {
      t = setTimeout(() => o(be), n);
    })]);
  } finally {
    if (t !== void 0) clearTimeout(t);
  }
}
var weakMap_5 = new WeakMap(),
  se = 8000;
async function Ue(e, n, t, args_4, r) {
  if (t !== "navigate" || args_4.tabId !== null && args_4.tabId !== void 0) return {
    args: args_4
  };
  let a = typeof args_4.url === "string" ? args_4.url.trim().toLowerCase() : "";
  if (a === "back" || a === "forward") return {
    args: args_4,
    error: h('tabId is required for url:"back"/"forward". Call tabs_context_mcp first to get a tab ID.')
  };
  let i = r?.sessionScope?.sessionId;
  if (!a || !i) return {
    args: args_4
  };
  let s = weakMap_5.get(n);
  if (!s) s = new Map(), weakMap_5.set(n, s);
  let d = s.get(i);
  if (!d) d = D(e, n, "tabs_context_mcp", {
    createIfEmpty: !0
  }, {
    ...r,
    permissionMode: "ask"
  }).finally(() => {
    if (s.get(i) === d) s.delete(i);
  }), s.set(i, d);
  let u = await Ge(d, se);
  if (u === be) return {
    args: args_4,
    error: h(`The hidden tabs_context_mcp lookup did not respond within ${se / 1000}s. The Chrome extension may be slow to start, or the computer running that browser may be offline or asleep. Retry navigate, or call tabs_context_mcp explicitly to get a tabId first.`, {
      isFrontLoadBoundExceeded: !0,
      ..._("front_load_bound_exceeded")
    })
  };
  let l = u?.error;
  if (l) {
    let content_2 = Array.isArray(l.content) ? l.content : [{
      type: "text",
      text: "tabs_context_mcp returned an error."
    }];
    if (he(content_2)) e.onAuthenticationError();
    return {
      args: args_4,
      error: {
        content: content_2,
        isError: !0
      }
    };
  }
  let {
    tabId: tabId_4,
    tabGroupId: tabGroupId_2,
    json: p
  } = ikn(u);
  if (tabId_4 === void 0) return {
    args: args_4,
    tabGroupId: tabGroupId_2
  };
  return {
    args: {
      ...args_4,
      tabId: tabId_4
    },
    tabContextJson: p,
    tabGroupId: tabGroupId_2
  };
}
function N(e, n) {
  let t = n;
  if (e.tabContextJson && !t.isError) t = {
    ...t,
    content: [...(Array.isArray(t.content) ? t.content : []), {
      type: "text",
      text: `
Tab context (from front-loaded tabs_context_mcp):
${e.tabContextJson}
Tabs in this group were opened for this task and are yours to clean up: close each with tabs_close_mcp once you no longer need it and before finishing, unless the user asked to see it or wants it kept open.`
    }]
  };
  if (e.tabGroupId !== void 0) t = {
    ...t,
    _meta: {
      ...t._meta,
      frontLoadedTabGroupId: e.tabGroupId
    }
  };
  return t;
}
async function We(e, n, t, o, r) {
  let seq_2 = ++ie,
    i = G(r),
    s = i ? xe(t, o) : [],
    d = s.some(item => "historyMove" in item),
    u = O(n),
    l = [...s].reverse().find(item => "set" in item),
    ownerBefore_2 = l && "set" in l && typeof l.set === "number" ? n.browserOfTab?.(l.set) : void 0;
  if (V(n, i, s, seq_2), d && i) X(n, i, 1);
  let b;
  try {
    b = await D(e, n, t, o, r);
  } finally {
    if (d && i) X(n, i, -1);
    V(n, i, s, seq_2);
  }
  let deviceId_3 = O(n);
  if (fe(b).ok && (u === void 0 || u === deviceId_3)) Ee(n, r, s, {
    seq: seq_2,
    deviceId: deviceId_3,
    ownerBefore: ownerBefore_2
  });
  if (e.logger.silly(`[${e.serverName}] Received result from socket bridge: ${ce(b)}`), b === null || b === void 0) return {
    content: [{
      type: "text",
      text: "Tool execution completed"
    }]
  };
  let {
      result: result_3,
      error: error_2,
      notices: notices
    } = b,
    _meta_2 = Array.isArray(notices) && notices.length > 0 ? {
      notices: notices
    } : void 0,
    C = error_2 || result_3,
    isError = !!error_2;
  if (!C) return {
    content: [{
      type: "text",
      text: "Tool execution completed"
    }],
    ...(_meta_2 && {
      _meta: _meta_2
    })
  };
  if (isError && he(C.content)) e.onAuthenticationError();
  let {
    content: v
  } = C;
  if (v && Array.isArray(v)) {
    if (isError) return {
      content: v.map(item => {
        if (typeof item === "object" && item !== null && "type" in item) return item;
        return {
          type: "text",
          text: String(item)
        };
      }),
      isError: !0,
      ...(_meta_2 && {
        _meta: _meta_2
      })
    };
    return {
      content: v.map(item => {
        if (typeof item === "object" && item !== null && "type" in item && "source" in item) {
          let S = item;
          if (S.type === "image" && typeof S.source === "object" && S.source !== null && "data" in S.source) return {
            type: "image",
            data: S.source.data,
            mimeType: "media_type" in S.source ? S.source.media_type || "image/png" : "image/png"
          };
        }
        if (typeof item === "object" && item !== null && "type" in item) return item;
        return {
          type: "text",
          text: String(item)
        };
      }),
      isError: isError,
      ...(_meta_2 && {
        _meta: _meta_2
      })
    };
  }
  if (typeof v === "string") return {
    content: [{
      type: "text",
      text: v
    }],
    isError: isError,
    ...(_meta_2 && {
      _meta: _meta_2
    })
  };
  return e.logger.warn(`[${e.serverName}] Unexpected result format from socket bridge`, b), {
    content: [{
      type: "text",
      text: JSON.stringify(b)
    }],
    isError: isError,
    ...(_meta_2 && {
      _meta: _meta_2
    })
  };
}
var Je = new Set(ire.map(item => item.name));
function x(e, cause, {
  toolName: toolName_3,
  sessionScope: sessionScope_3
}) {
  return e.trackEvent?.("chrome_bridge_tool_call_disconnected", {
    tool_name: `browser:${Je.has(toolName_3) ? toolName_3 : "unknown"}`,
    session_id: sessionScope_3?.sessionId,
    user_message_uuid: sessionScope_3?.userMessageUuid,
    transport: e.bridgeConfig ? "bridge" : "native",
    cause: cause
  }), {
    content: [{
      type: "text",
      text: e.onToolCallDisconnected()
    }],
    _meta: _(cause)
  };
}
async function ze(e, n, sessionScope_4) {
  if (!e.bridgeConfig) return {
    content: [{
      type: "text",
      text: "Browser switching is only available with bridge connections."
    }],
    isError: !0
  };
  if (!(await n.ensureConnected())) return x(e, "not_connected", {
    toolName: "switch_browser",
    sessionScope: sessionScope_4
  });
  if (e.isDisabled?.()) return h("Unknown tool: switch_browser");
  let r = (await n.switchBrowser?.()) ?? null;
  if (r === "no_other_browsers") return {
    content: [{
      type: "text",
      text: "No other browsers available to switch to. Open Chrome with the Claude extension in another browser to switch."
    }],
    isError: !1
  };
  if (r) return weakMap.set(n, !0), P(n), {
    content: [{
      type: "text",
      text: `Selected browser "${M(r, 0)}".`
    }]
  };
  return {
    content: [{
      type: "text",
      text: "No browser responded within the timeout. Make sure Chrome is open with the Claude extension installed, then try again."
    }],
    isError: !0
  };
}
async function Ke(e, n, sessionScope_5) {
  if (!e.bridgeConfig || !n.listConnectedExtensions) return {
    content: [{
      type: "text",
      text: "Listing browsers is only available with bridge connections."
    }],
    isError: !0
  };
  if (!(await n.ensureConnected())) return x(e, "not_connected", {
    toolName: "list_connected_browsers",
    sessionScope: sessionScope_5
  });
  if (e.isDisabled?.()) return h("Unknown tool: list_connected_browsers");
  let r = await n.listConnectedExtensions(),
    a = L4t(r, n.getSelectedDeviceId?.(), r.length > 1 ? await RRt(e.getLocalDeviceIds) : void 0),
    i = a.kind === "select" ? a.extension.deviceId : void 0,
    s = r.map((item, index) => ({
      ...item,
      name: U(item, index),
      osPlatform: item.osPlatform === void 0 ? void 0 : de.get(item.osPlatform),
      ...(item.deviceId === i && {
        inUse: !0
      })
    })),
    content_3 = [{
      type: "text",
      text: JSON.stringify(s)
    }];
  if (r.length > 1) content_3.push({
    type: "text",
    text: Xe(e, n, s, a)
  });
  return {
    content: content_3
  };
}
function Xe(e, n, t, o) {
  if (o.kind === "select") {
    let r = "is the one on this computer and will be used";
    if (o.reason === "persisted") r = n.hasActiveSelection?.() ? "is the one in use for this session" : "is the one picked last and will be used";
    let a = t.findIndex(item => item.deviceId === o.extension.deviceId);
    return `${t.length} browsers are connected; "${M(o.extension, a)}" (deviceId ${o.extension.deviceId}) ${r}. No question is needed unless the user wants a different browser (then select_browser with its deviceId, or switch_browser).`;
  }
  if (o.kind === "ask" && o.localCount > 0) return `${t.length} browsers are connected, ${o.localCount} of them on this computer (onThisComputer: true), and none is selected for this session. ${o9r(e.askUserToolName)} List the browsers on this computer first.`;
  return `${t.length} browsers are connected and none is selected for this session. ${o9r(e.askUserToolName)}`;
}
async function Qe(e, n, t, sessionScope_6) {
  let r = typeof t.deviceId === "string" ? t.deviceId : "";
  if (!e.bridgeConfig || !n.selectExtensionById || !n.listConnectedExtensions || !r) return {
    content: [{
      type: "text",
      text: "select_browser requires a bridge connection and a deviceId argument."
    }],
    isError: !0
  };
  if (!(await n.ensureConnected())) return x(e, "not_connected", {
    toolName: "select_browser",
    sessionScope: sessionScope_6
  });
  let i = await n.listConnectedExtensions(),
    s = i.find(item => item.deviceId === r);
  if (!s) return {
    content: [{
      type: "text",
      text: `No connected browser has deviceId "${r}". Call list_connected_browsers to see currently connected browsers.`
    }],
    isError: !0
  };
  if (e.isDisabled?.()) return h("Unknown tool: select_browser");
  let d = i.indexOf(s);
  return n.selectExtensionById(r, U(s, d)), weakMap.set(n, !0), P(n), {
    content: [{
      type: "text",
      text: `Selected browser "${M(s, d)}".`
    }]
  };
}
function q(e) {
  if (!Array.isArray(e)) return String(e);
  return e.map(item => {
    if (typeof item === "string") return item;
    if (typeof item === "object" && item !== null && "text" in item && typeof item.text === "string") return item.text;
    return "";
  }).join(" ");
}
function he(e) {
  return q(e).toLowerCase().includes("re-authenticated");
}
export { Q5r, grr, ikn };