// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  J
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  Lt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  is
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  ts
} from "B:/~BUN/root/chunk-f6h9k5ss.js";
import {
  U8t,
  jpr,
  Swe
} from "B:/~BUN/root/chunk-mh108vc9.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  s,
  n,
  Jr
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Le
} from "B:/~BUN/root/chunk-dk0c0nrh.js";
import {
  uT
} from "B:/~BUN/root/chunk-qzz7wd45.js";
import {
  Up
} from "B:/~BUN/root/chunk-xek40d46.js";
import {
  Yv
} from "B:/~BUN/root/chunk-3qb0jwrq.js";
import {
  q_
} from "B:/~BUN/root/chunk-y1h4hnnm.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  B8t
} from "B:/~BUN/root/chunk-twyx844h.js";
import {
  O0e
} from "B:/~BUN/root/chunk-6tpkhtzg.js";
import {
  YP
} from "B:/~BUN/root/chunk-pwpgxxsc.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  Us
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  o,
  C,
  u,
  $e
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  zI
} from "B:/~BUN/root/chunk-tndjj29v.js";
N();

function Ne(t) {
  let [Qe, et] = t;
  return `${Qe}: ${et}`
}

function Se(t) {
  let [tt] = t;
  return re(tt)
}
var k = 1e4;

function cwn(t) {
  let i = t.at(-1);
  if (!i?.data) return e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  let {
    progress: a,
    total: l
  } = i.data, m = Up(i.data.progressMessage);
  if (a === void 0) return e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  if (l !== void 0 && l > 0) {
    let c = Math.min(1, Math.max(0, a / l)),
      p = Math.round(c * 100);
    return e(Le, {
      children: r(s, {
        flexDirection: "column",
        children: [m && e(n, {
          dimColor: !0,
          children: m
        }), r(s, {
          flexDirection: "row",
          gap: 1,
          children: [e(Yv, {
            ratio: c,
            width: 20
          }), r(n, {
            dimColor: !0,
            children: [p, "%"]
          })]
        })]
      })
    })
  }
  return e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: m ?? `Processing\u2026 ${a}`
    })
  })
}

function J2t(t, i, {
  verbose: a,
  input: l
}) {
  let m = t;
  if (!a) {
    let c = E(m, l);
    if (c !== null) return e(Le, {
      height: 1,
      children: r(n, {
        children: ["Sent a message to", " ", e(Jr, {
          children: q_(c.url, c.channel)
        })]
      })
    })
  }
  return y(m, a)
}

function y(t, i) {
  let a = O0e(t),
    m = a > k ? `${Z.warning} Large MCP response (~${is(a)} tokens), this can fill up context quickly` : null,
    c;
  if (Array.isArray(t)) {
    let p = t.map((g, d) => {
      if (g.type === "image") return e(s, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%",
        children: e(Le, {
          height: 1,
          children: e(n, {
            children: "[Image]"
          })
        })
      }, d);
      return e(M, {
        item: g,
        verbose: i
      }, d)
    });
    c = e(s, {
      flexDirection: "column",
      width: "100%",
      children: p
    })
  } else if (!t) c = e(s, {
    justifyContent: "space-between",
    overflowX: "hidden",
    width: "100%",
    children: e(Le, {
      height: 1,
      children: e(n, {
        dimColor: !0,
        children: "(No content)"
      })
    })
  });
  else c = e(uT, {
    content: t,
    verbose: i
  });
  if (m) return r(s, {
    flexDirection: "column",
    children: [e(Le, {
      height: 1,
      children: e(n, {
        color: "warning",
        children: m
      })
    }), c]
  });
  return c
}

function M(t) {
  let m = w(3),
    {
      item: i,
      verbose: a
    } = t,
    l = i.type === "text" && "text" in i && i.text !== null && i.text !== void 0 ? String(i.text) : "",
    c;
  if (m[0] !== l || m[1] !== a) c = e(uT, {
    content: l,
    verbose: a
  }), m[0] = l, m[1] = a, m[2] = c;
  else c = m[2];
  return c
}

function A(t, {
  maxChars: i,
  maxKeys: a
}) {
  let l = t.trim();
  if (l.length === 0 || l.length > i || l[0] !== "{") return null;
  let m;
  try {
    m = J(l)
  } catch {
    return null
  }
  if (m === null || typeof m !== "object" || Array.isArray(m)) return null;
  let c = Object.entries(m);
  if (c.length === 0 || c.length > a) return null;
  return c
}
var O = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;

function E(t, i) {
  let a = t;
  if (Array.isArray(t)) {
    let x = t.find((_) => _.type === "text");
    a = x && "text" in x ? x.text : void 0
  }
  if (typeof a !== "string" || !a.includes('"message_link"')) return null;
  let m = A(a, {
    maxChars: 2000,
    maxKeys: 6
  })?.find(([x]) => x === "message_link")?.[1];
  if (typeof m !== "string") return null;
  let c = O.exec(m);
  if (!c) return null;
  let p = i,
    g = p?.channel_id ?? p?.channel ?? c[1],
    d = (typeof g === "string" ? B8t(g) : "") || "slack";
  return {
    channel: d.startsWith("#") ? d : `#${d}`,
    url: m
  }
}

function byt(t, i) {
  let a = i?.columns;
  if (typeof t === "string") return YP(t, a);
  if (Array.isArray(t)) return t.some((l) => l.type === "text" && YP(l.text, a));
  return !1
}
var D = 256,
  b = /^[a-zA-Z0-9_-]{1,128}$/;

function bue(t, i) {
  if (!Lt() || !ts()) return;
  let a = Us(t);
  if (!a?.toolName || !b.test(a.serverName) || !b.test(a.toolName)) return;
  return j.of(i)(t, a.serverName, a.toolName)
}
var H = f(() => $e([jpr(), u({
    content: $e([o(), C(u({
      type: o()
    }).passthrough())])
  }).transform((t) => t.content)])),
  bqo = {
    isResultTruncated(t, i) {
      let a = F(t);
      return byt(a, i) || byt(T(a), i)
    },
    renderToolResultMessage(t, i, {
      verbose: a
    }) {
      return y(T(t), a)
    }
  },
  j = new q(() => zI(B, (t) => t, D));

function B(t, i, a) {
  let l = () => {
    throw Error("Display-only MCP tool invoked \u2014 it exists only for transcript rendering")
  };
  return {
    ...Swe,
    name: t,
    mcpInfo: {
      serverName: i,
      toolName: a
    },
    isEnabled: () => !1,
    outputSchema: H(),
    uiTableKey: U8t,
    userFacingName: () => `${i} - ${a} (MCP)`,
    description: async () => l(),
    prompt: async () => l(),
    call: async () => l(),
    checkPermissions: async () => l()
  }
}

function F(t) {
  let i = typeof t === "object" && t !== null && !Array.isArray(t) && "content" in t ? t.content : t;
  if (typeof i === "string") return i;
  return Array.isArray(i) && i.every((a) => typeof a === "object" && a !== null) ? i : void 0
}
var I = /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g,
  U = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g,
  z = /\\u001b/gi,
  L = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;

function R(t) {
  let i = "",
    a = () => i ? ` <${i}>` : "";
  return (t.replace(I, (m, c) => {
    if (c === void 0) return "";
    let p = a();
    return i = c, p
  }) + a()).replace(U, "").replace(z, "\\u241b").replace(L, "\\u2426")
}

function T(t) {
  if (typeof t === "string") return R(t);
  return t?.map((i) => i.type === "text" && ("text" in i) ? {
    type: "text",
    text: R(String(i.text ?? ""))
  } : i)
}
export {
  cwn,
  J2t,
  byt,
  bue,
  bqo
};
