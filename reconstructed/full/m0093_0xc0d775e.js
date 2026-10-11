// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  gj,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  J0
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  ot
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Zce
} from "B:/~BUN/root/chunk-9xz983aj.js";
import {
  Dn,
  zh,
  K$
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  readFileSync as M,
  lstatSync as b
} from "fs";
import {
  lstat as L,
  readFile as w
} from "fs/promises";
async function cl(e, n) {
  try {
    let r = await L(e);
    if (!r.isFile() || r.size > n) return null;
    return await w(e, "utf8")
  } catch {
    return null
  }
}

function FLo(e, n) {
  try {
    let r = b(e);
    if (!r.isFile() || r.size > n) return null;
    return M(e, "utf8")
  } catch {
    return null
  }
}
async function OI(e, n, r, s) {
  let t = await e.stat(n);
  if (!t.isFile() || t.size > r) return s?.(t), null;
  return await e.readFile(n, {
    encoding: "utf8"
  })
}

function $Lo(e, n, r) {
  let s = e.statSync(n);
  if (!s.isFile() || s.size > r) return null;
  return e.readFileSync(n, {
    encoding: "utf8"
  })
}
var F = /[^\p{L}\p{N}._-]+/gu,
  U = /^[._-]+|[._-]+$/gu,
  k = /[\p{L}\p{N}]/u,
  H = 20;

function Ty(e) {
  let n = W(e).trim(),
    r = [...n];
  return r.length > 64 ? `${r.slice(0,64).join("")}\u2026` : n
}

function W(e) {
  return e.replace(/[\p{Cf}\p{Cc}\p{Cs}\p{Zl}\p{Zp}]/gu, "")
}

function xFt(e) {
  let n = Ty(e).replace(F, "-").replace(U, "");
  if (!k.test(n)) return "";
  let r = re(n, H);
  return r === n ? n : `${r}\u2026`
}
var G4n = 512,
  g = 4 * G4n;

function rfn(e, n) {
  let r = 0;
  while (r <= e.length) {
    let s = e.indexOf(`
`, r),
      t = s === -1 ? e.length : s,
      i = t - r <= g,
      o = re(e.slice(r, Math.min(t, r + g)), g),
      d = n(o).replace(/\s+/g, " ").trim();
    if (d !== "" || !i) {
      let c = re(d, G4n);
      return !i || c.length < d.length ? `${c}\u2026` : c
    }
    if (s === -1) break;
    r = s + 1
  }
  return ""
}

function ZYe(e) {
  if (typeof e !== "string") return;
  let n = Ty(e.replace(/["<>]/g, ""));
  return n === "" ? void 0 : n
}
var uC = 200;

function wD(e, n) {
  return `${e}@${n}`
}

function V4n(e) {
  return e.replace(/%|[^\x20-\x7e]/gu, (n) => encodeURIComponent(n))
}

function ofn(e, n) {
  let r = Date.now();
  return `${e}-${r}@${n}`
}
var mi = "team-lead",
  yye = "user",
  e5e = "system",
  ULo = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/,
  fJ = "claude-swarm",
  PFt = "swarm-view",
  mJ = "tmux",
  _$e = "cat";

function IFt() {
  return `claude-swarm-${process.pid}`
}
var BLo = "CLAUDE_CODE_TEAMMATE_COMMAND";
import {
  createHmac as v
} from "crypto";
var E$r = 120;

function OFt(e) {
  let n = rfn(e, (r) => J0(r, " ", {
    keepEmojiJoiners: !0
  }));
  return n === "" ? "" : ot(n, E$r)
}
var x = ["bypass", "prompting"],
  B = new Set(x);

function jLo(e) {
  return B.has(e)
}

function R(e) {
  let n = new TextEncoder;
  return e.replace(/[^A-Za-z0-9:_/.\\-]/gu, (r) => Array.from(n.encode(r), (s) => `%${s.toString(16).toUpperCase().padStart(2,"0")}`).join(""))
}

function _ye(e) {
  return `bridge:${R(e)}`
}

function O1(e) {
  return `uds:${R(e)}`
}

function E(e) {
  try {
    return decodeURIComponent(e)
  } catch {
    return e
  }
}
var h = /^[A-Za-z0-9_-]{1,80}$/,
  MFt = 32,
  y = 24;

function WLo(e, n) {
  return v("sha256", n).update(e).digest("hex").slice(0, y)
}
var f = "A-Za-z0-9%:_/.\\\\-",
  A = `[0-9a-f]{${y}}`,
  z = `${A}(?:,${A}){0,${MFt-1}}`,
  C = new RegExp(`^${z}$`),
  T$r = 300,
  G = new RegExp(`^[${f}]{1,${T$r}}$`);

function zLo(e) {
  return G.test(e)
}

function sfn(e, n) {
  if (e === void 0) return;
  let r = [...e];
  if (n) r.push(n);
  if (r.length === 0) return;
  return r.length > MFt ? r.slice(r.length - MFt) : r
}

function X(e, n, r, s, t, i) {
  let o = [];
  if (e) o.push(`from="${e}"`);
  if (r && h.test(r)) o.push(`from-session="${r}"`);
  if (s !== void 0 && s.length > 0) {
    let l = s.join(",");
    if (C.test(l)) o.push(`hop-chain="${l}"`)
  }
  let d = n === void 0 ? void 0 : Ty(n.replace(/["<>]/g, ""));
  if (d) o.push(`from-name="${d}"`);
  if (t) o.push(`from-mode="${t}"`);
  let c = i === void 0 ? void 0 : Ty(i.replace(/["<>]/g, ""));
  if (c) o.push(`from-plugin="${c}"`);
  return o.length > 0 ? ` ${o.join(" ")}` : ""
}
var ifn = new RegExp(`^<${gj} from="([^"]+)"`);

function t5e(e, n, r, s, t, i, o) {
  let d = X(e, n, s, t, i, o);
  return `<${gj}${d}>
${Zce(gj,r)}
</${gj}>`
}

function _(e) {
  {
    if (typeof e !== "string") return;
    let n = h.source.replace(/^\^|\$$/g, ""),
      r = C.source.replace(/^\^|\$$/g, ""),
      s = e,
      t = s.match(new RegExp(`^<${gj}(?: from="([${f}]+)")?(?: from-session="(${n})")?(?: hop-chain="(${r})")?(?: from-name="([^"<>\\n\\r]+)")?(?: from-mode="(${x.join("|")})")?(?: from-plugin="([^"<>\\n\\r]+)")?>\\n([\\s\\S]*)\\n</${gj}>$`));
    if (!t) return;
    let i = t[3] !== void 0 ? t[3].split(",") : void 0,
      o = t[5];
    if (t5e(t[1], t[4], t[7] ?? "", t[2], i, o, t[6]) !== s) return;
    return {
      ...t[1] !== void 0 && {
        from: t[1]
      },
      ...t[2] !== void 0 && {
        fromSession: t[2]
      },
      ...i !== void 0 && {
        hopChain: i
      },
      ...t[4] !== void 0 && {
        fromName: t[4]
      },
      ...o !== void 0 && {
        fromMode: o
      },
      ...t[6] !== void 0 && {
        fromPlugin: t[6]
      },
      body: t[7] ?? ""
    }
  }
  return
}

function afn(e) {
  let n = _(e);
  if (!n || n.hopChain === void 0) return e;
  return t5e(n.from, n.fromName, n.body, n.fromSession, void 0, n.fromMode, n.fromPlugin)
}

function C$r(e, n) {
  if (n === void 0) return e;
  let r = _(e);
  if (!r || r.fromPlugin !== void 0) return e;
  return t5e(r.from, r.fromName, r.body, r.fromSession, r.hopChain, r.fromMode, n)
}

function Uce(e, n, r) {
  if (e.body === void 0 || n === r) return e;
  let {
    body: s,
    ...t
  } = e;
  return t
}

function URe(e) {
  let n = _(e);
  if (!n) return {};
  let r = n.fromName ? Ty(n.fromName) : "";
  return {
    ...r && {
      name: r
    },
    ...n.fromSession !== void 0 && {
      fromSession: n.fromSession
    },
    ...n.hopChain !== void 0 && {
      hopChain: n.hopChain
    },
    ...n.fromMode !== void 0 && {
      fromMode: n.fromMode
    },
    body: n.body
  }
}

function b$e(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type !== "user" || r.toolUseResult || r.isCompactSummary) continue;
    return r.origin?.kind === "peer" ? r.origin.hopChain ?? [] : void 0
  }
  return
}
import {
  basename as j,
  dirname as S,
  resolve as u
} from "path";
var V = new RegExp(`^(?:uds|bridge|did):[${f}]{1,200}$`);

function gJ(e) {
  return V.test(e)
}
var Z = /^\/\S*\.sock$/,
  K = /^[\\/]{2}[.?][\\/]pipe[\\/]/i,
  Y = /^\/\S*\.sock/;

function R$r(e) {
  return Y.test(e)
}

function lh(e) {
  if (e.startsWith("uds:")) return {
    scheme: "uds",
    target: E(e.slice(4))
  };
  if (e.startsWith("bridge:")) return {
    scheme: "bridge",
    target: E(e.slice(7))
  };
  if (e.startsWith("did:")) return {
    scheme: "did",
    target: e
  };
  if (Z.test(e) || K.test(e)) return {
    scheme: "uds",
    target: e
  };
  return {
    scheme: "other",
    target: e
  }
}

function lfn(e, n) {
  if (e.trim().length === 0) return "to must not be empty";
  let r = lh(e);
  if ((r.scheme === "bridge" || r.scheme === "uds") && r.target.trim().length === 0) return "address target must not be empty";
  if (!IN(r.target) || !IN(e)) return `'${e}' is not a local socket address. Use an address from ${n}.`;
  return
}

function IN(e) {
  if (!Dn(e)) return !0;
  return nY(e) !== void 0
}

function Bce(e, n) {
  return T(e, n) === "same"
}

function hJ(e, n) {
  return T(e, n) !== "different"
}

function T(e, n) {
  let r = nY(e),
    s = nY(n);
  if (r !== void 0 || s !== void 0) {
    if (r === void 0 || s === void 0) return "different";
    if (q4n(r) === q4n(s)) return "same";
    return P(r) === P(s) || m(r) === m(s) ? "maybe" : "different"
  }
  if (e === n) return "same";
  if (zh(e) || zh(n)) return p(a(u(e))) === p(a(u(n))) ? "maybe" : "different";
  let t = a(u(e)),
    i = a(u(n));
  if (t === i) return "same";
  let o = O(),
    d = o === "macos" || o === "windows";
  return p(t) === p(i) || d && m(t) === m(i) ? "maybe" : "different"
}

function p(e) {
  let n = O();
  return n === "macos" || n === "windows" ? a(P(q(e))) : e
}

function q4n(e) {
  return e.replace(/[A-Z]/g, (n) => n.toLowerCase())
}

function P(e) {
  let n = "";
  for (let r of e) {
    let s = r.toUpperCase(),
      t = N(s) ? s : r,
      i = t.toLowerCase();
    n += N(i) ? i : t
  }
  return n
}

function N(e) {
  let n = e.codePointAt(0);
  return n !== void 0 && e.length === (n > 65535 ? 2 : 1)
}

function m(e) {
  return e.toUpperCase().toLowerCase()
}

function q(e) {
  return O() === "macos" ? e.normalize("NFC") : e
}

function a(e) {
  if (O() !== "macos") return e;
  let n = K$(e),
    r = /^\/private(\/(?:var|tmp|etc)(?:\/.*)?)$/.exec(n);
  return r ? r[1] : n
}

function nY(e) {
  let n = /^[\\/]{2}[.?][\\/]pipe[\\/](?:(LOCAL)[\\/])?([^\\/]+)$/i.exec(e);
  if (n === null || n[2] === "." || n[2] === "..") return;
  if (/[. ]$/.test(n[2])) return;
  if (e.startsWith("\\\\?\\") && e.includes("/")) return;
  return n[1] === void 0 ? n[2] : `${Y4n}\\${n[2]}`
}

function A$r(e, n, r) {
  if (nY(n) !== void 0) {
    let s = nY(e);
    return s !== void 0 && Q.test(s)
  }
  if (zh(e)) return !1;
  if (S(u(e)) === S(u(n))) return e.endsWith(".sock");
  return r?.verifiedPeerPid !== void 0 && r.ownerUids !== void 0 && D(e, r.ownerUids)
}
var x$r = "reply_across_default_dirs",
  J = [/^\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/, /^\/private\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/, /^\/run\/user\/(0|[1-9]\d*)\/cc-socks$/, /^\/data\/data\/com\.termux\/files\/usr\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/];

function D(e, n) {
  let r = u(e);
  if (!/^(\d+(-[0-9a-f]{8})?|[0-9a-f]{1,16})\.sock$/.test(j(r))) return !1;
  let s = S(r);
  for (let t of J) {
    let i = t.exec(s);
    if (i) return i[1] === void 0 || n.some((o) => String(o) === i[1])
  }
  return !1
}

function GLo(e, n, r, s = []) {
  let t = nY(e),
    i = nY(n);
  if (t !== void 0 && i !== void 0 && I.test(i) && !I.test(t)) return !1;
  if (A$r(e, n)) return !0;
  return (r?.includes(x$r) ?? !1) && D(e, s)
}
var K4n = "cc-msg-",
  Y4n = "LOCAL",
  Q = new RegExp(`^(?:${Y4n}\\\\)?${K4n}[0-9a-f]{32}$`, "i"),
  I = new RegExp(`^${K4n}[0-9a-f]{32}$`, "i");
export {
  cl,
  FLo,
  OI,
  $Lo,
  Ty,
  xFt,
  G4n,
  rfn,
  ZYe,
  uC,
  wD,
  V4n,
  ofn,
  mi,
  yye,
  e5e,
  ULo,
  fJ,
  PFt,
  mJ,
  _$e,
  IFt,
  BLo,
  E$r,
  OFt,
  jLo,
  _ye,
  O1,
  MFt,
  WLo,
  T$r,
  zLo,
  sfn,
  ifn,
  t5e,
  afn,
  C$r,
  Uce,
  URe,
  b$e,
  gJ,
  R$r,
  lh,
  lfn,
  IN,
  Bce,
  hJ,
  q4n,
  nY,
  A$r,
  x$r,
  GLo,
  K4n,
  Y4n
};
