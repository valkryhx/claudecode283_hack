// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { gr, He, H_, Af, _Bt } from "B:/~BUN/root/chunk-zafy1b6k.js";
import "B:/~BUN/root/chunk-g1mh72ry.js";
import { Wn } from "B:/~BUN/root/chunk-bgthmgyc.js";
import * as d from "fs/promises";
import * as R from "fs";
import * as u from "path";
import * as W from "child_process";
import * as j from "crypto";
import * as H from "readline";
function v(r) {
  if (r.inputSchema.type !== "object") throw Error(`JSON schema for tool "${r.name}" must be an object, but got ${r.inputSchema.type}`);
  return {
    type: "custom",
    name: r.name,
    input_schema: r.inputSchema,
    description: r.description,
    run: r.run,
    parse: t => t,
    ...(r.close ? {
      close: r.close
    } : {})
  };
}
import * as b from "fs/promises";
import * as m from "path";
import { randomUUID as Y } from "crypto";
var mode = 493,
  Q = 420;
async function tt(r) {
  try {
    return await b.realpath(r);
  } catch {
    return r;
  }
}
async function et(r) {
  let t = [],
    e = r,
    i = 0;
  for (;;) {
    let n;
    try {
      n = await b.realpath(e);
    } catch {
      let a = !1;
      try {
        a = (await b.lstat(e)).isSymbolicLink();
      } catch {}
      if (a) {
        if (++i > 40) throw new Af(`path ${JSON.stringify(r)} has too many levels of symbolic links`);
        e = m.resolve(m.dirname(e), await b.readlink(e));
        continue;
      }
      let s = m.dirname(e);
      if (s === e) return r;
      t.push(m.basename(e)), e = s;
      continue;
    }
    return t.length ? m.join(n, ...t.reverse()) : n;
  }
}
async function B(r, t, e) {
  let i = e?.allowOutside ?? !1,
    n = await tt(m.resolve(r)),
    a = m.resolve(n, t);
  if (i) return a;
  let s = await et(a);
  if (s !== n && !s.startsWith(n + m.sep)) throw new Af(`path ${JSON.stringify(t)} escapes workdir`);
  return s;
}
async function F(r, t) {
  let e = m.dirname(r),
    i = m.join(e, `.tmp-${process.pid}-${Y()}`),
    n;
  try {
    n = await b.open(i, "wx", Q), await n.writeFile(t, "utf-8"), await n.sync(), await n.close(), n = void 0, await b.rename(i, r);
  } catch (error) {
    if (n) await n.close().catch(() => {});
    throw await b.unlink(i).catch(() => {}), error;
  }
}
function O(r, t) {
  switch (r?.code) {
    case "ENOENT":
      return `${t}: no such file or directory`;
    case "EACCES":
    case "EPERM":
      return `${t}: permission denied`;
    case "ENOTDIR":
      return `${t}: not a directory`;
    case "EISDIR":
      return `${t}: is a directory`;
    case "ELOOP":
      return `${t}: too many levels of symbolic links`;
    case "ENAMETOOLONG":
      return `${t}: file name too long`;
    case "ENOSPC":
      return `${t}: no space left on device`;
    case "EMFILE":
    case "ENFILE":
      return `${t}: too many open files`;
    default:
      return `${t}: ${r instanceof Error ? r.message : String(r)}`;
  }
}
import * as y from "fs/promises";
import * as q from "fs";
import * as p from "path";
import { execFile as rt } from "child_process";
import { promisify as it } from "util";
import { Readable as nt } from "stream";
import { pipeline as st } from "stream/promises";
var ot = it(rt);
async function at(r) {
  let {
    client: client,
    sessionId: sessionId
  } = r;
  if (!client || !sessionId) return async () => {};
  let i = H_(client),
    n = await client.beta.sessions.retrieve(sessionId),
    a = p.resolve(r.workdir, "skills"),
    s = [];
  for (let o of n.agent.skills) try {
    let version = await U(client, o.skill_id, o.version),
      l = await client.beta.skills.versions.retrieve(version, {
        skill_id: o.skill_id
      }),
      f = p.basename(l.name.trim());
    if (f === "" || f === "." || f === "..") f = o.skill_id;
    let dest = p.resolve(a, f);
    if (dest !== a && !dest.startsWith(a + p.sep)) {
      i.warn("skill name escapes the skills dir; skipping", {
        component: "agent-tool-context",
        name: l.name
      });
      continue;
    }
    let M = await client.beta.skills.versions.download(version, {
      skill_id: o.skill_id
    });
    await y.rm(dest, {
      recursive: !0,
      force: !0
    }), await y.mkdir(dest, {
      recursive: !0,
      mode: mode
    }), s.push(dest), await C(M, dest), i.info("downloaded skill", {
      component: "agent-tool-context",
      skill_id: o.skill_id,
      version: version,
      dest: dest
    });
  } catch (c) {
    i.warn("failed to download skill", {
      component: "agent-tool-context",
      skill_id: o.skill_id,
      error: String(c)
    });
  }
  return async () => {
    for (let dest_2 of s) await y.rm(dest_2, {
      recursive: !0,
      force: !0
    }).catch(c => {
      i.warn("failed to clean up skill", {
        component: "agent-tool-context",
        dest: dest_2,
        error: String(c)
      });
    });
  };
}
async function U(r, t, e) {
  if (/^\d+$/.test(e)) return e;
  let i;
  for await (let n of r.beta.skills.versions.list(t)) if (/^\d+$/.test(n.version) && (i === void 0 || BigInt(n.version) > BigInt(i))) i = n.version;
  if (i === void 0) throw new Wn(`skill ${JSON.stringify(t)} has no concrete version to resolve ${JSON.stringify(e)} against`);
  return i;
}
function ct(r) {
  for (let t of r.split(`
`)) {
    let e = t.trim();
    if (!e) continue;
    if (p.isAbsolute(e) || e.split(/[\\/]/).includes("..")) throw new Wn(`refusing to extract unsafe archive member: ${e}`);
  }
}
function lt(r) {
  for (let t of r.split(`
`)) {
    let e = t.trimStart()[0];
    if (e === "l" || e === "h" || e === "b" || e === "c" || e === "p" || e === "s") throw new Wn("refusing to extract archive with symlink/hardlink/device member");
  }
}
async function L(r, t) {
  try {
    let {
      stdout: stdout
    } = await ot(r, t);
    return stdout;
  } catch (error) {
    if (error != null && typeof error === "object" && error.code === "ENOENT") throw new Wn(`skill extraction requires the \`${r}\` command, but it was not found on PATH`);
    throw error;
  }
}
function ft(r) {
  let t,
    e = !1;
  for (let i of r.split(`
`)) {
    let n = i.trim().split("/").filter(item => item !== "" && item !== ".");
    if (n.length === 0) continue;
    let a = n[0];
    if (t === void 0) t = a;else if (a !== t) return "";
    if (n.length > 1) e = !0;
  }
  return t !== void 0 && e ? t : "";
}
async function C(r, t) {
  let e = p.join(t, `.skill-archive-${process.pid}-${Date.now()}`);
  if (!r.body) throw new Wn("skill download response had no body");
  await st(nt.fromWeb(r.body), q.createWriteStream(e));
  let i = p.join(p.dirname(t), `.skill-stage-${process.pid}-${Date.now()}`);
  try {
    let n = await ut(e, 4),
      a = n.length >= 4 && n[0] === 80 && n[1] === 75 && n[2] === 3 && n[3] === 4,
      s = a ? "unzip" : "tar",
      o = await L(s, a ? ["-Z1", e] : ["-tf", e]);
    ct(o), lt(await L(s, a ? ["-Z", e] : ["-tvf", e]));
    let c = ft(o);
    await y.mkdir(i, {
      recursive: !0,
      mode: mode
    }), await L(s, a ? ["-oq", e, "-d", i] : ["-xf", e, "-C", i]);
    let l = c ? p.join(i, c) : i;
    for (let f of await y.readdir(l)) await y.rename(p.join(l, f), p.join(t, f));
  } finally {
    await y.rm(e, {
      force: !0
    }), await y.rm(i, {
      recursive: !0,
      force: !0
    });
  }
}
async function ut(r, t) {
  let e = await y.open(r, "r");
  try {
    let i = Buffer.alloc(t),
      {
        bytesRead: bytesRead
      } = await e.read(i, 0, t, 0);
    return i.subarray(0, bytesRead);
  } finally {
    await e.close();
  }
}
var I,
  w,
  g,
  S,
  k,
  _,
  D,
  J = 102400,
  z = 120000,
  dt = 262144,
  T = 102400,
  pt = 2000,
  ht = 200,
  mt = /\x1b\[[0-9;?]*[ -/]*[@-~]/g,
  glob = d.glob;
function K(r) {
  return r === void 0 ? dt : r;
}
function ee(r) {
  return [gt(r), bt(r), _t(r), vt(r), $t(r), kt(r)];
}
function x(r, t) {
  return B(r.workdir, t, {
    allowOutside: r.unrestrictedPaths ?? !1
  });
}
function yt() {
  let r = {};
  for (let [t, e] of Object.entries(process.env)) {
    if (t.startsWith("ANTHROPIC_")) continue;
    r[t] = e;
  }
  return r;
}
class X {
  constructor(cwd, t = yt()) {
    I.add(this), w.set(this, void 0), g.set(this, ""), S.set(this, !1), k.set(this, !1), _.set(this, null), gr(this, w, W.spawn("/bin/bash", ["--noprofile", "--norc"], {
      cwd: cwd,
      env: {
        ...t,
        PS1: "",
        PS2: "",
        TERM: "dumb"
      },
      stdio: ["pipe", "pipe", "pipe"],
      detached: !0
    }), "f"), He(this, w, "f").stdout.setEncoding("utf8"), He(this, w, "f").stderr.setEncoding("utf8"), He(this, w, "f").stdout.on("data", e => He(this, I, "m", D).call(this, e)), He(this, w, "f").stderr.on("data", e => He(this, I, "m", D).call(this, e)), He(this, w, "f").once("close", () => {
      gr(this, k, !0, "f");
      let e = He(this, _, "f");
      gr(this, _, null, "f"), e?.resolve();
    });
  }
  get closed() {
    return He(this, k, "f");
  }
  async exec(r, t = {}) {
    if (He(this, k, "f")) throw new Wn("bash session terminated");
    let e = t.timeoutMs ?? z,
      i = t.signal;
    if (i?.aborted) throw new Wn("bash command aborted");
    gr(this, g, "", "f"), gr(this, S, !1, "f");
    let sentinel = `__ANT_CMD_${j.randomUUID()}_DONE__`,
      a = `${sentinel.slice(0, 8)}''${sentinel.slice(8)}`,
      s = `{ ${r}
} </dev/null 2>&1; printf '\\n${a}%d\\n' $?
`;
    if (He(this, w, "f").stdin.write(s), He(this, g, "f").indexOf(sentinel) < 0) {
      let {
        promise: promise,
        resolve: resolve
      } = _Bt();
      gr(this, _, {
        sentinel: sentinel,
        resolve: resolve
      }, "f");
      let N, A;
      try {
        await Promise.race([promise, new Promise((V, P) => {
          N = setTimeout(() => P(new Wn(`bash command timed out after ${e}ms`)), e);
        }), new Promise((V, P) => {
          if (!i) return;
          A = () => P(new Wn("bash command aborted")), i.addEventListener("abort", A, {
            once: !0
          });
        })]);
      } finally {
        if (N) clearTimeout(N);
        if (A && i) i.removeEventListener("abort", A);
        gr(this, _, null, "f");
      }
    }
    let o = He(this, g, "f").indexOf(sentinel);
    if (o < 0) throw new Wn("bash session terminated");
    let l = He(this, g, "f").slice(o + sentinel.length).match(/^(-?\d+)/),
      exitCode = l ? parseInt(l[1], 10) : -1,
      output = He(this, g, "f").slice(0, o).replace(mt, "").replace(/\n+$/, "");
    if (He(this, S, "f")) output = `[output truncated]
${output}`;
    return {
      output: output,
      exitCode: exitCode
    };
  }
  close() {
    if (He(this, k, "f")) return;
    gr(this, k, !0, "f");
    let r = He(this, _, "f");
    gr(this, _, null, "f"), r?.resolve(), He(this, w, "f").stdout.destroy(), He(this, w, "f").stderr.destroy(), He(this, w, "f").stdin.destroy();
    try {
      process.kill(-He(this, w, "f").pid, "SIGKILL");
    } catch {
      He(this, w, "f").kill("SIGKILL");
    }
    He(this, w, "f").unref();
  }
}
w = new WeakMap(), g = new WeakMap(), S = new WeakMap(), k = new WeakMap(), _ = new WeakMap(), I = new WeakSet(), D = function (t) {
  if (gr(this, g, He(this, g, "f") + t, "f"), He(this, g, "f").length > J) gr(this, g, He(this, g, "f").slice(He(this, g, "f").length - J), "f"), gr(this, S, !0, "f");
  if (He(this, _, "f") && He(this, g, "f").indexOf(He(this, _, "f").sentinel) >= 0) {
    let e = He(this, _, "f");
    gr(this, _, null, "f"), e.resolve();
  }
};
function gt(r) {
  let t,
    e = Promise.resolve();
  return v({
    name: "bash",
    description: "Run a bash command in a persistent shell. State (cwd, env vars) persists across calls.",
    inputSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "The command to run"
        },
        restart: {
          type: "boolean",
          description: "Restart the persistent shell before running"
        },
        timeout_ms: {
          type: "integer",
          description: "Per-call timeout in milliseconds"
        }
      }
    },
    run: async ({
      command: command,
      restart: restart,
      timeout_ms: timeout_ms
    }, s) => {
      let o = e,
        c = _Bt();
      e = c.promise;
      try {
        await o;
      } catch {}
      try {
        if (restart) t?.close(), t = void 0;
        if (!command) {
          if (restart) return "bash session restarted";
          throw new Af("bash: command is required");
        }
        t ?? (t = new X(r.workdir, r.env));
        try {
          let {
            output: output_2,
            exitCode: exitCode_2
          } = await t.exec(command, {
            timeoutMs: timeout_ms ?? z,
            signal: s?.signal
          });
          if (exitCode_2 !== 0) throw new Af(output_2 || `exit ${exitCode_2}`);
          return output_2;
        } catch (error) {
          if (error instanceof Af) throw error;
          throw t.close(), t = void 0, new Af(`bash: ${error instanceof Error ? error.message : String(error)}`);
        }
      } finally {
        c.resolve();
      }
    },
    close: () => {
      t?.close(), t = void 0;
    }
  });
}
function bt(r) {
  return v({
    name: "read",
    description: "Read a UTF-8 text file relative to the workdir.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        view_range: {
          type: "array",
          items: {
            type: "integer"
          },
          description: "[start_line, end_line] 1-indexed inclusive"
        }
      },
      required: ["file_path"]
    },
    run: async ({
      file_path: file_path,
      view_range: view_range
    }) => {
      if (!file_path) throw new Af("read: file_path is required");
      let i = await x(r, file_path),
        n;
      try {
        let f = await d.stat(i);
        if (!f.isFile()) throw new Af(`read: ${file_path} is not a regular file`);
        let h = K(r.maxFileBytes);
        if (h !== null && f.size > h) throw new Af(`read: ${file_path} is ${f.size} bytes, exceeds ${h}-byte limit. Use bash (head/tail/sed) to read a slice.`);
        n = await d.readFile(i, "utf8");
      } catch (error) {
        if (error instanceof Af) throw error;
        throw new Af(`read: ${O(error, file_path)}`);
      }
      if (!view_range) return n;
      if (view_range.length !== 2) throw new Af("read: view_range must be [start_line, end_line]");
      let [a, s] = view_range,
        o = n.split(`
`),
        c = Math.max(0, a - 1),
        l = s > 0 ? s : o.length;
      return o.slice(c, l).join(`
`);
    }
  });
}
function _t(r) {
  return v({
    name: "write",
    description: "Write a UTF-8 text file relative to the workdir, creating parent directories as needed.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        content: {
          type: "string"
        }
      },
      required: ["file_path", "content"]
    },
    run: async ({
      file_path: file_path_2,
      content: content
    }) => {
      if (!file_path_2) throw new Af("write: file_path is required");
      let i = await x(r, file_path_2);
      try {
        await d.mkdir(u.dirname(i), {
          recursive: !0,
          mode: mode
        }), await F(i, content ?? "");
      } catch (error) {
        throw new Af(`write: ${O(error, file_path_2)}`);
      }
      return `wrote ${Buffer.byteLength(content ?? "")} bytes to ${file_path_2}`;
    }
  });
}
function vt(r) {
  return v({
    name: "edit",
    description: "Replace old_string with new_string in a file. old_string must be unique unless replace_all.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        old_string: {
          type: "string"
        },
        new_string: {
          type: "string"
        },
        replace_all: {
          type: "boolean"
        }
      },
      required: ["file_path", "old_string", "new_string"]
    },
    run: async ({
      file_path: file_path_3,
      old_string: old_string,
      new_string: new_string,
      replace_all: replace_all
    }) => {
      if (!file_path_3) throw new Af("edit: file_path is required");
      if (!old_string) throw new Af("edit: old_string is required");
      let a = await x(r, file_path_3),
        s;
      try {
        let l = await d.stat(a);
        if (!l.isFile()) throw new Af(`edit: ${file_path_3} is not a regular file`);
        let f = K(r.maxFileBytes);
        if (f !== null && l.size > f) throw new Af(`edit: ${file_path_3} is ${l.size} bytes, exceeds ${f}-byte limit. Use bash (sed/awk) to edit a large file.`);
        s = await d.readFile(a, "utf8");
      } catch (error) {
        if (error instanceof Af) throw error;
        throw new Af(`edit: ${O(error, file_path_3)}`);
      }
      let o = s.split(old_string).length - 1;
      if (o === 0) throw new Af(`edit: old_string not found in ${file_path_3}`);
      let c;
      if (replace_all) c = s.split(old_string).join(new_string);else {
        if (o > 1) throw new Af(`edit: old_string appears ${o} times in ${file_path_3} (must be unique)`);
        c = s.replace(old_string, () => new_string);
      }
      try {
        await F(a, c);
      } catch (error) {
        throw new Af(`edit: write: ${O(error, file_path_3)}`);
      }
      return `edited ${file_path_3} (${replace_all ? o : 1} replacement(s))`;
    }
  });
}
function $t(r) {
  return v({
    name: "glob",
    description: "Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: {
          type: "string"
        },
        path: {
          type: "string",
          description: "Directory to search in. Defaults to the workdir."
        }
      },
      required: ["pattern"]
    },
    run: async ({
      pattern: pattern,
      path: path
    }) => {
      if (!pattern) throw new Af("glob: pattern is required");
      let cwd_2 = u.resolve(r.workdir),
        n = pattern;
      if (u.isAbsolute(pattern)) {
        if (!r.unrestrictedPaths) throw new Af("glob: absolute pattern not permitted");
        cwd_2 = u.parse(pattern).root, n = u.relative(cwd_2, pattern);
      } else if (path) cwd_2 = await x(r, path);
      if (!r.unrestrictedPaths && n.split(/[\\/]/).includes("..")) throw new Af('glob: ".." is not permitted in the pattern');
      let a = r.unrestrictedPaths ? cwd_2 : await d.realpath(cwd_2).catch(() => cwd_2),
        s = [];
      try {
        for await (let o of glob(n, {
          cwd: cwd_2,
          withFileTypes: !0,
          exclude: c => c.name === ".git" || c.name === "node_modules"
        })) {
          if (!o.isFile()) continue;
          let path_2 = u.join(o.parentPath, o.name);
          if (!r.unrestrictedPaths) {
            let f;
            try {
              f = await d.realpath(path_2);
            } catch {
              continue;
            }
            if (!St(a, f)) continue;
          }
          let mtime = 0;
          try {
            mtime = (await d.stat(path_2)).mtimeMs;
          } catch {}
          s.push({
            path: path_2,
            mtime: mtime
          });
        }
      } catch (error) {
        throw new Af(`glob: ${error instanceof Error ? error.message : String(error)}`);
      }
      if (s.length === 0) return "no matches";
      return s.sort((itemA, itemB) => itemB.mtime - itemA.mtime), s.slice(0, ht).map(item => item.path).join(`
`);
    }
  });
}
function kt(r) {
  return v({
    name: "grep",
    description: "Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: {
          type: "string"
        },
        path: {
          type: "string"
        }
      },
      required: ["pattern"]
    },
    run: async ({
      pattern: pattern_2,
      path: path_3
    }, i) => {
      if (!pattern_2) throw new Af("grep: pattern is required");
      let n = u.resolve(r.workdir);
      if (path_3) n = await x(r, path_3);
      let a = await It();
      return a ? Et(a, pattern_2, n, i?.signal) : Ot(pattern_2, n, i?.signal);
    }
  });
}
function Et(r, t, e, signal) {
  return new Promise((n, a) => {
    let s = W.spawn(r, ["-n", "--no-heading", "-e", t, "--", e], {
        ...(signal ? {
          signal: signal
        } : {})
      }),
      o = "",
      c = "",
      l = !1;
    s.stdout.on("data", f => {
      if (l) return;
      if (o += f, o.length > T) l = !0, o = o.slice(0, T), s.kill("SIGKILL");
    }), s.stderr.on("data", f => c += f), s.on("close", f => {
      if (signal?.aborted) return a(new Af("grep: aborted"));
      if (l) return n(o + `
[output truncated at ${T} bytes]`);
      if (f === 0) return n(o);
      if (f === 1) return n("no matches");
      a(new Af(`grep: rg failed: ${c || `exit ${f}`}`));
    }), s.on("error", f => {
      if (signal?.aborted) return a(new Af("grep: aborted"));
      a(new Af(`grep: rg failed: ${f.message}`));
    });
  });
}
async function Ot(r, t, e) {
  let i;
  try {
    i = new RegExp(r);
  } catch (error) {
    throw new Af(`grep: invalid regex: ${error instanceof Error ? error.message : String(error)}`);
  }
  let n = [],
    a = T,
    s = c => {
      if (a -= c.length + 1, a < 0) return n.push(`[output truncated at ${T} bytes]`), !1;
      return n.push(c), !0;
    };
  if ((await d.stat(t).catch(() => null))?.isFile()) await G(t, i, s);else await At(t, "", c => G(u.join(t, c), i, s), e);
  if (e?.aborted) throw new Af("grep: aborted");
  if (n.length === 0) return "no matches";
  return n.join(`
`);
}
async function G(r, t, e) {
  let input = R.createReadStream(r, {
      encoding: "utf8"
    }),
    n = H.createInterface({
      input: input,
      crlfDelay: 1 / 0
    }),
    a = 0;
  try {
    for await (let s of n) {
      if (a++, s.length > pt) continue;
      if (t.test(s) && !e(`${r}:${a}:${s}`)) return !1;
    }
  } catch {} finally {
    input.destroy();
  }
  return !0;
}
function St(r, t) {
  let e = u.relative(r, t);
  return e === "" || !e.startsWith(".." + u.sep) && e !== ".." && !u.isAbsolute(e);
}
var Tt = 40,
  xt = 50000;
async function At(r, t, e, i) {
  let n = xt;
  async function a(s, o) {
    if (o > Tt) return !0;
    if (i?.aborted) return !1;
    let c;
    try {
      c = await d.readdir(u.join(r, s), {
        withFileTypes: !0
      });
    } catch {
      return !0;
    }
    for (let l of c) {
      if (l.name === ".git" || l.name === "node_modules") continue;
      if (n-- <= 0) return !1;
      if (i?.aborted) return !1;
      let f = s ? u.join(s, l.name) : l.name;
      if (l.isDirectory()) {
        if (!(await a(f, o + 1))) return !1;
      } else if (l.isFile()) {
        if ((await e(f)) === !1) return !1;
      }
    }
    return !0;
  }
  await a(t, 0);
}
async function It() {
  let r = (process.env.PATH ?? "").split(u.delimiter);
  for (let t of r) {
    let e = u.join(t, "rg");
    try {
      return await d.access(e, R.constants.X_OK), e;
    } catch {}
  }
  return null;
}
export { ee as betaAgentToolset20260401, at as setupSkills };