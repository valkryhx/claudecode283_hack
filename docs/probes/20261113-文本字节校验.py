# -*- coding: utf-8 -*-
"""字节级校验文本文件：CR 数、BOM、结尾是否完整、是否合法 UTF-8。

为什么单独写：Git Bash 的 `grep -c $'\r'` 在 payload 穿过 PowerShell here-string 时
可能没做 ANSI-C 展开，退化成 `grep -c ''`（空模式）→ 返回「全部行数」，
看起来像「每一行都有 CR」。这类假信号会让人误判文件被 CRLF 污染。
字节级检查没有歧义，作为唯一裁决。

用法：
  python docs/probes/20261113-文本字节校验.py AGENTS.md docs/xxx.md
"""
import sys


def check(path):
    data = open(path, "rb").read()
    cr = data.count(b"\r")
    lf = data.count(b"\n")
    bom = data.startswith(b"\xef\xbb\xbf")
    try:
        text = data.decode("utf-8")
        utf8 = True
    except UnicodeDecodeError as e:
        text = ""
        utf8 = False
        err = str(e)
    trailing_newline = data.endswith(b"\n")

    print(f"-- {path}")
    print(f"   bytes={len(data)}  lines={lf}  CR={cr}  CRLF={'YES' if cr else 'no'}")
    print(f"   bom={bom}  utf8={'ok' if utf8 else 'FAIL'}  ends_with_newline={trailing_newline}")
    if not utf8:
        print(f"   decode error: {err}")
    if text:
        tail = text[-80:].replace("\n", "\\n")
        print(f"   tail: …{tail}")
    return cr == 0 and utf8 and not bom


def main():
    paths = sys.argv[1:]
    if not paths:
        print(__doc__)
        return 1
    allok = True
    for p in paths:
        allok &= check(p)
        print()
    print("结论：" + ("全部干净（LF / UTF-8 无 BOM）" if allok else "存在问题，见上"))
    return 0 if allok else 1


if __name__ == "__main__":
    sys.exit(main())
