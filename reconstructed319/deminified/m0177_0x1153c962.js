// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { ol, pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt, oy } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { nK } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { yn } from "B:/~BUN/root/chunk-88zb3509.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { um, Dxo, fr, Pt, ont } from "B:/~BUN/root/chunk-1g25msn4.js";
import { fo } from "B:/~BUN/root/chunk-46ahshhq.js";
import { Bte } from "B:/~BUN/root/chunk-x1xft50h.js";
import { gN, U1t } from "B:/~BUN/root/chunk-q15wjdnk.js";
var XJ = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`,
  iFr = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`,
  yBs = `(?:${XJ}/)+${XJ}/-/merge_requests`,
  _Bs = String.raw`[a-z0-9-]+-review\.googlesource\.com`,
  regExp = new RegExp(String.raw`^https://${_Bs}/c/(?:${XJ}/)*${XJ}/\+/\d{1,9}$`),
  regExp_2 = new RegExp(`^https?://${iFr}(?::\\d{1,5})?/${yBs}/\\d+$`),
  Ztt = 2048;
function fwe(e) {
  return /\/-\/merge_requests\/\d/.test(e);
}
var bBs = void 0;
function ent({
  file: file,
  args: args,
  cwd: cwd,
  env: env
}, u) {
  return lt(file, args, {
    ...u,
    encoding: u.encoding ?? bBs,
    cwd: cwd,
    env: env,
    extendEnv: !1
  });
}
var C = 21;
function sG(e) {
  return e.owner.includes("/");
}
function e2n() {
  um().repositoryByCwd.clear(), um().remoteHostByCwd.clear();
}
function SBs() {
  let e = ol();
  if (e === null) return;
  if (i.GIT_DIR || fr(e) !== null) TT(e);
}
async function t2n() {
  let e = await TT();
  if (!e) return null;
  if (!fo(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function wqe() {
  return Dxo.of(H().host);
}
function n2n(e) {
  wqe().setGuards(e);
}
async function Txo(cwd_2, o) {
  if (wqe().blocked()) return null;
  let r = o ?? Pt(),
    n = (...h) => {
      let g = [...yn, ...h],
        d = {
          preserveOutputOnError: !1
        };
      return typeof r === "string" ? lt(r, g, {
        ...d,
        cwd: cwd_2
      }) : ent(r(g), d);
    },
    u = await n("remote", "get-url", "origin");
  if (u.code === 0 && u.stdout.trim()) return {
    name: "origin",
    url: u.stdout.trim()
  };
  let s = await n("remote"),
    a = s.code === 0 ? tt(s.stdout.trim(), `
`).trim() : void 0;
  if (!a) return null;
  let c = await n("remote", "get-url", a),
    url = c.code === 0 ? c.stdout.trim() : "";
  if (!url) return null;
  return {
    name: oy(a),
    url: url
  };
}
async function bSt(e) {
  return (await Txo(e))?.url ?? null;
}
async function wBs(e) {
  return (await G(e)).url;
}
async function G(cwd_3) {
  if (wqe().blocked()) return {
    url: null,
    answered: !1
  };
  let {
      stdout: stdout,
      code: code,
      exitCode: exitCode
    } = await lt(Pt(), [...yn, "remote", "get-url", "--push", "origin"], {
      cwd: cwd_3,
      preserveOutputOnError: !1
    }),
    url_2 = code === 0 ? stdout.trim() || null : null;
  return {
    url: url_2,
    answered: url_2 !== null || exitCode === 2
  };
}
async function TT(e, o) {
  let cwd_4 = e ?? pe(),
    repositoryByCwd = um().repositoryByCwd;
  if (!o?.skipCache && repositoryByCwd.has(cwd_4)) {
    let s = repositoryByCwd.get(cwd_4) ?? null;
    if (!s || !sG(s)) return s;
  }
  let u = () => {
    let s = repositoryByCwd.get(cwd_4);
    if (s && sG(s)) repositoryByCwd.delete(cwd_4);
  };
  try {
    let s = await bSt(cwd_4);
    if (t(`Git remote URL: ${ont(s)}`), !s) return t("No git remote URL found"), um().remoteHostByCwd.delete(cwd_4), u(), null;
    let a = null,
      l = (d => {
        let f = UA(d);
        if (f && sG(f)) return a ??= f, null;
        return f;
      })(s),
      h = !1;
    if (!l) {
      let {
          stdout: stdout_2,
          code: code_2,
          exitCode: exitCode_2
        } = await lt(Pt(), [...yn, "config", "--get", "remote.origin.url"], {
          cwd: cwd_4,
          preserveOutputOnError: !1
        }),
        m = code_2 === 0 ? stdout_2.trim() : null,
        E = m !== null || exitCode_2 === 1;
      if (m && m !== s) {
        if (l = UA(m), l && sG(l)) a ??= l, l = null;
      }
      if (!l) {
        let y = await G(cwd_4),
          w = y.url;
        if (w && w !== s && w !== m) {
          if (l = UA(w), l && sG(l)) a ??= l, l = null;
        }
        h = E && y.answered;
      }
    }
    l ??= a, t(`Parsed repository: ${l ? `${l.host}/${l.owner}/${l.name}` : null} from URL: ${ont(s)}`);
    let g = l?.host ?? U1t(s);
    if (g) um().remoteHostByCwd.set(cwd_4, g);else um().remoteHostByCwd.delete(cwd_4);
    if (l) repositoryByCwd.set(cwd_4, l);else if (h) repositoryByCwd.delete(cwd_4);
    return l;
  } catch (error) {
    return t(`Error detecting repository: ${error}`), u(), null;
  }
}
function kBs() {
  let e = um().repositoryByCwd.get(pe());
  if (!e || !fo(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function Cxo() {
  return um().repositoryByCwd.get(pe())?.host ?? null;
}
function vBs(e) {
  if (fwe(e) || /^!\d+$/.test(e)) return !0;
  if (/^https?:\/\//i.test(e)) return !1;
  let o = Cxo();
  return o !== null && gN(o) === "gitlab";
}
function EBs(e) {
  let r = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(r) ? r : "";
}
var regExp_3 = new RegExp(`^(https?://${iFr}(?::\\d{1,5})?/(?:${XJ}/)+${XJ})/-/merge_requests/\\d`);
function TBs(e) {
  return regExp_3.exec(e)?.[1] ?? null;
}
function cdn() {
  return um().remoteHostByCwd.get(pe()) ?? null;
}
function r2n() {
  let e = pe(),
    repositoryByCwd_2 = um().repositoryByCwd;
  if (!repositoryByCwd_2.has(e)) return;
  let r = repositoryByCwd_2.get(e);
  return !!r && fo(r.host);
}
function UA(e) {
  let o = e.trim();
  if (nK(o) || Bte(o)) return null;
  let r = o.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (r?.[1] && r[2] && r[3]) {
    if (!R(r[1])) return null;
    if (!p(r[2]) || !p(r[3])) return null;
    return {
      host: r[1],
      owner: r[2],
      name: r[3]
    };
  }
  let n = o.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (n?.[1] && n[2] && n[3] && n[4]) {
    let u = n[1],
      s = n[2],
      a = tt(s, ":");
    if (!R(a)) return null;
    let host = u === "https" || u === "http" ? s : a;
    if (!p(n[3]) || !p(n[4])) return null;
    return {
      host: host,
      owner: n[3],
      name: n[4]
    };
  }
  return b(o);
}
function b(e) {
  let o,
    r,
    n,
    u = e.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (u?.[1] && u[2]) r = u[1], n = u[2];else {
    let c = e.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/);
    if (!c?.[1] || !c[2] || !c[3]) return null;
    o = c[1], r = c[2], n = c[3];
  }
  let s = tt(r, ":");
  if (!R(s) || gN(s) !== "gitlab") return null;
  let a = n.split("/");
  if (a.length < 3 || a.length > C + 1 || !a.every(p)) return null;
  return {
    host: o === "https" || o === "http" ? r : s,
    owner: a.slice(0, -1).join("/"),
    name: a.at(-1)
  };
}
function udn(e) {
  let o = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!o?.[1] || !o[2]) return null;
  if (!p(o[1]) || !p(o[2])) return null;
  return {
    owner: o[1],
    name: o[2]
  };
}
function FHe(e) {
  let o = e.trim(),
    r = UA(o);
  if (r) {
    if (!fo(r.host)) return null;
    return `${r.owner}/${r.name}`;
  }
  if (!o.includes("://") && !o.includes("@") && o.includes("/")) {
    let n = o.split("/");
    if (n.length === 2 && n[0] && n[1]) {
      let u = n[1].replace(/\.git$/, "");
      if (!p(n[0]) || !p(u)) return null;
      return `${n[0]}/${u}`;
    }
  }
  return t(`Could not parse repository from: ${o}`), null;
}
var T = /^[A-Za-z0-9._-]+$/;
function p(e) {
  return T.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function R(e) {
  if (!/^[A-Za-z0-9.-]+$/.test(e) || e.startsWith("-") || !e.includes(".")) return !1;
  let o = e.split(".").pop();
  if (!o) return !1;
  return /^[a-zA-Z]+$/.test(o);
}
export { XJ, iFr, yBs, _Bs, regExp as aFr, regExp_2 as ota, Ztt, fwe, bBs, ent, sG, e2n, SBs, t2n, wqe, n2n, Txo, bSt, wBs, TT, kBs, Cxo, vBs, EBs, TBs, cdn, r2n, UA, udn, FHe };