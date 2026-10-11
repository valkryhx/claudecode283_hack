// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  Br
} from "B:/~BUN/root/chunk-3daz140w.js";
import {
  Mh,
  Bb
} from "B:/~BUN/root/chunk-mrt797ke.js";
import {
  ia,
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  vo
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var DMr = {};
vo(DMr, {
  HOOKS_MODULES_ENV_SOURCE: () => IMr,
  HOOKS_MODULES_FLAG: () => Bct,
  HOOKS_MODULES_FLAG_SOURCE: () => OMr,
  canLoadUserHooksModules: () => PMr,
  default: () => DMr,
  hooksModulesFlagDefault: () => Tcn,
  hooksModulesRolloutOn: () => Nle,
  hooksModulesRolloutSource: () => MMr
});
var Bct = "tengu_plugin_hooks_modules";
var Tcn = () => !1;
var Nle = () => a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS ?? x(Bct, Tcn());
var PMr = () => Nle() && !Bb() && !Br("hooks") && !Mh();
var IMr = "overridden by the CLAUDE_CODE_ENABLE_FUNCTION_HOOKS environment variable";
var OMr = {
  override: "from a local override",
  payload: "from GrowthBook (this session's payload)",
  disk: "from GrowthBook (the disk cache of an earlier session)",
  disabled: "from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",
  fallback: "from the default (a cold GrowthBook cache, no payload yet)"
};

function MMr() {
  return a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS !== void 0 ? IMr : OMr[ia(Bct, Tcn()).source]
}
export {
  Bct,
  Tcn,
  Nle,
  PMr,
  IMr,
  OMr,
  MMr,
  DMr
};
