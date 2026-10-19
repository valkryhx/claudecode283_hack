// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  Nn,
  at,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  x,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import {
  p0
} from "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  E,
  qC,
  BO,
  Kk
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-2zk4vqr8.js";
import "B:/~BUN/root/chunk-k9zm82w3.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-gyr2a6wz.js";
import "B:/~BUN/root/chunk-ejm0pmyj.js";
import "B:/~BUN/root/chunk-5ygt6t95.js";
import "B:/~BUN/root/chunk-we0fhavr.js";
import "B:/~BUN/root/chunk-a3eqgdv2.js";
import "B:/~BUN/root/chunk-8ye9n4fk.js";
import "B:/~BUN/root/chunk-6a9s3k2y.js";
import "B:/~BUN/root/chunk-7c8rc0p5.js";
import "B:/~BUN/root/chunk-8z3a373v.js";
import "B:/~BUN/root/chunk-x50ytcx8.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import "B:/~BUN/root/chunk-a0k8qg0d.js";
import "B:/~BUN/root/chunk-k8003a0x.js";
import "B:/~BUN/root/chunk-1gpjpba6.js";
import "B:/~BUN/root/chunk-9kme2ye7.js";
import "B:/~BUN/root/chunk-8pmnanyd.js";
import "B:/~BUN/root/chunk-4sfz9tbn.js";
import "B:/~BUN/root/chunk-4qqgabd5.js";
import "B:/~BUN/root/chunk-kad4nq7y.js";
import "B:/~BUN/root/chunk-28dw3zbk.js";
import "B:/~BUN/root/chunk-07c8fw5z.js";
import "B:/~BUN/root/chunk-245a2x6v.js";
import "B:/~BUN/root/chunk-q4sexgb0.js";
import "B:/~BUN/root/chunk-vr6ev6st.js";
import "B:/~BUN/root/chunk-pej55jax.js";
import "B:/~BUN/root/chunk-53tmhe2j.js";
import "B:/~BUN/root/chunk-2ypz4cxh.js";
import "B:/~BUN/root/chunk-m3q01n4y.js";
import "B:/~BUN/root/chunk-mndtcf0c.js";
import "B:/~BUN/root/chunk-rfp1pa77.js";
import "B:/~BUN/root/chunk-h9p45fg5.js";
import "B:/~BUN/root/chunk-jkv8n5r0.js";
import "B:/~BUN/root/chunk-htbmes7q.js";
import "B:/~BUN/root/chunk-v6pbq6dm.js";
import "B:/~BUN/root/chunk-41gwd5bj.js";
import "B:/~BUN/root/chunk-s6czymtt.js";
import "B:/~BUN/root/chunk-236sa1fp.js";
import "B:/~BUN/root/chunk-m94tqsvv.js";
import "B:/~BUN/root/chunk-cx57tr4b.js";
import "B:/~BUN/root/chunk-hvvs3ef6.js";
import "B:/~BUN/root/chunk-qp0344nb.js";
import "B:/~BUN/root/chunk-k2ekj8re.js";
import "B:/~BUN/root/chunk-e4q58xft.js";
import "B:/~BUN/root/chunk-8v3gkznb.js";
import "B:/~BUN/root/chunk-bsjrnca2.js";
import "B:/~BUN/root/chunk-5g9fghtv.js";
import {
  mp
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  Ko
} from "B:/~BUN/root/chunk-71zxaep1.js";
import "B:/~BUN/root/chunk-9w4ppz44.js";
import "B:/~BUN/root/chunk-2fccb5hn.js";
import "B:/~BUN/root/chunk-hkc0g0wr.js";
import "B:/~BUN/root/chunk-z8fd2x5s.js";
import "B:/~BUN/root/chunk-c44qc88s.js";
import "B:/~BUN/root/chunk-bn7mrnb3.js";
import "B:/~BUN/root/chunk-vfmvkxsr.js";
import "B:/~BUN/root/chunk-tqyz3ejx.js";
import "B:/~BUN/root/chunk-h1tq8zce.js";
import "B:/~BUN/root/chunk-0n2201tc.js";
import "B:/~BUN/root/chunk-q3srk2wz.js";
import "B:/~BUN/root/chunk-nvdqbkrt.js";
import "B:/~BUN/root/chunk-efcxwmhb.js";
import "B:/~BUN/root/chunk-d544j3ga.js";
import "B:/~BUN/root/chunk-hhgqcegv.js";
import "B:/~BUN/root/chunk-472kxa0t.js";
import "B:/~BUN/root/chunk-9080897a.js";
import "B:/~BUN/root/chunk-qk52d0gf.js";
import "B:/~BUN/root/chunk-ggdk44cm.js";
import "B:/~BUN/root/chunk-z84amwaw.js";
import "B:/~BUN/root/chunk-mgb2hezz.js";
import "B:/~BUN/root/chunk-f25646gd.js";
import "B:/~BUN/root/chunk-dq7zfs8r.js";
import "B:/~BUN/root/chunk-8y0chnnr.js";
import "B:/~BUN/root/chunk-gy660jgx.js";
import "B:/~BUN/root/chunk-pmw6knpp.js";
import "B:/~BUN/root/chunk-e7tskyjv.js";
import "B:/~BUN/root/chunk-cvj1wxdh.js";
import "B:/~BUN/root/chunk-v1j2tw52.js";
import "B:/~BUN/root/chunk-gjdk1btq.js";
import "B:/~BUN/root/chunk-3d7bmmrg.js";
import "B:/~BUN/root/chunk-e3hz52nd.js";
import "B:/~BUN/root/chunk-ses0c36n.js";
import "B:/~BUN/root/chunk-2zdc0br5.js";
import "B:/~BUN/root/chunk-f0ytfwhx.js";
import "B:/~BUN/root/chunk-r0jnxjth.js";
import "B:/~BUN/root/chunk-7j5tvnqj.js";
import "B:/~BUN/root/chunk-bp7zxkzq.js";
import "B:/~BUN/root/chunk-429xgjya.js";
import "B:/~BUN/root/chunk-7qeqkjr8.js";
import "B:/~BUN/root/chunk-7qatwz9y.js";
import "B:/~BUN/root/chunk-b0vcwsh9.js";
import "B:/~BUN/root/chunk-r4y1700s.js";
import {
  mTn,
  jrt,
  bEt,
  CKt,
  RKt
} from "B:/~BUN/root/chunk-64sznk1g.js";
import "B:/~BUN/root/chunk-183sjefx.js";
import {
  S9r,
  STn,
  w9r
} from "B:/~BUN/root/chunk-3k3f5jwn.js";
import {
  xce,
  gTn,
  Ees,
  hTn,
  wEt
} from "B:/~BUN/root/chunk-gz1fzwqn.js";
import {
  Tes,
  yTn,
  _Tn,
  bTn
} from "B:/~BUN/root/chunk-p8gd2veh.js";
import {
  mNe,
  OCn
} from "B:/~BUN/root/chunk-snptfy8h.js";
import "B:/~BUN/root/chunk-8vgph9ej.js";
import "B:/~BUN/root/chunk-cxg2mbf6.js";
import "B:/~BUN/root/chunk-ma5pke8s.js";
import "B:/~BUN/root/chunk-cc0we03s.js";
import "B:/~BUN/root/chunk-th6c28ah.js";
import "B:/~BUN/root/chunk-bhfm57j1.js";
import "B:/~BUN/root/chunk-rzekebyp.js";
import "B:/~BUN/root/chunk-stjjr4k8.js";
import "B:/~BUN/root/chunk-y424etr5.js";
import "B:/~BUN/root/chunk-3npegs3h.js";
import "B:/~BUN/root/chunk-410t5g3b.js";
import "B:/~BUN/root/chunk-b4xxgr0r.js";
import "B:/~BUN/root/chunk-0p1hpv0s.js";
import "B:/~BUN/root/chunk-hdc8p5sh.js";
import "B:/~BUN/root/chunk-hgpj62j5.js";
import "B:/~BUN/root/chunk-4yrr52wq.js";
import "B:/~BUN/root/chunk-asrchj7k.js";
import "B:/~BUN/root/chunk-0zewma8k.js";
import "B:/~BUN/root/chunk-vfvzs0rk.js";
import "B:/~BUN/root/chunk-9929fpp1.js";
import "B:/~BUN/root/chunk-mbz8rhex.js";
import "B:/~BUN/root/chunk-r0sre1ss.js";
import "B:/~BUN/root/chunk-6k93vgm0.js";
import "B:/~BUN/root/chunk-dyer18a2.js";
import "B:/~BUN/root/chunk-xpy44yvr.js";
import "B:/~BUN/root/chunk-4qc55bxf.js";
import "B:/~BUN/root/chunk-qd9ks09p.js";
import "B:/~BUN/root/chunk-cqw1xaqm.js";
import "B:/~BUN/root/chunk-c6mbjdcy.js";
import "B:/~BUN/root/chunk-dq3y90rd.js";
import "B:/~BUN/root/chunk-j2tkftkw.js";
import "B:/~BUN/root/chunk-7wsxhgty.js";
import "B:/~BUN/root/chunk-j0ghr71r.js";
import {
  Dn
} from "B:/~BUN/root/chunk-pystvv3m.js";
import {
  si,
  F7e
} from "B:/~BUN/root/chunk-b0487zs4.js";
import "B:/~BUN/root/chunk-31x8pa20.js";
import {
  o,
  T,
  u,
  De,
  fe,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import "B:/~BUN/root/chunk-59tbtn9n.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import {
  U_
} from "B:/~BUN/root/chunk-7aw74be3.js";
import "B:/~BUN/root/chunk-80e5c2dj.js";
import "B:/~BUN/root/chunk-648jq7hr.js";
import "B:/~BUN/root/chunk-shj1mfyk.js";
var z = new at(() => ({}));
var P = f(() => o().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((e) => !(e in Object.prototype))),
  G = f(() => T(De({
    arg: P(),
    local: P(),
    ref: P()
  })).length(1));

function M(e) {
  let i = G().safeParse(e?.[mNe]);
  if (!i.success) return;
  let [n] = i.data;
  return n !== void 0 && n.local !== n.ref ? n : void 0
}

function w({
  path: e,
  code: i
}, {
  words: {
    nothingDone: n
  },
  maxFileBytes: r,
  toolPermissionContext: s
}) {
  if (_Tn(i)) return bTn(e, i, r, n);
  switch (i) {
    case "path_rejected":
      return {
        error: yTn(e, s, n), code: i
      };
    case "name_direction":
      return {
        error: `Cannot attach "${e}": its name contains a character that changes text direction. Rename it, or copy it under another name. ${n}`, code: i
      };
    case "too_large_total":
      return {
        error: `Cannot attach "${e}": the files of this call are too large together. Attach fewer or smaller files. ${n}`, code: i
      };
    case "changed":
      return {
        error: `"${e}" changed while it was being attached. ${n} Try again.`, code: i
      };
    case "canceled":
      return {
        error: `Attaching files was interrupted. ${n}`, code: i
      };
    case "policy_denied":
      return {
        error: `This organization's policy does not allow attaching files here. ${n}`, code: i
      };
    case "rule_not_applicable":
    case "container_too_old":
    case "no_container":
    case "egress_blocked":
    case "essential_traffic":
      return {
        error: `Files cannot be attached in this session. ${n}`, code: i
      };
    case "policy_pending":
    case "container_unreachable":
    case "no_answer":
    case "put_hash_mismatch":
    case "put_refused":
    case "put_already_used":
    case "put_expired":
    case "put_size_mismatch":
    case "put_busy":
    case "put_failed":
    case "put_bad_answer":
    case "put_network":
      return {
        error: `The files could not be attached. ${n} Try again.`, code: i
      };
    case "bad_answer":
    case "no_server_policy":
    case "policy_unread":
    case "put_url_refused":
    case "put_header_refused":
      return {
        error: `The files could not be attached. ${n}`, code: i
      };
    default:
      return {
        error: `The files could not be attached. ${n}`, code: "unexpected"
      }
  }
}
var V = 300,
  X = f(() => u({
    arguments: De({
      slug: o().min(1).max(256).optional()
    }).optional(),
    files: T(u({
      sha256: o().regex(U_),
      uri: o().min(1).max(2048),
      upload: u({
        url: o().min(1).max(2048),
        method: C("PUT"),
        headers: fe(o(), o())
      }).optional()
    }))
  }));

function H(e, i, n) {
  let r = B(e, i, n);
  return r !== void 0 && "error" in r ? r : void 0
}
async function L(e) {
  let i = await k(e);
  if (i === void 0 || "error" in i) return i ?? {};
  let n = await A(e, i);
  return n.error === void 0 ? {
    input: i.input
  } : n
}
async function k(e) {
  let {
    input: i,
    schema: n,
    words: r
  } = e, s;
  try {
    let c = B(i, n, r);
    if (c === void 0) return;
    s = "error" in c ? c : await N(e, c)
  } catch (c) {
    l(c), s = W(r)
  }
  return s
}
async function A(e, i) {
  let {
    words: n
  } = e, r;
  try {
    let s = e.gate();
    if (r = s === void 0 ? await j(e, i.toSend) : w({
        path: i.files[0].path,
        code: s
      }, e), r?.code === "put_expired") {
      let c = await N({
          ...e,
          input: i.input
        }, {
          entries: [],
          paths: i.files.map((F) => F.path)
        }),
        a = "error" in c ? void 0 : i.files.find((F, I) => !Nn(F, c.files[I]));
      r = "error" in c ? c : a === void 0 ? await j(e, c.toSend) : w({
        path: a.path,
        code: c.files.some((F) => Nn({
          ...F,
          uri: a.uri
        }, a)) ? "bad_answer" : "changed"
      }, e)
    }
  } catch (s) {
    l(s), r = W(n)
  }
  return r ?? {}
}
async function N(e, {
  entries: i,
  paths: n
}) {
  let {
    input: r,
    words: s,
    files: c,
    signal: a
  } = e, F = n[0], I = e.gate();
  if (I !== void 0) return w({
    path: F,
    code: I
  }, e);
  let _ = [];
  for (let h of await c.hash(n, a)) {
    if ("code" in h) return w(h, e);
    _.push(h)
  }
  if (_.length !== n.length || _.some((h, y) => h.path !== n[y])) return w({
    path: F,
    code: "bad_answer"
  }, e);
  if (a.aborted) return w({
    path: F,
    code: "canceled"
  }, e);
  let O;
  try {
    O = await e.authorize({
      for_tool: s.tool,
      ...typeof r.slug === "string" && {
        slug: r.slug
      },
      files: _.map(({
        name: h,
        size: y,
        sha256: b
      }) => ({
        name: h,
        size: y,
        sha256: b
      }))
    })
  } catch (h) {
    if (a.aborted) return w({
      path: F,
      code: "canceled"
    }, e);
    t(`[file inputs] ${OCn} failed: ${d(h)}`, {
      level: "error"
    });
    let y = h instanceof Kk || h instanceof qC ? p0(d(h).trim(), V) : "";
    return {
      error: `The files could not be attached${y===""?".":`: ${y}${/[.!?\u2026]$/.test(y)?"":"."}`} ${s.nothingDone}`,
      code: "authorize_failed"
    }
  }
  if (a.aborted) return w({
    path: F,
    code: "canceled"
  }, e);
  let S = X().safeParse(O);
  if (!S.success || S.data.files.length !== _.length || S.data.files.some((h, y) => h.sha256 !== _[y].sha256)) return {
    error: `The files could not be attached. ${s.nothingDone}`,
    code: "authorize_bad_answer"
  };
  return {
    input: {
      ...S.data.arguments,
      ...r,
      [s.arg]: Y(i, s, (h) => S.data.files[h].uri)
    },
    files: _.map((h, y) => ({
      ...h,
      uri: S.data.files[y].uri
    })),
    toSend: S.data.files.flatMap(({
      upload: h,
      sha256: y
    }, b) => h === void 0 ? [] : [{
      path: n[b],
      sha256: y,
      url: h.url,
      headers: h.headers
    }])
  }
}
async function j(e, i) {
  let n = await e.files.put(i, e.signal),
    r = n.find((s) => ("code" in s));
  if (r !== void 0) return w(r, e);
  return n.length !== i.length || e.signal.aborted ? w({
    path: i[0]?.path ?? "",
    code: e.signal.aborted ? "canceled" : "bad_answer"
  }, e) : void 0
}

function W({
  nothingDone: e
}) {
  return {
    error: `The files could not be attached. ${e}`,
    code: "unexpected"
  }
}

function B(e, i, n) {
  let r = e[n.arg];
  if (r === void 0 || r === null || Array.isArray(r) && r.length === 0) return;
  let s = wEt(r, n);
  if (!Array.isArray(s)) return s;
  let c = [r].flat(),
    a = hTn(e, i, n);
  return a === void 0 ? {
    entries: c,
    paths: s
  } : {
    error: `Cannot call ${n.tool} with these arguments: ${a.listed}.${a.takes} ${n.nothingDone}`,
    code: "input_schema"
  }
}

function Y(e, {
  local: i,
  ref: n
}, r) {
  return e.map((s, c) => {
    if (!Dn(s)) return s;
    let {
      [i]: a, ...F
    } = s;
    return {
      ...F,
      [n]: r(c)
    }
  })
}

function R(e, i) {
  let n = M(e.meta);
  if (n === void 0) return;
  let {
    client: r
  } = e, s = de() ? z.peek(i)?.host : void 0, c = s?.servers.get(r.name), a = de() ? c !== void 0 && r.config.type === "http" && r.config.url === c.url && s?.heldSinceBoot(r.name) === !0 ? c.server : void 0 : r.config.scope === "claudeai" ? RKt.find((F) => gTn(r, F)) : void 0;
  if (a === void 0 || !E("tengu_walnut_tiller", !1)) return;
  return {
    fileInput: {
      tool: e.name,
      arg: n.arg,
      feature: "mcp_file_input_upload",
      local: n.local,
      ref: n.ref,
      refWord: n.ref,
      maxFiles: jrt,
      nothingDone: `${e.name} was not called.`
    },
    server: a,
    host: s
  }
}
async function Ue(e, i, ...[n, r]) {
  let s = i ? await i(n, r) : {
      result: !0
    },
    c = s.result ? R(e, r.session) : void 0,
    a = c && H(n, e.schema, c.fileInput);
  if (a === void 0) return s;
  return v(a.code), {
    result: !1,
    message: a.error,
    errorCode: 2
  }
}
async function Ge(e) {
  let i = R(e.listed, e.session);
  if (i === void 0) return e.input;
  let n = U(e, i),
    {
      fileInput: r
    } = i,
    s = w9r(e.session, e.toolUseId),
    c = s !== void 0 && Nn(s.input, e.input),
    a;
  if (c) a = {
    ...await A(n, s),
    input: e.input
  };
  else if (s !== void 0) a = {
    error: `The arguments of this call changed while it waited for approval. Call ${r.tool} again, giving each file by its "${r.local}". ${r.nothingDone}`,
    code: "input_changed"
  };
  else a = await L(n);
  if (a.error !== void 0) throw v(a.code), new x(a.error, "MCP tool file input rejected");
  if (a.input === void 0) return e.input;
  return g("mcp_file_input_upload"), a.input
}

function Ve(e) {
  let i = R(e.listed, e.session),
    n = i && e.input[i.fileInput.arg];
  if (i === void 0 || !Array.isArray(n) || !n.some((r) => Dn(r) && (i.fileInput.local in r))) return;
  return {
    prepare: async () => {
      let r = await k(U(e, i));
      if (r === void 0 || "error" in r) return v(r?.code), {
        error: r?.error ?? `${i.fileInput.tool} names no files.`
      };
      return S9r(e.session, e.toolUseId, r), {
        input: r.input,
        description: Ees(r.files),
        release: async () => STn(e.session, e.toolUseId)
      }
    }
  }
}

function U({
  listed: e,
  input: i,
  toolPermissionContext: n,
  callTool: r,
  signal: s
}, {
  fileInput: c,
  server: a,
  host: F
}) {
  return {
    input: i,
    schema: e.schema,
    words: c,
    maxFileBytes: bEt,
    toolPermissionContext: n,
    gate: () => {
      let I = mp(a.policy);
      if (I !== null) return I === "cache_miss" || I === "route_missing" ? "policy_unread" : "policy_denied";
      return xce() ?? (F?.ruleItCannotApply(n) === void 0 ? F === void 0 || Z({
        serverName: e.client.name,
        toolName: e.name
      }, n) ? void 0 : "no_server_policy" : "rule_not_applicable")
    },
    files: F?.files ?? mTn({
      screen: async (I) => {
        try {
          return await Tes(I, n)
        } catch (_) {
          t(`[file inputs] a path was rejected: ${_ instanceof x?_.telemetryMessage:"not readable"}`);
          return
        }
      },
      maxFileBytes: bEt,
      maxTotalBytes: CKt,
      uploadPathPrefix: a.uploadPathPrefix
    }),
    authorize: (I) => K(r, I, s).catch((_) => {
      throw _ instanceof Kk || _ instanceof qC || _ instanceof Error && (_.name === "McpError" || _.name === "ProtocolError") && "code" in _ && typeof _.code === "number" ? _ : new x(Ko(_, e.client.config), "MCP tool file input: the ask of the server failed")
    }),
    signal: s
  }
}

function Z(e, {
  alwaysAllowRules: i,
  alwaysAskRules: n,
  alwaysDenyRules: r
}) {
  let s = si(e.serverName, e.toolName);
  return [i, n, r].some((c) => (c.mcpServerPolicy ?? []).some((a) => a === s || F7e(a, {
    name: s,
    mcpInfo: e
  })))
}
async function K(e, i, n) {
  try {
    return await e(OCn, i)
  } catch (r) {
    if (!(r instanceof BO)) throw r;
    p("mcp_session_recovery", r.expiryKind)
  }
  try {
    let r = await e(OCn, i);
    return g("mcp_session_recovery"), r
  } catch (r) {
    if (r instanceof BO) m("mcp_session_recovery", "session_retry_exhausted");
    else if (!n.aborted) m("mcp_session_recovery", "retry_failed_other");
    throw r
  }
}

function v(e) {
  if (t(`[file inputs] not attached: ${e??"unexpected"}`), e === "input_schema") p("mcp_file_input_upload", e);
  else if (e !== "canceled") m("mcp_file_input_upload", e ?? "unexpected")
}
export {
  Ge as argsWithFileInputs, Ve as fileInputAskPreparer, Z as serverStatesPolicyFor, Ue as validateToolFileInputs
};
