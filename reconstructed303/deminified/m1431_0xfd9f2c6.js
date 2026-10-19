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
import { J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { CSt } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { xx, tEe, Aln, xln } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { fn, In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { zo } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { zO } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { gie, fMt, SPe, wPe } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { fVe, dp, Ac, PF, svt, ySn } from "B:/~BUN/root/chunk-bw9knkq3.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { lr } from "B:/~BUN/root/chunk-v8w1g8ga.js";
import { MP } from "B:/~BUN/root/chunk-v1edtzvj.js";
import { tn } from "B:/~BUN/root/chunk-2fh8t7m0.js";
import { Wr } from "B:/~BUN/root/chunk-1rb7fvzn.js";
import { ls } from "B:/~BUN/root/chunk-fzhngknh.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { UOn } from "B:/~BUN/root/chunk-96eamgtc.js";
import { Xr, $r, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
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
  let t = w(10),
    {
      goBack: o,
      goToStep: goToStep,
      updateWizardData: updateWizardData,
      wizardData: wizardData
    } = dp(),
    h;
  if (t[0] === S) h = [{
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
  if (t[1] === S) f = {
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
  if (t[5] === S) d = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
  }), t[5] = d;else d = t[5];
  let D;
  if (t[6] !== o || t[7] !== onChange || t[8] !== wizardData.authMethod) D = e(Ac, {
    subtitle: "How do you authenticate to Google Cloud?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [d, e(Xe, {
        options: options,
        defaultValue: wizardData.authMethod,
        onChange: onChange,
        onCancel: o
      })]
    })
  }), t[6] = o, t[7] = onChange, t[8] = wizardData.authMethod, t[9] = D;else D = t[9];
  return D;
}
B();
function St(X) {
  return X[1] !== void 0;
}
function kt(o) {
  let [children, F] = o;
  return r(n, {
    children: ["  ", e(n, {
      color: "suggestion",
      children: children
    }), " = ", F]
  }, children);
}
function ve(o) {
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
function oe(o) {
  let f = w(30),
    {
      onComplete: onComplete
    } = o,
    {
      storageV5: storageV5
    } = Oe(),
    {
      goBack: m,
      wizardData: wizardData_2
    } = dp(),
    [error_2, p] = y(null),
    u;
  if (f[0] === S) u = Es(fn("userSettings") ?? "~/.claude/settings.json"), f[0] = u;else u = f[0];
  let R = u,
    g;
  if (f[1] !== wizardData_2) g = ve(wizardData_2), f[1] = wizardData_2, f[2] = g;else g = f[2];
  let env = g,
    E;
  if (f[3] !== env) E = Object.entries(env).filter(St), f[3] = env, f[4] = E;else E = f[4];
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
    } = await In("userSettings", {
      env: env
    }, void 0, storageV5);
    if (error) {
      D.current = !1, p(error.message);
      return;
    }
    i("tengu_vertex_setup_complete", {
      auth_method: pe(wizardData_2.authMethod),
      pinned_models: Boolean(wizardData_2.pinSonnet || wizardData_2.pinOpus || wizardData_2.pinFable || wizardData_2.pinHaiku),
      verified: Boolean(wizardData_2.verifiedIdentity)
    }), onComplete(`Vertex AI configuration saved to ${R}.${wizardData_2.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`);
  }, f[5] = env, f[6] = onComplete, f[7] = storageV5, f[8] = wizardData_2.authMethod, f[9] = wizardData_2.pinFable, f[10] = wizardData_2.pinHaiku, f[11] = wizardData_2.pinOpus, f[12] = wizardData_2.pinSonnet, f[13] = wizardData_2.verifiedIdentity, f[14] = x;else x = f[14];
  let onConfirm = x,
    v;
  if (f[15] === S) v = r(n, {
    children: ["These will be written to ", R, " under env:"]
  }), f[15] = v;else v = f[15];
  let _;
  if (f[16] !== d) _ = e(s, {
    flexDirection: "column",
    children: d.map(kt)
  }), f[16] = d, f[17] = _;else _ = f[17];
  let b;
  if (f[18] !== wizardData_2.verifiedIdentity) b = wizardData_2.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [e(ft, {
      status: "success",
      withSpace: !0
    }), "Verified as ", wizardData_2.verifiedIdentity]
  }), f[18] = wizardData_2.verifiedIdentity, f[19] = b;else b = f[19];
  let M;
  if (f[20] !== error_2) M = e(ls, {
    error: error_2
  }), f[20] = error_2, f[21] = M;else M = f[21];
  let Y;
  if (f[22] !== m || f[23] !== onConfirm) Y = e(lr, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: onConfirm,
    onCancel: m
  }), f[22] = m, f[23] = onConfirm, f[24] = Y;else Y = f[24];
  let W;
  if (f[25] !== _ || f[26] !== b || f[27] !== M || f[28] !== Y) W = e(Ac, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [v, _, b, M, Y]
    })
  }), f[25] = _, f[26] = b, f[27] = M, f[28] = Y, f[29] = W;else W = f[29];
  return W;
}
function ne() {
  return {
    sonnet: zo[xx].vertex,
    opus: zo[Aln].vertex,
    haiku: zo[tEe].vertex,
    fable: zo[xln].vertex
  };
}
function Pe(o) {
  let l = new Set();
  for (let c of Object.values(zo)) if (c.vertex !== null && c.vertex.toLowerCase().includes(o)) l.add(c.vertex);
  return [...l].sort().reverse();
}
function Re(o) {
  if (o.authMethod === "serviceAccount" && o.keyFile) return {
    kind: "keyFile",
    path: o.keyFile
  };
  return {
    kind: "default"
  };
}
var Pt = 12000;
async function ae(o) {
  let identity;
  try {
    let t = await fMt(Re(o), o.projectId),
      h = (async () => {
        await (await t.getClient()).getAccessToken();
      })();
    await Nt(h, Pt, "Timed out waiting for GCP credentials");
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
async function se(o, l) {
  return ySn(() => Rt(o), l, () => "auth");
}
async function Rt(o) {
  let [{
      AnthropicVertex: AnthropicVertex
    }, {
      getProxyFetchOptions: getProxyFetchOptions
    }] = await Promise.all([import("B:/~BUN/root/chunk-4gb2c1w7.js"), import("B:/~BUN/root/chunk-46qp5t9y.js")]),
    googleAuth = await fMt(Re(o), o.projectId);
  return SPe(new AnthropicVertex({
    region: o.region,
    projectId: o.projectId,
    googleAuth: googleAuth,
    maxRetries: 0,
    defaultHeaders: {
      ...gie(),
      ...wPe()
    },
    ...zO,
    timeout: 15000,
    fetchOptions: getProxyFetchOptions({
      url: a.ANTHROPIC_VERTEX_BASE_URL || CSt(o.region)
    })
  }));
}
var command = "gcloud auth application-default login";
function bt(o, l) {
  let error_3 = o?.message ?? String(o);
  if (/ENOENT|no such file/i.test(error_3)) {
    if (l.authMethod === "serviceAccount" && l.keyFile && error_3.includes(l.keyFile)) return {
      error: `Service account key file not found: ${l.keyFile}`
    };
    let m = a.GOOGLE_APPLICATION_CREDENTIALS ? ["GOOGLE_APPLICATION_CREDENTIALS", a.GOOGLE_APPLICATION_CREDENTIALS] : a.google_application_credentials ? ["google_application_credentials", a.google_application_credentials] : void 0;
    if (m && l.authMethod !== "serviceAccount" && error_3.includes(`The file at ${m[1]} does not exist`)) return {
      error: `Key file named by ${m[0]} not found: ${m[1]}`
    };
  }
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
    let o = ne();
    return Object.fromEntries(PF.map(item => [item, {
      fallback: o[item]
    }]));
  },
  listTierCandidates: o => Pe(o),
  pickerSubtitle: o => `Available ${MP[o]} versions on Vertex AI \xB7 each tested with a one-token request.`,
  preferOnSettle: ["current", "fallback"],
  probe: (o, l) => se(o, l)
};
function ce() {
  let l = w(2),
    {
      updateWizardData: o
    } = dp(),
    c;
  if (l[0] !== o) c = e(svt, {
    provider: provider,
    onPins: o
  }), l[0] = o, l[1] = c;else c = l[1];
  return c;
}
B();
import { readdir as Lt, readFile as Ve } from "fs/promises";
import { join as le } from "path";
async function de() {
  let o = new Set(),
    l = UOn();
  try {
    let c = le(l, "configurations");
    for (let m of await Lt(c)) {
      if (!m.startsWith("config_")) continue;
      try {
        let t = await Ve(le(c, m), "utf8");
        for (let h of t.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let p = h[1]?.trim();
          if (p) o.add(p);
        }
      } catch {}
    }
  } catch {}
  try {
    let c = J(await Ve(le(l, "application_default_credentials.json"), "utf8"));
    if (c.quota_project_id) o.add(c.quota_project_id);
  } catch {}
  return [...o].sort();
}
function Jt() {
  return [];
}
function Yt() {
  return de().catch(Jt);
}
function Xt(label) {
  return e(tn.Item, {
    label: label
  }, label);
}
var Le = "__manual__",
  Ne = 12;
function fe() {
  let l = w(3),
    [projectsPromise] = y(Yt),
    fallback;
  if (l[0] === S) fallback = e(Ac, {
    subtitle: "GCP project",
    children: e(Wr, {
      message: "Reading ~/.config/gcloud\u2026"
    })
  }), l[0] = fallback;else fallback = l[0];
  let m;
  if (l[1] !== projectsPromise) m = e(Xr, {
    fallback: fallback,
    children: e(me, {
      projectsPromise: projectsPromise
    })
  }), l[1] = projectsPromise, l[2] = m;else m = l[2];
  return m;
}
function me(o) {
  let u = w(48),
    {
      projectsPromise: projectsPromise_2
    } = o,
    c = $r(projectsPromise_2),
    {
      goBack: goBack,
      goToStep: goToStep_2,
      updateWizardData: updateWizardData_2,
      wizardData: wizardData_3
    } = dp(),
    f = c.length > Ne,
    R;
  if (u[0] !== c || u[1] !== wizardData_3.projectId) R = wizardData_3.projectId && !c.includes(wizardData_3.projectId), u[0] = c, u[1] = wizardData_3.projectId, u[2] = R;else R = u[2];
  let g = Boolean(R),
    [T, E] = y(c.length === 0 || f || g),
    [value, onChange_2] = y(wizardData_3.projectId ?? ""),
    [cursorOffset, onChangeCursorOffset] = y(value.length),
    [error_4, v] = y(null);
  const context = T ? "Settings" : "Confirmation";
  let b;
  if (u[3] !== context) b = {
    context: context
  }, u[3] = context, u[4] = b;else b = u[4];
  rt("confirm:no", goBack, b);
  let M;
  if (u[5] !== goToStep_2 || u[6] !== updateWizardData_2) M = projectId => {
    updateWizardData_2({
      projectId: projectId
    }), goToStep_2(k.REGION);
  }, u[5] = goToStep_2, u[6] = updateWizardData_2, u[7] = M;else M = u[7];
  let W = M;
  if (!T) {
    const X = c.length;
    let N;
    if (u[8] !== c.length) N = O(c.length, "project"), u[8] = c.length, u[9] = N;else N = u[9];
    let F;
    if (u[10] !== c.length || u[11] !== N) F = r(n, {
      dimColor: !0,
      children: ["Found ", X, " ", N, " in your gcloud configurations."]
    }), u[10] = c.length, u[11] = N, u[12] = F;else F = u[12];
    let U;
    if (u[13] !== c || u[14] !== wizardData_3.projectId) U = c.indexOf(wizardData_3.projectId ?? ""), u[13] = c, u[14] = wizardData_3.projectId, u[15] = U;else U = u[15];
    const defaultFocusIndex = Math.max(0, U);
    let onSelect;
    if (u[16] !== c || u[17] !== W) onSelect = Er => {
      let nt = c[Er];
      if (nt === void 0) E(!0);else W(nt);
    }, u[16] = c, u[17] = W, u[18] = onSelect;else onSelect = u[18];
    let j;
    if (u[19] !== c) j = c.map(Xt), u[19] = c, u[20] = j;else j = u[20];
    let Q;
    if (u[21] === S) Q = e(tn.Item, {
      label: "Type a different project\u2026"
    }, Le), u[21] = Q;else Q = u[21];
    let ee;
    if (u[22] !== onSelect || u[23] !== j || u[24] !== defaultFocusIndex) ee = r(tn, {
      defaultFocusIndex: defaultFocusIndex,
      onSelect: onSelect,
      children: [j, Q]
    }), u[22] = onSelect, u[23] = j, u[24] = defaultFocusIndex, u[25] = ee;else ee = u[25];
    let at;
    if (u[26] !== ee || u[27] !== F) at = e(Ac, {
      subtitle: "GCP project",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [F, ee]
      })
    }), u[26] = ee, u[27] = F, u[28] = at;else at = u[28];
    return at;
  }
  let X;
  if (u[29] !== W || u[30] !== value) X = () => {
    let st = value.trim();
    if (!st) {
      v("Project ID is required");
      return;
    }
    v(null), W(st);
  }, u[29] = W, u[30] = value, u[31] = X;else X = u[31];
  let onSubmit = X,
    footerText;
  if (u[32] === S) footerText = r(Se, {
    children: [e(q, {
      chord: "enter",
      action: "continue"
    }), e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), u[32] = footerText;else footerText = u[32];
  let F;
  if (u[33] === S) F = e(n, {
    children: "The project where Vertex AI is enabled."
  }), u[33] = F;else F = u[33];
  let U;
  if (u[34] !== c.length || u[35] !== f) U = f && r(n, {
    dimColor: !0,
    children: ["Found ", c.length, " projects \u2014 too many to list."]
  }), u[34] = c.length, u[35] = f, u[36] = U;else U = u[36];
  let H;
  if (u[37] === S) H = e(n, {
    dimColor: !0,
    children: "Find it with `gcloud config get-value project` or in the GCP console header."
  }), u[37] = H;else H = u[37];
  let z;
  if (u[38] !== cursorOffset || u[39] !== onSubmit || u[40] !== value) z = e(s, {
    marginTop: 1,
    children: e(Lr, {
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
  let j;
  if (u[42] !== error_4) j = error_4 && e(s, {
    marginTop: 1,
    children: e(ls, {
      error: error_4
    })
  }), u[42] = error_4, u[43] = j;else j = u[43];
  let Q;
  if (u[44] !== z || u[45] !== j || u[46] !== U) Q = e(Ac, {
    subtitle: "GCP project ID",
    footerText: footerText,
    children: r(s, {
      flexDirection: "column",
      children: [F, U, H, z, j]
    })
  }), u[44] = z, u[45] = j, u[46] = U, u[47] = Q;else Q = u[47];
  return Q;
}
B();
function he() {
  let g = w(17),
    {
      goBack: goBack_2,
      goNext: goNext,
      updateWizardData: updateWizardData_3,
      wizardData: wizardData_4
    } = dp(),
    [value_2, onChange_3] = y(wizardData_4.region ?? "global"),
    [cursorOffset_2, onChangeCursorOffset_2] = y(value_2.length),
    [error_5, R] = y(null),
    T;
  if (g[0] === S) T = {
    context: "Settings"
  }, g[0] = T;else T = g[0];
  rt("confirm:no", goBack_2, T);
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
  if (g[5] === S) footerText_2 = r(Se, {
    children: [e(q, {
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
  if (g[6] === S) I = e(n, {
    children: "Where Claude models are served from."
  }), C = e(n, {
    dimColor: !0,
    children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
  }), g[6] = I, g[7] = C;else I = g[6], C = g[7];
  let v;
  if (g[8] !== cursorOffset_2 || g[9] !== onSubmit_2 || g[10] !== value_2) v = e(s, {
    marginTop: 1,
    children: e(Lr, {
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
    children: e(ls, {
      error: error_5
    })
  }), g[12] = error_5, g[13] = _;else _ = g[13];
  let b;
  if (g[14] !== v || g[15] !== _) b = e(Ac, {
    subtitle: "Vertex AI region",
    footerText: footerText_2,
    children: r(s, {
      flexDirection: "column",
      children: [I, C, v, _]
    })
  }), g[14] = v, g[15] = _, g[16] = b;else b = g[16];
  return b;
}
B();
import { homedir as Ke } from "os";
import { join as qe } from "path";
function ye() {
  let g = w(17),
    {
      goBack: goBack_3,
      goToStep: goToStep_3,
      updateWizardData: updateWizardData_4,
      wizardData: wizardData_5
    } = dp(),
    [value_3, onChange_4] = y(wizardData_5.keyFile ?? ""),
    [cursorOffset_3, onChangeCursorOffset_3] = y(value_3.length),
    [error_6, R] = y(null),
    T;
  if (g[0] === S) T = {
    context: "Settings"
  }, g[0] = T;else T = g[0];
  rt("confirm:no", goBack_3, T);
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
  if (g[5] === S) footerText_3 = r(Se, {
    children: [e(q, {
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
  if (g[6] === S) C = e(n, {
    children: "Path to the service account JSON key file."
  }), v = e(n, {
    dimColor: !0,
    children: "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key."
  }), g[6] = C, g[7] = v;else C = g[6], v = g[7];
  let _;
  if (g[8] !== cursorOffset_3 || g[9] !== onSubmit_3 || g[10] !== value_3) _ = e(s, {
    marginTop: 1,
    children: e(Lr, {
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
    children: e(ls, {
      error: error_6
    })
  }), g[12] = error_6, g[13] = b;else b = g[13];
  let M;
  if (g[14] !== _ || g[15] !== b) M = e(Ac, {
    subtitle: "Service account key",
    footerText: footerText_3,
    children: r(s, {
      flexDirection: "column",
      children: [C, v, _, b]
    })
  }), g[14] = _, g[15] = b, g[16] = M;else M = g[16];
  return M;
}
B();
function xe() {
  let t = w(35),
    {
      goBack: o,
      goNext: l,
      updateWizardData: updateWizardData_5,
      wizardData: wizardData_6
    } = dp(),
    h;
  if (t[0] === S) h = {
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
  if (t[4] === S) T = [], t[4] = T;else T = t[4];
  if (P(u, T), p.phase === "checking") {
    let E;
    if (t[5] === S) E = e(Ac, {
      subtitle: "Verifying credentials",
      children: e(Wr, {
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
        if (t[6] === S) E = e(ft, {
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
        if (t[11] === S) options_2 = [{
          label: "Continue",
          value: "continue"
        }], t[11] = options_2;else options_2 = t[11];
        let onChange_5;
        if (t[12] !== l) onChange_5 = () => l(), t[12] = l, t[13] = onChange_5;else onChange_5 = t[13];
        let v;
        if (t[14] !== o || t[15] !== onChange_5) v = e(Xe, {
          options: options_2,
          onChange: onChange_5,
          onCancel: o
        }), t[14] = o, t[15] = onChange_5, t[16] = v;else v = t[16];
        let _;
        if (t[17] !== D || t[18] !== x || t[19] !== v) _ = e(Ac, {
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
        if (t[21] === S) E = e(ft, {
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
        if (t[29] !== o || t[30] !== l) C = e(lr, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: l,
          onCancel: o
        }), t[29] = o, t[30] = l, t[31] = C;else C = t[31];
        let v;
        if (t[32] !== I || t[33] !== C) v = e(Ac, {
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
var steps = [te, ye, fe, he, xe, ce, oe];
function rvt(o) {
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
  if (t[3] !== exitOnCtrlCD || t[4] !== onCancel || t[5] !== stepProps) f = e(fVe, {
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
export { rvt };