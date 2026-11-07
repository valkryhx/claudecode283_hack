// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  yr
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  s7
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  br
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  na
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  Of
} from "B:/~BUN/root/chunk-bvb659eh.js";
import n from "path";

function BLn() {
  let r = [process.execPath],
    o = process.argv[1];
  if (!Of() && o) r.push(o);
  return r
}
var a = "--eval-artifacts-server",
  jLn = ["publish_version", "edit_version", "publish_files", "create_from_type"],
  KBi = ["guide", "get_artifact", "read_artifact", "list_artifacts", "list_files", "read_file", "list_types"];

function WLn(r) {
  return r.map((o) => br(na, o))
}
var p = /[*?[{]/;

function qBi(r, o) {
  let e = (o.alwaysAllowRules.cliArg ?? []).flatMap((t) => {
    let {
      toolName: s,
      ruleContent: i
    } = yr(t);
    return s === ze && i?.startsWith("//") === !0 ? [i.slice(1).replace(/\/\*\*$/, "")] : []
  });
  return [r, ...e.filter((t) => !p.test(t)).map((t) => n.posix.normalize(t).replace(/\/+$/, "")).filter((t) => t !== "" && t !== ".").map((t) => x() === "windows" ? s7(t) : t)]
}

function YBi(r, o) {
  let [e = process.execPath, ...t] = BLn();
  return {
    type: "stdio",
    command: e,
    args: [...t, a, r, ...o],
    env: {}
  }
}
export {
  BLn,
  jLn,
  KBi,
  WLn,
  qBi,
  YBi
};
