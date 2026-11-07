// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { qnt, cKn } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { HFe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { zKe, zV, FO } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Fn, Ci } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { El } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { ge, Mn, Ft, QD, v_, NU } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { open as A } from "fs/promises";
import { isAbsolute as R } from "path";
var f = new Set(zV),
  S = new Set([...FO, ...zV.filter(item => item !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" && !item.startsWith("CLAUDE_CODE_ARTIFACT") && !zKe(item)), "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_SKIP_VERTEX_AUTH"]),
  D = p(() => {
    let procStart = QD([Mn(), ge()]).pipe(NU.number());
    return Ft({
      env: v_(ge()),
      expiresAt: procStart.nullable().default(null),
      pid: Mn().int(),
      procStart: procStart
    });
  }),
  O = 2000,
  E = new Set(),
  l = null;
function BIt() {
  return i.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function XEe() {
  return !!qnt() && (!(Fn() && Ci()) || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
}
async function C() {
  let CLAUDE_CODE_HOST_CREDS_FILE = i.CLAUDE_CODE_HOST_CREDS_FILE;
  if (!CLAUDE_CODE_HOST_CREDS_FILE || !R(CLAUDE_CODE_HOST_CREDS_FILE)) return null;
  let r;
  try {
    r = await A(CLAUDE_CODE_HOST_CREDS_FILE, "r");
    let n = await r.stat();
    if (n.size > 65536) return null;
    if (x() !== "windows") {
      if ((n.mode & 63) !== 0 || n.uid !== process.getuid?.()) return t("ignoring CLAUDE_CODE_HOST_CREDS_FILE with group/other-readable mode or wrong owner", {
        level: "warn"
      }), null;
    }
    let o = await r.readFile({
        encoding: "utf8"
      }),
      s = D().safeParse(ee(o));
    if (!s.success || !Number.isFinite(s.data.procStart)) return null;
    let a = s.data;
    if (!El(a.pid)) return null;
    let c = await HFe(a.pid);
    if (c !== null && Math.abs(a.procStart - c) > O) return null;
    if (a.expiresAt !== null && a.expiresAt < Date.now()) return null;
    let env = {};
    for (let [u, g] of Object.entries(a.env)) if (S.has(u)) env[u] = g;
    return {
      ...a,
      env: env
    };
  } catch (error) {
    if (!K(error)) t(`readHostCredsFile failed: ${d(error)}`, {
      level: "warn"
    });
    return null;
  } finally {
    await r?.close().catch(() => {});
  }
}
async function Rhr() {
  if (qnt()) return;
  if (!i.CLAUDE_CODE_HOST_CREDS_FILE || !Pe(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return;
  let e = await C();
  if (e) {
    let r = new Map(),
      n = {};
    for (let [o, s] of Object.entries(e.env)) if (f.has(o)) h(r, o, s);else n[o] = s;
    l = r, m(n);
  } else t(`CLAUDE_CODE_HOST_CREDS_FILE is set (${i.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`, {
    level: "warn"
  });
  cKn(async () => {
    let r = await C();
    if (!r) throw Error("host-creds file re-read failed (missing/stale/expired)");
    let n = {};
    for (let [s, a] of Object.entries(r.env)) if (!f.has(s)) n[s] = a;else if (l && l.get(s) !== a) throw t(`host-creds refresh rejected: endpoint changed (${s})`, {
      level: "warn"
    }), Error("host-creds refresh rejected: endpoint changed");
    let o = BIt();
    if (E.has(o) && !n[o]) throw Error("host-creds refresh dropped the bearer key");
    if (!l) {
      let s = new Map();
      for (let [a, c] of Object.entries(r.env)) if (f.has(a)) h(s, a, c);
      l = s;
    }
    return m(n), {
      authToken: n[o] ?? null
    };
  });
}
function h(e, r, n) {
  let o = process.env[r];
  if (o && o !== n) {
    t(`host-creds seed: keeping the launch env's ${r}; the file names a different endpoint`, {
      level: "warn"
    }), e.set(r, o);
    return;
  }
  process.env[r] = n, e.set(r, n);
}
function m(e) {
  for (let r of E) if (!(r in e)) delete process.env[r];
  Object.assign(process.env, e), E = new Set(Object.keys(e));
}
export { BIt, XEe, Rhr };