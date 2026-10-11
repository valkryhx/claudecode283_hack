// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { vo } from "B:/~BUN/root/chunk-yv67t8hr.js";
var $Mr = {};
vo($Mr, {
  default: () => $Mr,
  pluginTestRefusal: () => FMr
});
function FMr({
  helperError: helperError,
  isRolloutOn: isRolloutOn,
  canLoadUserModules: canLoadUserModules
}) {
  if (helperError !== null) return helperError;
  if (!isRolloutOn) return "hooks modules are not turned on in this build yet (early access); set CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=1 to run a plugin's tests";
  return canLoadUserModules ? void 0 : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}
export { FMr, $Mr };