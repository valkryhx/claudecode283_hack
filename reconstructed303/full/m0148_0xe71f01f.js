// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  nQn
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  L5
} from "B:/~BUN/root/chunk-gyr2a6wz.js";

function fr() {
  return a.CLAUDE_CODE_REMOTE === !0 && a.CLAUDE_CODE_ENVIRONMENT_KIND === void 0
}

function Nx() {
  return a.CLAUDE_CODE_REMOTE === !0 && a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc"
}

function _W() {
  return fr() || Nx()
}

function KLo() {
  return Nx() && a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted"
}

function PGs(e, o) {
  return !(e && KLo() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) && !a.CLAUDE_CODE_DISABLE_WORKING_SYNC) ? "not_admitted" : o === nQn ? "admitted" : "moved_directory"
}

function Fx() {
  return a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge"
}

function OMe() {
  return Fx() && !L5()
}

function A3n(e) {
  return e.hostedWorker || Fx() && e.transportPersists !== !1
}
export {
  fr,
  Nx,
  _W,
  KLo,
  PGs,
  Fx,
  OMe,
  A3n
};
