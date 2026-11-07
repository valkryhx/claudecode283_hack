// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { HS } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { $d } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { GSe, xg } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { uN } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { bse } from "B:/~BUN/root/chunk-detjgwj4.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { o, I, oe, C, u, He, Be, kk, me, lwe, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { g5 } from "B:/~BUN/root/chunk-9ewk1qr5.js";
var _ = 524288,
  A = {
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
    callerClassifiesWebCalls: "not_serialized",
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
    denyInsteadOfPrompting: "not_serialized",
    avoidsPromptsByNature: "not_serialized",
    awaitAutomatedChecksBeforeDialog: "not_serialized",
    mcpPermissionModeOverrides: "not_serialized",
    mcpAskForTools: "not_serialized",
    mcpPolicyAsksLiftedInAcceptEdits: "not_serialized",
    mcpPolicyFileAsksLiftedInAcceptEdits: "not_serialized",
    builtInToolsDisabled: "not_serialized",
    toolsKeptByLaunchList: "not_serialized",
    pollEventDeliveryGuard: "not_serialized",
    turnDisallowedTools: "not_serialized",
    sessionRulesFromRecord: "not_serialized",
    toolsHeldUntilAPersonTypes: "not_serialized",
    blockWritesOutsideWorkingDirectories: "not_serialized",
    readBlockExemptPaths: "not_serialized",
    isRemoteMode: "not_serialized",
    remoteBrowserCardAnswers: "not_serialized",
    connectorCardAllows: "not_serialized",
    planDoc: "not_serialized"
  },
  y = {
    restricted: !1,
    blockReadsOutsideWorkingDirectories: !1,
    bashCommandClamps: [],
    toolAliases: {}
  },
  f = Object.keys(y),
  J = Object.entries(A).flatMap(([e, s]) => s === "serialized" ? [e] : []);
var a = p(() => B(uN)),
  NYn = bse.filter(item => item !== "mcpMount"),
  z = p(() => B(NYn)),
  l = p(() => o().min(1)),
  n = p(() => lwe(z(), C(o()))),
  pPe = 4096,
  U0o = p(() => o().max(pPe).refine(e => e.startsWith("/") && !e.includes("\x00"))),
  c = p(() => Be([T(!1), kk([]), He({})])),
  g = p(() => u({
    restricted: I(),
    blockReadsOutsideWorkingDirectories: I(),
    bashCommandClamps: C(C(o())),
    toolAliases: me(l(), l())
  }).catchall(c()));
function B0o(e) {
  let s = it(e) ? e.restrictions : void 0;
  return it(s) && Object.values(vo(s, f)).some(item => !c().safeParse(item).success);
}
function m({
  $map: $map
}) {
  return new Set($map.map(([s]) => s)).size === $map.length;
}
var R = p(() => He({
    mode: a(),
    additionalWorkingDirectories: He({
      $map: C(kk([U0o(), He({
        path: o(),
        source: z()
      })]))
    }).refine(m).refine(({
      $map: $map_2
    }) => $map_2.every(([s, {
      path: path
    }]) => s === path)),
    trustedNetworkDirectories: He({
      $map: C(kk([l(), C(l())]))
    }).refine(m).optional(),
    alwaysAllowRules: n(),
    alwaysDenyRules: n(),
    alwaysAskRules: n(),
    strippedDangerousRules: n().optional(),
    prePlanMode: a().optional(),
    modeBeforeRewrite: a().optional(),
    restrictions: g()
  })),
  J5 = p(() => oe().transform((input, s) => {
    let t = R().safeParse(input),
      r = t.success ? Object.entries(it(input) ? input : {}).filter(([i, d]) => i === "__proto__" || GSe(d)).map(([i]) => ({
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
    }))), t.success && r.length === 0 ? t.data : g5;
  }));
function S(mode) {
  return {
    mode: mode,
    additionalWorkingDirectories: {
      $map: []
    },
    alwaysAllowRules: {},
    alwaysDenyRules: {},
    alwaysAskRules: {},
    restrictions: g().parse(y)
  };
}
var j0o = p(() => oe().refine(e => !GSe(e)).pipe(He({
  mode: a(),
  additionalWorkingDirectories: He({
    $map: kk([])
  }),
  alwaysAllowRules: He({}),
  alwaysDenyRules: He({}),
  alwaysAskRules: He({}),
  restrictions: me(o(), c())
})).transform(({
  mode: mode_2
}) => S(mode_2)));
function t6s(e) {
  return j0o().safeParse(e).success;
}
function xY(e) {
  return e !== void 0 && HS(e) > _;
}
function n6s(e) {
  let {
    restrictions: restrictions,
    additionalWorkingDirectories: additionalWorkingDirectories,
    trustedNetworkDirectories: trustedNetworkDirectories,
    ...i
  } = e;
  return {
    ...$d(),
    ...i,
    additionalWorkingDirectories: new Map(additionalWorkingDirectories.$map),
    ...(trustedNetworkDirectories && {
      trustedNetworkDirectories: new Map(trustedNetworkDirectories.$map)
    }),
    ...xg(restrictions, f),
    servedCall: !0,
    sandboxAutoAllowSuspended: !0
  };
}
export { NYn, pPe, U0o, B0o, J5, j0o, t6s, xY, n6s };