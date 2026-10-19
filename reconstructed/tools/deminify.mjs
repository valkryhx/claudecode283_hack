// deminify.mjs — scope-aware, evidence-based deminifier for ALL Bun modules.
//
// 目标：在【不改动语义】的前提下，把能从源码证据推出的压缩名换成可读名。
// 证据来源（见 AUTO-NAMING.md / NAMING-METHOD.md）：
//   S 解构键        {realName: local}          -> local 就是 realName
//   S this.name     this.name="X"              -> class 名就是 X
//   A 对象字面量键   {key: local}               -> local 承载 key 字段
//   B 成员初始化     const x = o.PROP           -> x 就是 o.PROP（剔除内置/通用属性名）
//   B 函数挂属性     {PROP: function(){}} / o.PROP = function(){} -> 函数名 = PROP（有遮蔽守卫）
//   C 别名           const x = readableIdent    -> x 就是 readableIdent
//   C new 类         const x = new ReadableClass() -> x = camelCase(ReadableClass)
//   C 回调参数       .map((e)=>{}) -> item / index / acc（数组高阶方法约定，作用域内安全）
//   C catch 参数     catch(e) -> catch(error)（约定，作用域内安全）
// 安全规则：
//   1) 同一绑定出现【互相冲突】的多个证据 -> 放弃改名（歧义）
//   2) 只改“看起来是压缩名”的绑定（长度<=3 / 含 $ / 含数字）
//   3) 默认新名在【整个模块内全局唯一】；标 scoped 的规则只要求【作用域子树内不重名】
//      —— 两者都杜绝遮蔽（shadowing）改义
//   4) 输出重新解析，解析失败 -> 退回原文
//   5) 超大模块（>1MB）跳过 AST 改名，复用 full/ 的格式化结果
//
// 用法:
//   node deminify.mjs                 # 全部模块
//   node deminify.mjs --shard 0 6     # 只处理第 0/6 片（并行分片用）
//   node deminify.mjs --only m0869    # 只处理文件名含 m0869 的模块
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as _types from "@babel/types";

const traverse = _traverse.default ?? _traverse;
const generate = _generate.default ?? _generate;
const t = _types.default ?? _types;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.RE_ROOT ? path.resolve(process.env.RE_ROOT) : path.resolve(__dirname, "..");
const MODDIR = process.env.RE_MODULES ? path.resolve(process.env.RE_MODULES) : path.resolve(ROOT, "..", "claudecode283", "modules");
const OUT = path.join(ROOT, "deminified");
const FULLDIR = path.join(ROOT, "full");
fs.mkdirSync(OUT, { recursive: true });

const args = process.argv.slice(2);
const argVal = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const ONLY = argVal("--only");
const LIMIT = argVal("--limit") ? parseInt(argVal("--limit"), 10) : null;
const QUIET = args.includes("--quiet");
const SHARD = argVal("--shard") ? argVal("--shard").split("/").map(Number) : null;
const shardIdx = SHARD ? SHARD[0] : 0;
const shardNum = SHARD ? SHARD[1] : 1;
const BIG_LIMIT = 1000000;

const PARSE_OPTS = {
  sourceType: "module",
  allowAwaitOutsideFunction: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  allowUndeclaredExports: true,
  allowImportExportEverywhere: true,
  errorRecovery: false,
  plugins: [],
};
const GEN_OPTS = { comments: true, compact: false, concise: false, retainLines: false, jsescOption: { minimal: true } };

const RESERVED = new Set(["do","if","in","for","let","new","try","var","case","else","enum","eval","null","this","true","void","with","await","break","catch","class","const","false","super","throw","while","yield","delete","export","import","public","return","static","switch","typeof","default","extends","finally","package","private","protected","interface","function","arguments","continue","debugger","instanceof","implements","of","as","from","get","set","async"]);

// 通用/内置属性名：作为变量名没有信息量，剔除
const GENERIC = new Set(["prototype","constructor","length","name","value","values","call","apply","bind","toString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","indexOf","lastIndexOf","slice","substring","substr","trim","includes","startsWith","endsWith","create","require","resolve","Symbol","then","catch","map","filter","forEach","reduce","push","pop","shift","unshift","splice","concat","join","split","replace","replaceAll","match","matchAll","test","exec","toLowerCase","toUpperCase","charAt","charCodeAt","codePointAt","padStart","padEnd","repeat","assign","keys","entries","freeze","defineProperty","getPrototypeOf","setPrototypeOf","getOwnPropertyNames","getOwnPropertyDescriptor","getOwnPropertySymbols","isArray","from","of","all","race","allSettled","any","parse","stringify","now","floor","ceil","round","min","max","abs","random","isInteger","isFinite","NaN","signal","aborted","addEventListener","removeEventListener","dispatchEvent","write","read","close","end","on","once","emit","next","done","error","message","stack","code","type","id","key","path","url","data","body","text","status","headers","method","host","port","query","hash","href","origin","size","cache","root","__data__","Uint8Array"]);
const CB_METHODS = new Set(["map","filter","forEach","find","findIndex","some","every","flatMap","reduce","reduceRight","sort"]);

const LEVEL_RANK = { S: 4, A: 3, B: 2, C: 1 };

function keyName(node) {
  if (!node) return null;
  if (node.type === "Identifier") return node.name;
  if (node.type === "StringLiteral") return node.value;
  return null;
}
function memberProp(node) {
  if (!node || node.type !== "MemberExpression") return null;
  if (!node.computed && node.property && node.property.type === "Identifier") return node.property.name;
  if (node.computed && node.property && node.property.type === "StringLiteral") return node.property.value;
  return null;
}
function validIdent(s) { return typeof s === "string" && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s) && !RESERVED.has(s); }
function looksMangled(name) {
  if (RESERVED.has(name)) return false;
  if (name.length <= 3) return true;
  if (name.includes("$")) return true;
  if (/[0-9]/.test(name) && name.length <= 5) return true;
  return false;
}
const lowerFirst = (s) => (s && /^[A-Z]/.test(s) ? s[0].toLowerCase() + s.slice(1) : s);

// 绑定的作用域子树里是否出现过某个名字（用于 scoped 安全判据）
function subtreeHasName(b, name) {
  let found = false;
  const root = b.scope.path;
  if (!root || typeof root.traverse !== "function") return true; // 保守：查不了就当作有
  root.traverse({
    Identifier(q) { if (q.node.name === name && q.node !== b.identifier) { found = true; q.stop(); } },
  });
  return found;
}

function deminify(src) {
  const ast = parse(src, PARSE_OPTS);
  const sugg = new Map();
  const add = (b, name, level, why, opts) => {
    if (!b || !validIdent(name)) return;
    const scoped = !!(opts && opts.scoped);
    const cur = sugg.get(b);
    if (!cur) { sugg.set(b, { name, level, why, conflict: false, scoped }); return; }
    if (cur.name === name) { if (LEVEL_RANK[level] > LEVEL_RANK[cur.level]) { cur.level = level; cur.why = why; } cur.scoped = cur.scoped && scoped; return; }
    cur.conflict = true;
  };

  const bindingNames = new Set();
  const refNames = new Set();
  const b1cands = [];

  traverse(ast, {
    Identifier(p) { if (p.isBindingIdentifier()) bindingNames.add(p.node.name); },
    ReferencedIdentifier(p) { refNames.add(p.node.name); },

    ObjectProperty(p) {
      if (p.node.computed) return;
      const key = keyName(p.node.key);
      if (!validIdent(key)) return;
      let v = p.node.value;
      if (v.type === "AssignmentPattern") v = v.left;
      if (v.type === "Identifier") {
        const b = p.scope.getBinding(v.name);
        if (b) {
          const isPattern = p.parentPath.isObjectPattern();
          add(b, key, isPattern ? "S" : "A", isPattern ? "解构键 {" + key + ": " + v.name + "}" : "对象字面量键 {" + key + ": " + v.name + "}");
        }
      } else if (p.node.value.type === "FunctionExpression" && !p.node.value.id) {
        b1cands.push({ fnNode: p.node.value, name: key });
      }
    },

    AssignmentExpression(p) {
      const L = p.node.left, R = p.node.right;
      if (L.type === "MemberExpression" && L.object.type === "ThisExpression" && !L.computed
          && keyName(L.property) === "name" && R.type === "StringLiteral" && validIdent(R.value)) {
        const cls = p.findParent((x) => x.isClassDeclaration() || x.isClassExpression());
        if (cls && cls.node.id && cls.node.id.name) {
          const b = cls.scope.getBinding(cls.node.id.name);
          add(b, R.value, "S", "this.name = \"" + R.value + "\"");
        }
      }
      if (R.type === "FunctionExpression" && !R.id) {
        const prop = memberProp(L);
        if (prop && validIdent(prop)) b1cands.push({ fnNode: R, name: prop });
      }
    },

    VariableDeclarator(p) {
      const id = p.node.id, init = p.node.init;
      if (!id || id.type !== "Identifier" || !init) return;
      const b = p.scope.getBinding(id.name);
      if (!b) return;
      const prop = memberProp(init);
      if (prop && validIdent(prop) && !GENERIC.has(prop)) add(b, prop, "B", "成员初始化 " + id.name + " = ?." + prop);
      if (init.type === "Identifier" && validIdent(init.name) && !looksMangled(init.name) && init.name !== id.name)
        add(b, init.name, "C", "别名 " + id.name + " = " + init.name);
      if (init.type === "NewExpression" && init.callee.type === "Identifier" && validIdent(init.callee.name) && !looksMangled(init.callee.name)) {
        const nm = lowerFirst(init.callee.name);
        if (validIdent(nm)) add(b, nm, "C", "new " + init.callee.name + "() -> " + nm);
      }
    },

    CallExpression(p) {
      const callee = p.node.callee;
      if (!callee || callee.type !== "MemberExpression" || callee.computed) return;
      const m = callee.property && callee.property.type === "Identifier" ? callee.property.name : null;
      if (!m || !CB_METHODS.has(m)) return;
      const argPath = p.get("arguments.0");
      if (!argPath || !argPath.node || (argPath.node.type !== "ArrowFunctionExpression" && argPath.node.type !== "FunctionExpression")) return;
      const params = argPath.node.params;
      const pick = (i) => m === "sort" ? (i === 0 ? "itemA" : "itemB") : (m === "reduce" || m === "reduceRight") ? (i === 0 ? "acc" : "item") : (i === 0 ? "item" : "index");
      for (let i = 0; i < params.length && i < 2; i++) {
        const pr = params[i];
        if (!pr || pr.type !== "Identifier") continue;
        const b = argPath.scope.getBinding(pr.name);
        if (b) add(b, pick(i), "C", m + " 回调参数 #" + i + " -> " + pick(i), { scoped: true });
      }
    },

    CatchClause(p) {
      const pr = p.node.param;
      if (pr && pr.type === "Identifier") {
        const b = p.scope.getBinding(pr.name);
        if (b) add(b, "error", "C", "catch 参数约定 -> error", { scoped: true });
      }
    },
  });

  // B1：给"挂在具名属性上的匿名函数"命名（仅当该名字在模块里没被当变量引用/绑定，避免遮蔽）
  for (const c of b1cands) {
    if (!c.fnNode.id && validIdent(c.name) && !refNames.has(c.name) && !bindingNames.has(c.name)) {
      c.fnNode.id = t.identifier(c.name);
    }
  }

  const taken = new Set([...bindingNames, ...refNames]);
  const unique = (base) => { let n = base, i = 2; while (taken.has(n)) n = base + "_" + (i++); taken.add(n); return n; };

  const renamed = [], skipped = [];
  for (const [b, s] of sugg) {
    if (!b || !b.identifier) continue;
    const oldName = b.identifier.name;
    if (s.conflict) { skipped.push({ old: oldName, want: s.name, why: "conflict" }); continue; }
    if (oldName === s.name) continue;
    if (!looksMangled(oldName)) continue;
    let newName;
    if (s.scoped) {
      if (subtreeHasName(b, s.name)) { skipped.push({ old: oldName, want: s.name, why: "scoped-name-in-use" }); continue; }
      newName = s.name; taken.add(newName);
    } else {
      newName = unique(s.name);
    }
    try { b.scope.rename(oldName, newName); }
    catch (e) { skipped.push({ old: oldName, want: s.name, why: "rename: " + e.message }); continue; }
    renamed.push({ old: oldName, new: newName, level: s.level, why: s.why });
  }

  const out = generate(ast, GEN_OPTS, src).code;
  return { out, renamed, skipped };
}

let files = fs.readdirSync(MODDIR).filter((f) => f.endsWith(".js")).sort()
  .filter((f) => !ONLY || f.includes(ONLY));
if (shardNum > 1) files = files.filter((_, i) => i % shardNum === shardIdx);
if (LIMIT) files = files.slice(0, LIMIT);

const report = [];
const allNames = [];
let nRenamed = 0, nFellBack = 0, nUnchanged = 0, nBig = 0;
const t0 = Date.now();

for (const f of files) {
  const src = fs.readFileSync(path.join(MODDIR, f), "utf8").replace(/\u0000/g, " ");
  let out = src, renamed = [], skipped = [], fell = false, err = null, big = false;

  if (src.length > BIG_LIMIT) {
    big = true; nBig++;
    const fullPath = path.join(FULLDIR, f);
    out = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf8") : src;
  } else {
    try {
      const r = deminify(src);
      out = r.out; renamed = r.renamed; skipped = r.skipped;
      parse(out, PARSE_OPTS);
    } catch (e) {
      err = e.message; fell = true; nFellBack++; out = src; renamed = [];
    }
  }

  fs.writeFileSync(path.join(OUT, f), out);
  if (renamed.length) { nRenamed += renamed.length; for (const r of renamed) allNames.push({ file: f, ...r }); }
  else if (!fell && !big) nUnchanged++;
  report.push({ file: f, in: src.length, out: out.length, renamed: renamed.length, skipped: skipped.length, fellBack: fell, big, err });
  if (!QUIET && renamed.length) console.log("  " + f + "  renamed " + renamed.length);
}

const sfx = shardNum > 1 ? "." + shardIdx : "";
fs.writeFileSync(path.join(ROOT, "deminify-report" + sfx + ".json"), JSON.stringify(report, null, 2));
fs.writeFileSync(path.join(ROOT, "deminify-names" + sfx + ".json"), JSON.stringify(allNames, null, 2));
const secs = ((Date.now() - t0) / 1000).toFixed(1);
console.log("[shard " + shardIdx + "/" + shardNum + "] modules: " + files.length + "  bindings renamed: " + nRenamed + "  unchanged: " + nUnchanged + "  big(skipped): " + nBig + "  fellBack: " + nFellBack + "  (" + secs + "s)");
for (const r of report) if (r.fellBack) console.log("  verbatim:", r.file, "|", r.err);