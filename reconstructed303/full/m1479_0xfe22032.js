// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L,
  Br
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  Yw
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  pn
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  nWt
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  ne,
  zr,
  q4,
  Hd,
  yJn
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  Of,
  BN,
  Xj
} from "B:/~BUN/root/chunk-7qeqkjr8.js";
import {
  ts
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  ei
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  QHo,
  Wo
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  XVs,
  me,
  xHo,
  Aun,
  FHo,
  eT,
  HHo,
  Iun
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  ok,
  jun,
  xe,
  i0e
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  Bc
} from "B:/~BUN/root/chunk-c0j3f8cc.js";
import {
  kv
} from "B:/~BUN/root/chunk-rwgz2tnq.js";
import {
  FIe,
  PD,
  pc,
  Sl,
  iWe,
  fge,
  cht,
  lJe,
  r2,
  wn,
  nMe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  OC
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  Vht,
  WM,
  dLo
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  sE,
  jze,
  H2
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  E5,
  _1t
} from "B:/~BUN/root/chunk-pej55jax.js";
import {
  G3e,
  PUn
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  Ug,
  H0s
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  SYe,
  cps,
  N0n,
  y9t,
  _9t,
  sxt,
  aat,
  dat,
  wS,
  S9t,
  w9t,
  kLn,
  ZSe,
  Zuo
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  Wqn,
  zqn,
  UHs
} from "B:/~BUN/root/chunk-66hg7026.js";
import {
  Tit
} from "B:/~BUN/root/chunk-t1rttjj3.js";
import {
  X4e
} from "B:/~BUN/root/chunk-trktrhyg.js";
import {
  gOn
} from "B:/~BUN/root/chunk-6h72a23h.js";
import {
  Cbe
} from "B:/~BUN/root/chunk-adys8ehb.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Xnt
} from "B:/~BUN/root/chunk-qvf3sn2n.js";
import {
  Kn
} from "B:/~BUN/root/chunk-dsby0gnt.js";
import {
  sis
} from "B:/~BUN/root/chunk-hkbwgpgj.js";

function aSn(o) {
  let t = [];
  for (let u of o) {
    let i = typeof u.value === "string" ? u.value : Array.isArray(u.value) ? u.value.join(", ") : null;
    if (i === null || i === "" || i === "none") continue;
    t.push(u.label ? {
      label: u.label,
      value: i
    } : {
      value: i
    })
  }
  return t
}

function aVe(o) {
  let t = o.map((u) => u.filter((i) => !i.antOnly));
  return t.push(o.flatMap((u) => u.filter((i) => i.antOnly))), t
}
var fr = import.meta.require("B:/~BUN/root/chunk-sshtxkth.js");

function N3o() {
  return []
}

function F3o() {
  return []
}

function H3o() {
  return []
}

function $3o(o, t = null, u) {
  let i = o?.find((c) => c.name === "ide");
  if (t) {
    let c = Yw(t.ideType),
      l = ZSe(t.ideType) ? "plugin" : "extension";
    if (t.error) return [{
      label: "IDE",
      value: r(n, {
        children: [Kn("error", u)(te.cross), " Error installing ", c, " ", l, ": ", t.error, `
`, "Please restart your IDE and try again."]
      })
    }];
    if (t.installed)
      if (i && i.type === "connected")
        if (t.installedVersion !== i.serverInfo?.version) return [{
          label: "IDE",
          value: `Connected to ${c} ${l} version ${t.installedVersion} (server version: ${i.serverInfo?.version})`
        }];
        else return [{
          label: "IDE",
          value: `Connected to ${c} ${l} version ${t.installedVersion}`
        }];
    else return [{
      label: "IDE",
      value: `Installed ${c} ${l}`
    }]
  } else if (i) {
    let c = Zuo(i) ?? "IDE";
    if (i.type === "connected") return [{
      label: "IDE",
      value: `Connected to ${c} extension`
    }];
    else return [{
      label: "IDE",
      value: `${Kn("error",u)(te.cross)} Not connected to ${c}`
    }]
  }
  return []
}

function U3o(o = [], t) {
  let u = o.filter((l) => l.name !== "ide");
  if (!u.length) return [];
  let i = {
    connected: 0,
    cached: 0,
    pending: 0,
    needsAuth: 0,
    disabled: 0,
    failed: 0
  };
  for (let l of u) switch (l.type) {
    case "connected":
      i.connected++;
      break;
    case "cached":
      i.cached++;
      break;
    case "pending":
      i.pending++;
      break;
    case "needs-auth":
      i.needsAuth++;
      break;
    case "disabled":
      i.disabled++;
      break;
    case "failed":
      i.failed++;
      break;
    default:
  }
  let c = [];
  if (i.connected) c.push(Kn("success", t)(`${i.connected} connected`));
  if (i.cached) c.push(Kn("inactive", t)(`${i.cached} cached`));
  if (i.needsAuth) c.push(Kn("warning", t)(`${i.needsAuth} need auth`));
  if (i.pending) c.push(Kn("inactive", t)(`${i.pending} pending`));
  if (i.disabled) c.push(Kn("inactive", t)(`${i.disabled} disabled`));
  if (i.failed) c.push(Kn("error", t)(`${i.failed} failed`));
  return [{
    label: "MCP servers",
    value: `${c.join(", ")} ${Kn("inactive",t)("\xB7 /mcp")}`
  }]
}
async function B3o(o, t, u) {
  if (OC()) return [];
  let i = await wS(o, !1, t, u),
    c = S9t(i),
    l = [],
    d = w9t(i);
  if (d) l.push(`Instruction files will impact performance: ${d.summary.fileCount} files, ${ei(d.summary.totalChars)} chars in total > ${ei(d.summary.totalLimitChars)}`);
  let g = dat();
  c.forEach((p) => {
    let m = ts(p.path);
    l.push(`Large ${m} will impact performance (${ei(p.content.length)} chars > ${ei(g)})`)
  });
  let f = sxt(aat(o));
  for (let {
      path: p,
      why: m
    }
    of f.shown) {
    let v = y9t(m, ts(p));
    l.push(r(s, {
      flexDirection: "column",
      flexShrink: 1,
      children: [e(n, {
        children: v.lead
      }), r(s, {
        flexDirection: "row",
        children: [e(s, {
          flexShrink: 0,
          marginRight: 1,
          children: e(n, {
            children: v.mark
          })
        }), e(n, {
          bold: !0,
          wrap: "truncate-start",
          children: v.path
        })]
      })]
    }, p))
  }
  if (f.more > 0) l.push(_9t(f));
  return l
}

function y(o = "remote") {
  let t = Aun();
  if (!t) return null;
  return `Enterprise managed settings (${t.map((i)=>i==="remote"?o:b(i)).join(" + ")}, merged)`
}

function j3o() {
  let o = Wo(),
    t = xHo(),
    c = [{
      label: "Setting sources",
      value: o.filter((p) => {
        if (p === "policySettings" && t.composes !== "none") return !0;
        let m = me(p);
        return m !== null && Object.keys(m).length > 0
      }).map((p) => {
        if (p === "policySettings") {
          if (t.composes !== "none") {
            let v = t.composes === "remoteSlot",
              S = XVs() ? `${v?"remote ":""}default settings payload` : v ? "remote helper" : "helper",
              C = t.mergedOver ? `${S} merged over ${b(t.mergedOver)}` : S;
            return (v ? y(C) : null) ?? `Enterprise managed settings (${C})`
          }
          let m = eT();
          if (m === null) return null;
          return y() ?? A(m)
        }
        return QHo(p)
      }).filter((p) => p !== null)
    }],
    l = HHo();
  if (l.length > 0) c.push({
    label: "Skipped sources",
    value: l.map(A)
  });
  if (Ug()) {
    let p = [...H0s()];
    c.push({
      label: "Permission rules",
      value: ["Managed settings only (allowManagedPermissionRulesOnly)", ...p.length > 0 ? [`allowed-tools ignored this session: ${p.join(", ")}`] : []]
    })
  }
  let d = SYe();
  if (d && cps(d)) c.push({
    label: "Managed settings (remote)",
    value: N0n(d)
  });
  let g = Wqn();
  if (UHs(g)) c.push({
    label: "Organization policy",
    value: zqn(g)
  });
  let f = sis();
  if (f !== void 0) c.push({
    label: "Client data",
    value: f
  });
  return c
}

function W3o(o) {
  return [{
    label: "Auto mode server",
    value: kLn(o) ? "Enabled" : "Disabled"
  }]
}

function z3o() {
  return []
}

function b(o) {
  switch (o) {
    case "helper":
    case "remote":
    case "plist":
      return o;
    case "hklm":
      return "HKLM";
    case "file": {
      let {
        hasBase: t,
        hasDropIns: u
      } = FHo();
      if (t && u) return "file + drop-ins";
      return u ? "drop-ins" : "file"
    }
    case "parent":
      return "parent process";
    case "hkcu":
      return "HKCU"
  }
}

function A(o) {
  return `Enterprise managed settings (${b(o)})`
}
async function G3o() {
  return (await X4e()).filter((t) => t.type !== "error").map((t) => t.message)
}
async function V3o(o) {
  let t = Xj(),
    u = Of();
  if (!t && !u) return [];
  let i = [];
  if (u) return i.push(`${u} \u2014 nothing will run unwrapped: new background sessions are refused unless a background service that validated an earlier value is still serving them (\`claude daemon status\` shows it)`), i;
  let c = Bc();
  if (i.push(`Self-exec: \`${[c.cmd,...c.prefixArgs].join(" ")}\` (CLAUDE_CODE_PROCESS_WRAPPER)`), !await BN()) i.push(`The launcher \`${c.cmd}\` cannot run right now (deleted or not executable) \u2014 new background sessions are refused until it is restored; a background service that validated it earlier keeps serving its existing sessions (\`claude daemon status\`)`);
  let l = await kv(1, o).catch(() => null);
  if (!l) return i;
  let [{
    controlRequest: d
  }, {
    BG_PROTO: g
  }] = await Promise.all([import("B:/~BUN/root/chunk-h9zr837k.js"), import("B:/~BUN/root/chunk-gmw7qj72.js")]), f = await d({
    proto: g,
    op: "nudge"
  }).catch(() => null), p = f?.ok && f.op === "nudge" ? f.processWrapper ?? "" : l.processWrapper ?? "", m = ne(zr(pn(p)), 200);
  if (l.origin === "service") i.push(`The installed background service predates launcher support and runs outside \`${c.cmd}\`; its sessions are covered, the service process itself is not \u2014 a launcher-aware \`claude daemon install\` will close this`);
  if (p !== t) i.push(`The running background service launches sessions via \`${m||"(no launcher)"}\`, but this session resolves \`${t}\` \u2014 restart it (and your running claude sessions) to converge`);
  return i
}
async function q3o(o) {
  let t = await Tit({
      storageV5: o
    }),
    u = [],
    {
      statusNotices: i,
      invalidEntries: c
    } = Xnt(Cbe().errors);
  if (c.length > 0) {
    let d = L(c.map((f) => f.file && Hd(f.file))).join(", ");
    u.push(`Found invalid entries in: ${d}.`);
    let g = await gOn(o);
    if (g === "settings_unknowable" || g === "settings_invalid_key_set") u.push("Transcript retention cleanup is paused until the settings errors above are fixed (cleanupPeriodDays cannot be determined reliably).")
  }
  for (let l of i) u.push(l.message);
  for (let [l, d] of Iun()) u.push(`${l}
${d}`);
  if (t.warnings.forEach((l) => {
      u.push(l.issue)
    }), t.hasUpdatePermissions === !1) u.push("No write permissions for auto-updates");
  return u
}

function lVe(o) {
  if (!(W() && o !== void 0)) return;
  return (async () => ({
    refreshKnownDead: Sl() && await r2(o)
  }))().catch(() => ({
    refreshKnownDead: !1
  }))
}

function lSn(o) {
  let t = nMe();
  if (!t) return [];
  let u = [];
  if (o !== void 0 && W() ? o.refreshKnownDead : Sl() && lJe()) {
    u.push({
      label: "Login",
      value: "Expired \u2014 log in again"
    });
    let p = wn();
    if (p?.organizationName && !a.IS_DEMO) u.push({
      label: "Organization",
      value: p.organizationName
    });
    if (p?.emailAddress && !a.IS_DEMO) u.push({
      label: "Email",
      value: p.emailAddress
    });
    return u
  }
  if (t.subscription) u.push({
    label: "Login method",
    value: `${t.subscription} account`
  });
  let i = " \xB7 not in use",
    c = t.apiKeySource ?? "none",
    l = iWe(t.tokenSource ?? "none", c);
  if (t.tokenSource) u.push({
    label: "Auth token",
    value: l.tokenSource === t.tokenSource ? t.tokenSource : `${t.tokenSource}${i}`
  });
  if (t.apiKeySource) u.push({
    label: "API key",
    value: l.apiKey ? t.apiKeySource : `${t.apiKeySource}${i}`
  });
  let d = cht();
  if (d && fge()) u.push({
    label: "apiKeyHelper",
    value: a.IS_DEMO ? "Failing" : `Failing \u2014 last run ${q4(d,yJn)}`
  });
  let g = pc(),
    f = g && iWe("profile", c).tokenSource === "profile";
  if (g) u.push({
    label: "Profile",
    value: `${_1t()}${f?"":i}`
  });
  if (f) {
    let p = E5();
    if (!a.IS_DEMO) {
      if (p?.organizationName || p?.organizationUuid) u.push({
        label: "Organization",
        value: [p.organizationName, p.organizationUuid].filter(Boolean).join(" \xB7 ")
      });
      if (p?.accountEmail) u.push({
        label: "Email",
        value: p.accountEmail
      })
    }
  }
  if (t.organization && !a.IS_DEMO) u.push({
    label: "Organization",
    value: t.organization
  });
  if (t.email && !a.IS_DEMO) u.push({
    label: "Email",
    value: t.email
  });
  return u
}

function h(o) {
  let t;
  try {
    t = new URL(o)
  } catch {
    t = void 0
  }
  if (t?.host) {
    if (!t.username && !t.password) return o;
    let c = new URL(t.href);
    return c.username = "***", c.password = "", c.href
  }
  let u = o.lastIndexOf("@");
  if (u < 0) return o;
  return `${/^[a-z][a-z0-9+.-]*:\/\//i.exec(o)?.[0]??""}***${o.slice(u)}`
}

function dSn() {
  let o = xe(),
    t = [],
    u = FIe();
  if (u !== void 0) t.push({
    label: "Allowed providers",
    value: u.length === 0 ? "none (managed allowedProviders is empty)" : `${u.map(jun).join(", ")} (managed allowedProviders)`
  });
  if (o !== "firstParty") {
    let l = i0e(),
      d = l ? `${ok[o]} + ${ok[l]}` : ok[o];
    t.push({
      label: "API provider",
      value: d
    })
  }
  if (o === "firstParty") {
    let l = a.ANTHROPIC_BASE_URL;
    if (l) t.push({
      label: "Anthropic base URL",
      value: h(l)
    })
  } else if (o === "bedrock") {
    let l = a.ANTHROPIC_BEDROCK_BASE_URL;
    if (l) t.push({
      label: "Bedrock base URL",
      value: h(l)
    });
    t.push({
      label: "AWS region",
      value: E()
    });
    let d = a.ANTHROPIC_BEDROCK_SERVICE_TIER;
    if (d) t.push({
      label: "Bedrock service tier",
      value: d
    });
    if (a.CLAUDE_CODE_SKIP_BEDROCK_AUTH) t.push({
      value: "AWS auth skipped"
    })
  } else if (o === "vertex") {
    let l = a.ANTHROPIC_VERTEX_BASE_URL;
    if (l) t.push({
      label: "Vertex base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_VERTEX_PROJECT_ID;
    if (d) t.push({
      label: "GCP project",
      value: d
    });
    if (t.push({
        label: "Default region",
        value: nWt()
      }), a.CLAUDE_CODE_SKIP_VERTEX_AUTH) t.push({
      value: "GCP auth skipped"
    })
  } else if (o === "foundry") {
    let l = a.ANTHROPIC_FOUNDRY_BASE_URL;
    if (l) t.push({
      label: "Microsoft Foundry base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_FOUNDRY_RESOURCE;
    if (d) t.push({
      label: "Microsoft Foundry resource",
      value: d
    });
    if (a.CLAUDE_CODE_SKIP_FOUNDRY_AUTH) t.push({
      value: "Microsoft Foundry auth skipped"
    })
  } else if (o === "anthropicAws") {
    let l = a.ANTHROPIC_AWS_BASE_URL;
    if (l) t.push({
      label: "Claude Platform on AWS base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_AWS_WORKSPACE_ID;
    if (d) t.push({
      label: "Workspace ID",
      value: d
    });
    if (t.push({
        label: "AWS region",
        value: Vht()
      }), a.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH) t.push({
      value: "Claude Platform on AWS auth skipped"
    })
  } else if (o === "anthropicGoogleCloud") {
    let l = a.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
    if (l) t.push({
      label: "Claude Platform on Google Cloud base URL",
      value: h(l)
    });
    let d = a.ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID;
    if (d) t.push({
      label: "Workspace ID",
      value: d
    });
    let g = a.ANTHROPIC_GOOGLE_CLOUD_PROJECT || a.GOOGLE_CLOUD_PROJECT;
    if (g) t.push({
      label: "GCP project",
      value: g
    });
    if (t.push({
        label: "GCP location",
        value: a.ANTHROPIC_GOOGLE_CLOUD_LOCATION || "global"
      }), a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH) t.push({
      value: "Claude Platform on Google Cloud auth skipped"
    })
  } else if (o === "gateway") {
    let l = Br();
    if (l) {
      if (t.push({
          label: "Gateway URL",
          value: h(l.url)
        }), l.email && !a.IS_DEMO) t.push({
        label: "Gateway account",
        value: l.email
      })
    }
  }
  if (o === "mantle" || i0e() === "mantle") {
    let l = a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    if (l) t.push({
      label: "Amazon Bedrock (Mantle) base URL",
      value: h(l)
    });
    if (o === "mantle") t.push({
      label: "AWS region",
      value: E()
    });
    if (a.CLAUDE_CODE_SKIP_MANTLE_AUTH) t.push({
      value: "Amazon Bedrock (Mantle) auth skipped"
    })
  }
  let i = jze();
  if (i) t.push({
    label: "Proxy",
    value: H2(i) ? h(i) : `${h(i).replace(/\p{Cc}/gu,"")} (invalid \u2014 ignored; fix or unset the proxy env var)`
  });
  let c = sE();
  if (a.NODE_EXTRA_CA_CERTS) t.push({
    label: "Additional CA cert(s)",
    value: a.NODE_EXTRA_CA_CERTS
  });
  if (c) {
    if (c.cert && a.CLAUDE_CODE_CLIENT_CERT) t.push({
      label: "mTLS client cert",
      value: a.CLAUDE_CODE_CLIENT_CERT
    });
    if (c.key && a.CLAUDE_CODE_CLIENT_KEY) t.push({
      label: "mTLS client key",
      value: a.CLAUDE_CODE_CLIENT_KEY
    })
  }
  return t
}

function E() {
  let {
    region: o,
    source: t
  } = dLo();
  switch (t) {
    case "env":
      return o;
    case "shared-config":
      return `${o} (from AWS config)`;
    case "env-invalid":
    case "default":
      return WM(), t === "env-invalid" ? `${o} (default \u2014 region env var invalid, ignored; fix or unset AWS_REGION / AWS_DEFAULT_REGION)` : `${o} (default \u2014 set AWS_REGION or add a region to your AWS config)`
  }
}

function K3o(o) {
  let t = PD(o),
    u = G3e();
  if (u !== void 0) return `${t} (${PUn(PD(u.previousModel))})`;
  return t
}
export {
  aSn,
  aVe,
  N3o,
  F3o,
  H3o,
  $3o,
  U3o,
  B3o,
  j3o,
  W3o,
  z3o,
  G3o,
  V3o,
  q3o,
  lVe,
  lSn,
  dSn,
  K3o
};
