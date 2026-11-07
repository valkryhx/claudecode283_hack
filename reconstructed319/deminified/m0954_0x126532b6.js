// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, Mxe, Ee, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { iv, KSt } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { Qks } from "B:/~BUN/root/chunk-ke150ry1.js";
import { CF } from "B:/~BUN/root/chunk-jjjspatt.js";
import { WTe, xq } from "B:/~BUN/root/chunk-h29cx855.js";
import { tEr } from "B:/~BUN/root/chunk-50p1vzkm.js";
import { Or, ge, Mn, Ft, Ec } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { ny, qa } from "B:/~BUN/root/chunk-qzcyr88d.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { dirname as w, join as y } from "path";
var G9o = ["input_unservable"],
  R9r = "connector:",
  V9o = "relay:";
function opi(e) {
  return e !== void 0 && (e.startsWith(R9r) || e.startsWith(V9o));
}
var I = /^k[0-9a-z]{8}$/,
  g = 256,
  f = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u,
  eir = /^[A-Za-z0-9_-]{1,128}$/,
  R = p(() => Ft({
    taskId: ge().regex(I),
    serverName: ge().min(1).max(g).regex(f),
    toolName: ge().min(1).max(g).regex(f),
    mcpTaskId: ge().min(1).regex(f),
    pollIntervalMs: Mn().optional(),
    spawnedAt: Mn(),
    toolUseId: ge().regex(tEr).optional(),
    protocol: ge().min(1).max(g).regex(/^[\x20-\x7e]+$/).optional(),
    ttlExpiresAt: Mn().optional(),
    transportFingerprint: ge().max(8192).optional(),
    workerWakeId: ge().regex(eir).optional(),
    cancelReason: Ec(G9o).optional().catch(void 0)
  }).passthrough().superRefine((e, n) => {
    if (e.protocol === "sep2663" && (e.mcpTaskId.length > WTe || !xq.test(e.mcpTaskId))) n.addIssue({
      code: Or.custom,
      path: ["mcpTaskId"],
      message: "sep2663 task id exceeds the wire bound"
    });
  }));
function K9o(e) {
  return R().safeParse(e);
}
var D = 1e4,
  l = 4194304,
  b = p(() => Ft({
    registryId: ge().regex(I),
    sessionId: ge().min(1).max(g),
    runId: ge().regex(tEr),
    toolUseId: ge().regex(tEr).optional().catch(void 0),
    endedAt: Mn().int().min(0).max(8640000000000000),
    serverName: ge().min(1).max(g).regex(f),
    toolName: ge().min(1).max(g).regex(f),
    mcpTaskId: ge().max(WTe).regex(xq),
    status: Ec(["completed", "failed", "cancelled"]),
    code: ge().regex(/^[a-z_]{1,64}$/).optional(),
    resultText: ge().optional(),
    resultHint: ge().max(D).regex(f).optional().catch(void 0),
    statusMessage: ge().optional()
  }));
function $8() {
  return P();
}
function P() {
  return Mxe() ?? KSt() ?? iv(Ee());
}
function vvn(e, n) {
  return e === z() ? $8() : n ?? $8();
}
function A(e = z(), n = P()) {
  return y(n, e, "mcp-tasks");
}
function x(e, n = z(), r, s = "meta") {
  return y(A(n, r), `mcp-task-${e}.${s}.json`);
}
function T(e = $8()) {
  return Qks(e);
}
function h(e, n, r = z(), s = "meta") {
  return Ve.sidecar(e, r, ["mcp-tasks", `mcp-task-${n}.${s}.json`]);
}
async function tir(e, n, r) {
  let s = X() && r !== void 0 ? T() : void 0,
    c = z(),
    d = CF($8()),
    a = d === void 0 ? void 0 : x(e, c, d);
  if (r && s !== void 0) {
    if (a !== void 0) await Dn().mkdir(w(a));
    let o = await r.write(h(s, e, c), _(n), {
      publishDiscipline: "inPlace"
    });
    if (!o.ok) throw t(`writeMcpTaskMetadata: ${o.error.code}`), Error("mcp task metadata write failed");
    return;
  }
  if (a === void 0) return;
  await Dn().mkdir(w(a)), await Dn().write(a, _(n));
}
async function spi(e, n, r) {
  if (q()) return;
  let {
      registryId: registryId,
      sessionId: sessionId
    } = e,
    d = X() && n !== void 0 ? T(r) : void 0;
  if (n && d !== void 0) {
    let o = await n.write(h(d, registryId, sessionId, "outcome"), _(e), {
      publishDiscipline: "atomic",
      mode: 384
    });
    if (!o.ok) throw t(`writeMcpTaskOutcome: ${o.error.code}`), Error("mcp task outcome write failed");
    return;
  }
  if (typeof r === "object") throw Error("mcp task outcome: the project folder is a storage scope and no storage backend can take it");
  let a = x(registryId, sessionId, r, "outcome");
  await Dn().mkdir(w(a), 448), await Dn().atomicWrite(a, _(e), 384);
}
function Evn(e, n, r, s) {
  return EQ(e, n, r, s, "outcome");
}
async function EQ(e, n, r, s, c = "meta") {
  let d = X() && n !== void 0 ? T(s) : void 0;
  if (n && d !== void 0) {
    let o = await n.delete(h(d, e, r, c));
    if (!o.ok) throw t(`deleteMcpTaskMetadata: ${o.error.code}`), Error("mcp task metadata delete failed");
    return;
  }
  if (q() || typeof s === "object") return;
  let a = x(e, r, s, c);
  try {
    await Dn().delete(a);
  } catch (error) {
    if (qt(error)) return;
    throw error;
  }
}
function nir(e) {
  return E("listMcpTaskMetadata", ".meta.json", K9o, e);
}
function ipi(e) {
  return E("listMcpTaskOutcomes", ".outcome.json", (n, r) => b().refine(s => r === `mcp-task-${s.registryId}.outcome.json`, "the file is named for another task").safeParse(n), e);
}
async function E(e, n, r, s) {
  let c = X() && s !== void 0 ? T() : void 0;
  if (s && c !== void 0) return K(e, n, r, s, c);
  if (q()) return [];
  let d = A(),
    a;
  try {
    a = await Dn().list(d);
  } catch (error) {
    if (qt(error)) return [];
    throw error;
  }
  let o = [];
  for (let u of a) {
    if (!u.endsWith(n)) continue;
    try {
      let m = await j(y(d, u)),
        i = r(ee(m), u);
      if (!i.success) {
        t(`${e}: skipping ${u}: ${String(i.error)}`);
        continue;
      }
      o.push(i.data);
    } catch (error) {
      t(`${e}: skipping ${u}: ${String(error)}`);
    }
  }
  return o;
}
async function j(e) {
  let n = Dn();
  if (Go === 0 && (await n.lstat(e))?.isFile === !1) throw Error("not a regular file");
  let r = await n.readTail(e, l + 1, {
    noFollow: !0
  });
  if (r.length > l) throw Error("over the size bound");
  return r.toString("utf8");
}
async function K(e, n, r, s, projectKey) {
  let d = {
      namespace: "sidecar",
      projectKey: projectKey,
      sessionId: z(),
      relPath: ["mcp-tasks"]
    },
    a = [],
    o = await qa(cursor => s.listEntries(d, {
      cursor: cursor,
      skipKeyStats: !0,
      skipScopeStats: !0
    }), m => {
      for (let i of m) {
        if (i.kind !== "key" || i.key.namespace !== "sidecar") continue;
        if ((i.key.relPath.at(-1) ?? "").endsWith(n)) a.push(i.key);
      }
    });
  switch (o.status) {
    case "done":
      break;
    case "error":
      throw t(`${e}: ${o.error.code}`), Error("mcp task metadata list failed");
    case "capped":
      throw t(`${e}: list exceeded ${ny} pages`), Error("mcp task metadata list exceeded the page cap");
  }
  let u = [];
  for (let key of a) {
    let i = key.relPath.at(-1) ?? "",
      M = await s.read([{
        key: key,
        offset: 0,
        length: l + 1
      }]);
    if (!M.ok) {
      t(`${e}: skipping ${i}: ${M.error.code}`);
      continue;
    }
    let S = M.value.items[0];
    if (!S.found) continue;
    if (S.totalBytes > l) {
      t(`${e}: skipping ${i}: over the size bound`);
      continue;
    }
    try {
      let k = r(ee(Buffer.from(S.value).toString("utf8")), i);
      if (!k.success) {
        t(`${e}: skipping ${i}: ${String(k.error)}`);
        continue;
      }
      u.push(k.data);
    } catch (error) {
      t(`${e}: skipping ${i}: ${String(error)}`);
    }
  }
  return u;
}
export { G9o, R9r, V9o, opi, eir, K9o, $8, vvn, tir, spi, Evn, EQ, nir, ipi };