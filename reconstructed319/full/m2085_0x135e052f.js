// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  hB
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  VFn,
  Jtn,
  NNt,
  GGe
} from "B:/~BUN/root/chunk-pdtjaehv.js";
import {
  $Ce,
  Ogo,
  HS
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  _i,
  GSe
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  B0o,
  J5,
  j0o,
  t6s,
  xY
} from "B:/~BUN/root/chunk-wr6kgh84.js";
import {
  Urt,
  LYn
} from "B:/~BUN/root/chunk-51n55x6w.js";
import {
  NDi
} from "B:/~BUN/root/chunk-x9bz04wf.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
import {
  o,
  I,
  oe,
  C,
  He,
  Dr,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  fm
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
var m = 128,
  f = 16,
  y = 256,
  R = 4096,
  h = ["background_operator", "unresolved_shell_write", "as_in_local_session", "shell_in_plan_mode"];

function qYs(e) {
  switch (e.step) {
    case "check":
    case "decline":
      return !1;
    case "run":
      return e.approval !== void 0
  }
}

function YYs(e) {
  switch (e.step) {
    case "check":
    case "decline":
      return !1;
    case "run":
      return e.agent_id === void 0
  }
}
var i = {
    step: {
      check: {
        tool_container: "honoured",
        attached_computer: "refused"
      },
      run: {
        tool_container: "honoured",
        attached_computer: "honoured"
      },
      decline: {
        tool_container: "honoured",
        attached_computer: "honoured"
      }
    },
    member: {
      agent_id: {
        tool_container: "honoured",
        attached_computer: "honoured"
      },
      classifier_may_approve: {
        tool_container: "honoured",
        attached_computer: "refused"
      },
      agent_has_read_tool: {
        tool_container: "honoured",
        attached_computer: "refused"
      },
      agent_effort_level: {
        tool_container: "honoured",
        attached_computer: "refused"
      },
      conversation_id: {
        tool_container: "refused",
        attached_computer: "honoured"
      },
      compaction_id: {
        tool_container: "refused",
        attached_computer: "honoured"
      },
      server_verdict: {
        tool_container: "refused",
        attached_computer: "honoured"
      },
      approval: {
        tool_container: "honoured",
        attached_computer: "honoured"
      }
    },
    approval_member: {
      attested: {
        tool_container: "refused",
        attached_computer: "honoured"
      },
      permission_updates: {
        tool_container: "refused",
        attached_computer: "honoured"
      },
      approver: {
        tool_container: "honoured",
        attached_computer: "never_believed"
      },
      permission_context: {
        tool_container: "honoured",
        attached_computer: "never_believed"
      }
    }
  },
  c = {
    check: !0,
    run: !0,
    decline: !1
  },
  DYn = p(() => o().max(m).regex(/^[\w.:@-]+$/).regex(/[^.]/)),
  L0o = p(() => o().refine(hB)),
  k = p(() => C(o().max(m)).max(f).transform((e) => h.filter((n) => e.includes(n)))),
  l = p(() => o().regex($Ce)),
  g = p(() => o().max(y).regex(/^\P{Cc}+$/u)),
  zBr = p(() => o().regex(fm));

function u(e) {
  let n = {
      tool_host_interface: Jtn(),
      tool_use_id: DYn()
    },
    t = {
      ...n,
      agent_id: L0o().optional(),
      main_loop_model: g(),
      classifier_may_approve: k().optional(),
      agent_has_read_tool: T(!0).optional(),
      agent_effort_level: B(_i).optional(),
      conversation_id: l().optional(),
      compaction_id: l().optional(),
      permission_context: e,
      server_verdict: oe().refine((r) => !GSe(r) && HS(r) <= R).optional()
    };
  return Dr("step", [He({
    ...t,
    step: T("check")
  }), He({
    ...t,
    step: T("run"),
    approval: He({
      ask_digest: zBr(),
      approver: B(NDi),
      permission_context: e,
      attested: I().optional(),
      permission_updates: C(oe()).max(Ogo).refine((r) => !GSe(r)).optional()
    }).optional()
  }), He({
    ...n,
    step: T("decline"),
    ask_digest: zBr()
  })])
}
var P = {
  tool_container: p(() => u(J5())),
  attached_computer: p(() => u(j0o()))
};

function XYs(e) {
  let n = it(e) ? e[Urt] : void 0;
  return it(n) && n.step === "run" ? DYn().safeParse(n.tool_use_id).data : void 0
}

function GBr(e, n = VFn) {
  let t = it(e) ? e[Urt] : void 0;
  if (t === void 0) return {
    kind: "absent"
  };
  if (!LYn(t)) return {
    kind: "other_request"
  };
  return N0o(t, n, "tool_container")
}

function N0o(e, n, t) {
  let r = NNt(e.tool_host_interface);
  if (r === void 0) return {
    kind: "malformed"
  };
  let s = n === "compared_elsewhere" ? void 0 : S(n, r);
  if (s !== void 0 && H(e.step)) return s;
  let d = x(e, t);
  return d.kind === "declined" ? d : s ?? d
}

function x(e, n) {
  let t = it(e.approval) ? e.approval : void 0;
  if (xY(e.permission_context) || xY(t?.permission_context)) return {
    kind: "too_large"
  };
  let [r] = O(e, t ?? {}, n);
  if (r !== void 0) return {
    kind: "not_honoured",
    part: r
  };
  let s = P[n]().safeParse(e);
  if (s.success) return v(s.data);
  return {
    kind: B0o(e.permission_context) || B0o(t?.permission_context) ? "unlisted_restriction_on" : "malformed"
  }
}

function S(e, n) {
  let {
    kind: t
  } = GGe(e, n);
  switch (t) {
    case "peer_too_old":
      return {
        kind: "session_too_old", session: n
      };
    case "self_too_old":
      return {
        kind: "daemon_too_old", session: n
      };
    case "agreed":
      return;
    default:
      return t
  }
}

function H(e) {
  let n = a(c).find((t) => t === e);
  return n === void 0 || c[n]
}

function O(e, n, t) {
  return [...a(i.step).filter((r) => e.step === r && i.step[r][t] === "refused"), ...a(i.member).filter((r) => Object.hasOwn(e, r) && i.member[r][t] === "refused"), ...a(i.approval_member).filter((r) => Object.hasOwn(n, r) && i.approval_member[r][t] === "refused").map((r) => `approval.${r}`), ..._(t, e.permission_context) ? [] : ["permission_context"], ..._(t, n.permission_context) ? [] : ["approval.permission_context"]]
}

function _(e, n) {
  switch (e) {
    case "tool_container":
      return !0;
    case "attached_computer":
      return n === void 0 || t6s(n)
  }
}

function v(e) {
  switch (e.step) {
    case "check":
    case "run":
      return {
        kind: "requested", request: e
      };
    case "decline":
      return {
        kind: "declined", request: e
      }
  }
}

function a(e) {
  return Object.keys(e)
}
export {
  qYs,
  YYs,
  DYn,
  L0o,
  zBr,
  XYs,
  GBr,
  N0o
};
