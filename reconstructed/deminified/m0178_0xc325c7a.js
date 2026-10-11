// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { homedir as i } from "os";
import { join as o } from "path";
function r(e) {
  return {
    env: e?.env ?? process.env,
    home: e?.homedir ?? a.HOME ?? i()
  };
}
function LPo(e) {
  let {
    env: env,
    home: home
  } = r(e);
  return env.XDG_STATE_HOME ?? o(home, ".local", "state");
}
function NPo(e) {
  let {
    env: env_2,
    home: home_2
  } = r(e);
  return env_2.XDG_CACHE_HOME ?? o(home_2, ".cache");
}
function YHe(e) {
  let {
    env: env_3,
    home: home_3
  } = r(e);
  return env_3.XDG_DATA_HOME ?? o(home_3, ".local", "share");
}
function OLt(e) {
  return o(YHe(e), "claude", "versions");
}
function Fz(e) {
  let {
    home: home_4
  } = r(e);
  return o(home_4, ".local", "bin");
}
export { LPo, NPo, YHe, OLt, Fz };