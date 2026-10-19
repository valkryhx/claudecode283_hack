// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Yfe, Lrn, Qie } from "B:/~BUN/root/chunk-w6et565n.js";
import { _, J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Hpt } from "B:/~BUN/root/chunk-f2vyj316.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
var D = new z(() => ({}));
function T() {
  return D.of(j().host);
}
function Gfe() {
  return T().door !== void 0;
}
var E = 1024,
  U = 32,
  Bzn = 1024,
  O = 256,
  v = /^[-\d"]/,
  q = 65536,
  B = 128,
  k = 16,
  x = 1024;
function hrn() {
  let {
    door: door
  } = T();
  if (door === void 0) return;
  let c = new Map(),
    a = new Map(),
    p = n => typeof n === "string" && n.length <= U && !c.has(n) && !a.has(n) ? Number(n) : n,
    f = n => {
      c.delete(n), a.delete(n);
    },
    g = (n, s, u = {
      any: !1,
      lastMayBeShortError: !1
    }) => ({
      read(e) {
        let length = e.length;
        u.lastMayBeShortError = s && !u.any && length <= x, u.any = !0;
        let most = door.mostMembers(void 0, n);
        if (u.lastMayBeShortError) most = Math.max(most, k);
        let t = !Lrn(e, Bzn),
          o = t ? void 0 : Yfe(e, most, Math.min(most, H)),
          m,
          readInstead = e;
        if (o === void 0) {
          let M = Qie(e, F),
            h = M?.has("method") ? void 0 : M?.get("id"),
            id = h !== void 0 && h.length <= O && v.test(h) ? A(h) : void 0,
            R = p(id),
            asked = c.get(R) ?? a.get(R);
          if (asked !== void 0) {
            if (m = {
              id: id,
              asked: asked
            }, most = door.mostMembers(asked, n), o = t ? void 0 : Yfe(e, most), o === void 0 && !t) readInstead = door.withoutWhatIsDropped?.(e, asked, n) ?? e;
            if (readInstead !== e) t = !Lrn(readInstead, Bzn), o = t ? void 0 : Yfe(readInstead, most);
          }
        }
        let sent = o === void 0 ? void 0 : A(readInstead);
        if (o !== void 0 && sent !== void 0) return {
          sent: sent,
          size: {
            ...o,
            length: length
          },
          ...(readInstead !== e && {
            readInstead: readInstead
          })
        };
        if (o !== void 0 && m === void 0) {
          let size = {
            ...o,
            length: length
          };
          if (u.lastMayBeShortError && size.members <= k) return {
            sent: void 0,
            size: size
          };
          return door.chargeUnasked(n, size.members), door.judge(e, void 0, n, size) === void 0 ? {
            standIn: void 0
          } : {
            sent: void 0,
            size: size
          };
        }
        return f(p(m?.id)), {
          standIn: door.standInForUnparsed(m, n, t ? {
            reason: "nesting"
          } : o === void 0 ? {
            reason: "members",
            most: most
          } : {
            reason: "not_json"
          })
        };
      },
      chargeUnasked({
        members: members
      }) {
        door.chargeUnasked(n, members);
      },
      judge(e, d, r) {
        let t = N(e) && e.method === void 0 ? p(e.id) : void 0,
          o = c.get(t),
          m = o ?? a.get(t);
        if (u.lastMayBeShortError && d.members <= k && !r && m === void 0 && N(e) && e.method === void 0 && (e.result === void 0 || e.result === null)) return e;
        if (o !== void 0) {
          if (c.delete(t), a.size >= E) a.delete(a.keys().next().value);
          a.set(t, {
            ...o,
            answeredBefore: !0
          });
        }
        if ((m === void 0 || m.answeredBefore) && !r) door.chargeUnasked(n, d.members);
        let l = door.judge(e, m, n, d);
        if (l !== e) f(t);
        return l;
      }
    });
  return {
    noteRequests(n) {
      if (typeof n !== "string") return;
      let s = A(n),
        u = Array.isArray(s) ? s : [s];
      for (let e of u) {
        if (!N(e)) continue;
        let {
          id: id_2,
          method: method,
          params: params
        } = e;
        if (id_2 !== void 0 && typeof method === "string") {
          if (c.size >= E) c.delete(c.keys().next().value);
          let tool = method === "tools/call" && N(params) ? params.name : void 0;
          c.set(id_2, {
            method: method,
            ...(typeof tool === "string" && {
              tool: tool
            })
          });
        }
      }
    },
    judging({
      url: url,
      isGet: isGet,
      ok: ok,
      contentType: contentType
    }) {
      let d = g(url, !ok && !isGet),
        r = (contentType ?? "").toLowerCase();
      if (r.includes("text/event-stream") || isGet && ok) return {
        through: C(d),
        contentType: "text/event-stream"
      };
      return {
        through: X(d),
        contentType: r.includes("application/json") ? "application/json" : void 0
      };
    }
  };
}
var F = new Set(["id", "method"]),
  H = 8;
function I(i) {
  return i.replace(/^\uFEFF+/, "");
}
function A(i) {
  try {
    return J(i);
  } catch {
    return;
  }
}
function b(i, c, a) {
  for (let p of a === void 0 ? c : [new TextEncoder().encode(a)]) i.enqueue(p);
}
function X({
  read: read,
  chargeUnasked: chargeUnasked,
  judge: judge
}) {
  let p = [];
  return new TransformStream({
    transform(f) {
      p.push(f);
    },
    flush(f) {
      let g = read(I(new TextDecoder().decode(Buffer.concat(p))));
      if ("standIn" in g) {
        f.enqueue(new TextEncoder().encode(_(g.standIn ?? null)));
        return;
      }
      let {
        sent: sent_2,
        size: size_2,
        readInstead: readInstead_2
      } = g;
      if (typeof sent_2 !== "object" || sent_2 === null) {
        b(f, p, readInstead_2);
        return;
      }
      if (Array.isArray(sent_2)) chargeUnasked(size_2);
      if (Array.isArray(sent_2) && sent_2.length > B) {
        f.enqueue(new TextEncoder().encode("null"));
        return;
      }
      let e, d;
      if (Array.isArray(sent_2)) {
        let r = sent_2,
          t = r.map(item => judge(item, size_2, !0)).filter(item => item !== void 0);
        e = t, d = t.length === r.length && r.every((item, index) => item === t[index]);
      } else e = judge(sent_2, size_2, !1), d = e === sent_2;
      if (d) {
        b(f, p, readInstead_2);
        return;
      }
      f.enqueue(new TextEncoder().encode(_(e ?? null)));
    }
  });
}
function C({
  read: read_2,
  judge: judge_2
}) {
  let textDecoder = new TextDecoder(),
    textEncoder = new TextEncoder(),
    f = "",
    g = Hpt({
      onRetry(s) {
        f += `retry: ${s}

`;
      },
      onEvent({
        id: id_3,
        event: event,
        data: data
      }) {
        let d = event,
          r = data;
        if (data !== "" && (d === void 0 || d === "message")) {
          let t = read_2(I(data)),
            o = "standIn" in t ? void 0 : t.sent,
            m = "standIn" in t ? t.standIn : o === void 0 ? void 0 : judge_2(o, t.size, !1);
          if (!("standIn" in t) && o === void 0) r = "!";else if (m === void 0) d = "dropped", r = "";else if (m !== o) r = _(m);else r = (("standIn" in t ? void 0 : t.readInstead) ?? data).replaceAll(`
`, " ");
        } else if (data.length > q) r = "";
        f += (d === void 0 ? "" : `event: ${d}
`) + (id_3 === void 0 ? "" : `id: ${id_3}
`) + r.split(`
`).map(item => `data: ${item}
`).join("") + `
`;
      }
    }),
    n = s => {
      if (f !== "") s.enqueue(textEncoder.encode(f)), f = "";
    };
  return new TransformStream({
    transform(s, u) {
      g.feed(textDecoder.decode(s, {
        stream: !0
      })), n(u);
    },
    flush(s) {
      g.feed(textDecoder.decode()), n(s);
    }
  });
}
export { Gfe, Bzn, hrn };