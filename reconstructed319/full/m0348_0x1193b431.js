// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  er
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  D1t,
  odn,
  rBs,
  eFr,
  KGn,
  gxo,
  oBs,
  sBs,
  VU
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  Of
} from "B:/~BUN/root/chunk-bvb659eh.js";

function aSs(e, n, d) {
  let s = Of() ? odn(e, d) : void 0;
  if (!s) return;
  let o = h(s, n);
  if (e !== "modelApi" || !sBs()) return o;
  return (f) => o(f).then((r) => {
    let {
      status: c
    } = r;
    if (D1t(c) && eFr(e, s)) t(`A request to the model API got a ${c}: this worker closed its idle connections to that API and opens new ones`);
    return r
  })
}

function h(e, n) {
  let {
    tls: d,
    ...s
  } = n ?? {}, o = n?.proxy === void 0 && n?.unix === void 0 ? s : n;
  return (f) => e.fetch(f, o)
}

function oLt(e, n, d, s) {
  if (!s?.()) {
    let r = n.proxy === void 0 && d?.() ? aSs("ccr", n, void 0) : void 0;
    return r ? r(e) : u(e, n)
  }
  let o = KGn() && Of() ? odn("ccr", void 0) : void 0;
  return (o ? h(o, n)(e) : u(e, n)).then((r) => {
    let {
      status: c
    } = r;
    if (D1t(c)) {
      if (o === void 0) lSs(c);
      else if (eFr("ccr", o)) t(`A request to Anthropic's sessions server got a ${c}: this worker closed its idle connections to that server and opens new ones`), V("info", "cli_ccr_own_pool_retired", {
        status: c
      })
    }
    return r
  })
}

function u(e, n) {
  if (n.proxy !== void 0 || n.unix !== void 0 || !/^http:/i.test(e) || !er() || VU() !== void 0 || i.ALL_PROXY || i.all_proxy) return fetch(e, n);
  let {
    tls: d,
    ...s
  } = n;
  return fetch(e, {
    ...s,
    redirect: "manual"
  }).then((o) => {
    if (!l.has(o.status) || !o.headers.has("location")) return o;
    return o.body?.cancel().catch(() => {}), fetch(e, n)
  })
}
var l = new Set([301, 302, 303, 307, 308]),
  p = 60000;

function Cpo() {
  try {
    if (gxo()) {
      t("A request to Anthropic's sessions server got no answer in time: this worker stops using the connections it had open to that server and opens new ones"), V("info", "cli_ccr_shared_pool_left", {
        after: "no_answer"
      });
      return
    }
    let e = rBs("ccr");
    if (e !== void 0 && oBs(p) && eFr("ccr", e)) t("A request to Anthropic's sessions server got no answer in time: this worker closed its idle connections to that server and opens new ones"), V("info", "cli_ccr_own_pool_retired", {
      after: "no_answer"
    })
  } catch (e) {
    t("Could not close this worker's connections to Anthropic's sessions server after a request got no answer in time; it goes on with the ones it has", {
      level: "warn"
    }), a(e)
  }
}

function lSs(e) {
  if (gxo()) t(`A request to Anthropic's sessions server got a ${e}: this worker stops using the connections it had open to that server and opens new ones`), V("info", "cli_ccr_shared_pool_left", {
    status: e
  })
}
export {
  aSs,
  oLt,
  Cpo,
  lSs
};
