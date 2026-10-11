// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Cs } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ke, P, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Oo } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { qet } from "B:/~BUN/root/chunk-tw49cqbs.js";
import { Ft } from "B:/~BUN/root/chunk-msy8grqx.js";
import { af, N_ } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { lk, F4 as name_2, Aco, xco, wW as name_3, Pco, Ico, DP, UGe, CMn, lyr, RMn, A8 as name, Qdo, Zdo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { $ge } from "B:/~BUN/root/chunk-rtxwm8ds.js";
import { bw } from "B:/~BUN/root/chunk-8k39s5js.js";
import { UPt } from "B:/~BUN/root/chunk-aa7kpy4p.js";
import { ME, U9, B9 } from "B:/~BUN/root/chunk-q5ke49kw.js";
import { TS } from "B:/~BUN/root/chunk-6bchs2sy.js";
import { o, C, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
var z = f(() => u({
    server: o().optional().describe("Optional server name to filter resources by")
  })),
  O = f(() => C(u({
    uri: o().describe("Resource URI"),
    name: o().describe("Resource name"),
    mimeType: o().optional().describe("MIME type of the resource"),
    description: o().optional().describe("Resource description"),
    server: o().describe("Server that provides this resource")
  }))),
  kP = Ft({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return e.server ?? "";
    },
    shouldDefer: !0,
    name: name,
    aliases: ["ListMcpResources"],
    searchHint: "list resources from connected MCP servers",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return Qdo;
    },
    async prompt() {
      return Zdo;
    },
    get inputSchema() {
      return z();
    },
    get outputSchema() {
      return O();
    },
    create(e) {
      return {
        async call(i, {
          signal: signal
        }) {
          let p = e.turnMcpClients.filter(item => !lyr(item, e.agentId)),
            {
              server: server
            } = i,
            h = server ? UGe(p, server) : p;
          if (server && h.length === 0) throw new P(`Server "${server}" not found. Available servers: ${p.map(item => item.name).join(", ")}`, "MCP server not found");
          return {
            data: (await Promise.all(h.map(async item => {
              if (!Cs(item) || !item.capabilities?.resources) return [];
              let {
                ensureConnectedClient: ensureConnectedClient,
                fetchResourcesForClient: fetchResourcesForClient
              } = import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
              try {
                let n = await ensureConnectedClient(item, {
                    signal: signal,
                    context: "MCP resource listing"
                  }),
                  r = await fetchResourcesForClient(n),
                  m = r.filter(item => !qet(item));
                if (m.length < r.length) t(`MCP server "${item.name}": ${r.length - m.length} MCP Apps UI resource(s) left out of ${name}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${name_3} can still read them by URI`);
                return m;
              } catch (error) {
                if (!Ke(error)) Oo(item.name, l(error));
                return [];
              }
            }))).flat()
          };
        }
      };
    },
    renderToolUseMessage(e) {
      return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
    },
    userFacingName: () => "listMcpResources",
    mapToolResultToToolResultBlockParam(e, tool_use_id) {
      if (!e || e.length === 0) return {
        tool_use_id: tool_use_id,
        type: "tool_result",
        content: "No resources found. MCP servers may still provide tools even if they have no resources."
      };
      return {
        tool_use_id: tool_use_id,
        type: "tool_result",
        content: b(e)
      };
    }
  });
function M() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js");
}
function D() {
  return M().mcpSdkErrorClassificationModule();
}
function A() {
  return M().mcpClientModule();
}
function _() {
  return M().mcpDirectoryReadModule();
}
var j = f(() => u({
    server: o().describe("The MCP server name"),
    uri: o().describe("The directory resource URI to list")
  })),
  x = f(() => u({
    resources: C(u({
      uri: o().describe("Child resource URI"),
      name: o().describe("Child resource name"),
      mimeType: o().optional().describe("Child MIME type")
    })).describe(`Direct children of the directory resource. Subdirectories appear with mimeType "${UPt}".`),
    error: o().optional().describe("Human-readable error when the server could not list the directory")
  })),
  NU = Ft({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `${e.server} ${e.uri}`;
    },
    shouldDefer: !0,
    name: name_2,
    aliases: ["ReadMcpResourceDir"],
    searchHint: "list the children of an MCP directory resource",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return Aco;
    },
    async prompt() {
      return xco;
    },
    get inputSchema() {
      return j();
    },
    get outputSchema() {
      return x();
    },
    create(e) {
      return {
        async call(i, {
          signal: signal_2
        }) {
          let turnMcpClients = e.turnMcpClients,
            {
              server: server_2,
              uri: uri
            } = i,
            c = CMn(turnMcpClients, server_2);
          if (RMn(c, e.agentId), !TS()) return {
            data: {
              resources: [],
              error: "Directory listing is not enabled in this build."
            }
          };
          if (!_().serverDeclaresDirectoryRead(c.capabilities)) return {
            data: {
              resources: [],
              error: `Server "${c.name}" does not support directory listing.`
            }
          };
          if (c.config.pluginSource) lk(c.config.pluginSource), DP(c.config.pluginSource, "mcp", {
            kind: "mcp-server",
            name: c.name
          });
          let s = await A().ensureConnectedClient(c, {
              signal: signal_2,
              context: "MCP resource directory read"
            }),
            d;
          try {
            d = await _().readMcpDirectory(s, uri);
          } catch (n) {
            let r = D();
            if (r.isMcpNotADirectoryError(n)) return Oo(c.name, `resources/directory/read returned ${r.getMcpErrorCode(n)} \u2014 not a directory`), {
              data: {
                resources: [],
                error: `Not a directory resource: ${uri}. If it is a file resource, use ${name_3} instead.`
              }
            };
            throw n;
          }
          return {
            data: {
              resources: d.map(item => ({
                uri: af(item.uri),
                name: N_(item.name),
                mimeType: item.mimeType !== void 0 ? N_(item.mimeType) : void 0
              }))
            }
          };
        }
      };
    },
    renderToolUseMessage(e) {
      if (!e.uri || !e.server) return null;
      return `List directory resource "${e.uri}" from server "${e.server}"`;
    },
    userFacingName() {
      return "readMcpResourceDir";
    },
    mapToolResultToToolResultBlockParam(e, tool_use_id_2) {
      if (e.error) return {
        tool_use_id: tool_use_id_2,
        type: "tool_result",
        content: e.error
      };
      let y = e.resources.map(item => `${item.name}${item.mimeType === UPt ? "/" : ""}`).join(`
`),
        p = e.resources.length > 0 ? `Directory listing (${e.resources.length} ${I(e.resources.length, "entry", "entries")}):
${y}` : "Directory is empty.";
      return {
        tool_use_id: tool_use_id_2,
        type: "tool_result",
        content: `${p}

${b(e)}`
      };
    }
  });
function T() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js");
}
function N() {
  return T().mcpSdkErrorClassificationModule();
}
function E() {
  return T().mcpClientModule();
}
function U() {
  return T().mcpDirectoryReadModule();
}
var k = f(() => u({
    server: o().describe("The MCP server name"),
    uri: o().describe("The resource URI to read")
  })),
  w = f(() => u({
    contents: C(u({
      uri: o().describe("Resource URI"),
      mimeType: o().optional().describe("MIME type of the content"),
      text: o().optional().describe("Text content of the resource"),
      blobSavedTo: o().optional().describe("Path where binary blob content was saved")
    })),
    error: o().optional().describe("Human-readable error when the server could not read the resource")
  })),
  EP = Ft({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `${e.server} ${e.uri}`;
    },
    shouldDefer: !0,
    name: name_3,
    aliases: ["ReadMcpResource"],
    searchHint: "read a specific MCP resource by URI",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return Pco;
    },
    async prompt() {
      return Ico;
    },
    get inputSchema() {
      return k();
    },
    get outputSchema() {
      return w();
    },
    create(e) {
      return {
        async call(i, {
          signal: signal_3
        }) {
          let {
              turnMcpClients: turnMcpClients_2,
              storageV5: storageV5
            } = e,
            {
              server: server_3,
              uri: uri_2
            } = i,
            s = CMn(turnMcpClients_2, server_3);
          if (RMn(s, e.agentId), s.config.pluginSource) lk(s.config.pluginSource), DP(s.config.pluginSource, "mcp", {
            kind: "mcp-server",
            name: s.name
          });
          let d = await E().ensureConnectedClient(s, {
              signal: signal_3,
              context: "MCP resource read"
            }),
            g;
          try {
            g = await $ge(d, uri_2);
          } catch (r) {
            let m = N();
            if (m.isMcpMethodNotFoundError(r)) return Oo(s.name, "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads"), {
              data: {
                contents: [],
                error: `Server "${s.name}" advertises resource support but does not implement resource reads.`
              }
            };
            if (m.isMcpResourceNotFoundError(r)) {
              Oo(s.name, `resources/read returned ${m.getMcpErrorCode(r)} \u2014 resource not found`), E().invalidateMcpResourceListCaches(d);
              let R = U().serverDeclaresDirectoryRead(d.capabilities) ? ` If the URI is a directory resource, use ${name_2} instead.` : "";
              return {
                data: {
                  contents: [],
                  error: `Resource not found: ${uri_2} \u2014 it may have been deleted or the URI is stale. Re-run ${name} to refresh.${R}`
                }
              };
            }
            throw r;
          }
          return {
            data: {
              contents: await Promise.all(g.contents.map(async (item, index) => {
                if ("text" in item) return {
                  uri: item.uri,
                  mimeType: item.mimeType,
                  text: item.text
                };
                if (!("blob" in item) || typeof item.blob !== "string") return {
                  uri: item.uri,
                  mimeType: item.mimeType
                };
                let R = `mcp-resource-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
                  S = await ME(Buffer.from(item.blob, "base64"), item.mimeType, R, void 0, storageV5);
                if ("error" in S) {
                  if (bw() !== void 0) return {
                    uri: item.uri,
                    mimeType: item.mimeType,
                    text: B9(item.mimeType, Buffer.byteLength(item.blob, "base64"))
                  };
                  return {
                    uri: item.uri,
                    mimeType: item.mimeType,
                    text: `Binary content could not be saved to disk: ${S.error}`
                  };
                }
                return {
                  uri: item.uri,
                  mimeType: item.mimeType,
                  blobSavedTo: S.filepath,
                  text: U9(S.filepath, item.mimeType, S.size, `[Resource from ${s.name} at ${item.uri}] `)
                };
              }))
            }
          };
        }
      };
    },
    renderToolUseMessage(e) {
      if (!e.uri || !e.server) return null;
      return `Read resource "${e.uri}" from server "${e.server}"`;
    },
    userFacingName() {
      return "readMcpResource";
    },
    mapToolResultToToolResultBlockParam(e, tool_use_id_3) {
      if (e.error) return {
        tool_use_id: tool_use_id_3,
        type: "tool_result",
        content: e.error
      };
      return {
        tool_use_id: tool_use_id_3,
        type: "tool_result",
        content: b(e)
      };
    }
  });
export { kP, NU, EP };