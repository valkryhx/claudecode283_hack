// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import {
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import {
  tt
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import {
  FV,
  Bxr,
  Aat
} from "B:/~BUN/root/chunk-7azfcycf.js";
import {
  KL,
  L4e
} from "B:/~BUN/root/chunk-8p6es4nr.js";
import {
  M8e
} from "B:/~BUN/root/chunk-dfh5rt4g.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";

function c(e) {
  return tt(Bxr(), e)
}

function p(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return ""
}

function I() {
  let e = a.ITERM_SESSION_ID;
  if (!e) return null;
  let s = e.indexOf(":");
  if (s === -1) return null;
  return e.slice(s + 1)
}
class g {
  type = "iterm2";
  displayName = "iTerm2";
  teammateSessionIds = [];
  firstPaneUsed = !1;
  paneCreationLock = M8e();
  async isAvailable() {
    let e = FV();
    if (t(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e) return t("[ITermBackend] isAvailable: false (not in iTerm2)"), !1;
    let s = await Aat();
    return t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s?"found":"not found"})`), s
  }
  async isRunningInside() {
    let e = FV();
    return t(`[ITermBackend] isRunningInside: ${e}`), e
  }
  async createTeammatePaneInSwarmView(e, s) {
    t(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
    let o = await this.paneCreationLock.acquire();
    try {
      while (!0) {
        let n = !this.firstPaneUsed;
        t(`[ITermBackend] Creating pane: isFirstTeammate=${n}, existingPanes=${this.teammateSessionIds.length}`);
        let r, i;
        if (n) {
          let l = I();
          if (l) r = ["session", "split", "-v", "-s", l], t(`[ITermBackend] First split from leader session: ${l}`);
          else r = ["session", "split", "-v"], t("[ITermBackend] First split from active session (no leader ID)")
        } else if (i = this.teammateSessionIds.at(-1), i) r = ["session", "split", "-s", i], t(`[ITermBackend] Subsequent split from teammate session: ${i}`);
        else r = ["session", "split"], t("[ITermBackend] Subsequent split from active session (no teammate ID)");
        let d = await c(r);
        if (d.code !== 0) {
          if (i) {
            let l = await c(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(i)) {
              t(`[ITermBackend] Split failed targeting dead session ${i}, pruning and retrying: ${d.stderr}`);
              let f = this.teammateSessionIds.indexOf(i);
              if (f !== -1) this.teammateSessionIds.splice(f, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
              continue
            }
          }
          throw new KL(`Failed to create iTerm2 split pane: ${d.stderr}`)
        }
        let u = p(d.stdout);
        if (!u) throw Error(`Failed to parse session ID from split output: ${d.stdout}`);
        if (t(`[ITermBackend] Created teammate pane for ${e}: ${u}`), n) this.firstPaneUsed = !0;
        return this.teammateSessionIds.push(u), {
          paneId: u,
          isFirstTeammate: n
        }
      }
    } finally {
      o()
    }
  }
  async sendCommandToPane(e, s, o) {
    try {
      L4e(s)
    } catch (i) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), i
    }
    let n = e ? ["-s", e] : [];
    await c(["session", "send", ...n, "\x15"]);
    let r = await c(["session", "run", ...n, s]);
    if (r.code !== 0) throw new KL(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`)
  }
  async setPaneBorderColor(e, s, o) {}
  async setPaneTitle(e, s, o, n) {}
  async enablePaneBorderStatus(e, s) {}
  async killPane(e, s) {
    let o = await c(["session", "close", "-f", "-s", e]),
      n = this.teammateSessionIds.indexOf(e);
    if (n !== -1) this.teammateSessionIds.splice(n, 1);
    if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
    return o.code === 0
  }
}
export {
  g as ITermBackend
};
