// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import { m } from "B:/~BUN/root/chunk-51n463p1.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import { BWn, Gge, je } from "B:/~BUN/root/chunk-0xgg0ked.js";
var Q = "B:/~BUN/root/SKILL-236405d8.md.zst";
var t = je(Q, import.meta.dirname);
var H = "B:/~BUN/root/payload.template.html.asset";
var p = "B:/~BUN/root/seed-canvas.mjs-a5d6a8af.txt.zst";
var B = je(p, import.meta.dirname);
var N = t,
  C = "payload.template.html",
  A = "seed-canvas.mjs";
async function n() {
  let E;
  try {
    E = await Gge(H, import.meta.dirname);
  } catch (error) {
    throw d(error), m("skill_bundled_extract", "design_canvas_payload_unreadable"), new P(`design canvas: editor payload unreadable at ${BWn(H, import.meta.dirname)} (${v(error) ?? "unknown"})`, "design canvas: editor payload unreadable");
  }
  return {
    [C]: E,
    [A]: B
  };
}
export { C as PAYLOAD_TEMPLATE_FILE, A as SEED_HELPER_FILE, N as SKILL_MD, n as loadSkillFiles };