// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var c = 10,
  a = {
    ring: [],
    mode: {
      type: "idle"
    }
  };
function h(n, i) {
  switch (i.type) {
    case "kill":
      {
        if (i.text.length === 0) return n.mode.type === "idle" ? n : {
          ...n,
          mode: {
            type: "idle"
          }
        };
        return {
          ring: n.mode.type === "killing" && n.ring.length > 0 ? [i.direction === "prepend" ? i.text + n.ring[0] : n.ring[0] + i.text, ...n.ring.slice(1)] : [i.text, ...n.ring].slice(0, c),
          mode: {
            type: "killing"
          }
        };
      }
    case "yank":
      return {
        ...n,
        mode: {
          type: "yanked",
          start: i.start,
          length: i.length,
          index: 0
        }
      };
    case "yankPop":
      {
        if (n.mode.type !== "yanked" || n.ring.length <= 1) return n;
        let index = (n.mode.index + 1) % n.ring.length;
        return {
          ...n,
          mode: {
            ...n.mode,
            index: index
          }
        };
      }
    case "updateYankLength":
      if (n.mode.type !== "yanked") return n;
      return {
        ...n,
        mode: {
          ...n.mode,
          length: i.length
        }
      };
    case "interrupt":
      if (n.mode.type === "idle") return n;
      return {
        ...n,
        mode: {
          type: "idle"
        }
      };
  }
}
function sEt(n) {
  return n.ring[0] ?? "";
}
function z5n(n) {
  if (n.mode.type !== "yanked" || n.ring.length <= 1) return null;
  let i = (n.mode.index + 1) % n.ring.length,
    {
      start: start,
      length: length
    } = n.mode;
  return {
    text: n.ring[i] ?? "",
    start: start,
    length: length
  };
}
function Fzr() {
  let n = a;
  return {
    get state() {
      return n;
    },
    dispatch(i) {
      n = h(n, i);
    }
  };
}
var l = Jt(null);
function s2t(n) {
  let t = S(5),
    {
      handle: handle,
      children: children
    } = n,
    p;
  if (t[0] !== handle) p = () => handle ?? Fzr(), t[0] = handle, t[1] = p;else p = t[1];
  let [x] = y(p);
  const value = handle ?? x;
  let u;
  if (t[2] !== children || t[3] !== value) u = e(l.Provider, {
    value: value,
    children: children
  }), t[2] = children, t[3] = value, t[4] = u;else u = t[4];
  return u;
}
function rst() {
  let n = ve(l);
  if (!n) {
    throw ReferenceError("useKillRing cannot be called outside of a <KillRingProvider /> (mounted around every Ink root by src/ink.ts)");
  }
  return n;
}
export { sEt, z5n, Fzr, s2t, rst };