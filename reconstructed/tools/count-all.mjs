import fs from "node:fs";
import path from "node:path";
import * as acorn from "acorn";
const MODDIR = "D:/git_repos/claude_hack/claudecode283/modules";
const files = fs.readdirSync(MODDIR).filter((f) => f.endsWith(".js"));
let total = 0, parseFail = 0, big = 0;
const fails = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(MODDIR, f), "utf8").replace(/\u0000/g, " ");
  if (src.length > 200000) big++;
  let ast;
  try { ast = acorn.parse(src, { ecmaVersion: "latest", sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true }); }
  catch (e) { parseFail++; fails.push([f, e.message]); continue; }
  let n = 0;
  for (const node of ast.body) {
    let d = node.type === "ExportNamedDeclaration" ? node.declaration : node;
    if (!d) continue;
    if (d.type === "FunctionDeclaration" || d.type === "ClassDeclaration") n += 1;
    else if (d.type === "VariableDeclaration") n += d.declarations.filter((x) => x.id && x.id.type === "Identifier").length;
  }
  total += n;
}
console.log(`modules: ${files.length}`);
console.log(`top-level declarations (total): ${total}`);
console.log(`parse failures: ${parseFail}`);
console.log(`modules >200KB: ${big}`);
for (const [f, m] of fails.slice(0, 12)) console.log("  FAIL", f, m);
