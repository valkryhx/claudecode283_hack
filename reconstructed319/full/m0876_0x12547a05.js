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
  MS
} from "B:/~BUN/root/chunk-dcmvdxnm.js";
import {
  hPi
} from "B:/~BUN/root/chunk-cxcakgnv.js";

function OLo() {
  let t, o = !1,
    r = () => {
      if (MS()) o = !0, import("B:/~BUN/root/chunk-v1xqmbnh.js").then(({
        createRemoteToolHostsRuntime: e
      }) => {
        t = e()
      }).catch((e) => {
        a(F(e)), o = !1
      })
    },
    i = void 0;
  if (hPi({
      get remote() {
        if (!o) r();
        return t
      },
      ...i !== void 0 && {
        loopbackDev: i
      }
    }), MS()) r()
}
export {
  OLo
};
