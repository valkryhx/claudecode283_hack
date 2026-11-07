// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { _P, If, wG, Mi, H, q, er, sK, rqn, jVs, WVs, uWt, zVs, wIo, kIo, YVs, ns } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { qe, F, d, gqn } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { t, _, Ri } from "B:/~BUN/root/chunk-2pp12te6.js";
import { C7 } from "B:/~BUN/root/chunk-eev762xg.js";
import { KA, Q, tt, Wn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { hwt, Xqe, EM, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i, Ar } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t3i, n3i, ysn, KOs, _Ir, JOs, O$t, u1n, gi, fEo, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { tHe, TWn } from "B:/~BUN/root/chunk-5az22yft.js";
import { yk, TU, zD, Ky, Ou, yo } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { id, xC } from "B:/~BUN/root/chunk-65j2302z.js";
import { Bz } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Te, Fn, cM, Ci, $V } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { Id, _C, Pbt, Mbt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Er, Iu } from "B:/~BUN/root/chunk-pc24rkga.js";
import { J$s, SGn } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { owe } from "B:/~BUN/root/chunk-44q965xg.js";
import { HA, fi } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { dHe, wte } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { VU } from "B:/~BUN/root/chunk-wthaftk0.js";
import { oN } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { AU } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { kr } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { fT, Su } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { Pze } from "B:/~BUN/root/chunk-2f6ykbbh.js";
import { B7e } from "B:/~BUN/root/chunk-78494p3w.js";
import { _se, cht, _D, uht } from "B:/~BUN/root/chunk-detjgwj4.js";
import { Cs } from "B:/~BUN/root/chunk-kpr2et3s.js";
import { YW } from "B:/~BUN/root/chunk-fcp4egnh.js";
import { Fs } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { _t, YKi } from "B:/~BUN/root/chunk-3a409jmn.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { bSe } from "B:/~BUN/root/chunk-5g14jzvf.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, I, oe, C, u, Dr, me, lwe, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Zn, $a } from "B:/~BUN/root/chunk-12nc74pv.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var bQt = 64,
  mNi = 1024,
  ge = 200,
  hNi = 256000,
  ye = 1024,
  Se = 16,
  lt = 128000,
  ve = 1024,
  tgs = 4096,
  qco = 32,
  CSr = 256,
  be = 260,
  J = p(() => u({
    rule: o(),
    canonical: o().optional(),
    source: o(),
    root: o().nullable().optional(),
    pattern: o().optional()
  })),
  ut = p(() => u({
    path: o(),
    resolved: C(o())
  })),
  ct = ["allow", "deny", "ask", "auto_mode_allow", "auto_mode_soft_deny", "auto_mode_hard_deny", "auto_mode_environment", "events"],
  Cr = p(() => u({
    permission_mode: o(),
    platform: o(),
    live_cwd: o().optional(),
    home_dir: o().optional(),
    rule_roots: me(o(), o()),
    trusted_directories: u({
      primary: ut().optional(),
      additional: C(u({
        path: o(),
        resolved: C(o()),
        source: o()
      })),
      network: C(o()),
      block_reads_outside_working_directories: I()
    }),
    rules: u({
      allow: C(J()),
      deny: C(J()),
      ask: C(J())
    }),
    case_insensitive_paths: I(),
    auto_mode: u({
      allow: C(o()),
      soft_deny: C(o()),
      hard_deny: C(o()),
      environment: C(o())
    }),
    artifact_consent_holdback: I(),
    chrome_navigation: Ce().optional(),
    restricted: I(),
    is_remote_mode: I(),
    classify_all_shell: I(),
    mcp_allow_rules_exact: T(!0).optional(),
    user_identity: o().nullable(),
    dropped: lwe(B(ct), E()).optional(),
    truncated: I().optional()
  })),
  Z = p(() => B(["public", "private", "unknown"])),
  Ce = p(() => u({
    enabled: I(),
    baselines: me(o(), o()),
    tabs: me(o(), me(o(), o())).optional()
  })),
  ft = p(() => u({
    cwd: o().nullable(),
    root: o().nullable(),
    branch: o().nullable(),
    default_branch: o().nullable(),
    status: u({
      clean: I(),
      counts: u({
        staged: E(),
        modified: E(),
        untracked: E().nullable(),
        untracked_normal: E().nullable()
      }).nullable(),
      porcelain: o().nullable(),
      truncated: I()
    }).nullable(),
    visibility: u({
      origin: u({
        host: o(),
        remote: o(),
        visibility: Z()
      }).nullable(),
      push_remote: o().nullable(),
      remotes: C(u({
        name: o(),
        host: o(),
        remote: o(),
        visibility: Z()
      })),
      visibility_cache: C(u({
        host: o(),
        remote: o(),
        visibility: Z()
      }))
    }).nullable(),
    error: B(["timeout", "not_a_repo", "error", "pending"]).optional(),
    truncated: I().optional()
  })),
  ne = p(() => u({
    git_state: ft().optional(),
    chrome_navigation: Ce().optional(),
    live_cwd: o().optional(),
    platform: o().optional()
  })),
  Ae = 64,
  ie = 200,
  Tr = p(() => u({
    tool_use_ids: C(o().max(ie)),
    context: ne()
  })),
  tJe = 1024,
  we = 64,
  ngs = 64000,
  gNi = 64,
  yNi = 200,
  pt = 256,
  mt = 256,
  ee = 64,
  ht = 32,
  gt = 8,
  te = 1024,
  z = 64,
  yt = 64000,
  St = 4000,
  vt = 32,
  bt = 64;
function rgs(e) {
  return e.length <= vt && e.every(item => KA(item) <= bt);
}
var re = p(() => B(["prod", "staging"])),
  Rt = p(() => u({
    mode: o(),
    is_shared_live: I(),
    role: o().optional(),
    probe_failed: T(!0).optional(),
    probed: I(),
    probe_current_account: I(),
    cowritten: T(!0).optional(),
    outside_writer: T(!0).optional(),
    artifact_kind: o().optional(),
    type_locked: T(!0).optional(),
    type_lock: I().optional(),
    type_first_party: T(!0).optional(),
    caps_read_not_found: T(!0).optional(),
    live_paths: C(o()).optional(),
    capabilities: me(o(), oe()).optional(),
    capabilities_unknown: T(!0).optional(),
    capabilities_cut: T(!0).optional(),
    grant_observed: I(),
    endpoint_connectors: C(o()).optional()
  })),
  Et = p(() => u({
    share: Rt().optional(),
    attested: o().optional(),
    notice_pending: T(!0).optional(),
    published_env: re().optional(),
    watch: u({
      stopped: T(!0).optional(),
      auto_reply_stopped: T(!0).optional(),
      auto_reply_swept: T(!0).optional(),
      replies_declined: T(!0).optional()
    }).optional()
  })),
  wr = p(() => u({
    by_slug: me(o(), Et()),
    by_path: me(o(), u({
      slug: o().optional(),
      thumbnail_named: C(o()).optional()
    })),
    live_docs: C(u({
      slug: o(),
      live_path: o(),
      working_copy: o()
    })),
    room_armed: C(o()),
    type_reads: me(o(), u({
      declares_room: I()
    })),
    last_publish: u({
      slug: o(),
      env: re()
    }).optional(),
    session: u({
      frame_env: re(),
      viewer_origin: o(),
      dev_viewer_origin: o().optional(),
      toolset: I().optional(),
      short_links: I().optional(),
      ant_build: I(),
      live_edit: I().optional(),
      live_doc_stream: I().optional(),
      live_paths_schema: I().optional(),
      copy_from: I().optional(),
      types_on: I().optional(),
      five_class_asks: I().optional(),
      inherited_type_grant: T(!0).optional(),
      connectors_mark: T(!0).optional(),
      watch_rail: B(["live", "durable", "none"]).optional(),
      auto_react: I().optional(),
      comments_in_schema: I(),
      db_str_replace: I().optional(),
      handlers: I(),
      room_client: I(),
      eval_stub: I(),
      scratchpad_dir: o().nullable(),
      tool_results_dir: o().optional()
    }),
    truncated: I().optional()
  }));
function ogs(e) {
  let r = e.truncated === !0,
    n = (b, S = te) => {
      if (b.length <= S) return b;
      return r = !0, b.slice(0, S);
    },
    s = (b, S) => {
      if (b.length > S) r = !0;
      return b.slice(0, S);
    },
    l = (b, S, P, O = te) => {
      let k = b.filter(item => P(item).length <= O);
      if (k.length !== b.length) r = !0;
      return s(k, S);
    },
    m = (b, S, P) => {
      let O = b.filter(([k]) => k.length <= P);
      if (O.length !== b.length || O.length > S) r = !0;
      return O.slice(Math.max(0, O.length - S));
    },
    h = capabilities => {
      if (Foe(capabilities) <= St) return {
        capabilities: capabilities
      };
      return r = !0, {
        capabilities: Object.fromEntries(Object.keys(capabilities).map(item => [item, {}])),
        capabilities_cut: !0
      };
    },
    y = b => {
      if (b === void 0) return {};
      if (!rgs(b)) return r = !0, {};
      return {
        endpoint_connectors: [...b]
      };
    },
    R = ({
      endpoint_connectors: endpoint_connectors,
      ...S
    }) => ({
      ...S,
      ...y(endpoint_connectors),
      mode: n(S.mode, z),
      ...(S.role !== void 0 && {
        role: n(S.role, z)
      }),
      ...(S.artifact_kind !== void 0 && {
        artifact_kind: n(S.artifact_kind, z)
      }),
      ...(S.live_paths !== void 0 && {
        live_paths: l(S.live_paths, ht, P => P)
      }),
      ...(S.capabilities !== void 0 && h(S.capabilities))
    }),
    by_slug = Object.fromEntries(m(Object.entries(e.by_slug), pt, z).map(([b, S]) => [b, {
      ...S,
      ...(S.share !== void 0 && {
        share: R(S.share)
      }),
      ...(S.attested !== void 0 && {
        attested: n(S.attested, z)
      })
    }])),
    by_path = Object.fromEntries(m(Object.entries(e.by_path), mt, te).map(([b, S]) => [b, {
      ...(S.slug !== void 0 && S.slug.length <= z && {
        slug: S.slug
      }),
      ...(S.thumbnail_named !== void 0 && {
        thumbnail_named: l(S.thumbnail_named, gt, P => P)
      })
    }])),
    session = e.session,
    w = {
      by_slug: by_slug,
      by_path: by_path,
      live_docs: l(l(l(e.live_docs, 1 / 0, b => b.slug, z), 1 / 0, b => b.live_path), ee, b => b.working_copy),
      room_armed: l(e.room_armed, ee, b => b),
      type_reads: Object.fromEntries(m(Object.entries(e.type_reads), ee, z)),
      ...(e.last_publish !== void 0 && {
        last_publish: {
          slug: n(e.last_publish.slug, z),
          env: e.last_publish.env
        }
      }),
      session: {
        ...session,
        viewer_origin: n(session.viewer_origin),
        ...(session.dev_viewer_origin !== void 0 && {
          dev_viewer_origin: n(session.dev_viewer_origin)
        }),
        scratchpad_dir: session.scratchpad_dir === null ? null : n(session.scratchpad_dir),
        ...(session.tool_results_dir !== void 0 && {
          tool_results_dir: n(session.tool_results_dir)
        })
      }
    },
    N = b => {
      let S = Object.keys(b);
      if (S.length === 0) return !1;
      for (let P of S.slice(0, Math.ceil(S.length / 2))) delete b[P];
      return !0;
    };
  while (Foe(w) > yt) {
    r = !0;
    let [b, S] = Foe(w.by_slug) >= Foe(w.by_path) ? [w.by_slug, w.by_path] : [w.by_path, w.by_slug];
    if (N(b) || N(S)) continue;
    if (w.live_docs.length + w.room_armed.length > 0) {
      w.live_docs = w.live_docs.slice(0, w.live_docs.length >> 1), w.room_armed = w.room_armed.slice(0, w.room_armed.length >> 1);
      continue;
    }
    break;
  }
  return {
    ...w,
    ...(r && {
      truncated: !0
    })
  };
}
function Foe(e) {
  return Buffer.byteLength(_(e));
}
function Re(e, r, n, s) {
  if (e.length <= r) return e;
  return n[s] = !0, e.slice(0, r);
}
function Ee(e, r, n) {
  if (n > 0) e.dropped[r] = (e.dropped[r] ?? 0) + n;
}
function _Ni(e, r, n) {
  let s = r,
    l = 0,
    m = {
      bytes: 0,
      allowDropped: 0
    };
  for (;;) {
    let h = {
        pathClamped: !1,
        identityClamped: !1,
        listCapped: !1,
        spellingsShed: !1,
        dropped: {
          ...e.dropped
        }
      },
      y = k => Re(k, ye, h, "pathClamped"),
      R = k => ({
        rule: k.rule,
        ...(k.canonical !== void 0 && {
          canonical: k.canonical
        }),
        source: k.source,
        ...(k.root !== void 0 && {
          root: k.root === null ? null : y(k.root)
        }),
        ...(k.pattern !== void 0 && {
          pattern: k.pattern
        })
      }),
      A = (k, X) => {
        let st = k === "allow" ? ge : ye,
          j = X.filter(item => item.rule.length <= st);
        if (Ee(h, k, X.length - j.length), k !== "allow" || j.length <= s) return j.map(R);
        return Ee(h, k, j.length - s), j.slice(0, s).map(R);
      },
      x = () => e.truncated === !0 || h.pathClamped || h.identityClamped || h.listCapped || h.spellingsShed,
      M = k => {
        if (l >= 2 && k.resolved.length > 0) h.spellingsShed = !0;
        return {
          path: y(k.path),
          resolved: l >= 2 ? [] : k.resolved.map(y)
        };
      },
      w = e.trusted_directories.additional.slice(0, Se);
    if (w.length < e.trusted_directories.additional.length) h.listCapped = !0;
    let network = e.trusted_directories.network.slice(0, Se).map(y);
    if (network.length < e.trusted_directories.network.length) h.listCapped = !0;
    let b = {
        permission_mode: e.permission_mode,
        platform: e.platform,
        ...(e.live_cwd !== void 0 && {
          live_cwd: y(e.live_cwd)
        }),
        ...(e.home_dir !== void 0 && {
          home_dir: y(e.home_dir)
        }),
        rule_roots: Er(e.rule_roots, y),
        trusted_directories: {
          ...(e.trusted_directories.primary !== void 0 && {
            primary: M(e.trusted_directories.primary)
          }),
          additional: w.map(item => ({
            ...M(item),
            source: item.source
          })),
          network: network,
          block_reads_outside_working_directories: e.trusted_directories.block_reads_outside_working_directories
        },
        rules: {
          allow: A("allow", e.rules.allow),
          deny: A("deny", e.rules.deny),
          ask: A("ask", e.rules.ask)
        },
        auto_mode: {
          allow: [...e.auto_mode.allow],
          soft_deny: [...e.auto_mode.soft_deny],
          hard_deny: [...e.auto_mode.hard_deny],
          environment: [...e.auto_mode.environment]
        },
        artifact_consent_holdback: e.artifact_consent_holdback,
        ...(e.chrome_navigation !== void 0 && {
          chrome_navigation: e.chrome_navigation
        }),
        case_insensitive_paths: e.case_insensitive_paths,
        restricted: e.restricted,
        is_remote_mode: e.is_remote_mode,
        classify_all_shell: e.classify_all_shell,
        ...(e.mcp_allow_rules_exact === !0 && {
          mcp_allow_rules_exact: !0
        }),
        user_identity: e.user_identity === null ? null : Re(e.user_identity, ge, h, "identityClamped"),
        ...(Object.keys(h.dropped).length > 0 && {
          dropped: h.dropped
        }),
        ...(x() && {
          truncated: !0
        })
      },
      bytes = Foe(b);
    if (l === 0) m = {
      bytes: bytes,
      allowDropped: h.dropped.allow ?? 0
    };
    let overCap = bytes > lt;
    if (overCap) {
      if (l === 0 || l === 1 && s > 0) {
        l = 1, s = Math.floor(s / 2);
        continue;
      }
      if (l < 2) {
        l++;
        continue;
      }
    }
    let O = overCap ? {
      ...b,
      truncated: !0
    } : b;
    if (O.truncated === !0 || O.dropped !== void 0) n({
      bytes: O === b ? bytes : Foe(O),
      bytesBeforeShedding: m.bytes,
      overCapBeforeShedding: l > 0,
      overCap: overCap,
      allowRulesShed: (h.dropped.allow ?? 0) - m.allowDropped,
      resolvedSpellingsShed: h.spellingsShed,
      pathClamped: h.pathClamped,
      identityClamped: h.identityClamped,
      additionalDirectories: e.trusted_directories.additional.length,
      networkRoots: e.trusted_directories.network.length,
      truncated: O.truncated === !0,
      dropped: h.dropped,
      denyRules: e.rules.deny.length,
      askRules: e.rules.ask.length,
      autoMode: {
        allow: e.auto_mode.allow.length,
        softDeny: e.auto_mode.soft_deny.length,
        hardDeny: e.auto_mode.hard_deny.length,
        environment: e.auto_mode.environment.length
      }
    });
    return O;
  }
}
function bNi(e) {
  let r = e.truncated === !0,
    n = y => {
      if (y.length <= ve) return y;
      return r = !0, y.slice(0, ve);
    },
    s = y => y === null ? null : n(y),
    l = y => {
      if (y.length <= be) return y;
      return r = !0, y.slice(0, be);
    },
    m = (y, R) => {
      if (y.length > R) r = !0;
      return y.slice(0, R);
    },
    visibility = e.visibility;
  return {
    cwd: s(e.cwd),
    root: s(e.root),
    branch: s(e.branch),
    default_branch: s(e.default_branch),
    status: e.status,
    visibility: visibility === null ? null : {
      origin: visibility.origin === null ? null : {
        ...visibility.origin,
        host: l(visibility.origin.host)
      },
      push_remote: s(visibility.push_remote),
      remotes: m(visibility.remotes, qco).map(item => ({
        ...item,
        host: l(item.host)
      })),
      visibility_cache: m(visibility.visibility_cache, CSr).map(item => ({
        ...item,
        host: l(item.host)
      }))
    },
    ...(e.error !== void 0 && {
      error: e.error
    }),
    ...(r && {
      truncated: !0
    })
  };
}
class xe {
  inFlight = new Map();
  judged = new Map();
  recordRequest(e, r) {
    this.inFlight.set(e, r);
  }
  settleRequest(request, r) {
    let context = this.inFlight.get(request);
    if (context === void 0) return;
    this.inFlight.delete(request);
    let s = {
      request: request,
      context: context
    };
    for (let l of r) this.judged.set(l, s);
  }
  forgetRequest(e) {
    this.inFlight.delete(e);
  }
  historyFor(e) {
    return this.judged.get(e);
  }
  reset() {
    this.inFlight.clear(), this.judged.clear();
  }
}
var Ct = new W(() => new xe());
function K() {
  return Ct.of(H().host);
}
function SNi(e, r) {
  K().recordRequest(e, r);
}
function ke(e, r) {
  K().settleRequest(e, r);
}
function Oe(e) {
  K().forgetRequest(e);
}
function wNi(e) {
  return K().historyFor(e);
}
function kNi(e) {
  let r = [],
    n = new Map();
  for (let s of e) {
    if (s.type !== "user") continue;
    let serverClassifierContext = s.serverClassifierContext;
    if (serverClassifierContext === void 0) continue;
    let content = s.message.content;
    if (!Array.isArray(content)) continue;
    let h = content.filter(item => typeof item === "object" && item !== null && item.type === "tool_result");
    if (h.length !== 1) continue;
    let tool_use_id = h[0].tool_use_id;
    if (typeof tool_use_id !== "string" || tool_use_id.length > ie) continue;
    let R = At(serverClassifierContext);
    if (R === void 0) continue;
    let A = n.get(R.request);
    if (A === void 0) A = {
      tool_use_ids: [],
      context: R.context
    }, n.set(R.request, A), r.push(A);
    if (A.tool_use_ids.length < Ae && !A.tool_use_ids.includes(tool_use_id)) A.tool_use_ids.push(tool_use_id);
  }
  return r;
}
function vNi(e, r) {
  let n = new Map(),
    s = new Set(),
    l = new Map();
  for (let y of e) {
    if (y.type !== "attachment" || y.attachment.type !== "queued_command") continue;
    let {
        attachment: attachment
      } = y,
      reminderId = attachment.reminderId;
    if (hwt(reminderId)) s.add(reminderId);
    let x = u1n(attachment);
    if (x !== void 0) {
      let w = O$t(x);
      n.delete(l.get(w) ?? ""), l.set(w, hwt(reminderId) ? reminderId : "");
    }
    if (!hwt(reminderId) || n.has(reminderId) || attachment.renderedByBatchHead) continue;
    let provenance = KOs(attachment);
    if (provenance === void 0) continue;
    if (provenance === "forwarded_turn") {
      if (x === void 0) continue;
      let written = x.source === "owner" && x.timestamp !== void 0 && x.timestamp.length <= we && JOs.test(x.timestamp) ? x.timestamp : void 0;
      n.set(reminderId, {
        provenance: provenance,
        author: _Ir(x.source),
        ...(written !== void 0 && {
          written: written
        })
      });
    } else n.set(reminderId, {
      provenance: provenance
    });
  }
  if (n.size === 0) return [];
  let m = [],
    h = new Set();
  for (let y of r) {
    if (y.type !== "user") continue;
    let content_2 = y.message.content,
      A = typeof content_2 === "string" ? [content_2] : content_2.flatMap(item => item.type === "text" ? [item.text] : []);
    for (let x of A) {
      let id_2 = Xqe(x);
      if (id_2 === void 0 || h.has(id_2)) continue;
      let w = n.get(id_2);
      if (w === void 0) continue;
      h.add(id_2), m.push({
        id: id_2,
        ...w
      });
    }
  }
  return m.length > tJe ? m.slice(m.length - tJe) : m;
}
function At(e) {
  if (typeof e !== "object" || e === null) return;
  let {
    request: request_2,
    context: context_2
  } = e;
  if (typeof request_2 !== "string" || request_2.length === 0) return;
  let s = ne().safeParse(context_2);
  return s.success ? {
    request: request_2,
    context: s.data
  } : void 0;
}
function Uce(e) {
  return typeof e === "string" ? e : Array.isArray(e) && e.length === 1 && e[0]?.type === "text" ? e[0].text : void 0;
}
function Cv(e) {
  return e.type === "assistant" && !e.isApiErrorMessage && e.message.model === Mi && Uce(e.message.content) === wG;
}
function Bce(e) {
  return Array.isArray(e) && e.some(item => item.type === "tool_result");
}
function Yco(e) {
  if (Bce(e.message.content)) return !1;
  return Boolean(e.promptId || e.turnOrigin || !(e.isMeta || e.isVirtual || e.isVisibleInTranscriptOnly));
}
var ze = 1e7;
function Le(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e >= r && e <= ze;
}
function RSr(e) {
  if (typeof e !== "object" || e === null || !("promptIndex" in e) || !("turnIndex" in e)) return !1;
  let {
    promptIndex: promptIndex,
    turnIndex: turnIndex
  } = e;
  return Le(turnIndex, 1) && Le(promptIndex, 0) && promptIndex <= turnIndex;
}
function Xco(e, r) {
  let n = e[r];
  if (n?.type !== "user" || !RSr(n.turnPosition)) return;
  let {
      turnIndex: turnIndex_2
    } = n.turnPosition,
    {
      promptIndex: promptIndex_2
    } = n.turnPosition;
  for (let m = r - 1; m >= 0; m--) {
    let h = e[m];
    if (h?.type !== "user" || !RSr(h.turnPosition)) continue;
    if (h.turnPosition.turnIndex !== turnIndex_2) break;
    promptIndex_2 = Math.max(promptIndex_2, h.turnPosition.promptIndex);
  }
  return {
    promptIndex: promptIndex_2,
    turnIndex: turnIndex_2
  };
}
function sgs(e) {
  let {
    content: content_3
  } = e.message;
  if (!Array.isArray(content_3) || content_3.length !== 1) return !1;
  let [n] = content_3;
  return n?.type === "text" && (n.text === fT || n.text === Su);
}
function Ie(e) {
  let r = !1;
  for (let n = e.length - 1; n >= 0; n--) {
    let s = e[n];
    if (s?.type === "assistant" && !Cv(s)) r = !0;
    if (s?.type !== "user") continue;
    if (RSr(s.turnPosition)) return Xco(e, n);
    if (sgs(s)) continue;
    if (s.isCompactSummary === !0) return "unknown";
    if (r && Yco(s)) return "unknown";
  }
  return;
}
function Tt(e) {
  let r = Ie(e);
  return r === "unknown" ? void 0 : r;
}
function ASr(e, r) {
  let promptIndex_3 = r === "human" ? 1 : 0,
    s = Ie(e);
  if (s === "unknown") return;
  if (s !== void 0) return s.turnIndex < ze ? {
    promptIndex: s.promptIndex + promptIndex_3,
    turnIndex: s.turnIndex + 1
  } : void 0;
  return e.some(item => item.type === "assistant" && !Cv(item) || item.type === "user" && item.isCompactSummary === !0 || item.type === "system" && item.subtype === "compact_boundary") ? void 0 : {
    promptIndex: promptIndex_3,
    turnIndex: 1
  };
}
function xSr(e, r) {
  try {
    let turnPosition = Tt(r);
    return turnPosition === void 0 ? e : {
      ...e,
      turnPosition: turnPosition
    };
  } catch (error) {
    return a(error), e;
  }
}
var Ne = he({
  aSetHook: !1
}, e => {
  e.aSetHook = !1;
});
function igs(e) {
  Ne.aSetHook ||= e.some(({
    hook: hook,
    pluginRoot: pluginRoot,
    deviceForwarded: deviceForwarded
  }) => hook.type !== "callback" && hook.type !== "function" || pluginRoot !== void 0 || deviceForwarded === !0);
}
function ENi() {
  return Ne.aSetHook;
}
var De = "tengu_smooth_chipmunk";
function ae() {
  let e = kr();
  return e.autoModeContextEnabled ??= Ke(), e.autoModeContextEnabled;
}
function Ue() {
  return kr().autoModeContextEnabled ?? Ke();
}
function wt() {
  return;
}
var Be = "tengu_iridescent_crystal";
function PSr() {
  return v(Be, !1);
}
function le() {
  return v("tengu_quiet_lantern", !0);
}
var xt = "tengu_copper_trellis";
function Jco() {
  return v(xt, !1);
}
function L2() {
  let e = v(t3i, "off");
  if (e === "off" || e === !1 || e === null) return nJe() ? "deny_all" : "off";
  return e === "keep_local" ? "keep_local" : "deny_all";
}
var Ot = "tengu_vivid_crayon";
function He() {
  return v(Ot, !0);
}
var Mt = "tengu_tidal_sparrow";
function Ve() {
  return v(Mt, !0);
}
var Pt = "tengu_hazel_plover";
function TNi() {
  return v(Pt, !1) === !0;
}
var Lt = "tengu_merry_popcorn";
function CNi() {
  return v(Lt, !0);
}
var zt = "tengu_wise_origami";
function je() {
  return v(zt, !1);
}
function RNi() {
  return v(n3i, !1);
}
var It = "tengu_bright_dragonfly";
function G() {
  if (i.ANTHROPIC_UNIX_SOCKET !== void 0) return i.CLAUDE_CODE_ENTRYPOINT === "ssh-remote";
  return Ci();
}
function Nt() {
  return G() && ($V() || YW());
}
function nJe({
  handoffReview = !1,
  outsideAutoMode = !1
} = {}) {
  try {
    if (!Fn()) return !1;
    let n = YKi(It, {
        safe: "off",
        others: ["direct", "all", "direct_and_handoffs", "all_and_handoffs"]
      }),
      s = n === "off" && !0 && !er() && (EM() || C7() !== null) && !bSe() && !fEo() && !YVs(),
      l = s ? "all" : n;
    if (l === "off" || (handoffReview || outsideAutoMode) && (l === "direct" || l === "all")) return !1;
    if (oN() || TU() && !D0e({
      peek: !0
    })) return !1;
    let m = ue();
    if (_t(Be, {
      safe: !1
    }) || m === null && G() && !_t(De, {
      safe: !0
    })) return !1;
    if (s && m === !1) return !1;
    return l === "all" || l === "all_and_handoffs" || Nt();
  } catch (error) {
    return a(F(error)), !1;
  }
}
function Ge() {
  let e = kr();
  return e.thirdPartyServerClassifierEnabled ??= M0e() ?? !(i.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS && !i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !Fn()), e.thirdPartyServerClassifierEnabled;
}
function M0e() {
  let e = kr();
  if (e.userServerClassifierSwitch === void 0) e.userServerClassifierSwitch = Xe();
  return e.userServerClassifierSwitch;
}
function ue() {
  let userServerClassifierSwitch = kr().userServerClassifierSwitch;
  return userServerClassifierSwitch === void 0 ? Xe() : userServerClassifierSwitch;
}
function Xe() {
  let e = () => {
    let CLAUDE_CODE_AUTO_MODE_SERVER = i.CLAUDE_CODE_AUTO_MODE_SERVER;
    return CLAUDE_CODE_AUTO_MODE_SERVER === void 0 ? null : Pe(CLAUDE_CODE_AUTO_MODE_SERVER);
  };
  return dHe(e) === !1 ? !1 : e();
}
function Ke() {
  return wt() ?? v(De, !0);
}
var Ft = "tengu_valiant_sphinx";
function ANi() {
  try {
    return v(Ft, !0) !== !1;
  } catch (error) {
    return a(F(error)), !0;
  }
}
var Dt = "tengu_drifting_valley";
function Fe() {
  return v(Dt, !1) === !0;
}
function D0e({
  peek = !1
} = {}) {
  if (zD()) return !1;
  let r = kr();
  if (r.betasSwitchSetAside === !0 && (!Fe() || oN())) {
    if (!peek) r.betasSwitchSetAside = !1;
    return !1;
  }
  if (r.betasSwitchSetAside !== void 0) return r.betasSwitchSetAside;
  let n = !1;
  try {
    n = i.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS && !i.CLAUDE_CODE_SIMULATE_PROXY_USAGE && Fn() && (!G() || i.ANTHROPIC_UNIX_SOCKET === void 0 && YW()) && M0e() !== !1 && !oN() && Fe();
  } catch (error) {
    a(F(error));
  }
  if (!peek) r.betasSwitchSetAside = n;
  return n;
}
function xNi() {
  if (q()) return;
  try {
    if (Te() !== "firstParty") return "platform";
    if (i.ANTHROPIC_UNIX_SOCKET !== void 0) return "unix_socket";
    if (!YW()) return "custom_base_url";
    return VU() === void 0 ? "direct" : "direct_http_proxy";
  } catch (error) {
    a(F(error));
    return;
  }
}
function ce() {
  return !1;
}
var Ut = (e, r) => {
    let n = setTimeout(e, r);
    return () => clearTimeout(n);
  },
  limit = 10;
function ppt(e) {
  return e ?? "main";
}
var Bt = !0;
async function ags(e, r) {
  let n = WVs(e);
  if (n !== void 0) return n.position >= limit ? {
    kind: "stop",
    position: n.position,
    recorded: !1
  } : {
    kind: "deny",
    position: n.position,
    interrupted: !(await n.waited)
  };
  let position = uWt(r.runKey);
  if (r.signal.aborted) return {
    kind: "deny",
    position: position,
    interrupted: !0
  };
  if (Bt && position >= limit) kIo(r.runKey), position = 0;
  let l = r.turn ?? r.turnNow;
  if (l !== void 0) zVs(r.runKey, l), position = uWt(r.runKey);
  let position_2 = position + 1,
    h = {
      ...(r.turn !== void 0 && {
        turn: r.turn
      }),
      ...(r.noCheck && {
        noCheck: r.noCheck
      })
    };
  if (position_2 >= limit) return wIo(e, {
    runKey: r.runKey,
    position: position_2,
    waited: Promise.resolve(!0),
    ...h
  }), {
    kind: "stop",
    position: position_2,
    recorded: !0
  };
  let y = qt(position_2),
    waited = Ht(y, position_2, r);
  return wIo(e, {
    runKey: r.runKey,
    position: position_2,
    waited: waited,
    ...h
  }), {
    kind: "deny",
    position: position_2,
    interrupted: !(await waited)
  };
}
function Qco(e) {
  if (uWt(e) > 0) kIo(e);
}
function qt(e) {
  return AU(e);
}
function Ht(delayMs, position_3, {
  signal: signal,
  scheduleTimeout = Ut,
  onWait: onWait
}) {
  let m = h => {
    try {
      onWait?.(h);
    } catch (error) {
      t(`[server-classifier] retry banner update failed: ${d(error)}`, {
        level: "warn"
      });
    }
  };
  return new Promise(h => {
    let y = () => {},
      R = x => {
        y(), signal.removeEventListener("abort", A), m(null), h(x);
      },
      A = () => R(!1);
    signal.addEventListener("abort", A, {
      once: !0
    }), m({
      position: position_3,
      limit: limit,
      delayMs: delayMs
    }), y = scheduleTimeout(() => R(!0), delayMs);
  });
}
function lgs(e, r) {
  if (e === void 0) return !1;
  if (e.startsWith("server_call_unavailable_")) return e !== "server_call_unavailable_truncated";
  return e.startsWith("server_unavailable_") || e === "server_stream_ended" || e === "server_unrecognized_result" || !r && (e === "server_no_result" || e === "server_unsupported" || e === "server_thread_unsupported");
}
function PNi() {
  return `Auto mode is unavailable: the server returned no safety verdict for ${limit} responses in a row, so this agent was stopped before it finished. Nobody interrupted it; whatever it returned is partial. Retrying now will likely stop the same way \u2014 wait for the user's next message.`;
}
function ONi(e) {
  return `Auto mode is unavailable: the server returned no safety verdict for ${limit} responses in a row, so ${e} was not run and this turn has ended. Wait for the user's next message before doing anything further.`;
}
function dgs(e) {
  let r = `Auto mode is unavailable \u2014 the server returned no safety verdict for the last ${limit} responses, so Claude stopped. Send a message to try again, or switch out of auto mode.`;
  return e === void 0 ? r : `${r} Requests in this session go through ${e}; a proxy that alters responses could cause this.`;
}
function OSr(e) {
  let r = dgs(void 0);
  return e.startsWith(r) ? r : e;
}
function SQt(e, r, n) {
  return `${`${J$s}${r === "policy_refusal" && n === "refusal" ? " \u2014 a safety check separate from auto mode blocked this request because of earlier conversation content \u2014 it isn't about the action itself" : ""}`} \u2014 run with --debug for details`;
}
function jTe(e) {
  try {
    let r = e(),
      n = typeof r === "object" && r !== null && "default" in r ? r.default : r;
    if (typeof n !== "string") throw Error("a bundled text did not load as a string");
    return n;
  } catch (error) {
    let n = error instanceof Error ? error.cause : void 0;
    throw t(`A bundled text could not be read: ${d(error)}; asset: ${gqn(error)}; cause: ${d(n)}`, {
      level: "error"
    }), error;
  }
}
var Vt = p(() => {
  let e;
  try {
    let rule = jTe(() => import.meta.require("B:/~BUN/root/chunk-0pa0y4zb.js")).replace(/<user_allow_rules_to_replace>[\s\S]*?<\/user_allow_rules_to_replace>/, "").split(/\r?\n/).find(item => item.startsWith("- Scheduled-Task Fires:"))?.slice(2);
    if (rule !== void 0) return {
      rule: rule
    };
  } catch (error) {
    e = error;
  }
  return a(qe(F(e ?? "no such line outside the allow slot"), 'Auto mode could not read the "Scheduled-Task Fires" rule from its template, so an allow list that replaces the defaults goes to the platform without it')), {
    rule: void 0
  };
});
function Zco() {
  return Vt().rule;
}
function wQt(e) {
  try {
    if (!id() || !Cs().once(`auto_mode_server_check:${e.state}:${"reason" in e ? e.reason : ""}`)) return;
    let r = ue();
    V(e.state === "no_verdict" ? "warn" : "info", "cli_api_auto_mode_server_check", {
      ...e,
      switch: r === null ? "unset" : r ? "on" : "off"
    });
  } catch (error) {
    a(F(error));
  }
}
var cgs = "dangerous_tool_use",
  jt = p(() => Dr("type", [u({
    type: T("evaluated"),
    outcome: B(["flagged", "not_flagged"]),
    explanation: o().nullish().transform(e => e ?? void 0).optional(),
    cited_rule: u({
      type: o(),
      path: o()
    }).nullish().catch(void 0)
  }), u({
    type: T("skipped")
  }), u({
    type: T("unavailable"),
    reason: o()
  })])),
  Gt = p(() => Dr("type", [u({
    type: T("available"),
    tool_uses: me(o(), oe())
  }), u({
    type: T("unsupported")
  }), u({
    type: T("unavailable"),
    reason: o()
  })])),
  Xt = p(() => C(u({
    type: o()
  }).loose())),
  Kt = ["disabled", "error"],
  Wt = ["timeout", "error", "refused", "input_too_long", "truncated"];
function We(e, r) {
  return e.includes(r) ? r : "other";
}
function $t(e) {
  let r = typeof e === "object" && e !== null ? e.safeguard_results : void 0;
  if (r === void 0 || r === null) return {
    kind: "none",
    why: "server_no_result"
  };
  let n = Xt().safeParse(r);
  if (!n.success) return {
    kind: "none",
    why: "server_unrecognized_result"
  };
  let s = n.data.filter(item => item.type === cgs);
  if (s.length === 0) return {
    kind: "none",
    why: "server_no_result"
  };
  if (s.length > 1) return {
    kind: "none",
    why: "server_unrecognized_result"
  };
  let l = Gt().safeParse(s[0].status);
  if (!l.success) return {
    kind: "none",
    why: "server_unrecognized_result"
  };
  switch (l.data.type) {
    case "unsupported":
      return {
        kind: "none",
        why: "server_unsupported"
      };
    case "unavailable":
      return {
        kind: "none",
        why: `server_unavailable_${We(Kt, l.data.reason)}`
      };
    case "available":
      {
        let statuses = new Map();
        for (let [h, y] of Object.entries(l.data.tool_uses)) {
          let R = jt().safeParse(y);
          statuses.set(h, R.success ? R.data : {
            type: "unrecognized"
          });
        }
        return {
          kind: "per_call",
          statuses: statuses
        };
      }
  }
}
class pe {
  key;
  sentArtifacts;
  sentThread;
  sentThreadStoresNothing;
  sentExactMcpAllowRules;
  sentJudgeOnlyTools;
  sentAutoModeLists;
  sentClassifierFacts;
  runKey;
  #r = !1;
  #n = void 0;
  #t = void 0;
  #o = void 0;
  #s = !1;
  #e = new Map();
  #i = () => {};
  #a;
  constructor(e, r, n, s, l, m, h, y, R) {
    this.key = e, this.sentArtifacts = r, this.sentThread = n, this.sentThreadStoresNothing = R, this.sentExactMcpAllowRules = s, this.sentJudgeOnlyTools = l, this.sentClassifierFacts = m, this.runKey = h, this.sentAutoModeLists = y, this.#a = new Promise(A => {
      this.#i = A;
    });
  }
  settle(e) {
    if (this.#t !== void 0) return !1;
    return this.#t = e, this.#o = Date.now(), this.#i(e), !0;
  }
  results() {
    return this.#t !== void 0 ? Promise.resolve(this.#t) : this.#a;
  }
  noteBashSkipRefused() {
    this.#s = !0;
  }
  get bashSkipRefused() {
    return this.#s;
  }
  noteRewriteCause(e) {
    if (e === "hook" || e === "tool_call_chain") this.#r = !0;else if (e === "siblings_unknown" || e === "sibling_not_reviewed") this.#n ??= e;
  }
  siblingNoteCause() {
    return this.#r ? "sibling_changed" : this.#n ?? "sibling_not_reviewed";
  }
  settledAt() {
    return this.#o;
  }
  noteRewrittenCall(e, r) {
    if (!this.#e.has(e)) {
      this.#e.set(e, r);
      return;
    }
    let n = this.#e.get(e);
    this.#e.set(e, n === void 0 || r === void 0 ? void 0 : new Set([...n].filter(item => r.has(item))));
  }
  isVoidedByAnotherCall(e) {
    for (let [r, n] of this.#e) if (n === void 0 || r !== e && !n.has(e)) return !0;
    return !1;
  }
  toJSON() {
    return;
  }
}
var ISr = "server_context_stale",
  Jt = 120,
  Qt = /^auto_mode\.(allow|soft_deny)\.(0|[1-9][0-9]*)$/;
function Zt(e, r) {
  let cited_rule = e.cited_rule;
  if (r === void 0 || cited_rule?.type !== "classifier_context") return;
  let s = Qt.exec(cited_rule.path),
    l = e.outcome === "not_flagged" ? {
      list: "allow",
      entries: r.allow
    } : {
      list: "soft_deny",
      entries: r.softDeny
    };
  if (s === null || s[1] !== l.list) return;
  let m = l.entries[Number(s[2])];
  if (m === void 0 || m === Iu || m === Zco()) return;
  let h = Wn(Bz($a(m)).text),
    y = h.search(/:(?=\s|$)|\s\[/),
    R = (y === -1 ? h : h.slice(0, y)).replace(/\t+/g, " ").trim(),
    name = Bz(Q(R, Jt)).text.trimEnd();
  return name.length > 0 ? {
    list: l.list,
    name: name
  } : void 0;
}
function INi(e, r = {}) {
  if (r.judgeOnlyTools === void 0) wQt({
    state: "requested"
  });
  return new pe(e, r.artifacts, r.thread === !0, r.exactMcpAllowRules ?? Ye, r.judgeOnlyTools, r.classifierFacts, ppt(r.agentId), r.autoModeLists, r.threadStoresNothing === !0);
}
var Ye = new Set();
function MNi(e) {
  if (e.mcp_allow_rules_exact !== !0) return Ye;
  return new Set(e.rules.allow.map(item => item.rule).filter(item => item.startsWith(HA) && !item.includes("(")));
}
function L(e) {
  return e instanceof pe ? e : void 0;
}
function DNi(e, r) {
  return L(e)?.sentExactMcpAllowRules.has(r) === !0;
}
function ugs(e, r) {
  let n = L(e.serverClassifierResults)?.sentClassifierFacts,
    s = e.message.content.find(item => item.type === "tool_use" && item.id === r);
  if (n === void 0 || s?.type !== "tool_use" || s.name !== Me) return;
  return n.skipBashPrescreen === "true" ? "spent" : "retry";
}
function LNi(e) {
  L(e)?.noteBashSkipRefused();
}
function NNi(e) {
  if (!Ve()) return;
  let r = e.findLast(n => n.type === "assistant" && L(n.serverClassifierResults) !== void 0);
  return {
    bashPrescreenRetry: "true",
    ...(r?.type === "assistant" && L(r.serverClassifierResults)?.bashSkipRefused === !0 && {
      skipBashPrescreen: "true"
    })
  };
}
function _e(e, r, n) {
  if (e.sentJudgeOnlyTools === void 0) return !0;
  let s = r.message.content.find(item => item.type === "tool_use" && item.id === n);
  return s?.type === "tool_use" && e.sentJudgeOnlyTools.has(s.name);
}
function FNi(e, r) {
  let n = L(e.serverClassifierResults ?? e.serverClassifierReviewLeftBehind);
  return n !== void 0 && vQt(e, r) && _e(n, e, r);
}
function fgs(serverClassifierResults) {
  return {
    serverClassifierRequest: serverClassifierResults.key,
    serverClassifierResults: serverClassifierResults
  };
}
function HNi(e, r, n) {
  let s = tr(e, $t(r));
  return ke(e.key, s.kind === "per_call" ? [...s.statuses].filter(([, l]) => l.type === "evaluated").map(([l]) => l) : []), $e(e, s, n);
}
function $e(e, r, n) {
  let s = L(e);
  if (s === void 0 || !s.settle(r)) return;
  let l = n === void 0 ? void 0 : [...n],
    m = r.kind === "per_call" && rr(r.statuses, l);
  if (m) Qco(s.runKey);
  if (e.sentJudgeOnlyTools !== void 0) return r;
  if (r.kind === "none") wQt({
    state: "no_verdict",
    reason: r.why
  });else if (m) wQt({
    state: "verdict"
  });else if (r.statuses.size > 0 && l !== void 0 && l.length > 0 && !l.some(item => r.statuses.has(item))) wQt({
    state: "no_verdict",
    reason: "other_tool_use_ids"
  });
  return r;
}
function tr(e, r) {
  if (e.sentThread && r.kind === "none" && r.why === "server_unsupported") {
    if (e.sentThreadStoresNothing) kr().continueNoSaveRefused = !0, c("tether_continue_no_save", "classifier_unsupported");else if (!rqn()) jVs(), t("[server-classifier] the API answered unsupported to a request sent on a message thread; this session sends its later requests without a thread so the server can classify them", {
      level: "warn"
    });
    return {
      kind: "none",
      why: "server_thread_unsupported"
    };
  }
  return r;
}
function rr(e, r) {
  if (r === void 0) return [...e.values()].some(item => item.type === "evaluated");
  for (let n of r) if (e.get(n)?.type === "evaluated") return !0;
  return !1;
}
function zDt(e) {
  return e.kind === "none" && (e.why === "server_unsupported" || e.why === "server_unavailable_disabled" || e.why === "server_no_result");
}
function $Ni(e, r) {
  return kQt() === "thirdParty" && (e === "server_unsupported" || e === "server_no_result" || (e === "refused_latch" || r === "server_not_requested") && If(ns(), yk));
}
function UNi(e) {
  return $e(e, {
    kind: "none",
    why: "server_no_result"
  });
}
function euo(e) {
  Oe(e.key), L(e)?.settle({
    kind: "none",
    why: "server_stream_ended"
  });
}
function kQt() {
  let e = Te();
  switch (e) {
    case "firstParty":
      return _Dn() ? "thirdParty" : "firstParty";
    case "bedrock":
    case "mantle":
    case "vertex":
    case "foundry":
    case "anthropicAws":
    case "anthropicGoogleCloud":
    case "gateway":
      return "thirdParty";
    default:
      return e;
  }
}
function _Dn() {
  return Te() === "firstParty" && !G();
}
function yy(e, {
  peek: peek_2 = !1
} = {}) {
  return MSr(e, peek_2).role;
}
function BNi(e) {
  return MSr(e).offReason;
}
function bDn(e) {
  try {
    let {
      role: role,
      offReason: offReason
    } = MSr(e, !0);
    return {
      serverClassifierRole: f(role),
      serverClassifierOffReason: de(offReason)
    };
  } catch (error) {
    return a(error), {};
  }
}
function MSr(e, peek_3 = !1) {
  if (!yo(e)) return {
    role: "off",
    offReason: "not_auto_mode"
  };
  if (!SDn({
    peek: peek_3
  })) return {
    role: "off",
    offReason: "betas_disabled"
  };
  if (kQt() === "thirdParty") {
    let offReason_2 = !Ge() ? "third_party_switch_off" : sK() ? "refused_latch" : ce() ? "batch_file_tools" : _Dn() && PSr() ? "kill_switch" : void 0;
    return offReason_2 === void 0 ? {
      role: "arbiterWithLocalFallback"
    } : {
      role: "off",
      offReason: offReason_2
    };
  }
  let n = M0e();
  if (n === !1) return {
    role: "off",
    offReason: "user_switch_off"
  };
  let offReason_3 = !(n ?? (peek_3 ? Ue() : ae())) ? "rollout_flag_off" : PSr() ? "kill_switch" : sK() ? "refused_latch" : ce() ? "batch_file_tools" : void 0;
  if (offReason_3 === void 0) return {
    role: "arbiter"
  };
  return {
    role: "off",
    offReason: offReason_3
  };
}
function SDn({
  peek: peek_4 = !1
} = {}) {
  switch (kQt()) {
    case "firstParty":
      return Ky() || D0e({
        peek: peek_4
      });
    case "thirdParty":
      {
        let r = Te();
        if (_Dn() && M0e() === !0 && Pe(dHe(() => i.CLAUDE_CODE_AUTO_MODE_SERVER)) && (!Pe(wte("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS")) || Pe(wte("CLAUDE_CODE_AUTO_MODE_SERVER"))) && (!Mbt(_C() ?? !0) || Pbt() && Pe(wte("CLAUDE_CODE_AUTO_MODE_SERVER"))) && !oN()) return !zD();
        return r === "firstParty" || cM(r) ? Ky() || D0e({
          peek: peek_4
        }) : !zD();
      }
  }
}
function N2(e) {
  return e === "arbiter" || e === "arbiterWithLocalFallback";
}
function DSr(e, r, {
  handoffReview: handoffReview_2 = !1
} = {}) {
  if (!yo(e)) return !1;
  if (nJe({
    handoffReview: handoffReview_2
  })) return !0;
  if (B7e()) return !1;
  if (!je()) return !1;
  if (r !== "off") return !0;
  return M0e() ?? (kQt() === "thirdParty" || ae());
}
function tuo() {
  return DSr("auto", "arbiterWithLocalFallback");
}
function jNi(e) {
  return DSr(e, "off");
}
function WNi() {
  return Ou() && yy("auto") !== "off";
}
function nuo() {
  return Jco() && yy("auto") === "arbiter";
}
function LSr(e) {
  return N2(yy(e, {
    peek: !0
  })) && !If(ns(), yk);
}
var model = "The server-side auto mode classifier",
  nr = 2000,
  or = ". If you have other tasks";
function Je(e) {
  if (e === void 0) return;
  let r = Zn(e).replace(/[\u0000-\u001f\u007f-\u009f]/g, " ").replace(/\s+/g, " ").trim(),
    n = r.indexOf(or);
  return n === -1 ? r : r.slice(0, n).trim();
}
var pgs = "server_call_unavailable_input_too_long";
function U(e, r) {
  if (e.kind !== "per_call") return;
  let n = e.statuses.get(r);
  if (n !== void 0) return n;
  let s = Pze(r);
  return s === void 0 ? void 0 : e.statuses.get(s);
}
function jce(e, r) {
  let n = U(e, r);
  return n?.type === "evaluated" ? void 0 : Qe(e, n);
}
function mgs(e) {
  return e === "server_not_requested" || e === "server_input_rewritten";
}
function zNi(e) {
  return e === "server_input_rewritten" && L2() === "off" && le();
}
function sr(e, r) {
  return e === "arbiterWithLocalFallback" && (zDt(r) || r.kind === "none" && (r.why === "server_not_requested" || r.why === "server_input_rewritten" && L2() === "off"));
}
function GNi(e, r, n, {
  outsideAutoMode: outsideAutoMode_2 = !1
} = {}) {
  if (e === "arbiter") return le() && r.kind === "none" && (r.why === "server_no_result" || r.why === "server_unsupported" || outsideAutoMode_2 && r.why === "server_thread_unsupported");
  if (e !== "arbiterWithLocalFallback") return !1;
  if (sr(e, r)) return !0;
  if (r.kind === "none") return r.why.startsWith("server_unavailable_") || r.why === "server_results_not_held";
  let l = U(r, n);
  if (l === void 0) return !0;
  return l.type === "unavailable" && l.reason !== "truncated";
}
function Qe(e, r) {
  if (e.kind === "none") return e.why;
  if (r === void 0) return "server_no_result";
  switch (r.type) {
    case "skipped":
      return "server_call_skipped";
    case "unavailable":
      return `server_call_unavailable_${We(Wt, r.reason)}`;
    case "unrecognized":
      return "server_unrecognized_result";
  }
}
function ir(e) {
  if (e.serverClassifierInputRewritten === !0) return Promise.resolve({
    kind: "none",
    why: "server_input_rewritten"
  });
  let r = L(e.serverClassifierResults);
  if (r !== void 0) return r.results();
  return Promise.resolve({
    kind: "none",
    why: e.serverClassifierRequest !== void 0 ? "server_results_not_held" : "server_not_requested"
  });
}
function NSr(e, r, n = !0) {
  let s = e.serverClassifierInputRewritten === !0,
    l = L(s ? e.serverClassifierReviewLeftBehind : e.serverClassifierResults);
  if (l === void 0) return ir(e);
  if (!_e(l, e, r)) return Promise.resolve({
    kind: "none",
    why: "server_not_requested"
  });
  return l.results().then(m => {
    let h = U(m, r);
    return (s ? h?.type === "evaluated" || h?.type === "skipped" : (!n || l.isVoidedByAnotherCall(r)) && Y(h)) ? {
      kind: "none",
      why: "server_input_rewritten"
    } : m;
  });
}
function Y(e) {
  return e?.type === "evaluated" && e.outcome === "not_flagged";
}
function vQt(e, r) {
  let n = Pze(r);
  return e.message.content.some(item => item.type === "tool_use" && (item.id === r || item.id === n));
}
function EQt(e, r, n) {
  return e.isVirtual !== !0 && n !== r && vQt(e, r);
}
function hgs(e, r) {
  return L(e.serverClassifierResults) === void 0 ? void 0 : Ri(r);
}
function ggs(e, r) {
  return e === void 0 || !_P(r, e);
}
function fe(e, shape, keptVerdict) {
  if (e === void 0) return {};
  return {
    [ysn]: L2() !== "off" ? structuredClone(e.written) : void 0,
    serverClassifierInputRewrite: {
      cause: e.cause,
      source: e.source,
      byLocalCode: e.byLocalCode,
      ...(shape !== void 0 && {
        shape: shape
      }),
      keptVerdict: keptVerdict
    }
  };
}
async function VNi(e, r, input, s, l) {
  let m = L(e.serverClassifierResults);
  if (m === void 0 || !vQt(e, r)) return e;
  let h = !m.isVoidedByAnotherCall(r) && l !== void 0 && l.every(item => L(item.serverClassifierResults) === m);
  if (s === void 0 && h) return e;
  let y = s !== void 0,
    cause = s !== void 0 ? s.cause : l === void 0 ? "siblings_unknown" : l.every(item => L(item.serverClassifierResults) === m) ? m.siblingNoteCause() : "sibling_not_reviewed";
  m.noteRewriteCause(cause), m.noteRewrittenCall(r, L2() !== "off" ? lr(l) : void 0);
  let message = {
      ...e.message,
      content: e.message.content.map(item => item.type === "tool_use" && item.id === r ? {
        ...item,
        input: input
      } : item)
    },
    x = _e(m, e, r) ? U(await m.results(), r) : void 0,
    M = e.message.content.find(item => item.type === "tool_use" && item.id === r),
    w = y ? ar(M, input) : void 0;
  if (s !== void 0 && h && fr(s)) return {
    ...e,
    ...fe(s, w, Y(x)),
    message: message
  };
  if (!(y ? x?.type === "evaluated" : Y(x))) return y ? {
    ...e,
    ...fe(s, w, !1),
    message: message
  } : e;
  let {
    serverClassifierRequest: serverClassifierRequest,
    serverClassifierResults: serverClassifierResults_2,
    ...P
  } = e;
  return {
    ...P,
    serverClassifierInputRewritten: !0,
    ...(y && {
      serverClassifierOwnInputRewritten: !0
    }),
    ...fe(s, w, !1),
    message: message,
    serverClassifierRewrite: {
      cause: cause,
      lostVerdict: Y(x) ? "cleared" : "flagged"
    }
  };
}
function ar(e, r) {
  let n = e?.type === "tool_use" && D(e.input) ? e.input.command : void 0,
    command = r.command;
  if (typeof n !== "string" || typeof command !== "string") return;
  if (command === n) return "same";
  if (command.endsWith(n)) return "prefix";
  return command.includes(n) ? "contains" : "other";
}
function lr(e) {
  return e === void 0 ? void 0 : new Set(e.flatMap(item => item.message.content.flatMap(item => item.type === "tool_use" ? [item.id] : [])));
}
function KNi(e, r, n, s) {
  if (!e.changed && !r.changed) return;
  let l = h => h.every(item => item === "local_code"),
    m = L2() === "keep_local";
  return {
    cause: e.changed ? "tool_call_chain" : "hook",
    source: dr([...(e.changed ? e.sources : []), ...(r.changed ? r.sources : [])]),
    byLocalCode: l(e.kinds) && l(r.kinds) && (!e.changed || e.kinds.length > 0) && (!r.changed || r.kinds.length > 0),
    classifiesAll: m && n(),
    shellOrFileTool: m && s(),
    written: e.written
  };
}
function ur(e) {
  switch (e === void 0 ? void 0 : tt(e, ":")) {
    case "settings":
      return "settings";
    case "policySettings":
      return "managed";
    case "plugin":
      return "plugin";
    case "skill":
      return "skill";
    case "mod":
      return "mod";
    case "mixed":
      return "mixed";
    default:
      return "unknown";
  }
}
function dr(e) {
  let r = new Set(e.map(ur));
  if (r.size === 0) return "unknown";
  return r.size === 1 ? [...r][0] : "mixed";
}
var Ze = new Set([Me, Fs, kt]);
function qNi(e) {
  return Ze.has(e) && _se();
}
var cr = new Set([...Ze, dt, Yt, gi]);
function YNi(e) {
  return e.isMcp !== !0 && e.mcpInfo === void 0 && cr.has(e.name) && !cht(e);
}
function fr(e) {
  return L2() === "keep_local" && e.byLocalCode && e.shellOrFileTool && !e.classifiesAll;
}
function ruo(e, r) {
  if (r !== "server_input_rewritten") return;
  if (e.serverClassifierInputRewritten !== !0) return {
    cause: L(e.serverClassifierResults)?.siblingNoteCause() ?? "sibling_changed",
    lostVerdict: "cleared"
  };
  return e.serverClassifierRewrite ?? {
    cause: "turn_step"
  };
}
function GDt(e, r) {
  let n = U(e, r);
  if (n?.type !== "evaluated") return {
    kind: "no_verdict",
    why: Qe(e, n)
  };
  return {
    kind: "verdict",
    outcome: n.outcome,
    explained: n.outcome === "flagged" && (Je(n.explanation)?.length ?? 0) > 0
  };
}
function FSr(e, r, n, s) {
  let l = U(e, r);
  if (l?.type !== "evaluated") {
    if (l?.type === "unavailable" && l.reason === "refused") return {
      model: model,
      durationMs: 0,
      shouldBlock: !0,
      refusedBySafeguard: !0,
      failureMode: "policy_refusal",
      errorKind: jce(e, r),
      reason: SQt("server", "policy_refusal", "refusal")
    };
    let R = l === void 0 ? e.kind !== "none" || e.why !== "server_unrecognized_result" : l.type === "skipped",
      errorKind = jce(e, r);
    return (R ? n() : void 0) ?? {
      model: model,
      durationMs: 0,
      shouldBlock: !0,
      unavailable: !0,
      ...(errorKind === pgs && He() && {
        transcriptTooLong: !0
      }),
      errorKind: errorKind,
      reason: "Classifier unavailable - blocking for safety"
    };
  }
  let shouldBlock = l.outcome === "flagged",
    h = shouldBlock ? Je(l.explanation) : void 0,
    autoModeRule = e.kind === "per_call" && e.statuses.get(r) === l ? Zt(l, s) : void 0;
  if (autoModeRule !== void 0) g("auto_mode_cited_rule");else if (l.cited_rule !== void 0 && l.cited_rule !== null) c("auto_mode_cited_rule", "not_resolved");
  return {
    model: model,
    durationMs: 0,
    shouldBlock: shouldBlock,
    ...(autoModeRule !== void 0 && {
      autoModeRule: autoModeRule
    }),
    reason: shouldBlock ? h !== void 0 && h.length > 0 ? h.slice(0, nr) : SGn : "Not flagged by the server-side auto mode classifier"
  };
}
var pr = "tengu_buzzing_pelican",
  _r = new Set([tHe, TWn]),
  mr = "tengu_deep_dusk",
  hr = "tengu_parsed_creek";
function TQt(e, r) {
  if (e.mcpInfo === void 0) return !1;
  let n = Id(e, r);
  return ygs(fi(e), n, r) || _gs(n, r);
}
function ygs(e, r, n) {
  return _r.has(e) && et(r, n) && _t(mr, {
    safe: !0
  });
}
function _gs(e, r) {
  return et(e, r) && v(pr, !1);
}
function VDt(e, r) {
  return e.mcpInfo !== void 0 && ouo(fi(e), Id(e, r), r);
}
function ouo(e, r, n) {
  return e === owe && rt(r, n) && _t(hr, {
    safe: !1
  });
}
function et(e, r) {
  return i.CLAUDE_CODE_REMOTE && rt(e, r);
}
function rt(e, r) {
  return yo(e, r.servedCall === !0) && yy(r.mode) === "arbiter";
}
var gr = "tengu_dapper_truffle";
function nt(e, r, n, s) {
  return yo(n, s) && (e.isDestructive?.(r) ?? !1) && v("tengu_cowork_auto_mode_include_allowed_write_mcp", er());
}
function XNi() {
  return v("tengu_cowork_auto_mode_include_allowed_write_mcp", !1);
}
function ot(e, r, n, s) {
  return e.mcpInfo !== void 0 && i.CLAUDE_CODE_REMOTE && nt(e, r, n, s.servedCall === !0);
}
function CQt(e, r) {
  return _D(r).some(item => item.source === "mcpServerPolicy" && uht(e, item));
}
function JNi(e, r, n, s, l) {
  let {
    source: source
  } = e;
  return (source === "cliArg" || source === "command" || source === "session" || source === "mcpMount") && bgs(r, n, s, l) ? source : void 0;
}
function bgs(e, r, n, s) {
  return ot(e, r, n, s) && CQt(e, s);
}
function yr(e, r, n, s, l, m) {
  return (e.source === "cliArg" || e.source === "session" || e.source === "mcpMount") && ot(r, n, s, l) && v(gr, xC() ? "server" : "off") === "server" && m() === "arbiter" && CQt(r, l);
}
function rJe(e, r, n, s, l, m) {
  if (e === null) return;
  if (e.source === "mcpServerPolicy" && nt(r, n, s, !1)) return "serverPolicy";
  if (r.mcpInfo === void 0) return;
  let h = se(l);
  if (TQt(r, h)) return "remoteSession";
  if (VDt(r, h) && m() === "arbiter") return "workspaceShell";
  return yr(e, r, n, s, h, m) ? "shadowedServerPolicy" : void 0;
}
export { bQt, mNi, hNi, tgs, qco, CSr, tJe, ngs, gNi, yNi, rgs, ogs, Foe, _Ni, bNi, SNi, wNi, kNi, vNi, Uce, Cv, Bce, Yco, RSr, Xco, sgs, ASr, xSr, igs, ENi, PSr, Jco, L2, TNi, CNi, RNi, nJe, M0e, ANi, D0e, xNi, limit as Aze, ppt, ags, Qco, lgs, PNi, ONi, dgs, OSr, SQt, jTe, Zco, wQt, cgs, ISr, INi, MNi, DNi, ugs, LNi, NNi, FNi, fgs, HNi, zDt, $Ni, UNi, euo, kQt, _Dn, yy, BNi, bDn, MSr, SDn, N2, DSr, tuo, jNi, WNi, nuo, LSr, model as xze, pgs, jce, mgs, zNi, GNi, NSr, vQt, EQt, hgs, ggs, VNi, KNi, qNi, YNi, ruo, GDt, FSr, TQt, ygs, _gs, VDt, ouo, XNi, CQt, JNi, bgs, rJe };