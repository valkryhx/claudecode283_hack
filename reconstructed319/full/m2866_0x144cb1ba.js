// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  We
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Ha
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  LA
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  sH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  oN
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  U2
} from "B:/~BUN/root/chunk-7pj7keyk.js";
import {
  eV,
  cQe,
  Nyo
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  Aa,
  oh
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Wl,
  Vc,
  lo,
  dl
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  dJe,
  Spt
} from "B:/~BUN/root/chunk-hjds4dtx.js";
import {
  m0n,
  Jce
} from "B:/~BUN/root/chunk-5m83sh3a.js";
import {
  fve
} from "B:/~BUN/root/chunk-2r6mec8n.js";
import {
  I_n,
  X7n,
  J7n,
  git,
  M_n,
  V2o,
  K2o,
  s4r
} from "B:/~BUN/root/chunk-y4vcq2eb.js";
import {
  D1e
} from "B:/~BUN/root/chunk-mcffcnn9.js";
import {
  Zqr,
  F2o,
  e4r,
  H2o
} from "B:/~BUN/root/chunk-4n1taexp.js";
import {
  l_e
} from "B:/~BUN/root/chunk-8ytf4evt.js";
import {
  Gwe
} from "B:/~BUN/root/chunk-dty9we5x.js";
import {
  sW
} from "B:/~BUN/root/chunk-5zpqxean.js";
import {
  Uze
} from "B:/~BUN/root/chunk-s4gx10ck.js";
import {
  o,
  Oea,
  E,
  u,
  He,
  Be,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  normalize as R,
  posix as g,
  sep as P
} from "path";
var pe = new Set(["canceled", "policy_pending", "egress_blocked", "essential_traffic", "unexpected", "credential_name", Gwe, ...H2o]);
var me = new Set(["not_uploaded_here", ...F2o]);
var ke = new Set(["canceled", "no_token", "bad_name", "unexpected", ...J7n]),
  S = new Je(() => ({
    last: Promise.resolve(),
    uploaded: new Set
  })),
  h = p(() => He({
    path: o().min(1).max(D1e)
  })),
  _e = p(() => Be([u({
    ok: T(!0),
    file_id: o(),
    name: o()
  }), u({
    ok: T(!1),
    code: o().max(64)
  })]));
async function Gpa(t, e, n, s, r) {
  let {
    path: d
  } = h().parse(t);
  if (r === Gwe) return {
    summary: `not uploaded: ${r}`,
    output: {
      ok: !1,
      code: r
    }
  };
  let l = S.of(n),
    c = () => I(d, e, n, s, r),
    f = l.last.then(c, c);
  l.last = f;
  let m = await f;
  if (m.ok) l.uploaded.add(m.file_id);
  return {
    summary: m.ok ? "uploaded" : `not uploaded: ${m.code}`,
    output: m
  }
}
var x = p(() => He({
    file_id: o().min(1).max(256)
  })),
  Te = p(() => Be([u({
    ok: T(!0)
  }), u({
    ok: T(!1),
    code: o().max(64)
  })]));
async function Vpa(t, e) {
  let {
    file_id: n
  } = x().parse(t);
  if (!S.of(e).uploaded.delete(n)) return {
    summary: "not deleted: not_uploaded_here",
    output: {
      ok: !1,
      code: "not_uploaded_here"
    }
  };
  let s = await e4r([n]);
  return s === void 0 ? {
    summary: "deleted",
    output: {
      ok: !0
    }
  } : {
    summary: `not deleted: ${s}`,
    output: {
      ok: !1,
      code: s
    }
  }
}
var z = p(() => He({
    file_id: o().regex(fve),
    save_as: o().min(1).max(255),
    bytes: E().int().min(0).max(l_e),
    session_folder: Oea()
  })),
  Fe = p(() => Be([u({
    ok: T(!0),
    path: o().max(D1e),
    bytes: E().int().min(0)
  }), u({
    ok: T(!1),
    code: o().max(64),
    status: E().int().min(100).max(599).optional()
  })]));
async function Kpa(t, e, n, s) {
  let r = z().parse(t),
    d = S.of(n),
    l = () => C(r, e, s),
    c = d.last.then(l, l);
  d.last = c;
  let f = await c;
  return {
    summary: f.ok ? "saved" : `not saved: ${f.code}`,
    output: f
  }
}
async function C({
  file_id: t,
  save_as: e,
  bytes: n,
  session_folder: s
}, r, d) {
  if (r.aborted) return {
    ok: !1,
    code: "canceled"
  };
  let l = {
      fileId: t,
      name: e,
      sizeBytes: n
    },
    c = !1,
    f;
  try {
    if (await U2({
        isFilesDial: !0,
        signal: r
      }), r.aborted) return {
      ok: !1,
      code: "canceled"
    };
    let m = M_n(l, r);
    if (m !== void 0) return {
      ok: !1,
      code: m.code
    };
    if (!sH()) return {
      ok: !1,
      code: "no_token"
    };
    if (e !== git(e, t)) return {
      ok: !1,
      code: "bad_name"
    };
    c = !0;
    let k = g.join(cQe, s),
      O = g.join(k, I_n);
    if (await d.makeFoldersAsWritten([cQe, k, O]), !await K2o(O, n)) return {
      ok: !1,
      code: "no_room"
    };
    let _ = await V2o(l, void 0, r);
    if (!_.ok) return _.code === "refused" ? {
      ok: !1,
      code: "refused",
      status: _.status
    } : {
      ok: !1,
      code: _.code
    };
    f = _;
    let b = Array.from({
        length: X7n
      }, (W, L) => s4r(e, L + 1)),
      A = await d.placeStreamedFile(O, b, f.bytes, r);
    return A === void 0 ? {
      ok: !1,
      code: "name_taken"
    } : {
      ok: !0,
      path: A,
      bytes: f.bytesRead()
    }
  } catch (m) {
    if (f !== void 0) return {
      ok: !1,
      code: f.codeOfFailure(m)
    };
    if (We(m) || r.aborted) return {
      ok: !1,
      code: "canceled"
    };
    return a(m), {
      ok: !1,
      code: c ? "write_failed" : "unexpected"
    }
  } finally {
    f?.close()
  }
}
async function I(t, e, n, s, r) {
  if (e.aborted) return {
    ok: !1,
    code: "canceled"
  };
  if (await U2({
      isFilesDial: !0,
      signal: e
    }), e.aborted) return {
    ok: !1,
    code: "canceled"
  };
  let d = oN() ? "policy_pending" : sW();
  if (d !== void 0) return {
    ok: !1,
    code: d
  };
  if (!sH()) return {
    ok: !1,
    code: "no_token"
  };
  let l = R(t),
    {
      realDirectory: c
    } = s;
  try {
    if (!y(l) && await dJe(l, l, {
        realDirectory: c
      }) === "credential_name") return {
      ok: !1,
      code: "credential_name"
    }
  } catch {
    return {
      ok: !1,
      code: "path_rejected"
    }
  }
  let f = await CWt(t, n, s, r);
  if (f === void 0) return {
    ok: !1,
    code: "path_rejected"
  };
  let m = await dJe(l, f, {
    attached: y(l) && y(f),
    realDirectory: c
  });
  if (m !== void 0) return {
    ok: !1,
    code: m === "credential_name" ? m : "path_rejected"
  };
  try {
    return await Zqr(f, void 0, e)
  } catch (k) {
    if (We(k)) return {
      ok: !1,
      code: "canceled"
    };
    return a(k), {
      ok: !1,
      code: "unexpected"
    }
  }
}

function y(t) {
  return Boolean(i.CLAUDE_CODE_REMOTE) && F(t, eV)
}
async function CWt(t, e, n, s, r = []) {
  let d;
  try {
    d = await n.localFileAt(t)
  } catch {
    return
  }
  let l = R(t),
    c = s !== void 0 && tn() && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" ? r : [];
  return Uze(d) || j(l, d, s) || !await U(l, d, e, n, c) ? void 0 : d
}
async function U(t, e, n, {
  realDirectory: s,
  home: r
}, d) {
  if (await Spt(e, s)) return !1;
  if (w(t, e, d)) return !0;
  let l = n.project?.originalCwd;
  if (l === void 0 || l === "") return !1;
  let c = await s(r);
  if (c === void 0) return !1;
  return c !== l && !F(c, l) && F(e, l)
}

function j(t, e, n) {
  if (n === void 0) return !1;
  if (lo(n, oh, D(Wl(n), t, e)) || dl(n, oh, D(Vc(n), t, e))) return !0;
  let s = [Ha(t), Ha(e)];
  if (s.some((r) => r.unresolved)) return !0;
  return s.some((r) => r.spellings.some((d) => Aa(d, n, "read", "deny") !== null || Aa(d, n, "read", "ask") !== null))
}

function D(t, e, n) {
  return w(e, n) ? t.filter(N) : t
}

function N({
  source: t
}) {
  return t !== "userSettings" && !LA.some((e) => e === t)
}

function w(t, e, n = []) {
  if (!i.CLAUDE_CODE_REMOTE) return !1;
  let s = m0n();
  return [...Nyo, ...n.map((r) => r.product)].some((r) => F(e, r)) || [...s === void 0 ? [] : [s], ...n].some((r) => Jce(t, e, r))
}

function F(t, e) {
  return t.startsWith(e + P)
}
export {
  Gpa,
  Vpa,
  Kpa,
  CWt
};
