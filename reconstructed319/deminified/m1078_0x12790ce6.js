// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ck, d$r } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { rSt } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Gt, HD } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { d5, lS } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { qn, tl } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { ot, s, n, sn } from "B:/~BUN/root/chunk-qey16aan.js";
import { xo } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { si, cu, so, ti as selectedValue, Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { K6t, Fge, ki, Uh } from "B:/~BUN/root/chunk-27h4st9h.js";
import { ic, Td, Fo } from "B:/~BUN/root/chunk-4vcs773m.js";
import { jj } from "B:/~BUN/root/chunk-jdm4aq80.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, A, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function E() {
  let t = S(1),
    d;
  if (t[0] === w) d = r(n, {
    children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(sn, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "."]
  }), t[0] = d;else d = t[0];
  return d;
}
function R3n({
  serverName: serverName,
  isPluginServer = !1,
  onDone: onDone
}) {
  let {
      storageV5: storageV5
    } = Fe(),
    a = A(!1),
    p = si(xo),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = so(),
    h = cu(epoch, xo);
  function refuseInput() {
    if (p() || refusedWithin(xo)) return noteRefused(), !0;
    return !1;
  }
  async function k(u) {
    if (refuseInput()) return;
    if (a.current) return;
    switch (a.current = !0, l("tengu_mcp_dialog_choice", {
      choice: f(u)
    }), u) {
      case "yes":
      case "yes_all":
        {
          let persistFailed = !1;
          {
            let {
              error: error
            } = await tl("localSettings", M => {
              let C = M?.enabledMcpjsonServers || [];
              if (C.includes(serverName)) return null;
              return {
                enabledMcpjsonServers: [...C, serverName]
              };
            }, void 0, storageV5);
            persistFailed ||= error != null;
          }
          if (u === "yes_all") {
            let {
              error: error_2
            } = await qn("localSettings", {
              enableAllProjectMcpServers: !0
            }, void 0, storageV5);
            persistFailed ||= error_2 != null;
          }
          d$r(HD(), [serverName]), onDone({
            persistFailed: persistFailed
          });
          break;
        }
      case "no":
        {
          let {
            error: error_3
          } = await tl("localSettings", y => {
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
  return r(ke, {
    title: `New MCP server found in this project: ${rSt(serverName, isPluginServer)}`,
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
      onChange: u => void k(u),
      onCancel: () => void k("no"),
      hideIndexes: !0,
      refuseInput: refuseInput,
      defaultFocusValue: "no",
      selectedValue: selectedValue
    }, h.remountKey)]
  });
}
j();
function A3n({
  serverNames: serverNames,
  pluginServerNames: pluginServerNames,
  onDone: onDone_2
}) {
  let {
      storageV5: storageV5_2
    } = Fe(),
    a = A(!1),
    p = si(xo),
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = so(),
    v = ot(),
    h = ue(() => {
      if (p() || refusedWithin_2(xo)) return noteRefused_2(), !0;
      return !1;
    }, [p, refusedWithin_2, noteRefused_2]);
  async function onSubmit(u) {
    if (h()) return;
    if (a.current) return;
    a.current = !0;
    let [g, y] = lS(serverNames, C => u.includes(C));
    l("tengu_mcp_multidialog_choice", {
      approved: g.length,
      rejected: y.length
    });
    let persistFailed_2 = !1;
    if (g.length > 0) {
      let {
        error: error_4
      } = await tl("localSettings", D => ({
        enabledMcpjsonServers: L([...(D?.enabledMcpjsonServers || []), ...g])
      }), void 0, storageV5_2);
      persistFailed_2 ||= error_4 != null;
    }
    if (d$r(HD(), g), y.length > 0) {
      let {
        error: error_5
      } = await tl("localSettings", D => ({
        disabledMcpjsonServers: L([...(D?.disabledMcpjsonServers || []), ...y])
      }), void 0, storageV5_2);
      persistFailed_2 ||= error_5 != null;
    }
    onDone_2({
      persistFailed: persistFailed_2
    });
  }
  let onCancel = ue(async () => {
    if (h()) return;
    if (a.current) return;
    a.current = !0;
    let {
      error: error_6
    } = await tl("localSettings", g => ({
      disabledMcpjsonServers: L([...(g?.disabledMcpjsonServers || []), ...serverNames])
    }), void 0, storageV5_2);
    onDone_2({
      persistFailed: error_6 != null
    });
  }, [h, serverNames, onDone_2, storageV5_2]);
  return r(ne, {
    children: [r(ke, {
      title: `${serverNames.length} new MCP servers found in this project`,
      subtitle: "Select any you wish to enable.",
      color: "warning",
      onCancel: onCancel,
      exitOnCtrlCD: !0,
      hideInputGuide: !0,
      children: [e(E, {}), e(jj, {
        options: serverNames.map(u => ({
          label: rSt(u, pluginServerNames?.has(u) ?? !1),
          value: u
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
  });
}
async function x3n(t) {
  if (Ck()) return {
    pendingServers: [],
    pluginServerNames: new Set()
  };
  let {
    serverNames: serverNames_2,
    pluginServerNames: pluginServerNames_2
  } = await OFo(t);
  return {
    pendingServers: serverNames_2.filter(item => Fge(item) === "pending"),
    pluginServerNames: pluginServerNames_2
  };
}
async function OFo(t) {
  let {
      servers: d
    } = Uh("project"),
    serverNames_3 = Object.keys(d),
    o = new Set(serverNames_3),
    pluginServerNames_3 = new Set(),
    {
      enabled: enabled
    } = await ki(t),
    m = enabled.filter(d5);
  for (let b of m) {
    let v = await K6t(b, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || pluginServerNames_3.has(h)) continue;
      serverNames_3.push(h), pluginServerNames_3.add(h);
    }
  }
  return {
    serverNames: serverNames_3,
    pluginServerNames: pluginServerNames_3,
    rootServers: d
  };
}
async function Z5s({
  pendingServers: t,
  pluginServerNames: pluginServerNames_4
}, c, o) {
  if (t.length === 0) return null;
  let a;
  a = await _(t.map(item => rSt(item, pluginServerNames_4.has(item))), o);
  let onDone_3 = v => {
      T(a, o).catch(() => {}).then(() => c(v));
    },
    [serverName_2, ...b] = t;
  return serverName_2 !== void 0 && b.length === 0 ? e(R3n, {
    serverName: serverName_2,
    isPluginServer: pluginServerNames_4.has(serverName_2),
    onDone: onDone_3
  }) : e(A3n, {
    serverNames: t,
    pluginServerNames: pluginServerNames_4,
    onDone: onDone_3
  });
}
async function _(t, d) {
  {
    if (!Gt()) return;
    let CLAUDE_JOB_DIR = i.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    let o = await Fo(CLAUDE_JOB_DIR, d);
    if (!o) return;
    let a = t.length,
      p = P(a, "server"),
      m = P(a, "needs", "need");
    try {
      return await ic(CLAUDE_JOB_DIR, {
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
      };
    } catch (error) {
      Td(error);
    }
  }
  return;
}
async function T(t, d) {
  {
    if (!t || !Gt()) return;
    let CLAUDE_JOB_DIR_2 = i.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR_2) return;
    let o = await Fo(CLAUDE_JOB_DIR_2, d);
    if (!o || o.state !== "blocked") return;
    try {
      await ic(CLAUDE_JOB_DIR_2, {
        ...o,
        ...t,
        block: void 0,
        updatedAt: new Date().toISOString()
      }, d);
    } catch (error) {
      Td(error);
    }
  }
}
export { R3n, A3n, x3n, OFo, Z5s };