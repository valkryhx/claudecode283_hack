// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L,
  Mw,
  OJn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  Oe
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  Ht,
  gA
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  A2
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  In,
  ca
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  s,
  n,
  zt,
  ot
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  No
} from "B:/~BUN/root/chunk-5xxjpbgm.js";
import {
  Za,
  rc,
  cs,
  Hi,
  Xe
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  IAt,
  Ose,
  Ys,
  Ef
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  AT
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  $l,
  hl,
  Zr
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  az
} from "B:/~BUN/root/chunk-zh4z1r24.js";
import {
  be
} from "B:/~BUN/root/chunk-nyga36vf.js";
import {
  gt
} from "B:/~BUN/root/chunk-vs438w4e.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  ae,
  A,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  L7e
} from "B:/~BUN/root/chunk-b0487zs4.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function k() {
  let t = w(1),
    u;
  if (t[0] === S) u = r(n, {
    children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(zt, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "."]
  }), t[0] = u;
  else u = t[0];
  return u
}

function uSn({
  serverName: t,
  isPluginServer: u = !1,
  onDone: d
}) {
  let {
    storageV5: o
  } = Oe(), l = A(!1), f = Za(No), {
    refusedWithin: m,
    noteRefused: b,
    epoch: v
  } = cs(), h = rc(v, No);

  function E() {
    if (f() || m(No)) return b(), !0;
    return !1
  }
  async function C(p) {
    if (E()) return;
    if (l.current) return;
    switch (l.current = !0, i("tengu_mcp_dialog_choice", {
        choice: c(p)
      }), p) {
      case "yes":
      case "yes_all": {
        let g = !1;
        {
          let {
            error: y
          } = await ca("localSettings", (M) => {
            let P = M?.enabledMcpjsonServers || [];
            if (P.includes(t)) return null;
            return {
              enabledMcpjsonServers: [...P, t]
            }
          }, void 0, o);
          g ||= y != null
        }
        if (p === "yes_all") {
          let {
            error: y
          } = await In("localSettings", {
            enableAllProjectMcpServers: !0
          }, void 0, o);
          g ||= y != null
        }
        OJn(gA(), [t]), d({
          persistFailed: g
        });
        break
      }
      case "no": {
        let {
          error: g
        } = await ca("localSettings", (y) => {
          let M = y?.disabledMcpjsonServers || [];
          if (M.includes(t)) return null;
          return {
            disabledMcpjsonServers: [...M, t]
          }
        }, void 0, o);
        d({
          persistFailed: g != null
        });
        break
      }
    }
  }
  return r(be, {
    title: `New MCP server found in this project: ${L7e(t,u)}`,
    color: "warning",
    onCancel: () => void C("no"),
    exitOnCtrlCD: !0,
    children: [e(k, {}), e(Xe, {
      options: [{
        label: "Use this MCP server",
        value: "yes"
      }, {
        label: "Use this and all future MCP servers in this project",
        value: "yes_all"
      }, {
        label: "Continue without using this MCP server",
        value: "no"
      }],
      onChange: (p) => void C(p),
      onCancel: () => void C("no"),
      hideIndexes: !0,
      refuseInput: E,
      defaultFocusValue: "no",
      selectedValue: Hi
    }, h.remountKey)]
  })
}
B();

function pSn({
  serverNames: t,
  pluginServerNames: u,
  onDone: d
}) {
  let {
    storageV5: o
  } = Oe(), l = A(!1), f = Za(No), {
    refusedWithin: m,
    noteRefused: b
  } = cs(), v = ot(), h = ae(() => {
    if (f() || m(No)) return b(), !0;
    return !1
  }, [f, m, b]);
  async function E(p) {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let [g, y] = AT(t, (P) => p.includes(P));
    i("tengu_mcp_multidialog_choice", {
      approved: g.length,
      rejected: y.length
    });
    let M = !1;
    if (g.length > 0) {
      let {
        error: P
      } = await ca("localSettings", (R) => ({
        enabledMcpjsonServers: L([...R?.enabledMcpjsonServers || [], ...g])
      }), void 0, o);
      M ||= P != null
    }
    if (OJn(gA(), g), y.length > 0) {
      let {
        error: P
      } = await ca("localSettings", (R) => ({
        disabledMcpjsonServers: L([...R?.disabledMcpjsonServers || [], ...y])
      }), void 0, o);
      M ||= P != null
    }
    d({
      persistFailed: M
    })
  }
  let C = ae(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let {
      error: p
    } = await ca("localSettings", (g) => ({
      disabledMcpjsonServers: L([...g?.disabledMcpjsonServers || [], ...t])
    }), void 0, o);
    d({
      persistFailed: p != null
    })
  }, [h, t, d, o]);
  return r(Q, {
    children: [r(be, {
      title: `${t.length} new MCP servers found in this project`,
      subtitle: "Select any you wish to enable.",
      color: "warning",
      onCancel: C,
      exitOnCtrlCD: !0,
      hideInputGuide: !0,
      children: [e(k, {}), e(az, {
        options: t.map((p) => ({
          label: L7e(p, u?.has(p) ?? !1),
          value: p
        })),
        defaultValue: v ? [] : t,
        submitButtonText: "Enable selected",
        onSubmit: E,
        onCancel: C,
        hideIndexes: !0,
        refuseInput: h,
        refuseSubmitFocus: h
      })]
    }), e(s, {
      paddingX: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: r(Se, {
          children: [e(q, {
            chord: "space",
            action: "select"
          }), e(gt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "reject all"
          })]
        })
      })
    })]
  })
}
async function fSn(t) {
  if (Mw()) return {
    pendingServers: [],
    pluginServerNames: new Set
  };
  let {
    serverNames: u,
    pluginServerNames: d
  } = await aqr(t);
  return {
    pendingServers: u.filter((l) => Ose(l) === "pending"),
    pluginServerNames: d
  }
}
async function aqr(t) {
  let {
    servers: u
  } = Ef("project"), d = Object.keys(u), o = new Set(d), l = new Set, {
    enabled: f
  } = await Ys(t), m = f.filter(A2);
  for (let b of m) {
    let v = await IAt(b, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || l.has(h)) continue;
      d.push(h), l.add(h)
    }
  }
  return {
    serverNames: d,
    pluginServerNames: l,
    rootServers: u
  }
}
async function Y3o({
  pendingServers: t,
  pluginServerNames: u
}, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await D(t.map((v) => L7e(v, u.has(v))), o);
  let f = (v) => {
      x(l, o).catch(() => {}).then(() => d(v))
    },
    [m, ...b] = t;
  return m !== void 0 && b.length === 0 ? e(uSn, {
    serverName: m,
    isPluginServer: u.has(m),
    onDone: f
  }) : e(pSn, {
    serverNames: t,
    pluginServerNames: u,
    onDone: f
  })
}
async function D(t, u) {
  {
    if (!Ht()) return;
    let d = a.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await Zr(d, u);
    if (!o) return;
    let l = t.length,
      f = O(l, "server"),
      m = O(l, "needs", "need");
    try {
      return await $l(d, {
        ...o,
        state: "blocked",
        detail: `${l} new MCP ${f} ${m} approval`,
        tempo: "blocked",
        needs: `approve ${l} new project MCP ${f} (${t.join(", ")}) \u2014 attach to respond`,
        updatedAt: new Date().toISOString()
      }, u), {
        state: o.state,
        tempo: o.tempo,
        needs: o.needs,
        detail: o.detail
      }
    } catch (b) {
      hl(b)
    }
  }
  return
}
async function x(t, u) {
  {
    if (!t || !Ht()) return;
    let d = a.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await Zr(d, u);
    if (!o || o.state !== "blocked") return;
    try {
      await $l(d, {
        ...o,
        ...t,
        block: void 0,
        updatedAt: new Date().toISOString()
      }, u)
    } catch (l) {
      hl(l)
    }
  }
}
export {
  uSn,
  pSn,
  fSn,
  aqr,
  Y3o
};
