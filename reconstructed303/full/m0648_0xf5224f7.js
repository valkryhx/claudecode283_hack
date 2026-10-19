// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  $Ds
} from "B:/~BUN/root/chunk-efcxwmhb.js";
import {
  Ne
} from "B:/~BUN/root/chunk-nvdqbkrt.js";
import {
  ben,
  RUe
} from "B:/~BUN/root/chunk-r1z1wgpe.js";
import {
  jfe
} from "B:/~BUN/root/chunk-f3f5k3wx.js";
import {
  Fv
} from "B:/~BUN/root/chunk-2j35ee92.js";

function n() {
  try {
    return RUe() && ben()
  } catch (r) {
    return l(H(r)), !0
  }
}

function M0(r) {
  try {
    let o = Ne(),
      e = o.hookRegistrationEpoch !== r.epoch || o.loadedModules !== r.modules;
    return r.wasUnknown || n() || e && jfe() && ben()
  } catch (o) {
    return l(H(o)), !0
  }
}

function A1() {
  let r = Ne();
  return {
    wasUnknown: n(),
    epoch: r.hookRegistrationEpoch,
    modules: r.loadedModules
  }
}

function $Ke({
  isRunReached: r
}) {
  try {
    return n() || Ne().loadedModules.some((o) => !Fv(o) && $Ds(o.args.pluginStorageId) && (o.hooks("prompt.submit") || !r && o.hooks("command.run")))
  } catch (o) {
    return l(H(o)), !0
  }
}
export {
  M0,
  $Ke,
  A1
};
