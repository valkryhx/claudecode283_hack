# 被跳过的 marker span — 逐字节归档

本文件由 `tools/carve_skipped_spans.py` 生成，记录 `extract_bun_modules.py` 因不属于单一源码模块而跳过的 span。

**没有删除任何字节**：下面每个输出文件都是输入文件的逐字节切片，偏移可复现。


## marker 1

| 项 | 值 |
| --- | --- |
| 文件偏移 | `0x84910c6` .. `0x1120cbb8` |
| 大小 | 148355826 B (141.48 MB) |
| 起始段 | `.rdata` |
| 结束段 | `.bun` |
| 跨段 | 15 段：.rdata 10.61 MB，.data 0.12 MB，.pdata 1.65 MB，.bunaot 0.00 MB，.bunblt 2.64 MB，.bunfeat 0.00 MB，.bunid 0.00 MB，.fptable 0.00 MB，.tls 0.02 MB，_RDATA 0.00 MB，__DATA,_ 0.02 MB，__DATA,_ 0.02 MB，.rsrc 0.19 MB，.reloc 0.29 MB，.bun 125.93 MB |

**开头 512 字节（原样）：**

```
// @bun @bytecode @bun-cjs
(function(exports, require, module, __filename, __dirname) {"use strict";
(() => {
(()=>{/* //  ( */
})();})();
})
}, {
  main: 
});....(import.meta.url,[..."..".],[..[".."..,..],0);
Iinternal error: entered unreachable code: Unexpected type in source file ..__reExport.export_..infallible: VecWriter never errorstext/css!Error generating CSS for import: ..css ast present.. creating outdir .. while saving file ...writing file .... creating outdir .. while saving sourcemap ...writing
```

**可读文本块（>= 8 KB，逐字节另存）：** 40 个，合计 3.47 MB

| # | 文件 | 偏移 | 大小 | 开头 |
| ---: | --- | --- | ---: | --- |
| 0 | `m0001_text_00_0x84d00c6.bin` | `0x84d00c6` | 16384 | `ypeLiteral TSTypeParameterDeclaration TSTypeReference TSUndefinedKeywo` |
| 1 | `m0001_text_01_0x84e10c6.bin` | `0x84e10c6` | 24576 | `on:b allowNew:b allowLiteral:b allowObject:b) import/no-commonjs f(& a` |
| 2 | `m0001_text_02_0x84eb0c6.bin` | `0x84eb0c6` | 12288 | `tions":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"` |
| 3 | `m0001_text_03_0x84f30c6.bin` | `0x84f30c6` | 45056 | `oderInitAudioEncoderSupportAudioListenerAudioNodeAudioNodeOptionsAudio` |
| 4 | `m0001_text_04_0x86340c6.bin` | `0x86340c6` | 57344 | `udio/mpegaudio/opusaudio/pcmaaudio/pcmuaudio/scipaudio/silkaudio/smv0a` |
| 5 | `m0001_text_05_0x86430c6.bin` | `0x86430c6` | 20480 | `ication/x-ms-applicationapplication/vnd.lotus-approachapplication/x-fr` |
| 6 | `m0001_text_06_0x878d0c6.bin` | `0x878d0c6` | 8192 | `me; pass `--force` to replace 14 ... sandbox user provisioning failed ` |
| 7 | `m0001_text_07_0x87910c6.bin` | `0x87910c6` | 12288 | `... `marker_user_sid`)sandbox-user-sidRead `{denyRead:[...], denyWrite` |
| 8 | `m0001_text_08_0x879c0c6.bin` | `0x879c0c6` | 49152 | ` failed: m.0 <= m.1error reading -f/--file from stdin: stdin has alrea` |
| 9 | `m0001_text_09_0x87a90c6.bin` | `0x87a90c6` | 16384 | `t\fP repository are stored or copied somewhere, but where the reposito` |
| 10 | `m0001_text_10_0x87ae0c6.bin` | `0x87ae0c6` | 8192 | `ation time on a file. Always single-threaded. .PP If the chosen (manua` |
| 11 | `m0001_text_11_0x87b20c6.bin` | `0x87b20c6` | 8192 | `ar file. .TP 12 \fBmatch\fP A message that indicates a match was found` |
| 12 | `m0001_text_12_0x87b50c6.bin` | `0x87b50c6` | 8192 | `g implies \flag{no-ignore-parent} for source control ignore files as w` |
| 13 | `m0001_text_13_0x87ce0c6.bin` | `0x87ce0c6` | 8192 | `ritableStreamDefaultWriterZSTD_error_dictionary_wrongZSTD_error_dstSiz` |
| 14 | `m0001_text_14_0x88070c6.bin` | `0x88070c6` | 12288 | `uote;Or;Oscr;Oslash;Otilde;Otimes;Ouml;OverBar;OverBrace;OverBracket;O` |
| 15 | `m0001_text_15_0x88210c6.bin` | `0x88210c6` | 12288 | `nsBehindEntryChecksCompiledShorterEntrancesCreatedCallsThatSkipAnswere` |
| 16 | `m0001_text_16_0x88350c6.bin` | `0x88350c6` | 57344 | `nown[], k: number): T;  function firstSearchedIndex(fromIndex: number ` |
| 17 | `m0001_text_17_0x88480c6.bin` | `0x88480c6` | 8192 | `a setter.declare it as a field, a getter or a setter in the class or t` |
| 18 | `m0001_text_18_0x8b0f0c6.bin` | `0x8b0f0c6` | 143360 | `apturedPromise, reason);             });     } catch (error) {        ` |
| 19 | `m0001_text_19_0x8e520c6.bin` | `0x8e520c6` | 8192 | ` swaps             NUL with LF in the input and the output.  When comb` |
| 20 | `m0001_text_20_0x8e550c6.bin` | `0x8e550c6` | 16384 | `m FILE and skip files and directories whose name             matches o` |
| 21 | `m0001_text_21_0x8e6c0c6.bin` | `0x8e6c0c6` | 16384 | ` because your code never uses it by name. A name known only at run tim` |
| 22 | `m0001_text_22_0x8e760c6.bin` | `0x8e760c6` | 12288 | `]e    named capture end offset  %q          quoted matching pattern   ` |
| 23 | `m0001_text_23_0x90f50c6.bin` | `0x90f50c6` | 2740224 | ` doGenerateRoute(type, noClient, i, layouts, pageModule, null);   }));` |
| 24 | `m0001_text_24_0x962a0c6.bin` | `0x962a0c6` | 57344 | `over the ' +           'nearest keyed Box',       )     }     return {` |
| 25 | `m0001_text_25_0x963a0c6.bin` | `0x963a0c6` | 28672 | `th')   const VIEWS = Object.freeze({     __proto__: null,     Int8Arra` |
| 26 | `m0001_text_26_0x96880c6.bin` | `0x96880c6` | 20480 | `rror)    function surfaceOf(id, instance) {     const surface = { __pr` |
| 27 | `m0001_text_27_0x96c10c6.bin` | `0x96c10c6` | 8192 | `is [System.Management.Automation.Language.ArrayExpressionAst] -or     ` |
| 28 | `m0001_text_28_0x96da0c6.bin` | `0x96da0c6` | 8192 | `ic - Privilege escalation paths - Session management flaws - JWT token` |
| 29 | `m0001_text_29_0x98a70c6.bin` | `0x98a70c6` | 12288 | `ignores the proxy). Nothing inside the sandbox changes it: do not try ` |
| 30 | `m0001_text_30_0x9b3e0c6.bin` | `0x9b3e0c6` | 8192 | `t8yQqSCWpLNDDjACV52p/99hwMgBptxGF7XgaXFRnl9xMLY6sZyXHrXVaKIYTeH4uo8tlI` |
| 31 | `m0001_text_31_0x9bb30c6.bin` | `0x9bb30c6` | 57344 | `rupts, or -p giving up on a background subagent still running at its w` |
| 32 | `m0001_text_32_0x9e3a0c6.bin` | `0x9e3a0c6` | 8192 | `ing struct system trace trap threadfor threadendfor threadbegin thread` |
| 33 | `m0001_text_33_0x9e470c6.bin` | `0x9e470c6` | 12288 | `rm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430` |
| 34 | `m0001_text_34_0x9e4b0c6.bin` | `0x9e4b0c6` | 16384 | `vander wilkinson max min nanmax nanmin mean nanmean type table readtab` |
| 35 | `m0001_text_35_0x9e560c6.bin` | `0x9e560c6` | 12288 | `..SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE IN` |
| 36 | `m0001_text_36_0x9e660c6.bin` | `0x9e660c6` | 12288 | `rplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov` |
| 37 | `m0001_text_37_0x9e720c6.bin` | `0x9e720c6` | 12288 | `movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps ` |
| 38 | `m0001_text_38_0x9fa20c6.bin` | `0x9fa20c6` | 24576 | `}     .container { max-width: 800px; margin: 0 auto; }     h1 { font-s` |
| 39 | `m0001_text_39_0x9fea0c6.bin` | `0x9fea0c6` | 16384 | `.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 Tables\/\/|^` |

## marker 2882

| 项 | 值 |
| --- | --- |
| 文件偏移 | `0x144f842f` .. `0x148d56a0` |
| 大小 | 4051569 B (3.86 MB) |
| 起始段 | `.bun` |

**开头 512 字节（原样）：**

```
// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import{Qpi,NXr,PEn,OEn,FXr,Dlt,Xir,Jir}from"B:/~BUN/root/chunk-sa45ym56.js";export{Xir as EncryptJWT,Dlt as SignJWT,Jir as decodeProtectedHeader,Qpi as errors,PEn as importJWK,NXr as importPKCS8,FXr as jwtDecrypt,OEn as jwtVerify};
.// atom-brand/atom-brand.js
const ATOM_BRAND = Symbol.for('claude-code.state.atom');

// 
```

**可读文本块（>= 8 KB，逐字节另存）：** 7 个，合计 0.14 MB

| # | 文件 | 偏移 | 大小 | 开头 |
| ---: | --- | --- | ---: | --- |
| 0 | `m2882_text_00_0x1460742f.bin` | `0x1460742f` | 8192 | `OpenTelemetry\API\Trace\Propagation\TraceContextPropagator;. use OpenT` |
| 1 | `m2882_text_01_0x1460c42f.bin` | `0x1460c42f` | 8192 | `       msg = result.result.message.             text = next((b.text fo` |
| 2 | `m2882_text_02_0x1464642f.bin` | `0x1464642f` | 57344 | `e model-influenced bytes (case ids, error text that. // can echo model` |
| 3 | `m2882_text_03_0x146cc42f.bin` | `0x146cc42f` | 32768 | `give a file longer than that a slice of its own. Small code still gets` |
| 4 | `m2882_text_04_0x1478c42f.bin` | `0x1478c42f` | 20480 | `could run the tests." The whole point of autonomous operation is that ` |
| 5 | `m2882_text_05_0x147a042f.bin` | `0x147a042f` | 12288 | `'. > ```. >. > ## Verify. >. > ```bash. > python -c 'import mylib; pri` |
| 6 | `m2882_text_06_0x1486f42f.bin` | `0x1486f42f` | 8192 | `eased'; cost once it has finished a turn. */ declare function listCont` |

**真实 JS 头部**（carved 4482 B module head, 4047087 B binary tail）→ `m2882_head_0x144f842f.js`


```js
// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import{Qpi,NXr,PEn,OEn,FXr,Dlt,Xir,Jir}from"B:/~BUN/root/chunk-sa45ym56.js";export{Xir as EncryptJWT,Dlt as SignJWT,Jir as decodeProtectedHeader,Qpi as errors,PEn as importJWK,NXr as importPKCS8,FXr as jwtDecrypt,OEn as jwtVerify};
 // atom-brand/atom-brand.js
const ATOM_BRAND = Symbol.for('claude-code.state.atom');

// atom-value-of/atom-value-of.js
function atomValueOf(atom, stored) {
    if (atom.shape === undefined) {
        return stored === undefined ? atom.initial : stored;
    }
    const kept = stored;
    const isSameShape = kept?.shape === atom.shape && kept.value !== undefined;
    return isSameShape ? kept.value : atom.initial;
}

// atom/atom.js
export const atom = (ref, initial, options) => Object.freeze({
    [ATOM_BRAND]: true,
    ref: frozenRef(ref),
    initial: deepFrozen(initial),
    ...(options?.shape !== undefined && { shape: options.shape }),
});

// deep-frozen/deep-frozen.js
function deepFrozen(value) {
    if (typeof value !== 'object' || value === null || Object.isFrozen(value)) {
        return value;
    }
    for (const member of Object.values(value)) {
        deepFrozen(member);
    }
    return Object.freeze(value);
}

// derive/derive.js
export const derive = (sources, compute) => {
    const memo = {};
    return Object.freeze({
        [DERIVED_BRAND
```
