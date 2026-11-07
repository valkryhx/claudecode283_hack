// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
var r = new Je(() => ({
    store: void 0
  })),
  s = {
    maxBytes: 0,
    save: async () => null
  };

function uMn(e) {
  return r.peek(e)?.store ?? (e.host.launchOptions.diskless() ? s : void 0)
}

function Ug() {
  return uMn(H())
}
async function MXe(e, o) {
  try {
    return await e.save(o)
  } catch {
    return t("A result could not be saved where the model reads files", {
      level: "error"
    }), null
  }
}
export {
  uMn,
  Ug,
  MXe
};
