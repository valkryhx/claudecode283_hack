// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  K,
  eye,
  ke,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  Wt
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  gn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  iS,
  hZe
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  dRo
} from "B:/~BUN/root/chunk-9080897a.js";
import {
  ij
} from "B:/~BUN/root/chunk-5mwc5s4z.js";
import {
  mUn
} from "B:/~BUN/root/chunk-0g1grf6f.js";
import {
  Zpe,
  aj
} from "B:/~BUN/root/chunk-mbp55gyg.js";
import {
  tr,
  ge,
  mn,
  St,
  Ld
} from "B:/~BUN/root/chunk-rm2gz7kj.js";
import {
  Us
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  Em,
  pa
} from "B:/~BUN/root/chunk-wg7rg6k5.js";
import {
  dirname as w,
  join as y
} from "path";
var hXr = ["input_unservable"],
  I = /^k[0-9a-z]{8}$/,
  m = 256,
  g = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u,
  JCn = /^[A-Za-z0-9_-]{1,128}$/,
  R = f(() => St({
    taskId: ge().regex(I),
    serverName: ge().min(1).max(m).regex(g),
    toolName: ge().min(1).max(m).regex(g),
    mcpTaskId: ge().min(1).regex(g),
    pollIntervalMs: mn().optional(),
    spawnedAt: mn(),
    toolUseId: ge().regex(mUn).optional(),
    protocol: ge().min(1).max(m).regex(/^[\x20-\x7e]+$/).optional(),
    ttlExpiresAt: mn().optional(),
    transportFingerprint: ge().max(8192).optional(),
    workerWakeId: ge().regex(JCn).optional(),
    cancelReason: Ld(hXr).optional().catch(void 0)
  }).passthrough().superRefine((e, n) => {
    if (e.protocol === "sep2663" && (e.mcpTaskId.length > Zpe || !aj.test(e.mcpTaskId))) n.addIssue({
      code: tr.custom,
      path: ["mcpTaskId"],
      message: "sep2663 task id exceeds the wire bound"
    })
  }));

function yXr(e) {
  return R().safeParse(e)
}
var D = 1e4,
  l = 4194304,
  b = f(() => St({
    registryId: ge().regex(I),
    sessionId: ge().min(1).max(m),
    runId: ge().regex(mUn),
    toolUseId: ge().regex(mUn).optional().catch(void 0),
    endedAt: mn().int().min(0).max(8640000000000000),
    serverName: ge().min(1).max(m).regex(g),
    toolName: ge().min(1).max(m).regex(g),
    mcpTaskId: ge().max(Zpe).regex(aj),
    status: Ld(["completed", "failed", "cancelled"]),
    code: ge().regex(/^[a-z_]{1,64}$/).optional(),
    resultText: ge().optional(),
    resultHint: ge().max(D).regex(g).optional().catch(void 0),
    statusMessage: ge().optional()
  }));

function BV() {
  return A()
}

function A() {
  return eye() ?? hZe() ?? iS(ke())
}

function E4t(e, n) {
  return e === K() ? BV() : n ?? BV()
}

function P(e = K(), n = A()) {
  return y(n, e, "mcp-tasks")
}

function h(e, n = K(), r, s = "meta") {
  return y(P(n, r), `mcp-task-${e}.${s}.json`)
}

function T(e = BV()) {
  return dRo(e)
}

function x(e, n, r = K(), s = "meta") {
  return Be.sidecar(e, r, ["mcp-tasks", `mcp-task-${n}.${s}.json`])
}
async function QCn(e, n, r) {
  let s = W() && r !== void 0 ? T() : void 0,
    c = K(),
    d = ij(BV()),
    a = d === void 0 ? void 0 : h(e, c, d);
  if (r && s !== void 0) {
    if (a !== void 0) await gn().mkdir(w(a));
    let o = await r.write(x(s, e, c), _(n), {
      publishDiscipline: "inPlace"
    });
    if (!o.ok) throw t(`writeMcpTaskMetadata: ${o.error.code}`), Error("mcp task metadata write failed");
    return
  }
  if (a === void 0) return;
  await gn().mkdir(w(a)), await gn().write(a, _(n))
}
async function Its(e, n, r) {
  if (de()) return;
  let {
    registryId: s,
    sessionId: c
  } = e, d = W() && n !== void 0 ? T(r) : void 0;
  if (n && d !== void 0) {
    let o = await n.write(x(d, s, c, "outcome"), _(e), {
      publishDiscipline: "atomic",
      mode: 384
    });
    if (!o.ok) throw t(`writeMcpTaskOutcome: ${o.error.code}`), Error("mcp task outcome write failed");
    return
  }
  if (typeof r === "object") throw Error("mcp task outcome: the project folder is a storage scope and no storage backend can take it");
  let a = h(s, c, r, "outcome");
  await gn().mkdir(w(a), 448), await gn().atomicWrite(a, _(e), 384)
}

function T4t(e, n, r, s) {
  return TY(e, n, r, s, "outcome")
}
async function TY(e, n, r, s, c = "meta") {
  let d = W() && n !== void 0 ? T(s) : void 0;
  if (n && d !== void 0) {
    let o = await n.delete(x(d, e, r, c));
    if (!o.ok) throw t(`deleteMcpTaskMetadata: ${o.error.code}`), Error("mcp task metadata delete failed");
    return
  }
  if (de() || typeof s === "object") return;
  let a = h(e, r, s, c);
  try {
    await gn().delete(a)
  } catch (o) {
    if (Wt(o)) return;
    throw o
  }
}

function ZCn(e) {
  return E("listMcpTaskMetadata", ".meta.json", yXr, e)
}

function Mts(e) {
  return E("listMcpTaskOutcomes", ".outcome.json", (n, r) => b().refine((s) => r === `mcp-task-${s.registryId}.outcome.json`, "the file is named for another task").safeParse(n), e)
}
async function E(e, n, r, s) {
  let c = W() && s !== void 0 ? T() : void 0;
  if (s && c !== void 0) return O(e, n, r, s, c);
  if (de()) return [];
  let d = P(),
    a;
  try {
    a = await gn().list(d)
  } catch (p) {
    if (Wt(p)) return [];
    throw p
  }
  let o = [];
  for (let p of a) {
    if (!p.endsWith(n)) continue;
    try {
      let u = await j(y(d, p)),
        i = r(J(u), p);
      if (!i.success) {
        t(`${e}: skipping ${p}: ${String(i.error)}`);
        continue
      }
      o.push(i.data)
    } catch (u) {
      t(`${e}: skipping ${p}: ${String(u)}`)
    }
  }
  return o
}
async function j(e) {
  let n = gn();
  if (Us === 0 && (await n.lstat(e))?.isFile === !1) throw Error("not a regular file");
  let r = await n.readTail(e, l + 1, {
    noFollow: !0
  });
  if (r.length > l) throw Error("over the size bound");
  return r.toString("utf8")
}
async function O(e, n, r, s, c) {
  let d = {
      namespace: "sidecar",
      projectKey: c,
      sessionId: K(),
      relPath: ["mcp-tasks"]
    },
    a = [],
    o = await pa((u) => s.listEntries(d, {
      cursor: u,
      skipKeyStats: !0,
      skipScopeStats: !0
    }), (u) => {
      for (let i of u) {
        if (i.kind !== "key" || i.key.namespace !== "sidecar") continue;
        if ((i.key.relPath.at(-1) ?? "").endsWith(n)) a.push(i.key)
      }
    });
  switch (o.status) {
    case "done":
      break;
    case "error":
      throw t(`${e}: ${o.error.code}`), Error("mcp task metadata list failed");
    case "capped":
      throw t(`${e}: list exceeded ${Em} pages`), Error("mcp task metadata list exceeded the page cap")
  }
  let p = [];
  for (let u of a) {
    let i = u.relPath.at(-1) ?? "",
      M = await s.read([{
        key: u,
        offset: 0,
        length: l + 1
      }]);
    if (!M.ok) {
      t(`${e}: skipping ${i}: ${M.error.code}`);
      continue
    }
    let S = M.value.items[0];
    if (!S.found) continue;
    if (S.totalBytes > l) {
      t(`${e}: skipping ${i}: over the size bound`);
      continue
    }
    try {
      let k = r(J(Buffer.from(S.value).toString("utf8")), i);
      if (!k.success) {
        t(`${e}: skipping ${i}: ${String(k.error)}`);
        continue
      }
      p.push(k.data)
    } catch (k) {
      t(`${e}: skipping ${i}: ${String(k)}`)
    }
  }
  return p
}
export {
  hXr,
  JCn,
  yXr,
  BV,
  E4t,
  QCn,
  Its,
  T4t,
  TY,
  ZCn,
  Mts
};
