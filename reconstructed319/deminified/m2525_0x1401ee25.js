// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { MN, Lae } from "B:/~BUN/root/chunk-game8aqv.js";
import { F, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { tun } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { tb, Gt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { yet, _n } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { X3 } from "B:/~BUN/root/chunk-amar4116.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { se, Wue } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { UP, ice } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { JEe, P9, QEe } from "B:/~BUN/root/chunk-4vcs773m.js";
import { Hke } from "B:/~BUN/root/chunk-d3pgwd75.js";
import { jY, fBe, TB, Cle } from "B:/~BUN/root/chunk-gghehvvc.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function D() {
  return {
    provider: Te(),
    awsRegion: yet(),
    vertexRegion: tun(),
    vertexProjectId: i.ANTHROPIC_VERTEX_PROJECT_ID ?? "",
    accountDigest: kn([i.AWS_PROFILE, i.AWS_BEARER_TOKEN_BEDROCK, i.AWS_ACCESS_KEY_ID, i.GOOGLE_APPLICATION_CREDENTIALS].map(item => item ?? "").join(`
`))
  };
}
function O(o, p) {
  let g = D(),
    c = o.provider === p && g.provider === o.provider && g.awsRegion === o.awsRegion && g.vertexRegion === o.vertexRegion && g.vertexProjectId === o.vertexProjectId && g.accountDigest === o.accountDigest;
  return t(`Provider-setup restart: ${c ? "carrying" : "dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId || "no-project"}, now ${g.provider} ${g.awsRegion}/${g.vertexRegion}/${g.vertexProjectId || "no-project"}${g.accountDigest === o.accountDigest ? "" : ", credentials changed"}, target ${p})`), c;
}
var P = "Your settings were saved \u2014 restart Claude Code to apply them.";
async function b(o, p, g) {
  try {
    if (Gt()) return `A background session can't restart itself. ${P}`;
    if (tb() !== null) return `Claude can't restart itself from inside the agents view. ${P}`;
    let c = W(o);
    if (c !== void 0) return c;
    if (_n()) return;
    if (await Cle(), await TB(UP(o), o.storageV5), _n()) return;
    let m = W(o);
    if (m !== void 0) return m;
    let toolPermissionContext = se(o),
      R = await jY(UP(o), "relaunch", {
        responseStreaming: ice(o)
      }, o.storageV5);
    await fBe(R, {
      freshIfNoTranscript: !0,
      extraArgs: [...JEe(toolPermissionContext, Wue(o), {
        carryModel: O(g, p)
      }), ...QEe(toolPermissionContext, Lae())],
      proactivity: {
        proactivityLevel: o.getProactivityLevel(),
        toolPermissionContext: toolPermissionContext
      },
      env: X3()
    }, o.storageV5);
    return;
  } catch (error) {
    return a(F(error)), `Couldn't restart Claude Code (${d(error)}). ${P}`;
  }
}
function W(o) {
  let p = P9(se(o), MN());
  if (p.length > 0) return `This session has restrictions a restart can't carry over (${p.join("; ")}). ${P}`;
  if (Hke(o.taskRegistry.all())) return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${P}`;
  return;
}
function npn(o) {
  let u = S(21),
    {
      Wizard: Wizard,
      cancelledEvent: cancelledEvent,
      targetProvider: targetProvider,
      onDone: onDone,
      context: context
    } = o,
    [children, Z] = y(null),
    [h] = y(D),
    I = A(!1),
    [T, N] = y(!1),
    V;
  if (u[0] !== context || u[1] !== h || u[2] !== onDone || u[3] !== targetProvider) V = () => {
    if (I.current) {
      return;
    }
    I.current = !0, N(!0), b(context, targetProvider, h).then(z => {
      if (z !== void 0) I.current = !1, N(!1), onDone(z, {
        display: "system"
      });
    });
  }, u[0] = context, u[1] = h, u[2] = onDone, u[3] = targetProvider, u[4] = V;else V = u[4];
  const isActive = children !== null;
  let G;
  if (u[5] !== isActive) G = {
    context: "Confirmation",
    isActive: isActive
  }, u[5] = isActive, u[6] = G;else G = u[6];
  if (pt("confirm:yes", V, G), children !== null) {
    let C;
    if (u[7] !== children) C = e(n, {
      color: "success",
      children: children
    }), u[7] = children, u[8] = C;else C = u[8];
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
    }), u[9] = T, u[10] = f;else f = u[10];
    let E;
    if (u[11] !== C || u[12] !== f) E = r(s, {
      flexDirection: "column",
      gap: 1,
      marginTop: 1,
      children: [C, f]
    }), u[11] = C, u[12] = f, u[13] = E;else E = u[13];
    return E;
  }
  let onComplete;
  if (u[14] === w) onComplete = ee => Z(ee), u[14] = onComplete;else onComplete = u[14];
  let onCancel;
  if (u[15] !== cancelledEvent || u[16] !== onDone) onCancel = () => {
    l(cancelledEvent, {}), onDone();
  }, u[15] = cancelledEvent, u[16] = onDone, u[17] = onCancel;else onCancel = u[17];
  let E;
  if (u[18] !== Wizard || u[19] !== onCancel) E = e(Wizard, {
    onComplete: onComplete,
    onCancel: onCancel
  }), u[18] = Wizard, u[19] = onCancel, u[20] = E;else E = u[20];
  return E;
}
export { npn };