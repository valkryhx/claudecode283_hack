// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Y
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  v,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  b,
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  jn
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  em,
  eA
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  Cn
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  _d,
  FF,
  Ig
} from "B:/~BUN/root/chunk-06ra9xdn.js";
import {
  zco,
  AJt
} from "B:/~BUN/root/chunk-3jyp964r.js";
var T = new Set(["EBUSY", "EMFILE", "ENFILE", "EAGAIN", "EINTR"]);

function _vt(e) {
  if (e === void 0) return !1;
  return T.has(e) || e === "EPERM" && O() === "windows"
}

function y(e) {
  return e.code === "Unavailable" || "telemetryCode" in e && _vt(e.telemetryCode)
}
import {
  lstat as l,
  mkdir as I,
  readFile as F
} from "fs/promises";
import {
  basename as N,
  dirname as w,
  join as h,
  sep as R
} from "path";
var k = 524288;

function wze(e) {
  return {
    scoping: e.replace(/\.jsonl$/, ".forked-skill.json"),
    provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json")
  }
}

function f(e) {
  return wze(Ig(e))
}

function E(e) {
  return b({
    forkedSkill: !0,
    ...e !== void 0 && {
      skillName: e
    }
  })
}

function p(e) {
  let r = FF();
  if (w(r) !== _d()) return;
  let n = N(r),
    i = Y(),
    o = h(r, i) + R,
    s = Ig(e);
  if (!s.startsWith(o)) return;
  let a = s.slice(o.length).split(R),
    d = a.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![n, i, ...a].every(jn)) return;
  let x = a.slice(0, -1),
    g = (A) => ({
      namespace: "sidecar",
      projectKey: n,
      sessionId: i,
      relPath: [...x, A]
    }),
    m = g(d.replace(/\.jsonl$/, ".forked-skill.json")),
    S = g(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return em(m) === void 0 && em(S) === void 0 ? {
    scoping: m,
    provenanceMarker: S
  } : void 0
}

function _(e) {
  let r = eA(e.scoping),
    n = eA(e.provenanceMarker);
  return r && n ? {
    scoping: r,
    provenanceMarker: n
  } : void 0
}
async function M(e, r) {
  let n = await e.statMeta(r);
  if (!n.ok) return n.error.code === "NotFound" ? {
    kind: "absent"
  } : {
    kind: "unusable",
    ...u(n.error)
  };
  if (n.value.size > k) return {
    kind: "unusable"
  };
  let i = await e.read([r]);
  if (!i.ok) return {
    kind: "unusable",
    ...u(i.error)
  };
  let o = i.value.items[0];
  return o.found ? {
    kind: "text",
    text: Buffer.from(o.value).toString("utf8")
  } : {
    kind: "absent"
  }
}
async function D(e, r) {
  let n = await e.statMeta(r);
  if (n.ok) return {
    present: !0
  };
  return n.error.code === "NotFound" ? {
    present: !1
  } : {
    present: !0,
    ...u(n.error)
  }
}

function c(e) {
  return e === !0 ? {
    transientRead: !0
  } : {}
}

function u(e) {
  return c(y(e))
}
async function P(e, r, n) {
  let i = await e.write(r, E(n), {
    mode: 438 & ~process.umask()
  });
  if (!i.ok) throw t(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed")
}
async function IRn(e, r, n) {
  let i = H() && n ? eA(e) : void 0;
  if (n && i) return P(n, i, r);
  await Cn(e, E(r))
}
async function Lno(e, r, n) {
  let i = H() && n ? p(e) : void 0;
  if (n && i) {
    await P(n, i.provenanceMarker, r.skillName);
    let s = await n.write(i.scoping, b(r), {
      mode: 438 & ~process.umask()
    });
    if (!s.ok) throw t(`forked-skill scoping write: ${s.error.code}`), Error("forked-skill scoping record write failed");
    return
  }
  let o = f(e);
  await I(w(o.scoping), {
    recursive: !0
  }), await IRn(o.provenanceMarker, r.skillName), await Cn(o.scoping, b(r))
}
async function Nno(e, r) {
  let n = H() && r ? p(e) : void 0;
  if (r && n) return j(r, n);
  return bvt(f(e))
}
async function bvt(e, r) {
  let n = H() && r ? _(e) : void 0;
  if (r && n) return j(r, n);
  let i;
  try {
    let o = await l(e.scoping);
    if (!o.isFile() || o.size > k) return {
      status: "malformed"
    };
    i = await F(e.scoping, "utf-8")
  } catch (o) {
    if (B(o)) return await C(e.provenanceMarker);
    return {
      status: "malformed",
      ...c(_vt(v(o)))
    }
  }
  return K(i)
}

function K(e) {
  let r;
  try {
    r = J(e)
  } catch {
    return {
      status: "malformed"
    }
  }
  let n = AJt().safeParse(r);
  return n.success ? {
    status: "valid",
    scoping: n.data
  } : {
    status: "malformed"
  }
}
async function j(e, r) {
  let n = await M(e, r.scoping);
  switch (n.kind) {
    case "text":
      return K(n.text);
    case "unusable":
      return {
        status: "malformed", ...c(n.transientRead)
      };
    case "absent": {
      let i = await D(e, r.provenanceMarker);
      return i.present ? {
        status: "absent-but-marked",
        ...c(i.transientRead)
      } : {
        status: "absent"
      }
    }
  }
}
async function C(e) {
  try {
    return await l(e), {
      status: "absent-but-marked"
    }
  } catch (r) {
    return B(r) ? {
      status: "absent"
    } : {
      status: "absent-but-marked",
      ...c(_vt(v(r)))
    }
  }
}
async function Hno(e, r) {
  let n, i = H() && r ? p(e) : void 0;
  if (r && i) {
    let a = await M(r, i.provenanceMarker);
    if (a.kind !== "text") return;
    n = a.text
  } else {
    let {
      provenanceMarker: a
    } = f(e);
    try {
      let d = await l(a);
      if (!d.isFile() || d.size > k) return;
      n = await F(a, "utf-8")
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
  let s = zco().safeParse(o);
  return s.success ? s.data.skillName : void 0
}
export {
  _vt,
  wze,
  IRn,
  Lno,
  Nno,
  bvt,
  Hno
};
