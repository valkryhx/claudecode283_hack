// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L, Mw, OJn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { Ht, gA } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { A2 } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { In, ca } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { s, n, zt, ot } from "B:/~BUN/root/chunk-damrp3r8.js";
import { No } from "B:/~BUN/root/chunk-5xxjpbgm.js";
import { Za, rc, cs, Hi as selectedValue, Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { IAt, Ose, Ys, Ef } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { AT } from "B:/~BUN/root/chunk-k382hx6g.js";
import { $l, hl, Zr } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { az } from "B:/~BUN/root/chunk-zh4z1r24.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ae, A, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { L7e } from "B:/~BUN/root/chunk-b0487zs4.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function k() {
  let t = w(1),
    u;
  if (t[0] === S) u = r(n, {
    children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(zt, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "."]
  }), t[0] = u;else u = t[0];
  return u;
}
function uSn({
  serverName: serverName,
  isPluginServer = !1,
  onDone: onDone
}) {
  let {
      storageV5: storageV5
    } = Oe(),
    l = A(!1),
    f = Za(No),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = cs(),
    h = rc(epoch, No);
  function refuseInput() {
    if (f() || refusedWithin(No)) return noteRefused(), !0;
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
            } = await ca("localSettings", M => {
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
            } = await In("localSettings", {
              enableAllProjectMcpServers: !0
            }, void 0, storageV5);
            persistFailed ||= error_2 != null;
          }
          OJn(gA(), [serverName]), onDone({
            persistFailed: persistFailed
          });
          break;
        }
      case "no":
        {
          let {
            error: error_3
          } = await ca("localSettings", y => {
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
  return r(be, {
    title: `New MCP server found in this project: ${L7e(serverName, isPluginServer)}`,
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
      onChange: p => void C(p),
      onCancel: () => void C("no"),
      hideIndexes: !0,
      refuseInput: refuseInput,
      defaultFocusValue: "no",
      selectedValue: selectedValue
    }, h.remountKey)]
  });
}
B();
function pSn({
  serverNames: serverNames,
  pluginServerNames: pluginServerNames,
  onDone: onDone_2
}) {
  let {
      storageV5: storageV5_2
    } = Oe(),
    l = A(!1),
    f = Za(No),
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = cs(),
    v = ot(),
    h = ae(() => {
      if (f() || refusedWithin_2(No)) return noteRefused_2(), !0;
      return !1;
    }, [f, refusedWithin_2, noteRefused_2]);
  async function onSubmit(p) {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let [g, y] = AT(serverNames, P => p.includes(P));
    i("tengu_mcp_multidialog_choice", {
      approved: g.length,
      rejected: y.length
    });
    let persistFailed_2 = !1;
    if (g.length > 0) {
      let {
        error: error_4
      } = await ca("localSettings", R => ({
        enabledMcpjsonServers: L([...(R?.enabledMcpjsonServers || []), ...g])
      }), void 0, storageV5_2);
      persistFailed_2 ||= error_4 != null;
    }
    if (OJn(gA(), g), y.length > 0) {
      let {
        error: error_5
      } = await ca("localSettings", R => ({
        disabledMcpjsonServers: L([...(R?.disabledMcpjsonServers || []), ...y])
      }), void 0, storageV5_2);
      persistFailed_2 ||= error_5 != null;
    }
    onDone_2({
      persistFailed: persistFailed_2
    });
  }
  let onCancel = ae(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let {
      error: error_6
    } = await ca("localSettings", g => ({
      disabledMcpjsonServers: L([...(g?.disabledMcpjsonServers || []), ...serverNames])
    }), void 0, storageV5_2);
    onDone_2({
      persistFailed: error_6 != null
    });
  }, [h, serverNames, onDone_2, storageV5_2]);
  return r(Q, {
    children: [r(be, {
      title: `${serverNames.length} new MCP servers found in this project`,
      subtitle: "Select any you wish to enable.",
      color: "warning",
      onCancel: onCancel,
      exitOnCtrlCD: !0,
      hideInputGuide: !0,
      children: [e(k, {}), e(az, {
        options: serverNames.map(p => ({
          label: L7e(p, pluginServerNames?.has(p) ?? !1),
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
  });
}
async function fSn(t) {
  if (Mw()) return {
    pendingServers: [],
    pluginServerNames: new Set()
  };
  let {
    serverNames: serverNames_2,
    pluginServerNames: pluginServerNames_2
  } = await aqr(t);
  return {
    pendingServers: serverNames_2.filter(item => Ose(item) === "pending"),
    pluginServerNames: pluginServerNames_2
  };
}
async function aqr(t) {
  let {
      servers: u
    } = Ef("project"),
    serverNames_3 = Object.keys(u),
    o = new Set(serverNames_3),
    pluginServerNames_3 = new Set(),
    {
      enabled: enabled
    } = await Ys(t),
    m = enabled.filter(A2);
  for (let b of m) {
    let v = await IAt(b, [], t);
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
async function Y3o({
  pendingServers: t,
  pluginServerNames: pluginServerNames_4
}, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await D(t.map(item => L7e(item, pluginServerNames_4.has(item))), o);
  let onDone_3 = v => {
      x(l, o).catch(() => {}).then(() => d(v));
    },
    [serverName_2, ...b] = t;
  return serverName_2 !== void 0 && b.length === 0 ? e(uSn, {
    serverName: serverName_2,
    isPluginServer: pluginServerNames_4.has(serverName_2),
    onDone: onDone_3
  }) : e(pSn, {
    serverNames: t,
    pluginServerNames: pluginServerNames_4,
    onDone: onDone_3
  });
}
async function D(t, u) {
  {
    if (!Ht()) return;
    let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    let o = await Zr(CLAUDE_JOB_DIR, u);
    if (!o) return;
    let l = t.length,
      f = O(l, "server"),
      m = O(l, "needs", "need");
    try {
      return await $l(CLAUDE_JOB_DIR, {
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
      hl(error);
    }
  }
  return;
}
async function x(t, u) {
  {
    if (!t || !Ht()) return;
    let CLAUDE_JOB_DIR_2 = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR_2) return;
    let o = await Zr(CLAUDE_JOB_DIR_2, u);
    if (!o || o.state !== "blocked") return;
    try {
      await $l(CLAUDE_JOB_DIR_2, {
        ...o,
        ...t,
        block: void 0,
        updatedAt: new Date().toISOString()
      }, u);
    } catch (error) {
      hl(error);
    }
  }
}
export { uSn, pSn, fSn, aqr, Y3o };