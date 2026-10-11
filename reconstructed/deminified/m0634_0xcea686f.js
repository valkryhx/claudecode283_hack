// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { zBo } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Vat } from "B:/~BUN/root/chunk-g4xzaw4b.js";
function _We() {
  let {
    namespace: namespace,
    cluster: cluster
  } = zBo();
  return {
    ...(namespace && {
      cooNamespace: Vat(namespace)
    }),
    ...(cluster && {
      cooCluster: Vat(cluster)
    })
  };
}
export { _We };