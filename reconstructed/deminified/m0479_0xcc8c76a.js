// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { so, u$, yn, KRe, Bn, V$r, Bt, l2, En, pc, rUr } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { we } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { We, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { _i, Wi, q$, ns } from "B:/~BUN/root/chunk-54p0h65d.js";
import { i9e, KUo, YUo, XUo, JUo, QUo, ZUo, eBo, tBo, nBo, rBo, fxe, l9e } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Gc, Jd, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { SJ } from "B:/~BUN/root/chunk-9xz983aj.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { MRe, tl, uc, R1 } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { P2, CC, rBe } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Fa, fu } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { pde, _2 } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { Uk, LOo, NOo, Dt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { AO, I4, Y0e, XOn, O4, nu, wgr, vgr, U7, Ltt, qwe, PG, Htt, NXt, z7 } from "B:/~BUN/root/chunk-at7axhcd.js";
import { lq, Fu, ILt } from "B:/~BUN/root/chunk-0y3bphdf.js";
import { oh } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { sHe, Ch, HRo, XV, FRo, M3e, D3e, klt, K3, dle, XB, Y3, uzn, pX, aHe, L3e, Jge, cx, Ud, AS, fX, ww, X3 } from "B:/~BUN/root/chunk-j36yaq51.js";
import { i0n } from "B:/~BUN/root/chunk-bzhr4ppe.js";
import { u0, $d, OTe } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { aX, KB, ZNe, dOr, v3e, k3e, lX, zMt, qge, Kge, QWn, BTe, ft, KMt, YMt, yOr, _Or, bOr, ylt, lle, C3e, ZL, _lt, R3e, A3e as errorCode, pI } from "B:/~BUN/root/chunk-faawr4jv.js";
import { ERo } from "B:/~BUN/root/chunk-xdhy5nhb.js";
import { h8 } from "B:/~BUN/root/chunk-txj2pkcj.js";
import { o, M, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
var ve = {
    chat: {
      family: "chat",
      needsId: !0
    },
    share: {
      family: "share",
      needsId: !0
    },
    task: {
      family: "task",
      needsId: !0
    },
    cowork: {
      family: "cowork",
      needsId: !0
    },
    "cowork-artifact": {
      family: "cowork_artifact",
      needsId: !0
    },
    project: {
      family: "project",
      needsId: !0
    },
    design: {
      family: "design",
      needsId: !1
    },
    settings: {
      family: "settings",
      needsId: !1
    },
    api: {
      family: "api",
      needsId: !1
    }
  },
  ot = {
    chat: "chat",
    share: "shared chat",
    task: "task",
    cowork: "task",
    code_session: "session",
    epitaxy: "session",
    project: "project"
  };
function st(e) {
  let [n, r, s] = e;
  if (n === void 0) return "other";
  if (n === "artifact") return r === void 0 ? "artifact_bare" : "artifact";
  if (n === "artifacts") return r === void 0 || r === "design" ? "artifacts_gallery" : "chat_artifact";
  if (n === "public" && r === "artifacts") return "chat_artifact";
  if (n === "code") {
    if (r === "artifact" || r === "frame") return s === void 0 ? "artifact_bare" : "artifact";
    if (r === "artifacts") return "artifacts_gallery";
    return r === void 0 ? "other" : "code_session";
  }
  if (n === "epitaxy") {
    if (r === "artifact") return "epitaxy_artifact";
    return r === void 0 ? "other" : "epitaxy";
  }
  let i = Object.hasOwn(ve, n) ? ve[n] : void 0;
  if (i === void 0 || i.needsId && r === void 0) return "other";
  return i.family;
}
function Wmr(e) {
  let n = l2(e),
    env = V$r(n);
  if (env === null) return null;
  let s;
  try {
    s = new URL(n);
  } catch {
    return null;
  }
  let i = s.searchParams.get("artifact") || s.searchParams.get("frame"),
    slug = null;
  if (i !== null) {
    let d = i.toLowerCase();
    slug = Bn.test(d) ? d : u$(i);
  }
  return {
    family: st(s.pathname.split("/").filter(item => item !== "")),
    env: env,
    artifact: slug === null ? null : {
      slug: slug
    }
  };
}
function OOn(e, n = {}) {
  let r = `not an artifact URL: ${e} \u2014`,
    s = Wmr(e),
    i = s === null ? void 0 : ot[s.family];
  if (s !== null && i !== void 0 && s.artifact !== null) {
    let l = En({
      slug: s.artifact.slug,
      env: s.env
    });
    return `${r} that is a claude.ai ${i} link; pass the artifact's own URL (${l}) as \`${n.field ?? "url"}\`.`;
  }
  if (s?.family === "design") {
    let l = n.designToolName === void 0 ? "" : `; use the ${n.designToolName} tool`;
    return `${r} that is a Claude Design link, which the ${yn} tool cannot open${l}.`;
  }
  if (i !== void 0) return `${r} that is a claude.ai ${i} link, not a published artifact; pass an artifact's ${KRe()} link (action: "list" shows them).`;
  return `${r} pass the artifact's ${KRe()} link (action: "list" shows them).`;
}
async function fW(e, n) {
  let r = Buffer.alloc(n + 1),
    s = 0;
  while (s < r.length) {
    let {
      bytesRead: bytesRead
    } = await e.read(r, s, r.length - s, s);
    if (bytesRead === 0) break;
    s += bytesRead;
  }
  return s === n ? r.subarray(0, n) : null;
}
import { lstat as ce, open as it, readlink as at, realpath as he, stat as dt } from "fs/promises";
import { constants as ut } from "fs";
import { dirname as Oe, isAbsolute as Y, join as ge, normalize as G, relative as ct, sep as X } from "path";
function Z(e) {
  return ns(e) || Wi(e) || q$(e);
}
var ev = 512,
  iR = 255,
  uXt = NXt - 1,
  F7 = iR + 1;
function Ee(e, n) {
  if (e.length === 0) return {
    errMsg: `${n} may not be empty`
  };
  if (e.length > ev) return {
    errMsg: `${n} is longer than ${ev} characters`
  };
  let nfc = e.normalize("NFC");
  if (/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(nfc) || !Jd(nfc)) return {
    errMsg: `${n} ${Fu(e)} contains control, formatting, line-separator, or private-use characters, or a malformed one`
  };
  if (nfc.includes("\\")) return {
    errMsg: `${n} ${Fu(e)} contains a backslash \u2014 published paths use forward slashes on every platform`
  };
  if (/[?#%]/.test(nfc)) return {
    errMsg: `${n} ${Fu(e)} contains characters that cannot appear in a served URL path ("?", "#", "%")`
  };
  if (nfc.startsWith("/")) return {
    errMsg: `${n} ${Fu(e)} is absolute \u2014 published paths are relative to the artifact root`
  };
  let s = nfc.split("/");
  if (s.some(item => item === "")) return {
    errMsg: `${n} ${Fu(e)} has an empty path segment`
  };
  if (s.some(item => item === "." || item === "..")) return {
    errMsg: `${n} ${Fu(e)} contains "." or ".." segments \u2014 pass the plain served path`
  };
  if (s.some(item => item === "__proto__" || item === "constructor" || item === "prototype")) return {
    errMsg: `${n} ${Fu(e)} contains a reserved name ("__proto__", "constructor", "prototype")`
  };
  if (/[:;]/.test(nfc)) return {
    errMsg: `${n} ${Fu(e)} contains ":" or ";", which no published path may`
  };
  return {
    nfc: nfc
  };
}
function pXt(e, {
  removal = !1
} = {}) {
  let r = Ee(e, "files: published path");
  if ("errMsg" in r) return r;
  let {
    nfc: s
  } = r;
  if (s === "index.html") return {
    errMsg: 'files: "index.html" cannot be a published path \u2014 the `html` argument is always the index. Pass that file\'s content as `html` and remove the "index.html" mapping.'
  };
  if (s.startsWith("_")) return {
    errMsg: `files: published path ${Fu(e)} starts with "_", which the artifact service reserves for its own names \u2014 rename the file or its top-level directory`
  };
  if (!removal && MOn(s)) return {
    errMsg: `files: published path ${Fu(e)} is a name the artifact service answers with one of its own views, so the file could never be read back \u2014 rename it`
  };
  return {
    key: s
  };
}
function MOn(e) {
  return e.startsWith("_") || e === "index.html.json" || e === ".json";
}
function $U(e) {
  let n = Ee(e, "path");
  if ("errMsg" in n) return n;
  let {
    nfc: r
  } = n;
  if (MOn(r)) return {
    errMsg: `path ${Fu(e)} names one of the artifact service's own views, not a published file; list_files shows the readable paths`
  };
  return {
    key: r
  };
}
var Lao = 1048576,
  lt = /\.(?:png|jpe?g)$/i;
function Nao(e) {
  let n = Ee(e, "thumbnail href");
  if ("errMsg" in n) return n;
  if (!lt.test(n.nfc)) return {
    errMsg: `thumbnail href ${JSON.stringify(e)} is not a .png, .jpg or .jpeg file \u2014 custom thumbnails are PNG or JPEG images`
  };
  return {
    rel: n.nfc
  };
}
function U0e(e, n, r) {
  return e === n || e.startsWith(n + X) || e === r || e.startsWith(r + X);
}
function zmr(e, n, r) {
  let s = B0e(G(n));
  if (s === r) return e;
  if (e === s) return r;
  return e.startsWith(s + X) ? r + e.slice(s.length) : e;
}
function B0e(e) {
  let n = e.replace(/[\\/]+$/, "");
  return n === "" ? e : n;
}
function Z2e(e, n) {
  if (Z(e)) return null;
  if (e === "~" || e.startsWith(`~${X}`) || e.startsWith("~/")) return null;
  if (Y(e)) {
    let s = G(e);
    return Z(s) ? null : s;
  }
  let r = G(e);
  if (r === ".." || r.startsWith(`..${X}`)) return null;
  return ge(n, r);
}
async function Ase(e) {
  let n = B0e(e);
  for (let r = 0; r < 40; r++) {
    let s;
    try {
      s = await at(n);
    } catch {
      return !1;
    }
    if (_i(s, Oe(n))) return !0;
    if (s.split(/[\\/]+/).includes("..")) return !0;
    if (n = B0e(Y(s) ? G(s) : ge(Oe(n), s)), Z(n)) return !0;
  }
  return !0;
}
function pt(e, n) {
  return n.some(item => U0e(e, item.lex, item.real));
}
function _e(e, n) {
  return n.some(item => e === item.real || e.startsWith(item.real + X));
}
function be(e) {
  return !e.isSymbolicLink() && e.isDirectory();
}
async function ht(e) {
  if (e === void 0 || !Y(e)) return [];
  let n = B0e(G(e)),
    r;
  try {
    r = await ce(n);
  } catch (error) {
    return B(error) ? [{
      kind: "scratchpad",
      lex: n,
      real: n
    }] : [];
  }
  if (!be(r) || (await Ase(n))) return [];
  let real = await he(n).catch(() => n),
    i = await ce(n).catch(() => {
      return;
    });
  return i !== void 0 && be(i) && i.ino === r.ino && i.dev === r.dev ? [{
    kind: "scratchpad",
    lex: n,
    real: real
  }] : [];
}
async function Gmr(e, n) {
  let r = [];
  for (let s of e ?? []) {
    if (!Y(s) || Z(s)) continue;
    let i = B0e(G(s));
    if (i === n.lex || i === n.real) continue;
    try {
      let l = await ce(i);
      if (!be(l) || (await Ase(i))) continue;
      if (a.CLAUDE_CODE_EVAL_CONFINED && i === we()) {
        r.push({
          kind: "dir",
          lex: i,
          real: i
        });
        continue;
      }
      let real_2 = await he(i);
      if (Z(real_2)) continue;
      let g = await ce(i);
      if (be(g) && g.ino === l.ino && g.dev === l.dev) r.push({
        kind: "dir",
        lex: i,
        real: real_2
      });
    } catch {}
  }
  return r;
}
function $e(e) {
  let n = e.filter(item => item.kind !== "scratchpad"),
    r = n.map(item => b(item.lex)).join(", "),
    s = e.some(item => item.kind === "scratchpad") ? " or your scratchpad directory" : "";
  return n.length > 1 ? {
    where: `the session's working directories (${r})${s}`,
    under: "a path under one of them"
  } : {
    where: `the working directory (${r})${s}`,
    under: s === "" ? "a path under it" : "a path under one of them"
  };
}
function Ce(e) {
  return e.kind === "scratchpad" ? "your scratchpad directory" : e.kind === "cwd" ? `the working directory (${b(e.lex)})` : `${b(e.lex)} (one of the session's working directories)`;
}
async function gt(e, n, r) {
  let s = await he(e),
    i = {
      kind: "cwd",
      lex: B0e(G(e)),
      real: s
    },
    anchors = [i, ...(await Gmr(r?.workingDirs, i)), ...(await ht(r?.scratchpadDir))],
    {
      where: where,
      under: under
    } = $e(anchors);
  if (n === void 0) return {
    anchors: anchors,
    realRoot: s,
    lexRoot: G(e)
  };
  if (Z(n)) return {
    errMsg: `root: ${JSON.stringify(n)} is a network path \u2014 the publish base must lie within ${where}`
  };
  let y = G(n);
  if (!Y(y) && (y === ".." || y.startsWith(`..${X}`))) return {
    errMsg: `root: ${JSON.stringify(n)} escapes the working directory \u2014 ` + "a relative publish base must lie within it"
  };
  let A = Y(y) ? anchors.find(item => U0e(y, item.lex, item.real)) : anchors[0];
  if (A === void 0) return {
    errMsg: `root: ${JSON.stringify(n)} is outside ${where} \u2014 pass ${under}`
  };
  let O = Y(y) ? y : ge(s, y),
    errMsg = r?.denyPath?.(O, !1, n);
  if (errMsg !== void 0) return {
    errMsg: errMsg
  };
  if (await Ase(O)) return {
    errMsg: `root: ${JSON.stringify(n)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 pass the target directory itself`
  };
  let realRoot;
  try {
    realRoot = await he(O);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (Z(realRoot)) return {
    errMsg: `root: ${JSON.stringify(n)} resolves to a network path \u2014 the publish base must lie within ${where}`
  };
  if (!_e(realRoot, [A])) return {
    errMsg: _e(realRoot, anchors) ? `root: ${b(n)} is a link from ${Ce(A)} into ${Ce(anchors.find(item => _e(realRoot, [item])) ?? A)} \u2014 pass the directory it points to instead` : `root: ${JSON.stringify(n)} resolves outside ${where} \u2014 the publish base must lie within it`
  };
  let x;
  try {
    x = await dt(realRoot);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (!x.isDirectory()) return {
    errMsg: `root: ${JSON.stringify(n)} is not a directory`
  };
  let lexRoot = B0e(Y(y) ? y : ge(G(e), y));
  return {
    anchors: anchors,
    realRoot: realRoot,
    lexRoot: lexRoot
  };
}
async function Vmr(e, n, r, s) {
  let i = await gt(n, r, s);
  if ("errMsg" in i) return i;
  let {
      anchors: anchors_2,
      realRoot: realRoot_2,
      lexRoot: lexRoot_2
    } = i,
    {
      where: where_2,
      under: under_2
    } = $e(anchors_2);
  if (s?.expectedRealRoot !== void 0 && s.expectedRealRoot !== realRoot_2) return {
    errMsg: "root: the publish base resolves to a different location than " + "was approved \u2014 it changed between approval and publishing; " + "retry the publish"
  };
  if (e.length === 0) return {
    errMsg: "files: the file map is empty \u2014 list at least one file"
  };
  if (e.length > iR) return {
    errMsg: `files: ${e.length} files + index.html exceeds the ${iR + 1} entries one publish may name; send at most ${iR} now and the rest in another publish to the same url`
  };
  let files = [],
    T = new Set(),
    C = 0;
  for (let x of e) {
    let H = pXt(x.to);
    if ("errMsg" in H) return H;
    let v = H.key;
    if (T.has(v)) return {
      errMsg: `files: published path ${Fu(v)} appears more than once`
    };
    T.add(v);
    let S = x.from;
    if (Z(S)) return {
      errMsg: `files: ${JSON.stringify(S)} is a network path \u2014 only files under ${where_2} can be published`
    };
    if (S === "~" || S.startsWith(`~${X}`) || S.startsWith("~/")) return {
      errMsg: `files: ${JSON.stringify(S)} \u2014 "~" is not expanded here; pass a base-relative or absolute path`
    };
    let E = Y(S) ? void 0 : G(S);
    if (E !== void 0 && (E === ".." || E.startsWith(`..${X}`))) return {
      errMsg: `files: ${JSON.stringify(S)} escapes the publish base \u2014 ` + `only files under ${where_2} can be published`
    };
    let D = Z2e(S, realRoot_2);
    if (D === null) return {
      errMsg: `files: ${JSON.stringify(S)} cannot be resolved`
    };
    if (Y(S) && !pt(D, anchors_2)) return {
      errMsg: `files: ${JSON.stringify(S)} is outside ${where_2} \u2014 pass ${under_2}`
    };
    let errMsg_2 = s?.denyPath?.(D, !1, S);
    if (errMsg_2 !== void 0) return {
      errMsg: errMsg_2
    };
    if (lexRoot_2 !== realRoot_2) {
      let k = E ?? (D.startsWith(realRoot_2 + X) ? ct(realRoot_2, D) : void 0);
      if (k !== void 0) {
        let errMsg_3 = s?.denyPath?.(ge(lexRoot_2, k), !0, S);
        if (errMsg_3 !== void 0) return {
          errMsg: errMsg_3
        };
      }
    }
    if (await Ase(D)) return {
      errMsg: `files: ${JSON.stringify(S)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 list the link's target path instead`
    };
    let P;
    try {
      P = await he(D);
    } catch (error) {
      return {
        errMsg: `files: ${JSON.stringify(S)} not found`,
        ...(B(error) && {
          missing: !0
        })
      };
    }
    if (Z(P)) return {
      errMsg: `files: ${JSON.stringify(S)} resolves to a network path \u2014 only files under ${where_2} can be published`
    };
    if (!_e(P, anchors_2)) return {
      errMsg: `files: ${JSON.stringify(S)} resolves outside ${where_2} (symlink?) \u2014 only files under it can be published`
    };
    if (P !== D) {
      let errMsg_4 = s?.denyPath?.(P, !0, S);
      if (errMsg_4 !== void 0) return {
        errMsg: errMsg_4
      };
    }
    try {
      let k = await ce(P);
      if (k.isSymbolicLink()) return {
        errMsg: `files: ${JSON.stringify(S)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      if (!k.isFile()) return {
        errMsg: `files: ${JSON.stringify(S)} is not a regular file`
      };
    } catch (error) {
      return {
        errMsg: `files: ${JSON.stringify(S)} not found`,
        ...(B(error) && {
          missing: !0
        })
      };
    }
    let I;
    try {
      I = await it(P, ut.O_RDONLY | 0);
    } catch (error) {
      if (error?.code === "ELOOP") return {
        errMsg: `files: ${JSON.stringify(S)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      return {
        errMsg: `files: ${JSON.stringify(S)} not found`,
        ...(B(error) && {
          missing: !0
        })
      };
    }
    let content, contentType;
    try {
      try {
        if ((await ce(P)).isSymbolicLink()) return {
          errMsg: `files: ${JSON.stringify(S)} changed to a symlink after it was checked \u2014 retry the publish`
        };
      } catch (error) {
        return {
          errMsg: `files: ${JSON.stringify(S)} not found`,
          ...(B(error) && {
            missing: !0
          })
        };
      }
      let k = await I.stat();
      if (!k.isFile()) return {
        errMsg: `files: ${JSON.stringify(S)} is not a regular file`
      };
      if (a.CLAUDE_CODE_EVAL_CONFINED && k.nlink > 1) return {
        errMsg: `files: ${JSON.stringify(S)} has more than one hard link`
      };
      if (k.size > nu) return {
        errMsg: `files: ${JSON.stringify(S)} is ${Math.ceil(k.size / 1024 / 1024)}MB (per-file max ${nu / 1024 / 1024}MB)`,
        tooLarge: !0
      };
      if (C += k.size, C > PG) return {
        errMsg: `files: total content exceeds ${PG / 1024 / 1024}MB at ${JSON.stringify(S)} \u2014 the most one publish sends; publish the files up to it now and the rest in another publish to the same url (a version may total ${Htt / 1024 / 1024}MB)`
      };
      if (contentType = x.contentType ?? lq(v), contentType === void 0) return {
        errMsg: ILt("files", v),
        notServedPath: v
      };
      try {
        let V = await fW(I, k.size);
        if (V === null) return {
          errMsg: `files: ${JSON.stringify(S)} changed while it was read \u2014 retry the publish`
        };
        content = V;
      } catch {
        return {
          errMsg: `files: ${JSON.stringify(S)} could not be read`
        };
      }
      files.push({
        path: v,
        content: content,
        contentType: contentType,
        ...(x.live !== void 0 && {
          live: x.live
        }),
        ...(x.reseed === !0 && {
          reseed: !0
        })
      });
    } finally {
      await I.close();
    }
  }
  return {
    files: files
  };
}
async function Hao(e, n, r, s) {
  let i = /\.png$/i.test(n) ? ".png" : ".jpg",
    l = await Vmr([{
      to: `thumbnail${i}`,
      from: n
    }], r, void 0, s);
  if ("errMsg" in l) return {
    errMsg: `thumbnail ${JSON.stringify(e)}: ${l.errMsg.replace(/^files: /, "")}`,
    missing: l.missing === !0,
    tooLarge: l.tooLarge === !0
  };
  let content_2 = l.files[0].content;
  return {
    content: typeof content_2 === "string" ? Buffer.from(content_2) : content_2
  };
}
var Ttt = "passive";
var mt = 600000,
  Me = /^(\d{1,15})-/;
function Ae(e) {
  let n = e === void 0 ? void 0 : Me.exec(e)?.[1];
  return n !== void 0 && Number(n) * 1000 <= Date.now() + mt ? e : void 0;
}
function qmr(e, ver) {
  let {
    live: live
  } = ee();
  if (Ae(ver) === void 0) {
    if (!live.heardAheadOfClockReported && Me.test(ver)) live.heardAheadOfClockReported = !0, p("artifact_live_subscribe", "heard_version_skipped_ahead_of_clock");
    return;
  }
  let s = live.heardVersions.get(e),
    i = s === void 0 ? 1 : AO(ver, s.ver);
  if (i !== null && i > 0) live.heardVersions.set(e, {
    ver: ver,
    toldTo: new Set()
  });
}
function fXt(e, n) {
  let {
      supervisors: supervisors,
      heardVersions: heardVersions
    } = ee().live,
    i = supervisors.get(e);
  if (i === void 0 || n === void 0) return {
    behind: !1
  };
  let liveVer = yt(Ae(heardVersions.get(e)?.ver), Ae(i.carriedVer));
  if (liveVer === void 0 || Y0e(i.ownPublishes, e) || I4(i.ownPublishes, e, liveVer)) return {
    behind: !1
  };
  let d = AO(liveVer, n);
  return d !== null && d > 0 ? {
    behind: !0,
    liveVer: liveVer
  } : {
    behind: !1
  };
}
function Fao(e, n, r) {
  let s = fXt(e, n);
  if (!s.behind) return;
  let i = ee().live.heardVersions.get(e);
  return i?.ver === s.liveVer && i.toldTo.has(r ?? "main") ? void 0 : {
    liveVer: s.liveVer
  };
}
function $ao(e, ver_2, r) {
  if (Ae(ver_2) === void 0) return;
  let heardVersions_2 = ee().live.heardVersions,
    i = heardVersions_2.get(e),
    l = r ?? "main";
  if (i?.ver === ver_2) {
    i.toldTo.add(l);
    return;
  }
  let d = i === void 0 ? -1 : AO(i.ver, ver_2);
  if (d !== null && d < 0) heardVersions_2.set(e, {
    ver: ver_2,
    toldTo: new Set([l])
  });
}
function mXt(e, n) {
  let heardVersions_3 = ee().live.heardVersions;
  if (n === void 0 || heardVersions_3.get(e)?.ver === n) heardVersions_3.delete(e);
}
function yt(e, n) {
  if (e === void 0 || n === void 0) return e ?? n;
  let r = AO(e, n);
  return r !== null && r < 0 ? n : e;
}
var Uao = ["org_pinned_instance", "pipeline_instance", "template_instance"],
  Pe = {
    first_party_type: 0,
    org_pinned_instance: 1,
    pipeline_instance: 2,
    template_instance: 3
  };
function TTt(e, kind, issuedAt) {
  if (pI(issuedAt)) return;
  let {
      attestedTypeArtifacts: attestedTypeArtifacts
    } = ee(),
    i = attestedTypeArtifacts.get(e) ?? {},
    l = i.revokedAt?.[kind];
  if (l !== void 0 && issuedAt <= l) return;
  let mark = i.mark;
  if (mark === void 0 || issuedAt > mark.issuedAt || issuedAt === mark.issuedAt && Pe[kind] < Pe[mark.kind]) attestedTypeArtifacts.set(e, {
    ...i,
    mark: {
      kind: kind,
      issuedAt: issuedAt
    }
  });
}
function DOn(e, n, r) {
  if (pI(r)) return;
  let {
      attestedTypeArtifacts: attestedTypeArtifacts_2
    } = ee(),
    i = attestedTypeArtifacts_2.get(e) ?? {},
    revokedAt = {
      ...i.revokedAt
    };
  for (let y of n) revokedAt[y] = Math.max(revokedAt[y] ?? r, r);
  let mark_2 = i.mark,
    mark_3 = mark_2 !== void 0 && !(n.includes(mark_2.kind) && mark_2.issuedAt <= r) ? mark_2 : void 0;
  attestedTypeArtifacts_2.set(e, {
    ...(mark_3 && {
      mark: mark_3
    }),
    revokedAt: revokedAt
  });
}
var _t = f(() => u({
  firstPartyType: M().optional(),
  typeFirstParty: M().optional(),
  template: M().optional()
}));
function Ne(e, n, r, s, i) {
  if (n === void 0) return;
  let l = _t().safeParse(n);
  if (!l.success) return;
  let d = l.data,
    external = i.external;
  if (d.firstPartyType === !0) {
    if (!external) TTt(e, "first_party_type", s);
    return;
  }
  if (d.typeFirstParty !== !0) return;
  if (r !== void 0 && Bn.test(r)) TTt(r, "first_party_type", s);
  if (external) return;
  if (d.template === !0) TTt(e, "template_instance", s);else DOn(e, ["template_instance"], s);
}
function wg(e) {
  return ee().attestedTypeArtifacts.get(e)?.mark?.kind;
}
function Bao(e) {
  return wg(e) !== void 0;
}
function Ctt(e) {
  switch (e) {
    case "first_party_type":
      return "a published first-party Artifact type";
    case "org_pinned_instance":
      return "an Artifact the organization's admins pinned for its type (its design system or template)";
    case "pipeline_instance":
      return "a template the organization's publishing pipeline owns";
    case "template_instance":
      return "a design system (an Artifact made from a template Artifact type) in the user's organization";
  }
}
function eGe(e) {
  let n = wg(e);
  return n === void 0 ? "" : ` [attested: ${Ctt(n)}]`;
}
var bt = 600000;
function Ie(e, setting) {
  let r = ee();
  if (setting === void 0) {
    if (r.sandboxEgress.delete(e)) t(`[artifact] sandbox egress setting for ${e} withdrawn`);
    return;
  }
  r.sandboxEgress.set(e, {
    setting: setting,
    at: Date.now()
  }), t(`[artifact] sandbox egress setting for ${e}: ${setting}`);
}
function jao(e = so()) {
  if (!klt()) return a.CLAUDE_CODE_REMOTE === !0 && !R1() ? void 0 : !1;
  let n = ee().sandboxEgress.get(e);
  if (n === void 0 || Date.now() - n.at >= bt) return;
  return n.setting === "disabled";
}
var Wao = "what the artifact is for and the key decisions; the repo, branch, and commit it was built from; data sources used (MCP servers, load-bearing files); whether embedded data is a snapshot and as of when; known limitations and suggested next steps";
var At = 16384;
var Un = `
[prompt truncated: exceeded ${At / 1024}KB]`;
var wt = /^[\w.:@+-]{1,56}(?:\[[A-Za-z0-9]{1,6}\])?$/,
  Rt = f(() => {
    let e = o().refine(r => r.trim() !== "").optional().catch(void 0),
      n = o().trim().regex(wt).optional().catch(void 0);
    return u({
      prompt: e,
      context: e,
      model: n,
      client_version: n
    });
  });
function Le(e) {
  let n = Rt().safeParse(e);
  if (!n.success) return;
  let {
      prompt: prompt,
      context: context,
      model: model,
      client_version: l
    } = n.data,
    d = {
      ...(prompt !== void 0 && {
        prompt: prompt
      }),
      ...(context !== void 0 && {
        context: context
      }),
      ...(model !== void 0 && {
        model: model
      }),
      ...(l !== void 0 && {
        clientVersion: l
      })
    };
  return Object.keys(d).length > 0 ? d : void 0;
}
var Et = 2000,
  St = 6000;
function Tt(e) {
  return {
    prompt: Math.min(Et, Math.floor(e / 16)),
    context: Math.min(St, Math.floor(3 * e / 16))
  };
}
function Fe(e, n, r) {
  let s = e.trim(),
    i = Array.from(s);
  return i.length <= n ? s : `${i.slice(0, n).join("")}
[${r} truncated after ${n} characters]`;
}
function Kmr(e, n) {
  return "";
}
var kt = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u2028\u2029]+/g;
function Ymr(e) {
  return pc(SJ(fxe, e.replace(kt, " ")));
}
var zao = 524288,
  De = 3149824;
function Ue(e) {
  let n = e.length;
  while (n > 0 && ` 	\r
`.includes(e[n - 1])) n--;
  let r = e.slice(0, n);
  if (!r.endsWith("</script>")) return e;
  let s = r.slice(0, r.length - 9),
    i = s.lastIndexOf('<script type="application/json" id="__frame_comments__">');
  if (i === -1) return e;
  let l = s.slice(i + 56);
  if (l.includes("<")) return e;
  let d;
  try {
    d = JSON.parse(l);
  } catch {
    return e;
  }
  if (typeof d !== "object" || d === null || Array.isArray(d)) return e;
  let g = d;
  if (typeof g.mac !== "string" || g.mac.length === 0) return e;
  if (!Object.hasOwn(d, "payload")) return e;
  let y = s.slice(0, i);
  if (y.endsWith(`
`)) y = y.slice(0, -1);
  return y;
}
function $7(e) {
  return LOn(e) || e.outsideOrg === !0;
}
function gXt(e) {
  return LOn(e) || e.outsideWriter === !0;
}
function LOn(e) {
  return e.authoredByOthers === !0 || e.role !== "owner" || e.publicRead || e.cowritten || e.typeLocked;
}
function xt(e) {
  if (!Array.isArray(e)) return;
  let manifest = {};
  for (let s of e) {
    if (typeof s !== "object" || s === null || typeof s.path !== "string") return;
    manifest[s.path] = s;
  }
  let r = Ltt({
    manifest: manifest
  });
  return r !== void 0 && r.type.length > 0 ? r : void 0;
}
var vt = /^[a-z][a-z0-9_-]{0,63}$/,
  He = ["users", "org", "public"];
function Ot(e) {
  let n = e?.documents;
  return typeof n === "number" && Number.isSafeInteger(n) && n >= 0 ? n : void 0;
}
var j0e = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/,
  regExp = new RegExp(j0e, "g");
function hXt(e) {
  return e.replace(regExp, "");
}
function Ge(e, n, r, workshopPage, i) {
  let ownVersion = I4(n, r, e.ver),
    ownBytesPage = !e.typeLocked && !e.publicRead && !workshopPage && !i,
    plainOwner = ownBytesPage && !$7(e);
  return {
    workshopPage: workshopPage,
    ownVersion: ownVersion,
    ownBytesPage: ownBytesPage,
    plainOwner: plainOwner,
    vouchedOwn: plainOwner && ownVersion
  };
}
async function Gao(e, n, r, s = {}) {
  let island = await h8(e.html, "ws-decisions");
  return {
    ...Ge(e, n, r, island !== null, s.savedInPage === !0),
    island: island
  };
}
async function Vao(e, n, r) {
  return Ge(e, n, r, !1, !1).vouchedOwn && (await h8(e.html, "ws-decisions")) === null;
}
function NOn(e) {
  if (e.publicRead || e.offOrgRamp === !0 || e.external === !0 || e.role === "owner") return null;
  if (e.role === "writer" && e.sameChannel === !0 && wgr()) return "channel";
  return vgr() ? "shared" : null;
}
function HOn(e) {
  let otherWriters = e.role !== "owner" || e.cowritten || e.typeLocked === !0 || e.outsideOrg === !0,
    body = RO(e.html, "page"),
    head = i => yXt(body, i, "page");
  if (otherWriters || !e.vouchedOwn) {
    let [i, l] = otherWriters && e.sameChannel === !0 ? [QUo, ZUo] : e.typeLocked ? [eBo, tBo] : e.role === "owner" && e.outsideOrg === !0 ? [XUo, JUo] : otherWriters ? [KUo, YUo] : [nBo, rBo];
    return {
      enveloped: !0,
      otherWriters: otherWriters,
      lead: `${i}
<${i9e}>
`,
      body: body,
      tail: `
</${i9e}>

${l}`,
      head: head
    };
  }
  return {
    enveloped: !1,
    otherWriters: !1,
    lead: "",
    body: body,
    tail: "",
    head: head
  };
}
function ze(e) {
  return ERo(e, l9e);
}
function RO(e, n = "all") {
  return ze(pc(e, n));
}
function yXt(e, n, r = "all") {
  if (n <= 0) return "";
  for (let s = n;; s--) {
    let i = ze(rUr(e, s, r));
    if (i.length <= n) return i;
  }
}
function FOn(e) {
  if (!U7()) return;
  if (e.syncClient === !0) return typeof e.syncToken === "string" && e.syncToken !== "" ? {
    transport: "sync",
    token: e.syncToken
  } : void 0;
  return e.subscriptionToken ? {
    transport: "live",
    token: e.subscriptionToken
  } : void 0;
}
function gE(e, n = {}) {
  let parsed = Bt(e);
  if (parsed === null) return {
    ok: !1,
    message: n.notUrlMessage ?? OOn(e, {
      field: n.field
    }),
    errorCode: 4
  };
  let s = so();
  if (parsed.env !== s) {
    let i = n.envHint ? ` \u2014 ${n.envHint(s)}` : "";
    return {
      ok: !1,
      message: `that artifact URL is for ${parsed.env}, but this session targets ${s} claude.ai${i}`,
      errorCode: 5
    };
  }
  return {
    ok: !0,
    parsed: parsed
  };
}
var $t = 60000;
function g8(e) {
  return e.gone === !0;
}
function tGe(e) {
  return e.neverPublished === !0;
}
function UU(e) {
  return e.otherOrg === !0;
}
function Mt(e) {
  return typeof e === "object" && e !== null && z7(e)?.reason === "org_mismatch" && "owner_org" in e && typeof e.owner_org === "string" && en(e.owner_org) !== null;
}
var W0e = "this Artifact is in another of the user's organizations, not the one this session is signed in to",
  z0e = "the user runs /login and signs in to that organization",
  err_2 = "this is a public artifact from outside the user's organization: it can be read, but not watched";
var err = `${W0e} \u2014 it opens here only after ${z0e}`,
  Je = "If it was shared with you by email, accept the invitation in a browser first, and check that Claude Code is signed in to the invited account",
  Te = "If this was shared with you from another organization, open it in Claude Code on your computer or in a Claude Code on the web session",
  Nt = new Set([errorCode, "boot_403_agent_not_added", "boot_403_agent_owned", "boot_403_request_access"]),
  qao = "Do not retry this read; tell the user now that the artifact could not be read, then go on without it.";
function Kao(e) {
  return g8(e) || e.errorCode !== void 0 && Nt.has(e.errorCode);
}
function Yao(e) {
  return e.replace(`. ${Je}`, "").replace(`. ${Te}`, "");
}
var It = f(() => u({
    request_access: M(),
    reason: o().optional()
  })),
  timeout = 15000;
async function _Xt({
  slug: slug_2,
  env: env_2,
  sk: sk,
  vanity: vanity
}, signal, {
  kind: kind_2 = "probe",
  relayOnly = !1,
  agentPeer = !1,
  actorId = !1,
  syncLive = !1,
  watchBoot = !1,
  lean: lean,
  credentials: credentials
}) {
  let x = so();
  if (env_2 !== x) return {
    err: `that artifact URL is for ${env_2} claude.ai, but this session targets ${x}`,
    errorCode: "env_mismatch"
  };
  let H = "via=model_read" + (kind_2 === "probe" ? "&bk=probe" : "") + (kind_2 === "probe" && lean !== void 0 ? `&lean=${encodeURIComponent(lean)}` : "") + (agentPeer ? "&peer=agent" : "") + (actorId ? "&actor=id" : "") + (syncLive ? "&live=sync" : "") + (watchBoot || agentPeer || syncLive ? `&vn=${Ttt}` : ""),
    v = sk === void 0 ? "" : `&sk=${encodeURIComponent(sk)}`,
    S = vanity === void 0 ? "" : `&vanity=${encodeURIComponent(vanity)}`,
    E = `/api/frame/${slug_2}?${H}${v}${S}`,
    D = {
      refreshOAuth: !0,
      credentials: credentials,
      headers: $d(),
      timeout: timeout,
      signal: signal
    },
    R,
    P = Date.now(),
    I = performance.now();
  try {
    R = relayOnly ? await Ud.getRelayOnly(E, D) : await Ud.get(E, D);
  } catch (error) {
    if (Fa(error)) throw error;
    return {
      err: "artifact read failed (network error)",
      errorCode: "boot_request_error",
      ...(MRe(error) && {
        transient: !0
      }),
      request: {
        ...O4(error, I),
        wall_elapsed_ms: Date.now() - P,
        ...(cx(error) && {
          relay: !0
        })
      }
    };
  }
  if (Ie(env_2, HRo(R)), !R.ok) {
    if (R.reason === "relay-unavailable") return {
      err: `artifact read failed (relay unavailable${R.status ? `, HTTP ${R.status}` : ""})`,
      ...(R.status !== 0 && {
        status: R.status
      }),
      errorCode: "boot_relay_error"
    };
    if (R.reason === "relay-not-served") return {
      err: "artifact read failed (the session gateway does not serve this session)",
      errorCode: "boot_relay_not_served"
    };
    return {
      err: R.reason === "no-auth" ? Ch(R.detail) : `artifact read unavailable: ${R.reason}`,
      errorCode: R.reason.replace(/-/g, "_")
    };
  }
  if (!R.fromFrame) return {
    err: `artifact read failed (relay HTTP ${R.status})`,
    status: R.status,
    errorCode: "boot_relay_error"
  };
  let j = CC() ? "Slack" : rBe() ? "Teams" : void 0,
    W = `${j ?? "chat"} channel`,
    k = `add this ${W} (under "Add people, groups, or Claude Tags", paste the channel ID)`,
    V = `sharing with a person or service account does not reach a ${W}'s Claude \u2014 ask the owner to open Share and ${k}, or widen General access to the organization`,
    me = `${V}.`;
  if (R.status === 404) {
    let N = FRo(R.data),
      ue = uc() && R.route === "direct";
    return {
      err: N ? "this artifact exists but nothing has been published to it yet, so there is nothing to read" : `artifact not found \u2014 it may have been deleted, or it has not been shared with you${j === void 0 ? ue ? `. ${Te}` : `. ${Je}` : `. If it is restricted to specific people, ${V}${ue ? `. ${Te}` : ""}`}`,
      status: 404,
      ...(XV(R.data) && {
        gone: !0
      }),
      ...(N && {
        neverPublished: !0
      }),
      errorCode: "boot_404"
    };
  }
  if (R.status === 403 && Mt(R.data)) return {
    err: err,
    status: 403,
    otherOrg: !0,
    errorCode: errorCode
  };
  if (R.status === 403) {
    let N = It().safeParse(R.data);
    if (N.success && N.data.reason === "agent_not_added") return {
      err: `this artifact is restricted to specific people, and this ${W}'s Claude is not one of them: ${me}`,
      status: 403,
      errorCode: "boot_403_agent_not_added"
    };
    if (N.success && N.data.reason === "agent_owned") return {
      err: j === void 0 ? "this artifact belongs to a chat channel's Claude and has not been shared with you \u2014 ask someone in the channel it was published from to open Share on it and add you." : `this artifact belongs to another ${W}'s Claude and has not been shared with this one \u2014 ask someone in the channel it was published from to open Share on it and ${k}.`,
      status: 403,
      errorCode: "boot_403_agent_owned"
    };
    if (N.success && N.data.request_access) return {
      err: "you do not have access to this artifact. Open the link in a browser to request access from the owner.",
      status: 403,
      errorCode: "boot_403_request_access"
    };
  }
  if (R.status < 200 || R.status >= 300) return {
    err: `artifact read failed (HTTP ${R.status})`,
    status: R.status,
    errorCode: "boot_failed"
  };
  let data = R.data ?? {},
    {
      ver: ver_3,
      assetToken: assetToken
    } = data,
    q = data.mode === "public" || data.kind === "public";
  if (!ver_3 || !assetToken && !q) return {
    err: "artifact read failed: incomplete boot response",
    errorCode: "boot_incomplete"
  };
  if (!OTe.test(ver_3)) return {
    err: "artifact read failed: malformed boot response",
    errorCode: "boot_bad_ver"
  };
  KMt(slug_2, data.artifactKind), _lt(slug_2, XOn(data), P), YMt(slug_2, data.cowritten), bOr(slug_2, data.authoredByOthers), ylt(slug_2, data.outsideWriter);
  let ae = data.lean === !0,
    external_2 = data.mode === "external";
  if (!ae) _Or(slug_2, external_2);
  if (AS()) yOr(slug_2, !assetToken);
  C3e(slug_2, data.type);
  let {
      probeBoots: probeBoots
    } = ee().shareStatus,
    z = probeBoots.get(slug_2);
  if (z !== void 0 && z.boot.ver !== ver_3) probeBoots.delete(slug_2);
  if (!ae && !q && (!external_2 || data.perm?.role === "writer")) Ne(slug_2, data.typeFacts, ZL(ft(slug_2)), P, {
    external: external_2
  });
  return {
    err: null,
    data: data,
    ver: ver_3,
    assetToken: assetToken || void 0,
    route: R.route
  };
}
async function RT(e, n, r, {
  kind: kind_3 = "probe",
  gatePublicRead = !0,
  relayOnly: relayOnly_2 = !1,
  agentPeer: agentPeer_2 = !1,
  actorId: actorId_2 = !1,
  syncLive: syncLive_2 = !1,
  watchBoot: watchBoot_2 = !1,
  lean: lean_2,
  speculative = !1,
  credentials: credentials_2,
  probeToolUseId: probeToolUseId
}) {
  let H = speculative ? p : m,
    v;
  if (probeToolUseId !== void 0 && !agentPeer_2 && !actorId_2 && !syncLive_2 && !watchBoot_2 && lean_2 === void 0 && !speculative) {
    let {
        probeBoots: probeBoots_2
      } = ee().shareStatus,
      P = Date.now();
    for (let [j, W] of probeBoots_2) if (P - W.issuedAt > $t) probeBoots_2.delete(j);
    let I = probeBoots_2.get(e.slug);
    if (I !== void 0 && I.toolUseId === probeToolUseId && (kind_3 === "probe" || I.boot.data.typeInstance === !1) && !(relayOnly_2 && uc() && I.boot.route !== "relay") && !fXt(e.slug, I.boot.ver).behind) v = {
      ...I.boot,
      reused: !0
    }, t(`[artifact] ${n}: ${kind_3}-kind boot served from this tool use's share probe (probe issued ${P - I.issuedAt}ms ago) slug=${e.slug}`);
  }
  let S = {
      kind: kind_3,
      relayOnly: relayOnly_2,
      agentPeer: agentPeer_2,
      actorId: actorId_2,
      syncLive: syncLive_2,
      watchBoot: watchBoot_2,
      credentials: credentials_2
    },
    E = v ?? (await _Xt(e, r, {
      ...S,
      lean: lean_2?.version
    }));
  if (lean_2 !== void 0 && (E.err === null ? E.data.lean === !0 && !lean_2.mustCarry(E.data) : E.errorCode === "boot_incomplete")) p(n, "lean_boot_incomplete"), t(`[artifact] ${n}: the answer to a lean boot request was incomplete; booting in full slug=${e.slug}`), E = await _Xt(e, r, S);
  if (E.err !== null) {
    let R = E.errorCode === "boot_request_error" || E.errorCode === "boot_failed" ? {
      ...E.request,
      ...(E.status !== void 0 && {
        http_status: E.status
      }),
      ...(syncLive_2 && {
        sync_live: !0
      }),
      ...(agentPeer_2 && {
        agent_peer: !0
      }),
      ...(relayOnly_2 && {
        relay_only: !0
      })
    } : void 0;
    if (R !== void 0) H(n, E.errorCode, R);else H(n, E.errorCode);
    return {
      err: E.err,
      ...(E.status !== void 0 && {
        status: E.status
      }),
      ...(E.gone && {
        gone: !0
      }),
      ...(E.neverPublished && {
        neverPublished: !0
      }),
      ...(E.otherOrg && {
        otherOrg: !0
      }),
      ...(E.transient && {
        transient: !0
      }),
      errorCode: E.errorCode
    };
  }
  let D = E;
  if (gatePublicRead && D.assetToken === void 0 && !AS()) return H(n, "public_read_disabled"), {
    err: "artifact read failed: this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet",
    errorCode: "public_read_disabled"
  };
  return D;
}
async function Xao(slug_3, n, credentials_3, {
  syncLive: s = !1,
  lean: i
} = {}) {
  let env_3 = so(),
    d = await RT({
      slug: slug_3,
      env: env_3
    }, "artifact_live_subscribe", n, {
      agentPeer: s,
      syncLive: s,
      watchBoot: !0,
      ...(i !== void 0 && {
        lean: {
          version: i,
          mustCarry: A => "subscriptionToken" in A && "syncToken" in A && "syncClient" in A && "subscriptionTokenExp" in A && "watchTokenRenewEnabled" in A && "perm" in A
        }
      }),
      credentials: credentials_3
    });
  if (d.err !== null) return {
    err: d.err,
    ...(d.status && {
      status: d.status
    }),
    ...(d.otherOrg && {
      otherOrg: !0
    }),
    ...(mW(d.status) && {
      unavailable: !0
    }),
    ...(d.errorCode === "boot_request_error" && {
      noAnswer: !0
    })
  };
  if (d.assetToken === void 0) return {
    err: err_2,
    publicOutsideOrg: !0
  };
  let g = FOn(d.data),
    y = d.data.syncClient === !0;
  return {
    err: null,
    token: g?.token,
    transport: g?.transport ?? (y ? "sync" : "live"),
    ver: d.ver,
    editor: Ft(d),
    tokenExp: y ? void 0 : Ye(d.data.subscriptionTokenExp),
    renewable: g?.transport === "live" && d.data.watchTokenRenewEnabled === !0,
    ...(typeof d.data.title === "string" && {
      title: d.data.title
    })
  };
}
function Ye(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : void 0;
}
function mW(e) {
  return e !== void 0 && (e >= 500 || e === 429 || e === 408);
}
async function Jao(e, signal_2, credentials_4) {
  let s;
  try {
    s = await Ud.post(`/api/frame/watch-token/${e}?vn=${Ttt}`, {}, {
      refreshOAuth: !0,
      credentials: credentials_4,
      headers: $d(),
      timeout: timeout,
      signal: signal_2
    });
  } catch (error) {
    if (Fa(error)) throw error;
    return {
      err: "renew_miss"
    };
  }
  if (!s.ok || !s.fromFrame || s.status < 200 || s.status >= 300) return {
    err: "renew_miss",
    ...(s.ok && {
      status: s.status
    })
  };
  let i = s.data ?? {},
    l = FOn(i),
    token = l?.transport === "live" ? l.token : void 0;
  if (!i.ver || !OTe.test(i.ver) || token === void 0) return {
    err: "renew_miss",
    status: s.status
  };
  return {
    err: null,
    token: token,
    transport: "live",
    ver: i.ver,
    editor: void 0,
    tokenExp: Ye(i.subscriptionTokenExp),
    renewable: !0
  };
}
function Ft(e) {
  return e.assetToken !== void 0 && xse(e.data.perm?.role);
}
function xse(e) {
  return e === "owner" || e === "writer";
}
function Lt(e) {
  return e === "reader" || e === "viewer" || e === "commenter";
}
async function G0e(e, n, credentials_5) {
  let boot = await _Xt(e, n, {
    credentials: credentials_5
  });
  if (boot.err !== null) return {
    err: boot.err,
    errorCode: boot.errorCode,
    ...(boot.gone && {
      gone: !0
    })
  };
  let outsideOrgReader = boot.assetToken === void 0,
    l = boot.data.perm?.role,
    outsideWriter = Kge(boot.data.outsideWriter);
  return {
    err: null,
    mode: outsideOrgReader ? "public" : boot.data.perm?.mode ?? boot.data.mode,
    shared: boot.data.shared,
    role: outsideOrgReader && l === "owner" ? void 0 : l,
    outsideOrgReader: outsideOrgReader,
    cowritten: boot.data.cowritten === !0,
    ...(outsideWriter !== void 0 && {
      outsideWriter: outsideWriter
    }),
    ...(typeof boot.data.title === "string" && {
      title: boot.data.title
    }),
    boot: boot
  };
}
var Xe = nu + qwe + De + 65536,
  efe = u0 + qwe + 1,
  Ve = {
    relayed: !1,
    why: "the session gateway declined an artifact read a few minutes ago, so this read did not retry it",
    code: "declined"
  },
  Ut = 5000,
  Ht = 1000;
function V0e() {
  return {
    remaining: 1
  };
}
function RTt(e) {
  return `the session gateway could not serve this read just now (HTTP ${e}, after one retry); this is transient \u2014 retry shortly`;
}
async function ATt(e, n, r) {
  let s = () => Dt.get(LOo(e, n), {
      host: "ccr-gateway",
      auth: "session-jwt",
      headers: NOo(r.token),
      timeout: r.timeout,
      responseType: "arraybuffer",
      maxRedirects: 0,
      maxContentLength: r.maxContentLength,
      validateStatus: () => !0,
      signal: r.signal
    }),
    i = await s();
  if (!i.ok || !mW(i.status) || r.retryBudget.remaining < 1) return i;
  r.retryBudget.remaining--;
  let l = i.response.headers?.["retry-after"],
    d = Math.min(oh(typeof l === "string" ? l : void 0) ?? Ht, Ut);
  return t(`[artifact] mount answered HTTP ${i.status}; retrying once in ${d}ms slug=${e}`), await Q(d, r.signal, {
    abortError: () => new We()
  }), s();
}
async function Wt(e, n) {
  let retryBudget = V0e(),
    s = g => ATt(e.slug, g, {
      token: e.token,
      timeout: 30000,
      maxContentLength: e.fileRead ? efe : Xe,
      signal: e.signal,
      retryBudget: retryBudget
    }),
    i = g => {
      let y = g;
      return y?.["x-frame-asset-content-type"] ?? y?.["content-type"];
    };
  if (e.source !== void 0 && !e.source.fellBack) {
    let g;
    try {
      g = await s(e.source.path);
    } catch (error) {
      if (Fa(error) || error instanceof We) throw error;
    }
    if (g?.ok && g.status === 200) return pX(Uk), {
      relayed: !0,
      result: n(Buffer.from(g.data ?? new ArrayBuffer(0)), i(g.response.headers), !0)
    };
    e.source.fellBack = g?.ok ? g.status : 0, t(`[artifact] stored-source read via the gateway fell back (${e.source.fellBack}) slug=${e.slug}`);
  }
  let l = (why, code, status) => {
      if (status === 404 && !e.fileRead && !uzn(Uk) && (dle() || !aHe(Uk))) Y3(Uk);
      return {
        relayed: !1,
        why: why,
        code: code,
        ...(status !== void 0 && {
          status: status
        })
      };
    },
    d;
  try {
    d = await s(e.servedPath);
  } catch (error) {
    if (Fa(error) || error instanceof We) throw error;
    return Jge(), l("the gateway request failed in transport", "request_error");
  }
  if (!d.ok) return d.reason === "no-auth" ? l(sHe(), "no_auth") : l(`the gateway request was skipped (${d.reason})`, "client_policy");
  if (L3e(d.status)) return l("artifact reads through the session gateway are not enabled for this session", "not_served", d.status);
  if (d.status === 404 && e.fileRead) return m(e.feature, "asset_file_not_found", {
    relay: !0
  }), {
    relayed: !0,
    result: {
      err: "no file is published at that path in the served version \u2014 or artifact reads through the session gateway are not enabled for this session",
      status: 404,
      ...(uzn(Uk) && zMt(d.response.headers, aX(d.response.headers, d.data, y => Rtt(y, e.token))) && {
        missingFile: !0
      })
    }
  };
  if (d.status === 404) return l("artifact reads through the session gateway are not enabled for this session, or the artifact service no longer serves this version", "not_served", 404);
  if (D3e(d.status, d.data)) return l(M3e, "network_off", 403);
  if (mW(d.status)) return l(`temporarily unable: HTTP ${d.status} after one retry, so a later read may succeed`, "unavailable", d.status);
  if (d.status < 200 || d.status >= 300) return Jge(d.status), l(`the gateway refused the relay with HTTP ${d.status}`, "http", d.status);
  return pX(Uk), {
    relayed: !0,
    result: n(Buffer.from(d.data ?? new ArrayBuffer(0)), i(d.response.headers), !1)
  };
}
function Vt(e) {
  if (e === void 0) return "";
  if (!Jd(e) || Buffer.byteLength(e, "utf8") > 512) return;
  let n = e.split("/");
  for (let r of n) if (r === "" || r === "." || r === ".." || /[\\%\x00-\x1f\x7f]/.test(r)) return;
  return n.map(encodeURIComponent).join("/");
}
function UOn(e) {
  return e.servedAudienceVersion === !0 || e.audience === "owner" || e.audienceView === "live" || e.audienceView === "pinned-current";
}
var Kt = "_src";
function Xmr(e) {
  return e.assetToken !== void 0 && (e.data.mode !== "external" || e.data.perm?.role === "writer");
}
function Jmr(e) {
  let {
    mode: mode,
    perm: perm
  } = e.data;
  if (mode === "external") return "external";
  if (e.assetToken === void 0) return "public";
  if (mode !== void 0) return "unproven";
  if (perm?.role === "owner") return "own";
  return typeof perm?.mode === "string" && perm.mode !== "" ? "same" : "unproven";
}
function Qmr(e) {
  return e !== "own" && e !== "same";
}
function Zmr(e, n) {
  return `/_f/${e}/${Kt}/${n === "" ? "index.html" : n}`;
}
var timeout_2 = 30000;
function xTt(e) {
  let host = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    r = void 0;
  return {
    host: host,
    base: `https://${host}`
  };
}
function qe(e) {
  return e === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
}
function PTt(e) {
  let n = qe(e);
  return P2() ? i0n(n) : uc() ? `To allow direct artifact reads here, add ${n} to the environment's allowed domains: environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access.` : a.CLAUDE_CODE_REMOTE ? `To allow artifact reads here, add ${n} to the network allowlist of the environment this remote session runs in.` : `To allow artifact reads here, add ${n} to the network allowlist this session runs behind \u2014 the sandbox's allowed domains, or the Claude desktop app's network settings (Settings \u2192 Capabilities; a workspace admin can add it on Team/Enterprise).`;
}
function aR(e, n, r, s = "artifact_webfetch_read", i = "probe", l, d) {
  return Qe(e, n, s, e.file, r, i, l, d);
}
async function nGe(e, n, r, s, i = "artifact_webfetch_read", l) {
  let d = $U(n);
  if ("errMsg" in d) return m(i, "invalid_path"), {
    err: `artifact read failed: ${d.errMsg}`
  };
  return Qe(e, r, i, d.key, s, "probe", void 0, l);
}
async function Qe(e, signal_3, feature, s, credentials_6, kind_4, d, probeToolUseId_2) {
  let y = Vt(s);
  if (y === void 0) return m(feature, "invalid_file_path"), {
    err: "artifact file path is not a clean relative path"
  };
  let A = await RT(e, feature, signal_3, {
    kind: kind_4,
    credentials: credentials_6,
    probeToolUseId: probeToolUseId_2
  });
  if (A.err !== null) return A;
  let {
    ver: ver_4,
    assetToken: assetToken_2
  } = A;
  if (s !== void 0 && assetToken_2 === void 0) return m(feature, "public_file"), {
    err: "the files of a public artifact read from outside its organization are not readable this way",
    status: 403,
    publicFile: !0
  };
  if (assetToken_2 === void 0 && d?.() !== !0) return p(feature, fX), {
    err: "this is a public artifact from outside your organization; its page is fetched only on a read the user approved, and this call carries no such approval \u2014 nothing was fetched",
    status: 403,
    publicUnasked: !0
  };
  let servedPath = `/_f/${ver_4}/${y}`,
    source = Xmr(A) ? {
      path: Zmr(ver_4, y)
    } : void 0,
    H = h => {
      let w = {
        ...(h && {
          source: !0
        }),
        ...(!h && source?.fellBack !== void 0 && {
          source_fallback_status: source.fellBack
        }),
        ...(A.reused && {
          boot_reused: !0
        })
      };
      return Object.keys(w).length > 0 ? w : void 0;
    },
    {
      title: title,
      favicon: favicon,
      perm: perm_2,
      cowritten: cowritten
    } = A.data,
    R = A.data.artifactKind === ww || ft(e.slug)?.artifactKind === ww,
    P = assetToken_2 === void 0 ? "public" : perm_2?.mode,
    I = Jmr(A),
    role = perm_2?.role === "owner" ? "owner" : perm_2?.role === "writer" ? "writer" : "reader",
    W = perm_2?.assignableReadModes,
    shareMenu = role === "owner" && Array.isArray(W) && W.every(item => item === "owner" || He.some(w => w === item)) ? {
      modes: He.filter(item => W.includes(item) && !(R && item === "public")),
      ...(typeof perm_2?.externalSharingEnabled === "boolean" && {
        externalSharing: perm_2.externalSharingEnabled
      }),
      ...(typeof perm_2?.externalInvitesEnabled === "boolean" && {
        externalInvites: perm_2.externalInvitesEnabled
      })
    } : void 0,
    origin = Le(A.data.origin_metadata),
    manifestPaths = xt(A.data.files),
    storeDocuments = Ot(A.data.dbUsage),
    contentStore = typeof A.data.contentStore === "string" && vt.test(A.data.contentStore) ? A.data.contentStore : void 0,
    te = (raw, w, U, se = () => _(feature, H(U))) => {
      se();
      let contentType_2 = s === void 0 ? "text/html" : typeof w === "string" ? Ze(w, ";").trim().toLowerCase() : "",
        le = raw.toString("utf-8"),
        html = contentType_2 === "text/html" ? Ue(le) : le,
        fe = Kge(A.data.outsideWriter),
        outsideWriter_2 = QWn(fe, ft(e.slug)?.outsideWriter);
      return {
        err: null,
        html: html,
        contentType: contentType_2,
        raw: raw,
        role: role,
        ...(U && {
          source: !0
        }),
        cowritten: cowritten === !0 || R || ft(e.slug)?.cowritten === !0,
        publicRead: assetToken_2 === void 0,
        ...(Lt(perm_2?.role) && {
          servedAudienceVersion: !0
        }),
        sameChannel: perm_2?.sameChannel === !0 && role === "writer",
        ...(I === "external" && {
          external: !0
        }),
        ...(Qmr(I) && {
          offOrgRamp: !0
        }),
        typeLocked: lle(e.slug, A.data.type),
        ...((A.data.authoredByOthers === !0 || ft(e.slug)?.authoredByOthers === !0) && {
          authoredByOthers: !0
        }),
        ...(BTe(role === "owner" && assetToken_2 !== void 0, fe, outsideWriter_2) && {
          outsideOrg: !0
        }),
        ...(outsideWriter_2 !== void 0 && {
          outsideWriter: outsideWriter_2
        }),
        ...(shareMenu !== void 0 && {
          shareMenu: shareMenu
        }),
        ...(P !== void 0 && (() => {
          let K = R3e(P, A.data.shared),
            tt = xse(perm_2?.role),
            {
              live: live_2,
              shared: shared
            } = A.data,
            nt = typeof live_2 === "string" && OTe.test(live_2),
            Re = typeof shared === "string" && OTe.test(shared) ? shared : void 0,
            rt = nt && (shared === void 0 || shared === "") || Re !== void 0;
          return {
            audience: K.mode,
            ...(tt && rt && K.mode !== "owner" && {
              audienceView: Re === void 0 ? "live" : Re === ver_4 ? "pinned-current" : "pinned-earlier"
            })
          };
        })()),
        bytes: contentType_2 === "text/html" ? Buffer.byteLength(html, "utf8") : raw.length,
        title: title ?? "",
        ...(favicon !== void 0 && {
          favicon: favicon
        }),
        ver: ver_4,
        ...(typeof A.data.fileCount === "number" && Number.isSafeInteger(A.data.fileCount) && A.data.fileCount > 0 && {
          fileCount: A.data.fileCount
        }),
        ...(manifestPaths !== void 0 && {
          manifestPaths: manifestPaths
        }),
        ...(storeDocuments !== void 0 && {
          storeDocuments: storeDocuments
        }),
        ...(contentStore !== void 0 && {
          contentStore: contentStore
        }),
        ...(origin !== void 0 && {
          origin: origin
        })
      };
    };
  if (R && s === void 0) {
    let h = await ee().liveReplicas.renderLevel?.(e.slug, X3, A.data.headSeq, signal_3);
    if (h !== void 0) {
      t(`[artifact] read served from the local replica at seq ${h.head} slug=${e.slug}`);
      let w = te(Buffer.from(h.html, "utf8"), "text/html", !1);
      return w.err === null ? {
        ...w,
        localReplica: {
          head: h.head
        }
      } : w;
    }
  }
  let q = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    ae = PTt(e.env),
    oe = (h, w) => {
      if (h.code === "unavailable" && h.status !== void 0) return m(feature, "asset_relay_unavailable", {
        relay_status: h.status
      }), {
        err: `${RTt(h.status)}. Your access to the artifact itself is fine (the permission check passed); this environment cannot reach ${q} directly, so its reads go through the gateway.`,
        status: h.status
      };
      return m(feature, "asset_egress_blocked", {
        relay: c(h.code),
        ...(h.status !== void 0 && {
          relay_status: h.status
        }),
        ...(!w && {
          connect: !0
        })
      }), {
        err: `this environment's network allowlist blocks ${q}, and the session gateway could not serve the read either (${h.why}); your access to the artifact itself is fine (the permission check passed). ${ae}`,
        status: 403,
        ...(w && {
          deterministic: "egress-blocked"
        })
      };
    },
    de = (token_2, w) => Wt({
      slug: e.slug,
      servedPath: servedPath,
      fileRead: s !== void 0,
      feature: feature,
      token: token_2,
      signal: signal_3,
      ...(source !== void 0 && {
        source: source
      })
    }, (U, se, ne) => te(U, se, ne, () => p(feature, w, H(ne)))),
    z;
  if (assetToken_2 !== void 0 && ee().contentHostEgressDenied.has(e.env) && K3() && !XB(Uk)) {
    let h = await de(assetToken_2, "asset_egress_relayed");
    if (h.relayed) return h.result;
    z = h;
  }
  let N = void 0,
    ue = N ?? `https://${q}`,
    et = assetToken_2 === void 0 ? `${ue}${servedPath}` : `${ue}${servedPath}?__frame_t=${encodeURIComponent(assetToken_2)}`,
    ye = async h => {
      ee().contentHostEgressDenied.add(e.env);
      let w = K3();
      if (assetToken_2 !== void 0 && w) {
        if (z !== void 0) return oe(z, h);
        if (XB(Uk)) return oe(Ve, h);
        let U = await de(assetToken_2, "asset_egress_relayed");
        return U.relayed ? U.result : oe(U, h);
      }
      return m(feature, "asset_egress_blocked", {
        ...(!h && {
          connect: !0
        })
      }), {
        err: assetToken_2 === void 0 && w ? `this environment's network allowlist blocks ${q}, and public (tokenless) artifacts are not served through the session gateway, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ae}` : `this environment's network allowlist blocks ${q}, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ae}`,
        status: 403,
        ...(h && {
          deterministic: "egress-blocked"
        })
      };
    },
    ke = h => tl.get(h, {
      signal: signal_3,
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxRedirects: 0,
      maxContentLength: s === void 0 ? Xe : efe,
      validateStatus: () => !0,
      ...(N && {
        headers: {
          Host: `${e.slug}.frame.localhost`
        }
      })
    });
  if (source !== void 0 && assetToken_2 !== void 0 && source.fellBack === void 0 && !ee().contentHostEgressDenied.has(e.env)) {
    let h;
    try {
      h = await ke(`${ue}${source.path}?__frame_t=${encodeURIComponent(assetToken_2)}`);
    } catch (error) {
      if (Fa(error)) throw error;
      if (ZNe(error)) return ye(!1);
    }
    if (h !== void 0 && KB(h.status, h.headers)) return ye(!0);
    if (h !== void 0 && h.status === 200) return te(Buffer.from(h.data), h.headers?.["content-type"], !0);
    source.fellBack = h?.status ?? 0, t(`[artifact] stored-source read fell back (${source.fellBack}) slug=${e.slug}`);
  }
  let L;
  try {
    L = await ke(et);
  } catch (error) {
    if (Fa(error)) throw error;
    if (ZNe(error)) return ye(!1);
    let w = _2(error),
      U = w === void 0 ? void 0 : k3e(w.headers) ?? lX(w.headers),
      se = MRe(error),
      ne = fu(error) && /^[A-Z][A-Z0-9_]{1,48}$/.test(error.code ?? "") ? ` ${error.code}` : "",
      le = w !== void 0 ? `proxy refused the connection: ${pde(w.connectStatus)}${U === void 0 ? "" : `, ${U}`}` : se ? `network error${ne}: could not connect to ${q} on port 443 \u2014 the machine running Claude Code needs outbound HTTPS to ${qe(e.env)} when the Artifact tool is enabled` : "read failed",
      ie = K => K === void 0 ? "" : `, and the session gateway could not serve the read either (${K.why})`,
      fe = K => K !== void 0 && {
        relay: c(K.code),
        ...(K.status !== void 0 && {
          relay_status: K.status
        })
      };
    if (w !== void 0 && w.connectStatus === 407) return m(feature, "asset_proxy_refused", {
      status: w.connectStatus,
      ...fe(z)
    }), {
      err: `artifact content fetch failed (${le})${ie(z)}`,
      status: w.connectStatus,
      ...(U !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${pde(w.connectStatus)})${ie(z)}`
      })
    };
    let J = z;
    if (assetToken_2 !== void 0 && J === void 0 && se && K3()) if (XB(Uk)) J = Ve;else {
      let K = await de(assetToken_2, "asset_unreachable_relayed");
      if (K.relayed) return K.result;
      J = K;
    }
    return m(feature, "asset_request_error", {
      ...(w !== void 0 && {
        status: w.connectStatus
      }),
      ...fe(J)
    }), {
      err: `artifact content fetch failed (${le})${ie(J)}`,
      ...(se && w === void 0 && {
        transient: !0
      }),
      ...(w !== void 0 && w.connectStatus !== 0 && {
        status: w.connectStatus
      }),
      ...(w !== void 0 && U !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${pde(w.connectStatus)})${ie(J)}`
      })
    };
  }
  if (KB(L.status, L.headers)) return ye(!0);
  if (ee().contentHostEgressDenied.delete(e.env), L.status < 200 || L.status >= 300) {
    let h = aX(L.headers, L.data, U => Rtt(U, assetToken_2));
    if (L.status === 403 && assetToken_2 === void 0 && qge(L.headers, h)) return m(feature, "public_asset_forbidden"), {
      err: "artifact is not publicly readable at this version",
      status: 403
    };
    if (L.status === 404 && y !== "" && assetToken_2 !== void 0 && zMt(L.headers, h)) return p(feature, "file_not_in_manifest"), {
      err: "this version of the artifact has no file at that path",
      status: 404,
      missingFile: !0
    };
    let proxyDeny = dOr(L.status, h);
    return m(feature, proxyDeny ?? "asset_failed"), {
      err: `artifact content fetch failed (${jt(L.status, L.headers, h)})`,
      status: L.status,
      respondent: !0,
      ...(proxyDeny !== void 0 && {
        safeErr: v3e[proxyDeny],
        proxyDeny: proxyDeny
      })
    };
  }
  return te(Buffer.from(L.data), L.headers?.["content-type"], !1);
}
function jt(e, n, r) {
  let s = [`HTTP ${e}`],
    i = lX(n);
  if (i === void 0 && r.reason !== void 0) s.push(`response body: "${pc(r.reason.replaceAll('"', "'"))}"`);else if (i !== void 0) s.push(`the environment's egress proxy reported: ${i}`);else if (r.proxyError !== void 0) s.push(`x-proxy-error header: "${pc(r.proxyError.replaceAll('"', "'"))}"`);
  if (r.requestId !== void 0) s.push(`x-request-id: ${r.requestId}`);
  return s.join("; ");
}
function P4(e) {
  return e.respondent ? e.safeErr ?? `artifact content fetch failed (HTTP ${e.status ?? "error"})` : e.err;
}
function Rtt(e, n) {
  let r = e.replace(/(?:_|%(?:25)*5f){2}frame(?:_|%(?:25)*5f)t(?:=|%(?:25)*3d)["']?[^\s&"'<>]*/gi, "__frame_t=[redacted]");
  if (n !== void 0 && n !== "") {
    r = je(r, n, "g");
    let s = encodeURIComponent(n);
    if (s !== n) r = je(r, s, "gi");
  }
  return r;
}
var Se = 16,
  Ke = /[A-Za-z0-9._~%-]/;
function je(e, n, r) {
  if (n.length <= Se) return e.replaceAll(n, "[redacted]");
  let s = new Set();
  for (let g = 0; g + Se <= n.length; g++) s.add(Gc(n.slice(g, g + Se)));
  let regExp_2 = new RegExp(`(?:${[...s].join("|")})${Ke.source}*`, r),
    l = "",
    d = 0;
  for (let g of e.matchAll(regExp_2)) {
    let index = g.index;
    while (index > d && Ke.test(e.charAt(index - 1))) index--;
    l += `${e.slice(d, index)}[redacted]`, d = g.index + g[0].length;
  }
  return l + e.slice(d);
}
function Qao(slug_4, html_2) {
  let r = Object.freeze({
    slug: slug_4,
    html: html_2
  });
  return ee().mintedStoredPageProbes.add(r), r;
}
function Zao(e) {
  return typeof e === "object" && e !== null && ee().mintedStoredPageProbes.has(e);
}
export { Wmr, OOn, fW, ev, iR, uXt, F7, pXt, MOn, $U, Lao, Nao, U0e, zmr, B0e, Z2e, Ase, Gmr, Vmr, Hao, Ttt, qmr, fXt, Fao, $ao, mXt, Uao, TTt, DOn, wg, Bao, Ctt, eGe, jao, Wao, Kmr, Ymr, zao, $7, gXt, LOn, j0e, hXt, Gao, Vao, NOn, HOn, RO, yXt, FOn, gE, g8, tGe, UU, W0e, z0e, err_2 as CTt, qao, Kao, Yao, timeout as $On, _Xt, RT, Xao, mW, Jao, xse, G0e, efe, V0e, RTt, ATt, UOn, Xmr, Jmr, Qmr, Zmr, timeout_2 as egr, xTt, PTt, aR, nGe, P4, Rtt, Qao, Zao };