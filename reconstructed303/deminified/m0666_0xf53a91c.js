// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { dye } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { tt, nLo, Ndn, JNr, HJe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Or, xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { gxt } from "B:/~BUN/root/chunk-9grc6xh0.js";
function Zvn(n) {
  let e = gxt() ? Ndn() : void 0,
    t = tt();
  if (n(), e === void 0 || tt() === t) return;
  return nLo(e, {
    forContextWindow: !0
  }), e;
}
function i(n, e, renderedClientData) {
  let o = import("B:/~BUN/root/chunk-m009r9mr.js").then(({
    refreshBootstrapData: refreshBootstrapData
  }) => refreshBootstrapData(n, e, {
    renderedClientData: renderedClientData
  })).then(() => {}, r => l(r));
  return Pkt(o), o;
}
function ekn(n, e, t) {
  return i(n, e, t);
}
function lJo(n) {
  Or().fetchesClientData = n;
}
function qYr() {
  return Or().fetchesClientData && xe() === "firstParty";
}
function Pkt(n) {
  let e = JNr(),
    clientDataFetches = Or().providerCache.clientDataFetches;
  if (e !== void 0 && !(clientDataFetches.get(e) instanceof Promise)) {
    let o = dye();
    clientDataFetches.set(e, n), n.finally(() => {
      if (clientDataFetches.get(e) === n) if (dye() === o) clientDataFetches.set(e, "over");else clientDataFetches.delete(e);
    });
  }
}
function dJo(n) {
  let clientDataFetches_2 = Or().providerCache.clientDataFetches;
  for (let [t, o] of clientDataFetches_2) if (o === n) clientDataFetches_2.set(t, "over");
}
function cJo(n, e) {
  let t = JNr();
  if (t === void 0 || !qYr() || HJe()) return;
  let o = Or().providerCache.clientDataFetches.get(t);
  if (o !== void 0) return o === "over" ? void 0 : o;
  return i(n, e, Ndn());
}
export { Zvn, ekn, lJo, qYr, Pkt, dJo, cJo };