// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Bue
} from "B:/~BUN/root/chunk-9t9ygsbp.js";
import {
  vCr
} from "B:/~BUN/root/chunk-fzefftbw.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  OZ
} from "B:/~BUN/root/chunk-vke7wtay.js";
import {
  GIn
} from "B:/~BUN/root/chunk-vy4t7613.js";
import {
  vm
} from "B:/~BUN/root/chunk-78gy49b7.js";

function n() {
  try {
    return OZ() && GIn()
  } catch (r) {
    return a(F(r)), !0
  }
}

function d$(r) {
  try {
    let o = Ae(),
      e = o.hookRegistrationEpoch !== r.epoch || o.loadedModules !== r.modules;
    return r.wasUnknown || n() || e && Bue() && GIn()
  } catch (o) {
    return a(F(o)), !0
  }
}

function Zit({
  isRunReached: r
}) {
  try {
    return n() || Ae().loadedModules.some((o) => !vm(o) && vCr(o.args.pluginStorageId) && (o.hooks("prompt.submit") || !r && o.hooks("command.run")))
  } catch (o) {
    return a(F(o)), !0
  }
}

function qG() {
  let r = Ae();
  return {
    wasUnknown: n(),
    epoch: r.hookRegistrationEpoch,
    modules: r.loadedModules
  }
}
export {
  d$,
  Zit,
  qG
};
