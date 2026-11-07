// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { homedir as s } from "os";
import { join as o } from "path";
function r(e) {
  return {
    env: e?.env ?? process.env,
    home: e?.homedir ?? i.HOME ?? s()
  };
}
function eKi(e) {
  let {
    env: env,
    home: home
  } = r(e);
  return env.XDG_STATE_HOME ?? o(home, ".local", "state");
}
function tKi(e) {
  let {
    env: env_2,
    home: home_2
  } = r(e);
  return env_2.XDG_CACHE_HOME ?? o(home_2, ".cache");
}
function SQe(e) {
  let {
    env: env_3,
    home: home_3
  } = r(e);
  return env_3.XDG_DATA_HOME ?? o(home_3, ".local", "share");
}
function _Ne(e) {
  return o(SQe(e), "claude", "versions");
}
function Mee(e) {
  let {
    home: home_4
  } = r(e);
  return o(home_4, ".local", "bin");
}
export { eKi, tKi, SQe, _Ne, Mee };