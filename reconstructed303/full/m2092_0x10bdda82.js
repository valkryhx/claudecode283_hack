// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  yF,
  CQ
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  H,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  nWt
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  A_,
  Ht
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  $Je,
  bn
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  CJ
} from "B:/~BUN/root/chunk-htbmes7q.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  rt
} from "B:/~BUN/root/chunk-pw5vpw1q.js";
import {
  le,
  mke
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  lD,
  pve
} from "B:/~BUN/root/chunk-q0t5e1bx.js";
import {
  jpe,
  jZ,
  Wpe
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  C8,
  fot,
  Sz,
  G_e
} from "B:/~BUN/root/chunk-qvgd0dpp.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  wNe
} from "B:/~BUN/root/chunk-dvjfq0e0.js";
import {
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  an
} from "B:/~BUN/root/chunk-31x8pa20.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function D() {
  return {
    provider: xe(),
    awsRegion: $Je(),
    vertexRegion: nWt(),
    vertexProjectId: a.ANTHROPIC_VERTEX_PROJECT_ID ?? "",
    accountDigest: an([a.AWS_PROFILE, a.AWS_BEARER_TOKEN_BEDROCK, a.AWS_ACCESS_KEY_ID, a.GOOGLE_APPLICATION_CREDENTIALS].map((o) => o ?? "").join(`
`))
  }
}

function G(o, p) {
  let g = D(),
    c = o.provider === p && g.provider === o.provider && g.awsRegion === o.awsRegion && g.vertexRegion === o.vertexRegion && g.vertexProjectId === o.vertexProjectId && g.accountDigest === o.accountDigest;
  return t(`Provider-setup restart: ${c?"carrying":"dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId||"no-project"}, now ${g.provider} ${g.awsRegion}/${g.vertexRegion}/${g.vertexProjectId||"no-project"}${g.accountDigest===o.accountDigest?"":", credentials changed"}, target ${p})`), c
}
var P = "Your settings were saved \u2014 restart Claude Code to apply them.";
async function b(o, p, g) {
  try {
    if (Ht()) return `A background session can't restart itself. ${P}`;
    if (A_() !== null) return `Claude can't restart itself from inside the agents view. ${P}`;
    let c = W(o);
    if (c !== void 0) return c;
    if (bn()) return;
    if (await G_e(), await Sz(lD(o), o.storageV5), bn()) return;
    let m = W(o);
    if (m !== void 0) return m;
    let v = le(o),
      R = await C8(lD(o), "relaunch", {
        responseStreaming: pve(o)
      }, o.storageV5);
    await fot(R, {
      freshIfNoTranscript: !0,
      extraArgs: [...jpe(v, mke(o), {
        carryModel: G(g, p)
      }), ...Wpe(v, CQ())],
      proactivity: {
        proactivityLevel: o.getProactivityLevel(),
        toolPermissionContext: v
      },
      env: CJ()
    }, o.storageV5);
    return
  } catch (c) {
    return l(H(c)), `Couldn't restart Claude Code (${d(c)}). ${P}`
  }
}

function W(o) {
  let p = jZ(le(o), yF());
  if (p.length > 0) return `This session has restrictions a restart can't carry over (${p.join("; ")}). ${P}`;
  if (wNe(o.taskRegistry.all())) return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${P}`;
  return
}

function Lzt(o) {
  let u = w(21),
    {
      Wizard: p,
      cancelledEvent: g,
      targetProvider: c,
      onDone: m,
      context: v
    } = o,
    [R, Z] = y(null),
    [h] = y(D),
    I = A(!1),
    [T, F] = y(!1),
    N;
  if (u[0] !== v || u[1] !== h || u[2] !== m || u[3] !== c) N = () => {
    if (I.current) {
      return
    }
    I.current = !0, F(!0), b(v, c, h).then((V) => {
      if (V !== void 0) I.current = !1, F(!1), m(V, {
        display: "system"
      })
    })
  }, u[0] = v, u[1] = h, u[2] = m, u[3] = c, u[4] = N;
  else N = u[4];
  const _ = R !== null;
  let z;
  if (u[5] !== _) z = {
    context: "Confirmation",
    isActive: _
  }, u[5] = _, u[6] = z;
  else z = u[6];
  if (rt("confirm:yes", N, z), R !== null) {
    let C;
    if (u[7] !== R) C = e(n, {
      color: "success",
      children: R
    }), u[7] = R, u[8] = C;
    else C = u[8];
    let f;
    if (u[9] !== T) f = T ? e(n, {
      dimColor: !0,
      children: "Restarting Claude Code\u2026"
    }) : r(n, {
      dimColor: !0,
      children: ["Press ", e(n, {
        bold: !0,
        children: "Enter"
      }), " to restart Claude Code."]
    }), u[9] = T, u[10] = f;
    else f = u[10];
    let E;
    if (u[11] !== C || u[12] !== f) E = r(s, {
      flexDirection: "column",
      gap: 1,
      marginTop: 1,
      children: [C, f]
    }), u[11] = C, u[12] = f, u[13] = E;
    else E = u[13];
    return E
  }
  let C;
  if (u[14] === S) C = (ee) => Z(ee), u[14] = C;
  else C = u[14];
  let f;
  if (u[15] !== g || u[16] !== m) f = () => {
    i(g, {}), m()
  }, u[15] = g, u[16] = m, u[17] = f;
  else f = u[17];
  let E;
  if (u[18] !== p || u[19] !== f) E = e(p, {
    onComplete: C,
    onCancel: f
  }), u[18] = p, u[19] = f, u[20] = E;
  else E = u[20];
  return E
}
export {
  Lzt
};
