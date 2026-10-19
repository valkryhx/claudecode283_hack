// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  K,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  k,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Cr
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Gm,
  cR,
  $fn
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  An
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  Xp,
  cRo,
  w1e,
  ig
} from "B:/~BUN/root/chunk-9080897a.js";
import {
  ius,
  d0n
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  e6t
} from "B:/~BUN/root/chunk-3z0gpazq.js";
import {
  M6,
  AIt
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  ij
} from "B:/~BUN/root/chunk-5mwc5s4z.js";
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

function jot(e) {
  return {
    scoping: e.replace(/\.jsonl$/, ".forked-skill.json"),
    provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json")
  }
}

function v(e) {
  return jot(ig(e))
}

function b(e) {
  if (e === void 0) return;
  let r = e6t(e, ".forked-skill.json"),
    n = e6t(e, ".forked-skill.marker.json");
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
  let r = cRo();
  if (typeof r !== "string") {
    let u = b(w1e(e));
    return u && j(u)
  }
  if (R(r) !== Xp()) return;
  let n = D(r),
    i = K(),
    o = I(r, i) + F,
    a = ig(e);
  if (!a.startsWith(o)) return;
  let s = a.slice(o.length).split(F),
    d = s.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![n, i, ...s].every(Cr)) return;
  let B = s.slice(0, -1),
    S = (u) => ({
      namespace: "sidecar",
      projectKey: n,
      sessionId: i,
      relPath: [...B, u]
    }),
    g = S(d.replace(/\.jsonl$/, ".forked-skill.json")),
    y = S(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return Gm(g) === void 0 && Gm(y) === void 0 ? {
    scoping: g,
    provenanceMarker: y
  } : void 0
}

function j(e) {
  let r = $fn(e.scoping),
    n = $fn(e.provenanceMarker);
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
  return c(AIt(e))
}
async function P(e, r, n) {
  let i = await e.write(r, M(n), {
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw t(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed")
}

function E() {
  if (de()) throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path")
}
async function kdr(e, r, n) {
  let i = W() && n ? cR(e) : void 0;
  if (n && i) return P(n, i, r);
  E(), await An(e, M(r))
}
async function Pos(e, r, n) {
  let i = W() && n ? m(e) : void 0;
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
  }), await kdr(o.provenanceMarker, r.skillName), await An(o.scoping, _(r))
}
async function Oos(e, r) {
  let n = W() && r ? m(e) : void 0;
  if (r && n) return x(r, n);
  let i = b(w1e(e));
  return i === void 0 ? {
    status: "diskless"
  } : YYt(i)
}
async function YYt(e, r) {
  let n = W() && r ? j(e) : void 0;
  if (r && n) return x(r, n);
  let i = ij(e.scoping),
    o = ij(e.provenanceMarker);
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
    if (G(s)) return await N(o);
    return {
      status: "malformed",
      ...c(M6(k(s)))
    }
  }
  return A(a)
}

function A(e) {
  let r;
  try {
    r = J(e)
  } catch {
    return {
      status: "malformed"
    }
  }
  let n = d0n().safeParse(r);
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
    return G(r) ? {
      status: "absent"
    } : {
      status: "absent-but-marked",
      ...c(M6(k(r)))
    }
  }
}
async function Ios(e, r) {
  let n, i = W() && r ? m(e) : void 0;
  if (r && i) {
    let s = await h(r, i.provenanceMarker);
    if (s.kind !== "text") return;
    n = s.text
  } else if (de()) return;
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
    o = J(n)
  } catch {
    return
  }
  let a = ius().safeParse(o);
  return a.success ? a.data.skillName : void 0
}
export {
  jot,
  kdr,
  Pos,
  Oos,
  YYt,
  Ios
};
