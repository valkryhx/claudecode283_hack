// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y, fre, we } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { gu, qUe } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { HF } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { TEr, E_o } from "B:/~BUN/root/chunk-6jwexnnw.js";
import { REr } from "B:/~BUN/root/chunk-nakgperr.js";
import { cp, Ks } from "B:/~BUN/root/chunk-1652axk8.js";
import { rr, de, fn, lt } from "B:/~BUN/root/chunk-8386ms9e.js";
import { dirname as y, join as g } from "path";
var h = /^k[0-9a-z]{8}$/,
  m = 256,
  u = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u,
  I = /^[A-Za-z0-9_-]{1,128}$/,
  P = f(() => lt({
    taskId: de().regex(h),
    serverName: de().min(1).max(m).regex(u),
    toolName: de().min(1).max(m).regex(u),
    mcpTaskId: de().min(1).regex(u),
    pollIntervalMs: fn().optional(),
    spawnedAt: fn(),
    toolUseId: de().regex(REr).optional(),
    protocol: de().min(1).max(m).regex(/^[\x20-\x7e]+$/).optional(),
    ttlExpiresAt: fn().optional(),
    transportFingerprint: de().max(8192).optional(),
    workerWakeId: de().regex(I).optional()
  }).passthrough().superRefine((e, a) => {
    if (e.protocol === "sep2663" && (e.mcpTaskId.length > TEr || !E_o.test(e.mcpTaskId))) a.addIssue({
      code: rr.custom,
      path: ["mcpTaskId"],
      message: "sep2663 task id exceeds the wire bound"
    });
  }));
function M(e) {
  return P().safeParse(e);
}
function fwe() {
  return fre() ?? qUe() ?? gu(we());
}
function T(e = Y(), a = fwe()) {
  return g(a, e, "mcp-tasks");
}
function S(e, a = Y(), s) {
  return g(T(a, s), `mcp-task-${e}.meta.json`);
}
function k(e = fwe()) {
  return HF(e);
}
function w(e, a, s = Y()) {
  return Ae.sidecar(e, s, ["mcp-tasks", `mcp-task-${a}.meta.json`]);
}
async function R5t(e, a, s) {
  let o = H() && s !== void 0 ? k() : void 0,
    c = Y(),
    n = S(e, c);
  if (await Qt().mkdir(y(n)), s && o !== void 0) {
    let r = await s.write(w(o, e, c), b(a), {
      publishDiscipline: "inPlace"
    });
    if (!r.ok) throw t(`writeMcpTaskMetadata: ${r.error.code}`), Error("mcp task metadata write failed");
    return;
  }
  await Qt().write(n, b(a));
}
async function lse(e, a, s, o) {
  let c = H() && a !== void 0 ? k(o) : void 0;
  if (a && c !== void 0) {
    let r = await a.delete(w(c, e, s));
    if (!r.ok) throw t(`deleteMcpTaskMetadata: ${r.error.code}`), Error("mcp task metadata delete failed");
    return;
  }
  let n = S(e, s, o);
  try {
    await Qt().delete(n);
  } catch (error) {
    if (Et(error)) return;
    throw error;
  }
}
async function A5t(e) {
  let a = H() && e !== void 0 ? k() : void 0;
  if (e && a !== void 0) return _(e, a);
  let s = T(),
    o;
  try {
    o = await Qt().list(s);
  } catch (error) {
    if (Et(error)) return [];
    throw error;
  }
  let c = [];
  for (let n of o) {
    if (!n.endsWith(".meta.json")) continue;
    try {
      let r = await Qt().read(g(s, n)),
        i = M(J(r));
      if (!i.success) {
        t(`listMcpTaskMetadata: skipping ${n}: ${String(i.error)}`);
        continue;
      }
      c.push(i.data);
    } catch (error) {
      t(`listMcpTaskMetadata: skipping ${n}: ${String(error)}`);
    }
  }
  return c;
}
async function _(e, projectKey) {
  let s = {
      namespace: "sidecar",
      projectKey: projectKey,
      sessionId: Y(),
      relPath: ["mcp-tasks"]
    },
    o = [],
    c = await Ks(cursor => e.listEntries(s, {
      cursor: cursor,
      skipKeyStats: !0,
      skipScopeStats: !0
    }), r => {
      for (let i of r) {
        if (i.kind !== "key" || i.key.namespace !== "sidecar") continue;
        if ((i.key.relPath.at(-1) ?? "").endsWith(".meta.json")) o.push(i.key);
      }
    });
  switch (c.status) {
    case "done":
      break;
    case "error":
      throw t(`listMcpTaskMetadata: ${c.error.code}`), Error("mcp task metadata list failed");
    case "capped":
      throw t(`listMcpTaskMetadata: list exceeded ${cp} pages`), Error("mcp task metadata list exceeded the page cap");
  }
  let n = [];
  for (let r of o) {
    let i = r.relPath.at(-1) ?? "",
      d = await e.read([r]);
    if (!d.ok) {
      t(`listMcpTaskMetadata: skipping ${i}: ${d.error.code}`);
      continue;
    }
    let l = d.value.items[0];
    if (!l.found) continue;
    try {
      let p = M(J(Buffer.from(l.value).toString("utf8")));
      if (!p.success) {
        t(`listMcpTaskMetadata: skipping ${i}: ${String(p.error)}`);
        continue;
      }
      n.push(p.data);
    } catch (error) {
      t(`listMcpTaskMetadata: skipping ${i}: ${String(error)}`);
    }
  }
  return n;
}
export { fwe, R5t, lse, A5t };