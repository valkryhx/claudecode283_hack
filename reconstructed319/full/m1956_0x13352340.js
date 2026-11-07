// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  San,
  vWn,
  tBt,
  u0r,
  Mie
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  Qd,
  B4
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  uee
} from "B:/~BUN/root/chunk-s9vv4h32.js";
import {
  hge
} from "B:/~BUN/root/chunk-z8zg5v1y.js";
import {
  u9o
} from "B:/~BUN/root/chunk-g91y7g02.js";
import {
  TSr
} from "B:/~BUN/root/chunk-hydnwtf3.js";
var j8o = ["Docs"],
  t = new Set(["claudedocs", "claudepages"]);

function F8r(e) {
  return e.tier === "core" && j8o.some((o) => hge(e.title) === hge(o))
}
var $ui = "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";

function Gat(e) {
  return e.config.type === "claudeai-proxy" && B4(e.config) && TSr(e.config) || Pkn(e) || u9o() && e.config.type === "sdk" && Nt(e.name) !== null && t.has(Mie(e.serverInfo?.name ?? "")) || i.CLAUDE_CODE_REMOTE === !0 && e.config.type === "http" && e.config.scope === "dynamic" && (!Qd(e.config) || TSr(e.config)) && (u0r(e.config) || San.has(e.name))
}

function Pkn(e) {
  return e.config.type === "sdk" && uee(e, {
    path: tBt,
    serverId: vWn
  })
}

function H8r(e) {
  return e.some((o) => (o.type === "connected" || o.type === "pending" || o.type === "cached") && Gat(o))
}
export {
  j8o,
  F8r,
  $ui,
  Gat,
  Pkn,
  H8r
};
