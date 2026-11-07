// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-gq1er5y2.js";
import "B:/~BUN/root/chunk-thn0wk2x.js";
import "B:/~BUN/root/chunk-88zb3509.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import "B:/~BUN/root/chunk-83p1z1q5.js";
import {
  Goe,
  Qys,
  oZt
} from "B:/~BUN/root/chunk-az0cmmyt.js";
import {
  I2,
  LDt
} from "B:/~BUN/root/chunk-98qgaht2.js";
import {
  iY
} from "B:/~BUN/root/chunk-tx4kppkg.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";

function c(e) {
  return ut(Qys(), e)
}

function p(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return ""
}

function I() {
  let e = i.ITERM_SESSION_ID;
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
  paneCreationLock = iY();
  async isAvailable() {
    let e = Goe();
    if (t(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e) return t("[ITermBackend] isAvailable: false (not in iTerm2)"), !1;
    let s = await oZt();
    return t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s?"found":"not found"})`), s
  }
  async isRunningInside() {
    let e = Goe();
    return t(`[ITermBackend] isRunningInside: ${e}`), e
  }
  async createTeammatePaneInSwarmView(e, s) {
    t(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
    let o = await this.paneCreationLock.acquire();
    try {
      while (!0) {
        let n = !this.firstPaneUsed;
        t(`[ITermBackend] Creating pane: isFirstTeammate=${n}, existingPanes=${this.teammateSessionIds.length}`);
        let r, a;
        if (n) {
          let l = I();
          if (l) r = ["session", "split", "-v", "-s", l], t(`[ITermBackend] First split from leader session: ${l}`);
          else r = ["session", "split", "-v"], t("[ITermBackend] First split from active session (no leader ID)")
        } else if (a = this.teammateSessionIds.at(-1), a) r = ["session", "split", "-s", a], t(`[ITermBackend] Subsequent split from teammate session: ${a}`);
        else r = ["session", "split"], t("[ITermBackend] Subsequent split from active session (no teammate ID)");
        let d = await c(r);
        if (d.code !== 0) {
          if (a) {
            let l = await c(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(a)) {
              t(`[ITermBackend] Split failed targeting dead session ${a}, pruning and retrying: ${d.stderr}`);
              let f = this.teammateSessionIds.indexOf(a);
              if (f !== -1) this.teammateSessionIds.splice(f, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
              continue
            }
          }
          throw new I2(`Failed to create iTerm2 split pane: ${d.stderr}`)
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
      LDt(s)
    } catch (a) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), a
    }
    let n = e ? ["-s", e] : [];
    await c(["session", "send", ...n, "\x15"]);
    let r = await c(["session", "run", ...n, s]);
    if (r.code !== 0) throw new I2(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`)
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
