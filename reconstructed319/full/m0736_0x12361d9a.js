// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ynt,
  qGs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Gnn,
  pKi
} from "B:/~BUN/root/chunk-64qg3pvz.js";
import {
  SDi,
  ups
} from "B:/~BUN/root/chunk-4xx5w1am.js";

function y(t) {
  return t.length > 0 && t.every((e) => e === "prometheus")
}
async function yZs(t, e) {
  let {
    initializeTelemetry: n
  } = await import("B:/~BUN/root/chunk-60ybc9d1.js"), {
    meter: r,
    metricsExporterKinds: s
  } = await n(t, e);
  if (r) {
    SDi(r, (u, m) => {
      let c = r?.createCounter(u, m);
      return {
        add(d, p = {}) {
          let l = {
            ...Gnn(),
            ...p
          };
          c?.add(d, l)
        }
      }
    }, {
      omitUnits: y(s)
    });
    let o = ups();
    if (o && !Ynt()) await i(o)
  }
}

function _Zs() {
  let t = ups();
  if (t) i(t).catch(a)
}
async function i(t) {
  await pKi(), t.add(1, {
    start_type: qGs()
  })
}
export {
  yZs,
  _Zs
};
