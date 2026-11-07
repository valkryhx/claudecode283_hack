# -*- coding: utf-8 -*-
"""PTY 抓包探针：把 claude 的终端输出逐字节记下来，带时间戳。

用法：python pty_ux_probe.py <out.json> <秒数> [ENV=VALUE ...]
不发送任何 prompt，只抓启动帧，因此不消耗 API token。
"""
import json
import os
import sys
import threading
import time

from winpty import PtyProcess

CLAUDE = r"C:\Users\Administrator\.local\bin\claude.exe"


def main():
    out_path = sys.argv[1]
    seconds = float(sys.argv[2])
    env_over = {}
    for a in sys.argv[3:]:
        if "=" in a:
            k, v = a.split("=", 1)
            env_over[k] = v
    env = dict(os.environ)
    # 关键：子进程会继承"我正跑在 Claude Code 里"的全部环境变量，
    # 那会让被测进程走嵌套/降级路径，污染 UX 结论。默认清掉所有 CLAUDE*/ANTHROPIC* 再按需注入。
    if env_over.pop("__STRIP__", "1") != "0":
        for k in [k for k in env if k.upper().startswith(("CLAUDE", "ANTHROPIC"))]:
            env.pop(k, None)
    env.update(env_over)
    # 隔离配置目录：避免探针强杀进程后写下的 fullscreenBootStrikes 污染后续实验，
    # 也避免读到用户真实 settings.json 里的 tui/权限设置。
    cfg = env_over.get("CLAUDE_CONFIG_DIR")

    p = PtyProcess.spawn(CLAUDE, dimensions=(40, 120), env=env, cwd=r"D:\git_repos\claude_hack")
    chunks = []
    stop = threading.Event()

    def reader():
        while not stop.is_set():
            try:
                raw = p.read(65536)  # winpty 返回 str（已是解码文本）
            except EOFError:
                break
            except Exception as e:
                chunks.append({"t": time.time(), "err": repr(e)})
                break
            if raw:
                chunks.append({"t": time.time(), "data": raw})
            else:
                time.sleep(0.005)

    th = threading.Thread(target=reader, daemon=True)
    th.start()
    t0 = time.time()

    # 可选：按脚本注入按键，用于测量「输入优先帧间隔」这类时序结论。
    # 格式 "S:<秒>,K:<文本>"，可重复；文本用 \x1b 等 python 转义。
    keys = env_over.pop("__KEYS__", "")
    if keys:
        for item in keys.split(";;"):
            if not item.strip():
                continue
            at, txt = item.split(":", 1)
            delay = float(at) - (time.time() - t0)
            if delay > 0:
                time.sleep(delay)
            chunks.append({"t": time.time(), "mark": "INJECT", "data": txt})
            p.write(txt)

    try:
        time.sleep(seconds)
    finally:
        stop.set()
        try:
            p.terminate(force=True)
        except Exception:
            pass
        time.sleep(0.3)

    # 统一存成 UTF-8 文本；`?` 之类替换字符在这里是 lossy 的，但所有我们
    # 关心的 ASCII 转义序列（ESC / CSI / 数字 / 字母）都能无损保留。
    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(
            {
                "duration": time.time() - t0,
                "env_over": env_over,
                "cwd": r"D:\git_repos\claude_hack",
                "dims": [40, 120],
                "chunks": chunks,
            },
            f,
            ensure_ascii=False,
        )
    total = sum(len(c.get("data", "")) for c in chunks)
    print("wrote", out_path, "chunks=", len(chunks), "chars=", total)


if __name__ == "__main__":
    main()
