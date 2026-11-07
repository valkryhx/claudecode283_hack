// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bKn,
  xn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Md
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  qk,
  Vt,
  i1n
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Qoe,
  zkr,
  k_e,
  rLt
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  ICn,
  k8e,
  Vre
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  sgo
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  Ckt
} from "B:/~BUN/root/chunk-qg8vk00h.js";
import {
  Wgn
} from "B:/~BUN/root/chunk-s726q9kd.js";
import {
  Gr
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  h6n,
  o3s
} from "B:/~BUN/root/chunk-d55yessp.js";
import {
  Zot
} from "B:/~BUN/root/chunk-3dbnj73j.js";
import {
  SB
} from "B:/~BUN/root/chunk-vsw8ycmm.js";
import {
  rri,
  m7n
} from "B:/~BUN/root/chunk-a5a2wdx1.js";
import {
  Qqn
} from "B:/~BUN/root/chunk-b0vpqn1b.js";
import {
  akt
} from "B:/~BUN/root/chunk-7k5r3sns.js";
import {
  she
} from "B:/~BUN/root/chunk-0rs69czh.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  uXn
} from "B:/~BUN/root/chunk-9v2yejes.js";
import {
  ue,
  O,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function EWt(...n) {
  let {
    mode: t
  } = n[1].initialState.toolPermissionContext;
  if (rLt(t), le()) {
    let {
      remoteSessionConfig: m,
      directConnectConfig: p,
      sshSession: l
    } = n[2];
    if (!(xn() || !!m || !!p || !!l)) bKn({
      entrypoint: "terminal",
      ownEventsRequested: sgo(t)
    })
  }
  return qoa(...n)
}
async function qoa(n, t, m, p) {
  let {
    AppRoot: l
  } = await import("B:/~BUN/root/chunk-4eeftmhf.js"), {
    REPL: u
  } = await import("B:/~BUN/root/chunk-z1c641ts.js");

  function S(r) {
    let a = Gr();
    h6n();
    let f = A(r.commands),
      h = ue((s) => {
        f.current = s
      }, []),
      g = A(() => {
        throw Error("engine: queryParams called before REPL registered builder")
      }),
      M = ue((s) => {
        g.current = s
      }, []),
      [c] = y(() => Ckt({
        run: SB,
        queryParams: async (s) => g.current(),
        commands: () => Vre(f.current),
        models: () => k_e(Qoe()),
        unavailableModels: () => k_e(zkr()),
        agents: () => ICn(a.getState().agentDefinitions.activeAgents),
        account: i1n(),
        outputStyle: k8e(),
        mcpServers: () => uXn(a.getState().mcp.clients),
        ambient: Wgn,
        initialModel: () => {
          let s = a.getState();
          return Vt(s.mainLoopModelForSession ?? s.mainLoopModel ?? qk())
        },
        initialPermissionMode: () => Md(a.getState().toolPermissionContext.mode),
        hostOwnsPermissionMode: !0,
        hostOwnsModel: !0
      }));
    return O(() => () => c.close(), [c]), e(u, {
      ...r,
      engine: c,
      onCommandsChange: h,
      onQueryParamsChange: M
    })
  }
  let {
    session: i,
    storageV5: o,
    credentials: d,
    fleetNudgeStore: R = new Zot({
      storageV5: o
    })
  } = t, P = akt(o);
  await rri({
    onHealthy: () => o3s(o),
    storageV5: o
  });
  let C = Qqn(i, t.initialState, (r) => she(r, i, o, d));
  try {
    await p(n, e(l, {
      session: i,
      storageV5: o,
      messageQueue: P,
      store: C,
      fleetNudgeStore: R,
      sessionHooks: t.sessionHooks,
      writesExitHandoff: !0,
      getFpsMetrics: t.getFpsMetrics,
      stats: t.stats,
      keybindings: !1,
      children: e(S, {
        ...m
      })
    }), i, o, d)
  } catch (r) {
    throw await m7n().catch(() => !1), r
  }
}
export {
  EWt,
  qoa
};
