// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Ke, We, R, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _h, Dh, uWs, wwt, DH } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ui } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Gs } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { $u } from "B:/~BUN/root/chunk-grwykqvw.js";
import { yo } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Ikr, pLe, Kfo, MZt, nLn } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Am } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { PNt, dn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { iU as name_3, zji, Gji, K2 as name_2, Vji, Kji, $Ge } from "B:/~BUN/root/chunk-detjgwj4.js";
import { uJt } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { jB, ydt, m3t, sQr, WTn, Nyi, Blr, iQr, Fyi, aQr, Dge, a2, cQr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { zP } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { lIt } from "B:/~BUN/root/chunk-mcdkvptw.js";
import { Ug } from "B:/~BUN/root/chunk-vp8vb7t8.js";
import { F$, Gye, Vye } from "B:/~BUN/root/chunk-ftj46fnn.js";
import { eDt } from "B:/~BUN/root/chunk-spc3jrd3.js";
import { Vq as size, Ftn as mimeType_2 } from "B:/~BUN/root/chunk-e99p2x0p.js";
import { zg as name_4, _Wi, bWi } from "B:/~BUN/root/chunk-hdtrfvjw.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, C, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var V = p(() => u({
    server: o().optional().describe("Optional server name to filter resources by")
  })),
  G = p(() => C(u({
    uri: o().describe("Resource URI"),
    name: o().describe("Resource name"),
    mimeType: o().optional().describe("MIME type of the resource"),
    description: o().optional().describe("Resource description"),
    server: o().describe("Server that provides this resource")
  })));
function stripForCreation(e) {
  let {
    hasMcpInboundDoor: hasMcpInboundDoor
  } = import.meta.require("B:/~BUN/root/chunk-g5pgmfhs.js");
  if (!Array.isArray(e) || !hasMcpInboundDoor()) return e;
  return e.filter(D).map(({
    uri: uri,
    name: name,
    mimeType: mimeType,
    description: description,
    server: server
  }) => ({
    uri: A("", uri),
    name: A("", name),
    ...(typeof mimeType === "string" && {
      mimeType: mimeType
    }),
    ...(typeof description === "string" && {
      description: description
    }),
    server: A("", server)
  }));
}
function A(e, r) {
  return typeof r === "string" ? r : e;
}
var DB = dn({
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
    return Vji;
  },
  async prompt() {
    return Kji;
  },
  get inputSchema() {
    return V();
  },
  get outputSchema() {
    return G();
  },
  create(e) {
    return {
      async call(r, {
        signal: signal
      }) {
        let s = e.turnMcpClients.filter(item => !MZt(item, e.agentId)),
          {
            server: server_2
          } = r,
          f = server_2 ? pLe(s, server_2) : Ikr(s, name_2, e.permissions());
        if (server_2 && f.length === 0) throw new R(`Server "${server_2}" not found. Available servers: ${s.map(item => item.name).join(", ")}`, "MCP server not found");
        let l = await Promise.all(f.map(async item => {
          if (!Ui(item) || !item.capabilities?.resources) return [];
          let h = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule(),
            y = () => h.ensureConnectedClient(item, {
              signal: signal,
              context: "MCP resource listing"
            });
          try {
            let m = await y();
            if (MZt(m, e.agentId)) return [];
            let M = await Ao(h.fetchResourcesForClient(m), signal, () => new Ke());
            if ((item.config.type === "claudeai-proxy" || item.config.type === "http" && $u(item.config.url)) && h.getDiscoveryFetchError(M) !== void 0) {
              let b = await y();
              if (b !== m) M = await Ao(h.fetchResourcesForClient(b), signal, () => new Ke());
            }
            let T = M.filter(item => !uJt(item));
            if (T.length < M.length) t(`MCP server "${item.name}": ${M.length - T.length} MCP Apps UI resource(s) left out of ${name_2}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${name_4} can still read them by URI`);
            return T;
          } catch (error) {
            if (!We(error)) Gs(item.name, d(error));
            return [];
          }
        }));
        if (signal.aborted) throw new Ke();
        return {
          data: l.flat()
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
var O = {
    size: size,
    textToSanitize: 1048576
  },
  K = 16,
  Z = 256,
  X = 65536;
function w(maxSize, r) {
  return {
    size: 0,
    maxSize: maxSize,
    sixteenthsToSanitize: 0,
    maxSixteenthsToSanitize: 16 * r,
    nonAsciiUnits: 0,
    membersLeftOut: 0
  };
}
function N(e = O.size, r = O.textToSanitize) {
  let i = w(e, r);
  return s => x(s, i);
}
function oYt(e = O.size, r = O.textToSanitize) {
  let i = w(e, r),
    s = w(e, r),
    a = !1;
  return f => {
    let {
      size: size_2,
      sixteenthsToSanitize: sixteenthsToSanitize,
      membersLeftOut: membersLeftOut
    } = i;
    if (a || !x(f, i)) return;
    let y = DH(f);
    if (i.sixteenthsToSanitize === sixteenthsToSanitize && i.membersLeftOut === membersLeftOut) s.size += i.size - size_2, a = !I(s);else a = !x(y, s);
    return a ? void 0 : y;
  };
}
function zat(e, r, i) {
  return `Skipped the last ${r} of ${i} ${e}: the listing is too large. Only about the first 16 MB of a listing is used (less if it has many small values), and only about 1 million characters that are costly to normalize: combining marks, full-width forms, emoji and the like anywhere, and a tool's or prompt's name that is not all ASCII. The server must list fewer or shorter ${e} to get them back.`;
}
function I(e) {
  return e.size <= e.maxSize && e.sixteenthsToSanitize <= e.maxSixteenthsToSanitize;
}
function x(e, r) {
  if (!I(r)) return !1;
  return r.size += Z, L(e, r, !0);
}
function L(e, r, i = !1, s = !1) {
  if (r.size += K, typeof e === "string") H(e, r, s);else if (Array.isArray(e)) {
    for (let a of e) if (!L(a, r)) return !1;
  } else if (D(e)) for (let a in e) {
    if (a === "__proto__") r.membersLeftOut++;
    if (H(a, r), !L(e[a], r, !1, i && a === "name")) return !1;
  }
  return I(r);
}
function H(e, r, i = !1) {
  if (r.size += e.length, !I(r) || uWs(e)) return;
  Q(e, r, i);
}
function Q(e, r, i) {
  if (i) {
    r.sixteenthsToSanitize += 16 * e.length;
    return;
  }
  r.sixteenthsToSanitize += e.length;
  for (let s = 0; s < e.length && I(r); s++) {
    let a = e.charCodeAt(s);
    if (a > 127 && (r.nonAsciiUnits++ < X || ee()[a] === 1)) r.sixteenthsToSanitize += 15;
  }
}
var ee = Am(() => {
  let e = /[\p{M}\u1100-\u11ff\ua960-\ua97f\ud7b0-\udfff]/u;
  return Uint8Array.from({
    length: 65536
  }, (r, i) => {
    let s = String.fromCharCode(i);
    return e.test(s) || wwt(s) !== s ? 1 : 0;
  });
});
function k({
  mode: mode,
  modeBeforeRewrite: modeBeforeRewrite,
  servedCall: servedCall
}) {
  let s = servedCall === !0;
  return (yo(mode, s) || modeBeforeRewrite !== void 0 && yo(modeBeforeRewrite, s)) && (cQr() || a2());
}
function j() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js");
}
function re() {
  return j().mcpSdkErrorClassificationModule();
}
function te() {
  return j().mcpClientModule();
}
function q() {
  return j().mcpDirectoryReadModule();
}
var oe = p(() => u({
    server: o().describe("The MCP server name"),
    uri: o().describe("The directory resource URI to list")
  })),
  ie = p(() => u({
    resources: C(u({
      uri: o().describe("Child resource URI"),
      name: o().describe("Child resource name"),
      mimeType: o().optional().describe("Child MIME type")
    })).describe(`Direct children of the directory resource. Subdirectories appear with mimeType "${mimeType_2}".`),
    error: o().optional().describe("Human-readable error when the server could not list the directory")
  })),
  W = "Directory listing is not enabled in this build.",
  D8 = dn({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `${e.server} ${e.uri}`;
    },
    suppressesAlwaysAllowRule() {
      return $Ge();
    },
    shouldDefer: !0,
    name: name_3,
    aliases: ["ReadMcpResourceDir"],
    searchHint: "list the children of an MCP directory resource",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return zji;
    },
    async prompt() {
      return Gji;
    },
    get inputSchema() {
      return oe();
    },
    get outputSchema() {
      return ie();
    },
    create(e) {
      return {
        async checkPermissions(updatedInput) {
          if (!$Ge()) return {
            behavior: "allow",
            updatedInput: updatedInput
          };
          if (!eDt()) return {
            behavior: "deny",
            message: W,
            decisionReason: {
              type: "other",
              reason: "directory listing off"
            }
          };
          let [i] = pLe(e.turnMcpClients, updatedInput.server);
          if (i !== void 0) {
            let s = U(updatedInput.uri, await sQr(i, e.messages(), e.inheritedMcpSkillMessages())),
              a = U(updatedInput.uri, m3t(i.name, e.messages(), e.inheritedMcpSkillMessages()));
            if (s !== void 0 && s.error === void 0 && _(s) === _(a) && !k(e.permissions())) return {
              behavior: "allow",
              updatedInput: updatedInput
            };
          }
          return {
            behavior: "passthrough",
            message: `${name_3} requires permission.`
          };
        },
        async call(r, {
          signal: signal_2
        }) {
          let turnMcpClients = e.turnMcpClients,
            {
              server: server_3,
              uri: uri_2
            } = r,
            l = Kfo(turnMcpClients, server_3);
          if (nLn(l, e.agentId), !eDt()) return {
            data: {
              resources: [],
              error: W
            }
          };
          if (!q().serverDeclaresDirectoryRead(l.capabilities)) return {
            data: {
              resources: [],
              error: `Server "${l.name}" does not support directory listing.`
            }
          };
          if (l.config.pluginSource) zP(l.config.pluginSource), jB(l.config.pluginSource, "mcp", {
            kind: "mcp-server",
            name: l.name
          });
          let error_2 = WTn(l.name, uri_2, e.messages(), e.inheritedMcpSkillMessages());
          if (error_2 !== void 0) return {
            data: {
              resources: [],
              error: error_2
            }
          };
          let data = U(uri_2, m3t(l.name, e.messages(), e.inheritedMcpSkillMessages()));
          if (data !== void 0) return {
            data: data
          };
          let y = await te().ensureConnectedClient(l, {
            signal: signal_2,
            context: "MCP resource directory read"
          });
          nLn(y, e.agentId);
          let m;
          try {
            m = await q().readMcpDirectory(y, uri_2, signal_2);
          } catch (S) {
            if (signal_2.aborted) throw new Ke();
            let n = re();
            if (n.isMcpNotADirectoryError(S)) return Gs(l.name, `resources/directory/read returned ${n.getMcpErrorCode(S)} \u2014 not a directory`), {
              data: {
                resources: [],
                error: `Not a directory resource: ${uri_2}. If it is a file resource, use ${name_4} instead.`
              }
            };
            throw S;
          }
          let M = N(),
            T = N(),
            resources = (await Dge(m, S => {
              if (!M([S.uri, S.name, S.mimeType])) return [];
              let n = {
                uri: _h(S.uri),
                name: DH(S.name),
                mimeType: S.mimeType !== void 0 ? DH(S.mimeType) : void 0
              };
              return T([n.uri, n.name, n.mimeType]) ? [n] : [];
            })).flat();
          if (resources.length < m.length) return Gs(l.name, zat("directory entries", m.length, m.length)), {
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
      let i = e.resources.map(item => `${item.name}${item.mimeType === mimeType_2 ? "/" : ""}`).join(`
`),
        s = e.resources.length > 0 ? `Directory listing (${e.resources.length} ${P(e.resources.length, "entry", "entries")}):
${i}` : "Directory is empty.";
      return {
        tool_use_id: tool_use_id_2,
        type: "tool_result",
        content: `${s}

${_(e)}`
      };
    }
  });
function U(e, r) {
  if (r.length === 0) return;
  if (Buffer.byteLength(e) > ydt) return {
    resources: [],
    error: `An address of ${Buffer.byteLength(e)} bytes: This directory was not read, because its address is longer than ${ydt} bytes. While a skill from this server is loaded, this app reads a directory only at an address of ${ydt} bytes or less.${r.map(item => aQr(item.skillName)).join("")}`
  };
  if (!r.some(item => e === item.root || e.startsWith(`${item.root}/`))) return {
    resources: [],
    error: `${PNt(e)}: This directory was not read, because its address, as written, is outside the directories of the loaded skills of this server. While a skill from this server is loaded, this tool reads, for this server, only the directories of its loaded skills. For a directory of a loaded skill, copy the address after "at" in that skill's first sentence, character for character, without the full stop. Add "/" and a path only for a subdirectory. If this conversation does not hold that sentence, load that skill here: its first sentence then gives the address. To read a directory of another skill of this server, load that skill first.${r.map(item => aQr(item.skillName)).join("")}`
  };
  let i = Fyi(e, r);
  if (i === void 0) return {
    resources: [],
    error: `${PNt(e)} is not a directory of any skill loaded from this server: no loaded skill lists a file under it. If it is a file, use ${name_4} instead.`
  };
  return {
    resources: i.map(item => ({
      uri: _h(item.uri),
      name: Dh(item.uri.slice(item.uri.lastIndexOf("/") + 1)),
      ...(item.isDirectory && {
        mimeType: mimeType_2
      })
    }))
  };
}
function B() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js");
}
function se() {
  return B().mcpSdkErrorClassificationModule();
}
function Y() {
  return B().mcpClientModule();
}
function ne() {
  return B().mcpDirectoryReadModule();
}
var ae = p(() => u({
    server: o().describe("The MCP server name"),
    uri: o().describe("The resource URI to read")
  })),
  ue = p(() => u({
    contents: C(u({
      uri: o().describe("Resource URI"),
      mimeType: o().optional().describe("MIME type of the content"),
      text: o().optional().describe("Text content of the resource"),
      blobSavedTo: o().optional().describe("Path where binary blob content was saved")
    })),
    error: o().optional().describe("Human-readable error when the server could not read the resource")
  })),
  LB = dn({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `${e.server} ${e.uri}`;
    },
    suppressesAlwaysAllowRule() {
      return $Ge();
    },
    shouldDefer: !0,
    name: name_4,
    aliases: ["ReadMcpResource"],
    searchHint: "read a specific MCP resource by URI",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return _Wi;
    },
    async prompt() {
      return bWi;
    },
    get inputSchema() {
      return ae();
    },
    get outputSchema() {
      return ue();
    },
    create(e) {
      return {
        async checkPermissions(updatedInput_2) {
          if (!$Ge()) return {
            behavior: "allow",
            updatedInput: updatedInput_2
          };
          let [i] = pLe(e.turnMcpClients, updatedInput_2.server),
            s = i === void 0 ? [] : await sQr(i, e.messages(), e.inheritedMcpSkillMessages());
          if (Blr(updatedInput_2.uri, s).case === "listed" && !k(e.permissions())) return {
            behavior: "allow",
            updatedInput: updatedInput_2
          };
          return {
            behavior: "passthrough",
            message: `${name_4} requires permission.`
          };
        },
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
            c = Kfo(turnMcpClients_2, server_4);
          if (nLn(c, e.agentId), c.config.pluginSource) zP(c.config.pluginSource), jB(c.config.pluginSource, "mcp", {
            kind: "mcp-server",
            name: c.name
          });
          let error_3 = WTn(c.name, uri_3, e.messages(), e.inheritedMcpSkillMessages());
          if (error_3 !== void 0) return {
            data: {
              contents: [],
              error: error_3
            }
          };
          let connected = await Y().ensureConnectedClient(c, {
            signal: signal_3,
            context: "MCP resource read"
          });
          nLn(connected, e.agentId);
          let m = Blr(uri_3, m3t(connected.name, e.messages(), e.inheritedMcpSkillMessages())),
            M = async (skills, reason) => ({
              contents: [],
              error: await Nyi({
                connected: connected,
                skills: skills,
                uri: uri_3,
                reason: reason,
                signal: signal_3
              })
            });
          if (m.case === "unlisted") return {
            data: await M(m.skills, m.reason)
          };
          let T;
          try {
            T = await lIt(connected, uri_3, {
              signal: signal_3
            });
          } catch (n) {
            if (signal_3.aborted) throw new Ke();
            let v = se();
            if (v.isMcpMethodNotFoundError(n)) return Gs(c.name, "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads"), {
              data: {
                contents: [],
                error: `Server "${c.name}" advertises resource support but does not implement resource reads.`
              }
            };
            if (v.isMcpResourceNotFoundError(n)) {
              if (Gs(c.name, `resources/read returned ${v.getMcpErrorCode(n)} \u2014 resource not found`), Y().invalidateMcpResourceListCaches(connected), m.case === "listed") return {
                data: await M(m.skills, "not_found")
              };
              let E = ne().serverDeclaresDirectoryRead(connected.capabilities) ? ` If the URI is a directory resource, use ${name_3} instead.` : "";
              return {
                data: {
                  contents: [],
                  error: `Resource not found: ${uri_3} \u2014 it may have been deleted or the URI is stale. Re-run ${name_2} to refresh.${E}`
                }
              };
            }
            throw n;
          }
          let contents = T.contents;
          if (m.case === "listed") {
            let n = iQr(T.contents, uri_3, m.rows);
            if (!n.ok) return {
              data: await M(m.skills, n.reason)
            };
            g("skill_mcp_read"), contents = [n.item];
          }
          return {
            data: {
              contents: await Promise.all(contents.map(async (item, index) => {
                if ("text" in item) return {
                  uri: item.uri,
                  mimeType: item.mimeType,
                  text: item.text
                };
                if (!("blob" in item) || typeof item.blob !== "string") return {
                  uri: item.uri,
                  mimeType: item.mimeType
                };
                let E = `mcp-resource-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
                  z = await F$(Buffer.from(item.blob, "base64"), item.mimeType, E, void 0, storageV5);
                if ("error" in z) {
                  if (Ug() !== void 0) return {
                    uri: item.uri,
                    mimeType: item.mimeType,
                    text: Vye(item.mimeType, Buffer.byteLength(item.blob, "base64"))
                  };
                  return {
                    uri: item.uri,
                    mimeType: item.mimeType,
                    text: `Binary content could not be saved to disk: ${z.error}`
                  };
                }
                return {
                  uri: item.uri,
                  mimeType: item.mimeType,
                  blobSavedTo: z.filepath,
                  text: Gye(z.filepath, item.mimeType, z.size, `[Resource from ${c.name} at ${item.uri}] `)
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
export { DB, oYt, zat, D8, LB };