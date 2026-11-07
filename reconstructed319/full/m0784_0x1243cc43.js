// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  k,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Hr
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  eg,
  jR,
  h2n
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  op,
  Zks,
  M7e,
  Em
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  whi,
  qar
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Gbn
} from "B:/~BUN/root/chunk-jydryja2.js";
import {
  CF
} from "B:/~BUN/root/chunk-jjjspatt.js";
import {
  tG,
  i1t
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  lstat as f,
  mkdir as T,
  readFile as w
} from "fs/promises";
import {
  basename as D,
  dirname as R,
  join as I,
  sep as F
} from "path";
var p = 524288;

function bCt(e) {
  return {
    scoping: e.replace(/\.jsonl$/, ".forked-skill.json"),
    provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json")
  }
}

function v(e) {
  return bCt(Em(e))
}

function b(e) {
  if (e === void 0) return;
  let r = Gbn(e, ".forked-skill.json"),
    n = Gbn(e, ".forked-skill.marker.json");
  return r !== void 0 && n !== void 0 ? {
    scoping: r,
    provenanceMarker: n
  } : void 0
}

function M(e) {
  return _({
    forkedSkill: !0,
    ...e !== void 0 && {
      skillName: e
    }
  })
}

function m(e) {
  let r = Zks();
  if (typeof r !== "string") {
    let u = b(M7e(e));
    return u && j(u)
  }
  if (R(r) !== op()) return;
  let n = D(r),
    i = z(),
    o = I(r, i) + F,
    a = Em(e);
  if (!a.startsWith(o)) return;
  let s = a.slice(o.length).split(F),
    d = s.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![n, i, ...s].every(Hr)) return;
  let B = s.slice(0, -1),
    S = (u) => ({
      namespace: "sidecar",
      projectKey: n,
      sessionId: i,
      relPath: [...B, u]
    }),
    g = S(d.replace(/\.jsonl$/, ".forked-skill.json")),
    y = S(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return eg(g) === void 0 && eg(y) === void 0 ? {
    scoping: g,
    provenanceMarker: y
  } : void 0
}

function j(e) {
  let r = h2n(e.scoping),
    n = h2n(e.provenanceMarker);
  return r && n ? {
    scoping: r,
    provenanceMarker: n
  } : void 0
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
  }
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
  }
}

function c(e) {
  return e === !0 ? {
    transientRead: !0
  } : {}
}

function l(e) {
  return c(i1t(e))
}
async function P(e, r, n) {
  let i = await e.write(r, M(n), {
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw t(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed")
}

function E() {
  if (q()) throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path")
}
async function vYr(e, r, n) {
  let i = X() && n ? jR(e) : void 0;
  if (n && i) return P(n, i, r);
  E(), await zn(e, M(r))
}
async function hii(e, r, n) {
  let i = X() && n ? m(e) : void 0;
  if (n && i) {
    await P(n, i.provenanceMarker, r.skillName);
    let a = await n.write(i.scoping, _(r), {
      mode: 438 & ~process.umask()
    });
    if (!a.ok) throw t(`forked-skill scoping write: ${a.error.code}`), Error("forked-skill scoping record write failed");
    return
  }
  E();
  let o = v(e);
  await T(R(o.scoping), {
    recursive: !0
  }), await vYr(o.provenanceMarker, r.skillName), await zn(o.scoping, _(r))
}
async function xZn(e, r) {
  let n = X() && r ? m(e) : void 0;
  if (r && n) return x(r, n);
  let i = b(M7e(e));
  return i === void 0 ? {
    status: "diskless"
  } : Fbn(i)
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
    a = await w(i, "utf-8")
  } catch (s) {
    if (K(s)) return await N(o);
    return {
      status: "malformed",
      ...c(tG(k(s)))
    }
  }
  return A(a)
}

function A(e) {
  let r;
  try {
    r = ee(e)
  } catch {
    return {
      status: "malformed"
    }
  }
  let n = qar().safeParse(r);
  return n.success ? {
    status: "valid",
    scoping: n.data
  } : {
    status: "malformed"
  }
}
async function x(e, r) {
  let n = await h(e, r.scoping);
  switch (n.kind) {
    case "text":
      return A(n.text);
    case "unusable":
      return {
        status: "malformed", ...c(n.transientRead)
      };
    case "absent": {
      let i = await L(e, r.provenanceMarker);
      return i.present ? {
        status: "absent-but-marked",
        ...c(i.transientRead)
      } : {
        status: "absent"
      }
    }
  }
}
async function N(e) {
  try {
    return await f(e), {
      status: "absent-but-marked"
    }
  } catch (r) {
    return K(r) ? {
      status: "absent"
    } : {
      status: "absent-but-marked",
      ...c(tG(k(r)))
    }
  }
}
async function PZn(e, r) {
  let n, i = X() && r ? m(e) : void 0;
  if (r && i) {
    let s = await h(r, i.provenanceMarker);
    if (s.kind !== "text") return;
    n = s.text
  } else if (q()) return;
  else {
    let {
      provenanceMarker: s
    } = v(e);
    try {
      let d = await f(s);
      if (!d.isFile() || d.size > p) return;
      n = await w(s, "utf-8")
    } catch {
      return
    }
  }
  let o;
  try {
    o = ee(n)
  } catch {
    return
  }
  let a = whi().safeParse(o);
  return a.success ? a.data.skillName : void 0
}
export {
  bCt,
  vYr,
  hii,
  xZn,
  Fbn,
  PZn
};
