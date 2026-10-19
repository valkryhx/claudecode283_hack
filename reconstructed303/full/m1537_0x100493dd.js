// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  J
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  ei
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  s,
  n,
  Go
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  ze
} from "B:/~BUN/root/chunk-yqm8ptb8.js";
import {
  vP
} from "B:/~BUN/root/chunk-z7dx70bj.js";
import {
  oyr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  jp
} from "B:/~BUN/root/chunk-9pv2t2x4.js";
import {
  VTn,
  R9r,
  cNe
} from "B:/~BUN/root/chunk-r3x06dkm.js";
import {
  UA
} from "B:/~BUN/root/chunk-fckdfecy.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  jw
} from "B:/~BUN/root/chunk-tmxfgevx.js";
import {
  qTn
} from "B:/~BUN/root/chunk-78kr43tp.js";
import {
  hNe
} from "B:/~BUN/root/chunk-27fak1kn.js";
import {
  aN
} from "B:/~BUN/root/chunk-gvcmagy5.js";
import {
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  o,
  T,
  u,
  $e
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  a0
} from "B:/~BUN/root/chunk-eya7pdzx.js";
B();

function we(t) {
  let [Ge, Qe] = t;
  return `${Ge}: ${Qe}`
}

function Se(t) {
  let [Ve] = t;
  return ne(Ve)
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
    progress: l,
    total: a
  } = i.data, p = jp(i.data.progressMessage);
  if (l === void 0) return e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  if (a !== void 0 && a > 0) {
    let c = Math.min(1, Math.max(0, l / a)),
      m = Math.round(c * 100);
    return e(ze, {
      children: r(s, {
        flexDirection: "column",
        children: [p && e(n, {
          dimColor: !0,
          children: p
        }), r(s, {
          flexDirection: "row",
          gap: 1,
          children: [e(UA, {
            ratio: c,
            width: 20
          }), r(n, {
            dimColor: !0,
            children: [m, "%"]
          })]
        })]
      })
    })
  }
  return e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: p ?? `Processing\u2026 ${l}`
    })
  })
}

function Zbn(t, i, {
  verbose: l,
  input: a
}) {
  let p = t;
  if (!l) {
    let c = O(p, a);
    if (c !== null) return e(ze, {
      height: 1,
      children: r(n, {
        children: ["Sent a message to", " ", e(Go, {
          children: jw(c.url, c.channel)
        })]
      })
    })
  }
  return h(p, l)
}

function h(t, i) {
  let l = hNe(t),
    p = l > _ ? `${te.warning} Large MCP response (~${ei(l)} tokens), this can fill up context quickly` : null,
    c;
  if (Array.isArray(t)) {
    let m = t.map((d, g) => {
      if (d.type === "image") return e(s, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%",
        children: e(ze, {
          height: 1,
          children: e(n, {
            children: "[Image]"
          })
        })
      }, g);
      return e(P, {
        item: d,
        verbose: i
      }, g)
    });
    c = e(s, {
      flexDirection: "column",
      width: "100%",
      children: m
    })
  } else if (!t) c = e(s, {
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
  });
  else c = e(vP, {
    content: t,
    verbose: i
  });
  if (p) return r(s, {
    flexDirection: "column",
    children: [e(ze, {
      height: 1,
      children: e(n, {
        color: "warning",
        children: p
      })
    }), c]
  });
  return c
}

function P(t) {
  let p = w(3),
    {
      item: i,
      verbose: l
    } = t,
    a = i.type === "text" && "text" in i && i.text !== null && i.text !== void 0 ? String(i.text) : "",
    c;
  if (p[0] !== a || p[1] !== l) c = e(vP, {
    content: a,
    verbose: l
  }), p[0] = a, p[1] = l, p[2] = c;
  else c = p[2];
  return c
}

function v(t, {
  maxChars: i,
  maxKeys: l
}) {
  let a = t.trim();
  if (a.length === 0 || a.length > i || a[0] !== "{") return null;
  let p;
  try {
    p = J(a)
  } catch {
    return null
  }
  if (p === null || typeof p !== "object" || Array.isArray(p)) return null;
  let c = Object.entries(p);
  if (c.length === 0 || c.length > l) return null;
  return c
}
var N = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;

function O(t, i) {
  let l = t;
  if (Array.isArray(t)) {
    let x = t.find((R) => R.type === "text");
    l = x && "text" in x ? x.text : void 0
  }
  if (typeof l !== "string" || !l.includes('"message_link"')) return null;
  let p = v(l, {
    maxChars: 2000,
    maxKeys: 6
  })?.find(([x]) => x === "message_link")?.[1];
  if (typeof p !== "string") return null;
  let c = N.exec(p);
  if (!c) return null;
  let m = i,
    d = m?.channel_id ?? m?.channel ?? c[1],
    g = (typeof d === "string" ? qTn(d) : "") || "slack";
  return {
    channel: g.startsWith("#") ? g : `#${g}`,
    url: p
  }
}

function MGt(t, i) {
  let l = i?.columns;
  if (typeof t === "string") return aN(t, l);
  if (Array.isArray(t)) return t.some((a) => a.type === "text" && aN(a.text, l));
  return !1
}
var A = 256;

function Dre(t, i) {
  let l = oyr(t);
  return l ? E.of(i)(t, l.serverName, l.toolName) : void 0
}
var D = f(() => $e([R9r(), u({
    content: $e([o(), T(u({
      type: o()
    }).passthrough())])
  }).transform((t) => t.content)])),
  Mei = {
    isResultTruncated(t, i) {
      let l = j(t);
      return MGt(l, i) || MGt(b(l), i)
    },
    renderToolResultMessage(t, i, {
      verbose: l
    }) {
      return h(b(t), l)
    }
  },
  E = new z(() => a0(H, (t) => t, A));

function H(t, i, l) {
  let a = () => {
    throw Error("Display-only MCP tool invoked \u2014 it exists only for transcript rendering")
  };
  return {
    ...cNe,
    name: t,
    mcpInfo: {
      serverName: i,
      toolName: l
    },
    isEnabled: () => !1,
    outputSchema: D(),
    uiTableKey: VTn,
    userFacingName: () => `${i} - ${l} (MCP)`,
    description: async () => a(),
    prompt: async () => a(),
    call: async () => a(),
    checkPermissions: async () => a()
  }
}

function j(t) {
  let i = typeof t === "object" && t !== null && !Array.isArray(t) && "content" in t ? t.content : t;
  if (typeof i === "string") return i;
  return Array.isArray(i) && i.every((l) => typeof l === "object" && l !== null) ? i : void 0
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
    return i = c, m
  }) + l()).replace(U, "").replace(I, "\\u241b").replace(L, "\\u2426")
}

function b(t) {
  if (typeof t === "string") return M(t);
  return t?.map((i) => i.type === "text" && ("text" in i) ? {
    type: "text",
    text: M(String(i.text ?? ""))
  } : i)
}
export {
  Her,
  Zbn,
  MGt,
  Dre,
  Mei
};
