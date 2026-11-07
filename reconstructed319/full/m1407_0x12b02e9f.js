// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  EC
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  nW
} from "B:/~BUN/root/chunk-mpzcg4gr.js";
import {
  N6e,
  Tli
} from "B:/~BUN/root/chunk-z0syfmeb.js";
import {
  uXe
} from "B:/~BUN/root/chunk-15eyam7k.js";
var Her = async (n, r) => {
  let o = r.toolState.get(nW);
  if (n === "consent") try {
    return await N6e(o, "agent_design_projects", r.credentials), {
      type: "text",
      value: `Design agent access granted for your Claude Design projects. Use /design revoke to undo.
${uXe}`
    }
  } catch (e) {
    if (EC()) return t(`/design consent failed in a cloud session: ${d(e)}`, {
      level: "error"
    }), {
      type: "text",
      value: "Couldn't record Design agent access for your Claude Design projects from this cloud session. Try again, or grant it at claude.ai/design/settings and then retry your Design request."
    };
    return {
      type: "text",
      value: `Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.`
    }
  }
  try {
    return await Tli(o, "agent_design_projects", r.credentials), {
      type: "text",
      value: "Design agent access revoked for your Claude Design projects."
    }
  } catch (e) {
    if (EC()) return t(`/design revoke failed in a cloud session: ${d(e)}`, {
      level: "error"
    }), {
      type: "text",
      value: "Couldn't revoke Design agent access for your Claude Design projects from this cloud session. Try again, or revoke it at claude.ai/design/settings."
    };
    return {
      type: "text",
      value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.`
    }
  }
};
export {
  Her
};
