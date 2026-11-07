// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { pa } from "B:/~BUN/root/chunk-bkfncj77.js";
import { s, n, qs } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { I0 } from "B:/~BUN/root/chunk-r2775wd7.js";
import { jlr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { nu } from "B:/~BUN/root/chunk-vs3bcjd7.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { MM } from "B:/~BUN/root/chunk-5t8ewsey.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ES } from "B:/~BUN/root/chunk-09wqth96.js";
import { j3e } from "B:/~BUN/root/chunk-6ecdk6hr.js";
import { e1 } from "B:/~BUN/root/chunk-dt45jjk2.js";
import { j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function fe(o) {
  let [Re, be] = o;
  return `${Re}: ${be}`;
}
function ce(o) {
  let [ke] = o;
  return F(ke);
}
var y = 1e4;
function b3n(o) {
  let a = o.at(-1);
  if (!a?.data) return e(Ye, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  let {
      progress: progress,
      total: total
    } = a.data,
    children = nu(a.data.progressMessage);
  if (progress === void 0) return e(Ye, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  if (total !== void 0 && total > 0) {
    let ratio = Math.min(1, Math.max(0, progress / total)),
      f = Math.round(ratio * 100);
    return e(Ye, {
      children: r(s, {
        flexDirection: "column",
        children: [children && e(n, {
          dimColor: !0,
          children: children
        }), r(s, {
          flexDirection: "row",
          gap: 1,
          children: [e(MM, {
            ratio: ratio,
            width: 20
          }), r(n, {
            dimColor: !0,
            children: [f, "%"]
          })]
        })]
      })
    });
  }
  return e(Ye, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: children ?? `Processing\u2026 ${progress}`
    })
  });
}
function Svt(o, a, {
  verbose: verbose,
  input: input
}) {
  let l = o;
  if (!verbose) {
    let i = b(l, input);
    if (i !== null) return e(Ye, {
      height: 1,
      children: r(n, {
        children: ["Sent a message to", " ", e(qs, {
          children: ES(i.url, i.channel)
        })]
      })
    });
  }
  return kFo(l, verbose);
}
function kFo(content, verbose_2) {
  let t = j3e(content),
    children_3 = t > y ? `${re.warning} Large MCP response (~${pa(t)} tokens), this can fill up context quickly` : null,
    i;
  if (Array.isArray(content)) {
    let children_2 = content.map((item, index) => {
      if (item.type === "image") return e(s, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%",
        children: e(Ye, {
          height: 1,
          children: e(n, {
            children: "[Image]"
          })
        })
      }, index);
      return e(h, {
        item: item,
        verbose: verbose_2
      }, index);
    });
    i = e(s, {
      flexDirection: "column",
      width: "100%",
      children: children_2
    });
  } else if (!content) i = e(s, {
    justifyContent: "space-between",
    overflowX: "hidden",
    width: "100%",
    children: e(Ye, {
      height: 1,
      children: e(n, {
        dimColor: !0,
        children: "(No content)"
      })
    })
  });else i = e(I0, {
    content: content,
    verbose: verbose_2
  });
  if (children_3) return r(s, {
    flexDirection: "column",
    children: [e(Ye, {
      height: 1,
      children: e(n, {
        color: "warning",
        children: children_3
      })
    }), i]
  });
  return i;
}
function h(o) {
  let l = S(3),
    {
      item: item_2,
      verbose: verbose_3
    } = o,
    content_2 = item_2.type === "text" && "text" in item_2 && item_2.text !== null && item_2.text !== void 0 ? String(item_2.text) : "",
    i;
  if (l[0] !== content_2 || l[1] !== verbose_3) i = e(I0, {
    content: content_2,
    verbose: verbose_3
  }), l[0] = content_2, l[1] = verbose_3, l[2] = i;else i = l[2];
  return i;
}
function M(o, {
  maxChars: maxChars,
  maxKeys: maxKeys
}) {
  let u = o.trim();
  if (u.length === 0 || u.length > maxChars || u[0] !== "{") return null;
  let l;
  try {
    l = ee(u);
  } catch {
    return null;
  }
  if (l === null || typeof l !== "object" || Array.isArray(l)) return null;
  let i = Object.entries(l);
  if (i.length === 0 || i.length > maxKeys) return null;
  return i;
}
var R = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;
function b(o, a) {
  let t = o;
  if (Array.isArray(o)) {
    let p = o.find(item => item.type === "text");
    t = p && "text" in p ? p.text : void 0;
  }
  if (typeof t !== "string" || !t.includes('"message_link"')) return null;
  let url = M(t, {
    maxChars: 2000,
    maxKeys: 6
  })?.find(([p]) => p === "message_link")?.[1];
  if (typeof url !== "string") return null;
  let i = R.exec(url);
  if (!i) return null;
  let f = a,
    m = f?.channel_id ?? f?.channel ?? i[1],
    c = (typeof m === "string" ? jlr(m) : "") || "slack";
  return {
    channel: c.startsWith("#") ? c : `#${c}`,
    url: url
  };
}
function wvt(o, a) {
  let t = a?.columns;
  if (typeof o === "string") return e1(o, t);
  if (Array.isArray(o)) return o.some(item => item.type === "text" && e1(item.text, t));
  return !1;
}
export { b3n, Svt, kFo, wvt };