// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  Wd,
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  K,
  yF,
  CQ,
  v$
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  JB,
  se
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Wu,
  qS,
  VW,
  Pl,
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  he
} from "B:/~BUN/root/chunk-4qqgabd5.js";
import {
  bo
} from "B:/~BUN/root/chunk-wje8pvrc.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  Ht,
  vge,
  zi
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  WMr
} from "B:/~BUN/root/chunk-7z3ndmqr.js";
import {
  Zd
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  OA,
  nP
} from "B:/~BUN/root/chunk-j8w5f307.js";
import {
  Es
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  mZe,
  oDe,
  uGe
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  Yx
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  hQe
} from "B:/~BUN/root/chunk-5g9fghtv.js";
import {
  CJ
} from "B:/~BUN/root/chunk-htbmes7q.js";
import {
  Rd
} from "B:/~BUN/root/chunk-aqd86p9a.js";
import {
  jpe,
  jZ,
  Wpe,
  Bdt,
  Om,
  Q7t,
  rie
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  cb
} from "B:/~BUN/root/chunk-9080897a.js";
import {
  bM
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  le,
  mke
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  ZNn,
  zPt,
  eFn,
  rd,
  Ha,
  k6,
  Dk,
  Mu,
  E6
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  hH
} from "B:/~BUN/root/chunk-q0t5e1bx.js";
import {
  ff
} from "B:/~BUN/root/chunk-7qeqkjr8.js";
import {
  U9,
  Bc,
  B6
} from "B:/~BUN/root/chunk-c0j3f8cc.js";
import {
  C8,
  z_e,
  fot,
  Sz,
  rKe,
  G_e,
  eRn
} from "B:/~BUN/root/chunk-qvgd0dpp.js";
import {
  pXr,
  Pts,
  wNe
} from "B:/~BUN/root/chunk-dvjfq0e0.js";
import {
  T8
} from "B:/~BUN/root/chunk-6nebfjq8.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
import {
  spawn as x
} from "child_process";
import {
  randomUUID as H
} from "crypto";
import {
  existsSync as N,
  statSync as B
} from "fs";
import {
  realpath as M
} from "fs/promises";
import {
  homedir as W
} from "os";
import {
  basename as G,
  dirname as j,
  join as U
} from "path";
async function yar() {
  let r = await Wd("claude"),
    e = ff()[0],
    [n, p] = await Promise.all([r ? M(r).catch(() => r) : null, e ? M(e).catch(() => e) : null]);
  if (r && (p === null || n !== p)) return B6({
    cmd: r,
    prefixArgs: [],
    target: r
  });
  return Bc()
}

function Y(r) {
  switch (r.kind) {
    case "newer":
      return `Successfully updated from ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.303",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-10-18T20:20:57Z",GIT_SHA:"07df2aedd2d01d2f60907b8404acbda187b04072",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION} to version ${r.version}`;
    case "older":
      return `Successfully downgraded from ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.303",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-10-18T20:20:57Z",GIT_SHA:"07df2aedd2d01d2f60907b8404acbda187b04072",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION} to version ${r.version}`;
    case "same":
    case "unknown":
      return "Session resumed"
  }
}
var J = Symbol("staff, over Remote Control");

function q(r) {
  if (hH(r)) return "not_owner";
  let e = r.submittedFromComposer;
  return T8(e) ? e : "not_typed"
}

function z(r, ...e) {
  if (r !== J && !T8(r)) throw Error("Can't restart automatically. Type /restart at the prompt.");
  return fot(...e)
}
var P = (r) => ({
    type: "system",
    subtype: "local_command",
    content: r,
    level: "info",
    timestamp: new Date().toISOString(),
    uuid: H(),
    isMeta: !1
  }),
  L = He(new Map, (r) => r.clear());

function Q(r, e) {
  let n = (o, u) => (i("tengu_update_refused", {
      foreground: c(o)
    }), u),
    p = "To use the installed version, exit and start Claude Code again";
  if (rKe(r) !== void 0) {
    let u = Ha(),
      m = rd();
    if (u || m === null) return n(u ? "saving_off" : "not_written", "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session.");
    if (k6() !== 0) return n("write_failed", "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it.");
    if (e === void 0) {
      let f = L.get(m);
      if (f === void 0) try {
        f = B(m).size > 0 ? void 0 : "empty"
      } catch {
        f = "missing"
      }
      if (f !== void 0) return L.set(m, f), n("gone", f === "empty" ? "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session." : "Can't restart this session. Its saved file can't be found. It may have been moved or deleted. You can keep working here, or run /export to save a copy of the conversation before you exit.")
    }
  }
  let y = eRn();
  if (!N(y)) return n("no_folder", `Can't restart this session here. Its folder, ${bM(Es(y))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`);
  let v = v$().map((o) => o.trim()),
    C = v.find((o, u) => {
      let m = v[u - 1];
      if (m !== "--settings" && m !== "--mcp-config" || o === "" || o.startsWith("{")) return !1;
      try {
        let f = m === "--settings" && !Yx(o) ? JB(se(), o).resolvedPath : o;
        return !B(f).isFile()
      } catch {
        return !0
      }
    });
  if (C !== void 0) return i("tengu_update_refused_launch_file", {}), n("launch_file", `Can't restart this session. It was started with ${bM(Es(C))}, which can't be read now. Nothing was changed. To use the installed version, exit and start Claude Code again, then run /resume.`);
  if (Rd()?.bridgeSessionId) return n("remote_control", "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume.");
  if (!N(Bc().target)) return n("no_launcher", "Can't restart. The installed version wasn't found. To check your installs, run /doctor.");
  let S = eFn(ZNn);
  if (S !== void 0) return n("above_max_version", `Can't restart on the installed version. Version ${S} is on hold, so this session is staying on ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.303",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-10-18T20:20:57Z",GIT_SHA:"07df2aedd2d01d2f60907b8404acbda187b04072",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION}. Nothing was changed.`);
  return
}
var Oni = async (r, e) => {
  if (OA()) return {
    type: "text",
    value: "/restart isn't available in this environment."
  };
  let n = q(e);
  if (n === "not_owner") return i("tengu_update_refused", {
    not_owner: !0
  }), i("tengu_update_refused_not_owner", {}), {
    type: "text",
    value: "/restart isn't available over Remote Control."
  };
  let p = Ht() ? a.CLAUDE_JOB_DIR : void 0;
  if (Ht() && (!vge() || !p)) {
    i("tengu_update_refused", {
      bg_session: !0
    });
    let t = vge() ? null : Om();
    return {
      type: "text",
      value: t ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` : "This is a background session \u2014 press \u2190 to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)."
    }
  }
  if (!p) {
    let t = rd(),
      b = U(cb(eRn()), `${K()}.jsonl`);
    if (t && t !== b) {
      i("tengu_update_refused", {
        transcript_path_drift: !0
      });
      let _ = bM(Es(eRn())),
        A = j(t),
        g = await uGe(t),
        s = g && (mZe(g.tail, "relocated", "relocatedCwd") ?? oDe(g.head, "cwd"));
      return {
        type: "text",
        value: `Cannot /update \u2014 ${s&&cb(s)===A?`this session belongs to ${bM(Es(s))} but is running in ${_}`:`this session is running in ${_} but its transcript is in ${bM(Es(A))}`}. Restart manually with --resume to continue on the latest version.`
      }
    }
  }
  let y = (t) => {
      if (!wNe(e.taskRegistry.all())) return;
      return i("tengu_update_refused", {
        active_tasks: !0,
        ...t && {
          deferred: t
        }
      }), "Can't restart while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then try again."
    },
    v = (t) => {
      let b = jZ(le(e), yF());
      if (b.length === 0) return y(t);
      i("tengu_update_refused", {
        uncarriable: !0
      });
      let _ = Ha() ? "" : " (add --continue to return to this conversation)";
      return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${b.join("; ")}). Nothing was changed; exit and start claude again for the new version${_}.`
    },
    C = p ? y() : v();
  if (C !== void 0) return {
    type: "text",
    value: C
  };
  if (p) {
    let t = G(p);
    if (await Sz(e.messages, e.storageV5), !await Nt(Mu(), 30000, "session flush").then(() => !0, () => !1)) return i("tengu_update_refused", {
      bg_flush_failed: !0
    }), {
      type: "text",
      value: "Couldn't save the session to disk, so nothing was restarted \u2014 try /restart again in a moment."
    };
    let _ = await yar(),
      A = y(!0);
    if (A !== void 0) return {
      type: "text",
      value: A
    };
    let g = {
      ...process.env
    };
    for (let s of hQe) delete g[s];
    delete g.CLAUDE_JOB_DIR;
    for (let s of Object.keys(g))
      if (s.startsWith("CLAUDE_BG_")) delete g[s];
    i("tengu_update_bg_respawn", {
      carried_comment_monitor: pXr() && Pts(e.taskRegistry.all())
    });
    try {
      let s = x(_.cmd, [..._.prefixArgs, "respawn", t], {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
        env: g,
        cwd: W()
      });
      nP(s.pid), s.on("error", (I) => {
        l(I)
      }), s.unref()
    } catch (s) {
      return l(s), i("tengu_update_refused", {
        bg_spawn_failed: !0
      }), {
        type: "text",
        value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.`
      }
    }
    return {
      type: "text",
      value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${t}\` from a terminal.`
    }
  }
  if (n === "not_typed") return i("tengu_update_refused", {
    foreground: c(n)
  }), i("tengu_update_refused_not_typed", {}), {
    type: "text",
    value: "Can't restart automatically. Type /restart at the prompt."
  };
  let S = Q(e.messages, e.storageV5);
  if (S !== void 0) return {
    type: "text",
    value: S
  };
  await Sz(e.messages, e.storageV5);
  let o = v(!0);
  if (o !== void 0) return {
    type: "text",
    value: o
  };
  let u = le(e),
    m = [...jpe(u, mke(e)), ...Wpe(u, CQ())],
    f = Zd() ? void 0 : e.getAppState().teamContext?.teamName;
  await G_e();
  let k = v(!0);
  if (k !== void 0) return {
    type: "text",
    value: k
  };
  let h = Rd(),
    O = h?.bridgeSessionId,
    D = h?.getLastSequenceNum(),
    F = h?.outboundOnly,
    V = h?.sessionGroupingId;
  if (O) e.setAppState((t) => t.replBridgeSkipNextArchive ? t : {
    ...t,
    replBridgeSkipNextArchive: !0
  }), h.writeSdkMessages([WMr("Switching to latest Claude Code\u2026 reconnecting", K())]), await Nt(h.flush(), 2000, "bridge flush").catch(() => {}), await h.teardown({
    skipArchive: !0
  });
  let w = {};
  if (f) w.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = f;
  Object.assign(w, CJ()), Object.assign(w, Bdt(u.additionalWorkingDirectories)), Object.assign(w, rie(O, D, F, V, Q7t(h, E6())) ?? {});
  let E = Bc(),
    T = await C8(e.messages, "relaunch", {}, e.storageV5),
    R = rKe(e.messages) !== void 0;
  if (R && !T) {
    try {
      await Dk([...e.messages, P(`<${Wu}>/restart</${Wu}>
<${qS}>restart</${qS}>
<${VW}></${VW}>`), P(`<${Pl}>${Y(zPt(E.target))}</${Pl}>`)], void 0, void 0, void 0, e.storageV5)
    } catch (t) {
      l(t)
    }
    await Sz(e.messages, e.storageV5)
  }
  i(R ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", {
    from_version: zi({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION),
    target_version: zi(ZNn(E.target)),
    native_install: U9()
  });
  try {
    return await z(n, T, {
      launcher: E,
      freshIfNoTranscript: !R,
      extraArgs: m,
      proactivity: {
        proactivityLevel: e.getProactivityLevel(),
        toolPermissionContext: u
      },
      env: Object.keys(w).length > 0 ? w : void 0,
      preSpawn: () => {
        process.stdout.write(R && k6() !== 0 ? he.dim(`
Claude's last response couldn't be saved, so it may be missing.

`) : `
`)
      }
    }, e.storageV5)
  } catch (t) {
    if (!T) throw t;
    return l(t), {
      type: "text",
      value: bo(e.session) ? z_e("Couldn't restart Claude Code (detail withheld on this connection).", d(t)) : `Couldn't restart Claude Code \u2014 ${d(t)}.`
    }
  }
};
export {
  yar,
  Oni
};
