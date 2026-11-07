// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Hr } from "B:/~BUN/root/chunk-myfamxtp.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { eg, jR, h2n } from "B:/~BUN/root/chunk-1g25msn4.js";
import { zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { op, Zks, M7e, Em } from "B:/~BUN/root/chunk-ke150ry1.js";
import { whi, qar } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Gbn } from "B:/~BUN/root/chunk-jydryja2.js";
import { CF } from "B:/~BUN/root/chunk-jjjspatt.js";
import { tG, i1t } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { lstat as f, mkdir as T, readFile as w } from "fs/promises";
import { basename as D, dirname as R, join as I, sep as F } from "path";
var p = 524288;
function bCt(e) {
  return {
    scoping: e.replace(/\.jsonl$/, ".forked-skill.json"),
    provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json")
  };
}
function v(e) {
  return bCt(Em(e));
}
function b(e) {
  if (e === void 0) return;
  let scoping = Gbn(e, ".forked-skill.json"),
    provenanceMarker = Gbn(e, ".forked-skill.marker.json");
  return scoping !== void 0 && provenanceMarker !== void 0 ? {
    scoping: scoping,
    provenanceMarker: provenanceMarker
  } : void 0;
}
function M(skillName) {
  return _({
    forkedSkill: !0,
    ...(skillName !== void 0 && {
      skillName: skillName
    })
  });
}
function m(e) {
  let r = Zks();
  if (typeof r !== "string") {
    let u = b(M7e(e));
    return u && j(u);
  }
  if (R(r) !== op()) return;
  let projectKey = D(r),
    sessionId = z(),
    o = I(r, sessionId) + F,
    a = Em(e);
  if (!a.startsWith(o)) return;
  let s = a.slice(o.length).split(F),
    d = s.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![projectKey, sessionId, ...s].every(Hr)) return;
  let B = s.slice(0, -1),
    S = u => ({
      namespace: "sidecar",
      projectKey: projectKey,
      sessionId: sessionId,
      relPath: [...B, u]
    }),
    scoping_2 = S(d.replace(/\.jsonl$/, ".forked-skill.json")),
    provenanceMarker_2 = S(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return eg(scoping_2) === void 0 && eg(provenanceMarker_2) === void 0 ? {
    scoping: scoping_2,
    provenanceMarker: provenanceMarker_2
  } : void 0;
}
function j(e) {
  let scoping_3 = h2n(e.scoping),
    provenanceMarker_3 = h2n(e.provenanceMarker);
  return scoping_3 && provenanceMarker_3 ? {
    scoping: scoping_3,
    provenanceMarker: provenanceMarker_3
  } : void 0;
}
async function h(e, r) {
  let n = await e.statMeta(r);
  if (!n.ok) return n.error.code === "NotFound" ? {
    kind: "absent"
  } : {
    kind: "unusable",
    ...l(n.error)
  };
  if (n.value.size > p) return {
    kind: "unusable"
  };
  let i = await e.read([r]);
  if (!i.ok) return {
    kind: "unusable",
    ...l(i.error)
  };
  let o = i.value.items[0];
  return o.found ? {
    kind: "text",
    text: Buffer.from(o.value).toString("utf8")
  } : {
    kind: "absent"
  };
}
async function L(e, r) {
  let n = await e.statMeta(r);
  if (n.ok) return {
    present: !0
  };
  return n.error.code === "NotFound" ? {
    present: !1
  } : {
    present: !0,
    ...l(n.error)
  };
}
function c(e) {
  return e === !0 ? {
    transientRead: !0
  } : {};
}
function l(e) {
  return c(i1t(e));
}
async function P(e, r, n) {
  let i = await e.write(r, M(n), {
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw t(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed");
}
function E() {
  if (q()) throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path");
}
async function vYr(e, r, n) {
  let i = X() && n ? jR(e) : void 0;
  if (n && i) return P(n, i, r);
  E(), await zn(e, M(r));
}
async function hii(e, r, n) {
  let i = X() && n ? m(e) : void 0;
  if (n && i) {
    await P(n, i.provenanceMarker, r.skillName);
    let a = await n.write(i.scoping, _(r), {
      mode: 438 & ~process.umask()
    });
    if (!a.ok) throw t(`forked-skill scoping write: ${a.error.code}`), Error("forked-skill scoping record write failed");
    return;
  }
  E();
  let o = v(e);
  await T(R(o.scoping), {
    recursive: !0
  }), await vYr(o.provenanceMarker, r.skillName), await zn(o.scoping, _(r));
}
async function xZn(e, r) {
  let n = X() && r ? m(e) : void 0;
  if (r && n) return x(r, n);
  let i = b(M7e(e));
  return i === void 0 ? {
    status: "diskless"
  } : Fbn(i);
}
async function Fbn(e, r) {
  let n = X() && r ? j(e) : void 0;
  if (r && n) return x(r, n);
  let i = CF(e.scoping),
    o = CF(e.provenanceMarker);
  if (i === void 0 || o === void 0) return {
    status: "diskless"
  };
  let a;
  try {
    let s = await f(i);
    if (!s.isFile() || s.size > p) return {
      status: "malformed"
    };
    a = await w(i, "utf-8");
  } catch (error) {
    if (K(error)) return await N(o);
    return {
      status: "malformed",
      ...c(tG(k(error)))
    };
  }
  return A(a);
}
function A(e) {
  let r;
  try {
    r = ee(e);
  } catch {
    return {
      status: "malformed"
    };
  }
  let n = qar().safeParse(r);
  return n.success ? {
    status: "valid",
    scoping: n.data
  } : {
    status: "malformed"
  };
}
async function x(e, r) {
  let n = await h(e, r.scoping);
  switch (n.kind) {
    case "text":
      return A(n.text);
    case "unusable":
      return {
        status: "malformed",
        ...c(n.transientRead)
      };
    case "absent":
      {
        let i = await L(e, r.provenanceMarker);
        return i.present ? {
          status: "absent-but-marked",
          ...c(i.transientRead)
        } : {
          status: "absent"
        };
      }
  }
}
async function N(e) {
  try {
    return await f(e), {
      status: "absent-but-marked"
    };
  } catch (error) {
    return K(error) ? {
      status: "absent"
    } : {
      status: "absent-but-marked",
      ...c(tG(k(error)))
    };
  }
}
async function PZn(e, r) {
  let n,
    i = X() && r ? m(e) : void 0;
  if (r && i) {
    let s = await h(r, i.provenanceMarker);
    if (s.kind !== "text") return;
    n = s.text;
  } else if (q()) return;else {
    let {
      provenanceMarker: provenanceMarker_4
    } = v(e);
    try {
      let d = await f(provenanceMarker_4);
      if (!d.isFile() || d.size > p) return;
      n = await w(provenanceMarker_4, "utf-8");
    } catch {
      return;
    }
  }
  let o;
  try {
    o = ee(n);
  } catch {
    return;
  }
  let a = whi().safeParse(o);
  return a.success ? a.data.skillName : void 0;
}
export { bCt, vYr, hii, xZn, Fbn, PZn };