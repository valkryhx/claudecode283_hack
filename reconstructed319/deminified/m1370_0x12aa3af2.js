// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { er } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Nb, Jf } from "B:/~BUN/root/chunk-rr294jrm.js";
import { $Xe, cd } from "B:/~BUN/root/chunk-ysxmr1nk.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ni } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { aHn, uU } from "B:/~BUN/root/chunk-esnm3r09.js";
import { Ip } from "B:/~BUN/root/chunk-tdekz3md.js";
import { ber } from "B:/~BUN/root/chunk-h993yryc.js";
var a = "/plugin opens a panel in the terminal, so it can't run in the desktop app. Click + next to the prompt box, then Plugins: Add plugin installs from a marketplace you've added, and Manage plugins turns a plugin on or off or uninstalls it.",
  c = "For a marketplace you haven't added, Add marketplace in the app takes a GitHub owner/repo or a Git URL. Or, in a terminal with Claude Code installed on the machine this session runs on, run `claude plugin marketplace add <source>` and then `claude plugin install <plugin>@<marketplace>`, using the marketplace name the first command prints. Then send /reload-plugins here.",
  p = "Your organization limits which marketplaces can be added. For a plugin that isn't in Add plugin, contact your admin.";
function l(e) {
  if (e?.name !== "plugin" || !ber() || !aHn()) return;
  try {
    let n = uU() === null;
    return `${a} ${n ? c : p}`;
  } catch (error) {
    return t(`Marketplace policy could not be read: ${d(error)}`, {
      level: "error"
    }), a;
  }
}
function g() {
  return {
    teleport: ({
      remoteSessionId: remoteSessionId
    }) => `/teleport pulls a cloud session into a terminal on your own machine, so it can't run from inside this session. To continue this session locally, run claude --teleport ${remoteSessionId} from a checkout of this repository. On claude.ai you can also choose Open in \u2192 Terminal from the session menu, which copies that command.`,
    session: ({
      remoteSessionId: remoteSessionId_2
    }) => `This session is already running as a cloud session: ${m(remoteSessionId_2)}. To continue it in your terminal, run claude --teleport ${remoteSessionId_2} from a checkout of this repository.`,
    "remote-control": ({
      remoteSessionId: remoteSessionId_3
    }) => `Remote Control connects a terminal session to claude.ai, and this session is already running as a cloud session: ${m(remoteSessionId_3)}.`,
    permissions: () => {
      if (er() || !tn() || !Kt("projectSettings")) return;
      return Ip() ? "Your organization manages the permission rules for this session, so permission rules in your own settings files don't apply. To change a rule, contact your admin." : "This cloud session has no permissions panel. Its rules come from its settings files: in a session with one repository, ask Claude to edit .claude/settings.json, and commit it to the repository to keep it for later sessions. Auto mode rules can't be set that way: a cloud session doesn't read them from that file or from ~/.claude/settings.json on your machine. For what each session reads, see https://code.claude.com/docs/en/settings#settings-in-cloud-sessions";
    },
    ...{},
    ...{}
  };
}
var h = {
  usage: usage
};
function usage() {
  let e = u();
  return e ? `Usage isn't shown in this chat. To see it, open Settings \u2192 Usage on claude.ai: ${$Xe(e, i.SESSION_INGRESS_URL)}/settings/usage` : void 0;
}
function m(e) {
  return cd(e, i.SESSION_INGRESS_URL);
}
function u() {
  let CLAUDE_CODE_REMOTE_SESSION_ID = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!CLAUDE_CODE_REMOTE_SESSION_ID) return;
  try {
    return Jf(Nb(CLAUDE_CODE_REMOTE_SESSION_ID, "CLAUDE_CODE_REMOTE_SESSION_ID"));
  } catch {
    return;
  }
}
function E4o(e, s) {
  let n = ni(e, s),
    remoteSessionId_4 = u();
  if (!remoteSessionId_4) return l(n);
  if (!n) return;
  let r = g()[n.name] ?? (er() ? h[n.name] : void 0);
  return r ? r({
    remoteSessionId: remoteSessionId_4
  }) : void 0;
}
export { usage as v4o, E4o };