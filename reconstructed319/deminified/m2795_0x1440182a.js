// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, F, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vt, t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { eK } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wr } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { dbe } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { T7t, dMn, IXe, mDt, ebr, tbr, nbr } from "B:/~BUN/root/chunk-x9bz04wf.js";
import { eO } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Rd, fmt, Kp } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { d4s, f4s, p4s, m4s, h4s } from "B:/~BUN/root/chunk-zmnkk1pw.js";
import { DYn } from "B:/~BUN/root/chunk-7yrp38ph.js";
import { H1e } from "B:/~BUN/root/chunk-5kj9dj0y.js";
import { x2, y_r } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, oe, C, u, He, Dr, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { randomUUID as ve } from "crypto";
import { join as Re } from "path";
var le = 240000,
  told = 32,
  tool_use_ids = 32,
  ue = p(() => He({
    seen: E().int().min(0).optional(),
    life: o().max(64).optional(),
    hold_ms: E().int().min(0).max(le).optional(),
    told: C(o().max(64)).max(told).optional(),
    tool_use_ids: C(o().min(1).max(256)).max(tool_use_ids).optional(),
    tool_host_interface: oe().optional()
  }));
function ee(e) {
  let n = {
      told: told,
      tool_use_ids: tool_use_ids
    },
    r = D(e) ? Object.entries(n).find(([h, w]) => {
      let s = Wr(e, h);
      return Array.isArray(s) && s.length > w;
    }) : void 0;
  if (r !== void 0) {
    let [h, w] = r;
    throw new R(`ReadCalls: ${h} has more than ${w} entries`, "ReadCalls: a list has more entries than are taken");
  }
  return ue().parse(e);
}
import { randomUUID as ce } from "crypto";
import { constants as P } from "fs";
import { lstat as pe, mkdir as fe, open as X, opendir as _e, unlink as he, writeFile as ge } from "fs/promises";
import { join as q } from "path";
var re = 60000,
  se = 256,
  ye = 604800000,
  be = 4 * se,
  ke = 16,
  te = 32768,
  H = ".json",
  we = p(() => {
    let e = E().int().min(0).max(Number.MAX_SAFE_INTEGER);
    return u({
      v: T(1),
      container_start: o().min(1).max(64),
      listed: u({
        taskId: o().refine(n => x2("local_bash", n)),
        output_path: o().max(4096),
        limit_ms: E().min(0).max(Number.MAX_SAFE_INTEGER)
      }).transform(n => y_r(n.taskId, n.output_path) ? n : {
        ...n,
        output_path: ""
      }),
      started_at: e,
      written_at: e,
      ended: u({
        how: Dr("state", [u({
          state: T("exited"),
          exit_code: E().int()
        }), u({
          state: T("time_limit")
        }), u({
          state: T("stopped"),
          stopped_by: T("session")
        }), u({
          state: T("killed"),
          reason: B(["daemon_exit", "output_limit", "container_stopped"]).optional().catch(void 0)
        })]).catch({
          state: "killed"
        }),
        at: e
      }).optional()
    });
  });
class G {
  #o;
  #e;
  #r;
  #s;
  #t = new Map();
  constructor({
    folder: folder,
    failed: failed,
    containerStartFile = q("/dev/shm", `claude-${process.getuid?.() ?? 0}-container-start`),
    containerStart: containerStart
  }) {
    this.#o = folder, this.#s = failed, this.#e = containerStartFile, this.#r = containerStart;
  }
  #n() {
    return this.#r ??= (async () => {
      let e = this.#e;
      await ge(e, ce(), {
        flag: "wx",
        mode: 384
      }).catch(r => {
        if (k(r) !== "EEXIST") throw r;
      });
      let n = await X(e, P.O_RDONLY | P.O_NOFOLLOW | P.O_NONBLOCK);
      try {
        let r = await n.stat();
        if (!r.isFile() || r.uid !== process.getuid?.()) throw Error("The file that identifies this container start is not a regular file owned by this user.");
        let {
            buffer: buffer,
            bytesRead: bytesRead
          } = await n.read({
            buffer: Buffer.alloc(64)
          }),
          s = buffer.subarray(0, bytesRead).toString("utf8").trim();
        if (s.length === 0) throw Error("The file that identifies this container start is empty.");
        return s;
      } finally {
        await n.close();
      }
    })().catch(e => {
      throw this.#r = void 0, e;
    }), this.#r;
  }
  write(e) {
    this.#i(e.listed.taskId, async (n, container_start) => {
      if (await eK(q(n, e.listed.taskId + H), _({
        v: 1,
        ...e,
        container_start: container_start
      }), {
        flush: !0,
        mode: 384
      }), e.ended !== void 0) await ne(n);
    });
  }
  remove(e) {
    this.#i(e, async n => {
      await he(q(n, e + H)).catch(r => {
        if (k(r) !== "ENOENT") throw r;
      });
    });
  }
  async settled(e) {
    await this.#t.get(e);
  }
  async settledAll() {
    while (this.#t.size > 0) await Promise.all(this.#t.values());
    await this.#a().then(e => e === void 0 ? void 0 : ne(e)).catch(this.#s);
  }
  async readEarlier() {
    let e = await this.#n().catch(s => {
        t(`mcp serve: could not read or make the file that identifies this container start, so commands that earlier daemons started are not listed: ${d(s)}`, {
          level: "error"
        });
        return;
      }),
      n = e === void 0 ? void 0 : await this.#a().catch(s => {
        t(`mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${d(s)}`, {
          level: "error"
        });
        return;
      }),
      r = [];
    if (n !== void 0) {
      let s = 0;
      try {
        for await (let O of await _e(n)) {
          if (s++, O.name.endsWith(H) && x2("local_bash", O.name.slice(0, -H.length))) r.push({
            name: O.name,
            path: q(n, O.name)
          });
          if (s >= be || r.length >= se) break;
        }
      } catch (error) {
        t(`mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${d(error)}`, {
          level: "error"
        });
      }
    }
    let h = Date.now(),
      w = [];
    for (let s of H1e(r, ke)) w.push(...(await Promise.all(s.map(async ({
      name: name,
      path: path
    }) => {
      let S = await X(path, P.O_RDONLY | P.O_NOFOLLOW | P.O_NONBLOCK).then(async y => {
          try {
            let v = await y.stat();
            if (!v.isFile() || v.size > te) return;
            let {
              buffer: buffer_2,
              bytesRead: bytesRead_2
            } = await y.read({
              buffer: Buffer.alloc(te)
            });
            return buffer_2.subarray(0, bytesRead_2).toString("utf8");
          } finally {
            await y.close();
          }
        }).catch(() => {
          return;
        }),
        I = we().safeParse(S === void 0 ? void 0 : et(S, !1));
      if (!I.success || I.data.listed.taskId + H !== name) return {
        fate: "unreadable"
      };
      let {
        container_start: container_start_2,
        listed: listed,
        started_at: started_at,
        written_at: j,
        ended: ended
      } = I.data;
      if (h - j > ye) return this.remove(listed.taskId), {
        fate: "too_old"
      };
      if (container_start_2 === e && ended === void 0) return {
        fate: "maybe_still_running"
      };
      return ended === void 0 ? {
        fate: "container_stopped",
        command: {
          listed: listed,
          started_at: started_at,
          ended: {
            how: {
              state: "killed",
              reason: "container_stopped"
            },
            at: j
          }
        }
      } : {
        fate: "with_end",
        command: {
          listed: listed,
          started_at: started_at,
          ended: ended
        }
      };
    }))));
    return {
      commands: w.flatMap(item => "command" in item ? [item.command] : []).toSorted((s, O) => s.ended.at - O.ended.at),
      counted: {
        with_end: U(w, ({
          fate: fate
        }) => fate === "with_end"),
        container_stopped: U(w, ({
          fate: fate_2
        }) => fate_2 === "container_stopped"),
        maybe_still_running: U(w, ({
          fate: fate_3
        }) => fate_3 === "maybe_still_running"),
        too_old: U(w, ({
          fate: fate_4
        }) => fate_4 === "too_old"),
        unreadable: U(w, ({
          fate: fate_5
        }) => fate_5 === "unreadable")
      }
    };
  }
  async #a(e = !1) {
    let n = this.#o();
    if (e) await fe(n, {
      recursive: !0,
      mode: 448
    });
    let r = await pe(n).catch(h => {
      if (k(h) !== "ENOENT") throw h;
      return;
    });
    if (r === void 0) return;
    if (!r.isDirectory() || r.uid !== process.getuid?.()) throw Error("The folder for background command records is a symbolic link or not a directory owned by this user.");
    return n;
  }
  #i(e, n) {
    let r = (this.#t.get(e) ?? Promise.resolve()).then(async () => {
      let h = await this.#n(),
        w = h === void 0 ? void 0 : await this.#a(!0);
      if (h !== void 0 && w !== void 0) await n(w, h);
    }).catch(this.#s);
    this.#t.set(e, r), r.then(() => {
      if (this.#t.get(e) === r) this.#t.delete(e);
    });
  }
}
async function ne(e) {
  let n = await X(e, P.O_RDONLY | P.O_DIRECTORY | P.O_NOFOLLOW);
  try {
    await n.sync();
  } finally {
    await n.close();
  }
}
var wUr = "ReadCalls",
  EMo = "StopBackgroundCommand",
  TMo = "MoveRunningCommand",
  Ce = 3 * told,
  ae = 1000,
  V = "anthropic/backgroundCommands";
function Zpa(life) {
  return {
    experimental: {
      [V]: {
        v: 1,
        life: life,
        moves: 1
      }
    }
  };
}
var It = p(() => u({
  experimental: u({
    [V]: u({
      v: T(1)
    })
  })
}));
var xt = p(() => u({
  experimental: u({
    [V]: u({
      moves: T(1)
    })
  })
}));
var Se = p(() => He({
    taskId: o().min(1).max(64)
  })),
  Ee = p(() => He({
    tool_use_id: DYn(),
    because: B(["message", "person"])
  }));
function Oe({
  interrupted: interrupted,
  code: n,
  outputFileSize: outputFileSize
}) {
  return !interrupted ? {
    state: "exited",
    exit_code: n
  } : {
    state: "killed",
    ...(outputFileSize !== void 0 && {
      reason: "output_limit"
    })
  };
}
class ie {
  life = ve();
  #o = 0;
  #e = new Map();
  #r = new Map();
  #s = De();
  #t;
  #n;
  #a = Promise.resolve();
  #i;
  #d;
  constructor(e = () => performance.now()) {
    this.#t = e;
  }
  keepRecordsIn(store, wallNow = Date.now) {
    if (this.#n !== void 0) return;
    this.#n = {
      store: store,
      wallNow: wallNow
    }, this.#a = this.#p(store, wallNow), vt(() => store.settledAll());
  }
  get restored() {
    return this.#a;
  }
  get version() {
    return this.#o;
  }
  starterFor(e) {
    return {
      reserve: () => {
        return;
      },
      listMove: n => this.#u(e.toolUseId, n),
      adopt: (n, r, h, w) => {
        try {
          let s = this.#c(n, r, h, e, w);
          return this.#r.delete(e.toolUseId ?? ""), g("mcp_serve_background_command"), s;
        } catch (error) {
          throw m("mcp_serve_background_command", "not_kept"), n.kill(), n.cleanup(), error;
        }
      }
    };
  }
  taskIdOf(e) {
    return [...this.#e.values()].find(({
      listed: listed_2
    }) => listed_2.tool_use_id === e)?.listed.taskId;
  }
  msSinceNewestDropped() {
    return this.#i === void 0 ? void 0 : Math.round(this.#t() - this.#i);
  }
  list() {
    let e = this.#t();
    return {
      life: this.life,
      commands_version: this.#o,
      commands: Array.from(this.#e.values(), ({
        listed: listed_3,
        startedAt: startedAt,
        ended: ended_2,
        unwanted: unwanted,
        stallTail: s
      }) => ({
        ...listed_3,
        ...(ended_2 ? {
          ...ended_2.how,
          ended_ms_ago: Math.round(e - ended_2.at)
        } : {
          state: "running",
          ...(unwanted && {
            told: !0
          }),
          ...(s !== void 0 && {
            stalled: !0,
            output_tail: s
          })
        }),
        ran_ms: Math.round((ended_2?.at ?? e) - startedAt)
      }))
    };
  }
  forget(e) {
    let n = e.flatMap(item => this.#e.get(item) ?? []);
    n.filter(({
      ended: ended_3
    }) => ended_3).forEach(({
      listed: listed_4
    }) => {
      this.#e.delete(listed_4.taskId), this.#n?.store.remove(listed_4.taskId);
    }), n.filter(({
      ended: ended_4
    }) => !ended_4).forEach(item => {
      item.unwanted = !0, this.#n?.store.remove(item.listed.taskId);
    });
  }
  stop(e) {
    return this.#e.get(e)?.cut({
      state: "stopped",
      stopped_by: "session"
    }) ?? !1;
  }
  moveRunning(e, n) {
    return this.#r.get(e)?.(n) ?? this.taskIdOf(e) !== void 0;
  }
  #u(e, n) {
    if (e === void 0) return () => {};
    return this.#r.set(e, n), () => {
      if (this.#r.get(e) === n) this.#r.delete(e);
    };
  }
  async changedSince(e, n) {
    let {
        promise: promise,
        resolve: resolve
      } = Promise.withResolvers(),
      w = () => resolve(),
      s = this.#s.subscribe(w);
    if (n.addEventListener("abort", w, {
      once: !0
    }), e !== this.#o || n.aborted) w();
    await promise, s(), n.removeEventListener("abort", w);
  }
  #c(e, n, r, h, w) {
    let taskId = e.taskOutput.taskId,
      output_path = Rd(taskId);
    if (!e.background(taskId, {
      atExit: "kill"
    })) throw Error("The command had already ended when it was to be moved to the background, and its output was not kept. Run it again without run_in_background.");
    let z = dMn(n),
      S = {
        listed: {
          taskId: taskId,
          ...(h.toolUseId !== void 0 && {
            tool_use_id: h.toolUseId
          }),
          ...(h.agentId !== void 0 && {
            agent_id: h.agentId
          }),
          command: Q(r, ae),
          ...(h.description && {
            description: Q(h.description, ae)
          }),
          output_path: output_path,
          limit_ms: z
        },
        startedAt: this.#t(),
        cut: y => {
          if (S.ended || e.status !== "backgrounded") return !1;
          return I(y), !0;
        }
      },
      I = (how, v) => {
        if (S.ended) return;
        let A = ebr(r, e.taskOutput, v, how.state !== "exited", void 0);
        if (clearTimeout(L), M(), K(), S.ended = {
          how: how,
          at: this.#t()
        }, this.#e.delete(taskId), S.unwanted) this.#n?.store.remove(taskId);else this.#e.set(taskId, S), this.#m(S);
        this.#l().forEach(() => c("mcp_serve_background_command", "ending_dropped")), j.resolve(), this.#o++, this.#s.emit();
        try {
          if (e.status === "backgrounded") e.kill();
          e.cleanup(), fmt(taskId, how.state === "exited" ? `
[exited with code ${how.exit_code}]
` : `
[killed]
`), Kp(taskId), t(`mcp serve: background command ${taskId} ended: ${how.state}${how.state === "killed" && how.reason ? ` (${how.reason})` : ""}`);
          let N = {
            elapsed_ms: Math.round(S.ended.at - S.startedAt),
            requested_timeout_ms: n ?? 0,
            deadline_ms: z,
            outcome: f(how.state !== "exited" ? "killed" : how.exit_code === 0 ? "completed" : "failed"),
            stop_cause: how.state === "time_limit" ? b("deadline") : how.state === "killed" ? de(how.reason) : void 0,
            stopped_by: de(how.state === "stopped" ? how.stopped_by : void 0),
            subagent_owned: h.agentId !== void 0,
            unwanted: S.unwanted === !0,
            trigger: w === "person" ? b("user") : w === "message" ? b("deliver_message") : h.movedAtTimeout ? b("timeout") : b("explicit"),
            ...mDt(v?.shellUsage),
            tool_use_id: T7t(h.toolUseId),
            bash_command_kinds: A.commandClass?.bash_command_kinds,
            bash_programs: A.commandClass?.bash_programs,
            bash_test_scope: A.commandClass?.bash_test_scope,
            output_total_bytes: v === void 0 ? void 0 : e.taskOutput.outputFileSize
          };
          if (tbr(A.testOutcome, bash_test_outcome => l("tengu_background_shell_settled", {
            ...N,
            bash_test_outcome: bash_test_outcome
          })), how.state === "exited") IXe(r, how.exit_code);
        } catch (error) {
          a(F(error));
        }
      },
      L = setTimeout(S.cut, z, {
        state: "time_limit"
      }).unref(),
      x = y => {
        S.stallTail = y, this.#o++, this.#s.emit();
      },
      M = nbr(taskId, y => {
        x(y), g("task_local_shell_stall_detected");
      }, () => x(void 0)),
      j = Promise.withResolvers(),
      K = vt(async () => {
        S.cut({
          state: "killed",
          reason: "daemon_exit"
        });
        let y = this.#n;
        if (y !== void 0) await j.promise, await y.store.settled(taskId);
      });
    if (this.#e.set(taskId, S), this.#m(S), this.#n !== void 0) this.#d ??= setInterval(() => {
      let y = [...this.#e.values()].filter(({
        ended: ended_5,
        unwanted: unwanted_2
      }) => !ended_5 && !unwanted_2);
      if (y.length === 0) clearInterval(this.#d), this.#d = void 0;
      y.forEach(item => this.#m(item));
    }, re).unref();
    return e.result.then(async y => {
      await e.taskOutput.flush().catch(v => a(F(v))), I(Oe(y), y);
    }).catch(y => {
      a(F(y)), I({
        state: "killed"
      });
    }), this.#o++, this.#s.emit(), taskId;
  }
  #m({
    listed: listed_5,
    startedAt: startedAt_2,
    ended: ended_6
  }) {
    if (this.#n === void 0) return;
    let {
        store: store_2,
        wallNow: wallNow_2
      } = this.#n,
      s = this.#t(),
      O = wallNow_2(),
      {
        taskId: taskId_2,
        output_path: output_path_2,
        limit_ms: limit_ms
      } = listed_5;
    store_2.write({
      listed: {
        taskId: taskId_2,
        output_path: output_path_2,
        limit_ms: limit_ms
      },
      started_at: Math.round(O - (s - startedAt_2)),
      written_at: Math.round(O),
      ...(ended_6 && {
        ended: {
          how: ended_6.how,
          at: Math.round(O - (s - ended_6.at))
        }
      })
    });
  }
  #l() {
    let e = [...this.#e.values()].filter(item => item.ended).slice(0, -Ce);
    return e.forEach(item => {
      this.#e.delete(item.listed.taskId), this.#n?.store.remove(item.listed.taskId), this.#i = item.ended?.at;
    }), e;
  }
  async #p(e, n) {
    try {
      let {
          commands: commands,
          counted: counted
        } = await e.readEarlier(),
        w = this.#t(),
        s = n(),
        O = commands.map(({
          listed: listed_6,
          started_at: started_at_2,
          ended: ended_7
        }) => {
          let at = w - Math.max(0, s - ended_7.at);
          return {
            listed: listed_6,
            startedAt: Math.min(at, w - Math.max(0, s - started_at_2)),
            cut: () => !1,
            ended: {
              how: ended_7.how,
              at: at
            }
          };
        }),
        z = [...this.#e.values()];
      this.#e.clear(), [...O, ...z].forEach(item => this.#e.set(item.listed.taskId, item));
      let S = this.#l();
      if (Object.values(counted).some(item => item > 0)) l("tengu_mcp_serve_background_records_read", {
        ...counted,
        dropped_for_room: S.length
      });
      if (O.length > 0) this.#o++, this.#s.emit();
    } catch (error) {
      a(F(error));
    }
  }
}
var PWt = new W(() => new ie());
function CMo(e, n) {
  if (n !== "tool-container" || !tn() || i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted" || dbe()) return;
  let r = {
    said: !1
  };
  PWt.of(e).keepRecordsIn(new G({
    folder: () => Re(eO(), "background-commands"),
    failed: h => {
      if (t(`mcp serve: could not save or delete a background command's record on disk, so after a restart that command may be missing, out of date, or listed again after it was acknowledged: ${d(h)}`, {
        level: "error"
      }), !r.said) r.said = !0, c("mcp_serve_background_command", "record_failed");
    }
  }));
}
async function RMo(e, n, {
  session: session,
  callerGone: h
}) {
  let {
      seen: seen,
      life: life_2,
      hold_ms: O,
      told: told_2,
      tool_use_ids: tool_use_ids_2
    } = ee(e ?? {}),
    [I, ...L] = (tool_use_ids_2 ?? []).filter(item => !DYn().safeParse(item).success);
  if (I !== void 0) throw new R(`ReadCalls: ${_(I)} is not a valid tool_use_id${L.length > 0 ? ` (and ${L.length} more)` : ""}. An id is 1 to 128 letters, digits or _ . : @ -, and not only dots.`, "ReadCalls: a tool_use_id is not valid");
  let x = PWt.of(session.host);
  await x.restored, x.forget(told_2 ?? []);
  let M = () => tool_use_ids_2?.some(v => !f4s(session, v)) ?? !1;
  if (seen !== void 0 && life_2 === x.life && O !== void 0 && !M()) {
    let abortController = new AbortController(),
      A = p4s(session, () => {
        if (M()) abortController.abort();
      }),
      N = os(n, {
        signalB: h,
        timeoutMs: O,
        refTimer: !0
      });
    try {
      await x.changedSince(seen, AbortSignal.any([N.signal, abortController.signal]));
    } finally {
      N.cleanup(), A();
    }
  }
  let calls = (tool_use_ids_2 ?? m4s(session)).map(v => {
    let taskId_3 = x.taskIdOf(v);
    return {
      tool_use_id: v,
      ...(taskId_3 === void 0 ? d4s(session, v) : {
        state: "background",
        taskId: taskId_3
      })
    };
  });
  if (tool_use_ids_2 !== void 0 && tool_use_ids_2.length > 0) {
    let v = A => U(calls, N => N.state === A);
    l("tengu_mcp_serve_calls_read_by_id", {
      background: v("background"),
      running: v("running"),
      finished: v("finished"),
      unknown: v("unknown")
    });
  }
  let K = [x.msSinceNewestDropped(), h4s(session)].filter(item => item !== void 0),
    output = {
      ...x.list(),
      calls: calls,
      ...(K.length > 0 && {
        dropped_ended_ms_ago: Math.min(...K)
      })
    };
  return {
    summary: `${output.commands.length} commands, ${output.calls.length} calls`,
    output: output
  };
}
async function AMo(e, n, {
  session: session_2
}) {
  let {
      tool_use_id: tool_use_id,
      because: because
    } = Ee().parse(e),
    moved = PWt.of(session_2.host).moveRunning(tool_use_id, because);
  return {
    summary: `moved: ${moved}`,
    output: {
      moved: moved
    }
  };
}
async function xMo(e, n, {
  session: session_3
}) {
  let {
      taskId: taskId_4
    } = Se().parse(e),
    stopped = PWt.of(session_3.host).stop(taskId_4);
  return {
    summary: `stopped: ${stopped}`,
    output: {
      stopped: stopped
    }
  };
}
export { wUr, EMo, TMo, Zpa, PWt, CMo, RMo, AMo, xMo };