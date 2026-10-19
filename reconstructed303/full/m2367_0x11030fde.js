// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ke
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  vf
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  ci
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  bK
} from "B:/~BUN/root/chunk-9w4ppz44.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  pd
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  tR
} from "B:/~BUN/root/chunk-bsjrnca2.js";
import {
  Du
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  Iet,
  szr,
  izr
} from "B:/~BUN/root/chunk-5vpfez0f.js";
import {
  o
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  posix as m,
  resolve as u
} from "path";
var MQn = f(() => o().max(4096).refine(m.isAbsolute, "must be an absolute path"));
async function MZs() {
  let e = tR.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT;
  if (tR.unset("CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT"), e === void 0) return {
    kind: "absent"
  };
  if (!MQn().safeParse(e).success) return {
    kind: "invalid",
    fault: "bad_path"
  };
  let a, n;
  try {
    a = await izr(e, pd), n = bK()
  } catch (r) {
    return {
      kind: "invalid",
      fault: Iet(r) ?? "error"
    }
  }
  let t = u(e),
    s = szr(t, ke(), [], []);
  if (s.allowed || s.code === "is_cwd") return {
    kind: "absent"
  };
  let i = vf(),
    p = (i === null ? [] : [i, n]).map(ci).some((r) => r.unresolved || r.spellings.some((l) => [t, a].some((d) => Du(l, d, {
      caseFold: !0
    }) || Du(d, l, {
      caseFold: !0
    }))));
  if (i === null || p) return {
    kind: "invalid",
    fault: "private_folder"
  };
  return {
    kind: "valid",
    root: t
  }
}
export {
  MQn,
  MZs
};
