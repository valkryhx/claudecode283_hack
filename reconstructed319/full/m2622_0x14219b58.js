// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ci
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P,
  Wn
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  zs
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  vhn
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  Ye
} from "B:/~BUN/root/chunk-4swxab5a.js";
import {
  rp,
  dtn
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Dmr,
  fZ,
  yPn,
  Hmr
} from "B:/~BUN/root/chunk-w0kge9aq.js";
import {
  Ap,
  U_
} from "B:/~BUN/root/chunk-xt7xbt1n.js";
import {
  ub
} from "B:/~BUN/root/chunk-qxf1yra6.js";
import {
  $w,
  OWr
} from "B:/~BUN/root/chunk-415ykk3s.js";
import {
  the,
  imn
} from "B:/~BUN/root/chunk-czef2vkc.js";
import {
  ly
} from "B:/~BUN/root/chunk-fvkh3y4a.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Di
} from "B:/~BUN/root/chunk-bwk2g6e0.js";
import {
  Ho,
  ko,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
import {
  isAbsolute as Ue,
  resolve as He
} from "path";

function je(i, o, c = 1 / 0) {
  let l = o <= 0 || !Number.isFinite(o),
    d = 0,
    f = 0;
  while (f <= i.length) {
    let m = i.indexOf(`
`, f),
      p = m === -1 ? i.substring(f) : i.substring(f, m);
    if (l) d++;
    else {
      let g = vhn(p);
      d += g === 0 ? 1 : Math.ceil(g / o)
    }
    if (d > c) return d;
    if (m === -1) break;
    f = m + 1
  }
  return d
}

function ge(i, o, c) {
  return je(i, o, c) > c
}
var x = 10,
  L = `
`;

function _(i) {
  let o = i.split(L);
  return i.endsWith(L) ? o.length - 1 : o.length
}

function k() {
  let i = S(1),
    o;
  if (i[0] === w) o = e(n, {
    dimColor: !0,
    children: " \u2014 previous content replaced (no diff shown)"
  }), i[0] = o;
  else o = i[0];
  return o
}

function S3n(i) {
  let h = S(51),
    {
      filePath: o,
      content: c,
      verbose: l,
      replacedUndiffedContent: d
    } = i,
    f = d === void 0 ? !1 : d,
    {
      columns: m
    } = Re(),
    p = Math.max(1, m - 12),
    g = c || "(No content)",
    u = _(c),
    b;
  if (h[0] !== g || h[1] !== p || h[2] !== l) b = l ? g : g.split(L).slice(0, x).join(L).slice(0, x * (p + 1)), h[0] = g, h[1] = p, h[2] = l, h[3] = b;
  else b = h[3];
  let v = b,
    T = OWr(l ? "" : v, o, p),
    Te;
  if (h[4] !== g) Te = g.split(L, x), h[4] = g, h[5] = Te;
  else Te = h[5];
  let V = Te,
    We;
  if (h[6] !== v || h[7] !== l) We = l ? [] : v.split(L), h[6] = v, h[7] = l, h[8] = We;
  else We = h[8];
  let ae = We,
    le, F, W;
  if (h[9] !== T || h[10] !== ae || h[11] !== V) {
    let D = x;
    W = 0;
    F = 0;
    le = !1;
    for (const [De, Y] of T.entries()) {
      let ce = ae[De] ?? "";
      if (D === 0) {
        break
      }
      if (Y > D || ce !== V[De]) {
        F = F + Math.floor(ce.length * Math.min(Y, D) / Y), le = !0;
        break
      }
      D = D - Y, W++, F = F + (ce.length + L.length)
    }
    h[9] = T, h[10] = ae, h[11] = V, h[12] = le, h[13] = F, h[14] = W
  } else le = h[12], F = h[13], W = h[14];
  let Ie = W === u - 1 && V[W] === "",
    fe = u - W - (Ie ? 1 : 0),
    de = le ? c.length - F : void 0,
    q;
  if (h[15] !== u) q = e(n, {
    bold: !0,
    children: u
  }), h[15] = u, h[16] = q;
  else q = h[16];
  let z;
  if (h[17] !== u) z = P(u, "line"), h[17] = u, h[18] = z;
  else z = h[18];
  let G;
  if (h[19] !== o || h[20] !== l) G = l ? o : zs(o), h[19] = o, h[20] = l, h[21] = G;
  else G = h[21];
  let J;
  if (h[22] !== o || h[23] !== G) J = e(n, {
    bold: !0,
    children: e(ub, {
      filePath: o,
      children: G
    })
  }), h[22] = o, h[23] = G, h[24] = J;
  else J = h[24];
  let Q;
  if (h[25] !== f) Q = f && e(k, {}), h[25] = f, h[26] = Q;
  else Q = h[26];
  let Z;
  if (h[27] !== q || h[28] !== z || h[29] !== J || h[30] !== Q) Z = r(n, {
    children: ["Wrote ", q, " ", z, " to", " ", J, Q]
  }), h[27] = q, h[28] = z, h[29] = J, h[30] = Q, h[31] = Z;
  else Z = h[31];
  const ue = l ? void 0 : "hidden",
    he = l ? void 0 : x,
    me = l ? void 0 : p;
  let A;
  if (h[32] !== v || h[33] !== o || h[34] !== p) A = e($w, {
    code: v,
    filePath: o,
    width: p
  }), h[32] = v, h[33] = o, h[34] = p, h[35] = A;
  else A = h[35];
  let O;
  if (h[36] !== me || h[37] !== A) O = e(s, {
    flexDirection: "column",
    flexShrink: 0,
    width: me,
    children: A
  }), h[36] = me, h[37] = A, h[38] = O;
  else O = h[38];
  let I;
  if (h[39] !== ue || h[40] !== he || h[41] !== O) I = e(s, {
    flexDirection: "column",
    overflowY: ue,
    maxHeight: he,
    children: O
  }), h[39] = ue, h[40] = he, h[41] = O, h[42] = I;
  else I = h[42];
  let X;
  if (h[43] !== de || h[44] !== fe || h[45] !== l) X = !l && e(U_, {
    count: fe,
    hiddenChars: de,
    expandable: !0
  }), h[43] = de, h[44] = fe, h[45] = l, h[46] = X;
  else X = h[46];
  let Me;
  if (h[47] !== Z || h[48] !== I || h[49] !== X) Me = e(Ye, {
    children: r(s, {
      flexDirection: "column",
      children: [Z, I, X]
    })
  }), h[47] = Z, h[48] = I, h[49] = X, h[50] = Me;
  else Me = h[50];
  return Me
}

function Ce({
  type: i,
  content: o,
  structuredPatch: c,
  originalFile: l
}) {
  return i === "update" && Array.isArray(c) && c.length === 0 && l === null && typeof o === "string" && o !== ""
}

function Qma(i, {
  columns: o
}) {
  let {
    type: c,
    content: l
  } = i;
  if (c !== "create" && !Ce(i)) return !1;
  if (typeof l !== "string") return !1;
  let d = l.endsWith(L) ? x + 1 : x;
  return ge(l, Math.max(1, o - 12), d)
}

function Zma(i, {
  verbose: o
}) {
  if (!i.file_path) return null;
  if (i.file_path.startsWith(rp())) return "";
  return e(ub, {
    filePath: i.file_path,
    children: o ? i.file_path : zs(i.file_path)
  })
}

function eha({
  file_path: i,
  content: o
}, {
  style: c,
  verbose: l
}) {
  return e(Fe, {
    filePath: i,
    content: o,
    style: c,
    verbose: l
  })
}

function Fe(i) {
  let f = S(20),
    {
      filePath: o,
      content: c,
      style: l,
      verbose: d
    } = i,
    m;
  if (f[0] !== c || f[1] !== o) m = () => ve(o, c), f[0] = c, f[1] = o, f[2] = m;
  else m = f[2];
  let [p] = y(m), g;
  if (f[3] !== c) g = Wn(c), f[3] = c, f[4] = g;
  else g = f[4];
  let u = g,
    h;
  if (f[5] !== c || f[6] !== o || f[7] !== u || f[8] !== d) h = e(the, {
    file_path: o,
    operation: "write",
    content: c,
    firstLine: u,
    verbose: d
  }), f[5] = c, f[6] = o, f[7] = u, f[8] = d, f[9] = h;
  else h = f[9];
  let b = h,
    v;
  if (f[10] !== b || f[11] !== p || f[12] !== o || f[13] !== u || f[14] !== l || f[15] !== d) v = e(se, {
    promise: p,
    filePath: o,
    firstLine: u,
    createFallback: b,
    style: l,
    verbose: d
  }), f[10] = b, f[11] = p, f[12] = o, f[13] = u, f[14] = l, f[15] = d, f[16] = v;
  else v = f[16];
  let T;
  if (f[17] !== b || f[18] !== v) T = e(Ho, {
    fallback: b,
    children: v
  }), f[17] = b, f[18] = v, f[19] = T;
  else T = f[19];
  return T
}

function se(i) {
  let g = S(8),
    {
      promise: o,
      filePath: c,
      firstLine: l,
      createFallback: d,
      style: f,
      verbose: m
    } = i,
    p = ko(o);
  if (p.type === "create") {
    return d
  }
  if (p.type === "error") {
    let u;
    if (g[0] === w) u = e(Ye, {
      children: e(n, {
        children: "(No changes)"
      })
    }), g[0] = u;
    else u = g[0];
    return u
  }
  let u;
  if (g[1] !== p.oldContent || g[2] !== p.patch || g[3] !== c || g[4] !== l || g[5] !== f || g[6] !== m) u = e(the, {
    file_path: c,
    operation: "update",
    patch: p.patch,
    firstLine: l,
    fileContent: p.oldContent,
    style: f,
    verbose: m
  }), g[1] = p.oldContent, g[2] = p.patch, g[3] = c, g[4] = l, g[5] = f, g[6] = m, g[7] = u;
  else u = g[7];
  return u
}
async function ve(i, o) {
  try {
    let c = Ue(i) ? i : He(pe(), i),
      l = await yPn(c);
    if (l === null) return {
      type: "create"
    };
    let d;
    try {
      d = await Hmr(l)
    } finally {
      await l.close()
    }
    if (d === null) return {
      type: "create"
    };
    return {
      type: "update",
      patch: fZ({
        filePath: i,
        fileContents: d,
        edits: [{
          old_string: d,
          new_string: o,
          replace_all: !1
        }]
      }),
      oldContent: d
    }
  } catch (c) {
    if (ci(c)) t(`Failed to load rejection diff for ${i}: ${c.message}`, {
      level: "error"
    });
    else a(c);
    return {
      type: "error"
    }
  }
}

function tha(i, {
  verbose: o,
  toolDenialKind: c
}) {
  if (!o && c !== "permission-rule" && typeof i === "string" && Di(i, "tool_use_error")) return e(Ye, {
    children: e(n, {
      color: "error",
      children: "Error writing file"
    })
  });
  return e(ly, {
    result: i,
    verbose: o
  })
}

function nha(i, o, {
  style: c,
  verbose: l
}) {
  if (i.staged && i.filePath) return e(Ye, {
    children: e(n, {
      dimColor: !0,
      children: Dmr(i.stagedWording)
    })
  });
  return ke(i, o, {
    style: c,
    verbose: l
  })
}

function ke(i, o, {
  style: c,
  verbose: l,
  replacedUndiffedContent: d = !1
}) {
  let {
    filePath: f = "",
    content: m,
    structuredPatch: p,
    type: g,
    originalFile: u
  } = i;
  if (!f) return null;
  switch (g) {
    case "create": {
      if (f.startsWith(rp()) && !l) {
        if (c !== "condensed") return e(Ye, {
          children: e(n, {
            dimColor: !0,
            children: "/plan to preview"
          })
        })
      } else if (c === "condensed" && !l) {
        let b = _(m);
        return r(n, {
          children: ["Wrote ", e(n, {
            bold: !0,
            children: b
          }), " ", P(b, "line"), " to", " ", e(n, {
            bold: !0,
            children: e(ub, {
              filePath: f,
              children: zs(f)
            })
          }), d && e(k, {})]
        })
      } else if (!l && dtn(f)) {
        let b = _(m);
        return e(Ye, {
          children: r(n, {
            children: ["Wrote ", e(n, {
              bold: !0,
              children: b
            }), " ", P(b, "line"), d && e(k, {}), " ", e(Ap, {})]
          })
        })
      }
      return e(S3n, {
        filePath: f,
        content: m,
        verbose: l,
        replacedUndiffedContent: d
      })
    }
    case "update": {
      if (Ce(i)) return ke({
        ...i,
        type: "create"
      }, o, {
        style: c,
        verbose: l,
        replacedUndiffedContent: !0
      });
      let h = f.startsWith(rp());
      return e(imn, {
        filePath: f,
        structuredPatch: p,
        firstLine: Wn(m),
        fileContent: u ?? void 0,
        style: c,
        verbose: l,
        previewHint: h ? "/plan to preview" : void 0,
        collapsed: !h && dtn(f)
      })
    }
  }
}
export {
  S3n,
  Qma,
  Zma,
  eha,
  tha,
  nha
};
