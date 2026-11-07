// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  WOr,
  Qa,
  Ln
} from "B:/~BUN/root/chunk-1ks9vs37.js";
var r = 86400000,
  n = 3 * r;

function X6n() {
  if (Te() !== "firstParty" || !Qa()) return null;
  let e = Ln();
  if (!e?.refreshToken || !WOr(e.refreshTokenExpiresAt)) return null;
  let t = e.refreshTokenExpiresAt;
  if (typeof e.expiresAt === "number" && e.expiresAt > t + n) return null;
  return new Date(t)
}

function qzt() {
  let e = X6n();
  if (e === null) return null;
  let t = e.getTime() - Date.now();
  if (t > n || t <= 0) return null;
  return {
    daysLeft: Math.ceil(t / r)
  }
}
export {
  X6n,
  qzt
};
