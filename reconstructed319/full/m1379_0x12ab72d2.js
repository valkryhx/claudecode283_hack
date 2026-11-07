// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  Ee,
  q,
  Wae,
  Nd
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  F,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Qo,
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  my,
  rce
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  YSt
} from "B:/~BUN/root/chunk-0w2htvr6.js";
import {
  GR,
  qSt
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  lMe,
  wI,
  Fd,
  tm,
  k9,
  T6,
  jde,
  ji,
  sZ,
  cy,
  Hct,
  Xje,
  C9t,
  Cxn,
  ooe,
  Dpr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ny,
  bp
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  M9e
} from "B:/~BUN/root/chunk-kexqfgtm.js";
import {
  Vp
} from "B:/~BUN/root/chunk-1b2nf93s.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  randomUUID as Y
} from "crypto";
import {
  once as j
} from "events";
import {
  createReadStream as J,
  createWriteStream as X
} from "fs";
import {
  mkdir as G,
  unlink as W
} from "fs/promises";
import {
  finished as Q
} from "stream/promises";
var Z = 4194304,
  te = 1e5;

function Wia(t) {
  let p = {
      commandFallback: ""
    },
    d;
  for (let s of t)
    if (d = YSt(s, p, "shown"), d !== void 0) break;
  return d ??= p.commandFallback, d.replace(/\s+/g, " ").trim().slice(0, 100).trimEnd() || "Branched conversation"
}
async function zia(t, p, d, s) {
  let o = Y(),
    m = z(),
    P = T6() || jde(ji(m)),
    k = Wae(),
    b = Nd().names(),
    A = Hct().replMode,
    H = void 0,
    f = Ny(Ee()),
    y = tm(o),
    c = Fd() ?? bp(),
    C = Vp(c, s);
  if (C !== void 0) return ne({
    sourceV5: C,
    forkKey: Ve.transcript(GR(Ee()), o),
    forkSessionId: o,
    originalSessionId: m,
    sourceTaintAtEntry: P,
    atisLatchAtEntry: k,
    toolsUsedAtEntry: b,
    currentMessages: t,
    customTitle: p,
    extraMessages: d,
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
    }), await j(v, "open")
  } catch (e) {
    if (K(e)) throw Error("No conversation to branch");
    throw a(e), e
  }
  let w = X(y, {
      encoding: "utf8",
      mode: 384
    }),
    M = null;
  w.on("error", (e) => {
    M = F(e)
  });
  let B = new Set(t.map((e) => e.uuid)),
    g = new Map,
    I = [],
    R = [],
    h, U = async () => {
      w.destroy(), await W(y).catch(() => {})
    }, E = async (e) => {
      if (M) throw await U(), M;
      if (!w.write(e)) await j(w, "drain").catch(() => {})
    }, n = P, r = () => E(_(qSt(o, "fork_inherit")) + `
`);
  try {
    if (n) await r();
    for await (let e of M9e(v)) {
      if (e.length === 0) continue;
      let u;
      try {
        u = ee(e)
      } catch {
        continue
      }
      if (!D(u)) continue;
      let i = u;
      if (i.type === "content-replacement" && i.sessionId === m && Array.isArray(i.replacements)) {
        I.push(...i.replacements.filter(D));
        continue
      }
      if (i.type === "relocated" && i.sessionId === m && typeof i.relocatedCwd === "string" && i.relocatedCwd !== "") {
        h = i.relocatedCwd;
        continue
      }
      if (i.type === "memory-mode" && i.sessionId === m) {
        R.push(i);
        continue
      }
      if (i.type === "history-suppression") {
        if (!n) n = !0, await r();
        continue
      }
      if (!wI(i) || i.isSidechain || !B.has(i.uuid)) continue;
      g.set(i.uuid, i)
    }
  } catch (e) {
    throw await U(), e
  } finally {
    v.destroy()
  }
  let S = null,
    T = null,
    N = [];
  try {
    for (let e of t) {
      let u = g.get(e.uuid);
      if (!u) continue;
      let i = u.type === "system" && u.subtype === "model_refusal_fallback" ? {
          neutralizedByFork: !0
        } : void 0,
        x = {
          ...u,
          ...i,
          sessionId: o,
          parentUuid: S,
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
      if (N.push(V), T = u, await E(_(x) + `
`), u.type !== "progress") S = u.uuid
    }
  } catch (e) {
    throw await U(), e
  }
  if (T === null) throw await U(), Error("No messages to branch");
  if (d?.length)
    for (let e of d) {
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
          parentUuid: S,
          isSidechain: !1
        };
      if (N.push(u), await E(_(i) + `
`), e.type !== "progress") S = e.uuid
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
`)
  }
  if (h) await E(_({
    type: "relocated",
    sessionId: o,
    relocatedCwd: h
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
  if (A !== void 0) await E(_({
    type: "repl-mode",
    sessionId: o,
    replMode: A
  }) + `
`);
  if (w.end(), await Q(w).catch(() => {}), M) throw await U(), M;
  return {
    sessionId: o,
    title: p,
    forkPath: y,
    serializedMessages: N,
    contentReplacementRecords: I,
    sessionHistorySuppressed: n
  }
}

function O(t) {
  return {
    data: _(t) + `
`
  }
}
async function ne(t) {
  let {
    sourceV5: p,
    forkKey: d,
    forkSessionId: s,
    originalSessionId: o,
    currentMessages: m,
    customTitle: P,
    extraMessages: k,
    forkSessionPath: b
  } = t, A = Hct().replMode, H = void 0, {
    backend: f,
    key: y
  } = p, c = [], C = new Set(m.map((n) => n.uuid)), v = new Map, w = [], M = [], B, g = t.sourceTaintAtEntry;
  if (g) c.push(O(qSt(s, "fork_inherit")));
  let I;
  for (let n = 0;; n++) {
    if (n >= te) throw Error("Conversation too long to branch through storage");
    let r = await f.readRecords(y, {
      order: "forward",
      maxBytes: Z,
      ...I !== void 0 && {
        fromSeq: I
      }
    });
    if (!r.ok) {
      if (r.error.code === "NotFound") throw Error("No conversation to branch");
      let S = Error("Conversation unreadable through storage", {
        cause: r.error
      });
      throw a(S), S
    }
    for (let S of r.value.items) {
      let T = Buffer.from(S.data.buffer, S.data.byteOffset, S.data.byteLength).toString("utf8").trimEnd();
      if (T.length === 0) continue;
      let N;
      try {
        N = ee(T)
      } catch {
        continue
      }
      if (!D(N)) continue;
      let e = N;
      if (e.type === "content-replacement" && e.sessionId === o && Array.isArray(e.replacements)) {
        w.push(...e.replacements.filter(D));
        continue
      }
      if (e.type === "relocated" && e.sessionId === o && typeof e.relocatedCwd === "string" && e.relocatedCwd !== "") {
        B = e.relocatedCwd;
        continue
      }
      if (e.type === "memory-mode" && e.sessionId === o) {
        M.push(e);
        continue
      }
      if (e.type === "history-suppression") {
        if (!g) g = !0, c.push(O(qSt(s, "fork_inherit")));
        continue
      }
      if (!wI(e) || e.isSidechain || !C.has(e.uuid)) continue;
      v.set(e.uuid, e)
    }
    if (I = r.value.nextSeq, I === void 0) break
  }
  let R = null,
    h = null,
    U = [];
  for (let n of m) {
    let r = v.get(n.uuid);
    if (!r) continue;
    let S = r.type === "system" && r.subtype === "model_refusal_fallback" ? {
        neutralizedByFork: !0
      } : void 0,
      T = {
        ...r,
        ...S,
        sessionId: s,
        parentUuid: R,
        isSidechain: !1,
        sessionKind: void 0,
        forkedFrom: {
          sessionId: o,
          messageUuid: r.uuid
        }
      };
    if (U.push({
        ...r,
        ...S,
        sessionId: s
      }), h = r, c.push(O(T)), r.type !== "progress") R = r.uuid
  }
  if (h === null) throw Error("No messages to branch");
  if (k?.length)
    for (let n of k) {
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
      if (U.push(r), c.push(O({
          ...r,
          parentUuid: R,
          isSidechain: !1
        })), n.type !== "progress") R = n.uuid
    }
  if (w.length > 0) {
    let n = {
      type: "content-replacement",
      sessionId: s,
      replacements: w
    };
    c.push(O(n))
  }
  for (let n of M) {
    let r = {
      ...n,
      sessionId: s
    };
    c.push(O(r))
  }
  if (B) {
    let n = {
      type: "relocated",
      sessionId: s,
      relocatedCwd: B
    };
    c.push(O(n))
  }
  if (t.atisLatchAtEntry !== void 0) {
    let n = {
      type: "atis-latch",
      sessionId: s,
      atis: t.atisLatchAtEntry
    };
    c.push(O(n))
  }
  if (t.toolsUsedAtEntry.length > 0) {
    let n = {
      type: "tools-used",
      sessionId: s,
      tools: [...t.toolsUsedAtEntry]
    };
    c.push(O(n))
  }
  if (A !== void 0) {
    let n = {
      type: "repl-mode",
      sessionId: s,
      replMode: A
    };
    c.push(O(n))
  }
  let E = await f.append(d, c);
  if (!E.ok) throw await f.delete(d).catch(() => {
    return
  }), Error("Branch could not be written through storage", {
    cause: E.error
  });
  return {
    sessionId: s,
    title: P,
    forkPath: b,
    serializedMessages: U,
    contentReplacementRecords: w,
    sessionHistorySuppressed: g
  }
}
async function se(t, p) {
  let d = `${t} (Branch)`;
  if ((await ooe(d, {
      exact: !0
    }, p)).length === 0) return d;
  let o = await ooe(`${t} (Branch`, void 0, p),
    m = new Set([1]),
    P = new RegExp(`^${Qo(t)} \\(Branch(?: (\\d+))?\\)$`);
  for (let b of o) {
    let A = b.customTitle?.match(P);
    if (A)
      if (A[1]) m.add(parseInt(A[1], 10));
      else m.add(1)
  }
  let k = 2;
  while (m.has(k)) k++;
  return `${t} (Branch ${k})`
}
async function u6r(t, p, d = {}) {
  let s = z(),
    o = cy(s),
    m = T6() || jde(ji(s)),
    P = Wae(),
    k = Nd().names(),
    b = Hct().replMode,
    A = void 0,
    H = Cxn().map(({
      inFlight: f,
      ...y
    }) => y);
  try {
    let {
      sessionId: f,
      title: y,
      forkPath: c,
      serializedMessages: C,
      contentReplacementRecords: v,
      sessionHistorySuppressed: w
    } = await zia(t.messages, d.customTitle, d.extraMessages, t.storageV5);
    Dpr(f, C.map((n) => n.uuid));
    let M = new Date,
      B = Wia(C),
      g = y?.replace(/\s+/g, " ").trim() ?? await se(B, t.storageV5),
      I = y ? "user" : "auto";
    await k9(f, g, c, I, t.storageV5), await Xje(f, g, c, I, t.storageV5), l("tengu_conversation_forked", {
      message_count: C.length,
      has_custom_title: !!y
    });
    let R = {
      date: tt(M.toISOString(), "T"),
      messages: C,
      fullPath: c,
      value: M.getTime(),
      created: M,
      modified: M,
      firstPrompt: B,
      messageCount: C.length,
      isSidechain: !1,
      sessionId: f,
      customTitle: g,
      agentName: g,
      contentReplacements: v,
      sessionHistorySuppressed: w || m ? !0 : void 0,
      atisLatch: P,
      toolsUsed: k,
      memoryModeStamps: H,
      precautionarySuppressionHeld: sZ(ji(s)) ? !0 : void 0,
      forkedFromSessionId: s
    };
    R.replMode = b, R.sessionOwner = C9t() ?? lMe();
    let h = y ? ` "${g}"` : "",
      U = o ? ` ("${o}")` : "",
      E = `Branched conversation${h}. You are now in the new branch (session ${f}). Use /resume ${s}${U} to return to the original, or run \`claude -r ${s}\` in a new terminal.`;
    if (t.resume) await t.resume(f, R, "fork"), rce(my(), g, "user", t.storageV5), p(E, {
      display: "system"
    });
    else p(`Branched conversation${h}. Resume with: /resume ${f}`);
    return !0
  } catch (f) {
    let y = f instanceof Error ? f.message : "Unknown error occurred";
    return p(`Failed to branch conversation: ${y}`), !1
  }
}
async function Fya(t, p, d) {
  return await u6r(p, t, {
    customTitle: d?.trim() || void 0
  }), null
}
export {
  Wia,
  zia,
  u6r,
  Fya
};
