// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { cn } from "B:/~BUN/root/chunk-qp0344nb.js";
import { sn } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { RM } from "B:/~BUN/root/chunk-66hg7026.js";
import { fRt, mRt } from "B:/~BUN/root/chunk-0s5a84zv.js";
import { ri } from "B:/~BUN/root/chunk-8zz6429p.js";
var name = "slides";
function iir() {
  return RM() && mRt();
}
function air(t) {
  return sn(t.policyKey);
}
function l(t) {
  return iir() && air(t);
}
var uEt = {
    name: "design",
    intent: "design",
    typeTitle: "Design",
    policyKey: "allow_cobalt_plinth_bramble",
    nounPhrase: "a design",
    askWhenNoBrief: "what they want designed",
    description: "Make a new Design artifact from a brief",
    argumentHint: "[what to design]"
  },
  c = {
    name: name,
    intent: "slides",
    typeTitle: "Slides",
    policyKey: "allow_cobalt_plinth_juniper",
    nounPhrase: "a slide deck",
    askWhenNoBrief: "what the deck should be about",
    description: "Make a new Slides deck artifact from a brief",
    argumentHint: "[what the deck is about]"
  };
function lir({
  name: name_2,
  intent: intent,
  typeTitle: typeTitle,
  nounPhrase: nounPhrase,
  askWhenNoBrief: askWhenNoBrief
}, s) {
  let r = s.trim();
  return [fRt() ? `\`/${name_2}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Call the \`${cn}\` tool with \`action: "quickstart"\` and \`intent: "${intent}"\` (adding \`design_systems: false\` if you already have a design system's link or the user declined one), then do what its result says: create the new Artifact from the type it names \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 and fill it by following those instructions. If it says no such type is listed for this user, say so plainly, then do what it says instead.` : `\`/${name_2}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Use the \`${cn}\` tool the way its Artifact-types guidance describes: list the Artifact types available to this user (\`type_query: "${typeTitle}"\`), take the listed type whose title is "${typeTitle}" (if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no type titled "${typeTitle}" is listed for this user, say so plainly and offer to make ${nounPhrase} another way.`, r ? `The brief:

${r}` : `No brief was given \u2014 ask the user ${askWhenNoBrief} before creating anything.`].join(`

`);
}
function dir() {
  let t = c;
  ri({
    name: t.name,
    description: t.description,
    argumentHint: t.argumentHint,
    isEnabled: () => l(t),
    userInvocable: !0,
    disableModelInvocation: !0,
    async getPromptForCommand(i) {
      return [{
        type: "text",
        text: lir(t, i)
      }];
    }
  });
}
export { iir, air, uEt, lir, dir };