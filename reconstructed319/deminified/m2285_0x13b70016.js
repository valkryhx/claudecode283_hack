// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { jE, s1e, lkn, Z5r, $K, ukn, i1e, a1e, P8, D4t, l3e, gaa } from "B:/~BUN/root/chunk-1pb6cmje.js";
import { M3e, RYt, t9r, n9r, r9r, Ifi, Lsr, Mfi, Dfi, Raa, ire } from "B:/~BUN/root/chunk-44wgxs8c.js";
import { ove, Jne } from "B:/~BUN/root/chunk-ahv8vexc.js";
import "B:/~BUN/root/chunk-eh2h5nfr.js";
import { Nke } from "B:/~BUN/root/chunk-m0t2mx64.js";
import { Q5r, grr, ikn } from "B:/~BUN/root/chunk-8b9g5aw6.js";
import { Y2o, H_n, rQn } from "B:/~BUN/root/chunk-h466xyq4.js";
var p = new Map(),
  C = "frontLoadedTabGroupId",
  T = [C, "isBridgeTimeout", "isFrontLoadBoundExceeded", lkn];
function f(e) {
  return ire.filter(item => (e.bridgeConfig !== void 0 || !Ifi.has(item.name)) && !e.excludedTools?.has(item.name));
}
function u(e) {
  return e.bridgeConfig ? H_n(e) : e.getSocketPaths ? rQn(e) : l3e(e);
}
function E(e, o) {
  let {
      serverName: r,
      logger: logger
    } = e,
    c = o ?? u(e),
    a = new Nke({
      name: r,
      version: "1.0.0"
    }, {
      capabilities: {
        tools: {
          listChanged: !0
        },
        logging: {}
      }
    });
  return a.setRequestHandler(ove, () => {
    if (e.isDisabled?.()) return {
      tools: []
    };
    let t = Lsr(e.askUserToolName);
    return {
      tools: [...f(e).map(item => item.name === "list_connected_browsers" ? {
        ...item,
        description: `${item.description} ${t}`
      } : item), ...(e.hostTools?.() ?? [])]
    };
  }), a.setRequestHandler(Jne, async t => {
    logger.info(`[${r}] Executing tool: ${$K(t.params.name)}`);
    let i = e.getRendererSessionScope?.(t.params._meta),
      s = i ? {
        permissionMode: "ask",
        sessionScope: {
          ...i,
          tabGroupId: p.get(i.sessionId)
        }
      } : void 0,
      result = await grr(e, c, t.params.name, t.params.arguments || {}, s);
    if (i && !result.isError) {
      let d = result._meta?.[C],
        m = typeof d === "number" ? d : t.params.name === "tabs_context_mcp" ? ikn({
          result: result
        }).tabGroupId : void 0;
      if (m !== void 0) p.set(i.sessionId, m);
    }
    if (result._meta) for (let d of T) delete result._meta[d];
    return result;
  }), c.setNotificationHandler(t => {
    logger.info(`[${r}] Forwarding MCP notification: ${$K(t.method)}`), a.notification({
      method: t.method,
      params: t.params
    }).catch(i => {
      logger.info(`[${r}] Failed to forward MCP notification: ${i.message}`);
    });
  }), a;
}
var g = 1500;
function _(e) {
  return {
    silly: (o, ...r) => e.silly(o, ...r),
    debug: (o, ...r) => e.debug(o, ...r),
    info: (o, ...r) => e.debug(o, ...r),
    warn: (o, ...r) => e.warn(o, ...r),
    error: (o, ...r) => e.error(o, ...r),
    isDebugEnabled: e.isDebugEnabled?.bind(e)
  };
}
async function S(e) {
  let {
      logger: logger_2,
      serverName: serverName,
      timeoutMs = g
    } = e,
    logger_3 = _(logger_2),
    a;
  try {
    a = await e.getSocketPaths();
  } catch {
    return new Set();
  }
  let t = new Set();
  return await Promise.all(a.map(async i => {
    let s = l3e({
      serverName: `${serverName} identity probe`,
      logger: logger_3,
      clientTypeId: e.clientTypeId,
      connectVerified: e.connectVerified,
      socketPath: i,
      getSocketPath: () => i,
      onToolCallDisconnected: () => "",
      onAuthenticationError: () => {
        return;
      }
    });
    s.disableAutoReconnect = !0;
    try {
      if (!(await s.ensureConnected())) return;
      let n = await s.probeBridgeIdentity(timeoutMs);
      if (n !== void 0) t.add(n);
    } catch (error) {
      logger_2.debug(`[${serverName}] identity probe of ${i} failed:`, error instanceof Error ? error.message : String(error));
    } finally {
      s.disconnect();
    }
  })), t;
}
export { ire as BROWSER_TOOLS, Y2o as BridgeClient, Mfi as CHROME_UPLOAD_FILE_SCHEMA, n9r as DEFAULT_EXTERNAL_MESSAGE_TIMEOUT_MS, M3e as DEFAULT_TOOL_CALL_TIMEOUT_MS, t9r as DISCOVERY_TIMEOUT_MS, P8 as ExtensionDisconnectedMidCallError, Dfi as FILE_UPLOAD_PROXY_INPUT_SCHEMA, Raa as FILE_UPLOAD_PROXY_TOOL, i1e as NoExtensionConnectedError, RYt as PEER_WAIT_TIMEOUT_MS, D4t as RequestTooLargeError, jE as SocketConnectionError, lkn as TOOL_CALL_FAILURE_CAUSE_META_KEY, s1e as ToolCallLostError, ukn as ToolCallSupersededError, a1e as ToolCallTimeoutError, r9r as WAIT_MAX_DURATION_S, f as availableBrowserTools, Q5r as clearBrowserResolution, gaa as clearLocalPairingIdentity, H_n as createBridgeClient, u as createChromeSocketClient, E as createClaudeForChromeMcpServer, Z5r as localPlatformLabel, S as probeLocalDeviceIds };