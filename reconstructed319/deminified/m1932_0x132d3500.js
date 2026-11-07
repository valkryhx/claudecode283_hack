// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Fp } from "B:/~BUN/root/chunk-65j2302z.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { JD } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { dn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { mgt, xd, k2e } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { Roe as name, k0i, v0i } from "B:/~BUN/root/chunk-8x466dw5.js";
import { N7n, gKt } from "B:/~BUN/root/chunk-nzmdrz0a.js";
import { o, E, I, C, u, He, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { fm } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
var ie = (kind, details) => ({
  kind: kind,
  details: details
});
var o_ = (e, t = []) => ({
  kind: "refused",
  refusal: ie(e, t)
});
var se = "Publishing from a cloud session isn't offered yet, and the plugin's files are in this cloud session, where the Claude app or a terminal on your computer can't reach them. Nothing was sent.";
var re = () => !ye() && !i.DISABLE_LOGIN_COMMAND;
var ne = () => {
  let e = xd(gKt);
  return (e === "cache_miss" || e === "route_missing") && !k2e(gKt) && mgt({
    restrictions: {},
    compliance_taints: []
  }, gKt, JD());
};
var ae = "Claude Code couldn't load your organization's policy, so publishing from here is off for now: try again in a moment, or publish this plugin from claude.ai. Nothing was sent.";
var IKr = 52428800;
var Qzo = 1e4;
var le = Object.freeze({
  "flag-off": "Publishing plugins isn't available in this session. Nothing was sent.",
  "third-party": "Publishing goes through claude.ai, and this session uses another provider. Nothing was sent.",
  bare: "Publishing is off under --bare. Nothing was sent.",
  "traffic-off": "Publishing is off while nonessential traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC). Nothing was sent.",
  policy: "Your organization's policy doesn't allow publishing from Claude Code: publish this plugin from claude.ai. Nothing was sent.",
  "cloud-session": "Publishing from a cloud session isn't offered yet. Publish from the Claude app or from a terminal on your own computer. Nothing was sent.",
  "signed-out": "Publishing needs a claude.ai sign-in. Sign in with /login, then publish again.",
  "no-organization": "This session is signed in by the app that started it, which didn't say which organization that is. Publish this plugin from claude.ai, or ask Claude in a terminal session signed in to claude.ai. Nothing was sent.",
  "nobody-to-ask": "Publishing waits for your answer, and this session has nobody to ask. Ask Claude to publish it in a session of your own. Nothing was sent.",
  "other-question": "The answer that came back was to another question than the one this session asked, so nothing was sent. Ask Claude to publish again.",
  "network-path": "That path names a place on the network, which publishing does not open. Nothing was read or sent.",
  "read-denied": "This session's permissions don't allow reading that folder, or a file in it that would be sent. Nothing was sent.",
  "write-denied": "This session's permissions don't allow writing the manifest this publish would add to the folder. Nothing was written or sent.",
  "no-folder": "No folder at that path. Nothing was sent.",
  "not-a-plugin": "That folder holds no plugin: no manifest, commands, skills, agents or hooks. Nothing was sent.",
  findings: "The plugin didn't pass validation. Fix these, then publish again. Nothing was sent.",
  "too-many-files": `The plugin has more than ${Qzo} files to send. Name what isn't part of it in .gitignore. Nothing was sent.`,
  "too-large": `The plugin is larger than ${en(IKr)}, the most publishing sends. Nothing was published.`,
  unreadable: "Part of the folder couldn't be read, so nothing was sent.",
  changed: "The folder changed while it was being published, so nothing was sent. Publish again.",
  unwritten: "The manifest couldn't be written to .claude-plugin/plugin.json, so nothing was sent.",
  stopped: "Publishing was stopped.",
  failed: "Publishing ran into an error and stopped.",
  "not-served": "claude.ai doesn't offer publishing from Claude Code for your organization yet. Nothing was sent.",
  "publishing-off": "Your organization doesn't accept member submissions. The upload is on your own shelf on claude.ai (My Uploads), where only you see it and where you can remove it. An administrator chooses a publishing policy in the organization settings.",
  "creation-off": "Your organization has plugin creation turned off. An administrator turns it on in the organization settings on claude.ai.",
  exists: "A plugin of this name is already in your uploads on claude.ai, and it was not replaced.",
  invalid: "claude.ai didn't take the plugin: it failed validation.",
  "shelf-full": "Your uploads on claude.ai are full. Remove one there, then publish again.",
  scan: "The plugin didn't pass the security scan on claude.ai, so it wasn't submitted. It is on your own shelf, where only you see it.",
  "scan-pending": "The security scan of the plugin is still running. Publish again in a few minutes.",
  "not-current": "The new version is saved to your uploads on claude.ai, but it isn't the plugin's current version there, so nothing was sent to your organization. Open the plugin on claude.ai, make the new version current, and publish it from there.",
  "already-pending": "Your earlier submission of this plugin is still waiting for review. To send this version instead, withdraw that submission from the plugin's page on claude.ai, then publish again.",
  "installs-for-members": "A plugin published under this name may be installed automatically for some or all of your organization's members, so it can only be published from claude.ai. Nothing was sent to your organization. Publish it from your uploads on claude.ai.",
  "nothing-new": "This version is already in your organization's library.",
  "in-progress": "An earlier submission of this plugin is being published. Publish again once it is in the library.",
  "needs-admin": "This update needs an administrator: ask one to publish it from claude.ai.",
  "needs-org-settings": "This update needs a change to the organization's settings on claude.ai first. Ask an administrator.",
  "name-conflict": "An item with this name is already in your organization's library. Rename yours and publish again.",
  "library-full": "Your organization's library is full. An administrator makes room on claude.ai.",
  legal: "Your organization requires an attestation with each submission. Publish this plugin from claude.ai.",
  busy: "claude.ai was busy with this plugin or did not answer. Publish again in a moment.",
  other: "claude.ai didn't take the plugin."
});
var ue = "Publishing needs a claude.ai sign-in, and this session has none it can publish on. Publish this plugin from claude.ai, or ask Claude to publish it from a session signed in to claude.ai.";
function pe(e) {
  if (e === "signed-out" && !re()) return ue;
  if (e === "policy" && ne()) return ae;
  if (e === "cloud-session" && Fp()) return se;
  return le[e];
}
function de(e) {
  return e.kind === "published" ? ["Send colleagues this link to add it: " + Et(e.link), "In Claude Code, they can also add the organization library under " + "/plugin \u2192 Marketplaces, then run /plugin install " + Et(e.install)] : [];
}
var Zzo = e => `${nn().CLAUDE_AI_ORIGIN}/customize/plugins/` + encodeURIComponent(e);
var fe = Object.freeze({
  published: "published to your organization's library.",
  "in-review": "uploaded to your shelf and sent to your organization for an administrator's review. It reaches the library once approved.",
  publishing: "uploaded to your shelf and approved. It is on its way into your organization's library.",
  "on-shelf": "uploaded to your own shelf on claude.ai, and not submitted yet: its scan was still running when the wait for it ended. Submit it from claude.ai once the scan has passed."
});
var me = 40;
var Zti = e => [e.verdict ?? ""].filter(Boolean).map(item => "Security scan on claude.ai: " + Et(item, me));
var he = e => [fe[e.kind], ...[e].flatMap(item => "verdict" in item ? [item] : []).flatMap(Zti), ...[e].filter(item => "isUnscanned" in item && item.isUnscanned).map(() => "claude.ai didn't run a security scan on this plugin."), ...de(e), ...[e].flatMap(item => "id" in item ? [item.id] : []).map(item => `Follow it on claude.ai: ${Zzo(item)}`)];
var MKr = e => Et([e.name, e.version].filter(Boolean).join(" "));
var ce = " (the plugin's own version; the library numbers its copies itself)";
var ge = e => MKr(e) + (e.version ? ce : "");
function eGo(e) {
  return e.kind === "refused" ? [pe(e.refusal.kind), ...e.refusal.details.map(item => Et(item))] : he(e).map((item, index) => (index === 0 ? `${ge(e.manifest)}: ` : "") + item);
}
var be = reason => ({
  type: "other",
  reason: reason
});
var xe = message => ({
  behavior: "deny",
  message: message,
  decisionReason: be(message)
});
var tGo = (e, t = []) => xe(eGo(o_(e, t)).join(`
`));
var Xti = 300;
var _e = 4000;
var Ae = 128;
var Kyn = 4096;
var ble = 2 * Kyn + Ae;
var qyn = 500;
var Jti = p(() => u({
  digest: o().regex(fm).describe("What a yes binds to: the publish is of this, or refused."),
  title: o().max(ble),
  organization: u({
    id: o().max(ble),
    name: o().max(ble).optional()
  }),
  plugin: u({
    name: o().max(ble),
    version: o().max(ble).optional()
  }),
  folder: o().max(ble),
  mode: B(["new", "replace"]).describe("Whether a plugin of this name on the shelf is replaced."),
  steps: C(o().max(ble)).max(qyn).describe("What a yes sets off, a sentence each, in order."),
  warnings: C(o().max(ble)).max(qyn).describe("What the person is warned of, a sentence each: a file sent although its name is one a secret hides under, and that other entries stay behind unnamed."),
  writes: u({
    path: o().max(ble),
    text: o().max(_e)
  }).optional().describe("The manifest a yes writes into the folder first, if any."),
  sends: u({
    files: E(),
    bytes: E()
  }).describe("The whole count and size of what is sent."),
  files: C(u({
    path: o().max(ble),
    bytes: E(),
    sha256: o().regex(fm),
    runs: I().describe("Whether it is sent as runnable.")
  })).max(qyn).describe("The files sent, in the order of their paths."),
  staying: E().describe("How many entries stay on the machine and are counted here."),
  stays: C(u({
    path: o().max(ble),
    why: B(["link", "hard-link", "ignored", "secret", "never", "generated", "special", "backslash"]),
    words: o().max(ble)
  })).max(qyn).describe("The entries that stay and are named, each with why."),
  list: u({
    sha256: o().regex(fm),
    path: o().max(ble).optional()
  }).describe("The list, a line each, of every file sent and every entry that stays and is named, and a last line saying so where entries stay unnamed: its sha256, and the file that holds it."),
  unnamed: u({
    files: E(),
    stays: E()
  }).optional().describe("Present only when the lists are over the bound: how many files and entries they do not name. The list file names them.")
}));
var we = 1024;
var Re = ble;
var Se = 100;
var Oe = 2 * qyn + Se;
var Qti = p(() => He({
  path: o().min(1).max(we).describe("The plugin's folder on this machine: the one that holds .claude-plugin/plugin.json, or a mod's hooks/ where there is no manifest yet."),
  destination: T("organization").optional().describe("Where to publish. The one destination is the library of the organization the session is signed in to."),
  description: o().max(Xti).optional().describe("What the plugin does, in a sentence: used only for a manifest written for a folder that has none."),
  replace: I().optional().describe("True only when the person said to replace the plugin of the same name that is already in their uploads on claude.ai."),
  shown: C(o().max(Re)).max(Oe).optional().describe("Leave out. The tool fills it for the question the person answers: the organization, the folder, the steps, and the files sent."),
  question: Jti().optional().describe("Leave out. The tool fills it with the same question as data, for a surface that draws its own: what a yes binds to, every file sent, and the entries that stay and are named.")
}));
var maxResultSizeChars = 4000;
var Ce = e => ({
  state: e.kind,
  refusal: e.kind === "refused" ? e.refusal.kind : void 0,
  lines: eGo(e)
});
var Ne = p(() => He({
  state: B(["published", "in-review", "publishing", "on-shelf", "refused"]),
  refusal: o().optional(),
  lines: C(o())
}));
function Ie(e) {
  let s = typeof e === "object" && e !== null && "path" in e ? e.path : void 0;
  return typeof s === "string" ? s : "";
}
var tool = dn({
  name: name,
  searchHint: "publish or share a plugin or mod with the team or organization library",
  shouldDefer: !0,
  backgrounding: "never",
  maxResultSizeChars: maxResultSizeChars,
  async description() {
    return k0i;
  },
  async prompt() {
    return v0i;
  },
  get inputSchema() {
    return Qti();
  },
  get outputSchema() {
    return Ne();
  },
  userFacingName() {
    return "Publish plugin";
  },
  isEnabled() {
    return N7n();
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !1;
  },
  requiresUserInteraction() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return _(e);
  },
  getToolUseSummary() {
    return "Publish a plugin to your organization's library on claude.ai";
  },
  getPath(e) {
    return Ie(e);
  },
  renderToolUseMessage(e) {
    return e.path ?? "";
  },
  create(e) {
    let t = {
      ...e,
      tool: tool
    };
    return {
      permissionCheckFailureDecision() {
        return tGo("failed");
      },
      async checkPermissions(s, r) {
        let {
          default: n
        } = await import("B:/~BUN/root/chunk-04n1t2n1.js");
        return n.check(s, r, t);
      },
      async call(s, r) {
        let {
          default: n
        } = await import("B:/~BUN/root/chunk-3f773v4x.js");
        return {
          data: Ce(await n.run(s, r, t))
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, tool_use_id) {
    return {
      type: "tool_result",
      tool_use_id: tool_use_id,
      ...(e.state === "refused" && {
        is_error: !0
      }),
      content: _(e)
    };
  }
});
export { Kyn, ble, Xti, qyn, Jti, Qti, o_, IKr, Qzo, Zzo, Zti, MKr, eGo, tGo, tool as DKr };