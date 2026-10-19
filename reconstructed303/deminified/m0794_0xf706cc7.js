// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { x, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { TA } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { lDe } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { uie } from "B:/~BUN/root/chunk-m5caq93p.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
import { o, v, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { randomBytes as T } from "crypto";
import { mkdir as b, rename as F, rm as E, writeFile as B } from "fs/promises";
import { join as h } from "path";
var wst = "mcp-skill-archives",
  D = "meta.json",
  w = "SKILL.md",
  j = f(() => u({
    uri: o().optional(),
    cacheKey: o(),
    fetchedAt: v()
  }));
function I() {
  return h(Pe(), wst);
}
function L(e, n) {
  return Be.userConfigDir(wst, [e, n, w]);
}
function z(e) {
  return Be.userConfigDir(wst, [e, D]);
}
function R(e) {
  return uie(h(e, D), () => j().nullable(), {
    defaultValue: null,
    ensureDir: !0
  });
}
var g = 64,
  A = 16,
  me = g + 2 + g + 2 + A;
function P(e, n, r) {
  let i = st(`${e}\x00${r}`).slice(0, A),
    a = Tn(e).slice(0, g),
    c = n.replace(/[^A-Za-z0-9._-]/g, "-").slice(0, g);
  return `${a}--${c}--${i}`;
}
function K(e) {
  return e.digest.slice(7);
}
async function Aas(e) {
  try {
    return await R(e).read();
  } catch {
    return null;
  }
}
async function H(e, n, r) {
  let i = await e.write(z(n), _(r), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw new x(`meta.json write failed: ${yt(i.error)}`, "MCP skill cache meta.json write failed");
}
async function xas({
  serverName: serverName,
  skillName: skillName,
  row: row
}, i) {
  let a = P(serverName, skillName, row.uri),
    c = K(row);
  if (i) {
    let m = await i.read([{
      key: L(a, c),
      offset: 0,
      length: row.size + 1
    }]);
    if (!m.ok) return;
    let l = m.value.items[0];
    if (!l.found) return;
    return l.value;
  }
  let s = await TA(h(I(), a, c, w));
  if (!s.ok) return;
  let S = s.value;
  try {
    let m = Buffer.alloc(row.size + 1),
      l = 0;
    while (l < m.length) {
      let {
        bytesRead: bytesRead
      } = await S.read(m, l, m.length - l, l);
      if (bytesRead === 0) break;
      l += bytesRead;
    }
    return m.subarray(0, l);
  } catch {
    return;
  } finally {
    await S.close().catch(() => {});
  }
}
async function N(e, n, r) {
  for (let i of [[n, r], [n]]) {
    let a = Be.userConfigDir(wst, i);
    if ((await e.statMeta(a)).ok) {
      t(`[mcp-skills] replacing a stray file at ${wst}/${i.join("/")} with the cache directory`);
      let c = await e.delete(a);
      if (!c.ok) t(`[mcp-skills] could not remove the stray file at ${wst}/${i.join("/")}: ${yt(c.error)}`);
      return c.ok;
    }
  }
  return !1;
}
async function O(e, n, r, i) {
  let a = L(n, r),
    c = {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    },
    s = await e.write(a, i, c);
  if (!s.ok && s.error.code === "Failed" && (s.error.telemetryCode === "ENOTDIR" || s.error.telemetryCode === "ENOENT") && (await N(e, n, r))) s = await e.write(a, i, c);
  if (!s.ok) throw new x(`SKILL.md write failed: ${yt(s.error)}`, "MCP skill cache SKILL.md write failed");
}
async function Pas({
  serverName: serverName_2,
  skillName: skillName_2,
  row: row_2
}, i, a) {
  let c = P(serverName_2, skillName_2, row_2.uri),
    cacheKey = K(row_2),
    S = h(I(), c),
    m = h(S, cacheKey);
  try {
    if (W() && a) await O(a, c, cacheKey, i);else {
      let p = h(S, `.tmp-${process.pid}-${T(4).toString("hex")}`);
      await b(p, {
        recursive: !0
      });
      let M = !1;
      try {
        await B(h(p, w), i);
        try {
          await F(p, m), M = !0;
        } catch (error) {
          let y = k(error);
          if (y !== "EEXIST" && y !== "ENOTEMPTY" && y !== "ENOTDIR" && y !== "EPERM" && y !== "EACCES" && y !== "EBUSY") throw error;
          await E(m, {
            recursive: !0,
            force: !0
          }), await lDe(p, m), M = !0;
        }
      } finally {
        if (!M) await E(p, {
          recursive: !0,
          force: !0
        }).catch(() => {});
      }
    }
    let l = {
      uri: row_2.uri,
      cacheKey: cacheKey,
      fetchedAt: Date.now()
    };
    if (W() && a) await H(a, c, l);else await R(S).write(l);
  } catch (error) {
    re(serverName_2, `Failed to cache SKILL.md for '${skillName_2}': ${d(error)}`);
  }
}
export { wst, Aas, xas, Pas };