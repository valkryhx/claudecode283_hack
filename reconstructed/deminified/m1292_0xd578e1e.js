// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { F9e } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ze } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { e$, dce, tHt, nHt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { wr, ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Io } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { dC } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { xPe, gd, Jl, tO, oJe } from "B:/~BUN/root/chunk-vw863d4k.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { uit, Yme, Xme } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { yT } from "B:/~BUN/root/chunk-acsg9bv8.js";
import { kn } from "B:/~BUN/root/chunk-87fmbjg1.js";
import { ko } from "B:/~BUN/root/chunk-v1xd9kf3.js";
import { ur } from "B:/~BUN/root/chunk-ehewxxqw.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Sr, mr, R, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Jt } from "B:/~BUN/root/chunk-r833zsf7.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
var k = {
  AUTH_METHOD: 0,
  SERVICE_ACCOUNT: 1,
  PROJECT: 2,
  REGION: 3,
  VERIFY: 4,
  PIN_MODELS: 5,
  CONFIRM: 6
};
function re() {
  let t = w(10),
    {
      goBack: o,
      goToStep: goToStep,
      updateWizardData: updateWizardData,
      wizardData: wizardData
    } = gd(),
    C;
  if (t[0] === S) C = [{
    label: "Application Default Credentials (gcloud auth)",
    value: "adc"
  }, {
    label: "Service account key file",
    value: "serviceAccount"
  }, {
    label: "Use credentials already in my environment",
    value: "environment"
  }], t[0] = C;else C = t[0];
  let options = C,
    f;
  if (t[1] === S) f = {
    adc: k.PROJECT,
    serviceAccount: k.SERVICE_ACCOUNT,
    environment: k.PROJECT
  }, t[1] = f;else f = t[1];
  let u = f,
    P;
  if (t[2] !== goToStep || t[3] !== updateWizardData) P = h => {
    let authMethod = h;
    updateWizardData({
      authMethod: authMethod
    }), goToStep(u[authMethod]);
  }, t[2] = goToStep, t[3] = updateWizardData, t[4] = P;else P = t[4];
  let onChange = P,
    d;
  if (t[5] === S) d = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
  }), t[5] = d;else d = t[5];
  let y;
  if (t[6] !== o || t[7] !== onChange || t[8] !== wizardData.authMethod) y = e(Jl, {
    subtitle: "How do you authenticate to Google Cloud?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [d, e(Fe, {
        options: options,
        defaultValue: wizardData.authMethod,
        onChange: onChange,
        onCancel: o
      })]
    })
  }), t[6] = o, t[7] = onChange, t[8] = wizardData.authMethod, t[9] = y;else y = t[9];
  return y;
}
N();
function St(Q) {
  return Q[1] !== void 0;
}
function Pt(o) {
  let [children, G] = o;
  return r(n, {
    children: ["  ", e(n, {
      color: "suggestion",
      children: children
    }), " = ", G]
  }, children);
}
function _e(o) {
  let l = {
    CLAUDE_CODE_USE_VERTEX: "1",
    CLAUDE_CODE_USE_BEDROCK: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    CLAUDE_CODE_USE_MANTLE: void 0,
    ANTHROPIC_VERTEX_PROJECT_ID: o.projectId,
    CLOUD_ML_REGION: o.region,
    GOOGLE_APPLICATION_CREDENTIALS: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0
  };
  if (o.authMethod === "serviceAccount") l.GOOGLE_APPLICATION_CREDENTIALS = o.keyFile;
  if (o.pinSonnet) l.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) l.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) l.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) l.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return l;
}
function ie(o) {
  let f = w(30),
    {
      onComplete: onComplete
    } = o,
    {
      storageV5: storageV5
    } = ke(),
    {
      goBack: m,
      wizardData: wizardData_2
    } = gd(),
    [error_2, p] = g(null),
    u;
  if (f[0] === S) u = xa(wr("userSettings") ?? "~/.claude/settings.json"), f[0] = u;else u = f[0];
  let P = u,
    h;
  if (f[1] !== wizardData_2) h = _e(wizardData_2), f[1] = wizardData_2, f[2] = h;else h = f[2];
  let env = h,
    A;
  if (f[3] !== env) A = Object.entries(env).filter(St), f[3] = env, f[4] = A;else A = f[4];
  let d = A,
    y = T(!1),
    x;
  if (f[5] !== env || f[6] !== onComplete || f[7] !== storageV5 || f[8] !== wizardData_2.authMethod || f[9] !== wizardData_2.pinFable || f[10] !== wizardData_2.pinHaiku || f[11] !== wizardData_2.pinOpus || f[12] !== wizardData_2.pinSonnet || f[13] !== wizardData_2.verifiedIdentity) x = async () => {
    if (y.current) {
      return;
    }
    y.current = !0;
    let {
      error: error
    } = await ln("userSettings", {
      env: env
    }, void 0, storageV5);
    if (error) {
      y.current = !1, p(error.message);
      return;
    }
    i("tengu_vertex_setup_complete", {
      auth_method: ue(wizardData_2.authMethod),
      pinned_models: Boolean(wizardData_2.pinSonnet || wizardData_2.pinOpus || wizardData_2.pinFable || wizardData_2.pinHaiku),
      verified: Boolean(wizardData_2.verifiedIdentity)
    }), onComplete(`Vertex AI configuration saved to ${P}.${wizardData_2.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`);
  }, f[5] = env, f[6] = onComplete, f[7] = storageV5, f[8] = wizardData_2.authMethod, f[9] = wizardData_2.pinFable, f[10] = wizardData_2.pinHaiku, f[11] = wizardData_2.pinOpus, f[12] = wizardData_2.pinSonnet, f[13] = wizardData_2.verifiedIdentity, f[14] = x;else x = f[14];
  let onConfirm = x,
    v;
  if (f[15] === S) v = r(n, {
    children: ["These will be written to ", P, " under env:"]
  }), f[15] = v;else v = f[15];
  let E;
  if (f[16] !== d) E = e(s, {
    flexDirection: "column",
    children: d.map(Pt)
  }), f[16] = d, f[17] = E;else E = f[17];
  let b;
  if (f[18] !== wizardData_2.verifiedIdentity) b = wizardData_2.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [e(et, {
      status: "success",
      withSpace: !0
    }), "Verified as ", wizardData_2.verifiedIdentity]
  }), f[18] = wizardData_2.verifiedIdentity, f[19] = b;else b = f[19];
  let W;
  if (f[20] !== error_2) W = e(ko, {
    error: error_2
  }), f[20] = error_2, f[21] = W;else W = f[21];
  let X;
  if (f[22] !== m || f[23] !== onConfirm) X = e(qn, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: onConfirm,
    onCancel: m
  }), f[22] = m, f[23] = onConfirm, f[24] = X;else X = f[24];
  let U;
  if (f[25] !== E || f[26] !== b || f[27] !== W || f[28] !== X) U = e(Jl, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [v, E, b, W, X]
    })
  }), f[25] = E, f[26] = b, f[27] = W, f[28] = X, f[29] = U;else U = f[29];
  return U;
}
function ae() {
  return {
    sonnet: Io[e$].vertex,
    opus: Io[tHt].vertex,
    haiku: Io[dce].vertex,
    fable: Io[nHt].vertex
  };
}
function Ie(o) {
  let l = new Set();
  for (let c of Object.values(Io)) if (c.vertex !== null && c.vertex.toLowerCase().includes(o)) l.add(c.vertex);
  return [...l].sort().reverse();
}
function be(o) {
  if (o.authMethod === "serviceAccount" && o.keyFile) return {
    kind: "keyFile",
    path: o.keyFile
  };
  return {
    kind: "default"
  };
}
var It = 12000;
async function se(o) {
  let identity;
  try {
    let t = await uit(be(o), o.projectId),
      C = (async () => {
        await (await t.getClient()).getAccessToken();
      })();
    await Ht(C, It, "Timed out waiting for GCP credentials");
    let p;
    try {
      p = (await t.getCredentials()).client_email;
    } catch {
      p = void 0;
    }
    identity = p ?? (o.authMethod === "serviceAccount" ? `service account (${o.keyFile})` : "Application Default Credentials");
  } catch (error) {
    return {
      status: "error",
      ...Rt(error, o)
    };
  }
  let haiku = ae().haiku,
    m = await ce(o, haiku);
  if (m.ok) return {
    status: "ok",
    identity: identity,
    note: `Test request to ${haiku} succeeded.`
  };
  switch (m.reason) {
    case "auth":
      return {
        status: "error",
        error: "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope."
      };
    case "permission":
      return {
        status: "error",
        error: `Permission denied calling Vertex AI in project "${o.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.`
      };
    case "model":
      return {
        status: "ok",
        identity: identity,
        note: `Credentials work, but ${haiku} returned not-found in ${o.region}. Pin a model you have access to on the next step, or try the 'global' region.`
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Vertex AI in region "${o.region}". Check the region name and your network.`
      };
    case "other":
      return {
        status: "ok",
        identity: identity,
        note: `Credentials work, but the test request to ${haiku} failed. You can pin a different model on the next step.`
      };
  }
}
async function ce(o, l) {
  let c;
  try {
    c = await bt(o);
  } catch {
    return {
      ok: !1,
      reason: "auth"
    };
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
    };
  } catch (error) {
    let t = error?.status;
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
    };
  }
}
async function bt(o) {
  let [{
      AnthropicVertex: AnthropicVertex
    }, {
      getProxyFetchOptions: getProxyFetchOptions
    }] = await Promise.all([import("B:/~BUN/root/chunk-djye8fpa.js"), import("B:/~BUN/root/chunk-nxjptnfx.js")]),
    googleAuth = await uit(be(o), o.projectId);
  return Yme(new AnthropicVertex({
    region: o.region,
    projectId: o.projectId,
    googleAuth: googleAuth,
    maxRetries: 0,
    defaultHeaders: Xme(),
    ...dC,
    timeout: 15000,
    fetchOptions: getProxyFetchOptions({
      url: a.ANTHROPIC_VERTEX_BASE_URL || F9e(o.region)
    })
  }));
}
var command = "gcloud auth application-default login";
function Rt(o, l) {
  let error_3 = o?.message ?? String(o);
  if (l.authMethod === "serviceAccount" && /ENOENT|no such file/i.test(error_3)) return {
    error: `Service account key file not found: ${l.keyFile}`
  };
  if (/Could not load the default credentials/i.test(error_3)) return l.authMethod === "adc" ? {
    error: "No Application Default Credentials found. Run:",
    command: command
  } : {
    error: "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login."
  };
  if (/invalid_grant|Token has been expired|reauth/i.test(error_3)) {
    if (l.authMethod === "serviceAccount") return {
      error: "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key)."
    };
    if (l.authMethod === "adc") return {
      error: "GCP credentials expired. Run:",
      command: command
    };
    return {
      error: "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file)."
    };
  }
  if (/Unable to detect a Project Id/i.test(error_3)) return {
    error: "Could not determine a GCP project from the credentials. Go back and set the project ID explicitly."
  };
  if (/Timed out waiting for GCP/i.test(error_3)) return {
    error: "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).",
    ...(l.authMethod === "adc" && {
      command: command
    })
  };
  return {
    error: error_3
  };
}
var provider = {
  reasonLabel: {
    auth: "auth failed",
    permission: "no aiplatform.endpoints.predict permission",
    model: "not enabled in this project",
    network: "unreachable",
    other: "request failed"
  },
  intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if it is not yet available in your project \u2014 Claude Code will fail to connect to Vertex AI until you enable the model or pin to one you have.",
  resolveTierDefaults: () => {
    let o = ae();
    return Object.fromEntries(tO.map(item => [item, {
      fallback: o[item]
    }]));
  },
  listTierCandidates: o => Ie(o),
  pickerSubtitle: o => `Available ${yT[o]} versions on Vertex AI \xB7 each tested with a one-token request.`,
  preferOnSettle: ["current", "fallback"],
  probe: (o, l) => ce(o, l)
};
function le() {
  let l = w(2),
    {
      updateWizardData: o
    } = gd(),
    c;
  if (l[0] !== o) c = e(oJe, {
    provider: provider,
    onPins: o
  }), l[0] = o, l[1] = c;else c = l[1];
  return c;
}
N();
import { readdir as wt, readFile as Ve } from "fs/promises";
import { homedir as zt } from "os";
import { join as q } from "path";
async function de() {
  let o = new Set(),
    l = a.CLOUDSDK_CONFIG ?? Lt();
  try {
    let c = q(l, "configurations");
    for (let m of await wt(c)) {
      if (!m.startsWith("config_")) continue;
      try {
        let t = await Ve(q(c, m), "utf8");
        for (let C of t.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let p = C[1]?.trim();
          if (p) o.add(p);
        }
      } catch {}
    }
  } catch {}
  try {
    let c = J(await Ve(q(l, "application_default_credentials.json"), "utf8"));
    if (c.quota_project_id) o.add(c.quota_project_id);
  } catch {}
  return [...o].sort();
}
function Lt() {
  if (a.APPDATA) return q(a.APPDATA, "gcloud");
  return q(zt(), ".config", "gcloud");
}
function Zt() {
  return [];
}
function Qt() {
  return de().catch(Zt);
}
function er(label) {
  return e(kn.Item, {
    label: label
  }, label);
}
var we = "__manual__",
  Le = 12;
function fe() {
  let l = w(3),
    [projectsPromise] = g(Qt),
    fallback;
  if (l[0] === S) fallback = e(Jl, {
    subtitle: "GCP project",
    children: e(ur, {
      message: "Reading ~/.config/gcloud\u2026"
    })
  }), l[0] = fallback;else fallback = l[0];
  let m;
  if (l[1] !== projectsPromise) m = e(Sr, {
    fallback: fallback,
    children: e(pe, {
      projectsPromise: projectsPromise
    })
  }), l[1] = projectsPromise, l[2] = m;else m = l[2];
  return m;
}
function pe(o) {
  let u = w(48),
    {
      projectsPromise: projectsPromise_2
    } = o,
    c = mr(projectsPromise_2),
    {
      goBack: goBack,
      goToStep: goToStep_2,
      updateWizardData: updateWizardData_2,
      wizardData: wizardData_3
    } = gd(),
    f = c.length > Le,
    P;
  if (u[0] !== c || u[1] !== wizardData_3.projectId) P = wizardData_3.projectId && !c.includes(wizardData_3.projectId), u[0] = c, u[1] = wizardData_3.projectId, u[2] = P;else P = u[2];
  let h = Boolean(P),
    [_, A] = g(c.length === 0 || f || h),
    [value, onChange_2] = g(wizardData_3.projectId ?? ""),
    [cursorOffset, onChangeCursorOffset] = g(value.length),
    [error_4, v] = g(null);
  const context = _ ? "Settings" : "Confirmation";
  let b;
  if (u[3] !== context) b = {
    context: context
  }, u[3] = context, u[4] = b;else b = u[4];
  ze("confirm:no", goBack, b);
  let W;
  if (u[5] !== goToStep_2 || u[6] !== updateWizardData_2) W = projectId => {
    updateWizardData_2({
      projectId: projectId
    }), goToStep_2(k.REGION);
  }, u[5] = goToStep_2, u[6] = updateWizardData_2, u[7] = W;else W = u[7];
  let U = W;
  if (!_) {
    const Q = c.length;
    let L;
    if (u[8] !== c.length) L = I(c.length, "project"), u[8] = c.length, u[9] = L;else L = u[9];
    let G;
    if (u[10] !== c.length || u[11] !== L) G = r(n, {
      dimColor: !0,
      children: ["Found ", Q, " ", L, " in your gcloud configurations."]
    }), u[10] = c.length, u[11] = L, u[12] = G;else G = u[12];
    let H;
    if (u[13] !== c || u[14] !== wizardData_3.projectId) H = c.indexOf(wizardData_3.projectId ?? ""), u[13] = c, u[14] = wizardData_3.projectId, u[15] = H;else H = u[15];
    const defaultFocusIndex = Math.max(0, H);
    let onSelect;
    if (u[16] !== c || u[17] !== U) onSelect = kr => {
      let st = c[kr];
      if (st === void 0) A(!0);else U(st);
    }, u[16] = c, u[17] = U, u[18] = onSelect;else onSelect = u[18];
    let M;
    if (u[19] !== c) M = c.map(er), u[19] = c, u[20] = M;else M = u[20];
    let Z;
    if (u[21] === S) Z = e(kn.Item, {
      label: "Type a different project\u2026"
    }, we), u[21] = Z;else Z = u[21];
    let te;
    if (u[22] !== onSelect || u[23] !== M || u[24] !== defaultFocusIndex) te = r(kn, {
      defaultFocusIndex: defaultFocusIndex,
      onSelect: onSelect,
      children: [M, Z]
    }), u[22] = onSelect, u[23] = M, u[24] = defaultFocusIndex, u[25] = te;else te = u[25];
    let ct;
    if (u[26] !== te || u[27] !== G) ct = e(Jl, {
      subtitle: "GCP project",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [G, te]
      })
    }), u[26] = te, u[27] = G, u[28] = ct;else ct = u[28];
    return ct;
  }
  let Q;
  if (u[29] !== U || u[30] !== value) Q = () => {
    let lt = value.trim();
    if (!lt) {
      v("Project ID is required");
      return;
    }
    v(null), U(lt);
  }, u[29] = U, u[30] = value, u[31] = Q;else Q = u[31];
  let onSubmit = Q,
    footerText;
  if (u[32] === S) footerText = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), u[32] = footerText;else footerText = u[32];
  let G;
  if (u[33] === S) G = e(n, {
    children: "The project where Vertex AI is enabled."
  }), u[33] = G;else G = u[33];
  let H;
  if (u[34] !== c.length || u[35] !== f) H = f && r(n, {
    dimColor: !0,
    children: ["Found ", c.length, " projects \u2014 too many to list."]
  }), u[34] = c.length, u[35] = f, u[36] = H;else H = u[36];
  let K;
  if (u[37] === S) K = e(n, {
    dimColor: !0,
    children: "Find it with `gcloud config get-value project` or in the GCP console header."
  }), u[37] = K;else K = u[37];
  let j;
  if (u[38] !== cursorOffset || u[39] !== onSubmit || u[40] !== value) j = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: value,
      onChange: onChange_2,
      onSubmit: onSubmit,
      placeholder: "my-gcp-project",
      columns: 60,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      focus: !0,
      showCursor: !0
    })
  }), u[38] = cursorOffset, u[39] = onSubmit, u[40] = value, u[41] = j;else j = u[41];
  let M;
  if (u[42] !== error_4) M = error_4 && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: error_4
    })
  }), u[42] = error_4, u[43] = M;else M = u[43];
  let Z;
  if (u[44] !== j || u[45] !== M || u[46] !== H) Z = e(Jl, {
    subtitle: "GCP project ID",
    footerText: footerText,
    children: r(s, {
      flexDirection: "column",
      children: [G, H, K, j, M]
    })
  }), u[44] = j, u[45] = M, u[46] = H, u[47] = Z;else Z = u[47];
  return Z;
}
N();
function he() {
  let h = w(17),
    {
      goBack: goBack_2,
      goNext: goNext,
      updateWizardData: updateWizardData_3,
      wizardData: wizardData_4
    } = gd(),
    [value_2, onChange_3] = g(wizardData_4.region ?? "global"),
    [cursorOffset_2, onChangeCursorOffset_2] = g(value_2.length),
    [error_5, P] = g(null),
    _;
  if (h[0] === S) _ = {
    context: "Settings"
  }, h[0] = _;else _ = h[0];
  ze("confirm:no", goBack_2, _);
  let A;
  if (h[1] !== goNext || h[2] !== updateWizardData_3 || h[3] !== value_2) A = () => {
    let region = value_2.trim();
    if (!region) {
      P("Region is required");
      return;
    }
    P(null), updateWizardData_3({
      region: region
    }), goNext();
  }, h[1] = goNext, h[2] = updateWizardData_3, h[3] = value_2, h[4] = A;else A = h[4];
  let onSubmit_2 = A,
    footerText_2;
  if (h[5] === S) footerText_2 = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), h[5] = footerText_2;else footerText_2 = h[5];
  let O, D;
  if (h[6] === S) O = e(n, {
    children: "Where Claude models are served from."
  }), D = e(n, {
    dimColor: !0,
    children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
  }), h[6] = O, h[7] = D;else O = h[6], D = h[7];
  let v;
  if (h[8] !== cursorOffset_2 || h[9] !== onSubmit_2 || h[10] !== value_2) v = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: value_2,
      onChange: onChange_3,
      onSubmit: onSubmit_2,
      placeholder: "global",
      columns: 40,
      cursorOffset: cursorOffset_2,
      onChangeCursorOffset: onChangeCursorOffset_2,
      focus: !0,
      showCursor: !0
    })
  }), h[8] = cursorOffset_2, h[9] = onSubmit_2, h[10] = value_2, h[11] = v;else v = h[11];
  let E;
  if (h[12] !== error_5) E = error_5 && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: error_5
    })
  }), h[12] = error_5, h[13] = E;else E = h[13];
  let b;
  if (h[14] !== v || h[15] !== E) b = e(Jl, {
    subtitle: "Vertex AI region",
    footerText: footerText_2,
    children: r(s, {
      flexDirection: "column",
      children: [O, D, v, E]
    })
  }), h[14] = v, h[15] = E, h[16] = b;else b = h[16];
  return b;
}
N();
import { homedir as Ye } from "os";
import { join as Je } from "path";
function De() {
  let h = w(17),
    {
      goBack: goBack_3,
      goToStep: goToStep_3,
      updateWizardData: updateWizardData_4,
      wizardData: wizardData_5
    } = gd(),
    [value_3, onChange_4] = g(wizardData_5.keyFile ?? ""),
    [cursorOffset_3, onChangeCursorOffset_3] = g(value_3.length),
    [error_6, P] = g(null),
    _;
  if (h[0] === S) _ = {
    context: "Settings"
  }, h[0] = _;else _ = h[0];
  ze("confirm:no", goBack_3, _);
  let A;
  if (h[1] !== goToStep_3 || h[2] !== updateWizardData_4 || h[3] !== value_3) A = () => {
    let d = value_3.trim();
    if (!d) {
      P("Path is required");
      return;
    }
    P(null);
    let keyFile = d === "~" || d.startsWith("~/") ? Je(Ye(), d.slice(1)) : d;
    updateWizardData_4({
      keyFile: keyFile
    }), goToStep_3(k.PROJECT);
  }, h[1] = goToStep_3, h[2] = updateWizardData_4, h[3] = value_3, h[4] = A;else A = h[4];
  let onSubmit_3 = A,
    footerText_3;
  if (h[5] === S) footerText_3 = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), h[5] = footerText_3;else footerText_3 = h[5];
  let D, v;
  if (h[6] === S) D = e(n, {
    children: "Path to the service account JSON key file."
  }), v = e(n, {
    dimColor: !0,
    children: "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key."
  }), h[6] = D, h[7] = v;else D = h[6], v = h[7];
  let E;
  if (h[8] !== cursorOffset_3 || h[9] !== onSubmit_3 || h[10] !== value_3) E = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: value_3,
      onChange: onChange_4,
      onSubmit: onSubmit_3,
      placeholder: "~/keys/my-project-vertex.json",
      columns: 60,
      cursorOffset: cursorOffset_3,
      onChangeCursorOffset: onChangeCursorOffset_3,
      focus: !0,
      showCursor: !0
    })
  }), h[8] = cursorOffset_3, h[9] = onSubmit_3, h[10] = value_3, h[11] = E;else E = h[11];
  let b;
  if (h[12] !== error_6) b = error_6 && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: error_6
    })
  }), h[12] = error_6, h[13] = b;else b = h[13];
  let W;
  if (h[14] !== E || h[15] !== b) W = e(Jl, {
    subtitle: "Service account key",
    footerText: footerText_3,
    children: r(s, {
      flexDirection: "column",
      children: [D, v, E, b]
    })
  }), h[14] = E, h[15] = b, h[16] = W;else W = h[16];
  return W;
}
N();
function Ae() {
  let t = w(35),
    {
      goBack: o,
      goNext: l,
      updateWizardData: updateWizardData_5,
      wizardData: wizardData_6
    } = gd(),
    C;
  if (t[0] === S) C = {
    phase: "checking"
  }, t[0] = C;else C = t[0];
  let [p, f] = g(C),
    u;
  if (t[1] !== updateWizardData_5 || t[2] !== wizardData_6) u = () => {
    let P = !1;
    return se(wizardData_6).then(result => {
      if (P) {
        return;
      }
      if (result.status === "ok") updateWizardData_5({
        verifiedIdentity: result.identity
      });else updateWizardData_5({
        verifiedIdentity: void 0
      });
      f({
        phase: "done",
        result: result
      });
    }), () => {
      P = !0;
    };
  }, t[1] = updateWizardData_5, t[2] = wizardData_6, t[3] = u;else u = t[3];
  let _;
  if (t[4] === S) _ = [], t[4] = _;else _ = t[4];
  if (R(u, _), p.phase === "checking") {
    let A;
    if (t[5] === S) A = e(Jl, {
      subtitle: "Verifying credentials",
      children: e(ur, {
        message: "Calling Google Cloud\u2026",
        subtitle: "This may take a few seconds."
      })
    }), t[5] = A;else A = t[5];
    return A;
  }
  let {
    result: result_2
  } = p;
  switch (result_2.status) {
    case "ok":
      {
        let A;
        if (t[6] === S) A = e(et, {
          status: "success",
          withSpace: !0
        }), t[6] = A;else A = t[6];
        let y;
        if (t[7] !== result_2.identity) y = r(n, {
          children: [A, "Authenticated as ", e(n, {
            bold: !0,
            children: result_2.identity
          })]
        }), t[7] = result_2.identity, t[8] = y;else y = t[8];
        let x;
        if (t[9] !== result_2.note) x = result_2.note && e(n, {
          dimColor: !0,
          children: result_2.note
        }), t[9] = result_2.note, t[10] = x;else x = t[10];
        let options_2;
        if (t[11] === S) options_2 = [{
          label: "Continue",
          value: "continue"
        }], t[11] = options_2;else options_2 = t[11];
        let onChange_5;
        if (t[12] !== l) onChange_5 = () => l(), t[12] = l, t[13] = onChange_5;else onChange_5 = t[13];
        let v;
        if (t[14] !== o || t[15] !== onChange_5) v = e(Fe, {
          options: options_2,
          onChange: onChange_5,
          onCancel: o
        }), t[14] = o, t[15] = onChange_5, t[16] = v;else v = t[16];
        let E;
        if (t[17] !== y || t[18] !== x || t[19] !== v) E = e(Jl, {
          subtitle: "Verification",
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [y, x, v]
          })
        }), t[17] = y, t[18] = x, t[19] = v, t[20] = E;else E = t[20];
        return E;
      }
    case "error":
      {
        let A;
        if (t[21] === S) A = e(et, {
          status: "error",
          withSpace: !0
        }), t[21] = A;else A = t[21];
        let y;
        if (t[22] !== result_2.error) y = r(n, {
          children: [A, result_2.error]
        }), t[22] = result_2.error, t[23] = y;else y = t[23];
        let x;
        if (t[24] !== result_2.command) x = result_2.command && r(n, {
          bold: !0,
          color: "suggestion",
          children: ["    ", result_2.command]
        }), t[24] = result_2.command, t[25] = x;else x = t[25];
        let O;
        if (t[26] !== y || t[27] !== x) O = r(s, {
          flexDirection: "column",
          children: [y, x]
        }), t[26] = y, t[27] = x, t[28] = O;else O = t[28];
        let D;
        if (t[29] !== o || t[30] !== l) D = e(qn, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: l,
          onCancel: o
        }), t[29] = o, t[30] = l, t[31] = D;else D = t[31];
        let v;
        if (t[32] !== O || t[33] !== D) v = e(Jl, {
          subtitle: "Verification failed",
          color: "error",
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [O, D]
          })
        }), t[32] = O, t[33] = D, t[34] = v;else v = t[34];
        return v;
      }
  }
}
function onComplete_3() {}
var steps = [re, De, fe, he, Ae, le, ie];
function rJe(o) {
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
  let f;
  if (t[3] !== exitOnCtrlCD || t[4] !== onCancel || t[5] !== stepProps) f = e(xPe, {
    steps: steps,
    stepProps: stepProps,
    initialData: initialData,
    onComplete: onComplete_3,
    onCancel: onCancel,
    exitOnCtrlCD: exitOnCtrlCD,
    title: "Set up Google Vertex AI",
    showStepCounter: !1
  }), t[3] = exitOnCtrlCD, t[4] = onCancel, t[5] = stepProps, t[6] = f;else f = t[6];
  return f;
}
export { rJe };