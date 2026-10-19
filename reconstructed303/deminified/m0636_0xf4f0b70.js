// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Ke, Ve, x, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, Wf, UWo, UZe, sP, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Ps } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { ka } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Lo } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { XMt } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Qt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { oq as name_3, jcs, Wcs, U1 as name_4, zcs, Gcs, ZY as name_2, Cps, Rps, use, VL } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { TC } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { hPe } from "B:/~BUN/root/chunk-xyxdcn7p.js";
import { w_ } from "B:/~BUN/root/chunk-6vykeeak.js";
import { xT, Oie, Iie } from "B:/~BUN/root/chunk-yq5myw2y.js";
import { x6 as size, D7t } from "B:/~BUN/root/chunk-9y4mcm7b.js";
import { Dv } from "B:/~BUN/root/chunk-4gqhj4xs.js";
import { X5e, PCr, Uxs, B0t } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { Jk } from "B:/~BUN/root/chunk-j2tkftkw.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var U = f(() => u({
    server: o().optional().describe("Optional server name to filter resources by")
  })),
  j = f(() => T(u({
    uri: o().describe("Resource URI"),
    name: o().describe("Resource name"),
    mimeType: o().optional().describe("MIME type of the resource"),
    description: o().optional().describe("Resource description"),
    server: o().describe("Server that provides this resource")
  })));
function stripForCreation(e) {
  let {
    hasMcpInboundDoor: hasMcpInboundDoor
  } = import.meta.require("B:/~BUN/root/chunk-atdam0k9.js");
  if (!Array.isArray(e) || !hasMcpInboundDoor()) return e;
  return e.filter(N).map(({
    uri: uri,
    name: name,
    mimeType: mimeType,
    description: description,
    server: server
  }) => ({
    uri: b("", uri),
    name: b("", name),
    ...(typeof mimeType === "string" && {
      mimeType: mimeType
    }),
    ...(typeof description === "string" && {
      description: description
    }),
    server: b("", server)
  }));
}
function b(e, r) {
  return typeof r === "string" ? r : e;
}
var IL = Qt({
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
  name: name_2,
  aliases: ["ListMcpResources"],
  searchHint: "list resources from connected MCP servers",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Cps;
  },
  async prompt() {
    return Rps;
  },
  get inputSchema() {
    return U();
  },
  get outputSchema() {
    return j();
  },
  create(e) {
    return {
      async call(r, {
        signal: signal
      }) {
        let a = e.turnMcpClients.filter(item => !Uxs(item, e.agentId)),
          {
            server: server_2
          } = r,
          h = server_2 ? X5e(a, server_2) : a;
        if (server_2 && h.length === 0) throw new x(`Server "${server_2}" not found. Available servers: ${a.map(item => item.name).join(", ")}`, "MCP server not found");
        let p = await Promise.all(h.map(async item => {
          if (!Ps(item) || !item.capabilities?.resources) return [];
          let y = import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule(),
            S = () => y.ensureConnectedClient(item, {
              signal: signal,
              context: "MCP resource listing"
            });
          try {
            let g = await S(),
              i = await ka(y.fetchResourcesForClient(g), signal, () => new Ke());
            if (item.config.type === "claudeai-proxy" && y.getDiscoveryFetchError(i) !== void 0) {
              let l = await S();
              if (l !== g) i = await ka(y.fetchResourcesForClient(l), signal, () => new Ke());
            }
            let m = i.filter(item => !XMt(item));
            if (m.length < i.length) t(`MCP server "${item.name}": ${i.length - m.length} MCP Apps UI resource(s) left out of ${name_2}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${name_4} can still read them by URI`);
            return m;
          } catch (error) {
            if (!Ve(error)) Lo(item.name, d(error));
            return [];
          }
        }));
        if (signal.aborted) throw new Ke();
        return {
          data: p.flat()
        };
      }
    };
  },
  renderToolUseMessage(e) {
    return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
  },
  userFacingName: () => "listMcpResources",
  stripForCreation: stripForCreation,
  mapToolResultToToolResultBlockParam(e, tool_use_id) {
    if (!e || e.length === 0) return {
      tool_use_id: tool_use_id,
      type: "tool_result",
      content: "No resources found. MCP servers may still provide tools even if they have no resources."
    };
    return {
      tool_use_id: tool_use_id,
      type: "tool_result",
      content: _(e)
    };
  }
});
var A = {
    size: size,
    textToSanitize: 1048576
  },
  k = 16,
  B = 256,
  F = 16 * A.textToSanitize,
  H = 65536;
function M() {
  let e = {
    size: 0,
    sixteenthsToSanitize: 0,
    nonAsciiUnits: 0
  };
  return r => {
    if (!R(e)) return !1;
    return e.size += B, v(r, e, !0);
  };
}
function xEt() {
  let e = M(),
    r = M(),
    s = !1;
  return a => {
    if (s || !e(a)) return;
    let n = sP(a);
    return s = !r(n), s ? void 0 : n;
  };
}
function Uqe(e, r, s) {
  return `Skipped the last ${r} of ${s} ${e}: the listing is too large. Only about the first 16 MB of a listing is used (less if it has many small values), and only about 1 million characters that are costly to normalize: combining marks, full-width forms, emoji and the like anywhere, and a tool's or prompt's name that is not all ASCII. The server must list fewer or shorter ${e} to get them back.`;
}
function R(e) {
  return e.size <= A.size && e.sixteenthsToSanitize <= F;
}
function v(e, r, s = !1, a = !1) {
  if (r.size += k, typeof e === "string") P(e, r, a);else if (Array.isArray(e)) {
    for (let n of e) if (!v(n, r)) return !1;
  } else if (N(e)) {
    for (let n in e) if (P(n, r), !v(e[n], r, !1, s && n === "name")) return !1;
  }
  return R(r);
}
function P(e, r, s = !1) {
  if (r.size += e.length, !R(r) || UWo(e)) return;
  if (s) {
    r.sixteenthsToSanitize += 16 * e.length;
    return;
  }
  r.sixteenthsToSanitize += e.length;
  for (let a = 0; a < e.length && R(r); a++) {
    let n = e.charCodeAt(a);
    if (n > 127 && (r.nonAsciiUnits++ < H || q()[n] === 1)) r.sixteenthsToSanitize += 15;
  }
}
var q = Jk(() => {
  let e = /[\p{M}\u1100-\u11ff\ua960-\ua97f\ud7b0-\udfff]/u;
  return Uint8Array.from({
    length: 65536
  }, (r, s) => {
    let a = String.fromCharCode(s);
    return e.test(a) || UZe(a) !== a ? 1 : 0;
  });
});
function z() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js");
}
function V() {
  return z().mcpSdkErrorClassificationModule();
}
function Y() {
  return z().mcpClientModule();
}
function D() {
  return z().mcpDirectoryReadModule();
}
var W = f(() => u({
    server: o().describe("The MCP server name"),
    uri: o().describe("The directory resource URI to list")
  })),
  Z = f(() => u({
    resources: T(u({
      uri: o().describe("Child resource URI"),
      name: o().describe("Child resource name"),
      mimeType: o().optional().describe("Child MIME type")
    })).describe(`Direct children of the directory resource. Subdirectories appear with mimeType "${D7t}".`),
    error: o().optional().describe("Human-readable error when the server could not list the directory")
  })),
  FV = Qt({
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
    aliases: ["ReadMcpResourceDir"],
    searchHint: "list the children of an MCP directory resource",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return jcs;
    },
    async prompt() {
      return Wcs;
    },
    get inputSchema() {
      return W();
    },
    get outputSchema() {
      return Z();
    },
    create(e) {
      return {
        async call(r, {
          signal: signal_2
        }) {
          let turnMcpClients = e.turnMcpClients,
            {
              server: server_3,
              uri: uri_2
            } = r,
            p = PCr(turnMcpClients, server_3);
          if (B0t(p, e.agentId), !Dv()) return {
            data: {
              resources: [],
              error: "Directory listing is not enabled in this build."
            }
          };
          if (!D().serverDeclaresDirectoryRead(p.capabilities)) return {
            data: {
              resources: [],
              error: `Server "${p.name}" does not support directory listing.`
            }
          };
          if (p.config.pluginSource) TC(p.config.pluginSource), VL(p.config.pluginSource, "mcp", {
            kind: "mcp-server",
            name: p.name
          });
          let c = await Y().ensureConnectedClient(p, {
              signal: signal_2,
              context: "MCP resource directory read"
            }),
            y;
          try {
            y = await D().readMcpDirectory(c, uri_2);
          } catch (m) {
            let l = V();
            if (l.isMcpNotADirectoryError(m)) return Lo(p.name, `resources/directory/read returned ${l.getMcpErrorCode(m)} \u2014 not a directory`), {
              data: {
                resources: [],
                error: `Not a directory resource: ${uri_2}. If it is a file resource, use ${name_4} instead.`
              }
            };
            throw m;
          }
          let S = M(),
            g = M(),
            resources = (await use(y, m => {
              if (!S([m.uri, m.name, m.mimeType])) return [];
              let l = {
                uri: Wf(m.uri),
                name: sP(m.name),
                mimeType: m.mimeType !== void 0 ? sP(m.mimeType) : void 0
              };
              return g([l.uri, l.name, l.mimeType]) ? [l] : [];
            })).flat();
          if (resources.length < y.length) return Lo(p.name, Uqe("directory entries", y.length, y.length)), {
            data: {
              resources: [],
              error: `The listing of ${uri_2} is too large to read.`
            }
          };
          return {
            data: {
              resources: resources
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
      let s = e.resources.map(item => `${item.name}${item.mimeType === D7t ? "/" : ""}`).join(`
`),
        a = e.resources.length > 0 ? `Directory listing (${e.resources.length} ${O(e.resources.length, "entry", "entries")}):
${s}` : "Directory is empty.";
      return {
        tool_use_id: tool_use_id_2,
        type: "tool_result",
        content: `${a}

${_(e)}`
      };
    }
  });
function I() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js");
}
function K() {
  return I().mcpSdkErrorClassificationModule();
}
function w() {
  return I().mcpClientModule();
}
function X() {
  return I().mcpDirectoryReadModule();
}
var G = f(() => u({
    server: o().describe("The MCP server name"),
    uri: o().describe("The resource URI to read")
  })),
  J = f(() => u({
    contents: T(u({
      uri: o().describe("Resource URI"),
      mimeType: o().optional().describe("MIME type of the content"),
      text: o().optional().describe("Text content of the resource"),
      blobSavedTo: o().optional().describe("Path where binary blob content was saved")
    })),
    error: o().optional().describe("Human-readable error when the server could not read the resource")
  })),
  ML = Qt({
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
    name: name_4,
    aliases: ["ReadMcpResource"],
    searchHint: "read a specific MCP resource by URI",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return zcs;
    },
    async prompt() {
      return Gcs;
    },
    get inputSchema() {
      return G();
    },
    get outputSchema() {
      return J();
    },
    create(e) {
      return {
        async call(r, {
          signal: signal_3
        }) {
          let {
              turnMcpClients: turnMcpClients_2,
              storageV5: storageV5
            } = e,
            {
              server: server_4,
              uri: uri_3
            } = r,
            c = PCr(turnMcpClients_2, server_4);
          if (B0t(c, e.agentId), c.config.pluginSource) TC(c.config.pluginSource), VL(c.config.pluginSource, "mcp", {
            kind: "mcp-server",
            name: c.name
          });
          let y = await w().ensureConnectedClient(c, {
              signal: signal_3,
              context: "MCP resource read"
            }),
            S;
          try {
            S = await hPe(y, uri_3);
          } catch (i) {
            let m = K();
            if (m.isMcpMethodNotFoundError(i)) return Lo(c.name, "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads"), {
              data: {
                contents: [],
                error: `Server "${c.name}" advertises resource support but does not implement resource reads.`
              }
            };
            if (m.isMcpResourceNotFoundError(i)) {
              Lo(c.name, `resources/read returned ${m.getMcpErrorCode(i)} \u2014 resource not found`), w().invalidateMcpResourceListCaches(y);
              let l = X().serverDeclaresDirectoryRead(y.capabilities) ? ` If the URI is a directory resource, use ${name_3} instead.` : "";
              return {
                data: {
                  contents: [],
                  error: `Resource not found: ${uri_3} \u2014 it may have been deleted or the URI is stale. Re-run ${name_2} to refresh.${l}`
                }
              };
            }
            throw i;
          }
          return {
            data: {
              contents: await Promise.all(S.contents.map(async (item, index) => {
                if ("text" in item) return {
                  uri: item.uri,
                  mimeType: item.mimeType,
                  text: item.text
                };
                if (!("blob" in item) || typeof item.blob !== "string") return {
                  uri: item.uri,
                  mimeType: item.mimeType
                };
                let l = `mcp-resource-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
                  C = await xT(Buffer.from(item.blob, "base64"), item.mimeType, l, void 0, storageV5);
                if ("error" in C) {
                  if (w_() !== void 0) return {
                    uri: item.uri,
                    mimeType: item.mimeType,
                    text: Iie(item.mimeType, Buffer.byteLength(item.blob, "base64"))
                  };
                  return {
                    uri: item.uri,
                    mimeType: item.mimeType,
                    text: `Binary content could not be saved to disk: ${C.error}`
                  };
                }
                return {
                  uri: item.uri,
                  mimeType: item.mimeType,
                  blobSavedTo: C.filepath,
                  text: Oie(C.filepath, item.mimeType, C.size, `[Resource from ${c.name} at ${item.uri}] `)
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
        content: _(e)
      };
    }
  });
export { IL, xEt, Uqe, FV, ML };