// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import { hX, MEo, GDt } from "B:/~BUN/root/chunk-5ec3ghdy.js";
import { wj, dpt } from "B:/~BUN/root/chunk-p7n9drc0.js";
import { yde } from "B:/~BUN/root/chunk-q9dtdza4.js";
function c(e) {
  return lt(MEo(), e);
}
function p(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return "";
}
function I() {
  let ITERM_SESSION_ID = a.ITERM_SESSION_ID;
  if (!ITERM_SESSION_ID) return null;
  let s = ITERM_SESSION_ID.indexOf(":");
  if (s === -1) return null;
  return ITERM_SESSION_ID.slice(s + 1);
}
class g {
  type = "iterm2";
  displayName = "iTerm2";
  teammateSessionIds = [];
  firstPaneUsed = !1;
  paneCreationLock = yde();
  async isAvailable() {
    let e = hX();
    if (t(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e) return t("[ITermBackend] isAvailable: false (not in iTerm2)"), !1;
    let s = await GDt();
    return t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`), s;
  }
  async isRunningInside() {
    let e = hX();
    return t(`[ITermBackend] isRunningInside: ${e}`), e;
  }
  async createTeammatePaneInSwarmView(e, s) {
    t(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
    let o = await this.paneCreationLock.acquire();
    try {
      while (!0) {
        let isFirstTeammate = !this.firstPaneUsed;
        t(`[ITermBackend] Creating pane: isFirstTeammate=${isFirstTeammate}, existingPanes=${this.teammateSessionIds.length}`);
        let r, i;
        if (isFirstTeammate) {
          let l = I();
          if (l) r = ["session", "split", "-v", "-s", l], t(`[ITermBackend] First split from leader session: ${l}`);else r = ["session", "split", "-v"], t("[ITermBackend] First split from active session (no leader ID)");
        } else if (i = this.teammateSessionIds.at(-1), i) r = ["session", "split", "-s", i], t(`[ITermBackend] Subsequent split from teammate session: ${i}`);else r = ["session", "split"], t("[ITermBackend] Subsequent split from active session (no teammate ID)");
        let d = await c(r);
        if (d.code !== 0) {
          if (i) {
            let l = await c(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(i)) {
              t(`[ITermBackend] Split failed targeting dead session ${i}, pruning and retrying: ${d.stderr}`);
              let f = this.teammateSessionIds.indexOf(i);
              if (f !== -1) this.teammateSessionIds.splice(f, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
              continue;
            }
          }
          throw new wj(`Failed to create iTerm2 split pane: ${d.stderr}`);
        }
        let paneId = p(d.stdout);
        if (!paneId) throw Error(`Failed to parse session ID from split output: ${d.stdout}`);
        if (t(`[ITermBackend] Created teammate pane for ${e}: ${paneId}`), isFirstTeammate) this.firstPaneUsed = !0;
        return this.teammateSessionIds.push(paneId), {
          paneId: paneId,
          isFirstTeammate: isFirstTeammate
        };
      }
    } finally {
      o();
    }
  }
  async sendCommandToPane(e, s, o) {
    try {
      dpt(s);
    } catch (error) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), error;
    }
    let n = e ? ["-s", e] : [];
    await c(["session", "send", ...n, "\x15"]);
    let r = await c(["session", "run", ...n, s]);
    if (r.code !== 0) throw new wj(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
  }
  async setPaneBorderColor(e, s, o) {}
  async setPaneTitle(e, s, o, n) {}
  async enablePaneBorderStatus(e, s) {}
  async killPane(e, s) {
    let o = await c(["session", "close", "-f", "-s", e]),
      n = this.teammateSessionIds.indexOf(e);
    if (n !== -1) this.teammateSessionIds.splice(n, 1);
    if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
    return o.code === 0;
  }
}
export { g as ITermBackend };