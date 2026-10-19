// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nn, Qr, gc, Bp } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { pT, Ve, H, qi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { hr } from "B:/~BUN/root/chunk-7gwemd3j.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Bi, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { is, Yg, ta, G$o, jJ, $Bt, I_t, GBt, nT, Pi, yhe, Oi, rr } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Df } from "B:/~BUN/root/chunk-h2myanpn.js";
import { xr } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { XT } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { SD, Zf, b3 } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { _Be, kee, sO } from "B:/~BUN/root/chunk-8gzvb73z.js";
import { uh, cp, Wvo, vOs, kOs, EOs } from "B:/~BUN/root/chunk-72n790j1.js";
import { Awo, qPe, SN, gM, eK, Pwo } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { ag } from "B:/~BUN/root/chunk-472kxa0t.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { XY, Cue, Rue, sYe, yAt, lmr, Iit, lse, dSe, A0n, sZ, V8t, gYe, mC, tms, ASe, Que, fZ, Zue, xHe, xms, epe, PHe, Eat, f6, cd, $se, S$e, lw, Ys, rwe, dQt, Pwr, Wxe, Mq, Cmo, Xbs, z$e, G$e } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { ht } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { vt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { gx } from "B:/~BUN/root/chunk-qj8q07z1.js";
import { _X } from "B:/~BUN/root/chunk-8zz6429p.js";
import { E1 } from "B:/~BUN/root/chunk-hw809fek.js";
import { Mvn, yce } from "B:/~BUN/root/chunk-9f50y83h.js";
import { bRe } from "B:/~BUN/root/chunk-j9be31pr.js";
import { YWr } from "B:/~BUN/root/chunk-5xe63htx.js";
import { wre, TWt } from "B:/~BUN/root/chunk-90mm1g9e.js";
import { Pet } from "B:/~BUN/root/chunk-dszcj90e.js";
import { go } from "B:/~BUN/root/chunk-y59h61rh.js";
import { o, v, M, oe, T, u, De, $e, Jr, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { U_, st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { dirname as ot, resolve as rt } from "path";
import { basename as pe, dirname as Ue, join as Se } from "path";
var Oe = 1e4,
  Te = Pwo,
  le = {
    reason: "timed_out"
  };
async function ue(e) {
  if (!GBt(e)) return {
    reason: "file_absent"
  };
  let hostCatalog = cp().hostCatalog,
    s = hostCatalog.texts.get(e);
  if (s !== void 0) return s;
  let r = hostCatalog.readingForCalls.get(e);
  if (r === void 0) {
    if (vOs()) return {
      reason: "earlier_work_outstanding"
    };
    if (hostCatalog.readingForCalls.size >= Te) return {
      reason: "too_many_reads"
    };
    let d = hostCatalog.lastReadForCalls.then(S => Ie(hostCatalog, e, S));
    hostCatalog.lastReadForCalls = d.then(({
      probed: probed
    }) => probed, () => {
      return;
    }), r = {
      reading: d.then(({
        outcome: outcome
      }) => outcome).finally(() => {
        if (hostCatalog.readingForCalls.delete(e), hostCatalog.readingForCalls.size === 0) hostCatalog.lastReadForCalls = Promise.resolve(void 0);
      }),
      since: performance.now()
    }, hostCatalog.readingForCalls.set(e, r);
  }
  let i = r.since + Oe - performance.now();
  return (i > 0 ? await je(r.reading, i) : void 0) ?? {
    reason: "timed_out"
  };
}
async function Ie(e, n, s) {
  let r = () => cp().hostCatalog === e;
  if (s === void 0) await Yg();
  let outcome_2 = s ?? (await Wvo(async () => r() ? kOs() : le));
  if ("reason" in outcome_2) return {
    outcome: outcome_2,
    probed: void 0
  };
  await Yg();
  let outcome_3 = await Wvo(async () => {
    let c = r() ? await EOs(outcome_2.root, n, outcome_2.device) : le;
    if (!("reason" in c)) e.texts.set(n, c);
    return c;
  });
  return {
    outcome: outcome_3,
    probed: "reason" in outcome_3 ? void 0 : outcome_2
  };
}
import { join as Fe } from "path";
var nKo = "ListProjectCommands",
  ve = 8388608,
  de = 2000,
  ce = f(() => u({
    name: o().min(1).max(1024),
    loadedFrom: U(["skills", "commands_DEPRECATED"]),
    text: o().max(Iit)
  })),
  Ht = f(() => u({
    commands: T(ce()).max(de),
    cut: M(),
    refused: v().int().min(0)
  }));
function V(e) {
  return hr().skillFiles.get(e) ?? (e.skillRoot ? Fe(e.skillRoot, "SKILL.md") : "");
}
async function ee(e) {
  let n = V(e);
  if (n === "") return null;
  try {
    return await XT(se(), n, Iit);
  } catch {
    return null;
  }
}
function ket(e) {
  return Buffer.byteLength(Bi(e));
}
async function rKo(e, n, s) {
  let {
    storageV5: storageV5
  } = s.toolUseContext();
  Mq(), dr();
  let i = [...(await Wxe(Qr(), storageV5)), ...G$e(), ...z$e()];
  n.throwIfAborted();
  let d = new Set(),
    commands = [],
    S = 0,
    cut = !1,
    refused = 0;
  for (let P of i) {
    if (P.type !== "prompt" || d.has(P.name)) continue;
    d.add(P.name);
    let {
      name: name,
      loadedFrom: loadedFrom
    } = P;
    if (P.source !== "projectSettings" || loadedFrom !== "skills" && loadedFrom !== "commands_DEPRECATED" || qPe(P) || mC(P)) continue;
    let text = await ee(P);
    n.throwIfAborted();
    let z = ce().safeParse({
      name: name,
      loadedFrom: loadedFrom,
      text: text
    });
    if (!z.success) {
      refused++, t(`ListProjectCommands: ${name} refused from the listing`, {
        level: "warn"
      });
      continue;
    }
    if (commands.length === de) {
      cut = !0;
      break;
    }
    let w = ket(z.data);
    if (S + w > ve) {
      cut = !0;
      continue;
    }
    S += w, commands.push(z.data);
  }
  return {
    summary: `${commands.length} commands${cut ? ", cut at a limit" : ""}${refused > 0 ? `, ${refused} refused` : ""}`,
    output: {
      commands: commands,
      cut: cut,
      refused: refused
    }
  };
}
var oKo = "ReadSkill",
  sKo = "RenderSkill",
  iKo = "RenderPinnedSkill",
  aKo = "RenderBuiltInCommand",
  ye = 110000,
  Ce = 2000,
  j = 1e5,
  Be = lmr,
  Ge = 60000,
  Xe = 4096,
  he = 256,
  _e = 256,
  Pe = 32768,
  Ke = [ht, gx, go],
  ge = He({
    last: Promise.resolve()
  }, e => {
    e.last = Promise.resolve();
  }),
  ke = f(() => C(!0).optional().catch(void 0)),
  Ye = f(() => u({
    name: o().min(1).max(1024),
    updatedAt: o().max(64).nullable(),
    waitMs: v().int().min(0).max(ye),
    fromHostCatalog: ke()
  })),
  xe = f(() => u({
    outcome: C("missing"),
    syncing: M(),
    fromHostCatalog: C(!0).optional(),
    withheld: C(!0).optional()
  })),
  On = f(() => Jr("outcome", [u({
    outcome: C("found"),
    text: o().max(uh),
    fromHostCatalog: C(!0).optional()
  }), xe()])),
  B = f(() => oe().optional()),
  We = f(() => u({
    name: o().min(1).max(1024),
    args: o().max(j),
    readOnly: M(),
    waitMs: v().int().min(0).max(ye),
    fromHostCatalog: ke(),
    expectSha256: o().regex(U_).optional(),
    sessionRules: B()
  })),
  Je = f(() => u({
    name: o().min(1).max(1024),
    args: o().max(j),
    readOnly: M(),
    sessionRules: B(),
    model: o().min(1).max(256),
    session: u({
      tools: T(o().min(1).max(he)).max(Xe).catch([]),
      isSkillPreload: M().optional().catch(void 0),
      modelScheduledOrigin: M().optional().catch(void 0),
      remoteSessionId: o().min(1).max(256).optional().catch(void 0),
      effort: $e([U(ta), v().int().min(0).max(1000)]).optional().catch(void 0)
    }).optional().catch(void 0)
  })),
  G = f(() => u({
    outcome: C("rendered"),
    blocks: T(u({
      type: C("text"),
      text: o().max(Be)
    })).max(16),
    handedOff: T(De({
      command: o().min(1).max(Pe),
      tool: o().max(he)
    })).max(_e).optional(),
    fromHostCatalog: C(!0).optional()
  })),
  ie = f(() => u({
    outcome: C("failed"),
    message: o().max(Ce)
  })),
  Tn = f(() => Jr("outcome", [G(), xe(), ie()]));
async function lKo(e, n, {
  toolUseContext: toolUseContext
}) {
  let {
      name: name_2,
      updatedAt: updatedAt,
      waitMs: waitMs,
      fromHostCatalog: fromHostCatalog
    } = Ye().parse(e),
    S = fromHostCatalog ? await ze(name_2) : await re(name_2, waitMs, n, toolUseContext(), updatedAt),
    y = S && F(S);
  if (y !== void 0) return {
    summary: "no such skill",
    output: D(y, fromHostCatalog)
  };
  let text_2 = fromHostCatalog ? S?.getLoadedSkillMd?.() ?? null : S?.skillRoot === void 0 ? null : await XT(se(), Se(S.skillRoot, "SKILL.md"), uh).catch(() => null);
  return text_2 === null ? {
    summary: "no such skill",
    output: D(void 0, fromHostCatalog)
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
async function TWr(e, n, {
  toolUseContext: toolUseContext_2,
  launchPermissionContext: launchPermissionContext
}) {
  let {
      name: name_3,
      args: args,
      readOnly: readOnly,
      waitMs: waitMs_2,
      fromHostCatalog: fromHostCatalog_2,
      expectSha256: expectSha256,
      sessionRules: sessionRules
    } = We().parse(e),
    k = X(toolUseContext_2(), readOnly, sessionRules, launchPermissionContext),
    h = fromHostCatalog_2 ? await ze(name_3) : await re(name_3, waitMs_2, n, k);
  if (h?.source === "projectSettings") Mq(), h = await re(name_3, waitMs_2, n, k);
  let x = h && F(h);
  if (h === void 0 || x !== void 0) return {
    summary: "no such skill",
    output: D(x, fromHostCatalog_2)
  };
  if (expectSha256 !== void 0) {
    if (h = await qe(h, expectSha256), h === void 0 || F(h) !== void 0) return {
      summary: "changed since listed",
      output: {
        outcome: "failed",
        message: "this skill's file changed after the session listed it, so it was not rendered; a new session lists the current file"
      }
    };
  }
  let z = await K(h, args, k, n);
  return fromHostCatalog_2 && z.output.outcome === "rendered" ? {
    ...z,
    output: {
      ...z.output,
      fromHostCatalog: fromHostCatalog_2
    }
  } : z;
}
function X(e, n, s, r) {
  if (!n && s === void 0) return e;
  let i = n ? void 0 : YWr(s, r);
  if (i === void 0) return {
    ...e,
    options: {
      ...e.options,
      readOnlySkillLoad: !0
    }
  };
  let {
    toolPermissionContext: toolPermissionContext
  } = i;
  return {
    ...e,
    getAppState: () => ({
      ...wre(),
      toolPermissionContext: toolPermissionContext
    }),
    ...(i.offersHandOff && {
      promptShellHandOff: []
    }),
    ...(i.classifiesEveryCall && {
      promptShellCallerClassifiesAll: !0
    })
  };
}
async function qe(e, n) {
  let content = SN(e) ? e.getLoadedSkillMd?.() ?? null : await ee(e);
  if (content === null || st(content) !== n) return;
  try {
    let r = Pwr({
      content: content,
      skillFilePath: V(e),
      skillName: e.name,
      source: e.source,
      baseDir: e.skillRoot,
      loadedFrom: e.loadedFrom ?? "skills",
      serverAttribution: e.serverAttribution
    });
    return r?.type === "prompt" ? r : void 0;
  } catch (error) {
    l(H(error));
    return;
  }
}
async function dKo(e, n, {
  toolUseContext: toolUseContext_3,
  launchPermissionContext: launchPermissionContext_2
}) {
  let {
      name: name_4,
      args: args_2,
      readOnly: readOnly_2,
      sessionRules: sessionRules_2,
      model: y,
      session: session
    } = Je().parse(e),
    P = X(toolUseContext_3(), readOnly_2, sessionRules_2, launchPermissionContext_2),
    effort = session?.effort,
    h = {
      ...P,
      ...(effort !== void 0 && {
        permissionLayers: [...(P.permissionLayers ?? []), {
          kind: "effort",
          effort: effort
        }]
      }),
      options: {
        ...P.options,
        mainLoopModel: y,
        ...(session && {
          tools: [...P.options.tools, ...TWt(!1).filter(item => Ke.some(w => vt(item, w)) && session.tools.some(w => vt(item, w)) && !P.options.tools.some(w => vt(w, item.name)))],
          isSkillPreload: session.isSkillPreload,
          modelScheduledOrigin: session.modelScheduledOrigin
        })
      }
    },
    x = Qe(name_4);
  if (x === void 0 || F(x) !== void 0) return {
    summary: "no such command",
    output: D()
  };
  return Ze(y, () => tms(session?.remoteSessionId, () => K(x, args_2, h, n)));
}
function Qe(e) {
  bRe();
  for (let n of [..._X(), ...f6()]) if (n.type === "prompt" && n.name === e && Awo(n)) return n;
  return;
}
async function Ze(e, n) {
  let s = ge.last.then(async () => {
    let r = gc();
    Bp(e);
    try {
      return await n();
    } finally {
      Bp(r);
    }
  });
  return ge.last = s.then(() => {
    return;
  }, () => {
    return;
  }), s;
}
async function K(e, n, s, r) {
  try {
    let i = await e.getPromptForCommand(n, s),
      blocks = i.flatMap(item => item.type === "text" ? [{
        type: item.type,
        text: item.text
      }] : []),
      c = G().safeParse({
        outcome: "rendered",
        blocks: blocks,
        ...(s.promptShellHandOff?.length && {
          handedOff: s.promptShellHandOff
        })
      });
    if (blocks.length !== i.length || !c.success) return {
      summary: "render refused",
      output: {
        outcome: "failed",
        message: s.promptShellHandOff?.length ? `the rendered skill is not plain text of a usable size, or it leaves Claude more than ${_e} inline shell commands or one longer than ${Pe} characters` : "the rendered skill is not plain text of a usable size"
      }
    };
    return {
      summary: "rendered",
      output: c.data
    };
  } catch (error) {
    if (Ve(error) || r.aborted) throw error;
    if (!(error instanceof pT)) l(H(error));
    return {
      summary: "render failed",
      output: {
        outcome: "failed",
        message: error instanceof pT ? ne(error.message, Ce) : "the skill could not be rendered"
      }
    };
  }
}
function D(e, fromHostCatalog_3) {
  return {
    outcome: "missing",
    syncing: cp().firstSyncPromise !== null,
    ...(e === "account_skill_off" && {
      withheld: !0
    }),
    ...(fromHostCatalog_3 && {
      fromHostCatalog: fromHostCatalog_3
    })
  };
}
async function re(e, n, s, r, i = null) {
  let d = cp(),
    c = Y(n, s, {
      unref: !0
    }),
    S = k => Promise.race([k.catch(() => {
      return;
    }), c]),
    y = await te(e, r, i),
    _ = nT(e);
  if (y === void 0 && A0n(_)) await S(dSe(_)), s.throwIfAborted(), y = await te(e, r, i);
  if (y !== void 0 || !d.firstSyncPromise) return y;
  let firstSyncPromise = d.firstSyncPromise;
  if (d.firstRoundSettled) {
    let k = Date.now();
    if (k - d.missingSkillResyncAt >= Ge) {
      d.missingSkillResyncAt = k;
      let h = Mvn(r.session, r.storageV5, r.credentials).finally(() => {
        if (d.missingSkillResync === h) d.missingSkillResync = null;
      });
      d.missingSkillResync = h;
    }
    firstSyncPromise = d.missingSkillResync ?? d.syncPromise;
  }
  if (!firstSyncPromise) return;
  return await S(firstSyncPromise), s.throwIfAborted(), yce(), te(e, r, i);
}
async function ze(e) {
  let n = nT(e);
  if (!GBt(n) || !Cmo()) return;
  let hostCatalog_2 = cp().hostCatalog,
    asked = {
      fromMemory: hostCatalog_2.texts.has(n),
      inLine: hostCatalog_2.readingForCalls.size,
      at: performance.now()
    },
    served,
    miss,
    threw = !1;
  try {
    let S = await ue(n);
    if ("reason" in S) miss = S;else {
      let y = Xbs(S);
      served = y?.type === "prompt" && y.name === e ? y : void 0;
    }
  } catch (error) {
    threw = !0, l(H(error));
  } finally {
    try {
      tt({
        served: served,
        miss: miss,
        threw: threw,
        asked: asked
      });
    } catch (error) {
      l(H(error));
    }
  }
  return served;
}
var et = new Set(["timed_out", "earlier_work_outstanding", "too_many_reads"]);
function tt({
  served: served_2,
  miss: miss_2,
  threw: threw_2,
  asked: asked_2
}) {
  let i = served_2 !== void 0 && eK(served_2),
    d = {
      from: b("call"),
      named: 1,
      loaded: served_2 === void 0 ? 0 : 1,
      withheld: i ? 1 : 0,
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
  if (i) p("skill_host_catalog", "all_withheld", d);else if (served_2 !== void 0) g("skill_host_catalog", d);else m("skill_host_catalog", miss_2 !== void 0 && et.has(miss_2.reason) ? "not_in_time" : "none_loaded", d);
}
function F(e) {
  dr();
  let n = gM(e);
  if (mC(e)) return n ? "account_skill_off" : "other";
  if (qPe(e)) return "other";
  return ASe(e) ? "other" : void 0;
}
async function te(e, n, s) {
  let r = nT(e) !== e,
    i = await Wxe(Qr(), n.storageV5);
  for (let d of [...i, ...G$e(), ...z$e()]) if (d.type === "prompt" && d.name === e && (d.loadedFrom === "syncedSkills" || !r) && !SN(d)) return (await nt(d, s)) ? void 0 : d;
  return;
}
async function nt(e, n) {
  if (n === null || e.loadedFrom !== "syncedSkills" || e.skillRoot === void 0) return !1;
  let s = Ue(e.skillRoot),
    r = await Cue(Se(s, SD), null),
    i = r === null ? null : Rue(r, yAt(), null);
  if (i === null) return !1;
  let d = Zf(pe(e.skillRoot)),
    c = !1;
  for (let S of XY(sYe(), i.skills)) {
    try {
      if (Zf(pe(b3(S.name, s))) !== d) continue;
    } catch {
      continue;
    }
    if (S.updatedAt === _Be) {
      c = !0;
      continue;
    }
    return S.updatedAt !== null && Date.parse(S.updatedAt) < Date.parse(n);
  }
  return c;
}
var cKo = "ListPluginCommands",
  uKo = "RenderPluginCommand",
  pKo = "RenderPinnedPluginCommand",
  it = 60000,
  at = f(() => $e([$Bt(), u({
    source: C("claudeai"),
    marketplaceId: o(),
    organizationUuid: o(),
    scope: U(I_t).optional()
  }), u({
    source: C("pluginDirectory")
  })])),
  lt = f(() => u({
    commandName: o(),
    filePath: o(),
    baseDir: o(),
    sourceName: o(),
    pluginManifest: jJ(),
    pluginPath: o(),
    provenance: u({
      officiallyAttested: M().optional(),
      marketplaceSource: at().optional(),
      npmResolution: u({
        packageName: o(),
        tarballUrl: o()
      }).optional(),
      home: o().optional()
    }).optional(),
    isSkill: M(),
    config: u({
      isSkillMode: M(),
      serverAttribution: u({
        skillId: o().optional(),
        pluginId: o().optional()
      }).optional(),
      metadata: G$o().optional()
    })
  })),
  ut = f(() => u({
    filePath: o(),
    pluginName: o(),
    namespace: T(o()).readonly(),
    sourceName: o(),
    pluginPath: o(),
    pluginManifest: jJ()
  })),
  Ee = f(() => o().refine(e => rt(e) === e && ot(e) !== e).optional().catch(void 0)),
  we = f(() => u({
    source: lt(),
    text: o(),
    pluginDataDir: Ee(),
    sha256: o().regex(U_).optional().catch(void 0)
  })),
  po = f(() => u({
    commands: T(we()),
    skills: T(we()),
    agents: T(u({
      source: ut(),
      text: o(),
      pluginDataDir: Ee()
    })),
    resynced: M().optional(),
    syncsSessionRefs: M().optional(),
    settingsRan: M().optional(),
    comparesSource: M().optional()
  })),
  IQn = f(() => T(o().max(64000)).max(1000).nullable().optional().catch(null)),
  mt = f(() => u({
    registeredHooks: fe(o(), IQn()).optional().catch(void 0),
    resync: M().optional(),
    waitMs: v().int().positive().optional().catch(void 0),
    hashes: M().optional().catch(void 0),
    dataDirs: M().optional().catch(void 0)
  }));
async function fKo(e, n, s) {
  let r = mt().safeParse(e ?? {}).data,
    resync = r?.resync === !0,
    {
      session: session_2,
      storageV5: storageV5_2,
      credentials: credentials
    } = s.toolUseContext(),
    y = r?.registeredHooks;
  dr();
  let deadline = Y(Math.min(sZ(), r?.waitMs ?? 1 / 0), n, {
      unref: !0
    }),
    {
      resynced: resynced
    } = await CWr(session_2, credentials, {
      resync: resync,
      deadline: deadline
    });
  n.throwIfAborted(), cd(storageV5_2, credentials);
  let settingsRan = await Promise.race([RWr(session_2, storageV5_2, credentials), deadline.then(() => !1)]);
  n.throwIfAborted();
  let [h, x, z] = await Promise.all([epe(storageV5_2), PHe(storageV5_2), xr("agents") ? [] : Eat(storageV5_2, credentials)]),
    w = await Ys(storageV5_2, credentials),
    loaded = session_2.pluginsSync.settingsInstall.loaded;
  await dQt([...w.enabled, ...(loaded?.plugins.enabled ?? [])], storageV5_2).catch(l);
  let O = Me(w, loaded?.plugins),
    N = await q([...be(z, w, y), ...(loaded === null ? [] : be(loaded.agents, loaded.plugins, y, O))]),
    A = await rwe(storageV5_2),
    L = new Set(N.map(({
      source: source
    }) => source.sourceName));
  for (let {
    source: source_2
  } of A.enabled) L.delete(source_2);
  let Q = await Le([...w.enabled, ...(loaded?.plugins.enabled ?? [])].filter(item => L.has(item.source)), storageV5_2),
    ae = r?.hashes === !0 ? pt : ft,
    Z = E => r?.dataDirs === !0 ? gt(E) : E,
    output = {
      commands: Z(ae(await q([...J(h), ...J(loaded?.commands ?? [], O)], r?.hashes === !0))),
      skills: Z(ae(await q([...J(x), ...J(loaded?.skills ?? [], O)]))),
      agents: Z(N.filter(({
        source: source_3
      }) => !FSt(source_3, L.has(source_3.sourceName) ? Q : A, y?.[S$e(source_3.pluginPath)]))),
      resynced: resynced,
      syncsSessionRefs: sO(session_2),
      settingsRan: settingsRan,
      comparesSource: !0
    };
  return {
    summary: `${output.commands.length} commands, ${output.skills.length} skills, ${output.agents.length} agents`,
    output: output
  };
}
async function CWr(e, n, {
  resync: resync_2,
  deadline: deadline_2
}) {
  let i = await Promise.race([V8t(e, n).catch(() => !1), deadline_2.then(() => {
    return;
  })]);
  if (i !== !1 && !(resync_2 && i !== void 0)) return {
    resynced: !1
  };
  return {
    resynced: (await Promise.race([gYe(e, n).then(() => !0, () => !1), deadline_2.then(() => !1)])) && e.pluginsSync.lastRoundListed
  };
}
function RWr(e, n, s) {
  if (xr("plugins")) return Promise.resolve(!0);
  let settingsInstall = e.pluginsSync.settingsInstall;
  return settingsInstall.next ??= dt(e, n, s).then(() => !0, i => (l(i), !1)), settingsInstall.next;
}
async function dt(e, n, s) {
  let settingsInstall_2 = e.pluginsSync.settingsInstall;
  await settingsInstall_2.current, settingsInstall_2.current = settingsInstall_2.next, settingsInstall_2.next = null, await Promise.allSettled([E1()]), a.unset("CLAUDE_CODE_SYNC_PLUGIN_INSTALL"), await Promise.allSettled([Pet(void 0, n, s), e.pluginsSync.firstSyncPromise]), cd(n, s);
  let i = lw(n, s);
  await i, cd(n, s), Ne().pluginLoadCacheOnly = i;
  let d = Promise.all([epe(n), PHe(n), xr("agents") ? [] : Eat(n, s), i]);
  cd(n, s);
  let [commands_2, skills, agents, plugins] = await d;
  settingsInstall_2.loaded = {
    commands: commands_2,
    skills: skills,
    agents: agents,
    plugins: plugins
  };
}
var ct = f(() => u({
    name: o().min(1).max(1024),
    listedAs: U(["command", "skill"]),
    args: o().max(j),
    readOnly: M(),
    sessionRules: B(),
    sourceName: o().max(1024).optional(),
    registeredHooks: IQn(),
    expectSha256: o().regex(U_).optional()
  })),
  So = f(() => Jr("outcome", [G().extend({
    sourceName: o().optional()
  }), ie().extend({
    sourceName: o().optional()
  }), u({
    outcome: C("missing")
  }), u({
    outcome: C("changed")
  }), u({
    outcome: C("guarded")
  })]));
async function AWr(e, n, s) {
  let {
      name: name_5,
      listedAs: listedAs,
      args: args_3,
      readOnly: readOnly_3,
      sessionRules: sessionRules_3,
      sourceName: sourceName,
      registeredHooks: registeredHooks,
      expectSha256: expectSha256_2
    } = ct().parse(e),
    k = s.toolUseContext(),
    h = await W(name_5, listedAs, k);
  if (h === void 0) {
    let A = Y(sZ(), n, {
      unref: !0
    });
    if (await xWr(s, n, async () => (h = await W(name_5, listedAs, k), h !== void 0)), h ??= await W(name_5, listedAs, k), h === void 0) {
      let settingsInstall_3 = k.session.pluginsSync.settingsInstall;
      await Promise.race([settingsInstall_3.next ?? settingsInstall_3.current, A]), n.throwIfAborted(), h = await W(name_5, listedAs, k);
    }
  }
  let x = h?.command,
    z = !1;
  if (x !== void 0 && expectSha256_2 !== void 0) {
    let [A] = x.pluginSource === void 0 ? [] : await q([x.pluginSource], !0, Q => {
        z = !qi(Q);
      }),
      L = A !== void 0 && Re(A.source, A.text) === expectSha256_2 ? xms(A.source, A.text) : null;
    x = L?.type === "prompt" ? L : void 0;
  }
  dr();
  let w = h === void 0 ? void 0 : await Que(h.command);
  if (dr(), h === void 0 || (sourceName ?? h.command.pluginSource?.sourceName) !== h.command.pluginSource?.sourceName || Oi(h.command.pluginSource?.sourceName ?? "") === Pi && kee()) return {
    summary: "no such plugin entry",
    output: {
      outcome: "missing"
    }
  };
  if (Zue(w)) return fZ(h.command, w), {
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
  if (x === void 0) return {
    summary: "changed since listed",
    output: {
      outcome: "changed"
    }
  };
  if (x.hooks !== void 0 || judgedBy.some(item => FSt(x.pluginSource, item, registeredHooks))) return {
    summary: "guarded entry",
    output: {
      outcome: "guarded"
    }
  };
  let {
    summary: summary,
    output: output_2
  } = await K(x, args_3, X(k, readOnly_3, sessionRules_3, s.launchPermissionContext), n);
  return {
    summary: summary,
    output: {
      ...output_2,
      sourceName: x.pluginSource?.sourceName
    }
  };
}
function Re(e, n) {
  let {
    serverAttribution: serverAttribution,
    ...config
  } = e.config;
  return st(st(n) + lse({
    ...e,
    config: config
  }));
}
async function W(e, n, {
  session: session_3,
  storageV5: storageV5_3,
  credentials: credentials_2
}) {
  let d = Ae(await (n === "skill" ? PHe : epe)(storageV5_3), e),
    loaded_2 = session_3.pluginsSync.settingsInstall.loaded,
    S = d ? await Ys(storageV5_3, credentials_2) : loaded_2?.plugins;
  if (S === void 0) return;
  dr();
  let y = await rwe(storageV5_3),
    _ = Me(y, S),
    command = d ?? Ae((n === "skill" ? loaded_2?.skills : loaded_2?.commands) ?? [], e, _),
    k = command?.pluginSource?.sourceName ?? "",
    h = y.enabled.some(item => item.source === k);
  if (command === void 0 || !(h || _.has(k))) return;
  return {
    command: command,
    judgedBy: [S, h ? y : await Le(S.enabled.filter(item => item.source === k), storageV5_3)]
  };
}
async function Le(e, n) {
  let s = await Promise.allSettled(e.map(({
    path: path,
    source: source_4,
    name: name_6
  }) => $se(path, source_4, !0, name_6, !0, n, void 0, {
    noTelemetry: !0
  })));
  return {
    enabled: s.flatMap(item => item.status === "fulfilled" ? [item.value.plugin] : []),
    errors: s.flatMap(item => item.status === "fulfilled" ? item.value.errors : [])
  };
}
function Ae(e, n, s) {
  for (let r of e) if (r.type === "prompt" && r.name === n && r.pluginSource !== void 0 && !Df(r.pluginSource.sourceName) && s?.has(r.pluginSource.sourceName) !== !1) return r;
  return;
}
async function xWr(e, n, s) {
  let {
      session: session_4,
      storageV5: storageV5_4,
      credentials: credentials_3
    } = e.toolUseContext(),
    missingEntry = session_4.pluginsSync.missingEntry,
    S = Y(sZ(), n, {
      unref: !0
    }).then(() => {
      return;
    }),
    y = await Promise.race([V8t(session_4, credentials_3).catch(() => !1), S]);
  if (n.throwIfAborted(), y === void 0) return !1;
  let _ = () => {
    if (missingEntry.resync === null && !missingEntry.swept) missingEntry.swept = !0, cd(storageV5_4, credentials_3);
  };
  if (_(), y && (await s())) return !1;
  if (n.throwIfAborted(), missingEntry.resync === null && Date.now() - missingEntry.resyncAt >= it) {
    missingEntry.resyncAt = Date.now();
    let k = gYe(session_4, credentials_3).catch(() => !1).finally(() => {
      missingEntry.resync = null, missingEntry.swept = !1;
    });
    missingEntry.resync = k;
  }
  let resync_3 = missingEntry.resync;
  if (resync_3 !== null) await Promise.race([resync_3, S]), n.throwIfAborted();
  return _(), resync_3 !== null && missingEntry.resync !== resync_3;
}
function Me({
  enabled: enabled,
  errors: errors
}, s) {
  let r = new Set(enabled.flatMap(yhe).map(rr)),
    i = new Set();
  for (let c of errors) if (c.type === "plugin-cache-miss") i.add(c.source);
  let d = new Set();
  for (let c of s?.enabled ?? []) if (i.has(c.source) && !r.has(rr(c.name))) d.add(c.source);
  return d;
}
function J(e, n) {
  return e.flatMap(item => item.type === "prompt" && item.pluginSource !== void 0 && !Df(item.pluginSource.sourceName) && n?.has(item.pluginSource.sourceName) !== !1 ? [item.pluginSource] : []);
}
function be(e, n, s, r) {
  return e.flatMap(item => item.source === "plugin" && item.pluginSource !== void 0 && !Df(item.pluginSource.sourceName) && r?.has(item.pluginSource.sourceName) !== !1 && !FSt(item.pluginSource, n, s?.[S$e(item.pluginSource.pluginPath)]) ? [item.pluginSource] : []);
}
function ft(e) {
  return e;
}
function pt(e) {
  return e.map(item => ({
    ...item,
    sha256: Re(item.source, item.text)
  }));
}
function gt(e) {
  return e.map(item => ({
    ...item,
    pluginDataDir: ag(item.source.sourceName)
  }));
}
async function q(e, n = !1, s) {
  let r = se();
  return (await Promise.all(e.map(async d => {
    let c = d.config?.metadata?.content,
      text_3 = (n && c === "" ? void 0 : c) ?? (await XT(r, d.filePath, xHe).catch(_ => (s?.(_), null)));
    if (text_3 === null) return t(`ListPluginCommands: ${d.filePath} could not be read again`, {
      level: "warn"
    }), [];
    return [{
      source: d,
      text: text_3
    }];
  }))).flat();
}
function FSt(e, {
  enabled: enabled_2,
  errors: errors_2
}, r) {
  let i = enabled_2.find(item => item.source === e?.sourceName);
  if (i === void 0 || i.modulePath !== void 0 || r === null) return !0;
  let d = i.hooksConfig === void 0 ? i.manifest.hooks === void 0 && [] : St(i.hooksConfig),
    c = r?.toSorted() ?? [];
  return !d || !Nn(d, c) || d.length > 0 && (Oi(i.source) !== Pi || i.path !== e?.pluginPath) || errors_2.some(item => "plugin" in item && item.plugin === i.name);
}
function St(e) {
  let n = [];
  for (let [s, r] of Object.entries(e)) for (let {
    matcher: matcher,
    hooks: hooks
  } of r ?? []) for (let c of hooks) {
    if (c.type !== "command") return;
    n.push(lse([s, matcher ?? "", is(c, c.onFailure === "block" ? ["cloud"] : ["cloud", "onFailure"])]));
  }
  return n.sort();
}
export { nKo, ket, rKo, oKo, sKo, iKo, aKo, lKo, TWr, dKo, cKo, uKo, pKo, IQn, fKo, CWr, RWr, AWr, xWr, FSt };