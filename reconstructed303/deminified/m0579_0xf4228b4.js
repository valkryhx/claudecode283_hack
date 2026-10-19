// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ke, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { ke } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Vi, Na, bL, Ds } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, W5, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { La, mc, nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { x4, e0 } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { Hbt, m6s, g6s, h6s, y6s, _6s, b6s, S6s, w6s, v6s, k6s, EGe, U5 } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ste, YU, Mke, xPo, Vmt, qmt, ite } from "B:/~BUN/root/chunk-t78esase.js";
import { Ua, Rc } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { Hte, sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { fF, z2, TZe } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { uA, b1s, S1s, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Uo, bW, cn, $Me, ar, yNo, Yt, QH, Hn, Rl, TNo } from "B:/~BUN/root/chunk-qp0344nb.js";
import { n$ } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { VF, W5t, gue, N4e, afr, Y7, qf, Voo, qoo, hue, eAt, ait, $Fe, cfr, W8, nAt, cMn, Joe } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { k3, xf, Ysn } from "B:/~BUN/root/chunk-ggdk44cm.js";
import { zg } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { ecs, z8, tcs, pit, fit, J7, qF, Q7, eU, Z7, Tfr, Qoe, B4e, mit, AAe, OR, Oc } from "B:/~BUN/root/chunk-neajqqs3.js";
import { bfr } from "B:/~BUN/root/chunk-dt8mvd2y.js";
import { rXe, Hh, BE, Mae, BT, rte } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { mD, lu, uK } from "B:/~BUN/root/chunk-p64g0hj8.js";
import { Czn } from "B:/~BUN/root/chunk-0m6vvjrw.js";
import { GF } from "B:/~BUN/root/chunk-nqfs3a2f.js";
import { uFt, lIe, dIe, kIr, tje, kt, Cin, mFt, Gxo, Vxo, EIr, Mmt, Cke, gFt, Vj, hFt, Rke, Dmt, Lmt as errorCode, IH, x3 } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { fr, _W, Fx } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { o, M, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
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
  lt = {
    chat: "chat",
    share: "shared chat",
    task: "task",
    cowork: "task",
    code_session: "session",
    epitaxy: "session",
    project: "project"
  };
function pt(e) {
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
  let i = Object.hasOwn(Ie, n) ? Ie[n] : void 0;
  if (i === void 0 || i.needsId && r === void 0) return "other";
  return i.family;
}
function Yro(e) {
  let n = QH(e),
    env = yNo(n);
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
    slug = ar.test(d) ? d : bW(i);
  }
  return {
    family: pt(s.pathname.split("/").filter(item => item !== "")),
    env: env,
    artifact: slug === null ? null : {
      slug: slug
    }
  };
}
function Upr(e, n = {}) {
  let r = `not an artifact URL: ${e} \u2014`,
    s = Yro(e),
    i = s === null ? void 0 : lt[s.family];
  if (s !== null && i !== void 0 && s.artifact !== null) {
    let b = Hn({
      slug: s.artifact.slug,
      env: s.env
    });
    return `${r} that is a claude.ai ${i} link; pass the artifact's own URL (${b}) as \`${n.field ?? "url"}\`.`;
  }
  if (s?.family === "design") {
    let b = n.designToolName === void 0 ? "" : `; use the ${n.designToolName} tool`;
    return `${r} that is a Claude Design link, which the ${cn} tool cannot open${b}.`;
  }
  if (s?.family === "chat_artifact" || /^https:\/\/(?:www\.)?claude\.site(?:[/?#]|$)/.test(QH(e.trim()))) return `${r} that is an artifact from a claude.ai chat (the chat's artifact panel or its public page), which is separate from artifacts published with this tool and has no ${$Me()} link, so this tool cannot read it. If the user wants its content used here, ask them to paste it or save it to a file in this session; if they meant one of their published artifacts, action: "list" shows those.`;
  if (i !== void 0) return `${r} that is a claude.ai ${i} link, not a published artifact, and this tool cannot read a ${i}. If the user meant an artifact shown in that ${i}, ask them for the artifact's own ${$Me()} link or find it with action: "list"; otherwise ask them to paste the content they want used.`;
  let d = e.trim(),
    slug_2 = ar.test(d.toLowerCase()) ? d.toLowerCase() : bW(d);
  if (s === null && slug_2 !== null) return `${r} that looks like an artifact id on its own; if it is one, pass the full link ${Hn({
    slug: slug_2,
    env: Uo()
  })} as \`${n.field ?? "url"}\`.`;
  return `${r} pass the artifact's ${$Me()} link (action: "list" shows them).`;
}
import { lstat as le, open as ht, readlink as gt, realpath as ye, stat as mt } from "fs/promises";
async function Iz(e, n) {
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
import { constants as yt } from "fs";
import { dirname as Fe, isAbsolute as Q, join as _e, normalize as J, relative as _t, sep as te } from "path";
function k4e(e) {
  return Ds(e) || Na(e) || bL(e);
}
function $P(e) {
  if (k4e(e)) return !0;
  let {
    paths: paths,
    vetted: vetted
  } = W5(e);
  return !vetted || paths.some(k4e);
}
function se(e) {
  return Ds(e) || Na(e) || bL(e);
}
var kE = 512,
  qI = 255,
  xIn = cMn - 1,
  qoe = qI + 1;
function xe(e, n) {
  if (e.length === 0) return {
    errMsg: `${n} may not be empty`
  };
  if (e.length > kE) return {
    errMsg: `${n} is longer than ${kE} characters`
  };
  let nfc = e.normalize("NFC");
  if (/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(nfc) || !mc(nfc)) return {
    errMsg: `${n} ${xf(e)} contains control, formatting, line-separator, or private-use characters, or a malformed one`
  };
  if (nfc.includes("\\")) return {
    errMsg: `${n} ${xf(e)} contains a backslash \u2014 published paths use forward slashes on every platform`
  };
  if (/[?#%]/.test(nfc)) return {
    errMsg: `${n} ${xf(e)} contains characters that cannot appear in a served URL path ("?", "#", "%")`
  };
  if (nfc.startsWith("/")) return {
    errMsg: `${n} ${xf(e)} is absolute \u2014 published paths are relative to the artifact root`
  };
  let s = nfc.split("/");
  if (s.some(item => item === "")) return {
    errMsg: `${n} ${xf(e)} has an empty path segment`
  };
  if (s.some(item => item === "." || item === "..")) return {
    errMsg: `${n} ${xf(e)} contains "." or ".." segments \u2014 pass the plain served path`
  };
  if (s.some(item => item === "__proto__" || item === "constructor" || item === "prototype")) return {
    errMsg: `${n} ${xf(e)} contains a reserved name ("__proto__", "constructor", "prototype")`
  };
  if (/[:;]/.test(nfc)) return {
    errMsg: `${n} ${xf(e)} contains ":" or ";", which no published path may`
  };
  return {
    nfc: nfc
  };
}
function PIn(e, {
  removal = !1
} = {}) {
  let r = xe(e, "files: published path");
  if ("errMsg" in r) return r;
  let {
    nfc: s
  } = r;
  if (s === "index.html") return {
    errMsg: 'files: "index.html" cannot be a published path \u2014 the `html` argument is always the index. Pass that file\'s content as `html` and remove the "index.html" mapping.'
  };
  if (s.startsWith("_")) return {
    errMsg: `files: published path ${xf(e)} starts with "_", which the artifact service reserves for its own names \u2014 rename the file or its top-level directory`
  };
  if (!removal && Bpr(s)) return {
    errMsg: `files: published path ${xf(e)} is a name the artifact service answers with one of its own views, so the file could never be read back \u2014 rename it`
  };
  return {
    key: s
  };
}
function Bpr(e) {
  return e.startsWith("_") || e === "index.html.json" || e === ".json";
}
function eq(e) {
  let n = xe(e, "path");
  if ("errMsg" in n) return n;
  let {
    nfc: r
  } = n;
  if (Bpr(r)) return {
    errMsg: `path ${xf(e)} names one of the artifact service's own views, not a published file; list_files shows the readable paths`
  };
  return {
    key: r
  };
}
var lds = 1048576,
  bt = /\.(?:png|jpe?g)$/i;
function dds(e) {
  let n = xe(e, "thumbnail href");
  if ("errMsg" in n) return n;
  if (!bt.test(n.nfc)) return {
    errMsg: `thumbnail href ${JSON.stringify(e)} is not a .png, .jpg or .jpeg file \u2014 custom thumbnails are PNG or JPEG images`
  };
  return {
    rel: n.nfc
  };
}
function E4e(e, n, r) {
  return e === n || e.startsWith(n + te) || e === r || e.startsWith(r + te);
}
function Xro(e, n, r) {
  let s = T4e(J(n));
  if (s === r) return e;
  if (e === s) return r;
  return e.startsWith(s + te) ? r + e.slice(s.length) : e;
}
function T4e(e) {
  let n = e.replace(/[\\/]+$/, "");
  return n === "" ? e : n;
}
function C4e(e, n) {
  if (se(e)) return null;
  if (e === "~" || e.startsWith(`~${te}`) || e.startsWith("~/")) return null;
  if (Q(e)) {
    let s = J(e);
    return se(s) ? null : s;
  }
  let r = J(e);
  if (r === ".." || r.startsWith(`..${te}`)) return null;
  return _e(n, r);
}
function Jro(e) {
  return `files: ${JSON.stringify(e)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 list the link's target path instead`;
}
async function U8(e) {
  let n = T4e(e);
  for (let r = 0; r < 40; r++) {
    let s;
    try {
      s = await gt(n);
    } catch {
      return !1;
    }
    if (Vi(s, Fe(n))) return !0;
    if (s.split(/[\\/]+/).includes("..")) return !0;
    if (n = T4e(Q(s) ? J(s) : _e(Fe(n), s)), se(n)) return !0;
  }
  return !0;
}
function wt(e, n) {
  return n.some(item => E4e(e, item.lex, item.real));
}
function Ae(e, n) {
  return n.some(item => e === item.real || e.startsWith(item.real + te));
}
function Re(e) {
  return !e.isSymbolicLink() && e.isDirectory();
}
async function At(e) {
  if (e === void 0 || !Q(e)) return [];
  let n = T4e(J(e)),
    r;
  try {
    r = await le(n);
  } catch (error) {
    return G(error) ? [{
      kind: "scratchpad",
      lex: n,
      real: n
    }] : [];
  }
  if (!Re(r) || (await U8(n))) return [];
  let real = await ye(n).catch(() => n),
    i = await le(n).catch(() => {
      return;
    });
  return i !== void 0 && Re(i) && i.ino === r.ino && i.dev === r.dev ? [{
    kind: "scratchpad",
    lex: n,
    real: real
  }] : [];
}
async function Qro(e, n) {
  let r = [];
  for (let s of e ?? []) {
    if (!Q(s) || se(s)) continue;
    let i = T4e(J(s));
    if (i === n.lex || i === n.real) continue;
    try {
      let l = await le(i);
      if (!Re(l) || (await U8(i))) continue;
      if (a.CLAUDE_CODE_EVAL_CONFINED && i === ke()) {
        r.push({
          kind: "dir",
          lex: i,
          real: i
        });
        continue;
      }
      let real_2 = await ye(i);
      if (se(real_2)) continue;
      let y = await le(i);
      if (Re(y) && y.ino === l.ino && y.dev === l.dev) r.push({
        kind: "dir",
        lex: i,
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
async function Rt(e, n, r) {
  let s = await ye(e),
    i = {
      kind: "cwd",
      lex: T4e(J(e)),
      real: s
    },
    anchors = [i, ...(await Qro(r?.workingDirs, i)), ...(await At(r?.scratchpadDir))],
    {
      where: where,
      under: under
    } = De(anchors);
  if (n === void 0) return {
    anchors: anchors,
    realRoot: s,
    lexRoot: J(e)
  };
  if (se(n)) return {
    errMsg: `root: ${JSON.stringify(n)} is a network path \u2014 the publish base must lie within ${where}`
  };
  let b = J(n);
  if (!Q(b) && (b === ".." || b.startsWith(`..${te}`))) return {
    errMsg: `root: ${JSON.stringify(n)} escapes the working directory \u2014 ` + "a relative publish base must lie within it"
  };
  let v = Q(b) ? anchors.find(item => E4e(b, item.lex, item.real)) : anchors[0];
  if (v === void 0) return {
    errMsg: `root: ${JSON.stringify(n)} is outside ${where} \u2014 pass ${under}`
  };
  let P = Q(b) ? b : _e(s, b),
    errMsg = r?.denyPath?.(P, !1, n);
  if (errMsg !== void 0) return {
    errMsg: errMsg
  };
  if ($P(P) || (await U8(P))) return {
    errMsg: `root: ${JSON.stringify(n)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 pass the target directory itself`
  };
  let realRoot;
  try {
    realRoot = await ye(P);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (se(realRoot)) return {
    errMsg: `root: ${JSON.stringify(n)} resolves to a network path \u2014 the publish base must lie within ${where}`
  };
  if (!Ae(realRoot, [v])) return {
    errMsg: Ae(realRoot, anchors) ? `root: ${_(n)} is a link from ${Le(v)} into ${Le(anchors.find(item => Ae(realRoot, [item])) ?? v)} \u2014 pass the directory it points to instead` : `root: ${JSON.stringify(n)} resolves outside ${where} \u2014 the publish base must lie within it`
  };
  let k;
  try {
    k = await mt(realRoot);
  } catch {
    return {
      errMsg: `root: ${JSON.stringify(n)} not found`
    };
  }
  if (!k.isDirectory()) return {
    errMsg: `root: ${JSON.stringify(n)} is not a directory`
  };
  let lexRoot = T4e(Q(b) ? b : _e(J(e), b));
  return {
    anchors: anchors,
    realRoot: realRoot,
    lexRoot: lexRoot
  };
}
async function Zro(e, n, r, s) {
  let i = await Rt(n, r, s);
  if ("errMsg" in i) return i;
  let {
      anchors: anchors_2,
      realRoot: realRoot_2,
      lexRoot: lexRoot_2
    } = i,
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
  if (e.length > qI) return {
    errMsg: `files: ${e.length} files + index.html exceeds the ${qI + 1} entries one publish may name; send at most ${qI} now and the rest in another publish to the same url`
  };
  let files = [],
    S = new Set(),
    N = 0;
  for (let k of e) {
    let W = PIn(k.to);
    if ("errMsg" in W) return W;
    let T = W.key;
    if (S.has(T)) return {
      errMsg: `files: published path ${xf(T)} appears more than once`
    };
    S.add(T);
    let R = k.from;
    if (se(R)) return {
      errMsg: `files: ${JSON.stringify(R)} is a network path \u2014 only files under ${where_2} can be published`
    };
    if (R === "~" || R.startsWith(`~${te}`) || R.startsWith("~/")) return {
      errMsg: `files: ${JSON.stringify(R)} \u2014 "~" is not expanded here; pass a base-relative or absolute path`
    };
    let K = Q(R) ? void 0 : J(R);
    if (K !== void 0 && (K === ".." || K.startsWith(`..${te}`))) return {
      errMsg: `files: ${JSON.stringify(R)} escapes the publish base \u2014 ` + `only files under ${where_2} can be published`
    };
    let F = C4e(R, realRoot_2);
    if (F === null) return {
      errMsg: `files: ${JSON.stringify(R)} cannot be resolved`
    };
    if (Q(R) && !wt(F, anchors_2)) return {
      errMsg: `files: ${JSON.stringify(R)} is outside ${where_2} \u2014 pass ${under_2}`
    };
    let errMsg_2 = s?.denyPath?.(F, !1, R);
    if (errMsg_2 !== void 0) return {
      errMsg: errMsg_2
    };
    if (lexRoot_2 !== realRoot_2) {
      let x = K ?? (F.startsWith(realRoot_2 + te) ? _t(realRoot_2, F) : void 0);
      if (x !== void 0) {
        let errMsg_3 = s?.denyPath?.(_e(lexRoot_2, x), !0, R);
        if (errMsg_3 !== void 0) return {
          errMsg: errMsg_3
        };
      }
    }
    if ($P(F) || (await U8(F))) return {
      errMsg: Jro(R)
    };
    let U;
    try {
      U = await ye(F);
    } catch (error) {
      return {
        errMsg: `files: ${JSON.stringify(R)} not found`,
        ...(G(error) && {
          missing: !0
        })
      };
    }
    if (se(U)) return {
      errMsg: `files: ${JSON.stringify(R)} resolves to a network path \u2014 only files under ${where_2} can be published`
    };
    if (!Ae(U, anchors_2)) return {
      errMsg: `files: ${JSON.stringify(R)} resolves outside ${where_2} (symlink?) \u2014 only files under it can be published`
    };
    if (U !== F) {
      let errMsg_4 = s?.denyPath?.(U, !0, R);
      if (errMsg_4 !== void 0) return {
        errMsg: errMsg_4
      };
    }
    try {
      let x = await le(U);
      if (x.isSymbolicLink()) return {
        errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      if (!x.isFile()) return {
        errMsg: `files: ${JSON.stringify(R)} is not a regular file`
      };
    } catch (error) {
      return {
        errMsg: `files: ${JSON.stringify(R)} not found`,
        ...(G(error) && {
          missing: !0
        })
      };
    }
    let A;
    try {
      A = await ht(U, yt.O_RDONLY | 0);
    } catch (error) {
      if (error?.code === "ELOOP") return {
        errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
      };
      return {
        errMsg: `files: ${JSON.stringify(R)} not found`,
        ...(G(error) && {
          missing: !0
        })
      };
    }
    let content, contentType;
    try {
      try {
        if ((await le(U)).isSymbolicLink()) return {
          errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
        };
      } catch (error) {
        return {
          errMsg: `files: ${JSON.stringify(R)} not found`,
          ...(G(error) && {
            missing: !0
          })
        };
      }
      let x = await A.stat();
      if (!x.isFile()) return {
        errMsg: `files: ${JSON.stringify(R)} is not a regular file`
      };
      if ((a.CLAUDE_CODE_EVAL_CONFINED || s?.refuseHardLinks === !0) && x.nlink > 1) return {
        errMsg: `files: ${JSON.stringify(R)} has more than one hard link`
      };
      if (x.size > qf) return {
        errMsg: `files: ${JSON.stringify(R)} is ${Math.ceil(x.size / 1024 / 1024)}MB (per-file max ${qf / 1024 / 1024}MB)`,
        tooLarge: !0
      };
      if (N += x.size, N > W8) return {
        errMsg: `files: total content exceeds ${W8 / 1024 / 1024}MB at ${JSON.stringify(R)} \u2014 the most one publish sends; publish the files up to it now and the rest in another publish to the same url (a version may total ${nAt / 1024 / 1024}MB)`
      };
      if (contentType = k.contentType ?? k3(T), contentType === void 0) return {
        errMsg: Ysn("files", T),
        notServedPath: T
      };
      try {
        let I = await Iz(A, x.size);
        if (I === null) return {
          errMsg: `files: ${JSON.stringify(R)} changed while it was read \u2014 retry the publish`
        };
        content = I;
      } catch {
        return {
          errMsg: `files: ${JSON.stringify(R)} could not be read`
        };
      }
      files.push({
        path: T,
        content: content,
        contentType: contentType,
        ...(k.live !== void 0 && {
          live: k.live
        }),
        ...(k.reseed === !0 && {
          reseed: !0
        })
      });
    } finally {
      await A.close();
    }
  }
  return {
    files: files
  };
}
async function cds(e, n, r, s) {
  let i = /\.png$/i.test(n) ? ".png" : ".jpg",
    l = await Zro([{
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
var URt = "passive";
var Et = 600000,
  Ue = /^(\d{1,15})-/;
function Ee(e) {
  let n = e === void 0 ? void 0 : Ue.exec(e)?.[1];
  return n !== void 0 && Number(n) * 1000 <= Date.now() + Et ? e : void 0;
}
function eoo(e, ver) {
  let {
    live: live
  } = ee();
  if (Ee(ver) === void 0) {
    if (!live.heardAheadOfClockReported && Ue.test(ver)) live.heardAheadOfClockReported = !0, p("artifact_live_subscribe", "heard_version_skipped_ahead_of_clock");
    return;
  }
  let s = live.heardVersions.get(e),
    i = s === void 0 ? 1 : VF(ver, s.ver);
  if (i !== null && i > 0) live.heardVersions.set(e, {
    ver: ver,
    toldTo: new Set()
  });
}
function S5t(e, n) {
  let {
      supervisors: supervisors,
      heardVersions: heardVersions
    } = ee().live,
    i = supervisors.get(e);
  if (i === void 0 || n === void 0) return {
    behind: !1
  };
  let liveVer = St(Ee(heardVersions.get(e)?.ver), Ee(i.carriedVer));
  if (liveVer === void 0 || N4e(i.ownPublishes, e) || W5t(i.ownPublishes, e, liveVer)) return {
    behind: !1
  };
  let d = VF(liveVer, n);
  return d !== null && d > 0 ? {
    behind: !0,
    liveVer: liveVer
  } : {
    behind: !1
  };
}
function uds(e, n, r) {
  let s = S5t(e, n);
  if (!s.behind) return;
  let i = ee().live.heardVersions.get(e);
  return i?.ver === s.liveVer && i.toldTo.has(r ?? "main") ? void 0 : {
    liveVer: s.liveVer
  };
}
function pds(e, ver_2, r) {
  if (Ee(ver_2) === void 0) return;
  let heardVersions_2 = ee().live.heardVersions,
    i = heardVersions_2.get(e),
    l = r ?? "main";
  if (i?.ver === ver_2) {
    i.toldTo.add(l);
    return;
  }
  let d = i === void 0 ? -1 : VF(i.ver, ver_2);
  if (d !== null && d < 0) heardVersions_2.set(e, {
    ver: ver_2,
    toldTo: new Set([l])
  });
}
function OIn(e, n) {
  let heardVersions_3 = ee().live.heardVersions;
  if (n === void 0 || heardVersions_3.get(e)?.ver === n) heardVersions_3.delete(e);
}
function St(e, n) {
  if (e === void 0 || n === void 0) return e ?? n;
  let r = VF(e, n);
  return r !== null && r < 0 ? n : e;
}
var fds = ["org_pinned_instance", "pipeline_instance", "template_instance"],
  He = {
    first_party_type: 0,
    org_pinned_instance: 1,
    pipeline_instance: 2,
    template_instance: 3
  };
function w5t(e, kind, issuedAt) {
  if (IH(issuedAt)) return;
  let {
      attestedTypeArtifacts: attestedTypeArtifacts
    } = ee(),
    i = attestedTypeArtifacts.get(e) ?? {},
    l = i.revokedAt?.[kind];
  if (l !== void 0 && issuedAt <= l) return;
  let mark = i.mark;
  if (mark === void 0 || issuedAt > mark.issuedAt || issuedAt === mark.issuedAt && He[kind] < He[mark.kind]) attestedTypeArtifacts.set(e, {
    ...i,
    mark: {
      kind: kind,
      issuedAt: issuedAt
    }
  });
}
function jpr(e, n, r) {
  if (IH(r)) return;
  let {
      attestedTypeArtifacts: attestedTypeArtifacts_2
    } = ee(),
    i = attestedTypeArtifacts_2.get(e) ?? {},
    revokedAt = {
      ...i.revokedAt
    };
  for (let b of n) revokedAt[b] = Math.max(revokedAt[b] ?? r, r);
  let mark_2 = i.mark,
    mark_3 = mark_2 !== void 0 && !(n.includes(mark_2.kind) && mark_2.issuedAt <= r) ? mark_2 : void 0;
  attestedTypeArtifacts_2.set(e, {
    ...(mark_3 && {
      mark: mark_3
    }),
    revokedAt: revokedAt
  });
}
var Tt = f(() => u({
  firstPartyType: M().optional(),
  typeFirstParty: M().optional(),
  template: M().optional()
}));
function Ve(e, n, r, s, i) {
  if (n === void 0) return;
  let l = Tt().safeParse(n);
  if (!l.success) return;
  let d = l.data,
    external = i.external;
  if (d.firstPartyType === !0) {
    if (!external) w5t(e, "first_party_type", s);
    return;
  }
  if (d.typeFirstParty !== !0) return;
  if (r !== void 0 && ar.test(r)) w5t(r, "first_party_type", s);
  if (external) return;
  if (d.template === !0) w5t(e, "template_instance", s);else jpr(e, ["template_instance"], s);
}
function SS(e) {
  return ee().attestedTypeArtifacts.get(e)?.mark?.kind;
}
function mds(e) {
  return SS(e) !== void 0;
}
function too(e) {
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
function Xst(e) {
  let n = SS(e);
  return n === void 0 ? "" : ` [attested: ${too(n)}]`;
}
var xt = 600000;
function je(e, setting) {
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
function gds(e = Uo()) {
  if (!_W()) return a.CLAUDE_CODE_REMOTE === !0 && !Fx() ? void 0 : !1;
  let n = ee().sandboxEgress.get(e);
  if (n === void 0 || Date.now() - n.at >= xt) return;
  return n.setting === "disabled";
}
var hds = "what the artifact is for and the key decisions; the repo, branch, and commit it was built from; data sources used (MCP servers, load-bearing files); whether embedded data is a snapshot and as of when; known limitations and suggested next steps";
var vt = 16384;
var qn = `
[prompt truncated: exceeded ${vt / 1024}KB]`;
var Ot = /^[\w.:@+-]{1,56}(?:\[[A-Za-z0-9]{1,6}\])?$/,
  Ct = f(() => {
    let e = o().refine(r => r.trim() !== "").optional().catch(void 0),
      n = o().trim().regex(Ot).optional().catch(void 0);
    return u({
      prompt: e,
      context: e,
      model: n,
      client_version: n
    });
  });
function ze(e) {
  let n = Ct().safeParse(e);
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
var $t = 2000,
  Mt = 6000;
function Pt(e) {
  return {
    prompt: Math.min($t, Math.floor(e / 16)),
    context: Math.min(Mt, Math.floor(3 * e / 16))
  };
}
function Ge(e, n, r) {
  let s = e.trim(),
    i = Array.from(s);
  return i.length <= n ? s : `${i.slice(0, n).join("")}
[${r} truncated after ${n} characters]`;
}
function noo(e, n) {
  return "";
}
var Bt = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u2028\u2029]+/g;
function roo(e) {
  return Rl(n$(EGe, e.replace(Bt, " ")));
}
var ooo = 4194304,
  Je = 3149824;
function Ye(e) {
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
  let y = d;
  if (typeof y.mac !== "string" || y.mac.length === 0) return e;
  if (!Object.hasOwn(d, "payload")) return e;
  let b = s.slice(0, i);
  if (b.endsWith(`
`)) b = b.slice(0, -1);
  return b;
}
function q7(e) {
  return Wpr(e) || e.outsideOrg === !0;
}
function IIn(e) {
  return Wpr(e) || e.outsideWriter === !0;
}
function Wpr(e) {
  return e.authoredByOthers === !0 || e.role !== "owner" || e.publicRead || e.cowritten || e.typeLocked;
}
function Nt(e) {
  if (!Array.isArray(e)) return;
  let manifest = {};
  for (let s of e) {
    if (typeof s !== "object" || s === null || typeof s.path !== "string") return;
    manifest[s.path] = s;
  }
  let r = eAt({
    manifest: manifest
  });
  return r !== void 0 && r.type.length > 0 ? r : void 0;
}
var It = /^[a-z][a-z0-9_-]{0,63}$/,
  Xe = ["users", "org", "public"];
function Ft(e) {
  let n = e?.documents;
  return typeof n === "number" && Number.isSafeInteger(n) && n >= 0 ? n : void 0;
}
var DFe = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/,
  regExp = new RegExp(DFe, "g");
function MIn(e) {
  return e.replace(regExp, "");
}
function tt(e, n, r, workshopPage, i) {
  let ownVersion = gue(n, r, e.ver),
    ownBytesPage = !e.typeLocked && !e.publicRead && !workshopPage && !i,
    plainOwner = ownBytesPage && !q7(e);
  return {
    workshopPage: workshopPage,
    ownVersion: ownVersion,
    ownBytesPage: ownBytesPage,
    plainOwner: plainOwner,
    vouchedOwn: plainOwner && ownVersion
  };
}
async function yds(e, n, r, s = {}) {
  let island = await GF(e.html, "ws-decisions");
  return {
    ...tt(e, n, r, island !== null, s.savedInPage === !0),
    island: island
  };
}
async function _ds(e, n, r) {
  return tt(e, n, r, !1, !1).vouchedOwn && (await GF(e.html, "ws-decisions")) === null;
}
function zpr(e) {
  if (e.publicRead || e.offOrgRamp === !0 || e.external === !0 || e.role === "owner") return null;
  if (e.role === "writer" && e.sameChannel === !0 && Voo()) return "channel";
  return qoo() ? "shared" : null;
}
function DIn(e) {
  let otherWriters = e.role !== "owner" || e.cowritten || e.typeLocked === !0 || e.outsideOrg === !0,
    body = zF(e.html, "page"),
    head = i => LIn(body, i, "page");
  if (otherWriters || !e.vouchedOwn) {
    let [i, l] = otherWriters && e.sameChannel === !0 ? [_6s, b6s] : e.typeLocked ? [S6s, w6s] : e.role === "owner" && e.outsideOrg === !0 ? [h6s, y6s] : otherWriters ? [m6s, g6s] : [v6s, k6s];
    return {
      enveloped: !0,
      otherWriters: otherWriters,
      lead: `${i}
<${Hbt}>
`,
      body: body,
      tail: `
</${Hbt}>

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
function Gpr(e) {
  return Czn(e, U5);
}
function zF(e, n = "all") {
  return Gpr(Rl(e, n));
}
function LIn(e, n, r = "all") {
  if (n <= 0) return "";
  for (let s = n;; s--) {
    let i = Gpr(TNo(e, s, r));
    if (i.length <= n) return i;
  }
}
function Vpr(e) {
  if (!hue()) return;
  if (e.syncClient === !0) return typeof e.syncToken === "string" && e.syncToken !== "" ? {
    transport: "sync",
    token: e.syncToken
  } : void 0;
  return e.subscriptionToken ? {
    transport: "live",
    token: e.subscriptionToken
  } : void 0;
}
function EE(e, n = {}) {
  let parsed = Yt(e);
  if (parsed === null) return {
    ok: !1,
    message: n.notUrlMessage ?? Upr(e, {
      field: n.field
    }),
    errorCode: 4
  };
  let s = Uo();
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
var rt = 60000;
function Koe(e) {
  return e.gone === !0;
}
function R4e(e) {
  return e.neverPublished === !0;
}
function Mz(e) {
  return e.otherOrg === !0;
}
function Dt(e) {
  return typeof e === "object" && e !== null && Joe(e)?.reason === "org_mismatch" && "owner_org" in e && typeof e.owner_org === "string" && Vt(e.owner_org) !== null;
}
var A4e = "this Artifact is in another of the user's organizations, not the one this session is signed in to",
  x4e = "the user runs /login and signs in to that organization",
  err_2 = "this is a public artifact from outside the user's organization: it can be read, but not watched";
var err = `${A4e} \u2014 it opens here only after ${x4e}`,
  ot = "If it was shared with you by email, accept the invitation in a browser first, and check that Claude Code is signed in to the invited account",
  Oe = "If this was shared with you from another organization, open it in Claude Code on your computer or in a Claude Code on the web session",
  Ht = new Set([errorCode, "boot_403_agent_not_added", "boot_403_agent_owned", "boot_403_request_access"]),
  bds = "Do not retry this read; tell the user now that the artifact could not be read, then go on without it.";
function Sds(e) {
  return Koe(e) || e.errorCode !== void 0 && Ht.has(e.errorCode);
}
function wds(e) {
  return e.replace(`. ${ot}`, "").replace(`. ${Oe}`, "");
}
var Wt = f(() => u({
    request_access: M(),
    reason: o().optional()
  })),
  timeout = 15000;
async function NIn({
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
  credentials: credentials
}) {
  let T = Uo();
  if (env_2 !== T) return {
    err: `that artifact URL is for ${env_2} claude.ai, but this session targets ${T}`,
    errorCode: "env_mismatch"
  };
  let R = "via=model_read" + (kind_2 === "probe" ? "&bk=probe" : "") + (kind_2 === "probe" && lean !== void 0 ? `&lean=${encodeURIComponent(lean)}` : "") + (agentPeer ? "&peer=agent" : "") + (actorId ? "&actor=id" : "") + (syncLive ? "&live=sync" : "") + (watchBoot || agentPeer || syncLive ? `&vn=${URt}` : "") + (readBack ? "&readback=1" : "") + (pastVer !== void 0 ? `&ver=${encodeURIComponent(pastVer)}` : ""),
    K = sk === void 0 ? "" : `&sk=${encodeURIComponent(sk)}`,
    F = vanity === void 0 ? "" : `&vanity=${encodeURIComponent(vanity)}`,
    E = `/api/frame/${slug_3}?${R}${K}${F}`,
    U = {
      refreshOAuth: !0,
      credentials: credentials,
      headers: lu(),
      timeout: timeout,
      signal: signal
    },
    A,
    j = Date.now(),
    H = performance.now();
  try {
    A = relayOnly || qF() ? await Oc.getRelayOnly(E, U) : await Oc.get(E, U);
  } catch (error) {
    if (Ua(error)) throw error;
    return {
      err: "artifact read failed (network error)",
      errorCode: "boot_request_error",
      ...(Hte(error) && {
        transient: !0
      }),
      request: {
        ...Y7(error, H),
        wall_elapsed_ms: Date.now() - j,
        ...(OR(error) && {
          relay: !0
        })
      }
    };
  }
  if (je(env_2, ecs(A)), !A.ok) {
    if (A.reason === "relay-unavailable") return {
      err: `artifact read failed (relay unavailable${A.status ? `, HTTP ${A.status}` : ""})`,
      ...(A.status !== 0 && {
        status: A.status
      }),
      errorCode: "boot_relay_error"
    };
    if (A.reason === "relay-not-served") return {
      err: "artifact read failed (the session gateway does not serve this session)",
      errorCode: "boot_relay_not_served"
    };
    return {
      err: A.reason === "no-auth" ? Hh(A.detail) : `artifact read unavailable: ${A.reason}`,
      errorCode: A.reason.replace(/-/g, "_")
    };
  }
  if (!A.fromFrame) return {
    err: `artifact read failed (relay HTTP ${A.status})`,
    status: A.status,
    errorCode: "boot_relay_error"
  };
  let x = z2() ? "Slack" : TZe() ? "Teams" : void 0,
    I = `${x ?? "chat"} channel`,
    de = `add this ${I} (under "Add people, groups, or Claude Tags", paste the channel ID)`,
    pe = `sharing with a person or service account does not reach a ${I}'s Claude \u2014 ask the owner to open Share and ${de}, or widen General access to the organization`,
    be = `${pe}.`;
  if (A.status === 404) {
    let L = tcs(A.data),
      fe = fr() && A.route === "direct";
    return {
      err: L ? "this artifact exists but nothing has been published to it yet, so there is nothing to read" : `artifact not found \u2014 it may have been deleted, or it has not been shared with you${x === void 0 ? fe ? `. ${Oe}` : `. ${ot}` : `. If it is restricted to specific people, ${pe}${fe ? `. ${Oe}` : ""}`}`,
      status: 404,
      ...(z8(A.data) && {
        gone: !0
      }),
      ...(L && {
        neverPublished: !0
      }),
      errorCode: "boot_404"
    };
  }
  if (A.status === 403 && Dt(A.data)) return {
    err: err,
    status: 403,
    otherOrg: !0,
    errorCode: errorCode
  };
  if (A.status === 403) {
    let L = Wt().safeParse(A.data);
    if (L.success && L.data.reason === "agent_not_added") return {
      err: `this artifact is restricted to specific people, and this ${I}'s Claude is not one of them: ${be}`,
      status: 403,
      errorCode: "boot_403_agent_not_added"
    };
    if (L.success && L.data.reason === "agent_owned") return {
      err: x === void 0 ? "this artifact belongs to a chat channel's Claude and has not been shared with you \u2014 ask someone in the channel it was published from to open Share on it and add you." : `this artifact belongs to another ${I}'s Claude and has not been shared with this one \u2014 ask someone in the channel it was published from to open Share on it and ${de}.`,
      status: 403,
      errorCode: "boot_403_agent_owned"
    };
    if (L.success && L.data.request_access) return {
      err: "you do not have access to this artifact. Open the link in a browser to request access from the owner.",
      status: 403,
      errorCode: "boot_403_request_access"
    };
  }
  if (A.status === 400 && pastVer !== void 0) return {
    err: "the server refused that version id (HTTP 400). Most likely it is not among the ones kept for this artifact: list its versions for the ids that are.",
    status: 400,
    errorCode: "boot_unknown_ver"
  };
  if (A.status < 200 || A.status >= 300) return {
    err: `artifact read failed (HTTP ${A.status})`,
    status: A.status,
    errorCode: "boot_failed"
  };
  let data = A.data ?? {},
    {
      ver: ver_3,
      assetToken: assetToken
    } = data,
    he = data.mode === "public" || data.kind === "public";
  if (!ver_3 || !assetToken && !he) return {
    err: "artifact read failed: incomplete boot response",
    errorCode: "boot_incomplete"
  };
  if (!uK.test(ver_3)) return {
    err: "artifact read failed: malformed boot response",
    errorCode: "boot_bad_ver"
  };
  if (pastVer !== void 0) {
    if (mFt(slug_3, data.cowritten), EIr(slug_3, data.authoredByOthers), data.outsideWriter === !0) Mmt(slug_3, !0);
    if (ver_3 !== pastVer) return {
      err: "artifact read failed: the server served a different version from the one asked for, so nothing was read. It does that for an account that cannot edit the artifact; for one that can, the server ignored the version asked for.",
      errorCode: "boot_past_ver_ignored"
    };
    return {
      err: null,
      data: data,
      ver: ver_3,
      assetToken: assetToken || void 0,
      route: A.route
    };
  }
  Cin(slug_3, data.artifactKind), hFt(slug_3, afr(data), j), mFt(slug_3, data.cowritten), EIr(slug_3, data.authoredByOthers), Mmt(slug_3, data.outsideWriter);
  let re = data.lean === !0,
    external_2 = data.mode === "external";
  if (!re) Vxo(slug_3, external_2);
  if (BE()) Gxo(slug_3, !assetToken);
  gFt(slug_3, data.type);
  let {
      probeBoots: probeBoots
    } = ee().shareStatus,
    ce = probeBoots.get(slug_3);
  if (ce !== void 0 && ce.boot.ver !== ver_3) probeBoots.delete(slug_3);
  if (!re && !he && (!external_2 || data.perm?.role === "writer")) Ve(slug_3, data.typeFacts, Vj(kt(slug_3)), j, {
    external: external_2
  });
  return {
    err: null,
    data: data,
    ver: ver_3,
    assetToken: assetToken || void 0,
    route: A.route
  };
}
async function XA(e, n, r, {
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
  let R = speculative ? p : m,
    K;
  if (probeToolUseId !== void 0 && !agentPeer_2 && !actorId_2 && !syncLive_2 && !watchBoot_2 && lean_2 === void 0 && pastVer_2 === void 0 && !speculative) {
    let {
        probeBoots: probeBoots_2
      } = ee().shareStatus,
      j = Date.now();
    for (let [x, I] of probeBoots_2) if (j - I.issuedAt > rt) probeBoots_2.delete(x);
    let H = probeBoots_2.get(e.slug);
    if (H !== void 0 && H.toolUseId === probeToolUseId && (kind_3 === "probe" || H.boot.data.typeInstance === !1) && !(relayOnly_2 && fr() && H.boot.route !== "relay") && !S5t(e.slug, H.boot.ver).behind) K = {
      ...H.boot,
      reused: !0
    }, t(`[artifact] ${n}: ${kind_3}-kind boot served from this tool use's share probe (probe issued ${j - H.issuedAt}ms ago) slug=${e.slug}`);
  }
  let F = {
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
    E = K ?? (await NIn(e, r, {
      ...F,
      lean: lean_2?.version
    }));
  if (lean_2 !== void 0 && (E.err === null ? E.data.lean === !0 && !lean_2.mustCarry(E.data) : E.errorCode === "boot_incomplete")) p(n, "lean_boot_incomplete"), t(`[artifact] ${n}: the answer to a lean boot request was incomplete; booting in full slug=${e.slug}`), E = await NIn(e, r, F);
  if (E.err !== null) {
    let A = E.errorCode === "boot_request_error" || E.errorCode === "boot_failed" ? {
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
    if (A !== void 0) R(n, E.errorCode, A);else R(n, E.errorCode);
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
  let U = E;
  if (gatePublicRead && U.assetToken === void 0 && !BE()) return R(n, "public_read_disabled"), {
    err: "artifact read failed: this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet",
    errorCode: "public_read_disabled"
  };
  return U;
}
async function vds(slug_4, n, credentials_3, {
  syncLive: s = !1,
  lean: i
} = {}) {
  let env_3 = Uo(),
    d = await XA({
      slug: slug_4,
      env: env_3
    }, "artifact_live_subscribe", n, {
      agentPeer: s,
      syncLive: s,
      watchBoot: !0,
      ...(i !== void 0 && {
        lean: {
          version: i,
          mustCarry: v => "subscriptionToken" in v && "syncToken" in v && "syncClient" in v && "subscriptionTokenExp" in v && "watchTokenRenewEnabled" in v && "perm" in v
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
    ...(zY(d.status) && {
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
  let y = Vpr(d.data),
    b = d.data.syncClient === !0;
  return {
    err: null,
    token: y?.token,
    transport: y?.transport ?? (b ? "sync" : "live"),
    ver: d.ver,
    editor: Kt(d),
    tokenExp: b ? void 0 : st(d.data.subscriptionTokenExp),
    renewable: y?.transport === "live" && d.data.watchTokenRenewEnabled === !0,
    ...(typeof d.data.title === "string" && {
      title: d.data.title
    })
  };
}
function st(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : void 0;
}
function zY(e) {
  return e !== void 0 && (e >= 500 || e === 429 || e === 408);
}
async function kds(e, signal_2, credentials_4) {
  let s;
  try {
    s = await Oc.post(`/api/frame/watch-token/${e}?vn=${URt}`, {}, {
      refreshOAuth: !0,
      credentials: credentials_4,
      headers: lu(),
      timeout: timeout,
      signal: signal_2
    });
  } catch (error) {
    if (Ua(error)) throw error;
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
    l = Vpr(i),
    token = l?.transport === "live" ? l.token : void 0;
  if (!i.ver || !uK.test(i.ver) || token === void 0) return {
    err: "renew_miss",
    status: s.status
  };
  return {
    err: null,
    token: token,
    transport: "live",
    ver: i.ver,
    editor: void 0,
    tokenExp: st(i.subscriptionTokenExp),
    renewable: !0
  };
}
function Kt(e) {
  return e.assetToken !== void 0 && fue(e.data.perm?.role);
}
function fue(e) {
  return e === "owner" || e === "writer";
}
function it(e, n) {
  return n && e === "owner" ? void 0 : e;
}
function soo(e) {
  return e === "reader" || e === "viewer" || e === "commenter";
}
async function Jst(e, n, credentials_5, s) {
  let boot = await NIn(e, n, {
    readBack: s?.readBack === !0,
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
    d = boot.data.perm?.role,
    outsideWriter = dIe(boot.data.outsideWriter),
    readBack_3 = $e(boot.data);
  return {
    err: null,
    mode: outsideOrgReader ? "public" : boot.data.perm?.mode ?? boot.data.mode,
    shared: boot.data.shared,
    role: it(d, outsideOrgReader),
    outsideOrgReader: outsideOrgReader,
    cowritten: boot.data.cowritten === !0,
    ...(outsideWriter !== void 0 && {
      outsideWriter: outsideWriter
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
  let n = cfr(e.readback);
  if (n === void 0) return;
  let r = e.typeInstance || ait(e.type) !== void 0,
    typeLock = n.typeLock;
  if (r && typeLock === void 0) return;
  if (typeLock?.latest !== void 0 && typeLock.latest !== typeLock.current) return;
  return n;
}
function BRt(e, n) {
  if (n === void 0) return;
  let r = ee().shareStatus.probeBoots.get(e);
  return r !== void 0 && r.toolUseId === n && Date.now() - r.issuedAt <= rt && !S5t(e, r.boot.ver).behind ? $e(r.boot.data) : void 0;
}
var Ce = qf + $Fe + Je + 65536,
  Wbe = mD + $Fe + 1,
  qe = {
    relayed: !1,
    why: "the session gateway declined an artifact read a few minutes ago, so this read did not retry it",
    code: "declined"
  },
  jt = 5000,
  zt = 1000;
function P4e() {
  return {
    remaining: 1
  };
}
function k5t(e) {
  return `the session gateway could not serve this read just now (HTTP ${e}, after one retry); this is transient \u2014 retry shortly`;
}
async function E5t(e, n, r) {
  let s = () => Gt.get(b1s(e, n), {
      host: "ccr-gateway",
      auth: "session-jwt",
      headers: S1s(r.token),
      timeout: r.timeout,
      responseType: "arraybuffer",
      maxRedirects: 0,
      maxContentLength: r.maxContentLength,
      validateStatus: () => !0,
      signal: r.signal
    }),
    i = await s();
  if (!i.ok || !zY(i.status) || r.retryBudget.remaining < 1) return i;
  r.retryBudget.remaining--;
  let l = i.response.headers?.["retry-after"],
    d = Math.min(zg(typeof l === "string" ? l : void 0) ?? zt, jt);
  return t(`[artifact] mount answered HTTP ${i.status}; retrying once in ${d}ms slug=${e}`), await Y(d, r.signal, {
    abortError: () => new Ke()
  }), s();
}
function T5t(e) {
  return e.contentVia === "frame" && !a.CLAUDE_CODE_REMOTE;
}
var Jt = "x-frame-content-route",
  Xt = 3,
  qt = 1e4;
async function C5t(e, n, r) {
  let s = `/api/frame/content/${encodeURIComponent(e)}${n}`,
    i = Date.now() + r.timeout,
    l = !1,
    d = 0;
  for (;;) {
    let y;
    try {
      y = await Oc.get(s, {
        headers: {
          ...lu(),
          "x-frame-asset-token": r.token
        },
        credentials: r.credentials,
        recoverOAuth401: !0,
        responseType: "arraybuffer",
        timeout: Math.max(i - Date.now(), 1),
        maxContentLength: r.maxContentLength,
        signal: r.signal
      });
    } catch (error) {
      if (Ua(error) || error instanceof Ke || l || !Hte(error) || Date.now() >= i) throw error;
      l = !0;
      continue;
    }
    if (!y.ok) return {
      kind: "declined"
    };
    let headers = y.response.headers;
    if ((y.status === 429 || y.status === 503) && d < Xt) {
      let v = headers?.["retry-after"],
        P = Math.min(zg(typeof v === "string" ? v : void 0) ?? 500 * 2 ** d, qt);
      if (Date.now() + P + 1000 < i) {
        d++, await Y(P, r.signal, {
          abortError: () => new Ke()
        });
        continue;
      }
    }
    if (headers?.[Jt] !== "served") return {
      kind: "declined"
    };
    return {
      kind: "answer",
      status: y.status,
      headers: headers,
      data: y.data
    };
  }
}
function O4e(e) {
  let n = e;
  return n?.["x-frame-asset-content-type"] ?? n?.["content-type"];
}
async function Zt(e, n) {
  let retryBudget = P4e(),
    s = d => E5t(e.slug, d, {
      token: e.token,
      timeout: 30000,
      maxContentLength: e.fileRead ? Wbe : Ce,
      signal: e.signal,
      retryBudget: retryBudget
    });
  if (e.source !== void 0 && !e.source.fellBack) {
    let d;
    try {
      d = await s(e.source.path);
    } catch (error) {
      if (Ua(error) || error instanceof Ke) throw error;
    }
    if (d?.ok && d.status === 200) return Qoe(uA), {
      relayed: !0,
      result: n(Buffer.from(d.data ?? new ArrayBuffer(0)), O4e(d.response.headers), !0)
    };
    e.source.fellBack = d?.ok ? d.status : 0, t(`[artifact] stored-source read via the gateway fell back (${e.source.fellBack}) slug=${e.slug}`);
  }
  let i = (why, code, status) => {
      if (status === 404 && !e.fileRead && !Tfr(uA) && (Q7() || !B4e(uA))) Z7(uA);
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
    if (Ua(error) || error instanceof Ke) throw error;
    return AAe(), i("the gateway request failed in transport", "request_error");
  }
  if (!l.ok) return l.reason === "no-auth" ? i(rXe(), "no_auth") : i(`the gateway request was skipped (${l.reason})`, "client_policy");
  if (mit(l.status)) return i("artifact reads through the session gateway are not enabled for this session", "not_served", l.status);
  if (l.status === 404 && e.fileRead) return m(e.feature, "asset_file_not_found", {
    relay: !0
  }), {
    relayed: !0,
    result: {
      err: "no file is published at that path in the served version \u2014 or artifact reads through the session gateway are not enabled for this session",
      status: 404,
      ...(Tfr(uA) && uFt(l.response.headers, ste(l.response.headers, l.data, y => Zst(y, e.token))) && {
        missingFile: !0
      })
    }
  };
  if (l.status === 404) return i("artifact reads through the session gateway are not enabled for this session, or the artifact service no longer serves this version", "not_served", 404);
  if (fit(l.status, l.data)) return i(pit, "network_off", 403);
  if (zY(l.status)) return i(`temporarily unable: HTTP ${l.status} after one retry, so a later read may succeed`, "unavailable", l.status);
  if (l.status < 200 || l.status >= 300) return AAe(l.status), i(`the gateway refused the relay with HTTP ${l.status}`, "http", l.status);
  return Qoe(uA), {
    relayed: !0,
    result: n(Buffer.from(l.data ?? new ArrayBuffer(0)), O4e(l.response.headers), !1)
  };
}
function Qt(e) {
  if (e === void 0) return "";
  if (!mc(e) || Buffer.byteLength(e, "utf8") > 512) return;
  let n = e.split("/");
  for (let r of n) if (r === "" || r === "." || r === ".." || /[\\%\x00-\x1f\x7f]/.test(r)) return;
  return n.map(encodeURIComponent).join("/");
}
function Kpr(e) {
  return e.servedAudienceVersion === !0 || e.audience === "owner" || e.audienceView === "live" || e.audienceView === "pinned-current";
}
var en = "_src";
function ioo(e) {
  return e.assetToken !== void 0 && (e.data.mode !== "external" || e.data.perm?.role === "writer");
}
function aoo(e) {
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
function loo(e) {
  return e !== "own" && e !== "same";
}
function doo(e, n) {
  return `/_f/${e}/${en}/${n === "" ? "index.html" : n}`;
}
var timeout_2 = 30000;
function R5t(e) {
  let host = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    r = void 0;
  return {
    host: host,
    base: `https://${host}`
  };
}
function at(e) {
  return e === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
}
function A5t(e) {
  let n = at(e);
  return fF() ? bfr(n) : fr() ? `To allow direct artifact reads here, add ${n} to the environment's allowed domains: environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access.` : a.CLAUDE_CODE_REMOTE ? `To allow artifact reads here, add ${n} to the network allowlist of the environment this remote session runs in.` : `To allow artifact reads here, add ${n} to the network allowlist this session runs behind \u2014 the sandbox's allowed domains, or the Claude desktop app's network settings (Settings \u2192 Capabilities; a workspace admin can add it on Team/Enterprise).`;
}
function PR(e, n, r, s = "artifact_webfetch_read", i = "probe", l, d, y = !1) {
  return Me(e, n, s, e.file, r, i, l, d, y);
}
async function Qst(e, n, r, s, i = "artifact_webfetch_read", l) {
  let d = eq(n);
  if ("errMsg" in d) return m(i, "invalid_path"), {
    err: `artifact read failed: ${d.errMsg}`
  };
  return Me(e, r, i, d.key, s, "probe", void 0, l);
}
function Eds(e, n, r, s, i) {
  return Me(e, r, i, void 0, s, "probe", void 0, void 0, !1, n);
}
async function Me(e, signal_3, feature, s, credentials_6, kind_4, d, probeToolUseId_2, readBack_4 = !1, pastVer_3) {
  let P = Qt(s);
  if (P === void 0) return m(feature, "invalid_file_path"), {
    err: "artifact file path is not a clean relative path"
  };
  let S = await XA(e, feature, signal_3, {
    kind: kind_4,
    readBack: readBack_4,
    pastVer: pastVer_3,
    credentials: credentials_6,
    probeToolUseId: probeToolUseId_2
  });
  if (S.err !== null) return S;
  let {
    ver: ver_4,
    assetToken: assetToken_2
  } = S;
  if (s !== void 0 && assetToken_2 === void 0) return m(feature, "public_file"), {
    err: "the files of a public artifact read from outside its organization are not readable this way",
    status: 403,
    publicFile: !0
  };
  if (assetToken_2 === void 0 && d?.() !== !0) return p(feature, Mae), {
    err: "this is a public artifact from outside your organization; its page is fetched only on a read the user approved, and this call carries no such approval \u2014 nothing was fetched",
    status: 403,
    publicUnasked: !0
  };
  let servedPath = `/_f/${ver_4}/${P}`,
    source = ioo(S) ? {
      path: doo(ver_4, P)
    } : void 0,
    R = h => {
      let w = {
        ...(h && {
          source: !0
        }),
        ...(!h && source?.fellBack !== void 0 && {
          source_fallback_status: source.fellBack
        }),
        ...(S.reused && {
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
    } = S.data,
    A = S.data.artifactKind === BT || kt(e.slug)?.artifactKind === BT,
    j = assetToken_2 === void 0 ? "public" : perm_2?.mode,
    H = aoo(S),
    role = perm_2?.role === "owner" ? "owner" : perm_2?.role === "writer" ? "writer" : "reader",
    owned = x3({
      role: Dmt(it(perm_2?.role, assetToken_2 === void 0))
    }),
    de = perm_2?.assignableReadModes,
    shareMenu = role === "owner" && Array.isArray(de) && de.every(item => item === "owner" || Xe.some(w => w === item)) ? {
      modes: Xe.filter(item => de.includes(item) && !(A && item === "public")),
      ...(typeof perm_2?.externalSharingEnabled === "boolean" && {
        externalSharing: perm_2.externalSharingEnabled
      }),
      ...(typeof perm_2?.externalInvitesEnabled === "boolean" && {
        externalInvites: perm_2.externalInvitesEnabled
      })
    } : void 0,
    origin = ze(S.data.origin_metadata),
    readBack_5 = $e(S.data),
    manifestPaths = Nt(S.data.files),
    storeDocuments = Ft(S.data.dbUsage),
    contentStore = typeof S.data.contentStore === "string" && It.test(S.data.contentStore) ? S.data.contentStore : void 0,
    re = (raw, w, O, q = () => g(feature, R(O))) => {
      q();
      let contentType_2 = s === void 0 ? "text/html" : typeof w === "string" ? nt(w, ";").trim().toLowerCase() : "",
        z = raw.toString("utf-8"),
        html = contentType_2 === "text/html" ? Ye(z) : z,
        ge = dIe(S.data.outsideWriter),
        outsideWriter_2 = kIr(ge, kt(e.slug)?.outsideWriter);
      return {
        err: null,
        html: html,
        contentType: contentType_2,
        raw: raw,
        role: role,
        ...(O && {
          source: !0
        }),
        cowritten: cowritten === !0 || A || kt(e.slug)?.cowritten === !0,
        publicRead: assetToken_2 === void 0,
        ...(soo(perm_2?.role) && {
          servedAudienceVersion: !0
        }),
        ...(owned !== void 0 && {
          owned: owned
        }),
        sameChannel: perm_2?.sameChannel === !0 && role === "writer",
        ...(H === "external" && {
          external: !0
        }),
        ...(loo(H) && {
          offOrgRamp: !0
        }),
        typeLocked: Cke(e.slug, S.data.type),
        ...((S.data.authoredByOthers === !0 || kt(e.slug)?.authoredByOthers === !0) && {
          authoredByOthers: !0
        }),
        ...(tje(role === "owner" && assetToken_2 !== void 0, ge, outsideWriter_2) && {
          outsideOrg: !0
        }),
        ...(outsideWriter_2 !== void 0 && {
          outsideWriter: outsideWriter_2
        }),
        ...(shareMenu !== void 0 && {
          shareMenu: shareMenu
        }),
        ...(j !== void 0 && (() => {
          let V = Rke(j, S.data.shared),
            ut = fue(perm_2?.role),
            {
              live: live_2,
              shared: shared
            } = S.data,
            ct = typeof live_2 === "string" && uK.test(live_2),
            Te = typeof shared === "string" && uK.test(shared) ? shared : void 0,
            ft = ct && (shared === void 0 || shared === "") || Te !== void 0;
          return {
            audience: V.mode,
            ...(ut && ft && V.mode !== "owner" && {
              audienceView: Te === void 0 ? "live" : Te === ver_4 ? "pinned-current" : "pinned-earlier"
            })
          };
        })()),
        bytes: contentType_2 === "text/html" ? Buffer.byteLength(html, "utf8") : raw.length,
        title: typeof title === "string" ? title : "",
        ...(favicon !== void 0 && {
          favicon: favicon
        }),
        ver: ver_4,
        ...(typeof S.data.fileCount === "number" && Number.isSafeInteger(S.data.fileCount) && S.data.fileCount > 0 && {
          fileCount: S.data.fileCount
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
  if (A && s === void 0 && pastVer_3 === void 0) {
    let h = await ee().liveReplicas.renderLevel?.(e.slug, rte, S.data.headSeq, signal_3);
    if (h !== void 0) {
      t(`[artifact] read served from the local replica at seq ${h.head} slug=${e.slug}`);
      let w = re(Buffer.from(h.html, "utf8"), "text/html", !1);
      return w.err === null ? {
        ...w,
        localReplica: {
          head: h.head
        }
      } : w;
    }
  }
  let X = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    ue = A5t(e.env),
    ce = (h, w) => {
      if (h.code === "unavailable" && h.status !== void 0) return m(feature, "asset_relay_unavailable", {
        relay_status: h.status
      }), {
        err: `${k5t(h.status)}. Your access to the artifact itself is fine (the permission check passed); this environment cannot reach ${X} directly, so its reads go through the gateway.`,
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
        err: `this environment's network allowlist blocks ${X}, and the session gateway could not serve the read either (${h.why}); your access to the artifact itself is fine (the permission check passed). ${ue}`,
        status: 403,
        ...(w && {
          deterministic: "egress-blocked"
        })
      };
    },
    L = async token_2 => {
      let w = C => C5t(e.slug, C, {
          token: token_2,
          timeout: timeout_2,
          maxContentLength: s === void 0 ? Ce : Wbe,
          signal: signal_3,
          credentials: credentials_6
        }),
        O;
      try {
        if (source !== void 0 && source.fellBack === void 0) {
          let C = await w(source.path).catch(z => {
            if (Ua(z) || z instanceof Ke) throw z;
            return {
              kind: "answer",
              status: 0,
              headers: void 0,
              data: void 0
            };
          });
          if (C.kind === "answer" && C.status === 200) return re(Buffer.from(C.data ?? new ArrayBuffer(0)), O4e(C.headers), !0, () => g(feature, {
            ...R(!0),
            frame_content: !0
          }));
          if (C.kind === "answer") source.fellBack = C.status;
        }
        O = await w(servedPath);
      } catch (error) {
        if (Ua(error) || error instanceof Ke) throw error;
        m(feature, "asset_request_error", {
          frame_content: !0
        });
        let z = Hte(error),
          oe = Rc(error) && /^[A-Z][A-Z0-9_]{1,48}$/.test(error.code ?? "") ? ` ${error.code}` : "";
        return {
          err: `artifact content fetch failed (${z ? `network error${oe} reaching the artifact service` : "read failed"})`,
          ...(z && {
            transient: !0
          })
        };
      }
      if (O.kind === "declined") {
        if (source !== void 0) source.fellBack = void 0;
        return;
      }
      if (O.status >= 200 && O.status < 300) return re(Buffer.from(O.data ?? new ArrayBuffer(0)), O4e(O.headers), !1, () => g(feature, {
        ...R(!1),
        frame_content: !0
      }));
      let q = ste(O.headers, O.data, C => Zst(C, token_2));
      if (O.status === 404 && P !== "" && uFt(O.headers, q)) return p(feature, "file_not_in_manifest"), {
        err: "this version of the artifact has no file at that path",
        status: 404,
        missingFile: !0
      };
      return m(feature, "asset_failed", {
        frame_content: !0
      }), {
        err: `artifact content fetch failed (${Ze(O.status, O.headers, q)})`,
        status: O.status,
        respondent: !0
      };
    },
    fe = (token_3, w) => Zt({
      slug: e.slug,
      servedPath: servedPath,
      fileRead: s !== void 0,
      feature: feature,
      token: token_3,
      signal: signal_3,
      ...(source !== void 0 && {
        source: source
      })
    }, (O, q, C) => re(O, q, C, () => p(feature, w, R(C))));
  if (assetToken_2 !== void 0 && T5t(S.data)) {
    let h = await L(assetToken_2);
    if (h !== void 0) return h;
  }
  let ae;
  if (assetToken_2 !== void 0 && ee().contentHostEgressDenied.has(e.env) && J7() && !eU(uA)) {
    let h = await fe(assetToken_2, "asset_egress_relayed");
    if (h.relayed) return h.result;
    ae = h;
  }
  let Pe = void 0,
    Se = Pe ?? `https://${X}`,
    dt = assetToken_2 === void 0 ? `${Se}${servedPath}` : `${Se}${servedPath}?__frame_t=${encodeURIComponent(assetToken_2)}`,
    we = async h => {
      ee().contentHostEgressDenied.add(e.env);
      let w = J7();
      if (assetToken_2 !== void 0 && w) {
        if (ae !== void 0) return ce(ae, h);
        if (eU(uA)) return ce(qe, h);
        let O = await fe(assetToken_2, "asset_egress_relayed");
        return O.relayed ? O.result : ce(O, h);
      }
      return m(feature, "asset_egress_blocked", {
        ...(!h && {
          connect: !0
        })
      }), {
        err: assetToken_2 === void 0 && w ? `this environment's network allowlist blocks ${X}, and public (tokenless) artifacts are not served through the session gateway, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}` : `this environment's network allowlist blocks ${X}, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}`,
        status: 403,
        ...(h && {
          deterministic: "egress-blocked"
        })
      };
    },
    Be = h => sl.get(h, {
      signal: signal_3,
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxRedirects: 0,
      maxContentLength: s === void 0 ? Ce : Wbe,
      validateStatus: () => !0,
      ...(Pe && {
        headers: {
          Host: `${e.slug}.frame.localhost`
        }
      })
    });
  if (source !== void 0 && assetToken_2 !== void 0 && source.fellBack === void 0 && !ee().contentHostEgressDenied.has(e.env)) {
    let h;
    try {
      h = await Be(`${Se}${source.path}?__frame_t=${encodeURIComponent(assetToken_2)}`);
    } catch (error) {
      if (Ua(error)) throw error;
      if (Mke(error)) return we(!1);
    }
    if (h !== void 0 && YU(h.status, h.headers)) return we(!0);
    if (h !== void 0 && h.status === 200) return re(Buffer.from(h.data), h.headers?.["content-type"], !0);
    source.fellBack = h?.status ?? 0, t(`[artifact] stored-source read fell back (${source.fellBack}) slug=${e.slug}`);
  }
  let D;
  try {
    D = await Be(dt);
  } catch (error) {
    if (Ua(error)) throw error;
    if (Mke(error)) return we(!1);
    let w = e0(error),
      O = w === void 0 ? void 0 : qmt(w.headers) ?? ite(w.headers),
      q = Hte(error),
      C = Rc(error) && /^[A-Z][A-Z0-9_]{1,48}$/.test(error.code ?? "") ? ` ${error.code}` : "",
      z = w !== void 0 ? `proxy refused the connection: ${x4(w.connectStatus)}${O === void 0 ? "" : `, ${O}`}` : q ? `network error${C}: could not connect to ${X} on port 443 \u2014 the machine running Claude Code needs outbound HTTPS to ${at(e.env)} when the Artifact tool is enabled` : "read failed",
      oe = V => V === void 0 ? "" : `, and the session gateway could not serve the read either (${V.why})`,
      ge = V => V !== void 0 && {
        relay: c(V.code),
        ...(V.status !== void 0 && {
          relay_status: V.status
        })
      };
    if (w !== void 0 && w.connectStatus === 407) return m(feature, "asset_proxy_refused", {
      status: w.connectStatus,
      ...ge(ae)
    }), {
      err: `artifact content fetch failed (${z})${oe(ae)}`,
      status: w.connectStatus,
      ...(O !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${x4(w.connectStatus)})${oe(ae)}`
      })
    };
    let Z = ae;
    if (assetToken_2 !== void 0 && Z === void 0 && q && J7()) if (eU(uA)) Z = qe;else {
      let V = await fe(assetToken_2, "asset_unreachable_relayed");
      if (V.relayed) return V.result;
      Z = V;
    }
    return m(feature, "asset_request_error", {
      ...(w !== void 0 && {
        status: w.connectStatus
      }),
      ...ge(Z)
    }), {
      err: `artifact content fetch failed (${z})${oe(Z)}`,
      ...(q && w === void 0 && {
        transient: !0
      }),
      ...(w !== void 0 && w.connectStatus !== 0 && {
        status: w.connectStatus
      }),
      ...(w !== void 0 && O !== void 0 && {
        respondent: !0,
        safeErr: `artifact content fetch failed (proxy refused the connection: ${x4(w.connectStatus)})${oe(Z)}`
      })
    };
  }
  if (YU(D.status, D.headers)) return we(!0);
  if (ee().contentHostEgressDenied.delete(e.env), D.status < 200 || D.status >= 300) {
    let h = ste(D.headers, D.data, O => Zst(O, assetToken_2));
    if (D.status === 403 && assetToken_2 === void 0 && lIe(D.headers, h)) return m(feature, "public_asset_forbidden"), {
      err: "artifact is not publicly readable at this version",
      status: 403
    };
    if (D.status === 404 && P !== "" && assetToken_2 !== void 0 && uFt(D.headers, h)) return p(feature, "file_not_in_manifest"), {
      err: "this version of the artifact has no file at that path",
      status: 404,
      missingFile: !0
    };
    let proxyDeny = xPo(D.status, h);
    return m(feature, proxyDeny ?? "asset_failed"), {
      err: `artifact content fetch failed (${Ze(D.status, D.headers, h)})`,
      status: D.status,
      respondent: !0,
      ...(proxyDeny !== void 0 && {
        safeErr: Vmt[proxyDeny],
        proxyDeny: proxyDeny
      })
    };
  }
  return re(Buffer.from(D.data), D.headers?.["content-type"], !1);
}
function Ze(e, n, r) {
  let s = [`HTTP ${e}`],
    i = ite(n);
  if (i === void 0 && r.reason !== void 0) s.push(`response body: "${Rl(r.reason.replaceAll('"', "'"))}"`);else if (i !== void 0) s.push(`the environment's egress proxy reported: ${i}`);else if (r.proxyError !== void 0) s.push(`x-proxy-error header: "${Rl(r.proxyError.replaceAll('"', "'"))}"`);
  if (r.requestId !== void 0) s.push(`x-request-id: ${r.requestId}`);
  return s.join("; ");
}
function GY(e) {
  return e.respondent ? e.safeErr ?? `artifact content fetch failed (HTTP ${e.status ?? "error"})` : e.err;
}
function Zst(e, n) {
  let r = e.replace(/(?:_|%(?:25)*5f){2}frame(?:_|%(?:25)*5f)t(?:=|%(?:25)*3d)["']?[^\s&"'<>]*/gi, "__frame_t=[redacted]");
  if (n !== void 0 && n !== "") {
    r = et(r, n, "g");
    let s = encodeURIComponent(n);
    if (s !== n) r = et(r, s, "gi");
  }
  return r;
}
var ve = 16,
  Qe = /[A-Za-z0-9._~%-]/;
function et(e, n, r) {
  if (n.length <= ve) return e.replaceAll(n, "[redacted]");
  let s = new Set();
  for (let y = 0; y + ve <= n.length; y++) s.add(La(n.slice(y, y + ve)));
  let regExp_2 = new RegExp(`(?:${[...s].join("|")})${Qe.source}*`, r),
    l = "",
    d = 0;
  for (let y of e.matchAll(regExp_2)) {
    let index = y.index;
    while (index > d && Qe.test(e.charAt(index - 1))) index--;
    l += `${e.slice(d, index)}[redacted]`, d = y.index + y[0].length;
  }
  return l + e.slice(d);
}
function Tds(slug_5, html_2) {
  let r = Object.freeze({
    slug: slug_5,
    html: html_2
  });
  return ee().mintedStoredPageProbes.add(r), r;
}
function Cds(e) {
  return typeof e === "object" && e !== null && ee().mintedStoredPageProbes.has(e);
}
export { Yro, Upr, Iz, k4e, $P, kE, qI, xIn, qoe, PIn, Bpr, eq, lds, dds, E4e, Xro, T4e, C4e, Jro, U8, Qro, Zro, cds, URt, eoo, S5t, uds, pds, OIn, fds, w5t, jpr, SS, mds, too, Xst, gds, hds, noo, roo, ooo, q7, IIn, Wpr, DFe, MIn, yds, _ds, zpr, DIn, Gpr, zF, LIn, Vpr, EE, Koe, R4e, Mz, A4e, x4e, err_2 as v5t, bds, Sds, wds, timeout as qpr, NIn, XA, vds, zY, kds, fue, soo, Jst, BRt, Wbe, P4e, k5t, E5t, T5t, C5t, O4e, Kpr, ioo, aoo, loo, doo, timeout_2 as Ypr, R5t, A5t, PR, Qst, Eds, GY, Zst, Tds, Cds };