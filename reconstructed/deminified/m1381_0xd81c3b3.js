// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { We, l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { q, YI, Hde, xu } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Q, e5 } from "B:/~BUN/root/chunk-17wqwt36.js";
import { gt, b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se as configHome } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Gc, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d as logError, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ebe as consentPath, I5r } from "B:/~BUN/root/chunk-2m39rw42.js";
import { Xx } from "B:/~BUN/root/chunk-shgdrs47.js";
import { la, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Mm, ss, Nne } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { MUn, rEe, rz, bB, vIt, QP, Cd, RLe, Bme, RSo, Zst, ASo, XA, JA, git, y_, uEe, FLe, fee, EV, Fwo, ULe, Uwo, HKe, cBn, evo, nvo, gEe, hEe, yEe, I3, mee, Qme, Tae, YIt, Zme, ege, ovo, svo, vit, Lrn, Nrn, kit, ivo, _Bn, Di, UEe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { po } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Ui, _b } from "B:/~BUN/root/chunk-290k5gh5.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { eS as repoRootOf } from "B:/~BUN/root/chunk-339q6g5w.js";
import { QN } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { wr, he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { H0 } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { M4n, zpn } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { hs } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { Rn } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Che, l1 } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { my, y6 } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { qle } from "B:/~BUN/root/chunk-hjery5bx.js";
import { tqt } from "B:/~BUN/root/chunk-myd8edm1.js";
import { Kvt } from "B:/~BUN/root/chunk-b8z99tfd.js";
import { ffe as placePath, MGe, mve, jJt as PATH_2, gnt, bMn, $Ct as resolveProgram, SMn, Edo, Tdo, WJt, Odo, Mdo, qJt, NGe, Ddo, K7t as execHttp, $Ve, MNn, Z7t, eZt, Vbr as execCommand, DNn, qbr, Kbr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ts, ZGn } from "B:/~BUN/root/chunk-f6h9k5ss.js";
import { hR, Qie, mB } from "B:/~BUN/root/chunk-y39emrp9.js";
import { lE } from "B:/~BUN/root/chunk-s4yxevxn.js";
import { S2t, Nht, Hht, $Yr, UYr, CPe, w2t, BYr, hSn } from "B:/~BUN/root/chunk-c8qfzmgc.js";
import { FYr, C1e } from "B:/~BUN/root/chunk-1qtzvebk.js";
import { RPe, Ly, BQn } from "B:/~BUN/root/chunk-pm0wkhw0.js";
import { jYr, JXe, WYr, Nre } from "B:/~BUN/root/chunk-wnwck3ar.js";
import { mU } from "B:/~BUN/root/chunk-ap9x1xq2.js";
import { EIe, TIe } from "B:/~BUN/root/chunk-te37866b.js";
import { mM } from "B:/~BUN/root/chunk-qt0vdz7n.js";
import { lc, BSt } from "B:/~BUN/root/chunk-twqr14hq.js";
import { xoe } from "B:/~BUN/root/chunk-nyg9n440.js";
import { HB } from "B:/~BUN/root/chunk-na2t7g12.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { uo } from "B:/~BUN/root/chunk-6pbxcdg3.js";
import { o, E, C, u, ut, z } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function $o() {
  let e = new Map();
  return {
    known(n) {
      let r = Math.max(e.get(n) ?? 0, 1);
      return e.set(n, r), r;
    },
    next(n) {
      let r = (e.get(n) ?? 0) + 1;
      return e.set(n, r), r;
    }
  };
}
function Oo() {
  return {
    consentPin: I5r(),
    generations: $o(),
    pointedToCommand: {
      shown: !1
    },
    setAsideSessions: new Set(),
    decided: Me()
  };
}
var a1e = new q(Oo);
var Ho = /^[a-z_]{2,}:\[?[^/]*\]?$/;
function Ue(e) {
  let r = [e.launchDirReal, e.launchDir, e.projectDir, ...(e.projectDirReal !== void 0 ? [e.projectDirReal] : []), ...(e.sync !== void 0 ? [e.sync.rootReal, ...(e.sync.root !== void 0 ? [e.sync.root] : [])] : []), ...e.extraReach].filter(item => !Ho.test(item)),
    s = r.find(item => !QP(item));
  if (s !== void 0) return t(`[deviceHooks] reach: a root that is not an absolute path (${JSON.stringify(s)}) \u2014 everything on this machine counts as in the cloud session's reach`, {
    level: "warn"
  }), [rz];
  return r.map(item => Cd(item.replace(/\/+$/, "")) || "/");
}
function fn(e, n) {
  return e.length === 1 && e[0] === rz || n.some(item => !QP(item));
}
function No(e, n) {
  let r = Ue(n);
  return fn(r, e) || e.some(item => r.some(h => Bme(h, Cd(item))));
}
function hn(e, n) {
  let r = Ue(n);
  return fn(r, e) || e.some(item => r.some(h => Bme(Cd(item), h)));
}
function Mo(e) {
  switch (e.type) {
    case "command":
      return e.args === void 0 ? e.command : [e.command, ...e.args].join(" ");
    case "http":
      return e.url;
    case "prompt":
    case "agent":
      return e.prompt;
    case "mcp_tool":
      return `${e.server}/${e.tool}`;
    case "script":
      return e.file ?? _Bn(e.script ?? "");
  }
}
function pe(e) {
  return po(Mo(e), {
    maxCodeUnits: 200
  });
}
async function pn(e, n, r, s = {}) {
  let h = [...(s.sourceFile !== void 0 ? [s.sourceFile] : []), ...(s.pluginRoot !== void 0 ? [s.pluginRoot] : [])];
  for (let x of h) {
    let P = await r.realpath(x).catch(() => null);
    if (P === null || hn([x, P], n) || x === s.pluginRoot && No([x, P], n)) return {
      kind: "source_in_reach",
      notice: `"${pe(e)}" is configured in a place the cloud session can write on this machine (${po(x, {
        maxCodeUnits: 200
      })}), so it is not run for the cloud session from this machine.`
    };
  }
  if (e.type !== "command") return {
    kind: "not_command",
    hookType: e.type
  };
  let g = rEe(e, {
    home: r.home,
    projectDir: n.projectDir,
    hookCwd: n.launchDirReal,
    defaultShell: r.defaultShell,
    shellPrefix: r.shellPrefix,
    ...(s.pluginRoot !== void 0 && {
      pluginRoot: s.pluginRoot
    })
  });
  if (g.kind !== "script") return {
    kind: "opaque",
    reason: g.reason,
    notice: `"${pe(e)}" is not a single script this machine can pin, so it is not run for the cloud session from this machine: it would run whatever it names in the checkout, which the session may have written. Point it at one script outside the checkout (under ~/.claude, say).`
  };
  let rawPath = po(g.rawPath, {
      maxCodeUnits: 200
    }),
    {
      located: located,
      digest: digest
    } = await Lo(g.resolvedPath, n, r, s.resolved);
  if (located.realPath === null || digest === null || !digest.ok) return {
    kind: "unverifiable",
    rawPath: rawPath,
    notice: `${rawPath} could not be read and pinned (missing, too large, not a regular file, more than one hard link, or it resolves to a file this machine does not read as a hook script), so its hook is not run for the cloud session from this machine.`
  };
  let I = {
    pinnedTarget: {
      path: g.resolvedPath,
      realPath: located.realPath,
      sha256: digest.sha256
    },
    bytes: digest.bytes,
    rawPath: rawPath,
    interpreter: g.interpreter,
    site: g.site
  };
  if (hn([g.resolvedPath, located.realPath], n)) return {
    kind: "script_in_reach",
    ...I,
    notice: `"${pe(e)}" sits where the cloud session can write on this machine (the checkout, the synced directory or a sandbox write inlet), so it is not run for the cloud session from this machine. Move the script outside the checkout (under ~/.claude, say).`
  };
  return {
    kind: "script_outside_reach",
    ...I
  };
}
async function Lo(e, n, r, s) {
  let h = s?.get(e);
  if (h) return h;
  let g = (async () => {
    let located_2 = await RSo(e, n, r),
      digest_2 = located_2.realPath === null ? null : await Zst(located_2.realPath, r);
    return {
      located: located_2,
      digest: digest_2
    };
  })();
  return s?.set(e, g), g;
}
function mn() {
  return {
    stickyRoots: new Set(),
    pinnedScopes: new Set(),
    pinnedRoots: new Map(),
    syncRoots: new Set(),
    reachBaseline: null,
    commonRoots: null
  };
}
function gn(e) {
  let n = {
      ...Wo(e.launchDir),
      ...e.deps
    },
    {
      memory: memory
    } = e;
  memory.reachBaseline ??= new Map(Ui.map(item => [item, n.scopeWriteEntries(item)])), memory.commonRoots ??= n.commonWriteRoots();
  let {
      reachBaseline: reachBaseline,
      commonRoots: commonRoots,
      syncRoots: syncRoots,
      stickyRoots: stickyRoots
    } = memory,
    noteSyncRoot = R => {
      syncRoots.add(R), n.realpath(R).then(I => syncRoots.add(I), () => {});
    },
    S = async () => {
      let R = n.addedDirectories().flatMap(item => {
        try {
          return [Ye(item, e.launchDir)];
        } catch {
          return [];
        }
      });
      return [...R, ...(await Promise.all(R.map(item => n.realpath(item).catch(() => item))))];
    };
  return {
    noteSyncRoot: noteSyncRoot,
    async current() {
      let R = !1,
        I = A => n.realpath(A).then(M => QP(M) ? M : A, () => (R = !0, A)),
        launchDirReal = await I(e.launchDir),
        projectDirReal = await I(e.projectDir),
        root = null;
      try {
        root = e.syncRoot();
      } catch {
        R = !0;
      }
      if (root !== null) syncRoots.add(root), syncRoots.add(await I(root));
      let sync = root === null ? void 0 : {
          rootReal: await I(root),
          root: root
        },
        T = L([e.projectDir, projectDirReal, ...(e.repoRoot !== null ? [e.repoRoot, await I(e.repoRoot)] : []), ...syncRoots, ...(await S())]),
        configHomeReal = await I(e.configHome);
      if (await uEe({
        stickyRoots: stickyRoots,
        pinnedScopes: memory.pinnedScopes,
        pinnedRoots: memory.pinnedRoots,
        baseRoots: [...git({
          launchDir: e.launchDir,
          launchDirReal: launchDirReal
        }), ...T],
        reachBaseline: reachBaseline,
        scopeSettingsFile: n.scopeSettingsFile,
        realpath: n.realpath,
        commonRoots: () => commonRoots,
        scopeRoots: n.scopeWriteRoots
      }).catch(() => {
        R = !0;
      }), R) t("cloud session reach: a base root did not resolve (or sync state could not be read); every hook is treated as in reach for this answer", {
        level: "warn"
      });
      return {
        launchDir: e.launchDir,
        launchDirReal: launchDirReal,
        configHomeReal: configHomeReal,
        projectDir: e.projectDir,
        projectDirReal: projectDirReal,
        ...(sync !== void 0 && {
          sync: sync
        }),
        extraReach: R ? ["/"] : L([...T, ...stickyRoots])
      };
    }
  };
}
function Wo(e) {
  return {
    realpath: NGe().realpath,
    commonWriteRoots: () => Qme(e),
    scopeWriteRoots: (n, r) => Tae(e, n, r),
    scopeWriteEntries: n => {
      let r = mee(n, e),
        s = wr(n);
      if (n === "policySettings" || !s) return r;
      let h = Nne(s, n === "flagSettings" ? YI() ?? Hde() : void 0);
      if (h.errors.some(item => (item.severity ?? "fatal") === "fatal")) return t(`cloud session reach: the ${n} settings file could not be read or parsed at attach; its write grants are unknown, so every hook counts as in the session's reach`, {
        level: "warn"
      }), [rz];
      return L([...mee(n, e, h.settings), ...r]);
    },
    scopeSettingsFile: n => wr(n) ?? null,
    addedDirectories: () => xu()
  };
}
function Fo() {
  let e = new Map();
  return {
    reachFor(n) {
      let r = e.get(n);
      if (r !== void 0) return r;
      let s = mn();
      return e.set(n, s), s;
    }
  };
}
var _zt = new q(Fo);
import { randomUUID as Yo } from "crypto";
var Uo = f(() => ut({
    status: z(["announced", "withdrawn"]),
    passthrough_declined: z(["policy", "pending", "unavailable"]).optional().catch(void 0),
    worker_epoch: E().int().positive().max(Number.MAX_SAFE_INTEGER).optional().catch(void 0),
    protocol_version: E().nullable().optional().catch(void 0),
    ignored_tools: C(o()).optional().catch(void 0),
    passthrough_adopted: E().int().nonnegative().optional().catch(void 0)
  })),
  timeoutMs = 15000,
  reason_2 = "unverified_sender";
function Vo(e) {
  if (e instanceof Qie) return {
    kind: "failed",
    reason: "post_failed"
  };
  if (e instanceof hR) return {
    kind: "failed",
    reason: "no_answer"
  };
  if (e instanceof We) return {
    kind: "failed",
    reason: "aborted"
  };
  let reason = l(e);
  if (reason.startsWith("Unsupported control request subtype")) return {
    kind: "unsupported"
  };
  if (reason.startsWith("remote_tools_disabled:") || reason.startsWith("invalid_announce:")) return {
    kind: "refused",
    reason: reason
  };
  if (reason.startsWith("remote_tools_not_ready:")) return {
    kind: "retry",
    reason: reason
  };
  if (reason.startsWith("stale_worker_epoch")) return {
    kind: "retry",
    reason: "stale_worker_epoch"
  };
  return {
    kind: "failed",
    reason: reason
  };
}
async function wn(e, n, r = {}) {
  Kvt();
  let abortController = new AbortController();
  try {
    let h = await e.postControlRequest(vn(n), {
        signal: r.signal ? AbortSignal.any([r.signal, abortController.signal]) : abortController.signal,
        ...(r.timeoutMs !== void 0 && {
          timeoutMs: r.timeoutMs
        }),
        ...(r.answerExpected === !1 && {
          answerExpected: !1
        }),
        background: !0,
        onEchoed: k => {
          if (k === "unverified") abortController.abort();
        }
      }).response,
      g = mM("remote_tools_announce", Uo(), h);
    if (g === null) return {
      kind: "failed",
      reason: "unreadable_ack"
    };
    return {
      kind: "announced",
      status: g.status,
      ...(g.passthrough_declined !== void 0 && {
        passthroughDeclined: g.passthrough_declined
      }),
      workerEpoch: g.worker_epoch,
      protocolVersion: g.protocol_version,
      ignoredTools: g.ignored_tools ?? [],
      ...(g.passthrough_adopted !== void 0 && {
        passthroughAdopted: g.passthrough_adopted
      })
    };
  } catch (error) {
    return abortController.signal.aborted ? {
      kind: "refused",
      reason: reason_2
    } : Vo(error);
  }
}
function vn(e) {
  return {
    subtype: "remote_tools_announce",
    instance_id: e.instance_id,
    ...(e.worker_epoch !== void 0 && {
      worker_epoch: e.worker_epoch
    }),
    host: e.host,
    tools: e.tools.map(item => ({
      ...item,
      refused_input_fields: [...item.refused_input_fields],
      protocol_versions: [...item.protocol_versions]
    })),
    passthrough: [...e.passthrough],
    plumbing: [...e.plumbing]
  };
}
function zo(e) {
  return e.slice(0, 200).replace(/[^\x20-\x7e]/g, "?");
}
var Bo = 4,
  baseMs = 2000,
  Sn = 1048576;
function Go(body) {
  if (body.passthrough.length === 0 || b(vn(body)).length <= Sn) return {
    body: body,
    trimmed: !1
  };
  return {
    body: {
      ...body,
      passthrough: []
    },
    trimmed: !0
  };
}
function Ko(e) {
  let {
    passthroughAdopted: passthroughAdopted,
    ...r
  } = e;
  return r;
}
var timeoutMs_2 = 1500;
function _n(e) {
  let n = attempt => e.backoffMs !== void 0 ? e.backoffMs[attempt] : attempt < Bo ? e5({
      baseMs: baseMs,
      attempt: attempt,
      floorMs: baseMs * 2 ** attempt / 2
    }) : void 0,
    r = e.setTimer ?? ((Z, W) => {
      let D = setTimeout(Z, W);
      return {
        clear: () => clearTimeout(D)
      };
    }),
    s = !1,
    h = !1,
    g = null,
    k = 0,
    w = null,
    S = null,
    R = null,
    I = !1,
    x,
    P = null,
    H = 0,
    V = 0,
    T = async Z => {
      if (j(Z) || Z === "reconnected") V = 0;
      let W = e.session(),
        D = e.build();
      if (W === null || D === void 0 || !e.workerLive()) {
        g = M(g, Z);
        return;
      }
      let {
        body: body_2,
        trimmed: trimmed
      } = Go(D);
      if (trimmed && !I) I = !0, p("remote_tools_client_announce", "passthrough_over_frame"), t(`[remoteToolsAnnounce] the announce with this machine's ${D.passthrough.length} MCP tools is larger than the worker reads (${Sn} chars); announcing without them \u2014 they are not offered to this worker`, {
        level: "warn"
      });
      g = null, N(), h = !0, x = body_2;
      let J = await wn(W, body_2, {
        ...(e.signal && {
          signal: e.signal
        }),
        timeoutMs: timeoutMs
      });
      if (h = !1, s) return;
      let te = trimmed && J.kind === "announced" ? Ko(J) : J,
        ae = te.kind === "failed" && te.reason === "no_answer",
        G = te.kind === "refused" && te.reason === reason_2;
      V = ae || G ? V + 1 : 0;
      let Y = ae && V > 1 ? {
        kind: "refused",
        reason: "no_answer_parked"
      } : G && V === 1 ? {
        kind: "retry",
        reason: reason_2
      } : te;
      switch (t(`[remoteToolsAnnounce] ${Z}: ${Y.kind}${"reason" in Y ? ` (${zo(Y.reason)})` : ""}`), e.onOutcome?.(Y, Z), Y.kind) {
        case "announced":
          U(), H = 0;
          break;
        case "refused":
        case "unsupported":
          U(), H = 0, P = Y.kind === "refused" && Y.reason === "no_answer_parked" ? "silence" : "refusal";
          break;
        case "retry":
          if (Y.reason === "stale_worker_epoch" && ++H === 1 || Y.reason === reason_2) g ??= "retry";else K();
          break;
        case "failed":
          K();
          break;
      }
      let oe = g;
      if (oe !== null) {
        if (g = null, P === null || A(oe)) P = null, U(), T(oe);
      }
    },
    j = Z => Z === "worker_init" || Z === "tools_changed" || Z === "worker_asked",
    A = Z => j(Z) || P === "silence" && Z === "reconnected",
    M = (Z, W) => Z !== null && j(Z) && !j(W) ? Z : W,
    U = () => {
      k = 0, w?.clear(), w = null;
    },
    N = () => {
      R?.clear(), R = null, S = null;
    },
    B = (Z, ms) => {
      if (S !== null && S.ms <= ms) {
        S = {
          reason: M(S.reason, Z),
          ms: S.ms
        };
        return;
      }
      let D = S?.reason ?? null;
      N(), S = {
        reason: M(D, Z),
        ms: ms
      }, R = r(() => {
        let F = S;
        if (R = null, S = null, F !== null) X.requestAnnounce(F.reason);
      }, ms);
    },
    K = () => {
      let Z = w === null ? n(k) : void 0;
      if (Z === void 0) return;
      k += 1, w = r(() => {
        if (w = null, !s) T("retry");
      }, Z);
    },
    X = {
      requestAnnounce(Z, W) {
        if (s) return;
        if (W?.coalesceMs !== void 0 && W.coalesceMs > 0) {
          B(Z, W.coalesceMs);
          return;
        }
        let D = S === null ? Z : M(S.reason, Z);
        if (N(), A(D)) P = null;
        if (k = 0, P !== null) return;
        if (w?.clear(), w = null, h) {
          g = M(g, D);
          return;
        }
        T(D);
      },
      outstanding: () => h || g !== null,
      workerLive() {
        if (s || h || g === null || P !== null) return;
        let Z = g;
        g = null, w?.clear(), w = null, T(Z);
      },
      async withdraw() {
        if (s) return;
        s = !0, w?.clear(), N();
        let Z = e.session(),
          W = x === void 0 ? void 0 : e.build() ?? x;
        if (Z === null || W === void 0 || !e.workerLive()) return;
        await wn(Z, {
          ...W,
          tools: [],
          passthrough: [],
          plumbing: []
        }, {
          signal: AbortSignal.timeout(timeoutMs_2),
          timeoutMs: timeoutMs_2,
          answerExpected: !1
        });
      },
      dispose() {
        s = !0, w?.clear(), w = null, N();
      }
    };
  return X;
}
function bn({
  serving: serving,
  manager: manager,
  observer: observer
}) {
  let s = new Map();
  return {
    onServedChannelRequest: h => {
      let abortController_2 = new AbortController();
      s.set(h.requestId, abortController_2);
      let k = {
        ...h,
        signal: AbortSignal.any([h.signal, abortController_2.signal])
      };
      Jo(k, serving, manager, observer).catch(w => {
        logError(w), manager()?.releaseServedChannelRequest(h.requestId);
      }).finally(() => s.delete(h.requestId));
    },
    onServedChannelRequestCancelled: () => {},
    abandonInHand: () => {
      for (let [h, g] of s) g.abort(), manager()?.releaseServedChannelRequest(h);
      s.clear();
    }
  };
}
async function Jo(e, n, r, observer_2) {
  let h = P => {
      t(`[servedChannel] ${e.subtype} ${lE(e.requestId)} not answered here: ${P}`), r()?.releaseServedChannelRequest(e.requestId);
    },
    g = n();
  if (g === null) return h("nothing serving");
  let k = performance.now(),
    leg = e.subtype === "remote_tool_call" ? evo(e.request) : void 0,
    S = leg?.request.ok === !0 && leg.instance_id === g.instanceId ? {
      callId: leg.request.value.call_id,
      leg: leg.request.kind === "outcome_query" ? "outcome_of" : leg.request.value.approval === void 0 ? 1 : 2,
      approval: leg.request.kind === "outcome_query" ? "none" : leg.request.value.approval?.decision ?? "none"
    } : void 0;
  Tt(() => {
    if (S !== void 0) lc(S.callId, "leg received", {
      leg: S.leg,
      age_ms: e.ageMs === void 0 ? void 0 : Math.round(e.ageMs)
    }, BSt(S.leg));
  });
  let R = observer_2 !== void 0 && leg !== void 0 && leg.instance_id === g.instanceId ? {
    observer: observer_2,
    leg: leg
  } : void 0;
  Tt(() => R?.observer.legStarted(R.leg));
  let I;
  try {
    I = await Xo(e, g, leg);
  } finally {
    Tt(() => R?.observer.legAnswered(R.leg, I?.result));
  }
  if (I === void 0) return h("not this client's to answer");
  if (e.signal.aborted) return;
  let x = Math.round(performance.now() - k);
  if (r()?.respondToServedChannelRequest(e.requestId, I, S === void 0 ? void 0 : (P, H) => Zo(S, x, P, H)) !== !0) t(`[servedChannel] ${e.subtype} ${lE(e.requestId)} answered after it was withdrawn \u2014 result dropped`);
}
function Zo(e, serve_ms, r, reply_ms) {
  let h = r.outcome === "accepted" ? r.signMs : void 0,
    g = r.outcome === "accepted" ? r.postMs : void 0;
  if (lc(e.callId, "reply posted", {
    leg: e.leg,
    serve_ms: serve_ms,
    reply_ms: reply_ms,
    sign_ms: h,
    post_ms: g,
    post_outcome: r.outcome
  }, BSt(e.leg)), e.leg === "outcome_of") return;
  i("tengu_remote_tool_serve", {
    op: y("reply"),
    call_id: _e(e.callId),
    transport: y("session"),
    second_leg: e.leg === 2,
    approval_decision: c(e.approval),
    serve_ms: serve_ms,
    reply_ms: reply_ms,
    reply_sign_ms: h,
    reply_post_ms: g,
    reply_accepted: r.outcome === "accepted"
  });
}
function Tt(e) {
  try {
    e();
  } catch (error) {
    logError(error);
  }
}
async function Xo(e, n, r) {
  let s = {
    signal: e.signal,
    requestId: e.requestId,
    ageMs: e.ageMs,
    workerEpoch: e.workerEpoch,
    attestationStatus: e.attestationStatus,
    modeStamp: e.modeStamp
  };
  switch (e.subtype) {
    case "remote_tool_call":
      return r === void 0 ? void 0 : n.serveSessionToolCall(r, s);
    case "remote_plumbing_call":
      {
        let h = nvo(e.request);
        return h === void 0 ? void 0 : n.servePlumbingCall(h, s);
      }
    case "remote_tools_probe":
      return e.request.instance_id === n.instanceId ? n.answerProbe() : void 0;
    case "remote_tools_reannounce":
      return;
  }
}
var Pt = e => e.tools.length + e.plumbing.length + (e.passthrough?.length ?? 0) === 0,
  Qo = 1e4,
  er = new Set(["aborted", "invalid_announce", "no_answer", "no_answer_parked", "post_failed", "remote_tools_disabled", "remote_tools_not_ready", "stale_worker_epoch", "unreadable_ack", reason_2]);
function tr(e) {
  let n = /^[a-z_]+(?=:|$)/.exec(e)?.[0];
  return n !== void 0 && er.has(n) ? n : "other";
}
function nr(e) {
  if (e.kind === "announced") {
    _("remote_tools_client_announce");
    return;
  }
  p("remote_tools_client_announce", e.kind === "unsupported" ? "unsupported" : `${e.kind}_${tr(e.reason)}`);
}
function qgt(e) {
  let instanceId = `cc-${Yo()}`,
    r = null,
    s = !1,
    h = null,
    g = null,
    k = () => {},
    kept,
    S,
    R,
    I,
    x,
    P,
    H,
    V,
    T = !1,
    j = !1,
    A = !1,
    M = !1,
    U = _n({
      session: e.manager,
      workerLive: () => e.manager()?.workerLive() ?? !1,
      build: () => {
        let G = r?.servedTools?.();
        if (G === void 0) return;
        return j = Pt(G), P = kept ?? x, e.buildAnnounce(G, instanceId, kept);
      },
      onOutcome: (G, Y) => {
        let oe = P;
        if (x = void 0, G.kind === "announced") {
          if (G.workerEpoch !== void 0) H = Math.max(H ?? 0, G.workerEpoch);
          if (G.workerEpoch !== void 0 && (kept === void 0 || G.workerEpoch >= kept)) kept = G.workerEpoch;else if (G.workerEpoch !== kept) lc(void 0, "epoch ratchet ignored", {
            heard: G.workerEpoch,
            kept: kept
          });
          S = G.passthroughDeclined === "pending" ? void 0 : G.workerEpoch, R = void 0, I = void 0, T = !1, A = j;
        } else if (S = void 0, T = G.kind === "failed" || G.kind === "retry" || G.kind === "refused" && G.reason === "no_answer_parked", G.kind === "refused" && G.reason === "no_answer_parked") I = oe;else if (G.kind === "refused" || G.kind === "unsupported") {
          if (R = oe, G.kind === "refused" && G.reason === reason_2 && !M) M = !0, e.onNotice?.("announce_unverified", Di.announce_unverified(qle()));
        } else if (G.kind === "retry" && G.reason === "stale_worker_epoch") kept = void 0, H = void 0;
        nr(G), e.onAnnounceOutcome?.(G, Y);
      },
      ...(e.signal && {
        signal: e.signal
      }),
      ...e.announcer
    }),
    N = G => {
      if (s) {
        G.dispose();
        return;
      }
      if (r = G, B(), k = G.onServedToolsChanged?.(Y => {
        B(), requestAnnounce("tools_changed", {
          coalesceMs: Y === void 0 || Y === "adopted" || Y === "redescribed" ? 0 : tqt[Y]
        });
      }) ?? k, h !== null) {
        let {
          reason: reason_3,
          opts: opts
        } = h;
        h = null, requestAnnounce(reason_3, opts);
      }
    },
    B = () => {
      if (s) return;
      let G = r?.servedTools?.();
      e.manager()?.markServing(G !== void 0 && !Pt(G));
    },
    requestAnnounce = (reason_4, opts_2) => {
      if (r === null) {
        h = {
          reason: reason_4,
          ...(opts_2 && {
            opts: opts_2
          })
        };
        return;
      }
      if (reason_4 === "attached") B();
      if (reason_4 === "worker_asked") {
        S = void 0, R = void 0, I = void 0, x = void 0, U.requestAnnounce("worker_asked");
        return;
      }
      if (reason_4 === "reconnected" && S !== void 0 || reason_4 === "attached" && (S !== void 0 || x !== void 0)) {
        t(`[servedChannel] ${reason_4}: nothing to announce \u2014 worker epoch ${S ?? x} already has (or is being told) this machine's tools`);
        return;
      }
      if (reason_4 === "worker_init" && opts_2?.workerEpoch !== void 0 && (opts_2.workerEpoch === S || opts_2.workerEpoch === R || opts_2.workerEpoch === I || opts_2.workerEpoch === x || kept !== void 0 && opts_2.workerEpoch < kept)) return;
      if (S = void 0, reason_4 === "reconnected") I = void 0;
      if (reason_4 === "worker_init") {
        if (opts_2?.workerEpoch !== void 0) H = Math.max(H ?? 0, opts_2.workerEpoch);
        x = opts_2?.workerEpoch;
        let oe = opts_2?.workerEpoch === void 0 || kept === void 0 || opts_2.workerEpoch === kept;
        if (opts_2?.workerEpoch !== void 0) kept = opts_2.workerEpoch;
        if (oe && U.outstanding()) return;
      } else if (reason_4 === "tools_changed") R = void 0, I = void 0;
      U.requestAnnounce(reason_4, {
        ...(opts_2?.coalesceMs !== void 0 && {
          coalesceMs: opts_2.coalesceMs
        })
      });
    },
    X = G => {
      e.manager()?.releaseServedChannelRequest(G.requestId);
      let Y = zpn().safeParse(G.request),
        at_2 = Date.now(),
        ie = !Y.success || G.ageMs === void 0 || G.ageMs > Y.data.deadline_ms || TIe(EIe(G.attestationStatus)) || H !== void 0 && Y.data.worker_epoch < H || V?.epoch === Y.data.worker_epoch && !T || V !== void 0 && at_2 - V.at < Qo || U.outstanding();
      if (!Y.success || ie) {
        t("[servedChannel] remote_tools_reannounce not honoured: unreadable, undated, past its wait, from a sender held back, from an older worker, already answered, rate limited, or an announce is already out");
        return;
      }
      V = {
        epoch: Y.data.worker_epoch,
        at: at_2
      }, T = !1, requestAnnounce("worker_asked");
    },
    Z = e.createServingContext({
      sessionId: e.sessionId,
      instanceId: instanceId,
      ...(e.onNotice && {
        onNotice: e.onNotice
      })
    }),
    W = Z instanceof Promise ? Z.then(N).catch(G => {
      logError(G);
    }) : Promise.resolve(N(Z)),
    D = () => {},
    close = () => (g ??= (async () => {
      s = !0, D();
      let G = r?.servedTools?.(),
        Y = G === void 0 || Pt(G),
        oe = A && j && Y ? Promise.resolve(U.dispose()) : U.withdraw();
      e.manager()?.markServing(!1), await W, k(), await oe, r?.dispose(), U.dispose();
    })(), g),
    {
      abandonInHand: abandonInHand,
      onServedChannelRequest: onServedChannelRequest,
      ...te
    } = bn({
      serving: () => s ? null : r,
      manager: e.manager,
      observer: e.onServedCall
    }),
    ae = {
      instanceId: instanceId,
      callbacks: {
        ...te,
        onServedChannelRequest: G => G.subtype === "remote_tools_reannounce" ? X(G) : onServedChannelRequest?.({
          ...G,
          workerEpoch: G.workerEpoch ?? kept
        }),
        onWorkerLive: () => U.workerLive(),
        onWorkerGone: () => {
          S = void 0;
        }
      },
      requestAnnounce: requestAnnounce,
      heldServedCall: G => s || r === null ? mU : r.heldServedCall?.(G) ?? mU,
      servedHost: () => s ? void 0 : r?.servedTools?.()?.host,
      close: close
    };
  if (D = e.onRevoked?.(G => {
    t(`[servedChannel] serving revoked on this machine (${G}) \u2014 closing the channel`), abandonInHand(), e.manager()?.giveUpKeptServedResults(), close();
  }) ?? D, s) D();
  return ae;
}
import { realpath } from "fs/promises";
import { isAbsolute as Oi } from "path";
var En = {
    execCommand: execCommand,
    execHttp: execHttp
  },
  or = [["safe.bareRepository", "explicit"], ["core.hooksPath", "/dev/null"], ["core.fsmonitor", "false"], ["protocol.ext.allow", "never"], ["submodule.recurse", "false"], ["diff.ignoreSubmodules", "all"], ["status.submoduleSummary", "false"], ["fetch.recurseSubmodules", "false"], ["push.recurseSubmodules", "no"]];
function Dt(e) {
  if (e.omit.includes("CLAUDE_CODE_SHELL_PREFIX")) return;
  let n = e.base.CLAUDE_CODE_SHELL_PREFIX?.trim() || void 0;
  return n !== void 0 && n.startsWith("/") ? n : void 0;
}
async function Cn({
  hook: hook,
  event: n,
  input: input,
  timeoutMs: timeoutMs_3,
  env: env
}, g, k, w) {
  if (w.aborted) return hook.type === "http" ? {
    kind: "http",
    ok: !1,
    body: "",
    aborted: !0
  } : {
    kind: "command",
    stdout: "",
    stderr: "",
    status: 1,
    aborted: !0
  };
  let jsonInput = b(input);
  if (hook.type === "http") try {
    return {
      kind: "http",
      ...(await k.execHttp({
        ...hook,
        timeout: void 0
      }, n, jsonInput, w, timeoutMs_3, gnt(env)))
    };
  } catch (x) {
    return {
      kind: "http",
      ok: !1,
      body: "",
      error: x instanceof Error ? x.message : String(x)
    };
  }
  let {
    signal: signal,
    cleanup: cleanup
  } = Ao(w, {
    timeoutMs: timeoutMs_3
  });
  try {
    return {
      kind: "command",
      ...(await k.execCommand({
        hook: {
          ...hook,
          timeout: Math.ceil(timeoutMs_3 / 1000) + 30
        },
        hookEvent: n,
        jsonInput: jsonInput,
        envContext: fee(input),
        project: {
          originalCwd: g.launchDir,
          projectRoot: g.projectRoot
        },
        cwd: input.cwd,
        signal: signal,
        envBase: env.base,
        envOmit: env.omit,
        shellPrefix: Dt(env),
        envExtra: {
          ...env.extra,
          CLAUDE_CODE_CLOUD_SESSION_ID: g.cloudSessionId,
          ...QN(void 0, or)
        }
      }))
    };
  } catch (error) {
    return {
      kind: "command",
      stdout: "",
      stderr: error instanceof Error ? error.message : String(error),
      status: 1,
      spawnFailed: !0
    };
  } finally {
    cleanup();
  }
}
function Ie(e, n) {
  return po(e, {
    maxCodeUnits: 400
  }) || n;
}
function qe(e, n, r = {}) {
  let s = "async" in r ? {} : r;
  if (e !== "PreToolUse") return {
    ...s,
    decision: "block",
    reason: n
  };
  let h = "hookSpecificOutput" in s ? s.hookSpecificOutput : void 0,
    additionalContext = h?.hookEventName === "PreToolUse" ? h.additionalContext : void 0;
  return {
    ...s,
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: n,
      ...(additionalContext !== void 0 && {
        additionalContext: additionalContext
      })
    }
  };
}
function Tn(e, n) {
  let r = rr(e, n);
  if (r.answer === null) return r;
  let {
    answer: answer
  } = RPe(r.answer, n.event);
  if (r.exitClass === "2" && r.blocked && !BQn(answer) && e.kind === "command") {
    let h = qe(n.event, `[${n.label}]: ${e.stderr || "No stderr output"}`, answer);
    return {
      ...r,
      answer: RPe(h, n.event).answer,
      exitClass: "2",
      blocked: !0
    };
  }
  return {
    ...r,
    answer: answer,
    blocked: Ly(answer)
  };
}
function rr(e, {
  event: n,
  label: label,
  timedOut: timedOut,
  timeoutMs: timeoutMs_4,
  timeoutFailsClosed = !1
}) {
  if (e.aborted && !timedOut) return {
    answer: null,
    exitClass: "cancelled",
    blocked: !1
  };
  if (e.aborted) {
    let x = Math.round(timeoutMs_4 / 1000),
      P = `[${label}]: timed out after ${x}s on the attached machine`;
    if (timeoutFailsClosed && (n === "PreToolUse" || n === "UserPromptSubmit" || n === "UserPromptExpansion")) return {
      answer: qe(n, P),
      exitClass: "timeout",
      blocked: !0
    };
    return {
      answer: {},
      exitClass: "timeout",
      localWarning: `[${label}]: timed out after ${x}s \u2014 output discarded; raise the hook's "timeout" to allow more time`,
      blocked: !1
    };
  }
  if (e.kind === "http") {
    if (e.error !== void 0 || !e.ok) {
      let H = Ie(e.error ?? `HTTP ${e.statusCode ?? "request failed"}`, "request failed"),
        V = e.error !== void 0 ? "the request to it could not be made from this machine" : `it answered HTTP ${e.statusCode ?? "with an error"}`,
        answer_2 = xn(n, `[${label}]: not run \u2014 ${V}; retry`);
      return {
        answer: answer_2,
        exitClass: "other",
        localWarning: `[${label}]: ${H}`,
        blocked: Ly(answer_2)
      };
    }
    let {
      json: x,
      validationError: validationError
    } = eZt(e.body);
    if (validationError !== void 0 || x === void 0) return {
      answer: {},
      exitClass: "other",
      localWarning: `[${label}]: ${Ie(validationError ?? "", "no JSON in the response")}`,
      blocked: !1
    };
    return {
      answer: x,
      exitClass: "0",
      blocked: Ly(x)
    };
  }
  if (e.spawnFailed) {
    let answer_3 = xn(n, `[${label}]: not run \u2014 it could not be started on this machine; retry`);
    return {
      answer: answer_3,
      exitClass: "spawn_failed",
      localWarning: `[${label}]: ${Ie(e.stderr, "failed to start")}`,
      blocked: Ly(answer_3)
    };
  }
  let k = e.status === 2 && DNn({
      hookEvent: n,
      stdout: e.stdout,
      stderr: e.stderr
    }),
    w = n !== "Stop" && n !== "SubagentStop" && n !== "StopFailure";
  if (MNn(e.stdout)) {
    if (e.status === 2 && !k && w) return {
      answer: qe(n, `[${label}]: ${e.stderr || "No stderr output"}`),
      exitClass: "2",
      blocked: !0
    };
    return e.status === 0 ? {
      answer: {},
      exitClass: "0",
      blocked: !1
    } : {
      answer: {},
      exitClass: e.status === 2 ? "2" : "other",
      localWarning: `[${label}]: announced async, then failed with status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
      blocked: !1
    };
  }
  let {
    json: json,
    plainText: plainText,
    validationError: validationError_2
  } = $Ve(e.stdout);
  if (validationError_2 !== void 0 && e.status !== 2) return {
    answer: {},
    exitClass: e.status === 0 ? "0" : "other",
    localWarning: `[${label}]: ${Ie(Z7t(validationError_2, e.status, e.stderr), "hook JSON output failed validation")}`,
    blocked: !1
  };
  if (json !== void 0) {
    if ("async" in json) return e.status === 2 && !k && w ? {
      answer: qe(n, `[${label}]: ${e.stderr || "No stderr output"}`),
      exitClass: "2",
      blocked: !0
    } : e.status === 0 ? {
      answer: {},
      exitClass: "0",
      blocked: !1
    } : {
      answer: {},
      exitClass: e.status === 2 ? "2" : "other",
      localWarning: `[${label}]: announced async, then failed with status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
      blocked: !1
    };
    let answer_4 = json;
    if (e.status === 2 && !BQn(answer_4)) return {
      answer: qe(n, `[${label}]: ${e.stderr || "No stderr output"}`, answer_4),
      exitClass: "2",
      blocked: !0
    };
    return {
      answer: answer_4,
      exitClass: e.status === 0 ? "0" : e.status === 2 ? "2" : "other",
      blocked: Ly(answer_4)
    };
  }
  if (e.status === 0) {
    let additionalContext_2 = (plainText ?? "").trim();
    return (n === "UserPromptSubmit" || n === "UserPromptExpansion") && additionalContext_2 !== "" ? {
      answer: {
        hookSpecificOutput: {
          hookEventName: n,
          additionalContext: additionalContext_2
        }
      },
      exitClass: "0",
      blocked: !1
    } : {
      answer: {},
      exitClass: "0",
      blocked: !1
    };
  }
  if (e.status === 2) {
    if (k) return {
      answer: {},
      exitClass: "2",
      localWarning: `[${label}]: the hook script appears to be missing (${Ie(e.stderr, "no such file")})`,
      blocked: !1
    };
    return {
      answer: qe(n, `[${label}]: ${e.stderr || "No stderr output"}`),
      exitClass: "2",
      blocked: !0
    };
  }
  return {
    answer: {},
    exitClass: "other",
    localWarning: `[${label}]: failed with non-blocking status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
    blocked: !1
  };
}
function xn(e, permissionDecisionReason) {
  return e === "PreToolUse" ? {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: permissionDecisionReason
    }
  } : {};
}
import { devNull as ir } from "os";
import { basename as ct, delimiter as Pn, dirname as sr, isAbsolute as It, resolve as ht } from "path";
var ar = 30000,
  lr = 8,
  Ot = 64,
  dr = 1048576,
  At = 2000,
  Dn = 1000,
  cr = 256,
  tt = 256,
  ur = 64,
  hr = 8,
  An = 256,
  fr = ir,
  Fn = /^[A-Za-z0-9_.:-]{1,128}$/,
  pr = /^[a-z]{1,16}$/,
  mr = "Not running your hooks for the cloud session: the service could not vouch for the sender of its hook requests under your organization's trusted-device policy. The session goes on without them.";
function gr(e) {
  return e.deadlineMs !== void 0 && (e.ageMs === void 0 || e.ageMs > e.deadlineMs + ar);
}
function ke(e) {
  return Fn.test(e) ? e : po(e, {
    maxCodeUnits: 64
  });
}
function ce(e, n, r) {
  return e === "PreToolUse" ? {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: `[${n}]: ${r}`
    }
  } : {};
}
function In(e, n, r) {
  return n.rawPath === r ? e : qJt(e, n.site, r);
}
function $n(e, n) {
  if (typeof e !== "string" || n === null || !e.startsWith("/")) return !1;
  if (e.trim() !== e || /^\/(?:proc|dev|net|network)(?:\/|$)/i.test(e)) return !1;
  if (e.split("/").slice(1).some(item => item === "" || item === "." || item === "..")) return !1;
  return !vIt(e, S2t(n.containerProjectDir));
}
var ft = $Yr;
function kr(e, n) {
  if (ft(e)) return !0;
  let r = Hht(e),
    s = r[0] === "tool_calls" ? 2 : 0;
  if (r[s] !== "tool_response") return !1;
  let h = r.slice(0, s + 1).reduce((acc, item) => Re(acc) ? acc[item] : void 0, n);
  for (let g of r.slice(s + 1)) {
    if (Array.isArray(h)) return !1;
    h = Re(h) ? h[g] : void 0;
  }
  return !0;
}
function yr(e, n, r) {
  let s = Hht(e),
    h = s[0] === "tool_calls",
    g = h ? s.slice(2) : s;
  if (g[0] === "tool_response") return !0;
  if (g[0] !== "tool_input" || g.length !== 2 || !Re(n)) return !1;
  let tool_calls = n.tool_calls,
    w = h ? Re(tool_calls) ? tool_calls[s[1] ?? ""] : void 0 : n,
    S = Re(w) ? w.tool_name : void 0,
    R = typeof S === "string" ? w2t(S, r) : void 0;
  return R !== void 0 && g[1] === R;
}
var vr = /^[A-Za-z][A-Za-z0-9_-]{0,40}$/,
  lt = Symbol("deviceHooks.disconnect"),
  On = Symbol("deviceHooks.deadline");
function Sr(e) {
  let n = [e.session_id, e.agent_id, e.prompt_id];
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") n.push(e.tool_use_id);
  return n.every(item => item === void 0 || Fn.test(item) && !item.includes("..")) && (e.permission_mode === void 0 || vr.test(e.permission_mode)) && (e.effort === void 0 || pr.test(e.effort.level)) && (e.agent_type === void 0 || po(e.agent_type, {
    maxCodeUnits: 64
  }) === e.agent_type);
}
function jn(e, n) {
  if (e.type === "http") try {
    return new URL(e.url).host || "http hook";
  } catch {
    return "http hook";
  }
  let r = n?.kind === "script" ? ct(n.rawPath) : ct(e.command.trim().split(/\s+/)[0] ?? "");
  return po(r, {
    maxCodeUnits: 64
  }) || "hook";
}
function Un(e, n, r) {
  if (r.wireLabel === "basename") return n;
  if (e.type === "http") try {
    return po(new URL(e.url).origin, {
      maxCodeUnits: 200
    });
  } catch {
    return n;
  }
  return po(e.command, {
    maxCodeUnits: 200
  });
}
function _r(e, n) {
  let r = {
    ...e,
    transcript_path: n
  };
  return "agent_transcript_path" in r ? {
    ...r,
    agent_transcript_path: n
  } : r;
}
function Re(e) {
  return typeof e === "object" && e !== null;
}
function $t(e, n) {
  return Hht(n).reduce((acc, item) => Re(acc) ? acc[item] : void 0, e);
}
function br(e, n) {
  let r = [],
    s = (k, w, S, R) => {
      if (r.length > tt || R > hr) return;
      if (typeof w === "string") {
        if (S && w !== "" && !It(w)) r.push(k);
        return;
      }
      if (Array.isArray(w)) {
        w.forEach((item, index) => s(`${k}/${index}`, item, S, R + 1));
        return;
      }
      if (Re(w)) {
        let I = Object.keys(w).some(CPe);
        for (let [x, P] of Object.entries(w)) s(`${k}/${Nht(x)}`, P, S && !I || CPe(x), R + 1);
      }
    },
    h = (k, w, S) => {
      if (!Re(S)) return;
      let R = typeof w === "string" ? w2t(w, n) : void 0;
      for (let [I, x] of Object.entries(S)) s(`${k}/tool_input/${Nht(I)}`, x, I === R || CPe(I), 1);
    },
    g = (k, w) => {
      if (!Re(w) || Array.isArray(w)) return;
      let S = (R, I, x) => {
        if ((ft(R) || UYr(R) || CPe(I)) && typeof x === "string" && x !== "" && !It(x) && x.length <= 4096 && !/\p{Cc}/u.test(x)) r.push(R);
      };
      for (let [R, I] of Object.entries(w)) {
        let x = `${k}/tool_response/${Nht(R)}`;
        if (S(x, R, I), Re(I) && !Array.isArray(I)) for (let [P, H] of Object.entries(I)) S(`${x}/${Nht(P)}`, P, H);
      }
    };
  if ("tool_input" in e) h("", "tool_name" in e ? e.tool_name : void 0, e.tool_input);
  if ("tool_response" in e) g("", e.tool_response);
  if ("tool_calls" in e && Array.isArray(e.tool_calls)) e.tool_calls.forEach((item, index) => {
    if (Re(item)) {
      if (h(`/tool_calls/${index}`, item.tool_name, item.tool_input), "tool_response" in item) g(`/tool_calls/${index}`, item.tool_response);
    }
  });
  return r;
}
async function dt(e, n) {
  let r = e,
    s = [];
  for (;;) {
    if (s.length > ur) return null;
    try {
      let h = await n.realpath(r);
      return s.length === 0 ? h : ht(h, ...s);
    } catch (error) {
      if (v(error) !== "ENOENT") return null;
      let g = await n.lstat(r).then(w => w.isSymbolicLink()).catch(() => !1),
        k = sr(r);
      if (g || k === r) return null;
      s.unshift(ct(r)), r = k;
    }
  }
}
async function Hn(e, n, r, s) {
  let h = k => k !== null && (bB(k, r.real) || bB(k, r.dir));
  return (await Promise.all(e.map(async item => {
    let w = $t(n, item);
    if (typeof w !== "string" || w === "") return null;
    let S = It(w) ? w : ht(n.cwd, w);
    return h(await dt(S, s)) ? null : item;
  }))).filter(item => item !== null);
}
function Rr(e) {
  let n = 0,
    r = [],
    s = () => {
      n -= 1;
      let h = r.shift();
      if (h !== void 0) n += 1, h.grant();
    };
  return {
    acquire(h, g) {
      if (g.aborted) return Promise.resolve(null);
      if (n < lr) return n += 1, Promise.resolve(Nn(s));
      if (h <= 0) return Promise.resolve(null);
      return new Promise(k => {
        let w = !1,
          S = P => {
            if (w) {
              if (P !== null) P();
              return;
            }
            w = !0, x.clear(), g.removeEventListener("abort", I);
            let H = r.indexOf(R);
            if (H !== -1) r.splice(H, 1);
            k(P);
          },
          R = {
            grant: () => S(Nn(s)),
            refuse: () => S(null)
          },
          I = () => S(null),
          x = e.setTimer(() => S(null), h);
        g.addEventListener("abort", I, {
          once: !0
        }), r.push(R);
      });
    },
    refuseAll() {
      for (let h of r.splice(0)) h.refuse();
    }
  };
}
function Nn(e) {
  let n = !1;
  return () => {
    if (n) return;
    n = !0, e();
  };
}
function qn(e) {
  let n = new Map(),
    r = new Map(),
    s = Rr(e),
    h = (N, B, K) => {
      let X = B.local.hook.timeout !== void 0 && B.local.hook.timeout > 0 ? B.local.hook.timeout * 1000 : e.defaultTimeoutMs(EV(B.local.event) ? B.local.event : "Stop");
      return (N.deadlineMs ?? 2 * X + 2 * At) - (e.now() - K) - At / 2;
    },
    g = new Set(),
    k = new Map(),
    {
      repinned: repinned,
      everInReach: everInReach,
      answered: answered,
      withdrawn: withdrawn
    } = e.memory,
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    P = N => {
      if (N.size > cr) {
        let B = N.keys().next().value;
        if (B !== void 0) N.delete(B);
      }
    },
    H = (N, callbackId, answer_5) => {
      answered.delete(N), answered.set(N, {
        callbackId: callbackId,
        answer: answer_5
      }), P(answered);
    },
    V = N => {
      withdrawn.delete(N), withdrawn.add(N), P(withdrawn);
    },
    T = (N, B, K) => {
      if (g.has(N)) return;
      g.add(N), e.onLine(B, K);
    },
    j = (N, B) => {
      let K = e.now();
      if (K - (k.get(N) ?? Number.NEGATIVE_INFINITY) < 60000) return;
      k.set(N, K), e.onLine(B, "warning");
    },
    A = (N, B, attestation) => e.telemetry({
      outcome: N.outcome,
      event: N.event ?? null,
      kind: N.kind ?? null,
      exitClass: N.exitClass ?? null,
      translatedPaths: N.translatedPaths ?? 0,
      replay: N.replay ?? !1,
      blocked: N.blocked ?? !1,
      staged: N.staged ?? !1,
      repinned: N.repinned ?? !1,
      waitedMs: N.waitedMs ?? 0,
      durationMs: Math.max(0, e.now() - B),
      attestation: attestation
    }),
    M = async (N, B, K, X, Z, W) => {
      let pinnedTarget = N.local.pinnedTarget,
        F = ie => ce(Z, X.wire, ie);
      if (pinnedTarget === void 0) {
        if (K !== null && K.kind === "script") {
          let ie = await dt(K.resolvedPath, e.pin);
          if (ie === null) return T(`unvouched:unjudgeable:${N.wire.id}`, `Not running ${X.local} for the cloud session: its file cannot be found or judged on this machine.`, "warning"), {
            kind: "refuse",
            answer: F(`not run \u2014 its file cannot be found or judged on ${W.displayName}`),
            outcome: "pin_unreadable"
          };
          let we = everInReach.has(N.wire.id) || y_([K.resolvedPath, ie], [...W.cloudWritableRoots, ...e.extraWritableRoots()]);
          if (we) everInReach.add(N.wire.id);
          if (we && N.local.cloudOptIn !== !0) return T(`reach:${N.wire.id}`, `Not running ${X.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`, "info"), {
            kind: "refuse",
            answer: F(`not run \u2014 its file now sits where the cloud session can write on ${W.displayName} and it is not marked cloud: "device"`),
            outcome: "in_reach_refused"
          };
          if (we) return T(`unvouched:in_reach:${N.wire.id}`, `Not running ${X.local} for the cloud session: it could not be pinned when this session started and now sits where the session can write; review the file, then restart claude --cloud to offer it again.`, "warning"), {
            kind: "refuse",
            answer: F(`not run \u2014 its file could not be pinned on ${W.displayName} and sits where the cloud session can write; review it there`),
            outcome: "in_reach_refused"
          };
        }
        return {
          kind: "run",
          hook: K !== null && K.kind === "script" ? In(B, K, K.resolvedPath) : B,
          staged: null,
          repinned: !1
        };
      }
      let sha256 = repinned.get(N.wire.id) ?? pinnedTarget.sha256,
        J = await Odo({
          ...pinnedTarget,
          sha256: sha256
        }, e.pin),
        te = everInReach.has(N.wire.id) || y_([pinnedTarget.path, pinnedTarget.realPath, ...(J.realPath !== void 0 ? [J.realPath] : [])], [...W.cloudWritableRoots, ...e.extraWritableRoots()]);
      if (te) everInReach.add(N.wire.id);
      if (te && N.local.cloudOptIn !== !0) return T(`reach:${N.wire.id}`, `Not running ${X.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`, "info"), {
        kind: "refuse",
        answer: F(`not run \u2014 its file now sits where the cloud session can write on ${W.displayName} and it is not marked cloud: "device"; move it under ~/.claude or mark the entry`),
        outcome: "in_reach_refused"
      };
      let ae,
        G = sha256,
        repinned_2 = repinned.has(N.wire.id);
      if (J.ok) ae = J.bytes;else if (J.reason === "changed" && !te && W.repinChangedScripts) repinned.set(N.wire.id, J.current.sha256), repinned_2 = !0, ae = J.current.bytes, G = J.current.sha256, T(`repin:${N.wire.id}:${J.current.sha256}`, `${X.local} changed on this machine since it was registered; the cloud session's runs use the current version.`, "info");else if (J.reason === "changed" && !te) return T(`changed:${pinnedTarget.path}`, `${X.local} changed on this machine since it was registered for this cloud session \u2014 not running it for the session. If you edited it, relaunch claude --cloud here to register the new version (editing your hooks through /hooks in this terminal also re-registers); if you did not, look at the file.`, "warning"), {
        kind: "refuse",
        answer: F(`not run \u2014 its file changed on ${W.displayName} since it was registered; it runs again once that machine re-registers it`),
        outcome: "pin_changed"
      };else if (J.reason === "changed") return T(`pin:changed:${N.wire.id}`, `Not running ${X.local} for the cloud session: its file changed while the session could write to it on this machine \u2014 review the file before trusting it again.`, "warning"), {
        kind: "refuse",
        answer: F(`not run \u2014 its file changed on ${W.displayName} while the cloud session could write to it; review the file there before trusting it again`),
        outcome: "pin_refused"
      };else if (J.reason === "multiply_linked" || J.reason === "relocated") {
        let ie = J.reason === "multiply_linked" ? "it now has more than one hard link" : "its path now leads to a different file than the one registered";
        return T(`pin:${J.reason}:${N.wire.id}`, `Not running ${X.local} for the cloud session: ${ie} on this machine \u2014 look at the file; if you re-linked or moved it yourself, relaunch claude --cloud here to register it again.`, "warning"), {
          kind: "refuse",
          answer: F(`not run \u2014 ${ie} on ${W.displayName}; review it there`),
          outcome: "pin_refused"
        };
      } else {
        let ie = J.reason.replace("_", " ");
        return T(`pin:${J.reason}:${N.wire.id}`, `Not running ${X.local} for the cloud session: the file it runs can no longer be read on this machine (${ie}).`, "warning"), {
          kind: "refuse",
          answer: F(`not run \u2014 its file on ${W.displayName} can no longer be read (${ie}); it runs again once that machine re-registers it`),
          outcome: te ? "pin_refused" : "pin_unreadable"
        };
      }
      if (K?.kind !== "script" || K.resolvedPath !== pinnedTarget.path) return T(`pin:parse:${N.wire.id}`, `Not running ${X.local} for the cloud session: its command no longer reads as the script that was registered.`, "warning"), {
        kind: "refuse",
        answer: F(`not run \u2014 its command on ${W.displayName} no longer names the script that was registered`),
        outcome: "pin_refused"
      };
      if (!(W.stageVerifiedBytes === "always" || W.stageVerifiedBytes === "in_reach" && te)) return {
        kind: "run",
        hook: In(B, K, pinnedTarget.path),
        staged: null,
        repinned: repinned_2
      };
      try {
        let staged = await e.staging.stage(G, ae, ct(pinnedTarget.path));
        return {
          kind: "run",
          hook: qJt(B, K.site, staged.path),
          staged: staged,
          repinned: repinned_2
        };
      } catch {
        return T(`stage:${N.wire.id}`, `Not running ${X.local} for the cloud session: this machine has no private place to keep a verified copy of it.`, "warning"), {
          kind: "refuse",
          answer: F(`not run \u2014 ${W.displayName} has no private place to keep a verified copy of it`),
          outcome: "staging_failed"
        };
      }
    },
    U = async (N, B, K, X, Z) => {
      let event = K.local.event;
      if (!EV(event)) return {
        answer: {},
        telemetry: {
          outcome: "event_mismatch"
        }
      };
      let hook_2 = K.local.hook;
      if (hook_2.type !== "command" && hook_2.type !== "http") {
        let answer_6 = ce(event, `hook on ${B.displayName}`, "not run \u2014 it is not a kind of hook that machine can run for a cloud session; retry");
        return {
          answer: answer_6,
          telemetry: {
            event: event,
            outcome: "unsupported_kind",
            blocked: Ly(answer_6)
          }
        };
      }
      let F = {
          event: event,
          kind: hook_2.type
        },
        ee = hook_2.type === "command" ? e.parseTarget(hook_2) : null,
        local = jn(hook_2, ee),
        te = {
          local: local,
          wire: Un(hook_2, local, B)
        };
      if (gr(N)) {
        T("stale", 'A hook request from the cloud session arrived already past its deadline (this machine was asleep, offline, or its stream was running behind). A guard answered "retry"; anything else had no opinion.', "warning");
        let answer_7 = ce(event, te.wire, `not run \u2014 the request reached ${B.displayName} already past its deadline (that machine was asleep or its stream ran behind); retry`);
        return {
          answer: answer_7,
          telemetry: {
            ...F,
            outcome: "stale",
            blocked: Ly(answer_7)
          }
        };
      }
      let ae = 0;
      try {
        let ne = b(N.input);
        ae = typeof ne === "string" ? Buffer.byteLength(ne, "utf8") : 0;
      } catch {
        ae = 0;
      }
      if (ae > dr) {
        let answer_8 = Mn(K, B, e, "too_large");
        return {
          answer: answer_8,
          telemetry: {
            ...F,
            outcome: "input_too_large",
            blocked: Ly(answer_8)
          }
        };
      }
      let G = M4n().safeParse(N.input);
      if (!G.success || !Sr(G.data)) {
        let answer_9 = ce(event, te.wire, `not run \u2014 the event could not be read on ${B.displayName}; retry`);
        return {
          answer: answer_9,
          telemetry: {
            ...F,
            outcome: "invalid_input",
            blocked: Ly(answer_9)
          }
        };
      }
      if (G.data.hook_event_name !== event) {
        let answer_10 = ce(event, te.wire, `not run \u2014 the event does not match the hook it names on ${B.displayName}; retry`);
        return {
          answer: answer_10,
          telemetry: {
            ...F,
            outcome: "event_name_mismatch",
            blocked: Ly(answer_10)
          }
        };
      }
      if (B.roots === null) {
        let answer_11 = ce(event, te.wire, `not run \u2014 ${B.displayName} does not know this session's directories yet; retry`);
        return {
          answer: answer_11,
          telemetry: {
            ...F,
            outcome: "no_roots",
            blocked: Ly(answer_11)
          }
        };
      }
      if (!e.trustAccepted()) {
        let answer_12 = ce(event, te.wire, `not run \u2014 its folder is no longer marked trusted on ${B.displayName}`);
        return {
          answer: answer_12,
          telemetry: {
            ...F,
            outcome: "untrusted",
            blocked: Ly(answer_12)
          }
        };
      }
      let Y = e.toolAliases?.();
      if (!Kbr(G.data, K.local.matcher, Y)) return {
        answer: {},
        telemetry: {
          ...F,
          outcome: "event_mismatch"
        }
      };
      let oe = BYr(G.data, B.roots, {
          cloudSessionId: B.cloudSessionId
        }, Y),
        input_2 = oe.input,
        we = Object.keys(input_2.cloud_session.original.paths),
        translatedPaths = we.length,
        se = {
          dir: B.frame.launchDir,
          real: B.launchDirReal
        },
        ye = async ne => {
          let de = fe => bB(fe, se.real) || bB(fe, se.dir);
          try {
            return de(await e.pin.realpath(ne)) ? "inside" : "unjudgeable";
          } catch (error) {
            if (v(error) !== "ENOENT") return "unjudgeable";
            let Ne = await dt(ne, e.pin);
            return Ne !== null && de(Ne) ? "missing" : "unjudgeable";
          }
        },
        xe = await ye(input_2.cwd);
      if (xe !== "inside") e.debug(`[deviceHooks] ${ke(N.requestId)}: translated cwd is ${xe === "missing" ? "not an existing directory" : "not judgeable as a directory inside the launch directory"}; running from the launch directory`), input_2 = {
        ...input_2,
        cwd: se.dir
      };
      let Te = br(input_2, Y),
        De = [...we.filter(item => kr(item, input_2)), ...Te],
        st = De.length > tt ? De : await Hn(De, input_2, se, e.pin),
        Oe = (oe.untranslated.includes("/cwd") || xe === "unjudgeable") && Te.length > 0,
        Rt = oe.untranslated.flatMap(ne => {
          let value = $t(G.data, ne);
          return ft(ne) && !yr(ne, G.data, Y) && typeof value === "string" && $n(value, B.roots) ? [{
            pointer: ne,
            value: value
          }] : [];
        }),
        Qt = async ne => {
          if (ne.length > tt) return {
            waived: [],
            namingFilesHere: ne.map(item => item.pointer)
          };
          let de = await Promise.all(ne.map(async ({
            pointer: pointer,
            value: value_2
          }) => {
            let ve = await dt(value_2, e.pin),
              be = ve !== null && (bB(ve, se.real) || bB(ve, se.dir)),
              je = ve !== null && !be && (await e.pin.realpath(value_2).then(() => !1, xt => v(xt) === "ENOENT"));
            return {
              pointer: pointer,
              waived: be || je
            };
          }));
          return {
            waived: de.filter(item => item.waived).map(item => item.pointer),
            namingFilesHere: de.filter(item => !item.waived).map(item => item.pointer)
          };
        },
        en = await Qt(Rt),
        namingFilesHere = en.namingFilesHere,
        Co = B.denyUnjudgeablePaths ? [] : en.waived,
        tn = [...oe.untranslated.filter(item => ft(item) && !Co.includes(item)), ...(Oe ? ["/cwd"] : []), ...st];
      if (tn.length > 0) {
        let ne = !Oe && st.length === 0 && namingFilesHere.length === 0 && De.length <= tt && tn.every(item => $n($t(G.data, item), B.roots));
        if (!(ne && B.runWithUntranslatedPaths)) {
          T(`untranslated:${K.wire.id}:${ne ? "container" : "unjudgeable"}`, ne ? `Skipped ${te.local} for the cloud session: the file it would look at exists only in the cloud, not in the synced project on this machine.` : `Not running ${te.local} for the cloud session: the event names a path this machine could not map to its own files.`, "info");
          let answer_13 = !ne || B.denyUnjudgeablePaths ? ce(event, te.wire, ne ? "not run \u2014 the event names a file that exists only in the cloud, so this machine could not judge it" : "not run \u2014 the event names a path this machine could not map to its own files; retry with a plain path inside the project") : {};
          return {
            answer: answer_13,
            telemetry: {
              ...F,
              outcome: "untranslated_skipped",
              translatedPaths: translatedPaths,
              blocked: Ly(answer_13)
            }
          };
        }
      }
      let He = _r(input_2, await e.emptyTranscriptPath().catch(() => fr));
      if (hook_2.if) {
        let ne;
        try {
          ne = await e.evaluateCondition(hook_2.if, He);
        } catch {
          ne = null;
        }
        if (ne === null) {
          let answer_14 = ce(event, te.wire, "not run \u2014 its condition could not be evaluated on this machine; retry");
          return {
            answer: answer_14,
            telemetry: {
              ...F,
              outcome: "condition_error",
              translatedPaths: translatedPaths,
              blocked: Ly(answer_14)
            }
          };
        }
        if (!ne) return {
          answer: {},
          telemetry: {
            ...F,
            outcome: "condition_false",
            translatedPaths: translatedPaths
          }
        };
      }
      let me = hook_2.type === "command" ? await M(K, hook_2, ee, te, event, B) : {
        kind: "run",
        hook: hook_2,
        staged: null,
        repinned: !1
      };
      if (me.kind === "refuse") return {
        answer: me.answer,
        telemetry: {
          ...F,
          outcome: me.outcome,
          translatedPaths: translatedPaths,
          blocked: Ly(me.answer)
        }
      };
      try {
        if (Z.aborted) return {
          answer: null,
          telemetry: {
            ...F,
            outcome: "cancelled"
          }
        };
        let ne = hook_2.timeout !== void 0 && hook_2.timeout > 0 ? hook_2.timeout * 1000 : e.defaultTimeoutMs(event),
          de = () => N.deadlineMs !== void 0 ? N.deadlineMs - (e.now() - X) - At : ne,
          fe = de(),
          Ne = e.now(),
          ve = await s.acquire(fe, Z),
          waitedMs = Math.max(0, e.now() - Ne),
          je = ve !== null && de() < Dn;
        if (je && ve !== null) ve(), ve = null;
        if (ve === null) {
          if (Z.aborted) return {
            answer: null,
            telemetry: {
              ...F,
              outcome: "cancelled",
              waitedMs: waitedMs
            }
          };
          if (!je && e.now() - NEGATIVE_INFINITY >= 60000) NEGATIVE_INFINITY = e.now(), e.onLine('The cloud session is asking for more hooks at once than this machine can run in time; some were answered "retry" (guards) or with no opinion.', "warning");
          let answer_15 = ce(event, te.wire, je ? `not run \u2014 too little time was left before the cloud session stops waiting for ${B.displayName}; retry` : `not run \u2014 ${B.displayName} is running too many hooks for the cloud session at once; retry`);
          return {
            answer: answer_15,
            telemetry: {
              ...F,
              outcome: je ? "too_late" : "no_slot",
              translatedPaths: translatedPaths,
              blocked: Ly(answer_15),
              waitedMs: waitedMs
            }
          };
        }
        let xt = ve;
        try {
          if (Z.aborted) return {
            answer: null,
            telemetry: {
              ...F,
              outcome: "cancelled",
              waitedMs: waitedMs
            }
          };
          let Be = He.cwd === se.dir ? "inside" : await ye(He.cwd),
            input_3 = He;
          if (Be !== "inside") input_3 = {
            ...He,
            cwd: se.dir
          };
          let nn = Be === "unjudgeable" && Te.length > 0 || De.length <= tt && (await Hn(De, input_3, se, e.pin)).length > 0,
            To = !nn && Rt.length > 0 && (await Qt(Rt)).namingFilesHere.length > 0;
          if (nn || To) {
            let answer_16 = ce(event, te.wire, `not run \u2014 a path the event names moved outside the project on ${B.displayName} while it waited; retry`);
            return {
              answer: answer_16,
              telemetry: {
                ...F,
                outcome: "untranslated_skipped",
                translatedPaths: translatedPaths,
                blocked: Ly(answer_16),
                waitedMs: waitedMs
              }
            };
          }
          if (Z.aborted) return {
            answer: null,
            telemetry: {
              ...F,
              outcome: "cancelled",
              waitedMs: waitedMs
            }
          };
          let timeoutMs_5 = Math.min(ne, de());
          if (de() < Dn) {
            let answer_17 = ce(event, te.wire, `not run \u2014 too little time was left before the cloud session stops waiting for ${B.displayName}; retry`);
            return {
              answer: answer_17,
              telemetry: {
                ...F,
                outcome: "too_late",
                translatedPaths: translatedPaths,
                blocked: Ly(answer_17),
                waitedMs: waitedMs
              }
            };
          }
          let Ge = e.hostEnv(),
            on = [B.frame.launchDir, B.launchDirReal, ...B.cloudWritableRoots, ...e.extraWritableRoots()],
            rn = le => le !== rz && !QP(le),
            at = O() === "windows" && on.some(rn) ? [rz] : on.filter(item => !rn(item)).map(item => item === rz ? item : Cd(ht(item))),
            Ke = await e.childEnvironment(at, Ge),
            Po = le => at.some(item => Bme(Cd(ht(le)), item)) || O() === "windows" && Pr(le, at),
            sn = Tr(Ge.CLAUDE_CODE_SHELL_PREFIX ?? "", {
              home: Ge.HOME,
              launchDir: B.frame.launchDir
            }),
            an = await Promise.all(sn.map(item => e.placePath(item).then(Ae => Ae === "unreadable" ? Wn : Ae === "absent" ? item : Ae))),
            Je = (an.includes(Wn) || [...sn, ...an].some(Po)) && !Ke.omit.includes("CLAUDE_CODE_SHELL_PREFIX") ? {
              ...Ke,
              omit: [...Ke.omit, "CLAUDE_CODE_SHELL_PREFIX"],
              extra: ss(Ke.extra, "CLAUDE_CODE_SHELL_PREFIX")
            } : Ke;
          if (Ge.CLAUDE_CODE_SHELL_PREFIX?.trim() && me.hook.type === "command" && me.hook.args === void 0 && Dt(Je) === void 0) T("prefix-unwrapped", 'Hooks marked cloud: "device" run for the cloud session WITHOUT your CLAUDE_CODE_SHELL_PREFIX here: this machine cannot vouch for that wrapper (it is not an absolute path outside what the session can write).', "warning");
          let PATH = Je.extra.PATH,
            env_2 = PATH === void 0 || PATH === "" ? {
              ...Je,
              extra: {
                ...Je.extra,
                PATH: PATH_2
              }
            } : Je,
            Do = new Set((env_2.extra.PATH ?? "").split(Pn)),
            Qe = (Ge.PATH ?? "").split(Pn).filter(item => item !== "" && !Do.has(item));
          if (env_2.omit.length > 0) e.debug(`[deviceHooks] ${ke(N.requestId)}: not passing on ${env_2.omit.join(", ")}`);
          if (Qe.length > 0) T("search-path-trimmed", `Hooks the cloud session forwards here run without ${Qe.length} PATH entr${Qe.length === 1 ? "y" : "ies"} the session can write to or that cannot be resolved on this machine (${Qe.slice(0, 3).map(item => Rn(item)).join(", ")}${Qe.length > 3 ? ", \u2026" : ""}); a tool installed only there is "not found" for them.`, "debug");
          let et = me.hook.type !== "command" ? void 0 : me.hook.args !== void 0 ? me.hook.command.includes("/") ? void 0 : me.hook.command : ee?.kind === "script" && ee.interpreter !== null ? ee.interpreter : void 0;
          if (et !== void 0) {
            if ((await e.resolveProgram(et, env_2.extra.PATH ?? "", at)) === "in_reach") {
              T(`program:${et}`, `Not running hooks through ${et} for the cloud session: on this machine that name leads to a file the session can write.`, "warning");
              let answer_18 = ce(event, te.wire, `not run \u2014 ${et} on ${B.displayName} leads to a file the cloud session can write`);
              return {
                answer: answer_18,
                telemetry: {
                  ...F,
                  outcome: "in_reach_refused",
                  translatedPaths: translatedPaths,
                  blocked: Ly(answer_18),
                  waitedMs: waitedMs
                }
              };
            }
          }
          let Io = e.now(),
            dn = await e.run({
              hook: me.hook,
              event: event,
              input: input_3,
              timeoutMs: timeoutMs_5,
              env: env_2
            }, B.frame, Z),
            timedOut_2 = dn.aborted === !0 && !Z.aborted,
            ge = timedOut_2 && timeoutMs_5 < ne ? {
              answer: ce(event, te.wire, `not run to completion \u2014 too little time was left before the cloud session stops waiting for ${B.displayName}; retry`),
              exitClass: "timeout",
              blocked: event === "PreToolUse",
              localWarning: void 0
            } : Tn(dn, {
              event: event,
              label: te.wire,
              timedOut: timedOut_2,
              timeoutMs: timeoutMs_5,
              timeoutFailsClosed: B.timeoutFailsClosed
            }),
            un = e.now() - Io;
          if (ge.localWarning !== void 0) j(`${K.wire.id}:${ge.exitClass}`, `cloud \u25B8 ${event} \u25B8 ${ge.localWarning}`);else if (ge.answer !== null && ge.blocked) e.onLine(`cloud \u25B8 ${event}${Ln(He)} \u25B8 ${te.local} \u25B8 blocked (${un} ms)`, "info");else if (ge.answer !== null && Er(ge.answer)) e.onLine(`cloud \u25B8 ${event}${Ln(He)} \u25B8 ${te.local} \u25B8 added context (${un} ms)`, "debug");
          return {
            answer: ge.answer,
            telemetry: {
              ...F,
              outcome: ge.answer === null ? "cancelled" : ge.exitClass === "spawn_failed" || ge.exitClass === "other" && ge.localWarning !== void 0 ? "run_error" : "answered",
              exitClass: ge.exitClass,
              translatedPaths: translatedPaths,
              blocked: ge.blocked,
              staged: me.staged !== null,
              repinned: me.repinned,
              waitedMs: waitedMs
            }
          };
        } finally {
          xt();
        }
      } finally {
        await me.staged?.release();
      }
    };
  return {
    async serve(N, B) {
      let K = e.now();
      if (B === null) return {
        kind: "silent",
        reason: "no_state"
      };
      if (N.requestId.length > An || N.callbackId.length > An) return A({
        outcome: "not_mine"
      }, K, void 0), {
        kind: "silent",
        reason: "not_mine"
      };
      let X = Nre(N.callbackId),
        Z = X?.instanceId,
        W = Z !== void 0 && B.retiredInstanceIds.has(Z);
      if (!W && Z !== B.instanceId) return A({
        outcome: "not_mine"
      }, K, void 0), {
        kind: "silent",
        reason: "not_mine"
      };
      let D = e.judgeSender(N.attestationStatus),
        F = (re, se) => A(re, se, D?.attestation);
      if (D?.heldBack === !0) return e.debug(`[deviceHooks] ${ke(N.requestId)}: held back for its sender (attestation ${D.attestation.status}) \u2014 no opinion, nothing run`), T("unattested", mr, "warning"), F({
        outcome: "unattested"
      }, K), {
        kind: "answer",
        answer: {}
      };
      if (e.isMuted?.() === !0) return e.debug(`[deviceHooks] ${ke(N.requestId)}: serving is switched off (emergency switch) \u2014 no opinion`), F({
        outcome: "muted"
      }, K), {
        kind: "answer",
        answer: {}
      };
      if (withdrawn.has(N.requestId)) return e.debug(`[deviceHooks] ${ke(N.requestId)}: withdrawn earlier \u2014 staying silent`), F({
        outcome: "withdrawn_replay",
        replay: !0
      }, K), {
        kind: "silent",
        reason: "withdrawn"
      };
      let ee = answered.get(N.requestId);
      if (ee !== void 0 && ee.callbackId === N.callbackId) return e.debug(`[deviceHooks] ${ke(N.requestId)}: replay \u2014 resending the earlier answer`), F({
        outcome: "cached",
        replay: !0
      }, K), {
        kind: "answer",
        answer: ee.answer
      };
      if (ee !== void 0) {
        let answer_19 = ce(X?.event === "PreToolUse" ? "PreToolUse" : "Stop", `hook on ${B.displayName}`, "not run \u2014 its request id was already used for another hook; retry");
        return F({
          outcome: "replay_mismatch",
          blocked: Ly(answer_19)
        }, K), {
          kind: "answer",
          answer: answer_19
        };
      }
      if (n.has(N.requestId)) return {
        kind: "silent",
        reason: "running"
      };
      let J = W ? void 0 : B.inventory.forwarded.find(item => item.wire.id === N.callbackId);
      if (J === void 0) {
        e.debug(`[deviceHooks] ${ke(N.requestId)}: ${W ? "retired instance" : "not in the current inventory"} \u2014 ${X?.event === "PreToolUse" ? "holding the guard" : "no opinion"}`);
        let answer_20 = ce(X?.event === "PreToolUse" ? "PreToolUse" : "Stop", `hook on ${B.displayName}`, "not run \u2014 it belongs to a registration that machine has since replaced; retry");
        return F({
          outcome: "unknown_id",
          blocked: Ly(answer_20)
        }, K), {
          kind: "answer",
          answer: answer_20
        };
      }
      if (n.size >= Ot) {
        e.debug(`[deviceHooks] ${ke(N.requestId)}: too many requests in hand \u2014 refusing`);
        let answer_21 = Mn(J, B, e);
        return F({
          outcome: "overloaded",
          blocked: Ly(answer_21)
        }, K), {
          kind: "answer",
          answer: answer_21
        };
      }
      let te = xr(J, N.input, e.defaultShell()),
        ae = te === null ? void 0 : r.get(te.key);
      if (ae !== void 0 && ae.requestId !== N.requestId) {
        let abortController_3 = new AbortController();
        n.set(N.requestId, abortController_3);
        let answer_23 = null;
        try {
          answer_23 = await new Promise(ye => {
            let xe = e.setTimer(() => ye("too_late"), Math.max(0, h(N, J, K)));
            abortController_3.signal.addEventListener("abort", () => {
              xe.clear(), ye(null);
            }, {
              once: !0
            }), ae.answer.then(Te => {
              xe.clear(), ye(Te);
            });
          });
        } finally {
          n.delete(N.requestId);
        }
        if (abortController_3.signal.aborted) {
          if (abortController_3.signal.reason !== lt) V(N.requestId);
          return F({
            outcome: "cancelled",
            blocked: !1
          }, K), {
            kind: "silent",
            reason: "cancelled"
          };
        }
        if (answer_23 === "too_late") {
          let answer_22 = ce(EV(J.local.event) ? J.local.event : "Stop", `hook on ${B.displayName}`, `not run \u2014 ${B.displayName} could not decide it before the cloud session stops waiting; retry`);
          return H(N.requestId, N.callbackId, answer_22), F({
            outcome: "too_late",
            blocked: Ly(answer_22)
          }, K), {
            kind: "answer",
            answer: answer_22
          };
        }
        if (answer_23 !== null) return H(N.requestId, N.callbackId, answer_23), e.debug(`[deviceHooks] ${ke(N.requestId)}: the same hook and invocation as ${ke(ae.requestId)} \u2014 answered from its run`), F({
          outcome: "same_invocation",
          blocked: Ly(answer_23)
        }, K), {
          kind: "answer",
          answer: answer_23
        };
      }
      let G = () => {};
      if (te !== null) {
        let re = new Promise(se => {
          G = se;
        });
        r.delete(te.key), r.set(te.key, {
          requestId: N.requestId,
          answer: re
        }), P(r);
      }
      let Y = null,
        abortController_4 = new AbortController();
      n.set(N.requestId, abortController_4);
      let ie = !1,
        we = U(N, B, J, K, abortController_4.signal).catch(re => {
          e.logError(re);
          let answer_24 = ce(EV(J.local.event) ? J.local.event : "Stop", `hook on ${B.displayName}`, "not run \u2014 an internal error while deciding it; retry");
          return {
            answer: answer_24,
            telemetry: {
              outcome: "decide_error",
              blocked: Ly(answer_24)
            }
          };
        });
      we.finally(() => {
        ie = !0;
      });
      try {
        let {
          answer: answer_25,
          telemetry: telemetry
        } = await new Promise(Te => {
          let De = h(N, J, K),
            st = e.setTimer(() => {
              if (abortController_4.signal.aborted) {
                Te({
                  answer: null,
                  telemetry: {
                    outcome: "cancelled",
                    blocked: !1
                  }
                });
                return;
              }
              abortController_4.abort(On);
              let answer_26 = ce(EV(J.local.event) ? J.local.event : "Stop", `hook on ${B.displayName}`, `not run \u2014 ${B.displayName} could not decide it before the cloud session stops waiting; retry`);
              Te({
                answer: answer_26,
                telemetry: {
                  outcome: "too_late",
                  blocked: Ly(answer_26)
                }
              });
            }, Math.max(0, De));
          we.then(Oe => {
            st.clear(), Te(Oe);
          });
        });
        if (abortController_4.signal.reason !== On && (answer_25 === null || abortController_4.signal.aborted)) {
          if (abortController_4.signal.reason !== lt) V(N.requestId);else if (answer_25 !== null) H(N.requestId, N.callbackId, answer_25);
          return e.debug(`[deviceHooks] ${ke(N.requestId)}: ${J.wire.id} withdrawn \u2014 nothing sent`), F({
            ...telemetry,
            outcome: "cancelled"
          }, K), {
            kind: "silent",
            reason: "cancelled"
          };
        }
        let answer_27 = answer_25 ?? {};
        return Y = answer_27, H(N.requestId, N.callbackId, answer_27), e.debug(`[deviceHooks] ${ke(N.requestId)}: ${J.wire.id} \u2192 ${telemetry.outcome}`), F(telemetry, K), {
          kind: "answer",
          answer: answer_27
        };
      } finally {
        if (G(Y), te !== null && r.get(te.key)?.requestId === N.requestId) r.delete(te.key);
        if (ie) n.delete(N.requestId);else we.finally(() => n.delete(N.requestId));
      }
    },
    cancel(N, B = "worker") {
      let K = n.get(N);
      if (K === void 0) return !1;
      if (B === "worker") V(N), K.abort();else K.abort(lt);
      return !0;
    },
    cancelAll() {
      let N = n.size;
      for (let B of n.values()) B.abort(lt);
      return s.refuseAll(), N;
    },
    inFlight: () => n.size
  };
}
function xr(e, n, r) {
  if (typeof n !== "object" || n === null) return null;
  let hook_3 = e.local.hook,
    h = hook_3.type === "command" ? `command\x00${hook_3.shell ?? r}\x00${hook_3.command}\x00${b(hook_3.args ?? null)}\x00${hook_3.if ?? ""}` : hook_3.type === "http" ? `http\x00${hook_3.url}\x00${hook_3.if ?? ""}` : null;
  if (h === null) return null;
  let g = "tool_use_id" in n && typeof n.tool_use_id === "string" ? `tool\x00${n.tool_use_id}` : `input\x00${Kt(b(n))}`;
  return {
    key: `${e.local.event}\x00${g}\x00${h}`
  };
}
function Mn(e, n, r, s = "in_hand") {
  let hook_4 = e.local.hook;
  if (e.local.event !== "PreToolUse" || hook_4.type !== "command" && hook_4.type !== "http") return {};
  let g = null;
  try {
    g = hook_4.type === "command" ? r.parseTarget(hook_4) : null;
  } catch {}
  let k = jn(hook_4, g);
  return ce("PreToolUse", Un(hook_4, k, n), s === "too_large" ? `not run \u2014 the event was too large to judge on ${n.displayName}; retry with less` : `not run \u2014 ${n.displayName} has too many hook requests from the cloud session in hand at once; retry`);
}
function Ln(e) {
  return "tool_name" in e && typeof e.tool_name === "string" ? `:${po(e.tool_name, {
    maxCodeUnits: 48
  })}` : "";
}
function Er(e) {
  if (Ly(e) || "async" in e) return !1;
  let hookSpecificOutput = e.hookSpecificOutput;
  return e.systemMessage !== void 0 || hookSpecificOutput !== void 0 && "additionalContext" in hookSpecificOutput && hookSpecificOutput.additionalContext !== void 0;
}
function defaultTimeoutMs(e) {
  return hSn[e] * 1000;
}
var Cr = /^(?:PATH|CDPATH|PYTHONPATH|PYTHONHOME|NODE_PATH|RUBYLIB|PERL5LIB|PERLLIB|GEM_PATH|GEM_HOME|CLASSPATH|LD_LIBRARY_PATH|DYLD_\w+)$/,
  Wn = "\x00unplaceable";
function Tr(e, {
  home: home,
  launchDir: launchDir
}) {
  let s = [],
    raw = "",
    text = "",
    k = null,
    w = () => {
      if (raw !== "") s.push({
        raw: raw,
        text: text
      });
      raw = "", text = "";
    };
  for (let P of e.trim()) if (k !== null) {
    if (raw += P, P === k) k = null;else text += P;
  } else if (P === '"' || P === "'") k = P, raw += P;else if (P === " " || P === "\t") w();else raw += P, text += P;
  w();
  let S = O() === "windows",
    R = P => S ? /[\\/]/.test(P) : P.includes("/"),
    I = P => S ? /^(?:[A-Za-z]:[\\/]|[\\/])/.test(P) : P.startsWith("/"),
    x = P => S && /^[A-Za-z]:(?![\\/])/.test(P);
  return s.flatMap(({
    raw: raw_2,
    text: text_2
  }) => {
    if (S && raw_2.replace(/'[^']*'|"[^"]*"/g, "").includes("\\")) return [launchDir];
    let V = text_2.replace(/^\$(?:HOME\b|\{HOME\})/, ""),
      T = raw_2.replace(/'[^']*'/g, "").replace(/^"?\$\{HOME\}/, "");
    if (/[`$;|&<>]/.test(V) || /[*?[{]/.test(T)) return [launchDir];
    let j = text_2.match(/^(--?[\w-]+|[A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (j) {
      let M = j[2],
        U = Cr.test(S ? j[1].toUpperCase() : j[1]),
        N = x(M) ? [launchDir] : I(M) ? [M] : R(M) ? [`${launchDir}/${M}`] : [],
        K = (S && !U ? M.split(":").reduce((acc, item) => {
          let W = acc.at(-1);
          if (W !== void 0 && /^[A-Za-z]$/.test(W)) acc[acc.length - 1] = `${W}:${item}`;else acc.push(item);
          return acc;
        }, []) : M.split(":")).flatMap(item => item === "" ? U || M.includes(":") ? [launchDir] : [] : x(item) ? [launchDir] : I(item) ? [item] : R(item) || U || item === "." || item === ".." ? [`${launchDir}/${item}`] : []);
      return L([...N, ...K]);
    }
    let A = text_2;
    if (home !== void 0 && home !== "") {
      if (raw_2 === "~" || raw_2.startsWith("~/")) A = home + text_2.slice(1);else if (/^"?\$\{HOME\}(?=[/"]|$)/.test(raw_2) && (text_2 === "${HOME}" || text_2.startsWith("${HOME}/"))) A = home + text_2.slice(7);else if (/^"?\$HOME(?=[/"]|$)/.test(raw_2) && (text_2 === "$HOME" || text_2.startsWith("$HOME/"))) A = home + text_2.slice(5);
    }
    if (x(A)) return [launchDir];
    if (I(A)) return [A];
    return R(A) ? [`${launchDir}/${A}`] : [];
  });
}
function Pr(e, n) {
  return n.some(item => Bme(Cd(e), item));
}
import { posix as bt } from "path";
import { posix as Lr } from "path";
var Gn = new Set(["env", "nice", "nohup", "exec", "time", "caffeinate", "builtin", "command", "xargs", "sudo", "doas", "runuser", "coproc", "timeout", "gtimeout", "flock", "arch", "setsid", "stdbuf", "unbuffer", "chronic", "busybox", "strace", "ltrace", "entr"]),
  Ht = new Set(["-w", "--wait", "--timeout", "-E", "--conflict-exit-code"]),
  Dr = {
    nice: new Set(["-n", "--adjustment"]),
    timeout: new Set(["-s", "--signal", "-k", "--kill-after"]),
    gtimeout: new Set(["-s", "--signal", "-k", "--kill-after"]),
    sudo: new Set(["-u", "-g", "-C", "-D", "-h", "-p", "-R", "-T", "-U", "--user", "--group", "--host", "--prompt", "--close-from", "--chdir", "--role", "--type", "--other-user"]),
    doas: new Set(["-u", "-C"]),
    runuser: new Set(["-u", "-g", "-G", "--user", "--group", "--supp-group", "-w", "--whitelist-environment"]),
    xargs: new Set(["-n", "-P", "-I", "-L", "-s", "-d", "-E", "-a", "--arg-file", "--max-args", "--max-procs", "--delimiter"]),
    env: new Set(["-u", "-C", "-P", "--unset", "--chdir"]),
    caffeinate: new Set(["-t", "-w"]),
    exec: new Set(["-a"]),
    flock: new Set([...Ht, "-c", "--command"]),
    arch: new Set(["-arch", "-e", "-d"]),
    stdbuf: new Set(["-i", "-o", "-e", "--input", "--output", "--error"]),
    strace: new Set(["-e", "-o", "-p", "-s", "-P", "-E", "-u", "-a", "-X"]),
    ltrace: new Set(["-e", "-o", "-p", "-s", "-n", "-u", "-a", "-F"]),
    ionice: new Set(["-c", "--class", "-n", "--classdata", "-p", "--pid", "-P", "--pgid", "-u", "--uid"]),
    chrt: new Set(["-T", "--sched-runtime", "-P", "--sched-period", "-D", "--sched-deadline"]),
    "xvfb-run": new Set(["-n", "--server-num", "-s", "--server-args", "-f", "--auth-file", "-e", "--error-file", "-w", "--wait", "-p", "--xauth-protocol"])
  },
  Ar = {
    timeout: 1,
    gtimeout: 1,
    flock: 1,
    chrt: 1,
    taskset: 1
  };
function anchored(e) {
  return /^(?:\/|\$(?!\{?(?:CURDIR|PWD)\b)(?:[A-Za-z_][A-Za-z0-9_]*|\{[A-Za-z_][A-Za-z0-9_]*\})\/)/.test(e.text) || /^~(?:[A-Za-z_][A-Za-z0-9._-]*)?\//.test(e.raw);
}
var pt = {
    anchored: anchored,
    takesNext: (e, n) => e(n) || !n.startsWith("--") && Array.from(n).findIndex((item, index) => index > 0 && e("-" + item)) === n.length - 1,
    alsoLaunchers: new Set(["ionice", "chrt", "taskset", "xvfb-run"]),
    alsoValued: {
      sudo: new Set(["-r", "-t"])
    },
    runuserIsSu: !0
  },
  Kn = [{
    anchored: e => e.text.startsWith("/"),
    takesNext: (e, n) => !n.includes("=") && (e(n) || /^-[a-zA-Z]{2,}$/.test(n) && e("-" + n.at(-1))),
    alsoLaunchers: new Set(),
    alsoValued: {},
    runuserIsSu: !1
  }, pt, {
    ...pt,
    alsoValued: {
      ...pt.alsoValued,
      time: new Set(["-f", "--format", "-o", "--output"]),
      strace: new Set(["-I", "-b"]),
      xargs: new Set(["-J"])
    }
  }, {
    ...pt,
    stepsPastVariable: !0
  }];
function Jn(e) {
  return Gn.has(e) || Kn.some(item => item.alsoLaunchers.has(e));
}
function Ir(e) {
  let n = Array(e.length + 1).fill(!1);
  for (let r = e.length - 1; r >= 0; r -= 1) {
    let s = e[r].text;
    n[r] = s !== "--" && (/^(?:-[flmpPT]*u|--user(?:=|$))/.test(s) || n[r + 1]);
  }
  return n;
}
var Zn = new Set(["then", "do", "else", "elif", "if", "while", "until", "!"]),
  $r = new Set(["fi", "done", "esac", "}", "]]"]),
  Or = /^[A-Za-z_][A-Za-z0-9_]*(?:\[[^\]]*\])?\+?=/,
  zn = 6,
  nt = " \t",
  Hr = ` 	
;&|()<>`,
  Ve = String.fromCharCode(96);
function mt(e, n = {}) {
  let r = new ot(e, n.make === !0),
    s = r.tokens("eof", 0),
    commands = [];
  for (let g of [s, ...r.bodies]) Nr(g, n, commands);
  return {
    commands: commands,
    unreadable: r.unreadable
  };
}
function Xn(e) {
  let n = new ot(e, !1);
  return n.tokens("eof", 0), n.comments;
}
function Nr(e, n, r) {
  let s = 0,
    h = 0,
    g = !1,
    k = !1,
    w = 0,
    S = 0;
  while (s < e.length) {
    let R = e[s];
    if (g) {
      if (R.kind === "op" && R.op === `
`) {
        s += 1;
        continue;
      }
      if (R.kind === "word" && R.word.text === "esac" && !R.word.quoted) {
        h -= 1, g = !1, s += 1;
        continue;
      }
      while (s < e.length) {
        let M = e[s];
        if (M.kind === "op" && M.op === ")" || M.kind === "word" && M.word.text === "esac" && !M.word.quoted) break;
        s += 1;
      }
      if (e[s]?.kind === "op") s += 1;
      g = !1, k = !1;
      continue;
    }
    if (R.kind === "op") {
      if (h > 0 && /^;[;&]|^;;&$/.test(R.op)) g = !0;
      if (R.op === "(" || R.op === "{") {
        if (S += 1, k && w === 0) w = S;
      } else if (R.op === ")" || R.op === "}") {
        if (S === w) w = 0;
        S = Math.max(0, S - 1);
      }
      if (R.op === "|" || R.op === "|&") k = !0;else if (R.op !== `
` && R.op !== "(" && R.op !== "{") k = !1;
      s += 1;
      continue;
    }
    let I = [],
      redirects = [],
      heredoc;
    while (s < e.length && e[s].kind !== "op") {
      let M = e[s];
      if (M.kind === "word") I.push(M.word);else if (M.kind === "redirect") redirects.push({
        op: M.op,
        target: M.word
      });else if (M.kind === "heredoc" && M.body !== null) heredoc = (heredoc ?? "") + M.body;
      s += 1;
    }
    let piped = k || w > 0;
    k = !1;
    let [V, ...T] = Yn(I, n),
      j = V ?? (redirects.length > 0 || heredoc !== void 0 ? {
        program: {
          text: ":",
          quoted: !1,
          raw: ":"
        },
        args: [],
        assignments: []
      } : void 0);
    if (j === void 0) continue;
    let A = j.program.text;
    if (!j.program.quoted) {
      if (A === "case") {
        h += 1;
        let M = e[s];
        if (M?.kind === "op" && M.op === ")" && j.args.some(item => item.text === "in")) s += 1;else g = !0;
        continue;
      }
      if (A === "esac") {
        h = Math.max(0, h - 1);
        continue;
      }
      if (A === "[[") {
        if (!I.some(item => item.text === "]]" && !item.quoted)) {
          while (s < e.length) {
            let M = e[s];
            if (M.kind === "word" && M.word.text === "]]" || M.kind === "op" && M.op === `
`) break;
            s += 1;
          }
          if (e[s]?.kind === "word") s += 1;
        }
        continue;
      }
      if ($r.has(A)) {
        if (redirects.length > 0 || heredoc !== void 0) r.push({
          program: {
            text: ":",
            quoted: !1,
            raw: ":"
          },
          args: [],
          assignments: [],
          redirects: redirects,
          piped: piped,
          ...(heredoc !== void 0 && {
            heredoc: heredoc
          })
        });
        continue;
      }
    }
    for (let M of [j, ...T]) r.push({
      ...M,
      redirects: redirects,
      piped: piped,
      ...(heredoc !== void 0 && {
        heredoc: heredoc
      })
    });
  }
}
function Mr(e, n, r) {
  let assignments = [],
    h,
    g = !1,
    k,
    k_2 = 0;
  for (;;) {
    while (k_2 < e.length) {
      let H = e[k_2];
      if (Or.test(H.raw)) assignments.push(H);else if (!(!H.quoted && Zn.has(H.text))) break;
      k_2 += 1;
    }
    let program = e[k_2];
    if (program === void 0) return assignments.length > 0 ? {
      program: {
        text: ":",
        quoted: !1,
        raw: ":"
      },
      args: [],
      assignments: assignments
    } : void 0;
    if (n.make && !program.quoted && /^[@+-]+./.test(program.text)) {
      let H = program.text.replace(/^[@+-]+/, "");
      program = {
        ...program,
        text: H,
        raw: H
      };
    }
    let R = program.text.slice(program.text.lastIndexOf("/") + 1).toLowerCase();
    if (!(Gn.has(R) || r.alsoLaunchers.has(R)) || /[ \t]/.test(program.text) || program.text.includes("/") && !r.anchored(program)) {
      if (r.stepsPastVariable === !0 && g && program.text.startsWith("$") && e[k_2 + 1] !== void 0) {
        k ??= {
          k: k_2,
          kept: assignments.length
        }, assignments.push(program), k_2 += 1;
        continue;
      }
      let H = program.text.startsWith("$") && !/^\$\((?:\u2026|\(\u2026\))\)/.test(program.text);
      if (k !== void 0 && (program.text.startsWith("-") || !H && (program.quoted || program.expands === !0))) return {
        program: e[k.k],
        args: e.slice(k.k + 1),
        assignments: assignments.slice(0, k.kept)
      };
      return {
        program: program,
        args: e.slice(k_2 + 1),
        assignments: assignments
      };
    }
    if (R === "command") {
      let H = !1;
      for (let V = k_2 + 1; e[V]?.text.startsWith("-") === !0; V += 1) H ||= /^-[pvV]*[vV][pvV]*$/.test(e[V].text);
      if (H) return {
        program: program,
        args: e.slice(k_2 + 1),
        assignments: assignments
      };
    }
    if (R === "runuser" && r.runuserIsSu) {
      if (h ??= Ir(e), !h[k_2 + 1]) return {
        program: program,
        args: e.slice(k_2 + 1),
        assignments: assignments
      };
    }
    if (R === "busybox") {
      assignments.push(program), k_2 += 1;
      continue;
    }
    assignments.push(program), g = !0, k = void 0, k_2 += 1;
    let I = Ar[R] ?? 0,
      x = H => (Dr[R]?.has(H) ?? !1) || (r.alsoValued[R]?.has(H) ?? !1),
      P = !1;
    while (k_2 < e.length) {
      let H = e[k_2].text;
      if (!P && H === "--") {
        assignments.push(e[k_2]), P = !0, k_2 += 1;
        continue;
      }
      if (!P && R === "env" && H === "-") {
        assignments.push({
          ...e[k_2],
          text: "-i"
        }), k_2 += 1;
        continue;
      }
      if (!P && H.startsWith("-") && H !== "-") {
        let V = r.takesNext(x, H);
        if (assignments.push(e[k_2]), V && e[k_2 + 1] !== void 0) assignments.push(e[k_2 + 1]);
        k_2 += V ? 2 : 1;
        continue;
      }
      if (I > 0 && (R !== "chrt" || /^\d+$/.test(H))) {
        assignments.push(e[k_2]), I -= 1, k_2 += 1;
        continue;
      }
      break;
    }
  }
}
function Yn(e, n) {
  return Kn.flatMap(item => {
    let s = Mr(e, n, item);
    return s === void 0 ? [] : [s];
  }).filter((item, index, h) => h.findIndex(g => g.program.raw === item.program.raw && g.args.length === item.args.length) === index);
}
function Mt(e) {
  return Yn(e, {});
}
class ot {
  text;
  make;
  pos = 0;
  unreadable = null;
  bodies = [];
  comments = [];
  pending = [];
  lineIndex = null;
  strippedLineIndex = null;
  constructor(e, n) {
    this.text = e;
    this.make = n;
  }
  fail(e) {
    this.unreadable ??= e;
  }
  tooDeep(e) {
    if (e < zn) return !1;
    this.fail("it nests command substitutions more deeply than this reading follows");
    let n = 1;
    while (this.pos < this.text.length && n > 0) {
      let r = this.text[this.pos];
      if (r === "(") n += 1;else if (r === ")") n -= 1;
      this.pos += 1;
    }
    return !0;
  }
  tokens(e, n) {
    let r = this.text,
      s = r.length,
      h = [],
      pending = this.pending,
      k = 0,
      w = 0,
      S = !1,
      R = !1,
      I = !0;
    while (this.pos < s) {
      let op_2 = r[this.pos];
      if (nt.includes(op_2)) {
        this.pos += 1;
        continue;
      }
      if (op_2 === `
`) {
        if (this.pos += 1, pending.length > 0) this.readHeredocBodies(pending.splice(0), n);
        if (e === "array") continue;
        h.push({
          kind: "op",
          op: `
`
        }), I = !0;
        continue;
      }
      if (op_2 === "\\" && r[this.pos + 1] === `
`) {
        this.pos += 2;
        continue;
      }
      if (op_2 === "#") {
        let T = r.indexOf(`
`, this.pos),
          j = T === -1 ? s : T;
        this.comments.push([this.pos, j]), this.pos = j;
        continue;
      }
      if (e === "array") {
        if (op_2 === ")") return this.pos += 1, h;
        if (";&|<>".includes(op_2) || op_2 === "(") {
          this.fail("an array assignment holds something other than words"), this.pos += 1;
          continue;
        }
        h.push({
          kind: "word",
          word: this.readWord(n)
        });
        continue;
      }
      let op = r.slice(this.pos, this.pos + 2);
      if (r.startsWith(";;&", this.pos)) {
        h.push({
          kind: "op",
          op: ";;&"
        }), this.pos += 3, R = w > 0, I = !0;
        continue;
      }
      if (op === "&&" || op === "||" || op === ";;" || op === ";&" || op === "|&") {
        if (h.push({
          kind: "op",
          op: op
        }), this.pos += 2, (op === ";;" || op === ";&") && w > 0) R = !0;
        I = !0;
        continue;
      }
      if (op === "((" && I) {
        let T = Bn(r, this.pos + 2);
        if (T !== -1) {
          this.collectExpansions(r.slice(this.pos + 2, T - 2), n), this.pos = T, I = !1;
          continue;
        }
      }
      if (op_2 === "(") {
        if (this.pos += 1, R) continue;
        k += 1, h.push({
          kind: "op",
          op: "("
        }), I = !0;
        continue;
      }
      if (op_2 === ")") {
        if (this.pos += 1, R) {
          h.push({
            kind: "op",
            op: ")"
          }), R = !1, I = !0;
          continue;
        }
        if (k > 0) {
          k -= 1, h.push({
            kind: "op",
            op: ")"
          }), I = !0;
          continue;
        }
        if (e === "paren") return h;
        this.fail("a closing parenthesis that closes nothing"), h.push({
          kind: "op",
          op: ")"
        });
        continue;
      }
      if (op_2 === "&" && r[this.pos + 1] === ">") {
        this.pos += r[this.pos + 2] === ">" ? 3 : 2;
        while (this.pos < s && nt.includes(r[this.pos])) this.pos += 1;
        if (this.pos < s && !`
;&|()`.includes(r[this.pos])) h.push({
          kind: "redirect",
          op: "&>",
          word: this.readWord(n)
        });
        continue;
      }
      if (op_2 === ";" || op_2 === "&" || op_2 === "|") {
        h.push({
          kind: "op",
          op: op_2
        }), this.pos += 1, I = !0;
        continue;
      }
      if (op_2 === "<" || op_2 === ">") {
        if (r[this.pos + 1] === "(") {
          h.push({
            kind: "word",
            word: this.readWord(n)
          }), I = !1;
          continue;
        }
        if (op === "<<" && r[this.pos + 2] !== "<") {
          let pos = this.pos;
          this.pos += 2;
          let strip = !1;
          if (r[this.pos] === "-") strip = !0, this.pos += 1;
          while (this.pos < s && nt.includes(r[this.pos])) this.pos += 1;
          let M = this.readWord(n, !0);
          if (M.raw !== "") {
            let token = {
              kind: "heredoc",
              body: null
            };
            h.push(token), pending.push({
              token: token,
              delimiter: M.text,
              strip: strip,
              expand: !/['"\\]/.test(r.slice(pos, this.pos))
            });
          }
          continue;
        }
        let op_3 = op === "<<" ? "<<<" : [">>", ">&", "<&", ">|", "<>"].includes(op) ? op : op_2;
        this.pos += op_3.length;
        while (this.pos < s && nt.includes(r[this.pos])) this.pos += 1;
        if (this.pos < s && !`
;&|()`.includes(r[this.pos])) h.push({
          kind: "redirect",
          op: op_3,
          word: this.readWord(n)
        });
        continue;
      }
      if ((op_2 === "{" || op_2 === "}") && (this.pos + 1 >= s || (nt + `
;&|)`).includes(r[this.pos + 1]))) {
        h.push({
          kind: "op",
          op: op_2
        }), this.pos += 1, I = !0;
        continue;
      }
      let H = /^[A-Za-z_][A-Za-z0-9_]*\+?=\(/.exec(r.slice(this.pos, this.pos + 256));
      if (H !== null) {
        let pos_2 = this.pos;
        if (this.pos += H[0].length, !this.tooDeep(n + 1)) this.tokens("array", n + 1);
        let j = r.slice(pos_2, this.pos);
        h.push({
          kind: "word",
          word: {
            text: j,
            quoted: !1,
            raw: j
          }
        }), I = !1;
        continue;
      }
      let word = this.readWord(n);
      if (word.raw === "") {
        this.pos += 1;
        continue;
      }
      if (/^[0-9]+$/.test(word.raw) && (r[this.pos] === "<" || r[this.pos] === ">")) continue;
      if (h.push({
        kind: "word",
        word: word
      }), !word.quoted) {
        if (I && word.text === "case") S = !0;else if (S && word.text === "in") S = !1, w += 1, R = !0;else if (word.text === "esac" && w > 0 && (I || R)) w -= 1, R = !1;
      }
      I = !word.quoted && Zn.has(word.text);
    }
    if (e === "eof") pending.splice(0);
    if (w > 0 || R) this.fail("a case statement that is never closed");
    if (e !== "eof") this.fail(e === "array" ? "an array assignment that is never closed" : "a $( or ( that is never closed");
    return h;
  }
  readWord(e, n = !1) {
    let r = this.text,
      s = r.length,
      pos_3 = this.pos,
      text_3 = "",
      quoted = !1,
      expands = !1;
    while (this.pos < s) {
      let R = r[this.pos];
      if (R === "'") {
        quoted = !0;
        let I = r.indexOf("'", this.pos + 1);
        if (I === -1) {
          this.fail("a single quote that is never closed"), text_3 += r.slice(this.pos + 1), this.pos = s;
          break;
        }
        text_3 += r.slice(this.pos + 1, I), this.pos = I + 1;
        continue;
      }
      if (R === "$" && r[this.pos + 1] === "'") {
        quoted = !0;
        {
          let I = r.indexOf("'", this.pos + 2);
          if (r.slice(this.pos + 2, I === -1 ? s : I).includes("\\")) expands = !0;
        }
        this.pos += 2;
        while (this.pos < s && r[this.pos] !== "'") if (r[this.pos] === "\\" && this.pos + 1 < s) text_3 += r[this.pos + 1], this.pos += 2;else text_3 += r[this.pos], this.pos += 1;
        if (this.pos >= s) {
          this.fail("a $' quote that is never closed");
          break;
        }
        this.pos += 1;
        continue;
      }
      if (R === '"' || R === "$" && r[this.pos + 1] === '"') {
        quoted = !0, this.pos += R === "$" ? 2 : 1;
        while (this.pos < s && r[this.pos] !== '"') {
          let I = r[this.pos];
          if (I === "\\" && this.pos + 1 < s) text_3 += r[this.pos + 1] === `
` ? "" : r[this.pos + 1], this.pos += 2;else if (!n && I === "$" && r[this.pos + 1] === "(") text_3 += this.readDollarParen(e);else if (!n && I === Ve) text_3 += this.readBackticks(e);else if (I === "$" && r[this.pos + 1] === "{") text_3 += this.readParameterExpansion(e), expands = !0;else {
            if (I === "$") expands = !0;
            text_3 += I, this.pos += 1;
          }
        }
        if (this.pos >= s) {
          this.fail("a double quote that is never closed");
          break;
        }
        this.pos += 1;
        continue;
      }
      if (R === "\\" && this.pos + 1 < s) {
        if (r[this.pos + 1] !== `
`) text_3 += r[this.pos + 1], quoted = !0;
        this.pos += 2;
        continue;
      }
      if (R === "$" && r[this.pos + 1] === "{") {
        text_3 += this.readParameterExpansion(e), expands = !0;
        continue;
      }
      if (!n && R === "$" && r[this.pos + 1] !== "(") expands = !0;
      if (!n && R === "$" && r[this.pos + 1] === "(") {
        text_3 += this.readDollarParen(e), quoted = !0, expands = !0;
        continue;
      }
      if (!n && R === Ve) {
        text_3 += this.readBackticks(e), quoted = !0, expands = !0;
        continue;
      }
      if (!n && (R === "<" || R === ">") && r[this.pos + 1] === "(") {
        if (this.pos += 2, !this.tooDeep(e + 1)) this.bodies.push(this.tokens("paren", e + 1));
        text_3 += R + "(\u2026)", quoted = !0;
        continue;
      }
      if (Hr.includes(R)) break;
      text_3 += R, this.pos += 1;
    }
    let raw_3 = r.slice(pos_3, this.pos);
    if (/\{[^{}'"]*(?:,|\.\.)[^{}'"]*\}/.test(raw_3.replace(/'[^']*'|"[^"]*"/g, ""))) expands = !0;
    return {
      text: text_3,
      quoted: quoted,
      raw: raw_3,
      ...(expands && {
        expands: expands
      })
    };
  }
  readParameterExpansion(e) {
    let n = this.text,
      r = n.length,
      pos_4 = this.pos;
    this.pos += 2;
    let h = w => /[ \t\n|]/.test(n[w] ?? "");
    if (h(this.pos)) this.fail("a ${ \u2026; } command substitution, which this reading does not follow");
    let g = 1,
      k = !1;
    while (this.pos < r && g > 0) {
      let w = n[this.pos];
      if (w === "\\") this.pos += 2;else if (w === '"') k = !k, this.pos += 1;else if (w === "'" && !k) {
        let S = n.indexOf("'", this.pos + 1),
          R = S === -1 ? r : S;
        this.collectExpansions(n.slice(this.pos + 1, R), e), this.pos = S === -1 ? r : S + 1;
      } else if (w === "'") this.pos += 1;else if (w === "$" && n[this.pos + 1] === "(") this.readDollarParen(e);else if (w === Ve) this.readBackticks(e);else if (w === "$" && n[this.pos + 1] === "{") {
        if (g += 1, this.pos += 2, h(this.pos)) this.fail("a ${ \u2026; } command substitution, which this reading does not follow");
      } else {
        if (w === "}" && !k) g -= 1;
        this.pos += 1;
      }
    }
    if (g > 0) this.fail("a ${ that is never closed");
    return n.slice(pos_4, this.pos);
  }
  readDollarParen(e) {
    let n = this.text;
    if (n[this.pos + 2] === "(") {
      let h = Bn(n, this.pos + 3);
      if (h !== -1) return this.collectExpansions(n.slice(this.pos + 3, h - 2), e), this.pos = h, "$((\u2026))";
    }
    if (this.pos += 2, this.tooDeep(e + 1)) return "$(\u2026)";
    let pos_5 = this.pos,
      s = this.tokens("paren", e + 1);
    if (this.make) {
      let h = s[0];
      if (h?.kind === "word" && /^(?:shell|eval|call)$/.test(h.word.text)) return this.bodies.push(s.slice(1)), "$(\u2026)";
      return "$(" + this.text.slice(pos_5, Math.max(pos_5, this.pos - 1)) + ")";
    }
    return this.bodies.push(s), "$(\u2026)";
  }
  readBackticks(e) {
    let n = this.text,
      r = n.length,
      s = this.pos + 1;
    while (s < r && n[s] !== Ve) s += n[s] === "\\" ? 2 : 1;
    if (s >= r) this.fail("a backtick that is never closed");
    let h = new ot(n.slice(this.pos + 1, Math.min(s, r)).replace(/\\([$\x60\\])/g, "$1"), this.make);
    if (e + 1 > zn) this.fail("it nests command substitutions more deeply than this reading follows");else if (this.bodies.push(h.tokens("eof", e + 1), ...h.bodies), h.unreadable !== null) this.fail(h.unreadable);
    return this.pos = Math.min(s + 1, r), "$(\u2026)";
  }
  collectExpansions(e, n) {
    let r = 0;
    while (r < e.length) {
      let s = e[r];
      if (s === "\\") r += 2;else if (s === "$" && e[r + 1] === "(" || s === Ve) {
        let h = new ot(e.slice(r), this.make);
        if (s === Ve) h.readBackticks(n);else h.readDollarParen(n);
        if (this.bodies.push(...h.bodies), h.unreadable !== null) this.fail(h.unreadable);
        r += Math.max(h.pos, 1);
      } else r += 1;
    }
  }
  readHeredocBodies(e, n) {
    for (let r of e) {
      let s = this.findLine(r.delimiter, this.pos, r.strip);
      if (s === -1) {
        this.fail("a heredoc is never terminated");
        break;
      }
      let h = this.text.slice(this.pos, s);
      if (r.token.body = h, r.expand) this.collectExpansions(h, n);
      let g = this.text.indexOf(`
`, s);
      this.pos = g === -1 ? this.text.length : g + 1;
    }
  }
  findLine(e, n, r) {
    if (this.lineIndex === null) {
      let k = new Map(),
        w = new Map(),
        S = 0;
      for (let R of this.text.split(`
`)) {
        let I = (x, P) => {
          let H = x.get(P);
          if (H === void 0) x.set(P, [S]);else H.push(S);
        };
        I(k, R), I(w, R.replace(/^\t+/, "")), S += R.length + 1;
      }
      this.lineIndex = k, this.strippedLineIndex = w;
    }
    let s = (r ? this.strippedLineIndex : this.lineIndex).get(e);
    if (s === void 0) return -1;
    let h = 0,
      g = s.length;
    while (h < g) {
      let k = h + g >> 1;
      if (s[k] < n) h = k + 1;else g = k;
    }
    return h < s.length ? s[h] : -1;
  }
}
function Bn(e, n) {
  let r = Math.min(e.length, n + 4096),
    s = n,
    h = 0;
  while (s < r) {
    let g = e[s];
    if (g === "'" || g === '"') {
      let k = e.indexOf(g, s + 1);
      s = k === -1 ? r : k + 1;
      continue;
    }
    if (g === "(") h += 1;else if (g === ")") {
      if (h === 0) return e[s + 1] === ")" ? s + 2 : -1;
      h -= 1;
    }
    s += 1;
  }
  return -1;
}
var Wr = new Set(["DEVELOPER_DIR", "MAKEFILES", "MAKEFLAGS", "GNUMAKEFLAGS", "AWKPATH", "AWKLIBPATH", "GOFLAGS", "RUSTFLAGS", "GIT_EDITOR", "GIT_SEQUENCE_EDITOR", "GIT_EXTERNAL_DIFF", "GIT_PROXY_COMMAND", "SUDO_ASKPASS", "ZDOTDIR", "CDPATH", "GCONV_PATH", "NLSPATH", "DOTNET_STARTUP_HOOKS", "npm_config_node_options", "NPM_CONFIG_NODE_OPTIONS", "LESSOPEN", "LESSCLOSE", "MANPAGER", "MAVEN_OPTS", "GRADLE_OPTS", "OPENSSL_ENGINES", "SHELLOPTS", "BASHOPTS", "PS4", "PROMPT_COMMAND", "GIT_SSH_COMMAND", "GIT_SSH", "GIT_EXEC_PATH", "GIT_ASKPASS", "SSH_ASKPASS", "GIT_PAGER", "PAGER", "EDITOR", "VISUAL", "BROWSER", "PYTHONWARNINGS", "PYTHONBREAKPOINT", "PERL5DB", "NODE_REPL_EXTERNAL_MODULE", "JAVA_TOOL_OPTIONS", "_JAVA_OPTIONS", "JDK_JAVA_OPTIONS", "NODE_OPTIONS", "NODE_COMPILE_CACHE", "PYTHONSTARTUP", "PYTHONHOME", "PYTHONUSERBASE", "BASH_ENV", "ENV", "PERL5OPT", "RUBYOPT", "GEM_HOME", "RUBYGEMS_GEMDEPS", "BUNDLE_GEMFILE", "OPENSSL_CONF", "OPENSSL_MODULES", "DYLD_INSERT_LIBRARIES", "LD_PRELOAD", "LD_AUDIT"]),
  Fr = /^(?:DYLD_|LD_|BASH_FUNC_|GIT_CONFIG_|LUA_C?PATH)/,
  jr = /^(?:GH_BROWSER|RSYNC_RSH|CVS_RSH|SOPS_GPG_EXEC|PERL5SHELL|RUBYSHELL|JAVACMD|CLOUDSDK_PYTHON|UV_PYTHON|RUSTC_WRAPPER|RUSTC_WORKSPACE_WRAPPER|npm_config_script_shell|NPM_CONFIG_SCRIPT_SHELL|R_(?:PROFILE|ENVIRON)(?:_USER)?|TAR_OPTIONS|BUN_OPTIONS|TF_CLI_ARGS\w*|CARGO_ALIAS_\w+|[A-Z0-9][A-Z0-9_]*_(?:EXTERNAL_DIFF|PAGER|EDITOR))$/,
  Ur = /^(?![\/~$-])(?:[^\s]*\/[^\s]*|[^\s\/]+\.(?:sh|bash|zsh|fish|py|rb|pl|js|mjs|cjs|ts|php|lua|R|r|ps1|awk|tcl|exs?|jl))$/;
function qr(e) {
  return Wr.has(e) || Fr.test(e);
}
function io(e) {
  return (e.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) ?? []).map(item => item.replace(/["']/g, ""));
}
function Vr(e, n) {
  let r = e.replace(/\/+$/, "");
  if (!r.startsWith("/") || r === "") return [];
  let s = n !== "" && n !== "/" && (r === n || r.startsWith(`${n}/`)) ? r.slice(n.length) : null,
    h = s === "" ? "/" : s;
  return s === null ? [r] : [r, `~${h}`, `$HOME${h}`, `$HOME"${h}`, `\${HOME}${h}`, `\${HOME}"${h}`];
}
var zr = /(?:^|[\s"'=(`:;&|<>])\.\.?\/|\bprocess\.cwd\(\)|\bos\.getcwd\(\)|\bPath\.cwd\(\)|\bDir\.pwd\b|\bgit\b[^\n]{0,12}\brev-parse\b[^\n]{0,6}--show-toplevel\b/im,
  Br = /\$PWD\b|\$\{PWD\b|\$\(pwd(?:[ \t]+-[LP])?\)|`pwd`/im,
  Gr = /^(?:bash|sh|zsh|dash|ash|(?:pd|lo|o|m|r)?ksh[0-9]*|rbash|fish|csh|tcsh|yash|posh|[oy]sh)$/i,
  $e = new Set(["bash", "sh", "zsh", "dash", "ash", "ksh", "mksh", "rbash", "fish", "csh", "tcsh", "pwsh", "yash", "posh", "osh", "ysh", "pdksh", "loksh", "oksh"]),
  Ut = new Set(["python", "pypy", "node", "nodejs", "ruby", "perl", "php", "lua", "tsx", "ts-node", "bb", "awk", "gawk", "osascript", "expect", "tclsh", "wish", "rscript", "irb", "erb", "nawk", "mawk", "sed", "gsed", "m4"]),
  Kr = {
    julia: /\.jl$/,
    elixir: /\.exs?$/,
    groovy: /\.groovy$/,
    racket: /\.rkt$/,
    guile: /\.scm$/,
    sbcl: /\.(?:lisp|cl)$/
  },
  Jr = new Set(["bmake", "pmake", "gnumake", "make", "gmake", "ninja", "nix-build", "nix-instantiate", "nix-env", "ctest", "meson", "cmake", "bazel", "bazelisk", "npm", "npx", "pnpm", "yarn", "bun", "bunx", "lint-staged", "npm-run-all", "run-p", "run-s", "turbo", "nx", "lerna", "lefthook", "gulp", "grunt", "eslint", "prettier", "jest", "vitest", "mocha", "ava", "playwright", "cypress", "webpack", "rollup", "vite", "babel", "postcss", "tailwindcss", "next", "tsc", "commitlint", "stylelint", "uv", "pip", "pip3", "poetry", "pipenv", "hatch", "pdm", "rye", "pytest", "tox", "nox", "pylint", "flake8", "mypy", "pre-commit", "cargo", "rake", "bundle", "rspec", "rubocop", "rails", "composer", "phpunit", "phpstan", "psalm", "gradle", "gradlew", "mvn", "mvnw", "scons", "ant", "hg", "sbt", "lein", "clj", "clojure", "stack", "cabal", "mix", "dotnet", "msbuild", "swift", "xcodebuild", "pod", "fastlane", "just", "task", "terraform", "tofu", "terragrunt", "snakemake", "vagrant", "docker-compose", "podman-compose", "devbox", "mise", "asdf"]),
  Qn = /^--(?:version|help)$/,
  Zr = {
    go: new Set(["generate", "run", "test", "build", "install", "get", "vet", "tool"]),
    deno: new Set(["task", "test", "bench", "lint", "fmt", "check"]),
    docker: new Set(["compose", "build", "buildx"]),
    podman: new Set(["compose", "build"]),
    nix: new Set(["develop", "run", "build", "shell", "flake", "eval", "profile", "bundle", "print-dev-env", "fmt", "repl"]),
    node: new Set(["--run", "--test"])
  },
  eo = {
    python: new Set(["-W", "-X", "--check-hash-based-pycs"]),
    pypy: new Set(["-W", "-X"]),
    node: new Set(["-e", "--eval", "-p", "--print", "-r", "--require", "--import", "--loader", "--experimental-loader", "-C", "--conditions", "--input-type", "--title"]),
    ruby: new Set(["-e", "-r", "--require", "-I", "-C", "-E", "-F"]),
    perl: new Set(["-e", "-E", "-M", "-m", "-I"]),
    php: new Set(["-r", "-d", "--define", "-c", "--php-ini", "-B", "-R", "-F", "-E", "-z", "--zend-extension", "-f", "--file"]),
    osascript: new Set(["-l", "-s"]),
    lua: new Set(["-e", "-l"]),
    tsx: new Set(["-e", "--eval", "-r", "--require", "--import", "--tsconfig"]),
    "ts-node": new Set(["-e", "--eval", "-r", "--require", "-P", "--project", "-O", "--compilerOptions"])
  };
function Bt(e, n) {
  switch (e) {
    case "node":
    case "nodejs":
    case "tsx":
    case "ts-node":
      return /^(?:-e|--eval|-p|--print)$/.test(n) || /^-[a-zA-Z]*[ep]$/.test(n);
    case "python":
    case "pypy":
      return /^-[bBdEhiIOPqRsSuvVx]*[cm]/.test(n);
    case "perl":
      return /^-[acfgnpsStTuUwWXl0-9]*[eE]$/.test(n);
    case "ruby":
      return /^-[acdhlnpsSUvwy]*e$/.test(n);
    case "php":
      return /^-[aeHilmnqsvw]*[rRBE]$/.test(n);
    case "lua":
    case "bb":
    case "osascript":
    case "rscript":
    case "erb":
      return n === "-e";
    default:
      return !1;
  }
}
var Xr = /\bimport\b|__import__|\bexec\b/;
function wt(e) {
  let n = e.text;
  return n.slice(n.lastIndexOf("/") + 1).toLowerCase();
}
function Yr(e) {
  return e.replace(/^(python|pypy|perl|ruby|php|lua|node|nodejs|ksh|tclsh|wish)[0-9.]+t?$/, "$1");
}
function Qr(e) {
  return $e.has(e) || Ut.has(e) || MUn.test(e);
}
function so(e) {
  return /^[\/~$]|^[<>]\(/.test(e.text) && !/^~[+-]/.test(e.text);
}
function Ee(e) {
  return e !== void 0 && e.text !== "" && !so(e) && !e.text.startsWith("-");
}
function St({
  program: program_2,
  args: args,
  assignments: assignments_2,
  redirects: redirects_2,
  heredoc: heredoc_2,
  piped: piped_2
}, k, w = {
  roots: [],
  home: "",
  fromPayload: !1
}) {
  let P = assignments_2.findIndex(item => wt(item) === "flock"),
    H = P === -1 ? void 0 : di(assignments_2, P),
    V = [...assignments_2.filter((item, index) => index !== H?.at), ...(/^(?:export|declare|typeset|local|readonly)$/.test(program_2.text) ? args : [])],
    T = oo(V, w.shell === "zsh");
  if (T !== void 0 && w.standing === void 0) return T;
  let j = assignments_2.find(item => rt(item, w));
  if (j !== void 0) return "it names " + j.text;
  let A = li(assignments_2, k, [program_2, ...args]);
  if (A !== void 0 && (w.standing === void 0 || lo.has(A))) return yt(A, w);
  let M = program_2.text === ":" ? assignments_2.findIndex(item => /^(?:sudo|doas)$/.test(wt(item))) : -1;
  if (M !== -1 && assignments_2.some((item, index) => index > M && /^(?:-[A-Za-z]*[si][A-Za-z]*|--shell|--login)$/.test(item.text))) return yt(Vt.sudo, w);
  if (H !== void 0) {
    let D = ho(H.text, {
      redirects: redirects_2,
      heredoc: heredoc_2,
      piped: piped_2
    }, k, w);
    if (D !== void 0 && w.standing === void 0) return D;
  }
  if (program_2.text === "setenv" || program_2.text === "set" && /^-[a-zA-Z]*x/.test(args[0]?.text ?? "")) {
    let D = program_2.text === "setenv" ? 0 : 1,
      F = args[D],
      ee = oo(F === void 0 ? [] : [{
        ...F,
        text: F.text + "=" + args.slice(D + 1).map(item => item.text).join(":")
      }]);
    if (ee !== void 0) return ee;
  }
  if (program_2.text === "unset" && args.some(item => item.text.startsWith("GIT_CONFIG"))) return "it unsets the environment that switches git's repository hooks off for this hook";
  if (program_2.text === "unset" && args.some(item => item.text === "PATH")) return "it unsets PATH, after which a command name is looked up in the working directory";
  if (program_2.expands && !/^\$/.test(program_2.text)) return "it runs a command whose name is built by an expansion this reading does not perform";
  if (/^\$\(\u2026\)/.test(program_2.text)) return "it runs a command held in a variable or produced by another command, which this reading cannot follow";
  if (/^\$/.test(program_2.text)) {
    if (rt(program_2, w)) return "it names " + program_2.text;
    let D = /^\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?\//.exec(program_2.text)?.[1];
    if (D !== void 0 && w.relativeNames?.has(D) === !0) return "it runs a file by a relative path (looked up in the launch directory)";
    if (/^\$[({](?:CURDIR|PWD)[)}]/.test(program_2.text)) return "it addresses its working directory (the launch directory, for a forwarded hook)";
    let F = program_2.text.replace(/^\$\{[^}]*\}|^\$\([^)]*\)|^\$[A-Za-z_][A-Za-z0-9_]*/, "");
    if (F !== program_2.text && /^[^\/~$].*\//.test(F)) return "it runs a file by a relative path (looked up in the launch directory)";
    let text_4 = w.make === !0 && /^(?:\$[({][A-Za-z_]+[)}])*\$[({]MAKE[)}]$/.test(program_2.text) ? "make" : /:-([^}]+)\}$/.exec(program_2.text)?.[1];
    if (text_4 === void 0) {
      if (w.fromPayload) return "it runs a command held in a variable or produced by another command, which this reading cannot follow";
      let J = args.find(item => !item.text.startsWith("-"));
      if (J !== void 0 && Ee(J) && (J.text.includes("/") || /\.[A-Za-z0-9]{1,5}$/.test(J.text))) return "it runs a file by a relative path (looked up in the launch directory)";
      if (!/^\/(?:.*\/)?[^\/$]+$/.test(F)) return;
      let te = wt(program_2);
      if (Jn(te) && te !== "runuser") return anchored(program_2) && !/[ \t]/.test(program_2.text) ? void 0 : Lt([{
        text: te,
        quoted: !1,
        raw: te
      }, ...args], piped_2, k, w, !0);
    } else program_2 = {
      ...program_2,
      text: text_4
    };
  }
  if (program_2.quoted && /[ \t]/.test(program_2.text) && !program_2.text.includes("/")) {
    k.push(program_2.text);
    return;
  }
  let U = Yr(wt(program_2)),
    N = [program_2, ...args, ...redirects_2.map(item => item.target)].find(item => rt(item, w));
  if (N !== void 0) return "it names " + N.text;
  if (program_2.text.includes("/") && !so(program_2) && !program_2.text.endsWith("/")) return "it runs a file by a relative path (looked up in the launch directory)";
  if (w.standing === void 0 && /(?:^|[^$])\{[-+]?\d*[.\/#%+]{0,4}\}/.test(program_2.text)) return "it runs a file by a relative path (looked up in the launch directory)";
  if (U === "for" || U === "select") {
    let D = args.slice(args.findIndex(item => item.text === "in") + 1);
    return D.some(item => Ee(item) && /[\/*?[]/.test(item.text)) ? "it loops over files in the launch directory (for \u2026 in " + D[0].text + " \u2026)" : void 0;
  }
  if (U === "source" || program_2.text === ".") {
    let D = args[0]?.text === "--" ? args[1] : args[0];
    if (D !== void 0 && Le(D)) {
      if (heredoc_2 !== void 0 && D.text !== "<(\u2026)") {
        k.push(heredoc_2);
        return;
      }
      return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a descriptor, which this reading cannot follow";
    }
    return Ee(D) ? "it sources a file by a relative name (looked up in the launch directory)" : void 0;
  }
  let B = ci(U, args);
  if (B === "reads_input") return yt(Vt[U], w);
  if (B !== void 0) {
    if (B !== "held") for (let D of B.lines ?? []) k.push(D);
    return B === "held" || B.held ? "it runs " + U + " with a command or file this reading cannot follow or vouch for" : (B.words ?? []).map(item => Lt(item, piped_2, k, w)).find(item => item !== void 0);
  }
  if (Jr.has(U) || to(U, args) !== void 0) return U !== "hg" && args.length > 0 && args.every(item => Qn.test(item.text)) ? void 0 : "it runs project tooling that reads the checkout (make, npm, pytest, cargo\u2026)";
  let K = U === "rscript" ? ze(U, args) : void 0;
  if (ti.has(U) && !(U === "rscript" && (typeof K === "object" ? args.slice(0, args.indexOf(K)) : args).some(item => item.text === "--vanilla"))) return "it runs " + U + ", which reads configuration from the working directory (the checkout)";
  if ($e.has(U) || Ut.has(U) || program_2.text === ":" && H === void 0) {
    let D = $e.has(U),
      F = program_2.text !== ":" && (D ? ii(U, args) : si(U, args));
    if (!F) {
      for (let {
        op: op_4,
        target: target
      } of redirects_2) {
        if ((op_4 === "<" || op_4 === "<>") && (Ee(target) || Le(target))) return program_2.text === ":" ? "it reads a compound command's input from a file in the launch directory" : "it runs a script by a relative name (looked up in the launch directory)";
        if (op_4 === "<<<" && $e.has(U)) {
          if (/^\$/.test(target.text.trim())) return "it runs a command held in a variable or produced by another command, which this reading cannot follow";
          k.push(target.text);
        }
      }
      if (heredoc_2 !== void 0 && $e.has(U)) k.push(heredoc_2);
    }
    let ee = D && !F && heredoc_2 === void 0 && !redirects_2.some(item => /^<(?!>)/.test(item.op) || item.op === "<>");
    if (!F && program_2.text !== ":" && (piped_2 || ee || !$e.has(U) && (heredoc_2 !== void 0 || redirects_2.some(item => item.op === "<<<")))) return U === "python" || U === "pypy" ? ro(args) : "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a descriptor, which this reading cannot follow";
  }
  if ($e.has(U)) return ni(U, args, k, w, {
    redirects: redirects_2,
    heredoc: heredoc_2,
    piped: piped_2
  });
  if (U === "python" || U === "pypy") {
    let D = ro(args);
    if (D !== void 0) return D;
  } else if (U === "perl") {
    if (args.some((item, index) => {
      let ee = /^-[acnpsTtwWX]*(?:I([\s\S]*)|[Mm]lib(?:=([\s\S]*)|(\s[\s\S]*))?)$/.exec(item.text);
      return ee !== null && (ee[1] !== void 0 ? it(vt(args, ee[1], index), w) : ee[3] !== void 0 ? ee[3].trim() !== "" : (ee[2] ?? "").split(",").some(J => J !== "" && it({
        value: J,
        tildeLiteral: !0
      }, w)));
    })) return "it runs perl with -I or the lib pragma naming a relative or in-reach directory, which imports from the working directory";
  } else if (U === "ruby") {
    let D = ze("ruby", args),
      F = typeof D === "object" && args.includes(D) ? args.slice(0, args.indexOf(D)) : args;
    if (F.some((item, index) => {
      let te = /^-[acdlnpsvwy]*I(.*)$/.exec(item.text);
      if (te !== null) return vt(F, te[1], index).value.split(":").some((Y, index, ie) => (Y !== "" || ie.length === 1) && it({
        value: Y,
        tildeLiteral: !1
      }, w));
      let ae = /^(?:-[acdlnpsvwy]*r|--require=?)([\s\S]*)$/.exec(item.text);
      if (ae === null) return !1;
      let {
        value: G
      } = vt(F, ae[1], index);
      return /^\.\.?\//.test(G) || /^bundler(?:\/+setup(?:\.rb)?)?$/i.test(G) || rt({
        text: G,
        quoted: !1,
        raw: G
      }, w);
    })) return "it runs ruby with -I naming a relative or in-reach directory, or -r with a ./ or in-reach path (or bundler/setup, which reads ./Gemfile), which import from the working directory";
  } else if (U === "node" || U === "nodejs" || U === "tsx" || U === "ts-node") {
    if (args.some((item, index) => /^(?:-r|--require|--import|--(?:experimental-)?loader)(?:=|$)/.test(item.text) && !/^(?:\/|node:)/.test(item.text.includes("=") ? item.text.split("=")[1] ?? "" : args[index + 1]?.text ?? ""))) return "it runs node with a preload (--require/--import), which resolves from the working directory";
    let D = args.findIndex(item => /^(?:-e|--eval|-p|--print|-pe|-ep)$/.test(item.text)),
      F = D !== -1 ? args[D + 1]?.text : args.find(item => /^--(?:eval|print)=/.test(item.text))?.text.replace(/^--(?:eval|print)=/, "");
    if (F !== void 0 && fi(F)) return "it runs node code that loads a module by a bare or relative name, which resolves from the working directory";
  } else if (U === "lua") {
    if (args.some(item => /^-l/.test(item.text))) return "it runs lua with -l, which loads from the working directory first";
  } else if (U === "php") {
    let D = gi(args, w);
    if (D !== void 0) return D;
  }
  if (Ut.has(U) || Qr(U) && !$e.has(U)) {
    let D = ze(U, args);
    if (D === "unknown_option") return "it runs an interpreter with an option this reading does not know ahead of its script";
    if (D !== void 0 && Le(D) && U !== "python" && U !== "pypy") return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a descriptor, which this reading cannot follow";
    if (D !== void 0 && (D.text === "{}" || Ee(D))) return "it runs a script by a relative name (looked up in the launch directory)";
    return;
  }
  if (/^(?:emacs|vim?|nvim|gvim|view|ex)$/.test(U) && args.some((item, index) => {
    let ee = /^(?:--?script|--load|-l|-S|-u)(?:=([\s\S]*))?$/.exec(item.text),
      J = ee === null ? void 0 : ee[1] ?? args[index + 1]?.text ?? "-";
    return J !== void 0 && !(item.text === "-u" && /^(?:NONE|NORC|DEFAULTS)$/.test(J)) && (J.startsWith("-") ? item.text === "-S" : !/^[\/~$]/.test(J));
  })) return "it runs a script by a relative name (looked up in the launch directory)";
  let Z = Kr[U];
  if (Z !== void 0) {
    if (args.some(item => item.text === "{}" || !item.text.startsWith("-") && Z.test(item.text) && Ee(item))) return "it runs a script by a relative name (looked up in the launch directory)";
    if (args.every(item => item.text.startsWith("-")) && (piped_2 || heredoc_2 !== void 0 || redirects_2.some(item => item.op.startsWith("<")))) return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a descriptor, which this reading cannot follow";
  }
  let W = U === "dart" ? (args[0]?.text === "run" ? args.slice(1) : args).find(item => !item.text.startsWith("-")) : void 0;
  if (W !== void 0 && W.text.endsWith(".dart") && Ee(W)) return "it runs a script by a relative name (looked up in the launch directory)";
  if (U === "git") return pi(args, assignments_2, k);
  if (U === "java") {
    let D = args.findIndex(item => item.text === "-jar"),
      F = args.findIndex(item => /^(?:-cp|-classpath|--class-path)$/.test(item.text)),
      ee = F === -1 ? args.find(item => item.text.startsWith("--class-path="))?.text.slice(13) : args[F + 1]?.text;
    if (D !== -1) return Ee(args[D + 1]) ? "it runs a file by a relative path (looked up in the launch directory)" : void 0;
    return args.length > 0 && args.every(item => Qn.test(item.text)) ? void 0 : ee !== void 0 && ee.split(":").every(item => Pe(item)) ? void 0 : "it runs java with the working directory on its class path";
  }
  if (U === "eval") {
    k.push((args[0]?.text === "--" ? args.slice(1) : args).map(item => item.text).join(" "));
    return;
  }
  if (U === "nix-shell" || U === "nix") {
    let D = args.findIndex(item => /^(?:--run|--command|-c)$/.test(item.text));
    if (D !== -1 && args[D + 1] !== void 0) k.push(args.slice(D + 1).map(item => item.text).join(" "));
    return to(U, args) !== void 0 || U === "nix-shell" ? "it runs project tooling that reads the checkout (make, npm, pytest, cargo\u2026)" : void 0;
  }
  if (U === "trap") {
    let D = args[0]?.text === "--" ? args.slice(1) : args;
    if (D.length >= 2 && !/^-[lp]$/.test(D[0].text) && D[0].text !== "-") k.push(D[0].text);
    return;
  }
  if (U === "alias") {
    for (let D of args) {
      let F = D.text.indexOf("=");
      if (F > 0) k.push(D.text.slice(F + 1));
    }
    return;
  }
  if (U === "enable" || U === "hash") {
    let D = args.findIndex(item => item.text === (U === "enable" ? "-f" : "-p"));
    return D !== -1 && Ee(args[D + 1]) ? "it runs a file by a relative path (looked up in the launch directory)" : void 0;
  }
  if (U === "exec" || U === ":") return;
  if (U === "find") {
    let D = [];
    for (let F = 0; F < args.length; F += 1) {
      if (!/^-(?:exec|execdir|ok|okdir)$/.test(args[F].text)) continue;
      let ee = F + 1;
      while (ee < args.length && args[ee].text !== ";" && args[ee].text !== "+") ee += 1;
      let J = args.slice(F + 1, ee);
      if (J.length === 0) continue;
      let te = Lt(J, !1, k, w);
      D.push(J[0].text === "{}" || Mt(J).some(item => item.program.text === "{}") ? "it runs a file by a relative path (looked up in the launch directory)" : te), F = ee;
    }
    return D.find(item => item !== void 0);
  }
  return;
}
function to(e, n) {
  let r = Zr[e];
  if (r === void 0) return;
  return n.find(item => r.has(item.text.startsWith("--") ? Ze(item.text, "=") : item.text))?.text;
}
var ei = 4,
  ao = "it wraps a command in more than four layers of commands that run a command (find -exec, parallel, script, op run, direnv exec\u2026), which this reading does not follow",
  qt = "it runs env with -P naming a relative directory, where the program is then looked up (the launch directory)",
  Vt = {
    parallel: "it runs parallel with no command of its own, so each line of its input runs as a command",
    script: "it runs script with no command of its own, so the shell it starts reads its commands from its input",
    su: "it runs su with no command, so the shell it starts reads its commands from its input",
    runuser: "it runs runuser with no command, so the shell it starts reads its commands from its input",
    sudo: "it starts a shell through sudo or doas with no command, so that shell reads its commands from its input"
  },
  lo = new Set([ao, qt, ...Object.values(Vt)]);
function yt(e, n) {
  if (lo.has(e)) n.standing?.push(e);
  return e;
}
function Lt(e, piped_3, r, s, h = !1) {
  let nesting = (s.nesting ?? 0) + 1;
  if (nesting > ei) return yt(ao, s);
  if (e.length === 0) return;
  let k = [...(h ? [] : [{
      program: e[0],
      args: e.slice(1),
      assignments: []
    }]), ...Mt(e).filter(item => h || item.args.length !== e.length - 1)],
    w = [];
  for (let S of k) {
    let R = St({
      ...S,
      redirects: [],
      piped: piped_3
    }, r, {
      ...s,
      nesting: nesting
    });
    if (R !== void 0 && s.standing === void 0) return R;
    w.push(R);
  }
  return w.find(item => item !== void 0);
}
var ti = new Set(["bun", "deno", "tsx", "ts-node", "lua", "rscript", "r", "bb"]);
function Pe(e) {
  return /^[\/~$]/.test(e) && !/^~[+-]/.test(e) && e !== "";
}
function vt(e, value_3, r) {
  return value_3 !== "" ? {
    value: value_3,
    tildeLiteral: !0
  } : {
    value: e[r + 1]?.text ?? "",
    tildeLiteral: e[r + 1]?.quoted ?? !1
  };
}
function it({
  value: e,
  tildeLiteral: tildeLiteral
}, r) {
  return tildeLiteral && e.startsWith("~") || !Pe(e) || r.make === !0 && /^\$[({](?:CURDIR|PWD)[)}]/.test(e) || rt({
    text: e,
    quoted: !1,
    raw: e
  }, r);
}
function Le(e) {
  return e !== void 0 && /^(?:\/dev\/(?:stdin|fd\/\d+)|\/proc\/(?:self|\d+)\/fd\/\d+|-|[<>]\(\u2026\))$/.test(e.text);
}
function rt(e, n) {
  if (n.roots.length === 0) return !1;
  let r = e.text;
  if (/^\$(?:HOME|\{HOME\})(?=\/|$)/.test(r)) r = n.home + r.replace(/^\$(?:HOME|\{HOME\})/, "");else if (/^~[A-Za-z0-9._-]*(?=\/|$)/.test(r)) r = n.home + r.replace(/^~[A-Za-z0-9._-]*/, "");
  if (!r.startsWith("/")) return !1;
  let s = Lr.normalize(r);
  return n.roots.some(item => RLe(s, item));
}
function ni(e, n, r, s, h) {
  let k = h.piped || h.heredoc !== void 0 || h.redirects.some(item => item.op.startsWith("<")),
    w = R => k && !/^\$/.test(R.text.trim()) ? ho(R.text, h, r, s) : ai(R, r),
    S = !1;
  for (let R = 0; R < n.length; R += 1) {
    let I = n[R],
      x = I.text;
    if (x === "--") {
      let H = n[R + 1];
      if (H === void 0) return;
      return S ? w(H) : !/^[\/~$]/.test(H.text) || /^~[+-]/.test(H.text) ? "it runs a script by a relative name (looked up in the launch directory)" : void 0;
    }
    if (e === "fish") {
      let H = /^(?:-C|--init-command(?:=([\s\S]*))?)$/.exec(x);
      if (H !== null) {
        let V = H[1] !== void 0 ? {
            ...I,
            text: H[1]
          } : n[R + 1],
          T = V === void 0 ? void 0 : w(V);
        if (T !== void 0 && s.standing === void 0) return T;
        R += H[1] !== void 0 ? 0 : 1;
        continue;
      }
    }
    if (co(e).test(x) && !x.startsWith("--command=")) {
      if (e === "pwsh" && /^-e/i.test(x)) return "it hands pwsh an encoded command, which this reading cannot follow";
      S = !0, R += zt(e, x);
      continue;
    }
    if (x.startsWith("--command=")) return w({
      ...I,
      text: x.slice(10)
    });
    if (/^--(?:rcfile|init-file)=/.test(x)) {
      if (!Pe(x.slice(x.indexOf("=") + 1))) return "it runs " + e + " with an rc file from the launch directory";
      continue;
    }
    let P = zt(e, x);
    if (P > 0) {
      let H = n[R + 1]?.text;
      if (R += P, /^--(?:rcfile|init-file)$/.test(x) && H !== void 0 && !Pe(H)) return "it runs " + e + " with an rc file from the launch directory";
      continue;
    }
    if (x.startsWith("-") || x.startsWith("+")) continue;
    if (S) {
      let H = w(I);
      return e === "pwsh" && R + 1 < n.length ? H ?? w({
        ...I,
        text: n.slice(R).map(item => item.text).join(" ")
      }) : H;
    }
    return Le(I) ? "it runs a shell whose program arrives on a pipe, a heredoc or a descriptor, which this reading cannot follow" : Ee(I) ? "it runs a script by a relative name (looked up in the launch directory)" : void 0;
  }
  return;
}
var oi = new Set(["bash", "sh", "dash", "ash", "ksh", "mksh", "zsh", "rbash"]);
function zt(e, n) {
  if (/^--(?:rcfile|init-file)$/.test(n)) return 1;
  if (oi.has(e)) {
    let r = /^[-+]([a-zA-Z]+)$/.exec(n);
    if (r === null) return 0;
    if (e === "zsh" || e === "ksh" || e === "mksh") return (e === "zsh" ? /o$/ : /[oO]$/).test(r[1]) ? 1 : 0;
    return (r[1].match(/[oO]/g) ?? []).length;
  }
  if (e === "fish") return /^(?:[+-]O|\+o|-C|--init-command|-p|--profile|-d|--debug|-D|--debug-stack-frames|-f|--features)$/.test(n) ? 1 : 0;
  if (e === "pwsh") return /^-(?:o|of|outputformat|ex|ep|executionpolicy|wd|workingdirectory|config|configurationname|custompipename|if|inp|inputformat|settings|settingsfile|w|windowstyle|v|version)$/i.test(n) ? 1 : 0;
  return n === "-o" || n === "+o" || n === "-O" || n === "+O" ? 1 : 0;
}
function ri(e, n) {
  let r = new Set();
  for (let s = 0; s < n.length; s += 1) {
    let h = n[s].text;
    if (h === "--") break;
    if (h.startsWith("-") || h.startsWith("+")) {
      let g = zt(e, h);
      for (let k = 1; k <= g; k += 1) r.add(s + k);
      s += g;
    }
  }
  return r;
}
function ii(e, n) {
  let r = ri(e, n),
    s = n.findIndex((item, index) => !r.has(index) && !/^[-+]./.test(item.text)),
    h = s === -1 ? n : n.slice(0, s);
  if (h.some(item => co(e).test(item.text))) return (s !== -1 || h.some(item => /^--command=./.test(item.text))) && !(e === "pwsh" && n[s]?.text === "-");
  let g = e !== "fish" && e !== "pwsh" && h.some(item => /^-[a-zA-Z]*s[a-zA-Z]*$/.test(item.text));
  return s !== -1 && !Le(n[s]) && !g;
}
function co(e) {
  return e === "pwsh" ? /^-(?:c|command|cwa|commandwithargs|e|ec|encodedcommand)$/i : /^-[a-zA-Z]*c[a-zA-Z]*$|^--command(?:=|$)/;
}
function si(e, n) {
  let r = ze(e, n);
  return n.some(item => Bt(e, item.text)) || /^(?:[gnm]?awk|g?sed)$/.test(e) && n.some(item => !item.text.startsWith("-")) || typeof r === "object" && !Le(r);
}
function ai(e, n) {
  if (/^\$/.test(e.text.trim())) return "it hands a shell a command held in a variable or produced by another command, which this reading cannot follow";
  n.push(e.text);
  return;
}
function ho(e, n, r, s) {
  let {
    commands: commands_2,
    unreadable: unreadable
  } = mt(e, {
    make: !1
  });
  if (unreadable !== null) return `it could not be read to the end as shell (${unreadable})`;
  return commands_2.map(item => St(item.program.text === ":" && item.args.length === 0 && item.redirects.length === 0 ? item : {
    ...item,
    redirects: [...item.redirects, ...n.redirects.filter(item => item.op.startsWith("<"))],
    heredoc: item.heredoc ?? n.heredoc,
    piped: item.piped || n.piped
  }, r, {
    ...s,
    fromPayload: !0
  })).find(item => item !== void 0);
}
function li(e, n, r = []) {
  let s = Array(e.length + 1),
    h = Array(e.length + 1).fill(!1),
    g = Array(e.length + 3).fill(!1);
  for (let x = e.length - 1; x >= 0; x -= 1) {
    let P = e[x].text,
      H = /^(?:-[iv0]*[uCP]|--unset|--chdir)$/.test(P) ? 2 : 1;
    g[x] = P.startsWith("-") && (/^-[iv0]*P/.test(P) && !(P.replace(/^-[iv0]*P/, "") || (e[x + 1]?.text ?? "")).split(":").every(Pe) || g[x + H]), s[x] = /^(?:-S.|--split-string=)/.test(P) ? P.replace(/^(?:-S|--split-string=)/, "") : s[x + 1];
    let V = /^-[0oprtx]+a([\s\S]*)$/.exec(P),
      T = /^(?:-a|--arg-file)$/.test(P) ? e[x + 1]?.text : P.startsWith("--arg-file=") ? P.slice(11) : P.startsWith("-a") && P.length > 2 ? P.slice(2) : V !== null ? V[1] || e[x + 1]?.text : void 0;
    h[x] = T !== void 0 && !Pe(T) || h[x + 1];
  }
  let k = e.map(item => item.text.slice(item.text.lastIndexOf("/") + 1).toLowerCase()),
    w = k.indexOf("xargs"),
    S = w === -1 ? [] : L(e.slice(w + 1).flatMap((item, index, H) => {
      let V = /^-[0oprtx]*([IJi])([\s\S]*)$/.exec(item.text);
      if (V === null) return /^--replace(?:=|$)/.test(item.text) ? [item.text.split("=")[1] ?? "{}"] : [];
      return V[1] === "i" ? ["{}", ...(V[2] === "" ? [] : [V[2]]), ...(V[2].includes("=") ? [item.text.split("=")[1]] : [])] : [V[2] || H[index + 1]?.text].filter(item => item !== void 0);
    })),
    R = S.length > 64 || r.some(item => S.some(P => item.text.includes(P)));
  k.forEach((item, index) => {
    if (item === "env" && s[index + 1] !== void 0) n.push(s[index + 1]);
  });
  let I = k.map((item, index) => {
    if (item === "env") return !e[index].text.startsWith("-") && g[index + 1] ? qt : void 0;
    if (item !== "xargs") return;
    return R ? "it runs what xargs splices into the command from its input" : h[index + 1] ? "it runs xargs with its arguments read from a file in the launch directory" : void 0;
  });
  return I.find(item => item === qt) ?? I.find(item => item !== void 0);
}
function di(e, n) {
  let r = e.slice(n + 1),
    s = r.findIndex((item, index) => !item.text.startsWith("-") && !Ht.has(r[index - 1]?.text ?? "")),
    h = s === -1 ? "" : r[s + 1]?.text ?? "",
    g = /^(?:-c|--command)$/.test(h) ? r[s + 2] : void 0;
  if (g !== void 0) return {
    at: n + s + 3,
    text: g.text
  };
  return h.startsWith("--command=") ? {
    at: n + s + 2,
    text: h.slice(10)
  } : void 0;
}
var Wt = new Set(["-j", "-P", "-a", "-S", "-C", "-N", "-n", "-L", "-s", "-I", "-U", "-d", "-E", "-J", "-D", "--jobs", "--max-procs", "--arg-file", "--sshlogin", "--sshloginfile", "--slf", "--colsep", "--max-replace-args", "--max-args", "--max-lines", "--max-chars", "--delimiter", "--eof", "--halt", "--halt-on-error", "--joblog", "--results", "--res", "--delay", "--timeout", "--retries", "--tmpdir", "--workdir", "--wd", "--tagstring", "--env", "--rpl", "--load", "--memfree", "--memsuspend", "--nice", "--limit", "--termseq", "--basefile", "--bf", "--return", "--profile", "--transferfile", "--tf", "--block", "--blocksize", "--block-size", "--recstart", "--recend", "--compress-program", "--header", "--id", "--semaphorename", "--semaphoretimeout", "--st", "--shellquote-ignore"]),
  no = new Set(["-t", "-F", "-E", "--echo", "-O", "--log-out", "-I", "--log-in", "-B", "--log-io", "-T", "--log-timing", "-m", "--logging-format", "-o", "--output-limit"]);
function kt(e, n, r = !1) {
  let s = 0;
  while (s < e.length && e[s].text.startsWith("-")) {
    let h = e[s].text;
    s += n.has(h) || r && /^-[A-Za-z]{2,}$/.test(h) && n.has("-" + h.at(-1)) ? 2 : 1;
  }
  return e.slice(s);
}
function ci(e, n) {
  let r = h => h >= 0 && h < n.length ? {
      words: [n.slice(h)]
    } : void 0,
    s = h => h.filter((item, index) => item.length > 0 && h.findIndex(w => w.length === item.length && w.every((S, index) => S === item[index])) === index);
  switch (e) {
    case "su":
    case "runuser":
      {
        let h = n.flatMap((item, index) => {
            let R = /^(?:-[flmpPT]*c|--(?:session-)?command(?==|$))=?([\s\S]*)$/.exec(item.text);
            return R === null ? [] : [R[1] !== "" ? R[1] : n[index + 1]?.text];
          }),
          g = n.some((item, index) => {
            let R = /^(?:-[flmpPT]*s|--shell)(?:=?([\s\S]+))?$/.exec(item.text),
              I = R === null ? void 0 : R[1] ?? n[index + 1]?.text;
            return I !== void 0 && !/^[\/~$]/.test(I);
          });
        if (h.length === 0) {
          if (e === "runuser" && n.some(item => /^(?:-[flmpPT]*u|--user(?:=|$))/.test(item.text)) || n.length > 0 && n.every(item => /^(?:--version|--help|-V|-h)$/.test(item.text))) return;
          let w = n.filter((item, index) => !item.text.startsWith("-") && !/^(?:-[flmpPT]*[sgGwu]|--shell|--group|--supp-group|--whitelist-environment|--user)$/.test(n[index - 1]?.text ?? ""));
          return w.length <= 1 ? "reads_input" : g ? "held" : {
            words: [[{
              text: "sh",
              quoted: !1,
              raw: "sh"
            }, ...w.slice(1)]]
          };
        }
        let lines = h.filter(item => item !== void 0);
        return {
          lines: lines,
          held: lines.length < h.length || g
        };
      }
    case "watch":
      {
        let h = L([/^(?:-n|--interval|-d|--differences|-q|--equexit)$/, /^(?:-[a-zA-Z]*[nq]|--interval|--equexit)$/].map(item => {
          let k = 0;
          while (k < n.length && n[k].text.startsWith("-")) k += item.test(n[k].text) ? 2 : 1;
          return k;
        })).filter(item => item < n.length);
        return h.length === 0 ? void 0 : {
          lines: h.map(item => n.slice(item).map(item => item.text).join(" "))
        };
      }
    case "script":
      {
        let h = n.findIndex(item => /^(?:-[a-zA-Z]*c|--command)$/.test(item.text));
        if (h !== -1) {
          let S = n[h + 1]?.text;
          return S === void 0 ? "held" : {
            lines: [S]
          };
        }
        let g = n.filter(item => !item.text.startsWith("-"));
        if (g.length < 2) return n.length > 0 && n.every(item => /^(?:--version|--help|-V|-h)$/.test(item.text)) ? void 0 : "reads_input";
        let k = kt(n, no),
          w = kt(n, no, !0);
        if (k.length <= 1 || w.length <= 1) return "reads_input";
        return {
          words: s([g.slice(1), n.slice(n.indexOf(g[0]) + 1), k.slice(1), w.slice(1)])
        };
      }
    case "dotenv":
      return "held";
    case "direnv":
      {
        if (n[0]?.text !== "exec") return;
        let h = n[1];
        return h === void 0 || !Pe(h.text) ? "held" : r(2);
      }
    case "op":
      {
        if (n[0]?.text !== "run") return;
        let h = n.findIndex(item => /^--env-file(?:=|$)/.test(item.text));
        if (h !== -1) {
          let k = n[h].text.includes("=") ? n[h].text.slice(11) : n[h + 1]?.text ?? "";
          if (!Pe(k)) return "held";
        }
        let g = n.findIndex(item => item.text === "--");
        return g === -1 ? void 0 : r(g + 1);
      }
    case "hyperfine":
      {
        let h = [],
          g = /^(?:-p|--prepare|-s|--setup|-c|--cleanup|--conclude)$/,
          k = /^(?:-w|--warmup|-r|--runs|-m|--min-runs|-M|--max-runs|-n|--command-name|--export-\w+|--output|--shell|--sort|-u|--time-unit|-D|--parameter-step-size)$/,
          w = [];
        for (let S = 0; S < n.length; S += 1) {
          let R = n[S].text;
          if (g.test(R)) h.push(n[S + 1]?.text ?? ""), S += 1;else if (/^(?:-L|--parameter-list)$/.test(R)) w.push(...(n[S + 2]?.text ?? "").split(",")), S += 2;else if (/^(?:-P|--parameter-scan)$/.test(R)) S += 3;else if (k.test(R)) S += 1;else if (!R.startsWith("-")) h.push(R);
        }
        return {
          lines: [h.join(`
`), ...(h.length > 1 ? h : []), ...w]
        };
      }
    case "parallel":
      {
        let h = n.filter(item => !item.text.startsWith("-") && item.text !== ":::");
        if (h.length === 0) return "reads_input";
        let g = n.findIndex(item => !item.text.startsWith("-")),
          k = n.slice(g),
          w = k.findIndex(item => /^::::?\+?$/.test(item.text)),
          S = k.filter(item => !/^::::?\+?$/.test(item.text)),
          R = kt(n, Wt),
          I = kt(n, Wt, !0);
        if ([R, I].some(item => item.length === 0 || /^::::\+?$/.test(item[0].text))) return "reads_input";
        let x = new Set(n.filter((item, index) => Wt.has(n[index - 1]?.text ?? "") && /^\{[-+]?\d*[.#%+]{0,4}\}$/.test(item.text))),
          P = H => {
            let V = H.findIndex(item => !x.has(item));
            return V === -1 ? [] : H.slice(V);
          };
        return {
          words: s([P(h), P(S), R.filter(item => !/^::::?\+?$/.test(item.text)), I.filter(item => !/^::::?\+?$/.test(item.text))]),
          lines: w === 0 || [R, I].some(item => /^:::\+?$/.test(item[0].text)) ? S.map(item => item.text) : []
        };
      }
    default:
      return;
  }
}
function ze(e, n) {
  if (e === "deno") return n[0]?.text === "run" ? n.slice(1).find(item => !item.text.startsWith("-")) : void 0;
  if (e === "php") {
    let php = eo.php;
    for (let g = 0; g < n.length; g += 1) {
      let k = n[g].text,
        w = /^(?:-[fF]|--file)(?:=?([\s\S]+))?$/.exec(k);
      if (w !== null) return w[1] !== void 0 ? {
        ...n[g],
        text: w[1]
      } : n[g + 1];
      if (!k.startsWith("-") || k === "-" || k === "--") break;
      if (php.has(k)) g += 1;
    }
  }
  if (/^(?:[gnm]?awk|g?sed)$/.test(e)) {
    let h = e.endsWith("awk"),
      g = h ? /^-[a-zA-Z]*[fE]$/ : /^-[a-zA-Z]*f$/,
      k = h ? /^-[fE]./ : /^-f./;
    for (let w = 0; w < n.length; w += 1) {
      let S = n[w].text;
      if (g.test(S)) return n[w + 1];
      if (k.test(S)) return {
        ...n[w],
        text: S.slice(2)
      };
      if (S.startsWith("--file=")) return {
        ...n[w],
        text: S.slice(7)
      };
    }
    return;
  }
  let r = eo[e] ?? new Set(),
    s = !1;
  for (let h = 0; h < n.length; h += 1) {
    let g = n[h].text;
    if (g === "--") return n[h + 1];
    if (g === "-" || !g.startsWith("-")) return g === "-" ? n[h] : s ? "unknown_option" : n[h];
    if (Bt(e, g)) return;
    if (r.has(g)) {
      h += 1;
      continue;
    }
    if ([...r].some(item => item.length === 2 && g.length > 2 && g.startsWith(item))) continue;
    if (g.startsWith("--") && g.includes("=")) continue;
    if (!ui[e]?.test(g)) s = !0;
  }
  return;
}
var ui = {
    python: /^-[bBdEhiIOPqRsSuvVxE]+$|^--(?:version|help)$/,
    pypy: /^-[bBdEhiIOqRsSuvVx]+$/,
    node: /^--(?:enable-source-maps|no-warnings|no-deprecation|throw-deprecation|trace-warnings|trace-deprecation|pending-deprecation|experimental-strip-types|expose-gc|no-addons|preserve-symlinks|frozen-intrinsics|disallow-code-generation-from-strings|jitless|version|help)$|^-[civ]$/,
    ruby: /^-[acdhlnpsSTUvwWy0]+$|^--[a-z][a-z-]*$/,
    perl: /^-(?:[acfgnpsStTuUvwWX]|l[0-7]*|0[0-7]*|i\S*)+$/,
    osascript: /^-i$/,
    rscript: /^--[a-z][a-z-]*$/,
    php: /^-[aeHilmnqsvw]+$|^--[a-z-]+$/,
    lua: /^-[ivEW]$/,
    tsx: /^--[a-z][a-z0-9-]*$/,
    "ts-node": /^--[a-zA-Z][a-zA-Z0-9-]*$|^-[hvT]$/,
    bb: /^--?[a-z][a-z-]*$/
  },
  hi = new Set(["assert", "async_hooks", "buffer", "child_process", "cluster", "console", "constants", "crypto", "dgram", "diagnostics_channel", "dns", "domain", "events", "fs", "http", "http2", "https", "inspector", "module", "net", "os", "path", "perf_hooks", "process", "punycode", "querystring", "readline", "repl", "stream", "string_decoder", "sys", "timers", "tls", "trace_events", "tty", "url", "util", "v8", "vm", "wasi", "worker_threads", "zlib", "test", "sqlite"]);
function fi(e) {
  for (let n of e.matchAll(/(?:\brequire\s*(?:\?\.)?\s*\(|\bimport\s*\(|\bimport\s+(?:[\w*{}\s,]+\s+from\s+)?|\bfrom\s+|\bcreateRequire\b[^'"]*)\s*['"]([^'"]+)['"]/g)) {
    let r = n[1];
    if (r.startsWith("/") || r.startsWith("node:")) continue;
    if (!hi.has(Ze(r, "/"))) return !0;
  }
  return /\bcreateRequire\b/.test(e);
}
function oo(e, n = !1) {
  for (let r of e) {
    let s = /^([A-Za-z_][A-Za-z0-9_]*)(?:\[[^\]]*\])?\+?=([\s\S]*)$/.exec(r.text);
    if (s === null) continue;
    let h = s[1],
      g = s[2],
      k = S => S === "." || !/^[\/~$]/.test(S) || /^~[+-]|^\$\{?PWD\b|^\$\(/.test(S),
      w = S => /^\$/.test(S) && !new RegExp(`^\\$\\{?(?:${h}|HOME|PATH)\\b`).test(S);
    if (FLe.includes(h)) {
      if (g.split(":").some(item => k(item) || w(item))) return `it sets ${h} with the working directory (or a relative entry) on it`;
    } else if (n && /^(?:path|fpath|manpath|cdpath)$/.test(h)) {
      let S = /^\(([\s\S]*)\)$/.exec(g)?.[1];
      if ((S === void 0 ? [g] : io(S)).some(k)) return `it sets ${h}, which zsh ties to ${h.toUpperCase()}, with the working directory (or a relative entry) on it`;
    } else if (h === "PHPRC" || h === "PHP_INI_SCAN_DIR") {
      let S = h === "PHPRC" ? [g] : g.split(":").filter(item => item !== "");
      if (g !== "" && S.some(k)) return `it sets ${h} to a php.ini location in the working directory (or a relative one)`;
    } else if (qr(h) || /^GIT_CONFIG_(?:COUNT|KEY_\d+|VALUE_\d+|PARAMETERS|GLOBAL|SYSTEM)$/.test(h)) return `it sets ${h}, which makes a shell, an interpreter or git load what it names`;else if (jr.test(h)) {
      let S = g.split(/[\s=]+/).find(item => Ur.test(item));
      if (S !== void 0) return `it sets ${h}, which a tool runs or loads, to a file in the working directory (${S})`;
    }
  }
  return;
}
function pi(e, n, r) {
  if (n.some(item => /^(?:env|-i|--ignore-environment|-u|--unset)$/.test(item.text.slice(item.text.lastIndexOf("/") + 1)) || item.text.startsWith("GIT_CONFIG"))) return "it runs git with the environment that switches its repository hooks off cleared or edited";
  for (let s = 0; s < e.length; s += 1) {
    let h = e[s].text,
      g;
    if (h === "-c" || h === "--config-env") s += 1, g = e[s]?.text;else if (h.startsWith("--config-env=")) g = h.slice(13);else if (/^-c./.test(h)) g = h.slice(2);else if (/^--exec-path=(?![\/~])/.test(h)) return "it runs git with an exec path in the launch directory (git-* commands come from there)";
    if (g === void 0) {
      if (/^(?:bisect|submodule|rebase)$/.test(h)) {
        let R = e.slice(s + 1),
          I = R.findIndex(item => /^(?:run|foreach|-x|--exec)$/.test(item.text));
        if (I !== -1 && R[I + 1] !== void 0) r.push(R.slice(I + 1).map(item => item.text).join(" "));
        break;
      }
      continue;
    }
    let k = g.indexOf("="),
      w = k === -1 ? g : g.slice(0, k),
      S = k === -1 ? "" : g.slice(k + 1);
    if (/^core\.hookspath$/i.test(w)) {
      if (!/^(?:\/|~\/)/.test(S) || /^~[+-]/.test(S)) return "it runs git with the repository's own hooks switched back on (core.hooksPath), which run files the session writes";
    } else if (/^include(?:if\.[^=]*)?\.path$/i.test(w) && !Pe(S)) return "it runs git with a configuration file included from the launch directory";else if (S.startsWith("!") || S.includes("/") && !/^[\/~$]/.test(S) || /^(?:core\.(?:fsmonitor|sshcommand|askpass|editor|pager|gitproxy)|credential\.helper|diff\.external|gpg\.(?:\w+\.)?program|sequence\.editor|uploadpack\.packobjectshook)$/i.test(w)) return `it runs git with ${w} set on the command line to something that runs from the checkout`;
  }
  return;
}
var mi = /^(?:auto_prepend_file|auto_append_file|include_path|extension_dir|(?:zend_)?extension|opcache\.(?:preload|file_cache)|ffi\.preload|phar\.cache_list|sendmail_path|sqlite3\.extension_dir)$/;
function gi(e, n) {
  let r = ze("php", e),
    s = typeof r === "object" ? e.indexOf(r) : -1,
    h = e.findIndex(item => item.text === "--"),
    g = typeof r === "object" && s !== -1 && !/^(?:-[fF]|--file)$/.test(e[s - 1]?.text ?? "") ? e.slice(0, s) : e.filter((item, index) => index !== s && (h === -1 || index < h)),
    k = (S, R) => vt(g, S.replace(/^=/, ""), R);
  return g.some((item, index) => {
    let I = /^(?:-[zc]|--zend-extension=?|--php-ini=?)(.*)$/.exec(item.text);
    if (I !== null) return it(k(I[1], index), n);
    let x = /^(?:-d|--define=?)(.*)$/.exec(item.text);
    if (x === null) return !1;
    let {
        value: value_4
      } = k(x[1], index),
      H = value_4.indexOf("="),
      V = (H === -1 ? value_4 : value_4.slice(0, H)).trim(),
      T = H === -1 ? "1" : value_4.slice(H + 1);
    if (!mi.test(V)) return !1;
    let j = value_5 => it({
      value: value_5,
      tildeLiteral: !0
    }, n);
    if (V === "include_path") return T.split(":").some(j);
    if (/^(?:zend_)?extension$/.test(V) && !T.includes("/")) return !1;
    return T !== "" && j(T);
  }) ? "it runs php with -z, -c or a -d setting that loads a file (auto_prepend_file, include_path, extension\u2026), naming one that is relative or in the reach" : void 0;
}
function ro(e) {
  let r = ze("python", e),
    s = e.findIndex(item => item === r || Bt("python", item.text));
  if ((s === -1 ? e : e.slice(0, e[s] === r ? s : s + 1)).some(item => /^-[bBdEhIOPqRsSuvVx]*i/.test(item.text))) return "it runs python with -i, which goes on to run standard input after its program";
  for (let g = 0; g < e.length; g += 1) {
    let k = e[g].text;
    if (k === "-" || Le(e[g])) return "it runs python in a mode that imports from the working directory first (-m, -c or a program on stdin, without -P or -I)";
    if (!k.startsWith("-") || k === "--") return;
    if (k.startsWith("--")) {
      if (k === "--version" || k === "--help") return;
      if (k === "--check-hash-based-pycs") g += 1;
      continue;
    }
    for (let w = 1; w < k.length; w += 1) {
      let S = k[w];
      if (S === "I" || S === "P") return;
      if (S === "V" || S === "h") return;
      if (S === "W" || S === "X") {
        if (w === k.length - 1) g += 1;
        break;
      }
      if (S === "m") return "it runs python in a mode that imports from the working directory first (-m, -c or a program on stdin, without -P or -I)";
      if (S === "c") {
        let R = w < k.length - 1 ? k.slice(w + 1) : e[g + 1]?.text ?? "";
        return Xr.test(R) ? "it runs python in a mode that imports from the working directory first (-m, -c or a program on stdin, without -P or -I)" : void 0;
      }
    }
  }
  return "it runs python in a mode that imports from the working directory first (-m, -c or a program on stdin, without -P or -I)";
}
var wi = /^[ \t]*-?(?:s?include|load)[ \t]+(?!=)([^\n]*)$|^[ \t]*\.[ \t]*[ds-]?include[ \t]*("[^\n]*)$|^[ \t]*@(?:include|load)[ \t]*("[^\n]*)$/gm,
  Ft = /^(?:[gbp]|gnu)?(?:make|[gnm]?awk)$/i;
function jt(e) {
  let n = e.trim().split(/[ \t]+/),
    r = 0;
  if (/(?:^|\/)env$/.test(n[0] ?? "")) {
    r = 1;
    while (r < n.length && (n[r].startsWith("-") || /^[A-Za-z_][A-Za-z0-9_]*=/.test(n[r]))) r += /^-[A-Za-z]*[PuC]$|^--(?:unset|chdir)$/.test(n[r]) ? 2 : 1;
  }
  let s = n[r] ?? "";
  return s.slice(s.lastIndexOf("/") + 1);
}
var ki = /\bCLAUDE_PROJECT_DIR\b/i,
  yi = /^[ \t]*#.*$/gm;
function fo(e, n, home_2, s) {
  let g = (e.includes(0) ? Buffer.from(e.filter(item => item !== 0)) : e).toString("utf8"),
    k = g.indexOf(`
`),
    w = g.startsWith("#!") ? g.slice(2, k === -1 ? void 0 : k) : "",
    S = jt(w),
    R = s !== void 0 && s !== null ? /^(?:bash|sh|zsh|dash|ash|ksh|mksh|rbash|fish)$/i.test(s) : S === "" || Gr.test(S) || Ft.test(S),
    I = g.startsWith("#!") ? k === -1 ? "" : g.slice(k + 1) : g,
    x = w + `
` + (R ? vi(I) : g.replace(yi, "")),
    P = Cd(x),
    H = L(n).flatMap(item => Vr(item, home_2)).find(item => new RegExp(`(?<![\\w./~$-])${Gc(Cd(item))}${item.endsWith("/") ? "" : "(?![\\w.-])"}`).test(P));
  if (H !== void 0) return `it names ${H.replace('"', "")}`;
  if (ki.test(P)) return "it reads $CLAUDE_PROJECT_DIR";
  if (zr.test(P) || R && Br.test(P)) return "it addresses its working directory (the launch directory, for a forwarded hook)";
  let shell = (s ?? S).toLowerCase();
  if (/^t?csh$/.test(shell) && Array.from(I.matchAll(/^[ \t]*set[ \t]+path[ \t]*=[ \t]*\(([^)\n]*)\)/gm)).some(item => io(item[1]).some(item => item === "." || !/^[\/~$]/.test(item)))) return "it sets path, which csh ties to PATH, with the working directory (or a relative entry) on it";
  let T;
  try {
    let j = {
      roots: L(n),
      home: home_2,
      fromPayload: !1,
      shell: shell
    };
    T = (R ? Gt(I, Ft.test(jt(w)), j) : void 0) ?? _i(w, j);
  } catch {
    T = "it could not be read as shell (the reading itself failed on it)";
  }
  if (T !== void 0) return T;
  if (Ft.test(jt(w)) && Si(x)) return "it includes another build file, plugin or awk source by a relative name (make include or load, awk @include)";
  return;
}
function vi(e) {
  let n = [],
    r = 0;
  for (let [s, h] of Xn(e)) n.push(e.slice(r, s)), r = h;
  return n.push(e.slice(r)), n.join("");
}
function Si(e) {
  for (let n of e.matchAll(wi)) {
    let r = (n[1] ?? n[2] ?? n[3] ?? "").trim().replace(/^"|"$/g, "").split(/[ \t]+/).filter(Boolean);
    if (r.length === 0 || r.some(item => !/^(?:\/|~\/|\$\(HOME\)|\$\{HOME\}|"\/|'\/|<)/.test(item))) return !0;
  }
  return !1;
}
function _i(e, n) {
  let r = [],
    standing = [];
  for (let h of mt(e).commands) St(h, r, {
    roots: [],
    home: "",
    fromPayload: !1,
    standing: standing
  });
  return standing[0] ?? r.map(item => Gt(item, !1, {
    ...n,
    fromPayload: !0
  }, 1)).find(item => item !== void 0);
}
function Gt(e, make, r, s = 0) {
  let {
      commands: commands_3,
      unreadable: unreadable_2
    } = mt(e, {
      make: make
    }),
    k = [],
    relativeNames = new Set(r.relativeNames);
  for (let {
    program: program_3,
    args: args_2,
    assignments: assignments_3
  } of commands_3) {
    let x = /^(?:export|declare|typeset|local|readonly)$/.test(program_3.text) ? [...assignments_3, ...args_2] : assignments_3;
    for (let P of x) {
      let H = /^([A-Za-z_][A-Za-z0-9_]*)=([^\/~$][\s\S]*)$/.exec(P.text);
      if (H !== null) relativeNames.add(H[1]);
    }
  }
  for (let S of commands_3) {
    let R = St(S, k, {
      ...r,
      make: make,
      relativeNames: relativeNames
    });
    if (R !== void 0) return R;
  }
  if (unreadable_2 !== null) return `it could not be read to the end as shell (${unreadable_2})`;
  for (let S of k) {
    let R = s >= 3 ? "it hands shell code to a shell more times over than this reading follows" : Gt(S, !1, {
      ...r,
      fromPayload: !0
    }, s + 1);
    if (R !== void 0) return R;
  }
  return;
}
var Jt = 128,
  mo = Ot,
  Zt = 8,
  bi = 512,
  Ri = 600,
  xi = ["gh-api-readonly", "ruff-autofix"],
  Ce = {
    user: "your user settings",
    local: "this checkout's settings.local.json",
    flag: "the --settings file"
  };
function Xt(e, n, r) {
  let s = n.type === "command" ? `${n.shell ?? r}\x00${n.command}\x00${b(n.args ?? null)}` : n.url;
  return `${e.event}\x00${e.matcher ?? ""}\x00${n.type}\x00${s}\x00${n.if ?? ""}`;
}
function So(e) {
  return e !== void 0 && e > 0 ? Math.min(e, Ri) : void 0;
}
async function _t(e, n) {
  try {
    let r = await e.realpath(n);
    return QP(r) ? r : n;
  } catch {
    return n;
  }
}
async function Ei(e, n) {
  let r = n.opts.sync?.rootReal;
  if (e.settingsFile === null || r === void 0 && n.roots.extraReach.length === 0) return null;
  let settingsFile = e.settingsFile,
    h = await gEe(await hEe(settingsFile, n.opts.launchDir), n.opts.launchDir, I3());
  if (h.verdict !== "local") return "source_in_sync_root";
  let g;
  try {
    g = await n.deps.realpath(h.spelling);
  } catch {
    return "source_in_sync_root";
  }
  let k = [settingsFile, h.spelling, g].map(Cd),
    w = O() === "windows",
    S = w ? /[\\/]/ : "/",
    R = [...(r !== void 0 ? [r] : []), ...(n.opts.sync?.root !== void 0 ? [n.opts.sync.root] : []), ...n.roots.extraReach].map(item => w ? Cd(item).replace(/[\\/]+$/, "") || "/" : Cd(item.replace(/\/+$/, "") || "/"));
  if (R.some(item => k.some(T => !bB(T, item) && Bme(T, item)))) return "source_in_sync_root";
  let I = R.filter(item => k.some(T => bB(T, item))),
    x = k.flatMap(item => I.flatMap(T => bB(item, T) ? [item === T ? "" : item.slice(T === "/" ? 1 : T.length + 1)] : []));
  if (x.length === 0) return null;
  let P = L([n.roots.configHomeReal, n.opts.configHome].map(Cd));
  if (I.some(item => P.some(T => item === T || Bme(item, T) || Bme(T, item)) || item.split(S).includes(".claude"))) return "sync_root_is_config_dir";
  return x.some(item => !item.split(S).some(item => item.startsWith("."))) ? "source_in_sync_root" : null;
}
function Ci(e, n) {
  let r = n === "source_in_sync_root" ? "the file sits where the cloud session can write on this machine (the synced directory or a sandbox write inlet), so the session could rewrite it (or it could no longer be resolved on this machine)" : "a directory the cloud session can write on this machine is a Claude config directory";
  return `Hooks from ${po(e.settingsFile ?? "", {
    maxCodeUnits: 200
  })} are not offered to the cloud session: ${r}.`;
}
function go(source) {
  return Object.entries(source.hooks).flatMap(([event_2, r]) => (r ?? []).flatMap(item => item.hooks.map(h => ({
    source: source,
    event: event_2,
    matcher: item.matcher,
    hook: h
  }))));
}
function wo(e, n) {
  let r = e.trim().split(/ +/);
  return n === null ? r.length === 1 : (n === "python3" || n === "python") && r.length === 2;
}
function Ti(e) {
  return Mm.includes(e);
}
var Pi = new Set(["/usr/bin/env", "/bin/env"]);
function Ai(e) {
  let n = e.subarray(0, 512).toString("utf8");
  if (!n.startsWith("#!")) return null;
  let r = n.indexOf(`
`),
    s = n.slice(2, r === -1 ? void 0 : r).replace(/^[ \t]+|[ \t]+$/g, "").split(/[ \t]+/),
    h = s[0];
  if (h === void 0 || h === "") return null;
  if (s.some(item => /[^\x21-\x7e]/.test(item))) return "unjudgeable";
  if (!h.startsWith("/") || Yt.test(h)) return "unjudgeable";
  let g = Edo;
  if (!Pi.has(Cd(bt.normalize(h)))) return s.slice(1).every(g) ? bt.normalize(h) : "unjudgeable";
  let k = s[1] === "-S" ? s.slice(2) : s.slice(1),
    w = k[0];
  if (w === void 0 || w.startsWith("-") || w.includes("=") || !k.slice(1).every(g)) return "unjudgeable";
  if (w.startsWith("/")) return Yt.test(w) ? "unjudgeable" : bt.normalize(w);
  return /^[\w.+-]+$/.test(w) ? null : "unjudgeable";
}
var Yt = /(?:^|\/)\.\.(?:\/|$)/,
  Ii = /^\/dev\/(?:null|zero|full|u?random|tty\d*|pts(?:\/.*)?|ptmx|std(?:in|out|err)|fd(?:\/.*)?|dtracehelper|autofs_nowait)$/;
async function ko(e, n, r = !1, s = !1) {
  if (!EV(e.event)) return {
    kind: "held",
    reason: `event_${(Ti(e.event) ? Fwo(e.event) : null) ?? "container_internal"}`
  };
  let {
    hook: hook_5
  } = e;
  if (hook_5.type !== "command" && hook_5.type !== "http") return {
    kind: "held",
    reason: "kind_unsupported"
  };
  let g = hook_5.cloud === "device" && e.source.source !== "local",
    k = hook_5.cloud === "device" && e.source.source === "local" ? ' (Its cloud: "device" mark is not honoured in a file inside the checkout; mark it in your user settings instead.)' : "",
    w = Uwo(e.event, e.matcher);
  if (r) return w ? {
    kind: "held",
    reason: "after_edit"
  } : {
    kind: "forward",
    event: e.event,
    hook: hook_5
  };
  if (w && hook_5.cloud === "skip") return {
    kind: "held",
    reason: "after_edit"
  };
  if (hook_5.cloud === "skip") return {
    kind: "held",
    reason: "author_skip",
    notice: `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} is marked cloud: "skip" (or a value this version does not recognise) and stays on this machine.`
  };
  let pinnedTarget_2,
    R,
    I,
    x = !1,
    P = !1,
    H = !1,
    V = !1,
    templateTwinId,
    j,
    notice_2 = w && g ? `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} is marked cloud: "device" but runs after a file edit, which this version never forwards; it runs in local sessions only.` : void 0;
  if (hook_5.type === "command") {
    let M = await pn(hook_5, n.reach, n.deps, {
      resolved: n.resolved
    });
    if (P = M.kind === "opaque" && M.reason === "private_dotdir", H = M.kind === "opaque" && M.reason === "shell_prefix", M.kind === "unverifiable") x = !0, R = {
      kind: "held",
      reason: "unverifiable_target",
      notice: `This entry for ${po(M.rawPath, {
        maxCodeUnits: 200
      })} in ${Ce[e.source.source]} could not be read and pinned at start-up (missing, too large, not a regular file, more than one hard link, or it resolves to a file this machine does not read as a hook script), so it is not offered to the cloud session.`
    };else if (M.kind === "script_in_reach" || M.kind === "script_outside_reach") {
      x = !0;
      let U = M.kind === "script_in_reach";
      if (pinnedTarget_2 = M.pinnedTarget, U && !g) I = {
        kind: "held",
        reason: "in_reach",
        notice: `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} sits where the cloud session can write on this machine (the checkout, the synced directory or a sandbox write inlet), so it is not offered to the cloud session. Move the script outside the checkout (under ~/.claude, say) to have it forwarded; marking it cloud: "device" instead runs it for cloud sessions from this path \u2014 the entry file is pinned, but anything it loads from the checkout is whatever the session last wrote there, run on this machine outside the sandbox.${k}`
      };
      let N = Ue(n.reach),
        B = [...(M.site.form === "exec" && M.site.slot === "arg0" && hook_5.command.startsWith("/") ? [Yt.test(hook_5.command) ? "unjudgeable" : bt.normalize(hook_5.command)] : []), ...(M.interpreter === null ? [Ai(M.bytes)].filter(item => item !== null) : [])],
        K;
      for (let W of B) {
        if (W === "unjudgeable") {
          K = {
            path: "the interpreter it names",
            why: 'cannot be vouched for from here (a relative interpreter or one spelled with "..", env with options, or a #! line that hands the interpreter a file of its own)'
          };
          break;
        }
        let D = await gEe(await hEe(W, n.opts.launchDir), n.opts.launchDir, I3()),
          F = D.verdict === "local" ? await n.deps.realpath(D.spelling).catch(() => null) : null;
        if (F === null) {
          K = {
            path: po(W, {
              maxCodeUnits: 200
            }),
            why: "cannot be located on this machine"
          };
          break;
        }
        if ([W, F].some(item => N.some(J => RLe(item, J)))) {
          K = {
            path: po(W, {
              maxCodeUnits: 200
            }),
            why: "sits where the cloud session can write on this machine (a sandbox write inlet covers it)"
          };
          break;
        }
      }
      if (K === void 0 && M.interpreter === null) {
        let W = ASo(M.bytes);
        if (W !== null && (W === "unjudgeable" || W.kind !== "absolute" && W.kind !== "env")) K = {
          path: "the interpreter its #! line names",
          why: "may load settings or code from the checkout, where the hook starts and which the cloud session can write (bun, tsx, lua and Rscript without --vanilla can; an interpreter or an option this version does not know might)"
        };
      }
      if (K !== void 0 && !U) if (g) V = !0;else I = {
        kind: "held",
        reason: "interpreter_unvouched",
        notice: `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} runs its script with ${K.path}, which ${K.why}, so it is not offered to the cloud session. Run it with an interpreter this version knows (such as bash, python3 or node), found on your PATH (#!/usr/bin/env python3) or named by a full path outside what the session can write, with no options or only simple switches this version knows (bash -eu, python3 -I); marking it cloud: "device" instead runs it as written.${k}`
      };
      if (V = V || U && g, !U) {
        let W = fo(M.bytes, [n.reach.launchDir, n.reach.launchDirReal, n.reach.projectDir, ...(n.reach.projectDirReal !== void 0 ? [n.reach.projectDirReal] : []), ...(n.reach.sync !== void 0 ? [n.reach.sync.rootReal, ...(n.reach.sync.root !== void 0 ? [n.reach.sync.root] : [])] : []), ...n.reach.extraReach].filter(item => !Ii.test(item)), n.deps.home, M.interpreter);
        if (W !== void 0 && !g && I === void 0) I = {
          kind: "held",
          reason: "loads_from_reach",
          notice: `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} is a script outside the checkout, but ${W} \u2014 code or data the cloud session can write \u2014 so it is not offered to the cloud session. Marking it cloud: "device" runs it anyway (you vouch for what it loads); otherwise have it load its helpers by an absolute path outside the checkout.${k}`
        };else if (W !== void 0 && g) V = !0;
      }
      if (g && n.opts.optInPins !== void 0) {
        let W = `${M.pinnedTarget.realPath}\x00${M.pinnedTarget.sha256}`,
          D = n.opts.optInPins.get(M.pinnedTarget.path);
        if (D === void 0 || !U && D !== W) n.opts.optInPins.set(M.pinnedTarget.path, W);else if (D !== W) R = {
          kind: "held",
          reason: "unverifiable_target",
          notice: `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} is marked cloud: "device" and its script, which sits where the cloud session can write, changed since this session pinned it; it is not offered again until you relaunch claude --cloud \u2014 review the file first, since the cloud session may have written it.`
        }, pinnedTarget_2 = void 0, V = !1;
      }
      let X = s ? void 0 : (n.deps.findTemplateByDigest ?? FYr)(M.pinnedTarget.sha256),
        Z = g && !w ? void 0 : X;
      if (g && X !== void 0 && hook_5.args === void 0 && !hook_5.if && !hook_5.async && !hook_5.asyncRewake && !hook_5.once && wo(hook_5.command, M.interpreter)) templateTwinId = X.template.id;
      if (Z) {
        let {
            template: template,
            label: label_2
          } = Z,
          F = (n.opts.refusedTemplateIds ?? []).includes(template.id),
          ee = !F && (n.opts.enabledTemplateIds ?? xi).includes(template.id);
        if (F) notice_2 = w ? `${template.filename} is an after-edit hook, so it is not forwarded either: it does not run for this cloud session, only in local ones.` : void 0;else if (!ee) notice_2 = w ? `${template.filename} is not run in the cloud in this version, and as an after-edit hook it is not forwarded either, so it only runs in local sessions.` : `${template.filename} is not run in the cloud in this version; it runs on this machine instead.`;else if (template.event !== e.event) notice_2 = `${template.filename} is configured on ${e.event}; the cloud runs it only on ${template.event}, so it runs on this machine instead.`;else if (label_2 === "legacy" && !n.opts.allowLegacyTemplateDigests) notice_2 = `${template.filename} is an older copy of ${template.id}; the cloud will not run it. Update it from dotfiles.`;else if (hook_5.args !== void 0 || hook_5.if || hook_5.async || hook_5.asyncRewake || hook_5.once || !wo(hook_5.command, M.interpreter)) notice_2 = `${template.filename} is run in a way the cloud cannot reproduce (arguments, a condition, async or once), so it runs on this machine instead.`;else if (e.matcher !== void 0 && !HKe(e.matcher) && (!yo(e.matcher) || !ULe.test(e.matcher))) notice_2 = void 0;else if (!cBn(e.matcher, template.matcher)) notice_2 = `${template.filename} is configured with the matcher "${po(e.matcher ?? "", {
          maxCodeUnits: 200
        })}" and the cloud runs it on "${template.matcher}", so it runs on this machine instead.`;else {
          let timeout_s = So(hook_5.timeout);
          j = {
            entry: {
              wire: {
                template: template.id,
                digest: M.pinnedTarget.sha256,
                event: e.event,
                ...(!HKe(e.matcher) && {
                  matcher: e.matcher
                }),
                ...(timeout_s !== void 0 && {
                  timeout_s: timeout_s
                })
              },
              local: {
                templateId: template.id,
                label: label_2,
                scriptRealPath: M.pinnedTarget.realPath,
                bytes: M.bytes,
                userMatcher: e.matcher,
                source: e.source.source
              }
            },
            ...(label_2 === "legacy" && {
              legacyNotice: `${template.filename} is an older copy of ${template.id}; the cloud will run that copy. Update it from dotfiles to get fixes.`
            }),
            ...(e.matcher !== void 0 && !HKe(e.matcher) && !cBn(template.matcher, e.matcher) && {
              narrowNotice: `${template.filename} is configured with the matcher "${po(e.matcher, {
                maxCodeUnits: 200
              })}"; in the cloud it runs on "${template.matcher}" only.`
            })
          };
        }
        if (j === void 0 && w && ee) notice_2 = `${(notice_2 ?? `${template.filename} cannot move to the cloud here.`).replace(/(?:, so|; it) (?:it )?runs on this machine instead\.$/, ".").replace(/\.$/, "")}, and as an after-edit hook it is not forwarded either: it runs in local sessions only.`;
      }
    }
  }
  if (j !== void 0) {
    let notice = [j.legacyNotice, j.narrowNotice].filter(item => item !== void 0).join(" ");
    return {
      kind: "template",
      entry: j.entry,
      event: e.event,
      hook: hook_5,
      ...(notice !== "" && {
        notice: notice
      })
    };
  }
  if (w) return {
    kind: "held",
    reason: "after_edit",
    ...(notice_2 !== void 0 && {
      notice: notice_2
    })
  };
  if (R !== void 0) return R;
  if (e.matcher !== void 0 && !yo(e.matcher)) return {
    kind: "held",
    reason: "over_cap"
  };
  if (e.matcher !== void 0 && !HKe(e.matcher) && !ULe.test(e.matcher)) return {
    kind: "held",
    reason: "pattern_matcher",
    notice: `"${pe(hook_5)}" is configured with the pattern matcher "${po(e.matcher, {
      maxCodeUnits: 200
    })}", which a cloud session cannot take, so it is not offered to it and runs in local sessions only. Use a plain list such as Edit|Write for it to run for cloud sessions too.`
  };
  if (I !== void 0) return I;
  if (hook_5.type === "command" && !x) {
    if (!g) return {
      kind: "held",
      reason: "unpinned_command",
      notice: H ? `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} would run wrapped in your CLAUDE_CODE_SHELL_PREFIX, so this machine cannot pin what actually runs and it is not offered to the cloud session. Marking it cloud: "device" runs it for cloud sessions anyway (through the prefix when that names an absolute wrapper outside what the session can write; without it otherwise).${k}` : P ? `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} names a script under a dot-directory this feature never reads or pins (of those, only ~/.claude and ~/.config are), so it is not offered to the cloud session. Move the script to one of those, or elsewhere outside the checkout, to have it forwarded; marking it cloud: "device" instead runs the command as written for cloud sessions, unpinned.${k}` : `This entry for "${pe(hook_5)}" in ${Ce[e.source.source]} is not a single script this machine can pin, so it is not offered to the cloud session. Point it at one script outside the checkout (under ~/.claude, say) to have it forwarded; marking it cloud: "device" instead runs the command as written for cloud sessions \u2014 nothing is pinned, so whatever it names in the checkout is whatever the session last wrote there, run on this machine outside the sandbox.${k}`
    };
    V = !0;
  }
  return {
    kind: "forward",
    event: e.event,
    hook: hook_5,
    ...(pinnedTarget_2 !== void 0 && {
      pinnedTarget: pinnedTarget_2
    }),
    ...(V && {
      authorOptIn: !0
    }),
    ...(g && {
      cloudDevice: !0
    }),
    ...(templateTwinId !== void 0 && {
      templateTwinId: templateTwinId
    }),
    ...(notice_2 !== void 0 && {
      notice: notice_2
    })
  };
}
function yo(e) {
  return e.length <= bi && !/[\p{Cc}\p{Cf}]/u.test(e);
}
function vo(e) {
  return `${e} is configured more than once; the cloud runs it once.`;
}
function $i() {
  return {
    forwarded: [],
    templates: [],
    held: [],
    heldCounts: {
      after_edit: 0,
      kind_unsupported: 0,
      plugin: 0,
      managed: 0,
      other: 0
    },
    notices: []
  };
}
async function abn(e, opts_3, deps) {
  let s = $i();
  if (e.kind === "none") return s;
  let roots = {
      launchDirReal: await _t(deps, opts_3.launchDir),
      projectDirReal: await _t(deps, opts_3.projectDir),
      configHomeReal: await _t(deps, opts_3.configHome),
      extraReach: L((await Promise.all([...(opts_3.repoRoot !== void 0 ? [opts_3.repoRoot] : []), ...(opts_3.extraReachRoots ?? [])].map(async item => {
        let M = await gEe(await hEe(item, opts_3.launchDir), opts_3.launchDir, I3());
        return M.verdict === "local" ? [item, await _t(deps, M.spelling)] : M.verdict === "foreign" ? [M.spelling] : [item, ...yEe(M, opts_3.launchDir)];
      }))).flat())
    },
    g = {
      opts: opts_3,
      deps: deps,
      roots: roots,
      reach: {
        launchDir: opts_3.launchDir,
        launchDirReal: roots.launchDirReal,
        configHomeReal: roots.configHomeReal,
        projectDir: opts_3.projectDir,
        projectDirReal: roots.projectDirReal,
        ...(opts_3.sync !== void 0 && {
          sync: opts_3.sync
        }),
        extraReach: roots.extraReach
      },
      resolved: new Map()
    },
    k = (A, reason_5) => {
      if (s.held.push({
        event: A.event,
        ...(A.matcher !== void 0 && {
          matcher: po(A.matcher, {
            maxCodeUnits: 200
          })
        }),
        source: A.source.source,
        command: pe(A.hook),
        reason: reason_5
      }), reason_5 === "after_edit") s.heldCounts.after_edit += 1;else if (reason_5 === "kind_unsupported") s.heldCounts.kind_unsupported += 1;else s.heldCounts.other += 1;
    },
    w = new Set(),
    S = A => {
      if (A !== void 0 && !w.has(A)) w.add(A), s.notices.push(A);
    },
    R = A => {
      if (w.delete(A)) s.notices = s.notices.filter(item => item !== A);
    },
    I = new Map(),
    x = new Map(),
    P = new Map(),
    H = new Set(),
    V = new Set(),
    T = new Map();
  if ([opts_3.launchDir, opts_3.configHome, opts_3.sync?.rootReal, opts_3.sync?.root, ...(opts_3.extraReachRoots ?? [])].some(item => item !== void 0 && !QP(item))) {
    S("Hooks stay on this machine: its launch, config or sync directory is not an absolute path this version can place, so none are offered to the cloud session.");
    for (let A of e.sources) for (let M of go(A)) k(M, "unverifiable_target");
    return s;
  }
  for (let A of e.sources) {
    let M = await Ei(A, g),
      U = go(A);
    if (M !== null && U.length > 0) S(Ci(A, M));
    for (let site of U) {
      let B = await ko(site, g, M !== null);
      if (M !== null) {
        k(site, B.kind === "held" && (B.reason.startsWith("event_") || B.reason === "kind_unsupported" || B.reason === "after_edit") ? B.reason : M);
        continue;
      }
      if (B.kind === "held") {
        S(B.notice), k(site, B.reason);
        continue;
      }
      let K = B;
      if (K.kind === "template") {
        let {
            entry: entry
          } = K,
          Y = Xt(site, K.hook, deps.defaultShell),
          oe = T.get(entry.local.templateId),
          ie = x.get(Y),
          we = oe !== void 0 && (oe.site.matcher ?? "") === (site.matcher ?? ""),
          re = oe !== void 0 ? we : s.templates.length < Zt;
        if (ie !== void 0 && re) {
          if (k(ie.site, "duplicate"), H.add(ie.index), ie.notice !== void 0) R(ie.notice);
          x.delete(Y);
        }
        if (oe !== void 0 && !we) {
          if (K = await ko(site, g, !1, !0), K.kind === "held") {
            k(site, K.reason), S(K.notice);
            continue;
          }
        } else if (oe !== void 0) {
          k(oe.site, "duplicate");
          let se = Xt(oe.site, oe.hook, deps.defaultShell);
          if (se !== Y) P.delete(se);
          if (P.set(Y, {
            index: oe.index,
            templateId: entry.local.templateId
          }), s.templates[oe.index] = entry, oe.notice !== void 0) R(oe.notice);
          T.set(entry.local.templateId, {
            index: oe.index,
            site: site,
            hook: K.hook,
            ...(K.notice !== void 0 && {
              notice: K.notice
            })
          }), S(vo(entry.local.templateId)), S(K.notice);
          continue;
        } else if (s.templates.length >= Zt) {
          k(site, "over_cap"), S(`Only ${Zt} templates can run in the cloud session; the rest stay on this machine.`);
          continue;
        } else {
          T.set(entry.local.templateId, {
            index: s.templates.length,
            site: site,
            hook: K.hook,
            ...(K.notice !== void 0 && {
              notice: K.notice
            })
          }), P.set(Y, {
            index: s.templates.length,
            templateId: entry.local.templateId
          }), s.templates.push(entry), S(K.notice);
          continue;
        }
      }
      if (K.kind !== "forward") continue;
      let X = K,
        timeout_s_2 = So(X.hook.timeout),
        W = {
          wire: {
            id: "",
            event: site.event,
            ...(!HKe(site.matcher) && {
              matcher: site.matcher
            }),
            kind: X.hook.type,
            ...(timeout_s_2 !== void 0 && {
              timeout_s: timeout_s_2
            }),
            source: A.source,
            ...(X.hook.if && {
              has_condition: !0
            }),
            ...(X.pinnedTarget !== void 0 && {
              target_pinned: !0
            }),
            ...(X.authorOptIn && {
              author_opt_in: !0
            })
          },
          local: {
            hook: X.hook,
            matcher: site.matcher,
            event: X.event,
            source: A.source,
            ...(X.pinnedTarget !== void 0 && {
              pinnedTarget: X.pinnedTarget
            }),
            ...(X.cloudDevice && {
              cloudOptIn: !0
            }),
            ...(X.templateTwinId !== void 0 && {
              templateTwinId: X.templateTwinId
            })
          }
        },
        D = Xt(site, X.hook, deps.defaultShell),
        F = P.get(D),
        ee = (I.get(site.event) ?? 0) < mo,
        J = x.has(D) || s.forwarded.length < Jt && ee;
      if (F !== void 0 && J) {
        let G = T.get(F.templateId);
        if (G !== void 0 && G.index === F.index) {
          if (k(G.site, "duplicate"), G.notice !== void 0) R(G.notice);
          R(vo(F.templateId)), T.delete(F.templateId);
        }
        V.add(F.index), P.delete(D);
      }
      let te = x.get(D);
      if (te !== void 0) {
        k(te.site, "duplicate");
        let id = s.forwarded[te.index].wire.id;
        if (s.forwarded[te.index] = {
          ...W,
          wire: {
            ...W.wire,
            id: id
          }
        }, te.notice !== void 0) R(te.notice);
        x.set(D, {
          index: te.index,
          site: site,
          ...(X.notice !== void 0 && {
            notice: X.notice
          })
        }), S(X.notice);
        continue;
      }
      if (s.forwarded.length >= Jt) {
        k(site, "over_cap"), S(`Only the first ${Jt} hooks are offered to the cloud session; the rest stay on this machine.`);
        continue;
      }
      if (!ee) {
        k(site, "over_cap"), S(`Only the first ${mo} ${site.event} hooks are offered to the cloud session; the rest stay on this machine.`);
        continue;
      }
      let ae = I.get(site.event) ?? 0;
      I.set(site.event, ae + 1), x.set(D, {
        index: s.forwarded.length,
        site: site,
        ...(X.notice !== void 0 && {
          notice: X.notice
        })
      }), S(X.notice), s.forwarded.push({
        ...W,
        wire: {
          ...W.wire,
          id: WYr(opts_3.instanceId, site.event, ae)
        }
      });
    }
  }
  s.forwarded = s.forwarded.filter((item, index) => !H.has(index)), s.templates = s.templates.filter((item, index) => !V.has(index));
  let j = new Map(s.templates.map(item => [`${item.wire.template}\x00${item.wire.event}`, item.wire.template]));
  return s.forwarded = s.forwarded.filter(item => {
    let templateTwinId_2 = item.local.templateTwinId,
      U = templateTwinId_2 === void 0 ? void 0 : j.get(`${templateTwinId_2}\x00${item.wire.event}`);
    if (templateTwinId_2 === void 0 || U === void 0 || !cBn(C1e(templateTwinId_2)?.matcher ?? "", item.local.matcher ?? "*")) return !0;
    return s.held.push({
      event: item.wire.event,
      ...(item.local.matcher !== void 0 && {
        matcher: po(item.local.matcher, {
          maxCodeUnits: 200
        })
      }),
      source: item.local.source,
      command: pe(item.local.hook),
      reason: "duplicate"
    }), s.heldCounts.other += 1, S(`"${pe(item.local.hook)}" is the same script the cloud already runs as ${U}; it is not also run on this machine.`), !1;
  }), s;
}
function judgeSender(e) {
  let attestation_2 = EIe(e);
  return attestation_2 === void 0 ? void 0 : {
    attestation: attestation_2,
    heldBack: TIe(attestation_2)
  };
}
function Hi(e) {
  let n = e.forwarded + e.templateNames.length;
  return `${n === 1 ? "One of your hooks" : `${n} of your hooks`} could run for cloud sessions started from this machine \u2014 run /hooks to decide (nothing from this machine runs for them until you do).`;
}
function lbn(e) {
  return e.CLAUDE_CODE_SHELL_PREFIX?.trim() || void 0;
}
var bo = 30000;
function Ni(path, n, r = async s => ({
  real: await realpath(s),
  aliased: await SMn(s)
})) {
  let s = {
    path: path,
    real: null,
    env: n === void 0 ? void 0 : {
      ...n
    },
    locate: () => {
      s.retryAt = void 0, r(path).then(({
        real: real,
        aliased: aliased
      }) => {
        if (s.real = aliased ? "unresolvable" : real, aliased) s.retryAt = Date.now() + bo;
      }, h => {
        if (s.real = "unresolvable", h?.code !== "ENOENT" && h?.code !== "ENOTDIR") s.retryAt = Date.now() + bo;
      });
    }
  };
  return s.locate(), s;
}
function Mi(e, n = Date.now()) {
  if (e.retryAt !== void 0 && n >= e.retryAt) e.locate?.();
}
function Vgt(e) {
  return e.legacyConfigFile ??= Ni(la(), Tdo(e, y6())), Mi(e.legacyConfigFile), e.legacyConfigFile;
}
function cbn(e, n, r = s => he(s)?.env) {
  let s = g => e.pinnedScopes.has(g) || g === "userSettings" && e.everInReach.has("user") || g === "flagSettings" && e.everInReach.has("flag"),
    h = n.env !== void 0 && typeof n.real === "string" && n.real !== "unresolvable" && Oi(n.path) && !y_([n.path, n.real], [...e.stickyRoots]);
  return Object.assign({}, h ? n.env : {}, ...Ui.filter(item => !_b.has(item) && !s(item)).map(item => r(item) ?? {}));
}
function setTimer(e, n) {
  let r = setTimeout(e, n);
  return r.unref(), {
    clear: () => clearTimeout(r)
  };
}
function gzt() {
  return O() !== "windows" && ts() && ZGn() && !a.CLAUDE_CODE_DISABLE_HOOK_FORWARDING;
}
function Li(e) {
  let n = null,
    r = !1,
    s = new Set();
  return {
    state: () => n,
    setState(h) {
      n = r ? null : h;
    },
    async handleForwardedHook(h) {
      if (r) return;
      try {
        let g = await e.servicer.serve(h, n);
        if (r) return;
        if (g.kind === "silent") {
          if (g.reason === "not_mine" || g.reason === "no_state" || g.reason === "withdrawn") e.release(h.requestId);
          return;
        }
        e.respond(h.requestId, g.answer);
      } catch (error) {
        if (e.logError(error), Nre(h.callbackId)?.event === "PreToolUse" && !r) try {
          e.respond(h.requestId, {
            hookSpecificOutput: {
              hookEventName: "PreToolUse",
              permissionDecision: "deny",
              permissionDecisionReason: "A hook on your machine could not be run for this call (internal error); retry"
            }
          });
        } catch {}
      }
    },
    handleCancelled(h, g) {
      if (r || !e.servicer.cancel(h, g) || g !== "worker") return;
      for (let k of s) k();
    },
    onStoppedWhileRunning(h) {
      return s.add(h), () => s.delete(h);
    },
    async dispose() {
      r = !0, n = null, s.clear(), e.servicer.cancelAll(), await e.staging.dispose();
    }
  };
}
function Ro({
  launchDir: e,
  memory: memory_2,
  getTools: getTools,
  respond: respond,
  release: release,
  onLine: onLine,
  trustAccepted = H0,
  isMuted: isMuted
}) {
  let S = () => null,
    staging = Mdo(Ddo(), () => [...(S()?.cloudWritableRoots ?? [e]), ...YIt(e)]),
    I = gt(() => staging.dispose()),
    hookCwd = e;
  realpath(e).then(A => {
    hookCwd = A;
  }, () => {});
  let attached = {
    ...hs()
  };
  WJt(memory_2, Vgt(memory_2).env);
  let H = memory_2.senderFor(e),
    hostEnv = () => {
      let A = hs();
      return MGe({
        attached: attached,
        beforeSettings: my(),
        ownEnv: cbn(H, Vgt(memory_2)),
        childrenSee: M => Object.hasOwn(A, M)
      });
    },
    servicer = qn({
      memory: memory_2.servicerFor(e),
      now: Date.now,
      setTimer: setTimer,
      trustAccepted: trustAccepted,
      ...(isMuted && {
        isMuted: isMuted
      }),
      judgeSender: judgeSender,
      pin: NGe(),
      staging: staging,
      run: (A, M, U) => Xx(M.launchDir, () => Cn(A, M, En, U)),
      evaluateCondition: (A, M) => qbr(A, M, getTools(), M.cwd),
      parseTarget: A => {
        let M = hostEnv();
        return rEe(A, {
          home: mve(M),
          hookCwd: hookCwd,
          projectDir: e,
          defaultShell: HB(),
          shellPrefix: lbn(M)
        });
      },
      emptyTranscriptPath: () => staging.placeholder("cloud-transcript.jsonl"),
      defaultTimeoutMs: defaultTimeoutMs,
      onLine: (line, level) => onLine({
        line: line,
        level: level
      }),
      telemetry: A => {
        let M = Fi(A.outcome);
        if (M === "ok") _("device_hooks_serve");else if (M === "sad") p("device_hooks_serve", A.outcome);else if (M === "bad") m("device_hooks_serve", A.outcome);
        i("tengu_device_hook_served", {
          event: ue(A.event),
          kind: ue(A.kind),
          outcome: c(A.outcome),
          exit_class: ue(A.exitClass),
          duration_ms: A.durationMs,
          translated_paths: A.translatedPaths,
          replay: A.replay,
          blocked: A.blocked,
          staged: A.staged,
          repinned: A.repinned,
          waited_ms: A.waitedMs,
          ...(A.attestation !== void 0 && {
            attestation_mode: c(A.attestation.mode),
            request_attestation: c(A.attestation.status),
            attestation_verdict: c(A.attestation.verdict)
          })
        });
      },
      debug: A => t(A),
      logError: logError,
      extraWritableRoots: () => YIt(e),
      hostEnv: hostEnv,
      childEnvironment: (A, M) => bMn(A, M, hs()),
      placePath: placePath,
      resolveProgram: resolveProgram,
      defaultShell: () => HB()
    }),
    j = Li({
      servicer: servicer,
      staging: {
        dispose: () => (I(), staging.dispose())
      },
      respond: respond,
      release: release,
      logError: A => {
        logError(A), m("device_hooks_serve", "serve_threw");
      }
    });
  return S = j.state, t("[deviceHooks] device hook session created for this attach"), j;
}
var servicerDefaults = {
  stageVerifiedBytes: "always",
  repinChangedScripts: !1,
  wireLabel: "basename",
  denyUnjudgeablePaths: !1,
  runWithUntranslatedPaths: !1,
  timeoutFailsClosed: !1
};
function xo({
  launchDir: e,
  memory: memory_3,
  cloudSessionId: cloudSessionId,
  session: session,
  sendControlRequest: sendControlRequest,
  syncRoot: syncRoot,
  servingMuted: servingMuted,
  onLine: onLine_2,
  storageV5: storageV5
}) {
  let R = NGe().openNoFollow,
    I = realpath(e).catch(() => e),
    x = repoRootOf(e) ?? e,
    memory_4 = memory_3.senderFor(e),
    attached_2 = {
      ...hs()
    };
  WJt(memory_3, Vgt(memory_3).env);
  let V = () => {
    let T = hs();
    return MGe({
      attached: attached_2,
      beforeSettings: my(),
      ownEnv: cbn(memory_4, Vgt(memory_3)),
      childrenSee: j => Object.hasOwn(T, j)
    });
  };
  return ivo({
    memory: memory_4,
    now: Date.now,
    setTimer: setTimer,
    capture: () => Lrn(Nrn()),
    buildInventory: ({
      captured: captured,
      instanceId: instanceId_2,
      syncRoot: syncRoot_2,
      reachRoots: M,
      withoutTemplates: withoutTemplates
    }) => {
      let N = V();
      return abn(captured, {
        instanceId: instanceId_2,
        launchDir: e,
        projectDir: e,
        configHome: configHome(),
        ...(syncRoot_2 !== null && {
          sync: {
            rootReal: syncRoot_2.real,
            root: syncRoot_2.root
          }
        }),
        ...(x !== e && {
          repoRoot: x
        }),
        extraReachRoots: M,
        allowLegacyTemplateDigests: !0,
        refusedTemplateIds: [...withoutTemplates],
        optInPins: memory_4.optInPins
      }, {
        realpath: realpath,
        open: R,
        home: mve(N),
        defaultShell: HB(),
        shellPrefix: lbn(N)
      });
    },
    mintInstanceId: () => jYr(),
    displayName: JXe(),
    cloudSessionId: cloudSessionId,
    launchDir: e,
    launchDirReal: () => I,
    realpath: realpath,
    projectRoot: x,
    syncRoot: async () => {
      let root_2 = syncRoot();
      return root_2 === null ? null : {
        root: root_2,
        real: await realpath(root_2).catch(() => root_2)
      };
    },
    servingMuted: servingMuted,
    commonWriteRoots: () => Qme(e),
    scopeWriteRoots: (T, j) => Tae(e, T, j),
    scopeWriteEntries: T => mee(T, e),
    scopeSettingsFile: T => wr(T) ?? null,
    sendRequest: async (T, {
      timeoutMs: timeoutMs_6
    }) => {
      try {
        return await sendControlRequest(T, {
          timeoutMs: timeoutMs_6,
          background: !0
        });
      } catch (error) {
        let M = mB(error);
        if (M === "timeout" || M === "aborted") throw Error("timeout: no answer from the cloud worker in time");
        if (M === "disconnected" || M === "not_connected") throw Error("disconnected: the session stream is not connected");
        throw error;
      }
    },
    ensureConsent: svo({
      deps: ege(storageV5),
      pin: memory_3.consentPin,
      onNotAsked: T => {
        i("tengu_device_hooks_consent_notice", {}), onLine_2({
          line: Hi(T),
          level: "info"
        });
      },
      isStoreInReach: T => vit(Zme(), T, realpath),
      onUntrustedStore: T => {
        let j = Rn(Zme());
        onLine_2({
          line: T === "writable" ? `The saved answer about this machine's hooks is ignored here: this cloud session can itself write ${j}. Decide for it in /hooks.` : `The saved answer about this machine's hooks is ignored here: ${j} could not be located to check who can write it. Decide for this session in /hooks.`,
          level: "warning"
        });
      }
    }),
    arm: T => session.setState(T),
    onLine: onLine_2,
    telemetry: T => {
      if (T.trigger === "renewal" && T.outcome === "registered") return;
      switch (i("tengu_device_hooks_client_register", {
        outcome: c(T.outcome),
        trigger: c(T.trigger),
        forwarded: T.forwarded,
        templates: T.templates,
        held_after_edit: T.heldAfterEdit,
        held_other: T.heldOther,
        accepted: T.accepted,
        ignored: T.ignored,
        attempt: T.attempt
      }), T.outcome) {
        case "registered":
        case "unregistered":
        case "nothing_to_offer":
        case "dormant":
        case "no_consent":
        case "muted":
          _("device_hooks_client_register", {
            forwarded: T.forwarded
          });
          break;
        case "not_ready":
        case "stale_epoch":
        case "superseded":
        case "failed":
        case "consent_distrusted":
          p("device_hooks_client_register", T.outcome);
          break;
        default:
          m("device_hooks_client_register", T.outcome);
      }
    },
    lapseTelemetry: T => i("tengu_device_hooks_lapse_line", {
      kind: c(T)
    }),
    reachPinnedTelemetry: T => i("tengu_device_hooks_reach_pinned", {
      source: c(T)
    }),
    sourcePinnedTelemetry: T => i("tengu_device_hooks_source_pinned", {
      source: c(T.source),
      changed: T.changed,
      appeared: T.appeared,
      vanished: T.vanished
    }),
    servicerDefaults: servicerDefaults
  });
}
function Fi(e) {
  switch (e) {
    case "answered":
    case "event_mismatch":
    case "condition_false":
    case "cancelled":
    case "muted":
      return "ok";
    case "not_mine":
    case "cached":
    case "withdrawn_replay":
    case "same_invocation":
      return null;
    case "unknown_id":
    case "replay_mismatch":
    case "event_name_mismatch":
    case "input_too_large":
    case "overloaded":
    case "stale":
    case "invalid_input":
    case "unsupported_kind":
    case "no_roots":
    case "untrusted":
    case "in_reach_refused":
    case "pin_refused":
    case "pin_changed":
    case "pin_unreadable":
    case "untranslated_skipped":
    case "condition_error":
    case "no_slot":
    case "too_late":
    case "run_error":
    case "unattested":
      return "sad";
    case "staging_failed":
    case "decide_error":
      return "bad";
    default:
      return e;
  }
}
var ji = /^[0-9a-f]{64}$/;
function hzt(e) {
  let {
      description: description,
      input: input_4
    } = e,
    s = Object.keys(input_4),
    content_digest = input_4.content_digest;
  return description !== void 0 && description.length <= Che && l1(description) && s.length === 1 && typeof content_digest === "string" && ji.test(content_digest);
}
import { realpath as realpath_2 } from "fs/promises";
function yzt(e) {
  let n = {
      realpath: realpath_2,
      repoRootOf: repoRootOf,
      consentPath: consentPath,
      configHome: configHome,
      ...e.deps
    },
    {
      launchDir: r,
      memory: memory_5
    } = e,
    h = null,
    g = () => h ??= (async () => {
      let k = P => n.realpath(P).catch(() => P),
        w = await k(r),
        S = L([r, w].map(item => n.repoRootOf(item)).filter(item => item !== null)),
        repoRoots = L((await Promise.all(S.map(k))).concat(S)),
        [repoRoot = null] = S;
      return {
        tracker: gn({
          launchDir: r,
          projectDir: r,
          repoRoot: repoRoot,
          configHome: n.configHome(),
          syncRoot: e.syncRoot,
          memory: memory_5,
          ...(n.tracker !== void 0 && {
            deps: n.tracker
          })
        }),
        launchRoots: L([r, w, ...repoRoots]),
        repoRoots: repoRoots
      };
    })();
  return {
    async judge() {
      try {
        let {
            tracker: tracker,
            launchRoots: launchRoots,
            repoRoots: repoRoots_2
          } = await g(),
          R = await tracker.current();
        if (e.syncElsewhere !== !1) return "unknown";
        let I = [...Ue(R), ...repoRoots_2];
        if (I.some(item => item === rz || !QP(item))) return "unknown";
        let x = n.consentPath();
        if (!x.startsWith("/")) return "unknown";
        let P = await vit(x, I, n.realpath);
        if (P === !1) return "outside";
        if (P === "unresolvable") return "unknown";
        let H = [x, await n.realpath(x).catch(() => x)];
        if (y_(H, launchRoots)) return "in_launch_dir";
        return y_(H, [...memory_5.syncRoots]) ? "in_sync_root" : "in_other_root";
      } catch {
        return "unknown";
      }
    }
  };
}
var Vi = new Set(["userSettings", "localSettings", "flagSettings", "projectSettings", "policySettings"]);
function bzt(e) {
  let n = e.createSession ?? Ro,
    r = e.createSender ?? xo,
    s = e.isServingMuted ?? XA,
    servingMuted_2 = s(),
    session_2 = n({
      launchDir: e.launchDir,
      memory: e.memory,
      getTools: e.getTools,
      respond: (j, A) => e.manager()?.respondToForwardedHook(j, A) ?? !1,
      release: j => e.manager()?.releaseForwardedHook(j),
      onLine: e.onLine,
      ...(e.trustAccepted && {
        trustAccepted: e.trustAccepted
      }),
      isMuted: () => servingMuted_2
    }),
    k = r({
      launchDir: e.launchDir,
      memory: e.memory,
      cloudSessionId: e.cloudSessionId,
      session: session_2,
      sendControlRequest: (j, A) => {
        let M = e.manager();
        if (M === null) return Promise.reject(Error("[RemoteSessionManager] Cannot send: not connected"));
        return M.sendControlRequest(j, A);
      },
      syncRoot: e.syncRoot,
      servingMuted: servingMuted_2,
      onLine: e.onLine,
      storageV5: e.storageV5
    }),
    w = (e.onServingMuteRecheck ?? JA)(() => {
      try {
        let j = s();
        if (j === servingMuted_2) return;
        if (j) servingMuted_2 = !0, k.servingMute(!0);else k.servingMute(!1), servingMuted_2 = !1;
      } catch (error) {
        logError(error);
      }
    }),
    S = e.registerCleanup(() => k.unregister(kit)),
    R = e.subscribeSettingsChanges(j => {
      if (Vi.has(j)) k.settingsChanged();
    }),
    I = session_2.onStoppedWhileRunning(() => k.requestRegistration("stopped_while_running")),
    P = (e.subscribeConsent ?? (j => ovo(e.memory.consentAnnounced, j)))(j => k.consentDecided(j)),
    H = j => () => {
      try {
        k.requestRegistration(j);
      } catch (error) {
        logError(error);
      }
    },
    V = e.memory.noteAttached(e.launchDir),
    T = !1;
  return {
    callbacks: {
      onForwardedHookCallback: j => {
        session_2.handleForwardedHook(j);
        let A = Nre(j.callbackId)?.instanceId,
          {
            registeredInstanceId: registeredInstanceId,
            instanceId: instanceId_3
          } = k.snapshot();
        if (A !== void 0 && (A === registeredInstanceId || A === instanceId_3)) k.activity();
      },
      onForwardedHookCancelled: (j, A) => {
        session_2.handleCancelled(j, A);
      }
    },
    onStreamConnected: H("connected"),
    onWorkerInit: H("init"),
    onWorkerUp: H("worker_up"),
    onTurnInFlight: () => k.turnInFlight(),
    onTurnEnded: () => k.turnEnded(),
    beforeSend: () => k.ensureRegistered(),
    snapshot: () => k.snapshot(),
    dispose: () => {
      if (T) return;
      T = !0, V(), w(), R(), I(), P(), S();
      let j = k.unregister(kit);
      k.dispose();
      let A = e.registerCleanup(() => j);
      j.then(A, A), session_2.dispose();
    }
  };
}
var Ire = uo({
  kind: "cloud_sync_offline",
  payload: f(() => u({
    folder: o(),
    title: o(),
    body: o(),
    attempts: E().int().nonnegative(),
    lastError: o().optional()
  })),
  result: f(() => z(["continue", "unanswered"])),
  default: "unanswered",
  hideWhile: []
});
function Szt({
  folder: folder,
  attempts: attempts,
  lastError: lastError
}) {
  let lastError_2 = lastError === void 0 ? void 0 : xoe(lastError.replace(/\s+/g, " ").trim());
  return {
    folder: folder,
    title: Di["sync_offline.title"],
    body: Di["sync_offline.body"],
    attempts: attempts,
    ...(lastError_2 !== void 0 && lastError_2 !== "" && {
      lastError: lastError_2
    })
  };
}
var timeoutMs_7 = 300000,
  Bi = [400, 1200],
  Gi = 5000,
  uJn = "Switch permission modes away and back once to keep this session's mode: it couldn't be saved on the server, so the session may fall back to default after idling.",
  Ki = "Switch permission modes away and back once: this session's mode couldn't be saved on the server.",
  Ji = "This session's permission mode couldn't be saved: the server says the session isn't active. Switch modes away and back once it is.";
function Zi(e) {
  return e.outcome === "failed" && (e.cause === "network" || e.cause === "http" && (e.status >= 500 || e.status === 429));
}
function wzt({
  manager: manager_2,
  mode: n,
  surface: surface,
  sessionId: sessionId,
  superseded: superseded,
  observedMode: observedMode,
  seededModeReported: seededModeReported,
  onRefused: onRefused,
  onGaveUp: onGaveUp,
  onTaken: onTaken,
  linkDown: linkDown
}) {
  let x = T => {
      i("tengu_remote_create_permission_mode_push", {
        surface: c(surface),
        mode: c(n),
        kind: c(T.kind),
        posted_mode: c(T.postedMode),
        outcome: c(T.outcome),
        ...("cause" in T && {
          cause: c(T.cause)
        }),
        ...("status" in T && {
          status: T.status
        }),
        ...(T.attempt !== void 0 && {
          attempt: T.attempt
        }),
        session_id: _e(sessionId)
      });
    },
    P = () => {
      let T = observedMode?.();
      return superseded() || T !== void 0 && T !== n && (T !== "default" || (seededModeReported?.() ?? !1));
    },
    H = async (T, kind, A = Date.now(), attempt_2 = 1) => {
      let abortController_5 = new AbortController(),
        N = manager_2.postControlRequest({
          subtype: "set_permission_mode",
          mode: T
        }, {
          answerExpected: !1,
          background: !0,
          timeoutMs: timeoutMs_7,
          signal: abortController_5.signal
        });
      N.response.catch(() => {});
      let result = await N.posted;
      if (x({
        ...result,
        kind: kind,
        postedMode: T,
        attempt: attempt_2
      }), result.outcome === "accepted") return {
        result: result,
        response: N.response
      };
      if (abortController_5.abort(), P()) return x({
        kind: kind,
        postedMode: T,
        outcome: "superseded"
      }), {
        result: result,
        response: null
      };
      let K = Bi[attempt_2 - 1];
      if (K !== void 0 && Zi(result) && Date.now() - A < Gi) {
        if (await Q(K), !P()) return H(T, kind, A, attempt_2 + 1);
        return x({
          kind: kind,
          postedMode: T,
          outcome: "superseded"
        }), {
          result: result,
          response: null
        };
      }
      if (x({
        kind: kind,
        postedMode: T,
        outcome: "gave_up"
      }), m("remote_create_mode_push", `${kind}_gave_up`), !(result.outcome === "failed" && result.cause === "closed")) onGaveUp?.(result.outcome === "session_inactive" ? Ji : kind === "push" ? uJn : Ki);
      return {
        result: result,
        response: null
      };
    },
    V = T => {
      T.then(() => {
        x({
          kind: "push",
          postedMode: n,
          outcome: "taken"
        }), onTaken?.(), _("remote_create_mode_push"), t(`[remote] The session took its create's ${n} permission mode as a live request`);
      }, j => {
        let A = mB(j);
        if (t(`[remote] The create's ${n} permission mode push was not taken (${A}): ${po(l(j), {
          maxCodeUnits: 200
        })}`), !(A === "server_error" || (A === "disconnected" || A === "not_connected") && linkDown !== void 0 && !linkDown())) {
          x({
            kind: "push",
            postedMode: n,
            outcome: "unanswered"
          }), p("remote_create_mode_push", "unanswered");
          return;
        }
        if (x({
          kind: "push",
          postedMode: n,
          outcome: "refused"
        }), p("remote_create_mode_push", "refused"), P() || n === "default") return;
        let U = H("default", "converge");
        U.then(({
          response: response
        }) => response?.catch(B => {
          t(`[remote] The default mode sent after that refusal was not taken either: ${po(l(B), {
            maxCodeUnits: 200
          })}`);
        })), onRefused?.(U.then(({
          result: result_2
        }) => result_2));
      });
    };
  return H(n, "push").then(({
    result: result_3,
    response: response_2
  }) => {
    if (response_2 !== null) V(response_2);
    return result_3;
  });
}
function $3r({
  posted: posted,
  mode: mode,
  latch: latch,
  retire: retire,
  now = Date.now
}) {
  let g = posted.then(k => k.outcome === "accepted", () => !1);
  return g.then(k => {
    if (k) retire();else latch.notTakenAtMs ??= now();
  }), async ({
    submittedAtMs: submittedAtMs
  }) => {
    let w = submittedAtMs ?? now();
    if (await g) return;
    if (w - (latch.notTakenAtMs ?? w) < UEe) return {
      go: !1,
      reason: `the session's ${mode} permission mode couldn't be saved on the server first`
    };
    retire();
    return;
  };
}
var vzt = "Cloud session may be unresponsive. Attempting to reconnect\u2026";
function kzt(e) {
  return e ? 180000 : 60000;
}
export { a1e, abn, lbn, Vgt, cbn, setTimer as dbn, gzt, hzt, yzt, _zt, bzt, reason_2 as aPe, qgt, Ire, Szt, uJn, wzt, $3r, vzt, kzt };