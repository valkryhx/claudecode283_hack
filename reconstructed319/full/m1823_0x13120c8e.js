// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Cf
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  _ws
} from "B:/~BUN/root/chunk-x4zqd4cy.js";
import {
  Tnn,
  o2i
} from "B:/~BUN/root/chunk-6j3fjnhn.js";

function t3s() {
  let e = _ws();
  if (e !== "auto") {
    t(`[code-session] move-to-cloud names no permission mode: ${e===void 0?"the terminal has reported no mode yet":`the terminal's last reported mode is ${e}`}`);
    return
  }
  let o = d();
  if (o?.kill_switch) {
    t("[code-session] move-to-cloud names no permission mode: the kill switch tengu_happy_ocean is served on"), n(o);
    return
  }
  if (o !== void 0) {
    let i = [o.auto_mode_off && "auto_mode_off", o.settings_unreadable && "settings_unreadable"].filter(Boolean);
    t(`[code-session] move-to-cloud names no permission mode: withheld for ${i.join("; ")}`), n(o);
    return
  }
  return t("[code-session] move-to-cloud names auto mode"), n(), "auto"
}

function d() {
  if (v("tengu_happy_ocean", !1)) return {
    kill_switch: !0
  };
  let e = !Tnn(yt()) || Cf(),
    o = o2i();
  return e || o ? {
    kill_switch: !1,
    auto_mode_off: e,
    settings_unreadable: o
  } : void 0
}

function n(e) {
  try {
    l("tengu_teleport_to_cloud", e === void 0 ? {
      action: b("auto_mode_asked")
    } : {
      action: b("auto_mode_not_asked"),
      ...e
    })
  } catch {}
}
export {
  t3s
};
