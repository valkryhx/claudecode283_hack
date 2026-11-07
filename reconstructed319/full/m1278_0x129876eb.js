// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  g4,
  y4,
  eS,
  eb,
  Yg,
  uC
} from "B:/~BUN/root/chunk-1ks9vs37.js";

function n() {
  let e = eS();
  if (e === "opus" && g4() && !uC(eb())) return {
    alias: "opus[1m]",
    name: "Opus 1M",
    multiplier: 5
  };
  else if (e === "sonnet" && y4() && !uC(Yg())) return {
    alias: "sonnet[1m]",
    name: "Sonnet 1M",
    multiplier: 5
  };
  return null
}

function EOe(e) {
  let t = n();
  if (!t) return null;
  switch (e) {
    case "warning":
      return `/model ${t.alias}`;
    case "tip":
      return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
    default:
      return null
  }
}
export {
  EOe
};
