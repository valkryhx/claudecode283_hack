// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  WRe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  yJ
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  rX,
  qpt
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  HMe
} from "B:/~BUN/root/chunk-27h4st9h.js";

function l6s(i) {
  let n = "client_platform" in i ? i.client_platform : void 0;
  return !(WRe("origin" in i ? i.origin : void 0, "isSynthetic" in i && Boolean(i.isSynthetic)) || ("is_meta" in i) && i.is_meta === !0 || ("seeded_summon" in i) && i.seeded_summon === !0 || ("client_composed" in i) && i.client_composed === !0 || ("inbound_origin" in i) && i.inbound_origin !== void 0 || n !== void 0 && !(typeof n === "string" && (rX(n) || qpt(n))) || yJ(i) || HMe("initiator" in i && typeof i.initiator === "string" ? i.initiator : void 0) !== void 0)
}
export {
  l6s
};
