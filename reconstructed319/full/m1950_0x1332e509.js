// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Wn
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Y_t
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  hr
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  aw
} from "B:/~BUN/root/chunk-y302yp15.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  SA
} from "B:/~BUN/root/chunk-0xtfwyhv.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  pCe
} from "B:/~BUN/root/chunk-0q69tvcp.js";
import {
  mDn,
  qhs,
  Yhs
} from "B:/~BUN/root/chunk-hydnwtf3.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  o,
  u,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";

function A() {
  return v("tengu_breezy_acorn", !0)
}
var brr = {
    arm: null
  },
  y = p(() => u({
    created: u({
      verdict: T("allow"),
      minted: o()
    }),
    frame: u({
      slug: o().regex(hr)
    })
  }));

function yaa(t) {
  let l = [...Yhs(t)].at(-1);
  if (l === void 0 || !qhs(l)) return null;
  let e = y().safeParse(et(Wn(l), !1));
  if (!e.success) return null;
  let {
    created: n,
    frame: d
  } = e.data;
  return d.slug === n.minted.slice(n.minted.lastIndexOf("/") + 1) ? d.slug : null
}

function E_a(t) {
  if (t.mcpInfo !== void 0) t.mcpInfo = {
    ...t.mcpInfo,
    docsConnector: !0
  };
  if (!i.CLAUDE_CODE_REMOTE || t.mcpInfo?.toolName !== Y_t) return;
  let l = t.call;
  t.call = async (e, n, d, E, w, S) => {
    let {
      accountEpoch: h,
      conversationEpoch: O
    } = te(), f = mDn(t, e, n) && se(n).mode === "plan" && D(e.container) && D(e.container.create) && typeof e.container.create.name === "string" ? {
      id: void 0,
      title: e.container.create.name
    } : void 0;
    if (f !== void 0) n.setToolPermissionContext((r) => r.mode === "plan" && r.planDoc === void 0 ? {
      ...r,
      planDoc: f
    } : r);
    let s = await l.call(t, e, n, d, E, w, S).catch((r) => {
      if (f !== void 0) c("plan_doc", "not_created");
      throw r
    });
    try {
      if (!D(e.container) || !("create" in e.container)) return s;
      let r = te(),
        _ = yaa(s.data);
      if (f !== void 0 && _ === null) c("plan_doc", "not_created");
      if (_ === null || r.accountEpoch !== h || r.conversationEpoch !== O) return s;
      if (f !== void 0) n.setToolPermissionContext((C) => C.planDoc === f ? {
        ...C,
        planDoc: {
          ...f,
          id: _
        }
      } : C), g("plan_doc");
      if (!A()) return c("artifact_docs_create_wake", "flag_off"), s;
      if (!SA()) return c("artifact_docs_create_wake", "artifact_tool_off"), s;
      if (brr.arm === null) pCe.loadWriters?.();
      if (!aw()) return c("artifact_docs_create_wake", "comments_off"), s;
      let k = brr.arm?.(n, _);
      if (k) g("artifact_docs_create_wake");
      else c("artifact_docs_create_wake", k === void 0 ? "no_wake_arm" : "not_armed")
    } catch (r) {
      m("artifact_docs_create_wake", "threw"), a(r)
    }
    return s
  }
}
export {
  brr,
  yaa,
  E_a
};
