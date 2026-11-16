# -*- coding: utf-8 -*-
"""统计一次会话 transcript 里的 attachment 分布（文档 §7 的复现脚本）。

用途：判定「某个 attachment producer 到底有没有触发」。
**不要用 `grep -c "<producer名>"` 计数**——transcript 里包含大量被回显的
源码片段（用户贴的、助手写的），裸关键词计数会产生大量假阳性。
本仓库实测：裸 grep "nested_memory" 得到 70 次命中，按 `attachment.type` 归类后是 0 次。

正确判据只有一条：
    顶层 type == "attachment"  且  attachment.type == <目标 producer 名>

用法：
  python docs/probes/20261116-统计会话attachment分布.py [transcript.jsonl]

不传路径时，按 CLAUDE_PROJECT_DIR / 当前目录推导出
  ~/.claude/projects/<项目目录名>/ 下最新的 .jsonl
"""
import glob
import io
import json
import os
import sys
from collections import Counter

MEM_PRODUCERS = ("nested_memory", "withheld_memory", "memory_update",
                 "late_memory_context")


def latest_transcript():
    """~/.claude/projects/<slug>/ 里最新的 jsonl。

    slug 规则（实测）：绝对路径里的 `:`、`\\`、`/`、`_` 全部替换成 `-`。
    例：D:\\git_codes\\claudecode283_hack → D--git-codes-claudecode283-hack
    如果推导不出目录，退化为在 projects/ 下按最新的 jsonl 找。
    """
    home = os.path.expanduser("~")
    base = os.path.join(home, ".claude", "projects")
    proj = os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd()

    cand = proj
    for ch in (":", "\\", "/", "_"):
        cand = cand.replace(ch, "-")
    d = os.path.join(base, cand)
    files = sorted(glob.glob(os.path.join(d, "*.jsonl")), key=os.path.getmtime)
    if files:
        return files[-1]

    # 退化：全 projects 下最新（多项目时会选错，故只在推导失败时用）
    allf = sorted(glob.glob(os.path.join(base, "*", "*.jsonl")),
                  key=os.path.getmtime)
    return allf[-1] if allf else None


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else latest_transcript()
    if not path or not os.path.exists(path):
        print("找不到 transcript，请显式传路径")
        return 1

    top_type = Counter()
    att_type = Counter()
    mem_kinds = Counter()
    instr_files = []
    read_calls = []
    queued = []
    edited = []
    n_lines = 0

    with io.open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            n_lines += 1
            try:
                o = json.loads(line)
            except Exception:
                continue
            t = o.get("type", "?")
            top_type[t] += 1

            msg = o.get("message") or {}
            content = msg.get("content") if isinstance(msg, dict) else None
            if isinstance(content, list):
                for blk in content:
                    if isinstance(blk, dict) and blk.get("type") == "tool_use":
                        if blk.get("name") in ("Read", "Grep", "Glob"):
                            inp = blk.get("input") or {}
                            p = (inp.get("file_path") or inp.get("path")
                                 or inp.get("pattern") or "")
                            read_calls.append(str(p))

            if t != "attachment":
                continue
            att = o.get("attachment")
            if not isinstance(att, dict):
                continue
            k = att.get("type") or "<no-type>"
            att_type[k] += 1
            if k in MEM_PRODUCERS:
                mem_kinds[k] += 1
            if k == "instructions":
                for fl in att.get("files") or []:
                    instr_files.append((fl.get("type"), len(fl.get("content") or ""),
                                        fl.get("path")))
            if k == "queued_command":
                queued.append(((att.get("prompt") or "")[:60], att.get("origin")))
            if k == "edited_text_file":
                edited.append(att.get("filename", ""))

    total = sum(att_type.values())
    out = []
    w = out.append
    w("transcript: %s" % path)
    w("行数: %d    attachment 记录: %d" % (n_lines, total))
    w("\n-- attachment.type 分布 --")
    for k, v in att_type.most_common():
        w("  %-30s %d" % (k, v))
    w("\n-- 记忆类 producer 实际触发 --")
    for k in MEM_PRODUCERS:
        w("  %-24s %d" % (k, mem_kinds.get(k, 0)))
    if instr_files:
        w("\n-- instructions 附件内的文件 --")
        for typ, ln, p in instr_files:
            w("  type=%-10s len=%-7d %s" % (typ, ln, p))
    w("\n-- 读类工具调用 --")
    w("  共 %d 次；路径含 memory 的 %d 次"
      % (len(read_calls), sum(1 for p in read_calls if "memory" in p.lower())))
    if queued:
        w("\n-- queued_command --")
        for p, og in queued:
            w("  %r origin=%s" % (p, og))
    if edited:
        w("\n-- edited_text_file: %d 条 --" % len(edited))
        for fn_ in edited:
            w("  %s" % os.path.basename(fn_))

    text = "\n".join(out) + "\n"
    sys.stdout.buffer.write(text.encode("utf-8"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
