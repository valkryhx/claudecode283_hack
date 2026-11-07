// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $K, l3e } from "B:/~BUN/root/chunk-1pb6cmje.js";
import { Lsr, ire } from "B:/~BUN/root/chunk-44wgxs8c.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import { ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { G2o } from "B:/~BUN/root/chunk-a3vpga1r.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import { H_n, rQn } from "B:/~BUN/root/chunk-h466xyq4.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
var h = ["2025-11-25", "2025-06-18", "2025-03-26"];
function P(e) {
  return e.bridgeConfig ? H_n(e) : e.getSocketPaths ? rQn(e) : l3e(e);
}
function T(e, r) {
  return new s(e, r);
}
class s {
  context;
  socketClient;
  client;
  handshake = [];
  packageServer;
  isClosed = !1;
  constructor(e, r) {
    this.context = e;
    this.socketClient = r;
  }
  async connect(e) {
    this.client = e, e.onmessage = o => this.receive(o), e.onclose = () => void this.closePackageServer();
    let {
      logger: logger,
      serverName: serverName
    } = this.context;
    this.socketClient.setNotificationHandler(({
      method: method,
      params: params
    }) => {
      logger.info(`[${serverName}] Forwarding MCP notification: ${$K(method)}`), this.handToPackageServer(({
        server: server
      }) => server.notification({
        method: method,
        params: params
      }).catch(c => {
        logger.info(`[${serverName}] Failed to forward MCP notification: ${d(c)}`);
      }));
    });
  }
  async close() {
    await this.client?.close(), await this.closePackageServer();
  }
  async closePackageServer() {
    this.isClosed = !0, await (await this.packageServer?.catch(() => {
      return;
    }))?.server.close();
  }
  sendToClient(e) {
    if (!this.isClosed) this.client?.send(e).catch(a);
  }
  receive(e) {
    let result = this.packageServer === void 0 ? this.ownResultFor(e) : void 0;
    if (result === void 0) this.handToPackageServer(({
      transport: transport
    }) => transport.send(e));else if ("id" in e && e.id !== void 0) this.sendToClient({
      result: result,
      jsonrpc: "2.0",
      id: e.id
    });
  }
  ownResultFor(e) {
    if (!("method" in e) || "id" in e && typeof e.id !== "string" && !Number.isInteger(e.id) || e.params !== void 0 && !D(e.params) || e.params?._meta !== void 0 && !D(e.params._meta)) return;
    switch (e.method) {
      case "initialize":
        {
          let {
            protocolVersion: protocolVersion,
            capabilities: capabilities,
            clientInfo: clientInfo
          } = e.params ?? {};
          if (this.handshake.length > 0 || typeof protocolVersion !== "string" || !h.includes(protocolVersion) || !D(capabilities) || !D(clientInfo) || typeof clientInfo.name !== "string" || typeof clientInfo.version !== "string") return;
          return this.handshake.push(e), {
            protocolVersion: protocolVersion,
            capabilities: {
              tools: {
                listChanged: !0
              },
              logging: {}
            },
            serverInfo: {
              name: this.context.serverName,
              version: "1.0.0"
            }
          };
        }
      case "notifications/initialized":
        return this.handshake.push(e), {};
      case "ping":
        return {};
      case "notifications/roots/list_changed":
      case "notifications/cancelled":
      case "notifications/progress":
        return {};
      case "tools/list":
        if (e.params?.cursor !== void 0 || this.context.bridgeConfig === void 0 || this.context.excludedTools !== void 0 || this.context.isDisabled !== void 0 || this.context.hostTools !== void 0) return;
        return {
          tools: ire.map(item => item.name === "list_connected_browsers" ? {
            ...item,
            description: `${item.description} ${Lsr(this.context.askUserToolName)}`
          } : item)
        };
      default:
        return;
    }
  }
  handToPackageServer(e) {
    if (this.isClosed) return;
    this.packageServer ??= this.startPackageServer(), this.packageServer.then(e).catch(r => (a(r), this.close()));
  }
  startPackageServer() {
    return ao("chrome_late_mcp_server", () => this.packageServerGivenTheHandshake());
  }
  async packageServerGivenTheHandshake() {
    let {
        createClaudeForChromeMcpServer: createClaudeForChromeMcpServer_2
      } = await import("B:/~BUN/root/chunk-qs3nzfym.js"),
      server_2 = createClaudeForChromeMcpServer_2(this.context, this.socketClient),
      [transport_2, o] = G2o(),
      n = new Set(this.handshake.flatMap(item => "id" in item ? [item.id] : []));
    transport_2.onmessage = t => {
      if ("method" in t || !("id" in t) || !n.delete(t.id)) this.sendToClient(t);
    }, await server_2.connect(o);
    for (let t of this.handshake) await transport_2.send(t);
    return {
      server: server_2,
      transport: transport_2
    };
  }
}
export { h as ECHOED_PROTOCOL_VERSIONS, P as createChromeSocketClient, T as createClaudeForChromeMcpServer };