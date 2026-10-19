// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { e1, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { nt, Zg } from "B:/~BUN/root/chunk-nggrknsv.js";
import { kn } from "B:/~BUN/root/chunk-yw21pggd.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { tf, GUr, Ot, Zze } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { ro } from "B:/~BUN/root/chunk-fsp20me0.js";
import { A5 } from "B:/~BUN/root/chunk-wegca9zh.js";
import { iI, abt } from "B:/~BUN/root/chunk-59tbtn9n.js";
var P4 = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`,
  z9n = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`,
  g1o = `(?:${P4}/)+${P4}/-/merge_requests`,
  h1o = String.raw`[a-z0-9-]+-review\.googlesource\.com`,
  regExp = new RegExp(String.raw`^https://${h1o}/c/(?:${P4}/)*${P4}/\+/\d{1,9}$`),
  regExp_2 = new RegExp(`^https?://${z9n}(?::\\d{1,5})?/${g1o}/\\d+$`),
  Kze = 2048;
function lde(e) {
  return /\/-\/merge_requests\/\d/.test(e);
}
var y1o = void 0;
function hTe({
  file: file,
  args: args,
  cwd: cwd,
  env: env
}, l) {
  return ct(file, args, {
    ...l,
    encoding: l.encoding ?? y1o,
    cwd: cwd,
    env: env,
    extendEnv: !1
  });
}
var E = 21;
function p$(e) {
  return e.owner.includes("/");
}
function kfn() {
  tf().repositoryByCwd.clear(), tf().remoteHostByCwd.clear();
}
async function W7e() {
  let e = await tC();
  if (!e) return null;
  if (!ro(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function W0e() {
  return GUr.of(j().host);
}
function Efn(e) {
  W0e().setGuards(e);
}
async function NUr(cwd_2, n) {
  if (W0e().blocked()) return null;
  let r = n ?? Ot(),
    o = (...m) => {
      let f = [...kn, ...m],
        p = {
          preserveOutputOnError: !1
        };
      return typeof r === "string" ? ct(r, f, {
        ...p,
        cwd: cwd_2
      }) : hTe(r(f), p);
    },
    l = await o("remote", "get-url", "origin");
  if (l.code === 0 && l.stdout.trim()) return {
    name: "origin",
    url: l.stdout.trim()
  };
  let i = await o("remote"),
    u = i.code === 0 ? nt(i.stdout.trim(), `
`).trim() : void 0;
  if (!u) return null;
  let a = await o("remote", "get-url", u),
    url = a.code === 0 ? a.stdout.trim() : "";
  if (!url) return null;
  return {
    name: Zg(u),
    url: url
  };
}
async function z7e(e) {
  return (await NUr(e))?.url ?? null;
}
async function _1o(e) {
  return (await y(e)).url;
}
async function y(cwd_3) {
  if (W0e().blocked()) return {
    url: null,
    answered: !1
  };
  let {
      stdout: stdout,
      code: code,
      exitCode: exitCode
    } = await ct(Ot(), [...kn, "remote", "get-url", "--push", "origin"], {
      cwd: cwd_3,
      preserveOutputOnError: !1
    }),
    url_2 = code === 0 ? stdout.trim() || null : null;
  return {
    url: url_2,
    answered: url_2 !== null || exitCode === 2
  };
}
async function tC(e, n) {
  let cwd_4 = e ?? ce(),
    repositoryByCwd = tf().repositoryByCwd;
  if (!n?.skipCache && repositoryByCwd.has(cwd_4)) {
    let i = repositoryByCwd.get(cwd_4) ?? null;
    if (!i || !p$(i)) return i;
  }
  let l = () => {
    let i = repositoryByCwd.get(cwd_4);
    if (i && p$(i)) repositoryByCwd.delete(cwd_4);
  };
  try {
    let i = await z7e(cwd_4);
    if (t(`Git remote URL: ${Zze(i)}`), !i) return t("No git remote URL found"), tf().remoteHostByCwd.delete(cwd_4), l(), null;
    let u = null,
      s = (p => {
        let d = EA(p);
        if (d && p$(d)) return u ??= d, null;
        return d;
      })(i),
      m = !1;
    if (!s) {
      let {
          stdout: stdout_2,
          code: code_2,
          exitCode: exitCode_2
        } = await ct(Ot(), [...kn, "config", "--get", "remote.origin.url"], {
          cwd: cwd_4,
          preserveOutputOnError: !1
        }),
        g = code_2 === 0 ? stdout_2.trim() : null,
        x = g !== null || exitCode_2 === 1;
      if (g && g !== i) {
        if (s = EA(g), s && p$(s)) u ??= s, s = null;
      }
      if (!s) {
        let R = await y(cwd_4),
          h = R.url;
        if (h && h !== i && h !== g) {
          if (s = EA(h), s && p$(s)) u ??= s, s = null;
        }
        m = x && R.answered;
      }
    }
    s ??= u, t(`Parsed repository: ${s ? `${s.host}/${s.owner}/${s.name}` : null} from URL: ${Zze(i)}`);
    let f = s?.host ?? abt(i);
    if (f) tf().remoteHostByCwd.set(cwd_4, f);else tf().remoteHostByCwd.delete(cwd_4);
    if (s) repositoryByCwd.set(cwd_4, s);else if (m) repositoryByCwd.delete(cwd_4);
    return s;
  } catch (error) {
    return t(`Error detecting repository: ${error}`), l(), null;
  }
}
function b1o() {
  let e = tf().repositoryByCwd.get(ce());
  if (!e || !ro(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function FUr() {
  return tf().repositoryByCwd.get(ce())?.host ?? null;
}
function S1o(e) {
  if (lde(e) || /^!\d+$/.test(e)) return !0;
  if (/^https?:\/\//i.test(e)) return !1;
  let n = FUr();
  return n !== null && iI(n) === "gitlab";
}
function w1o(e) {
  let r = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(r) ? r : "";
}
var regExp_3 = new RegExp(`^(https?://${z9n}(?::\\d{1,5})?/(?:${P4}/)+${P4})/-/merge_requests/\\d`);
function v1o(e) {
  return regExp_3.exec(e)?.[1] ?? null;
}
function A1t() {
  return tf().remoteHostByCwd.get(ce()) ?? null;
}
function Tfn() {
  let e = ce(),
    repositoryByCwd_2 = tf().repositoryByCwd;
  if (!repositoryByCwd_2.has(e)) return;
  let r = repositoryByCwd_2.get(e);
  return !!r && ro(r.host);
}
function EA(e) {
  let n = e.trim();
  if (e1(n) || A5(n)) return null;
  let r = n.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (r?.[1] && r[2] && r[3]) {
    if (!w(r[1])) return null;
    if (!c(r[2]) || !c(r[3])) return null;
    return {
      host: r[1],
      owner: r[2],
      name: r[3]
    };
  }
  let o = n.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (o?.[1] && o[2] && o[3] && o[4]) {
    let l = o[1],
      i = o[2],
      u = nt(i, ":");
    if (!w(u)) return null;
    let host = l === "https" || l === "http" ? i : u;
    if (!c(o[3]) || !c(o[4])) return null;
    return {
      host: host,
      owner: o[3],
      name: o[4]
    };
  }
  return _(n);
}
function _(e) {
  let n,
    r,
    o,
    l = e.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (l?.[1] && l[2]) r = l[1], o = l[2];else {
    let a = e.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/);
    if (!a?.[1] || !a[2] || !a[3]) return null;
    n = a[1], r = a[2], o = a[3];
  }
  let i = nt(r, ":");
  if (!w(i) || iI(i) !== "gitlab") return null;
  let u = o.split("/");
  if (u.length < 3 || u.length > E + 1 || !u.every(c)) return null;
  return {
    host: n === "https" || n === "http" ? r : i,
    owner: u.slice(0, -1).join("/"),
    name: u.at(-1)
  };
}
function x1t(e) {
  let n = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!n?.[1] || !n[2]) return null;
  if (!c(n[1]) || !c(n[2])) return null;
  return {
    owner: n[1],
    name: n[2]
  };
}
function G7e(e) {
  let n = e.trim(),
    r = EA(n);
  if (r) {
    if (!ro(r.host)) return null;
    return `${r.owner}/${r.name}`;
  }
  if (!n.includes("://") && !n.includes("@") && n.includes("/")) {
    let o = n.split("/");
    if (o.length === 2 && o[0] && o[1]) {
      let l = o[1].replace(/\.git$/, "");
      if (!c(o[0]) || !c(l)) return null;
      return `${o[0]}/${l}`;
    }
  }
  return t(`Could not parse repository from: ${n}`), null;
}
var b = /^[A-Za-z0-9._-]+$/;
function c(e) {
  return b.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function w(e) {
  if (!/^[A-Za-z0-9.-]+$/.test(e) || e.startsWith("-") || !e.includes(".")) return !1;
  let n = e.split(".").pop();
  if (!n) return !1;
  return /^[a-zA-Z]+$/.test(n);
}
export { P4, z9n, g1o, h1o, regExp as G9n, regExp_2 as m4s, Kze, lde, y1o, hTe, p$, kfn, W7e, W0e, Efn, NUr, z7e, _1o, tC, b1o, FUr, S1o, w1o, v1o, A1t, Tfn, EA, x1t, G7e };