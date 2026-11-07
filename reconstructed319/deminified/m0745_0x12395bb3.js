// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Ee } from "B:/~BUN/root/chunk-game8aqv.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { ca, Ba, fB, Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, _, m7 } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Qo, nf, tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { YJ, yM } from "B:/~BUN/root/chunk-wthaftk0.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Kqe, ara, lra, dra, cra, ura, fra, pra, mra, hra, gra, Rnt, Cae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { nfe, rV, rgt, xCs, LFt, NFt, rfe } from "B:/~BUN/root/chunk-b5ry9py2.js";
import { nl, rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { Q1, hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { nB, v5, nwt } from "B:/~BUN/root/chunk-65j2302z.js";
import { tn, EC, R_ } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { tM, d6i, c6i, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ss, I4, Qt, uKe, hr, oLs, fn, Gz, Bn, Jd, mLs } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { LU } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { nEn, WIe, Plt, iXr, l_, SJo, wJo, wve, s6t, TAt, J3e, dXr, cre, a6t, Pir, vge } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { xXr, z8, kl, wEn } from "B:/~BUN/root/chunk-gnvjfqfc.js";
import { y_ } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { tU, xu, cX, t3 } from "B:/~BUN/root/chunk-17caj8fw.js";
import { ows, oee, sws, kmt, vmt, ose, eU, sse, ZW, ise, jvr, yue, ZJe, Emt, CLe, ZP, Au } from "B:/~BUN/root/chunk-hhd7smkx.js";
import { bXr } from "B:/~BUN/root/chunk-thggwabf.js";
import { Dmt, Tb, wA, x_e, W2, Nmt, fR, vue } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { VSr } from "B:/~BUN/root/chunk-0ypwt1ew.js";
import { Ren, pGe, OLe, xmo, l7e, Mt, zws, bNn, Pen, Vws, Kws, Omo, Imo, Ien, MLt, MLe, Men, Fq, Den, wue, DLt, LLt as errorCode, $I, lee } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { T1 } from "B:/~BUN/root/chunk-vdqpev1m.js";
import { o, I, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var Ie = {
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
  pt = {
    chat: "chat",
    share: "shared chat",
    task: "task",
    cowork: "task",
    code_session: "session",
    epitaxy: "session",
    project: "project"
  };
function ht(e) {
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
  let a = Object.hasOwn(Ie, n) ? Ie[n] : void 0;
  if (a === void 0 || a.needsId && r === void 0) return "other";
  return a.family;
}
function KXo(e) {
  let n = Gz(e),
    env = oLs(n);
  if (env === null) return null;
  let s;
  try {
    s = new URL(n);
  } catch {
    return null;
  }
  let a = s.searchParams.get("artifact") || s.searchParams.get("frame"),
    slug = null;
  if (a !== null) {
    let d = a.toLowerCase();
    slug = hr.test(d) ? d : I4(a);
  }
  return {
    family: ht(s.pathname.split("/").filter(item => item !== "")),
    env: env,
    artifact: slug === null ? null : {
      slug: slug
    }
  };
}
function G9r(e, n = {}) {
  let r = `not an artifact URL: ${e} \u2014`,
    s = KXo(e),
    a = s === null ? void 0 : pt[s.family];
  if (s !== null && a !== void 0 && s.artifact !== null) {
    let b = Bn({
      slug: s.artifact.slug,
      env: s.env
    });
    return `${r} that is a claude.ai ${a} link; pass the artifact's own URL (${b}) as \`${n.field ?? "url"}\`.`;
  }
  if (s?.family === "design") {
    let b = n.designToolName === void 0 ? "" : `; use the ${n.designToolName} tool`;
    return `${r} that is a Claude Design link, which the ${Qt} tool cannot open${b}.`;
  }
  if (s?.family === "chat_artifact" || /^https:\/\/(?:www\.)?claude\.site(?:[/?#]|$)/.test(Gz(e.trim()))) return `${r} that is an artifact from a claude.ai chat (the chat's artifact panel or its public page), which is separate from artifacts published with this tool and has no ${uKe()} link, so this tool cannot read it. If the user wants its content used here, ask them to paste it or save it to a file in this session; if they meant one of their published artifacts, action: "list" shows those.`;
  if (a !== void 0) return `${r} that is a claude.ai ${a} link, not a published artifact, and this tool cannot read a ${a}. If the user meant an artifact shown in that ${a}, ask them for the artifact's own ${uKe()} link or find it with action: "list"; otherwise ask them to paste the content they want used.`;
  let d = e.trim(),
    slug_2 = hr.test(d.toLowerCase()) ? d.toLowerCase() : I4(d);
  if (s === null && slug_2 !== null) return `${r} that looks like an artifact id on its own; if it is one, pass the full link ${Bn({
    slug: slug_2,
    env: ss()
  })} as \`${n.field ?? "url"}\`.`;
  return `${r} pass the artifact's ${uKe()} link (action: "list" shows them).`;
}
import { lstat as fe, open as gt, readlink as mt, realpath as me, stat as yt } from "fs/promises";
async function JY(e, n) {
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
import { constants as _t } from "fs";
import { dirname as Fe, isAbsolute as ee, join as ye, normalize as Y, relative as bt, sep as ne } from "path";
function _lt(e) {
  return Ks(e) || Ba(e) || fB(e);
}
function G0(e) {
  if (_lt(e)) return !0;
  let {
    paths: paths,
    vetted: vetted
  } = m7(e);
  return !vetted || paths.some(_lt);
}
function ie(e) {
  return Ks(e) || Ba(e) || fB(e);
}
var rA = 512,
  dF = 255,
  uir = Pir - 1,
  yge = dF + 1;
function Se(e, n) {
  if (e.length === 0) return {
    errMsg: `${n} may not be empty`
  };
  if (e.length > rA) return {
    errMsg: `${n} is longer than ${rA} characters`
  };
  let nfc = e.normalize("NFC");
  if (/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(nfc) || !nf(nfc)) return {
    errMsg: `${n} ${kl(e)} contains control, formatting, line-separator, or private-use characters, or a malformed one`
  };
  if (nfc.includes("\\")) return {
    errMsg: `${n} ${kl(e)} contains a backslash \u2014 published paths use forward slashes on every platform`
  };
  if (/[?#%]/.test(nfc)) return {
    errMsg: `${n} ${kl(e)} contains characters that cannot appear in a served URL path ("?", "#", "%")`
  };
  if (nfc.startsWith("/")) return {
    errMsg: `${n} ${kl(e)} is absolute \u2014 published paths are relative to the artifact root`
  };
  let s = nfc.split("/");
  if (s.some(item => item === "")) return {
    errMsg: `${n} ${kl(e)} has an empty path segment`
  };
  if (s.some(item => item === "." || item === "..")) return {
    errMsg: `${n} ${kl(e)} contains "." or ".." segments \u2014 pass the plain served path`
  };
  if (s.some(item => item === "__proto__" || item === "constructor" || item === "prototype")) return {
    errMsg: `${n} ${kl(e)} contains a reserved name ("__proto__", "constructor", "prototype")`
  };
  if (/[:;]/.test(nfc)) return {
    errMsg: `${n} ${kl(e)} contains ":" or ";", which no published path may`
  };
  return {
    nfc: nfc
  };
}
function Gvn(e, {
  removal = !1
} = {}) {
  let r = Se(e, "files: published path");
  if ("errMsg" in r) return r;
  let {
    nfc: s
  } = r;
  if (s === "index.html") return {
    errMsg: 'files: "index.html" cannot be a published path \u2014 the `html` argument is always the index. Pass that file\'s content as `html` and remove the "index.html" mapping.'
  };
  if (s.startsWith("_")) return {
    errMsg: `files: published path ${kl(e)} starts with "_", which the artifact service reserves for its own names \u2014 rename the file or its top-level directory`
  };
  if (!removal && V9r(s)) return {
    errMsg: `files: published path ${kl(e)} is a name the artifact service answers with one of its own views, so the file could never be read back \u2014 rename it`
  };
  return {
    key: s
  };
}
function V9r(e) {
  return e.startsWith("_") || e === "index.html.json" || e === ".json";
}
function U8(e) {
  let n = Se(e, "path");
  if ("errMsg" in n) return n;
  let {
    nfc: r
  } = n;
  if (V9r(r)) return {
    errMsg: `path ${kl(e)} names one of the artifact service's own views, not a published file; list_files shows the readable paths`
  };
  return {
    key: r
  };
}
var api = 1048576,
  wt = /\.(?:png|jpe?g)$/i;
function lpi(e) {
  let n = Se(e, "thumbnail href");
  if ("errMsg" in n) return n;
  if (!wt.test(n.nfc)) return {
    errMsg: `thumbnail href ${JSON.stringify(e)} is not a .png, .jpg or .jpeg file \u2014 custom thumbnails are PNG or JPEG images`
  };
  return {
    rel: n.nfc
  };
}
function blt(e, n, r) {
  return e === n || e.startsWith(n + ne) || e === r || e.startsWith(r + ne);
}
function $Ie(e, n, r) {
  let s = Slt(Y(n));
  if (s === r) return e;
  if (e === s) return r;
  return e.startsWith(s + ne) ? r + e.slice(s.length) : e;
}
function Slt(e) {
  let n = e.replace(/[\\/]+$/, "");
  return n === "" ? e : n;
}
function wlt(e, n) {
  if (ie(e)) return null;
  if (e === "~" || e.startsWith(`~${ne}`) || e.startsWith("~/")) return null;
  if (ee(e)) {
    let s = Y(e);
    return ie(s) ? null : s;
  }
  let r = Y(e);
  if (r === ".." || r.startsWith(`..${ne}`)) return null;
  return ye(n, r);
}
function qXo(e) {
  return `files: ${JSON.stringify(e)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 list the link's target path instead`;
}
async function lre(e) {
  let n = Slt(e);
  for (let r = 0; r < 40; r++) {
    let s;
    try {
      s = await mt(n);
    } catch {
      return !1;
    }
    if (ca(s, Fe(n))) return !0;
    if (s.split(/[\\/]+/).includes("..")) return !0;
    if (n = Slt(ee(s) ? Y(s) : ye(Fe(n), s)), ie(n)) return !0;
  }
  return !0;
}
function At(e, n) {
  return n.some(item => blt(e, item.lex, item.real));
}
function Ae(e, n) {
  return n.some(item => e === item.real || e.startsWith(item.real + ne));
}
function Re(e) {
  return !e.isSymbolicLink() && e.isDirectory();
}
async function Rt(e) {
  if (e === void 0 || !ee(e)) return [];
  let n = Slt(Y(e)),
    r;
  try {
    r = await fe(n);
  } catch (error) {
    return K(error) ? [{
      kind: "scratchpad",
      lex: n,
      real: n
    }] : [];
  }
  if (!Re(r) || (await lre(n))) return [];
  let real = await me(n).catch(() => n),
    a = await fe(n).catch(() => {
      return;
    });
  return a !== void 0 && Re(a) && a.ino === r.ino && a.dev === r.dev ? [{
    kind: "scratchpad",
    lex: n,
    real: real
  }] : [];
}
async function YXo(e, n) {
  let r = [];
  for (let s of e ?? []) {
    if (!ee(s) || ie(s)) continue;
    let a = Slt(Y(s));
    if (a === n.lex || a === n.real) continue;
    try {
      let l = await fe(a);
      if (!Re(l) || (await lre(a))) continue;
      if (i.CLAUDE_CODE_EVAL_CONFINED && a === Ee()) {
        r.push({
          kind: "dir",
          lex: a,
          real: a
        });
        continue;
      }
      let real_2 = await me(a);
      if (ie(real_2)) continue;
      let h = await fe(a);
      if (Re(h) && h.ino === l.ino && h.dev === l.dev) r.push({
        kind: "dir",
        lex: a,
        real: real_2
      });
    } catch {}
  }
  return r;
}
function De(e) {
  let n = e.filter(item => item.kind !== "scratchpad"),
    r = n.map(item => _(item.lex)).join(", "),
    s = e.some(item => item.kind === "scratchpad") ? " or your scratchpad directory" : "";
  return n.length > 1 ? {
    where: `the session's working directories (${r})${s}`,
    under: "a path under one of them"
  } : {
    where: `the working directory (${r})${s}`,
    under: s === "" ? "a path under it" : "a path under one of them"
  };
}
function Le(e) {
  return e.kind === "scratchpad" ? "your scratchpad directory" : e.kind === "cwd" ? `the working directory (${_(e.lex)})` : `${_(e.lex)} (one of the session's working directories)`;
}
async function kt(e, n, r) {
  let s = await me(e),
    a = {
      kind: "cwd",
      lex: Slt(Y(e)),
      real: s
    },
    anchors = [a, ...(await YXo(r?.workingDirs, a)), ...(await Rt(r?.scratchpadDir))],
    {
      where: where,
      under: under
    } = De(anchors);
  if (n === void 0) return {
    anchors: anchors,
    realRoot: s,
    lexRoot: Y(e)
  };
  if (ie(n)) return {
    errMsg: `root: ${JSON.stringify(n)} is a network path \u2014 the publish base must lie within ${where}`
  };
  let b = Y(n);
  if (!ee(b) && (b === ".." || b.startsWith(`..${ne}`))) return {
    errMsg: `root: ${JSON.stringify(n)} escapes the working directory \u2014 ` + "a relative publish base must lie within it"
  };
  let T = ee(b) ? anchors.find(item => blt(b, item.lex, item.real)) : anchors[0];
  if (T === void 0) return {
    errMsg: `root: ${JSON.stringify(n)} is outside ${where} \u2014 pass ${under}`
  };
  let S = ee(b) ? b : ye(s, b),
    errMsg = r?.denyPath?.(S, !1, n);
  if (errMsg !== void 0) return {
    errMsg: errMsg
  };
  if (G0(S) || (await lre(S))) return {
    errMsg: `root: ${JSON.stringify(n)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 pass the target directory itself`
  };
  let realRoot;
  try {
    realRoot = await me(S);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (ie(realRoot)) return {
    errMsg: `root: ${JSON.stringify(n)} resolves to a network path \u2014 the publish base must lie within ${where}`
  };
  if (!Ae(realRoot, [T])) return {
    errMsg: Ae(realRoot, anchors) ? `root: ${_(n)} is a link from ${Le(T)} into ${Le(anchors.find(item => Ae(realRoot, [item])) ?? T)} \u2014 pass the directory it points to instead` : `root: ${JSON.stringify(n)} resolves outside ${where} \u2014 the publish base must lie within it`
  };
  let R;
  try {
    R = await yt(realRoot);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (!R.isDirectory()) return {
    errMsg: `root: ${JSON.stringify(n)} is not a directory`
  };
  let lexRoot = Slt(ee(b) ? b : ye(Y(e), b));
  return {
    anchors: anchors,
    realRoot: realRoot,
    lexRoot: lexRoot
  };
}
async function XXo(e, n, r, s) {
  let a = await kt(n, r, s);
  if ("errMsg" in a) return a;
  let {
      anchors: anchors_2,
      realRoot: realRoot_2,
      lexRoot: lexRoot_2
    } = a,
    {
      where: where_2,
      under: under_2
    } = De(anchors_2);
  if (s?.expectedRealRoot !== void 0 && s.expectedRealRoot !== realRoot_2) return {
    errMsg: "root: the publish base resolves to a different location than " + "was approved \u2014 it changed between approval and publishing; " + "retry the publish"
  };
  if (e.length === 0) return {
    errMsg: "files: the file map is empty \u2014 list at least one file"
  };
  if (e.length > dF) return {
    errMsg: `files: ${e.length} files + index.html exceeds the ${dF + 1} entries one publish may name; send at most ${dF} now and the rest in another publish to the same url`
  };
  let files = [],
    v = new Set(),
    B = 0;
  for (let R of e) {
    let V = Gvn(R.to);
    if ("errMsg" in V) return V;
    let x = V.key;
    if (v.has(x)) return {
      errMsg: `files: published path ${kl(x)} appears more than once`
    };
    v.add(x);
    let A = R.from;
    if (ie(A)) return {
      errMsg: `files: ${JSON.stringify(A)} is a network path \u2014 only files under ${where_2} can be published`
    };
    if (A === "~" || A.startsWith(`~${ne}`) || A.startsWith("~/")) return {
      errMsg: `files: ${JSON.stringify(A)} \u2014 "~" is not expanded here; pass a base-relative or absolute path`
    };
    let G = ee(A) ? void 0 : Y(A);
    if (G !== void 0 && (G === ".." || G.startsWith(`..${ne}`))) return {
      errMsg: `files: ${JSON.stringify(A)} escapes the publish base \u2014 ` + `only files under ${where_2} can be published`
    };
    let D = wlt(A, realRoot_2);
    if (D === null) return {
      errMsg: `files: ${JSON.stringify(A)} cannot be resolved`
    };
    if (ee(A) && !At(D, anchors_2)) return {
      errMsg: `files: ${JSON.stringify(A)} is outside ${where_2} \u2014 pass ${under_2}`
    };
    let errMsg_2 = s?.denyPath?.(D, !1, A);
    if (errMsg_2 !== void 0) return {
      errMsg: errMsg_2
    };
    if (lexRoot_2 !== realRoot_2) {
      let O = G ?? (D.startsWith(realRoot_2 + ne) ? bt(realRoot_2, D) : void 0);
      if (O !== void 0) {
        let errMsg_3 = s?.denyPath?.(ye(lexRoot_2, O), !0, A);
        if (errMsg_3 !== void 0) return {
          errMsg: errMsg_3
        };
      }
    }
    if (G0(D) || (await lre(D))) return {
      errMsg: qXo(A)
    };
    let W;
    try {
      W = await me(D);
    } catch (error) {
      return {
        errMsg: `files: ${JSON.stringify(A)} not found`,
        ...(K(error) && {
          missing: !0
        })
      };
    }
    if (ie(W)) return {
      errMsg: `files: ${JSON.stringify(A)} resolves to a network path \u2014 only files under ${where_2} can be published`
    };
    if (!Ae(W, anchors_2)) return {
      errMsg: `files: ${JSON.stringify(A)} resolves outside ${where_2} (symlink?) \u2014 only files under it can be published`
    };
    if (W !== D) {
      let errMsg_4 = s?.denyPath?.(W, !0, A);
      if (errMsg_4 !== void 0) return {
        errMsg: errMsg_4
      };
    }
    try {
      let O = await fe(W);
      if (O.isSymbolicLink()) return {
        errMsg: `files: ${JSON.stringify(A)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      if (!O.isFile()) return {
        errMsg: `files: ${JSON.stringify(A)} is not a regular file`
      };
    } catch (error) {
      return {
        errMsg: `files: ${JSON.stringify(A)} not found`,
        ...(K(error) && {
          missing: !0
        })
      };
    }
    let F;
    try {
      F = await gt(W, _t.O_RDONLY | 0);
    } catch (error) {
      if (error?.code === "ELOOP") return {
        errMsg: `files: ${JSON.stringify(A)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      return {
        errMsg: `files: ${JSON.stringify(A)} not found`,
        ...(K(error) && {
          missing: !0
        })
      };
    }
    let content, contentType;
    try {
      try {
        if ((await fe(W)).isSymbolicLink()) return {
          errMsg: `files: ${JSON.stringify(A)} changed to a symlink after it was checked \u2014 retry the publish`
        };
      } catch (error) {
        return {
          errMsg: `files: ${JSON.stringify(A)} not found`,
          ...(K(error) && {
            missing: !0
          })
        };
      }
      let O = await F.stat();
      if (!O.isFile()) return {
        errMsg: `files: ${JSON.stringify(A)} is not a regular file`
      };
      if ((i.CLAUDE_CODE_EVAL_CONFINED || s?.refuseHardLinks === !0) && O.nlink > 1) return {
        errMsg: `files: ${JSON.stringify(A)} has more than one hard link`
      };
      if (O.size > l_) return {
        errMsg: `files: ${JSON.stringify(A)} is ${Math.ceil(O.size / 1024 / 1024)}MB (per-file max ${l_ / 1024 / 1024}MB)`,
        tooLarge: !0
      };
      if (B += O.size, B > cre) return {
        errMsg: `files: total content exceeds ${cre / 1024 / 1024}MB at ${JSON.stringify(A)} \u2014 the most one publish sends; publish the files up to it now and the rest in another publish to the same url (a version may total ${a6t / 1024 / 1024}MB)`
      };
      if (contentType = R.contentType ?? z8(x), contentType === void 0) return {
        errMsg: wEn("files", x),
        notServedPath: x
      };
      try {
        let U = await JY(F, O.size);
        if (U === null) return {
          errMsg: `files: ${JSON.stringify(A)} changed while it was read \u2014 retry the publish`
        };
        content = U;
      } catch {
        return {
          errMsg: `files: ${JSON.stringify(A)} could not be read`
        };
      }
      files.push({
        path: x,
        content: content,
        contentType: contentType,
        ...(R.live !== void 0 && {
          live: R.live
        }),
        ...(R.reseed === !0 && {
          reseed: !0
        })
      });
    } finally {
      await F.close();
    }
  }
  return {
    files: files
  };
}
async function dpi(e, n, r, s) {
  let a = /\.png$/i.test(n) ? ".png" : ".jpg",
    l = await XXo([{
      to: `thumbnail${a}`,
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
var VYt = "passive";
function K9r(e) {
  return e;
}
function bAt(e, n) {
  let r = n.toLowerCase();
  return e.attrs?.find(s => s.name.toLowerCase() === r)?.value;
}
var Et = /^[a-z0-9][a-z0-9-]{0,63}$/;
function Tt(e, n) {
  let r = `id="${n}"`,
    s = [],
    a = e.indexOf(r);
  while (a !== -1) {
    let l = a + r.length,
      d = l + xXr(e, l);
    if (e.charCodeAt(d) === 62) s.push([a, d + 1]);
    a = e.indexOf(r, l);
  }
  return s;
}
async function Ue(e, n) {
  try {
    let {
      nestingBudgetExceeded: nestingBudgetExceeded
    } = await import("B:/~BUN/root/chunk-4netqz7r.js");
    if (nestingBudgetExceeded(e)) return null;
    return await vt(e, n);
  } catch {
    return null;
  }
}
async function vt(e, n) {
  let {
      parse: parse
    } = await import("B:/~BUN/root/chunk-4jqr7wq7.js"),
    node = K9r(parse(e, {
      sourceCodeLocationInfo: !0
    })),
    a = [],
    l = [{
      node: node,
      inTemplate: !1
    }];
  for (;;) {
    let d = l.pop();
    if (d === void 0) break;
    let {
      node: node_2,
      inTemplate: inTemplate
    } = d;
    if (node_2.tagName !== void 0) {
      if (bAt(node_2, "id") === n) a.push({
        node: node_2,
        inTemplate: inTemplate
      });
    }
    for (let node_3 of node_2.childNodes ?? []) l.push({
      node: node_3,
      inTemplate: inTemplate
    });
    for (let node_4 of node_2.content?.childNodes ?? []) l.push({
      node: node_4,
      inTemplate: !0
    });
  }
  return a;
}
async function QY(e, n) {
  if (!Et.test(n)) return {
    ambiguous: !0
  };
  let r = Tt(e, n);
  if (r.length === 0) {
    let S = await Ue(e, n);
    if (S === null) return {
      ambiguous: !0
    };
    return S.length === 0 ? null : {
      ambiguous: !0
    };
  }
  if (r.length !== 1) return {
    ambiguous: !0
  };
  let [s, a] = r[0],
    l = await Ue(e, n);
  if (l === null || l.length !== 1 || l[0].inTemplate) return {
    ambiguous: !0
  };
  let node_5 = l[0].node,
    h = (bAt(node_5, "type") ?? "").trim().toLowerCase(),
    b = node_5.sourceCodeLocation?.startTag,
    T = node_5.sourceCodeLocation?.endTag;
  if ((node_5.tagName ?? "").toLowerCase() !== "script" || h !== "application/json" || b === void 0 || b === null || T === void 0 || T === null) return {
    ambiguous: !0
  };
  if (s < b.startOffset || a !== b.endOffset) return {
    ambiguous: !0
  };
  return {
    json: e.slice(b.endOffset, T.startOffset)
  };
}
var St = 600000,
  He = /^(\d{1,15})-/;
function ke(e) {
  let n = e === void 0 ? void 0 : He.exec(e)?.[1];
  return n !== void 0 && Number(n) * 1000 <= Date.now() + St ? e : void 0;
}
function JXo(e, ver) {
  let {
    live: live
  } = te();
  if (ke(ver) === void 0) {
    if (!live.heardAheadOfClockReported && He.test(ver)) live.heardAheadOfClockReported = !0, c("artifact_live_subscribe", "heard_version_skipped_ahead_of_clock");
    return;
  }
  let s = live.heardVersions.get(e),
    a = s === void 0 ? 1 : T1(ver, s.ver);
  if (a !== null && a > 0) live.heardVersions.set(e, {
    ver: ver,
    toldTo: new Set()
  });
}
function Vvn(e, n) {
  let {
      supervisors: supervisors,
      heardVersions: heardVersions
    } = te().live,
    a = supervisors.get(e);
  if (a === void 0 || n === void 0) return {
    behind: !1
  };
  let liveVer = xt(ke(heardVersions.get(e)?.ver), ke(a.carriedVer));
  if (liveVer === void 0 || Plt(a.ownPublishes, e) || nEn(a.ownPublishes, e, liveVer)) return {
    behind: !1
  };
  let d = T1(liveVer, n);
  return d !== null && d > 0 ? {
    behind: !0,
    liveVer: liveVer
  } : {
    behind: !1
  };
}
function cpi(e, n, r) {
  let s = Vvn(e, n);
  if (!s.behind) return;
  let a = te().live.heardVersions.get(e);
  return a?.ver === s.liveVer && a.toldTo.has(r ?? "main") ? void 0 : {
    liveVer: s.liveVer
  };
}
function upi(e, ver_2, r) {
  if (ke(ver_2) === void 0) return;
  let heardVersions_2 = te().live.heardVersions,
    a = heardVersions_2.get(e),
    l = r ?? "main";
  if (a?.ver === ver_2) {
    a.toldTo.add(l);
    return;
  }
  let d = a === void 0 ? -1 : T1(a.ver, ver_2);
  if (d !== null && d < 0) heardVersions_2.set(e, {
    ver: ver_2,
    toldTo: new Set([l])
  });
}
function fir(e, n) {
  let heardVersions_3 = te().live.heardVersions;
  if (n === void 0 || heardVersions_3.get(e)?.ver === n) heardVersions_3.delete(e);
}
function xt(e, n) {
  if (e === void 0 || n === void 0) return e ?? n;
  let r = T1(e, n);
  return r !== null && r < 0 ? n : e;
}
var fpi = ["org_pinned_instance", "pipeline_instance", "template_instance"],
  We = {
    first_party_type: 0,
    org_pinned_instance: 1,
    pipeline_instance: 2,
    template_instance: 3
  };
function Kvn(e, kind, issuedAt) {
  if ($I(issuedAt)) return;
  let {
      attestedTypeArtifacts: attestedTypeArtifacts
    } = te(),
    a = attestedTypeArtifacts.get(e) ?? {},
    l = a.revokedAt?.[kind];
  if (l !== void 0 && issuedAt <= l) return;
  let mark = a.mark;
  if (mark === void 0 || issuedAt > mark.issuedAt || issuedAt === mark.issuedAt && We[kind] < We[mark.kind]) attestedTypeArtifacts.set(e, {
    ...a,
    mark: {
      kind: kind,
      issuedAt: issuedAt
    }
  });
}
function q9r(e, n, r) {
  if ($I(r)) return;
  let {
      attestedTypeArtifacts: attestedTypeArtifacts_2
    } = te(),
    a = attestedTypeArtifacts_2.get(e) ?? {},
    revokedAt = {
      ...a.revokedAt
    };
  for (let b of n) revokedAt[b] = Math.max(revokedAt[b] ?? r, r);
  let mark_2 = a.mark,
    mark_3 = mark_2 !== void 0 && !(n.includes(mark_2.kind) && mark_2.issuedAt <= r) ? mark_2 : void 0;
  attestedTypeArtifacts_2.set(e, {
    ...(mark_3 && {
      mark: mark_3
    }),
    revokedAt: revokedAt
  });
}
var Ot = p(() => u({
  firstPartyType: I().optional(),
  typeFirstParty: I().optional(),
  template: I().optional()
}));
function je(e, n, r, s, a) {
  if (n === void 0) return;
  let l = Ot().safeParse(n);
  if (!l.success) return;
  let d = l.data,
    external = a.external;
  if (d.firstPartyType === !0) {
    if (!external) Kvn(e, "first_party_type", s);
    return;
  }
  if (d.typeFirstParty !== !0) return;
  if (r !== void 0 && hr.test(r)) Kvn(r, "first_party_type", s);
  if (external) return;
  if (d.template === !0) Kvn(e, "template_instance", s);else q9r(e, ["template_instance"], s);
}
function bv(e) {
  return te().attestedTypeArtifacts.get(e)?.mark?.kind;
}
function ppi(e) {
  return bv(e) !== void 0;
}
function QXo(e) {
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
function SAt(e) {
  let n = bv(e);
  return n === void 0 ? "" : ` [attested: ${QXo(n)}]`;
}
var Ct = 600000;
function Ge(e, setting) {
  let r = te();
  if (setting === void 0) {
    if (r.sandboxEgress.delete(e)) t(`[artifact] sandbox egress setting for ${e} withdrawn`);
    return;
  }
  r.sandboxEgress.set(e, {
    setting: setting,
    at: Date.now()
  }), t(`[artifact] sandbox egress setting for ${e}: ${setting}`);
}
function mpi(e = ss()) {
  if (!EC()) return i.CLAUDE_CODE_REMOTE === !0 && !R_() ? void 0 : !1;
  let n = te().sandboxEgress.get(e);
  if (n === void 0 || Date.now() - n.at >= Ct) return;
  return n.setting === "disabled";
}
var hpi = "what the artifact is for and the key decisions; the repo, branch, and commit it was built from; data sources used (MCP servers, load-bearing files); whether embedded data is a snapshot and as of when; known limitations and suggested next steps";
var $t = 16384;
var sr = `
[prompt truncated: exceeded ${$t / 1024}KB]`;
var Pt = /^[\w.:@+-]{1,56}(?:\[[A-Za-z0-9]{1,6}\])?$/,
  Bt = p(() => {
    let e = o().refine(r => r.trim() !== "").optional().catch(void 0),
      n = o().trim().regex(Pt).optional().catch(void 0);
    return u({
      prompt: e,
      context: e,
      model: n,
      client_version: n
    });
  });
function Je(e) {
  let n = Bt().safeParse(e);
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
var It = 2000,
  Ft = 6000;
function Lt(e) {
  return {
    prompt: Math.min(It, Math.floor(e / 16)),
    context: Math.min(Ft, Math.floor(3 * e / 16))
  };
}
function ze(e, n, r) {
  let s = e.trim(),
    a = Array.from(s);
  return a.length <= n ? s : `${a.slice(0, n).join("")}
[${r} truncated after ${n} characters]`;
}
function ZXo(e, n) {
  return "";
}
var Dt = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u2028\u2029]+/g;
function eJo(e) {
  return Jd(LU(Rnt, e.replace(Dt, " ")));
}
var tJo = 4194304,
  Ye = 3149824;
function Xe(e) {
  let n = e.length;
  while (n > 0 && ` 	\r
`.includes(e[n - 1])) n--;
  let r = e.slice(0, n);
  if (!r.endsWith("</script>")) return e;
  let s = r.slice(0, r.length - 9),
    a = s.lastIndexOf('<script type="application/json" id="__frame_comments__">');
  if (a === -1) return e;
  let l = s.slice(a + 56);
  if (l.includes("<")) return e;
  let d;
  try {
    d = JSON.parse(l);
  } catch {
    return e;
  }
  if (typeof d !== "object" || d === null || Array.isArray(d)) return e;
  let h = d;
  if (typeof h.mac !== "string" || h.mac.length === 0) return e;
  if (!Object.hasOwn(d, "payload")) return e;
  let b = s.slice(0, a);
  if (b.endsWith(`
`)) b = b.slice(0, -1);
  return b;
}
function pir(e) {
  return mir(e) || e.outsideOrg === !0;
}
function _ge(e) {
  return pir(e) || e.outsidersMayHaveWritten === !0;
}
function klt(e) {
  return e.outsidersMayHaveWritten === !0 && !pir(e);
}
function qvn(e) {
  return mir(e) || e.outsideWriter === !0;
}
function mir(e) {
  return e.authoredByOthers === !0 || e.role !== "owner" || e.publicRead || e.cowritten || e.typeLocked;
}
function Y9r(e) {
  if (!Array.isArray(e)) return;
  let manifest = {};
  for (let s of e) {
    if (typeof s !== "object" || s === null || typeof s.path !== "string") return;
    manifest[s.path] = s;
  }
  let r = s6t({
    manifest: manifest
  });
  return r !== void 0 && r.type.length > 0 ? r : void 0;
}
var Ut = /^[a-z][a-z0-9_-]{0,63}$/,
  qe = ["users", "org", "public"];
function Ht(e) {
  let n = e?.documents;
  return typeof n === "number" && Number.isSafeInteger(n) && n >= 0 ? n : void 0;
}
var R1e = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/,
  regExp = new RegExp(R1e, "g");
function Yvn(e) {
  return e.replace(regExp, "");
}
function rt(e, n, r, workshopPage, a) {
  let ownVersion = WIe(n, r, e.ver),
    ownBytesPage = !e.typeLocked && !e.publicRead && !workshopPage && !a,
    plainOwner = ownBytesPage && !_ge(e);
  return {
    workshopPage: workshopPage,
    ownVersion: ownVersion,
    ownBytesPage: ownBytesPage,
    plainOwner: plainOwner,
    vouchedOwn: plainOwner && ownVersion
  };
}
async function nJo(e, n, r, s = {}) {
  return rt(e, n, r, (await QY(e.html, "ws-decisions")) !== null, s.savedInPage === !0);
}
async function rJo(e, n, r) {
  return rt(e, n, r, !1, !1).vouchedOwn && (await QY(e.html, "ws-decisions")) === null;
}
function hir(e) {
  if (e.publicRead || e.offOrgRamp === !0 || e.external === !0 || e.role === "owner") return null;
  if (e.role === "writer" && e.sameChannel === !0 && SJo()) return "channel";
  return wJo() ? "shared" : null;
}
function Xvn(e) {
  let otherWriters = e.role !== "owner" || e.cowritten || e.typeLocked === !0 || e.outsideOrg === !0,
    body = HB(e.html, "page"),
    head = a => Jvn(body, a, "page");
  if (otherWriters || !e.vouchedOwn) {
    let [a, l] = otherWriters && e.sameChannel === !0 ? [ura, fra] : e.typeLocked ? [pra, mra] : e.role === "owner" && e.outsideOrg === !0 ? [dra, cra] : otherWriters ? [ara, lra] : [hra, gra];
    return {
      enveloped: !0,
      otherWriters: otherWriters,
      lead: `${a}
<${Kqe}>
`,
      body: body,
      tail: `
</${Kqe}>

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
function gir(e) {
  return VSr(e, Cae);
}
function HB(e, n = "all") {
  return gir(Jd(e, n));
}
function Jvn(e, n, r = "all") {
  if (n <= 0) return "";
  for (let s = n;; s--) {
    let a = gir(mLs(e, s, r));
    if (a.length <= n) return a;
  }
}
function yir(e) {
  if (!wve()) return;
  if (e.syncClient === !0) return typeof e.syncToken === "string" && e.syncToken !== "" ? {
    transport: "sync",
    token: e.syncToken
  } : void 0;
  return e.subscriptionToken ? {
    transport: "live",
    token: e.subscriptionToken
  } : void 0;
}
function qC(e, n = {}) {
  let parsed = fn(e);
  if (parsed === null) return {
    ok: !1,
    message: n.notUrlMessage ?? G9r(e, {
      field: n.field
    }),
    errorCode: 4
  };
  let s = ss();
  if (parsed.env !== s) {
    let a = n.envHint ? ` \u2014 ${n.envHint(s)}` : "";
    return {
      ok: !1,
      message: `that artifact URL is for ${parsed.env}, but this session targets ${s} claude.ai${a}`,
      errorCode: 5
    };
  }
  return {
    ok: !0,
    parsed: parsed
  };
}
var ot = 60000;
function bge(e) {
  return e.gone === !0;
}
function vlt(e) {
  return e.neverPublished === !0;
}
function ZY(e) {
  return e.otherOrg === !0;
}
function Vt(e) {
  return typeof e === "object" && e !== null && vge(e)?.reason === "org_mismatch" && "owner_org" in e && typeof e.owner_org === "string" && Nt(e.owner_org) !== null;
}
var G3e = "this Artifact is in another of the user's organizations, not the one this session is signed in to",
  V3e = "the user runs /login and signs in to that organization",
  err_2 = "this is a public artifact from outside the user's organization: it can be read, but not watched";
var err = `${G3e} \u2014 it opens here only after ${V3e}`,
  st = "If it was shared with you by email, accept the invitation in a browser first, and check that Claude Code is signed in to the invited account",
  Oe = "If this was shared with you from another organization, open it in Claude Code on your computer or in a Claude Code on the web session",
  Gt = new Set([errorCode, "boot_403_agent_not_added", "boot_403_agent_owned", "boot_403_request_access"]),
  oJo = "Do not retry this read; tell the user now that the artifact could not be read, then go on without it.";
function sJo(e) {
  return bge(e) || e.errorCode !== void 0 && Gt.has(e.errorCode);
}
function iJo(e) {
  return e.replace(`. ${st}`, "").replace(`. ${Oe}`, "");
}
var zt = p(() => u({
    request_access: I(),
    reason: o().optional()
  })),
  timeout = 15000;
async function Qvn({
  slug: slug_3,
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
  readBack = !1,
  lean: lean,
  pastVer: pastVer,
  credentials: credentials,
  audienceOutside: audienceOutside
}) {
  let A = ss();
  if (env_2 !== A) return {
    err: `that artifact URL is for ${env_2} claude.ai, but this session targets ${A}`,
    errorCode: "env_mismatch"
  };
  let G = "via=model_read" + (kind_2 === "probe" ? "&bk=probe" : "") + (kind_2 === "probe" && lean !== void 0 ? `&lean=${encodeURIComponent(lean)}` : "") + (agentPeer ? "&peer=agent" : "") + (actorId ? "&actor=id" : "") + (syncLive ? "&live=sync" : "") + (watchBoot || agentPeer || syncLive ? `&vn=${VYt}` : "") + (readBack ? "&readback=1" : "") + (audienceOutside ? "&audience=outside" : "") + (pastVer !== void 0 ? `&ver=${encodeURIComponent(pastVer)}` : ""),
    D = sk === void 0 ? "" : `&sk=${encodeURIComponent(sk)}`,
    E = vanity === void 0 ? "" : `&vanity=${encodeURIComponent(vanity)}`,
    W = `/api/frame/${slug_3}?${G}${D}${E}`,
    F = {
      refreshOAuth: !0,
      credentials: credentials,
      headers: xu(),
      timeout: timeout,
      signal: signal
    },
    k,
    L = Date.now(),
    O = performance.now();
  try {
    k = relayOnly || eU() ? await Au.getRelayOnly(W, F) : await Au.get(W, F);
  } catch (error) {
    if (nl(error)) throw error;
    return {
      err: "artifact read failed (network error)",
      errorCode: "boot_request_error",
      ...(Q1(error) && {
        transient: !0
      }),
      request: {
        ...t3(error, O),
        wall_elapsed_ms: Date.now() - L,
        ...(ZP(error) && {
          relay: !0
        })
      }
    };
  }
  if (Ge(env_2, ows(k)), !k.ok) {
    if (k.reason === "relay-unavailable") return {
      err: `artifact read failed (relay unavailable${k.status ? `, HTTP ${k.status}` : ""})`,
      ...(k.status !== 0 && {
        status: k.status
      }),
      errorCode: "boot_relay_error"
    };
    if (k.reason === "relay-not-served") return {
      err: "artifact read failed (the session gateway does not serve this session)",
      errorCode: "boot_relay_not_served"
    };
    return {
      err: k.reason === "no-auth" ? Tb(k.detail) : `artifact read unavailable: ${k.reason}`,
      errorCode: k.reason.replace(/-/g, "_")
    };
  }
  if (!k.fromFrame) return {
    err: `artifact read failed (relay HTTP ${k.status})`,
    status: k.status,
    errorCode: "boot_relay_error"
  };
  let U = v5() ? "Slack" : nwt() ? "Teams" : void 0,
    ae = `${U ?? "chat"} channel`,
    le = `add this ${ae} (under "Add people, groups, or Claude Tags", paste the channel ID)`,
    pe = `sharing with a person or service account does not reach a ${ae}'s Claude \u2014 ask the owner to open Share and ${le}, or widen General access to the organization`,
    _e = `${pe}.`;
  if (k.status === 404) {
    let N = sws(k.data),
      q = tn() && k.route === "direct";
    return {
      err: N ? "this artifact exists but nothing has been published to it yet, so there is nothing to read" : `artifact not found \u2014 it may have been deleted, or it has not been shared with you${U === void 0 ? q ? `. ${Oe}` : `. ${st}` : `. If it is restricted to specific people, ${pe}${q ? `. ${Oe}` : ""}`}`,
      status: 404,
      ...(oee(k.data) && {
        gone: !0
      }),
      ...(N && {
        neverPublished: !0
      }),
      errorCode: "boot_404"
    };
  }
  if (k.status === 403 && Vt(k.data)) return {
    err: err,
    status: 403,
    otherOrg: !0,
    errorCode: errorCode
  };
  if (k.status === 403) {
    let N = zt().safeParse(k.data);
    if (N.success && N.data.reason === "agent_not_added") return {
      err: `this artifact is restricted to specific people, and this ${ae}'s Claude is not one of them: ${_e}`,
      status: 403,
      errorCode: "boot_403_agent_not_added"
    };
    if (N.success && N.data.reason === "agent_owned") return {
      err: U === void 0 ? "this artifact belongs to a chat channel's Claude and has not been shared with you \u2014 ask someone in the channel it was published from to open Share on it and add you." : `this artifact belongs to another ${ae}'s Claude and has not been shared with this one \u2014 ask someone in the channel it was published from to open Share on it and ${le}.`,
      status: 403,
      errorCode: "boot_403_agent_owned"
    };
    if (N.success && N.data.request_access) return {
      err: "you do not have access to this artifact. Open the link in a browser to request access from the owner.",
      status: 403,
      errorCode: "boot_403_request_access"
    };
  }
  if (k.status === 400 && pastVer !== void 0) return {
    err: "the server refused that version id (HTTP 400). Most likely it is not among the ones kept for this artifact: list its versions for the ids that are.",
    status: 400,
    errorCode: "boot_unknown_ver"
  };
  if (k.status < 200 || k.status >= 300) return {
    err: `artifact read failed (HTTP ${k.status})`,
    status: k.status,
    errorCode: "boot_failed"
  };
  let data = k.data ?? {},
    {
      ver: ver_3,
      assetToken: assetToken
    } = data,
    re = data.mode === "public" || data.kind === "public";
  if (!ver_3 || !assetToken && !re) return {
    err: "artifact read failed: incomplete boot response",
    errorCode: "boot_incomplete"
  };
  if (!cX.test(ver_3)) return {
    err: "artifact read failed: malformed boot response",
    errorCode: "boot_bad_ver"
  };
  if (pastVer !== void 0) {
    if (Pen(slug_3, data.cowritten), Omo(slug_3, data.authoredByOthers), Imo(slug_3, data.outsidersMayHaveWritten), Ien(slug_3, data[Nmt]), data.outsideWriter === !0) MLt(slug_3, !0);
    if (ver_3 !== pastVer) return {
      err: "artifact read failed: the server served a different version from the one asked for, so nothing was read. It does that for an account that cannot edit the artifact; for one that can, the server ignored the version asked for.",
      errorCode: "boot_past_ver_ignored"
    };
    return {
      err: null,
      data: data,
      ver: ver_3,
      assetToken: assetToken || void 0,
      route: k.route
    };
  }
  bNn(slug_3, data.artifactKind), Den(slug_3, iXr(data), L), Pen(slug_3, data.cowritten), Omo(slug_3, data.authoredByOthers), Imo(slug_3, data.outsidersMayHaveWritten), Ien(slug_3, data[Nmt]), MLt(slug_3, data.outsideWriter);
  let oe = data.lean === !0,
    external_2 = data.mode === "external";
  if (!oe) Kws(slug_3, external_2);
  if (wA()) Vws(slug_3, !assetToken);
  Men(slug_3, data.type), zws(slug_3, ver_3);
  let {
      probeBoots: probeBoots
    } = te().shareStatus,
    be = probeBoots.get(slug_3);
  if (be !== void 0 && be.boot.ver !== ver_3) probeBoots.delete(slug_3);
  if (!oe && !re && (!external_2 || data.perm?.role === "writer")) je(slug_3, data.typeFacts, Fq(Mt(slug_3)), L, {
    external: external_2
  });
  return {
    err: null,
    data: data,
    ver: ver_3,
    assetToken: assetToken || void 0,
    route: k.route
  };
}
async function mI(e, n, r, {
  kind: kind_3 = "probe",
  gatePublicRead = !0,
  relayOnly: relayOnly_2 = !1,
  agentPeer: agentPeer_2 = !1,
  actorId: actorId_2 = !1,
  syncLive: syncLive_2 = !1,
  watchBoot: watchBoot_2 = !1,
  lean: lean_2,
  speculative = !1,
  readBack: readBack_2 = !1,
  pastVer: pastVer_2,
  credentials: credentials_2,
  probeToolUseId: probeToolUseId
}) {
  let A = speculative ? c : m,
    G;
  if (probeToolUseId !== void 0 && !agentPeer_2 && !actorId_2 && !syncLive_2 && !watchBoot_2 && lean_2 === void 0 && pastVer_2 === void 0 && !speculative) {
    let {
        probeBoots: probeBoots_2
      } = te().shareStatus,
      k = Date.now();
    for (let [O, U] of probeBoots_2) if (k - U.issuedAt > ot) probeBoots_2.delete(O);
    let L = probeBoots_2.get(e.slug);
    if (L !== void 0 && L.toolUseId === probeToolUseId && (kind_3 === "probe" || L.boot.data.typeInstance === !1) && !(relayOnly_2 && tn() && L.boot.route !== "relay") && !Vvn(e.slug, L.boot.ver).behind) G = {
      ...L.boot,
      reused: !0
    }, t(`[artifact] ${n}: ${kind_3}-kind boot served from this tool use's share probe (probe issued ${k - L.issuedAt}ms ago) slug=${e.slug}`);
  }
  let D = {
      kind: kind_3,
      relayOnly: relayOnly_2,
      agentPeer: agentPeer_2,
      actorId: actorId_2,
      syncLive: syncLive_2,
      watchBoot: watchBoot_2,
      readBack: readBack_2,
      pastVer: pastVer_2,
      credentials: credentials_2
    },
    E = G ?? (await Qvn(e, r, {
      ...D,
      lean: lean_2?.version
    }));
  if (lean_2 !== void 0 && (E.err === null ? E.data.lean === !0 && !lean_2.mustCarry(E.data) : E.errorCode === "boot_incomplete")) c(n, "lean_boot_incomplete"), t(`[artifact] ${n}: the answer to a lean boot request was incomplete; booting in full slug=${e.slug}`), E = await Qvn(e, r, D);
  if (E.err !== null) {
    let F = E.errorCode === "boot_request_error" || E.errorCode === "boot_failed" ? {
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
    if (F !== void 0) A(n, E.errorCode, F);else A(n, E.errorCode);
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
  let W = E;
  if (gatePublicRead && W.assetToken === void 0 && !wA()) return A(n, "public_read_disabled"), {
    err: "artifact read failed: this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet",
    errorCode: "public_read_disabled"
  };
  return W;
}
async function aJo(slug_4, n, credentials_3, {
  syncLive: s = !1,
  lean: a
} = {}) {
  let env_3 = ss(),
    d = await mI({
      slug: slug_4,
      env: env_3
    }, "artifact_live_subscribe", n, {
      agentPeer: s,
      syncLive: s,
      watchBoot: !0,
      ...(a !== void 0 && {
        lean: {
          version: a,
          mustCarry: S => "subscriptionToken" in S && "syncToken" in S && "syncClient" in S && "subscriptionTokenExp" in S && "watchTokenRenewEnabled" in S && "perm" in S
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
    ...(B8(d.status) && {
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
  let h = yir(d.data),
    b = d.data.syncClient === !0,
    outsideWriter = OLe(d.data.outsideWriter);
  return {
    err: null,
    token: h?.token,
    transport: h?.transport ?? (b ? "sync" : "live"),
    ver: d.ver,
    editor: Jt(d),
    tokenExp: b ? void 0 : it(d.data.subscriptionTokenExp),
    renewable: h?.transport === "live" && d.data.watchTokenRenewEnabled === !0,
    ...(typeof d.data.title === "string" && {
      title: d.data.title
    }),
    ...(d.data.perm?.role === "owner" && {
      owner: !0
    }),
    ...(outsideWriter !== void 0 && {
      outsideWriter: outsideWriter
    })
  };
}
function it(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : void 0;
}
function B8(e) {
  return e !== void 0 && (e >= 500 || e === 429 || e === 408);
}
async function lJo(e, signal_2, credentials_4) {
  let s;
  try {
    s = await Au.post(`/api/frame/watch-token/${e}?vn=${VYt}`, {}, {
      refreshOAuth: !0,
      credentials: credentials_4,
      headers: xu(),
      timeout: timeout,
      signal: signal_2
    });
  } catch (error) {
    if (nl(error)) throw error;
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
  let a = s.data ?? {},
    l = yir(a),
    token = l?.transport === "live" ? l.token : void 0;
  if (!a.ver || !cX.test(a.ver) || token === void 0) return {
    err: "renew_miss",
    status: s.status
  };
  return {
    err: null,
    token: token,
    transport: "live",
    ver: a.ver,
    editor: void 0,
    tokenExp: it(a.subscriptionTokenExp),
    renewable: !0
  };
}
function Jt(e) {
  return e.assetToken !== void 0 && TQ(e.data.perm?.role);
}
function TQ(e) {
  return e === "owner" || e === "writer";
}
function at(e, n) {
  return n && e === "owner" ? void 0 : e;
}
function X9r(e) {
  return e === "reader" || e === "viewer" || e === "commenter";
}
async function Elt(e, n, credentials_5, s) {
  let boot = await Qvn(e, n, {
    readBack: s?.readBack === !0,
    credentials: credentials_5,
    audienceOutside: !0
  });
  if (boot.err !== null) return {
    err: boot.err,
    errorCode: boot.errorCode,
    ...(boot.gone && {
      gone: !0
    })
  };
  let outsideOrgReader = boot.assetToken === void 0,
    d = boot.data.perm?.role,
    outsideWriter_2 = OLe(boot.data.outsideWriter),
    outsideAudience = typeof boot.data.outsideAudience === "boolean" ? boot.data.outsideAudience : void 0,
    readBack_3 = $e(boot.data);
  return {
    err: null,
    mode: outsideOrgReader ? "public" : boot.data.perm?.mode ?? boot.data.mode,
    shared: boot.data.shared,
    role: at(d, outsideOrgReader),
    outsideOrgReader: outsideOrgReader,
    cowritten: boot.data.cowritten === !0,
    ...(outsideWriter_2 !== void 0 && {
      outsideWriter: outsideWriter_2
    }),
    ...(outsideAudience !== void 0 && {
      outsideAudience: outsideAudience
    }),
    ...(typeof boot.data.title === "string" && {
      title: boot.data.title
    }),
    ...(readBack_3 !== void 0 && {
      readBack: readBack_3
    }),
    boot: boot
  };
}
function $e(e) {
  if (e.readback === void 0 || typeof e.typeInstance !== "boolean") return;
  let n = dXr(e.readback);
  if (n === void 0) return;
  let r = e.typeInstance || TAt(e.type) !== void 0,
    typeLock = n.typeLock;
  if (r && typeLock === void 0) return;
  if (typeLock?.latest !== void 0 && typeLock.latest !== typeLock.current) return;
  return n;
}
function wAt(e, n) {
  if (n === void 0) return;
  let r = te().shareStatus.probeBoots.get(e);
  return r !== void 0 && r.toolUseId === n && Date.now() - r.issuedAt <= ot && !Vvn(e, r.boot.ver).behind ? $e(r.boot.data) : void 0;
}
var Ce = l_ + J3e + Ye + 65536,
  bve = tU + J3e + 1,
  Ze = {
    relayed: !1,
    why: "the session gateway declined an artifact read a few minutes ago, so this read did not retry it",
    code: "declined"
  },
  Yt = 5000,
  Xt = 1000;
function K3e() {
  return {
    remaining: 1
  };
}
function qYt(e) {
  return `the session gateway could not serve this read just now (HTTP ${e}, after one retry); this is transient \u2014 retry shortly`;
}
async function YYt(e, n, r) {
  let s = () => jt.get(d6i(e, n), {
      host: "ccr-gateway",
      auth: "session-jwt",
      headers: c6i(r.token),
      timeout: r.timeout,
      responseType: "arraybuffer",
      maxRedirects: 0,
      maxContentLength: r.maxContentLength,
      validateStatus: () => !0,
      signal: r.signal
    }),
    a = await s();
  if (!a.ok || !B8(a.status) || r.retryBudget.remaining < 1) return a;
  r.retryBudget.remaining--;
  let l = a.response.headers?.["retry-after"],
    d = Math.min(y_(typeof l === "string" ? l : void 0) ?? Xt, Yt);
  return t(`[artifact] mount answered HTTP ${a.status}; retrying once in ${d}ms slug=${e}`), await J(d, r.signal, {
    abortError: () => new Ke()
  }), s();
}
function XYt(e) {
  return e.contentVia === "frame" && !i.CLAUDE_CODE_REMOTE;
}
var qt = "x-frame-content-route",
  Zt = 3,
  en = 1e4;
async function JYt(e, n, r) {
  let s = `/api/frame/content/${encodeURIComponent(e)}${n}`,
    a = Date.now() + r.timeout,
    l = !1,
    d = 0;
  for (;;) {
    let h;
    try {
      h = await Au.get(s, {
        headers: {
          ...xu(),
          "x-frame-asset-token": r.token
        },
        credentials: r.credentials,
        recoverOAuth401: !0,
        responseType: "arraybuffer",
        timeout: Math.max(a - Date.now(), 1),
        maxContentLength: r.maxContentLength,
        signal: r.signal
      });
    } catch (error) {
      if (nl(error) || error instanceof Ke || l || !Q1(error) || Date.now() >= a) throw error;
      l = !0;
      continue;
    }
    if (!h.ok) return {
      kind: "declined"
    };
    let headers = h.response.headers;
    if ((h.status === 429 || h.status === 503) && d < Zt) {
      let T = headers?.["retry-after"],
        S = Math.min(y_(typeof T === "string" ? T : void 0) ?? 500 * 2 ** d, en);
      if (Date.now() + S + 1000 < a) {
        d++, await J(S, r.signal, {
          abortError: () => new Ke()
        });
        continue;
      }
    }
    if (headers?.[qt] !== "served") return {
      kind: "declined"
    };
    return {
      kind: "answer",
      status: h.status,
      headers: headers,
      data: h.data
    };
  }
}
function q3e(e) {
  let n = e;
  return n?.["x-frame-asset-content-type"] ?? n?.["content-type"];
}
async function nn(e, n) {
  let retryBudget = K3e(),
    s = d => YYt(e.slug, d, {
      token: e.token,
      timeout: 30000,
      maxContentLength: e.fileRead ? bve : Ce,
      signal: e.signal,
      retryBudget: retryBudget
    });
  if (e.source !== void 0 && !e.source.fellBack) {
    let d;
    try {
      d = await s(e.source.path);
    } catch (error) {
      if (nl(error) || error instanceof Ke) throw error;
    }
    if (d?.ok && d.status === 200) return yue(tM), {
      relayed: !0,
      result: n(Buffer.from(d.data ?? new ArrayBuffer(0)), q3e(d.response.headers), !0)
    };
    e.source.fellBack = d?.ok ? d.status : 0, t(`[artifact] stored-source read via the gateway fell back (${e.source.fellBack}) slug=${e.slug}`);
  }
  let a = (why, code, status) => {
      if (status === 404 && !e.fileRead && !jvr(tM) && (sse() || !ZJe(tM))) ise(tM);
      return {
        relayed: !1,
        why: why,
        code: code,
        ...(status !== void 0 && {
          status: status
        })
      };
    },
    l;
  try {
    l = await s(e.servedPath);
  } catch (error) {
    if (nl(error) || error instanceof Ke) throw error;
    return CLe(), a("the gateway request failed in transport", "request_error");
  }
  if (!l.ok) return l.reason === "no-auth" ? a(Dmt(), "no_auth") : a(`the gateway request was skipped (${l.reason})`, "client_policy");
  if (Emt(l.status)) return a("artifact reads through the session gateway are not enabled for this session", "not_served", l.status);
  if (l.status === 404 && e.fileRead) return m(e.feature, "asset_file_not_found", {
    relay: !0
  }), {
    relayed: !0,
    result: {
      err: "no file is published at that path in the served version \u2014 or artifact reads through the session gateway are not enabled for this session",
      status: 404,
      ...(jvr(tM) && Ren(l.response.headers, nfe(l.response.headers, l.data, h => Clt(h, e.token))) && {
        missingFile: !0
      })
    }
  };
  if (l.status === 404) return a("artifact reads through the session gateway are not enabled for this session, or the artifact service no longer serves this version", "not_served", 404);
  if (vmt(l.status, l.data)) return a(kmt, "network_off", 403);
  if (B8(l.status)) return a(`temporarily unable: HTTP ${l.status} after one retry, so a later read may succeed`, "unavailable", l.status);
  if (l.status < 200 || l.status >= 300) return CLe(l.status), a(`the gateway refused the relay with HTTP ${l.status}`, "http", l.status);
  return yue(tM), {
    relayed: !0,
    result: n(Buffer.from(l.data ?? new ArrayBuffer(0)), q3e(l.response.headers), !1)
  };
}
function rn(e) {
  if (e === void 0) return "";
  if (!nf(e) || Buffer.byteLength(e, "utf8") > 512) return;
  let n = e.split("/");
  for (let r of n) if (r === "" || r === "." || r === ".." || /[\\%\x00-\x1f\x7f]/.test(r)) return;
  return n.map(encodeURIComponent).join("/");
}
function bir(e) {
  return e.servedAudienceVersion === !0 || e.audience === "owner" || e.audienceView === "live" || e.audienceView === "pinned-current";
}
var on = "_src";
function J9r(e) {
  return e.assetToken !== void 0 && (e.data.mode !== "external" || e.data.perm?.role === "writer");
}
function Q9r(e) {
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
function Z9r(e) {
  return e !== "own" && e !== "same";
}
function eXr(e, n) {
  return `/_f/${e}/${on}/${n === "" ? "index.html" : n}`;
}
var timeout_2 = 30000;
function QYt(e) {
  let host = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    r = void 0;
  return {
    host: host,
    base: `https://${host}`
  };
}
function dt(e) {
  return e === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
}
function ZYt(e) {
  let n = dt(e);
  return nB() ? bXr(n) : tn() ? `To allow direct artifact reads here, add ${n} to the environment's allowed domains: environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access.` : i.CLAUDE_CODE_REMOTE ? `To allow artifact reads here, add ${n} to the network allowlist of the environment this remote session runs in.` : `To allow artifact reads here, add ${n} to the network allowlist this session runs behind \u2014 the sandbox's allowed domains, or the Claude desktop app's network settings (Settings \u2192 Capabilities; a workspace admin can add it on Team/Enterprise).`;
}
function r2(e, n, r, s = "artifact_webfetch_read", a = "probe", l, d, h = !1) {
  return Me(e, n, s, e.file, r, a, l, d, h);
}
async function Tlt(e, n, r, s, a = "artifact_webfetch_read", l) {
  let d = U8(n);
  if ("errMsg" in d) return m(a, "invalid_path"), {
    err: `artifact read failed: ${d.errMsg}`
  };
  return Me(e, r, a, d.key, s, "probe", void 0, l);
}
function dJo(e, n, r, s, a) {
  return Me(e, r, a, void 0, s, "probe", void 0, void 0, !1, n);
}
async function Me(e, signal_3, feature, s, credentials_6, kind_4, d, probeToolUseId_2, readBack_4 = !1, pastVer_3) {
  let S = rn(s);
  if (S === void 0) return m(feature, "invalid_file_path"), {
    err: "artifact file path is not a clean relative path"
  };
  let v = await mI(e, feature, signal_3, {
    kind: kind_4,
    readBack: readBack_4,
    pastVer: pastVer_3,
    credentials: credentials_6,
    probeToolUseId: probeToolUseId_2
  });
  if (v.err !== null) return v;
  let {
    ver: ver_4,
    assetToken: assetToken_2
  } = v;
  if (s !== void 0 && assetToken_2 === void 0) return m(feature, "public_file"), {
    err: "the files of a public artifact read from outside its organization are not readable this way",
    status: 403,
    publicFile: !0
  };
  if (assetToken_2 === void 0 && d?.() !== !0) return c(feature, x_e), {
    err: "this is a public artifact from outside your organization; its page is fetched only on a read the user approved, and this call carries no such approval \u2014 nothing was fetched",
    status: 403,
    publicUnasked: !0
  };
  let servedPath = `/_f/${ver_4}/${S}`,
    source = J9r(v) ? {
      path: eXr(ver_4, S)
    } : void 0,
    A = y => {
      let w = {
        ...(y && {
          source: !0
        }),
        ...(!y && source?.fellBack !== void 0 && {
          source_fallback_status: source.fellBack
        }),
        ...(v.reused && {
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
    } = v.data,
    F = v.data.artifactKind === fR || Mt(e.slug)?.artifactKind === fR,
    k = assetToken_2 === void 0 ? "public" : perm_2?.mode,
    L = Q9r(v),
    role = perm_2?.role === "owner" ? "owner" : perm_2?.role === "writer" ? "writer" : "reader",
    owned = lee({
      role: DLt(at(perm_2?.role, assetToken_2 === void 0))
    }),
    ae = perm_2?.assignableReadModes,
    shareMenu = role === "owner" && Array.isArray(ae) && ae.every(item => item === "owner" || qe.some(w => w === item)) ? {
      modes: qe.filter(item => ae.includes(item) && !(F && item === "public")),
      ...(typeof perm_2?.externalSharingEnabled === "boolean" && {
        externalSharing: perm_2.externalSharingEnabled
      }),
      ...(typeof perm_2?.externalInvitesEnabled === "boolean" && {
        externalInvites: perm_2.externalInvitesEnabled
      })
    } : void 0,
    origin = Je(v.data.origin_metadata),
    readBack_5 = $e(v.data),
    manifestPaths = Y9r(v.data.files),
    storeDocuments = Ht(v.data.dbUsage),
    contentStore = typeof v.data.contentStore === "string" && Ut.test(v.data.contentStore) ? v.data.contentStore : void 0,
    re = (raw, w, C, Z = () => g(feature, A(C))) => {
      Z();
      let contentType_2 = s === void 0 ? "text/html" : typeof w === "string" ? tt(w, ";").trim().toLowerCase() : "",
        z = raw.toString("utf-8"),
        html = contentType_2 === "text/html" ? Xe(z) : z,
        he = OLe(v.data.outsideWriter),
        outsideWriter_3 = xmo(he, Mt(e.slug)?.outsideWriter);
      return {
        err: null,
        html: html,
        contentType: contentType_2,
        raw: raw,
        role: role,
        ...(C && {
          source: !0
        }),
        cowritten: cowritten === !0 || F || Mt(e.slug)?.cowritten === !0,
        publicRead: assetToken_2 === void 0,
        ...(X9r(perm_2?.role) && {
          servedAudienceVersion: !0
        }),
        ...(owned !== void 0 && {
          owned: owned
        }),
        sameChannel: perm_2?.sameChannel === !0 && role === "writer",
        ...(L === "external" && {
          external: !0
        }),
        ...(Z9r(L) && {
          offOrgRamp: !0
        }),
        typeLocked: MLe(e.slug, v.data.type),
        ...((v.data.authoredByOthers === !0 || Mt(e.slug)?.authoredByOthers === !0) && {
          authoredByOthers: !0
        }),
        ...((W2(v.data.outsidersMayHaveWritten) || Mt(e.slug)?.outsidersMayHaveWritten === !0) && {
          outsidersMayHaveWritten: !0
        }),
        ...(l7e(role === "owner" && assetToken_2 !== void 0, he, outsideWriter_3) && {
          outsideOrg: !0
        }),
        ...(outsideWriter_3 !== void 0 && {
          outsideWriter: outsideWriter_3
        }),
        ...(shareMenu !== void 0 && {
          shareMenu: shareMenu
        }),
        ...(k !== void 0 && (() => {
          let j = wue(k, v.data.shared),
            ct = TQ(perm_2?.role),
            {
              live: live_2,
              shared: shared
            } = v.data,
            ft = typeof live_2 === "string" && cX.test(live_2),
            ve = typeof shared === "string" && cX.test(shared) ? shared : void 0,
            lt = ft && (shared === void 0 || shared === "") || ve !== void 0;
          return {
            audience: j.mode,
            ...(ct && lt && j.mode !== "owner" && {
              audienceView: ve === void 0 ? "live" : ve === ver_4 ? "pinned-current" : "pinned-earlier"
            })
          };
        })()),
        bytes: contentType_2 === "text/html" ? Buffer.byteLength(html, "utf8") : raw.length,
        title: typeof title === "string" ? title : "",
        ...(favicon !== void 0 && {
          favicon: favicon
        }),
        ver: ver_4,
        ...(typeof v.data.fileCount === "number" && Number.isSafeInteger(v.data.fileCount) && v.data.fileCount > 0 && {
          fileCount: v.data.fileCount
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
        }),
        ...(readBack_5 !== void 0 && {
          readBack: readBack_5
        })
      };
    };
  if (F && s === void 0 && pastVer_3 === void 0) {
    let y = await te().liveReplicas.renderLevel?.(e.slug, vue, v.data.headSeq, signal_3);
    if (y !== void 0) {
      t(`[artifact] read served from the local replica at seq ${y.head} slug=${e.slug}`);
      let w = re(Buffer.from(y.html, "utf8"), "text/html", !1);
      return w.err === null ? {
        ...w,
        localReplica: {
          head: y.head
        }
      } : w;
    }
  }
  let oe = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    ue = ZYt(e.env),
    ce = (y, w) => {
      if (y.code === "unavailable" && y.status !== void 0) return m(feature, "asset_relay_unavailable", {
        relay_status: y.status
      }), {
        err: `${qYt(y.status)}. Your access to the artifact itself is fine (the permission check passed); this environment cannot reach ${oe} directly, so its reads go through the gateway.`,
        status: y.status
      };
      return m(feature, "asset_egress_blocked", {
        relay: f(y.code),
        ...(y.status !== void 0 && {
          relay_status: y.status
        }),
        ...(!w && {
          connect: !0
        })
      }), {
        err: `this environment's network allowlist blocks ${oe}, and the session gateway could not serve the read either (${y.why}); your access to the artifact itself is fine (the permission check passed). ${ue}`,
        status: 403,
        ...(w && {
          deterministic: "egress-blocked"
        })
      };
    },
    be = async token_2 => {
      let w = M => JYt(e.slug, M, {
          token: token_2,
          timeout: timeout_2,
          maxContentLength: s === void 0 ? Ce : bve,
          signal: signal_3,
          credentials: credentials_6
        }),
        C;
      try {
        if (source !== void 0 && source.fellBack === void 0) {
          let M = await w(source.path).catch(z => {
            if (nl(z) || z instanceof Ke) throw z;
            return {
              kind: "answer",
              status: 0,
              headers: void 0,
              data: void 0
            };
          });
          if (M.kind === "answer" && M.status === 200) return re(Buffer.from(M.data ?? new ArrayBuffer(0)), q3e(M.headers), !0, () => g(feature, {
            ...A(!0),
            frame_content: !0
          }));
          if (M.kind === "answer") source.fellBack = M.status;
        }
        C = await w(servedPath);
      } catch (error) {
        if (nl(error) || error instanceof Ke) throw error;
        m(feature, "asset_request_error", {
          frame_content: !0
        });
        let z = Q1(error),
          se = rc(error) && /^[A-Z][A-Z0-9_]{1,48}$/.test(error.code ?? "") ? ` ${error.code}` : "";
        return {
          err: `artifact content fetch failed (${z ? `network error${se} reaching the artifact service` : "read failed"})`,
          ...(z && {
            transient: !0
          })
        };
      }
      if (C.kind === "declined") {
        if (source !== void 0) source.fellBack = void 0;
        return;
      }
      if (C.status >= 200 && C.status < 300) return re(Buffer.from(C.data ?? new ArrayBuffer(0)), q3e(C.headers), !1, () => g(feature, {
        ...A(!1),
        frame_content: !0
      }));
      let Z = nfe(C.headers, C.data, M => Clt(M, token_2));
      if (C.status === 404 && S !== "" && Ren(C.headers, Z)) return c(feature, "file_not_in_manifest"), {
        err: "this version of the artifact has no file at that path",
        status: 404,
        missingFile: !0
      };
      return m(feature, "asset_failed", {
        frame_content: !0
      }), {
        err: `artifact content fetch failed (${Qe(C.status, C.headers, Z)})`,
        status: C.status,
        respondent: !0
      };
    },
    N = (token_3, w) => nn({
      slug: e.slug,
      servedPath: servedPath,
      fileRead: s !== void 0,
      feature: feature,
      token: token_3,
      signal: signal_3,
      ...(source !== void 0 && {
        source: source
      })
    }, (C, Z, M) => re(C, Z, M, () => c(feature, w, A(M))));
  if (assetToken_2 !== void 0 && XYt(v.data)) {
    let y = await be(assetToken_2);
    if (y !== void 0) return y;
  }
  let q;
  if (assetToken_2 !== void 0 && te().contentHostEgressDenied.has(e.env) && ose() && !ZW(tM)) {
    let y = await N(assetToken_2, "asset_egress_relayed");
    if (y.relayed) return y.result;
    q = y;
  }
  let Pe = void 0,
    Te = Pe ?? `https://${oe}`,
    ut = assetToken_2 === void 0 ? `${Te}${servedPath}` : `${Te}${servedPath}?__frame_t=${encodeURIComponent(assetToken_2)}`,
    we = async y => {
      te().contentHostEgressDenied.add(e.env);
      let w = ose();
      if (assetToken_2 !== void 0 && w) {
        if (q !== void 0) return ce(q, y);
        if (ZW(tM)) return ce(Ze, y);
        let C = await N(assetToken_2, "asset_egress_relayed");
        return C.relayed ? C.result : ce(C, y);
      }
      return m(feature, "asset_egress_blocked", {
        ...(!y && {
          connect: !0
        })
      }), {
        err: assetToken_2 === void 0 && w ? `this environment's network allowlist blocks ${oe}, and public (tokenless) artifacts are not served through the session gateway, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}` : `this environment's network allowlist blocks ${oe}, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}`,
        status: 403,
        ...(y && {
          deterministic: "egress-blocked"
        })
      };
    },
    Be = y => hd.get(y, {
      signal: signal_3,
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxRedirects: 0,
      maxContentLength: s === void 0 ? Ce : bve,
      validateStatus: () => !0,
      ...(Pe && {
        headers: {
          Host: `${e.slug}.frame.localhost`
        }
      })
    });
  if (source !== void 0 && assetToken_2 !== void 0 && source.fellBack === void 0 && !te().contentHostEgressDenied.has(e.env)) {
    let y;
    try {
      y = await Be(`${Te}${source.path}?__frame_t=${encodeURIComponent(assetToken_2)}`);
    } catch (error) {
      if (nl(error)) throw error;
      if (rgt(error)) return we(!1);
    }
    if (y !== void 0 && rV(y.status, y.headers)) return we(!0);
    if (y !== void 0 && y.status === 200) return re(Buffer.from(y.data), y.headers?.["content-type"], !0);
    source.fellBack = y?.status ?? 0, t(`[artifact] stored-source read fell back (${source.fellBack}) slug=${e.slug}`);
  }
  let H;
  try {
    H = await Be(ut);
  } catch (error) {
    if (nl(error)) throw error;
    if (rgt(error)) return we(!1);
    let w = yM(error),
      C = w === void 0 ? void 0 : NFt(w.headers) ?? rfe(w.headers),
      Z = Q1(error),
      M = rc(error) && /^[A-Z][A-Z0-9_]{1,48}$/.test(error.code ?? "") ? ` ${error.code}` : "",
      z = w !== void 0 ? `proxy refused the connection: ${YJ(w.connectStatus)}${C === void 0 ? "" : `, ${C}`}` : Z ? `network error${M}: could not connect to ${oe} on port 443 \u2014 the machine running Claude Code needs outbound HTTPS to ${dt(e.env)} when the Artifact tool is enabled` : "read failed",
      se = j => j === void 0 ? "" : `, and the session gateway could not serve the read either (${j.why})`,
      he = j => j !== void 0 && {
        relay: f(j.code),
        ...(j.status !== void 0 && {
          relay_status: j.status
        })
      };
    if (w !== void 0 && w.connectStatus === 407) return m(feature, "asset_proxy_refused", {
      status: w.connectStatus,
      ...he(q)
    }), {
      err: `artifact content fetch failed (${z})${se(q)}`,
      status: w.connectStatus,
      ...(C !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${YJ(w.connectStatus)})${se(q)}`
      })
    };
    let Q = q;
    if (assetToken_2 !== void 0 && Q === void 0 && Z && ose()) if (ZW(tM)) Q = Ze;else {
      let j = await N(assetToken_2, "asset_unreachable_relayed");
      if (j.relayed) return j.result;
      Q = j;
    }
    return m(feature, "asset_request_error", {
      ...(w !== void 0 && {
        status: w.connectStatus
      }),
      ...he(Q)
    }), {
      err: `artifact content fetch failed (${z})${se(Q)}`,
      ...(Z && w === void 0 && {
        transient: !0
      }),
      ...(w !== void 0 && w.connectStatus !== 0 && {
        status: w.connectStatus
      }),
      ...(w !== void 0 && C !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${YJ(w.connectStatus)})${se(Q)}`
      })
    };
  }
  if (rV(H.status, H.headers)) return we(!0);
  if (te().contentHostEgressDenied.delete(e.env), H.status < 200 || H.status >= 300) {
    let y = nfe(H.headers, H.data, C => Clt(C, assetToken_2));
    if (H.status === 403 && assetToken_2 === void 0 && pGe(H.headers, y)) return m(feature, "public_asset_forbidden"), {
      err: "artifact is not publicly readable at this version",
      status: 403
    };
    if (H.status === 404 && S !== "" && assetToken_2 !== void 0 && Ren(H.headers, y)) return c(feature, "file_not_in_manifest"), {
      err: "this version of the artifact has no file at that path",
      status: 404,
      missingFile: !0
    };
    let proxyDeny = xCs(H.status, y);
    return m(feature, proxyDeny ?? "asset_failed"), {
      err: `artifact content fetch failed (${Qe(H.status, H.headers, y)})`,
      status: H.status,
      respondent: !0,
      ...(proxyDeny !== void 0 && {
        safeErr: LFt[proxyDeny],
        proxyDeny: proxyDeny
      })
    };
  }
  return re(Buffer.from(H.data), H.headers?.["content-type"], !1);
}
function Qe(e, n, r) {
  let s = [`HTTP ${e}`],
    a = rfe(n);
  if (a === void 0 && r.reason !== void 0) s.push(`response body: "${Jd(r.reason.replaceAll('"', "'"))}"`);else if (a !== void 0) s.push(`the environment's egress proxy reported: ${a}`);else if (r.proxyError !== void 0) s.push(`x-proxy-error header: "${Jd(r.proxyError.replaceAll('"', "'"))}"`);
  if (r.requestId !== void 0) s.push(`x-request-id: ${r.requestId}`);
  return s.join("; ");
}
function Sge(e) {
  return e.respondent ? e.safeErr ?? `artifact content fetch failed (HTTP ${e.status ?? "error"})` : e.err;
}
function Clt(e, n) {
  let r = e.replace(/(?:_|%(?:25)*5f){2}frame(?:_|%(?:25)*5f)t(?:=|%(?:25)*3d)["']?[^\s&"'<>]*/gi, "__frame_t=[redacted]");
  if (n !== void 0 && n !== "") {
    r = nt(r, n, "g");
    let s = encodeURIComponent(n);
    if (s !== n) r = nt(r, s, "gi");
  }
  return r;
}
var xe = 16,
  et = /[A-Za-z0-9._~%-]/;
function nt(e, n, r) {
  if (n.length <= xe) return e.replaceAll(n, "[redacted]");
  let s = new Set();
  for (let h = 0; h + xe <= n.length; h++) s.add(Qo(n.slice(h, h + xe)));
  let regExp_2 = new RegExp(`(?:${[...s].join("|")})${et.source}*`, r),
    l = "",
    d = 0;
  for (let h of e.matchAll(regExp_2)) {
    let index = h.index;
    while (index > d && et.test(e.charAt(index - 1))) index--;
    l += `${e.slice(d, index)}[redacted]`, d = h.index + h[0].length;
  }
  return l + e.slice(d);
}
export { KXo, G9r, JY, _lt, G0, rA, dF, uir, yge, Gvn, V9r, U8, api, lpi, blt, $Ie, Slt, wlt, qXo, lre, YXo, XXo, dpi, VYt, K9r, bAt, QY, JXo, Vvn, cpi, upi, fir, fpi, Kvn, q9r, bv, ppi, QXo, SAt, mpi, hpi, ZXo, eJo, tJo, pir, _ge, klt, qvn, mir, Y9r, R1e, Yvn, nJo, rJo, hir, Xvn, gir, HB, Jvn, yir, qC, bge, vlt, ZY, G3e, V3e, err_2 as KYt, oJo, sJo, iJo, timeout as _ir, Qvn, mI, aJo, B8, lJo, TQ, X9r, Elt, wAt, bve, K3e, qYt, YYt, XYt, JYt, q3e, bir, J9r, Q9r, Z9r, eXr, timeout_2 as Sir, QYt, ZYt, r2, Tlt, dJo, Sge, Clt };