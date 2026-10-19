// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Fgt, Bje, jje, xx, tEe, Rln, xln, aWe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { fn, In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { zo } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { KC, Zb, XH, zO, r3n } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Vze, qze, tQ } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { gie } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { fVe, dp, Ac, PF, svt, ySn } from "B:/~BUN/root/chunk-bw9knkq3.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { oz } from "B:/~BUN/root/chunk-g7dr8rv2.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { lr } from "B:/~BUN/root/chunk-v8w1g8ga.js";
import { MP } from "B:/~BUN/root/chunk-v1edtzvj.js";
import { Wr } from "B:/~BUN/root/chunk-1rb7fvzn.js";
import { ls } from "B:/~BUN/root/chunk-fzhngknh.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Xr, $r, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { PTe } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { ve, S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
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
  let u = w(16),
    {
      goBack: o,
      goNext: goNext,
      updateWizardData: updateWizardData,
      wizardData: wizardData,
      title: title
    } = dp();
  const accessKeyId = wizardData.accessKeyId ?? "",
    secretAccessKey = wizardData.secretAccessKey ?? "",
    sessionToken = wizardData.sessionToken ?? "";
  let W;
  if (u[0] !== accessKeyId || u[1] !== secretAccessKey || u[2] !== sessionToken) W = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken: sessionToken
  }, u[0] = accessKeyId, u[1] = secretAccessKey, u[2] = sessionToken, u[3] = W;else W = u[3];
  let [values, D] = y(W),
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
  if (u[10] === S) onChange = (b, v) => D(T => ({
    ...T,
    [b]: v
  })), u[10] = onChange;else onChange = u[10];
  let _;
  if (u[11] !== o || u[12] !== onSubmit || u[13] !== title_2 || u[14] !== values) _ = e(oz, {
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
var R = {
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
  let l = w(9),
    {
      goBack: o,
      goToStep: goToStep,
      updateWizardData: updateWizardData_2
    } = dp(),
    t;
  if (l[0] === S) t = [{
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
  }], l[0] = t;else t = l[0];
  let options = t,
    g;
  if (l[1] === S) g = {
    profile: R.PROFILE,
    bearer: R.BEARER,
    accessKey: R.ACCESS_KEY_ID,
    environment: R.REGION
  }, l[1] = g;else g = l[1];
  let h = g,
    u;
  if (l[2] !== goToStep || l[3] !== updateWizardData_2) u = W => {
    let authMethod = W;
    updateWizardData_2({
      authMethod: authMethod
    }), goToStep(h[authMethod]);
  }, l[2] = goToStep, l[3] = updateWizardData_2, l[4] = u;else u = l[4];
  let onChange_2 = u,
    E;
  if (l[5] === S) E = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI."
  }), l[5] = E;else E = l[5];
  let k;
  if (l[6] !== o || l[7] !== onChange_2) k = e(Ac, {
    subtitle: "How do you authenticate to AWS?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [E, e(Xe, {
        options: options,
        onChange: onChange_2,
        onCancel: o
      })]
    })
  }), l[6] = o, l[7] = onChange_2, l[8] = k;else k = l[8];
  return k;
}
B();
function se() {
  let p = w(17),
    {
      goBack: goBack,
      goToStep: goToStep_2,
      updateWizardData: updateWizardData_3,
      wizardData: wizardData_2
    } = dp(),
    [value, onChange_3] = y(wizardData_2.bearerToken ?? ""),
    [cursorOffset, onChangeCursorOffset] = y(value.length),
    [error, W] = y(null),
    D;
  if (p[0] === S) D = {
    context: "Settings"
  }, p[0] = D;else D = p[0];
  rt("confirm:no", goBack, D);
  let E;
  if (p[1] !== goToStep_2 || p[2] !== updateWizardData_3 || p[3] !== value) E = () => {
    let bearerToken = value.trim();
    if (!bearerToken) {
      W("API key is required");
      return;
    }
    W(null), updateWizardData_3({
      bearerToken: bearerToken
    }), goToStep_2(R.REGION);
  }, p[1] = goToStep_2, p[2] = updateWizardData_3, p[3] = value, p[4] = E;else E = p[4];
  let onSubmit_2 = E,
    footerText;
  if (p[5] === S) footerText = r(Se, {
    children: [e(q, {
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
  if (p[6] === S) b = e(n, {
    children: "Paste your Bedrock API key."
  }), v = e(n, {
    dimColor: !0,
    children: "Generate one in the AWS console under Bedrock \u2192 API keys."
  }), p[6] = b, p[7] = v;else b = p[6], v = p[7];
  let T;
  if (p[8] !== cursorOffset || p[9] !== onSubmit_2 || p[10] !== value) T = e(s, {
    marginTop: 1,
    children: e(Lr, {
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
    children: e(ls, {
      error: error
    })
  }), p[12] = error, p[13] = _;else _ = p[13];
  let I;
  if (p[14] !== T || p[15] !== _) I = e(Ac, {
    subtitle: "Bedrock API key",
    footerText: footerText,
    children: r(s, {
      flexDirection: "column",
      children: [b, v, T, _]
    })
  }), p[14] = T, p[15] = _, p[16] = I;else I = p[16];
  return I;
}
B();
function Zr(H) {
  return H[1] !== void 0;
}
function eo(o) {
  let [children, U] = o;
  return r(n, {
    children: ["  ", e(n, {
      color: "suggestion",
      children: children
    }), " =", " ", ze.has(children) ? e(n, {
      dimColor: !0,
      children: "(hidden)"
    }) : U]
  }, children);
}
function Ie(o) {
  let d = {
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
      d.AWS_PROFILE = o.awsProfile;
      break;
    case "bearer":
      d.AWS_BEARER_TOKEN_BEDROCK = o.bearerToken;
      break;
    case "accessKey":
      if (d.AWS_ACCESS_KEY_ID = o.accessKeyId, d.AWS_SECRET_ACCESS_KEY = o.secretAccessKey, o.sessionToken) d.AWS_SESSION_TOKEN = o.sessionToken;
      break;
    case "environment":
    case void 0:
      break;
  }
  if (o.pinSonnet) d.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) d.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) d.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) d.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return d;
}
var ze = new Set(["AWS_BEARER_TOKEN_BEDROCK", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN"]);
function de(o) {
  let h = w(31),
    {
      onComplete: onComplete
    } = o,
    {
      storageV5: storageV5
    } = Oe(),
    {
      goBack: l,
      wizardData: wizardData_3
    } = dp(),
    [error_3, g] = y(null),
    u;
  if (h[0] === S) u = Es(fn("userSettings") ?? "~/.claude/settings.json"), h[0] = u;else u = h[0];
  let W = u,
    p;
  if (h[1] !== wizardData_3) p = Ie(wizardData_3), h[1] = wizardData_3, h[2] = p;else p = h[2];
  let env = p,
    E;
  if (h[3] !== env) E = Object.entries(env).filter(Zr), h[3] = env, h[4] = E;else E = h[4];
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
    } = await In("userSettings", {
      env: env
    }, void 0, storageV5);
    if (error_2) {
      f.current = !1, g(error_2.message);
      return;
    }
    i("tengu_bedrock_setup_complete", {
      auth_method: pe(wizardData_3.authMethod),
      pinned_models: Boolean(wizardData_3.pinSonnet || wizardData_3.pinOpus || wizardData_3.pinFable || wizardData_3.pinHaiku),
      verified: Boolean(wizardData_3.verifiedIdentity)
    }), onComplete(`Bedrock configuration saved to ${W}.${wizardData_3.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${wizardData_3.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`);
  }, h[5] = env, h[6] = onComplete, h[7] = storageV5, h[8] = wizardData_3.authMethod, h[9] = wizardData_3.awsProfile, h[10] = wizardData_3.pinFable, h[11] = wizardData_3.pinHaiku, h[12] = wizardData_3.pinOpus, h[13] = wizardData_3.pinSonnet, h[14] = wizardData_3.verifiedIdentity, h[15] = C;else C = h[15];
  let onConfirm = C,
    T;
  if (h[16] === S) T = r(n, {
    children: ["These will be written to ", W, " under env:"]
  }), h[16] = T;else T = h[16];
  let _;
  if (h[17] !== k) _ = e(s, {
    flexDirection: "column",
    children: k.map(eo)
  }), h[17] = k, h[18] = _;else _ = h[18];
  let I;
  if (h[19] !== wizardData_3.verifiedIdentity) I = wizardData_3.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [e(ft, {
      status: "success",
      withSpace: !0
    }), "Verified as ", wizardData_3.verifiedIdentity]
  }), h[19] = wizardData_3.verifiedIdentity, h[20] = I;else I = h[20];
  let j;
  if (h[21] !== error_3) j = e(ls, {
    error: error_3
  }), h[21] = error_3, h[22] = j;else j = h[22];
  let X;
  if (h[23] !== l || h[24] !== onConfirm) X = e(lr, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: onConfirm,
    onCancel: l
  }), h[23] = l, h[24] = onConfirm, h[25] = X;else X = h[25];
  let _e;
  if (h[26] !== _ || h[27] !== I || h[28] !== j || h[29] !== X) _e = e(Ac, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [T, _, I, j, X]
    })
  }), h[26] = _, h[27] = I, h[28] = j, h[29] = X, h[30] = _e;else _e = h[30];
  return _e;
}
var Ke = ve(PTe(), 1);
var Q = "Bedrock setup verification timed out";
function le(o) {
  let d = jje(o),
    c = l => {
      let bedrock = zo[l].bedrock;
      if (bedrock === null) throw Error("A DEFAULT_3P_*_KEY points at a model config with bedrock: null \u2014 Bedrock setup has no fallback id for that tier");
      return {
        needle: zo[l].firstParty,
        fallback: Bje(bedrock, d)
      };
    };
  return {
    sonnet: c(xx),
    opus: c(Rln),
    haiku: c(tEe),
    fable: c(xln)
  };
}
async function ue(o) {
  if (o.authMethod === "bearer") return to(o);
  let d = r3n();
  try {
    let credentials = await Le(o),
      t = {
        ...(await qze({
          url: `https://bedrock.${o.region}.amazonaws.com`,
          region: o.region,
          requestTimeoutMs: aWe
        })),
        region: o.region,
        ...(credentials && {
          credentials: credentials
        })
      },
      {
        STSClient: STSClient,
        GetCallerIdentityCommand: GetCallerIdentityCommand
      } = await import("B:/~BUN/root/chunk-wx6qhws2.js"),
      h = await Nt(new STSClient(t).send(new GetCallerIdentityCommand({})), d, Q),
      identity = h.Arn ?? h.UserId ?? "(unknown)",
      {
        BedrockClient: BedrockClient,
        ListInferenceProfilesCommand: ListInferenceProfilesCommand
      } = await import("B:/~BUN/root/chunk-wpxbjj4v.js"),
      D = new BedrockClient(t),
      profiles = [],
      nextToken;
    do {
      let f = await Nt(D.send(new ListInferenceProfilesCommand({
        ...(nextToken && {
          nextToken: nextToken
        }),
        typeEquals: "SYSTEM_DEFINED"
      })), d, Q);
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
      ...io(error, o, d)
    };
  }
}
async function fe(o, d) {
  return ySn(() => ro(o), d, c => c instanceof Error && (c.message === Q || Ue(c)) ? "network" : "auth");
}
async function ro(o) {
  let [{
      AnthropicBedrock: AnthropicBedrock
    }, {
      getProxyFetchOptions: getProxyFetchOptions
    }] = await Promise.all([import("B:/~BUN/root/chunk-fb2d3n3n.js"), import("B:/~BUN/root/chunk-46qp5t9y.js")]),
    l = {
      awsRegion: o.region,
      maxRetries: 0,
      fetchOptions: getProxyFetchOptions({
        url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o.region}.amazonaws.com`
      })
    },
    t = await oo(o),
    m = gie(),
    g = {
      authToken: null,
      defaultHeaders: {
        ...m,
        ...Zb(),
        ...XH(),
        Authorization: null,
        ...(!KC() && {
          "X-Api-Key": null
        })
      },
      ...zO
    };
  switch (t.kind) {
    case "bearer":
      return new AnthropicBedrock({
        ...l,
        apiKey: t.token,
        defaultHeaders: {
          ...m,
          ...Zb(),
          ...XH(),
          Authorization: `Bearer ${t.token}`,
          ...(!KC() && {
            "X-Api-Key": null
          })
        }
      });
    case "sigv4":
      return new AnthropicBedrock({
        ...l,
        ...g,
        awsAccessKey: t.accessKeyId,
        awsSecretKey: t.secretAccessKey,
        awsSessionToken: t.sessionToken
      });
    case "default":
      {
        let h = a.AWS_BEARER_TOKEN_BEDROCK;
        if (h) return new AnthropicBedrock({
          ...l,
          apiKey: h,
          defaultHeaders: {
            ...m,
            ...Zb(),
            ...XH(),
            Authorization: `Bearer ${h}`,
            ...(!KC() && {
              "X-Api-Key": null
            })
          }
        });
        return new AnthropicBedrock({
          ...l,
          ...g,
          providerChainResolver: () => Fe(o, void 0)
        });
      }
  }
}
async function oo(o) {
  if (o.authMethod === "bearer") return {
    kind: "bearer",
    token: o.bearerToken
  };
  let d = await Le(o);
  if (!d) return {
    kind: "default"
  };
  let c = await d();
  return {
    kind: "sigv4",
    accessKeyId: c.accessKeyId,
    secretAccessKey: c.secretAccessKey,
    sessionToken: c.sessionToken
  };
}
async function to(o) {
  let fallback = le(o.region).haiku.fallback,
    c = await fe(o, fallback);
  if (c.ok) return {
    status: "ok",
    identity: "Bedrock API key",
    profiles: [],
    note: `Test request to ${fallback} succeeded.`
  };
  switch (c.reason) {
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
async function Le(o) {
  switch (o.authMethod) {
    case "profile":
      return Fe(o, o.awsProfile);
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
async function Fe(o, profile) {
  let [{
      fromNodeProviderChain: fromNodeProviderChain
    }, l] = await Promise.all([import("B:/~BUN/root/chunk-p2g0ykxb.js"), tQ({
      url: Vze(String(o.region)),
      requestTimeoutMs: aWe
    })]),
    requestHandler = l ?? new Ke.FetchHttpHandler({
      requestTimeout: aWe
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
  return g => Nt(m(g), r3n(), Q);
}
function Ue(o) {
  return o?.name === "TimeoutError" || o?.name === "CredentialsProviderError" && (o.message ?? "").startsWith("TimeoutError:");
}
function io(o, d, c) {
  let l = o,
    t = l?.name ?? "Error",
    m = l?.message ?? String(o);
  if (m === Q) return {
    error: `Timed out after ${Math.ceil(c / 1000)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.`
  };
  if (Ue(l)) return {
    error: "A request to AWS timed out. Check your network and proxy settings, then try again."
  };
  let command = d.authMethod === "profile" ? `aws sso login --profile ${d.awsProfile}` : void 0;
  switch (t) {
    case "CredentialsProviderError":
      return d.authMethod === "profile" ? {
        error: `Could not load credentials for profile "${d.awsProfile}". If this is an SSO profile, run:`,
        command: command
      } : {
        error: `No AWS credentials found. ${m}`
      };
    case "ExpiredTokenException":
    case "TokenRefreshRequired":
      return d.authMethod === "profile" ? {
        error: "SSO session expired. Run:",
        command: command
      } : {
        error: `Credentials expired. ${m}`
      };
    case "ForbiddenException":
      return d.authMethod === "profile" ? {
        error: `SSO portal denied access to the role for profile "${d.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`
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
        error: `Cannot reach AWS in region "${d.region}". Check the region name and your network.`
      };
    default:
      return {
        error: `${t}: ${m}`
      };
  }
}
function He(o, d) {
  return (o.discoveredProfiles ?? []).filter(item => item.toLowerCase().includes(d));
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
    let d = le(o.region),
      c = jje(o.region);
    return Object.fromEntries(PF.map(item => [item, {
      auto: Fgt(o.discoveredProfiles ?? [], d[item].needle, c) ?? void 0,
      fallback: d[item].fallback
    }]));
  },
  listTierCandidates: (o, d) => He(d, o).sort().reverse(),
  pickerSubtitle: (o, d) => {
    let c = He(d, o).length;
    return c > 0 ? `${c} ${MP[o]} ${O(c, "profile")} in your account \xB7 each tested with a one-token request.` : `No ${MP[o]} profiles found in your account.`;
  },
  probe: (o, d) => fe(o, d)
};
function me() {
  let d = w(2),
    {
      updateWizardData: o
    } = dp(),
    c;
  if (d[0] !== o) c = e(svt, {
    provider: provider,
    onPins: o
  }), d[0] = o, d[1] = c;else c = d[1];
  return c;
}
B();
import { readFile as so } from "fs/promises";
import { homedir as ao } from "os";
import { join as Ve } from "path";
async function ge() {
  let o = new Set(),
    d = ao();
  for (let {
    path: path,
    re: re
  } of [{
    path: Ve(d, ".aws", "config"),
    re: /^\[(?:profile\s+)?([^\]]+)\]/gm
  }, {
    path: Ve(d, ".aws", "credentials"),
    re: /^\[([^\]]+)\]/gm
  }]) try {
    for (let t of (await so(path, "utf8")).matchAll(re)) {
      let m = t[1]?.trim();
      if (m && !m.startsWith("sso-session ")) o.add(m);
    }
  } catch {}
  return [...o].sort();
}
function Ao() {
  return [];
}
function Eo() {
  return ge().catch(Ao);
}
function Do(Ko) {
  return Ko.toLowerCase().includes("bedrock");
}
function wo(gr) {
  return {
    label: gr,
    value: gr
  };
}
var value_2 = "__manual__",
  qe = 12;
function Ee() {
  let d = w(3),
    [profilesPromise] = y(Eo),
    fallback_2;
  if (d[0] === S) fallback_2 = e(Ac, {
    subtitle: "AWS profile",
    children: e(Wr, {
      message: "Reading ~/.aws/config\u2026"
    })
  }), d[0] = fallback_2;else fallback_2 = d[0];
  let l;
  if (d[1] !== profilesPromise) l = e(Xr, {
    fallback: fallback_2,
    children: e(Ce, {
      profilesPromise: profilesPromise
    })
  }), d[1] = profilesPromise, d[2] = l;else l = d[2];
  return l;
}
function Ce(o) {
  let u = w(52),
    {
      profilesPromise: profilesPromise_2
    } = o,
    c = $r(profilesPromise_2),
    {
      goBack: l,
      goToStep: goToStep_3,
      updateWizardData: updateWizardData_4,
      wizardData: wizardData_4
    } = dp(),
    h = c.length > qe,
    W;
  if (u[0] !== c || u[1] !== wizardData_4.awsProfile) W = wizardData_4.awsProfile && !c.includes(wizardData_4.awsProfile), u[0] = c, u[1] = wizardData_4.awsProfile, u[2] = W;else W = u[2];
  let p = Boolean(W),
    [isActive, E] = y(c.length === 0 || h || p),
    k;
  if (u[3] !== c || u[4] !== h) k = h ? c.find(Do) : void 0, u[3] = c, u[4] = h, u[5] = k;else k = u[5];
  let f = k,
    [value_3, onChange_5] = y(wizardData_4.awsProfile ?? f ?? ""),
    [cursorOffset_2, onChangeCursorOffset_2] = y(value_3.length),
    [error_4, I] = y(null),
    j;
  if (u[6] !== isActive) j = {
    context: "Settings",
    isActive: isActive
  }, u[6] = isActive, u[7] = j;else j = u[7];
  rt("confirm:no", l, j);
  let X;
  if (u[8] !== goToStep_3 || u[9] !== updateWizardData_4) X = awsProfile => {
    updateWizardData_4({
      awsProfile: awsProfile
    }), goToStep_3(R.REGION);
  }, u[8] = goToStep_3, u[9] = updateWizardData_4, u[10] = X;else X = u[10];
  let H = X;
  if (!isActive) {
    const V = c.length;
    let U;
    if (u[11] !== c.length) U = O(c.length, "profile"), u[11] = c.length, u[12] = U;else U = u[12];
    let Y;
    if (u[13] !== c.length || u[14] !== U) Y = r(n, {
      dimColor: !0,
      children: ["Found ", V, " ", U, " in ~/.aws/config and ~/.aws/credentials."]
    }), u[13] = c.length, u[14] = U, u[15] = Y;else Y = u[15];
    let options_2;
    if (u[16] !== c) {
      let x;
      if (u[18] === S) x = {
        label: "Type a different name\u2026",
        value: value_2
      }, u[18] = x;else x = u[18];
      options_2 = [...c.map(wo), x];
      u[16] = c, u[17] = options_2;
    } else options_2 = u[17];
    let defaultValue;
    if (u[19] !== c || u[20] !== wizardData_4.awsProfile) defaultValue = wizardData_4.awsProfile && c.includes(wizardData_4.awsProfile) ? wizardData_4.awsProfile : void 0, u[19] = c, u[20] = wizardData_4.awsProfile, u[21] = defaultValue;else defaultValue = u[21];
    let onChange_4;
    if (u[22] !== H) onChange_4 = mr => {
      if (mr === value_2) E(!0);else H(mr);
    }, u[22] = H, u[23] = onChange_4;else onChange_4 = u[23];
    let F;
    if (u[24] !== l || u[25] !== onChange_4 || u[26] !== options_2 || u[27] !== defaultValue) F = e(Xe, {
      options: options_2,
      defaultValue: defaultValue,
      onChange: onChange_4,
      onCancel: l
    }), u[24] = l, u[25] = onChange_4, u[26] = options_2, u[27] = defaultValue, u[28] = F;else F = u[28];
    let J;
    if (u[29] !== F || u[30] !== Y) J = e(Ac, {
      subtitle: "AWS profile",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [Y, F]
      })
    }), u[29] = F, u[30] = Y, u[31] = J;else J = u[31];
    return J;
  }
  let V;
  if (u[32] !== H || u[33] !== value_3) V = () => {
    let pr = value_3.trim();
    if (!pr) {
      I("Profile name is required");
      return;
    }
    I(null), H(pr);
  }, u[32] = H, u[33] = value_3, u[34] = V;else V = u[34];
  let onSubmit_3 = V,
    footerText_2;
  if (u[35] === S) footerText_2 = r(Se, {
    children: [e(q, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), u[35] = footerText_2;else footerText_2 = u[35];
  let Y;
  if (u[36] === S) Y = e(n, {
    children: "The name from ~/.aws/config (after [profile \u2026])."
  }), u[36] = Y;else Y = u[36];
  let K;
  if (u[37] !== f || u[38] !== c.length || u[39] !== h) K = h && r(n, {
    dimColor: !0,
    children: ["Found ", c.length, " profiles \u2014 too many to list.", f && ` Prepopulated with "${f}".`]
  }), u[37] = f, u[38] = c.length, u[39] = h, u[40] = K;else K = u[40];
  let x;
  if (u[41] === S) x = e(n, {
    dimColor: !0,
    children: "If this is an SSO profile, run `aws sso login --profile NAME` first."
  }), u[41] = x;else x = u[41];
  let L;
  if (u[42] !== cursorOffset_2 || u[43] !== onSubmit_3 || u[44] !== value_3) L = e(s, {
    marginTop: 1,
    children: e(Lr, {
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
  }), u[42] = cursorOffset_2, u[43] = onSubmit_3, u[44] = value_3, u[45] = L;else L = u[45];
  let F;
  if (u[46] !== error_4) F = error_4 && e(s, {
    marginTop: 1,
    children: e(ls, {
      error: error_4
    })
  }), u[46] = error_4, u[47] = F;else F = u[47];
  let J;
  if (u[48] !== L || u[49] !== F || u[50] !== K) J = e(Ac, {
    subtitle: "AWS profile name",
    footerText: footerText_2,
    children: r(s, {
      flexDirection: "column",
      children: [Y, K, x, L, F]
    })
  }), u[48] = L, u[49] = F, u[50] = K, u[51] = J;else J = u[51];
  return J;
}
B();
function De() {
  let p = w(17),
    {
      goBack: goBack_2,
      goNext: goNext_2,
      updateWizardData: updateWizardData_5,
      wizardData: wizardData_5
    } = dp(),
    [value_4, onChange_6] = y(wizardData_5.region ?? "us-east-1"),
    [cursorOffset_3, onChangeCursorOffset_3] = y(value_4.length),
    [error_5, W] = y(null),
    D;
  if (p[0] === S) D = {
    context: "Settings"
  }, p[0] = D;else D = p[0];
  rt("confirm:no", goBack_2, D);
  let E;
  if (p[1] !== goNext_2 || p[2] !== updateWizardData_5 || p[3] !== value_4) E = () => {
    let region = value_4.trim();
    if (!region) {
      W("Region is required");
      return;
    }
    W(null), updateWizardData_5({
      region: region
    }), goNext_2();
  }, p[1] = goNext_2, p[2] = updateWizardData_5, p[3] = value_4, p[4] = E;else E = p[4];
  let onSubmit_4 = E,
    footerText_3;
  if (p[5] === S) footerText_3 = r(Se, {
    children: [e(q, {
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
  if (p[6] === S) b = e(n, {
    children: "Where your Bedrock models are enabled."
  }), v = e(n, {
    dimColor: !0,
    children: "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region."
  }), p[6] = b, p[7] = v;else b = p[6], v = p[7];
  let T;
  if (p[8] !== cursorOffset_3 || p[9] !== onSubmit_4 || p[10] !== value_4) T = e(s, {
    marginTop: 1,
    children: e(Lr, {
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
    children: e(ls, {
      error: error_5
    })
  }), p[12] = error_5, p[13] = _;else _ = p[13];
  let I;
  if (p[14] !== T || p[15] !== _) I = e(Ac, {
    subtitle: "AWS region",
    footerText: footerText_3,
    children: r(s, {
      flexDirection: "column",
      children: [b, v, T, _]
    })
  }), p[14] = T, p[15] = _, p[16] = I;else I = p[16];
  return I;
}
B();
function we() {
  let t = w(39),
    {
      goBack: o,
      goNext: d,
      updateWizardData: updateWizardData_6,
      wizardData: wizardData_6
    } = dp(),
    m;
  if (t[0] === S) m = {
    phase: "checking"
  }, t[0] = m;else m = t[0];
  let [g, h] = y(m),
    u;
  if (t[1] !== updateWizardData_6 || t[2] !== wizardData_6) u = () => {
    let W = !1;
    return ue(wizardData_6).then(result => {
      if (W) {
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
      W = !0;
    };
  }, t[1] = updateWizardData_6, t[2] = wizardData_6, t[3] = u;else u = t[3];
  let D;
  if (t[4] === S) D = [], t[4] = D;else D = t[4];
  if (P(u, D), g.phase === "checking") {
    const message = wizardData_6.authMethod === "bearer" ? "Sending a test request to Bedrock\u2026" : "Calling AWS STS and Bedrock\u2026";
    let k;
    if (t[5] !== message) k = e(Ac, {
      subtitle: "Verifying credentials",
      children: e(Wr, {
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
        if (t[7] === S) E = e(ft, {
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
        if (t[10] !== result_2.note || t[11] !== result_2.profiles) children_2 = result_2.note ?? (result_2.profiles.length > 0 ? `Found ${result_2.profiles.length} Anthropic inference ${O(result_2.profiles.length, "profile")} in this region.` : "No Anthropic inference profiles found in this region. You may still proceed \u2014 model defaults will use the built-in IDs."), t[10] = result_2.note, t[11] = result_2.profiles, t[12] = children_2;else children_2 = t[12];
        let b;
        if (t[13] !== children_2) b = e(n, {
          dimColor: !0,
          children: children_2
        }), t[13] = children_2, t[14] = b;else b = t[14];
        let options_3;
        if (t[15] === S) options_3 = [{
          label: "Continue",
          value: "continue"
        }], t[15] = options_3;else options_3 = t[15];
        let onChange_7;
        if (t[16] !== d) onChange_7 = () => d(), t[16] = d, t[17] = onChange_7;else onChange_7 = t[17];
        let _;
        if (t[18] !== o || t[19] !== onChange_7) _ = e(Xe, {
          options: options_3,
          onChange: onChange_7,
          onCancel: o
        }), t[18] = o, t[19] = onChange_7, t[20] = _;else _ = t[20];
        let I;
        if (t[21] !== k || t[22] !== b || t[23] !== _) I = e(Ac, {
          subtitle: "Verification",
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [k, b, _]
          })
        }), t[21] = k, t[22] = b, t[23] = _, t[24] = I;else I = t[24];
        return I;
      }
    case "error":
      {
        let E;
        if (t[25] === S) E = e(ft, {
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
        if (t[33] !== o || t[34] !== d) v = e(lr, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: d,
          onCancel: o
        }), t[33] = o, t[34] = d, t[35] = v;else v = t[35];
        let T;
        if (t[36] !== b || t[37] !== v) T = e(Ac, {
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
var steps = [ie, Ee, se, te, De, we, me, de];
function ovt(o) {
  let t = w(7),
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
  if (t[2] === S) initialData = {}, t[2] = initialData;else initialData = t[2];
  let h;
  if (t[3] !== exitOnCtrlCD || t[4] !== onCancel || t[5] !== stepProps) h = e(fVe, {
    steps: steps,
    stepProps: stepProps,
    initialData: initialData,
    onComplete: onComplete_3,
    onCancel: onCancel,
    exitOnCtrlCD: exitOnCtrlCD,
    title: "Set up Amazon Bedrock",
    showStepCounter: !1
  }), t[3] = exitOnCtrlCD, t[4] = onCancel, t[5] = stepProps, t[6] = h;else h = t[6];
  return h;
}
export { ovt };