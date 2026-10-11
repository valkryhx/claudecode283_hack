/* ==========================================================================
 * m0869.Gt  ->  Journal   [m0869_0xd12567a.js @ 21165]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
class Journal {
  path;
  storageV5;
  dirReady = !1;
  constructor(runId, storageV5) {
    this.path = joinPath(workflowTranscriptDir(runId), "journal.jsonl");
    let key = storageV5 === void 0 ? void 0 : resolveJournalKey(runId);
    this.storageV5 = storageV5 === void 0 || key === void 0 ? void 0 : {
      backend: storageV5,
      key: key
    };
  }
  async readLines() {
    if (this.storageV5 !== void 0) return this.loadV5(this.storageV5);
    try {
      return (await ur(this.path, "utf8")).split(`
`);
    } catch (e) {
      if (!B(e)) throw e;
      return;
    }
  }
  async restoreState() {
    let e = await this.readLines();
    if (e === void 0) return "missing";
    return e[0] === cr && !e.includes(pr) ? "partial" : "complete";
  }
  async writeRestored(e) {
    let r = [{
        type: "restoring"
      }, ...e, {
        type: "restored"
      }].map(w => stringifyJsonl(w)),
      s = this.storageV5;
    if (s === void 0) {
      await so(io(this.path), {
        recursive: !0
      }), await Cn(this.path, r.join(""));
      return;
    }
    let g = await s.backend.delete(s.key);
    if (!g.ok && g.error.code !== "NotFound") throw Error("LocalFileJournal: journal delete failed", {
      cause: g.error
    });
    let f = await s.backend.append(s.key, r.map(w => ({
      data: w
    })));
    if (!f.ok) throw Error("LocalFileJournal: journal append failed", {
      cause: f.error
    });
  }
  async load() {
    let e = await this.readLines();
    if (e === void 0) return ao([]);
    let r = [];
    for (let s of e) {
      if (!s) continue;
      try {
        r.push(Vo(s));
      } catch (g) {
        t(`LocalFileJournal: skipping unparseable line in ${this.path}: ${g}`);
      }
    }
    return ao(r);
  }
  async loadV5({
    backend: e,
    key: r
  }) {
    let s = new TextDecoder("utf-8", {
        ignoreBOM: !0
      }),
      g = [],
      f;
    for (;;) {
      let w = await e.readRecords(r, f === void 0 ? void 0 : {
        fromSeq: f
      });
      if (!w.ok) {
        if (w.error.code === "NotFound") return;
        throw t(`LocalFileJournal: read of ${this.path} failed: ${rt(w.error)}`), Error("LocalFileJournal: journal read failed", {
          cause: w.error
        });
      }
      for (let F of w.value.items) {
        let R = s.decode(F.data);
        g.push(R.endsWith(`
`) ? R.slice(0, -1) : R);
      }
      let A = w.value.nextSeq;
      if (A === void 0) return g;
      if (f !== void 0 && A <= f) throw Error("LocalFileJournal: journal read cursor failed to advance");
      f = A;
    }
  }
  async append(e) {
    let r = this.storageV5;
    if (r !== void 0) {
      let s = await r.backend.append(r.key, [{
        data: stringifyJsonl(e)
      }]);
      if (!s.ok) throw t(`LocalFileJournal: append to ${this.path} failed: ${rt(s.error)}`), Error("LocalFileJournal: journal append failed", {
        cause: s.error
      });
      return;
    }
    if (!this.dirReady) await so(io(this.path), {
      recursive: !0
    }), this.dirReady = !0;
    await writeFile(this.path, stringifyJsonl(e), "utf8");
  }
}
