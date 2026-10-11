// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Y, we, r9n, Cqr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import { Th } from "B:/~BUN/root/chunk-rdxve5qj.js";
import "B:/~BUN/root/chunk-5w2ecytn.js";
import "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-vpejnsp4.js";
import "B:/~BUN/root/chunk-nhxcgss8.js";
import "B:/~BUN/root/chunk-6spmd6p4.js";
import "B:/~BUN/root/chunk-snmb1kqg.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import "B:/~BUN/root/chunk-dv435n4g.js";
import "B:/~BUN/root/chunk-ht635kqk.js";
import "B:/~BUN/root/chunk-4h4gje25.js";
import "B:/~BUN/root/chunk-ceg1zct0.js";
import "B:/~BUN/root/chunk-3rzkfay5.js";
import "B:/~BUN/root/chunk-339q6g5w.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import "B:/~BUN/root/chunk-51n463p1.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-5px6g0cn.js";
import "B:/~BUN/root/chunk-py7yqpgt.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import "B:/~BUN/root/chunk-bpp59nyd.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import "B:/~BUN/root/chunk-9fcn5kmc.js";
import "B:/~BUN/root/chunk-y72v2pst.js";
import "B:/~BUN/root/chunk-ah3egpyh.js";
import "B:/~BUN/root/chunk-65064145.js";
import "B:/~BUN/root/chunk-rwwxddqq.js";
import "B:/~BUN/root/chunk-1f9marcm.js";
import "B:/~BUN/root/chunk-tsjnk8ma.js";
import "B:/~BUN/root/chunk-290k5gh5.js";
import "B:/~BUN/root/chunk-7zje4z8c.js";
import "B:/~BUN/root/chunk-sd4cj2qx.js";
import "B:/~BUN/root/chunk-qqgpf856.js";
import "B:/~BUN/root/chunk-8hs4bwwk.js";
import "B:/~BUN/root/chunk-g2vddtj4.js";
import "B:/~BUN/root/chunk-nr0fnbpc.js";
import "B:/~BUN/root/chunk-vyq5y0zs.js";
import "B:/~BUN/root/chunk-2ppgegpr.js";
import { qEo, KM, a0t } from "B:/~BUN/root/chunk-m1qtc24s.js";
import "B:/~BUN/root/chunk-0djrqga0.js";
import { KEe, ay, $1n, U1n, cxr } from "B:/~BUN/root/chunk-8p6es4nr.js";
import "B:/~BUN/root/chunk-pgrf1rrh.js";
import "B:/~BUN/root/chunk-10m2dkry.js";
import { wD, mi } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import "B:/~BUN/root/chunk-r833zsf7.js";
import "B:/~BUN/root/chunk-w5bkq1td.js";
import "B:/~BUN/root/chunk-t1t358ee.js";
import "B:/~BUN/root/chunk-8j4yaj30.js";
import "B:/~BUN/root/chunk-g1mh72ry.js";
import "B:/~BUN/root/chunk-mjdkd2h9.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import "B:/~BUN/root/chunk-batgyebn.js";
import { rename as d } from "fs/promises";
var l = "session";
function c(t) {
  return `${l}-${t.slice(0, 8)}`;
}
function p() {
  if (r9n() === void 0) {
    let t = process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME || null;
    delete process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME, Cqr(t);
  }
  return r9n() ?? null;
}
async function x(t, n) {
  let i = t?.existingTeamName || p(),
    e = i ?? c(Y()),
    a = wD(mi, e),
    teamFilePath = KEe(e);
  if (!(i ? await ay(e, n) : null)) {
    let r = {
      name: e,
      createdAt: Date.now(),
      leadAgentId: a,
      leadSessionId: Y(),
      members: [{
        agentId: a,
        name: mi,
        agentType: mi,
        joinedAt: Date.now(),
        tmuxPaneId: "leader",
        cwd: we(),
        subscriptions: [],
        backendType: "in-process"
      }]
    };
    await U1n(e, r, n).catch(T => $1n(e, T));
  }
  qEo(e);
  let o = Y();
  if (e !== o) await d(KM(o), KM(e)).catch(() => {});
  await a0t(e, n), cxr(e);
  let color = Th[0];
  return {
    teamContext: {
      teamName: e,
      teamFilePath: teamFilePath,
      leadAgentId: a,
      teammates: {
        [a]: {
          name: mi,
          agentType: mi,
          color: color,
          tmuxSessionName: "in-process",
          tmuxPaneId: "leader",
          cwd: we(),
          spawnedAt: Date.now()
        }
      }
    },
    teammateColors: {
      assignments: new Map([[a, color]]),
      index: 1
    }
  };
}
export { x as initializeSessionTeam };