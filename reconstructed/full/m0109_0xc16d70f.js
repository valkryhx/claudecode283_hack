// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  oe
} from "B:/~BUN/root/chunk-shgdrs47.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Ze,
  hf
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  mn,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  Kd,
  yt,
  YAe
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  Ro
} from "B:/~BUN/root/chunk-y72v2pst.js";
import {
  kC,
  j8e
} from "B:/~BUN/root/chunk-mjdkd2h9.js";
var rK = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`,
  Wgn = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`,
  vWr = `(?:${rK}/)+${rK}/-/merge_requests`,
  kWr = String.raw`[a-z0-9-]+-review\.googlesource\.com`,
  zgn = new RegExp(String.raw`^https://${kWr}/c/(?:${rK}/)*${rK}/\+/\d{1,9}$`),
  g$o = new RegExp(`^https?://${Wgn}(?::\\d{1,5})?/${vWr}/\\d+$`),
  $ft = 2048;

function $J(e) {
  return /\/-\/merge_requests\/\d/.test(e)
}
var b = 21;

function ZR(e) {
  return e.owner.includes("/")
}

function wBt() {
  Kd().repositoryByCwd.clear(), Kd().remoteHostByCwd.clear()
}
async function PUe() {
  let e = await Ww();
  if (!e) return null;
  if (!Ro(e.host)) return null;
  return `${e.owner}/${e.name}`
}
class y {
  guards = null;
  setGuards(e) {
    this.guards = e
  }
  blocked() {
    if (!this.guards) return !0;
    try {
      return !this.guards.trustProbe()
    } catch {
      return !0
    }
  }
}
var C = new q(() => new y);

function vBt() {
  return C.of(j().host)
}

function kBt(e) {
  vBt().setGuards(e)
}
async function Uft(e, o) {
  if (vBt().blocked()) return null;
  let r = o?.exe ?? yt(),
    n = {
      cwd: e,
      preserveOutputOnError: !1,
      ...o !== void 0 && {
        env: o.env,
        extendEnv: !1
      }
    },
    l = await Ve(r, [...mn, "remote", "get-url", "origin"], n);
  if (l.code === 0 && l.stdout.trim()) return {
    name: "origin",
    url: l.stdout.trim()
  };
  let s = await Ve(r, [...mn, "remote"], n),
    u = s.code === 0 ? Ze(s.stdout.trim(), `
`).trim() : void 0;
  if (!u) return null;
  let a = await Ve(r, [...mn, "remote", "get-url", u], n),
    i = a.code === 0 ? a.stdout.trim() : "";
  if (!i) return null;
  return {
    name: hf(u),
    url: i
  }
}
async function IUe(e) {
  return (await Uft(e))?.url ?? null
}
async function EWr(e) {
  return (await x(e)).url
}
async function x(e) {
  if (vBt().blocked()) return {
    url: null,
    answered: !1
  };
  let {
    stdout: o,
    code: r,
    exitCode: n
  } = await Ve(yt(), [...mn, "remote", "get-url", "--push", "origin"], {
    cwd: e,
    preserveOutputOnError: !1
  }), l = r === 0 ? o.trim() || null : null;
  return {
    url: l,
    answered: l !== null || n === 2
  }
}
async function Ww(e, o) {
  let r = e ?? oe(),
    n = Kd().repositoryByCwd;
  if (!o?.skipCache && n.has(r)) {
    let s = n.get(r) ?? null;
    if (!s || !ZR(s)) return s
  }
  let l = () => {
    let s = n.get(r);
    if (s && ZR(s)) n.delete(r)
  };
  try {
    let s = await IUe(r);
    if (t(`Git remote URL: ${YAe(s)}`), !s) return t("No git remote URL found"), Kd().remoteHostByCwd.delete(r), l(), null;
    let u = null,
      i = ((g) => {
        let p = Gx(g);
        if (p && ZR(p)) return u ??= p, null;
        return p
      })(s),
      h = !1;
    if (!i) {
      let {
        stdout: g,
        code: p,
        exitCode: G
      } = await Ve(yt(), [...mn, "config", "--get", "remote.origin.url"], {
        cwd: r,
        preserveOutputOnError: !1
      }), d = p === 0 ? g.trim() : null, E = d !== null || G === 1;
      if (d && d !== s) {
        if (i = Gx(d), i && ZR(i)) u ??= i, i = null
      }
      if (!i) {
        let w = await x(r),
          f = w.url;
        if (f && f !== s && f !== d) {
          if (i = Gx(f), i && ZR(i)) u ??= i, i = null
        }
        h = E && w.answered
      }
    }
    i ??= u, t(`Parsed repository: ${i?`${i.host}/${i.owner}/${i.name}`:null} from URL: ${YAe(s)}`);
    let R = i?.host ?? j8e(s);
    if (R) Kd().remoteHostByCwd.set(r, R);
    else Kd().remoteHostByCwd.delete(r);
    if (i) n.set(r, i);
    else if (h) n.delete(r);
    return i
  } catch (s) {
    return t(`Error detecting repository: ${s}`), l(), null
  }
}

function TWr() {
  let e = Kd().repositoryByCwd.get(oe());
  if (!e || !Ro(e.host)) return null;
  return `${e.owner}/${e.name}`
}

function LYn() {
  return Kd().repositoryByCwd.get(oe())?.host ?? null
}

function CWr(e) {
  if ($J(e) || /^!\d+$/.test(e)) return !0;
  if (/^https?:\/\//i.test(e)) return !1;
  let o = LYn();
  return o !== null && kC(o) === "gitlab"
}

function RWr(e) {
  let r = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(r) ? r : ""
}
var _ = new RegExp(`^(https?://${Wgn}(?::\\d{1,5})?/(?:${rK}/)+${rK})/-/merge_requests/\\d`);

function AWr(e) {
  return _.exec(e)?.[1] ?? null
}

function Bft() {
  return Kd().remoteHostByCwd.get(oe()) ?? null
}

function EBt() {
  let e = oe(),
    o = Kd().repositoryByCwd;
  if (!o.has(e)) return;
  let r = o.get(e);
  return !!r && Ro(r.host)
}

function Gx(e) {
  let o = e.trim(),
    r = o.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (r?.[1] && r[2] && r[3]) {
    if (!m(r[1])) return null;
    if (!c(r[2]) || !c(r[3])) return null;
    return {
      host: r[1],
      owner: r[2],
      name: r[3]
    }
  }
  let n = o.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (n?.[1] && n[2] && n[3] && n[4]) {
    let l = n[1],
      s = n[2],
      u = Ze(s, ":");
    if (!m(u)) return null;
    let a = l === "https" || l === "http" ? s : u;
    if (!c(n[3]) || !c(n[4])) return null;
    return {
      host: a,
      owner: n[3],
      name: n[4]
    }
  }
  return P(o)
}

function P(e) {
  let o, r, n, l = e.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (l?.[1] && l[2]) r = l[1], n = l[2];
  else {
    let a = e.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/);
    if (!a?.[1] || !a[2] || !a[3]) return null;
    o = a[1], r = a[2], n = a[3]
  }
  let s = Ze(r, ":");
  if (!m(s) || kC(s) !== "gitlab") return null;
  let u = n.split("/");
  if (u.length < 3 || u.length > b + 1 || !u.every(c)) return null;
  return {
    host: o === "https" || o === "http" ? r : s,
    owner: u.slice(0, -1).join("/"),
    name: u.at(-1)
  }
}

function xWr(e) {
  let o = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!o?.[1] || !o[2]) return null;
  if (!c(o[1]) || !c(o[2])) return null;
  return {
    owner: o[1],
    name: o[2]
  }
}

function OUe(e) {
  let o = e.trim(),
    r = Gx(o);
  if (r) {
    if (!Ro(r.host)) return null;
    return `${r.owner}/${r.name}`
  }
  if (!o.includes("://") && !o.includes("@") && o.includes("/")) {
    let n = o.split("/");
    if (n.length === 2 && n[0] && n[1]) {
      let l = n[1].replace(/\.git$/, "");
      if (!c(n[0]) || !c(l)) return null;
      return `${n[0]}/${l}`
    }
  }
  return t(`Could not parse repository from: ${o}`), null
}
var A = /^[A-Za-z0-9._-]+$/;

function c(e) {
  return A.test(e) && !e.startsWith("-") && e !== "." && e !== ".."
}

function m(e) {
  if (!/^[A-Za-z0-9.-]+$/.test(e) || e.startsWith("-") || !e.includes(".")) return !1;
  let o = e.split(".").pop();
  if (!o) return !1;
  return /^[a-zA-Z]+$/.test(o)
}
export {
  rK,
  Wgn,
  vWr,
  kWr,
  zgn,
  g$o,
  $ft,
  $J,
  ZR,
  wBt,
  PUe,
  vBt,
  kBt,
  Uft,
  IUe,
  EWr,
  Ww,
  TWr,
  LYn,
  CWr,
  RWr,
  AWr,
  Bft,
  EBt,
  Gx,
  xWr,
  OUe
};
