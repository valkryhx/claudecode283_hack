// 运行时实证：直接执行 319 的叶子模块，核验 UX/UI 文档里的常量与转义序列。
// 不经过终端、不经过 ConPTY、不依赖任何仪器 —— 被测对象就是源码本身。
//
// 自包含：自己从 reconstructed319/deminified/ 取源、剥 Bun import、落到临时目录再执行，
// 所以不依赖任何预先准备好的中间产物。
//
//   node tools/ux-verify/verify-leaves.mjs [--dir <out>]
//
// 默认 out = .tmp_probe/eval（已被 .gitignore 覆盖，不入库）。
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const argv = process.argv.slice(2);
const di = argv.indexOf("--dir");
const OUT = path.resolve(di >= 0 ? argv[di + 1] : ".tmp_probe/eval");
const SRC = path.resolve("reconstructed319/deminified");

// ---- 1. 叶子模块转独立执行 -------------------------------------------------
// 剥掉 `import ... from "B:/~BUN/root/..."`（Bun 虚拟路径，Node 无法解析）。
function stripBunImports(code) {
  const names = new Set();
  const importRe = /^import\s*\{([^}]*)\}\s*from\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm;
  let m;
  while ((m = importRe.exec(code)) !== null) {
    for (const part of m[1].split(",")) {
      const nm = part.trim().split(/\s+as\s+/).pop().trim();
      if (nm) names.add(nm);
    }
  }
  code = code.replace(/^import\s*\{[^}]*\}\s*from\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm, "");
  code = code.replace(/^import\s+[^;]*from\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm, "");
  code = code.replace(/^import\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm, "");
  // 仍被正文引用的名字 = 真正的外部依赖，需要 shim
  const residual = [...names].filter((nm) =>
    new RegExp(`\\b${nm.replace(/[$]/g, "\\$")}\\b`).test(code)
  );
  return { code, residual };
}

fs.mkdirSync(OUT, { recursive: true });

// 显式列出要跑的模块（全名 = 模块号 + 0x 哈希），跨版本会变，需按 INDEX.tsv 重新定位。
const MODS = {
  pace: "m0697_0x122b525a.js",
  ansi: "m0108_0x1136a56c.js",
  modes: "m0660_0x121ce66a.js",
};

const out = {};
for (const [key, file] of Object.entries(MODS)) {
  const full = path.join(SRC, file);
  if (!fs.existsSync(full)) {
    console.error(`MISS  ${file}  不在 ${SRC}（版本变了？用 INDEX.tsv 重新定位）`);
    process.exitCode = 1;
  }
  const { code, residual } = stripBunImports(fs.readFileSync(full, "utf8"));
  let body = code;
  // m0660 只依赖 m0108 的 zl 一个纯函数 -> 从 globalThis 取，由下方先注入
  if (residual.length === 1 && residual[0] === "zl") {
    body = "const zl = globalThis.__zl;\n" + body;
  } else if (residual.length) {
    console.log(`SKIP  ${file}: 残留外部依赖 -> ${residual.join(", ")}`);
    continue;
  }
  const dst = path.join(OUT, file.replace(/\.js$/, ".mjs"));
  fs.writeFileSync(dst, body, "utf8");
  out[key] = dst;
}

if (!out.pace || !out.ansi || !out.modes) {
  console.error("缺少必需模块，无法继续");
  process.exit(1);
}

// ---- 2. 执行（先注入 zl，再加载依赖它的模块） -------------------------------
const pace = await import(pathToFileURL(out.pace).href);
const ansi = await import(pathToFileURL(out.ansi).href);
globalThis.__zl = ansi.zl;
const modes = await import(pathToFileURL(out.modes).href);

// ---- 3. 断言 ---------------------------------------------------------------
let pass = 0,
  fail = 0;
const ok = (label, actual, expected) => {
  const a = JSON.stringify(actual),
    e = JSON.stringify(expected);
  const good = a === e;
  good ? pass++ : fail++;
  console.log(`${good ? "PASS" : "FAIL"}  ${label}`);
  if (!good) console.log(`        got =${a}\n        want=${e}`);
};

console.log("=== §1.2 帧节流常量（m0697 全文仅 5 个数字）===");
ok("Lg  基础帧间隔 16ms", pace.Lg, 16);
ok("AJs 输入优先间隔 4ms", pace.AJs, 4);
ok("RJs 输入优先窗口 50ms", pace.RJs, 50);
ok("xJs stdout 积压阈值 16384B", pace.xJs, 16384);
ok("sBo 积压退避 250ms", pace.sBo, 250);

console.log("\n=== §1.4 同步输出（m0660）===");
ok("SYNCHRONIZED_UPDATE == 2026", modes.zb.SYNCHRONIZED_UPDATE, 2026);
ok("BSU 字节 == ESC[?2026h", modes.Mhn, "\x1b[?2026h");
ok("ESU 字节 == ESC[?2026l", modes.mEt, "\x1b[?2026l");

console.log("\n=== §2 备用屏 / 鼠标（m0660）===");
ok("ALT_SCREEN_CLEAR == 1049", modes.zb.ALT_SCREEN_CLEAR, 1049);
ok("备用屏开启 == ESC[?1049h", modes.f2t, "\x1b[?1049h");
ok("备用屏关闭 == ESC[?1049l", modes.p2t, "\x1b[?1049l");
ok(
  "mouse=full 组合序列",
  modes.o8n("full"),
  "\x1b[?1000h\x1b[?1002h\x1b[?1003h\x1b[?1006h"
);
ok("mouse=scroll 组合序列", modes.o8n("scroll"), "\x1b[?1000h\x1b[?1006h");
ok("mouse=off 为空串", modes.o8n("off"), "");

console.log("\n=== §1.5 DECSTBM / SU / SD（m0108）===");
ok("DECSTBM(1,10) == ESC[1;10r", ansi.hxe(1, 10), "\x1b[1;10r");
ok("滚动区复位 == ESC[r", ansi.Zpe, "\x1b[r");
ok("SU 上滚 3 == ESC[3S", ansi.Bta(3), "\x1b[3S");
ok("SD 下滚 2 == ESC[2T", ansi.jta(2), "\x1b[2T");
ok("SU 参数 0 应为空串", ansi.Bta(0), "");

console.log("\n=== 光标与清屏原语（m0108）===");
ok("相对移动 (+2,-3)", ansi.fae(2, -3), "\x1b[2C\x1b[3A");
ok("相对移动 (-1,+4)", ansi.fae(-1, 4), "\x1b[1D\x1b[4B");
ok("清行 ECH == ESC[2K", ansi.ywe, "\x1b[2K");
ok("清屏 == ESC[2J", ansi.RT, "\x1b[2J");
ok("清屏含回滚 == ESC[3J", ansi.X1t, "\x1b[3J");
ok("定位 (5,12) == ESC[5;12H", ansi.yj(5, 12), "\x1b[5;12H");
ok("清 n 行(3) 全序列", ansi.Adn(3), "\x1b[2K\x1b[1A\x1b[2K\x1b[1A\x1b[2K\x1b[G");

console.log(`\n中间产物: ${OUT}`);
console.log(`===== 结果: ${pass} PASS / ${fail} FAIL =====`);
process.exitCode = fail ? 1 : 0;
