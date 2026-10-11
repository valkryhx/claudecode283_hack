// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  OC,
  lyn
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  vt,
  Wk
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  ln,
  Ha
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  s,
  n,
  bt,
  _t
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  oo
} from "B:/~BUN/root/chunk-1a6hgte8.js";
import {
  Gi,
  gc,
  rs,
  ii,
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  dP
} from "B:/~BUN/root/chunk-zfsr3kh2.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  ja,
  ml,
  Ir
} from "B:/~BUN/root/chunk-9sy3w2pa.js";
import {
  tJt,
  ufe,
  Ti,
  wp
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  NT
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  se,
  T,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  Yz
} from "B:/~BUN/root/chunk-gsxez0fk.js";
import {
  wUe
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function k() {
  let t = w(1),
    u;
  if (t[0] === S) u = r(n, {
    children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(bt, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "."]
  }), t[0] = u;
  else u = t[0];
  return u
}

function mGt({
  serverName: t,
  isPluginServer: u = !1,
  onDone: d
}) {
  let {
    storageV5: o
  } = ke(), l = T(!1), f = Gi(oo), {
    refusedWithin: m,
    noteRefused: b,
    epoch: v
  } = rs(), h = gc(v, oo);

  function E() {
    if (f() || m(oo)) return b(), !0;
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
          } = await Ha("localSettings", (M) => {
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
          } = await ln("localSettings", {
            enableAllProjectMcpServers: !0
          }, void 0, o);
          g ||= y != null
        }
        lyn(Wk(), [t]), d({
          persistFailed: g
        });
        break
      }
      case "no": {
        let {
          error: g
        } = await Ha("localSettings", (y) => {
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
  return r(ge, {
    title: `New MCP server found in this project: ${wUe(t,u)}`,
    color: "warning",
    onCancel: () => void C("no"),
    exitOnCtrlCD: !0,
    children: [e(k, {}), e(Fe, {
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
      selectedValue: ii
    }, h.remountKey)]
  })
}
N();

function gGt({
  serverNames: t,
  pluginServerNames: u,
  onDone: d
}) {
  let {
    storageV5: o
  } = ke(), l = T(!1), f = Gi(oo), {
    refusedWithin: m,
    noteRefused: b
  } = rs(), v = _t(), h = se(() => {
    if (f() || m(oo)) return b(), !0;
    return !1
  }, [f, m, b]);
  async function E(p) {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let [g, y] = NT(t, (P) => p.includes(P));
    i("tengu_mcp_multidialog_choice", {
      approved: g.length,
      rejected: y.length
    });
    let M = !1;
    if (g.length > 0) {
      let {
        error: P
      } = await Ha("localSettings", (R) => ({
        enabledMcpjsonServers: L([...R?.enabledMcpjsonServers || [], ...g])
      }), void 0, o);
      M ||= P != null
    }
    if (lyn(Wk(), g), y.length > 0) {
      let {
        error: P
      } = await Ha("localSettings", (R) => ({
        disabledMcpjsonServers: L([...R?.disabledMcpjsonServers || [], ...y])
      }), void 0, o);
      M ||= P != null
    }
    d({
      persistFailed: M
    })
  }
  let C = se(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let {
      error: p
    } = await Ha("localSettings", (g) => ({
      disabledMcpjsonServers: L([...g?.disabledMcpjsonServers || [], ...t])
    }), void 0, o);
    d({
      persistFailed: p != null
    })
  }, [h, t, d, o]);
  return r(V, {
    children: [r(ge, {
      title: `${t.length} new MCP servers found in this project`,
      subtitle: "Select any you wish to enable.",
      color: "warning",
      onCancel: C,
      exitOnCtrlCD: !0,
      hideInputGuide: !0,
      children: [e(k, {}), e(dP, {
        options: t.map((p) => ({
          label: wUe(p, u?.has(p) ?? !1),
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
        children: r(ye, {
          children: [e(F, {
            chord: "space",
            action: "select"
          }), e(Xe, {
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
async function hGt(t) {
  if (OC()) return {
    pendingServers: [],
    pluginServerNames: new Set
  };
  let {
    serverNames: u,
    pluginServerNames: d
  } = await EZn(t);
  return {
    pendingServers: u.filter((l) => ufe(l) === "pending"),
    pluginServerNames: d
  }
}
async function EZn(t) {
  let {
    servers: u
  } = wp("project"), d = Object.keys(u), o = new Set(d), l = new Set, {
    enabled: f
  } = await Ti(t), m = f.filter(Yz);
  for (let b of m) {
    let v = await tJt(b, [], t);
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
async function w8r({
  pendingServers: t,
  pluginServerNames: u
}, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await j(t.map((v) => wUe(v, u.has(v))), o);
  let f = (v) => {
      D(l, o).catch(() => {}).then(() => d(v))
    },
    [m, ...b] = t;
  return m !== void 0 && b.length === 0 ? e(mGt, {
    serverName: m,
    isPluginServer: u.has(m),
    onDone: f
  }) : e(gGt, {
    serverNames: t,
    pluginServerNames: u,
    onDone: f
  })
}
async function j(t, u) {
  {
    if (!vt()) return;
    let d = a.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await Ir(d, u);
    if (!o) return;
    let l = t.length,
      f = I(l, "server"),
      m = I(l, "needs", "need");
    try {
      return await ja(d, {
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
      ml(b)
    }
  }
  return
}
async function D(t, u) {
  {
    if (!t || !vt()) return;
    let d = a.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await Ir(d, u);
    if (!o || o.state !== "blocked") return;
    try {
      await ja(d, {
        ...o,
        ...t,
        block: void 0,
        updatedAt: new Date().toISOString()
      }, u)
    } catch (l) {
      ml(l)
    }
  }
}
export {
  mGt,
  gGt,
  hGt,
  EZn,
  w8r
};
