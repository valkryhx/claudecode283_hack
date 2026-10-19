// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  fd,
  pge,
  Ya,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  o1,
  Bn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  wr
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  At
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  j4,
  Omn,
  pI
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  sn
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  c8e
} from "B:/~BUN/root/chunk-8gzvb73z.js";
var l = "tengu_copper_gazette";
var x = !1;
var Tir = () => E(l, x) === !0;
var X8r = (o) => o.find((u) => u !== !1) || void 0;

function _() {
  let {
    source: o
  } = Ya();
  return o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"
}
var g = () => Ya().source === "CCR_OAUTH_TOKEN_FILE" && o1() && fd();
var O = () => Omn() && !pI() && fd() && (_() || g());
var rTn = () => pge() && !Bn() && (j4() && Ya().source === "CLAUDE_CODE_OAUTH_TOKEN" || O());
var A = () => c8e() || rTn();
var mKt = "allow_plugin_publish";
var nes = () => a.CLAUDE_CODE_REMOTE ? "cloud-session" : "signed-out";
var Cir = () => X8r([xe() !== "firstParty" && "third-party", wr() && "bare", At() && "traffic-off", !sn(mKt) && "policy", !A() && nes()]);
export {
  Tir,
  X8r,
  rTn,
  mKt,
  nes,
  Cir
};
