// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  homedir as s
} from "os";
import {
  join as o
} from "path";

function r(e) {
  return {
    env: e?.env ?? process.env,
    home: e?.homedir ?? i.HOME ?? s()
  }
}

function eKi(e) {
  let {
    env: n,
    home: t
  } = r(e);
  return n.XDG_STATE_HOME ?? o(t, ".local", "state")
}

function tKi(e) {
  let {
    env: n,
    home: t
  } = r(e);
  return n.XDG_CACHE_HOME ?? o(t, ".cache")
}

function SQe(e) {
  let {
    env: n,
    home: t
  } = r(e);
  return n.XDG_DATA_HOME ?? o(t, ".local", "share")
}

function _Ne(e) {
  return o(SQe(e), "claude", "versions")
}

function Mee(e) {
  let {
    home: n
  } = r(e);
  return o(n, ".local", "bin")
}
export {
  eKi,
  tKi,
  SQe,
  _Ne,
  Mee
};
