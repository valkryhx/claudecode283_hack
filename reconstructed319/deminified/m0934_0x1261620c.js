// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Coa } from "B:/~BUN/root/chunk-eev762xg.js";
import { Odn } from "B:/~BUN/root/chunk-3mm90xb6.js";
function WAt() {
  let {
    namespace: namespace,
    cluster: cluster
  } = Coa();
  return {
    ...(namespace && {
      cooNamespace: Odn(namespace)
    }),
    ...(cluster && {
      cooCluster: Odn(cluster)
    })
  };
}
export { WAt };