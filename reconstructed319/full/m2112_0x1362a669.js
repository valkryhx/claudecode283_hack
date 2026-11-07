// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ye,
  q,
  xn,
  $H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  Gs,
  ae
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Dn
} from "B:/~BUN/root/chunk-9jpwd6f1.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  bt
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  wo,
  KMi,
  Zl,
  Ev
} from "B:/~BUN/root/chunk-1tbewxs3.js";
import {
  ln
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Lon,
  aOr,
  rn,
  fJ
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  xC,
  ng,
  tK
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  jFe
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  br
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  X2,
  h_
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  v6,
  Gu,
  jo
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  lh
} from "B:/~BUN/root/chunk-gezr7m08.js";
import {
  MF
} from "B:/~BUN/root/chunk-s9vv4h32.js";
import {
  c0e,
  FIn
} from "B:/~BUN/root/chunk-kk81ayzj.js";
import {
  Ns
} from "B:/~BUN/root/chunk-4rgskab2.js";
import {
  M8
} from "B:/~BUN/root/chunk-989rexdd.js";
import {
  V8o,
  zr
} from "B:/~BUN/root/chunk-7jbamvvk.js";
import {
  pve
} from "B:/~BUN/root/chunk-jzac91sc.js";
import {
  lF,
  Cu
} from "B:/~BUN/root/chunk-2d2hmxhb.js";
import {
  Q8r,
  Z8r,
  C3e
} from "B:/~BUN/root/chunk-pyp8n05h.js";
import {
  Do
} from "B:/~BUN/root/chunk-4srmsy10.js";
import {
  Eq,
  Tce,
  fdo
} from "B:/~BUN/root/chunk-p25ahy45.js";
import {
  mr
} from "B:/~BUN/root/chunk-s20ae4sg.js";
import {
  yw
} from "B:/~BUN/root/chunk-x0zaah42.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  join as x
} from "path";

function jat() {
  if (q()) throw Error("Cannot use the MCP needs-auth cache file in a diskless session: only a storage backend can hold the cache");
  return x(Ue(), "mcp-needs-auth-cache.json")
}

function nYt() {
  return Ve.state("mcp-needs-auth-cache")
}

function Wat(e) {
  if (fJ(e)) return Promise.resolve({});
  let r = bt();
  if (!r.authCacheRead) r.authCacheRead = X() && e !== void 0 ? B(e) : Dn().read(jat()).then((n) => ee(n)).catch(() => ({}));
  return r.authCacheRead
}
async function B(e) {
  try {
    let r = await e.read([nYt()]);
    if (!r.ok) return {};
    let n = r.value.items[0];
    if (!n.found) return {};
    return ee(Buffer.from(n.value).toString("utf8"))
  } catch {
    return {}
  }
}

function rYt() {
  bt().authCacheRead = null
}

function p1e(e) {
  if (bt().authCacheRead = null, X() && e !== void 0) {
    e.delete(nYt()).then((r) => {
      if (!r.ok) t(`mcp needs-auth cache delete failed: ${Ht(r.error)}`, {
        level: "error"
      })
    }).catch(() => {});
    return
  }
  if (q()) return;
  Dn().delete(jat()).catch(() => {})
}
var E = "the user can reconnect it in their claude.ai connector settings",
  v = "the chat may now show the user a sign-in card for it; ask them to sign in there or in their claude.ai connector settings, and retry only after they say they have";

function L(e) {
  return ng() && "url" in e && jFe(e.url)
}
var MB = {
  notConnected(e) {
    return aOr() ? `MCP server "${e}" needs to be connected in claude.ai` : `MCP server "${e}" needs to be connected in claude.ai (run /mcp to connect it)`
  },
  signInAgain(e, r) {
    if (Eq(e)) return fdo;
    let n = `MCP server "${e}" needs you to sign in again`;
    return ng() ? `${n} (${L(r)?v:E})` : Lon() ? n : `${n} (run /mcp to re-authenticate)`
  },
  helperRejected(e) {
    let r = `MCP server "${e}" rejected the credential from its headersHelper`;
    return Lon() ? `${r} (check the helper, then start a new task or chat)` : `${r} (check the helper and run /mcp to reconnect, or to authenticate if the server also uses OAuth)`
  },
  headerRejected(e) {
    let r = `MCP server "${e}" rejected the Authorization header in its config`;
    return Lon() ? `${r} (update it, then start a new task or chat)` : `${r} (update it, then run /mcp to reconnect)`
  },
  dialNeedsAuth(e, r) {
    if (Eq(e)) return Tce("needs_auth");
    let n = `MCP server "${e}" needs authentication`;
    return L(r) ? `${n} (${v})` : n
  },
  dialNotConnected(e, r) {
    if (Eq(e)) return Tce("failed");
    return `MCP server "${e}" is not connected${r}`
  },
  sessionCredentialRejected(e, r) {
    if (Eq(e)) return fdo;
    return `MCP server "${e}" rejected the session credential (HTTP ${r})`
  },
  stepUp(e, r) {
    if (Eq(e)) return fdo;
    let n = Zl(r ?? "", void 0, "none"),
      a = `MCP server "${e}" needs additional permissions (scope: "${n}")`;
    return ng() ? `${a} \u2014 ${E}` : `${a} \u2014 run /mcp to re-authenticate`
  }
};
var V = "tengu_eager_raccoon",
  K = "tengu_patient_raccoon",
  Y = p(() => u({})),
  J = new W(() => new Map);

function N8o() {
  return tK() && rn(V, !1) && (xC() || rn(K, !1))
}

function Q() {
  return N8o() && lh() && !X2()
}

function y3e(e, r) {
  return Q() && Do().lapsedCcrSignIns.has(mr(e, r))
}

function U(e, r, n) {
  let a = wo(e),
    C = `The "${a}" connector is installed, but its sign-in has stopped working, so its tools are unavailable. Call this tool only when the user's request needs this connector (even if they didn't name it explicitly). It tries the connection again. If the connector still needs a sign-in, the call fails, and the user may be shown a prompt to sign in again. Then tell them in one short sentence that ${a} needs them to sign in again, carry on with whatever does not need it, and do not call this tool again until they send another message. If the call fails for another reason, tell them that ${a} is not available right now. If the connection succeeds, the connector's tools become available. Do not ask the user for authorization codes, tokens, or URLs.`;
  return {
    name: br(e, c0e),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: c0e,
      serverType: r.type ?? "stdio",
      source: MF(e, r),
      isAuthStub: !0,
      serverId: yw(r),
      serverIdStamp: pve(e, r)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    backgrounding: "never",
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Check the sign-in of ${e}`,
    async description() {
      return C
    },
    async prompt() {
      return C
    },
    get inputSchema() {
      return Y()
    },
    async checkPermissions(m) {
      return {
        behavior: "allow",
        updatedInput: m
      }
    },
    async call(m, l) {
      let s = J.of(l.session.host),
        f = $H();
      if (s.get(e) === f) throw new R(`The "${a}" connector was already tried in this turn.`, "Connector sign-in tool called twice in one turn");
      s.set(e, f);
      let c = n(),
        h = await c.peekSettledConnection(e, r);
      if (h !== void 0 && (h.type !== "connected" || h.discoveryAuthFailure)) await c.clearServerCache(e, r);
      let g = Promise.withResolvers();
      try {
        let y = await c.ensureConnectedClient({
            name: e,
            type: "cached",
            config: r,
            capabilities: {},
            cacheSavedAt: 0
          }, {
            context: "MCP sign-in check",
            signal: l.abortController.signal,
            toolUseId: l.toolUseId,
            toolUseIdWithListingsUntil: g.promise
          }),
          M = await c.fetchToolsForClient(y, l.storageV5);
        if (y.discoveryAuthFailure) throw Object.assign(new R(MB.dialNeedsAuth(a, r), "MCP server needs authentication"), {
          mcpErrorSource: "user_auth"
        });
        if (c.getToolsListErrorForResult(M) !== void 0) throw new R(`The "${a}" connector connected, but its tools could not be listed.`, "Connector connected but its tools could not be listed");
        return {
          data: {
            message: `The "${a}" connector is connected again. Its tools are being added and should be available shortly.`
          }
        }
      } catch (y) {
        let M = MB.dialNotConnected(e, "");
        if (y instanceof Error && y.message.startsWith(M)) y.message = MB.dialNotConnected(a, "");
        throw y
      } finally {
        g.resolve()
      }
    },
    mapToolResultToToolResultBlockParam(m, l) {
      return {
        tool_use_id: l,
        type: "tool_result",
        content: m.message
      }
    }
  }
}

function z() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js")
}

function b() {
  return z().mcpAuthModule()
}

function w() {
  return z().mcpClientModule()
}
var N = p(() => u({})),
  tt = p(() => u({
    callback_url: o().describe("The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=...")
  }));

function et() {
  return i.isSSH() || i.CLAUDE_CODE_REMOTE || xn()
}
var ot = new W(() => new Map),
  rt = 180000;

function nt(e) {
  try {
    let r = new URL(e).searchParams.get("redirect_uri");
    if (r) return r
  } catch {}
  return "http://localhost:<port>/callback"
}

function aF(e, r) {
  if (ye()) return y3e(e, r) ? [U(e, r, w)] : [];
  let n = lF(e, r, {
    detail: "origin"
  });
  return [st(e, r, n), it(e, r)]
}

function F(e) {
  let r = e !== void 0 ? h_(e) : X2();
  return le() && r ? "callable inside the REPL environment (this surface routes MCP tools through the REPL rather than advertising them as top-level tools)" : "available automatically"
}

function j(e) {
  return le() && h_(e) ? "The server's tools are now callable inside the REPL environment (this surface routes MCP tools through the REPL rather than advertising them as top-level tools)." : "The server's tools should now be available."
}

function st(e, r, n) {
  let a = r.type ?? "stdio",
    C = n && n !== a ? `${a} at ${KMi(n,256)}` : a,
    m = `The "${wo(e)}" MCP server (${C}) is installed but requires authentication. ` + "Call this tool to start the OAuth flow \u2014 you'll receive an authorization URL to share with the user. " + `Once the user completes authorization in their browser, the server's real tools will become ${F()}.`;
  return {
    name: br(e, c0e),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: c0e,
      serverType: a,
      source: MF(e, r),
      ...r.pluginSource !== void 0 && {
        pluginSource: r.pluginSource
      },
      isAuthStub: !0,
      serverId: yw(r),
      serverIdStamp: pve(e, r)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Authenticate ${e} MCP server`,
    async description() {
      return m
    },
    async prompt() {
      return m
    },
    get inputSchema() {
      return N()
    },
    async checkPermissions(l) {
      return {
        behavior: "allow",
        updatedInput: l
      }
    },
    async call(l, s) {
      let f = Gu(e, r);
      if (f === "managed-policy") return {
        data: {
          status: "error",
          message: C3e(e, f, r, `${Q8r(e)}. Only an organization admin can change this; do not retry or ask the user to enable it.`)
        }
      };
      if (jo(e)) return {
        data: {
          status: "error",
          message: `MCP server ${wo(e)} is disabled. Ask the user to enable it in /mcp before authenticating.`
        }
      };
      if (f === "project-approval") return {
        data: {
          status: "error",
          message: `${Z8r(e)}. Ask the user to approve it; do not retry until they have.`
        }
      };
      let c = M8(e, r);
      if (c.kind === "claudeai-proxy") return {
        data: {
          status: "unsupported",
          message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${wo(e)}" to authenticate.`
        }
      };
      if (c.kind === "unsupported-transport") return {
        data: {
          status: "unsupported",
          message: `Server "${wo(e)}" uses ${a} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`
        }
      };
      if (c.kind === "anthropic-hosted") return {
        data: {
          status: "unsupported",
          message: Zl(c.message, 1024, "none")
        }
      };
      let h = ot.of(s.session.host),
        g = h.get(e);
      if (g !== void 0 && g.flow === b().getActiveOAuthPromise(e) && g.receivesPastedCallbacks() && ln(g.config, c.config) && g.accountToken !== void 0 && g.accountToken === V8o() && g.identityEpoch === zr() && Date.now() - g.startedAt < rt) return D({
        serverName: e,
        config: r,
        authUrlPromise: g.authUrl,
        oauthPromise: g.flow,
        reused: !0,
        tools: s.options.tools
      });
      let y, M = new Promise((S) => {
          y = S
        }),
        P, A = b().performMCPOAuthFlow(e, c.config, (S) => y?.(S), void 0, {
          skipBrowserOpen: !0,
          onWaitingForCallback: (S) => {
            P = S
          }
        });
      b().setActiveOAuthPromise(e, A);
      let I = {
        flow: A,
        authUrl: M,
        receivesPastedCallbacks: () => P !== void 0 && b().getOAuthCallbackSubmitter(e) === P,
        config: c.config,
        accountToken: V8o(),
        identityEpoch: zr(),
        startedAt: Date.now()
      };
      h.set(e, I), A.catch(() => {}).finally(() => {
        if (h.get(e) === I) h.delete(e)
      });
      let O = I.identityEpoch;
      return A.then(async () => {
        if (zr() !== O) {
          ae(e, "OAuth completed after an identity change; discarding without reconnecting");
          return
        }
        if (p1e(s.storageV5), jo(e) || v6(e, r)) {
          ae(e, "OAuth completed but the server is now disabled or policy-blocked; not reconnecting");
          return
        }
        let S = await w().reconnectMcpServerImpl(e, r, s.storageV5, s.credentials);
        if (zr() !== O) {
          ae(e, "OAuth completed after an identity change; discarding the stale reconnect");
          return
        }
        let H = s.getMcp().clients.some((T) => T.name === e),
          k = s.session.mcpSessionWiring.connections();
        if (!H || k === void 0 || jo(e) || v6(e, r)) {
          ae(e, "OAuth completed after the server was removed, disabled, or policy-blocked; discarding the fresh connection"), w().clearServerCache(e, r).catch((T) => ae(e, `Orphan-connection cleanup failed: ${Ns(T,r)}`)), k?.markReconnectDiscarded(e, r);
          return
        }
        let _ = k.adoptServer(e, S);
        if (_ !== "adopted") {
          ae(e, `Sign-in finished, but its connection was not adopted (${_}); discarding it`), w().clearServerCache(e, r).catch((T) => ae(e, `Orphan-connection cleanup failed: ${Ns(T,r)}`));
          return
        }
        ae(e, `OAuth complete, reconnected with ${S.tools.length} tool(s)`)
      }).catch((S) => {
        Gs(e, `OAuth flow failed after tool-triggered start: ${Ev(Cu(e,r,d(S)))}`)
      }), D({
        serverName: e,
        config: r,
        authUrlPromise: M,
        oauthPromise: A,
        reused: !1,
        tools: s.options.tools
      })
    },
    mapToolResultToToolResultBlockParam(l, s) {
      return {
        tool_use_id: s,
        type: "tool_result",
        content: l.message
      }
    }
  }
}
async function D({
  serverName: e,
  config: r,
  authUrlPromise: n,
  oauthPromise: a,
  reused: C,
  tools: m
}) {
  let l = C ? `A sign-in for ${wo(e)} that started earlier is still in progress, so the link below is that sign-in's link, not a new one. If the user says the sign-in page showed an error before they could approve access, ask them to run /mcp and sign in there instead.

` : "";
  try {
    let s = await Promise.race([n, a.then(() => null)]);
    if (s) {
      let f = br(e, FIn),
        c = nt(s),
        h = et() ? `

This session is remote, so after authorizing the browser will try to load \`${c}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${f}\` with that URL as \`callback_url\`.` : `

If the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${f}\` with it.`;
      return {
        data: {
          status: "auth_url",
          authUrl: s,
          message: `${l}Ask the user to open this URL in their browser to authorize the ${wo(e)} MCP server:

${s}

Once they complete the flow, the server's tools will become ${F(m)}.${h}`
        }
      }
    }
    return {
      data: {
        status: "auth_url",
        message: `Authentication completed silently for ${wo(e)}. ${j(m)}`
      }
    }
  } catch (s) {
    let f = Zl(Cu(e, r, d(s)));
    return {
      data: {
        status: "error",
        message: `Failed to start OAuth flow for ${wo(e)}: ${f}. Ask the user to run /mcp and authenticate manually.`
      }
    }
  }
}

function it(e, r) {
  let n = br(e, c0e),
    a = `Complete an in-progress OAuth flow for the "${wo(e)}" MCP server by submitting the callback URL. Call \`${n}\` first to start the flow and get the authorization URL. ` + "After the user authorizes in their browser, the browser is redirected to a `http://localhost:<port>/callback?code=...&state=...` URL \u2014 " + "on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as `callback_url`.";
  return {
    name: br(e, FIn),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: FIn,
      serverType: r.type ?? "stdio",
      source: MF(e, r),
      ...r.pluginSource !== void 0 && {
        pluginSource: r.pluginSource
      },
      isAuthStub: !0,
      serverId: yw(r),
      serverIdStamp: pve(e, r)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - complete authentication (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Complete authentication for ${e} MCP server`,
    async description() {
      return a
    },
    async prompt() {
      return a
    },
    get inputSchema() {
      return tt()
    },
    async checkPermissions(C) {
      return {
        behavior: "allow",
        updatedInput: C
      }
    },
    async call(C, m) {
      let {
        callback_url: l
      } = C, s = b().getOAuthCallbackSubmitter(e);
      if (!s) return {
        data: {
          status: "error",
          message: `No OAuth flow is in progress for ${wo(e)}. Call \`${n}\` first, then retry with the callback URL.`
        }
      };
      let f = !1;
      try {
        let h = new URL(l);
        f = h.searchParams.has("code") || h.searchParams.has("error")
      } catch {}
      if (!f) return {
        data: {
          status: "error",
          message: "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string."
        }
      };
      let c = b().getActiveOAuthPromise(e);
      if (!s(l)) return {
        data: {
          status: "error",
          message: `That callback URL belongs to a different sign-in attempt for ${wo(e)} (its state does not match the flow in progress), or carries no authorization code. The current flow is still waiting: ask the user for the URL from the page this sign-in opened, then retry.`
        }
      };
      try {
        return await c, {
          data: {
            status: "success",
            message: `Authentication complete for ${wo(e)}. ${j(m.options.tools)}`
          }
        }
      } catch (h) {
        if (h instanceof b().AuthenticationCancelledError) return {
          data: {
            status: "error",
            message: `The OAuth flow for ${wo(e)} was cancelled (a newer attempt may have superseded it). Call \`${n}\` again to restart.`
          }
        };
        return {
          data: {
            status: "error",
            message: `Authentication failed for ${wo(e)}: ${Zl(Cu(e,r,d(h)))}`
          }
        }
      }
    },
    mapToolResultToToolResultBlockParam(C, m) {
      return {
        tool_use_id: m,
        type: "tool_result",
        content: C.message
      }
    }
  }
}
export {
  MB,
  N8o,
  y3e,
  jat,
  nYt,
  Wat,
  rYt,
  p1e,
  aF
};
