// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { UGe, vgn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { mQe } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { u0e, NB, FB } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Xn, xi } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { ge, mn, St, YO, hg, WD } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { open as A } from "fs/promises";
import { isAbsolute as R } from "path";
var E = new Set(NB),
  S = new Set([...FB, ...NB.filter(item => item !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" && !item.startsWith("CLAUDE_CODE_ARTIFACT") && !u0e(item)), "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_SKIP_VERTEX_AUTH"]),
  D = f(() => {
    let procStart = YO([mn(), ge()]).pipe(WD.number());
    return St({
      env: hg(ge()),
      expiresAt: procStart.nullable().default(null),
      pid: mn().int(),
      procStart: procStart
    });
  }),
  O = 2000,
  p = new Set(),
  l = null;
function Ndt() {
  return a.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function Awe() {
  return !!UGe() && (!(Xn() && xi()) || a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
}
async function C() {
  let CLAUDE_CODE_HOST_CREDS_FILE = a.CLAUDE_CODE_HOST_CREDS_FILE;
  if (!CLAUDE_CODE_HOST_CREDS_FILE || !R(CLAUDE_CODE_HOST_CREDS_FILE)) return null;
  let r;
  try {
    r = await A(CLAUDE_CODE_HOST_CREDS_FILE, "r");
    let n = await r.stat();
    if (n.size > 65536) return null;
    if (I() !== "windows") {
      if ((n.mode & 63) !== 0 || n.uid !== process.getuid?.()) return t("ignoring CLAUDE_CODE_HOST_CREDS_FILE with group/other-readable mode or wrong owner", {
        level: "warn"
      }), null;
    }
    let o = await r.readFile({
        encoding: "utf8"
      }),
      s = D().safeParse(J(o));
    if (!s.success || !Number.isFinite(s.data.procStart)) return null;
    let i = s.data;
    if (!Ia(i.pid)) return null;
    let c = await mQe(i.pid);
    if (c !== null && Math.abs(i.procStart - c) > O) return null;
    if (i.expiresAt !== null && i.expiresAt < Date.now()) return null;
    let env = {};
    for (let [u, g] of Object.entries(i.env)) if (S.has(u)) env[u] = g;
    return {
      ...i,
      env: env
    };
  } catch (error) {
    if (!G(error)) t(`readHostCredsFile failed: ${d(error)}`, {
      level: "warn"
    });
    return null;
  } finally {
    await r?.close().catch(() => {});
  }
}
async function L$n() {
  if (UGe()) return;
  if (!a.CLAUDE_CODE_HOST_CREDS_FILE || !Fe(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return;
  let e = await C();
  if (e) {
    let r = new Map(),
      n = {};
    for (let [o, s] of Object.entries(e.env)) if (E.has(o)) h(r, o, s);else n[o] = s;
    l = r, m(n);
  } else t(`CLAUDE_CODE_HOST_CREDS_FILE is set (${a.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`, {
    level: "warn"
  });
  vgn(async () => {
    let r = await C();
    if (!r) throw Error("host-creds file re-read failed (missing/stale/expired)");
    let n = {};
    for (let [s, i] of Object.entries(r.env)) if (!E.has(s)) n[s] = i;else if (l && l.get(s) !== i) throw t(`host-creds refresh rejected: endpoint changed (${s})`, {
      level: "warn"
    }), Error("host-creds refresh rejected: endpoint changed");
    let o = Ndt();
    if (p.has(o) && !n[o]) throw Error("host-creds refresh dropped the bearer key");
    if (!l) {
      let s = new Map();
      for (let [i, c] of Object.entries(r.env)) if (E.has(i)) h(s, i, c);
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
  for (let r of p) if (!(r in e)) delete process.env[r];
  Object.assign(process.env, e), p = new Set(Object.keys(e));
}
export { Ndt, Awe, L$n };