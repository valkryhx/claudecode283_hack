// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { $T, pd } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { is, QT, JQe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { tL } from "B:/~BUN/root/chunk-8z3a373v.js";
import { UU } from "B:/~BUN/root/chunk-ses0c36n.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { o, M, oe, T, u, De, $e, oE, fe, Rhe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { D2 } from "B:/~BUN/root/chunk-axjnbnmy.js";
var g = 524288,
  z = {
    mode: "serialized",
    additionalWorkingDirectories: "serialized",
    trustedNetworkDirectories: "serialized",
    alwaysAllowRules: "serialized",
    alwaysDenyRules: "serialized",
    alwaysAskRules: "serialized",
    strippedDangerousRules: "serialized",
    prePlanMode: "serialized",
    modeBeforeRewrite: "serialized",
    restricted: "serialized_as_restriction",
    blockReadsOutsideWorkingDirectories: "serialized_as_restriction",
    bashCommandClamps: "serialized_as_restriction",
    toolAliases: "serialized_as_restriction",
    servedCall: "set_by_deserialize",
    sandboxAutoAllowSuspended: "set_by_deserialize",
    chromeClassifierFloorEnabled: "not_serialized",
    chromeNavigationClassifierEnabled: "not_serialized",
    chromeClickClassifierEnabled: "not_serialized",
    chromeHostToolAsksEnabled: "not_serialized",
    canAutoClassifierRun: "not_serialized",
    proactivityBaseline: "not_serialized",
    startupModeDecidedByProactivityLevel: "not_serialized",
    isAutoModeAvailable: "not_serialized",
    isBypassPermissionsModeAvailable: "not_serialized",
    shouldAvoidPermissionPrompts: "not_serialized",
    awaitAutomatedChecksBeforeDialog: "not_serialized",
    mcpPermissionModeOverrides: "not_serialized",
    mcpAskForTools: "not_serialized",
    builtInToolsDisabled: "not_serialized",
    toolsKeptByLaunchList: "not_serialized",
    pollEventDeliveryGuard: "not_serialized",
    turnDisallowedTools: "not_serialized",
    toolsHeldUntilAPersonTypes: "not_serialized",
    isRemoteMode: "not_serialized"
  },
  _ = {
    restricted: !1,
    blockReadsOutsideWorkingDirectories: !1,
    bashCommandClamps: [],
    toolAliases: {}
  },
  p = Object.keys(_),
  H = Object.entries(z).flatMap(([e, s]) => s === "serialized" ? [e] : []);
var d = f(() => U(tL)),
  m = f(() => U(UU)),
  a = f(() => o().min(1)),
  n = f(() => Rhe(m(), T(o()))),
  iCe = 4096,
  XWr = f(() => o().max(iCe).refine(e => e.startsWith("/") && !e.includes("\x00"))),
  y = f(() => $e([C(!1), oE([]), De({})])),
  S = f(() => u({
    restricted: M(),
    blockReadsOutsideWorkingDirectories: M(),
    bashCommandClamps: T(T(o())),
    toolAliases: fe(a(), a())
  }).catchall(y()));
function JWr(e) {
  let s = Dn(e) ? e.restrictions : void 0;
  return Dn(s) && Object.values(is(s, p)).some(item => !y().safeParse(item).success);
}
function c({
  $map: $map
}) {
  return new Set($map.map(([s]) => s)).size === $map.length;
}
var A = f(() => De({
    mode: d(),
    additionalWorkingDirectories: De({
      $map: T(oE([XWr(), De({
        path: o(),
        source: m()
      })]))
    }).refine(c).refine(({
      $map: $map_2
    }) => $map_2.every(([s, {
      path: path
    }]) => s === path)),
    trustedNetworkDirectories: De({
      $map: T(oE([a(), T(a())]))
    }).refine(c).optional(),
    alwaysAllowRules: n(),
    alwaysDenyRules: n(),
    alwaysAskRules: n(),
    strippedDangerousRules: n().optional(),
    prePlanMode: d().optional(),
    modeBeforeRewrite: d().optional(),
    restrictions: S()
  })),
  Vde = f(() => oe().transform((input, s) => {
    let t = A().safeParse(input),
      r = t.success ? Object.entries(Dn(input) ? input : {}).filter(([i, l]) => i === "__proto__" || JQe(l)).map(([i]) => ({
        path: [i],
        message: "a key named __proto__"
      })) : t.error.issues;
    return s.issues.push(...r.slice(0, 1).map(({
      path: path_2,
      message: message
    }) => ({
      code: "custom",
      path: path_2,
      message: message,
      input: input
    }))), t.success && r.length === 0 ? t.data : D2;
  }));
function qde(e) {
  return e !== void 0 && $T(e) > g;
}
function TKo(e) {
  let {
    restrictions: restrictions,
    additionalWorkingDirectories: additionalWorkingDirectories,
    trustedNetworkDirectories: trustedNetworkDirectories,
    ...i
  } = e;
  return {
    ...pd(),
    ...i,
    additionalWorkingDirectories: new Map(additionalWorkingDirectories.$map),
    ...(trustedNetworkDirectories && {
      trustedNetworkDirectories: new Map(trustedNetworkDirectories.$map)
    }),
    ...QT(restrictions, p),
    servedCall: !0,
    sandboxAutoAllowSuspended: !0
  };
}
export { iCe, XWr, JWr, Vde, qde, TKo };