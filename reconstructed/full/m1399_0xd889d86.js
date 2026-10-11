// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  fh
} from "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  Ds
} from "B:/~BUN/root/chunk-zahshfs3.js";
import "B:/~BUN/root/chunk-snmb1kqg.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import {
  gn
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  IKt
} from "B:/~BUN/root/chunk-dczbgj6x.js";
import {
  kv,
  au,
  Eu,
  gI
} from "B:/~BUN/root/chunk-y00rw36h.js";
import {
  Hu
} from "B:/~BUN/root/chunk-ewjenbzd.js";
import {
  _7e,
  xKt
} from "B:/~BUN/root/chunk-jw9a7s4e.js";
import "B:/~BUN/root/chunk-wbt134f9.js";
import "B:/~BUN/root/chunk-dqm1wqrw.js";
import {
  spawn as E
} from "child_process";
import {
  closeSync as p
} from "fs";
import {
  constants as v
} from "os";
import {
  isatty as u
} from "tty";

function d() {
  for (let r = 0; r < 32; r++) {
    if (r === 1 || r === 2) continue;
    try {
      if (u(r)) p(r)
    } catch {}
  }
}
async function B({
  proactivity: r
} = {}) {
  if (await new Promise((e) => setImmediate(e)), !await gI()) return await gn("agent_launcher", "relaunch_launcher_not_runnable"), process.stderr.write(`
${Eu()??`${kv}: launcher \`${au()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`), Ds(1);
  let {
    cmd: n,
    prefixArgs: c
  } = Hu(), s = process.argv.slice(2), t = {
    ...process.env
  };
  delete t[_7e], Object.assign(t, xKt()), IKt();
  let i = E(n, [...c, ...s], {
    stdio: "inherit",
    env: t
  });
  d();
  let a = ["SIGINT", "SIGTERM", "SIGHUP"];
  for (let e of a) process.on(e, () => {
    try {
      i.kill(e)
    } catch {}
  });
  return new Promise(() => {
    i.on("close", (e, o) => {
      let l = o ? 128 + (v.signals[o] ?? 0) : 0;
      process.exit(e ?? l)
    }), i.on("error", (e) => {
      process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`), fh("relaunch_child_error"), process.exit(1)
    })
  })
}
export {
  B as execRelaunch
};
