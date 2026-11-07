// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { pWt } from "B:/~BUN/root/chunk-eev762xg.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { ID, QNe, _Bn, bBn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { un, qn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { ts } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { XL, pin, CFe, RFe } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { E_e } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Bot, ym, Lf, $j, EGt, B3n } from "B:/~BUN/root/chunk-6twbgvt6.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { H0 } from "B:/~BUN/root/chunk-t85n63bg.js";
import { Tn } from "B:/~BUN/root/chunk-md70d2gd.js";
import { So } from "B:/~BUN/root/chunk-r9p4g17h.js";
import { Ys } from "B:/~BUN/root/chunk-28bb8488.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { fnr } from "B:/~BUN/root/chunk-vy0a90jx.js";
import { Ho, ko, O, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var k = {
  AUTH_METHOD: 0,
  SERVICE_ACCOUNT: 1,
  PROJECT: 2,
  REGION: 3,
  VERIFY: 4,
  PIN_MODELS: 5,
  CONFIRM: 6
};
function te() {
  let t = S(10),
    {
      goBack: o,
      goToStep: goToStep,
      updateWizardData: updateWizardData,
      wizardData: wizardData
    } = ym(),
    h;
  if (t[0] === w) h = [{
    label: "Application Default Credentials (gcloud auth)",
    value: "adc"
  }, {
    label: "Service account key file",
    value: "serviceAccount"
  }, {
    label: "Use credentials already in my environment",
    value: "environment"
  }], t[0] = h;else h = t[0];
  let options = h,
    f;
  if (t[1] === w) f = {
    adc: k.PROJECT,
    serviceAccount: k.SERVICE_ACCOUNT,
    environment: k.PROJECT
  }, t[1] = f;else f = t[1];
  let u = f,
    R;
  if (t[2] !== goToStep || t[3] !== updateWizardData) R = g => {
    let authMethod = g;
    updateWizardData({
      authMethod: authMethod
    }), goToStep(u[authMethod]);
  }, t[2] = goToStep, t[3] = updateWizardData, t[4] = R;else R = t[4];
  let onChange = R,
    d;
  if (t[5] === w) d = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
  }), t[5] = d;else d = t[5];
  let D;
  if (t[6] !== o || t[7] !== onChange || t[8] !== wizardData.authMethod) D = e(Lf, {
    subtitle: "How do you authenticate to Google Cloud?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [d, e(Ze, {
        options: options,
        defaultValue: wizardData.authMethod,
        onChange: onChange,
        onCancel: o
      })]
    })
  }), t[6] = o, t[7] = onChange, t[8] = wizardData.authMethod, t[9] = D;else D = t[9];
  return D;
}
j();
function kt(J) {
  return J[1] !== void 0;
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
  let c = {
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
  if (o.authMethod === "serviceAccount") c.GOOGLE_APPLICATION_CREDENTIALS = o.keyFile;
  if (o.pinSonnet) c.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) c.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) c.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) c.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return c;
}
function oe(o) {
  let f = S(30),
    {
      onComplete: onComplete
    } = o,
    {
      storageV5: storageV5
    } = Fe(),
    {
      goBack: m,
      wizardData: wizardData_2
    } = ym(),
    [error_2, p] = y(null),
    u;
  if (f[0] === w) u = ks(un("userSettings") ?? "~/.claude/settings.json"), f[0] = u;else u = f[0];
  let R = u,
    g;
  if (f[1] !== wizardData_2) g = _e(wizardData_2), f[1] = wizardData_2, f[2] = g;else g = f[2];
  let env = g,
    E;
  if (f[3] !== env) E = Object.entries(env).filter(kt), f[3] = env, f[4] = E;else E = f[4];
  let d = E,
    D = A(!1),
    x;
  if (f[5] !== env || f[6] !== onComplete || f[7] !== storageV5 || f[8] !== wizardData_2.authMethod || f[9] !== wizardData_2.pinFable || f[10] !== wizardData_2.pinHaiku || f[11] !== wizardData_2.pinOpus || f[12] !== wizardData_2.pinSonnet || f[13] !== wizardData_2.verifiedIdentity) x = async () => {
    if (D.current) {
      return;
    }
    D.current = !0;
    let {
      error: error
    } = await qn("userSettings", {
      env: env
    }, void 0, storageV5);
    if (error) {
      D.current = !1, p(error.message);
      return;
    }
    l("tengu_vertex_setup_complete", {
      auth_method: de(wizardData_2.authMethod),
      pinned_models: Boolean(wizardData_2.pinSonnet || wizardData_2.pinOpus || wizardData_2.pinFable || wizardData_2.pinHaiku),
      verified: Boolean(wizardData_2.verifiedIdentity)
    }), onComplete(`Vertex AI configuration saved to ${R}.${wizardData_2.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`);
  }, f[5] = env, f[6] = onComplete, f[7] = storageV5, f[8] = wizardData_2.authMethod, f[9] = wizardData_2.pinFable, f[10] = wizardData_2.pinHaiku, f[11] = wizardData_2.pinOpus, f[12] = wizardData_2.pinSonnet, f[13] = wizardData_2.verifiedIdentity, f[14] = x;else x = f[14];
  let onConfirm = x,
    v;
  if (f[15] === w) v = r(n, {
    children: ["These will be written to ", R, " under env:"]
  }), f[15] = v;else v = f[15];
  let _;
  if (f[16] !== d) _ = e(s, {
    flexDirection: "column",
    children: d.map(Pt)
  }), f[16] = d, f[17] = _;else _ = f[17];
  let b;
  if (f[18] !== wizardData_2.verifiedIdentity) b = wizardData_2.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [e(Tt, {
      status: "success",
      withSpace: !0
    }), "Verified as ", wizardData_2.verifiedIdentity]
  }), f[18] = wizardData_2.verifiedIdentity, f[19] = b;else b = f[19];
  let W;
  if (f[20] !== error_2) W = e(Ys, {
    error: error_2
  }), f[20] = error_2, f[21] = W;else W = f[21];
  let q;
  if (f[22] !== m || f[23] !== onConfirm) q = e(Jn, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: onConfirm,
    onCancel: m
  }), f[22] = m, f[23] = onConfirm, f[24] = q;else q = f[24];
  let F;
  if (f[25] !== _ || f[26] !== b || f[27] !== W || f[28] !== q) F = e(Lf, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [v, _, b, W, q]
    })
  }), f[25] = _, f[26] = b, f[27] = W, f[28] = q, f[29] = F;else F = f[29];
  return F;
}
function ne() {
  return {
    sonnet: ts[ID].vertex,
    opus: ts[_Bn].vertex,
    haiku: ts[QNe].vertex,
    fable: ts[bBn].vertex
  };
}
function Pe(o) {
  let c = new Set();
  for (let a of Object.values(ts)) if (a.vertex !== null && a.vertex.toLowerCase().includes(o)) c.add(a.vertex);
  return [...c].sort().reverse();
}
function Se(o) {
  if (o.authMethod === "serviceAccount" && o.keyFile) return {
    kind: "keyFile",
    path: o.keyFile
  };
  return {
    kind: "default"
  };
}
var St = 12000;
async function ae(o) {
  let identity;
  try {
    let t = await pin(Se(o), o.projectId),
      h = (async () => {
        await (await t.getClient()).getAccessToken();
      })();
    await zt(h, St, "Timed out waiting for GCP credentials");
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
      ...bt(error, o)
    };
  }
  let haiku = ne().haiku,
    m = await se(o, haiku);
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
async function se(o, c) {
  return B3n(() => Rt(o), c, () => "auth");
}
async function Rt(o) {
  let [{
      AnthropicVertex: AnthropicVertex
    }, {
      getProxyFetchOptions: getProxyFetchOptions
    }] = await Promise.all([import("B:/~BUN/root/chunk-z72k92z8.js"), import("B:/~BUN/root/chunk-hm55wvr0.js")]),
    googleAuth = await pin(Se(o), o.projectId);
  return CFe(new AnthropicVertex({
    region: o.region,
    projectId: o.projectId,
    googleAuth: googleAuth,
    maxRetries: 0,
    defaultHeaders: {
      ...E_e(),
      ...RFe()
    },
    ...XL,
    timeout: 15000,
    fetchOptions: getProxyFetchOptions({
      url: i.ANTHROPIC_VERTEX_BASE_URL || pWt(o.region)
    })
  }));
}
var command = "gcloud auth application-default login";
function bt(o, c) {
  let error_3 = o?.message ?? String(o);
  if (/ENOENT|no such file/i.test(error_3)) {
    if (c.authMethod === "serviceAccount" && c.keyFile && error_3.includes(c.keyFile)) return {
      error: `Service account key file not found: ${c.keyFile}`
    };
    let m = i.GOOGLE_APPLICATION_CREDENTIALS ? ["GOOGLE_APPLICATION_CREDENTIALS", i.GOOGLE_APPLICATION_CREDENTIALS] : i.google_application_credentials ? ["google_application_credentials", i.google_application_credentials] : void 0;
    if (m && c.authMethod !== "serviceAccount" && error_3.includes(`The file at ${m[1]} does not exist`)) return {
      error: `Key file named by ${m[0]} not found: ${m[1]}`
    };
  }
  if (/Could not load the default credentials/i.test(error_3)) return c.authMethod === "adc" ? {
    error: "No Application Default Credentials found. Run:",
    command: command
  } : {
    error: "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login."
  };
  if (/invalid_grant|Token has been expired|reauth/i.test(error_3)) {
    if (c.authMethod === "serviceAccount") return {
      error: "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key)."
    };
    if (c.authMethod === "adc") return {
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
    ...(c.authMethod === "adc" && {
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
    let o = ne();
    return Object.fromEntries($j.map(item => [item, {
      fallback: o[item]
    }]));
  },
  listTierCandidates: o => Pe(o),
  pickerSubtitle: o => `Available ${H0[o]} versions on Vertex AI \xB7 each tested with a one-token request.`,
  preferOnSettle: ["current", "fallback"],
  probe: (o, c) => se(o, c)
};
function ce() {
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
import { readdir as Lt, readFile as be } from "fs/promises";
import { join as le } from "path";
async function ue() {
  let o = new Set(),
    c = fnr();
  try {
    let a = le(c, "configurations");
    for (let m of await Lt(a)) {
      if (!m.startsWith("config_")) continue;
      try {
        let t = await be(le(a, m), "utf8");
        for (let h of t.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let p = h[1]?.trim();
          if (p) o.add(p);
        }
      } catch {}
    }
  } catch {}
  try {
    let a = ee(await be(le(c, "application_default_credentials.json"), "utf8"));
    if (a.quota_project_id) o.add(a.quota_project_id);
  } catch {}
  return [...o].sort();
}
function Jt() {
  return [];
}
function Yt() {
  return ue().catch(Jt);
}
function Xt(label) {
  return e(Tn.Item, {
    label: label
  }, label);
}
var Ve = "__manual__",
  Le = 12;
function fe() {
  let c = S(3),
    [projectsPromise] = y(Yt),
    fallback;
  if (c[0] === w) fallback = e(Lf, {
    subtitle: "GCP project",
    children: e(So, {
      message: "Reading ~/.config/gcloud\u2026"
    })
  }), c[0] = fallback;else fallback = c[0];
  let m;
  if (c[1] !== projectsPromise) m = e(Ho, {
    fallback: fallback,
    children: e(pe, {
      projectsPromise: projectsPromise
    })
  }), c[1] = projectsPromise, c[2] = m;else m = c[2];
  return m;
}
function pe(o) {
  let u = S(48),
    {
      projectsPromise: projectsPromise_2
    } = o,
    a = ko(projectsPromise_2),
    {
      goBack: goBack,
      goToStep: goToStep_2,
      updateWizardData: updateWizardData_2,
      wizardData: wizardData_3
    } = ym(),
    f = a.length > Le,
    R;
  if (u[0] !== a || u[1] !== wizardData_3.projectId) R = wizardData_3.projectId && !a.includes(wizardData_3.projectId), u[0] = a, u[1] = wizardData_3.projectId, u[2] = R;else R = u[2];
  let g = Boolean(R),
    [T, E] = y(a.length === 0 || f || g),
    [value, onChange_2] = y(wizardData_3.projectId ?? ""),
    [cursorOffset, onChangeCursorOffset] = y(value.length),
    [error_4, v] = y(null);
  const context = T ? "Settings" : "Confirmation";
  let b;
  if (u[3] !== context) b = {
    context: context
  }, u[3] = context, u[4] = b;else b = u[4];
  pt("confirm:no", goBack, b);
  let W;
  if (u[5] !== goToStep_2 || u[6] !== updateWizardData_2) W = projectId => {
    updateWizardData_2({
      projectId: projectId
    }), goToStep_2(k.REGION);
  }, u[5] = goToStep_2, u[6] = updateWizardData_2, u[7] = W;else W = u[7];
  let F = W;
  if (!T) {
    const J = a.length;
    let N;
    if (u[8] !== a.length) N = P(a.length, "project"), u[8] = a.length, u[9] = N;else N = u[9];
    let G;
    if (u[10] !== a.length || u[11] !== N) G = r(n, {
      dimColor: !0,
      children: ["Found ", J, " ", N, " in your gcloud configurations."]
    }), u[10] = a.length, u[11] = N, u[12] = G;else G = u[12];
    let B;
    if (u[13] !== a || u[14] !== wizardData_3.projectId) B = a.indexOf(wizardData_3.projectId ?? ""), u[13] = a, u[14] = wizardData_3.projectId, u[15] = B;else B = u[15];
    const defaultFocusIndex = Math.max(0, B);
    let onSelect;
    if (u[16] !== a || u[17] !== F) onSelect = Ar => {
      let it = a[Ar];
      if (it === void 0) E(!0);else F(it);
    }, u[16] = a, u[17] = F, u[18] = onSelect;else onSelect = u[18];
    let M;
    if (u[19] !== a) M = a.map(Xt), u[19] = a, u[20] = M;else M = u[20];
    let X;
    if (u[21] === w) X = e(Tn.Item, {
      label: "Type a different project\u2026"
    }, Ve), u[21] = X;else X = u[21];
    let Z;
    if (u[22] !== onSelect || u[23] !== M || u[24] !== defaultFocusIndex) Z = r(Tn, {
      defaultFocusIndex: defaultFocusIndex,
      onSelect: onSelect,
      children: [M, X]
    }), u[22] = onSelect, u[23] = M, u[24] = defaultFocusIndex, u[25] = Z;else Z = u[25];
    let nt;
    if (u[26] !== Z || u[27] !== G) nt = e(Lf, {
      subtitle: "GCP project",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [G, Z]
      })
    }), u[26] = Z, u[27] = G, u[28] = nt;else nt = u[28];
    return nt;
  }
  let J;
  if (u[29] !== F || u[30] !== value) J = () => {
    let at = value.trim();
    if (!at) {
      v("Project ID is required");
      return;
    }
    v(null), F(at);
  }, u[29] = F, u[30] = value, u[31] = J;else J = u[31];
  let onSubmit = J,
    footerText;
  if (u[32] === w) footerText = r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), u[32] = footerText;else footerText = u[32];
  let G;
  if (u[33] === w) G = e(n, {
    children: "The project where Vertex AI is enabled."
  }), u[33] = G;else G = u[33];
  let B;
  if (u[34] !== a.length || u[35] !== f) B = f && r(n, {
    dimColor: !0,
    children: ["Found ", a.length, " projects \u2014 too many to list."]
  }), u[34] = a.length, u[35] = f, u[36] = B;else B = u[36];
  let H;
  if (u[37] === w) H = e(n, {
    dimColor: !0,
    children: "Find it with `gcloud config get-value project` or in the GCP console header."
  }), u[37] = H;else H = u[37];
  let z;
  if (u[38] !== cursorOffset || u[39] !== onSubmit || u[40] !== value) z = e(s, {
    marginTop: 1,
    children: e(Ir, {
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
  }), u[38] = cursorOffset, u[39] = onSubmit, u[40] = value, u[41] = z;else z = u[41];
  let M;
  if (u[42] !== error_4) M = error_4 && e(s, {
    marginTop: 1,
    children: e(Ys, {
      error: error_4
    })
  }), u[42] = error_4, u[43] = M;else M = u[43];
  let X;
  if (u[44] !== z || u[45] !== M || u[46] !== B) X = e(Lf, {
    subtitle: "GCP project ID",
    footerText: footerText,
    children: r(s, {
      flexDirection: "column",
      children: [G, B, H, z, M]
    })
  }), u[44] = z, u[45] = M, u[46] = B, u[47] = X;else X = u[47];
  return X;
}
j();
function he() {
  let g = S(17),
    {
      goBack: goBack_2,
      goNext: goNext,
      updateWizardData: updateWizardData_3,
      wizardData: wizardData_4
    } = ym(),
    [value_2, onChange_3] = y(wizardData_4.region ?? "global"),
    [cursorOffset_2, onChangeCursorOffset_2] = y(value_2.length),
    [error_5, R] = y(null),
    T;
  if (g[0] === w) T = {
    context: "Settings"
  }, g[0] = T;else T = g[0];
  pt("confirm:no", goBack_2, T);
  let E;
  if (g[1] !== goNext || g[2] !== updateWizardData_3 || g[3] !== value_2) E = () => {
    let region = value_2.trim();
    if (!region) {
      R("Region is required");
      return;
    }
    R(null), updateWizardData_3({
      region: region
    }), goNext();
  }, g[1] = goNext, g[2] = updateWizardData_3, g[3] = value_2, g[4] = E;else E = g[4];
  let onSubmit_2 = E,
    footerText_2;
  if (g[5] === w) footerText_2 = r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), g[5] = footerText_2;else footerText_2 = g[5];
  let I, C;
  if (g[6] === w) I = e(n, {
    children: "Where Claude models are served from."
  }), C = e(n, {
    dimColor: !0,
    children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
  }), g[6] = I, g[7] = C;else I = g[6], C = g[7];
  let v;
  if (g[8] !== cursorOffset_2 || g[9] !== onSubmit_2 || g[10] !== value_2) v = e(s, {
    marginTop: 1,
    children: e(Ir, {
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
  }), g[8] = cursorOffset_2, g[9] = onSubmit_2, g[10] = value_2, g[11] = v;else v = g[11];
  let _;
  if (g[12] !== error_5) _ = error_5 && e(s, {
    marginTop: 1,
    children: e(Ys, {
      error: error_5
    })
  }), g[12] = error_5, g[13] = _;else _ = g[13];
  let b;
  if (g[14] !== v || g[15] !== _) b = e(Lf, {
    subtitle: "Vertex AI region",
    footerText: footerText_2,
    children: r(s, {
      flexDirection: "column",
      children: [I, C, v, _]
    })
  }), g[14] = v, g[15] = _, g[16] = b;else b = g[16];
  return b;
}
j();
import { homedir as Ke } from "os";
import { join as qe } from "path";
function De() {
  let g = S(17),
    {
      goBack: goBack_3,
      goToStep: goToStep_3,
      updateWizardData: updateWizardData_4,
      wizardData: wizardData_5
    } = ym(),
    [value_3, onChange_4] = y(wizardData_5.keyFile ?? ""),
    [cursorOffset_3, onChangeCursorOffset_3] = y(value_3.length),
    [error_6, R] = y(null),
    T;
  if (g[0] === w) T = {
    context: "Settings"
  }, g[0] = T;else T = g[0];
  pt("confirm:no", goBack_3, T);
  let E;
  if (g[1] !== goToStep_3 || g[2] !== updateWizardData_4 || g[3] !== value_3) E = () => {
    let d = value_3.trim();
    if (!d) {
      R("Path is required");
      return;
    }
    R(null);
    let keyFile = d === "~" || d.startsWith("~/") ? qe(Ke(), d.slice(1)) : d;
    updateWizardData_4({
      keyFile: keyFile
    }), goToStep_3(k.PROJECT);
  }, g[1] = goToStep_3, g[2] = updateWizardData_4, g[3] = value_3, g[4] = E;else E = g[4];
  let onSubmit_3 = E,
    footerText_3;
  if (g[5] === w) footerText_3 = r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), g[5] = footerText_3;else footerText_3 = g[5];
  let C, v;
  if (g[6] === w) C = e(n, {
    children: "Path to the service account JSON key file."
  }), v = e(n, {
    dimColor: !0,
    children: "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key."
  }), g[6] = C, g[7] = v;else C = g[6], v = g[7];
  let _;
  if (g[8] !== cursorOffset_3 || g[9] !== onSubmit_3 || g[10] !== value_3) _ = e(s, {
    marginTop: 1,
    children: e(Ir, {
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
  }), g[8] = cursorOffset_3, g[9] = onSubmit_3, g[10] = value_3, g[11] = _;else _ = g[11];
  let b;
  if (g[12] !== error_6) b = error_6 && e(s, {
    marginTop: 1,
    children: e(Ys, {
      error: error_6
    })
  }), g[12] = error_6, g[13] = b;else b = g[13];
  let W;
  if (g[14] !== _ || g[15] !== b) W = e(Lf, {
    subtitle: "Service account key",
    footerText: footerText_3,
    children: r(s, {
      flexDirection: "column",
      children: [C, v, _, b]
    })
  }), g[14] = _, g[15] = b, g[16] = W;else W = g[16];
  return W;
}
j();
function Ae() {
  let t = S(35),
    {
      goBack: o,
      goNext: c,
      updateWizardData: updateWizardData_5,
      wizardData: wizardData_6
    } = ym(),
    h;
  if (t[0] === w) h = {
    phase: "checking"
  }, t[0] = h;else h = t[0];
  let [p, f] = y(h),
    u;
  if (t[1] !== updateWizardData_5 || t[2] !== wizardData_6) u = () => {
    let R = !1;
    return ae(wizardData_6).then(result => {
      if (R) {
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
      R = !0;
    };
  }, t[1] = updateWizardData_5, t[2] = wizardData_6, t[3] = u;else u = t[3];
  let T;
  if (t[4] === w) T = [], t[4] = T;else T = t[4];
  if (O(u, T), p.phase === "checking") {
    let E;
    if (t[5] === w) E = e(Lf, {
      subtitle: "Verifying credentials",
      children: e(So, {
        message: "Calling Google Cloud\u2026",
        subtitle: "This may take a few seconds."
      })
    }), t[5] = E;else E = t[5];
    return E;
  }
  let {
    result: result_2
  } = p;
  switch (result_2.status) {
    case "ok":
      {
        let E;
        if (t[6] === w) E = e(Tt, {
          status: "success",
          withSpace: !0
        }), t[6] = E;else E = t[6];
        let D;
        if (t[7] !== result_2.identity) D = r(n, {
          children: [E, "Authenticated as ", e(n, {
            bold: !0,
            children: result_2.identity
          })]
        }), t[7] = result_2.identity, t[8] = D;else D = t[8];
        let x;
        if (t[9] !== result_2.note) x = result_2.note && e(n, {
          dimColor: !0,
          children: result_2.note
        }), t[9] = result_2.note, t[10] = x;else x = t[10];
        let options_2;
        if (t[11] === w) options_2 = [{
          label: "Continue",
          value: "continue"
        }], t[11] = options_2;else options_2 = t[11];
        let onChange_5;
        if (t[12] !== c) onChange_5 = () => c(), t[12] = c, t[13] = onChange_5;else onChange_5 = t[13];
        let v;
        if (t[14] !== o || t[15] !== onChange_5) v = e(Ze, {
          options: options_2,
          onChange: onChange_5,
          onCancel: o
        }), t[14] = o, t[15] = onChange_5, t[16] = v;else v = t[16];
        let _;
        if (t[17] !== D || t[18] !== x || t[19] !== v) _ = e(Lf, {
          subtitle: "Verification",
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [D, x, v]
          })
        }), t[17] = D, t[18] = x, t[19] = v, t[20] = _;else _ = t[20];
        return _;
      }
    case "error":
      {
        let E;
        if (t[21] === w) E = e(Tt, {
          status: "error",
          withSpace: !0
        }), t[21] = E;else E = t[21];
        let D;
        if (t[22] !== result_2.error) D = r(n, {
          children: [E, result_2.error]
        }), t[22] = result_2.error, t[23] = D;else D = t[23];
        let x;
        if (t[24] !== result_2.command) x = result_2.command && r(n, {
          bold: !0,
          color: "suggestion",
          children: ["    ", result_2.command]
        }), t[24] = result_2.command, t[25] = x;else x = t[25];
        let I;
        if (t[26] !== D || t[27] !== x) I = r(s, {
          flexDirection: "column",
          children: [D, x]
        }), t[26] = D, t[27] = x, t[28] = I;else I = t[28];
        let C;
        if (t[29] !== o || t[30] !== c) C = e(Jn, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: c,
          onCancel: o
        }), t[29] = o, t[30] = c, t[31] = C;else C = t[31];
        let v;
        if (t[32] !== I || t[33] !== C) v = e(Lf, {
          subtitle: "Verification failed",
          color: "error",
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [I, C]
          })
        }), t[32] = I, t[33] = C, t[34] = v;else v = t[34];
        return v;
      }
  }
}
function onComplete_3() {}
var steps = [te, De, fe, he, Ae, ce, oe];
function vGt(o) {
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
  let f;
  if (t[3] !== exitOnCtrlCD || t[4] !== onCancel || t[5] !== stepProps) f = e(Bot, {
    steps: steps,
    stepProps: stepProps,
    initialData: initialData,
    onComplete: onComplete_3,
    onCancel: onCancel,
    exitOnCtrlCD: exitOnCtrlCD,
    title: "Set up Google Vertex AI"
  }), t[3] = exitOnCtrlCD, t[4] = onCancel, t[5] = stepProps, t[6] = f;else f = t[6];
  return f;
}
export { vGt };