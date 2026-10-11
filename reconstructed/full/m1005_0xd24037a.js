// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  po
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  Ut
} from "B:/~BUN/root/chunk-qbrwdgwc.js";
var zeo = "main",
  rze = {
    name: "Claude Code file sync",
    email: "noreply@anthropic.com"
  },
  Geo = "refs/seed/root",
  gOe = 104857600,
  r = 1048576,
  n = 160;

function i3t(e, t) {
  let o = Math.min(r, Math.floor(e / 16));
  return Math.max(0, e - o - n * t)
}
var q7e = 3;

function Mwt(e) {
  let t = e.largest.slice(0, q7e).map((o) => `${po(o.path,{maxCodeUnits:512})} (${Ut(o.bytes)})`);
  return `its files come to ${Ut(e.totalBytes)}, which with packaging does not fit the ${Ut(e.capBytes)} a cloud session can start with from a folder${t.length>0?`; the largest: ${t.join(", ")}`:""}`
}
var nar = "Remove or ignore what the session does not need (a .gitignore in this folder is honoured) and start again",
  a3t = 2147483648,
  oze = {
    repoPass: "tengu_dir_sync_folder_repo",
    seed: "tengu_dir_sync_folder_seed"
  };
export {
  zeo,
  rze,
  Geo,
  gOe,
  i3t,
  q7e,
  Mwt,
  nar,
  a3t,
  oze
};
