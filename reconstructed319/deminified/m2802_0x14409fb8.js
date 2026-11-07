// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Oo, of, eh } from "B:/~BUN/root/chunk-game8aqv.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { ZA, We, F, wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, oi, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ln, ku, _i, WJ, QFs, Gie, rln, YBt, wtt, rv, Pi, Ppe, di, Un } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Gf } from "B:/~BUN/root/chunk-zstr1969.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { dT } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { kf, ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { ih, cU, Um, Aee } from "B:/~BUN/root/chunk-esnm3r09.js";
import { Pms, Z0i, eLi, tLi, Lce, Nce, _L } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { xQ, Mve, Dve, Zlt, x6t, b5e, RJr, ZAt, cMe, plr, ade, kTn, idt, DQ, jT, aW, y$, LQ, bZo, M_i, PMe, Qve, wde, Mre, OMe, vbi, Ebi, Zve, J5e, mPt, JQ, Lc, uye, PEe, dE, ki, gW, txn, yso, uWe, kW, aas, ATi, Qct, b9e } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { ft } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { hds } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Yoe } from "B:/~BUN/root/chunk-jj9s326a.js";
import { aD } from "B:/~BUN/root/chunk-45td50dx.js";
import { dse } from "B:/~BUN/root/chunk-3vrk9h6f.js";
import { xB } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { m9n, gle } from "B:/~BUN/root/chunk-a32crq0f.js";
import { iBe } from "B:/~BUN/root/chunk-59e03kdq.js";
import { oPe } from "B:/~BUN/root/chunk-ws830w2f.js";
import { VMo } from "B:/~BUN/root/chunk-v6z0cfe2.js";
import { Fme, O4e } from "B:/~BUN/root/chunk-bk8e5jj0.js";
import { ckt } from "B:/~BUN/root/chunk-9995dxwq.js";
import { jg } from "B:/~BUN/root/chunk-28zr9ymz.js";
import { G6 } from "B:/~BUN/root/chunk-48nvqxgd.js";
import { $r } from "B:/~BUN/root/chunk-xbnyqyft.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { o, E, I, oe, C, u, He, Be, Dr, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { AT } from "B:/~BUN/root/chunk-mzfrv3wm.js";
import { fm, nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { hG } from "B:/~BUN/root/chunk-99vcrndq.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function Je(e, n, l) {
  var r = -1,
    s = e.length;
  while (++r < s) {
    var f = e[r],
      d = n(f);
    if (d != null && (S === void 0 ? d === d && !hG(d) : l(d, S))) var S = d,
      y = f;
  }
  return y;
}
var fe = Je;
function qe(e, n) {
  return e < n;
}
var pe = qe;
function Qe(e, n) {
  return e && e.length ? fe(e, AT(n, 2), pe) : void 0;
}
var ge = Qe;
import { dirname as _t, resolve as kt } from "path";
var re = ["own_hooks_differ", "plugin_not_in_load", "hooks_module", "caller_hooks_unread", "manifest_hooks_not_loaded", "hook_keys_differ", "not_the_accounts", "other_copy", "load_error"],
  Se = ["command", "prompt", "agent", "http", "mcp_tool", "script", "mixed", "none"];
import { basename as xe, dirname as rt, join as be } from "path";
var Ze = 1e4,
  Ve = bZo,
  ye = {
    reason: "timed_out"
  };
async function IUr(e) {
  if (!wtt(e)) return {
    reason: "file_absent"
  };
  let hostCatalog = kf().hostCatalog,
    l = hostCatalog.texts.get(e);
  if (l !== void 0) return l;
  let r = hostCatalog.readingForCalls.get(e);
  if (r === void 0) {
    if (Z0i()) return {
      reason: "earlier_work_outstanding"
    };
    if (hostCatalog.readingForCalls.size >= Ve) return {
      reason: "too_many_reads"
    };
    let f = hostCatalog.lastReadForCalls.then(S => et(hostCatalog, e, S));
    hostCatalog.lastReadForCalls = f.then(({
      probed: probed
    }) => probed, () => {
      return;
    }), r = {
      reading: f.then(({
        outcome: outcome
      }) => outcome).finally(() => {
        if (hostCatalog.readingForCalls.delete(e), hostCatalog.readingForCalls.size === 0) hostCatalog.lastReadForCalls = Promise.resolve(void 0);
      }),
      since: performance.now()
    }, hostCatalog.readingForCalls.set(e, r);
  }
  let s = r.since + Ze - performance.now();
  return (s > 0 ? await we(r.reading, s) : void 0) ?? {
    reason: "timed_out"
  };
}
async function et(e, n, l) {
  let r = () => kf().hostCatalog === e;
  if (l === void 0) await ku();
  let outcome_2 = l ?? (await Pms(async () => r() ? eLi() : ye));
  if ("reason" in outcome_2) return {
    outcome: outcome_2,
    probed: void 0
  };
  await ku();
  let outcome_3 = await Pms(async () => {
    let d = r() ? await tLi(outcome_2.root, n, outcome_2.device) : ye;
    if (!("reason" in d)) e.texts.set(n, d);
    return d;
  });
  return {
    outcome: outcome_3,
    probed: "reason" in outcome_3 ? void 0 : outcome_2
  };
}
import { join as tt } from "path";
var Wqs = "ListProjectCommands",
  _e = 8388608,
  K = 2000,
  cn = 4 * _e,
  fn = 4 * K;
var ot = p(() => u({
  after: E().int().min(0).optional(),
  afterName: o().optional()
}));
function se(e) {
  return (e.source === "projectSettings" || e.source === "userSettings") && (e.loadedFrom === "skills" || e.loadedFrom === "commands_DEPRECATED");
}
var ke = p(() => u({
    name: o().min(1).max(1024),
    source: T("userSettings").optional(),
    loadedFrom: B(["skills", "commands_DEPRECATED"]),
    text: o().max(ZAt)
  })),
  pn = p(() => u({
    commands: C(ke()).max(K),
    cut: I(),
    refused: E().int().min(0),
    next: E().int().min(1).optional(),
    nextName: o().max(1024).optional()
  }));
function ae(e) {
  return Fr().skillFiles.get(e) ?? (e.skillRoot ? tt(e.skillRoot, "SKILL.md") : "");
}
async function le(e) {
  let n = ae(e);
  if (n === "") return null;
  try {
    return await dT(ie(), n, ZAt);
  } catch {
    return null;
  }
}
function N$e(e) {
  return Buffer.byteLength(oi(e));
}
async function zqs(e, n, l) {
  let {
      after: after,
      afterName: afterName
    } = ot().parse(e ?? {}),
    {
      storageV5: storageV5
    } = l.toolUseContext();
  if (!after) kW(), ir();
  let d = [...(await uWe(Oo(), storageV5)), ...b9e(), ...Qct()];
  n.throwIfAborted();
  let S = new Set(),
    commands = [],
    _ = 0,
    cut = !1,
    refused = 0,
    k = 0,
    h,
    w = afterName === void 0;
  for (let z of d) {
    if (z.type !== "prompt" || S.has(z.name)) continue;
    S.add(z.name);
    let {
      name: M,
      source: source,
      loadedFrom: loadedFrom
    } = z;
    if (!se(z) || b5e(z) || jT(z)) continue;
    if (k++ < (after ?? 0)) continue;
    if (!w && M !== afterName) break;
    w = !0;
    let text = await le(z);
    n.throwIfAborted();
    let N = ke().safeParse({
      name: M,
      ...(source === "userSettings" && {
        source: source
      }),
      loadedFrom: loadedFrom,
      text: text
    });
    if (!N.success) {
      refused++, t(`ListProjectCommands: ${M} refused from the listing`, {
        level: "warn"
      });
      continue;
    }
    let U = N$e(N.data),
      R = _ + U <= _e;
    if (after !== void 0 && (commands.length === K || !R)) {
      h = {
        next: k - 1,
        nextName: M
      };
      break;
    }
    if (commands.length === K) {
      cut = !0;
      break;
    }
    if (!R) {
      cut = !0;
      continue;
    }
    _ += U, commands.push(N.data);
  }
  if (!w) throw Error("the files have moved since the page before");
  return {
    summary: `${commands.length} commands${cut ? ", cut at a limit" : ""}${refused > 0 ? `, ${refused} refused` : ""}`,
    output: {
      commands: commands,
      cut: cut,
      refused: refused,
      ...h
    }
  };
}
var Gqs = "ReadSkill",
  Vqs = "RenderSkill",
  Kqs = "RenderPinnedSkill",
  qqs = "RenderBuiltInCommand",
  ze = 110000,
  Ee = 2000,
  Y = 1e5,
  it = RJr,
  st = 60000,
  at = 4096,
  Re = 256,
  Me = 256,
  Le = 32768,
  lt = [ft, aD, $r],
  Pe = he({
    last: Promise.resolve()
  }, e => {
    e.last = Promise.resolve();
  }),
  Oe = p(() => T(!0).optional().catch(void 0)),
  ut = p(() => u({
    name: o().min(1).max(1024),
    updatedAt: o().max(64).nullable(),
    waitMs: E().int().min(0).max(ze),
    fromHostCatalog: Oe()
  })),
  Ne = p(() => u({
    outcome: T("missing"),
    syncing: I(),
    fromHostCatalog: T(!0).optional(),
    withheld: T(!0).optional()
  })),
  lo = p(() => Dr("outcome", [u({
    outcome: T("found"),
    text: o().max(jg),
    fromHostCatalog: T(!0).optional()
  }), Ne()])),
  W = p(() => oe().optional()),
  mt = p(() => u({
    name: o().min(1).max(1024),
    args: o().max(Y),
    readOnly: I(),
    waitMs: E().int().min(0).max(ze),
    fromHostCatalog: Oe(),
    expectSha256: o().regex(fm).optional(),
    sessionRules: W()
  })),
  dt = p(() => u({
    name: o().min(1).max(1024),
    args: o().max(Y),
    readOnly: I(),
    sessionRules: W(),
    model: o().min(1).max(256),
    session: u({
      tools: C(o().min(1).max(Re)).max(at).catch([]),
      isSkillPreload: I().optional().catch(void 0),
      modelScheduledOrigin: I().optional().catch(void 0),
      remoteSessionId: o().min(1).max(256).optional().catch(void 0),
      effort: Be([B(_i), E().int().min(0).max(1000)]).optional().catch(void 0)
    }).optional().catch(void 0)
  })),
  q = p(() => u({
    outcome: T("rendered"),
    blocks: C(u({
      type: T("text"),
      text: o().max(it)
    })).max(16),
    handedOff: C(He({
      command: o().min(1).max(Le),
      tool: o().max(Re)
    })).max(Me).optional(),
    fromHostCatalog: T(!0).optional()
  })),
  de = p(() => u({
    outcome: T("failed"),
    message: o().max(Ee)
  })),
  uo = p(() => Dr("outcome", [q(), Ne(), de()]));
async function Yqs(e, n, {
  toolUseContext: toolUseContext
}) {
  let {
      name: name,
      updatedAt: updatedAt,
      waitMs: waitMs,
      fromHostCatalog: fromHostCatalog
    } = ut().parse(e),
    S = fromHostCatalog ? await Te(name) : await ue(name, waitMs, n, toolUseContext(), updatedAt),
    y = S && Mun(S);
  if (y !== void 0) return {
    summary: "no such skill",
    output: X(y, fromHostCatalog)
  };
  let text_2 = fromHostCatalog ? S?.getLoadedSkillMd?.() ?? null : S?.skillRoot === void 0 ? null : await dT(ie(), be(S.skillRoot, "SKILL.md"), jg).catch(() => null);
  return text_2 === null ? {
    summary: "no such skill",
    output: X(void 0, fromHostCatalog)
  } : {
    summary: "found",
    output: {
      outcome: "found",
      text: text_2,
      ...(fromHostCatalog && {
        fromHostCatalog: fromHostCatalog
      })
    }
  };
}
async function $Mo(e, n, {
  toolUseContext: toolUseContext_2,
  launchPermissionContext: launchPermissionContext
}) {
  let {
      name: name_2,
      args: args,
      readOnly: readOnly,
      waitMs: waitMs_2,
      fromHostCatalog: fromHostCatalog_2,
      expectSha256: expectSha256,
      sessionRules: sessionRules
    } = mt().parse(e),
    P = await Z(toolUseContext_2(), readOnly, sessionRules, launchPermissionContext, e),
    k = fromHostCatalog_2 ? await Te(name_2) : await ue(name_2, waitMs_2, n, P);
  if (k !== void 0 && se(k)) kW(), k = await ue(name_2, waitMs_2, n, P);
  let h = k && Mun(k);
  if (k === void 0 || h !== void 0) return {
    summary: "no such skill",
    output: X(h, fromHostCatalog_2)
  };
  if (expectSha256 !== void 0) {
    if (k = await ct(k, expectSha256), k === void 0 || Mun(k) !== void 0) return {
      summary: "changed since listed",
      output: {
        outcome: "failed",
        message: "this skill's file changed after the session listed it, so it was not rendered; a new session lists the current file"
      }
    };
  }
  let w = await V(k, args, P, n);
  return fromHostCatalog_2 && w.output.outcome === "rendered" ? {
    ...w,
    output: {
      ...w.output,
      fromHostCatalog: fromHostCatalog_2
    }
  } : w;
}
async function Z(e, n, l, r, s) {
  if (!n && l === void 0) return e;
  let f = n ? void 0 : await oPe("The render", s),
    d = f === void 0 || f.refused !== void 0 ? void 0 : VMo(l, r, f.repoRules);
  if (d === void 0) return {
    ...e,
    options: {
      ...e.options,
      readOnlySkillLoad: !0
    }
  };
  let {
    toolPermissionContext: toolPermissionContext
  } = d;
  return {
    ...e,
    getAppState: () => ({
      ...Fme(),
      toolPermissionContext: toolPermissionContext
    }),
    ...(d.offersHandOff && {
      promptShellHandOff: []
    }),
    ...(d.classifiesEveryCall && {
      promptShellCallerClassifiesAll: !0
    })
  };
}
async function ct(e, n) {
  let content = aW(e) ? e.getLoadedSkillMd?.() ?? null : await le(e);
  if (content === null || nt(content) !== n) return;
  try {
    let r = yso({
      content: content,
      skillFilePath: ae(e),
      skillName: e.name,
      source: e.source,
      baseDir: e.skillRoot,
      loadedFrom: e.loadedFrom ?? "skills",
      serverAttribution: e.serverAttribution
    });
    return r?.type === "prompt" ? r : void 0;
  } catch (error) {
    a(F(error));
    return;
  }
}
async function Xqs(e, n, {
  toolUseContext: toolUseContext_3,
  launchPermissionContext: launchPermissionContext_2
}) {
  let {
      name: name_3,
      args: args_2,
      readOnly: readOnly_2,
      sessionRules: sessionRules_2,
      model: y,
      session: session
    } = dt().parse(e),
    x = await Z(toolUseContext_3(), readOnly_2, sessionRules_2, launchPermissionContext_2, e),
    effort = session?.effort,
    k = {
      ...x,
      ...(effort !== void 0 && {
        permissionLayers: [...(x.permissionLayers ?? []), {
          kind: "effort",
          effort: effort
        }]
      }),
      options: {
        ...x.options,
        mainLoopModel: y,
        ...(session && {
          tools: [...x.options.tools, ...O4e(!1).filter(item => lt.some(z => ht(item, z)) && session.tools.some(z => ht(item, z)) && !x.options.tools.some(z => ht(z, item.name)))],
          isSkillPreload: session.isSkillPreload,
          modelScheduledOrigin: session.modelScheduledOrigin
        })
      }
    },
    h = pt(name_3);
  if (h === void 0 || Mun(h) !== void 0) return {
    summary: "no such command",
    output: X()
  };
  return gt(y, () => M_i(session?.remoteSessionId, () => V(h, args_2, k, n)));
}
function pt(e) {
  iBe();
  for (let n of [...dse(), ...JQ()]) if (n.type === "prompt" && n.name === e && hds(n)) return n;
  return;
}
async function gt(e, n) {
  let l = Pe.last.then(async () => {
    let r = of();
    eh(e);
    try {
      return await n();
    } finally {
      eh(r);
    }
  });
  return Pe.last = l.then(() => {
    return;
  }, () => {
    return;
  }), l;
}
async function V(e, n, l, r) {
  try {
    let s = await e.getPromptForCommand(n, l),
      blocks = s.flatMap(item => item.type === "text" ? [{
        type: item.type,
        text: item.text
      }] : []),
      d = q().safeParse({
        outcome: "rendered",
        blocks: blocks,
        ...(l.promptShellHandOff?.length && {
          handedOff: l.promptShellHandOff
        })
      });
    if (blocks.length !== s.length || !d.success) return {
      summary: "render refused",
      output: {
        outcome: "failed",
        message: l.promptShellHandOff?.length ? `the rendered skill is not plain text of a usable size, or it leaves Claude more than ${Me} inline shell commands or one longer than ${Le} characters` : "the rendered skill is not plain text of a usable size"
      }
    };
    return {
      summary: "rendered",
      output: d.data
    };
  } catch (error) {
    if (We(error) || r.aborted) throw error;
    if (!(error instanceof ZA)) a(F(error));
    return {
      summary: "render failed",
      output: {
        outcome: "failed",
        message: error instanceof ZA ? Q(error.message, Ee) : "the skill could not be rendered"
      }
    };
  }
}
function X(e, fromHostCatalog_3) {
  return {
    outcome: "missing",
    syncing: kf().firstSyncPromise !== null,
    ...(e === "account_skill_off" && {
      withheld: !0
    }),
    ...(fromHostCatalog_3 && {
      fromHostCatalog: fromHostCatalog_3
    })
  };
}
async function ue(e, n, l, r, s = null) {
  let f = kf(),
    d = J(n, l, {
      unref: !0
    }),
    S = P => Promise.race([P.catch(() => {
      return;
    }), d]),
    y = await Dun(e, r, s),
    _ = rv(e);
  if (y === void 0 && plr(_)) await S(cMe(_)), l.throwIfAborted(), y = await Dun(e, r, s);
  if (y !== void 0 || !f.firstSyncPromise) return y;
  let firstSyncPromise = f.firstSyncPromise;
  if (f.firstRoundSettled) {
    let P = Date.now();
    if (P - f.missingSkillResyncAt >= st) {
      f.missingSkillResyncAt = P;
      let k = m9n(r.session, r.storageV5, r.credentials, {
        keepLandingWaits: !0
      }).finally(() => {
        if (f.missingSkillResync === k) f.missingSkillResync = null;
      });
      f.missingSkillResync = k;
    }
    firstSyncPromise = f.missingSkillResync ?? f.syncPromise;
  }
  if (!firstSyncPromise) return;
  return await S(firstSyncPromise), l.throwIfAborted(), gle(), Dun(e, r, s);
}
async function Te(e) {
  let n = rv(e);
  if (!wtt(n) || !aas()) return;
  let hostCatalog_2 = kf().hostCatalog,
    asked = {
      fromMemory: hostCatalog_2.texts.has(n),
      inLine: hostCatalog_2.readingForCalls.size,
      at: performance.now()
    },
    served,
    miss,
    threw = !1;
  try {
    let S = await IUr(n);
    if ("reason" in S) miss = S;else {
      let y = ATi(S);
      served = y?.type === "prompt" && y.name === e ? y : void 0;
    }
  } catch (error) {
    threw = !0, a(F(error));
  } finally {
    try {
      yt({
        served: served,
        miss: miss,
        threw: threw,
        asked: asked
      });
    } catch (error) {
      a(F(error));
    }
  }
  return served;
}
var St = new Set(["timed_out", "earlier_work_outstanding", "too_many_reads"]);
function yt({
  served: served_2,
  miss: miss_2,
  threw: threw_2,
  asked: asked_2
}) {
  let s = served_2 !== void 0 && LQ(served_2),
    f = {
      from: b("call"),
      named: 1,
      loaded: served_2 === void 0 ? 0 : 1,
      withheld: s ? 1 : 0,
      from_memory: asked_2.fromMemory,
      in_line: asked_2.inLine,
      waited_ms: Math.round(performance.now() - asked_2.at),
      ...(miss_2 !== void 0 && {
        [`mount_miss_${miss_2.reason}`]: 1
      }),
      ...(threw_2 && {
        threw: threw_2
      })
    };
  if (s) c("skill_host_catalog", "all_withheld", f);else if (served_2 !== void 0) g("skill_host_catalog", f);else m("skill_host_catalog", miss_2 !== void 0 && St.has(miss_2.reason) ? "not_in_time" : "none_loaded", f);
}
function Mun(e) {
  ir();
  let n = y$(e);
  if (jT(e)) return n ? "account_skill_off" : "other";
  if (b5e(e)) return "other";
  return PMe(e) ? "other" : void 0;
}
async function Dun(e, n, l) {
  let r = rv(e) !== e,
    s = await uWe(Oo(), n.storageV5);
  for (let f of [...s, ...b9e(), ...Qct()]) if (f.type === "prompt" && f.name === e && (f.loadedFrom === "syncedSkills" || !r) && !aW(f)) return (await Ct(f, l)) ? void 0 : f;
  return;
}
async function Ct(e, n) {
  if (n === null || e.loadedFrom !== "syncedSkills" || e.skillRoot === void 0) return !1;
  let l = rt(e.skillRoot),
    r = await Mve(be(l, cU), null),
    s = r === null ? null : Dve(r, x6t(), null);
  if (s === null) return !1;
  let f = Um(xe(e.skillRoot)),
    d = !1;
  for (let S of xQ(Zlt(), s.skills)) {
    try {
      if (Um(xe(Aee(S.name, l))) !== f) continue;
    } catch {
      continue;
    }
    if (S.updatedAt === Lce) {
      d = !0;
      continue;
    }
    return S.updatedAt !== null && Date.parse(S.updatedAt) < Date.parse(n);
  }
  return d;
}
var Jqs = "ListPluginCommands",
  Qqs = "RenderPluginCommand",
  Zqs = "RenderPinnedPluginCommand",
  bytes = 12582912,
  members = 500000,
  wt = 60000,
  bt = p(() => Be([rln(), u({
    source: T("claudeai"),
    marketplaceId: o(),
    organizationUuid: o(),
    scope: B(YBt).optional()
  }), u({
    source: T("pluginDirectory")
  })])),
  zt = p(() => u({
    commandName: o(),
    filePath: o(),
    baseDir: o(),
    sourceName: o(),
    pluginManifest: Gie(),
    pluginPath: o(),
    provenance: u({
      officiallyAttested: I().optional(),
      marketplaceSource: bt().optional(),
      npmResolution: u({
        packageName: o(),
        tarballUrl: o()
      }).optional(),
      home: o().optional()
    }).optional(),
    isSkill: I(),
    config: u({
      isSkillMode: I(),
      serverAttribution: u({
        skillId: o().optional(),
        pluginId: o().optional()
      }).optional(),
      metadata: QFs().optional()
    })
  })),
  Et = p(() => u({
    filePath: o(),
    pluginName: o(),
    namespace: C(o()).readonly(),
    sourceName: o(),
    pluginPath: o(),
    pluginManifest: Gie()
  })),
  Ue = p(() => o().refine(e => kt(e) === e && _t(e) !== e).optional().catch(void 0)),
  Ie = p(() => u({
    source: zt(),
    text: o(),
    chars: E().int().min(0).max(OMe).optional().catch(void 0),
    pluginDataDir: Ue(),
    sha256: o().regex(fm).optional().catch(void 0)
  })),
  Zo = p(() => u({
    commands: C(Ie()),
    skills: C(Ie()),
    agents: C(u({
      source: Et(),
      text: o(),
      pluginDataDir: Ue()
    })),
    resynced: I().optional(),
    syncsSessionRefs: I().optional(),
    settingsRan: I().optional(),
    comparesSource: I().optional(),
    cut: E().int().min(0).optional()
  })),
  MUr = p(() => C(o().max(64000)).max(1000).nullable().optional().catch(null)),
  At = p(() => u({
    registeredHooks: me(o(), MUr()).optional().catch(void 0),
    resync: I().optional(),
    waitMs: E().int().positive().optional().catch(void 0),
    hashes: I().optional().catch(void 0),
    dataDirs: I().optional().catch(void 0),
    headsExcept: C(o()).optional().catch(void 0)
  }));
async function e4s(e, n, l) {
  let r = At().safeParse(e ?? {}).data,
    resync = r?.resync === !0,
    {
      session: session_2,
      storageV5: storageV5_2,
      credentials: credentials
    } = l.toolUseContext(),
    y = r?.registeredHooks;
  ir();
  let deadline = J(Math.min(ade(), r?.waitMs ?? 1 / 0), n, {
      unref: !0
    }),
    {
      resynced: resynced
    } = await UMo(session_2, credentials, {
      resync: resync,
      deadline: deadline
    });
  n.throwIfAborted(), Lc(storageV5_2, credentials);
  let settingsRan = await Promise.race([BMo(session_2, storageV5_2, credentials), deadline.then(() => !1)]);
  n.throwIfAborted();
  let [k, h, w] = await Promise.all([Zve(storageV5_2), J5e(storageV5_2), ur("agents") ? [] : mPt(storageV5_2, credentials)]),
    z = await ki(storageV5_2, credentials),
    loaded = session_2.pluginsSync.settingsInstall.loaded;
  await txn([...z.enabled, ...(loaded?.plugins.enabled ?? [])], storageV5_2).catch(a);
  let O = Xe(z, loaded?.plugins),
    v = await ne([...Fe(w, z, y), ...(loaded === null ? [] : Fe(loaded.agents, loaded.plugins, y, O))]),
    j = await gW(storageV5_2),
    N = new Set(v.map(({
      source: source_2
    }) => source_2.sourceName));
  for (let {
    source: source_3
  } of j.enabled) N.delete(source_3);
  let U = await Ke([...z.enabled, ...(loaded?.plugins.enabled ?? [])].filter(item => N.has(item.source)), storageV5_2),
    R = r?.hashes === !0 ? Nt : Ot,
    D = A => r?.dataDirs === !0 ? Tt(A) : A,
    H = r?.headsExcept && {
      bytes: bytes,
      members: members,
      cut: 0
    },
    output = {
      commands: D(je(R(await ne([...te(k), ...te(loaded?.commands ?? [], O)], r?.hashes === !0)), r?.headsExcept)).filter(item => ce(item, H)),
      skills: D(je(R(await ne([...te(h), ...te(loaded?.skills ?? [], O)])), r?.headsExcept)).filter(item => ce(item, H)),
      agents: D(v.filter(({
        source: source_4
      }) => !LWt(source_4, N.has(source_4.sourceName) ? U : j, y?.[PEe(source_4.pluginPath)]))).filter(item => ce(item, H)),
      resynced: resynced,
      syncsSessionRefs: _L(session_2),
      settingsRan: settingsRan,
      comparesSource: !0,
      cut: H?.cut
    };
  return {
    summary: `${output.commands.length} commands, ${output.skills.length} skills, ${output.agents.length} agents${H?.cut ? `, ${H.cut} left out: the answer has no room for them` : ""}`,
    output: output
  };
}
async function UMo(e, n, {
  resync: resync_2,
  deadline: deadline_2
}) {
  let s = await Promise.race([kTn(e, n).catch(() => !1), deadline_2.then(() => {
    return;
  })]);
  if (s !== !1 && !(resync_2 && s !== void 0)) return {
    resynced: !1
  };
  return {
    resynced: (await Promise.race([idt(e, n).then(() => !0, () => !1), deadline_2.then(() => !1)])) && e.pluginsSync.lastRoundListed
  };
}
function BMo(e, n, l) {
  if (ur("plugins")) return Promise.resolve(!0);
  let settingsInstall = e.pluginsSync.settingsInstall;
  return settingsInstall.next ??= Rt(e, n, l).then(() => !0, s => (a(s), !1)), settingsInstall.next;
}
async function Rt(e, n, l) {
  let settingsInstall_2 = e.pluginsSync.settingsInstall;
  await settingsInstall_2.current, settingsInstall_2.current = settingsInstall_2.next, settingsInstall_2.next = null, await Promise.allSettled([xB()]), i.unset("CLAUDE_CODE_SYNC_PLUGIN_INSTALL"), await Promise.allSettled([ckt(void 0, n, l), e.pluginsSync.firstSyncPromise]), Lc(n, l);
  let s = dE(n, l);
  await s, Lc(n, l, "caller"), Ae().pluginLoadCacheOnly = s;
  let f = Promise.all([Zve(n), J5e(n), ur("agents") ? [] : mPt(n, l), s]);
  Lc(n, l);
  let [commands_2, skills, agents, plugins] = await f;
  settingsInstall_2.loaded = {
    commands: commands_2,
    skills: skills,
    agents: agents,
    plugins: plugins
  };
}
var Mt = p(() => u({
    name: o().min(1).max(1024),
    listedAs: B(["command", "skill"]),
    args: o().max(Y),
    readOnly: I(),
    sessionRules: W(),
    sourceName: o().max(1024).optional(),
    registeredHooks: MUr(),
    ownHooksSha256: o().optional().catch(void 0),
    expectSha256: o().regex(fm).optional()
  })),
  Vo = p(() => Dr("outcome", [q().extend({
    sourceName: o().optional()
  }), de().extend({
    sourceName: o().optional()
  }), u({
    outcome: T("missing")
  }), u({
    outcome: T("changed")
  }), u({
    outcome: T("guarded"),
    why: B(re).optional().catch(void 0),
    unheldHooks: B(Se).optional().catch(void 0)
  })]));
async function jMo(e, n, l) {
  let {
      name: name_4,
      listedAs: listedAs,
      args: args_3,
      readOnly: readOnly_3,
      sessionRules: sessionRules_3,
      sourceName: sourceName,
      registeredHooks: registeredHooks,
      ownHooksSha256: ownHooksSha256,
      expectSha256: expectSha256_2
    } = Mt().parse(e),
    k = l.toolUseContext(),
    h = await ee(name_4, listedAs, k);
  if (h === void 0) {
    let R = J(ade(), n, {
      unref: !0
    });
    if (await DWt(l, n, async () => (h = await ee(name_4, listedAs, k), h !== void 0)), h ??= await ee(name_4, listedAs, k), h === void 0) {
      let settingsInstall_3 = k.session.pluginsSync.settingsInstall;
      await Promise.race([settingsInstall_3.next ?? settingsInstall_3.current, R]), n.throwIfAborted(), h = await ee(name_4, listedAs, k);
    }
  }
  let w = h?.command,
    z = !1;
  if (w !== void 0 && expectSha256_2 !== void 0) {
    let [R] = w.pluginSource === void 0 ? [] : await ne([w.pluginSource], !0, H => {
        z = !wr(H);
      }),
      D = R !== void 0 && Ge(R.source, R.text) === expectSha256_2 ? Ebi(R.source, R.text) : null;
    w = D?.type === "prompt" ? D : void 0;
  }
  let M = await Z(k, readOnly_3 || WJ(w?.hooks), sessionRules_3, l.launchPermissionContext, e);
  ir();
  let O = h === void 0 ? void 0 : await Qve(h.command);
  if (ir(), h === void 0 || Ye(h.command) || (sourceName ?? h.command.pluginSource?.sourceName) !== h.command.pluginSource?.sourceName || di(h.command.pluginSource?.sourceName ?? "") === Pi && Nce()) return {
    summary: "no such plugin entry",
    output: {
      outcome: "missing"
    }
  };
  if (Mre(O)) return wde(h.command, O), {
    summary: "no such plugin entry",
    output: {
      outcome: "missing"
    }
  };
  let {
    judgedBy: judgedBy
  } = h;
  if (z) return {
    summary: "entry not read",
    output: {
      outcome: "failed",
      message: "its file could not be read where its plugin is kept, so it was not run",
      sourceName: h.command.pluginSource?.sourceName
    }
  };
  if (w === void 0) return {
    summary: "changed since listed",
    output: {
      outcome: "changed"
    }
  };
  let j = ownHooksSha256 !== (w.hooks && Lt(w.hooks)) ? {
    why: "own_hooks_differ"
  } : ge(judgedBy.flatMap(item => $e(w.pluginSource, item, registeredHooks) ?? []), R => re.indexOf(R.why));
  if (j !== void 0) return {
    summary: "guarded entry",
    output: {
      outcome: "guarded",
      ...j
    }
  };
  let {
    summary: summary,
    output: output_2
  } = await V(w, args_3, M, n);
  return {
    summary: summary,
    output: {
      ...output_2,
      sourceName: w.pluginSource?.sourceName
    }
  };
}
function Lt(e) {
  return nt(G6(e));
}
function Ge(e, n) {
  let {
    serverAttribution: serverAttribution,
    ...config
  } = e.config;
  return nt(nt(n) + G6({
    ...e,
    config: config
  }));
}
async function ee(e, n, {
  session: session_3,
  storageV5: storageV5_3,
  credentials: credentials_2
}) {
  let f = De(await (n === "skill" ? J5e : Zve)(storageV5_3), e),
    loaded_2 = session_3.pluginsSync.settingsInstall.loaded,
    S = f ? await ki(storageV5_3, credentials_2) : loaded_2?.plugins;
  if (S === void 0) return;
  ir();
  let y = await gW(storageV5_3),
    _ = Xe(y, S),
    command = f ?? De((n === "skill" ? loaded_2?.skills : loaded_2?.commands) ?? [], e, _),
    P = command?.pluginSource?.sourceName ?? "",
    k = y.enabled.some(item => item.source === P);
  if (command === void 0 || !(k || _.has(P))) return;
  return {
    command: command,
    judgedBy: [S, k ? y : await Ke(S.enabled.filter(item => item.source === P), storageV5_3)]
  };
}
async function Ke(e, n) {
  let l = await Promise.allSettled(e.map(({
    path: path,
    source: source_5,
    name: name_5
  }) => uye(path, source_5, !0, name_5, !0, n, void 0, {
    noTelemetry: !0
  })));
  return {
    enabled: l.flatMap(item => item.status === "fulfilled" ? [item.value.plugin] : []),
    errors: l.flatMap(item => item.status === "fulfilled" ? item.value.errors : [])
  };
}
function De(e, n, l) {
  for (let r of e) if (r.type === "prompt" && r.name === n && r.pluginSource !== void 0 && !Gf(r.pluginSource.sourceName) && l?.has(r.pluginSource.sourceName) !== !1) return r;
  return;
}
async function DWt(e, n, l) {
  let {
      session: session_4,
      storageV5: storageV5_4,
      credentials: credentials_3
    } = e.toolUseContext(),
    missingEntry = session_4.pluginsSync.missingEntry,
    S = J(ade(), n, {
      unref: !0
    }).then(() => {
      return;
    }),
    y = await Promise.race([kTn(session_4, credentials_3).catch(() => !1), S]);
  if (n.throwIfAborted(), y === void 0) return !1;
  let _ = () => {
    if (missingEntry.resync === null && !missingEntry.swept) missingEntry.swept = !0, Lc(storageV5_4, credentials_3);
  };
  if (_(), y && (await l())) return !1;
  if (n.throwIfAborted(), missingEntry.resync === null && Date.now() - missingEntry.resyncAt >= wt) {
    missingEntry.resyncAt = Date.now();
    let P = idt(session_4, credentials_3).catch(() => !1).finally(() => {
      missingEntry.resync = null, missingEntry.swept = !1;
    });
    missingEntry.resync = P;
  }
  let resync_3 = missingEntry.resync;
  if (resync_3 !== null) await Promise.race([resync_3, S]), n.throwIfAborted();
  return _(), resync_3 !== null && missingEntry.resync !== resync_3;
}
function Xe({
  enabled: enabled,
  errors: errors
}, l) {
  let r = new Set(enabled.flatMap(Ppe).map(Un)),
    s = new Set();
  for (let d of errors) if (d.type === "plugin-cache-miss") s.add(d.source);
  let f = new Set();
  for (let d of l?.enabled ?? []) if (s.has(d.source) && !r.has(Un(d.name))) f.add(d.source);
  return f;
}
function te(e, n) {
  return e.flatMap(item => item.type === "prompt" && item.pluginSource !== void 0 && !Gf(item.pluginSource.sourceName) && n?.has(item.pluginSource.sourceName) !== !1 && !Ye(item) ? [item.pluginSource] : []);
}
function Ye(e) {
  return e.type === "prompt" && e.pluginInfo?.followsSyncedSkillState === !0 && DQ(e);
}
function Fe(e, n, l, r) {
  return e.flatMap(item => item.source === "plugin" && item.pluginSource !== void 0 && !Gf(item.pluginSource.sourceName) && r?.has(item.pluginSource.sourceName) !== !1 && !LWt(item.pluginSource, n, l?.[PEe(item.pluginSource.pluginPath)]) ? [item.pluginSource] : []);
}
function Ot(e) {
  return e;
}
function Nt(e) {
  return e.map(item => ({
    ...item,
    sha256: Ge(item.source, item.text)
  }));
}
function je(e, n) {
  if (n === void 0) return e;
  let l = new Set(n);
  return e.map(item => l.has(item.source.commandName) || item.text.length > OMe ? item : {
    ...item,
    text: vbi(item.text).head,
    chars: item.text.length
  });
}
function ce(e, n) {
  if (n === void 0) return !0;
  let l = oi(e),
    r = Buffer.byteLength(l),
    s = Yoe(l, n.members, 0)?.members;
  if (s === void 0 || r > n.bytes) return n.cut++, !1;
  return n.bytes -= r, n.members -= s, !0;
}
function Tt(e) {
  return e.map(item => ({
    ...item,
    pluginDataDir: ih(item.source.sourceName)
  }));
}
async function ne(e, n = !1, l) {
  let r = ie();
  return (await Promise.all(e.map(async f => {
    let d = f.config?.metadata?.content,
      text_3 = (n && d === "" ? void 0 : d) ?? (await dT(r, f.filePath, OMe).catch(_ => (l?.(_), null)));
    if (text_3 === null) return t(`ListPluginCommands: ${f.filePath} could not be read again`, {
      level: "warn"
    }), [];
    return [{
      source: f,
      text: text_3
    }];
  }))).flat();
}
var It = new Set(["commands", "agents", "skills", "output-styles", "themes", "workflows"]);
function LWt(...e) {
  return $e(...e) !== void 0;
}
function $e(e, {
  enabled: enabled_2,
  errors: errors_2
}, r) {
  let s = enabled_2.find(item => item.source === e?.sourceName);
  if (s === void 0) return {
    why: "plugin_not_in_load"
  };
  if (s.modulePath !== void 0) return {
    why: "hooks_module"
  };
  if (r === null) return {
    why: "caller_hooks_unread"
  };
  let f = s.hooksConfig === void 0 ? s.manifest.hooks === void 0 && [] : ve(s.hooksConfig);
  if (!f) return {
    why: "manifest_hooks_not_loaded"
  };
  if (!ln(f, r?.toSorted() ?? [])) {
    let d = new Set(r),
      [S = "none", ...y] = L(Object.entries(s.hooksConfig ?? {}).flatMap(([_, x]) => (x ?? []).flatMap(({
        matcher: matcher,
        hooks: hooks
      }) => hooks.filter(item => !ve({
        [_]: [{
          matcher: matcher,
          hooks: [item]
        }]
      }).some(item => d.has(item))).map(item => item.type))));
    return {
      why: "hook_keys_differ",
      unheldHooks: y.length > 0 ? "mixed" : S
    };
  }
  if (f.length > 0 && di(s.source) !== Pi) return {
    why: "not_the_accounts"
  };
  if (f.length > 0 && s.path !== e?.pluginPath) return {
    why: "other_copy"
  };
  return errors_2.some(item => "plugin" in item && item.plugin === s.name && !(item.type === "path-traversal" && It.has(item.component))) ? {
    why: "load_error"
  } : void 0;
}
function ve(e) {
  let n = [];
  for (let [l, r] of Object.entries(e)) for (let {
    matcher: matcher_2,
    hooks: hooks_2
  } of r ?? []) for (let d of hooks_2) n.push(G6([l, matcher_2 ?? "", "onFailure" in d && d.onFailure === "block" ? vo(d, ["cloud"]) : vo(d, ["cloud", "onFailure"])]));
  return L(n).sort();
}
export { IUr, Wqs, N$e, zqs, Gqs, Vqs, Kqs, qqs, Yqs, $Mo, Xqs, Mun, Dun, Jqs, Qqs, Zqs, MUr, e4s, UMo, BMo, jMo, DWt, LWt };