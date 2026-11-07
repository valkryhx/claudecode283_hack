// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Uoe,
  vL
} from "B:/~BUN/root/chunk-z7bs0q82.js";
var e = {
  disabled: "The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.",
  missing: "The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it."
};

function Oar(n) {
  return n?.seclogon === "disabled" || n?.seclogon === "missing" ? e[n.seclogon] : void 0
}
async function Iar() {
  if (x() !== "windows") return;
  let n = await Uoe({
    srtWin: vL()
  }).catch((o) => {
    t(`[sandbox] could not read the sandbox status: ${d(o)}`, {
      level: "error"
    });
    return
  });
  return Oar(n?.user)
}
export {
  Oar,
  Iar
};
