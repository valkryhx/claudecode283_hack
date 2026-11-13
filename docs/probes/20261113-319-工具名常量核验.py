# -*- coding: utf-8 -*-
"""批量核验 319 里「工具名常量」的真实取值。

背景：本仓库 deminified 的标识符是压缩名，`ze` / `_r` / `Qr` / `dt` / `Yt` / `Me` /
`kt` / `as` / `co` 这类两三个字母的符号必须看到 `= "..."` 的定义才能断言身份。
跨模块同名符号极多（`dt` 在别的模块可能是 Edit，在本模块可能是别的东西），
因此本脚本**只按给定 (模块, 符号) 对被查**，不做全仓模糊匹配。

用法：
  python docs/probes/20261113-319-工具名常量核验.py
  修改下方 CHECKS 后运行。
"""
import os
import re
import sys

DEM = r"D:/git_codes/claudecode283_hack/reconstructed319/deminified"

# (源模块, 符号, 备注)
CHECKS = [
    # m0832 laptop 后端门禁 NGr() 用到的工具常量
    ("m0176_0x1153bfed.js", "dt", "m0832:708/716 写入类"),
    ("m0176_0x1153bfed.js", "Yt", "m0832:708/716 写入类"),
    ("m0176_0x1153bfed.js", "Me", "m0832:625/689/715 shell"),
    ("m0187_0x1154a00b.js", "kt", "m0832:625/689/715 shell"),
    ("m0175_0x1153be5b.js", "ze", "m0832:672/716 读类"),
    ("m0191_0x1155a4cc.js", "_r", "m0832:672/716 读类"),
    ("m0191_0x1155a4cc.js", "Qr", "m0832:672/716 读类"),
    # m0832 mcp 后端门禁 makeGate() 用到的
    ("m0292_0x1177de3f.js", "as", "m0832:724 放行"),
    ("m0244_0x116e5478.js", "co", "m0832:668/724 放行"),
    # 记忆 tool 名
    ("m0290_0x1177ccad.js", "Pv", "memory_list"),
    ("m0290_0x1177ccad.js", "yg", "memory_read"),
    ("m0290_0x1177ccad.js", "jf", "memory_write"),
    ("m0143_0x113fa0ff.js", "mH", "记忆 MCP server 名"),
    ("m0143_0x113fa0ff.js", "kWn", "记忆 tool 前缀"),
]


def find_def(fn, sym):
    path = os.path.join(DEM, fn)
    if not os.path.exists(path):
        return f"!! 文件不存在: {fn}"
    text = open(path, encoding="utf-8", errors="replace").read()
    lines = text.split("\n")
    esc = re.escape(sym)
    out = []

    # 单行: var/let/const X = "..."
    for pat in (
        rf'^\s*(?:var|let|const)\s+{esc}\s*=\s*(.+)$',
        rf'^\s*{esc}\s*=\s*(.+)$',
    ):
        for m in re.finditer(pat, text, re.M):
            out.append(("定义", m.group(1).strip()[:120]))

    # 多行声明续行: `  X = "...",`
    for m in re.finditer(rf'^\s+{esc}\s*=\s*(.+)$', text, re.M):
        out.append(("续行定义", m.group(1).strip()[:120]))

    # function / class
    for m in re.finditer(rf'^\s*(?:async\s+)?function\s+{esc}\s*\(', text, re.M):
        ln = text[: m.start()].count("\n") + 1
        out.append(("函数", f"line {ln}"))

    # 在哪些行被「当字符串用」出现在 Set/文案里 —— 提供使用面
    for i, line in enumerate(lines, 1):
        if re.search(rf'\$\{{\s*{esc}\s*\}}', line) or \
           re.search(rf'\b{esc}\b.*"(?:Read|Write|Edit|Glob|Grep|Bash|PowerShell|'
                     rf'WebFetch|WebSearch|NotebookEdit|MultiEdit)"', line):
            out.append((f"使用行 {i}", line.strip()[:140]))

    return out


def main():
    print("== 319 工具名常量核验 ==")
    for fn, sym, note in CHECKS:
        res = find_def(fn, sym)
        print(f"\n-- {fn} :: {sym}   ({note})")
        if isinstance(res, str):
            print("   " + res)
            continue
        if not res:
            print("   !! 未找到定义")
        seen = set()
        for kind, val in res:
            key = (kind, val)
            if key in seen:
                continue
            seen.add(key)
            print(f"   [{kind}] {val}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
