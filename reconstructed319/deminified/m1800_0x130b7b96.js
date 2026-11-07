// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { HHt, K2e, yZe, ID, QNe, yBn, bBn, zZe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { un, qn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { ts } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { aT, Zk, Fz, XL, dMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Xtt, Jtt, iae } from "B:/~BUN/root/chunk-wthaftk0.js";
import { E_e } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Bot, ym, Lf, $j, EGt, B3n } from "B:/~BUN/root/chunk-6twbgvt6.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { MY } from "B:/~BUN/root/chunk-58807hdh.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { H0 } from "B:/~BUN/root/chunk-t85n63bg.js";
import { So } from "B:/~BUN/root/chunk-r9p4g17h.js";
import { Ys } from "B:/~BUN/root/chunk-28bb8488.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Ho, ko, O, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Exe } from "B:/~BUN/root/chunk-hamfx3hn.js";
import { Oe, w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var fields = [{
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
  let u = S(16),
    {
      goBack: o,
      goNext: goNext,
      updateWizardData: updateWizardData,
      wizardData: wizardData,
      title: title
    } = ym();
  const accessKeyId = wizardData.accessKeyId ?? "",
    secretAccessKey = wizardData.secretAccessKey ?? "",
    sessionToken = wizardData.sessionToken ?? "";
  let R;
  if (u[0] !== accessKeyId || u[1] !== secretAccessKey || u[2] !== sessionToken) R = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken: sessionToken
  }, u[0] = accessKeyId, u[1] = secretAccessKey, u[2] = sessionToken, u[3] = R;else R = u[3];
  let [values, D] = y(R),
    E;
  if (u[4] !== goNext || u[5] !== updateWizardData || u[6] !== values.accessKeyId || u[7] !== values.secretAccessKey || u[8] !== values.sessionToken) E = () => {
    updateWizardData({
      accessKeyId: values.accessKeyId.trim(),
      secretAccessKey: values.secretAccessKey.trim(),
      sessionToken: values.sessionToken.trim() || void 0
    }), goNext();
  }, u[4] = goNext, u[5] = updateWizardData, u[6] = values.accessKeyId, u[7] = values.secretAccessKey, u[8] = values.sessionToken, u[9] = E;else E = u[9];
  let onSubmit = E;
  const title_2 = title ?? "Set up AWS Bedrock";
  let onChange;
  if (u[10] === w) onChange = (b, v) => D(T => ({
    ...T,
    [b]: v
  })), u[10] = onChange;else onChange = u[10];
  let _;
  if (u[11] !== o || u[12] !== onSubmit || u[13] !== title_2 || u[14] !== values) _ = e(MY, {
    title: title_2,
    subtitle: "AWS access keys",
    fields: fields,
    values: values,
    onChange: onChange,
    onSubmit: onSubmit,
    onCancel: o,
    submitLabel: "Continue"
  }), u[11] = o, u[12] = onSubmit, u[13] = title_2, u[14] = values, u[15] = _;else _ = u[15];
  return _;
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
  let d = S(9),
    {
      goBack: o,
      goToStep: goToStep,
      updateWizardData: updateWizardData_2
    } = ym(),
    t;
  if (d[0] === w) t = [{
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
  }], d[0] = t;else t = d[0];
  let options = t,
    g;
  if (d[1] === w) g = {
    profile: B.PROFILE,
    bearer: B.BEARER,
    accessKey: B.ACCESS_KEY_ID,
    environment: B.REGION
  }, d[1] = g;else g = d[1];
  let h = g,
    u;
  if (d[2] !== goToStep || d[3] !== updateWizardData_2) u = R => {
    let authMethod = R;
    updateWizardData_2({
      authMethod: authMethod
    }), goToStep(h[authMethod]);
  }, d[2] = goToStep, d[3] = updateWizardData_2, d[4] = u;else u = d[4];
  let onChange_2 = u,
    E;
  if (d[5] === w) E = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI."
  }), d[5] = E;else E = d[5];
  let k;
  if (d[6] !== o || d[7] !== onChange_2) k = e(Lf, {
    subtitle: "How do you authenticate to AWS?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [E, e(Ze, {
        options: options,
        onChange: onChange_2,
        onCancel: o
      })]
    })
  }), d[6] = o, d[7] = onChange_2, d[8] = k;else k = d[8];
  return k;
}
j();
function se() {
  let p = S(17),
    {
      goBack: goBack,
      goToStep: goToStep_2,
      updateWizardData: updateWizardData_3,
      wizardData: wizardData_2
    } = ym(),
    [value, onChange_3] = y(wizardData_2.bearerToken ?? ""),
    [cursorOffset, onChangeCursorOffset] = y(value.length),
    [error, R] = y(null),
    D;
  if (p[0] === w) D = {
    context: "Settings"
  }, p[0] = D;else D = p[0];
  pt("confirm:no", goBack, D);
  let E;
  if (p[1] !== goToStep_2 || p[2] !== updateWizardData_3 || p[3] !== value) E = () => {
    let bearerToken = value.trim();
    if (!bearerToken) {
      R("API key is required");
      return;
    }
    R(null), updateWizardData_3({
      bearerToken: bearerToken
    }), goToStep_2(B.REGION);
  }, p[1] = goToStep_2, p[2] = updateWizardData_3, p[3] = value, p[4] = E;else E = p[4];
  let onSubmit_2 = E,
    footerText;
  if (p[5] === w) footerText = r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), p[5] = footerText;else footerText = p[5];
  let b, v;
  if (p[6] === w) b = e(n, {
    children: "Paste your Bedrock API key."
  }), v = e(n, {
    dimColor: !0,
    children: "Generate one in the AWS console under Bedrock \u2192 API keys."
  }), p[6] = b, p[7] = v;else b = p[6], v = p[7];
  let T;
  if (p[8] !== cursorOffset || p[9] !== onSubmit_2 || p[10] !== value) T = e(s, {
    marginTop: 1,
    children: e(Ir, {
      value: value,
      onChange: onChange_3,
      onSubmit: onSubmit_2,
      placeholder: "bedrock-api-key-\u2026",
      mask: "*",
      columns: 60,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      focus: !0,
      showCursor: !0
    })
  }), p[8] = cursorOffset, p[9] = onSubmit_2, p[10] = value, p[11] = T;else T = p[11];
  let _;
  if (p[12] !== error) _ = error && e(s, {
    marginTop: 1,
    children: e(Ys, {
      error: error
    })
  }), p[12] = error, p[13] = _;else _ = p[13];
  let W;
  if (p[14] !== T || p[15] !== _) W = e(Lf, {
    subtitle: "Bedrock API key",
    footerText: footerText,
    children: r(s, {
      flexDirection: "column",
      children: [b, v, T, _]
    })
  }), p[14] = T, p[15] = _, p[16] = W;else W = p[16];
  return W;
}
j();
function jr(U) {
  return U[1] !== void 0;
}
function Xr(o) {
  let [children, F] = o;
  return r(n, {
    children: ["  ", e(n, {
      color: "suggestion",
      children: children
    }), " =", " ", Ie.has(children) ? e(n, {
      dimColor: !0,
      children: "(hidden)"
    }) : F]
  }, children);
}
function We(o) {
  let c = {
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
      c.AWS_PROFILE = o.awsProfile;
      break;
    case "bearer":
      c.AWS_BEARER_TOKEN_BEDROCK = o.bearerToken;
      break;
    case "accessKey":
      if (c.AWS_ACCESS_KEY_ID = o.accessKeyId, c.AWS_SECRET_ACCESS_KEY = o.secretAccessKey, o.sessionToken) c.AWS_SESSION_TOKEN = o.sessionToken;
      break;
    case "environment":
    case void 0:
      break;
  }
  if (o.pinSonnet) c.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) c.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) c.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) c.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return c;
}
var Ie = new Set(["AWS_BEARER_TOKEN_BEDROCK", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN"]);
function le(o) {
  let h = S(31),
    {
      onComplete: onComplete
    } = o,
    {
      storageV5: storageV5
    } = Fe(),
    {
      goBack: d,
      wizardData: wizardData_3
    } = ym(),
    [error_3, g] = y(null),
    u;
  if (h[0] === w) u = ks(un("userSettings") ?? "~/.claude/settings.json"), h[0] = u;else u = h[0];
  let R = u,
    p;
  if (h[1] !== wizardData_3) p = We(wizardData_3), h[1] = wizardData_3, h[2] = p;else p = h[2];
  let env = p,
    E;
  if (h[3] !== env) E = Object.entries(env).filter(jr), h[3] = env, h[4] = E;else E = h[4];
  let k = E,
    f = A(!1),
    C;
  if (h[5] !== env || h[6] !== onComplete || h[7] !== storageV5 || h[8] !== wizardData_3.authMethod || h[9] !== wizardData_3.awsProfile || h[10] !== wizardData_3.pinFable || h[11] !== wizardData_3.pinHaiku || h[12] !== wizardData_3.pinOpus || h[13] !== wizardData_3.pinSonnet || h[14] !== wizardData_3.verifiedIdentity) C = async () => {
    if (f.current) {
      return;
    }
    f.current = !0;
    let {
      error: error_2
    } = await qn("userSettings", {
      env: env
    }, void 0, storageV5);
    if (error_2) {
      f.current = !1, g(error_2.message);
      return;
    }
    l("tengu_bedrock_setup_complete", {
      auth_method: de(wizardData_3.authMethod),
      pinned_models: Boolean(wizardData_3.pinSonnet || wizardData_3.pinOpus || wizardData_3.pinFable || wizardData_3.pinHaiku),
      verified: Boolean(wizardData_3.verifiedIdentity)
    }), onComplete(`Bedrock configuration saved to ${R}.${wizardData_3.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${wizardData_3.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`);
  }, h[5] = env, h[6] = onComplete, h[7] = storageV5, h[8] = wizardData_3.authMethod, h[9] = wizardData_3.awsProfile, h[10] = wizardData_3.pinFable, h[11] = wizardData_3.pinHaiku, h[12] = wizardData_3.pinOpus, h[13] = wizardData_3.pinSonnet, h[14] = wizardData_3.verifiedIdentity, h[15] = C;else C = h[15];
  let onConfirm = C,
    T;
  if (h[16] === w) T = r(n, {
    children: ["These will be written to ", R, " under env:"]
  }), h[16] = T;else T = h[16];
  let _;
  if (h[17] !== k) _ = e(s, {
    flexDirection: "column",
    children: k.map(Xr)
  }), h[17] = k, h[18] = _;else _ = h[18];
  let W;
  if (h[19] !== wizardData_3.verifiedIdentity) W = wizardData_3.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [e(Tt, {
      status: "success",
      withSpace: !0
    }), "Verified as ", wizardData_3.verifiedIdentity]
  }), h[19] = wizardData_3.verifiedIdentity, h[20] = W;else W = h[20];
  let G;
  if (h[21] !== error_3) G = e(Ys, {
    error: error_3
  }), h[21] = error_3, h[22] = G;else G = h[22];
  let X;
  if (h[23] !== d || h[24] !== onConfirm) X = e(Jn, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: onConfirm,
    onCancel: d
  }), h[23] = d, h[24] = onConfirm, h[25] = X;else X = h[25];
  let we;
  if (h[26] !== _ || h[27] !== W || h[28] !== G || h[29] !== X) we = e(Lf, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [T, _, W, G, X]
    })
  }), h[26] = _, h[27] = W, h[28] = G, h[29] = X, h[30] = we;else we = h[30];
  return we;
}
var Me = Oe(Exe(), 1);
var Q = "Bedrock setup verification timed out";
function ue(o) {
  let c = yZe(o),
    a = d => {
      let bedrock = ts[d].bedrock;
      if (bedrock === null) throw Error("A DEFAULT_3P_*_KEY points at a model config with bedrock: null \u2014 Bedrock setup has no fallback id for that tier");
      return {
        needle: ts[d].firstParty,
        fallback: K2e(bedrock, c)
      };
    };
  return {
    sonnet: a(ID),
    opus: a(yBn),
    haiku: a(QNe),
    fable: a(bBn)
  };
}
async function fe(o) {
  if (o.authMethod === "bearer") return Zr(o);
  let c = dMr();
  try {
    let credentials = await Ke(o),
      t = {
        ...(await Jtt({
          url: `https://bedrock.${o.region}.amazonaws.com`,
          region: o.region,
          requestTimeoutMs: zZe
        })),
        region: o.region,
        ...(credentials && {
          credentials: credentials
        })
      },
      {
        STSClient: STSClient,
        GetCallerIdentityCommand: GetCallerIdentityCommand
      } = await import("B:/~BUN/root/chunk-facjrt3b.js"),
      h = await zt(new STSClient(t).send(new GetCallerIdentityCommand({})), c, Q),
      identity = h.Arn ?? h.UserId ?? "(unknown)",
      {
        BedrockClient: BedrockClient,
        ListInferenceProfilesCommand: ListInferenceProfilesCommand
      } = await import("B:/~BUN/root/chunk-nqy372s9.js"),
      D = new BedrockClient(t),
      profiles = [],
      nextToken;
    do {
      let f = await zt(D.send(new ListInferenceProfilesCommand({
        ...(nextToken && {
          nextToken: nextToken
        }),
        typeEquals: "SYSTEM_DEFINED"
      })), c, Q);
      for (let C of f.inferenceProfileSummaries ?? []) if (C.inferenceProfileId?.includes("anthropic")) profiles.push(C.inferenceProfileId);
      nextToken = f.nextToken;
    } while (nextToken);
    return {
      status: "ok",
      identity: identity,
      profiles: profiles
    };
  } catch (error) {
    return {
      status: "error",
      ...eo(error, o, c)
    };
  }
}
async function me(o, c) {
  return B3n(() => Qr(o), c, a => a instanceof Error && (a.message === Q || Ue(a)) ? "network" : "auth");
}
async function Qr(o) {
  let [{
      AnthropicBedrock: AnthropicBedrock
    }, {
      getProxyFetchOptions: getProxyFetchOptions
    }] = await Promise.all([import("B:/~BUN/root/chunk-2kt7cm15.js"), import("B:/~BUN/root/chunk-hm55wvr0.js")]),
    d = {
      awsRegion: o.region,
      maxRetries: 0,
      fetchOptions: getProxyFetchOptions({
        url: i.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o.region}.amazonaws.com`
      })
    },
    t = await Jr(o),
    m = E_e(),
    g = {
      authToken: null,
      defaultHeaders: {
        ...m,
        ...Zk(),
        ...Fz(),
        Authorization: null,
        ...(!aT() && {
          "X-Api-Key": null
        })
      },
      ...XL
    };
  switch (t.kind) {
    case "bearer":
      return new AnthropicBedrock({
        ...d,
        apiKey: t.token,
        defaultHeaders: {
          ...m,
          ...Zk(),
          ...Fz(),
          Authorization: `Bearer ${t.token}`,
          ...(!aT() && {
            "X-Api-Key": null
          })
        }
      });
    case "sigv4":
      return new AnthropicBedrock({
        ...d,
        ...g,
        awsAccessKey: t.accessKeyId,
        awsSecretKey: t.secretAccessKey,
        awsSessionToken: t.sessionToken
      });
    case "default":
      {
        let h = i.AWS_BEARER_TOKEN_BEDROCK;
        if (h) return new AnthropicBedrock({
          ...d,
          apiKey: h,
          defaultHeaders: {
            ...m,
            ...Zk(),
            ...Fz(),
            Authorization: `Bearer ${h}`,
            ...(!aT() && {
              "X-Api-Key": null
            })
          }
        });
        return new AnthropicBedrock({
          ...d,
          ...g,
          providerChainResolver: () => Le(o, void 0)
        });
      }
  }
}
async function Jr(o) {
  if (o.authMethod === "bearer") return {
    kind: "bearer",
    token: o.bearerToken
  };
  let c = await Ke(o);
  if (!c) return {
    kind: "default"
  };
  let a = await c();
  return {
    kind: "sigv4",
    accessKeyId: a.accessKeyId,
    secretAccessKey: a.secretAccessKey,
    sessionToken: a.sessionToken
  };
}
async function Zr(o) {
  let fallback = ue(o.region).haiku.fallback,
    a = await me(o, fallback);
  if (a.ok) return {
    status: "ok",
    identity: "Bedrock API key",
    profiles: [],
    note: `Test request to ${fallback} succeeded.`
  };
  switch (a.reason) {
    case "auth":
      return {
        status: "error",
        error: "Invalid Bedrock API key. Check the key and try again."
      };
    case "permission":
      return {
        status: "error",
        error: "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel."
      };
    case "model":
      return {
        status: "ok",
        identity: "Bedrock API key",
        profiles: [],
        note: `The key works, but ${fallback} is not enabled in your account. Pin a model you have access to on the next step.`
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Bedrock in region "${o.region}". Check the region name and your network.`
      };
    case "other":
      return {
        status: "error",
        error: "The test request failed. Check the key and region."
      };
  }
}
async function Ke(o) {
  switch (o.authMethod) {
    case "profile":
      return Le(o, o.awsProfile);
    case "accessKey":
      return async () => ({
        accessKeyId: o.accessKeyId,
        secretAccessKey: o.secretAccessKey,
        ...(o.sessionToken && {
          sessionToken: o.sessionToken
        })
      });
    case "environment":
      return;
    default:
      return;
  }
}
async function Le(o, profile) {
  let [{
      fromNodeProviderChain: fromNodeProviderChain
    }, d] = await Promise.all([import("B:/~BUN/root/chunk-0mm31ygf.js"), iae({
      url: Xtt(String(o.region)),
      requestTimeoutMs: zZe
    })]),
    requestHandler = d ?? new Me.FetchHttpHandler({
      requestTimeout: zZe
    }),
    m = fromNodeProviderChain({
      profile: profile,
      ignoreCache: !0,
      parentClientConfig: {
        region: o.region,
        requestHandler: requestHandler
      },
      clientConfig: {
        requestHandler: requestHandler
      }
    });
  return g => zt(m(g), dMr(), Q);
}
function Ue(o) {
  return o?.name === "TimeoutError" || o?.name === "CredentialsProviderError" && (o.message ?? "").startsWith("TimeoutError:");
}
function eo(o, c, a) {
  let d = o,
    t = d?.name ?? "Error",
    m = d?.message ?? String(o);
  if (m === Q) return {
    error: `Timed out after ${Math.ceil(a / 1000)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.`
  };
  if (Ue(d)) return {
    error: "A request to AWS timed out. Check your network and proxy settings, then try again."
  };
  let command = c.authMethod === "profile" ? `aws sso login --profile ${c.awsProfile}` : void 0;
  switch (t) {
    case "CredentialsProviderError":
      return c.authMethod === "profile" ? {
        error: `Could not load credentials for profile "${c.awsProfile}". If this is an SSO profile, run:`,
        command: command
      } : {
        error: `No AWS credentials found. ${m}`
      };
    case "ExpiredTokenException":
    case "TokenRefreshRequired":
      return c.authMethod === "profile" ? {
        error: "SSO session expired. Run:",
        command: command
      } : {
        error: `Credentials expired. ${m}`
      };
    case "ForbiddenException":
      return c.authMethod === "profile" ? {
        error: `SSO portal denied access to the role for profile "${c.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`
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
        error: `Cannot reach AWS in region "${c.region}". Check the region name and your network.`
      };
    default:
      return {
        error: `${t}: ${m}`
      };
  }
}
function He(o, c) {
  return (o.discoveredProfiles ?? []).filter(item => item.toLowerCase().includes(c));
}
var provider = {
  reasonLabel: {
    auth: "auth failed",
    permission: "no InvokeModel permission",
    model: "not enabled in this account",
    network: "unreachable",
    other: "request failed"
  },
  intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it \u2014 Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have.",
  resolveTierDefaults: o => {
    let c = ue(o.region),
      a = yZe(o.region);
    return Object.fromEntries($j.map(item => [item, {
      auto: HHt(o.discoveredProfiles ?? [], c[item].needle, a) ?? void 0,
      fallback: c[item].fallback
    }]));
  },
  listTierCandidates: (o, c) => He(c, o).sort().reverse(),
  pickerSubtitle: (o, c) => {
    let a = He(c, o).length;
    return a > 0 ? `${a} ${H0[o]} ${P(a, "profile")} in your account \xB7 each tested with a one-token request.` : `No ${H0[o]} profiles found in your account.`;
  },
  probe: (o, c) => me(o, c)
};
function pe() {
  let c = S(2),
    {
      updateWizardData: o
    } = ym(),
    a;
  if (c[0] !== o) a = e(EGt, {
    provider: provider,
    onPins: o
  }), c[0] = o, c[1] = a;else a = c[1];
  return a;
}
j();
import { readFile as oo } from "fs/promises";
import { homedir as to } from "os";
import { join as Ve } from "path";
async function ge() {
  let o = new Set(),
    c = to();
  for (let {
    path: path,
    re: re
  } of [{
    path: Ve(c, ".aws", "config"),
    re: /^\[(?:profile\s+)?([^\]]+)\]/gm
  }, {
    path: Ve(c, ".aws", "credentials"),
    re: /^\[([^\]]+)\]/gm
  }]) try {
    for (let t of (await oo(path, "utf8")).matchAll(re)) {
      let m = t[1]?.trim();
      if (m && !m.startsWith("sso-session ")) o.add(m);
    }
  } catch {}
  return [...o].sort();
}
function Co() {
  return [];
}
function yo() {
  return ge().catch(Co);
}
function Eo(xo) {
  return xo.toLowerCase().includes("bedrock");
}
function Ao(pr) {
  return {
    label: pr,
    value: pr
  };
}
var value_2 = "__manual__",
  qe = 12;
function Ee() {
  let c = S(3),
    [profilesPromise] = y(yo),
    fallback_2;
  if (c[0] === w) fallback_2 = e(Lf, {
    subtitle: "AWS profile",
    children: e(So, {
      message: "Reading ~/.aws/config\u2026"
    })
  }), c[0] = fallback_2;else fallback_2 = c[0];
  let d;
  if (c[1] !== profilesPromise) d = e(Ho, {
    fallback: fallback_2,
    children: e(Se, {
      profilesPromise: profilesPromise
    })
  }), c[1] = profilesPromise, c[2] = d;else d = c[2];
  return d;
}
function Se(o) {
  let u = S(52),
    {
      profilesPromise: profilesPromise_2
    } = o,
    a = ko(profilesPromise_2),
    {
      goBack: d,
      goToStep: goToStep_3,
      updateWizardData: updateWizardData_4,
      wizardData: wizardData_4
    } = ym(),
    h = a.length > qe,
    R;
  if (u[0] !== a || u[1] !== wizardData_4.awsProfile) R = wizardData_4.awsProfile && !a.includes(wizardData_4.awsProfile), u[0] = a, u[1] = wizardData_4.awsProfile, u[2] = R;else R = u[2];
  let p = Boolean(R),
    [isActive, E] = y(a.length === 0 || h || p),
    k;
  if (u[3] !== a || u[4] !== h) k = h ? a.find(Eo) : void 0, u[3] = a, u[4] = h, u[5] = k;else k = u[5];
  let f = k,
    [value_3, onChange_5] = y(wizardData_4.awsProfile ?? f ?? ""),
    [cursorOffset_2, onChangeCursorOffset_2] = y(value_3.length),
    [error_4, W] = y(null),
    G;
  if (u[6] !== isActive) G = {
    context: "Settings",
    isActive: isActive
  }, u[6] = isActive, u[7] = G;else G = u[7];
  pt("confirm:no", d, G);
  let X;
  if (u[8] !== goToStep_3 || u[9] !== updateWizardData_4) X = awsProfile => {
    updateWizardData_4({
      awsProfile: awsProfile
    }), goToStep_3(B.REGION);
  }, u[8] = goToStep_3, u[9] = updateWizardData_4, u[10] = X;else X = u[10];
  let U = X;
  if (!isActive) {
    const H = a.length;
    let F;
    if (u[11] !== a.length) F = P(a.length, "profile"), u[11] = a.length, u[12] = F;else F = u[12];
    let V;
    if (u[13] !== a.length || u[14] !== F) V = r(n, {
      dimColor: !0,
      children: ["Found ", H, " ", F, " in ~/.aws/config and ~/.aws/credentials."]
    }), u[13] = a.length, u[14] = F, u[15] = V;else V = u[15];
    let options_2;
    if (u[16] !== a) {
      const K = a.map(Ao);
      let I;
      if (u[18] === w) I = {
        label: "Type a different name\u2026",
        value: value_2
      }, u[18] = I;else I = u[18];
      options_2 = [...K, I];
      u[16] = a, u[17] = options_2;
    } else options_2 = u[17];
    let defaultValue;
    if (u[19] !== a || u[20] !== wizardData_4.awsProfile) defaultValue = wizardData_4.awsProfile && a.includes(wizardData_4.awsProfile) ? wizardData_4.awsProfile : void 0, u[19] = a, u[20] = wizardData_4.awsProfile, u[21] = defaultValue;else defaultValue = u[21];
    let onChange_4;
    if (u[22] !== U) onChange_4 = fr => {
      if (fr === value_2) E(!0);else U(fr);
    }, u[22] = U, u[23] = onChange_4;else onChange_4 = u[23];
    let L;
    if (u[24] !== d || u[25] !== onChange_4 || u[26] !== options_2 || u[27] !== defaultValue) L = e(Ze, {
      options: options_2,
      defaultValue: defaultValue,
      onChange: onChange_4,
      onCancel: d
    }), u[24] = d, u[25] = onChange_4, u[26] = options_2, u[27] = defaultValue, u[28] = L;else L = u[28];
    let J;
    if (u[29] !== L || u[30] !== V) J = e(Lf, {
      subtitle: "AWS profile",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [V, L]
      })
    }), u[29] = L, u[30] = V, u[31] = J;else J = u[31];
    return J;
  }
  let H;
  if (u[32] !== U || u[33] !== value_3) H = () => {
    let mr = value_3.trim();
    if (!mr) {
      W("Profile name is required");
      return;
    }
    W(null), U(mr);
  }, u[32] = U, u[33] = value_3, u[34] = H;else H = u[34];
  let onSubmit_3 = H,
    footerText_2;
  if (u[35] === w) footerText_2 = r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), u[35] = footerText_2;else footerText_2 = u[35];
  let V;
  if (u[36] === w) V = e(n, {
    children: "The name from ~/.aws/config (after [profile \u2026])."
  }), u[36] = V;else V = u[36];
  let M;
  if (u[37] !== f || u[38] !== a.length || u[39] !== h) M = h && r(n, {
    dimColor: !0,
    children: ["Found ", a.length, " profiles \u2014 too many to list.", f && ` Prepopulated with "${f}".`]
  }), u[37] = f, u[38] = a.length, u[39] = h, u[40] = M;else M = u[40];
  let K;
  if (u[41] === w) K = e(n, {
    dimColor: !0,
    children: "If this is an SSO profile, run `aws sso login --profile NAME` first."
  }), u[41] = K;else K = u[41];
  let I;
  if (u[42] !== cursorOffset_2 || u[43] !== onSubmit_3 || u[44] !== value_3) I = e(s, {
    marginTop: 1,
    children: e(Ir, {
      value: value_3,
      onChange: onChange_5,
      onSubmit: onSubmit_3,
      placeholder: "my-bedrock-profile",
      columns: 60,
      cursorOffset: cursorOffset_2,
      onChangeCursorOffset: onChangeCursorOffset_2,
      focus: !0,
      showCursor: !0
    })
  }), u[42] = cursorOffset_2, u[43] = onSubmit_3, u[44] = value_3, u[45] = I;else I = u[45];
  let L;
  if (u[46] !== error_4) L = error_4 && e(s, {
    marginTop: 1,
    children: e(Ys, {
      error: error_4
    })
  }), u[46] = error_4, u[47] = L;else L = u[47];
  let J;
  if (u[48] !== I || u[49] !== L || u[50] !== M) J = e(Lf, {
    subtitle: "AWS profile name",
    footerText: footerText_2,
    children: r(s, {
      flexDirection: "column",
      children: [V, M, K, I, L]
    })
  }), u[48] = I, u[49] = L, u[50] = M, u[51] = J;else J = u[51];
  return J;
}
j();
function De() {
  let p = S(17),
    {
      goBack: goBack_2,
      goNext: goNext_2,
      updateWizardData: updateWizardData_5,
      wizardData: wizardData_5
    } = ym(),
    [value_4, onChange_6] = y(wizardData_5.region ?? "us-east-1"),
    [cursorOffset_3, onChangeCursorOffset_3] = y(value_4.length),
    [error_5, R] = y(null),
    D;
  if (p[0] === w) D = {
    context: "Settings"
  }, p[0] = D;else D = p[0];
  pt("confirm:no", goBack_2, D);
  let E;
  if (p[1] !== goNext_2 || p[2] !== updateWizardData_5 || p[3] !== value_4) E = () => {
    let region = value_4.trim();
    if (!region) {
      R("Region is required");
      return;
    }
    R(null), updateWizardData_5({
      region: region
    }), goNext_2();
  }, p[1] = goNext_2, p[2] = updateWizardData_5, p[3] = value_4, p[4] = E;else E = p[4];
  let onSubmit_4 = E,
    footerText_3;
  if (p[5] === w) footerText_3 = r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), p[5] = footerText_3;else footerText_3 = p[5];
  let b, v;
  if (p[6] === w) b = e(n, {
    children: "Where your Bedrock models are enabled."
  }), v = e(n, {
    dimColor: !0,
    children: "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region."
  }), p[6] = b, p[7] = v;else b = p[6], v = p[7];
  let T;
  if (p[8] !== cursorOffset_3 || p[9] !== onSubmit_4 || p[10] !== value_4) T = e(s, {
    marginTop: 1,
    children: e(Ir, {
      value: value_4,
      onChange: onChange_6,
      onSubmit: onSubmit_4,
      placeholder: "us-east-1",
      columns: 40,
      cursorOffset: cursorOffset_3,
      onChangeCursorOffset: onChangeCursorOffset_3,
      focus: !0,
      showCursor: !0
    })
  }), p[8] = cursorOffset_3, p[9] = onSubmit_4, p[10] = value_4, p[11] = T;else T = p[11];
  let _;
  if (p[12] !== error_5) _ = error_5 && e(s, {
    marginTop: 1,
    children: e(Ys, {
      error: error_5
    })
  }), p[12] = error_5, p[13] = _;else _ = p[13];
  let W;
  if (p[14] !== T || p[15] !== _) W = e(Lf, {
    subtitle: "AWS region",
    footerText: footerText_3,
    children: r(s, {
      flexDirection: "column",
      children: [b, v, T, _]
    })
  }), p[14] = T, p[15] = _, p[16] = W;else W = p[16];
  return W;
}
j();
function _e() {
  let t = S(39),
    {
      goBack: o,
      goNext: c,
      updateWizardData: updateWizardData_6,
      wizardData: wizardData_6
    } = ym(),
    m;
  if (t[0] === w) m = {
    phase: "checking"
  }, t[0] = m;else m = t[0];
  let [g, h] = y(m),
    u;
  if (t[1] !== updateWizardData_6 || t[2] !== wizardData_6) u = () => {
    let R = !1;
    return fe(wizardData_6).then(result => {
      if (R) {
        return;
      }
      if (result.status === "ok") updateWizardData_6({
        verifiedIdentity: result.identity,
        discoveredProfiles: result.profiles
      });else updateWizardData_6({
        verifiedIdentity: void 0,
        discoveredProfiles: void 0
      });
      h({
        phase: "done",
        result: result
      });
    }), () => {
      R = !0;
    };
  }, t[1] = updateWizardData_6, t[2] = wizardData_6, t[3] = u;else u = t[3];
  let D;
  if (t[4] === w) D = [], t[4] = D;else D = t[4];
  if (O(u, D), g.phase === "checking") {
    const message = wizardData_6.authMethod === "bearer" ? "Sending a test request to Bedrock\u2026" : "Calling AWS STS and Bedrock\u2026";
    let k;
    if (t[5] !== message) k = e(Lf, {
      subtitle: "Verifying credentials",
      children: e(So, {
        message: message,
        subtitle: "This may take a few seconds."
      })
    }), t[5] = message, t[6] = k;else k = t[6];
    return k;
  }
  let {
    result: result_2
  } = g;
  switch (result_2.status) {
    case "ok":
      {
        let E;
        if (t[7] === w) E = e(Tt, {
          status: "success",
          withSpace: !0
        }), t[7] = E;else E = t[7];
        let k;
        if (t[8] !== result_2.identity) k = r(n, {
          children: [E, "Authenticated as ", e(n, {
            bold: !0,
            children: result_2.identity
          })]
        }), t[8] = result_2.identity, t[9] = k;else k = t[9];
        let children_2;
        if (t[10] !== result_2.note || t[11] !== result_2.profiles) children_2 = result_2.note ?? (result_2.profiles.length > 0 ? `Found ${result_2.profiles.length} Anthropic inference ${P(result_2.profiles.length, "profile")} in this region.` : "No Anthropic inference profiles found in this region. You may still proceed \u2014 model defaults will use the built-in IDs."), t[10] = result_2.note, t[11] = result_2.profiles, t[12] = children_2;else children_2 = t[12];
        let b;
        if (t[13] !== children_2) b = e(n, {
          dimColor: !0,
          children: children_2
        }), t[13] = children_2, t[14] = b;else b = t[14];
        let options_3;
        if (t[15] === w) options_3 = [{
          label: "Continue",
          value: "continue"
        }], t[15] = options_3;else options_3 = t[15];
        let onChange_7;
        if (t[16] !== c) onChange_7 = () => c(), t[16] = c, t[17] = onChange_7;else onChange_7 = t[17];
        let _;
        if (t[18] !== o || t[19] !== onChange_7) _ = e(Ze, {
          options: options_3,
          onChange: onChange_7,
          onCancel: o
        }), t[18] = o, t[19] = onChange_7, t[20] = _;else _ = t[20];
        let W;
        if (t[21] !== k || t[22] !== b || t[23] !== _) W = e(Lf, {
          subtitle: "Verification",
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [k, b, _]
          })
        }), t[21] = k, t[22] = b, t[23] = _, t[24] = W;else W = t[24];
        return W;
      }
    case "error":
      {
        let E;
        if (t[25] === w) E = e(Tt, {
          status: "error",
          withSpace: !0
        }), t[25] = E;else E = t[25];
        let k;
        if (t[26] !== result_2.error) k = r(n, {
          children: [E, result_2.error]
        }), t[26] = result_2.error, t[27] = k;else k = t[27];
        let C;
        if (t[28] !== result_2.command) C = result_2.command && r(n, {
          bold: !0,
          color: "suggestion",
          children: ["    ", result_2.command]
        }), t[28] = result_2.command, t[29] = C;else C = t[29];
        let b;
        if (t[30] !== k || t[31] !== C) b = r(s, {
          flexDirection: "column",
          children: [k, C]
        }), t[30] = k, t[31] = C, t[32] = b;else b = t[32];
        let v;
        if (t[33] !== o || t[34] !== c) v = e(Jn, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: c,
          onCancel: o
        }), t[33] = o, t[34] = c, t[35] = v;else v = t[35];
        let T;
        if (t[36] !== b || t[37] !== v) T = e(Lf, {
          subtitle: "Verification failed",
          color: "error",
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [b, v]
          })
        }), t[36] = b, t[37] = v, t[38] = T;else T = t[38];
        return T;
      }
  }
}
function onComplete_3() {}
var steps = [ie, Ee, se, te, De, _e, pe, le];
function kGt(o) {
  let t = S(7),
    {
      onComplete: onComplete_2,
      onCancel: onCancel,
      exitOnCtrlCD: exitOnCtrlCD
    } = o,
    stepProps;
  if (t[0] !== onComplete_2) stepProps = {
    onComplete: onComplete_2
  }, t[0] = onComplete_2, t[1] = stepProps;else stepProps = t[1];
  let initialData;
  if (t[2] === w) initialData = {}, t[2] = initialData;else initialData = t[2];
  let h;
  if (t[3] !== exitOnCtrlCD || t[4] !== onCancel || t[5] !== stepProps) h = e(Bot, {
    steps: steps,
    stepProps: stepProps,
    initialData: initialData,
    onComplete: onComplete_3,
    onCancel: onCancel,
    exitOnCtrlCD: exitOnCtrlCD,
    title: "Set up Amazon Bedrock"
  }), t[3] = exitOnCtrlCD, t[4] = onCancel, t[5] = stepProps, t[6] = h;else h = t[6];
  return h;
}
export { kGt };