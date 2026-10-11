// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Lg, ia, x, T1, K6 } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { P, te, l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { b, J, yj, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { UN, Dm } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { jq, Opt } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { pV } from "B:/~BUN/root/chunk-8b53pnky.js";
import { IU } from "B:/~BUN/root/chunk-0rmh0w21.js";
import { MR } from "B:/~BUN/root/chunk-e9hrnhar.js";
import { Ust, Bst } from "B:/~BUN/root/chunk-xfvqq19y.js";
import { p0 } from "B:/~BUN/root/chunk-8gym6yya.js";
import { $_t, ptr, ftr as schema_2, T9r as run_2 } from "B:/~BUN/root/chunk-rg6271cv.js";
import { o, E, M, u, z, Bi } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
function v9r() {
  try {
    let {
      value: value,
      source: source
    } = ia("tengu_radiant_heron", !1);
    switch (source) {
      case "payload":
      case "override":
        return value === !0;
      case "disabled":
        return !1;
      case "fallback":
        return Lg() ? !1 : "unknown";
      case "disk":
        return "unknown";
    }
  } catch {
    return "unknown";
  }
}
function ce() {
  return x("tengu_radiant_heron", !1);
}
import { randomUUID as ye } from "crypto";
import { join as de } from "path";
function we(r) {
  return typeof r === "object" && r !== null && "type" in r && (r.type === "token_update" || r.type === "auth_401_result");
}
function ve(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401";
}
var ge = 300000,
  oe = 240000,
  Te = 300000,
  be = 30000,
  _e = 86400000;
function le() {
  return Ae.state("daemon-auth-cooldown");
}
function Ce() {
  return Ae.state("daemon-auth-status");
}
function k9r(r, n, c, storageV5, credentials, w = () => !1) {
  let h = () => ({
      usesLoginOffFirstParty: c()
    }),
    m,
    v = !1,
    k = null,
    y = new Set(),
    A = null,
    I = null;
  function C() {
    return I ??= import("B:/~BUN/root/chunk-3vayk698.js");
  }
  function N(accessToken) {
    let a = {
      type: "token_update",
      accessToken: accessToken
    };
    for (let g of y) try {
      g.send(a);
    } catch {}
  }
  async function F() {
    let a = await (await C()).getClaudeAIOAuthTokensAsync(credentials);
    if (a?.accessToken && a.accessToken !== m?.accessToken) m = {
      accessToken: a.accessToken,
      scopes: a.scopes,
      subscriptionType: a.subscriptionType ?? null,
      rateLimitTier: a.rateLimitTier ?? null
    }, N(m.accessToken);
    L(a?.expiresAt ?? null);
  }
  let q,
    Y = !1;
  function R(s) {
    if (q = s, A || r.aborted) return;
    if (k) clearTimeout(k), k = null;
    n("auth: no token found, will re-check keychain every 30s"), A = setInterval(function () {
      C().then(async g => {
        let T = g.isUsing3PServices() && !c() && !w();
        if (T !== Y) Y = T, n(T ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (T) return;
        g.clearOAuthTokenCache();
        let e = await g.getClaudeAIOAuthTokensAsync(credentials),
          S;
        if (e?.accessToken && e.accessToken !== q && e.expiresAt && e.expiresAt > Date.now()) S = "auth: token found via keychain re-check";else if (e?.refreshToken && (await g.checkAndRefreshOAuthTokenIfNeeded({
          credentials: credentials,
          storageV5: storageV5,
          ...h()
        }))) S = "auth: token refreshed via keychain re-check retry";
        if (S) {
          if (await F(), m && A) clearInterval(A), A = null, n(S);
        }
      }).catch(g => n(`auth: keychain re-check error: ${g}`));
    }, be), A.unref();
  }
  function L(s) {
    if (k) clearTimeout(k), k = null;
    if (!s || r.aborted) return;
    let a = Math.min(Math.max(s - Date.now() - oe, 5000), _e);
    n(`auth: scheduling proactive refresh in ${Math.round(a / 1000)}s`), k = setTimeout(V, a), k.unref();
  }
  async function V() {
    if (r.aborted) return;
    try {
      n("auth: proactive refresh starting");
      let s = await C(),
        a = m?.accessToken,
        g = await s.checkAndRefreshOAuthTokenIfNeeded({
          credentials: credentials,
          storageV5: storageV5,
          ...h()
        });
      s.clearOAuthTokenCache();
      let T = await s.getClaudeAIOAuthTokensAsync(credentials),
        e = T?.expiresAt ?? null,
        S = e === null || e > Date.now() + ge;
      if (T?.accessToken && (g || T.accessToken !== a || S) && (e === null || e > Date.now() + oe)) {
        await F(), n(g ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (T?.accessToken && e !== null && e > Date.now()) {
        n("auth: proactive refresh failed, retrying in ~60s (token still valid)"), L(Date.now() + 60000 + oe);
        return;
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let _ = T?.accessToken ?? a;
      m = void 0, await Z(), R(_);
    } catch (error) {
      n(`auth: proactive refresh error: ${error}`), L(Date.now() + 60000 + oe);
    }
  }
  async function X(s) {
    if (v) return n("auth: 401 ignored (3P provider active, no OAuth)"), !1;
    n("auth: handling 401");
    let a = await C();
    if (await a.handleOAuth401Error(s, credentials, storageV5, h())) return a.clearOAuthTokenCache(), await F(), n("auth: 401 recovery succeeded"), !0;
    n("auth: 401 recovery failed, signalling re-auth required"), m = void 0, await Z(), a.clearOAuthTokenCache();
    let T = await a.getClaudeAIOAuthTokensAsync(credentials);
    if (T?.accessToken !== void 0 && T.accessToken !== s) return await F(), !0;
    return R(s), !1;
  }
  let D = null;
  function Z() {
    if (D) return D;
    return D = ne().finally(() => {
      D = null;
    }), D;
  }
  async function ne() {
    let s = await C();
    if (s.getAnthropicApiKey()) {
      n("auth: browser login skipped (API key auth available)");
      return;
    }
    if (s.isUsing3PServices() && !c()) {
      n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let a = Se(),
      g = de(a, "daemon-auth-cooldown"),
      T = de(a, "daemon-auth-status.json");
    try {
      let e;
      if (H() && storageV5 !== void 0) {
        let _ = await storageV5.read([le()]);
        if (!_.ok) throw new P(`v5 cooldown read failed: ${_.error.code}${"telemetryCode" in _.error && _.error.telemetryCode ? ` (${_.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown read failed");
        let W = _.value.items[0];
        e = W.found ? Buffer.from(W.value).toString("utf8") : null;
      } else e = await Qt().read(g);
      let S = e === null ? NaN : parseInt(e, 10);
      if (!Number.isNaN(S) && Date.now() - S < Te) {
        n("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (error) {
      if (!B(error)) n(`auth: cooldown read error: ${error}`);
    }
    try {
      if (await Qt().mkdir(a), H() && storageV5 !== void 0) {
        let e = await storageV5.write(le(), String(Date.now()), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new P(`v5 cooldown write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown write failed");
      } else await Qt().write(g, String(Date.now()));
    } catch (error) {
      n(`auth: cooldown write error: ${error}`);
    }
    try {
      let {
        execFileNoThrow: execFileNoThrow
      } = await import("B:/~BUN/root/chunk-jpbbhcz7.js");
    } catch {}
    try {
      if (H() && storageV5 !== void 0) {
        let e = await storageV5.write(Ce(), b({
          status: "auth_required",
          since: Date.now()
        }), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new P(`v5 status write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 status write failed");
      } else await Qt().write(T, b({
        status: "auth_required",
        since: Date.now()
      }));
    } catch (error) {
      n(`auth: status write error: ${error}`);
    }
    n("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh");
  }
  function j(s) {
    if (!ve(s)) return;
    X(s.failedToken).then(refreshed => {
      for (let g of y) try {
        let T = {
          type: "auth_401_result",
          refreshed: refreshed,
          requestId: s.requestId
        };
        g.send(T);
      } catch {}
    }).catch(a => {
      n(`auth: 401 handler error: ${a}`);
      for (let g of y) try {
        let T = {
          type: "auth_401_result",
          refreshed: !1,
          requestId: s.requestId
        };
        g.send(T);
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
      let s = await C(),
        a = await s.getClaudeAIOAuthTokensAsync(credentials);
      if (!a?.accessToken && s.isUsing3PServices()) {
        v = !0, n("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (a?.accessToken) m = {
        accessToken: a.accessToken,
        scopes: a.scopes,
        subscriptionType: a.subscriptionType ?? null,
        rateLimitTier: a.rateLimitTier ?? null
      }, L(a.expiresAt ?? null);
      await s.checkAndRefreshOAuthTokenIfNeeded({
        credentials: credentials,
        storageV5: storageV5,
        ...h()
      }), await F();
    } catch (error) {
      n(`auth: init error: ${error}`);
    }
  })();
  return ready.then(() => {
    if (r.aborted || m || v) return;
    R();
  }), r.addEventListener("abort", () => {
    if (k) clearTimeout(k), k = null;
    if (A) clearInterval(A), A = null;
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
    if (A) clearInterval(A), A = null;
    for (let s of y) s.removeListener("message", j);
    y.clear();
  }
}
function pe(r, n, c) {
  if (typeof process.send === "function") {
    let m = function (v) {
        let k = h.get(v);
        if (k) h.delete(v), k.resolve(!1);
      },
      w = r;
    process.on("message", v => {
      if (!we(v)) return;
      if (v.type === "token_update") w = v.accessToken;
    });
    let h = new Map();
    return process.on("message", v => {
      if (typeof v === "object" && v !== null && "type" in v && v.type === "auth_401_result") {
        let k = v,
          y = h.get(k.requestId);
        if (y) clearTimeout(y.timer), h.delete(k.requestId), y.resolve(k.refreshed);
      }
    }), process.channel?.unref(), {
      getAccessToken() {
        return w;
      },
      reportAuth401(failedToken) {
        let requestId = ye(),
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
    return i ??= await import("B:/~BUN/root/chunk-3vayk698.js");
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
function fe(r) {
  if (!K(r) || typeof r !== "object" || r === null || !("cause" in r)) return;
  return r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield" ? r.cause : void 0;
}
var schema_3 = f(() => u({
    dir: o(),
    name: o().optional(),
    spawnMode: z(["same-dir", "worktree"]).default("same-dir"),
    capacity: E().int().positive().default(32),
    permissionMode: Bi(Dm, z(UN)).optional(),
    sandbox: M().default(!1),
    sessionTimeoutSeconds: E().int().positive().optional(),
    createSessionOnStart: M().default(!1)
  }).strict()),
  Ee = 60000,
  Pe = 500,
  run_3 = async (r, n, log, i, storageV5_2, credentials_2) => {
    let h = schema_3().parse(r),
      {
        initializeErrorLogSink: initializeErrorLogSink
      } = await import("B:/~BUN/root/chunk-pd2exn23.js"),
      {
        initializeAnalyticsSink: initializeAnalyticsSink
      } = await import("B:/~BUN/root/chunk-b3g73ft3.js");
    initializeErrorLogSink(), initializeAnalyticsSink();
    let getAccessToken = () => p0() ?? i.getAccessToken();
    if (!getAccessToken()) log(Ust), process.exit(1);
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
    }] = await Promise.all([import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-3qc2x2js.js"), import("B:/~BUN/root/chunk-j09wrkxt.js")]);
    if (initialize1PEventLogging(storageV5_2), await populateOAuthAccountInfoIfNeeded(credentials_2, storageV5_2).catch(e => {
      t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error ? e.name : typeof e})`);
    }), !getUserAttributes().organizationUUID) t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");else initializeGrowthBook().catch(e => {
      t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error ? e.name : typeof e}); feature gates keep serving the disk cache`, {
        level: "error"
      });
    });
    if (!pV()) {
      let e = await utr();
      if (e !== void 0) log(e.reason), await flushAnalyticsSinks(), process.exit(e.retry ? 1 : jq);
    }
    let {
        runBridgeHeadless: runBridgeHeadless,
        BridgeHeadlessPermanentError: BridgeHeadlessPermanentError
      } = await import("B:/~BUN/root/chunk-3v0jd8mf.js"),
      R = null,
      L = !1,
      V = e => {
        if (typeof process.send !== "function") return;
        try {
          process.send(e);
        } catch {}
      },
      X = busy => V({
        type: "rc_busy",
        busy: busy
      }),
      D = () => {
        if (R !== null) clearInterval(R), R = null;
      },
      onBusyChange = e => {
        let S = e > 0;
        if (S !== L) L = S, X(S);
        if (S) {
          if (R === null) R = setInterval(_ => _(!0), Ee, X), R.unref?.();
        } else D();
      },
      persistActiveSessionsOnShutdown = getFeatureValue_CACHED_MAY_BE_STALE("tengu_daemon_upgrade_defer_busy", !0),
      j = null,
      ee = () => {},
      promise = new Promise(e => {
        ee = e;
      }),
      U = e => {
        if (K(e)) j = fe(e) ?? null, ee();
      };
    process.on("message", U);
    let awaitShutdownCause = async () => (await Promise.race([promise, Q(Pe)]), j),
      s,
      createToolHostHandler,
      g;
    try {
      let e = await import("B:/~BUN/root/chunk-mfh00e06.js"),
        checks = e.liveToolHostChecks(h.dir, credentials_2),
        switches = e.liveToolHostSwitches({
          dir: h.dir,
          checks: checks,
          isOfferingFolder: () => s?.getToolHostAdvert().kind === "advertise",
          hasAccessToken: () => Boolean(getAccessToken())
        }),
        W;
      s = await e.watchToolHostAdvert({
        dir: h.dir,
        log: log,
        checks: checks,
        refuse: e.helperRefusal,
        onVerdict: ie => {
          if (W !== void 0 && e.isSwitchedOffRemotely(ie)) W.sweep("gate_off").catch(G => d(te(G)));
        }
      }), createToolHostHandler = ie => {
        try {
          W = e.buildToolHostWorkHandler({
            folder: h.dir,
            switches: switches,
            ...ie,
            onLiveCountChange: count => V({
              type: "rc_serving_tools",
              count: count
            })
          });
        } catch (error) {
          d(te(error));
        }
        return W;
      };
      let ue;
      g = async () => {
        if (W !== void 0) ue ??= e.sweepToolHostForShutdown(W);
        await ue;
      }, n.addEventListener("abort", () => void g?.(), {
        once: !0
      });
    } catch (error) {
      d(te(error));
    }
    let T = !1;
    try {
      await runBridgeHeadless({
        dir: h.dir,
        name: h.name,
        spawnMode: h.spawnMode,
        capacity: h.capacity,
        permissionMode: h.permissionMode,
        sandbox: h.sandbox,
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
      log(error.message), T = !0;
    } finally {
      await g?.(), D(), s?.stop(), process.off("message", U), await flushAnalyticsSinks();
    }
    if (T) process.exit(jq);
  };
async function utr() {
  let [{
    getBridgeBlockedCode: getBridgeBlockedCode
  }, {
    checkBridgeMinVersion: checkBridgeMinVersion
  }, {
    getUserAttributes: getUserAttributes_2
  }] = await Promise.all([import("B:/~BUN/root/chunk-5px3whmg.js"), import("B:/~BUN/root/chunk-s8kpvpga.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js")]);
  if (!getUserAttributes_2().organizationUUID) return {
    reason: he("token_scope_limited"),
    retry: !1
  };
  let i = await getBridgeBlockedCode();
  if (i !== null) return {
    reason: he(i),
    retry: i === "flags_unreachable" || i === "not_signed_in"
  };
  let reason = checkBridgeMinVersion();
  return reason === null ? void 0 : {
    reason: reason,
    retry: !1
  };
}
function he(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`;
}
async function H_t(r, n, c) {
  return Or("daemon_rc_add", async () => {
    let i = "added";
    return await $_t(p => {
      let w = ptr(p.remoteControl),
        h = w.findIndex(item => item.dir === r.dir);
      if (h >= 0) {
        let m = Qr(r, v => v !== void 0);
        w[h] = {
          ...w[h],
          ...m
        }, i = "updated";
      } else w.push(r), i = "added";
      p.remoteControl = w;
    }, n, c), i;
  });
}
async function F_t(r, n, c) {
  return Or("daemon_rc_remove", async () => {
    await $_t(i => {
      let p = ptr(i.remoteControl),
        w = p.filter(item => item.dir !== r);
      if (w.length === p.length) return !1;
      if (w.length === 0) delete i.remoteControl;else i.remoteControl = w;
    }, n, c);
  });
}
var schema = f(() => u({
    intervalSeconds: E().positive().default(30)
  }).strict()),
  UQ = {
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
function cQe(r) {
  return r === "heartbeat" || pV() || r === "remoteControl" && ce();
}
async function run(r, n, c, i) {
  let {
    intervalSeconds: intervalSeconds
  } = schema().parse(r);
  c(`heartbeat worker started (interval=${intervalSeconds}s)`);
  while (!n.aborted) if (await Q(intervalSeconds * 1000, n), !n.aborted) c("heartbeat");
}
function Oe(r, n) {
  let c = () => n.abort();
  r.on("SIGTERM", c), r.on("SIGINT", c), r.on("message", i => {
    if (K(i)) n.abort();
  });
}
async function Uqo(r, n) {
  if (!r || !(r in UQ)) process.stderr.write(`unknown worker kind: ${r}
`), process.exit(2);
  if (!cQe(r)) process.stderr.write(`worker kind '${r}' is not available.
`), process.exit(jq);
  let c = UQ[r],
    i = [];
  for await (let y of process.stdin) i.push(y);
  let p;
  try {
    p = J(Buffer.concat(i).toString("utf8"));
  } catch (error) {
    process.stderr.write(`invalid config JSON on stdin: ${l(error)}
`), process.exit(2);
  }
  let w = c.schema().safeParse(p.config);
  if (!w.success) process.stderr.write(`config validation failed: ${w.error.message}
`), process.exit(2);
  let abortController = new AbortController();
  Oe(process, abortController), Me(abortController);
  let storageV5_3 = IU(n),
    credentials_3 = MR(storageV5_3),
    k = pe(p.initialAccessToken, credentials_3, storageV5_3);
  if (H() && storageV5_3 !== void 0) {
    yj({
      storageV5: storageV5_3
    }), T1(storageV5_3);
    let [{
      composePolicyLimitsClient: composePolicyLimitsClient,
      primePolicyLimitsCache: primePolicyLimitsCache
    }, {
      primeFastPathCredentials: primeFastPathCredentials
    }, {
      setGrowthBookCredentials: setGrowthBookCredentials,
      setGrowthBookStorageBackend: setGrowthBookStorageBackend
    }] = await Promise.all([import("B:/~BUN/root/chunk-mjxpcxa7.js"), import("B:/~BUN/root/chunk-tjtr18t7.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js")]);
    composePolicyLimitsClient({
      storageV5: storageV5_3,
      credentials: credentials_3
    }), setGrowthBookCredentials(credentials_3), setGrowthBookStorageBackend(storageV5_3), await primeFastPathCredentials(credentials_3), await primePolicyLimitsCache(storageV5_3), await K6(storageV5_3);
  }
  try {
    await c.run(w.data, abortController.signal, y => process.stdout.write(y + `
`), k, storageV5_3, credentials_3);
  } catch (error) {
    if (De(error) === 429) process.stdout.write(`rate limited (429): ${l(error)}
`), process.exit(Opt);
    if (We(error)) process.stdout.write(`folder already served: ${l(error)}
`), process.exit(Opt);
    throw error;
  }
}
function We(r) {
  let n = r;
  for (let c = 0; n != null && c < 8; c++) {
    if (n.errorType === Bst) return !0;
    n = n.cause;
  }
  return !1;
}
function De(r) {
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
function Me(r, n) {
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
      if (!(!c.isAlive(i) || O() !== "windows" && c.ppid() !== i)) return;
      p = !0, clearInterval(w), c.log("parent supervisor gone \u2014 exiting"), r.abort(), setTimeout(c.onGone, c.exitGraceMs).unref();
    }, c.intervalMs);
  return w.unref(), w;
}
export { v9r, k9r, utr, H_t, F_t, UQ, cQe, Uqo };