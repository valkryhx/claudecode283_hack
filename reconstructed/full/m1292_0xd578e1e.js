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
  J
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  F9e
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
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
  e$,
  dce,
  tHt,
  nHt
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
  dC
} from "B:/~BUN/root/chunk-bt3h0syz.js";
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
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  et
} from "B:/~BUN/root/chunk-zg8y1401.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  uit,
  Yme,
  Xme
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Qn
} from "B:/~BUN/root/chunk-jcnv9sfw.js";
import {
  qn
} from "B:/~BUN/root/chunk-pet3tnhj.js";
import {
  yT
} from "B:/~BUN/root/chunk-acsg9bv8.js";
import {
  kn
} from "B:/~BUN/root/chunk-87fmbjg1.js";
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
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
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
      goToStep: l,
      updateWizardData: c,
      wizardData: m
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
  }], t[0] = C;
  else C = t[0];
  let p = C,
    f;
  if (t[1] === S) f = {
    adc: k.PROJECT,
    serviceAccount: k.SERVICE_ACCOUNT,
    environment: k.PROJECT
  }, t[1] = f;
  else f = t[1];
  let u = f,
    P;
  if (t[2] !== l || t[3] !== c) P = (h) => {
    let _ = h;
    c({
      authMethod: _
    }), l(u[_])
  }, t[2] = l, t[3] = c, t[4] = P;
  else P = t[4];
  let A = P,
    d;
  if (t[5] === S) d = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
  }), t[5] = d;
  else d = t[5];
  let y;
  if (t[6] !== o || t[7] !== A || t[8] !== m.authMethod) y = e(Jl, {
    subtitle: "How do you authenticate to Google Cloud?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [d, e(Fe, {
        options: p,
        defaultValue: m.authMethod,
        onChange: A,
        onCancel: o
      })]
    })
  }), t[6] = o, t[7] = A, t[8] = m.authMethod, t[9] = y;
  else y = t[9];
  return y
}
N();

function St(Q) {
  return Q[1] !== void 0
}

function Pt(o) {
  let [L, G] = o;
  return r(n, {
    children: ["  ", e(n, {
      color: "suggestion",
      children: L
    }), " = ", G]
  }, L)
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
  return l
}

function ie(o) {
  let f = w(30),
    {
      onComplete: l
    } = o,
    {
      storageV5: c
    } = ke(),
    {
      goBack: m,
      wizardData: t
    } = gd(),
    [C, p] = g(null),
    u;
  if (f[0] === S) u = xa(wr("userSettings") ?? "~/.claude/settings.json"), f[0] = u;
  else u = f[0];
  let P = u,
    h;
  if (f[1] !== t) h = _e(t), f[1] = t, f[2] = h;
  else h = f[2];
  let _ = h,
    A;
  if (f[3] !== _) A = Object.entries(_).filter(St), f[3] = _, f[4] = A;
  else A = f[4];
  let d = A,
    y = T(!1),
    x;
  if (f[5] !== _ || f[6] !== l || f[7] !== c || f[8] !== t.authMethod || f[9] !== t.pinFable || f[10] !== t.pinHaiku || f[11] !== t.pinOpus || f[12] !== t.pinSonnet || f[13] !== t.verifiedIdentity) x = async () => {
    if (y.current) {
      return
    }
    y.current = !0;
    let {
      error: O
    } = await ln("userSettings", {
      env: _
    }, void 0, c);
    if (O) {
      y.current = !1, p(O.message);
      return
    }
    i("tengu_vertex_setup_complete", {
      auth_method: ue(t.authMethod),
      pinned_models: Boolean(t.pinSonnet || t.pinOpus || t.pinFable || t.pinHaiku),
      verified: Boolean(t.verifiedIdentity)
    }), l(`Vertex AI configuration saved to ${P}.${t.authMethod==="adc"?" When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically.":""}`)
  }, f[5] = _, f[6] = l, f[7] = c, f[8] = t.authMethod, f[9] = t.pinFable, f[10] = t.pinHaiku, f[11] = t.pinOpus, f[12] = t.pinSonnet, f[13] = t.verifiedIdentity, f[14] = x;
  else x = f[14];
  let D = x,
    v;
  if (f[15] === S) v = r(n, {
    children: ["These will be written to ", P, " under env:"]
  }), f[15] = v;
  else v = f[15];
  let E;
  if (f[16] !== d) E = e(s, {
    flexDirection: "column",
    children: d.map(Pt)
  }), f[16] = d, f[17] = E;
  else E = f[17];
  let b;
  if (f[18] !== t.verifiedIdentity) b = t.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [e(et, {
      status: "success",
      withSpace: !0
    }), "Verified as ", t.verifiedIdentity]
  }), f[18] = t.verifiedIdentity, f[19] = b;
  else b = f[19];
  let W;
  if (f[20] !== C) W = e(ko, {
    error: C
  }), f[20] = C, f[21] = W;
  else W = f[21];
  let X;
  if (f[22] !== m || f[23] !== D) X = e(qn, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: D,
    onCancel: m
  }), f[22] = m, f[23] = D, f[24] = X;
  else X = f[24];
  let U;
  if (f[25] !== E || f[26] !== b || f[27] !== W || f[28] !== X) U = e(Jl, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [v, E, b, W, X]
    })
  }), f[25] = E, f[26] = b, f[27] = W, f[28] = X, f[29] = U;
  else U = f[29];
  return U
}

function ae() {
  return {
    sonnet: Io[e$].vertex,
    opus: Io[tHt].vertex,
    haiku: Io[dce].vertex,
    fable: Io[nHt].vertex
  }
}

function Ie(o) {
  let l = new Set;
  for (let c of Object.values(Io))
    if (c.vertex !== null && c.vertex.toLowerCase().includes(o)) l.add(c.vertex);
  return [...l].sort().reverse()
}

function be(o) {
  if (o.authMethod === "serviceAccount" && o.keyFile) return {
    kind: "keyFile",
    path: o.keyFile
  };
  return {
    kind: "default"
  }
}
var It = 12000;
async function se(o) {
  let l;
  try {
    let t = await uit(be(o), o.projectId),
      C = (async () => {
        await (await t.getClient()).getAccessToken()
      })();
    await Ht(C, It, "Timed out waiting for GCP credentials");
    let p;
    try {
      p = (await t.getCredentials()).client_email
    } catch {
      p = void 0
    }
    l = p ?? (o.authMethod === "serviceAccount" ? `service account (${o.keyFile})` : "Application Default Credentials")
  } catch (t) {
    return {
      status: "error",
      ...Rt(t, o)
    }
  }
  let c = ae().haiku,
    m = await ce(o, c);
  if (m.ok) return {
    status: "ok",
    identity: l,
    note: `Test request to ${c} succeeded.`
  };
  switch (m.reason) {
    case "auth":
      return {
        status: "error", error: "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope."
      };
    case "permission":
      return {
        status: "error", error: `Permission denied calling Vertex AI in project "${o.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.`
      };
    case "model":
      return {
        status: "ok", identity: l, note: `Credentials work, but ${c} returned not-found in ${o.region}. Pin a model you have access to on the next step, or try the 'global' region.`
      };
    case "network":
      return {
        status: "error", error: `Could not reach Vertex AI in region "${o.region}". Check the region name and your network.`
      };
    case "other":
      return {
        status: "ok", identity: l, note: `Credentials work, but the test request to ${c} failed. You can pin a different model on the next step.`
      }
  }
}
async function ce(o, l) {
  let c;
  try {
    c = await bt(o)
  } catch {
    return {
      ok: !1,
      reason: "auth"
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
  } catch (m) {
    let t = m?.status;
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
async function bt(o) {
  let [{
    AnthropicVertex: l
  }, {
    getProxyFetchOptions: c
  }] = await Promise.all([import("B:/~BUN/root/chunk-djye8fpa.js"), import("B:/~BUN/root/chunk-nxjptnfx.js")]), m = await uit(be(o), o.projectId);
  return Yme(new l({
    region: o.region,
    projectId: o.projectId,
    googleAuth: m,
    maxRetries: 0,
    defaultHeaders: Xme(),
    ...dC,
    timeout: 15000,
    fetchOptions: c({
      url: a.ANTHROPIC_VERTEX_BASE_URL || F9e(o.region)
    })
  }))
}
var ne = "gcloud auth application-default login";

function Rt(o, l) {
  let c = o?.message ?? String(o);
  if (l.authMethod === "serviceAccount" && /ENOENT|no such file/i.test(c)) return {
    error: `Service account key file not found: ${l.keyFile}`
  };
  if (/Could not load the default credentials/i.test(c)) return l.authMethod === "adc" ? {
    error: "No Application Default Credentials found. Run:",
    command: ne
  } : {
    error: "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login."
  };
  if (/invalid_grant|Token has been expired|reauth/i.test(c)) {
    if (l.authMethod === "serviceAccount") return {
      error: "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key)."
    };
    if (l.authMethod === "adc") return {
      error: "GCP credentials expired. Run:",
      command: ne
    };
    return {
      error: "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file)."
    }
  }
  if (/Unable to detect a Project Id/i.test(c)) return {
    error: "Could not determine a GCP project from the credentials. Go back and set the project ID explicitly."
  };
  if (/Timed out waiting for GCP/i.test(c)) return {
    error: "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).",
    ...l.authMethod === "adc" && {
      command: ne
    }
  };
  return {
    error: c
  }
}
var Re = {
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
    return Object.fromEntries(tO.map((l) => [l, {
      fallback: o[l]
    }]))
  },
  listTierCandidates: (o) => Ie(o),
  pickerSubtitle: (o) => `Available ${yT[o]} versions on Vertex AI \xB7 each tested with a one-token request.`,
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
    provider: Re,
    onPins: o
  }), l[0] = o, l[1] = c;
  else c = l[1];
  return c
}
N();
import {
  readdir as wt,
  readFile as Ve
} from "fs/promises";
import {
  homedir as zt
} from "os";
import {
  join as q
} from "path";
async function de() {
  let o = new Set,
    l = a.CLOUDSDK_CONFIG ?? Lt();
  try {
    let c = q(l, "configurations");
    for (let m of await wt(c)) {
      if (!m.startsWith("config_")) continue;
      try {
        let t = await Ve(q(c, m), "utf8");
        for (let C of t.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let p = C[1]?.trim();
          if (p) o.add(p)
        }
      } catch {}
    }
  } catch {}
  try {
    let c = J(await Ve(q(l, "application_default_credentials.json"), "utf8"));
    if (c.quota_project_id) o.add(c.quota_project_id)
  } catch {}
  return [...o].sort()
}

function Lt() {
  if (a.APPDATA) return q(a.APPDATA, "gcloud");
  return q(zt(), ".config", "gcloud")
}

function Zt() {
  return []
}

function Qt() {
  return de().catch(Zt)
}

function er(dt) {
  return e(kn.Item, {
    label: dt
  }, dt)
}
var we = "__manual__",
  Le = 12;

function fe() {
  let l = w(3),
    [o] = g(Qt),
    c;
  if (l[0] === S) c = e(Jl, {
    subtitle: "GCP project",
    children: e(ur, {
      message: "Reading ~/.config/gcloud\u2026"
    })
  }), l[0] = c;
  else c = l[0];
  let m;
  if (l[1] !== o) m = e(Sr, {
    fallback: c,
    children: e(pe, {
      projectsPromise: o
    })
  }), l[1] = o, l[2] = m;
  else m = l[2];
  return m
}

function pe(o) {
  let u = w(48),
    {
      projectsPromise: l
    } = o,
    c = mr(l),
    {
      goBack: m,
      goToStep: t,
      updateWizardData: C,
      wizardData: p
    } = gd(),
    f = c.length > Le,
    P;
  if (u[0] !== c || u[1] !== p.projectId) P = p.projectId && !c.includes(p.projectId), u[0] = c, u[1] = p.projectId, u[2] = P;
  else P = u[2];
  let h = Boolean(P),
    [_, A] = g(c.length === 0 || f || h),
    [d, y] = g(p.projectId ?? ""),
    [x, O] = g(d.length),
    [D, v] = g(null);
  const E = _ ? "Settings" : "Confirmation";
  let b;
  if (u[3] !== E) b = {
    context: E
  }, u[3] = E, u[4] = b;
  else b = u[4];
  ze("confirm:no", m, b);
  let W;
  if (u[5] !== t || u[6] !== C) W = (X) => {
    C({
      projectId: X
    }), t(k.REGION)
  }, u[5] = t, u[6] = C, u[7] = W;
  else W = u[7];
  let U = W;
  if (!_) {
    const Q = c.length;
    let L;
    if (u[8] !== c.length) L = I(c.length, "project"), u[8] = c.length, u[9] = L;
    else L = u[9];
    let G;
    if (u[10] !== c.length || u[11] !== L) G = r(n, {
      dimColor: !0,
      children: ["Found ", Q, " ", L, " in your gcloud configurations."]
    }), u[10] = c.length, u[11] = L, u[12] = G;
    else G = u[12];
    let H;
    if (u[13] !== c || u[14] !== p.projectId) H = c.indexOf(p.projectId ?? ""), u[13] = c, u[14] = p.projectId, u[15] = H;
    else H = u[15];
    const K = Math.max(0, H);
    let j;
    if (u[16] !== c || u[17] !== U) j = (kr) => {
      let st = c[kr];
      if (st === void 0) A(!0);
      else U(st)
    }, u[16] = c, u[17] = U, u[18] = j;
    else j = u[18];
    let M;
    if (u[19] !== c) M = c.map(er), u[19] = c, u[20] = M;
    else M = u[20];
    let Z;
    if (u[21] === S) Z = e(kn.Item, {
      label: "Type a different project\u2026"
    }, we), u[21] = Z;
    else Z = u[21];
    let te;
    if (u[22] !== j || u[23] !== M || u[24] !== K) te = r(kn, {
      defaultFocusIndex: K,
      onSelect: j,
      children: [M, Z]
    }), u[22] = j, u[23] = M, u[24] = K, u[25] = te;
    else te = u[25];
    let ct;
    if (u[26] !== te || u[27] !== G) ct = e(Jl, {
      subtitle: "GCP project",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [G, te]
      })
    }), u[26] = te, u[27] = G, u[28] = ct;
    else ct = u[28];
    return ct
  }
  let Q;
  if (u[29] !== U || u[30] !== d) Q = () => {
    let lt = d.trim();
    if (!lt) {
      v("Project ID is required");
      return
    }
    v(null), U(lt)
  }, u[29] = U, u[30] = d, u[31] = Q;
  else Q = u[31];
  let ve = Q,
    L;
  if (u[32] === S) L = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), u[32] = L;
  else L = u[32];
  let G;
  if (u[33] === S) G = e(n, {
    children: "The project where Vertex AI is enabled."
  }), u[33] = G;
  else G = u[33];
  let H;
  if (u[34] !== c.length || u[35] !== f) H = f && r(n, {
    dimColor: !0,
    children: ["Found ", c.length, " projects \u2014 too many to list."]
  }), u[34] = c.length, u[35] = f, u[36] = H;
  else H = u[36];
  let K;
  if (u[37] === S) K = e(n, {
    dimColor: !0,
    children: "Find it with `gcloud config get-value project` or in the GCP console header."
  }), u[37] = K;
  else K = u[37];
  let j;
  if (u[38] !== x || u[39] !== ve || u[40] !== d) j = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: d,
      onChange: y,
      onSubmit: ve,
      placeholder: "my-gcp-project",
      columns: 60,
      cursorOffset: x,
      onChangeCursorOffset: O,
      focus: !0,
      showCursor: !0
    })
  }), u[38] = x, u[39] = ve, u[40] = d, u[41] = j;
  else j = u[41];
  let M;
  if (u[42] !== D) M = D && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: D
    })
  }), u[42] = D, u[43] = M;
  else M = u[43];
  let Z;
  if (u[44] !== j || u[45] !== M || u[46] !== H) Z = e(Jl, {
    subtitle: "GCP project ID",
    footerText: L,
    children: r(s, {
      flexDirection: "column",
      children: [G, H, K, j, M]
    })
  }), u[44] = j, u[45] = M, u[46] = H, u[47] = Z;
  else Z = u[47];
  return Z
}
N();

function he() {
  let h = w(17),
    {
      goBack: o,
      goNext: l,
      updateWizardData: c,
      wizardData: m
    } = gd(),
    [t, C] = g(m.region ?? "global"),
    [p, f] = g(t.length),
    [u, P] = g(null),
    _;
  if (h[0] === S) _ = {
    context: "Settings"
  }, h[0] = _;
  else _ = h[0];
  ze("confirm:no", o, _);
  let A;
  if (h[1] !== l || h[2] !== c || h[3] !== t) A = () => {
    let d = t.trim();
    if (!d) {
      P("Region is required");
      return
    }
    P(null), c({
      region: d
    }), l()
  }, h[1] = l, h[2] = c, h[3] = t, h[4] = A;
  else A = h[4];
  let y = A,
    x;
  if (h[5] === S) x = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), h[5] = x;
  else x = h[5];
  let O, D;
  if (h[6] === S) O = e(n, {
    children: "Where Claude models are served from."
  }), D = e(n, {
    dimColor: !0,
    children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
  }), h[6] = O, h[7] = D;
  else O = h[6], D = h[7];
  let v;
  if (h[8] !== p || h[9] !== y || h[10] !== t) v = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: t,
      onChange: C,
      onSubmit: y,
      placeholder: "global",
      columns: 40,
      cursorOffset: p,
      onChangeCursorOffset: f,
      focus: !0,
      showCursor: !0
    })
  }), h[8] = p, h[9] = y, h[10] = t, h[11] = v;
  else v = h[11];
  let E;
  if (h[12] !== u) E = u && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: u
    })
  }), h[12] = u, h[13] = E;
  else E = h[13];
  let b;
  if (h[14] !== v || h[15] !== E) b = e(Jl, {
    subtitle: "Vertex AI region",
    footerText: x,
    children: r(s, {
      flexDirection: "column",
      children: [O, D, v, E]
    })
  }), h[14] = v, h[15] = E, h[16] = b;
  else b = h[16];
  return b
}
N();
import {
  homedir as Ye
} from "os";
import {
  join as Je
} from "path";

function De() {
  let h = w(17),
    {
      goBack: o,
      goToStep: l,
      updateWizardData: c,
      wizardData: m
    } = gd(),
    [t, C] = g(m.keyFile ?? ""),
    [p, f] = g(t.length),
    [u, P] = g(null),
    _;
  if (h[0] === S) _ = {
    context: "Settings"
  }, h[0] = _;
  else _ = h[0];
  ze("confirm:no", o, _);
  let A;
  if (h[1] !== l || h[2] !== c || h[3] !== t) A = () => {
    let d = t.trim();
    if (!d) {
      P("Path is required");
      return
    }
    P(null);
    let y = d === "~" || d.startsWith("~/") ? Je(Ye(), d.slice(1)) : d;
    c({
      keyFile: y
    }), l(k.PROJECT)
  }, h[1] = l, h[2] = c, h[3] = t, h[4] = A;
  else A = h[4];
  let x = A,
    O;
  if (h[5] === S) O = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: "continue"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), h[5] = O;
  else O = h[5];
  let D, v;
  if (h[6] === S) D = e(n, {
    children: "Path to the service account JSON key file."
  }), v = e(n, {
    dimColor: !0,
    children: "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key."
  }), h[6] = D, h[7] = v;
  else D = h[6], v = h[7];
  let E;
  if (h[8] !== p || h[9] !== x || h[10] !== t) E = e(s, {
    marginTop: 1,
    children: e(Qn, {
      value: t,
      onChange: C,
      onSubmit: x,
      placeholder: "~/keys/my-project-vertex.json",
      columns: 60,
      cursorOffset: p,
      onChangeCursorOffset: f,
      focus: !0,
      showCursor: !0
    })
  }), h[8] = p, h[9] = x, h[10] = t, h[11] = E;
  else E = h[11];
  let b;
  if (h[12] !== u) b = u && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: u
    })
  }), h[12] = u, h[13] = b;
  else b = h[13];
  let W;
  if (h[14] !== E || h[15] !== b) W = e(Jl, {
    subtitle: "Service account key",
    footerText: O,
    children: r(s, {
      flexDirection: "column",
      children: [D, v, E, b]
    })
  }), h[14] = E, h[15] = b, h[16] = W;
  else W = h[16];
  return W
}
N();

function Ae() {
  let t = w(35),
    {
      goBack: o,
      goNext: l,
      updateWizardData: c,
      wizardData: m
    } = gd(),
    C;
  if (t[0] === S) C = {
    phase: "checking"
  }, t[0] = C;
  else C = t[0];
  let [p, f] = g(C), u;
  if (t[1] !== c || t[2] !== m) u = () => {
    let P = !1;
    return se(m).then((h) => {
      if (P) {
        return
      }
      if (h.status === "ok") c({
        verifiedIdentity: h.identity
      });
      else c({
        verifiedIdentity: void 0
      });
      f({
        phase: "done",
        result: h
      })
    }), () => {
      P = !0
    }
  }, t[1] = c, t[2] = m, t[3] = u;
  else u = t[3];
  let _;
  if (t[4] === S) _ = [], t[4] = _;
  else _ = t[4];
  if (R(u, _), p.phase === "checking") {
    let A;
    if (t[5] === S) A = e(Jl, {
      subtitle: "Verifying credentials",
      children: e(ur, {
        message: "Calling Google Cloud\u2026",
        subtitle: "This may take a few seconds."
      })
    }), t[5] = A;
    else A = t[5];
    return A
  }
  let {
    result: d
  } = p;
  switch (d.status) {
    case "ok": {
      let A;
      if (t[6] === S) A = e(et, {
        status: "success",
        withSpace: !0
      }), t[6] = A;
      else A = t[6];
      let y;
      if (t[7] !== d.identity) y = r(n, {
        children: [A, "Authenticated as ", e(n, {
          bold: !0,
          children: d.identity
        })]
      }), t[7] = d.identity, t[8] = y;
      else y = t[8];
      let x;
      if (t[9] !== d.note) x = d.note && e(n, {
        dimColor: !0,
        children: d.note
      }), t[9] = d.note, t[10] = x;
      else x = t[10];
      let O;
      if (t[11] === S) O = [{
        label: "Continue",
        value: "continue"
      }], t[11] = O;
      else O = t[11];
      let D;
      if (t[12] !== l) D = () => l(), t[12] = l, t[13] = D;
      else D = t[13];
      let v;
      if (t[14] !== o || t[15] !== D) v = e(Fe, {
        options: O,
        onChange: D,
        onCancel: o
      }), t[14] = o, t[15] = D, t[16] = v;
      else v = t[16];
      let E;
      if (t[17] !== y || t[18] !== x || t[19] !== v) E = e(Jl, {
        subtitle: "Verification",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [y, x, v]
        })
      }), t[17] = y, t[18] = x, t[19] = v, t[20] = E;
      else E = t[20];
      return E
    }
    case "error": {
      let A;
      if (t[21] === S) A = e(et, {
        status: "error",
        withSpace: !0
      }), t[21] = A;
      else A = t[21];
      let y;
      if (t[22] !== d.error) y = r(n, {
        children: [A, d.error]
      }), t[22] = d.error, t[23] = y;
      else y = t[23];
      let x;
      if (t[24] !== d.command) x = d.command && r(n, {
        bold: !0,
        color: "suggestion",
        children: ["    ", d.command]
      }), t[24] = d.command, t[25] = x;
      else x = t[25];
      let O;
      if (t[26] !== y || t[27] !== x) O = r(s, {
        flexDirection: "column",
        children: [y, x]
      }), t[26] = y, t[27] = x, t[28] = O;
      else O = t[28];
      let D;
      if (t[29] !== o || t[30] !== l) D = e(qn, {
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Save anyway (skip verification)",
        cancelLabel: "Go back and fix",
        onConfirm: l,
        onCancel: o
      }), t[29] = o, t[30] = l, t[31] = D;
      else D = t[31];
      let v;
      if (t[32] !== O || t[33] !== D) v = e(Jl, {
        subtitle: "Verification failed",
        color: "error",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [O, D]
        })
      }), t[32] = O, t[33] = D, t[34] = v;
      else v = t[34];
      return v
    }
  }
}

function Or() {}
var at = [re, De, fe, he, Ae, le, ie];

function rJe(o) {
  let t = w(7),
    {
      onComplete: l,
      onCancel: c,
      exitOnCtrlCD: m
    } = o,
    C;
  if (t[0] !== l) C = {
    onComplete: l
  }, t[0] = l, t[1] = C;
  else C = t[1];
  let p;
  if (t[2] === S) p = {}, t[2] = p;
  else p = t[2];
  let f;
  if (t[3] !== m || t[4] !== c || t[5] !== C) f = e(xPe, {
    steps: at,
    stepProps: C,
    initialData: p,
    onComplete: Or,
    onCancel: c,
    exitOnCtrlCD: m,
    title: "Set up Google Vertex AI",
    showStepCounter: !1
  }), t[3] = m, t[4] = c, t[5] = C, t[6] = f;
  else f = t[6];
  return f
}
export {
  rJe
};
