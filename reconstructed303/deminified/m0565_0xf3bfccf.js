// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t4, Fte } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { x, H, d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { _, J, G4, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { tL, Bh } from "B:/~BUN/root/chunk-8z3a373v.js";
import { D9 } from "B:/~BUN/root/chunk-78zw0pmb.js";
import { LV } from "B:/~BUN/root/chunk-embqzdh7.js";
import { jE } from "B:/~BUN/root/chunk-psvhak2h.js";
import { VFt, lan, qFt } from "B:/~BUN/root/chunk-8d9x5cx1.js";
import { pO } from "B:/~BUN/root/chunk-xf25v2pj.js";
import { _2t, aKr, lKr as schema_2, U5o as run_2 } from "B:/~BUN/root/chunk-0y880t27.js";
import { j5o } from "B:/~BUN/root/chunk-mnxqm3v0.js";
import { MB, o0e } from "B:/~BUN/root/chunk-cr3jjat9.js";
import { o, v, M, u, U, wa } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { randomUUID as me } from "crypto";
import { join as ue } from "path";
function ke(r) {
  return typeof r === "object" && r !== null && "type" in r && (r.type === "token_update" || r.type === "auth_401_result");
}
function ye(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401";
}
var we = 300000,
  re = 240000,
  ve = 300000,
  Te = 30000,
  ge = 86400000;
function ce() {
  return Be.state("daemon-auth-cooldown");
}
function Ae() {
  return Be.state("daemon-auth-status");
}
function H5o(r, n, c, storageV5, credentials, w = () => !1) {
  let h = () => ({
      usesLoginOffFirstParty: c()
    }),
    m,
    T = !1,
    k = null,
    y = new Set(),
    S = null,
    P = null;
  function R() {
    return P ??= import("B:/~BUN/root/chunk-nnhd4yzs.js");
  }
  function F(accessToken) {
    let a = {
      type: "token_update",
      accessToken: accessToken
    };
    for (let g of y) try {
      g.send(a);
    } catch {}
  }
  async function B() {
    let a = await (await R()).getClaudeAIOAuthTokensAsync(credentials);
    if (a?.accessToken && a.accessToken !== m?.accessToken) m = {
      accessToken: a.accessToken,
      scopes: a.scopes,
      subscriptionType: a.subscriptionType ?? null,
      rateLimitTier: a.rateLimitTier ?? null
    }, F(m.accessToken);
    N(a?.expiresAt ?? null);
  }
  let q,
    X = !1;
  function E(s) {
    if (q = s, S || r.aborted) return;
    if (k) clearTimeout(k), k = null;
    n("auth: no token found, will re-check keychain every 30s"), S = setInterval(function () {
      R().then(async g => {
        let A = g.isUsing3PServices() && !c() && !w();
        if (A !== X) X = A, n(A ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (A) return;
        g.clearOAuthTokenCache();
        let e = await g.getClaudeAIOAuthTokensAsync(credentials),
          b;
        if (e?.accessToken && e.accessToken !== q && e.expiresAt && e.expiresAt > Date.now()) b = "auth: token found via keychain re-check";else if (e?.refreshToken && (await g.checkAndRefreshOAuthTokenIfNeeded({
          credentials: credentials,
          storageV5: storageV5,
          ...h()
        }))) b = "auth: token refreshed via keychain re-check retry";
        if (b) {
          if (await B(), m && S) clearInterval(S), S = null, n(b);
        }
      }).catch(g => n(`auth: keychain re-check error: ${g}`));
    }, Te), S.unref();
  }
  function N(s) {
    if (k) clearTimeout(k), k = null;
    if (!s || r.aborted) return;
    let a = Math.min(Math.max(s - Date.now() - re, 5000), ge);
    n(`auth: scheduling proactive refresh in ${Math.round(a / 1000)}s`), k = setTimeout(V, a), k.unref();
  }
  async function V() {
    if (r.aborted) return;
    try {
      n("auth: proactive refresh starting");
      let s = await R(),
        a = m?.accessToken,
        g = await s.checkAndRefreshOAuthTokenIfNeeded({
          credentials: credentials,
          storageV5: storageV5,
          ...h()
        });
      s.clearOAuthTokenCache();
      let A = await s.getClaudeAIOAuthTokensAsync(credentials),
        e = A?.expiresAt ?? null,
        b = e === null || e > Date.now() + we;
      if (A?.accessToken && (g || A.accessToken !== a || b) && (e === null || e > Date.now() + re)) {
        await B(), n(g ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (A?.accessToken && e !== null && e > Date.now()) {
        n("auth: proactive refresh failed, retrying in ~60s (token still valid)"), N(Date.now() + 60000 + re);
        return;
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let C = A?.accessToken ?? a;
      m = void 0, await Q(), E(C);
    } catch (error) {
      n(`auth: proactive refresh error: ${error}`), N(Date.now() + 60000 + re);
    }
  }
  async function Z(s) {
    if (T) return n("auth: 401 ignored (3P provider active, no OAuth)"), !1;
    n("auth: handling 401");
    let a = await R();
    if (await a.handleOAuth401Error(s, credentials, storageV5, h())) return a.clearOAuthTokenCache(), await B(), n("auth: 401 recovery succeeded"), !0;
    n("auth: 401 recovery failed, signalling re-auth required"), m = void 0, await Q(), a.clearOAuthTokenCache();
    let A = await a.getClaudeAIOAuthTokensAsync(credentials);
    if (A?.accessToken !== void 0 && A.accessToken !== s) return await B(), !0;
    return E(s), !1;
  }
  let D = null;
  function Q() {
    if (D) return D;
    return D = oe().finally(() => {
      D = null;
    }), D;
  }
  async function oe() {
    let s = await R();
    if (s.getAnthropicApiKey()) {
      n("auth: browser login skipped (API key auth available)");
      return;
    }
    if (s.isUsing3PServices() && !c()) {
      n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let a = Pe(),
      g = ue(a, "daemon-auth-cooldown"),
      A = ue(a, "daemon-auth-status.json");
    try {
      let e;
      if (W() && storageV5 !== void 0) {
        let C = await storageV5.read([ce()]);
        if (!C.ok) throw new x(`v5 cooldown read failed: ${C.error.code}${"telemetryCode" in C.error && C.error.telemetryCode ? ` (${C.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown read failed");
        let O = C.value.items[0];
        e = O.found ? Buffer.from(O.value).toString("utf8") : null;
      } else e = await gn().read(g);
      let b = e === null ? NaN : parseInt(e, 10);
      if (!Number.isNaN(b) && Date.now() - b < ve) {
        n("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (error) {
      if (!G(error)) n(`auth: cooldown read error: ${error}`);
    }
    try {
      if (await gn().mkdir(a), W() && storageV5 !== void 0) {
        let e = await storageV5.write(ce(), String(Date.now()), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new x(`v5 cooldown write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown write failed");
      } else await gn().write(g, String(Date.now()));
    } catch (error) {
      n(`auth: cooldown write error: ${error}`);
    }
    try {
      let {
        execFileNoThrow: execFileNoThrow
      } = await import("B:/~BUN/root/chunk-x6kc2c3p.js");
    } catch {}
    try {
      if (W() && storageV5 !== void 0) {
        let e = await storageV5.write(Ae(), _({
          status: "auth_required",
          since: Date.now()
        }), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new x(`v5 status write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 status write failed");
      } else await gn().write(A, _({
        status: "auth_required",
        since: Date.now()
      }));
    } catch (error) {
      n(`auth: status write error: ${error}`);
    }
    n("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh");
  }
  function j(s) {
    if (!ye(s)) return;
    Z(s.failedToken).then(refreshed => {
      for (let g of y) try {
        let A = {
          type: "auth_401_result",
          refreshed: refreshed,
          requestId: s.requestId
        };
        g.send(A);
      } catch {}
    }).catch(a => {
      n(`auth: 401 handler error: ${a}`);
      for (let g of y) try {
        let A = {
          type: "auth_401_result",
          refreshed: !1,
          requestId: s.requestId
        };
        g.send(A);
      } catch {}
    });
  }
  function attachWorker(s) {
    if (y.add(s), s.on("message", j), m) try {
      let a = {
        type: "token_update",
        accessToken: m.accessToken
      };
      s.send(a);
    } catch {}
  }
  function detachWorker(s) {
    s.removeListener("message", j), y.delete(s);
  }
  let ready = (async () => {
    if (r.aborted) return;
    try {
      let s = await R(),
        a = await s.getClaudeAIOAuthTokensAsync(credentials);
      if (!a?.accessToken && s.isUsing3PServices()) {
        T = !0, n("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (a?.accessToken) m = {
        accessToken: a.accessToken,
        scopes: a.scopes,
        subscriptionType: a.subscriptionType ?? null,
        rateLimitTier: a.rateLimitTier ?? null
      }, N(a.expiresAt ?? null);
      await s.checkAndRefreshOAuthTokenIfNeeded({
        credentials: credentials,
        storageV5: storageV5,
        ...h()
      }), await B();
    } catch (error) {
      n(`auth: init error: ${error}`);
    }
  })();
  return ready.then(() => {
    if (r.aborted || m || T) return;
    E();
  }), r.addEventListener("abort", () => {
    if (k) clearTimeout(k), k = null;
    if (S) clearInterval(S), S = null;
  }, {
    once: !0
  }), {
    ready: ready,
    getAccessToken() {
      return m?.accessToken;
    },
    getAuthSnapshot() {
      return m;
    },
    attachWorker: attachWorker,
    detachWorker: detachWorker,
    dispose: dispose,
    [Symbol.dispose]: dispose
  };
  function dispose() {
    if (k) clearTimeout(k), k = null;
    if (S) clearInterval(S), S = null;
    for (let s of y) s.removeListener("message", j);
    y.clear();
  }
}
function de(r, n, c) {
  if (typeof process.send === "function") {
    let m = function (T) {
        let k = h.get(T);
        if (k) h.delete(T), k.resolve(!1);
      },
      w = r;
    process.on("message", T => {
      if (!ke(T)) return;
      if (T.type === "token_update") w = T.accessToken;
    });
    let h = new Map();
    return process.on("message", T => {
      if (typeof T === "object" && T !== null && "type" in T && T.type === "auth_401_result") {
        let k = T,
          y = h.get(k.requestId);
        if (y) clearTimeout(y.timer), h.delete(k.requestId), y.resolve(k.refreshed);
      }
    }), process.channel?.unref(), {
      getAccessToken() {
        return w;
      },
      reportAuth401(failedToken) {
        let requestId = me(),
          y = {
            type: "auth_401",
            failedToken: failedToken,
            requestId: requestId
          };
        return new Promise(resolve => {
          let timer = setTimeout(m, 30000, requestId);
          timer.unref(), h.set(requestId, {
            resolve: resolve,
            timer: timer
          });
          try {
            process.send(y);
          } catch {
            clearTimeout(timer), h.delete(requestId), resolve(!1);
          }
        });
      }
    };
  }
  let i = null;
  async function p() {
    return i ??= await import("B:/~BUN/root/chunk-nnhd4yzs.js");
  }
  return p(), {
    getAccessToken() {
      return i?.getClaudeAIOAuthTokens()?.accessToken;
    },
    async reportAuth401(w) {
      return (await p()).handleOAuth401Error(w, n, c, {
        usesLoginOffFirstParty: !0
      });
    }
  };
}
function K(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "shutdown";
}
function le(r) {
  if (!K(r) || typeof r !== "object" || r === null || !("cause" in r)) return;
  return r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield" ? r.cause : void 0;
}
var schema_3 = f(() => u({
    dir: o(),
    name: o().optional(),
    spawnMode: U(["same-dir", "worktree"]).default("same-dir"),
    capacity: v().int().positive().default(32),
    permissionMode: wa(Bh, U(tL)).optional(),
    sandbox: M().optional(),
    sessionTimeoutSeconds: v().int().positive().optional(),
    createSessionOnStart: M().default(!1)
  }).strict()),
  be = 60000,
  _e = 500,
  run_3 = async (r, n, log, i, storageV5_2, credentials_2) => {
    let h = schema_3().parse(r);
    if (h.sandbox) log(`The sandbox key is not supported for Remote Control. Remove it. ${lan}`), process.exit(MB);
    let {
        initializeErrorLogSink: initializeErrorLogSink
      } = await import("B:/~BUN/root/chunk-tzpwhh2w.js"),
      {
        initializeAnalyticsSink: initializeAnalyticsSink
      } = await import("B:/~BUN/root/chunk-hb1d7xvw.js");
    initializeErrorLogSink(), initializeAnalyticsSink();
    let getAccessToken = () => pO() ?? i.getAccessToken();
    if (!getAccessToken()) log(VFt), process.exit(1);
    let [{
      initialize1PEventLogging: initialize1PEventLogging
    }, {
      initializeGrowthBook: initializeGrowthBook,
      getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE,
      getUserAttributes: getUserAttributes
    }, {
      flushAnalyticsSinks: flushAnalyticsSinks
    }, {
      populateOAuthAccountInfoIfNeeded: populateOAuthAccountInfoIfNeeded
    }] = await Promise.all([import("B:/~BUN/root/chunk-2pav46td.js"), import("B:/~BUN/root/chunk-xvnv0v80.js"), import("B:/~BUN/root/chunk-pj5q7zvg.js"), import("B:/~BUN/root/chunk-pkf50x7b.js")]);
    if (initialize1PEventLogging(storageV5_2), await populateOAuthAccountInfoIfNeeded(credentials_2, storageV5_2).catch(e => {
      t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error ? e.name : typeof e})`);
    }), !getUserAttributes().organizationUUID) t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");else initializeGrowthBook().catch(e => {
      t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error ? e.name : typeof e}); feature gates keep serving the disk cache`, {
        level: "error"
      });
    });
    if (!D9()) {
      let e = await iKr();
      if (e !== void 0) log(e.reason), await flushAnalyticsSinks(), process.exit(e.retry ? 1 : MB);
    }
    let {
        runBridgeHeadless: runBridgeHeadless,
        BridgeHeadlessPermanentError: BridgeHeadlessPermanentError
      } = await import("B:/~BUN/root/chunk-nkna8dfe.js"),
      E = null,
      N = !1,
      V = e => {
        if (typeof process.send !== "function") return;
        try {
          process.send(e);
        } catch {}
      },
      Z = busy => V({
        type: "rc_busy",
        busy: busy
      }),
      D = () => {
        if (E !== null) clearInterval(E), E = null;
      },
      onBusyChange = e => {
        let b = e > 0;
        if (b !== N) N = b, Z(b);
        if (b) {
          if (E === null) E = setInterval(C => C(!0), be, Z), E.unref?.();
        } else D();
      },
      persistActiveSessionsOnShutdown = getFeatureValue_CACHED_MAY_BE_STALE("tengu_daemon_upgrade_defer_busy", !0),
      j = null,
      ee = () => {},
      promise = new Promise(e => {
        ee = e;
      }),
      z = e => {
        if (K(e)) j = le(e) ?? null, ee();
      };
    process.on("message", z);
    let awaitShutdownCause = async () => (await Promise.race([promise, Y(_e)]), j),
      s,
      createToolHostHandler,
      g;
    try {
      let e = await import("B:/~BUN/root/chunk-63pwpd90.js"),
        checks = e.liveToolHostChecks(h.dir, credentials_2),
        switches = e.liveToolHostSwitches({
          dir: h.dir,
          checks: checks,
          isOfferingFolder: () => s?.getToolHostAdvert().kind === "advertise",
          hasAccessToken: () => Boolean(getAccessToken())
        }),
        O,
        De = !1;
      s = await e.watchToolHostAdvert({
        dir: h.dir,
        log: log,
        checks: checks,
        refuse: e.helperRefusal,
        onVerdict: se => {
          if (O !== void 0 && e.isSwitchedOffRemotely(se)) O.sweep("gate_off").catch(L => l(H(L)));
        }
      }), createToolHostHandler = se => {
        try {
          O = e.buildToolHostWorkHandler({
            folder: h.dir,
            switches: switches,
            ...se,
            onLiveCountChange: count => V({
              type: "rc_serving_tools",
              count: count
            })
          }, {
            unattendedGrant: void 0,
            withoutShellSecrets: !1
          });
        } catch (error) {
          l(H(error));
        }
        return O;
      };
      let ae;
      g = async () => {
        if (O !== void 0) ae ??= e.sweepToolHostForShutdown(O);
        await ae;
      }, n.addEventListener("abort", () => void g?.(), {
        once: !0
      });
    } catch (error) {
      l(H(error));
    }
    let A = !1;
    try {
      await runBridgeHeadless({
        dir: h.dir,
        name: h.name,
        spawnMode: h.spawnMode,
        capacity: h.capacity,
        permissionMode: h.permissionMode,
        createSessionOnStart: h.createSessionOnStart,
        getAccessToken: getAccessToken,
        onAuth401: i.reportAuth401,
        log: log,
        storageV5: storageV5_2,
        credentials: credentials_2,
        onBusyChange: onBusyChange,
        persistActiveSessionsOnShutdown: persistActiveSessionsOnShutdown,
        awaitShutdownCause: awaitShutdownCause,
        getToolHostAdvert: s?.getToolHostAdvert,
        createToolHostHandler: createToolHostHandler
      }, n);
    } catch (error) {
      if (!(error instanceof BridgeHeadlessPermanentError)) throw error;
      log(error.message), A = !0;
    } finally {
      await g?.(), D(), s?.stop(), process.off("message", z), await flushAnalyticsSinks();
    }
    if (A) process.exit(MB);
  };
async function iKr() {
  let [{
    getBridgeBlockedCode: getBridgeBlockedCode
  }, {
    checkBridgeMinVersion: checkBridgeMinVersion
  }, {
    getUserAttributes: getUserAttributes_2
  }] = await Promise.all([import("B:/~BUN/root/chunk-xah7gvdb.js"), import("B:/~BUN/root/chunk-v9n2b62r.js"), import("B:/~BUN/root/chunk-xvnv0v80.js")]);
  if (!getUserAttributes_2().organizationUUID) return {
    reason: pe("token_scope_limited"),
    retry: !1
  };
  let i = await getBridgeBlockedCode();
  if (i !== null) return {
    reason: pe(i),
    retry: i === "flags_unreachable" || i === "not_signed_in"
  };
  let reason = checkBridgeMinVersion();
  return reason === null ? void 0 : {
    reason: reason,
    retry: !1
  };
}
function pe(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`;
}
async function h2t(r, n, c) {
  return po("daemon_rc_add", async () => {
    let i = "added";
    return await _2t(p => {
      let w = aKr(p.remoteControl),
        h = w.findIndex(item => item.dir === r.dir);
      if (h >= 0) {
        let m = Bs(r, T => T !== void 0);
        w[h] = {
          ...w[h],
          ...m
        }, i = "updated";
      } else w.push(r), i = "added";
      p.remoteControl = w;
    }, n, c), i;
  });
}
async function y2t(r, n, c) {
  return po("daemon_rc_remove", async () => {
    await _2t(i => {
      let p = aKr(i.remoteControl),
        w = p.filter(item => item.dir !== r);
      if (w.length === p.length) return !1;
      if (w.length === 0) delete i.remoteControl;else i.remoteControl = w;
    }, n, c);
  });
}
var schema = f(() => u({
    intervalSeconds: v().positive().default(30)
  }).strict()),
  oce = {
    heartbeat: {
      schema: schema,
      run: run,
      needsOAuth: !1
    },
    scheduled: {
      schema: schema_2,
      run: run_2,
      needsOAuth: !0
    },
    remoteControl: {
      schema: schema_3,
      run: run_3,
      needsOAuth: !0
    }
  };
function snt(r) {
  return r === "heartbeat" || D9() || r === "remoteControl" && j5o();
}
async function run(r, n, c, i) {
  let {
    intervalSeconds: intervalSeconds
  } = schema().parse(r);
  c(`heartbeat worker started (interval=${intervalSeconds}s)`);
  while (!n.aborted) if (await Y(intervalSeconds * 1000, n), !n.aborted) c("heartbeat");
}
function Re(r, n) {
  let c = () => n.abort();
  r.on("SIGTERM", c), r.on("SIGINT", c), r.on("message", i => {
    if (K(i)) n.abort();
  });
}
async function Xei(r, n) {
  if (!r || !(r in oce)) process.stderr.write(`unknown worker kind: ${r}
`), process.exit(2);
  if (!snt(r)) process.stderr.write(`worker kind '${r}' is not available.
`), process.exit(MB);
  let c = oce[r],
    i = [];
  for await (let y of process.stdin) i.push(y);
  let p;
  try {
    p = J(Buffer.concat(i).toString("utf8"));
  } catch (error) {
    process.stderr.write(`invalid config JSON on stdin: ${d(error)}
`), process.exit(2);
  }
  let w = c.schema().safeParse(p.config);
  if (!w.success) process.stderr.write(`config validation failed: ${w.error.message}
`), process.exit(2);
  let abortController = new AbortController();
  Re(process, abortController), We(abortController);
  let storageV5_3 = LV(n),
    credentials_3 = jE(storageV5_3),
    k = de(p.initialAccessToken, credentials_3, storageV5_3);
  if (W() && storageV5_3 !== void 0) {
    G4({
      storageV5: storageV5_3
    }), t4(storageV5_3);
    let [{
      composePolicyLimitsClient: composePolicyLimitsClient,
      primePolicyLimitsCache: primePolicyLimitsCache
    }, {
      primeFastPathCredentials: primeFastPathCredentials
    }, {
      setGrowthBookCredentials: setGrowthBookCredentials,
      setGrowthBookStorageBackend: setGrowthBookStorageBackend
    }] = await Promise.all([import("B:/~BUN/root/chunk-v3zcvmws.js"), import("B:/~BUN/root/chunk-6bnqsr37.js"), import("B:/~BUN/root/chunk-xvnv0v80.js")]);
    composePolicyLimitsClient({
      storageV5: storageV5_3,
      credentials: credentials_3
    }), setGrowthBookCredentials(credentials_3), setGrowthBookStorageBackend(storageV5_3), await primeFastPathCredentials(credentials_3), await primePolicyLimitsCache(storageV5_3), await Fte(storageV5_3);
  }
  try {
    await c.run(w.data, abortController.signal, y => process.stdout.write(y + `
`), k, storageV5_3, credentials_3);
  } catch (error) {
    if (Ie(error) === 429) process.stdout.write(`rate limited (429): ${d(error)}
`), process.exit(o0e);
    if (Ee(error)) process.stdout.write(`folder already served: ${d(error)}
`), process.exit(o0e);
    throw error;
  }
}
function Ee(r) {
  let n = r;
  for (let c = 0; n != null && c < 8; c++) {
    if (n.errorType === qFt) return !0;
    n = n.cause;
  }
  return !1;
}
function Ie(r) {
  let n = r;
  for (let c = 0; n != null && c < 8; c++) {
    let i = n.status;
    if (typeof i === "number") return i;
    let p = n.response?.status;
    if (typeof p === "number") return p;
    n = n.cause;
  }
  return;
}
var intervalMs = 30000;
function isAlive(r) {
  try {
    return process.kill(r, 0), !0;
  } catch {
    return !1;
  }
}
function We(r, n) {
  let c = {
      ppid: () => process.ppid,
      isAlive: isAlive,
      log: h => process.stdout.write(h + `
`),
      onGone: () => process.exit(0),
      intervalMs: intervalMs,
      exitGraceMs: 2000,
      ...n
    },
    i = c.ppid();
  if (i <= 1) return;
  let p = !1,
    w = setInterval(() => {
      if (p) return;
      if (!(!c.isAlive(i) || I() !== "windows" && c.ppid() !== i)) return;
      p = !0, clearInterval(w), c.log("parent supervisor gone \u2014 exiting"), r.abort(), setTimeout(c.onGone, c.exitGraceMs).unref();
    }, c.intervalMs);
  return w.unref(), w;
}
export { H5o, iKr, h2t, y2t, oce, snt, Xei };