// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { EO } from "B:/~BUN/root/chunk-480wm8nh.js";
import { ISe, HZr } from "B:/~BUN/root/chunk-svkm14yn.js";
var g4t = async (o, e) => {
  let n = e.toolState.get(EO);
  if (o === "consent") try {
    return await ISe(n, "agent_design_projects", e.credentials), {
      type: "text",
      value: "Design agent access granted for your Claude Design projects. Use /design revoke to undo."
    };
  } catch (error) {
    return {
      type: "text",
      value: `Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${l(error)}. Try again, or run /design-login to authorize Claude Design for this account.`
    };
  }
  try {
    return await HZr(n, "agent_design_projects", e.credentials), {
      type: "text",
      value: "Design agent access revoked for your Claude Design projects."
    };
  } catch (error) {
    return {
      type: "text",
      value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${l(error)}. Try again, or run /design-login to authorize Claude Design for this account.`
    };
  }
};
export { g4t };