// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ul } from "B:/~BUN/root/chunk-y04k89s2.js";
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { sa, O9, AOt } from "B:/~BUN/root/chunk-1mdeqc2r.js";
var l = "Claude Code's environment",
  u = (n, t) => {
    if (t === void 0) return n;
    let e = O9 - AOt(`${n} (it is set in )`).length;
    if (t.length <= e) return `${n} (it is set in ${t})`;
    return `${n} (it is set in \u2026${Ul(t, e - 1)})`;
  };
function Bir({
  kind: kind,
  setting: setting,
  where: where,
  relative: relative
}) {
  switch (kind) {
    case "attributes_file":
      return u(relative === !0 ? `${setting} is not a full path, which sync cannot follow; set it to a full path (on Windows, one that starts with a drive letter) or a ~/ path` : `sync cannot follow ${setting} here; move its rules into a committed .gitattributes file and delete the setting, or set it only in your ~/.gitconfig, to an absolute or ~/ path`, where);
    case "attr_tree":
      return u(`sync cannot follow ${setting} here; move its rules into a committed .gitattributes file and delete the setting`, where);
    case "ignore_case":
      return u(`sync cannot follow ${setting} in an included file; move it into the .git/config of each repository it is meant for, or into your ~/.gitconfig`, where);
    case "attr_source_env":
    case "env_config":
      return `${setting} in ${l} can change which attribute rules git applies, in a way sync cannot follow; remove it from your shell or Claude Code settings, then restart Claude Code and start a new cloud session`;
    case "config_location":
      return `${setting} in ${l} is a relative path, which sync cannot follow; make it absolute in your shell or Claude Code settings, then restart Claude Code and start a new cloud session`;
  }
}
function keo({
  kind: kind_2,
  setting: setting_2,
  relative: relative_2
}) {
  switch (kind_2) {
    case "attributes_file":
      return relative_2 === !0 ? `Your git configuration sets ${setting_2} to a path that is not full, which file sync cannot follow, so a file git changes before storing it could be uploaded as it is on disk. Set it to a full path (on Windows, one that starts with a drive letter) or a ~/ path.` : `Your git configuration, or a file it includes, sets ${setting_2}, which file sync cannot follow, so a file git changes before storing it could be uploaded as it is on disk. Move the setting's rules into a committed .gitattributes file and delete the setting, or set it only in your own git configuration file, to an absolute or ~/ path.`;
    case "attr_tree":
      return `Your git configuration, or a file it includes, sets ${setting_2}, which file sync cannot follow, so a file git changes before storing it could be uploaded as it is on disk. Move the setting's rules into a committed .gitattributes file and delete the setting.`;
    case "ignore_case":
      return `A file your git configuration includes sets ${setting_2}, which can change how git matches attribute rules in a way file sync cannot follow, so a file git changes before storing it could be uploaded as it is on disk. Move the setting from the included file into the git configuration of each project it is meant for, or into your own git configuration file.`;
    case "attr_source_env":
    case "env_config":
      return `${l} sets ${setting_2}, which can change the attribute rules git applies, in a way file sync cannot follow, so a file git changes before storing it could be uploaded as it is on disk. Remove it from your shell or your Claude Code settings.`;
    case "config_location":
      return `${l} gives ${setting_2} as a relative path, which file sync cannot follow. Make it absolute in your shell or your Claude Code settings.`;
  }
}
async function V4t(n, t) {
  let e = await n.lookAtStore?.(n.signal);
  if (e !== void 0 && typeof e !== "function") return e;
  let i = await n.createBundle(t);
  if (i.ok && e !== void 0) {
    let o = await e();
    if (o.kind === "refused") return o;
  }
  return i;
}
import { randomBytes as f } from "crypto";
import { lstat as g, mkdir as h, open as d, rm as y } from "fs/promises";
import { join as c } from "path";
var w = 1048576,
  m = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/;
function KWe(n) {
  return n.kind === "no_git_dir" ? "its .git is not a directory at the moment \u2014 moved aside or replaced" : `the checkout's shallow file is not one git wrote (${n.why})`;
}
async function q4t(n, t) {
  let e = await kwt(n);
  if (e.kind === "irregular" || e.kind === "no_git_dir") return e;
  let i = c(t, "shallow-pins", f(8).toString("hex"));
  await h(i, {
    recursive: !0,
    mode: 448
  });
  let shallowFile = c(i, "shallow");
  if (e.kind === "boundary") {
    let r = await d(shallowFile, "wx", 256);
    try {
      await r.writeFile(e.bytes);
    } finally {
      await r.close();
    }
  }
  return {
    shallowFile: shallowFile,
    unchanged: async () => {
      let [r, a] = await Promise.all([kwt(n), kwt(shallowFile)]);
      return e.kind === "absent" ? r.kind === "absent" && a.kind === "absent" : r.kind === "boundary" && r.bytes.equals(e.bytes) && a.kind === "boundary" && a.bytes.equals(e.bytes);
    },
    release: () => y(i, {
      recursive: !0,
      force: !0
    })
  };
}
async function kwt(n) {
  let t = null;
  if (O() === "windows") {
    let i = await g(n, {
      bigint: !0
    }).catch(o => v(o) === "ENOENT" ? null : "unreadable");
    if (i === null) return {
      kind: "absent"
    };
    if (i === "unreadable" || !i.isFile()) return {
      kind: "irregular",
      why: i !== "unreadable" && i.isSymbolicLink() ? "a link" : "not a plain file"
    };
    if (i.ino === 0n) return {
      kind: "irregular",
      why: "no file identity on this volume"
    };
    t = i;
  }
  let e;
  try {
    e = await d(n, sa());
  } catch (error) {
    let o = v(error);
    return o === "ENOENT" ? {
      kind: "absent"
    } : o === "ENOTDIR" ? {
      kind: "no_git_dir"
    } : {
      kind: "irregular",
      why: o === "ELOOP" ? "a link" : "unreadable"
    };
  }
  try {
    let i = await e.stat({
      bigint: !0
    });
    if (!i.isFile() || i.nlink !== 1n) return {
      kind: "irregular",
      why: "not a single regular file"
    };
    if (t !== null && (i.dev !== t.dev || i.ino !== t.ino)) return {
      kind: "irregular",
      why: "not the file looked at"
    };
    if (i.size > BigInt(w)) return {
      kind: "irregular",
      why: "larger than a shallow file can be"
    };
    let o = Number(i.size),
      bytes = Buffer.alloc(o),
      a = 0;
    while (a < o) {
      let {
        bytesRead: bytesRead
      } = await e.read(bytes, a, o - a, a);
      if (bytesRead === 0) break;
      a += bytesRead;
    }
    if (a !== o) return {
      kind: "irregular",
      why: "changed while being read"
    };
    if (!bytes.toString("utf8").split(`
`).filter(item => item !== "").every(item => m.test(item))) return {
      kind: "irregular",
      why: "not one object id per line"
    };
    return {
      kind: "boundary",
      bytes: bytes
    };
  } catch {
    return {
      kind: "irregular",
      why: "unreadable"
    };
  } finally {
    await e.close();
  }
}
export { Bir, keo, V4t, KWe, q4t, kwt };