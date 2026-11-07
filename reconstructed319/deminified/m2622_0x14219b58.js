// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ci } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, Wn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { zs } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { vhn } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { rp, dtn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Dmr, fZ, yPn, Hmr } from "B:/~BUN/root/chunk-w0kge9aq.js";
import { Ap, U_ } from "B:/~BUN/root/chunk-xt7xbt1n.js";
import { ub } from "B:/~BUN/root/chunk-qxf1yra6.js";
import { $w, OWr } from "B:/~BUN/root/chunk-415ykk3s.js";
import { the, imn } from "B:/~BUN/root/chunk-czef2vkc.js";
import { ly } from "B:/~BUN/root/chunk-fvkh3y4a.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Di } from "B:/~BUN/root/chunk-bwk2g6e0.js";
import { Ho, ko, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
import { isAbsolute as Ue, resolve as He } from "path";
function je(i, o, c = 1 / 0) {
  let l = o <= 0 || !Number.isFinite(o),
    d = 0,
    f = 0;
  while (f <= i.length) {
    let m = i.indexOf(`
`, f),
      p = m === -1 ? i.substring(f) : i.substring(f, m);
    if (l) d++;else {
      let g = vhn(p);
      d += g === 0 ? 1 : Math.ceil(g / o);
    }
    if (d > c) return d;
    if (m === -1) break;
    f = m + 1;
  }
  return d;
}
function ge(i, o, c) {
  return je(i, o, c) > c;
}
var x = 10,
  L = `
`;
function _(i) {
  let o = i.split(L);
  return i.endsWith(L) ? o.length - 1 : o.length;
}
function k() {
  let i = S(1),
    o;
  if (i[0] === w) o = e(n, {
    dimColor: !0,
    children: " \u2014 previous content replaced (no diff shown)"
  }), i[0] = o;else o = i[0];
  return o;
}
function S3n(i) {
  let h = S(51),
    {
      filePath: filePath,
      content: content,
      verbose: verbose,
      replacedUndiffedContent: replacedUndiffedContent
    } = i,
    f = replacedUndiffedContent === void 0 ? !1 : replacedUndiffedContent,
    {
      columns: columns
    } = Re(),
    width = Math.max(1, columns - 12),
    g = content || "(No content)",
    children = _(content),
    b;
  if (h[0] !== g || h[1] !== width || h[2] !== verbose) b = verbose ? g : g.split(L).slice(0, x).join(L).slice(0, x * (width + 1)), h[0] = g, h[1] = width, h[2] = verbose, h[3] = b;else b = h[3];
  let code = b,
    T = OWr(verbose ? "" : code, filePath, width),
    Te;
  if (h[4] !== g) Te = g.split(L, x), h[4] = g, h[5] = Te;else Te = h[5];
  let V = Te,
    We;
  if (h[6] !== code || h[7] !== verbose) We = verbose ? [] : code.split(L), h[6] = code, h[7] = verbose, h[8] = We;else We = h[8];
  let ae = We,
    le,
    F,
    W;
  if (h[9] !== T || h[10] !== ae || h[11] !== V) {
    let D = x;
    W = 0;
    F = 0;
    le = !1;
    for (const [De, Y] of T.entries()) {
      let ce = ae[De] ?? "";
      if (D === 0) {
        break;
      }
      if (Y > D || ce !== V[De]) {
        F = F + Math.floor(ce.length * Math.min(Y, D) / Y), le = !0;
        break;
      }
      D = D - Y, W++, F = F + (ce.length + L.length);
    }
    h[9] = T, h[10] = ae, h[11] = V, h[12] = le, h[13] = F, h[14] = W;
  } else le = h[12], F = h[13], W = h[14];
  let Ie = W === children - 1 && V[W] === "",
    count = children - W - (Ie ? 1 : 0),
    hiddenChars = le ? content.length - F : void 0,
    q;
  if (h[15] !== children) q = e(n, {
    bold: !0,
    children: children
  }), h[15] = children, h[16] = q;else q = h[16];
  let z;
  if (h[17] !== children) z = P(children, "line"), h[17] = children, h[18] = z;else z = h[18];
  let children_2;
  if (h[19] !== filePath || h[20] !== verbose) children_2 = verbose ? filePath : zs(filePath), h[19] = filePath, h[20] = verbose, h[21] = children_2;else children_2 = h[21];
  let J;
  if (h[22] !== filePath || h[23] !== children_2) J = e(n, {
    bold: !0,
    children: e(ub, {
      filePath: filePath,
      children: children_2
    })
  }), h[22] = filePath, h[23] = children_2, h[24] = J;else J = h[24];
  let Q;
  if (h[25] !== f) Q = f && e(k, {}), h[25] = f, h[26] = Q;else Q = h[26];
  let Z;
  if (h[27] !== q || h[28] !== z || h[29] !== J || h[30] !== Q) Z = r(n, {
    children: ["Wrote ", q, " ", z, " to", " ", J, Q]
  }), h[27] = q, h[28] = z, h[29] = J, h[30] = Q, h[31] = Z;else Z = h[31];
  const overflowY = verbose ? void 0 : "hidden",
    maxHeight = verbose ? void 0 : x,
    width_2 = verbose ? void 0 : width;
  let children_3;
  if (h[32] !== code || h[33] !== filePath || h[34] !== width) children_3 = e($w, {
    code: code,
    filePath: filePath,
    width: width
  }), h[32] = code, h[33] = filePath, h[34] = width, h[35] = children_3;else children_3 = h[35];
  let children_4;
  if (h[36] !== width_2 || h[37] !== children_3) children_4 = e(s, {
    flexDirection: "column",
    flexShrink: 0,
    width: width_2,
    children: children_3
  }), h[36] = width_2, h[37] = children_3, h[38] = children_4;else children_4 = h[38];
  let I;
  if (h[39] !== overflowY || h[40] !== maxHeight || h[41] !== children_4) I = e(s, {
    flexDirection: "column",
    overflowY: overflowY,
    maxHeight: maxHeight,
    children: children_4
  }), h[39] = overflowY, h[40] = maxHeight, h[41] = children_4, h[42] = I;else I = h[42];
  let X;
  if (h[43] !== hiddenChars || h[44] !== count || h[45] !== verbose) X = !verbose && e(U_, {
    count: count,
    hiddenChars: hiddenChars,
    expandable: !0
  }), h[43] = hiddenChars, h[44] = count, h[45] = verbose, h[46] = X;else X = h[46];
  let Me;
  if (h[47] !== Z || h[48] !== I || h[49] !== X) Me = e(Ye, {
    children: r(s, {
      flexDirection: "column",
      children: [Z, I, X]
    })
  }), h[47] = Z, h[48] = I, h[49] = X, h[50] = Me;else Me = h[50];
  return Me;
}
function Ce({
  type: type,
  content: content_2,
  structuredPatch: structuredPatch,
  originalFile: originalFile
}) {
  return type === "update" && Array.isArray(structuredPatch) && structuredPatch.length === 0 && originalFile === null && typeof content_2 === "string" && content_2 !== "";
}
function Qma(i, {
  columns: columns_2
}) {
  let {
    type: type_2,
    content: content_3
  } = i;
  if (type_2 !== "create" && !Ce(i)) return !1;
  if (typeof content_3 !== "string") return !1;
  let d = content_3.endsWith(L) ? x + 1 : x;
  return ge(content_3, Math.max(1, columns_2 - 12), d);
}
function Zma(i, {
  verbose: verbose_2
}) {
  if (!i.file_path) return null;
  if (i.file_path.startsWith(rp())) return "";
  return e(ub, {
    filePath: i.file_path,
    children: verbose_2 ? i.file_path : zs(i.file_path)
  });
}
function eha({
  file_path: i,
  content: content_4
}, {
  style: style,
  verbose: verbose_3
}) {
  return e(Fe, {
    filePath: i,
    content: content_4,
    style: style,
    verbose: verbose_3
  });
}
function Fe(i) {
  let f = S(20),
    {
      filePath: o,
      content: content_5,
      style: style_2,
      verbose: verbose_4
    } = i,
    m;
  if (f[0] !== content_5 || f[1] !== o) m = () => ve(o, content_5), f[0] = content_5, f[1] = o, f[2] = m;else m = f[2];
  let [promise] = y(m),
    g;
  if (f[3] !== content_5) g = Wn(content_5), f[3] = content_5, f[4] = g;else g = f[4];
  let firstLine = g,
    h;
  if (f[5] !== content_5 || f[6] !== o || f[7] !== firstLine || f[8] !== verbose_4) h = e(the, {
    file_path: o,
    operation: "write",
    content: content_5,
    firstLine: firstLine,
    verbose: verbose_4
  }), f[5] = content_5, f[6] = o, f[7] = firstLine, f[8] = verbose_4, f[9] = h;else h = f[9];
  let b = h,
    children_5;
  if (f[10] !== b || f[11] !== promise || f[12] !== o || f[13] !== firstLine || f[14] !== style_2 || f[15] !== verbose_4) children_5 = e(se, {
    promise: promise,
    filePath: o,
    firstLine: firstLine,
    createFallback: b,
    style: style_2,
    verbose: verbose_4
  }), f[10] = b, f[11] = promise, f[12] = o, f[13] = firstLine, f[14] = style_2, f[15] = verbose_4, f[16] = children_5;else children_5 = f[16];
  let T;
  if (f[17] !== b || f[18] !== children_5) T = e(Ho, {
    fallback: b,
    children: children_5
  }), f[17] = b, f[18] = children_5, f[19] = T;else T = f[19];
  return T;
}
function se(i) {
  let g = S(8),
    {
      promise: promise_2,
      filePath: c,
      firstLine: firstLine_2,
      createFallback: createFallback,
      style: style_3,
      verbose: verbose_5
    } = i,
    p = ko(promise_2);
  if (p.type === "create") {
    return createFallback;
  }
  if (p.type === "error") {
    let u;
    if (g[0] === w) u = e(Ye, {
      children: e(n, {
        children: "(No changes)"
      })
    }), g[0] = u;else u = g[0];
    return u;
  }
  let u;
  if (g[1] !== p.oldContent || g[2] !== p.patch || g[3] !== c || g[4] !== firstLine_2 || g[5] !== style_3 || g[6] !== verbose_5) u = e(the, {
    file_path: c,
    operation: "update",
    patch: p.patch,
    firstLine: firstLine_2,
    fileContent: p.oldContent,
    style: style_3,
    verbose: verbose_5
  }), g[1] = p.oldContent, g[2] = p.patch, g[3] = c, g[4] = firstLine_2, g[5] = style_3, g[6] = verbose_5, g[7] = u;else u = g[7];
  return u;
}
async function ve(filePath_2, new_string) {
  try {
    let c = Ue(filePath_2) ? filePath_2 : He(pe(), filePath_2),
      l = await yPn(c);
    if (l === null) return {
      type: "create"
    };
    let d;
    try {
      d = await Hmr(l);
    } finally {
      await l.close();
    }
    if (d === null) return {
      type: "create"
    };
    return {
      type: "update",
      patch: fZ({
        filePath: filePath_2,
        fileContents: d,
        edits: [{
          old_string: d,
          new_string: new_string,
          replace_all: !1
        }]
      }),
      oldContent: d
    };
  } catch (error) {
    if (ci(error)) t(`Failed to load rejection diff for ${filePath_2}: ${error.message}`, {
      level: "error"
    });else a(error);
    return {
      type: "error"
    };
  }
}
function tha(result, {
  verbose: verbose_6,
  toolDenialKind: toolDenialKind
}) {
  if (!verbose_6 && toolDenialKind !== "permission-rule" && typeof result === "string" && Di(result, "tool_use_error")) return e(Ye, {
    children: e(n, {
      color: "error",
      children: "Error writing file"
    })
  });
  return e(ly, {
    result: result,
    verbose: verbose_6
  });
}
function nha(i, o, {
  style: style_4,
  verbose: verbose_7
}) {
  if (i.staged && i.filePath) return e(Ye, {
    children: e(n, {
      dimColor: !0,
      children: Dmr(i.stagedWording)
    })
  });
  return ke(i, o, {
    style: style_4,
    verbose: verbose_7
  });
}
function ke(i, o, {
  style: style_5,
  verbose: verbose_8,
  replacedUndiffedContent: replacedUndiffedContent_2 = !1
}) {
  let {
    filePath: filePath_3 = "",
    content: content_6,
    structuredPatch: structuredPatch_2,
    type: type_3,
    originalFile: originalFile_2
  } = i;
  if (!filePath_3) return null;
  switch (type_3) {
    case "create":
      {
        if (filePath_3.startsWith(rp()) && !verbose_8) {
          if (style_5 !== "condensed") return e(Ye, {
            children: e(n, {
              dimColor: !0,
              children: "/plan to preview"
            })
          });
        } else if (style_5 === "condensed" && !verbose_8) {
          let children_6 = _(content_6);
          return r(n, {
            children: ["Wrote ", e(n, {
              bold: !0,
              children: children_6
            }), " ", P(children_6, "line"), " to", " ", e(n, {
              bold: !0,
              children: e(ub, {
                filePath: filePath_3,
                children: zs(filePath_3)
              })
            }), replacedUndiffedContent_2 && e(k, {})]
          });
        } else if (!verbose_8 && dtn(filePath_3)) {
          let children_7 = _(content_6);
          return e(Ye, {
            children: r(n, {
              children: ["Wrote ", e(n, {
                bold: !0,
                children: children_7
              }), " ", P(children_7, "line"), replacedUndiffedContent_2 && e(k, {}), " ", e(Ap, {})]
            })
          });
        }
        return e(S3n, {
          filePath: filePath_3,
          content: content_6,
          verbose: verbose_8,
          replacedUndiffedContent: replacedUndiffedContent_2
        });
      }
    case "update":
      {
        if (Ce(i)) return ke({
          ...i,
          type: "create"
        }, o, {
          style: style_5,
          verbose: verbose_8,
          replacedUndiffedContent: !0
        });
        let h = filePath_3.startsWith(rp());
        return e(imn, {
          filePath: filePath_3,
          structuredPatch: structuredPatch_2,
          firstLine: Wn(content_6),
          fileContent: originalFile_2 ?? void 0,
          style: style_5,
          verbose: verbose_8,
          previewHint: h ? "/plan to preview" : void 0,
          collapsed: !h && dtn(filePath_3)
        });
      }
  }
}
export { S3n, Qma, Zma, eha, tha, nha };