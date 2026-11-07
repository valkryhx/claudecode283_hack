// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Yoe, X0n, S_e } from "B:/~BUN/root/chunk-jj9s326a.js";
import { _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { y0t } from "B:/~BUN/root/chunk-ghg0e5bm.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var U = new W(() => ({}));
function I() {
  return U.of(H().host);
}
function X6() {
  return I().door !== void 0;
}
var T = 1024,
  v = 32,
  Pwr = 1024,
  x = 256,
  j = /^[-\d"]/,
  N = 65536,
  B = 128,
  S = 16,
  q = 1024,
  z = 65536;
function ZDn() {
  let {
    door: door
  } = I();
  if (door === void 0) return;
  let f = new Map(),
    c = new Map(),
    l = t => typeof t === "string" && t.length <= v && !f.has(t) && !c.has(t) ? Number(t) : t,
    p = t => {
      f.delete(t), c.delete(t);
    },
    h = (t, g, i = {
      any: !1,
      lastMayBeShortError: !1
    }) => ({
      read(e) {
        let length = e.length;
        i.lastMayBeShortError = g && !i.any && length <= q, i.any = !0;
        let most = door.mostMembers(void 0, t);
        if (i.lastMayBeShortError) most = Math.max(most, S);
        let r = !X0n(e, Pwr),
          o = r ? void 0 : Yoe(e, most, Math.min(most, C)),
          s,
          readInstead = e;
        if (o === void 0) {
          let y = S_e(e, F),
            w = y?.has("method") ? void 0 : y?.get("id"),
            id = w !== void 0 && w.length <= x && j.test(w) ? k(w) : void 0,
            b = l(id),
            asked = f.get(b) ?? c.get(b);
          if (asked !== void 0) {
            if (s = {
              id: id,
              asked: asked
            }, most = door.mostMembers(asked, t), o = r ? void 0 : Yoe(e, most), o === void 0 && !r) readInstead = door.withoutWhatIsDropped?.(e, asked, t) ?? e;
            if (readInstead !== e) r = !X0n(readInstead, Pwr), o = r ? void 0 : Yoe(readInstead, most);
          }
        }
        let sent = o === void 0 ? void 0 : k(readInstead);
        if (o !== void 0 && sent !== void 0) return readInstead === e ? {
          sent: sent,
          size: {
            ...o,
            length: length
          }
        } : {
          sent: sent,
          size: {
            ...o,
            length: length,
            lighter: !0
          },
          readInstead: readInstead
        };
        if (o !== void 0 && s === void 0) {
          let size = {
            ...o,
            length: length
          };
          if (i.lastMayBeShortError && size.members <= S) return {
            sent: void 0,
            size: size
          };
          return door.chargeUnasked(t, size.members), door.judge(e, void 0, t, size) === void 0 ? {
            standIn: void 0
          } : {
            sent: void 0,
            size: size
          };
        }
        return p(l(s?.id)), {
          standIn: door.standInForUnparsed(s, t, r ? {
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
        door.chargeUnasked(t, members);
      },
      judge(e, d, n) {
        let r = D(e) && e.method === void 0 ? l(e.id) : void 0,
          o = f.get(r),
          s = o ?? c.get(r);
        if (i.lastMayBeShortError && d.members <= S && !n && s === void 0 && D(e) && e.method === void 0 && (e.result === void 0 || e.result === null)) return e;
        if (o !== void 0) {
          if (f.delete(r), c.size >= T) c.delete(c.keys().next().value);
          c.set(r, {
            ...o,
            answeredBefore: !0
          });
        }
        if ((s === void 0 || s.answeredBefore) && !n) door.chargeUnasked(t, d.members);
        let u = door.judge(e, s, t, n ? {
          ...d,
          ofAnArray: !0
        } : d);
        if (u !== e) p(r);
        return u;
      },
      turnFor(e, d) {
        return e >= z ? door.turnForText?.(d, t) : void 0;
      }
    });
  return {
    noteRequests(t) {
      if (typeof t !== "string") return;
      let g = k(t),
        i = Array.isArray(g) ? g : [g];
      for (let e of i) {
        if (!D(e)) continue;
        let {
          id: id_2,
          method: method,
          params: params
        } = e;
        if (id_2 !== void 0 && typeof method === "string") {
          if (f.size >= T) f.delete(f.keys().next().value);
          let tool = method === "tools/call" && D(params) ? params.name : void 0;
          f.set(id_2, {
            method: method,
            ...(typeof tool === "string" && {
              tool: tool
            }),
            ...(D(params) && params.cursor !== void 0 && {
              hasCursor: !0
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
      let d = h(url, !ok && !isGet),
        n = (contentType ?? "").toLowerCase();
      if (n.includes("text/event-stream") || isGet && ok) return {
        through: X(d),
        contentType: "text/event-stream"
      };
      return {
        through: P(d),
        contentType: n.includes("application/json") ? "application/json" : void 0
      };
    }
  };
}
var F = new Set(["id", "method"]),
  C = 8;
function O(a) {
  return a.replace(/^\uFEFF+/, "");
}
function k(a) {
  try {
    return ee(a);
  } catch {
    return;
  }
}
function M(a, f) {
  try {
    return a.enqueue(f), !0;
  } catch {
    return !1;
  }
}
function R(a, f, c) {
  for (let l of c === void 0 ? f : [new TextEncoder().encode(c)]) M(a, l);
}
function P({
  read: read,
  chargeUnasked: chargeUnasked,
  judge: judge,
  turnFor: turnFor
}) {
  let p = [],
    h = 0;
  return new TransformStream({
    transform(t) {
      p.push(t), h += t.length;
    },
    async flush(t) {
      await turnFor(h, "reading");
      let g = read(O(new TextDecoder().decode(Buffer.concat(p))));
      if ("standIn" in g) {
        M(t, new TextEncoder().encode(_(g.standIn ?? null)));
        return;
      }
      let {
        sent: sent_2,
        size: size_2,
        readInstead: readInstead_2
      } = g;
      if (typeof sent_2 !== "object" || sent_2 === null) {
        await turnFor(h, "handingOn"), R(t, p, readInstead_2);
        return;
      }
      if (Array.isArray(sent_2)) chargeUnasked(size_2);
      if (Array.isArray(sent_2) && sent_2.length > B) {
        M(t, new TextEncoder().encode("null"));
        return;
      }
      let n, r;
      if (Array.isArray(sent_2)) {
        let s = sent_2,
          u = s.map(item => judge(item, size_2, !0)).filter(item => item !== void 0);
        n = u, r = u.length === s.length && s.every((item, index) => item === u[index]);
      } else n = judge(sent_2, size_2, !1), r = n === sent_2;
      if (r) {
        await turnFor(h, "handingOn"), R(t, p, readInstead_2);
        return;
      }
      let o = new TextEncoder().encode(_(n ?? null));
      await turnFor(o.length, "handingOn"), M(t, o);
    }
  });
}
function X({
  read: read_2,
  judge: judge_2,
  turnFor: turnFor_2
}) {
  let textDecoder = new TextDecoder(),
    textEncoder = new TextEncoder(),
    h = [],
    t = y0t({
      onRetry(e) {
        h.push(e);
      },
      onEvent(e) {
        h.push(e);
      }
    }),
    g = ({
      id: id_3,
      event: event,
      data: data
    }) => {
      let r = event,
        o = data;
      if (data !== "" && (r === void 0 || r === "message")) {
        let s = read_2(O(data)),
          u = "standIn" in s ? void 0 : s.sent,
          m = "standIn" in s ? s.standIn : u === void 0 ? void 0 : judge_2(u, s.size, !1);
        if (!("standIn" in s) && u === void 0) o = "!";else if (m === void 0) r = "dropped", o = "";else if (m !== u) o = _(m);else o = (("standIn" in s ? void 0 : s.readInstead) ?? data).replaceAll(`
`, " ");
      } else if (data.length > N) o = "";
      return (r === void 0 ? "" : `event: ${r}
`) + (id_3 === void 0 ? "" : `id: ${id_3}
`) + o.split(`
`).map(item => `data: ${item}
`).join("") + `
`;
    },
    i = async e => {
      let d = h;
      h = [];
      let n = "";
      for (let r of d) {
        if (typeof r === "number") {
          n += `retry: ${r}

`;
          continue;
        }
        let o = r.event === void 0 || r.event === "message" ? turnFor_2(r.data.length, "reading") : void 0;
        if (o !== void 0) {
          if (n !== "" && !M(e, textEncoder.encode(n))) return;
          n = "", await o;
        }
        let s = g(r);
        n += s;
        let u = turnFor_2(s.length, "handingOn");
        if (u !== void 0) {
          if (await u, !M(e, textEncoder.encode(n))) return;
          n = "";
        }
      }
      if (n !== "") M(e, textEncoder.encode(n));
    };
  return new TransformStream({
    async transform(e, d) {
      t.feed(textDecoder.decode(e, {
        stream: !0
      })), await i(d);
    },
    async flush(e) {
      t.feed(textDecoder.decode()), await i(e);
    }
  });
}
export { X6, Pwr, ZDn };