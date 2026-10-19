// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  g
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  xUe
} from "B:/~BUN/root/chunk-r1z1wgpe.js";
import {
  _a
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Cnn
} from "B:/~BUN/root/chunk-p7n9drc0.js";
import {
  Pp
} from "B:/~BUN/root/chunk-7j5tvnqj.js";
import {
  xp,
  fIt
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  zs
} from "B:/~BUN/root/chunk-c2nm18xm.js";
var zqt = {
    name: "InProcessTeammateTask",
    type: "in_process_teammate",
    async kill(a, s, i, r, m) {
      let {
        memberRemoval: l,
        osTeardown: o
      } = IEn(a, s, i, m);
      await Promise.all([l, o])
    }
  },
  k = 1e4;

function IEn(a, s, i, r) {
  let m = !1,
    l = null,
    o = null,
    f, u, n;
  s.update(a, (e) => {
    if (e.status !== "running") return e;
    return l = e.identity.teamName, o = e.identity.agentId, f = e.toolUseId, u = e.description, n = e.paneTeardown, e.abortController?.abort(), m = !0, e.onIdleCallbacks?.forEach((p) => p()), {
      ...e,
      status: "killed",
      notified: !0,
      endTime: Date.now(),
      onIdleCallbacks: [],
      pendingUserMessages: [],
      abortController: void 0,
      currentWorkAbortController: void 0,
      paneTeardown: void 0,
      evictAfter: void 0
    }
  });
  let c = n ? Nt(n(), k, `pane teardown did not settle within ${k}ms`).then((e) => {
    if (!e) t(`[killInProcessTeammate] pane teardown for ${a} reported failure \u2014 the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`, {
      level: "warn"
    });
    return e
  }, (e) => (t(`[killInProcessTeammate] pane teardown for ${a} did not complete cleanly: ${d(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`, {
    level: "warn"
  }), !1)) : Promise.resolve(void 0);
  if (m && o) i((e) => {
    if (!e.teamContext?.teammates?.[o]) return e;
    let {
      [o]: p, ...y
    } = e.teamContext.teammates;
    return {
      ...e,
      teamContext: {
        ...e.teamContext,
        teammates: y
      }
    }
  });
  let T = Promise.resolve();
  if (l && o) T = Cnn(l, o, {
    onlyIfJoinedBefore: Date.now()
  }, r);
  if (m) Pp(a), _a(a, "stopped", {
    toolUseId: f,
    summary: u
  }), setTimeout((e, p) => e.evictTerminal(p), fIt, s, a);
  if (o) xUe(o);
  return g("swarm_in_process_kill"), {
    killed: m,
    memberRemoval: T,
    osTeardown: c
  }
}

function _Re(a, s) {
  let i;
  for (let r of Object.values(s))
    if (xp(r) && r.identity.agentId === a) {
      if (r.status === "running") return r;
      if (!i) i = r
    } return i
}

function OEn(a, s) {
  let i = _Re(a, s);
  if (i) return {
    status: "found",
    task: i
  };
  let r = Object.values(s).filter(xp).filter((n) => n.identity.resumableAgentId === a),
    m = r.find((n) => n.status === "running") ?? r[0];
  if (m) return {
    status: "found",
    task: m
  };
  let l = new Map;
  for (let n of Object.values(s)) {
    if (!xp(n) || n.identity.agentName !== a) continue;
    let c = l.get(n.identity.agentId);
    if (!c || c.status !== "running" && n.status === "running") l.set(n.identity.agentId, n)
  }
  let o = [...l.values()],
    f = o.filter((n) => n.status === "running"),
    u = f.length > 0 ? f : o;
  if (u.length === 1) return {
    status: "found",
    task: u[0]
  };
  if (u.length > 1) return {
    status: "ambiguous",
    candidates: u.map((n) => n.identity.agentId),
    anyLive: u.some((n) => !zs(n.status))
  };
  return {
    status: "not_found"
  }
}

function L7o(a) {
  return Ort(a).filter((s) => s.status === "running").map((s) => s.identity.agentId)
}

function Ort(a) {
  return Object.values(a).filter(xp)
}
export {
  _Re,
  OEn,
  L7o,
  Ort,
  zqt,
  IEn
};
