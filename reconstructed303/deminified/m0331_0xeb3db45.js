// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { vt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { dt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { cn } from "B:/~BUN/root/chunk-qp0344nb.js";
import { RIs, AIs } from "B:/~BUN/root/chunk-7df33jce.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
var s = "The files you sent are still on disk. For a small, specific change to a file whose text is in this conversation, send the Edit call(s) and an Artifact publish of the same file_path together in one response, with no Read and no shell command that edits the file: these calls run one after another in the order given, so the publish sends the edited file. If an Edit reports that it did not apply, correct it and publish again. If the file's text is no longer in this conversation, or you cannot place the change exactly from the text you have, Read it first.";
function bIs(e, t) {
  if (e) return t ? AIs : RIs;
  return s;
}
var n = ` For a small change to an artifact this conversation has already published, Claude makes it with ${dt}, not a shell command, and publishes the artifact again with the same file path in the same response: the ${dt} call(s) first, then the publish, with no ${Qe} and without waiting for the ${dt} result. Only when the file's text is not in this conversation, or the change cannot be placed exactly from that text, does Claude read the file before editing it. The calls run in the order sent, so the publish carries the edited file. If one of those ${dt} calls does not apply, the publish sent in the same response is refused and the artifact stays as it was, so Claude corrects the ${dt} and publishes again.`,
  o = ` For a change to several files at once, or a rewrite of most of a page, Claude makes the change with ${dt}, not a shell command, and publishes the artifact again with the same file path in the same response: the ${dt} call(s) first, then the publish, with no ${Qe} and without waiting for the ${dt} result. The calls run in the order sent, so the publish carries the edited file. If one of those ${dt} calls does not apply, the publish sent in the same response is refused and the artifact stays as it was, so Claude corrects the ${dt} and publishes again. Either way, Claude reads the file first only when its text is not in this conversation or the change cannot be placed exactly from that text.`;
function SIs(e) {
  return e ? o : n;
}
var h = `To make a small change to an artifact you already published with the ${cn} tool in this conversation, use ${dt}, not a shell command, and publish the artifact again with the same file path in the same response: the ${dt} call(s) first, then the ${cn} publish, with no ${Qe} and without waiting for the ${dt} result. Only if the file's text is not in this conversation, or you can't place the change exactly from it, read the file before editing it. The calls run in the order sent, so the publish sends the edited file; a publish sent in the same response as a failed ${dt} of that file is refused and leaves the artifact as it was, so correct the ${dt} and publish again.`,
  r = `To make a small change to a page you already published with the ${cn} tool in this conversation, send it as \`edits\` (old_str/new_str pairs copied exactly from the file as it now stands) on an ${cn} publish of the same \`file_path\`: that one call changes the file and the page together, with no ${Qe} and no ${dt}. For a change to several files at once, or a rewrite of most of a page, use ${dt} on the file(s), not a shell command, and publish the artifact again with the same \`file_path\` in the same response: the ${dt} call(s) first, then the ${cn} publish, with no ${Qe} and without waiting for the ${dt} result. The calls run in the order sent, so the publish carries the edited file; a publish sent in the same response as a failed ${dt} of that file is refused and leaves the artifact as it was, so correct the ${dt} and publish again. Either way, read the file first only if its text is not in this conversation or you can't place the change exactly from it.`;
function a(e, t) {
  return e.some(item => vt(item, t));
}
function l() {
  return import.meta.require("B:/~BUN/root/chunk-wqv7ggfr.js").artifactPublishEditsOn();
}
function wIs(e) {
  if (!a(e, cn) || !a(e, dt)) return null;
  return l() ? r : h;
}
export { bIs, SIs, wIs };