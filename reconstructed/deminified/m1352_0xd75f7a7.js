// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Te, Yn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Oo, ne } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { jt } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Nr, mvo, ga, iy, ZIt as toolName, eOt as toolName_2 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { XU, lF, Hf, Uo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { win, gz } from "B:/~BUN/root/chunk-9mfh08mz.js";
import { LU } from "B:/~BUN/root/chunk-kvkan44b.js";
import { vO, Mc } from "B:/~BUN/root/chunk-s08gcgdz.js";
import { EIn, TIn } from "B:/~BUN/root/chunk-tg1j81wg.js";
import { br } from "B:/~BUN/root/chunk-brdpd4rf.js";
import { Ia } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { join as E } from "path";
function y0e() {
  return E(Se(), "mcp-needs-auth-cache.json");
}
function Uet() {
  return Ae.state("mcp-needs-auth-cache");
}
function _0e(e) {
  let r = jt();
  if (!r.authCacheRead) r.authCacheRead = H() && e !== void 0 ? L(e) : Qt().read(y0e()).then(n => J(n)).catch(() => ({}));
  return r.authCacheRead;
}
async function L(e) {
  try {
    let r = await e.read([Uet()]);
    if (!r.ok) return {};
    let n = r.value.items[0];
    if (!n.found) return {};
    return J(Buffer.from(n.value).toString("utf8"));
  } catch {
    return {};
  }
}
function Bet() {
  jt().authCacheRead = null;
}
function Fpe(e) {
  if (jt().authCacheRead = null, H() && e !== void 0) {
    e.delete(Uet()).then(r => {
      if (!r.ok) t(`mcp needs-auth cache delete failed: ${rt(r.error)}`, {
        level: "error"
      });
    }).catch(() => {});
    return;
  }
  Qt().delete(y0e()).catch(() => {});
}
function T() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js");
}
function A() {
  return T().mcpAuthModule();
}
function P() {
  return T().mcpClientModule();
}
var U = f(() => u({})),
  _ = f(() => u({
    callback_url: o().describe("The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=...")
  }));
function I() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE || Yn();
}
function z(e) {
  try {
    let r = new URL(e).searchParams.get("redirect_uri");
    if (r) return r;
  } catch {}
  return "http://localhost:<port>/callback";
}
function bM(e, r) {
  if (Te()) return [];
  let n = vO(e, r, {
    detail: "origin"
  });
  return [D(e, r, n), v(e, r)];
}
function w(e) {
  let r = e !== void 0 ? gz(e) : win();
  return "available automatically";
}
function k(e) {
  return "The server's tools should now be available.";
}
function D(serverName, r, n) {
  let serverType = r.type ?? "stdio",
    p = n && n !== serverType ? `${serverType} at ${mvo(n, 256)}` : serverType,
    g = `The "${Nr(serverName)}" MCP server (${p}) is installed but requires authentication. ` + "Call this tool to start the OAuth flow \u2014 you'll receive an authorization URL to share with the user. " + `Once the user completes authorization in their browser, the server's real tools will become ${w()}.`;
  return {
    name: Ia(serverName, toolName),
    isMcp: !0,
    mcpInfo: {
      serverName: serverName,
      toolName: toolName,
      serverType: serverType,
      source: XU(serverName, r),
      isAuthStub: !0
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => serverName,
    userFacingName: () => `${serverName} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Authenticate ${serverName} MCP server`,
    async description() {
      return g;
    },
    async prompt() {
      return g;
    },
    get inputSchema() {
      return U();
    },
    async checkPermissions(updatedInput) {
      return {
        behavior: "allow",
        updatedInput: updatedInput
      };
    },
    async call(d, i) {
      let C = Hf(serverName, r);
      if (C === "managed-policy") return {
        data: {
          status: "error",
          message: `${EIn(serverName)}. Only an organization admin can change this; do not retry or ask the user to enable it.`
        }
      };
      if (Uo(serverName)) return {
        data: {
          status: "error",
          message: `MCP server ${Nr(serverName)} is disabled. Ask the user to enable it in /mcp before authenticating.`
        }
      };
      if (C === "project-approval") return {
        data: {
          status: "error",
          message: `${TIn(serverName)}. Ask the user to approve it; do not retry until they have.`
        }
      };
      let m = LU(serverName, r);
      if (m.kind === "claudeai-proxy") return {
        data: {
          status: "unsupported",
          message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${Nr(serverName)}" to authenticate.`
        }
      };
      if (m.kind === "unsupported-transport") return {
        data: {
          status: "unsupported",
          message: `Server "${Nr(serverName)}" uses ${serverType} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`
        }
      };
      if (m.kind === "anthropic-hosted") return {
        data: {
          status: "unsupported",
          message: ga(m.message, 1024, "none")
        }
      };
      let h,
        promise = new Promise(s => {
          h = s;
        }),
        S = A().performMCPOAuthFlow(serverName, m.config, s => h?.(s), void 0, {
          skipBrowserOpen: !0
        });
      A().setActiveOAuthPromise(serverName, S);
      let R = br();
      S.then(async () => {
        if (br() !== R) {
          ne(serverName, "OAuth completed after an identity change; discarding without reconnecting");
          return;
        }
        if (Fpe(i.storageV5), Uo(serverName) || lF(serverName, r)) {
          ne(serverName, "OAuth completed but the server is now disabled or policy-blocked; not reconnecting");
          return;
        }
        let s = await P().reconnectMcpServerImpl(serverName, r, i.storageV5, i.credentials);
        if (br() !== R) {
          ne(serverName, "OAuth completed after an identity change; discarding the stale reconnect");
          return;
        }
        let y = i.getMcp().clients.some(item => item.name === serverName),
          M = i.session.mcpSessionWiring.connections();
        if (!y || M === void 0 || Uo(serverName) || lF(serverName, r)) {
          ne(serverName, "OAuth completed after the server was removed, disabled, or policy-blocked; discarding the fresh connection"), P().clearServerCache(serverName, r).catch(b => ne(serverName, `Orphan-connection cleanup failed: ${l(b)}`));
          return;
        }
        M.adoptServer(serverName, s, {
          appendIfAbsent: !1
        }), ne(serverName, `OAuth complete, reconnected with ${s.tools.length} tool(s)`);
      }).catch(s => {
        Oo(serverName, `OAuth flow failed after tool-triggered start: ${iy(Mc(serverName, r, l(s)))}`);
      });
      try {
        let authUrl = await Promise.race([promise, S.then(() => null)]);
        if (authUrl) {
          let y = Ia(serverName, toolName_2),
            M = z(authUrl),
            b = I() ? `

This session is remote, so after authorizing the browser will try to load \`${M}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${y}\` with that URL as \`callback_url\`.` : `

If the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${y}\` with it.`;
          return {
            data: {
              status: "auth_url",
              authUrl: authUrl,
              message: `Ask the user to open this URL in their browser to authorize the ${Nr(serverName)} MCP server:

${authUrl}

Once they complete the flow, the server's tools will become ${w(i.options.tools)}.${b}`
            }
          };
        }
        return {
          data: {
            status: "auth_url",
            message: `Authentication completed silently for ${Nr(serverName)}. ${k(i.options.tools)}`
          }
        };
      } catch (error) {
        let y = ga(Mc(serverName, r, l(error)));
        return {
          data: {
            status: "error",
            message: `Failed to start OAuth flow for ${Nr(serverName)}: ${y}. Ask the user to run /mcp and authenticate manually.`
          }
        };
      }
    },
    mapToolResultToToolResultBlockParam(d, tool_use_id) {
      return {
        tool_use_id: tool_use_id,
        type: "tool_result",
        content: d.message
      };
    }
  };
}
function v(serverName_2, r) {
  let n = Ia(serverName_2, toolName),
    c = `Complete an in-progress OAuth flow for the "${Nr(serverName_2)}" MCP server by submitting the callback URL. Call \`${n}\` first to start the flow and get the authorization URL. ` + "After the user authorizes in their browser, the browser is redirected to a `http://localhost:<port>/callback?code=...&state=...` URL \u2014 " + "on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as `callback_url`.";
  return {
    name: Ia(serverName_2, toolName_2),
    isMcp: !0,
    mcpInfo: {
      serverName: serverName_2,
      toolName: toolName_2,
      serverType: r.type ?? "stdio",
      source: XU(serverName_2, r),
      isAuthStub: !0
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => serverName_2,
    userFacingName: () => `${serverName_2} - complete authentication (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Complete authentication for ${serverName_2} MCP server`,
    async description() {
      return c;
    },
    async prompt() {
      return c;
    },
    get inputSchema() {
      return _();
    },
    async checkPermissions(updatedInput_2) {
      return {
        behavior: "allow",
        updatedInput: updatedInput_2
      };
    },
    async call(p, g) {
      let {
          callback_url: callback_url
        } = p,
        i = A().getOAuthCallbackSubmitter(serverName_2);
      if (!i) return {
        data: {
          status: "error",
          message: `No OAuth flow is in progress for ${Nr(serverName_2)}. Call \`${n}\` first, then retry with the callback URL.`
        }
      };
      let C = !1;
      try {
        let h = new URL(callback_url);
        C = h.searchParams.has("code") || h.searchParams.has("error");
      } catch {}
      if (!C) return {
        data: {
          status: "error",
          message: "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string."
        }
      };
      let m = A().getActiveOAuthPromise(serverName_2);
      if (!i(callback_url)) return {
        data: {
          status: "error",
          message: `That callback URL belongs to a different sign-in attempt for ${Nr(serverName_2)} (its state does not match the flow in progress), or carries no authorization code. The current flow is still waiting: ask the user for the URL from the page this sign-in opened, then retry.`
        }
      };
      try {
        return await m, {
          data: {
            status: "success",
            message: `Authentication complete for ${Nr(serverName_2)}. ${k(g.options.tools)}`
          }
        };
      } catch (error) {
        if (error instanceof A().AuthenticationCancelledError) return {
          data: {
            status: "error",
            message: `The OAuth flow for ${Nr(serverName_2)} was cancelled (a newer attempt may have superseded it). Call \`${n}\` again to restart.`
          }
        };
        return {
          data: {
            status: "error",
            message: `Authentication failed for ${Nr(serverName_2)}: ${ga(Mc(serverName_2, r, l(error)))}`
          }
        };
      }
    },
    mapToolResultToToolResultBlockParam(p, tool_use_id_2) {
      return {
        tool_use_id: tool_use_id_2,
        type: "tool_result",
        content: p.message
      };
    }
  };
}
export { y0e, Uet, _0e, Bet, Fpe, bM };