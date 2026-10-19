// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ei } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { s, n, Go } from "B:/~BUN/root/chunk-damrp3r8.js";
import { ze } from "B:/~BUN/root/chunk-yqm8ptb8.js";
import { vP } from "B:/~BUN/root/chunk-z7dx70bj.js";
import { oyr } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { jp } from "B:/~BUN/root/chunk-9pv2t2x4.js";
import { VTn as uiTableKey, R9r, cNe } from "B:/~BUN/root/chunk-r3x06dkm.js";
import { UA } from "B:/~BUN/root/chunk-fckdfecy.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { jw } from "B:/~BUN/root/chunk-tmxfgevx.js";
import { qTn } from "B:/~BUN/root/chunk-78kr43tp.js";
import { hNe } from "B:/~BUN/root/chunk-27fak1kn.js";
import { aN } from "B:/~BUN/root/chunk-gvcmagy5.js";
import { B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { o, T, u, $e } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { a0 } from "B:/~BUN/root/chunk-eya7pdzx.js";
B();
function we(t) {
  let [Ge, Qe] = t;
  return `${Ge}: ${Qe}`;
}
function Se(t) {
  let [Ve] = t;
  return ne(Ve);
}
var _ = 1e4;
function Her(t) {
  let i = t.at(-1);
  if (!i?.data) return e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  let {
      progress: progress,
      total: total
    } = i.data,
    children = jp(i.data.progressMessage);
  if (progress === void 0) return e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  if (total !== void 0 && total > 0) {
    let ratio = Math.min(1, Math.max(0, progress / total)),
      m = Math.round(ratio * 100);
    return e(ze, {
      children: r(s, {
        flexDirection: "column",
        children: [children && e(n, {
          dimColor: !0,
          children: children
        }), r(s, {
          flexDirection: "row",
          gap: 1,
          children: [e(UA, {
            ratio: ratio,
            width: 20
          }), r(n, {
            dimColor: !0,
            children: [m, "%"]
          })]
        })]
      })
    });
  }
  return e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: children ?? `Processing\u2026 ${progress}`
    })
  });
}
function Zbn(t, i, {
  verbose: verbose,
  input: input
}) {
  let p = t;
  if (!verbose) {
    let c = O(p, input);
    if (c !== null) return e(ze, {
      height: 1,
      children: r(n, {
        children: ["Sent a message to", " ", e(Go, {
          children: jw(c.url, c.channel)
        })]
      })
    });
  }
  return h(p, verbose);
}
function h(content, verbose_2) {
  let l = hNe(content),
    children_3 = l > _ ? `${te.warning} Large MCP response (~${ei(l)} tokens), this can fill up context quickly` : null,
    c;
  if (Array.isArray(content)) {
    let children_2 = content.map((item, index) => {
      if (item.type === "image") return e(s, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%",
        children: e(ze, {
          height: 1,
          children: e(n, {
            children: "[Image]"
          })
        })
      }, index);
      return e(P, {
        item: item,
        verbose: verbose_2
      }, index);
    });
    c = e(s, {
      flexDirection: "column",
      width: "100%",
      children: children_2
    });
  } else if (!content) c = e(s, {
    justifyContent: "space-between",
    overflowX: "hidden",
    width: "100%",
    children: e(ze, {
      height: 1,
      children: e(n, {
        dimColor: !0,
        children: "(No content)"
      })
    })
  });else c = e(vP, {
    content: content,
    verbose: verbose_2
  });
  if (children_3) return r(s, {
    flexDirection: "column",
    children: [e(ze, {
      height: 1,
      children: e(n, {
        color: "warning",
        children: children_3
      })
    }), c]
  });
  return c;
}
function P(t) {
  let p = w(3),
    {
      item: item_2,
      verbose: verbose_3
    } = t,
    content_2 = item_2.type === "text" && "text" in item_2 && item_2.text !== null && item_2.text !== void 0 ? String(item_2.text) : "",
    c;
  if (p[0] !== content_2 || p[1] !== verbose_3) c = e(vP, {
    content: content_2,
    verbose: verbose_3
  }), p[0] = content_2, p[1] = verbose_3, p[2] = c;else c = p[2];
  return c;
}
function v(t, {
  maxChars: maxChars,
  maxKeys: maxKeys
}) {
  let a = t.trim();
  if (a.length === 0 || a.length > maxChars || a[0] !== "{") return null;
  let p;
  try {
    p = J(a);
  } catch {
    return null;
  }
  if (p === null || typeof p !== "object" || Array.isArray(p)) return null;
  let c = Object.entries(p);
  if (c.length === 0 || c.length > maxKeys) return null;
  return c;
}
var N = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;
function O(t, i) {
  let l = t;
  if (Array.isArray(t)) {
    let x = t.find(item => item.type === "text");
    l = x && "text" in x ? x.text : void 0;
  }
  if (typeof l !== "string" || !l.includes('"message_link"')) return null;
  let url = v(l, {
    maxChars: 2000,
    maxKeys: 6
  })?.find(([x]) => x === "message_link")?.[1];
  if (typeof url !== "string") return null;
  let c = N.exec(url);
  if (!c) return null;
  let m = i,
    d = m?.channel_id ?? m?.channel ?? c[1],
    g = (typeof d === "string" ? qTn(d) : "") || "slack";
  return {
    channel: g.startsWith("#") ? g : `#${g}`,
    url: url
  };
}
function MGt(t, i) {
  let l = i?.columns;
  if (typeof t === "string") return aN(t, l);
  if (Array.isArray(t)) return t.some(item => item.type === "text" && aN(item.text, l));
  return !1;
}
var A = 256;
function Dre(t, i) {
  let l = oyr(t);
  return l ? E.of(i)(t, l.serverName, l.toolName) : void 0;
}
var D = f(() => $e([R9r(), u({
    content: $e([o(), T(u({
      type: o()
    }).passthrough())])
  }).transform(t => t.content)])),
  Mei = {
    isResultTruncated(t, i) {
      let l = j(t);
      return MGt(l, i) || MGt(b(l), i);
    },
    renderToolResultMessage(t, i, {
      verbose: verbose_4
    }) {
      return h(b(t), verbose_4);
    }
  },
  E = new z(() => a0(H, t => t, A));
function H(name, serverName, toolName) {
  let a = () => {
    throw Error("Display-only MCP tool invoked \u2014 it exists only for transcript rendering");
  };
  return {
    ...cNe,
    name: name,
    mcpInfo: {
      serverName: serverName,
      toolName: toolName
    },
    isEnabled: () => !1,
    outputSchema: D(),
    uiTableKey: uiTableKey,
    userFacingName: () => `${serverName} - ${toolName} (MCP)`,
    description: async () => a(),
    prompt: async () => a(),
    call: async () => a(),
    checkPermissions: async () => a()
  };
}
function j(t) {
  let i = typeof t === "object" && t !== null && !Array.isArray(t) && "content" in t ? t.content : t;
  if (typeof i === "string") return i;
  return Array.isArray(i) && i.every(item => typeof item === "object" && item !== null) ? i : void 0;
}
var F = /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g,
  U = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g,
  I = /\\u001b/gi,
  L = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;
function M(t) {
  let i = "",
    l = () => i ? ` <${i}>` : "";
  return (t.replace(F, (p, c) => {
    if (c === void 0) return "";
    let m = l();
    return i = c, m;
  }) + l()).replace(U, "").replace(I, "\\u241b").replace(L, "\\u2426");
}
function b(t) {
  if (typeof t === "string") return M(t);
  return t?.map(i => i.type === "text" && "text" in i ? {
    type: "text",
    text: M(String(i.text ?? ""))
  } : i);
}
export { Her, Zbn, MGt, Dre, Mei };