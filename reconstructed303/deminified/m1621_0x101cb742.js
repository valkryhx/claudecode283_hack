// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nn, we, de, Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Lo, re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { Ft } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { fo, FTs, Ka, ES } from "B:/~BUN/root/chunk-00v9f07q.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { NAe, Qz, Ic, Oo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { mWn, n3 } from "B:/~BUN/root/chunk-vd11ggb1.js";
import { qct, _N } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { den as toolName, cen as toolName_2 } from "B:/~BUN/root/chunk-351qj2sm.js";
import { Ko } from "B:/~BUN/root/chunk-71zxaep1.js";
import { NV } from "B:/~BUN/root/chunk-fwcp237z.js";
import { I9r, Hr } from "B:/~BUN/root/chunk-jynk66qn.js";
import { HF, Pc } from "B:/~BUN/root/chunk-jpmkaw37.js";
import { llr, dlr, vz } from "B:/~BUN/root/chunk-pj523hfd.js";
import { XRe } from "B:/~BUN/root/chunk-5gazt5rq.js";
import { si } from "B:/~BUN/root/chunk-b0487zs4.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { join as v } from "path";
function Hqe() {
  if (de()) throw Error("Cannot use the MCP needs-auth cache file in a diskless session: only a storage backend can hold the cache");
  return v(Pe(), "mcp-needs-auth-cache.json");
}
function REt() {
  return Be.state("mcp-needs-auth-cache");
}
function $qe(e) {
  if (qct(e)) return Promise.resolve({});
  let r = Ft();
  if (!r.authCacheRead) r.authCacheRead = W() && e !== void 0 ? B(e) : gn().read(Hqe()).then(n => J(n)).catch(() => ({}));
  return r.authCacheRead;
}
async function B(e) {
  try {
    let r = await e.read([REt()]);
    if (!r.ok) return {};
    let n = r.value.items[0];
    if (!n.found) return {};
    return J(Buffer.from(n.value).toString("utf8"));
  } catch {
    return {};
  }
}
function AEt() {
  Ft().authCacheRead = null;
}
function vRe(e) {
  if (Ft().authCacheRead = null, W() && e !== void 0) {
    e.delete(REt()).then(r => {
      if (!r.ok) t(`mcp needs-auth cache delete failed: ${yt(r.error)}`, {
        level: "error"
      });
    }).catch(() => {});
    return;
  }
  if (de()) return;
  gn().delete(Hqe()).catch(() => {});
}
function U() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js");
}
function C() {
  return U().mcpAuthModule();
}
function P() {
  return U().mcpClientModule();
}
var j = f(() => u({})),
  F = f(() => u({
    callback_url: o().describe("The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=...")
  }));
function H() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE || Bn();
}
var q = new z(() => new Map()),
  K = 180000;
function G(e) {
  try {
    let r = new URL(e).searchParams.get("redirect_uri");
    if (r) return r;
  } catch {}
  return "http://localhost:<port>/callback";
}
function U$(e, r) {
  if (we()) return [];
  let n = HF(e, r, {
    detail: "origin"
  });
  return [V(e, r, n), X(e, r)];
}
function L(e) {
  let r = e !== void 0 ? n3(e) : mWn();
  return "available automatically";
}
function _(e) {
  return "The server's tools should now be available.";
}
function V(serverName, config, n) {
  let serverType = config.type ?? "stdio",
    g = n && n !== serverType ? `${serverType} at ${FTs(n, 256)}` : serverType,
    b = `The "${fo(serverName)}" MCP server (${g}) is installed but requires authentication. ` + "Call this tool to start the OAuth flow \u2014 you'll receive an authorization URL to share with the user. " + `Once the user completes authorization in their browser, the server's real tools will become ${L()}.`;
  return {
    name: si(serverName, toolName),
    isMcp: !0,
    mcpInfo: {
      serverName: serverName,
      toolName: toolName,
      serverType: serverType,
      source: _N(serverName, config),
      ...(config.pluginSource !== void 0 && {
        pluginSource: config.pluginSource
      }),
      isAuthStub: !0,
      serverId: NAe(config),
      serverIdStamp: XRe(serverName, config)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => serverName,
    userFacingName: () => `${serverName} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Authenticate ${serverName} MCP server`,
    async description() {
      return b;
    },
    async prompt() {
      return b;
    },
    get inputSchema() {
      return j();
    },
    async checkPermissions(updatedInput) {
      return {
        behavior: "allow",
        updatedInput: updatedInput
      };
    },
    async call(y, s) {
      let c = Ic(serverName, config);
      if (c === "managed-policy") return {
        data: {
          status: "error",
          message: vz(serverName, c, config, `${llr(serverName)}. Only an organization admin can change this; do not retry or ask the user to enable it.`)
        }
      };
      if (Oo(serverName)) return {
        data: {
          status: "error",
          message: `MCP server ${fo(serverName)} is disabled. Ask the user to enable it in /mcp before authenticating.`
        }
      };
      if (c === "project-approval") return {
        data: {
          status: "error",
          message: `${dlr(serverName)}. Ask the user to approve it; do not retry until they have.`
        }
      };
      let l = NV(serverName, config);
      if (l.kind === "claudeai-proxy") return {
        data: {
          status: "unsupported",
          message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${fo(serverName)}" to authenticate.`
        }
      };
      if (l.kind === "unsupported-transport") return {
        data: {
          status: "unsupported",
          message: `Server "${fo(serverName)}" uses ${serverType} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`
        }
      };
      if (l.kind === "anthropic-hosted") return {
        data: {
          status: "unsupported",
          message: Ka(l.message, 1024, "none")
        }
      };
      let i = q.of(s.session.host),
        p = i.get(serverName);
      if (p !== void 0 && p.flow === C().getActiveOAuthPromise(serverName) && p.receivesPastedCallbacks() && Nn(p.config, l.config) && p.accountToken !== void 0 && p.accountToken === I9r() && p.identityEpoch === Hr() && Date.now() - p.startedAt < K) return I({
        serverName: serverName,
        config: config,
        authUrlPromise: p.authUrl,
        oauthPromise: p.flow,
        reused: !0,
        tools: s.options.tools
      });
      let O,
        R = new Promise(m => {
          O = m;
        }),
        S,
        A = C().performMCPOAuthFlow(serverName, l.config, m => O?.(m), void 0, {
          skipBrowserOpen: !0,
          onWaitingForCallback: m => {
            S = m;
          }
        });
      C().setActiveOAuthPromise(serverName, A);
      let k = {
        flow: A,
        authUrl: R,
        receivesPastedCallbacks: () => S !== void 0 && C().getOAuthCallbackSubmitter(serverName) === S,
        config: l.config,
        accountToken: I9r(),
        identityEpoch: Hr(),
        startedAt: Date.now()
      };
      i.set(serverName, k), A.catch(() => {}).finally(() => {
        if (i.get(serverName) === k) i.delete(serverName);
      });
      let identityEpoch = k.identityEpoch;
      return A.then(async () => {
        if (Hr() !== identityEpoch) {
          re(serverName, "OAuth completed after an identity change; discarding without reconnecting");
          return;
        }
        if (vRe(s.storageV5), Oo(serverName) || Qz(serverName, config)) {
          re(serverName, "OAuth completed but the server is now disabled or policy-blocked; not reconnecting");
          return;
        }
        let m = await P().reconnectMcpServerImpl(serverName, config, s.storageV5, s.credentials);
        if (Hr() !== identityEpoch) {
          re(serverName, "OAuth completed after an identity change; discarding the stale reconnect");
          return;
        }
        let D = s.getMcp().clients.some(item => item.name === serverName),
          w = s.session.mcpSessionWiring.connections();
        if (!D || w === void 0 || Oo(serverName) || Qz(serverName, config)) {
          re(serverName, "OAuth completed after the server was removed, disabled, or policy-blocked; discarding the fresh connection"), P().clearServerCache(serverName, config).catch(M => re(serverName, `Orphan-connection cleanup failed: ${Ko(M, config)}`)), w?.markReconnectDiscarded(serverName, config);
          return;
        }
        let E = w.adoptServer(serverName, m);
        if (E !== "adopted") {
          re(serverName, `Sign-in finished, but its connection was not adopted (${E}); discarding it`), P().clearServerCache(serverName, config).catch(M => re(serverName, `Orphan-connection cleanup failed: ${Ko(M, config)}`));
          return;
        }
        re(serverName, `OAuth complete, reconnected with ${m.tools.length} tool(s)`);
      }).catch(m => {
        Lo(serverName, `OAuth flow failed after tool-triggered start: ${ES(Pc(serverName, config, d(m)))}`);
      }), I({
        serverName: serverName,
        config: config,
        authUrlPromise: R,
        oauthPromise: A,
        reused: !1,
        tools: s.options.tools
      });
    },
    mapToolResultToToolResultBlockParam(y, tool_use_id) {
      return {
        tool_use_id: tool_use_id,
        type: "tool_result",
        content: y.message
      };
    }
  };
}
async function I({
  serverName: serverName_2,
  config: config_2,
  authUrlPromise: authUrlPromise,
  oauthPromise: oauthPromise,
  reused: reused,
  tools: tools
}) {
  let y = reused ? `A sign-in for ${fo(serverName_2)} that started earlier is still in progress, so the link below is that sign-in's link, not a new one. If the user says the sign-in page showed an error before they could approve access, ask them to run /mcp and sign in there instead.

` : "";
  try {
    let authUrl = await Promise.race([authUrlPromise, oauthPromise.then(() => null)]);
    if (authUrl) {
      let c = si(serverName_2, toolName_2),
        l = G(authUrl),
        i = H() ? `

This session is remote, so after authorizing the browser will try to load \`${l}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${c}\` with that URL as \`callback_url\`.` : `

If the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${c}\` with it.`;
      return {
        data: {
          status: "auth_url",
          authUrl: authUrl,
          message: `${y}Ask the user to open this URL in their browser to authorize the ${fo(serverName_2)} MCP server:

${authUrl}

Once they complete the flow, the server's tools will become ${L(tools)}.${i}`
        }
      };
    }
    return {
      data: {
        status: "auth_url",
        message: `Authentication completed silently for ${fo(serverName_2)}. ${_(tools)}`
      }
    };
  } catch (error) {
    let c = Ka(Pc(serverName_2, config_2, d(error)));
    return {
      data: {
        status: "error",
        message: `Failed to start OAuth flow for ${fo(serverName_2)}: ${c}. Ask the user to run /mcp and authenticate manually.`
      }
    };
  }
}
function X(serverName_3, r) {
  let n = si(serverName_3, toolName),
    h = `Complete an in-progress OAuth flow for the "${fo(serverName_3)}" MCP server by submitting the callback URL. Call \`${n}\` first to start the flow and get the authorization URL. ` + "After the user authorizes in their browser, the browser is redirected to a `http://localhost:<port>/callback?code=...&state=...` URL \u2014 " + "on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as `callback_url`.";
  return {
    name: si(serverName_3, toolName_2),
    isMcp: !0,
    mcpInfo: {
      serverName: serverName_3,
      toolName: toolName_2,
      serverType: r.type ?? "stdio",
      source: _N(serverName_3, r),
      ...(r.pluginSource !== void 0 && {
        pluginSource: r.pluginSource
      }),
      isAuthStub: !0,
      serverId: NAe(r),
      serverIdStamp: XRe(serverName_3, r)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => serverName_3,
    userFacingName: () => `${serverName_3} - complete authentication (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Complete authentication for ${serverName_3} MCP server`,
    async description() {
      return h;
    },
    async prompt() {
      return h;
    },
    get inputSchema() {
      return F();
    },
    async checkPermissions(updatedInput_2) {
      return {
        behavior: "allow",
        updatedInput: updatedInput_2
      };
    },
    async call(g, b) {
      let {
          callback_url: callback_url
        } = g,
        s = C().getOAuthCallbackSubmitter(serverName_3);
      if (!s) return {
        data: {
          status: "error",
          message: `No OAuth flow is in progress for ${fo(serverName_3)}. Call \`${n}\` first, then retry with the callback URL.`
        }
      };
      let c = !1;
      try {
        let i = new URL(callback_url);
        c = i.searchParams.has("code") || i.searchParams.has("error");
      } catch {}
      if (!c) return {
        data: {
          status: "error",
          message: "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string."
        }
      };
      let l = C().getActiveOAuthPromise(serverName_3);
      if (!s(callback_url)) return {
        data: {
          status: "error",
          message: `That callback URL belongs to a different sign-in attempt for ${fo(serverName_3)} (its state does not match the flow in progress), or carries no authorization code. The current flow is still waiting: ask the user for the URL from the page this sign-in opened, then retry.`
        }
      };
      try {
        return await l, {
          data: {
            status: "success",
            message: `Authentication complete for ${fo(serverName_3)}. ${_(b.options.tools)}`
          }
        };
      } catch (error) {
        if (error instanceof C().AuthenticationCancelledError) return {
          data: {
            status: "error",
            message: `The OAuth flow for ${fo(serverName_3)} was cancelled (a newer attempt may have superseded it). Call \`${n}\` again to restart.`
          }
        };
        return {
          data: {
            status: "error",
            message: `Authentication failed for ${fo(serverName_3)}: ${Ka(Pc(serverName_3, r, d(error)))}`
          }
        };
      }
    },
    mapToolResultToToolResultBlockParam(g, tool_use_id_2) {
      return {
        tool_use_id: tool_use_id_2,
        type: "tool_result",
        content: g.message
      };
    }
  };
}
export { Hqe, REt, $qe, AEt, vRe, U$ };