// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qt } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { SA } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { gRt, _4t } from "B:/~BUN/root/chunk-m7hjq5yn.js";
import { Hd } from "B:/~BUN/root/chunk-eak7wp7z.js";
import { Nl } from "B:/~BUN/root/chunk-3vrk9h6f.js";
var name = "slides";
function kqr() {
  return SA() && _4t();
}
function vqr(t) {
  return t.policyKey === void 0 || gn(t.policyKey);
}
function l(t) {
  return kqr() && vqr(t);
}
var cKt = {
    name: "design",
    intent: "design",
    typeTitle: "Design",
    policyKey: "allow_cobalt_plinth_bramble",
    nounPhrase: "a design",
    askWhenNoBrief: "what they want designed",
    description: "Make a new Design artifact from a brief",
    argumentHint: "[what to design]"
  },
  f = {
    name: name,
    intent: "slides",
    typeTitle: "Slides",
    policyKey: "allow_cobalt_plinth_juniper",
    nounPhrase: "a slide deck",
    askWhenNoBrief: "what the deck should be about",
    description: "Make a new Slides deck artifact from a brief",
    argumentHint: "[what the deck is about]"
  };
function Eqr({
  name: name_2,
  intent: intent,
  typeTitle: typeTitle,
  nounPhrase: nounPhrase,
  askWhenNoBrief: askWhenNoBrief
}, s) {
  let a = s.trim();
  return [(Hd() ? intent !== void 0 ? `\`/${name_2}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Find that type among the Artifact types your artifact tools offer this user, the way their own guidance says to (if that leaves more than one with that title, ask the user which before creating). Create the new Artifact from it with a \`title\` drawn from the brief and nothing else yet, because the result of that call carries the type's instructions, then fill it by following them. If no type titled "${typeTitle}" is offered to this user, say so plainly; if the tool result that told you so suggests another route, take it, and otherwise offer to make ${nounPhrase} another way.` : `\`/${name_2}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Skip any quickstart step your artifact tools have, which has no option for this type: list all the Artifact types they offer this user and take the first-party type titled "${typeTitle}" (a first-party row starts with a tier in brackets, such as \`[core]\`; if no row has one, go by title alone; if more than one row fits, ask the user which before creating). Create the new Artifact from it with a \`title\` drawn from the brief and nothing else yet, because the result of that call carries the type's instructions, then fill it by following them. If no type that fits is offered to this user, say so plainly and offer to make ${nounPhrase} another way.` : void 0) ?? (intent === void 0 ? `\`/${name_2}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". ${gRt() ? "No quickstart call is needed: use" : "Use"} the \`${Qt}\` tool to list the Artifact types available to this user (\`type_query: "${typeTitle}"\`), take the first-party type titled "${typeTitle}" (a first-party row opens with its tier in brackets, such as \`[core]\`; if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no first-party type titled "${typeTitle}" is listed for this user, say so plainly and offer to make ${nounPhrase} another way.` : gRt() ? `\`/${name_2}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Call the \`${Qt}\` tool with \`action: "quickstart"\` and \`intent: "${intent}"\` (adding \`design_systems: false\` if you already have a design system's link or the user declined one), then do what its result says: create the new Artifact from the type it names \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 and fill it by following those instructions. If it says no such type is listed for this user, say so plainly, then do what it says instead.` : `\`/${name_2}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Use the \`${Qt}\` tool the way its Artifact-types guidance describes: list the Artifact types available to this user (\`type_query: "${typeTitle}"\`), take the listed type whose title is "${typeTitle}" (if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no type titled "${typeTitle}" is listed for this user, say so plainly and offer to make ${nounPhrase} another way.`), a ? `The brief:

${a}` : `No brief was given \u2014 ask the user ${askWhenNoBrief} before creating anything.`].join(`

`);
}
function Tqr() {
  h(f);
}
function h(t, policyGate) {
  Nl({
    name: t.name,
    description: t.description,
    argumentHint: t.argumentHint,
    policyGate: policyGate,
    isEnabled: () => l(t),
    userInvocable: !0,
    disableModelInvocation: !0,
    async getPromptForCommand(e) {
      return [{
        type: "text",
        text: Eqr(t, e)
      }];
    }
  });
}
export { kqr, vqr, cKt, Eqr, Tqr };