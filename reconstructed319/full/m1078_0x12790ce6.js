// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ck,
  d$r
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  rSt
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  Gt,
  HD
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  d5,
  lS
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  qn,
  tl
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  ot,
  s,
  n,
  sn
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  xo
} from "B:/~BUN/root/chunk-tzwf3sbj.js";
import {
  si,
  cu,
  so,
  ti,
  Ze
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  K6t,
  Fge,
  ki,
  Uh
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  ic,
  Td,
  Fo
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  jj
} from "B:/~BUN/root/chunk-jdm4aq80.js";
import {
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  gt
} from "B:/~BUN/root/chunk-sx03ea6s.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  ue,
  A,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function E() {
  let t = S(1),
    d;
  if (t[0] === w) d = r(n, {
    children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(sn, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "."]
  }), t[0] = d;
  else d = t[0];
  return d
}

function R3n({
  serverName: t,
  isPluginServer: d = !1,
  onDone: c
}) {
  let {
    storageV5: o
  } = Fe(), a = A(!1), p = si(xo), {
    refusedWithin: m,
    noteRefused: b,
    epoch: v
  } = so(), h = cu(v, xo);

  function R() {
    if (p() || m(xo)) return b(), !0;
    return !1
  }
  async function k(u) {
    if (R()) return;
    if (a.current) return;
    switch (a.current = !0, l("tengu_mcp_dialog_choice", {
        choice: f(u)
      }), u) {
      case "yes":
      case "yes_all": {
        let g = !1;
        {
          let {
            error: y
          } = await tl("localSettings", (M) => {
            let C = M?.enabledMcpjsonServers || [];
            if (C.includes(t)) return null;
            return {
              enabledMcpjsonServers: [...C, t]
            }
          }, void 0, o);
          g ||= y != null
        }
        if (u === "yes_all") {
          let {
            error: y
          } = await qn("localSettings", {
            enableAllProjectMcpServers: !0
          }, void 0, o);
          g ||= y != null
        }
        d$r(HD(), [t]), c({
          persistFailed: g
        });
        break
      }
      case "no": {
        let {
          error: g
        } = await tl("localSettings", (y) => {
          let M = y?.disabledMcpjsonServers || [];
          if (M.includes(t)) return null;
          return {
            disabledMcpjsonServers: [...M, t]
          }
        }, void 0, o);
        c({
          persistFailed: g != null
        });
        break
      }
    }
  }
  return r(ke, {
    title: `New MCP server found in this project: ${rSt(t,d)}`,
    color: "warning",
    onCancel: () => void k("no"),
    exitOnCtrlCD: !0,
    children: [e(E, {}), e(Ze, {
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
      onChange: (u) => void k(u),
      onCancel: () => void k("no"),
      hideIndexes: !0,
      refuseInput: R,
      defaultFocusValue: "no",
      selectedValue: ti
    }, h.remountKey)]
  })
}
j();

function A3n({
  serverNames: t,
  pluginServerNames: d,
  onDone: c
}) {
  let {
    storageV5: o
  } = Fe(), a = A(!1), p = si(xo), {
    refusedWithin: m,
    noteRefused: b
  } = so(), v = ot(), h = ue(() => {
    if (p() || m(xo)) return b(), !0;
    return !1
  }, [p, m, b]);
  async function R(u) {
    if (h()) return;
    if (a.current) return;
    a.current = !0;
    let [g, y] = lS(t, (C) => u.includes(C));
    l("tengu_mcp_multidialog_choice", {
      approved: g.length,
      rejected: y.length
    });
    let M = !1;
    if (g.length > 0) {
      let {
        error: C
      } = await tl("localSettings", (D) => ({
        enabledMcpjsonServers: L([...D?.enabledMcpjsonServers || [], ...g])
      }), void 0, o);
      M ||= C != null
    }
    if (d$r(HD(), g), y.length > 0) {
      let {
        error: C
      } = await tl("localSettings", (D) => ({
        disabledMcpjsonServers: L([...D?.disabledMcpjsonServers || [], ...y])
      }), void 0, o);
      M ||= C != null
    }
    c({
      persistFailed: M
    })
  }
  let k = ue(async () => {
    if (h()) return;
    if (a.current) return;
    a.current = !0;
    let {
      error: u
    } = await tl("localSettings", (g) => ({
      disabledMcpjsonServers: L([...g?.disabledMcpjsonServers || [], ...t])
    }), void 0, o);
    c({
      persistFailed: u != null
    })
  }, [h, t, c, o]);
  return r(ne, {
    children: [r(ke, {
      title: `${t.length} new MCP servers found in this project`,
      subtitle: "Select any you wish to enable.",
      color: "warning",
      onCancel: k,
      exitOnCtrlCD: !0,
      hideInputGuide: !0,
      children: [e(E, {}), e(jj, {
        options: t.map((u) => ({
          label: rSt(u, d?.has(u) ?? !1),
          value: u
        })),
        defaultValue: v ? [] : t,
        submitButtonText: "Enable selected",
        onSubmit: R,
        onCancel: k,
        hideIndexes: !0,
        refuseInput: h,
        refuseSubmitFocus: h
      })]
    }), e(s, {
      paddingX: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: r(Ce, {
          children: [e(Y, {
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
async function x3n(t) {
  if (Ck()) return {
    pendingServers: [],
    pluginServerNames: new Set
  };
  let {
    serverNames: d,
    pluginServerNames: c
  } = await OFo(t);
  return {
    pendingServers: d.filter((a) => Fge(a) === "pending"),
    pluginServerNames: c
  }
}
async function OFo(t) {
  let {
    servers: d
  } = Uh("project"), c = Object.keys(d), o = new Set(c), a = new Set, {
    enabled: p
  } = await ki(t), m = p.filter(d5);
  for (let b of m) {
    let v = await K6t(b, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || a.has(h)) continue;
      c.push(h), a.add(h)
    }
  }
  return {
    serverNames: c,
    pluginServerNames: a,
    rootServers: d
  }
}
async function Z5s({
  pendingServers: t,
  pluginServerNames: d
}, c, o) {
  if (t.length === 0) return null;
  let a;
  a = await _(t.map((v) => rSt(v, d.has(v))), o);
  let p = (v) => {
      T(a, o).catch(() => {}).then(() => c(v))
    },
    [m, ...b] = t;
  return m !== void 0 && b.length === 0 ? e(R3n, {
    serverName: m,
    isPluginServer: d.has(m),
    onDone: p
  }) : e(A3n, {
    serverNames: t,
    pluginServerNames: d,
    onDone: p
  })
}
async function _(t, d) {
  {
    if (!Gt()) return;
    let c = i.CLAUDE_JOB_DIR;
    if (!c) return;
    let o = await Fo(c, d);
    if (!o) return;
    let a = t.length,
      p = P(a, "server"),
      m = P(a, "needs", "need");
    try {
      return await ic(c, {
        ...o,
        state: "blocked",
        detail: `${a} new MCP ${p} ${m} approval`,
        tempo: "blocked",
        needs: `approve ${a} new project MCP ${p} (${t.join(", ")}) \u2014 attach to respond`,
        updatedAt: new Date().toISOString()
      }, d), {
        state: o.state,
        tempo: o.tempo,
        needs: o.needs,
        detail: o.detail
      }
    } catch (b) {
      Td(b)
    }
  }
  return
}
async function T(t, d) {
  {
    if (!t || !Gt()) return;
    let c = i.CLAUDE_JOB_DIR;
    if (!c) return;
    let o = await Fo(c, d);
    if (!o || o.state !== "blocked") return;
    try {
      await ic(c, {
        ...o,
        ...t,
        block: void 0,
        updatedAt: new Date().toISOString()
      }, d)
    } catch (a) {
      Td(a)
    }
  }
}
export {
  R3n,
  A3n,
  x3n,
  OFo,
  Z5s
};
