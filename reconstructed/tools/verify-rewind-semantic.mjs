import fs from "node:fs";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default ?? _traverse;
const A = "D:/git_repos/claude_hack/reconstructed/deminified/m0357_0xc63ba04.js";
const B = "D:/git_repos/claude_hack/reconstructed/deminified-rewind/m0357_0xc63ba04.js";
const OPTS = { sourceType:"module", allowAwaitOutsideFunction:true, allowReturnOutsideFunction:true, allowSuperOutsideMethod:true, allowUndeclaredExports:true, allowImportExportEverywhere:true };
function profile(file){
  const ast = parse(fs.readFileSync(file,"utf8"), OPTS);
  const nodeTypes = new Map(), strings = new Map(), props = new Map();
  const bump = (m,k)=>m.set(k,(m.get(k)||0)+1);
  traverse(ast, {
    enter(p){
      bump(nodeTypes, p.node.type);
      if (p.node.type==="StringLiteral") bump(strings, p.node.value);
      if (p.node.type==="NumericLiteral") bump(strings, "#num:"+p.node.value);
      if ((p.node.type==="ObjectProperty"||p.node.type==="ObjectMethod"||p.node.type==="ClassMethod"||p.node.type==="ClassProperty")){
        const k=p.node.key; const kn = k.type==="Identifier"?k.name:(k.type==="StringLiteral"?k.value:null);
        if (kn!=null) bump(props, kn);
      }
    }
  });
  return { nodeTypes, strings, props };
}
function diff(ma, mb, label){
  const keys = new Set([...ma.keys(), ...mb.keys()]);
  let bad = 0;
  for (const k of keys){
    const a = ma.get(k)||0, b = mb.get(k)||0;
    if (a!==b){ bad++; if (bad<=20) console.log(`  ${label} DIFF ${JSON.stringify(k)}: ${a} -> ${b}`); }
  }
  console.log(`${label}: ${bad} differing keys`);
  return bad;
}
const pa = profile(A), pb = profile(B);
let total = 0;
total += diff(pa.nodeTypes, pb.nodeTypes, "nodeType");
total += diff(pa.strings, pb.strings, "string/num literal");
total += diff(pa.props, pb.props, "property/class key");
console.log("TOTAL differing keys:", total);