// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kVo, EVo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Pg } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Mhe } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { m9o, jVe, Cnt, Rnt, fi, X2t } from "B:/~BUN/root/chunk-vw193yjw.js";
import { YUe } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { JO } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { cQo } from "B:/~BUN/root/chunk-qtwzafn7.js";
import { ae, Ee, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ua, iQ, x5, aQ } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
B();
B();
function ft(t) {
  let {
    watchLoop: watchLoop
  } = Ee(Pg);
  P(() => t ? watchLoop() : void 0, [t, watchLoop]);
}
function oe(t, e) {
  if (e?.offset === t.offset && e.text === t.text) return e.column;
  let offset = t.startOfLogicalLine().offset,
    n = on(t.text, offset, t.offset);
  return t.text[t.offset] === "\t" ? n + Ke("\t", n) - 1 : n;
}
function on(t, e, r) {
  let n = 0;
  for (let {
    segment: segment
  } of ua().segment(t.slice(e, r))) n += Ke(segment, n);
  return n;
}
function se(t, e, r, n) {
  let s = 0;
  for (let {
    segment: segment_2,
    index: index
  } of ua().segment(t.slice(e, r))) if (s += Ke(segment_2, s), s > n) return e + index;
  return r;
}
function Ke(t, e) {
  return t === "\t" ? Mhe - e % Mhe : ie(t);
}
var sn = {
  "(": ["(", ")"],
  ")": ["(", ")"],
  b: ["(", ")"],
  "[": ["[", "]"],
  "]": ["[", "]"],
  "{": ["{", "}"],
  "}": ["{", "}"],
  B: ["{", "}"],
  "<": ["<", ">"],
  ">": ["<", ">"],
  '"': ['"', '"'],
  "'": ["'", "'"],
  "`": ["`", "`"]
};
function ne(t, e, r, n) {
  if (r === "w") return ct(t, e, n, jVe);
  if (r === "W") return ct(t, e, n, o => !Cnt(o));
  let s = sn[r];
  if (s) {
    let [o, i] = s;
    return o === i ? an(t, e, o, n) : un(t, e, o, i, n);
  }
  return null;
}
function ct(t, e, r, n) {
  let s = [];
  for (let {
    segment: segment_3,
    index: index_2
  } of ua().segment(t)) s.push({
    segment: segment_3,
    index: index_2
  });
  if (s.length === 0) return null;
  let o = s.length - 1;
  for (let h = 0; h < s.length; h++) {
    let b = s[h],
      _ = h + 1 < s.length ? s[h + 1].index : t.length;
    if (e >= b.index && e < _) {
      o = h;
      break;
    }
  }
  let i = h => s[h]?.segment ?? "",
    u = h => h < s.length ? s[h].index : t.length,
    c = h => Cnt(i(h)),
    d = h => n(i(h)),
    O = h => Rnt(i(h)),
    p = o,
    x = o;
  if (d(o)) {
    while (p > 0 && d(p - 1)) p--;
    while (x < s.length && d(x)) x++;
  } else if (c(o)) {
    while (p > 0 && c(p - 1)) p--;
    while (x < s.length && c(x)) x++;
    return {
      start: u(p),
      end: u(x)
    };
  } else if (O(o)) {
    while (p > 0 && O(p - 1)) p--;
    while (x < s.length && O(x)) x++;
  }
  if (!r) {
    if (x < s.length && c(x)) while (x < s.length && c(x)) x++;else if (p > 0 && c(p - 1)) while (p > 0 && c(p - 1)) p--;
  }
  return {
    start: u(p),
    end: u(x)
  };
}
function an(t, e, r, n) {
  let s = t.lastIndexOf(`
`, e - 1) + 1,
    o = t.indexOf(`
`, e),
    i = o === -1 ? t.length : o,
    u = t.slice(s, i),
    c = e - s,
    d = [];
  for (let O = 0; O < u.length; O++) if (u[O] === r) d.push(O);
  for (let O = 0; O < d.length - 1; O += 2) {
    let p = d[O],
      x = d[O + 1];
    if (p <= c && c <= x) return n ? {
      start: s + p + 1,
      end: s + x
    } : {
      start: s + p,
      end: s + x + 1
    };
  }
  return null;
}
function un(t, e, r, n, s) {
  let o = 0,
    start = -1;
  for (let c = e; c >= 0; c--) if (t[c] === n && c !== e) o++;else if (t[c] === r) {
    if (o === 0) {
      start = c;
      break;
    }
    o--;
  }
  if (start === -1) return null;
  o = 0;
  let end = -1;
  for (let c = start + 1; c < t.length; c++) if (t[c] === r) o++;else if (t[c] === n) {
    if (o === 0) {
      end = c;
      break;
    }
    o--;
  }
  if (end === -1) return null;
  return s ? {
    start: start + 1,
    end: end
  } : {
    start: start,
    end: end + 1
  };
}
var ge = {
  d: "delete",
  c: "change",
  y: "yank"
};
function Ue(t) {
  return t in ge;
}
var W = "\b",
  dt = new Set(["h", "l", " ", W, "j", "k", "w", "b", "e", "W", "B", "E", "0", "^", "$", "%"]),
  xe = new Set(["h", "l", " ", W]),
  Oe = new Set(["f", "F", "t", "T"]),
  be = {
    i: "inner",
    a: "around"
  };
function Be(t) {
  return t in be;
}
var Ge = new Set(["w", "W", '"', "'", "`", "(", ")", "b", "[", "]", "{", "}", "B", "<", ">"]),
  pt = 1e4;
function mt() {
  return {
    mode: "INSERT",
    insertedText: ""
  };
}
function gt() {
  return {
    lastFind: null,
    register: "",
    registerIsLinewise: !1
  };
}
function z(t, e, r) {
  if (t === "%" && r !== 1) return e;
  let n = e;
  for (let s = 0; s < r; s++) {
    let o = ln(t, n);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function ln(t, e) {
  switch (t) {
    case "h":
      return e.offset === e.startOfLogicalLine().offset ? e : e.left();
    case "l":
      return e.offset === e.endOfLogicalLine().offset ? e : e.right();
    case " ":
      return e.right();
    case W:
      return e.left();
    case "j":
      return e.downLogicalLine();
    case "k":
      return e.upLogicalLine();
    case "gj":
      return e.down();
    case "gk":
      return e.up();
    case "w":
      return e.nextVimWord();
    case "b":
      return e.prevVimWord();
    case "e":
      return e.endOfVimWord();
    case "W":
      return e.nextWORD();
    case "B":
      return e.prevWORD();
    case "E":
      return e.endOfWORD();
    case "0":
      return e.startOfLogicalLine();
    case "^":
      return e.firstNonBlankInLogicalLine();
    case "$":
      return e.lastCharInLogicalLine();
    case "G":
      return e.startOfLastLine();
    case "%":
      {
        let r = fn(m9o(e.text), e.offset);
        return r === null ? e : new fi(e.measuredText, r);
      }
    default:
      return e;
  }
}
function fn(t, e) {
  let r = t.indexOf(`
`, e),
    n = r === -1 ? t.length : r,
    s = t.slice(e, n).search(/[()[\]{}]/);
  if (s === -1) return null;
  let o = e + s,
    i = ne(t, o, t[o], !1);
  if (!i) return null;
  return i.start === o ? i.end - 1 : i.start;
}
function He(t) {
  return "eE$%".includes(t);
}
function xt(t) {
  return "jkG".includes(t) || t === "gg";
}
function q(op, motion, count, n) {
  let s = z(motion, n.cursor, count);
  if (xt(motion)) {
    let u = F(n.text, n.cursor.offset),
      c = F(n.text, s.offset);
    if (c !== u) {
      let d = Z(n.text, s.offset),
        O = n.text.indexOf(`
`, d),
        p = O === -1 ? n.text.length : O,
        x = se(n.text, d, p, oe(n.cursor, n.wantedColumn)),
        h = x === p && p > d && t7(n.cursor, p) === p ? n.cursor.measuredText.prevOffset(p) : x,
        b = motion === "k" ? Se(n.cursor, h, d) : Math.min(n.cursor.offset, s.offset);
      Ae(op, u, c, n, b), U(n, {
        type: "operator",
        op: op,
        motion: motion,
        count: count
      });
    }
    return;
  }
  if (motion === "%" && s.equals(n.cursor)) return;
  if (s.equals(n.cursor) && !He(motion)) {
    let u = (motion === "w" || motion === "W") && count > 0;
    if (motion === "0" || motion === "^" || u || xe.has(motion)) {
      if (op === "yank") n.setRegister("", !1);else if (op === "change") n.enterInsert(n.cursor.offset);
      U(n, {
        type: "operator",
        op: op,
        motion: motion,
        count: count
      });
    }
    return;
  }
  let o = cn(n.cursor, s, motion, op, count);
  if (o.from === o.to && !(o.linewise && motion === " ")) {
    if (op === "change" || op === "yank") n.setRegister("", !1);
    if (op === "change") n.enterInsert(o.from), U(n, {
      type: "operator",
      op: op,
      motion: motion,
      count: count
    });
    return;
  }
  let offset_2 = n.cursor.offset;
  if (we(op, o.from, o.to, n, o.linewise), op === "yank" && o.linewise) n.setOffset(offset_2);
  U(n, {
    type: "operator",
    op: op,
    motion: motion,
    count: count
  });
}
function ye(op_2, find, char, count_2, s) {
  let o = s.cursor.findCharacter(char, find, count_2);
  if (o === null) return;
  let i = new fi(s.cursor.measuredText, o),
    u = dn(s.cursor, i, find);
  we(op_2, u.from, u.to, s), s.setLastFind(find, char), U(s, {
    type: "operatorFind",
    op: op_2,
    find: find,
    char: char,
    count: count_2
  });
}
function Te(op_3, scope, objType, count_3, s) {
  let o = ne(s.text, s.cursor.offset, objType, scope === "inner");
  if (!o) return;
  we(op_3, o.start, o.end, s);
  let {
      start: start_2
    } = o,
    u = scope === "inner" && count_3 === 1 && start_2 > 0 && "([{<".includes(s.text[start_2 - 1] ?? " ") && s.text[start_2] === `
`;
  if (op_3 === "yank" && u) s.setOffset(start_2 + 1);
  U(s, {
    type: "operatorTextObj",
    op: op_3,
    objType: objType,
    scope: scope,
    count: count_3
  });
}
function Q(op_4, count_4, r) {
  if (count_4 < 1) return;
  let n = F(r.text, r.cursor.offset);
  if (count_4 > 1 && !r.cursor.text.includes(`
`, r.cursor.offset)) return;
  let {
      offset: offset_3
    } = r.cursor,
    o = r.text[offset_3] === `
` ? r.cursor.placeholderEndingAt(offset_3) : null,
    i = o !== null && YUe(r.text.slice(o.start, o.end));
  Ae(op_4, n, n + count_4 - 1, r, i ? r.cursor.startOfLogicalLine().offset : offset_3), U(r, {
    type: "operator",
    op: op_4,
    motion: op_4[0],
    count: count_4
  });
}
function he(count_5, e) {
  let offset_4 = e.cursor.offset;
  if (offset_4 >= e.text.length) return;
  let n = bt(e, count_5);
  if (n === offset_4) return;
  let s = e.text.slice(offset_4, n),
    o = e.text.slice(0, offset_4) + e.text.slice(n);
  e.setRegister(s, !1), e.setText(o), e.setOffset(qre(o, offset_4)), e.recordChange({
    type: "x",
    count: count_5
  });
}
function Ce(count_6, e) {
  let offset_5 = e.cursor.offset,
    n = bt(e, count_6);
  if (n > offset_5) e.setRegister(e.text.slice(offset_5, n), !1), e.setText(e.text.slice(0, offset_5) + e.text.slice(n));
  e.enterInsert(offset_5), e.recordChange({
    type: "substitute",
    count: count_6
  });
}
function Re(char_2, count_7, r) {
  let offset_6 = r.cursor.offset,
    s = r.text,
    o = offset_6;
  for (let i = 0; i < count_7; i++) {
    if (o >= s.length || s[o] === `
`) return;
    o += iQ(s.slice(o)).length || 1;
  }
  r.setText(s.slice(0, offset_6) + char_2.repeat(count_7) + s.slice(o)), r.setOffset(offset_6 + char_2.length * (count_7 - 1)), r.recordChange({
    type: "replace",
    char: char_2,
    count: count_7
  });
}
function ve(count_8, e) {
  let columns = e.cursor.measuredText.columns,
    n = e.text,
    offset_7 = e.cursor.offset,
    o = 0;
  while (offset_7 < n.length && n[offset_7] !== `
` && o < count_8) {
    let u = iQ(n.slice(offset_7)),
      c = u.length,
      d = (u === u.toUpperCase() ? u.toLowerCase() : u.toUpperCase()).normalize("NFC");
    n = n.slice(0, offset_7) + d + n.slice(offset_7 + c), offset_7 += d.length, o++;
  }
  if (o === 0) return;
  let i = fi.fromText(n, columns);
  e.setText(n), e.setOffset(t7(i, offset_7)), e.recordChange({
    type: "toggleCase",
    count: count_8
  });
}
function Je(t, e) {
  let r = e.text.split(`
`),
    n = F(e.cursor.text, e.cursor.offset);
  if (n >= r.length - 1) {
    if (t >= 3) e.setOffset(Z(e.cursor.text, e.cursor.offset)), e.recordChange({
      type: "join",
      count: 2
    });
    return;
  }
  let s = Math.min(Math.max(t, 2) - 1, r.length - n - 1);
  Ot(r, n, s, e);
}
function Ot(t, e, r, n) {
  let s = t[e],
    o = s.length,
    i = s;
  for (let d = 1; d <= r; d++) {
    o = s.length;
    let O = t[e + d].replace(/^[ \t\r]+/, "");
    if (O.length > 0 && s.length > 0 && !O.startsWith(")") && !/[ \t]$/.test(i)) s += " ";
    s += O, i = O;
  }
  let u = [...t.slice(0, e), s, ...t.slice(e + r + 1)],
    c = u.join(`
`);
  n.setText(c), n.setOffset(qre(c, X(u, e) + o)), n.recordChange({
    type: "join",
    count: r + 1
  });
}
function ue(after, count_9, r) {
  let n = r.getRegister();
  if (!n) return;
  r.recordChange({
    type: "paste",
    after: after,
    count: count_9
  });
  let s = r.getRegisterIsLinewise(),
    o = s && n.endsWith(`
`) ? n.slice(0, -1) : n;
  if (s) {
    let value = r.text,
      u = value.split(`
`),
      c = F(r.cursor.text, r.cursor.offset),
      d = after ? c + 1 : c,
      O = o.split(`
`),
      p = [];
    for (let de = 0; de < count_9; de++) p.push(...O);
    let x = [...u.slice(0, d), ...p, ...u.slice(d)],
      h = x.join(`
`),
      cursorOffset = X(x, d),
      _ = fi.fromText(O[0] ?? "", r.cursor.measuredText.columns),
      D = je(_);
    r.setText(h, {
      previous: {
        value: value,
        cursorOffset: cursorOffset
      }
    }), r.setOffset(cursorOffset + (_.placeholderStartingAt(D) ? 0 : D));
  } else {
    let i = o.repeat(count_9),
      offset_8 = r.cursor.offset,
      c = r.text[offset_8] === `
` && (offset_8 === 0 || r.text[offset_8 - 1] === `
`),
      cursorOffset_2 = after && offset_8 < r.text.length && !c ? r.cursor.measuredText.nextOffset(offset_8) : offset_8,
      O = r.text.slice(0, cursorOffset_2) + i + r.text.slice(cursorOffset_2),
      p = i.includes(`
`) ? qre(O, cursorOffset_2) : cursorOffset_2 + i.length - (x5(i).length || 1);
    r.setText(O, {
      previous: {
        value: r.text,
        cursorOffset: cursorOffset_2
      }
    }), r.setOffset(p);
  }
}
function Ie(dir, count_10, r) {
  let s = r.text.split(`
`),
    o = F(r.cursor.text, r.cursor.offset);
  if (count_10 > 1 && o === s.length - 1) return;
  let i = Math.min(count_10, s.length - o);
  ze(s, o, o + i - 1, dir);
  let u = s.join(`
`),
    c = ce(s[o] ?? "");
  r.setText(u), r.setOffset(X(s, o) + c), r.recordChange({
    type: "indent",
    dir: dir,
    count: count_10
  });
}
function le(direction, e) {
  let value_2 = e.text,
    n = value_2.split(`
`),
    s = F(e.cursor.text, e.cursor.offset),
    o = direction === "below" ? s + 1 : s,
    i = [...n.slice(0, o), "", ...n.slice(o)],
    u = i.join(`
`),
    cursorOffset_3 = X(i, o);
  e.setText(u, {
    previous: {
      value: value_2,
      cursorOffset: cursorOffset_3
    }
  }), e.enterInsert(cursorOffset_3), e.recordChange({
    type: "openLine",
    direction: direction
  });
}
function U(t, e) {
  if (e.op !== "yank") t.recordChange(e);
}
function bt(t, e) {
  let cursor = t.cursor;
  for (let n = 0; n < e && !cursor.isAtEnd(); n++) {
    if (t.text[cursor.offset] === `
`) break;
    cursor = cursor.right();
  }
  return cursor.offset;
}
function X(t, e) {
  return t.slice(0, e).join(`
`).length + (e > 0 ? 1 : 0);
}
function cn(t, e, r, n, s) {
  let o = Math.min(t.offset, e.offset),
    to = Math.max(t.offset, e.offset),
    linewise = !1,
    c = n === "change" && (r === "w" || r === "W"),
    d = t.text[t.offset],
    O = (d === " " || d === "\t" || d === `
`) && t.snapOutOfPlaceholder(t.offset, "start") === t.offset;
  if (c && O) {
    let p = t;
    for (let x = 0; x < s - 1; x++) {
      let h = r === "w" ? p.nextVimWord() : p.nextWORD();
      if (h.offset === p.offset) break;
      p = h;
    }
    if (to = Math.min(to, p.endOfLogicalLine().offset), to > o && t.text[to - 1] === `
`) {
      to -= 1;
      let offset_9 = t.startOfLogicalLine().offset;
      if (/^[ \t]*$/.test(t.text.slice(offset_9, o))) o = offset_9, linewise = !0;
    }
  } else if (c) {
    let p = t;
    for (let D = 0; D < s - 1; D++) p = r === "w" ? p.nextVimWord() : p.nextWORD();
    let x = r === "w" ? p.endOfVimWord() : p.endOfWORD(),
      h = t.measuredText.nextOffset(p.offset),
      b = r === "w" ? p.nextVimWord() : p.nextWORD();
    if ((h >= t.text.length || Cnt(t.text[h] ?? "") || b.offset === h) && !Cnt(t.text[t.offset] ?? "") && !Cnt(t.text[p.offset] ?? "")) x = p;
    to = t.measuredText.nextOffset(x.offset);
  } else if (He(r) && (r === "%" || t.offset <= e.offset) && t.text[to] !== `
`) to = t.measuredText.nextOffset(to);
  if (r === " " && to > o && t.text[to - 1] === `
`) {
    let p = Z(t.text, o);
    linewise = /^[ \t]*$/.test(t.text.slice(p, o)), o = linewise ? p : o, to = linewise && n !== "change" ? to : to - 1;
  }
  return o = t.snapOutOfPlaceholder(o, "start"), to = t.snapOutOfPlaceholder(to, "end"), {
    from: o,
    to: to,
    linewise: linewise
  };
}
function dn(t, e, r) {
  let n = Math.max(t.offset, e.offset),
    s = t.snapOutOfPlaceholder(Math.min(t.offset, e.offset), "start"),
    to_2 = t.snapOutOfPlaceholder(t.measuredText.nextOffset(n), "end");
  return {
    from: s,
    to: to_2
  };
}
function we(t, e, r, n, s = !1) {
  let o = n.text.slice(e, r);
  if (s && !o.endsWith(`
`)) o = o + `
`;
  if (n.setRegister(o, s), t === "yank") n.setOffset(t7(n.cursor, e));else if (t === "delete") {
    let i = n.text.slice(0, e) + n.text.slice(r);
    n.setText(i), n.setOffset(qre(i, e));
  } else if (t === "change") {
    let i = n.text.slice(0, e) + n.text.slice(r);
    n.setText(i), n.enterInsert(e);
  }
}
function qre(t, e) {
  if (t[e] === `
` && e > 0 && t[e - 1] !== `
`) return e - (x5(t.slice(0, e)).length || 1);
  if (e >= t.length && !t.endsWith(`
`)) return Math.max(0, t.length - (x5(t).length || 1));
  return e;
}
function Se(t, e, r) {
  let n = $e(t, e),
    s = e;
  while (n && n.start > r) s = t.measuredText.prevOffset(n.start), n = $e(t, s);
  if (!n) return s;
  let o = n.end;
  while (n = $e(t, o)) o = n.end;
  return o;
}
function $e(t, e) {
  let r = t.snapOutOfPlaceholder(e, "start");
  return t.placeholderStartingAt(r);
}
function t7(t, e, r = t.text) {
  let n = qre(r, e);
  return t.snapOutOfPlaceholder(n, "start") === n ? n : e;
}
function Z(t, e) {
  if (e === 0) return 0;
  let r = t.lastIndexOf(`
`, e - 1);
  return r === -1 ? 0 : r + 1;
}
function Le(t, e) {
  if (e) {
    let r = $t(t, `
`);
    return t.endsWith(`
`) ? r : r + 1;
  }
  return aQ(t);
}
function fe(t, e, r) {
  let n = t.text;
  if (r) {
    let i = Z(n, t.cursor.offset),
      to_3 = i;
    for (let c = 0; c < e; c++) {
      let d = n.indexOf(`
`, to_3);
      if (d === -1) {
        to_3 = n.length;
        break;
      }
      to_3 = d + 1;
    }
    return {
      from: i,
      to: to_3
    };
  }
  let offset_10 = t.cursor.offset,
    to_4 = offset_10;
  for (let i = 0; i < e && to_4 < n.length; i++) to_4 = t.cursor.measuredText.nextOffset(to_4);
  return {
    from: offset_10,
    to: to_4
  };
}
function Ve(t, e, r) {
  let n = Math.min(t, e.cursor.offset),
    s = Math.max(t, e.cursor.offset);
  if (!r) return {
    from: n,
    to: e.cursor.measuredText.nextOffset(s)
  };
  let o = e.text,
    i = Z(o, n),
    u = o.indexOf(`
`, s),
    to_5 = u === -1 ? o.length : u + 1;
  return {
    from: i,
    to: to_5
  };
}
function ze(t, e, r, n) {
  for (let o = e; o <= r; o++) {
    let i = t[o] ?? "";
    if (i === "") continue;
    if (n === ">") t[o] = "  " + i;else if (i.startsWith("  ")) t[o] = i.slice(2);else if (i.startsWith("\t")) t[o] = i.slice(1);else {
      let u = 0;
      while (u < i.length && u < 2 && /\s/.test(i[u])) u++;
      t[o] = i.slice(u);
    }
  }
}
function yt(t, e, r) {
  let n = Math.min(t, e.cursor.offset),
    s = Math.max(t, e.cursor.offset),
    o = e.text,
    i = $t(o.slice(0, n), `
`),
    u = $t(o.slice(n, s), `
`) + 1,
    c = o.split(`
`);
  if (i >= c.length - 1) {
    e.setOffset(r ? Z(e.cursor.text, n) : qre(e.cursor.text, n)), e.recordChange({
      type: "join",
      count: 2
    });
    return;
  }
  let d = Math.max(1, Math.min(u - 1, c.length - i - 1));
  Ot(c, i, d, e);
}
function Tt(t, e) {
  let r = e.text.split(`
`);
  if (F(e.cursor.text, e.cursor.offset) < r.length - 1) Je(t, e);
}
function ht(dir_2, count_11, r, n) {
  let s = Math.min(r, n.cursor.offset),
    o = Math.max(r, n.cursor.offset),
    i = n.text,
    u = $t(i.slice(0, s), `
`),
    c = u + $t(i.slice(s, o), `
`),
    d = i.split(`
`);
  for (let x = 0; x < count_11; x++) ze(d, u, c, dir_2);
  let O = d.join(`
`),
    p = ce(d[u] ?? "");
  n.setText(O), n.setOffset(X(d, u) + p), n.recordChange({
    type: "visualIndent",
    dir: dir_2,
    count: count_11,
    lines: c - u + 1
  });
}
function Ct(t, e, r, n) {
  let s = n.text,
    o = s.split(`
`),
    i = $t(s.slice(0, n.cursor.offset), `
`),
    u = Math.min(i + r - 1, o.length - 1);
  for (let O = 0; O < e; O++) ze(o, i, u, t);
  let c = o.join(`
`),
    d = ce(o[i] ?? "");
  n.setText(c), n.setOffset(X(o, i) + d);
}
function Rt(t, e, r, n, s, o = !1) {
  if (s && t === "change") {
    let i = n.text.slice(e, r),
      u = i;
    if (!u.endsWith(`
`)) u += `
`;
    n.setRegister(u, !0);
    let c = n.text.slice(0, e),
      d = n.text.slice(r),
      O = d !== "" || i.endsWith(`
`) && !o;
    n.setText(c + (O ? `
` : "") + d), n.enterInsert(e);
    return;
  }
  if (s && t === "delete") {
    let i = n.text.slice(e, r);
    if (!i.endsWith(`
`)) i += `
`;
    n.setRegister(i, !0);
    let u = e;
    if (r === n.text.length && e > 0 && n.text[e - 1] === `
`) u -= 1;
    let c = r < n.text.length,
      d = n.text.slice(0, u) + n.text.slice(r);
    n.setText(d);
    let O = c ? e : Z(d, d.length),
      p = d.indexOf(`
`, O),
      x = p === -1 ? d.length : p,
      h = fi.fromText(d.slice(O, x), n.cursor.measuredText.columns + 1),
      b = Ft(h, c),
      _ = !c && h.placeholderStartingAt(b) !== null;
    n.setOffset(_ ? qre(d, d.length) : O + b);
    return;
  }
  we(t, e, r, n, s);
}
function vt(op_5, e, r, linewise_2) {
  let {
      from: s,
      to: to_6
    } = Ve(e, r, linewise_2),
    span = Le(r.text.slice(s, to_6), linewise_2),
    u = linewise_2 && r.text.endsWith(`
`) && Math.max(e, r.cursor.offset) >= r.text.length;
  Rt(op_5, s, to_6, r, linewise_2, u), U(r, {
    type: "visualOp",
    op: op_5,
    span: span,
    linewise: linewise_2
  });
}
function It(t, e, r, n) {
  let {
    from: s,
    to: to_7
  } = fe(n, e, r);
  if (s === to_7 && !(r && n.text.length > 0)) return;
  Rt(t, s, to_7, n, r);
}
function wt(t, e, r) {
  let {
    from: n,
    to: to_8
  } = fe(r, t, e);
  if (n === to_8 && !e) return;
  let o = r.text.slice(n, to_8),
    i = o;
  if (e && !i.endsWith(`
`)) i += `
`;
  r.setRegister(i, e);
  let u = r.text.slice(to_8),
    c = e && (u !== "" || o.endsWith(`
`)) ? `
` + u : u;
  r.setText(r.text.slice(0, n) + c), r.enterInsert(n);
}
function St(t, e, r, n) {
  let s = n.text.slice(e, r),
    o = "";
  for (let {
    segment: segment_4
  } of ua().segment(s)) o += segment_4 === `
` ? `
` : t;
  let i = n.text.slice(0, e) + o + n.text.slice(r),
    cursor_2 = n.cursor;
  n.setText(i), n.setOffset(t7(cursor_2, e, i));
}
function Lt(char_3, e, r, linewise_3) {
  let {
      from: s,
      to: to_9
    } = Ve(e, r, linewise_3),
    span_2 = Le(r.text.slice(s, to_9), linewise_3);
  St(char_3, s, to_9, r), r.recordChange({
    type: "visualReplace",
    char: char_3,
    span: span_2,
    linewise: linewise_3
  });
}
function Vt(t, e, r, n) {
  let {
    from: s,
    to: to_10
  } = fe(n, e, r);
  if (s === to_10) return;
  St(t, s, to_10, n);
}
function Mt(t, e, r, n) {
  let s = n.text.slice(e, r),
    o = "";
  for (let {
    segment: segment_5
  } of ua().segment(s)) if (t === "upper") o += segment_5.toUpperCase();else if (t === "lower") o += segment_5.toLowerCase();else o += segment_5 === segment_5.toUpperCase() ? segment_5.toLowerCase() : segment_5.toUpperCase();
  let i = n.text.slice(0, e) + o + n.text.slice(r),
    cursor_3 = n.cursor;
  n.setText(i), n.setOffset(t7(cursor_3, e, i));
}
function kt(caseOp, e, r, linewise_4) {
  let {
      from: s,
      to: to_11
    } = Ve(e, r, linewise_4),
    span_3 = Le(r.text.slice(s, to_11), linewise_4);
  Mt(caseOp, s, to_11, r), r.recordChange({
    type: "visualCase",
    caseOp: caseOp,
    span: span_3,
    linewise: linewise_4
  });
}
function Et(t, e, r, n) {
  let {
    from: s,
    to: to_12
  } = fe(n, e, r);
  if (s === to_12) return;
  Mt(t, s, to_12, n);
}
function At(t, e, linewise_5) {
  let n = e.getRegister();
  if (!n) return;
  let {
      from: s,
      to: to_13
    } = Ve(t, e, linewise_5),
    span_4 = Le(e.text.slice(s, to_13), linewise_5),
    content = Nt(n, s, to_13, e, linewise_5);
  e.recordChange({
    type: "visualPaste",
    content: content,
    span: span_4,
    linewise: linewise_5
  });
}
function jt(t, e, r, n) {
  let {
    from: s,
    to: to_14
  } = fe(n, e, r);
  if (s === to_14 && !r) return;
  Nt(t, s, to_14, n, r);
}
function Nt(t, e, r, n, s) {
  let o = n.text.slice(e, r).endsWith(`
`),
    i = t.endsWith(`
`) ? t.slice(0, -1) : t;
  if (o && !i.endsWith(`
`)) i += `
`;
  let u = n.text.slice(e, r);
  if (s && !u.endsWith(`
`)) u += `
`;
  n.setRegister(u, s);
  let c = n.text.slice(0, e) + i + n.text.slice(r);
  if (n.setText(c), s) {
    let d = fi.fromText(c, n.cursor.measuredText.columns, e),
      O = je(d);
    n.setOffset(d.placeholderStartingAt(O) ? e : O);
  } else if (i.endsWith(`
`)) n.setOffset(e);else {
    let d = x5(i);
    n.setOffset(Math.max(e, e + i.length - (d.length || 1)));
  }
  return i;
}
function Me(op_6, count_12, r) {
  let n = count_12 === 0 ? r.cursor.startOfLastLine() : r.cursor.goToLine(count_12);
  Ae(op_6, F(r.text, r.cursor.offset), F(r.text, n.offset), r, Math.min(r.cursor.offset, je(n))), U(r, {
    type: "operator",
    op: op_6,
    motion: "G",
    count: count_12
  });
}
function ke(op_7, count_13, r) {
  let n = count_13 === 1 ? r.cursor.startOfFirstLine() : r.cursor.goToLine(count_13);
  Ae(op_7, F(r.text, r.cursor.offset), F(r.text, n.offset), r, Math.min(r.cursor.offset, je(n))), U(r, {
    type: "operator",
    op: op_7,
    motion: "gg",
    count: count_13
  });
}
function Ae(t, e, r, n, s) {
  let o = n.text.split(`
`),
    i = Math.min(e, r),
    u = Math.min(Math.max(e, r) + 1, o.length),
    c = o.slice(0, i),
    d = o.slice(u),
    O = X(o, i),
    p = o.slice(i, u).map(item => item + `
`).join("");
  if (n.setRegister(p, !0), t === "yank") {
    let x = qre(n.text, s);
    n.setOffset(s === n.text.length ? Wt(n.cursor, x) : n.cursor.snapOutOfPlaceholder(x, "start"));
  } else if (t === "delete") {
    let x = [...c, ...d];
    n.setText(x.join(`
`));
    let h = Math.max(0, Math.min(i, x.length - 1)),
      b = fi.fromText(x[h] ?? "", n.cursor.measuredText.columns + 1);
    n.setOffset(X(x, h) + Ft(b, d.length > 0));
  } else if (t === "change") n.setText([...c, "", ...d].join(`
`)), n.enterInsert(O);
}
function F(t, e) {
  return $t(t.slice(0, e), `
`);
}
function ce(t) {
  let e = 0;
  for (let {
    segment: segment_6,
    index: index_3
  } of ua().segment(t)) if (e = index_3, segment_6 !== " " && segment_6 !== "\t") break;
  return e;
}
function Ft(t, e) {
  let r = ce(t.text);
  if (t.placeholderStartingAt(r) === null) return r;
  if (r > 0 || e) return 0;
  let n = qre(t.text, t.text.length);
  return Wt(t, n);
}
function Wt(t, e) {
  let r = t.snapOutOfPlaceholder(e, "start");
  if (r === e) return e;
  let n = t.snapOutOfPlaceholder(e, "end");
  return YUe(t.text.slice(r, n)) ? n : r;
}
function je(t) {
  let offset_11 = t.startOfLogicalLine().offset,
    offset_12 = t.endOfLogicalLine().offset;
  return offset_11 + ce(t.text.slice(offset_11, offset_12));
}
var Pt = 1000;
function pn(t) {
  let e = new Map();
  for (let [r, n] of Object.entries(t)) {
    if (typeof n !== "string" || n.toLowerCase() !== "<esc>") continue;
    let s = r.normalize("NFC");
    if (!/^[^\p{C}\p{Z}]{2}$/u.test(s) || aQ(s) !== 2) continue;
    e.set(s, "<Esc>");
  }
  return e;
}
function q2t() {
  return pn(JO("vimInsertModeRemaps")[0] ?? {});
}
function Xe(t, e, r) {
  switch (t.type) {
    case "idle":
      return gn(e, r);
    case "count":
      return xn(t, e, r);
    case "operator":
      return On(t, e, r);
    case "operatorCount":
      return bn(t, e, r);
    case "operatorFind":
      return yn(t, e, r);
    case "operatorTextObj":
      return Tn(t, e, r);
    case "find":
      return hn(t, e, r);
    case "g":
      return Cn(t, e, r);
    case "operatorG":
      return Rn(t, e, r);
    case "replace":
      return vn(t, e, r);
    case "indent":
      return In(t, e, r);
  }
}
var mn = Object.assign(Object.create(null), {
  g: count_14 => ({
    next: {
      type: "g",
      count: count_14
    }
  }),
  r: count_15 => ({
    next: {
      type: "replace",
      count: count_15
    }
  }),
  ">": count_16 => ({
    next: {
      type: "indent",
      dir: ">",
      count: count_16
    }
  }),
  "<": count_17 => ({
    next: {
      type: "indent",
      dir: "<",
      count: count_17
    }
  }),
  "~": (t, e) => ({
    execute: () => ve(t, e)
  }),
  x: (t, e) => ({
    execute: () => he(t, e),
    wanted: null
  }),
  s: (t, e) => ({
    execute: () => Ce(t, e)
  }),
  S: (t, e) => ({
    execute: () => Q("change", t, e)
  }),
  J: (t, e) => ({
    execute: () => Je(t, e)
  }),
  p: (t, e) => ({
    execute: () => ue(!0, t, e),
    wanted: e.getRegister() === "" ? void 0 : null
  }),
  P: (t, e) => ({
    execute: () => ue(!1, t, e),
    wanted: e.getRegister() === "" ? void 0 : null
  }),
  D: (t, e) => ({
    execute: () => q("delete", "$", 1, e),
    wanted: null
  }),
  C: (t, e) => ({
    execute: () => q("change", "$", 1, e)
  }),
  Y: (t, e) => ({
    execute: () => Q("yank", t, e)
  }),
  ";": (t, e) => ({
    execute: () => Fe(!1, t, e)
  }),
  ",": (t, e) => ({
    execute: () => Fe(!0, t, e)
  }),
  u: (t, e) => ({
    execute: () => e.onUndo?.(),
    wanted: null
  }),
  i: (t, e) => ({
    execute: () => Ne("i", e)
  }),
  I: (t, e) => ({
    execute: () => Ne("I", e)
  }),
  a: (t, e) => ({
    execute: () => Ne("a", e)
  }),
  A: (t, e) => ({
    execute: () => Ne("A", e)
  }),
  o: (t, e) => ({
    execute: () => le("below", e)
  }),
  O: (t, e) => ({
    execute: () => le("above", e)
  })
});
function _t(find_2, count_18, countTyped, n) {
  if (Ue(find_2)) return {
    next: {
      type: "operator",
      op: ge[find_2],
      count: count_18,
      countTyped: countTyped
    }
  };
  if (find_2 === "G") return {
    execute: () => {
      n.setOffset(countTyped ? n.cursor.goToLine(count_18).offset : n.text.lastIndexOf(`
`) + 1);
    }
  };
  if (find_2 === "j" || find_2 === "k") {
    let {
        offset: offset_13,
        column: column
      } = Gt(find_2 === "j", count_18, n),
      {
        text: text
      } = n.cursor;
    if (offset_13 === null) return {
      next: {
        type: "idle"
      },
      wanted: {
        column: column,
        offset: n.cursor.offset,
        text: text
      }
    };
    let offset_14 = t7(n.cursor, offset_13);
    return {
      execute: () => n.setOffset(offset_14),
      wanted: {
        column: column,
        offset: offset_14,
        text: text
      }
    };
  }
  if (find_2 === "$") {
    let offset_15 = n.cursor.lastCharInLogicalLine().offset;
    return {
      execute: () => n.setOffset(offset_15),
      wanted: {
        column: 1 / 0,
        offset: offset_15,
        text: n.cursor.text
      }
    };
  }
  if (Ye(find_2, countTyped)) {
    let s = find_2 === " " || find_2 === W ? En(find_2, n.cursor, count_18) : z(find_2, n.cursor, count_18),
      o = t7(s, s.offset);
    if (o === n.cursor.offset && Bt(find_2)) return {
      next: {
        type: "idle"
      }
    };
    return {
      execute: () => n.setOffset(o),
      wanted: null
    };
  }
  if (Oe.has(find_2)) return {
    next: {
      type: "find",
      find: find_2,
      count: count_18
    }
  };
  if (find_2 === ".") return {
    execute: () => n.onDotRepeat?.(countTyped ? count_18 : void 0)
  };
  return mn[find_2]?.(count_18, n) ?? null;
}
function Dt(op_8, count_19, r, find_3, s) {
  if (Be(find_3)) return {
    next: {
      type: "operatorTextObj",
      op: op_8,
      count: count_19,
      scope: be[find_3]
    }
  };
  if (Oe.has(find_3)) return {
    next: {
      type: "operatorFind",
      op: op_8,
      count: count_19,
      find: find_3
    }
  };
  if (Ye(find_3, r)) return {
    execute: () => q(op_8, find_3, count_19, s),
    wanted: find_3 === "j" || find_3 === "k" || find_3 === "%" ? void 0 : null
  };
  if (find_3 === "G") {
    let o = r ? count_19 : 0;
    return {
      execute: () => Me(op_8, o, s)
    };
  }
  if (find_3 === "g") return {
    next: {
      type: "operatorG",
      op: op_8,
      count: count_19
    }
  };
  return null;
}
function gn(t, e) {
  if (/[1-9]/.test(t)) return {
    next: {
      type: "count",
      count: parseInt(t, 10)
    }
  };
  if (t === "0") return {
    execute: () => e.setOffset(e.cursor.startOfLogicalLine().offset)
  };
  let r = _t(t, 1, !1, e);
  if (r) return r;
  return {};
}
function xn(t, e, r) {
  if (/[0-9]/.test(e)) return {
    next: {
      type: "count",
      count: qe(t.count, e)
    }
  };
  let n = _t(e, t.count, !0, r);
  if (n) return n;
  return {
    next: {
      type: "idle"
    }
  };
}
function On(t, e, r) {
  if (e === t.op[0]) return {
    execute: () => Q(t.op, t.count, r)
  };
  if (/[1-9]/.test(e)) return {
    next: {
      type: "operatorCount",
      op: t.op,
      count: t.count,
      motionCount: parseInt(e, 10)
    }
  };
  let n = t.countTyped ?? !1,
    s = Dt(t.op, t.count, n, e, r);
  if (s) return s;
  return {
    next: {
      type: "idle"
    }
  };
}
function bn(t, e, r) {
  if (/[0-9]/.test(e)) return {
    next: {
      ...t,
      motionCount: qe(t.motionCount, e)
    }
  };
  let n = t.count * t.motionCount;
  if (e === t.op[0]) return {
    execute: () => Q(t.op, n, r)
  };
  let s = Dt(t.op, n, !0, e, r);
  if (s) return s;
  return {
    next: {
      type: "idle"
    }
  };
}
function yn(t, e, r) {
  return {
    execute: () => {
      if (e !== "") r.setLastFind(t.find, e);
      ye(t.op, t.find, e, t.count, r);
    }
  };
}
function Tn(t, e, r) {
  if (Ge.has(e)) return {
    execute: () => Te(t.op, t.scope, e, t.count, r)
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function hn(t, e, r) {
  return {
    execute: () => {
      if (e !== "") r.setLastFind(t.find, e);
      let n = r.cursor.findCharacter(e, t.find, t.count);
      if (n !== null) r.setOffset(n);
    }
  };
}
function Cn(t, e, r) {
  if (e === "j" || e === "k") {
    let {
        offset: offset_16,
        column: column_2
      } = Ht(`g${e}`, t.count, r),
      offset_17 = t7(r.cursor, offset_16);
    return {
      execute: () => r.setOffset(offset_17),
      wanted: column_2 === null ? null : {
        column: column_2,
        offset: offset_17,
        text: r.cursor.text
      }
    };
  }
  if (e === "g") {
    if (t.count > 1) return {
      execute: () => {
        let n = r.text.split(`
`),
          s = Math.min(t.count - 1, n.length - 1),
          o = 0;
        for (let i = 0; i < s; i++) o += (n[i]?.length ?? 0) + 1;
        r.setOffset(o);
      }
    };
    return {
      execute: () => r.setOffset(r.cursor.startOfFirstLine().offset)
    };
  }
  return {
    next: {
      type: "idle"
    }
  };
}
function Rn(t, e, r) {
  if (e === "j" || e === "k") return {
    execute: () => q(t.op, `g${e}`, t.count, r)
  };
  if (e === "g") return {
    execute: () => ke(t.op, t.count, r)
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function vn(t, e, r) {
  if (e === "") return {
    next: {
      type: "idle"
    }
  };
  return {
    execute: () => Re(e, t.count, r)
  };
}
function In(t, e, r) {
  if (e === t.dir) return {
    execute: () => Ie(t.dir, t.count, r)
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function Fe(t, e, r) {
  let n = r.getLastFind();
  if (!n) return;
  let s = n.type;
  if (t) s = {
    f: "F",
    F: "f",
    t: "T",
    T: "t"
  }[s];
  let o = r.cursor.findCharacter(n.char, s, e);
  if (o !== null) r.setOffset(o);
}
function Kt(t, char_4, r) {
  switch (t.type) {
    case "idle":
      return Sn(char_4, r);
    case "count":
      return Ln(t, char_4, r);
    case "find":
      return Vn(t, char_4, r);
    case "g":
      return Mn(t, char_4, r);
    case "replace":
      if (char_4 === "") return {
        next: {
          type: "idle"
        }
      };
      return {
        exit: "replace",
        char: char_4
      };
    case "textObject":
      return kn(t, char_4, r);
  }
}
var wn = Object.assign(Object.create(null), {
  x: () => ({
    exit: "operator",
    op: "delete"
  }),
  s: () => ({
    exit: "operator",
    op: "change"
  }),
  X: () => ({
    exit: "operator",
    op: "delete",
    forceLinewise: !0
  }),
  D: () => ({
    exit: "operator",
    op: "delete",
    forceLinewise: !0
  }),
  C: () => ({
    exit: "operator",
    op: "change",
    forceLinewise: !0
  }),
  S: () => ({
    exit: "operator",
    op: "change",
    forceLinewise: !0
  }),
  R: () => ({
    exit: "operator",
    op: "change",
    forceLinewise: !0
  }),
  Y: () => ({
    exit: "operator",
    op: "yank",
    forceLinewise: !0
  }),
  r: () => ({
    next: {
      type: "replace"
    }
  }),
  "~": () => ({
    exit: "case",
    op: "toggle"
  }),
  u: () => ({
    exit: "case",
    op: "lower"
  }),
  U: () => ({
    exit: "case",
    op: "upper"
  }),
  p: () => ({
    exit: "paste"
  }),
  P: () => ({
    exit: "paste"
  }),
  ">": count_20 => ({
    exit: "indent",
    dir: ">",
    count: count_20
  }),
  "<": count_21 => ({
    exit: "indent",
    dir: "<",
    count: count_21
  }),
  v: () => ({
    exit: "toggleKind",
    key: "v"
  }),
  V: () => ({
    exit: "toggleKind",
    key: "V"
  }),
  o: () => ({
    exit: "swap"
  }),
  J: () => ({
    exit: "join"
  }),
  $: (t, e) => {
    let offset_18 = e.cursor.endOfLogicalLine().offset;
    return {
      next: {
        type: "idle"
      },
      move: () => e.setOffset(offset_18),
      wanted: {
        column: 1 / 0,
        offset: offset_18,
        text: e.cursor.text
      }
    };
  },
  g: count_22 => ({
    next: {
      type: "g",
      count: count_22
    }
  }),
  ";": (t, e) => ({
    next: {
      type: "idle"
    },
    move: () => Fe(!1, t, e)
  }),
  ",": (t, e) => ({
    next: {
      type: "idle"
    },
    move: () => Fe(!0, t, e)
  })
});
function Ut(find_4, count_23, r, n) {
  if (Ue(find_4)) return {
    exit: "operator",
    op: ge[find_4]
  };
  if (find_4 === "G") return {
    next: {
      type: "idle"
    },
    move: () => {
      n.setOffset(r ? n.cursor.goToLine(count_23).offset : n.text.lastIndexOf(`
`) + 1);
    }
  };
  let s = wn[find_4];
  if (s) return s(count_23, n);
  if (Be(find_4)) return {
    next: {
      type: "textObject",
      scope: be[find_4],
      count: count_23
    }
  };
  if (find_4 === "j" || find_4 === "k") {
    let o = Gt(find_4 === "j", count_23, n),
      offset_19 = o.offset ?? n.cursor.offset;
    return {
      next: {
        type: "idle"
      },
      move: () => n.setOffset(offset_19),
      wanted: {
        column: o.column,
        offset: offset_19,
        text: n.cursor.text
      }
    };
  }
  if (Ye(find_4, r)) {
    let {
      offset: offset_20
    } = z(find_4, n.cursor, count_23);
    if (offset_20 === n.cursor.offset && Bt(find_4)) return {
      next: {
        type: "idle"
      }
    };
    return {
      next: {
        type: "idle"
      },
      move: () => n.setOffset(offset_20)
    };
  }
  if (Oe.has(find_4)) return {
    next: {
      type: "find",
      find: find_4,
      count: count_23
    }
  };
  return null;
}
function Sn(t, e) {
  if (/[1-9]/.test(t)) return {
    next: {
      type: "count",
      count: parseInt(t, 10)
    }
  };
  if (t === "0") return {
    next: {
      type: "idle"
    },
    move: () => e.setOffset(e.cursor.startOfLogicalLine().offset)
  };
  return Ut(t, 1, !1, e) ?? {
    next: {
      type: "idle"
    }
  };
}
function Ln(t, e, r) {
  if (/[0-9]/.test(e)) return {
    next: {
      type: "count",
      count: qe(t.count, e)
    }
  };
  return Ut(e, t.count, !0, r) ?? {
    next: {
      type: "idle"
    }
  };
}
function Vn(t, e, r) {
  return {
    next: {
      type: "idle"
    },
    move: () => {
      if (e !== "") r.setLastFind(t.find, e);
      let n = r.cursor.findCharacter(e, t.find, t.count);
      if (n !== null) r.setOffset(n);
    }
  };
}
function Mn(t, e, r) {
  if (e === "j" || e === "k") {
    let {
      offset: offset_21,
      column: column_3
    } = Ht(`g${e}`, t.count, r);
    return {
      next: {
        type: "idle"
      },
      move: () => r.setOffset(offset_21),
      wanted: column_3 === null ? null : {
        column: column_3,
        offset: offset_21,
        text: r.cursor.text
      }
    };
  }
  if (e === "g") return {
    next: {
      type: "idle"
    },
    move: () => {
      let n = t.count > 1 ? r.cursor.goToLine(t.count) : r.cursor.startOfFirstLine();
      r.setOffset(n.offset);
    }
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function kn(t, e, r) {
  if (Ge.has(e)) {
    let n = ne(r.text, r.cursor.offset, e, t.scope === "inner");
    if (n) return {
      exit: "selectRange",
      start: n.start,
      end: n.end
    };
  }
  return {
    next: {
      type: "idle"
    }
  };
}
function Ye(t, e) {
  return dt.has(t) && !(t === "%" && e);
}
function Bt(t) {
  return xe.has(t) || t === "%";
}
function qe(t, e) {
  return Math.min(t * 10 + parseInt(e, 10), pt);
}
function Qe(t, e) {
  switch (t) {
    case "i":
      return e.offset;
    case "I":
      return e.firstNonBlankInLogicalLine().offset;
    case "a":
      return e.isAtEnd() || e.text[e.offset] === `
` ? e.offset : e.right().offset;
    case "A":
      return e.endOfLogicalLine().offset;
  }
}
function Ne(key, e) {
  e.enterInsert(Qe(key, e.cursor)), e.recordChange({
    type: "insertCommand",
    key: key
  });
}
function En(t, e, r) {
  let n = e;
  for (let s = 0; s < r; s++) {
    let o = z(t, n, 1),
      {
        text: text_2,
        offset: offset_22
      } = o;
    if (text_2[offset_22] === `
` && offset_22 > 0 && text_2[offset_22 - 1] !== `
`) o = t === W ? new fi(o.measuredText, t7(o, offset_22)) : z(t, o, 1);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function Gt(t, e, r) {
  let {
      cursor: cursor_4
    } = r,
    s = cursor_4.text,
    offset_23 = cursor_4.startOfLogicalLine().offset,
    column_4 = oe(cursor_4, r.wantedColumn),
    u = offset_23;
  for (let p = 0; p < e; p++) if (t) {
    let x = s.indexOf(`
`, u);
    if (x === -1) break;
    u = x + 1;
  } else if (u === 0) break;else u = u === 1 ? 0 : s.lastIndexOf(`
`, u - 2) + 1;
  if (u === offset_23) return {
    offset: null,
    column: column_4
  };
  let c = s.indexOf(`
`, u),
    d = c === -1 ? s.length : c,
    O = se(s, u, d, column_4);
  return {
    offset: Se(cursor_4, O, u),
    column: column_4
  };
}
function Ht(t, e, r) {
  let {
      cursor: cursor_5
    } = r,
    s = z(t, cursor_5, e),
    o = cursor_5.measuredText.getWrappedLines(),
    i = o[cursor_5.getPosition().line],
    u = o[s.getPosition().line],
    c = i?.startOffset === 0 || i?.isPrecededByNewline,
    d = u?.startOffset === 0 || u?.isPrecededByNewline;
  if (s.equals(cursor_5) || !c || !d || !u) return {
    offset: s.offset,
    column: null
  };
  let column_5 = oe(cursor_5, r.wantedColumn),
    p = u.startOffset + u.text.length,
    x = se(cursor_5.text, u.startOffset, p, column_5),
    h = Se(cursor_5, x, u.startOffset),
    b = !u.endsWithNewline && p < cursor_5.text.length;
  return {
    offset: h === p && b ? cursor_5.measuredText.prevOffset(p) : h,
    column: column_5
  };
}
var An = /^\x1b(?![[\]P_\\])[\x21-\x7e]$/,
  rt = new Set(["backspace", "delete", "tab", "home", "end", "pageup", "pagedown", "insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function Ze(t, e) {
  return (e || t.name === "") && !rt.has(t.name);
}
function et(t) {
  if (!t) return !1;
  switch (t.type) {
    case "insertCommand":
    case "openLine":
    case "substitute":
      return !0;
    case "operator":
    case "operatorFind":
    case "operatorTextObj":
    case "visualOp":
      return t.op === "change";
    default:
      return !1;
  }
}
function jn(t) {
  switch (t.type) {
    case "x":
    case "substitute":
    case "paste":
    case "operatorTextObj":
      return !0;
    case "operator":
      return !["h", "l", " ", W, "gj", "gk", "%"].includes(t.motion);
    default:
      return !1;
  }
}
function tt(t, e) {
  return {
    ...t,
    setText: (r, n) => {
      e(), t.setText(r, n);
    },
    setOffset: r => {
      e(), t.setOffset(r);
    },
    enterInsert: r => {
      e(), t.enterInsert(r);
    },
    setRegister: (r, n) => {
      e(), t.setRegister(r, n);
    }
  };
}
function Jt(t, e) {
  let r = t7(t, t.offset);
  if (r !== t.offset) e.setOffset(r);
  return r;
}
function nt(t, e, r) {
  if (t.wanted !== void 0) return t.wanted ?? void 0;
  return e ? void 0 : r;
}
function b4r(t) {
  let {
      value: value_3,
      onChange: onChange,
      columns: columns_2,
      disableEscapeDoublePress: disableEscapeDoublePress,
      onModeChange: onModeChange,
      onUndo: onUndo,
      onOpenHistorySearch: onOpenHistorySearch,
      onToggleHelp: onToggleHelp,
      onHistoryUp: onHistoryUp,
      onHistoryDown: onHistoryDown,
      inputFilter: inputFilter,
      getInputMode: getInputMode,
      isActive: isActive
    } = t,
    b = A(mt()),
    [mode, D] = y("INSERT"),
    [visualAnchor, H] = y(null),
    [isCommandPending, ot] = y(!1);
  ft(isActive && mode === "INSERT");
  let ee = A(null),
    te = A(Nn()),
    J = A(null),
    pe = A(null),
    We = A(null);
  function recordInsertedText(a, f) {
    let current = b.current;
    if (current.mode === "INSERT" && !f.ctrl && !f.meta && Ze(f, [...f.key].length === 1)) b.current = {
      mode: "INSERT",
      insertedText: current.insertedText + a.normalize("NFC")
    };
  }
  let recordInsert = ae((a, f = "") => {
    let current_2 = b.current;
    if (current_2.mode !== "INSERT") return;
    let m = f !== "" && current_2.insertedText.endsWith(f) ? current_2.insertedText.slice(0, -f.length) : current_2.insertedText;
    b.current = {
      mode: "INSERT",
      insertedText: m + a
    };
  }, []);
  function st(a, char_5, offsetAfter, recorded) {
    for (let T of a.keys()) if (T.startsWith(char_5)) {
      ee.current = {
        char: char_5,
        at: Date.now(),
        offsetAfter: offsetAfter,
        recorded: recorded
      };
      return;
    }
  }
  let cancelPendingRemap = ae(() => {
      ee.current = null;
    }, []),
    forgetColumn = ae(() => {
      let current_3 = b.current;
      if (current_3.mode !== "INSERT") b.current = {
        ...current_3,
        wanted: void 0
      };
    }, []),
    Pe = ae((a, f) => {
      if (f !== void 0) a.setOffset(f);
      ee.current = null, pe.current = null, We.current = null, b.current = {
        mode: "INSERT",
        insertedText: ""
      }, D("INSERT"), H(null), onModeChange?.("INSERT");
    }, [onModeChange]),
    N = ae((a, f) => {
      let current_4 = b.current;
      if (current_4.mode === "INSERT") {
        let current_5 = J.current,
          T = current_5 === pe.current;
        if (current_5?.type === "visualOp" && current_5.op === "change" && T) J.current = {
          type: "visualChange",
          span: current_5.span,
          linewise: current_5.linewise,
          text: current_4.insertedText ?? ""
        };else if (et(current_5) && current_5.type !== "visualOp" && T && (current_4.insertedText || (f?.buffer ? f.buffer.text : value_3.normalize("NFC")) === We.current)) J.current = {
          ...current_5,
          insertedText: current_4.insertedText
        };else if (current_4.insertedText || f?.claimEmptyInsert && !et(current_5)) J.current = {
          type: "insert",
          text: current_4.insertedText
        };
        let R = f?.buffer ? f.buffer.offset : a.offset,
          L = f?.buffer ? f.buffer.text : value_3.normalize("NFC");
        if (R > 0 && L[R - 1] !== `
`) {
          let I = R > L.length ? 1 : x5(L.slice(0, R)).length;
          a.setOffset(R - I);
        } else if (f?.buffer) a.setOffset(R);
      }
      b.current = {
        mode: "NORMAL",
        command: {
          type: "idle"
        }
      }, D("NORMAL"), H(null), onModeChange?.("NORMAL");
    }, [onModeChange, value_3]),
    _e = ae((anchor, kind, wanted) => {
      b.current = {
        mode: "VISUAL",
        kind: kind,
        anchor: anchor,
        command: {
          type: "idle"
        },
        wanted: wanted
      };
      let m = kind === "line" ? "VISUAL LINE" : "VISUAL";
      D(m), H(anchor), onModeChange?.(m);
    }, [onModeChange]);
  function re(cursor_6, f, l = !1) {
    let m;
    return {
      cursor: cursor_6,
      text: cursor_6.text,
      setText: (T, R) => {
        m = T, onChange(T, R);
      },
      setOffset: T => f.setOffset(T),
      enterInsert: T => {
        Pe(f, T), We.current = m ?? cursor_6.text;
      },
      getRegister: () => te.current.register,
      getRegisterIsLinewise: () => te.current.registerIsLinewise,
      setRegister: (T, R) => {
        te.current.register = T, te.current.registerIsLinewise = R;
      },
      getLastFind: () => te.current.lastFind,
      setLastFind: (type, char_6) => {
        te.current.lastFind = {
          type: type,
          char: char_6
        };
      },
      recordChange: l ? () => {} : T => {
        if (J.current = T, et(T) && b.current.mode === "INSERT") pe.current = T;
      }
    };
  }
  function it(a, f, l) {
    let value_4 = a.text;
    return {
      ...a,
      setText: (T, R) => {
        let previous = {
          value: value_4,
          cursorOffset: a.cursor.offset
        };
        value_4 = T, a.setText(T, R ?? {
          previous: previous
        });
      },
      enterInsert: cursorOffset_4 => {
        let R = value_4.slice(0, cursorOffset_4) + f + value_4.slice(cursorOffset_4),
          previous_2 = {
            value: value_4,
            cursorOffset: cursorOffset_4
          },
          I = me(R, l, previous_2) ? f.slice(1) : f;
        a.setText(R, {
          previous: previous_2
        });
        let w = value_4.slice(0, cursorOffset_4),
          v = (w + I).normalize("NFC"),
          V = v.startsWith(w) ? x5(v.slice(w.length)) : "",
          S = V && !/^[\p{Mn}\p{Me}]/u.test(V) ? V : x5(v),
          k = v.endsWith(`
`) ? v.length : v.length - S.length,
          j = cursorOffset_4 > 0 && w[cursorOffset_4 - 1] !== `
` ? cursorOffset_4 - x5(w).length : cursorOffset_4;
        a.setOffset(I ? k : j);
      }
    };
  }
  function me(nextValue, f, l) {
    return getInputMode !== void 0 && cQo({
      nextValue: nextValue,
      value: l?.value ?? value_3,
      cursorOffset: l?.cursorOffset ?? f.offset,
      mode: getInputMode()
    });
  }
  function at(a, f, l, m) {
    if (a.type === "insertCommand") {
      if (a.insertedText === void 0) return;
      let T = Qe(a.key, f);
      f = new fi(f.measuredText, T), a = {
        type: "insert",
        text: a.insertedText
      };
    }
    if ("insertedText" in a && a.insertedText !== void 0) l = it(l, a.insertedText, m);
    switch (a.type) {
      case "insert":
        if (a.text) {
          let T = f.insert(a.text),
            R = me(T.text, m);
          l.setText(T.text);
          let L = R ? T.text.slice(1) : T.text,
            I = T.offset - (R ? 1 : 0);
          l.setOffset(L[I - 1] === `
` ? I : I - x5(L.slice(0, I)).length);
        }
        break;
      case "x":
        he(a.count, l);
        break;
      case "substitute":
        Ce(a.count, l);
        break;
      case "replace":
        Re(a.char, a.count, l);
        break;
      case "toggleCase":
        ve(a.count, l);
        break;
      case "indent":
        Ie(a.dir, a.count, l);
        break;
      case "join":
        Tt(a.count, l);
        break;
      case "openLine":
        le(a.direction, l);
        break;
      case "operator":
        if (a.motion === a.op[0]) Q(a.op, a.count, l);else if (a.motion === "gg") ke(a.op, a.count, l);else if (a.motion === "G") Me(a.op, a.count, l);else q(a.op, a.motion, a.count, l);
        break;
      case "operatorFind":
        ye(a.op, a.find, a.char, a.count, l);
        break;
      case "operatorTextObj":
        Te(a.op, a.scope, a.objType, a.count, l);
        break;
      case "visualOp":
        It(a.op, a.span, a.linewise, l);
        break;
      case "visualReplace":
        Vt(a.char, a.span, a.linewise, l);
        break;
      case "visualCase":
        Et(a.caseOp, a.span, a.linewise, l);
        break;
      case "visualPaste":
        jt(a.content, a.span, a.linewise, l);
        break;
      case "visualIndent":
        Ct(a.dir, a.count, a.lines, l);
        break;
      case "visualChange":
        wt(a.span, a.linewise, it(l, a.text, m));
        break;
      case "paste":
        ue(a.after, a.count, l);
        break;
    }
  }
  function ut(count_24) {
    let current_6 = J.current;
    if (current_6 && count_24 !== void 0 && "count" in current_6 && jn(current_6)) return {
      ...current_6,
      count: count_24
    };
    return current_6;
  }
  function lt(a, f) {
    let l = ut(f);
    if (!l) return;
    let m = fi.fromText(value_3, columns_2, a.offset);
    at(l, m, re(m, a, !0), a);
  }
  function Zt(a, f) {
    let text_3 = value_3.normalize("NFC"),
      offset_24 = f.offset,
      setText = (I, w) => {
        let v = w?.previous;
        if (!me(I, f, v)) text_3 = I;else if (I.length !== (v?.value ?? value_3).length + 1) text_3 = I.slice(1);
        onChange(I, w);
      },
      R = I => {
        let w = ut(I);
        if (!w) return;
        let v = fi.fromText(text_3, columns_2, offset_24);
        at(w, v, {
          ...re(v, f, !0),
          text: text_3,
          setText: setText,
          setOffset: V => {
            offset_24 = V, f.setOffset(V);
          },
          enterInsert: V => {
            offset_24 = V, Pe(f, V);
          }
        }, f);
      },
      L = [...a];
    for (let I = 0; I < L.length; I++) {
      if (b.current.mode === "INSERT") {
        let C = L.slice(I).join(""),
          K = q2t();
        if (K.size > 0 && K.has(C.normalize("NFC"))) {
          g("vim_insert_remap"), N(f, {
            buffer: {
              text: text_3,
              offset: offset_24
            },
            claimEmptyInsert: !0
          });
          return;
        }
        let E = fi.fromText(text_3, columns_2, offset_24).insert(C),
          Y = me(E.text, f),
          G = E.offset - (Y ? 1 : 0);
        onChange(E.text), f.setOffset(G), b.current = {
          mode: "INSERT",
          insertedText: b.current.insertedText + C
        };
        let rn = Y ? C.slice(1) : C,
          De = x5(E.text.slice(0, E.offset));
        if (De && rn.endsWith(De)) st(K, De, G, !0);
        return;
      }
      let current_7 = b.current;
      if (current_7.mode !== "NORMAL") return;
      let v = L[I];
      if ((v === "v" || v === "V") && (current_7.command.type === "idle" || current_7.command.type === "count")) {
        _e(offset_24, v === "V" ? "line" : "char", current_7.wanted);
        return;
      }
      let V = fi.fromText(text_3, columns_2, offset_24),
        S = !1,
        k = {
          ...re(V, f, !1),
          text: text_3,
          setText: setText,
          setOffset: C => {
            offset_24 = C, f.setOffset(C);
          },
          enterInsert: C => {
            offset_24 = C, Pe(f, C);
          },
          onDotRepeat: C => {
            S ||= J.current !== null, R(C);
          },
          wantedColumn: current_7.wanted
        },
        j = tt(k, () => {
          S = !0;
        }),
        M = Xe(current_7.command, v, j);
      if (M.execute) M.execute();
      if (b.current.mode === "NORMAL" && (M.next || M.execute || M.wanted !== void 0)) b.current = {
        mode: "NORMAL",
        command: M.next ?? {
          type: "idle"
        },
        wanted: nt(M, S, current_7.wanted)
      };
    }
  }
  function handleKeyDown(a, f) {
    tn(a, f);
    let current_8 = b.current;
    ot(current_8.mode !== "INSERT" && current_8.command.type !== "idle");
  }
  function tn(a, f) {
    let current_9 = b.current;
    if (current_9.mode === "INSERT" && a.readLate && An.test(a.sequence) && a.readAsEscapeThenKey()) {
      a.preventDefault();
      return;
    }
    let m = fi.fromText(value_3, columns_2, f.offset),
      T = () => inputFilter?.(a.key, a);
    if (!(a.name === "left" && !a.ctrl && !a.meta && !a.fn && !a.superKey && !a.shift)) f.disarmLeftArrowConfirm?.();
    let current_10 = ee.current;
    if (ee.current = null, a.ctrl || a.meta) {
      if (current_9.mode === "VISUAL") {
        T(), N(f), a.preventDefault();
        return;
      }
      f.handleKeyDown(a);
      return;
    }
    if (a.name === "escape") {
      if (T(), current_9.mode === "NORMAL") b.current = {
        mode: "NORMAL",
        command: {
          type: "idle"
        },
        wanted: current_9.wanted
      };else if (current_9.mode === "VISUAL" && current_9.command.type !== "idle") b.current = {
        ...current_9,
        command: {
          type: "idle"
        }
      };else {
        if (current_9.mode === "VISUAL") Jt(m, f);
        N(f);
      }
      if (!disableEscapeDoublePress) a.preventDefault();
      return;
    }
    if (a.name === "return" && current_9.mode !== "VISUAL") {
      f.handleKeyDown(a);
      return;
    }
    if (current_9.mode === "INSERT") {
      if (a.name === "backspace" || a.name === "delete") {
        if (current_9.insertedText.length > 0) b.current = {
          mode: "INSERT",
          insertedText: current_9.insertedText.slice(0, -(x5(current_9.insertedText).length || 1))
        };
      }
      let S = q2t();
      if (S.size > 0) {
        let k = a.key.normalize("NFC"),
          j = [...k].length,
          M = j === 1,
          C = Ze(a, M);
        if (C && j <= 2 && current_10 && S.has(current_10.char + iQ(k)) && Date.now() - current_10.at <= Pt && f.offset === current_10.offsetAfter && m.text.startsWith(current_10.char, m.offset - current_10.char.length)) {
          if (T(), current_10.recorded && current_9.insertedText.endsWith(current_10.char)) b.current = {
            mode: "INSERT",
            insertedText: current_9.insertedText.slice(0, -current_10.char.length)
          };
          let offset_25 = m.offset - current_10.char.length,
            text_4 = m.text.slice(0, offset_25) + m.text.slice(m.offset);
          onChange(text_4), g("vim_insert_remap"), N(f, {
            buffer: {
              text: text_4,
              offset: offset_25
            },
            claimEmptyInsert: !0
          }), a.preventDefault();
          return;
        }
        if (C && !M && S.has(k)) {
          T(), g("vim_insert_remap"), N(f, {
            claimEmptyInsert: !0
          }), a.preventDefault();
          return;
        }
        let E = C ? x5(k) : "";
        if (E) st(S, E, f.offset + k.length, Ze(a, [...a.key].length === 1));
      }
      f.handleKeyDown(a);
      return;
    }
    if (current_9.mode === "VISUAL") {
      let S = !1,
        k = tt({
          ...re(m, f, !1),
          onUndo: onUndo,
          onDotRepeat: () => lt(f),
          wantedColumn: current_9.wanted
        }, () => {
          S = !0;
        }),
        j = current_9.command.type === "idle" || current_9.command.type === "count",
        M = a.key;
      if (a.name === "left") M = j ? "h" : "";else if (a.name === "right") M = j ? "l" : "";else if (a.name === "up") M = j ? "k" : "";else if (a.name === "down") M = j ? "j" : "";else if (a.name === "return") M = j ? "j" : `
`;else if (a.name === "backspace") M = j ? W : "";else if (a.name === "delete") M = j && current_9.command.type !== "count" ? "x" : "";else if (a.key === "" || rt.has(a.name)) {
        a.preventDefault();
        return;
      } else if ([...a.key].length > 1) {
        a.preventDefault();
        return;
      }
      T();
      let C = Kt(current_9.command, M, k),
        K = current_9.kind === "line";
      if ("next" in C) C.move?.(), b.current = {
        mode: "VISUAL",
        kind: current_9.kind,
        anchor: current_9.anchor,
        command: C.next,
        wanted: nt(C, S, current_9.wanted)
      };else switch (C.exit) {
        case "operator":
          if (vt(C.op, current_9.anchor, k, K || C.forceLinewise === !0), b.current.mode === "VISUAL") N(f);
          break;
        case "replace":
          Lt(C.char, current_9.anchor, k, K), N(f);
          break;
        case "case":
          kt(C.op, current_9.anchor, k, K), N(f);
          break;
        case "paste":
          if (k.getRegister()) At(current_9.anchor, k, K), N(f);else b.current = {
            ...current_9,
            command: {
              type: "idle"
            }
          };
          break;
        case "join":
          yt(current_9.anchor, k, K), N(f);
          break;
        case "indent":
          ht(C.dir, C.count, current_9.anchor, k), N(f);
          break;
        case "swap":
          {
            let E = m.offset;
            f.setOffset(current_9.anchor), b.current = {
              mode: "VISUAL",
              kind: current_9.kind,
              anchor: E,
              command: {
                type: "idle"
              }
            }, H(E);
            break;
          }
        case "selectRange":
          {
            let E = C.end > C.start ? m.measuredText.prevOffset(C.end) : C.start;
            f.setOffset(E), b.current = {
              mode: "VISUAL",
              kind: current_9.kind,
              anchor: C.start,
              command: {
                type: "idle"
              }
            }, H(C.start);
            break;
          }
        default:
          {
            let E = C.key === "V" ? "line" : "char";
            if (E === current_9.kind) {
              let offset_26 = Jt(m, f);
              N(f);
              let {
                wanted: wanted_2
              } = current_9;
              if (wanted_2?.offset === m.offset && wanted_2.text === m.text) b.current = {
                mode: "NORMAL",
                command: {
                  type: "idle"
                },
                wanted: {
                  ...wanted_2,
                  offset: offset_26
                }
              };
            } else _e(current_9.anchor, E, current_9.wanted);
            break;
          }
      }
      a.preventDefault();
      return;
    }
    if (current_9.mode !== "NORMAL") return;
    if (current_9.command.type === "idle" && !a.shift && (a.name === "up" || a.name === "down" || a.name === "left" && m.text === "")) {
      f.handleKeyDown(a);
      return;
    }
    if (current_9.command.type === "idle" && a.key === "?" && onToggleHelp) {
      onToggleHelp(), a.preventDefault();
      return;
    }
    if (T(), current_9.command.type === "idle" && a.key === "/" && onOpenHistorySearch) {
      onOpenHistorySearch(), a.preventDefault();
      return;
    }
    if (current_9.command.type === "idle") {
      if (a.key === "k") {
        let S = m.text.indexOf(`
`);
        if (S === -1 || m.offset <= S) {
          onHistoryUp?.(), a.preventDefault();
          return;
        }
      }
      if (a.key === "j") {
        let S = m.text.lastIndexOf(`
`);
        if (S === -1 || m.offset > S) {
          onHistoryDown?.(), a.preventDefault();
          return;
        }
      }
    }
    let L = !1,
      I = tt({
        ...re(m, f, !1),
        onUndo: onUndo,
        onDotRepeat: S => {
          L ||= J.current !== null, lt(f, S);
        },
        wantedColumn: current_9.wanted
      }, () => {
        L = !0;
      }),
      w = current_9.command.type === "idle" || current_9.command.type === "count" || current_9.command.type === "operator" || current_9.command.type === "operatorCount",
      v = a.key;
    if (a.name === "left") v = "h";else if (a.name === "right") v = "l";else if (a.name === "up") v = "k";else if (a.name === "down") v = "j";else if (w && a.name === "backspace") v = W;else if (w && current_9.command.type !== "count" && a.name === "delete") v = "x";else if (a.key === "" || rt.has(a.name)) return;else if ([...a.key].length > 1) {
      Zt(a.key, f), a.preventDefault();
      return;
    }
    if ((v === "v" || v === "V") && (current_9.command.type === "idle" || current_9.command.type === "count")) {
      _e(m.offset, v === "V" ? "line" : "char", current_9.wanted);
      return;
    }
    let V = Xe(current_9.command, v, I);
    if (V.execute) V.execute();
    if (b.current.mode === "NORMAL" && (V.next || V.execute || V.wanted !== void 0)) b.current = {
      mode: "NORMAL",
      command: V.next ?? {
        type: "idle"
      },
      wanted: nt(V, L, current_9.wanted)
    };
    a.preventDefault();
  }
  let setMode = ae((a, f) => {
    if (ee.current = null, pe.current = null, a === "INSERT") b.current = {
      mode: "INSERT",
      insertedText: ""
    }, H(null);else if (a === "NORMAL") b.current = {
      mode: "NORMAL",
      command: {
        type: "idle"
      }
    }, H(null);else {
      let kind_2 = a === "VISUAL LINE" ? "line" : "char",
        m = f.offset;
      b.current = {
        mode: "VISUAL",
        kind: kind_2,
        anchor: m,
        command: {
          type: "idle"
        }
      }, H(m);
    }
    D(a), ot(!1), onModeChange?.(a);
  }, [onModeChange]);
  return {
    handleKeyDown: handleKeyDown,
    mode: mode,
    setMode: setMode,
    visualAnchor: visualAnchor,
    recordInsertedText: recordInsertedText,
    recordInsert: recordInsert,
    cancelPendingRemap: cancelPendingRemap,
    forgetColumn: forgetColumn,
    isCommandPending: isCommandPending
  };
}
function u9o(t) {
  let {
      inputFilter: inputFilter_2
    } = t,
    r = A(null),
    n = b4r({
      value: t.value,
      onChange: (o, i) => {
        if (o === "" && t.value !== "") r.current?.();
        t.onChange(o, i);
      },
      columns: t.columns,
      disableEscapeDoublePress: t.disableEscapeDoublePress,
      onModeChange: t.onModeChange,
      onUndo: t.onUndo && (() => {
        r.current?.(), t.onUndo?.();
      }),
      onOpenHistorySearch: t.onOpenHistorySearch,
      onToggleHelp: t.onToggleHelp,
      onHistoryUp: t.onHistoryUp && (() => {
        r.current?.(), t.onHistoryUp?.();
      }),
      onHistoryDown: t.onHistoryDown && (() => {
        r.current?.(), t.onHistoryDown?.();
      }),
      inputFilter: inputFilter_2,
      getInputMode: t.getInputMode,
      isActive: t.focus !== !1
    }),
    s = X2t({
      ...t,
      selectionAnchor: n.visualAnchor,
      selectionLinewise: n.mode === "VISUAL LINE",
      isCursorOnCharacter: n.mode !== "INSERT",
      inputFilter: (o, i) => {
        let u = inputFilter_2 ? inputFilter_2(o, i) : o;
        if (o === `
` && (i.name === "return" || i.name === "enter" || i.ctrl && i.name === "j")) {
          let c = i.name === "return" && t.multiline === !0 && t.disableBackslashReturn !== !0;
          n.recordInsert(u, c ? "\\" : "");
        } else n.recordInsertedText(u, i);
        return u;
      }
    });
  return r.current = s.noteKeystrokeEmptied ?? null, {
    ...s,
    handleKeyDown: o => n.handleKeyDown(o, s),
    recordInsert: n.recordInsert,
    mode: n.mode,
    setMode: o => n.setMode(o, s),
    cancelPendingRemap: n.cancelPendingRemap,
    forgetColumn: n.forgetColumn,
    isCommandPending: n.isCommandPending
  };
}
function Nn() {
  let t = kVo();
  if (t) return t;
  let e = gt();
  return EVo(e), e;
}
export { qre, t7, q2t, b4r, u9o };