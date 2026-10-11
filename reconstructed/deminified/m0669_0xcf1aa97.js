// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { P } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { ne } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { rX } from "B:/~BUN/root/chunk-zfjnfpf7.js";
import { vn } from "B:/~BUN/root/chunk-z24e0xw2.js";
import { o, E, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { readFile as D, stat as v } from "fs/promises";
import { join as m } from "path";
var ltt = "mcp-skill-archives",
  p = "meta.json",
  C9t = "SKILL.md",
  I = 86400000,
  k = f(() => u({
    uri: o().optional(),
    cacheKey: o(),
    declaredDigest: o().optional(),
    fetchedAt: E()
  }));
function S() {
  return m(Se(), ltt);
}
function g(e, r) {
  return Ae.userConfigDir(ltt, [e, r, C9t]);
}
function w(e) {
  return Ae.userConfigDir(ltt, [e, p]);
}
function C(e) {
  return rX(m(e, p), () => k().nullable(), {
    defaultValue: null,
    ensureDir: !0
  });
}
function y(e, r, n) {
  let i = Kt(`${e}\x00${n}`).slice(0, 8),
    a = r.replace(/[^A-Za-z0-9._-]/g, "-").slice(0, 64);
  return `${vn(e)}--${a}--${i}`;
}
function R9t(e) {
  if (!e) return;
  let r = /^(?:sha256:)?([0-9a-fA-F]{64})$/.exec(e.trim());
  return r ? r[1].toLowerCase() : void 0;
}
async function Rfr(e) {
  try {
    return await C(e).read();
  } catch {
    return null;
  }
}
async function _(e, r) {
  await C(e).write(r);
}
async function L(e, r) {
  let n = await e.read([w(r)]);
  if (!n.ok) return null;
  let i = n.value.items[0];
  if (!i.found) return null;
  let a;
  try {
    a = J(Buffer.from(i.value).toString("utf8"));
  } catch (error) {
    return t(`mcpSkillCache: meta.json for ${r} is not valid JSON: ${error}`, {
      level: "warn"
    }), null;
  }
  let c = k().nullable().safeParse(a);
  if (!c.success) return t(`mcpSkillCache: meta.json for ${r} failed schema validation: ${c.error.message}`, {
    level: "warn"
  }), null;
  return c.data;
}
async function x(e, r, n) {
  let i = await e.write(w(r), b(n), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw new P(`meta.json write failed: ${rt(i.error)}`, "MCP skill cache meta.json write failed");
}
async function cao(e, r, n) {
  let i = y(e, r.name, r.uri),
    slugDir = m(S(), i),
    c = {
      hit: !1,
      slugDir: slugDir
    },
    cacheKey,
    d = R9t(r.digest ?? void 0);
  if (d) cacheKey = d;else {
    let l = n ? await L(n, i) : await Rfr(slugDir);
    if (!l || Date.now() - l.fetchedAt >= I) return c;
    cacheKey = l.cacheKey;
  }
  if (n) {
    let l = await n.read([g(i, cacheKey)]);
    if (!l.ok) return c;
    let h = l.value.items[0];
    return h.found ? {
      hit: !0,
      cacheKey: cacheKey,
      skillMd: Buffer.from(h.value).toString("utf8")
    } : c;
  }
  let M = m(slugDir, cacheKey);
  try {
    let skillMd = await D(m(M, C9t), "utf8");
    return {
      hit: !0,
      cacheKey: cacheKey,
      skillMd: skillMd
    };
  } catch {
    return c;
  }
}
async function Afr(e, r, n, i) {
  return i ? (await i.statMeta(g(e, r))).ok : v(m(n, C9t)).then(a => a.isFile()).catch(() => !1);
}
async function dao(e, r, n, i) {
  let slug = y(e, r.name, r.uri),
    slugDir_2 = m(S(), slug),
    keyDir = m(slugDir_2, n),
    alreadyCached = await Afr(slug, n, keyDir, i);
  if (alreadyCached) ne(e, `Skill '${r.name}' content unchanged \u2014 reusing ${keyDir}`);
  return {
    slug: slug,
    slugDir: slugDir_2,
    keyDir: keyDir,
    alreadyCached: alreadyCached
  };
}
async function B(e, r, n) {
  for (let i of [[r, n], [r]]) {
    let a = Ae.userConfigDir(ltt, i);
    if ((await e.statMeta(a)).ok) {
      t(`[mcp-skills] replacing a stray file at ${ltt}/${i.join("/")} with the cache directory`);
      let c = await e.delete(a);
      if (!c.ok) t(`[mcp-skills] could not remove it: ${rt(c.error)}`);
      return c.ok;
    }
  }
  return !1;
}
async function uao(e, r, n, i) {
  let a = g(r, n),
    c = {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    },
    s = await e.write(a, i, c);
  if (!s.ok && s.error.code === "Failed" && (s.error.telemetryCode === "ENOTDIR" || s.error.telemetryCode === "ENOENT") && (await B(e, r, n))) s = await e.write(a, i, c);
  if (!s.ok) throw new P(`SKILL.md write failed: ${rt(s.error)}`, "MCP skill cache SKILL.md write failed");
}
async function pao(e, r, cacheKey_2, i) {
  let a = {
    uri: r.uri,
    cacheKey: cacheKey_2,
    declaredDigest: R9t(r.digest ?? void 0),
    fetchedAt: Date.now()
  };
  if (H() && i) {
    await x(i, e.slug, a);
    return;
  }
  await _(e.slugDir, a);
}
export { ltt, C9t, R9t, Rfr, cao, Afr, dao, uao, pao };