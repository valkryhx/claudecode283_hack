// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { OC, lyn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { vt, Wk } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { ln, Ha } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { s, n, bt, _t } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { oo } from "B:/~BUN/root/chunk-1a6hgte8.js";
import { Gi, gc, rs, ii as selectedValue, Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { dP } from "B:/~BUN/root/chunk-zfsr3kh2.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { ja, ml, Ir } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { tJt, ufe, Ti, wp } from "B:/~BUN/root/chunk-3jyp964r.js";
import { NT } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { se, T, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Yz } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { wUe } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function k() {
  let t = w(1),
    u;
  if (t[0] === S) u = r(n, {
    children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(bt, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "."]
  }), t[0] = u;else u = t[0];
  return u;
}
function mGt({
  serverName: serverName,
  isPluginServer = !1,
  onDone: onDone
}) {
  let {
      storageV5: storageV5
    } = ke(),
    l = T(!1),
    f = Gi(oo),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = rs(),
    h = gc(epoch, oo);
  function refuseInput() {
    if (f() || refusedWithin(oo)) return noteRefused(), !0;
    return !1;
  }
  async function C(p) {
    if (refuseInput()) return;
    if (l.current) return;
    switch (l.current = !0, i("tengu_mcp_dialog_choice", {
      choice: c(p)
    }), p) {
      case "yes":
      case "yes_all":
        {
          let persistFailed = !1;
          {
            let {
              error: error
            } = await Ha("localSettings", M => {
              let P = M?.enabledMcpjsonServers || [];
              if (P.includes(serverName)) return null;
              return {
                enabledMcpjsonServers: [...P, serverName]
              };
            }, void 0, storageV5);
            persistFailed ||= error != null;
          }
          if (p === "yes_all") {
            let {
              error: error_2
            } = await ln("localSettings", {
              enableAllProjectMcpServers: !0
            }, void 0, storageV5);
            persistFailed ||= error_2 != null;
          }
          lyn(Wk(), [serverName]), onDone({
            persistFailed: persistFailed
          });
          break;
        }
      case "no":
        {
          let {
            error: error_3
          } = await Ha("localSettings", y => {
            let M = y?.disabledMcpjsonServers || [];
            if (M.includes(serverName)) return null;
            return {
              disabledMcpjsonServers: [...M, serverName]
            };
          }, void 0, storageV5);
          onDone({
            persistFailed: error_3 != null
          });
          break;
        }
    }
  }
  return r(ge, {
    title: `New MCP server found in this project: ${wUe(serverName, isPluginServer)}`,
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
      onChange: p => void C(p),
      onCancel: () => void C("no"),
      hideIndexes: !0,
      refuseInput: refuseInput,
      defaultFocusValue: "no",
      selectedValue: selectedValue
    }, h.remountKey)]
  });
}
N();
function gGt({
  serverNames: serverNames,
  pluginServerNames: pluginServerNames,
  onDone: onDone_2
}) {
  let {
      storageV5: storageV5_2
    } = ke(),
    l = T(!1),
    f = Gi(oo),
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = rs(),
    v = _t(),
    h = se(() => {
      if (f() || refusedWithin_2(oo)) return noteRefused_2(), !0;
      return !1;
    }, [f, refusedWithin_2, noteRefused_2]);
  async function onSubmit(p) {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let [g, y] = NT(serverNames, P => p.includes(P));
    i("tengu_mcp_multidialog_choice", {
      approved: g.length,
      rejected: y.length
    });
    let persistFailed_2 = !1;
    if (g.length > 0) {
      let {
        error: error_4
      } = await Ha("localSettings", R => ({
        enabledMcpjsonServers: L([...(R?.enabledMcpjsonServers || []), ...g])
      }), void 0, storageV5_2);
      persistFailed_2 ||= error_4 != null;
    }
    if (lyn(Wk(), g), y.length > 0) {
      let {
        error: error_5
      } = await Ha("localSettings", R => ({
        disabledMcpjsonServers: L([...(R?.disabledMcpjsonServers || []), ...y])
      }), void 0, storageV5_2);
      persistFailed_2 ||= error_5 != null;
    }
    onDone_2({
      persistFailed: persistFailed_2
    });
  }
  let onCancel = se(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let {
      error: error_6
    } = await Ha("localSettings", g => ({
      disabledMcpjsonServers: L([...(g?.disabledMcpjsonServers || []), ...serverNames])
    }), void 0, storageV5_2);
    onDone_2({
      persistFailed: error_6 != null
    });
  }, [h, serverNames, onDone_2, storageV5_2]);
  return r(V, {
    children: [r(ge, {
      title: `${serverNames.length} new MCP servers found in this project`,
      subtitle: "Select any you wish to enable.",
      color: "warning",
      onCancel: onCancel,
      exitOnCtrlCD: !0,
      hideInputGuide: !0,
      children: [e(k, {}), e(dP, {
        options: serverNames.map(p => ({
          label: wUe(p, pluginServerNames?.has(p) ?? !1),
          value: p
        })),
        defaultValue: v ? [] : serverNames,
        submitButtonText: "Enable selected",
        onSubmit: onSubmit,
        onCancel: onCancel,
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
  });
}
async function hGt(t) {
  if (OC()) return {
    pendingServers: [],
    pluginServerNames: new Set()
  };
  let {
    serverNames: serverNames_2,
    pluginServerNames: pluginServerNames_2
  } = await EZn(t);
  return {
    pendingServers: serverNames_2.filter(item => ufe(item) === "pending"),
    pluginServerNames: pluginServerNames_2
  };
}
async function EZn(t) {
  let {
      servers: u
    } = wp("project"),
    serverNames_3 = Object.keys(u),
    o = new Set(serverNames_3),
    pluginServerNames_3 = new Set(),
    {
      enabled: enabled
    } = await Ti(t),
    m = enabled.filter(Yz);
  for (let b of m) {
    let v = await tJt(b, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || pluginServerNames_3.has(h)) continue;
      serverNames_3.push(h), pluginServerNames_3.add(h);
    }
  }
  return {
    serverNames: serverNames_3,
    pluginServerNames: pluginServerNames_3,
    rootServers: u
  };
}
async function w8r({
  pendingServers: t,
  pluginServerNames: pluginServerNames_4
}, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await j(t.map(item => wUe(item, pluginServerNames_4.has(item))), o);
  let onDone_3 = v => {
      D(l, o).catch(() => {}).then(() => d(v));
    },
    [serverName_2, ...b] = t;
  return serverName_2 !== void 0 && b.length === 0 ? e(mGt, {
    serverName: serverName_2,
    isPluginServer: pluginServerNames_4.has(serverName_2),
    onDone: onDone_3
  }) : e(gGt, {
    serverNames: t,
    pluginServerNames: pluginServerNames_4,
    onDone: onDone_3
  });
}
async function j(t, u) {
  {
    if (!vt()) return;
    let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    let o = await Ir(CLAUDE_JOB_DIR, u);
    if (!o) return;
    let l = t.length,
      f = I(l, "server"),
      m = I(l, "needs", "need");
    try {
      return await ja(CLAUDE_JOB_DIR, {
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
      };
    } catch (error) {
      ml(error);
    }
  }
  return;
}
async function D(t, u) {
  {
    if (!t || !vt()) return;
    let CLAUDE_JOB_DIR_2 = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR_2) return;
    let o = await Ir(CLAUDE_JOB_DIR_2, u);
    if (!o || o.state !== "blocked") return;
    try {
      await ja(CLAUDE_JOB_DIR_2, {
        ...o,
        ...t,
        block: void 0,
        updatedAt: new Date().toISOString()
      }, u);
    } catch (error) {
      ml(error);
    }
  }
}
export { mGt, gGt, hGt, EZn, w8r };