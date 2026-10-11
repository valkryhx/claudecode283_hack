// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  Ht
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  Q6e,
  YCe,
  Ldt,
  e$,
  dce,
  eHt,
  nHt,
  pRe
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  xa
} from "B:/~BUN/root/chunk-qqgpf856.js";
import {
  wr,
  ln
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  Io
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  $0,
  Nh,
  U0,
  dC,
  xpn
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  jAe,
  WAe,
  Zq
} from "B:/~BUN/root/chunk-2ppgegpr.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  xPe,
  gd,
  Jl,
  tO,
  oJe
} from "B:/~BUN/root/chunk-vw863d4k.js";
import {
  Qn
} from "B:/~BUN/root/chunk-jcnv9sfw.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  CH
} from "B:/~BUN/root/chunk-p273pdav.js";
import {
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  et
} from "B:/~BUN/root/chunk-zg8y1401.js";
import {
  qn
} from "B:/~BUN/root/chunk-pet3tnhj.js";
import {
  yT
} from "B:/~BUN/root/chunk-acsg9bv8.js";
import {
  ko
} from "B:/~BUN/root/chunk-v1xd9kf3.js";
import {
  ur
} from "B:/~BUN/root/chunk-ehewxxqw.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Sr,
  mr,
  R,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  Jt
} from "B:/~BUN/root/chunk-r833zsf7.js";
import {
  mde
} from "B:/~BUN/root/chunk-kbd7ddta.js";
import {
  be,
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var Be = [{
  type: "text",
  key: "accessKeyId",
  label: "Access key ID",
  placeholder: "AKIA\u2026",
  required: !0
}, {
  type: "text",
  key: "secretAccessKey",
  label: "Secret access key",
  mask: "*",
  required: !0
}, {
  type: "text",
  key: "sessionToken",
  label: "Session token",
  mask: "*",
  hint: () => "Only needed for temporary credentials from STS. Leave empty for long-lived keys."
}];

function te() {
  let u = w(16),
    {
      goBack: o,
      goNext: l,
      updateWizardData: c,
      wizardData: d,
      title: t
    } = gd();
  const m = d.accessKeyId ?? "",
    p = d.secretAccessKey ?? "",
    y = d.sessionToken ?? "";
  let O;
  if (u[0] !== m || u[1] !== p || u[2] !== y) O = {
    accessKeyId: m,
    secretAccessKey: p,
    sessionToken: y
  }, u[0] = m, u[1] = p, u[2] = y, u[3] = O;
  else O = u[3];
  let [h, A] = g(O), E;
  if (u[4] !== l || u[5] !== c || u[6] !== h.accessKeyId || u[7] !== h.secretAccessKey || u[8] !== h.sessionToken) E = () => {
    c({
      accessKeyId: h.accessKeyId.trim(),
      secretAccessKey: h.secretAccessKey.trim(),
      sessionToken: h.sessionToken.trim() || void 0
    }), l()
  }, u[4] = l, u[5] = c, u[6] = h.accessKeyId, u[7] = h.secretAccessKey, u[8] = h.sessionToken, u[9] = E;
  else E = u[9];
  let k = E;
  const f = t ?? "Set up AWS Bedrock";
  let C;
  if (u[10] === S) C = (b, v) => A((_) => ({
    ..._,
    [b]: v
  })), u[10] = C;
  else C = u[10];
  let D;
  if (u[11] !== o || u[12] !== k || u[13] !== f || u[14] !== h) D = e(CH, {
    title: f,
    subtitle: "AWS access keys",
    fields: Be,
    values: h,
    onChange: C,
    onSubmit: k,
    onCancel: o,
    submitLabel: "Continue"
  }), u[11] = o, u[12] = k, u[13] = f, u[14] = h, u[15] = D;
  else D = u[15];
  return D
}
var B = {
  AUTH_METHOD: 0,
  PROFILE: 1,
  BEARER: 2,
  ACCESS_KEY_ID: 3,
  REGION: 4,
  VERIFY: 5,
  PIN_MODELS: 6,
  CONFIRM: 7
};

function ie() {
  let d = w(9),
    {
      goBack: o,
      goToStep: l,
      updateWizardData: c
    } = gd(),
    t;
  if (d[0] === S) t = [{
    label: "AWS profile (SSO or named profile)",
    value: "profile"
  }, {
    label: "Bedrock API key (bearer token)",
    value: "bearer"
  }, {
    label: "Access key + secret",
    value: "accessKey"
  }, {
    label: "Use credentials already in my environment",
    value: "environment"
  }], d[0] = t;
  else t = d[0];
  let m = t,
    p;
  if (d[1] === S) p = {
    profile: B.PROFILE,
    bearer: B.BEARER,
    accessKey: B.ACCESS_KEY_ID,
    environment: B.REGION
  }, d[1] = p;
  else p = d[1];
  let y = p,
    u;
  if (d[2] !== l || d[3] !== c) u = (O) => {
    let h = O;
    c({
      authMethod: h
    }), l(y[h])
  }, d[2] = l, d[3] = c, d[4] = u;
  else u = d[4];
  let A = u,
    E;
  if (d[5] === S) E = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI."
  }), d[5] = E;
  else E = d[5];
  let k;
  if (d[6] !== o || d[7] !== A) k = e(Jl, {
    subtitle: "How do you authenticate to AWS?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [E, e(Fe, {
        options: m,
        onChange: A,
        onCancel: o
      })]
    })
  }), d[6] = o, d[7] = A, d[8] = k;
  else k = d[8];
  return k
}
N();

function se() {
  let h = w(17),
    {
      goBack: o,
      goToStep: l,
      updateWizardData: c,
      wizardData: d
    } = gd(),
    [t, m] = g(d.bearerToken ?? ""),
    [p, y] = g(t.length),
    [u, O] = g(null),
    A;
  if (h[0] === S) A = {
    context: "Settings"
  }, h[0] = A;
  else A = h[0];
  ze("confirm:no", o, A);
  let E;
  if (h[1] !== l || h[2] !== c || h[3] !== t) E = () => {
    let k = t.trim();
    if (!k) {
      O("API key is required");
      return
    }
    O(null), c({
      bearerToken: k
    }), l(B.REGION)
  }, h[1] = l, h[2] = c, h[3] = t, h[4] = E;
  else E = h[4];
  let f = E,
    C;
  if (h[5] === S) C = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), h[5] = C;
  else C = h[5];
  let b, v;
  if (h[6] === S) b = e(n, {
    children: "Paste your Bedrock API key."
  }), v = e(n, {
    dimColor: !0,
    children: "Generate one in the AWS console under Bedrock \u2192 API keys."
  }), h[6] = b, h[7] = v;
  else b = h[6], v = h[7];
  let _;
  if (h[8] !== p || h[9] !== f || h[10] !== t) _ = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: t,
      onChange: m,
      onSubmit: f,
      placeholder: "bedrock-api-key-\u2026",
      mask: "*",
      columns: 60,
      cursorOffset: p,
      onChangeCursorOffset: y,
      focus: !0,
      showCursor: !0
    })
  }), h[8] = p, h[9] = f, h[10] = t, h[11] = _;
  else _ = h[11];
  let D;
  if (h[12] !== u) D = u && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: u
    })
  }), h[12] = u, h[13] = D;
  else D = h[13];
  let P;
  if (h[14] !== _ || h[15] !== D) P = e(Jl, {
    subtitle: "Bedrock API key",
    footerText: C,
    children: r(s, {
      flexDirection: "column",
      children: [b, v, _, D]
    })
  }), h[14] = _, h[15] = D, h[16] = P;
  else P = h[16];
  return P
}
N();

function eo(V) {
  return V[1] !== void 0
}

function ro(o) {
  let [q, H] = o;
  return r(n, {
    children: ["  ", e(n, {
      color: "suggestion",
      children: q
    }), " =", " ", xe.has(q) ? e(n, {
      dimColor: !0,
      children: "(hidden)"
    }) : H]
  }, q)
}

function Ie(o) {
  let l = {
    CLAUDE_CODE_USE_BEDROCK: "1",
    CLAUDE_CODE_USE_VERTEX: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    AWS_REGION: o.region,
    AWS_PROFILE: void 0,
    AWS_BEARER_TOKEN_BEDROCK: void 0,
    AWS_ACCESS_KEY_ID: void 0,
    AWS_SECRET_ACCESS_KEY: void 0,
    AWS_SESSION_TOKEN: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0
  };
  switch (o.authMethod) {
    case "profile":
      l.AWS_PROFILE = o.awsProfile;
      break;
    case "bearer":
      l.AWS_BEARER_TOKEN_BEDROCK = o.bearerToken;
      break;
    case "accessKey":
      if (l.AWS_ACCESS_KEY_ID = o.accessKeyId, l.AWS_SECRET_ACCESS_KEY = o.secretAccessKey, o.sessionToken) l.AWS_SESSION_TOKEN = o.sessionToken;
      break;
    case "environment":
    case void 0:
      break
  }
  if (o.pinSonnet) l.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) l.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) l.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) l.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return l
}
var xe = new Set(["AWS_BEARER_TOKEN_BEDROCK", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN"]);

function le(o) {
  let y = w(31),
    {
      onComplete: l
    } = o,
    {
      storageV5: c
    } = ke(),
    {
      goBack: d,
      wizardData: t
    } = gd(),
    [m, p] = g(null),
    u;
  if (y[0] === S) u = xa(wr("userSettings") ?? "~/.claude/settings.json"), y[0] = u;
  else u = y[0];
  let O = u,
    h;
  if (y[1] !== t) h = Ie(t), y[1] = t, y[2] = h;
  else h = y[2];
  let A = h,
    E;
  if (y[3] !== A) E = Object.entries(A).filter(eo), y[3] = A, y[4] = E;
  else E = y[4];
  let k = E,
    f = T(!1),
    C;
  if (y[5] !== A || y[6] !== l || y[7] !== c || y[8] !== t.authMethod || y[9] !== t.awsProfile || y[10] !== t.pinFable || y[11] !== t.pinHaiku || y[12] !== t.pinOpus || y[13] !== t.pinSonnet || y[14] !== t.verifiedIdentity) C = async () => {
    if (f.current) {
      return
    }
    f.current = !0;
    let {
      error: b
    } = await ln("userSettings", {
      env: A
    }, void 0, c);
    if (b) {
      f.current = !1, p(b.message);
      return
    }
    i("tengu_bedrock_setup_complete", {
      auth_method: ue(t.authMethod),
      pinned_models: Boolean(t.pinSonnet || t.pinOpus || t.pinFable || t.pinHaiku),
      verified: Boolean(t.verifiedIdentity)
    }), l(`Bedrock configuration saved to ${O}.${t.authMethod==="profile"?` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${t.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.`:""}`)
  }, y[5] = A, y[6] = l, y[7] = c, y[8] = t.authMethod, y[9] = t.awsProfile, y[10] = t.pinFable, y[11] = t.pinHaiku, y[12] = t.pinOpus, y[13] = t.pinSonnet, y[14] = t.verifiedIdentity, y[15] = C;
  else C = y[15];
  let v = C,
    _;
  if (y[16] === S) _ = r(n, {
    children: ["These will be written to ", O, " under env:"]
  }), y[16] = _;
  else _ = y[16];
  let D;
  if (y[17] !== k) D = e(s, {
    flexDirection: "column",
    children: k.map(ro)
  }), y[17] = k, y[18] = D;
  else D = y[18];
  let P;
  if (y[19] !== t.verifiedIdentity) P = t.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [e(et, {
      status: "success",
      withSpace: !0
    }), "Verified as ", t.verifiedIdentity]
  }), y[19] = t.verifiedIdentity, y[20] = P;
  else P = y[20];
  let j;
  if (y[21] !== m) j = e(ko, {
    error: m
  }), y[21] = m, y[22] = j;
  else j = y[22];
  let X;
  if (y[23] !== d || y[24] !== v) X = e(qn, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: v,
    onCancel: d
  }), y[23] = d, y[24] = v, y[25] = X;
  else X = y[25];
  let Te;
  if (y[26] !== D || y[27] !== P || y[28] !== j || y[29] !== X) Te = e(Jl, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [_, D, P, j, X]
    })
  }), y[26] = D, y[27] = P, y[28] = j, y[29] = X, y[30] = Te;
  else Te = y[30];
  return Te
}
var Le = be(mde(), 1);
var Q = "Bedrock setup verification timed out";

function de(o) {
  let l = Ldt(o),
    c = (d) => {
      let t = Io[d].bedrock;
      if (t === null) throw Error("A DEFAULT_3P_*_KEY points at a model config with bedrock: null \u2014 Bedrock setup has no fallback id for that tier");
      return {
        needle: Io[d].firstParty,
        fallback: YCe(t, l)
      }
    };
  return {
    sonnet: c(e$),
    opus: c(eHt),
    haiku: c(dce),
    fable: c(nHt)
  }
}
async function fe(o) {
  if (o.authMethod === "bearer") return io(o);
  let l = xpn();
  try {
    let c = await Ue(o),
      t = {
        ...await WAe({
          url: `https://bedrock.${o.region}.amazonaws.com`,
          region: o.region,
          requestTimeoutMs: pRe
        }),
        region: o.region,
        ...c && {
          credentials: c
        }
      },
      {
        STSClient: m,
        GetCallerIdentityCommand: p
      } = await import("B:/~BUN/root/chunk-k10et08p.js"),
      y = await Ht(new m(t).send(new p({})), l, Q),
      u = y.Arn ?? y.UserId ?? "(unknown)",
      {
        BedrockClient: O,
        ListInferenceProfilesCommand: h
      } = await import("B:/~BUN/root/chunk-4x6asc22.js"),
      A = new O(t),
      E = [],
      k;
    do {
      let f = await Ht(A.send(new h({
        ...k && {
          nextToken: k
        },
        typeEquals: "SYSTEM_DEFINED"
      })), l, Q);
      for (let C of f.inferenceProfileSummaries ?? [])
        if (C.inferenceProfileId?.includes("anthropic")) E.push(C.inferenceProfileId);
      k = f.nextToken
    } while (k);
    return {
      status: "ok",
      identity: u,
      profiles: E
    }
  } catch (c) {
    return {
      status: "error",
      ...no(c, o, l)
    }
  }
}
async function me(o, l) {
  let c;
  try {
    c = await oo(o)
  } catch (d) {
    return {
      ok: !1,
      reason: d instanceof Error && (d.message === Q || $e(d)) ? "network" : "auth"
    }
  }
  try {
    return await c.messages.create({
      model: Jt(l),
      max_tokens: 1,
      messages: [{
        role: "user",
        content: "."
      }]
    }), {
      ok: !0
    }
  } catch (d) {
    let t = d?.status;
    if (t === 401) return {
      ok: !1,
      reason: "auth"
    };
    if (t === 403) return {
      ok: !1,
      reason: "permission"
    };
    if (t === 400 || t === 404) return {
      ok: !1,
      reason: "model"
    };
    if (t === 429) return {
      ok: !0
    };
    if (t === void 0) return {
      ok: !1,
      reason: "network"
    };
    return {
      ok: !1,
      reason: "other"
    }
  }
}
async function oo(o) {
  let [{
    AnthropicBedrock: l
  }, {
    getProxyFetchOptions: c
  }] = await Promise.all([import("B:/~BUN/root/chunk-ea3egzg6.js"), import("B:/~BUN/root/chunk-nxjptnfx.js")]), d = {
    awsRegion: o.region,
    maxRetries: 0,
    fetchOptions: c({
      url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o.region}.amazonaws.com`
    })
  }, t = await to(o), m = {
    authToken: null,
    defaultHeaders: {
      ...Nh(),
      ...U0(),
      Authorization: null,
      ...!$0() && {
        "X-Api-Key": null
      }
    },
    ...dC
  };
  switch (t.kind) {
    case "bearer":
      return new l({
        ...d,
        apiKey: t.token,
        defaultHeaders: {
          ...Nh(),
          ...U0(),
          Authorization: `Bearer ${t.token}`,
          ...!$0() && {
            "X-Api-Key": null
          }
        }
      });
    case "sigv4":
      return new l({
        ...d,
        ...m,
        awsAccessKey: t.accessKeyId,
        awsSecretKey: t.secretAccessKey,
        awsSessionToken: t.sessionToken
      });
    case "default": {
      let p = a.AWS_BEARER_TOKEN_BEDROCK;
      if (p) return new l({
        ...d,
        apiKey: p,
        defaultHeaders: {
          ...Nh(),
          ...U0(),
          Authorization: `Bearer ${p}`,
          ...!$0() && {
            "X-Api-Key": null
          }
        }
      });
      return new l({
        ...d,
        ...m,
        providerChainResolver: () => He(o, void 0)
      })
    }
  }
}
async function to(o) {
  if (o.authMethod === "bearer") return {
    kind: "bearer",
    token: o.bearerToken
  };
  let l = await Ue(o);
  if (!l) return {
    kind: "default"
  };
  let c = await l();
  return {
    kind: "sigv4",
    accessKeyId: c.accessKeyId,
    secretAccessKey: c.secretAccessKey,
    sessionToken: c.sessionToken
  }
}
async function io(o) {
  let l = de(o.region).haiku.fallback,
    c = await me(o, l);
  if (c.ok) return {
    status: "ok",
    identity: "Bedrock API key",
    profiles: [],
    note: `Test request to ${l} succeeded.`
  };
  switch (c.reason) {
    case "auth":
      return {
        status: "error", error: "Invalid Bedrock API key. Check the key and try again."
      };
    case "permission":
      return {
        status: "error", error: "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel."
      };
    case "model":
      return {
        status: "ok", identity: "Bedrock API key", profiles: [], note: `The key works, but ${l} is not enabled in your account. Pin a model you have access to on the next step.`
      };
    case "network":
      return {
        status: "error", error: `Could not reach Bedrock in region "${o.region}". Check the region name and your network.`
      };
    case "other":
      return {
        status: "error", error: "The test request failed. Check the key and region."
      }
  }
}
async function Ue(o) {
  switch (o.authMethod) {
    case "profile":
      return He(o, o.awsProfile);
    case "accessKey":
      return async () => ({
        accessKeyId: o.accessKeyId,
        secretAccessKey: o.secretAccessKey,
        ...o.sessionToken && {
          sessionToken: o.sessionToken
        }
      });
    case "environment":
      return;
    default:
      return
  }
}
async function He(o, l) {
  let [{
    fromNodeProviderChain: c
  }, d] = await Promise.all([import("B:/~BUN/root/chunk-dyaykyf3.js"), Zq({
    url: jAe(String(o.region)),
    requestTimeoutMs: pRe
  })]), t = d ?? new Le.FetchHttpHandler({
    requestTimeout: pRe
  }), m = c({
    profile: l,
    ignoreCache: !0,
    parentClientConfig: {
      region: o.region,
      requestHandler: t
    },
    clientConfig: {
      requestHandler: t
    }
  });
  return (p) => Ht(m(p), xpn(), Q)
}

function $e(o) {
  return o?.name === "TimeoutError" || o?.name === "CredentialsProviderError" && (o.message ?? "").startsWith("TimeoutError:")
}

function no(o, l, c) {
  let d = o,
    t = d?.name ?? "Error",
    m = d?.message ?? String(o);
  if (m === Q) return {
    error: `Timed out after ${Math.ceil(c/1000)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.`
  };
  if ($e(d)) return {
    error: "A request to AWS timed out. Check your network and proxy settings, then try again."
  };
  let p = l.authMethod === "profile" ? `aws sso login --profile ${l.awsProfile}` : void 0;
  switch (t) {
    case "CredentialsProviderError":
      return l.authMethod === "profile" ? {
        error: `Could not load credentials for profile "${l.awsProfile}". If this is an SSO profile, run:`,
        command: p
      } : {
        error: `No AWS credentials found. ${m}`
      };
    case "ExpiredTokenException":
    case "TokenRefreshRequired":
      return l.authMethod === "profile" ? {
        error: "SSO session expired. Run:",
        command: p
      } : {
        error: `Credentials expired. ${m}`
      };
    case "ForbiddenException":
      return l.authMethod === "profile" ? {
        error: `SSO portal denied access to the role for profile "${l.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`
      } : {
        error: `Forbidden. ${m}`
      };
    case "AccessDeniedException":
      return {
        error: `Access denied. Your IAM role needs bedrock:ListInferenceProfiles permission. ${m}`
      };
    case "UnrecognizedClientException":
    case "InvalidSignatureException":
      return {
        error: `Invalid credentials. ${m}`
      };
    case "UnknownEndpoint":
    case "ENOTFOUND":
      return {
        error: `Cannot reach AWS in region "${l.region}". Check the region name and your network.`
      };
    default:
      return {
        error: `${t}: ${m}`
      }
  }
}

function Ve(o, l) {
  return (o.discoveredProfiles ?? []).filter((c) => c.toLowerCase().includes(l))
}
var qe = {
  reasonLabel: {
    auth: "auth failed",
    permission: "no InvokeModel permission",
    model: "not enabled in this account",
    network: "unreachable",
    other: "request failed"
  },
  intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it \u2014 Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have.",
  resolveTierDefaults: (o) => {
    let l = de(o.region),
      c = Ldt(o.region);
    return Object.fromEntries(tO.map((d) => [d, {
      auto: Q6e(o.discoveredProfiles ?? [], l[d].needle, c) ?? void 0,
      fallback: l[d].fallback
    }]))
  },
  listTierCandidates: (o, l) => Ve(l, o).sort().reverse(),
  pickerSubtitle: (o, l) => {
    let c = Ve(l, o).length;
    return c > 0 ? `${c} ${yT[o]} ${I(c,"profile")} in your account \xB7 each tested with a one-token request.` : `No ${yT[o]} profiles found in your account.`
  },
  probe: (o, l) => me(o, l)
};

function pe() {
  let l = w(2),
    {
      updateWizardData: o
    } = gd(),
    c;
  if (l[0] !== o) c = e(oJe, {
    provider: qe,
    onPins: o
  }), l[0] = o, l[1] = c;
  else c = l[1];
  return c
}
N();
import {
  readFile as ao
} from "fs/promises";
import {
  homedir as co
} from "os";
import {
  join as Ye
} from "path";
async function ge() {
  let o = new Set,
    l = co();
  for (let {
      path: c,
      re: d
    }
    of [{
      path: Ye(l, ".aws", "config"),
      re: /^\[(?:profile\s+)?([^\]]+)\]/gm
    }, {
      path: Ye(l, ".aws", "credentials"),
      re: /^\[([^\]]+)\]/gm
    }]) try {
    for (let t of (await ao(c, "utf8")).matchAll(d)) {
      let m = t[1]?.trim();
      if (m && !m.startsWith("sso-session ")) o.add(m)
    }
  } catch {}
  return [...o].sort()
}

function wo() {
  return []
}

function Do() {
  return ge().catch(wo)
}

function _o(Fo) {
  return Fo.toLowerCase().includes("bedrock")
}

function To(yr) {
  return {
    label: yr,
    value: yr
  }
}
var ee = "__manual__",
  Ge = 12;

function Ae() {
  let l = w(3),
    [o] = g(Do),
    c;
  if (l[0] === S) c = e(Jl, {
    subtitle: "AWS profile",
    children: e(ur, {
      message: "Reading ~/.aws/config\u2026"
    })
  }), l[0] = c;
  else c = l[0];
  let d;
  if (l[1] !== o) d = e(Sr, {
    fallback: c,
    children: e(Ee, {
      profilesPromise: o
    })
  }), l[1] = o, l[2] = d;
  else d = l[2];
  return d
}

function Ee(o) {
  let u = w(52),
    {
      profilesPromise: l
    } = o,
    c = mr(l),
    {
      goBack: d,
      goToStep: t,
      updateWizardData: m,
      wizardData: p
    } = gd(),
    y = c.length > Ge,
    O;
  if (u[0] !== c || u[1] !== p.awsProfile) O = p.awsProfile && !c.includes(p.awsProfile), u[0] = c, u[1] = p.awsProfile, u[2] = O;
  else O = u[2];
  let h = Boolean(O),
    [A, E] = g(c.length === 0 || y || h),
    k;
  if (u[3] !== c || u[4] !== y) k = y ? c.find(_o) : void 0, u[3] = c, u[4] = y, u[5] = k;
  else k = u[5];
  let f = k,
    [C, b] = g(p.awsProfile ?? f ?? ""),
    [v, _] = g(C.length),
    [D, P] = g(null),
    j;
  if (u[6] !== A) j = {
    context: "Settings",
    isActive: A
  }, u[6] = A, u[7] = j;
  else j = u[7];
  ze("confirm:no", d, j);
  let X;
  if (u[8] !== t || u[9] !== m) X = (Te) => {
    m({
      awsProfile: Te
    }), t(B.REGION)
  }, u[8] = t, u[9] = m, u[10] = X;
  else X = u[10];
  let V = X;
  if (!A) {
    const q = c.length;
    let H;
    if (u[11] !== c.length) H = I(c.length, "profile"), u[11] = c.length, u[12] = H;
    else H = u[12];
    let Y;
    if (u[13] !== c.length || u[14] !== H) Y = r(n, {
      dimColor: !0,
      children: ["Found ", q, " ", H, " in ~/.aws/config and ~/.aws/credentials."]
    }), u[13] = c.length, u[14] = H, u[15] = Y;
    else Y = u[15];
    let K;
    if (u[16] !== c) {
      let z;
      if (u[18] === S) z = {
        label: "Type a different name\u2026",
        value: ee
      }, u[18] = z;
      else z = u[18];
      K = [...c.map(To), z];
      u[16] = c, u[17] = K
    } else K = u[17];
    let z;
    if (u[19] !== c || u[20] !== p.awsProfile) z = p.awsProfile && c.includes(p.awsProfile) ? p.awsProfile : void 0, u[19] = c, u[20] = p.awsProfile, u[21] = z;
    else z = u[21];
    let L;
    if (u[22] !== V) L = (hr) => {
      if (hr === ee) E(!0);
      else V(hr)
    }, u[22] = V, u[23] = L;
    else L = u[23];
    let U;
    if (u[24] !== d || u[25] !== L || u[26] !== K || u[27] !== z) U = e(Fe, {
      options: K,
      defaultValue: z,
      onChange: L,
      onCancel: d
    }), u[24] = d, u[25] = L, u[26] = K, u[27] = z, u[28] = U;
    else U = u[28];
    let J;
    if (u[29] !== U || u[30] !== Y) J = e(Jl, {
      subtitle: "AWS profile",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [Y, U]
      })
    }), u[29] = U, u[30] = Y, u[31] = J;
    else J = u[31];
    return J
  }
  let q;
  if (u[32] !== V || u[33] !== C) q = () => {
    let kr = C.trim();
    if (!kr) {
      P("Profile name is required");
      return
    }
    P(null), V(kr)
  }, u[32] = V, u[33] = C, u[34] = q;
  else q = u[34];
  let ve = q,
    H;
  if (u[35] === S) H = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), u[35] = H;
  else H = u[35];
  let Y;
  if (u[36] === S) Y = e(n, {
    children: "The name from ~/.aws/config (after [profile \u2026])."
  }), u[36] = Y;
  else Y = u[36];
  let K;
  if (u[37] !== f || u[38] !== c.length || u[39] !== y) K = y && r(n, {
    dimColor: !0,
    children: ["Found ", c.length, " profiles \u2014 too many to list.", f && ` Prepopulated with "${f}".`]
  }), u[37] = f, u[38] = c.length, u[39] = y, u[40] = K;
  else K = u[40];
  let z;
  if (u[41] === S) z = e(n, {
    dimColor: !0,
    children: "If this is an SSO profile, run `aws sso login --profile NAME` first."
  }), u[41] = z;
  else z = u[41];
  let L;
  if (u[42] !== v || u[43] !== ve || u[44] !== C) L = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: C,
      onChange: b,
      onSubmit: ve,
      placeholder: "my-bedrock-profile",
      columns: 60,
      cursorOffset: v,
      onChangeCursorOffset: _,
      focus: !0,
      showCursor: !0
    })
  }), u[42] = v, u[43] = ve, u[44] = C, u[45] = L;
  else L = u[45];
  let U;
  if (u[46] !== D) U = D && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: D
    })
  }), u[46] = D, u[47] = U;
  else U = u[47];
  let J;
  if (u[48] !== L || u[49] !== U || u[50] !== K) J = e(Jl, {
    subtitle: "AWS profile name",
    footerText: H,
    children: r(s, {
      flexDirection: "column",
      children: [Y, K, z, L, U]
    })
  }), u[48] = L, u[49] = U, u[50] = K, u[51] = J;
  else J = u[51];
  return J
}
N();

function we() {
  let h = w(17),
    {
      goBack: o,
      goNext: l,
      updateWizardData: c,
      wizardData: d
    } = gd(),
    [t, m] = g(d.region ?? "us-east-1"),
    [p, y] = g(t.length),
    [u, O] = g(null),
    A;
  if (h[0] === S) A = {
    context: "Settings"
  }, h[0] = A;
  else A = h[0];
  ze("confirm:no", o, A);
  let E;
  if (h[1] !== l || h[2] !== c || h[3] !== t) E = () => {
    let k = t.trim();
    if (!k) {
      O("Region is required");
      return
    }
    O(null), c({
      region: k
    }), l()
  }, h[1] = l, h[2] = c, h[3] = t, h[4] = E;
  else E = h[4];
  let f = E,
    C;
  if (h[5] === S) C = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), h[5] = C;
  else C = h[5];
  let b, v;
  if (h[6] === S) b = e(n, {
    children: "Where your Bedrock models are enabled."
  }), v = e(n, {
    dimColor: !0,
    children: "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region."
  }), h[6] = b, h[7] = v;
  else b = h[6], v = h[7];
  let _;
  if (h[8] !== p || h[9] !== f || h[10] !== t) _ = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: t,
      onChange: m,
      onSubmit: f,
      placeholder: "us-east-1",
      columns: 40,
      cursorOffset: p,
      onChangeCursorOffset: y,
      focus: !0,
      showCursor: !0
    })
  }), h[8] = p, h[9] = f, h[10] = t, h[11] = _;
  else _ = h[11];
  let D;
  if (h[12] !== u) D = u && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: u
    })
  }), h[12] = u, h[13] = D;
  else D = h[13];
  let P;
  if (h[14] !== _ || h[15] !== D) P = e(Jl, {
    subtitle: "AWS region",
    footerText: C,
    children: r(s, {
      flexDirection: "column",
      children: [b, v, _, D]
    })
  }), h[14] = _, h[15] = D, h[16] = P;
  else P = h[16];
  return P
}
N();

function _e() {
  let t = w(39),
    {
      goBack: o,
      goNext: l,
      updateWizardData: c,
      wizardData: d
    } = gd(),
    m;
  if (t[0] === S) m = {
    phase: "checking"
  }, t[0] = m;
  else m = t[0];
  let [p, y] = g(m), u;
  if (t[1] !== c || t[2] !== d) u = () => {
    let O = !1;
    return fe(d).then((h) => {
      if (O) {
        return
      }
      if (h.status === "ok") c({
        verifiedIdentity: h.identity,
        discoveredProfiles: h.profiles
      });
      else c({
        verifiedIdentity: void 0,
        discoveredProfiles: void 0
      });
      y({
        phase: "done",
        result: h
      })
    }), () => {
      O = !0
    }
  }, t[1] = c, t[2] = d, t[3] = u;
  else u = t[3];
  let A;
  if (t[4] === S) A = [], t[4] = A;
  else A = t[4];
  if (R(u, A), p.phase === "checking") {
    const E = d.authMethod === "bearer" ? "Sending a test request to Bedrock\u2026" : "Calling AWS STS and Bedrock\u2026";
    let k;
    if (t[5] !== E) k = e(Jl, {
      subtitle: "Verifying credentials",
      children: e(ur, {
        message: E,
        subtitle: "This may take a few seconds."
      })
    }), t[5] = E, t[6] = k;
    else k = t[6];
    return k
  }
  let {
    result: f
  } = p;
  switch (f.status) {
    case "ok": {
      let E;
      if (t[7] === S) E = e(et, {
        status: "success",
        withSpace: !0
      }), t[7] = E;
      else E = t[7];
      let k;
      if (t[8] !== f.identity) k = r(n, {
        children: [E, "Authenticated as ", e(n, {
          bold: !0,
          children: f.identity
        })]
      }), t[8] = f.identity, t[9] = k;
      else k = t[9];
      let C;
      if (t[10] !== f.note || t[11] !== f.profiles) C = f.note ?? (f.profiles.length > 0 ? `Found ${f.profiles.length} Anthropic inference ${I(f.profiles.length,"profile")} in this region.` : "No Anthropic inference profiles found in this region. You may still proceed \u2014 model defaults will use the built-in IDs."), t[10] = f.note, t[11] = f.profiles, t[12] = C;
      else C = t[12];
      let b;
      if (t[13] !== C) b = e(n, {
        dimColor: !0,
        children: C
      }), t[13] = C, t[14] = b;
      else b = t[14];
      let v;
      if (t[15] === S) v = [{
        label: "Continue",
        value: "continue"
      }], t[15] = v;
      else v = t[15];
      let _;
      if (t[16] !== l) _ = () => l(), t[16] = l, t[17] = _;
      else _ = t[17];
      let D;
      if (t[18] !== o || t[19] !== _) D = e(Fe, {
        options: v,
        onChange: _,
        onCancel: o
      }), t[18] = o, t[19] = _, t[20] = D;
      else D = t[20];
      let P;
      if (t[21] !== k || t[22] !== b || t[23] !== D) P = e(Jl, {
        subtitle: "Verification",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [k, b, D]
        })
      }), t[21] = k, t[22] = b, t[23] = D, t[24] = P;
      else P = t[24];
      return P
    }
    case "error": {
      let E;
      if (t[25] === S) E = e(et, {
        status: "error",
        withSpace: !0
      }), t[25] = E;
      else E = t[25];
      let k;
      if (t[26] !== f.error) k = r(n, {
        children: [E, f.error]
      }), t[26] = f.error, t[27] = k;
      else k = t[27];
      let C;
      if (t[28] !== f.command) C = f.command && r(n, {
        bold: !0,
        color: "suggestion",
        children: ["    ", f.command]
      }), t[28] = f.command, t[29] = C;
      else C = t[29];
      let b;
      if (t[30] !== k || t[31] !== C) b = r(s, {
        flexDirection: "column",
        children: [k, C]
      }), t[30] = k, t[31] = C, t[32] = b;
      else b = t[32];
      let v;
      if (t[33] !== o || t[34] !== l) v = e(qn, {
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Save anyway (skip verification)",
        cancelLabel: "Go back and fix",
        onConfirm: l,
        onCancel: o
      }), t[33] = o, t[34] = l, t[35] = v;
      else v = t[35];
      let _;
      if (t[36] !== b || t[37] !== v) _ = e(Jl, {
        subtitle: "Verification failed",
        color: "error",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [b, v]
        })
      }), t[36] = b, t[37] = v, t[38] = _;
      else _ = t[38];
      return _
    }
  }
}

function Lo() {}
var gr = [ie, Ae, se, te, we, _e, pe, le];

function nJe(o) {
  let t = w(7),
    {
      onComplete: l,
      onCancel: c,
      exitOnCtrlCD: d
    } = o,
    m;
  if (t[0] !== l) m = {
    onComplete: l
  }, t[0] = l, t[1] = m;
  else m = t[1];
  let p;
  if (t[2] === S) p = {}, t[2] = p;
  else p = t[2];
  let y;
  if (t[3] !== d || t[4] !== c || t[5] !== m) y = e(xPe, {
    steps: gr,
    stepProps: m,
    initialData: p,
    onComplete: Lo,
    onCancel: c,
    exitOnCtrlCD: d,
    title: "Set up Amazon Bedrock",
    showStepCounter: !1
  }), t[3] = d, t[4] = c, t[5] = m, t[6] = y;
  else y = t[6];
  return y
}
export {
  nJe
};
