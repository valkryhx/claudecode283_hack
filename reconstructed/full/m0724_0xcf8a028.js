// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Ht
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  sc,
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  Y,
  qI,
  SK
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  Po
} from "B:/~BUN/root/chunk-6cq25d8x.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  vt,
  qte
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  qGn
} from "B:/~BUN/root/chunk-9qtz41py.js";
import {
  nl
} from "B:/~BUN/root/chunk-6spmd6p4.js";
import {
  I$e
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  tT
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  Mq
} from "B:/~BUN/root/chunk-aw2zngte.js";
import {
  Vl
} from "B:/~BUN/root/chunk-n2rcpjj1.js";
import {
  qZ,
  f3,
  KZ,
  Eqe,
  vp,
  nPt,
  s9
} from "B:/~BUN/root/chunk-9sy3w2pa.js";
import {
  xh
} from "B:/~BUN/root/chunk-06ra9xdn.js";
import {
  me,
  Ale
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  _c,
  _a,
  ru,
  HW
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  au
} from "B:/~BUN/root/chunk-y00rw36h.js";
import {
  Hu,
  yz
} from "B:/~BUN/root/chunk-ewjenbzd.js";
import {
  cG,
  Soe,
  xWe,
  SU,
  QIe,
  Xor
} from "B:/~BUN/root/chunk-qzprwy0h.js";
import {
  Kor,
  I7r,
  wSe
} from "B:/~BUN/root/chunk-8tap4h55.js";
import {
  spawn as O
} from "child_process";
import {
  realpath as R
} from "fs/promises";
import {
  homedir as P
} from "os";
import {
  basename as N,
  join as D
} from "path";
async function RKt() {
  let n = await sc("claude"),
    t = au()[0],
    [o, u] = await Promise.all([n ? R(n).catch(() => n) : null, t ? R(t).catch(() => t) : null]);
  if (n && (u === null || o !== u)) return yz({
    cmd: n,
    prefixArgs: [],
    target: n
  });
  return Hu()
}
var pKo = async (n, t) => {
  let o = vt() ? a.CLAUDE_JOB_DIR : void 0;
  if (vt() && (!qte() || !o)) {
    i("tengu_update_refused", {
      bg_session: !0
    });
    let e = qte() ? null : vp();
    return {
      type: "text",
      value: e ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${e}\` to restart it on the latest build.` : "This is a background session \u2014 press \u2190 to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)."
    }
  }
  if (!o) {
    let e = _c(),
      f = D(xh(Xor()), `${Y()}.jsonl`);
    if (e && e !== f) return i("tengu_update_refused", {
      transcript_path_drift: !0
    }), {
      type: "text",
      value: "Cannot /update \u2014 this session was resumed from a different project directory. Restart manually with --resume to continue on the latest version."
    }
  }
  let u = (e) => {
      if (!wSe(t.taskRegistry.all())) return;
      return i("tengu_update_refused", {
        active_tasks: !0,
        ...e && {
          deferred: e
        }
      }), "Can't restart while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then try again."
    },
    g = (e) => {
      let f = f3(me(t), qI());
      if (f.length === 0) return u(e);
      i("tengu_update_refused", {
        uncarriable: !0
      });
      let h = _a() ? "" : " (add --continue to return to this conversation)";
      return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${f.join("; ")}). Nothing was changed; exit and start claude again for the new version${h}.`
    },
    w = o ? u() : g();
  if (w !== void 0) return {
    type: "text",
    value: w
  };
  if (o) {
    let e = N(o);
    if (await SU(t.messages, t.storageV5), !await Ht(ru(), 30000, "session flush").then(() => !0, () => !1)) return i("tengu_update_refused", {
      bg_flush_failed: !0
    }), {
      type: "text",
      value: "Couldn't save the session to disk, so nothing was restarted \u2014 try /restart again in a moment."
    };
    let h = await RKt(),
      C = u(!0);
    if (C !== void 0) return {
      type: "text",
      value: C
    };
    let m = {
      ...process.env
    };
    for (let r of I$e) delete m[r];
    delete m.CLAUDE_JOB_DIR;
    for (let r of Object.keys(m))
      if (r.startsWith("CLAUDE_BG_")) delete m[r];
    i("tengu_update_bg_respawn", {
      carried_comment_monitor: Kor() && I7r(t.taskRegistry.all())
    });
    try {
      let r = O(h.cmd, [...h.prefixArgs, "respawn", e], {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
        env: m,
        cwd: P()
      });
      tT(r.pid), r.on("error", (T) => {
        d(T)
      }), r.unref()
    } catch (r) {
      return d(r), i("tengu_update_refused", {
        bg_spawn_failed: !0
      }), {
        type: "text",
        value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${e}\` to restart it on the latest build.`
      }
    }
    return {
      type: "text",
      value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${e}\` from a terminal.`
    }
  }
  await SU(t.messages, t.storageV5);
  let v = g(!0);
  if (v !== void 0) return {
    type: "text",
    value: v
  };
  let p = me(t),
    A = [...qZ(p, Ale(t)), ...KZ(p, SK())],
    y = nl() ? void 0 : t.getAppState().teamContext?.teamName;
  await QIe();
  let _ = g(!0);
  if (_ !== void 0) return {
    type: "text",
    value: _
  };
  let s = Vl(),
    b = s?.bridgeSessionId,
    k = s?.getLastSequenceNum(),
    E = s?.outboundOnly,
    I = s?.sessionGroupingId;
  if (b) t.setAppState((e) => e.replBridgeSkipNextArchive ? e : {
    ...e,
    replBridgeSkipNextArchive: !0
  }), s.writeSdkMessages([qGn("Switching to latest Claude Code\u2026 reconnecting", Y())]), await Ht(s.flush(), 2000, "bridge flush").catch(() => {}), await s.teardown({
    skipArchive: !0
  });
  let c = {};
  if (y) c.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = y;
  Object.assign(c, Mq()), Object.assign(c, Eqe(p.additionalWorkingDirectories)), Object.assign(c, s9(b, k, E, I, nPt(s, HW())) ?? {});
  let B = await RKt(),
    S = await cG(t.messages, "relaunch", {}, t.storageV5);
  try {
    return await xWe(S, {
      launcher: B,
      freshIfNoTranscript: !0,
      extraArgs: A,
      proactivity: {
        proactivityLevel: t.getProactivityLevel(),
        toolPermissionContext: p
      },
      env: Object.keys(c).length > 0 ? c : void 0,
      preSpawn: () => process.stdout.write(pe.dim(`
Switching from ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.283",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-09-25T00:44:42Z",GIT_SHA:"4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION} to latest\u2026 conversation will continue

`))
    }, t.storageV5)
  } catch (e) {
    if (!S) throw e;
    return d(e), {
      type: "text",
      value: Po(t.session) ? Soe("Couldn't restart Claude Code (detail withheld on this connection).", l(e)) : `Couldn't restart Claude Code \u2014 ${l(e)}.`
    }
  }
};
export {
  RKt,
  pKo
};
