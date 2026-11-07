// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, Ee, q, Wae, Nd } from "B:/~BUN/root/chunk-game8aqv.js";
import { F, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Qo, tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { my, rce } from "B:/~BUN/root/chunk-4vcs773m.js";
import { YSt } from "B:/~BUN/root/chunk-0w2htvr6.js";
import { GR, qSt } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { lMe, wI, Fd, tm, k9, T6, jde, ji, sZ, cy, Hct, Xje, C9t, Cxn, ooe, Dpr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ny, bp } from "B:/~BUN/root/chunk-ke150ry1.js";
import { M9e } from "B:/~BUN/root/chunk-kexqfgtm.js";
import { Vp } from "B:/~BUN/root/chunk-1b2nf93s.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { randomUUID as Y } from "crypto";
import { once as j } from "events";
import { createReadStream as J, createWriteStream as X } from "fs";
import { mkdir as G, unlink as W } from "fs/promises";
import { finished as Q } from "stream/promises";
var maxBytes = 4194304,
  te = 1e5;
function Wia(t) {
  let p = {
      commandFallback: ""
    },
    d;
  for (let s of t) if (d = YSt(s, p, "shown"), d !== void 0) break;
  return d ??= p.commandFallback, d.replace(/\s+/g, " ").trim().slice(0, 100).trimEnd() || "Branched conversation";
}
async function zia(currentMessages, p, extraMessages, s) {
  let o = Y(),
    m = z(),
    sourceTaintAtEntry = T6() || jde(ji(m)),
    k = Wae(),
    b = Nd().names(),
    replMode = Hct().replMode,
    H = void 0,
    f = Ny(Ee()),
    y = tm(o),
    c = Fd() ?? bp(),
    sourceV5 = Vp(c, s);
  if (sourceV5 !== void 0) return ne({
    sourceV5: sourceV5,
    forkKey: Ve.transcript(GR(Ee()), o),
    forkSessionId: o,
    originalSessionId: m,
    sourceTaintAtEntry: sourceTaintAtEntry,
    atisLatchAtEntry: k,
    toolsUsedAtEntry: b,
    currentMessages: currentMessages,
    customTitle: p,
    extraMessages: extraMessages,
    forkSessionPath: y
  });
  if (q()) throw Error("No conversation to branch");
  await G(f, {
    recursive: !0,
    mode: 448
  });
  let v;
  try {
    v = J(c, {
      encoding: "utf8"
    }), await j(v, "open");
  } catch (error) {
    if (K(error)) throw Error("No conversation to branch");
    throw a(error), error;
  }
  let w = X(y, {
      encoding: "utf8",
      mode: 384
    }),
    M = null;
  w.on("error", e => {
    M = F(e);
  });
  let B = new Set(currentMessages.map(item => item.uuid)),
    g = new Map(),
    I = [],
    R = [],
    relocatedCwd,
    U = async () => {
      w.destroy(), await W(y).catch(() => {});
    },
    E = async e => {
      if (M) throw await U(), M;
      if (!w.write(e)) await j(w, "drain").catch(() => {});
    },
    sessionHistorySuppressed = sourceTaintAtEntry,
    r = () => E(_(qSt(o, "fork_inherit")) + `
`);
  try {
    if (sessionHistorySuppressed) await r();
    for await (let e of M9e(v)) {
      if (e.length === 0) continue;
      let u;
      try {
        u = ee(e);
      } catch {
        continue;
      }
      if (!D(u)) continue;
      let i = u;
      if (i.type === "content-replacement" && i.sessionId === m && Array.isArray(i.replacements)) {
        I.push(...i.replacements.filter(D));
        continue;
      }
      if (i.type === "relocated" && i.sessionId === m && typeof i.relocatedCwd === "string" && i.relocatedCwd !== "") {
        relocatedCwd = i.relocatedCwd;
        continue;
      }
      if (i.type === "memory-mode" && i.sessionId === m) {
        R.push(i);
        continue;
      }
      if (i.type === "history-suppression") {
        if (!sessionHistorySuppressed) sessionHistorySuppressed = !0, await r();
        continue;
      }
      if (!wI(i) || i.isSidechain || !B.has(i.uuid)) continue;
      g.set(i.uuid, i);
    }
  } catch (error) {
    throw await U(), error;
  } finally {
    v.destroy();
  }
  let parentUuid = null,
    T = null,
    serializedMessages = [];
  try {
    for (let e of currentMessages) {
      let u = g.get(e.uuid);
      if (!u) continue;
      let i = u.type === "system" && u.subtype === "model_refusal_fallback" ? {
          neutralizedByFork: !0
        } : void 0,
        x = {
          ...u,
          ...i,
          sessionId: o,
          parentUuid: parentUuid,
          isSidechain: !1,
          sessionKind: void 0,
          forkedFrom: {
            sessionId: m,
            messageUuid: u.uuid
          }
        },
        V = {
          ...u,
          ...i,
          sessionId: o
        };
      if (serializedMessages.push(V), T = u, await E(_(x) + `
`), u.type !== "progress") parentUuid = u.uuid;
    }
  } catch (error) {
    throw await U(), error;
  }
  if (T === null) throw await U(), Error("No messages to branch");
  if (extraMessages?.length) for (let e of extraMessages) {
    let u = {
        ...e,
        cwd: T.cwd,
        userType: T.userType,
        entrypoint: T.entrypoint,
        version: T.version,
        gitBranch: T.gitBranch,
        sessionId: o,
        timestamp: new Date().toISOString()
      },
      i = {
        ...u,
        parentUuid: parentUuid,
        isSidechain: !1
      };
    if (serializedMessages.push(u), await E(_(i) + `
`), e.type !== "progress") parentUuid = e.uuid;
  }
  if (I.length > 0) await E(_({
    type: "content-replacement",
    sessionId: o,
    replacements: I
  }) + `
`);
  for (let e of R) {
    let u = {
      ...e,
      sessionId: o
    };
    await E(_(u) + `
`);
  }
  if (relocatedCwd) await E(_({
    type: "relocated",
    sessionId: o,
    relocatedCwd: relocatedCwd
  }) + `
`);
  if (k !== void 0) await E(_({
    type: "atis-latch",
    sessionId: o,
    atis: k
  }) + `
`);
  if (b.length > 0) await E(_({
    type: "tools-used",
    sessionId: o,
    tools: b
  }) + `
`);
  if (replMode !== void 0) await E(_({
    type: "repl-mode",
    sessionId: o,
    replMode: replMode
  }) + `
`);
  if (w.end(), await Q(w).catch(() => {}), M) throw await U(), M;
  return {
    sessionId: o,
    title: p,
    forkPath: y,
    serializedMessages: serializedMessages,
    contentReplacementRecords: I,
    sessionHistorySuppressed: sessionHistorySuppressed
  };
}
function O(t) {
  return {
    data: _(t) + `
`
  };
}
async function ne(t) {
  let {
      sourceV5: sourceV5_2,
      forkKey: forkKey,
      forkSessionId: s,
      originalSessionId: o,
      currentMessages: currentMessages_2,
      customTitle: P,
      extraMessages: extraMessages_2,
      forkSessionPath: b
    } = t,
    replMode_2 = Hct().replMode,
    H = void 0,
    {
      backend: backend,
      key: key
    } = sourceV5_2,
    c = [],
    C = new Set(currentMessages_2.map(item => item.uuid)),
    v = new Map(),
    w = [],
    M = [],
    relocatedCwd_2,
    g = t.sourceTaintAtEntry;
  if (g) c.push(O(qSt(s, "fork_inherit")));
  let fromSeq;
  for (let n = 0;; n++) {
    if (n >= te) throw Error("Conversation too long to branch through storage");
    let r = await backend.readRecords(key, {
      order: "forward",
      maxBytes: maxBytes,
      ...(fromSeq !== void 0 && {
        fromSeq: fromSeq
      })
    });
    if (!r.ok) {
      if (r.error.code === "NotFound") throw Error("No conversation to branch");
      let S = Error("Conversation unreadable through storage", {
        cause: r.error
      });
      throw a(S), S;
    }
    for (let S of r.value.items) {
      let T = Buffer.from(S.data.buffer, S.data.byteOffset, S.data.byteLength).toString("utf8").trimEnd();
      if (T.length === 0) continue;
      let N;
      try {
        N = ee(T);
      } catch {
        continue;
      }
      if (!D(N)) continue;
      let e = N;
      if (e.type === "content-replacement" && e.sessionId === o && Array.isArray(e.replacements)) {
        w.push(...e.replacements.filter(D));
        continue;
      }
      if (e.type === "relocated" && e.sessionId === o && typeof e.relocatedCwd === "string" && e.relocatedCwd !== "") {
        relocatedCwd_2 = e.relocatedCwd;
        continue;
      }
      if (e.type === "memory-mode" && e.sessionId === o) {
        M.push(e);
        continue;
      }
      if (e.type === "history-suppression") {
        if (!g) g = !0, c.push(O(qSt(s, "fork_inherit")));
        continue;
      }
      if (!wI(e) || e.isSidechain || !C.has(e.uuid)) continue;
      v.set(e.uuid, e);
    }
    if (fromSeq = r.value.nextSeq, fromSeq === void 0) break;
  }
  let parentUuid_2 = null,
    h = null,
    serializedMessages_2 = [];
  for (let n of currentMessages_2) {
    let r = v.get(n.uuid);
    if (!r) continue;
    let S = r.type === "system" && r.subtype === "model_refusal_fallback" ? {
        neutralizedByFork: !0
      } : void 0,
      T = {
        ...r,
        ...S,
        sessionId: s,
        parentUuid: parentUuid_2,
        isSidechain: !1,
        sessionKind: void 0,
        forkedFrom: {
          sessionId: o,
          messageUuid: r.uuid
        }
      };
    if (serializedMessages_2.push({
      ...r,
      ...S,
      sessionId: s
    }), h = r, c.push(O(T)), r.type !== "progress") parentUuid_2 = r.uuid;
  }
  if (h === null) throw Error("No messages to branch");
  if (extraMessages_2?.length) for (let n of extraMessages_2) {
    let r = {
      ...n,
      cwd: h.cwd,
      userType: h.userType,
      entrypoint: h.entrypoint,
      version: h.version,
      gitBranch: h.gitBranch,
      sessionId: s,
      timestamp: new Date().toISOString()
    };
    if (serializedMessages_2.push(r), c.push(O({
      ...r,
      parentUuid: parentUuid_2,
      isSidechain: !1
    })), n.type !== "progress") parentUuid_2 = n.uuid;
  }
  if (w.length > 0) {
    let n = {
      type: "content-replacement",
      sessionId: s,
      replacements: w
    };
    c.push(O(n));
  }
  for (let n of M) {
    let r = {
      ...n,
      sessionId: s
    };
    c.push(O(r));
  }
  if (relocatedCwd_2) {
    let n = {
      type: "relocated",
      sessionId: s,
      relocatedCwd: relocatedCwd_2
    };
    c.push(O(n));
  }
  if (t.atisLatchAtEntry !== void 0) {
    let n = {
      type: "atis-latch",
      sessionId: s,
      atis: t.atisLatchAtEntry
    };
    c.push(O(n));
  }
  if (t.toolsUsedAtEntry.length > 0) {
    let n = {
      type: "tools-used",
      sessionId: s,
      tools: [...t.toolsUsedAtEntry]
    };
    c.push(O(n));
  }
  if (replMode_2 !== void 0) {
    let n = {
      type: "repl-mode",
      sessionId: s,
      replMode: replMode_2
    };
    c.push(O(n));
  }
  let E = await backend.append(forkKey, c);
  if (!E.ok) throw await backend.delete(forkKey).catch(() => {
    return;
  }), Error("Branch could not be written through storage", {
    cause: E.error
  });
  return {
    sessionId: s,
    title: P,
    forkPath: b,
    serializedMessages: serializedMessages_2,
    contentReplacementRecords: w,
    sessionHistorySuppressed: g
  };
}
async function se(t, p) {
  let d = `${t} (Branch)`;
  if ((await ooe(d, {
    exact: !0
  }, p)).length === 0) return d;
  let o = await ooe(`${t} (Branch`, void 0, p),
    m = new Set([1]),
    regExp = new RegExp(`^${Qo(t)} \\(Branch(?: (\\d+))?\\)$`);
  for (let b of o) {
    let A = b.customTitle?.match(regExp);
    if (A) if (A[1]) m.add(parseInt(A[1], 10));else m.add(1);
  }
  let k = 2;
  while (m.has(k)) k++;
  return `${t} (Branch ${k})`;
}
async function u6r(t, p, d = {}) {
  let forkedFromSessionId = z(),
    o = cy(forkedFromSessionId),
    m = T6() || jde(ji(forkedFromSessionId)),
    atisLatch = Wae(),
    toolsUsed = Nd().names(),
    replMode_3 = Hct().replMode,
    A = void 0,
    memoryModeStamps = Cxn().map(({
      inFlight: inFlight,
      ...y
    }) => y);
  try {
    let {
      sessionId: sessionId,
      title: title,
      forkPath: c,
      serializedMessages: C,
      contentReplacementRecords: v,
      sessionHistorySuppressed: sessionHistorySuppressed_2
    } = await zia(t.messages, d.customTitle, d.extraMessages, t.storageV5);
    Dpr(sessionId, C.map(item => item.uuid));
    let M = new Date(),
      firstPrompt = Wia(C),
      g = title?.replace(/\s+/g, " ").trim() ?? (await se(firstPrompt, t.storageV5)),
      I = title ? "user" : "auto";
    await k9(sessionId, g, c, I, t.storageV5), await Xje(sessionId, g, c, I, t.storageV5), l("tengu_conversation_forked", {
      message_count: C.length,
      has_custom_title: !!title
    });
    let R = {
      date: tt(M.toISOString(), "T"),
      messages: C,
      fullPath: c,
      value: M.getTime(),
      created: M,
      modified: M,
      firstPrompt: firstPrompt,
      messageCount: C.length,
      isSidechain: !1,
      sessionId: sessionId,
      customTitle: g,
      agentName: g,
      contentReplacements: v,
      sessionHistorySuppressed: sessionHistorySuppressed_2 || m ? !0 : void 0,
      atisLatch: atisLatch,
      toolsUsed: toolsUsed,
      memoryModeStamps: memoryModeStamps,
      precautionarySuppressionHeld: sZ(ji(forkedFromSessionId)) ? !0 : void 0,
      forkedFromSessionId: forkedFromSessionId
    };
    R.replMode = replMode_3, R.sessionOwner = C9t() ?? lMe();
    let h = title ? ` "${g}"` : "",
      U = o ? ` ("${o}")` : "",
      E = `Branched conversation${h}. You are now in the new branch (session ${sessionId}). Use /resume ${forkedFromSessionId}${U} to return to the original, or run \`claude -r ${forkedFromSessionId}\` in a new terminal.`;
    if (t.resume) await t.resume(sessionId, R, "fork"), rce(my(), g, "user", t.storageV5), p(E, {
      display: "system"
    });else p(`Branched conversation${h}. Resume with: /resume ${sessionId}`);
    return !0;
  } catch (error) {
    let y = error instanceof Error ? error.message : "Unknown error occurred";
    return p(`Failed to branch conversation: ${y}`), !1;
  }
}
async function Fya(t, p, d) {
  return await u6r(p, t, {
    customTitle: d?.trim() || void 0
  }), null;
}
export { Wia, zia, u6r, Fya };