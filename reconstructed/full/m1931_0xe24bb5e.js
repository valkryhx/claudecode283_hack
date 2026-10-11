// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  qI,
  SK
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  te,
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Zmt
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  hb,
  vt
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  FYe
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  Ie
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  Mq
} from "B:/~BUN/root/chunk-aw2zngte.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Eo
} from "B:/~BUN/root/chunk-8zp66ckr.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  me,
  Ale
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  ax,
  nle
} from "B:/~BUN/root/chunk-yzpw1mdr.js";
import {
  qZ,
  f3,
  KZ
} from "B:/~BUN/root/chunk-9sy3w2pa.js";
import {
  cG,
  xWe,
  SU,
  QIe
} from "B:/~BUN/root/chunk-qzprwy0h.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  wSe
} from "B:/~BUN/root/chunk-8tap4h55.js";
import {
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  pn
} from "B:/~BUN/root/chunk-8j4yaj30.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function D() {
  return {
    provider: Ie(),
    awsRegion: FYe(),
    vertexRegion: Zmt(),
    vertexProjectId: a.ANTHROPIC_VERTEX_PROJECT_ID ?? "",
    accountDigest: pn([a.AWS_PROFILE, a.AWS_BEARER_TOKEN_BEDROCK, a.AWS_ACCESS_KEY_ID, a.GOOGLE_APPLICATION_CREDENTIALS].map((o) => o ?? "").join(`
`))
  }
}

function G(o, m) {
  let c = D(),
    p = o.provider === m && c.provider === o.provider && c.awsRegion === o.awsRegion && c.vertexRegion === o.vertexRegion && c.vertexProjectId === o.vertexProjectId && c.accountDigest === o.accountDigest;
  return t(`Provider-setup restart: ${p?"carrying":"dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId||"no-project"}, now ${c.provider} ${c.awsRegion}/${c.vertexRegion}/${c.vertexProjectId||"no-project"}${c.accountDigest===o.accountDigest?"":", credentials changed"}, target ${m})`), p
}
var P = "Your settings were saved \u2014 restart Claude Code to apply them.";
async function b(o, m, c) {
  try {
    if (vt()) return `A background session can't restart itself. ${P}`;
    if (hb() !== null) return `Claude can't restart itself from inside the agents view. ${P}`;
    let p = W(o);
    if (p !== void 0) return p;
    if (Eo()) return;
    if (await QIe(), await SU(ax(o), o.storageV5), Eo()) return;
    let f = W(o);
    if (f !== void 0) return f;
    let R = me(o),
      y = await cG(ax(o), "relaunch", {
        responseStreaming: nle(o)
      }, o.storageV5);
    await xWe(y, {
      freshIfNoTranscript: !0,
      extraArgs: [...qZ(R, Ale(o), {
        carryModel: G(c, m)
      }), ...KZ(R, SK())],
      proactivity: {
        proactivityLevel: o.getProactivityLevel(),
        toolPermissionContext: R
      },
      env: Mq()
    }, o.storageV5);
    return
  } catch (p) {
    return d(te(p)), `Couldn't restart Claude Code (${l(p)}). ${P}`
  }
}

function W(o) {
  let m = f3(me(o), qI());
  if (m.length > 0) return `This session has restrictions a restart can't carry over (${m.join("; ")}). ${P}`;
  if (wSe(o.taskRegistry.all())) return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${P}`;
  return
}

function Eht(o) {
  let v = w(21),
    {
      Wizard: m,
      cancelledEvent: c,
      targetProvider: p,
      onDone: f,
      context: R
    } = o,
    [y, Q] = g(null),
    [h] = g(D),
    I = T(!1),
    [_, B] = g(!1),
    F;
  if (v[0] !== R || v[1] !== h || v[2] !== f || v[3] !== p) F = () => {
    if (I.current) {
      return
    }
    I.current = !0, B(!0), b(R, p, h).then((V) => {
      if (V !== void 0) I.current = !1, B(!1), f(V, {
        display: "system"
      })
    })
  }, v[0] = R, v[1] = h, v[2] = f, v[3] = p, v[4] = F;
  else F = v[4];
  const A = y !== null;
  let z;
  if (v[5] !== A) z = {
    context: "Confirmation",
    isActive: A
  }, v[5] = A, v[6] = z;
  else z = v[6];
  if (ze("confirm:yes", F, z), y !== null) {
    let C;
    if (v[7] !== y) C = e(n, {
      color: "success",
      children: y
    }), v[7] = y, v[8] = C;
    else C = v[8];
    let u;
    if (v[9] !== _) u = _ ? e(n, {
      dimColor: !0,
      children: "Restarting Claude Code\u2026"
    }) : r(n, {
      dimColor: !0,
      children: ["Press ", e(n, {
        bold: !0,
        children: "Enter"
      }), " to restart Claude Code."]
    }), v[9] = _, v[10] = u;
    else u = v[10];
    let E;
    if (v[11] !== C || v[12] !== u) E = r(s, {
      flexDirection: "column",
      gap: 1,
      marginTop: 1,
      children: [C, u]
    }), v[11] = C, v[12] = u, v[13] = E;
    else E = v[13];
    return E
  }
  let C;
  if (v[14] === S) C = (Z) => Q(Z), v[14] = C;
  else C = v[14];
  let u;
  if (v[15] !== c || v[16] !== f) u = () => {
    i(c, {}), f()
  }, v[15] = c, v[16] = f, v[17] = u;
  else u = v[17];
  let E;
  if (v[18] !== m || v[19] !== u) E = e(m, {
    onComplete: C,
    onCancel: u
  }), v[18] = m, v[19] = u, v[20] = E;
  else E = v[20];
  return E
}
export {
  Eht
};
