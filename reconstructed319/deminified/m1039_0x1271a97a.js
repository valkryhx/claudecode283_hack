// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wVs, kVs } from "B:/~BUN/root/chunk-game8aqv.js";
import { Dm } from "B:/~BUN/root/chunk-31b4g6te.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { uxe } from "B:/~BUN/root/chunk-bkfncj77.js";
import { J8s, tst, TYe, Zvt, va, uhn } from "B:/~BUN/root/chunk-crjx6seq.js";
import { Z9e } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { n0 } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { zQs } from "B:/~BUN/root/chunk-y8c6wwat.js";
import { ue, ve, O, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Sa, t7, jte, cae } from "B:/~BUN/root/chunk-63176a0t.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
j();
j();
function dt(e) {
  let {
    watchLoop: watchLoop
  } = ve(Dm);
  O(() => e ? watchLoop() : void 0, [e, watchLoop]);
}
function ie(e, t) {
  if (t?.offset === e.offset && t.text === e.text) return t.column;
  let offset = e.startOfLogicalLine().offset,
    n = un(e.text, offset, e.offset);
  return e.text[e.offset] === "\t" ? n + Be("\t", n) - 1 : n;
}
function un(e, t, r) {
  let n = 0;
  for (let {
    segment: segment
  } of Sa().segment(e.slice(t, r))) n += Be(segment, n);
  return n;
}
function ae(e, t, r, n) {
  let s = 0;
  for (let {
    segment: segment_2,
    index: index
  } of Sa().segment(e.slice(t, r))) if (s += Be(segment_2, s), s > n) return t + index;
  return r;
}
function Be(e, t) {
  return e === "\t" ? uxe - t % uxe : ce(e);
}
var ln = {
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
function re(e, t, r, n) {
  if (r === "w") return pt(e, t, n, tst);
  if (r === "W") return pt(e, t, n, o => !TYe(o));
  let s = ln[r];
  if (s) {
    let [o, i] = s;
    return o === i ? fn(e, t, o, n) : cn(e, t, o, i, n);
  }
  return null;
}
function pt(e, t, r, n) {
  let s = [];
  for (let {
    segment: segment_3,
    index: index_2
  } of Sa().segment(e)) s.push({
    segment: segment_3,
    index: index_2
  });
  if (s.length === 0) return null;
  let o = s.length - 1;
  for (let T = 0; T < s.length; T++) {
    let x = s[T],
      I = T + 1 < s.length ? s[T + 1].index : e.length;
    if (t >= x.index && t < I) {
      o = T;
      break;
    }
  }
  let i = T => s[T]?.segment ?? "",
    u = T => T < s.length ? s[T].index : e.length,
    f = T => i(T) !== `
` && TYe(i(T)),
    d = T => n(i(T)),
    p = T => Zvt(i(T)),
    C = o,
    b = o;
  if (d(o)) {
    while (C > 0 && d(C - 1)) C--;
    while (b < s.length && d(b)) b++;
  } else if (TYe(i(o))) {
    let T = K => TYe(i(K)),
      x = t >= e.length,
      I = r && !x ? f : T;
    while (b < s.length && I(b)) b++;
    let W = !r && b === s.length,
      D = x || W ? T : f;
    while (C > 0 && D(C - 1)) C--;
    return {
      start: u(C),
      end: u(b)
    };
  } else if (p(o)) {
    while (C > 0 && p(C - 1)) C--;
    while (b < s.length && p(b)) b++;
  }
  if (!r) if (b < s.length && f(b)) while (b < s.length && f(b)) b++;else {
    let T = C;
    while (T > 0 && f(T - 1)) T--;
    if (T > 0 && i(T - 1) !== `
`) C = T;
  }
  return {
    start: u(C),
    end: u(b)
  };
}
function fn(e, t, r, n) {
  let s = e.lastIndexOf(`
`, t - 1) + 1,
    o = e.indexOf(`
`, t),
    i = o === -1 ? e.length : o,
    u = e.slice(s, i),
    f = t - s,
    d = [];
  for (let p = 0; p < u.length; p++) if (u[p] === r) d.push(p);
  for (let p = 0; p < d.length - 1; p += 2) {
    let C = d[p],
      b = d[p + 1];
    if (C <= f && f <= b) return n ? {
      start: s + C + 1,
      end: s + b
    } : {
      start: s + C,
      end: s + b + 1
    };
  }
  return null;
}
function cn(e, t, r, n, s) {
  let o = 0,
    start = -1;
  for (let f = t; f >= 0; f--) if (e[f] === n && f !== t) o++;else if (e[f] === r) {
    if (o === 0) {
      start = f;
      break;
    }
    o--;
  }
  if (start === -1) return null;
  o = 0;
  let end = -1;
  for (let f = start + 1; f < e.length; f++) if (e[f] === r) o++;else if (e[f] === n) {
    if (o === 0) {
      end = f;
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
var be = {
  d: "delete",
  c: "change",
  y: "yank"
};
function Ge(e) {
  return e in be;
}
var B = "\b",
  mt = new Set(["h", "l", " ", B, "j", "k", "w", "b", "e", "W", "B", "E", "0", "^", "$", "%"]),
  ye = new Set(["h", "l", " ", B]),
  Te = new Set(["f", "F", "t", "T"]),
  he = {
    i: "inner",
    a: "around"
  };
function He(e) {
  return e in he;
}
var $e = new Set(["w", "W", '"', "'", "`", "(", ")", "b", "[", "]", "{", "}", "B", "<", ">"]),
  gt = 1e4;
function Ot() {
  return {
    mode: "INSERT",
    insertedText: ""
  };
}
function xt() {
  return {
    lastFind: null,
    register: "",
    registerIsLinewise: !1
  };
}
function z(e, t, r) {
  if (e === "%" && r !== 1) return t;
  let n = t;
  for (let s = 0; s < r; s++) {
    let o = dn(e, n);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function dn(e, t) {
  switch (e) {
    case "h":
      return t.offset === t.startOfLogicalLine().offset ? t : t.left();
    case "l":
      return t.offset === t.endOfLogicalLine().offset ? t : t.right();
    case " ":
      return t.right();
    case B:
      return t.left();
    case "j":
      return t.downLogicalLine();
    case "k":
      return t.upLogicalLine();
    case "gj":
      return t.down();
    case "gk":
      return t.up();
    case "w":
      return t.nextVimWord();
    case "b":
      return t.prevVimWord();
    case "e":
      return t.endOfVimWord();
    case "W":
      return t.nextWORD();
    case "B":
      return t.prevWORD();
    case "E":
      return t.endOfWORD();
    case "0":
      return t.startOfLogicalLine();
    case "^":
      return t.firstNonBlankInLogicalLine();
    case "$":
      return t.lastCharInLogicalLine();
    case "G":
      return t.startOfLastLine();
    case "%":
      {
        let r = pn(J8s(t.text), t.offset);
        return r === null ? t : new va(t.measuredText, r);
      }
    default:
      return t;
  }
}
function pn(e, t) {
  let r = e.indexOf(`
`, t),
    n = r === -1 ? e.length : r,
    s = e.slice(t, n).search(/[()[\]{}]/);
  if (s === -1) return null;
  let o = t + s,
    i = re(e, o, e[o], !1);
  if (!i) return null;
  return i.start === o ? i.end - 1 : i.start;
}
function Je(e) {
  return "eE$%".includes(e);
}
function bt(e) {
  return "jkG".includes(e) || e === "gg";
}
function Q(op, motion, count, n) {
  if (motion === "gj" || motion === "gk") {
    let i = pe(motion, count, n);
    if (i.rowsRunOut) {
      n.setOffset(W7(n.cursor, i.offset));
      return;
    }
  }
  let s = z(motion, n.cursor, count);
  if (bt(motion)) {
    let i = _(n.text, n.cursor.offset),
      u = _(n.text, s.offset);
    if (u !== i) {
      let f = ee(n.text, s.offset),
        d = n.text.indexOf(`
`, f),
        p = d === -1 ? n.text.length : d,
        C = ae(n.text, f, p, ie(n.cursor, n.wantedColumn)),
        b = C === p && p > f && W7(n.cursor, p) === p ? n.cursor.measuredText.prevOffset(p) : C,
        T = motion === "k" ? ke(n.cursor, b, f) : Math.min(n.cursor.offset, s.offset);
      le(op, i, u, n, T), H(n, {
        type: "operator",
        op: op,
        motion: motion,
        count: count
      });
    }
    return;
  }
  if (motion === "%" && s.equals(n.cursor)) return;
  if (s.equals(n.cursor) && !Je(motion)) {
    let i = (motion === "w" || motion === "W") && count > 0;
    if (motion === "0" || motion === "^" || i || ye.has(motion)) {
      if (op === "yank") n.setRegister("", !1);else if (op === "change") n.enterInsert(n.cursor.offset);
      H(n, {
        type: "operator",
        op: op,
        motion: motion,
        count: count
      });
    }
    return;
  }
  let o = mn(n.cursor, s, motion, op, count);
  if (o.from === o.to && !(o.linewise && motion === " ")) {
    if (op === "change" || op === "yank") n.setRegister("", !1);
    if (op === "change") n.enterInsert(o.from), H(n, {
      type: "operator",
      op: op,
      motion: motion,
      count: count
    });
    return;
  }
  if (o.linewise && op !== "change") le(op, _(n.text, o.from), _(n.text, Math.max(o.from, o.to - 1)), n, n.cursor.offset);else Me(op, o.from, o.to, n, o.linewise);
  H(n, {
    type: "operator",
    op: op,
    motion: motion,
    count: count
  });
}
function Ce(op_2, find, char, count_2, s) {
  let o = s.cursor.findCharacter(char, find, count_2);
  if (o === null) return;
  let i = new va(s.cursor.measuredText, o),
    u = gn(s.cursor, i, find);
  Me(op_2, u.from, u.to, s), s.setLastFind(find, char), H(s, {
    type: "operatorFind",
    op: op_2,
    find: find,
    char: char,
    count: count_2
  });
}
function Re(op_3, scope, objType, count_3, s) {
  let o = re(s.text, s.cursor.offset, objType, scope === "inner");
  if (!o) return;
  Me(op_3, o.start, o.end, s);
  let {
      start: start_2
    } = o,
    u = scope === "inner" && count_3 === 1 && start_2 > 0 && "([{<".includes(s.text[start_2 - 1] ?? " ") && s.text[start_2] === `
`;
  if (op_3 === "yank" && u) s.setOffset(start_2 + 1);
  H(s, {
    type: "operatorTextObj",
    op: op_3,
    objType: objType,
    scope: scope,
    count: count_3
  });
}
function Z(op_4, count_4, r) {
  if (count_4 < 1) return;
  let n = _(r.text, r.cursor.offset);
  if (count_4 > 1 && !r.cursor.text.includes(`
`, r.cursor.offset)) return;
  let {
      offset: offset_2
    } = r.cursor,
    o = r.text[offset_2] === `
` ? r.cursor.placeholderEndingAt(offset_2) : null,
    i = o !== null && Z9e(r.text.slice(o.start, o.end));
  le(op_4, n, n + count_4 - 1, r, i ? r.cursor.startOfLogicalLine().offset : offset_2), H(r, {
    type: "operator",
    op: op_4,
    motion: op_4[0],
    count: count_4
  });
}
function Ie(count_5, t) {
  let offset_3 = t.cursor.offset;
  if (offset_3 >= t.text.length) return;
  let n = ht(t, count_5);
  if (n === offset_3) return;
  let s = t.text.slice(offset_3, n),
    o = t.text.slice(0, offset_3) + t.text.slice(n);
  t.setRegister(s, !1), t.setText(o), t.setOffset(dhe(o, offset_3)), t.recordChange({
    type: "x",
    count: count_5
  });
}
function we(count_6, t) {
  let offset_4 = t.cursor.offset,
    n = ht(t, count_6);
  if (n > offset_4) t.setRegister(t.text.slice(offset_4, n), !1), t.setText(t.text.slice(0, offset_4) + t.text.slice(n));
  t.enterInsert(offset_4), t.recordChange({
    type: "substitute",
    count: count_6
  });
}
function Le(char_2, count_7, r) {
  let offset_5 = r.cursor.offset,
    s = r.text,
    o = offset_5;
  for (let i = 0; i < count_7; i++) {
    if (o >= s.length || s[o] === `
`) return;
    o += t7(s.slice(o)).length || 1;
  }
  r.setText(s.slice(0, offset_5) + char_2.repeat(count_7) + s.slice(o)), r.setOffset(offset_5 + char_2.length * (count_7 - 1)), r.recordChange({
    type: "replace",
    char: char_2,
    count: count_7
  });
}
function Se(count_8, t) {
  let columns = t.cursor.measuredText.columns,
    n = t.text,
    offset_6 = t.cursor.offset,
    o = 0;
  while (offset_6 < n.length && n[offset_6] !== `
` && o < count_8) {
    let u = t7(n.slice(offset_6)),
      f = u.length,
      d = (u === u.toUpperCase() ? u.toLowerCase() : u.toUpperCase()).normalize("NFC");
    n = n.slice(0, offset_6) + d + n.slice(offset_6 + f), offset_6 += d.length, o++;
  }
  if (o === 0) return;
  let i = va.fromText(n, columns);
  t.setText(n), t.setOffset(W7(i, offset_6)), t.recordChange({
    type: "toggleCase",
    count: count_8
  });
}
function Xe(e, t) {
  let r = t.text.split(`
`),
    n = _(t.cursor.text, t.cursor.offset);
  if (n >= r.length - 1) {
    if (e >= 3) t.setOffset(ee(t.cursor.text, t.cursor.offset)), t.recordChange({
      type: "join",
      count: 2
    });
    return;
  }
  let s = Math.min(Math.max(e, 2) - 1, r.length - n - 1);
  Tt(r, n, s, t);
}
function Tt(e, t, r, n) {
  let s = e[t],
    o = s.length,
    i = s;
  for (let d = 1; d <= r; d++) {
    o = s.length;
    let p = e[t + d].replace(/^[ \t\r]+/, "");
    if (p.length > 0 && s.length > 0 && !p.startsWith(")") && !/[ \t]$/.test(i)) s += " ";
    s += p, i = p;
  }
  let u = [...e.slice(0, t), s, ...e.slice(t + r + 1)],
    f = u.join(`
`);
  n.setText(f), n.setOffset(dhe(f, Y(u, t) + o)), n.recordChange({
    type: "join",
    count: r + 1
  });
}
function fe(after, count_9, r) {
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
      f = _(r.cursor.text, r.cursor.offset),
      d = after ? f + 1 : f,
      p = o.split(`
`),
      C = [];
    for (let D = 0; D < count_9; D++) C.push(...p);
    let b = [...u.slice(0, d), ...C, ...u.slice(d)],
      T = b.join(`
`),
      cursorOffset = Y(b, d),
      I = va.fromText(p[0] ?? "", r.cursor.measuredText.columns),
      W = Fe(I);
    r.setText(T, {
      previous: {
        value: value,
        cursorOffset: cursorOffset
      }
    }), r.setOffset(cursorOffset + (I.placeholderStartingAt(W) ? 0 : W));
  } else {
    let i = o.repeat(count_9),
      offset_7 = r.cursor.offset,
      f = r.text[offset_7] === `
` && (offset_7 === 0 || r.text[offset_7 - 1] === `
`),
      cursorOffset_2 = after && offset_7 < r.text.length && !f ? r.cursor.measuredText.nextOffset(offset_7) : offset_7,
      p = r.text.slice(0, cursorOffset_2) + i + r.text.slice(cursorOffset_2),
      C = i.includes(`
`) ? dhe(p, cursorOffset_2) : cursorOffset_2 + i.length - (jte(i).length || 1);
    r.setText(p, {
      previous: {
        value: r.text,
        cursorOffset: cursorOffset_2
      }
    }), r.setOffset(C);
  }
}
function Ve(dir, count_10, r) {
  let s = r.text.split(`
`),
    o = _(r.cursor.text, r.cursor.offset);
  if (count_10 > 1 && o === s.length - 1) return;
  let i = Math.min(count_10, s.length - o);
  Ye(s, o, o + i - 1, dir);
  let u = s.join(`
`),
    f = ge(s[o] ?? "");
  r.setText(u), r.setOffset(Y(s, o) + f), r.recordChange({
    type: "indent",
    dir: dir,
    count: count_10
  });
}
function de(direction, t) {
  let value_2 = t.text,
    n = value_2.split(`
`),
    s = _(t.cursor.text, t.cursor.offset),
    o = direction === "below" ? s + 1 : s,
    i = [...n.slice(0, o), "", ...n.slice(o)],
    u = i.join(`
`),
    cursorOffset_3 = Y(i, o);
  t.setText(u, {
    previous: {
      value: value_2,
      cursorOffset: cursorOffset_3
    }
  }), t.enterInsert(cursorOffset_3), t.recordChange({
    type: "openLine",
    direction: direction
  });
}
function H(e, t) {
  if (t.op !== "yank") e.recordChange(t);
}
function ht(e, t) {
  let cursor = e.cursor;
  for (let n = 0; n < t && !cursor.isAtEnd(); n++) {
    if (e.text[cursor.offset] === `
`) break;
    cursor = cursor.right();
  }
  return cursor.offset;
}
function Y(e, t) {
  return e.slice(0, t).join(`
`).length + (t > 0 ? 1 : 0);
}
function mn(e, t, r, n, s) {
  let o = Math.min(e.offset, t.offset),
    to = Math.max(e.offset, t.offset),
    linewise = !1,
    f = r === "w" || r === "W",
    d = f && n === "change",
    p = f && n !== "change",
    C = e.text[e.offset],
    b = (C === " " || C === "\t" || C === `
`) && e.snapOutOfPlaceholder(e.offset, "start") === e.offset;
  if (d && b) {
    if (to = yt(e, r, s, to), to > o && e.text[to - 1] === `
`) {
      to -= 1;
      let offset_8 = e.startOfLogicalLine().offset;
      if (/^[ \t]*$/.test(e.text.slice(offset_8, o))) o = offset_8, linewise = !0;
    }
  } else if (d) {
    let I = e;
    for (let oe = 0; oe < s - 1; oe++) do I = r === "w" ? I.nextVimWord() : I.nextWORD(); while (e.isOnEmptyLine(I.offset));
    let W = r === "w" ? I.endOfVimWord() : I.endOfWORD(),
      D = e.measuredText.nextOffset(I.offset),
      K = r === "w" ? I.nextVimWord() : I.nextWORD();
    if ((D >= e.text.length || TYe(e.text[D] ?? "") || K.offset === D) && !TYe(e.text[e.offset] ?? "") && !TYe(e.text[I.offset] ?? "")) W = I;
    to = e.measuredText.nextOffset(W.offset);
  } else if (Je(r) && (r === "%" || e.offset <= t.offset) && e.text[to] !== `
`) to = e.measuredText.nextOffset(to);else if (p) to = yt(e, r, s, to);
  let T = ee(e.text, o),
    x = /^[ \t]*$/.test(e.text.slice(T, o));
  if ((r === " " || p) && to > o && e.text[to - 1] === `
`) linewise = x, o = linewise ? T : o, to = linewise && n !== "change" ? to : to - 1;else if (p && n === "delete" && x && e.text.slice(o, to).includes(`
`) && /^[ \t]*(\n|$)/.test(e.text.slice(to))) o = T, linewise = !0;
  return o = e.snapOutOfPlaceholder(o, "start"), to = e.snapOutOfPlaceholder(to, "end"), {
    from: o,
    to: to,
    linewise: linewise
  };
}
function yt(e, t, r, n) {
  let s = z(t, e, r - 1),
    offset_9 = s.endOfLogicalLine().offset;
  if (n <= offset_9) return n;
  return offset_9 > s.offset ? offset_9 : offset_9 + 1;
}
function gn(e, t, r) {
  let n = Math.max(e.offset, t.offset),
    s = e.snapOutOfPlaceholder(Math.min(e.offset, t.offset), "start"),
    to_2 = e.snapOutOfPlaceholder(e.measuredText.nextOffset(n), "end");
  return {
    from: s,
    to: to_2
  };
}
function Me(e, t, r, n, s = !1) {
  let o = n.text.slice(t, r);
  if (s && !o.endsWith(`
`)) o = o + `
`;
  if (o || e !== "delete") n.setRegister(o, s);
  if (e === "yank") n.setOffset(W7(n.cursor, t));else if (e === "delete") {
    let i = n.text.slice(0, t) + n.text.slice(r);
    n.setText(i), n.setOffset(dhe(i, t));
  } else if (e === "change") {
    let i = n.text.slice(0, t) + n.text.slice(r);
    n.setText(i), n.enterInsert(t);
  }
}
function dhe(e, t) {
  if (e[t] === `
` && t > 0 && e[t - 1] !== `
`) return t - (jte(e.slice(0, t)).length || 1);
  if (t >= e.length && !e.endsWith(`
`)) return Math.max(0, e.length - (jte(e).length || 1));
  return t;
}
function ke(e, t, r) {
  let n = ze(e, t),
    s = t;
  while (n && n.start > r) s = e.measuredText.prevOffset(n.start), n = ze(e, s);
  if (!n) return s;
  let o = n.end;
  while (n = ze(e, o)) o = n.end;
  return o;
}
function ze(e, t) {
  let r = e.snapOutOfPlaceholder(t, "start");
  return e.placeholderStartingAt(r);
}
function W7(e, t, r = e.text) {
  let n = dhe(r, t);
  return e.snapOutOfPlaceholder(n, "start") === n ? n : t;
}
function pe(e, t, r) {
  let {
      cursor: cursor_2
    } = r,
    s = z(e, cursor_2, t),
    o = cursor_2.measuredText.getWrappedLines(),
    line = cursor_2.getPosition().line,
    rowsRunOut = (e === "gj" ? o.length - 1 - line : line) < t,
    d = o[line],
    p = o[s.getPosition().line],
    C = d?.startOffset === 0 || d?.isPrecededByNewline,
    b = p?.startOffset === 0 || p?.isPrecededByNewline;
  if (s.equals(cursor_2) || !C || !b || !p) return {
    offset: s.offset,
    column: null,
    rowsRunOut: rowsRunOut
  };
  let column = ie(cursor_2, r.wantedColumn),
    x = p.startOffset + p.text.length,
    I = ae(cursor_2.text, p.startOffset, x, column),
    W = ke(cursor_2, I, p.startOffset),
    D = !p.endsWithNewline && x < cursor_2.text.length;
  return {
    offset: W === x && D ? cursor_2.measuredText.prevOffset(x) : W,
    column: column,
    rowsRunOut: rowsRunOut
  };
}
function ee(e, t) {
  if (t === 0) return 0;
  let r = e.lastIndexOf(`
`, t - 1);
  return r === -1 ? 0 : r + 1;
}
function Ee(e, t) {
  if (t) {
    let r = Dt(e, `
`);
    return e.endsWith(`
`) ? r : r + 1;
  }
  return cae(e);
}
function me(e, t, r) {
  let n = e.text;
  if (r) {
    let i = ee(n, e.cursor.offset),
      to_3 = i;
    for (let f = 0; f < t; f++) {
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
  let offset_10 = e.cursor.offset,
    to_4 = offset_10;
  for (let i = 0; i < t && to_4 < n.length; i++) to_4 = e.cursor.measuredText.nextOffset(to_4);
  return {
    from: offset_10,
    to: to_4
  };
}
function Ae(e, t, r) {
  let n = Math.min(e, t.cursor.offset),
    s = Math.max(e, t.cursor.offset);
  if (!r) return {
    from: n,
    to: t.cursor.measuredText.nextOffset(s)
  };
  let o = t.text,
    i = ee(o, n),
    u = o.indexOf(`
`, s),
    to_5 = u === -1 ? o.length : u + 1;
  return {
    from: i,
    to: to_5
  };
}
function Ye(e, t, r, n) {
  for (let o = t; o <= r; o++) {
    let i = e[o] ?? "";
    if (i === "") continue;
    if (n === ">") e[o] = "  " + i;else if (i.startsWith("  ")) e[o] = i.slice(2);else if (i.startsWith("\t")) e[o] = i.slice(1);else {
      let u = 0;
      while (u < i.length && u < 2 && /\s/.test(i[u])) u++;
      e[o] = i.slice(u);
    }
  }
}
function Ct(e, t, r) {
  let n = Math.min(e, t.cursor.offset),
    s = Math.max(e, t.cursor.offset),
    o = t.text,
    i = Dt(o.slice(0, n), `
`),
    u = Dt(o.slice(n, s), `
`) + 1,
    f = o.split(`
`);
  if (i >= f.length - 1) {
    t.setOffset(r ? ee(t.cursor.text, n) : dhe(t.cursor.text, n)), t.recordChange({
      type: "join",
      count: 2
    });
    return;
  }
  let d = Math.max(1, Math.min(u - 1, f.length - i - 1));
  Tt(f, i, d, t);
}
function Rt(e, t) {
  let r = t.text.split(`
`);
  if (_(t.cursor.text, t.cursor.offset) < r.length - 1) Xe(e, t);
}
function vt(dir_2, count_11, r, n) {
  let s = Math.min(r, n.cursor.offset),
    o = Math.max(r, n.cursor.offset),
    i = n.text,
    u = Dt(i.slice(0, s), `
`),
    f = u + Dt(i.slice(s, o), `
`),
    d = i.split(`
`);
  for (let b = 0; b < count_11; b++) Ye(d, u, f, dir_2);
  let p = d.join(`
`),
    C = ge(d[u] ?? "");
  n.setText(p), n.setOffset(Y(d, u) + C), n.recordChange({
    type: "visualIndent",
    dir: dir_2,
    count: count_11,
    lines: f - u + 1
  });
}
function It(e, t, r, n) {
  let s = n.text,
    o = s.split(`
`),
    i = Dt(s.slice(0, n.cursor.offset), `
`),
    u = Math.min(i + r - 1, o.length - 1);
  for (let p = 0; p < t; p++) Ye(o, i, u, e);
  let f = o.join(`
`),
    d = ge(o[i] ?? "");
  n.setText(f), n.setOffset(Y(o, i) + d);
}
function wt(e, t, r, n, s, o = !1) {
  if (s && e === "change") {
    let i = n.text.slice(t, r),
      u = i;
    if (!u.endsWith(`
`)) u += `
`;
    n.setRegister(u, !0);
    let f = n.text.slice(0, t),
      d = n.text.slice(r),
      p = d !== "" || i.endsWith(`
`) && !o;
    n.setText(f + (p ? `
` : "") + d), n.enterInsert(t);
    return;
  }
  if (s && e === "delete") {
    let i = n.text.slice(t, r);
    if (!i.endsWith(`
`)) i += `
`;
    n.setRegister(i, !0);
    let u = t;
    if (r === n.text.length && t > 0 && n.text[t - 1] === `
`) u -= 1;
    let f = r < n.text.length,
      d = n.text.slice(0, u) + n.text.slice(r);
    n.setText(d);
    let p = f ? t : ee(d, d.length),
      C = d.indexOf(`
`, p),
      b = C === -1 ? d.length : C,
      T = va.fromText(d.slice(p, b), n.cursor.measuredText.columns + 1),
      x = _t(T, f),
      I = !f && T.placeholderStartingAt(x) !== null;
    n.setOffset(I ? dhe(d, d.length) : p + x);
    return;
  }
  Me(e, t, r, n, s);
}
function Lt(op_5, t, r, linewise_2) {
  let {
      from: s,
      to: to_6
    } = Ae(t, r, linewise_2),
    span = Ee(r.text.slice(s, to_6), linewise_2);
  wt(op_5, s, to_6, r, linewise_2, Ut(t, r, linewise_2)), H(r, {
    type: "visualOp",
    op: op_5,
    span: span,
    linewise: linewise_2
  });
}
function St(e, t, r, n) {
  let {
    from: s,
    to: to_7
  } = me(n, t, r);
  if (s === to_7 && !(r && n.text.length > 0)) return;
  wt(e, s, to_7, n, r);
}
function Vt(e, t, r) {
  let {
    from: n,
    to: to_8
  } = me(r, e, t);
  if (n === to_8 && !t) return;
  let o = r.text.slice(n, to_8),
    i = o;
  if (t && !i.endsWith(`
`)) i += `
`;
  r.setRegister(i, t);
  let u = r.text.slice(to_8),
    f = t && (u !== "" || o.endsWith(`
`)) ? `
` + u : u;
  r.setText(r.text.slice(0, n) + f), r.enterInsert(n);
}
function Mt(e, t, r, n) {
  let s = n.text.slice(t, r),
    o = "";
  for (let {
    segment: segment_4
  } of Sa().segment(s)) o += segment_4 === `
` ? `
` : e;
  let i = n.text.slice(0, t) + o + n.text.slice(r),
    cursor_3 = n.cursor;
  n.setText(i), n.setOffset(W7(cursor_3, t, i));
}
function kt(char_3, t, r, linewise_3) {
  let {
      from: s,
      to: to_9
    } = Ae(t, r, linewise_3),
    span_2 = Ee(r.text.slice(s, to_9), linewise_3);
  Mt(char_3, s, to_9, r), r.recordChange({
    type: "visualReplace",
    char: char_3,
    span: span_2,
    linewise: linewise_3
  });
}
function Et(e, t, r, n) {
  let {
    from: s,
    to: to_10
  } = me(n, t, r);
  if (s === to_10) return;
  Mt(e, s, to_10, n);
}
function At(e, t, r, n) {
  let s = n.text.slice(t, r),
    o = "";
  for (let {
    segment: segment_5
  } of Sa().segment(s)) if (e === "upper") o += segment_5.toUpperCase();else if (e === "lower") o += segment_5.toLowerCase();else o += segment_5 === segment_5.toUpperCase() ? segment_5.toLowerCase() : segment_5.toUpperCase();
  let i = n.text.slice(0, t) + o + n.text.slice(r),
    cursor_4 = n.cursor;
  n.setText(i), n.setOffset(W7(cursor_4, t, i));
}
function jt(caseOp, t, r, linewise_4) {
  let {
      from: s,
      to: to_11
    } = Ae(t, r, linewise_4),
    span_3 = Ee(r.text.slice(s, to_11), linewise_4);
  At(caseOp, s, to_11, r), r.recordChange({
    type: "visualCase",
    caseOp: caseOp,
    span: span_3,
    linewise: linewise_4
  });
}
function Nt(e, t, r, n) {
  let {
    from: s,
    to: to_12
  } = me(n, t, r);
  if (s === to_12) return;
  At(e, s, to_12, n);
}
function Ft(e, t, linewise_5) {
  let content = t.getRegister();
  if (!content) return;
  let registerLinewise = t.getRegisterIsLinewise(),
    {
      from: o,
      to: to_13
    } = Ae(e, t, linewise_5),
    u = t.text.slice(o, to_13),
    span_4 = Ee(u, linewise_5);
  Pt(content, registerLinewise, o, to_13, t, linewise_5, Ut(e, t, linewise_5)), t.recordChange({
    type: "visualPaste",
    content: content,
    registerLinewise: registerLinewise,
    selectionEndsLine: u.endsWith(`
`),
    selectionOnOneLine: !u.slice(0, -1).includes(`
`),
    span: span_4,
    linewise: linewise_5
  });
}
function Wt(e, t, r, n, s, o, i) {
  let {
    from: u,
    to: to_14
  } = me(i, s, o);
  if (u === to_14 && !o) return;
  Pt(e, t, u, !o && n ? Math.min(to_14, i.cursor.endOfLogicalLine().offset + (r ? 1 : 0)) : to_14, i, o, !1);
}
function Pt(e, t, r, n, s, o, i) {
  let u = s.text.slice(r, n),
    f = t ? e.replace(/\n$/, "") : e,
    d = u.endsWith(`
`) && !i,
    p = e,
    C = r;
  if (o) p = d ? f + `
` : f;else if (t) p = s.text ? `
` + f + `
` : `
` + f, C = r + 1;
  let b = u;
  if (o && !d) b += `
`;
  if (b) s.setRegister(b, o);
  let T = s.text.slice(0, r) + p + s.text.slice(n);
  if (s.setText(T), o || t) {
    let x = va.fromText(T, s.cursor.measuredText.columns, C),
      I = Fe(x);
    s.setOffset(x.placeholderStartingAt(I) ? C : I);
  } else if (p.includes(`
`)) s.setOffset(W7(s.cursor, r, T));else {
    let x = jte(p);
    s.setOffset(Math.max(r, r + p.length - (x.length || 1)));
  }
}
function je(op_6, count_12, r) {
  let n = count_12 === 0 ? r.cursor.startOfLastLine() : r.cursor.goToLine(count_12);
  le(op_6, _(r.text, r.cursor.offset), _(r.text, n.offset), r, Math.min(r.cursor.offset, Fe(n))), H(r, {
    type: "operator",
    op: op_6,
    motion: "G",
    count: count_12
  });
}
function Ne(op_7, count_13, r) {
  let n = count_13 === 1 ? r.cursor.startOfFirstLine() : r.cursor.goToLine(count_13);
  le(op_7, _(r.text, r.cursor.offset), _(r.text, n.offset), r, Math.min(r.cursor.offset, Fe(n))), H(r, {
    type: "operator",
    op: op_7,
    motion: "gg",
    count: count_13
  });
}
function le(e, t, r, n, s) {
  let o = n.text.split(`
`),
    i = Math.min(t, r),
    u = Math.min(Math.max(t, r) + 1, o.length),
    f = o.slice(0, i),
    d = o.slice(u),
    p = Y(o, i),
    C = o.slice(i, u).map(item => item + `
`).join("");
  if (n.setRegister(C, !0), e === "yank") {
    let b = dhe(n.text, s);
    n.setOffset(s === n.text.length ? Kt(n.cursor, b) : n.cursor.snapOutOfPlaceholder(b, "start"));
  } else if (e === "delete") {
    let b = [...f, ...d];
    n.setText(b.join(`
`));
    let T = Math.max(0, Math.min(i, b.length - 1)),
      x = va.fromText(b[T] ?? "", n.cursor.measuredText.columns + 1);
    n.setOffset(Y(b, T) + _t(x, d.length > 0));
  } else if (e === "change") n.setText([...f, "", ...d].join(`
`)), n.enterInsert(p);
}
function _(e, t) {
  return Dt(e.slice(0, t), `
`);
}
function ge(e) {
  let t = 0;
  for (let {
    segment: segment_6,
    index: index_3
  } of Sa().segment(e)) if (t = index_3, segment_6 !== " " && segment_6 !== "\t") break;
  return t;
}
function _t(e, t) {
  let r = ge(e.text);
  if (e.placeholderStartingAt(r) === null) return r;
  if (r > 0 || t) return 0;
  let n = dhe(e.text, e.text.length);
  return Kt(e, n);
}
function Kt(e, t) {
  let r = e.snapOutOfPlaceholder(t, "start");
  if (r === t) return t;
  let n = e.snapOutOfPlaceholder(t, "end");
  return Z9e(e.text.slice(r, n)) ? n : r;
}
function Fe(e) {
  let offset_11 = e.startOfLogicalLine().offset,
    offset_12 = e.endOfLogicalLine().offset;
  return offset_11 + ge(e.text.slice(offset_11, offset_12));
}
function Ut(e, t, r) {
  return r && t.text.endsWith(`
`) && Math.max(e, t.cursor.offset) >= t.text.length;
}
var Bt = 1000;
function On(e) {
  let t = new Map();
  for (let [r, n] of Object.entries(e)) {
    if (typeof n !== "string" || n.toLowerCase() !== "<esc>") continue;
    let s = r.normalize("NFC");
    if (!/^[^\p{C}\p{Z}]{2}$/u.test(s) || cae(s) !== 2) continue;
    t.set(s, "<Esc>");
  }
  return t;
}
function lhn() {
  return On(n0("vimInsertModeRemaps")[0] ?? {});
}
function qe(e, t, r) {
  switch (e.type) {
    case "idle":
      return bn(t, r);
    case "count":
      return yn(e, t, r);
    case "operator":
      return Tn(e, t, r);
    case "operatorCount":
      return hn(e, t, r);
    case "operatorFind":
      return Cn(e, t, r);
    case "operatorTextObj":
      return Rn(e, t, r);
    case "find":
      return vn(e, t, r);
    case "g":
      return In(e, t, r);
    case "operatorG":
      return wn(e, t, r);
    case "replace":
      return Ln(e, t, r);
    case "indent":
      return Sn(e, t, r);
  }
}
var xn = Object.assign(Object.create(null), {
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
  "~": (e, t) => ({
    execute: () => Se(e, t)
  }),
  x: (e, t) => ({
    execute: () => Ie(e, t),
    wanted: null
  }),
  s: (e, t) => ({
    execute: () => we(e, t)
  }),
  S: (e, t) => ({
    execute: () => Z("change", e, t)
  }),
  J: (e, t) => ({
    execute: () => Xe(e, t)
  }),
  p: (e, t) => ({
    execute: () => fe(!0, e, t),
    wanted: t.getRegister() === "" ? void 0 : null
  }),
  P: (e, t) => ({
    execute: () => fe(!1, e, t),
    wanted: t.getRegister() === "" ? void 0 : null
  }),
  D: (e, t) => ({
    execute: () => Q("delete", "$", 1, t),
    wanted: null
  }),
  C: (e, t) => ({
    execute: () => Q("change", "$", 1, t)
  }),
  Y: (e, t) => ({
    execute: () => Z("yank", e, t)
  }),
  ";": (e, t) => ({
    execute: () => Pe(!1, e, t)
  }),
  ",": (e, t) => ({
    execute: () => Pe(!0, e, t)
  }),
  u: (e, t) => ({
    execute: () => t.onUndo?.(),
    wanted: null
  }),
  i: (e, t) => ({
    execute: () => We("i", t)
  }),
  I: (e, t) => ({
    execute: () => We("I", t)
  }),
  a: (e, t) => ({
    execute: () => We("a", t)
  }),
  A: (e, t) => ({
    execute: () => We("A", t)
  }),
  o: (e, t) => ({
    execute: () => de("below", t)
  }),
  O: (e, t) => ({
    execute: () => de("above", t)
  })
});
function Gt(find_2, count_18, countTyped, n) {
  if (Ge(find_2)) return {
    next: {
      type: "operator",
      op: be[find_2],
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
        column: column_2
      } = Xt(find_2 === "j", count_18, n),
      {
        text: text
      } = n.cursor;
    if (offset_13 === null) return {
      next: {
        type: "idle"
      },
      wanted: {
        column: column_2,
        offset: n.cursor.offset,
        text: text
      }
    };
    let offset_14 = W7(n.cursor, offset_13);
    return {
      execute: () => n.setOffset(offset_14),
      wanted: {
        column: column_2,
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
  if (Qe(find_2, countTyped)) {
    let s = find_2 === " " || find_2 === B ? Nn(find_2, n.cursor, count_18) : z(find_2, n.cursor, count_18),
      o = W7(s, s.offset);
    if (o === n.cursor.offset && zt(find_2)) return {
      next: {
        type: "idle"
      }
    };
    return {
      execute: () => n.setOffset(o),
      wanted: null
    };
  }
  if (Te.has(find_2)) return {
    next: {
      type: "find",
      find: find_2,
      count: count_18
    }
  };
  if (find_2 === ".") return {
    execute: () => n.onDotRepeat?.(countTyped ? count_18 : void 0)
  };
  return xn[find_2]?.(count_18, n) ?? null;
}
function Ht(op_8, count_19, r, find_3, s) {
  if (He(find_3)) return {
    next: {
      type: "operatorTextObj",
      op: op_8,
      count: count_19,
      scope: he[find_3]
    }
  };
  if (Te.has(find_3)) return {
    next: {
      type: "operatorFind",
      op: op_8,
      count: count_19,
      find: find_3
    }
  };
  if (Qe(find_3, r)) return {
    execute: () => Q(op_8, find_3, count_19, s),
    wanted: find_3 === "j" || find_3 === "k" || find_3 === "%" ? void 0 : null
  };
  if (find_3 === "G") {
    let o = r ? count_19 : 0;
    return {
      execute: () => je(op_8, o, s)
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
function bn(e, t) {
  if (/[1-9]/.test(e)) return {
    next: {
      type: "count",
      count: parseInt(e, 10)
    }
  };
  if (e === "0") return {
    execute: () => t.setOffset(t.cursor.startOfLogicalLine().offset)
  };
  let r = Gt(e, 1, !1, t);
  if (r) return r;
  return {};
}
function yn(e, t, r) {
  if (/[0-9]/.test(t)) return {
    next: {
      type: "count",
      count: Ze(e.count, t)
    }
  };
  let n = Gt(t, e.count, !0, r);
  if (n) return n;
  return {
    next: {
      type: "idle"
    }
  };
}
function Tn(e, t, r) {
  if (t === e.op[0]) return {
    execute: () => Z(e.op, e.count, r)
  };
  if (/[1-9]/.test(t)) return {
    next: {
      type: "operatorCount",
      op: e.op,
      count: e.count,
      motionCount: parseInt(t, 10)
    }
  };
  let n = e.countTyped ?? !1,
    s = Ht(e.op, e.count, n, t, r);
  if (s) return s;
  return {
    next: {
      type: "idle"
    }
  };
}
function hn(e, t, r) {
  if (/[0-9]/.test(t)) return {
    next: {
      ...e,
      motionCount: Ze(e.motionCount, t)
    }
  };
  let n = e.count * e.motionCount;
  if (t === e.op[0]) return {
    execute: () => Z(e.op, n, r)
  };
  let s = Ht(e.op, n, !0, t, r);
  if (s) return s;
  return {
    next: {
      type: "idle"
    }
  };
}
function Cn(e, t, r) {
  return {
    execute: () => {
      if (t !== "") r.setLastFind(e.find, t);
      Ce(e.op, e.find, t, e.count, r);
    }
  };
}
function Rn(e, t, r) {
  if ($e.has(t)) return {
    execute: () => Re(e.op, e.scope, t, e.count, r)
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function vn(e, t, r) {
  return {
    execute: () => {
      if (t !== "") r.setLastFind(e.find, t);
      let n = r.cursor.findCharacter(t, e.find, e.count);
      if (n !== null) r.setOffset(n);
    }
  };
}
function In(e, t, r) {
  if (t === "j" || t === "k") return Yt(pe(`g${t}`, e.count, r), r);
  if (t === "g") {
    if (e.count > 1) return {
      execute: () => {
        let n = r.text.split(`
`),
          s = Math.min(e.count - 1, n.length - 1),
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
function wn(e, t, r) {
  if (t === "j" || t === "k") {
    let n = pe(`g${t}`, e.count, r);
    if (n.rowsRunOut) return Yt(n, r);
    return {
      execute: () => Q(e.op, `g${t}`, e.count, r)
    };
  }
  if (t === "g") return {
    execute: () => Ne(e.op, e.count, r)
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function Ln(e, t, r) {
  if (t === "") return {
    next: {
      type: "idle"
    }
  };
  return {
    execute: () => Le(t, e.count, r)
  };
}
function Sn(e, t, r) {
  if (t === e.dir) return {
    execute: () => Ve(e.dir, e.count, r)
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function Pe(e, t, r) {
  let n = r.getLastFind();
  if (!n) return;
  let s = n.type;
  if (e) s = {
    f: "F",
    F: "f",
    t: "T",
    T: "t"
  }[s];
  let o = r.cursor.findCharacter(n.char, s, t);
  if (o !== null) r.setOffset(o);
}
function $t(e, char_4, r) {
  switch (e.type) {
    case "idle":
      return Mn(char_4, r);
    case "count":
      return kn(e, char_4, r);
    case "find":
      return En(e, char_4, r);
    case "g":
      return An(e, char_4, r);
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
      return jn(e, char_4, r);
  }
}
var Vn = Object.assign(Object.create(null), {
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
  $: (e, t) => {
    let offset_16 = t.cursor.endOfLogicalLine().offset;
    return {
      next: {
        type: "idle"
      },
      move: () => t.setOffset(offset_16),
      wanted: {
        column: 1 / 0,
        offset: offset_16,
        text: t.cursor.text
      }
    };
  },
  g: count_22 => ({
    next: {
      type: "g",
      count: count_22
    }
  }),
  ";": (e, t) => ({
    next: {
      type: "idle"
    },
    move: () => Pe(!1, e, t)
  }),
  ",": (e, t) => ({
    next: {
      type: "idle"
    },
    move: () => Pe(!0, e, t)
  })
});
function Jt(find_4, count_23, r, n) {
  if (Ge(find_4)) return {
    exit: "operator",
    op: be[find_4]
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
  let s = Vn[find_4];
  if (s) return s(count_23, n);
  if (He(find_4)) return {
    next: {
      type: "textObject",
      scope: he[find_4],
      count: count_23
    }
  };
  if (find_4 === "j" || find_4 === "k") {
    let o = Xt(find_4 === "j", count_23, n),
      offset_17 = o.offset ?? n.cursor.offset;
    return {
      next: {
        type: "idle"
      },
      move: () => n.setOffset(offset_17),
      wanted: {
        column: o.column,
        offset: offset_17,
        text: n.cursor.text
      }
    };
  }
  if (Qe(find_4, r)) {
    let {
      offset: offset_18
    } = z(find_4, n.cursor, count_23);
    if (offset_18 === n.cursor.offset && zt(find_4)) return {
      next: {
        type: "idle"
      }
    };
    return {
      next: {
        type: "idle"
      },
      move: () => n.setOffset(offset_18)
    };
  }
  if (Te.has(find_4)) return {
    next: {
      type: "find",
      find: find_4,
      count: count_23
    }
  };
  return null;
}
function Mn(e, t) {
  if (/[1-9]/.test(e)) return {
    next: {
      type: "count",
      count: parseInt(e, 10)
    }
  };
  if (e === "0") return {
    next: {
      type: "idle"
    },
    move: () => t.setOffset(t.cursor.startOfLogicalLine().offset)
  };
  return Jt(e, 1, !1, t) ?? {
    next: {
      type: "idle"
    }
  };
}
function kn(e, t, r) {
  if (/[0-9]/.test(t)) return {
    next: {
      type: "count",
      count: Ze(e.count, t)
    }
  };
  return Jt(t, e.count, !0, r) ?? {
    next: {
      type: "idle"
    }
  };
}
function En(e, t, r) {
  return {
    next: {
      type: "idle"
    },
    move: () => {
      if (t !== "") r.setLastFind(e.find, t);
      let n = r.cursor.findCharacter(t, e.find, e.count);
      if (n !== null) r.setOffset(n);
    }
  };
}
function An(e, t, r) {
  if (t === "j" || t === "k") {
    let {
      offset: offset_19,
      column: column_3
    } = pe(`g${t}`, e.count, r);
    return {
      next: {
        type: "idle"
      },
      move: () => r.setOffset(offset_19),
      wanted: column_3 === null ? null : {
        column: column_3,
        offset: offset_19,
        text: r.cursor.text
      }
    };
  }
  if (t === "g") return {
    next: {
      type: "idle"
    },
    move: () => {
      let n = e.count > 1 ? r.cursor.goToLine(e.count) : r.cursor.startOfFirstLine();
      r.setOffset(n.offset);
    }
  };
  return {
    next: {
      type: "idle"
    }
  };
}
function jn(e, t, r) {
  if ($e.has(t)) {
    let n = re(r.text, r.cursor.offset, t, e.scope === "inner");
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
function Qe(e, t) {
  return mt.has(e) && !(e === "%" && t);
}
function zt(e) {
  return ye.has(e) || e === "%";
}
function Ze(e, t) {
  return Math.min(e * 10 + parseInt(t, 10), gt);
}
function et(e, t) {
  switch (e) {
    case "i":
      return t.offset;
    case "I":
      return t.firstNonBlankInLogicalLine().offset;
    case "a":
      return t.isAtEnd() || t.text[t.offset] === `
` ? t.offset : t.right().offset;
    case "A":
      return t.endOfLogicalLine().offset;
  }
}
function We(key, t) {
  t.enterInsert(et(key, t.cursor)), t.recordChange({
    type: "insertCommand",
    key: key
  });
}
function Nn(e, t, r) {
  let n = t;
  for (let s = 0; s < r; s++) {
    let o = z(e, n, 1),
      {
        text: text_2,
        offset: offset_20
      } = o;
    if (text_2[offset_20] === `
` && offset_20 > 0 && text_2[offset_20 - 1] !== `
`) o = e === B ? new va(o.measuredText, W7(o, offset_20)) : z(e, o, 1);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function Xt(e, t, r) {
  let {
      cursor: cursor_5
    } = r,
    s = cursor_5.text,
    offset_21 = cursor_5.startOfLogicalLine().offset,
    column_4 = ie(cursor_5, r.wantedColumn),
    u = offset_21;
  for (let C = 0; C < t; C++) if (e) {
    let b = s.indexOf(`
`, u);
    if (b === -1) break;
    u = b + 1;
  } else if (u === 0) break;else u = u === 1 ? 0 : s.lastIndexOf(`
`, u - 2) + 1;
  if (u === offset_21) return {
    offset: null,
    column: column_4
  };
  let f = s.indexOf(`
`, u),
    d = f === -1 ? s.length : f,
    p = ae(s, u, d, column_4);
  return {
    offset: ke(cursor_5, p, u),
    column: column_4
  };
}
function Yt(e, t) {
  let offset_22 = W7(t.cursor, e.offset);
  if (offset_22 === t.cursor.offset) return {
    next: {
      type: "idle"
    }
  };
  return {
    execute: () => t.setOffset(offset_22),
    wanted: e.column === null ? null : {
      column: e.column,
      offset: offset_22,
      text: t.cursor.text
    }
  };
}
var Fn = /^\x1b(?![[\]P_\\])[\x21-\x7e]$/,
  st = new Set(["backspace", "delete", "tab", "home", "end", "pageup", "pagedown", "insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function tt(e, t) {
  return (t || e.name === "") && !st.has(e.name);
}
function nt(e) {
  if (!e) return !1;
  switch (e.type) {
    case "insertCommand":
    case "openLine":
    case "substitute":
      return !0;
    case "operator":
    case "operatorFind":
    case "operatorTextObj":
    case "visualOp":
      return e.op === "change";
    default:
      return !1;
  }
}
function Wn(e) {
  switch (e.type) {
    case "x":
    case "substitute":
    case "paste":
    case "operatorTextObj":
      return !0;
    case "operator":
      return !["h", "l", " ", B, "gj", "gk", "%"].includes(e.motion);
    default:
      return !1;
  }
}
function rt(e, t) {
  return {
    ...e,
    setText: (r, n) => {
      t(), e.setText(r, n);
    },
    setOffset: r => {
      t(), e.setOffset(r);
    },
    enterInsert: r => {
      t(), e.enterInsert(r);
    },
    setRegister: (r, n) => {
      t(), e.setRegister(r, n);
    }
  };
}
function qt(e, t) {
  let r = W7(e, e.offset);
  if (r !== e.offset) t.setOffset(r);
  return r;
}
function ot(e, t, r) {
  if (e.wanted !== void 0) return e.wanted ?? void 0;
  return t ? void 0 : r;
}
function XHo(e) {
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
    } = e,
    x = A(Ot()),
    [mode, W] = y("INSERT"),
    [visualAnchor, K] = y(null),
    [isCommandPending, oe] = y(!1);
  dt(isActive && mode === "INSERT");
  let te = A(null),
    ne = A(Pn()),
    X = A(null),
    Oe = A(null),
    _e = A(null);
  function recordInsertedText(a, c) {
    let current = x.current;
    if (current.mode === "INSERT" && !c.ctrl && !c.meta && tt(c, [...c.key].length === 1)) x.current = {
      mode: "INSERT",
      insertedText: current.insertedText + a.normalize("NFC")
    };
  }
  let recordInsert = ue((a, c = "") => {
    let current_2 = x.current;
    if (current_2.mode !== "INSERT") return;
    let m = c !== "" && current_2.insertedText.endsWith(c) ? current_2.insertedText.slice(0, -c.length) : current_2.insertedText;
    x.current = {
      mode: "INSERT",
      insertedText: m + a
    };
  }, []);
  function at(a, char_5, offsetAfter, recorded) {
    for (let h of a.keys()) if (h.startsWith(char_5)) {
      te.current = {
        char: char_5,
        at: Date.now(),
        offsetAfter: offsetAfter,
        recorded: recorded
      };
      return;
    }
  }
  let cancelPendingRemap = ue(() => {
      te.current = null;
    }, []),
    forgetColumn = ue(() => {
      let current_3 = x.current;
      if (current_3.mode !== "INSERT") x.current = {
        ...current_3,
        wanted: void 0
      };
    }, []),
    De = ue((a, c) => {
      if (c !== void 0) a.setOffset(c);
      te.current = null, Oe.current = null, _e.current = null, x.current = {
        mode: "INSERT",
        insertedText: ""
      }, W("INSERT"), K(null), onModeChange?.("INSERT");
    }, [onModeChange]),
    U = ue((a, c) => {
      let current_4 = x.current;
      if (current_4.mode === "INSERT") {
        let current_5 = X.current,
          h = current_5 === Oe.current;
        if (current_5?.type === "visualOp" && current_5.op === "change" && h) X.current = {
          type: "visualChange",
          span: current_5.span,
          linewise: current_5.linewise,
          text: current_4.insertedText ?? ""
        };else if (nt(current_5) && current_5.type !== "visualOp" && h && (current_4.insertedText || (c?.buffer ? c.buffer.text : value_3.normalize("NFC")) === _e.current)) X.current = {
          ...current_5,
          insertedText: current_4.insertedText
        };else if (current_4.insertedText || c?.claimEmptyInsert && !nt(current_5)) X.current = {
          type: "insert",
          text: current_4.insertedText
        };
        let v = c?.buffer ? c.buffer.offset : a.offset,
          M = c?.buffer ? c.buffer.text : value_3.normalize("NFC");
        if (v > 0 && M[v - 1] !== `
`) {
          let S = v > M.length ? 1 : jte(M.slice(0, v)).length;
          a.setOffset(v - S);
        } else if (c?.buffer) a.setOffset(v);
      }
      x.current = {
        mode: "NORMAL",
        command: {
          type: "idle"
        }
      }, W("NORMAL"), K(null), onModeChange?.("NORMAL");
    }, [onModeChange, value_3]),
    Ke = ue((anchor, kind, wanted) => {
      x.current = {
        mode: "VISUAL",
        kind: kind,
        anchor: anchor,
        command: {
          type: "idle"
        },
        wanted: wanted
      };
      let m = kind === "line" ? "VISUAL LINE" : "VISUAL";
      W(m), K(anchor), onModeChange?.(m);
    }, [onModeChange]);
  function se(cursor_6, c, l = !1) {
    let m;
    return {
      cursor: cursor_6,
      text: cursor_6.text,
      setText: (h, v) => {
        m = h, onChange(h, v);
      },
      setOffset: h => c.setOffset(h),
      enterInsert: h => {
        De(c, h), _e.current = m ?? cursor_6.text;
      },
      getRegister: () => ne.current.register,
      getRegisterIsLinewise: () => ne.current.registerIsLinewise,
      setRegister: (h, v) => {
        ne.current.register = h, ne.current.registerIsLinewise = v;
      },
      getLastFind: () => ne.current.lastFind,
      setLastFind: (type, char_6) => {
        ne.current.lastFind = {
          type: type,
          char: char_6
        };
      },
      recordChange: l ? () => {} : h => {
        if (X.current = h, nt(h) && x.current.mode === "INSERT") Oe.current = h;
      }
    };
  }
  function ut(a, c, l) {
    let value_4 = a.text;
    return {
      ...a,
      setText: (h, v) => {
        let previous = {
          value: value_4,
          cursorOffset: a.cursor.offset
        };
        value_4 = h, a.setText(h, v ?? {
          previous: previous
        });
      },
      enterInsert: cursorOffset_4 => {
        let v = value_4.slice(0, cursorOffset_4) + c + value_4.slice(cursorOffset_4),
          previous_2 = {
            value: value_4,
            cursorOffset: cursorOffset_4
          },
          S = xe(v, l, previous_2) ? c.slice(1) : c;
        a.setText(v, {
          previous: previous_2
        });
        let V = value_4.slice(0, cursorOffset_4),
          w = (V + S).normalize("NFC"),
          N = w.startsWith(V) ? jte(w.slice(V.length)) : "",
          L = N && !/^[\p{Mn}\p{Me}]/u.test(N) ? N : jte(w),
          E = w.endsWith(`
`) ? w.length : w.length - L.length,
          P = cursorOffset_4 > 0 && V[cursorOffset_4 - 1] !== `
` ? cursorOffset_4 - jte(V).length : cursorOffset_4;
        a.setOffset(S ? E : P);
      }
    };
  }
  function xe(nextValue, c, l) {
    return getInputMode !== void 0 && zQs({
      nextValue: nextValue,
      value: l?.value ?? value_3,
      cursorOffset: l?.cursorOffset ?? c.offset,
      mode: getInputMode()
    });
  }
  function lt(a, c, l, m) {
    if (a.type === "insertCommand") {
      if (a.insertedText === void 0) return;
      let h = et(a.key, c);
      c = new va(c.measuredText, h), a = {
        type: "insert",
        text: a.insertedText
      };
    }
    if ("insertedText" in a && a.insertedText !== void 0) l = ut(l, a.insertedText, m);
    switch (a.type) {
      case "insert":
        if (a.text) {
          let h = c.insert(a.text),
            v = xe(h.text, m);
          l.setText(h.text);
          let M = v ? h.text.slice(1) : h.text,
            S = h.offset - (v ? 1 : 0);
          l.setOffset(M[S - 1] === `
` ? S : S - jte(M.slice(0, S)).length);
        }
        break;
      case "x":
        Ie(a.count, l);
        break;
      case "substitute":
        we(a.count, l);
        break;
      case "replace":
        Le(a.char, a.count, l);
        break;
      case "toggleCase":
        Se(a.count, l);
        break;
      case "indent":
        Ve(a.dir, a.count, l);
        break;
      case "join":
        Rt(a.count, l);
        break;
      case "openLine":
        de(a.direction, l);
        break;
      case "operator":
        if (a.motion === a.op[0]) Z(a.op, a.count, l);else if (a.motion === "gg") Ne(a.op, a.count, l);else if (a.motion === "G") je(a.op, a.count, l);else Q(a.op, a.motion, a.count, l);
        break;
      case "operatorFind":
        Ce(a.op, a.find, a.char, a.count, l);
        break;
      case "operatorTextObj":
        Re(a.op, a.scope, a.objType, a.count, l);
        break;
      case "visualOp":
        St(a.op, a.span, a.linewise, l);
        break;
      case "visualReplace":
        Et(a.char, a.span, a.linewise, l);
        break;
      case "visualCase":
        Nt(a.caseOp, a.span, a.linewise, l);
        break;
      case "visualPaste":
        Wt(a.content, a.registerLinewise, a.selectionEndsLine, a.selectionOnOneLine, a.span, a.linewise, l);
        break;
      case "visualIndent":
        It(a.dir, a.count, a.lines, l);
        break;
      case "visualChange":
        Vt(a.span, a.linewise, ut(l, a.text, m));
        break;
      case "paste":
        fe(a.after, a.count, l);
        break;
    }
  }
  function ft(count_24) {
    let current_6 = X.current;
    if (current_6 && count_24 !== void 0 && "count" in current_6 && Wn(current_6)) return {
      ...current_6,
      count: count_24
    };
    return current_6;
  }
  function ct(a, wantedColumn, l) {
    let m = ft(l);
    if (!m) return;
    let h = va.fromText(value_3, columns_2, a.offset);
    lt(m, h, {
      ...se(h, a, !0),
      wantedColumn: wantedColumn
    }, a);
  }
  function nn(a, c) {
    let text_3 = value_3.normalize("NFC"),
      offset_23 = c.offset,
      setText = (S, V) => {
        let w = V?.previous;
        if (!xe(S, c, w)) text_3 = S;else if (S.length !== (w?.value ?? value_3).length + 1) text_3 = S.slice(1);
        onChange(S, V);
      },
      v = (wantedColumn_2, V) => {
        let w = ft(V);
        if (!w) return;
        let N = va.fromText(text_3, columns_2, offset_23);
        lt(w, N, {
          ...se(N, c, !0),
          text: text_3,
          setText: setText,
          setOffset: L => {
            offset_23 = L, c.setOffset(L);
          },
          enterInsert: L => {
            offset_23 = L, De(c, L);
          },
          wantedColumn: wantedColumn_2
        }, c);
      },
      M = [...a];
    for (let S = 0; S < M.length; S++) {
      if (x.current.mode === "INSERT") {
        let R = M.slice(S).join(""),
          G = lhn();
        if (G.size > 0 && G.has(R.normalize("NFC"))) {
          g("vim_insert_remap"), U(c, {
            buffer: {
              text: text_3,
              offset: offset_23
            },
            claimEmptyInsert: !0
          });
          return;
        }
        let F = va.fromText(text_3, columns_2, offset_23).insert(R),
          q = xe(F.text, c),
          J = F.offset - (q ? 1 : 0);
        onChange(F.text), c.setOffset(J), x.current = {
          mode: "INSERT",
          insertedText: x.current.insertedText + R
        };
        let an = q ? R.slice(1) : R,
          Ue = jte(F.text.slice(0, F.offset));
        if (Ue && an.endsWith(Ue)) at(G, Ue, J, !0);
        return;
      }
      let current_7 = x.current;
      if (current_7.mode !== "NORMAL") return;
      let w = M[S];
      if ((w === "v" || w === "V") && (current_7.command.type === "idle" || current_7.command.type === "count")) {
        Ke(offset_23, w === "V" ? "line" : "char", current_7.wanted);
        return;
      }
      let N = va.fromText(text_3, columns_2, offset_23),
        L = !1,
        E = {
          ...se(N, c, !1),
          text: text_3,
          setText: setText,
          setOffset: R => {
            offset_23 = R, c.setOffset(R);
          },
          enterInsert: R => {
            offset_23 = R, De(c, R);
          },
          onDotRepeat: R => {
            L ||= X.current !== null, v(current_7.wanted, R);
          },
          wantedColumn: current_7.wanted
        },
        P = rt(E, () => {
          L = !0;
        }),
        k = qe(current_7.command, w, P);
      if (k.execute) k.execute();
      if (x.current.mode === "NORMAL" && (k.next || k.execute || k.wanted !== void 0)) x.current = {
        mode: "NORMAL",
        command: k.next ?? {
          type: "idle"
        },
        wanted: ot(k, L, current_7.wanted)
      };
    }
  }
  function handleKeyDown(a, c) {
    on(a, c);
    let current_8 = x.current;
    oe(current_8.mode !== "INSERT" && current_8.command.type !== "idle");
  }
  function on(a, c) {
    let current_9 = x.current;
    if (current_9.mode === "INSERT" && a.readLate && Fn.test(a.sequence) && a.readAsEscapeThenKey()) {
      a.preventDefault();
      return;
    }
    let m = va.fromText(value_3, columns_2, c.offset),
      h = () => inputFilter?.(a.key, a);
    if (!(a.name === "left" && !a.ctrl && !a.meta && !a.fn && !a.superKey && !a.shift)) c.disarmLeftArrowConfirm?.();
    let current_10 = te.current;
    if (te.current = null, a.ctrl || a.meta) {
      if (current_9.mode === "VISUAL") {
        h(), U(c), a.preventDefault();
        return;
      }
      c.handleKeyDown(a);
      return;
    }
    if (a.name === "escape") {
      if (h(), current_9.mode === "NORMAL") x.current = {
        mode: "NORMAL",
        command: {
          type: "idle"
        },
        wanted: current_9.wanted
      };else if (current_9.mode === "VISUAL" && current_9.command.type !== "idle") x.current = {
        ...current_9,
        command: {
          type: "idle"
        }
      };else {
        if (current_9.mode === "VISUAL") qt(m, c);
        U(c);
      }
      if (!disableEscapeDoublePress) a.preventDefault();
      return;
    }
    if (a.name === "return" && current_9.mode !== "VISUAL") {
      c.handleKeyDown(a);
      return;
    }
    if (current_9.mode === "INSERT") {
      if (a.name === "backspace" || a.name === "delete") {
        if (current_9.insertedText.length > 0) x.current = {
          mode: "INSERT",
          insertedText: current_9.insertedText.slice(0, -(jte(current_9.insertedText).length || 1))
        };
      }
      let L = lhn();
      if (L.size > 0) {
        let E = a.key.normalize("NFC"),
          P = [...E].length,
          k = P === 1,
          R = tt(a, k);
        if (R && P <= 2 && current_10 && L.has(current_10.char + t7(E)) && Date.now() - current_10.at <= Bt && c.offset === current_10.offsetAfter && m.text.startsWith(current_10.char, m.offset - current_10.char.length)) {
          if (h(), current_10.recorded && current_9.insertedText.endsWith(current_10.char)) x.current = {
            mode: "INSERT",
            insertedText: current_9.insertedText.slice(0, -current_10.char.length)
          };
          let offset_24 = m.offset - current_10.char.length,
            text_4 = m.text.slice(0, offset_24) + m.text.slice(m.offset);
          onChange(text_4), g("vim_insert_remap"), U(c, {
            buffer: {
              text: text_4,
              offset: offset_24
            },
            claimEmptyInsert: !0
          }), a.preventDefault();
          return;
        }
        if (R && !k && L.has(E)) {
          h(), g("vim_insert_remap"), U(c, {
            claimEmptyInsert: !0
          }), a.preventDefault();
          return;
        }
        let F = R ? jte(E) : "";
        if (F) at(L, F, c.offset + E.length, tt(a, [...a.key].length === 1));
      }
      c.handleKeyDown(a);
      return;
    }
    if (current_9.mode === "VISUAL") {
      let L = !1,
        E = rt({
          ...se(m, c, !1),
          onUndo: onUndo,
          onDotRepeat: () => ct(c, current_9.wanted),
          wantedColumn: current_9.wanted
        }, () => {
          L = !0;
        }),
        P = current_9.command.type === "idle" || current_9.command.type === "count",
        k = a.key;
      if (a.name === "left") k = P ? "h" : "";else if (a.name === "right") k = P ? "l" : "";else if (a.name === "up") k = P ? "k" : "";else if (a.name === "down") k = P ? "j" : "";else if (a.name === "return") k = P ? "j" : `
`;else if (a.name === "backspace") k = P ? B : "";else if (a.name === "delete") k = P && current_9.command.type !== "count" ? "x" : "";else if (a.key === "" || st.has(a.name)) {
        a.preventDefault();
        return;
      } else if ([...a.key].length > 1) {
        a.preventDefault();
        return;
      }
      h();
      let R = $t(current_9.command, k, E),
        G = current_9.kind === "line";
      if ("next" in R) R.move?.(), x.current = {
        mode: "VISUAL",
        kind: current_9.kind,
        anchor: current_9.anchor,
        command: R.next,
        wanted: ot(R, L, current_9.wanted)
      };else switch (R.exit) {
        case "operator":
          if (Lt(R.op, current_9.anchor, E, G || R.forceLinewise === !0), x.current.mode === "VISUAL") U(c);
          break;
        case "replace":
          kt(R.char, current_9.anchor, E, G), U(c);
          break;
        case "case":
          jt(R.op, current_9.anchor, E, G), U(c);
          break;
        case "paste":
          if (E.getRegister()) Ft(current_9.anchor, E, G), U(c);else x.current = {
            ...current_9,
            command: {
              type: "idle"
            }
          };
          break;
        case "join":
          Ct(current_9.anchor, E, G), U(c);
          break;
        case "indent":
          vt(R.dir, R.count, current_9.anchor, E), U(c);
          break;
        case "swap":
          {
            let F = m.offset;
            c.setOffset(current_9.anchor), x.current = {
              mode: "VISUAL",
              kind: current_9.kind,
              anchor: F,
              command: {
                type: "idle"
              }
            }, K(F);
            break;
          }
        case "selectRange":
          {
            let F = R.end > R.start ? m.measuredText.prevOffset(R.end) : R.start;
            c.setOffset(F), x.current = {
              mode: "VISUAL",
              kind: current_9.kind,
              anchor: R.start,
              command: {
                type: "idle"
              }
            }, K(R.start);
            break;
          }
        default:
          {
            let F = R.key === "V" ? "line" : "char";
            if (F === current_9.kind) {
              let offset_25 = qt(m, c);
              U(c);
              let {
                wanted: wanted_2
              } = current_9;
              if (wanted_2?.offset === m.offset && wanted_2.text === m.text) x.current = {
                mode: "NORMAL",
                command: {
                  type: "idle"
                },
                wanted: {
                  ...wanted_2,
                  offset: offset_25
                }
              };
            } else Ke(current_9.anchor, F, current_9.wanted);
            break;
          }
      }
      a.preventDefault();
      return;
    }
    if (current_9.mode !== "NORMAL") return;
    if (current_9.command.type === "idle" && !a.shift && (a.name === "up" || a.name === "down" || a.name === "left" && m.text === "")) {
      c.handleKeyDown(a);
      return;
    }
    if (current_9.command.type === "idle" && a.key === "?" && onToggleHelp) {
      onToggleHelp(), a.preventDefault();
      return;
    }
    if (h(), current_9.command.type === "idle" && a.key === "/" && onOpenHistorySearch) {
      onOpenHistorySearch(), a.preventDefault();
      return;
    }
    if (current_9.command.type === "idle") {
      if (a.key === "k") {
        let L = m.text.indexOf(`
`);
        if (L === -1 || m.offset <= L) {
          onHistoryUp?.(), a.preventDefault();
          return;
        }
      }
      if (a.key === "j") {
        let L = m.text.lastIndexOf(`
`);
        if (L === -1 || m.offset > L) {
          onHistoryDown?.(), a.preventDefault();
          return;
        }
      }
    }
    let M = !1,
      S = rt({
        ...se(m, c, !1),
        onUndo: onUndo,
        onDotRepeat: L => {
          M ||= X.current !== null, ct(c, current_9.wanted, L);
        },
        wantedColumn: current_9.wanted
      }, () => {
        M = !0;
      }),
      V = current_9.command.type === "idle" || current_9.command.type === "count" || current_9.command.type === "operator" || current_9.command.type === "operatorCount",
      w = a.key;
    if (a.name === "left") w = "h";else if (a.name === "right") w = "l";else if (a.name === "up") w = "k";else if (a.name === "down") w = "j";else if (V && a.name === "backspace") w = B;else if (V && current_9.command.type !== "count" && a.name === "delete") w = "x";else if (a.key === "" || st.has(a.name)) return;else if ([...a.key].length > 1) {
      nn(a.key, c), a.preventDefault();
      return;
    }
    if ((w === "v" || w === "V") && (current_9.command.type === "idle" || current_9.command.type === "count")) {
      Ke(m.offset, w === "V" ? "line" : "char", current_9.wanted);
      return;
    }
    let N = qe(current_9.command, w, S);
    if (N.execute) N.execute();
    if (x.current.mode === "NORMAL" && (N.next || N.execute || N.wanted !== void 0)) x.current = {
      mode: "NORMAL",
      command: N.next ?? {
        type: "idle"
      },
      wanted: ot(N, M, current_9.wanted)
    };
    a.preventDefault();
  }
  let setMode = ue((a, c) => {
    if (te.current = null, Oe.current = null, a === "INSERT") x.current = {
      mode: "INSERT",
      insertedText: ""
    }, K(null);else if (a === "NORMAL") x.current = {
      mode: "NORMAL",
      command: {
        type: "idle"
      }
    }, K(null);else {
      let kind_2 = a === "VISUAL LINE" ? "line" : "char",
        m = c.offset;
      x.current = {
        mode: "VISUAL",
        kind: kind_2,
        anchor: m,
        command: {
          type: "idle"
        }
      }, K(m);
    }
    W(a), oe(!1), onModeChange?.(a);
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
function q8s(e) {
  let {
      inputFilter: inputFilter_2
    } = e,
    r = A(null),
    n = XHo({
      value: e.value,
      onChange: (o, i) => {
        if (o === "" && e.value !== "") r.current?.();
        e.onChange(o, i);
      },
      columns: e.columns,
      disableEscapeDoublePress: e.disableEscapeDoublePress,
      onModeChange: e.onModeChange,
      onUndo: e.onUndo && (() => {
        r.current?.(), e.onUndo?.();
      }),
      onOpenHistorySearch: e.onOpenHistorySearch,
      onToggleHelp: e.onToggleHelp,
      onHistoryUp: e.onHistoryUp && (() => {
        r.current?.(), e.onHistoryUp?.();
      }),
      onHistoryDown: e.onHistoryDown && (() => {
        r.current?.(), e.onHistoryDown?.();
      }),
      inputFilter: inputFilter_2,
      getInputMode: e.getInputMode,
      isActive: e.focus !== !1
    }),
    s = uhn({
      ...e,
      selectionAnchor: n.visualAnchor,
      selectionLinewise: n.mode === "VISUAL LINE",
      isCursorOnCharacter: n.mode !== "INSERT",
      inputFilter: (o, i) => {
        let u = inputFilter_2 ? inputFilter_2(o, i) : o;
        if (o === `
` && (i.name === "return" || i.name === "enter" || i.ctrl && i.name === "j")) {
          let f = i.name === "return" && e.multiline === !0 && e.disableBackslashReturn !== !0;
          n.recordInsert(u, f ? "\\" : "");
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
function Pn() {
  let e = wVs();
  if (e) return e;
  let t = xt();
  return kVs(t), t;
}
export { dhe, W7, lhn, XHo, q8s };