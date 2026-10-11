// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Lg,
  ia,
  x,
  T1,
  K6
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  P,
  te,
  l,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  b,
  J,
  yj,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Qt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  UN,
  Dm
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  jq,
  Opt
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  pV
} from "B:/~BUN/root/chunk-8b53pnky.js";
import {
  IU
} from "B:/~BUN/root/chunk-0rmh0w21.js";
import {
  MR
} from "B:/~BUN/root/chunk-e9hrnhar.js";
import {
  Ust,
  Bst
} from "B:/~BUN/root/chunk-xfvqq19y.js";
import {
  p0
} from "B:/~BUN/root/chunk-8gym6yya.js";
import {
  $_t,
  ptr,
  ftr,
  T9r
} from "B:/~BUN/root/chunk-rg6271cv.js";
import {
  o,
  E,
  M,
  u,
  z,
  Bi
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  Qr
} from "B:/~BUN/root/chunk-0bx1tycm.js";

function v9r() {
  try {
    let {
      value: r,
      source: n
    } = ia("tengu_radiant_heron", !1);
    switch (n) {
      case "payload":
      case "override":
        return r === !0;
      case "disabled":
        return !1;
      case "fallback":
        return Lg() ? !1 : "unknown";
      case "disk":
        return "unknown"
    }
  } catch {
    return "unknown"
  }
}

function ce() {
  return x("tengu_radiant_heron", !1)
}
import {
  randomUUID as ye
} from "crypto";
import {
  join as de
} from "path";

function we(r) {
  return typeof r === "object" && r !== null && "type" in r && (r.type === "token_update" || r.type === "auth_401_result")
}

function ve(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401"
}
var ge = 300000,
  oe = 240000,
  Te = 300000,
  be = 30000,
  _e = 86400000;

function le() {
  return Ae.state("daemon-auth-cooldown")
}

function Ce() {
  return Ae.state("daemon-auth-status")
}

function k9r(r, n, c, i, p, w = () => !1) {
  let h = () => ({
      usesLoginOffFirstParty: c()
    }),
    m, v = !1,
    k = null,
    y = new Set,
    A = null,
    I = null;

  function C() {
    return I ??= import("B:/~BUN/root/chunk-3vayk698.js")
  }

  function N(s) {
    let a = {
      type: "token_update",
      accessToken: s
    };
    for (let g of y) try {
      g.send(a)
    } catch {}
  }
  async function F() {
    let a = await (await C()).getClaudeAIOAuthTokensAsync(p);
    if (a?.accessToken && a.accessToken !== m?.accessToken) m = {
      accessToken: a.accessToken,
      scopes: a.scopes,
      subscriptionType: a.subscriptionType ?? null,
      rateLimitTier: a.rateLimitTier ?? null
    }, N(m.accessToken);
    L(a?.expiresAt ?? null)
  }
  let q, Y = !1;

  function R(s) {
    if (q = s, A || r.aborted) return;
    if (k) clearTimeout(k), k = null;
    n("auth: no token found, will re-check keychain every 30s"), A = setInterval(function() {
      C().then(async (g) => {
        let T = g.isUsing3PServices() && !c() && !w();
        if (T !== Y) Y = T, n(T ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (T) return;
        g.clearOAuthTokenCache();
        let e = await g.getClaudeAIOAuthTokensAsync(p),
          S;
        if (e?.accessToken && e.accessToken !== q && e.expiresAt && e.expiresAt > Date.now()) S = "auth: token found via keychain re-check";
        else if (e?.refreshToken && await g.checkAndRefreshOAuthTokenIfNeeded({
            credentials: p,
            storageV5: i,
            ...h()
          })) S = "auth: token refreshed via keychain re-check retry";
        if (S) {
          if (await F(), m && A) clearInterval(A), A = null, n(S)
        }
      }).catch((g) => n(`auth: keychain re-check error: ${g}`))
    }, be), A.unref()
  }

  function L(s) {
    if (k) clearTimeout(k), k = null;
    if (!s || r.aborted) return;
    let a = Math.min(Math.max(s - Date.now() - oe, 5000), _e);
    n(`auth: scheduling proactive refresh in ${Math.round(a/1000)}s`), k = setTimeout(V, a), k.unref()
  }
  async function V() {
    if (r.aborted) return;
    try {
      n("auth: proactive refresh starting");
      let s = await C(),
        a = m?.accessToken,
        g = await s.checkAndRefreshOAuthTokenIfNeeded({
          credentials: p,
          storageV5: i,
          ...h()
        });
      s.clearOAuthTokenCache();
      let T = await s.getClaudeAIOAuthTokensAsync(p),
        e = T?.expiresAt ?? null,
        S = e === null || e > Date.now() + ge;
      if (T?.accessToken && (g || T.accessToken !== a || S) && (e === null || e > Date.now() + oe)) {
        await F(), n(g ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return
      }
      if (T?.accessToken && e !== null && e > Date.now()) {
        n("auth: proactive refresh failed, retrying in ~60s (token still valid)"), L(Date.now() + 60000 + oe);
        return
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let _ = T?.accessToken ?? a;
      m = void 0, await Z(), R(_)
    } catch (s) {
      n(`auth: proactive refresh error: ${s}`), L(Date.now() + 60000 + oe)
    }
  }
  async function X(s) {
    if (v) return n("auth: 401 ignored (3P provider active, no OAuth)"), !1;
    n("auth: handling 401");
    let a = await C();
    if (await a.handleOAuth401Error(s, p, i, h())) return a.clearOAuthTokenCache(), await F(), n("auth: 401 recovery succeeded"), !0;
    n("auth: 401 recovery failed, signalling re-auth required"), m = void 0, await Z(), a.clearOAuthTokenCache();
    let T = await a.getClaudeAIOAuthTokensAsync(p);
    if (T?.accessToken !== void 0 && T.accessToken !== s) return await F(), !0;
    return R(s), !1
  }
  let D = null;

  function Z() {
    if (D) return D;
    return D = ne().finally(() => {
      D = null
    }), D
  }
  async function ne() {
    let s = await C();
    if (s.getAnthropicApiKey()) {
      n("auth: browser login skipped (API key auth available)");
      return
    }
    if (s.isUsing3PServices() && !c()) {
      n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return
    }
    let a = Se(),
      g = de(a, "daemon-auth-cooldown"),
      T = de(a, "daemon-auth-status.json");
    try {
      let e;
      if (H() && i !== void 0) {
        let _ = await i.read([le()]);
        if (!_.ok) throw new P(`v5 cooldown read failed: ${_.error.code}${"telemetryCode"in _.error&&_.error.telemetryCode?` (${_.error.telemetryCode})`:""}`, "daemon-auth v5 cooldown read failed");
        let W = _.value.items[0];
        e = W.found ? Buffer.from(W.value).toString("utf8") : null
      } else e = await Qt().read(g);
      let S = e === null ? NaN : parseInt(e, 10);
      if (!Number.isNaN(S) && Date.now() - S < Te) {
        n("auth: browser login skipped (cooldown)");
        return
      }
    } catch (e) {
      if (!B(e)) n(`auth: cooldown read error: ${e}`)
    }
    try {
      if (await Qt().mkdir(a), H() && i !== void 0) {
        let e = await i.write(le(), String(Date.now()), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new P(`v5 cooldown write failed: ${e.error.code}${"telemetryCode"in e.error&&e.error.telemetryCode?` (${e.error.telemetryCode})`:""}`, "daemon-auth v5 cooldown write failed")
      } else await Qt().write(g, String(Date.now()))
    } catch (e) {
      n(`auth: cooldown write error: ${e}`)
    }
    try {
      let {
        execFileNoThrow: e
      } = await import("B:/~BUN/root/chunk-jpbbhcz7.js")
    } catch {}
    try {
      if (H() && i !== void 0) {
        let e = await i.write(Ce(), b({
          status: "auth_required",
          since: Date.now()
        }), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new P(`v5 status write failed: ${e.error.code}${"telemetryCode"in e.error&&e.error.telemetryCode?` (${e.error.telemetryCode})`:""}`, "daemon-auth v5 status write failed")
      } else await Qt().write(T, b({
        status: "auth_required",
        since: Date.now()
      }))
    } catch (e) {
      n(`auth: status write error: ${e}`)
    }
    n("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh")
  }

  function j(s) {
    if (!ve(s)) return;
    X(s.failedToken).then((a) => {
      for (let g of y) try {
        let T = {
          type: "auth_401_result",
          refreshed: a,
          requestId: s.requestId
        };
        g.send(T)
      } catch {}
    }).catch((a) => {
      n(`auth: 401 handler error: ${a}`);
      for (let g of y) try {
        let T = {
          type: "auth_401_result",
          refreshed: !1,
          requestId: s.requestId
        };
        g.send(T)
      } catch {}
    })
  }

  function ee(s) {
    if (y.add(s), s.on("message", j), m) try {
      let a = {
        type: "token_update",
        accessToken: m.accessToken
      };
      s.send(a)
    } catch {}
  }

  function se(s) {
    s.removeListener("message", j), y.delete(s)
  }
  let U = (async () => {
    if (r.aborted) return;
    try {
      let s = await C(),
        a = await s.getClaudeAIOAuthTokensAsync(p);
      if (!a?.accessToken && s.isUsing3PServices()) {
        v = !0, n("auth: 3P provider active, skipping OAuth refresh loop");
        return
      }
      if (a?.accessToken) m = {
        accessToken: a.accessToken,
        scopes: a.scopes,
        subscriptionType: a.subscriptionType ?? null,
        rateLimitTier: a.rateLimitTier ?? null
      }, L(a.expiresAt ?? null);
      await s.checkAndRefreshOAuthTokenIfNeeded({
        credentials: p,
        storageV5: i,
        ...h()
      }), await F()
    } catch (s) {
      n(`auth: init error: ${s}`)
    }
  })();
  return U.then(() => {
    if (r.aborted || m || v) return;
    R()
  }), r.addEventListener("abort", () => {
    if (k) clearTimeout(k), k = null;
    if (A) clearInterval(A), A = null
  }, {
    once: !0
  }), {
    ready: U,
    getAccessToken() {
      return m?.accessToken
    },
    getAuthSnapshot() {
      return m
    },
    attachWorker: ee,
    detachWorker: se,
    dispose: re,
    [Symbol.dispose]: re
  };

  function re() {
    if (k) clearTimeout(k), k = null;
    if (A) clearInterval(A), A = null;
    for (let s of y) s.removeListener("message", j);
    y.clear()
  }
}

function pe(r, n, c) {
  if (typeof process.send === "function") {
    let m = function(v) {
        let k = h.get(v);
        if (k) h.delete(v), k.resolve(!1)
      },
      w = r;
    process.on("message", (v) => {
      if (!we(v)) return;
      if (v.type === "token_update") w = v.accessToken
    });
    let h = new Map;
    return process.on("message", (v) => {
      if (typeof v === "object" && v !== null && "type" in v && v.type === "auth_401_result") {
        let k = v,
          y = h.get(k.requestId);
        if (y) clearTimeout(y.timer), h.delete(k.requestId), y.resolve(k.refreshed)
      }
    }), process.channel?.unref(), {
      getAccessToken() {
        return w
      },
      reportAuth401(v) {
        let k = ye(),
          y = {
            type: "auth_401",
            failedToken: v,
            requestId: k
          };
        return new Promise((A) => {
          let I = setTimeout(m, 30000, k);
          I.unref(), h.set(k, {
            resolve: A,
            timer: I
          });
          try {
            process.send(y)
          } catch {
            clearTimeout(I), h.delete(k), A(!1)
          }
        })
      }
    }
  }
  let i = null;
  async function p() {
    return i ??= await import("B:/~BUN/root/chunk-3vayk698.js")
  }
  return p(), {
    getAccessToken() {
      return i?.getClaudeAIOAuthTokens()?.accessToken
    },
    async reportAuth401(w) {
      return (await p()).handleOAuth401Error(w, n, c, {
        usesLoginOffFirstParty: !0
      })
    }
  }
}

function K(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "shutdown"
}

function fe(r) {
  if (!K(r) || typeof r !== "object" || r === null || !("cause" in r)) return;
  return r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield" ? r.cause : void 0
}
var ae = f(() => u({
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
  me = async (r, n, c, i, p, w) => {
    let h = ae().parse(r),
      {
        initializeErrorLogSink: m
      } = await import("B:/~BUN/root/chunk-pd2exn23.js"),
      {
        initializeAnalyticsSink: v
      } = await import("B:/~BUN/root/chunk-b3g73ft3.js");
    m(), v();
    let k = () => p0() ?? i.getAccessToken();
    if (!k()) c(Ust), process.exit(1);
    let [{
      initialize1PEventLogging: y
    }, {
      initializeGrowthBook: A,
      getFeatureValue_CACHED_MAY_BE_STALE: I,
      getUserAttributes: C
    }, {
      flushAnalyticsSinks: N
    }, {
      populateOAuthAccountInfoIfNeeded: F
    }] = await Promise.all([import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js"), import("B:/~BUN/root/chunk-3qc2x2js.js"), import("B:/~BUN/root/chunk-j09wrkxt.js")]);
    if (y(p), await F(w, p).catch((e) => {
        t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error?e.name:typeof e})`)
      }), !C().organizationUUID) t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");
    else A().catch((e) => {
      t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error?e.name:typeof e}); feature gates keep serving the disk cache`, {
        level: "error"
      })
    });
    if (!pV()) {
      let e = await utr();
      if (e !== void 0) c(e.reason), await N(), process.exit(e.retry ? 1 : jq)
    }
    let {
      runBridgeHeadless: q,
      BridgeHeadlessPermanentError: Y
    } = await import("B:/~BUN/root/chunk-3v0jd8mf.js"), R = null, L = !1, V = (e) => {
      if (typeof process.send !== "function") return;
      try {
        process.send(e)
      } catch {}
    }, X = (e) => V({
      type: "rc_busy",
      busy: e
    }), D = () => {
      if (R !== null) clearInterval(R), R = null
    }, Z = (e) => {
      let S = e > 0;
      if (S !== L) L = S, X(S);
      if (S) {
        if (R === null) R = setInterval((_) => _(!0), Ee, X), R.unref?.()
      } else D()
    }, ne = I("tengu_daemon_upgrade_defer_busy", !0), j = null, ee = () => {}, se = new Promise((e) => {
      ee = e
    }), U = (e) => {
      if (K(e)) j = fe(e) ?? null, ee()
    };
    process.on("message", U);
    let re = async () => (await Promise.race([se, Q(Pe)]), j), s, a, g;
    try {
      let e = await import("B:/~BUN/root/chunk-mfh00e06.js"),
        S = e.liveToolHostChecks(h.dir, w),
        _ = e.liveToolHostSwitches({
          dir: h.dir,
          checks: S,
          isOfferingFolder: () => s?.getToolHostAdvert().kind === "advertise",
          hasAccessToken: () => Boolean(k())
        }),
        W;
      s = await e.watchToolHostAdvert({
        dir: h.dir,
        log: c,
        checks: S,
        refuse: e.helperRefusal,
        onVerdict: (ie) => {
          if (W !== void 0 && e.isSwitchedOffRemotely(ie)) W.sweep("gate_off").catch((G) => d(te(G)))
        }
      }), a = (ie) => {
        try {
          W = e.buildToolHostWorkHandler({
            folder: h.dir,
            switches: _,
            ...ie,
            onLiveCountChange: (G) => V({
              type: "rc_serving_tools",
              count: G
            })
          })
        } catch (G) {
          d(te(G))
        }
        return W
      };
      let ue;
      g = async () => {
        if (W !== void 0) ue ??= e.sweepToolHostForShutdown(W);
        await ue
      }, n.addEventListener("abort", () => void g?.(), {
        once: !0
      })
    } catch (e) {
      d(te(e))
    }
    let T = !1;
    try {
      await q({
        dir: h.dir,
        name: h.name,
        spawnMode: h.spawnMode,
        capacity: h.capacity,
        permissionMode: h.permissionMode,
        sandbox: h.sandbox,
        createSessionOnStart: h.createSessionOnStart,
        getAccessToken: k,
        onAuth401: i.reportAuth401,
        log: c,
        storageV5: p,
        credentials: w,
        onBusyChange: Z,
        persistActiveSessionsOnShutdown: ne,
        awaitShutdownCause: re,
        getToolHostAdvert: s?.getToolHostAdvert,
        createToolHostHandler: a
      }, n)
    } catch (e) {
      if (!(e instanceof Y)) throw e;
      c(e.message), T = !0
    } finally {
      await g?.(), D(), s?.stop(), process.off("message", U), await N()
    }
    if (T) process.exit(jq)
  };
async function utr() {
  let [{
    getBridgeBlockedCode: r
  }, {
    checkBridgeMinVersion: n
  }, {
    getUserAttributes: c
  }] = await Promise.all([import("B:/~BUN/root/chunk-5px3whmg.js"), import("B:/~BUN/root/chunk-s8kpvpga.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js")]);
  if (!c().organizationUUID) return {
    reason: he("token_scope_limited"),
    retry: !1
  };
  let i = await r();
  if (i !== null) return {
    reason: he(i),
    retry: i === "flags_unreachable" || i === "not_signed_in"
  };
  let p = n();
  return p === null ? void 0 : {
    reason: p,
    retry: !1
  }
}

function he(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`
}
async function H_t(r, n, c) {
  return Or("daemon_rc_add", async () => {
    let i = "added";
    return await $_t((p) => {
      let w = ptr(p.remoteControl),
        h = w.findIndex((m) => m.dir === r.dir);
      if (h >= 0) {
        let m = Qr(r, (v) => v !== void 0);
        w[h] = {
          ...w[h],
          ...m
        }, i = "updated"
      } else w.push(r), i = "added";
      p.remoteControl = w
    }, n, c), i
  })
}
async function F_t(r, n, c) {
  return Or("daemon_rc_remove", async () => {
    await $_t((i) => {
      let p = ptr(i.remoteControl),
        w = p.filter((h) => h.dir !== r);
      if (w.length === p.length) return !1;
      if (w.length === 0) delete i.remoteControl;
      else i.remoteControl = w
    }, n, c)
  })
}
var ke = f(() => u({
    intervalSeconds: E().positive().default(30)
  }).strict()),
  UQ = {
    heartbeat: {
      schema: ke,
      run: Ie,
      needsOAuth: !1
    },
    scheduled: {
      schema: ftr,
      run: T9r,
      needsOAuth: !0
    },
    remoteControl: {
      schema: ae,
      run: me,
      needsOAuth: !0
    }
  };

function cQe(r) {
  return r === "heartbeat" || pV() || r === "remoteControl" && ce()
}
async function Ie(r, n, c, i) {
  let {
    intervalSeconds: p
  } = ke().parse(r);
  c(`heartbeat worker started (interval=${p}s)`);
  while (!n.aborted)
    if (await Q(p * 1000, n), !n.aborted) c("heartbeat")
}

function Oe(r, n) {
  let c = () => n.abort();
  r.on("SIGTERM", c), r.on("SIGINT", c), r.on("message", (i) => {
    if (K(i)) n.abort()
  })
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
    p = J(Buffer.concat(i).toString("utf8"))
  } catch (y) {
    process.stderr.write(`invalid config JSON on stdin: ${l(y)}
`), process.exit(2)
  }
  let w = c.schema().safeParse(p.config);
  if (!w.success) process.stderr.write(`config validation failed: ${w.error.message}
`), process.exit(2);
  let h = new AbortController;
  Oe(process, h), Me(h);
  let m = IU(n),
    v = MR(m),
    k = pe(p.initialAccessToken, v, m);
  if (H() && m !== void 0) {
    yj({
      storageV5: m
    }), T1(m);
    let [{
      composePolicyLimitsClient: y,
      primePolicyLimitsCache: A
    }, {
      primeFastPathCredentials: I
    }, {
      setGrowthBookCredentials: C,
      setGrowthBookStorageBackend: N
    }] = await Promise.all([import("B:/~BUN/root/chunk-mjxpcxa7.js"), import("B:/~BUN/root/chunk-tjtr18t7.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js")]);
    y({
      storageV5: m,
      credentials: v
    }), C(v), N(m), await I(v), await A(m), await K6(m)
  }
  try {
    await c.run(w.data, h.signal, (y) => process.stdout.write(y + `
`), k, m, v)
  } catch (y) {
    if (De(y) === 429) process.stdout.write(`rate limited (429): ${l(y)}
`), process.exit(Opt);
    if (We(y)) process.stdout.write(`folder already served: ${l(y)}
`), process.exit(Opt);
    throw y
  }
}

function We(r) {
  let n = r;
  for (let c = 0; n != null && c < 8; c++) {
    if (n.errorType === Bst) return !0;
    n = n.cause
  }
  return !1
}

function De(r) {
  let n = r;
  for (let c = 0; n != null && c < 8; c++) {
    let i = n.status;
    if (typeof i === "number") return i;
    let p = n.response?.status;
    if (typeof p === "number") return p;
    n = n.cause
  }
  return
}
var He = 30000;

function xe(r) {
  try {
    return process.kill(r, 0), !0
  } catch {
    return !1
  }
}

function Me(r, n) {
  let c = {
      ppid: () => process.ppid,
      isAlive: xe,
      log: (h) => process.stdout.write(h + `
`),
      onGone: () => process.exit(0),
      intervalMs: He,
      exitGraceMs: 2000,
      ...n
    },
    i = c.ppid();
  if (i <= 1) return;
  let p = !1,
    w = setInterval(() => {
      if (p) return;
      if (!(!c.isAlive(i) || O() !== "windows" && c.ppid() !== i)) return;
      p = !0, clearInterval(w), c.log("parent supervisor gone \u2014 exiting"), r.abort(), setTimeout(c.onGone, c.exitGraceMs).unref()
    }, c.intervalMs);
  return w.unref(), w
}
export {
  v9r,
  k9r,
  utr,
  H_t,
  F_t,
  UQ,
  cQe,
  Uqo
};
