// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bk,
  u7i,
  MJ
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  IPr
} from "B:/~BUN/root/chunk-4nmzxstq.js";

function zX(e) {
  return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (e ?? yt()).disableBundledSkills === !0
}
var mwo = "allow_bundled_skills";

function pZe() {
  return !bk(mwo)
}

function n() {
  return u7i() ?? IPr
}

function O3(e) {
  return pZe() && !n().includes(e)
}

function Obe(e, t) {
  return zX(t) || O3(e)
}

function oYi() {
  return MJ(mwo, "Bundled skills", "are")
}

function TPr(e) {
  let t = pZe();
  return `${zX(e)}:${t}:${t?n().join(","):""}`
}

function hwo(e, t) {
  return e.type === "prompt" && e.source === "builtin" && Obe(e.name, t)
}
export {
  zX,
  mwo,
  pZe,
  O3,
  Obe,
  oYi,
  TPr,
  hwo
};
