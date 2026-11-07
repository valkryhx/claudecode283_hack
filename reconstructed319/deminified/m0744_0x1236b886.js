// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Cy, J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { P, Q, nf } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { NR } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Q1 } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { xpe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { yf, id } from "B:/~BUN/root/chunk-65j2302z.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { iOr, ZZe, I$t, h8i, Gt, v, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { RE } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { sKe, Qt, qm as name, Xe, hr, MV, DV, rLs, xJ, Vet, iu, sCo, $_t, rN, sj, eP, t5, Jd, LV } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Fc } from "B:/~BUN/root/chunk-trd3c21n.js";
import { z2, te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { vXr as beginPrefix_2, zJo as end_2, EXr as beginPrefix, GJo as end, Dir, TXr, Fpi, Ilt, p6t, Hpi, xAt, RXr, M1e, Lir, AXr, VJo, $pi, KJo, qJo, Nir, Upi, Bpi, _En, Q3e, z8, GK, PXr, bEn, jpi, SEn, QJo } from "B:/~BUN/root/chunk-gnvjfqfc.js";
import { y_ } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { xu, RLe, pen, mCe, C1, ELt, Gvr, t3, Tmt } from "B:/~BUN/root/chunk-17caj8fw.js";
import { smo, JJe, oee, JLn, cmo, QLn, ZP, _ue, C_e, Au } from "B:/~BUN/root/chunk-hhd7smkx.js";
import { Ege } from "B:/~BUN/root/chunk-thggwabf.js";
import { yGe, Tb, A1i, Lmt, W2, fR, vue as path_2, Jws, Qws, gg, fEr, Fmt, i3, pEr, Zws, eks, tks, nks, rks, oks, sks, x1i, P1i, $q, HLt, hEr, gEr, Hmt, Fen, aks, $mt, $mo, dee, D1i, gX, tz, L1i, nz, cee, lks, N1i, $en, IF, NS, vNn } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { DFt } from "B:/~BUN/root/chunk-b5ry9py2.js";
import { SX } from "B:/~BUN/root/chunk-jbf2dde1.js";
import { AAt } from "B:/~BUN/root/chunk-syedbbsr.js";
import { f6t, wXr, WJo } from "B:/~BUN/root/chunk-5jbxkytw.js";
import { KSr } from "B:/~BUN/root/chunk-xfm62fqq.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { T1, Fm } from "B:/~BUN/root/chunk-vdqpev1m.js";
import { as } from "B:/~BUN/root/chunk-w4y83tgx.js";
import { Ugt, aYi } from "B:/~BUN/root/chunk-3xtmwvra.js";
import { ge, ws, qc, vr, Ft, Ec } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { o, E, I, oe, C, u, xt, Be, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Ewe } from "B:/~BUN/root/chunk-x3gsqe09.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { U, Fw, L } from "B:/~BUN/root/chunk-5ha2avah.js";
function eEn() {
  return NR() ? "slack_example_com" : "claude_ai_Slack_beta";
}
import { extname as po } from "path";
var BIe = " The server refuses force:true over a version saved from inside the page; only a publish built on that version is accepted.";
function Vr(e) {
  let n = e.trimEnd();
  if (!n.startsWith("<!--") || !n.endsWith("-->") || n.length < 7) return !1;
  let r = n.slice(4, -3);
  return !r.startsWith(">") && !r.startsWith("->") && !r.includes("-->") && !r.includes("--!>") && !r.includes("<!--") && !r.endsWith("<!-");
}
function tEn() {
  let CLAUDE_CODE_ACCOUNT_UUID = i.CLAUDE_CODE_ACCOUNT_UUID,
    CLAUDE_CODE_ORGANIZATION_UUID = i.CLAUDE_CODE_ORGANIZATION_UUID;
  if (CLAUDE_CODE_ACCOUNT_UUID && CLAUDE_CODE_ORGANIZATION_UUID) return {
    accountUuid: CLAUDE_CODE_ACCOUNT_UUID.toLowerCase(),
    organizationUuid: CLAUDE_CODE_ORGANIZATION_UUID.toLowerCase()
  };
  let r = yGe();
  if (!r?.accountUuid) return;
  return {
    accountUuid: r.accountUuid.toLowerCase(),
    organizationUuid: r.organizationUuid?.toLowerCase() ?? null
  };
}
var Yr = p(() => u({
    accountUuid: o(),
    organizationUuid: o().nullable(),
    version: o(),
    capabilities: C(o()),
    fetchedAt: E()
  })),
  ha = p(() => u({
    accountUuid: o(),
    organizationUuid: o().nullable(),
    status: E(),
    deniedAt: E(),
    tokenExpiresAt: E()
  }));
function Gr(e) {
  let n = tEn();
  if (n === void 0 || !e.success || e.data.accountUuid !== n.accountUuid || e.data.organizationUuid !== n.organizationUuid) return;
  return e.data;
}
function pJo() {
  return Gr(Yr().safeParse(fe().cachedArtifactRoster));
}
function Tpi() {
  return Gr(ha().safeParse(fe().artifactRosterDenied));
}
function nXr() {
  let roster = te().roster;
  if (roster !== void 0) return {
    roster: roster,
    source: "session"
  };
  let roster_2 = i.CLAUDE_CODE_REMOTE ? void 0 : pJo();
  return roster_2 === void 0 ? void 0 : {
    roster: roster_2,
    source: "disk"
  };
}
var ga = 3600000;
function jIe(e) {
  let {
    session: session,
    epoch: epoch,
    roster: roster_3,
    storageV5: storageV5
  } = e;
  if (te() !== session || session.accountEpoch !== epoch) return {
    adopted: !1,
    persisted: Promise.resolve()
  };
  if (session.roster = roster_3, roster_3.capabilities.includes("assets")) session.assetsOnRoster = !0;
  if (i.CLAUDE_CODE_REMOTE) return {
    adopted: !0,
    persisted: Promise.resolve()
  };
  return {
    adopted: !0,
    persisted: mJo(session, epoch, storageV5, (y, S) => {
      let w = Yr().safeParse(S.cachedArtifactRoster),
        A = w.success ? w.data : void 0,
        fetchedAt = Date.now();
      if (S.artifactRosterDenied === void 0 && A !== void 0 && A.accountUuid === y.accountUuid && A.organizationUuid === y.organizationUuid && A.version === roster_3.version && Fw(A.capabilities, roster_3.capabilities) && A.fetchedAt <= fetchedAt && fetchedAt - A.fetchedAt < ga) return;
      return {
        cachedArtifactRoster: {
          ...y,
          version: roster_3.version,
          capabilities: [...roster_3.capabilities],
          fetchedAt: fetchedAt
        },
        artifactRosterDenied: void 0
      };
    }).catch(y => {
      t(`Could not save the artifact capability roster to config; it will be fetched again next start: ${d(y)}`);
    })
  };
}
async function mJo(e, n, r, s) {
  let h = tEn();
  if (h === void 0 || e.accountEpoch !== n) return;
  await Le(b => {
    if (e.accountEpoch !== n || tEn()?.accountUuid !== h.accountUuid) return b;
    let y = s(h, b);
    return y === void 0 ? b : {
      ...b,
      ...y
    };
  }, r);
}
function Xr() {
  return !v("tengu_pewter_canteen", !1);
}
var ma = "data-chart-runtime";
function Kr(e) {
  return e.includes(ma);
}
function ba(e) {
  return xAt(e);
}
function Zr(e) {
  return _En(e) >= 0;
}
function Jr(e) {
  let n = [],
    r = e.indexOf(Dir),
    s = -1;
  while (r >= 0) {
    let h = r + Dir.length;
    if (s < h) {
      if (s = e.indexOf(TXr, h), s < 0) break;
    }
    let b = e.indexOf(Dir, h);
    if ((b < 0 || b > s) && Zr(e.slice(h, s))) n.push([r, s + TXr.length]);
    r = b;
  }
  return Lir(e, n);
}
var qr = `(function () {
  if (typeof Chart === 'undefined') return;
  var specEl = document.querySelector('script[type="application/json"][data-chart-runtime]');
  var el = document.getElementById('primary-chart');
  if (!specEl || !el) return;
  var spec;
  try { spec = JSON.parse(specEl.textContent); } catch (e) { return; }
  var series = (spec.series || []).filter(function (s) { return Array.isArray(s.points) && s.points.length; });
  if (!series.length) return; /* keep the fallback's No-data state */

  var chart = null;
  /* Rebuilds the whole config on every call: resolved colors are baked into
     the config at creation, so a theme flip must re-read the custom
     properties (getComputedStyle re-called) and recreate the chart.
     Deterministic: same data, same pixels PER THEME. */
  function render() {
  var rootStyle = getComputedStyle(document.documentElement);
  function cssVar(name, fb) {
    var v = rootStyle.getPropertyValue(name).trim();
    return v || fb;
  }
  function resolveColor(c, fb) {
    c = (c || fb || '').trim();
    var m = /^var\\((--[^,)]+)(?:,([^)]*))?\\)$/.exec(c);
    if (m) return cssVar(m[1], (m[2] || '').trim() || '#2563eb');
    return c || '#2563eb';
  }
  var accent = cssVar('--accent', '#2563eb');
  var inkMuted = cssVar('--ink-muted', '#64748b');
  var gridLine = cssVar('--line', '#e2e8f0');
  var slicePalette = [accent, cssVar('--good', '#059669'), '#d97706', '#7c3aed', inkMuted, '#0ea5e9', '#db2777'];

  var type = spec.type === 'bar' ? 'bar' : spec.type === 'donut' ? 'doughnut' : 'line';
  /* Category scale aligns data by index, so a tick array shorter or longer
     than the point list would drop or misplace points \u2014 the fallback plots
     by x value and tolerates that; same data must render the same chart on
     both paths. Use the tick labels only when they align one-per-point. */
  var ticks = (spec.x && spec.x.ticks) || [];
  var labels = ticks.length === series[0].points.length
    ? ticks
    : series[0].points.map(function (p) { return String(p[0]); });

  var allYs = [];
  series.forEach(function (s) { s.points.forEach(function (p) { allYs.push(p[1]); }); });
  var yMin = spec.y && spec.y.min != null ? spec.y.min : Math.min(0, Math.min.apply(null, allYs));
  var yMax = spec.y && spec.y.max != null ? spec.y.max : Math.max.apply(null, allYs) * 1.05;
  /* Same tick-label precision rule as the fallback renderer, so both paths
     label identically: sub-1 steps get distinguishing decimals; explicit
     domains render the step exactly (<=2 decimals). */
  var step = (yMax - yMin) / 4;
  var dec = step > 0 && step < 1 ? Math.min(6, Math.ceil(-Math.log10(step)) + 1) : 0;
  if (spec.y && spec.y.min != null && spec.y.max != null) {
    for (dec = 0; dec < 2 && step * Math.pow(10, dec) !== Math.round(step * Math.pow(10, dec)); dec++);
  }

  var data, options;
  var base = { responsive: true, maintainAspectRatio: false, animation: false };
  if (type === 'doughnut') {
    data = {
      labels: labels,
      datasets: [{
        data: series[0].points.map(function (p) { return p[1]; }),
        backgroundColor: (series[0].colors || []).map(function (c, i) { return resolveColor(c, slicePalette[i % slicePalette.length]); })
          .concat(slicePalette.slice((series[0].colors || []).length)).slice(0, series[0].points.length),
        borderWidth: 1
      }]
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: true, position: 'right', labels: { color: inkMuted } } },
      cutout: '62%'
    });
  } else {
    data = {
      labels: labels,
      datasets: series.map(function (s) {
        var c = resolveColor(s.color, 'var(--accent)');
        return {
          label: s.name || '',
          data: s.points.map(function (p) { return p[1]; }),
          borderColor: c,
          backgroundColor: c,
          borderWidth: 2,
          pointRadius: type === 'line' ? 0 : undefined,
          tension: 0
        };
      })
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: series.length > 1, labels: { color: inkMuted, boxWidth: 10 } } },
      scales: {
        x: {
          title: spec.x && spec.x.label ? { display: true, text: spec.x.label, color: inkMuted } : undefined,
          grid: { display: false },
          ticks: { color: inkMuted }
        },
        y: {
          min: yMin,
          max: yMax,
          title: spec.y && spec.y.label ? { display: true, text: spec.y.label, color: inkMuted } : undefined,
          grid: { color: gridLine },
          ticks: { color: inkMuted, count: 5, format: { maximumFractionDigits: dec, minimumFractionDigits: 0 } }
        }
      }
    });
  }

  if (chart) { chart.destroy(); chart = null; }
  while (el.firstChild) el.removeChild(el.firstChild);
  var canvas = document.createElement('canvas');
  el.appendChild(canvas);
  chart = new Chart(canvas, { type: type, data: data, options: options });
  }

  render();
  /* Keep the canvas in step with live theme flips, like the SVG fallback's
     native var() behavior and the mermaid precedent. Destroy+recreate is
     idempotent under rapid flips (render() always tears down first). */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (mq && mq.addEventListener) mq.addEventListener('change', render);
  if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
})();`;
async function Qr() {
  let e;
  try {
    let {
      loadChartBundleJs: loadChartBundleJs
    } = await import("B:/~BUN/root/chunk-w5f4repv.js");
    e = await loadChartBundleJs();
  } catch {
    return c("artifact_publish", "chart_bundle_unreadable"), null;
  }
  if (ba(e) !== null) return c("artifact_publish", "chart_bundle_unsafe"), null;
  if (xAt(qr) !== null) return c("artifact_publish", "chart_init_unsafe"), null;
  let n = `
<script>` + e + `</script>
<script>` + qr + `</script>
`;
  if (!Zr(n)) return c("artifact_publish", "chart_block_unstrippable"), null;
  return Dir + n + TXr;
}
function _a(e) {
  return xAt(e);
}
var lenDigitsMax = 8;
function va(e) {
  return `${beginPrefix}${e}-->`;
}
var maxSpan = 4194304;
function validate(e, n = 0) {
  return e[0] === `
` && Nir(e, 1) > 0 && e.endsWith(`</script>
`) && !e.includes(beginPrefix) && _En(e) === n;
}
var openTags = 2,
  ni = {
    beginPrefix: beginPrefix,
    end: end,
    lenDigitsMax: lenDigitsMax,
    maxSpan: maxSpan,
    openTags: openTags,
    validate: validate
  },
  Ea = 50000,
  Sa = 250000,
  xa = 4096;
function ri(e) {
  let n = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (r = n.indexOf("<code", r), r < 0) return !1;
    let s = n[r + 5];
    if (s === void 0) return !1;
    if (!RXr.has(s)) {
      r += 5;
      continue;
    }
    let h = Math.min(r + xa, n.length),
      b = h;
    for (let S = r + 5; S < h; S++) if (n[S] === ">") {
      b = S;
      break;
    }
    let y = n.slice(r + 5, b);
    for (let S of y.matchAll(/language-([\w.+#-]+)/g)) {
      let w = S[1];
      if (Object.prototype.hasOwnProperty.call(ZZe, w) || Object.prototype.hasOwnProperty.call(I$t, w)) return !0;
    }
    r = b;
  }
}
function Aa() {
  return `(function(){
if(typeof hljs==='undefined')return;
var budget=${Sa};
var codes=Array.prototype.slice.call(document.querySelectorAll('pre>code'));
for(var i=0;i<codes.length;i++){
var el=codes[i];
if(el.hasAttribute('data-claude-hljs-claimed'))continue;
var m=/(?:^|\\s)language-(\\S+)/.exec(el.className||'');
if(!m||!hljs.getLanguage(m[1]))continue;
if(el.children.length)continue;
var src=(el.textContent||'').replace(/\\n$/,'');
if(src.length>${Ea}||src.length>budget)continue;
budget-=src.length;
el.setAttribute('data-claude-hljs-claimed','1');
try{
var res=hljs.highlight(src,{language:m[1],ignoreIllegals:true});
el.innerHTML=res.value;
el.classList.add('hljs');
}catch(e){}
}
})();`;
}
async function ii() {
  let e;
  try {
    let {
      loadHljsBundleJs: loadHljsBundleJs
    } = await import("B:/~BUN/root/chunk-328w5436.js");
    e = await loadHljsBundleJs();
  } catch (error) {
    return a(error), c("artifact_publish", "hljs_bundle_unreadable"), null;
  }
  let bundleEmbedVerdicts = te().bundleEmbedVerdicts;
  if (bundleEmbedVerdicts.hljs === void 0) bundleEmbedVerdicts.hljs = _a(e);
  if (bundleEmbedVerdicts.hljs !== null) return c("artifact_publish", "hljs_bundle_unsafe"), null;
  let r = Aa();
  if (xAt(r) !== null) return c("artifact_publish", "hljs_init_unsafe"), null;
  let s = `
<script>` + e + `</script>
<script>` + r + `</script>
`;
  if (s.length >= maxSpan) return c("artifact_publish", "hljs_bundle_overspan"), null;
  let blockStripVerdicts = te().blockStripVerdicts;
  if (blockStripVerdicts.hljs === void 0) blockStripVerdicts.hljs = validate(s);
  if (!blockStripVerdicts.hljs) return c("artifact_publish", "hljs_block_unstrippable"), null;
  return `
` + va(s.length) + s + end + `
`;
}
var palettes = {
    light: {
      surface: "#f4efe4",
      text: "#42392e",
      line: "#8a7f6d",
      border: "#7a6c52",
      bg: "#fffdf8"
    },
    dark: {
      surface: "#262b34",
      text: "#f2f3f5",
      line: "#a8adb8",
      border: "#9aa4b8",
      bg: "#1f232b"
    }
  },
  Ta = "<style>.mermaid-diagram{margin-block:4px}.mermaid-diagram svg{display:block;margin:0 auto;max-width:100%;height:auto}</style>";
function ka() {
  return `(function(){
var CFG=` + _({
    palettes: palettes
  }) + `;
if(typeof mermaid==='undefined')return;
var pres=Array.prototype.slice.call(document.querySelectorAll('pre.mermaid')).filter(function(p){if(p.hasAttribute('data-claude-mermaid-claimed'))return false;p.setAttribute('data-claude-mermaid-claimed','1');return true;});
if(!pres.length)return;
var mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
var root=document.documentElement;
var items=pres.map(function(pre){
var mount=document.createElement('div');mount.className='mermaid-diagram';
return {pre:pre,mount:mount,src:pre.textContent||''};
});
var seq=0;
var renderGen=0;
var lastKey='';
function pageBg(fallback){
var els=[document.body,document.documentElement];
for(var i=0;i<els.length;i++){
var c=els[i]&&getComputedStyle(els[i]).backgroundColor;
if(c&&c!=='transparent'&&c!=='rgba(0, 0, 0, 0)')return c;
}
return fallback;
}
function render(){
var theme=root.getAttribute('data-theme');
var dark=theme==='dark'||(!!(mq&&mq.matches)&&theme!=='light');
var pal=dark?CFG.palettes.dark:CFG.palettes.light;
var bg=pageBg(pal.bg);
var key=(dark?'d':'l')+'|'+bg;
if(key===lastKey)return;
lastKey=key;
var gen=++renderGen;
var font=getComputedStyle(document.body).fontFamily||'sans-serif';
var nat={useMaxWidth:false};
mermaid.initialize({
startOnLoad:false,securityLevel:'strict',theme:'base',
flowchart:nat,sequence:nat,er:nat,state:nat,class:nat,pie:nat,
gantt:nat,journey:nat,timeline:nat,gitGraph:nat,mindmap:nat,xyChart:nat,
quadrantChart:nat,sankey:nat,c4:nat,requirement:nat,block:nat,
packet:nat,kanban:nat,architecture:nat,radar:nat,
themeVariables:{background:bg,mainBkg:pal.surface,primaryColor:pal.surface,
primaryTextColor:pal.text,lineColor:pal.line,primaryBorderColor:pal.border,
nodeBorder:pal.border,clusterBorder:pal.border,edgeLabelBackground:bg,
clusterBkg:'rgba(127,127,127,0.07)',titleColor:pal.text,
darkMode:dark,rowOdd:bg,rowEven:'rgba(127,127,127,0.07)',
attributeBackgroundColorOdd:bg,attributeBackgroundColorEven:'rgba(127,127,127,0.07)',
fontSize:'16px',fontFamily:font},
themeCSS:'.node rect, .node circle, .node polygon, .node path, .cluster rect { stroke-width: 2px; }'
});
items.forEach(function(it){
var id='claude-mermaid-'+seq++;
mermaid.render(id,it.src).then(function(r){
if(gen!==renderGen)return;
var prev=it.pre.previousElementSibling;
if(prev&&prev.className==='mermaid-diagram'&&prev!==it.mount)return;
it.mount.innerHTML=r.svg;
if(!it.mount.parentNode)it.pre.parentNode.insertBefore(it.mount,it.pre);
it.pre.style.display='none';
},function(){
var scratch=document.getElementById(id);
if(scratch)scratch.parentNode.removeChild(scratch);
scratch=document.getElementById('d'+id);
if(scratch)scratch.parentNode.removeChild(scratch);
if(gen!==renderGen)return;
if(it.mount.parentNode)it.mount.parentNode.removeChild(it.mount);
it.pre.style.display='';
});
});
}
render();
if(mq&&mq.addEventListener)mq.addEventListener('change',render);
if(typeof MutationObserver!=='undefined')new MutationObserver(render).observe(root,{attributes:true,attributeFilter:['data-theme']});
})();`;
}
var lenDigitsMax_2 = 8;
function Ca(e) {
  return `${beginPrefix_2}${e}-->`;
}
var maxSpan_2 = 8388608;
function validate_2(e, n = 0) {
  let r = e[0] === `
` ? Upi(e, 1) : 0;
  if (!r || !e.endsWith(`</script>
`) || e.includes(beginPrefix_2)) return !1;
  let s = 1 + r,
    h = $pi(e.slice(s));
  if (h === null || e.indexOf("<", s) !== s + h.data) return !1;
  let b = r > 7 ? 1 : 0,
    y = M1e(e.slice(s + h.after)),
    S = Bpi(y, 0);
  if (S !== null) {
    if (!y.startsWith("</script>", S.len)) return !1;
    b += S.annotated ? 1 : 0, y = y.slice(S.len + 9);
  }
  let w = _En(y);
  return w >= 0 && w + b === n;
}
var openTags_2 = 3,
  ai = {
    beginPrefix: beginPrefix_2,
    end: end_2,
    lenDigitsMax: lenDigitsMax_2,
    maxSpan: maxSpan_2,
    openTags: openTags_2,
    validate: validate_2
  },
  Fa = 4096;
function oi(e) {
  let n = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (r = n.indexOf("<pre", r), r < 0) return !1;
    let s = n[r + 4];
    if (s === void 0) return !1;
    if (!RXr.has(s)) {
      r += 4;
      continue;
    }
    let h = Math.min(r + Fa, n.length),
      b = h,
      y = !1;
    for (let S = r + 4; S < h; S++) if (n[S] === ">") {
      b = S, y = !0;
      break;
    }
    if (Na(n.slice(r + 4, b))) return !0;
    r = y ? b + 1 : b;
  }
}
function Na(e) {
  let n = e.length,
    r = 0;
  while (r < n) {
    let s = e.indexOf("class", r);
    if (s < 0) return !1;
    let h = e[s - 1];
    if (!(h === " " || h === "\t" || h === `
` || h === "\f" || h === "\r")) {
      r = s + 5;
      continue;
    }
    let b = s + 5;
    while (b < n && /\s/.test(e[b])) b++;
    if (e[b] !== "=") {
      r = s + 5;
      continue;
    }
    b++;
    while (b < n && /\s/.test(e[b])) b++;
    let y = e[b],
      S;
    if (y === '"' || y === "'") {
      let w = e.indexOf(y, b + 1);
      if (w < 0) return !1;
      S = e.slice(b + 1, w);
    } else {
      let w = b;
      while (w < n && !/[\s>]/.test(e[w])) w++;
      S = e.slice(b, w);
    }
    for (let w of S.split(/\s+/)) if (w === "mermaid") return !0;
    r = s + 5;
  }
  return !1;
}
function li() {
  let e = ka();
  if (xAt(e) !== null) return c("artifact_publish", "mermaid_init_unsafe"), null;
  let n = `
` + Ta + `
` + Fpi + `</script>
<script>` + e + `</script>
`,
    blockStripVerdicts_2 = te().blockStripVerdicts;
  if (blockStripVerdicts_2.mermaid === void 0) blockStripVerdicts_2.mermaid = validate_2(n);
  if (!blockStripVerdicts_2.mermaid) return c("artifact_publish", "mermaid_block_unstrippable"), null;
  return `
` + Ca(n.length) + n + end_2 + `
`;
}
function ci(e) {
  return {
    chart: Kr(e),
    mermaid: oi(e),
    highlight: ri(e)
  };
}
function Ma(e, n) {
  let r = e.length > n ? Q(e, n) : e;
  return {
    escaped: Tir(r).replace(/[\\"\n\t]/g, b => {
      switch (b) {
        case "\\":
          return "\\\\";
        case '"':
          return "\\\"";
        case `
`:
          return "\\n";
        case "\t":
          return "\\t";
        default:
          return b;
      }
    }),
    elided: e.length - r.length
  };
}
function Cpi(e, n) {
  let {
      escaped: escaped,
      elided: elided
    } = Ma(e, n),
    h = `"${Tir(eP(escaped, escaped.length))}"`;
  return elided > 0 ? `${h} \u2026(+${elided} chars)` : h;
}
function Tir(e) {
  return e.replace(rN, "'").replace(sj, "'");
}
var La = 10,
  Ia = 120,
  di = "Artifact publishing is rate-limited right now, so nothing was published.",
  ui = " Nothing is wrong with the call: a publishing rate limit refused it, and this tool already waited and sent it once more.",
  fi = " Send the same call again",
  hn = ' with url: "',
  jn = '"',
  zn = " after about ",
  Da = e => ` seconds \u2014 publishing limits are shared, so the wait can be longer while others publish; change nothing${e ? " else" : ""} about the call to get past this.`,
  Ba = " That artifact was reserved for this publish and nothing has been published to it; targeting it avoids reserving another.",
  Hn = " The refused step was ",
  ja = /^(?:the upload preflight that copying \d{1,4} files? from another artifact needs|staging this publish's \d{1,4} copied files? \((?:"(?:[^"\\\n]|\\.){0,1100}" from artifact [A-Za-z0-9-]{22,36}(?:, (?=")|))+(?:, and \d{1,4} more)?\)); nothing was staged\.$/;
function pi(e) {
  let n = e.slice(0, 3).map(item => `${_(item.path)} from artifact ${item.fromSlug}`),
    r = e.length > 3 ? `, and ${e.length - 3} more` : "";
  return `staging this publish's ${e.length} copied ${P(e.length, "file")} (${n.join(", ")}${r}); nothing was staged`;
}
function hi(e) {
  return `the upload preflight that copying ${e} ${P(e, "file")} from another artifact needs; nothing was staged`;
}
var za = "Not published: artifact publishing is rate-limited right now. Claude can try again shortly.",
  Ha = /^https?:\/\/[A-Za-z0-9.-]{1,100}(?::\d{1,5})?(?:\/[A-Za-z0-9._-]{1,40}){0,4}\/[A-Za-z0-9-]{22,36}$/;
function gi(e) {
  let n = Math.ceil((e ?? 0) / 1000);
  return Math.min(Math.max(n, La), Ia);
}
function Un(e, n, r) {
  let s = n !== void 0;
  return di + ui + fi + (s ? `${hn}${n}${jn}` : "") + `${zn}${e}${Da(s)}` + (s ? Ba : "") + (r !== void 0 ? `${Hn}${r}.` : "");
}
function Rpi(e) {
  let n = di + ui + fi;
  if (!e.startsWith(n)) return;
  let r = n.length,
    s;
  if (e.startsWith(hn, r)) {
    let S = e.indexOf(jn, r + hn.length);
    if (S === -1) return;
    if (s = e.slice(r + hn.length, S), !Ha.test(s)) return;
    r = S + jn.length;
  }
  if (!e.startsWith(zn, r)) return;
  let h = /^\d{1,3}/.exec(e.slice(r + zn.length))?.[0];
  if (h === void 0) return;
  let b = e.indexOf(Hn, r),
    y = b === -1 ? e : e.slice(0, b);
  if (b !== -1 && !ja.test(e.slice(b + Hn.length))) return;
  return y === Un(Number(h), s) ? za : void 0;
}
var Vn = "Nothing was published and nothing is wrong with the call: this tool chose that contract because it is the server's newest, and it has not reached every server yet. Send the same call again in about a minute; do not pin an older contract to get past this.",
  Ua = "Not published: the artifact service is mid-update. Claude can try again in about a minute.",
  Va = /^deploy 422: contract ([0-9A-Za-z.+-]{1,32}) is newer than the preferred ([0-9A-Za-z.+-]{1,32})\. /;
function Wa(e, n) {
  return `deploy 422: contract ${e} is newer than the preferred ${n}. ${Vn}`;
}
function Api(e) {
  let n = Va.exec(e);
  if (n === null) return;
  return e === Wa(n[1], n[2]) ? Ua : void 0;
}
import { randomUUID as ho } from "crypto";
function mi(e) {
  return Ewe(e.subarray(0, 4)) === "utf16le" ? "utf-16le" : "utf-8";
}
function gn(e, n) {
  let r = e.slice(0, n),
    s = 1;
  for (let y = r.indexOf(`
`); y !== -1; y = r.indexOf(`
`, y + 1)) s++;
  let h = 1;
  for (let y of r.slice(r.lastIndexOf(`
`) + 1)) h++;
  let b = 0;
  for (let y = e.indexOf("\uFFFD", n + 1); y !== -1; y = e.indexOf("\uFFFD", y + 1)) b++;
  return `line ${s}, column ${h}${b > 0 ? ` (+${b} more)` : ""}`;
}
function Ya(e, n, r) {
  let s = r === "utf-8",
    h = s ? n[0] === 239 && n[1] === 187 && n[2] === 191 ? 3 : 0 : 2;
  for (let b = 0; b < e.length;) {
    let y = e.codePointAt(b) ?? 0;
    if (y === 65533) {
      if (!(s ? n[h] === 239 && n[h + 1] === 191 && n[h + 2] === 189 : n[h] === 253 && n[h + 1] === 255)) return b;
    }
    let S = y > 65535 ? 2 : 1;
    h += s ? y < 128 ? 1 : y < 2048 ? 2 : y < 65536 ? 3 : 4 : S * 2, b += S;
  }
  return -1;
}
function xpi(e) {
  return new TextDecoder(mi(e)).decode(e);
}
function xlt(e) {
  let encoding = mi(e);
  try {
    let text = new TextDecoder(encoding, {
        fatal: !0
      }).decode(e),
      s = text.indexOf("\uFFFD");
    if (s === -1) return {
      text: text
    };
    return {
      problem: {
        kind: "replacement_char",
        encoding: encoding,
        where: gn(text, s)
      }
    };
  } catch {
    let r = new TextDecoder(encoding).decode(e),
      s = Ya(r, e, encoding);
    return {
      problem: {
        kind: "undecodable",
        encoding: encoding,
        where: gn(r, s === -1 ? r.indexOf("\uFFFD") : s)
      }
    };
  }
}
var Ga = 8,
  GM = /^[A-Za-z0-9._-]{1,64}$/,
  bi = {
    ownVers: {},
    inFlight: {}
  },
  hJo = Ugt("ownPublishes", bi);
function eba() {
  return aYi(bi);
}
function t6t(e, n, r, s = {}) {
  if (!GM.test(r)) return;
  e.set(h => {
    let b = h.ownVers[n] ?? [],
      y = h.mergedVers?.[n] ?? [],
      S = b.includes(r),
      w = y.includes(r);
    if (S && (s.merged !== !0 || w)) return h;
    let A = S ? b : [...b, r].slice(-Ga),
      k = (s.merged === !0 && !w ? [...y, r] : y).filter(item => A.includes(item));
    return {
      ...h,
      ownVers: {
        ...h.ownVers,
        [n]: A
      },
      ...((h.mergedVers?.[n] !== void 0 || k.length > 0) && {
        mergedVers: {
          ...h.mergedVers,
          [n]: k
        }
      })
    };
  });
}
function nEn(e, n, r) {
  return e.get().ownVers[n]?.includes(r) ?? !1;
}
function WIe(e, n, r) {
  let s = e.get();
  return (s.ownVers[n]?.includes(r) ?? !1) && !(s.mergedVers?.[n]?.includes(r) ?? !1);
}
function gJo(e, n) {
  return (e.get().ownVers[n]?.length ?? 0) > 0;
}
async function rXr(e, n, r) {
  oXr(e, n);
  try {
    return await r();
  } finally {
    sXr(e, n);
  }
}
function oXr(e, n) {
  e.set(r => ({
    ...r,
    inFlight: {
      ...r.inFlight,
      [n]: (r.inFlight[n] ?? 0) + 1
    }
  }));
}
function sXr(e, n) {
  e.set(r => {
    let s = r.inFlight[n] ?? 0;
    if (s === 0) return r;
    if (s === 1) {
      let {
        [n]: h,
        ...inFlight
      } = r.inFlight;
      return {
        ...r,
        inFlight: inFlight
      };
    }
    return {
      ...r,
      inFlight: {
        ...r.inFlight,
        [n]: s - 1
      }
    };
  });
}
function Plt(e, n) {
  return (e.get().inFlight[n] ?? 0) > 0;
}
import { randomUUID as qa } from "crypto";
import { lstat as _i, mkdir as yi, realpath as mn, rm as Yn, unlink as Xa, writeFile as Ka } from "fs/promises";
import Ge from "path";
async function vi(e, n, r) {
  let redeploy = r.slug !== void 0,
    slug = r.slug ?? qa();
  if (!hr.test(slug)) return {
    url: null,
    slug: null,
    version: null,
    err: `not an artifact slug: ${slug}`
  };
  let url = `${Vet}${slug}`,
    y = Ge.join(e, slug),
    S = Ge.dirname(e),
    w = await _i(S).catch(() => null);
  if (w === null || !w.isDirectory() || (await mn(S).catch(() => null)) !== S) return {
    url: null,
    slug: null,
    version: null,
    err: "the stub publish directory is not inside a real directory"
  };
  await Wn(e), await Wn(y), await n6t(Ge.join(y, "index.html"), n);
  for (let [Y, G] of [["thumbnail.img", r.thumbnail], ["thumbnail_dark.img", r.thumbnailDark]]) if (G !== void 0) await n6t(Ge.join(y, Y), G);else await Yn(Ge.join(y, Y), {
    recursive: !0,
    force: !0
  });
  let A = Ge.join(y, "files");
  await Wn(A);
  let k = await mn(A),
    notMaterialized = [],
    W = Y => Y === k || Y.startsWith(k + Ge.sep),
    j = async path => {
      let G = Ge.resolve(A, path);
      if (!G.startsWith(A + Ge.sep)) return null;
      if (xpe(G, A + Ge.sep, SX)) return notMaterialized.push({
        path: path,
        reason: "names a git, IDE/toolchain, or shell configuration component"
      }), null;
      for (let ue = Ge.dirname(G);; ue = Ge.dirname(ue)) try {
        return W(await mn(ue)) ? G : null;
      } catch (error) {
        if (!K(error) || ue === A) throw error;
      }
    },
    q = async Y => {
      try {
        return W(await mn(Ge.dirname(Y)));
      } catch (error) {
        if (K(error)) return "absent";
        throw error;
      }
    },
    removed = [];
  for (let Y of r.removeFiles ?? []) try {
    let G = await j(Y);
    if (G === null) continue;
    let ue = await q(G);
    if (ue === !1) continue;
    if (ue === "absent") {
      removed.push(Y);
      continue;
    }
    await Xa(G).catch(ae => {
      if (!K(ae)) throw ae;
    }), removed.push(Y);
  } catch (error) {
    t(`artifact stub: skipping removal of ${Y}: ${error}`, {
      level: "warn"
    });
  }
  let files = [];
  for (let Y of r.files ?? []) {
    try {
      let G = await j(Y.path);
      if (G === null) continue;
      if (await yi(Ge.dirname(G), {
        recursive: !0
      }), (await q(G)) !== !0) continue;
      await n6t(G, Y.content);
    } catch (error) {
      t(`artifact stub: skipping supporting file ${Y.path}: ${error}`, {
        level: "warn"
      });
      continue;
    }
    files.push({
      path: Y.path,
      contentType: Y.contentType,
      bytes: Buffer.byteLength(Y.content)
    });
  }
  for (let Y of notMaterialized) t(`artifact stub: not materializing ${Y.path}: ${Y.reason}`, {
    level: "warn"
  });
  let O = {
    slug: slug,
    url: url,
    redeploy: redeploy,
    title: r.title,
    favicon: r.favicon,
    ...(r.icon !== void 0 && {
      icon: r.icon
    }),
    ...(r.label !== void 0 && {
      label: r.label
    }),
    ...(r.note !== void 0 && {
      note: r.note
    }),
    ...(r.description !== void 0 && {
      description: r.description
    }),
    files: files,
    ...(removed.length > 0 && {
      removed: removed
    }),
    ...(notMaterialized.length > 0 && {
      notMaterialized: notMaterialized
    }),
    ...((r.copiedFiles?.length ?? 0) > 0 && {
      copied: r.copiedFiles
    }),
    ...(r.capabilities !== void 0 && {
      capabilities: r.capabilities
    }),
    ...(r.contract !== void 0 && {
      contract: r.contract
    }),
    ...(r.thumbnail !== void 0 && {
      thumbnail: {
        bytes: r.thumbnail.length
      }
    }),
    ...(r.thumbnailDark !== void 0 && {
      thumbnailDark: {
        bytes: r.thumbnailDark.length
      }
    }),
    ...(r.version !== void 0 && {
      version: r.version
    }),
    ...(r.mcpTool !== void 0 && {
      mcpTool: r.mcpTool
    }),
    ...(r.typeSlug !== void 0 && {
      typeSlug: r.typeSlug
    }),
    publishedAtMs: Date.now()
  };
  return await n6t(Ge.join(y, "manifest.json"), _(O, null, 2)), {
    url: url,
    slug: slug,
    version: r.version ?? "1",
    err: null
  };
}
async function Wn(e) {
  try {
    if (!(await _i(e)).isDirectory()) await Yn(e, {
      force: !0
    });
  } catch (error) {
    if (!K(error)) throw error;
  }
  await yi(e, {
    recursive: !0
  });
}
async function n6t(e, n) {
  await Yn(e, {
    recursive: !0,
    force: !0
  }), await Ka(e, n, {
    flag: "wx"
  });
}
var wi = 4096,
  Ppi = /^(?!\/)(?!.*\/\/)(?!.*\/$)(?!(?:^|.*\/)\.\.?(?:\/|$))[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029\\?#%:;]{1,512}$/u,
  Kt = /^[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029]{1,1024}$/u,
  Ei = p(() => C(u({
    path: o().regex(Kt),
    doc: o().max(64).optional().catch(void 0),
    headSeq: E().int().nonnegative().optional().catch(void 0)
  })).max(wi));
function iXr(e) {
  if (e.docs !== void 0) return Ei().safeParse(e.docs).success ? Cir(e) : void 0;
  return e.files !== void 0 ? Cir(e) : void 0;
}
function Cir(e) {
  let n = e.docs === void 0 ? void 0 : Ei().safeParse(e.docs);
  if (n?.success && n.data.length > 0) return n.data;
  if (e.artifactKind !== fR) return [];
  if (e.files !== void 0 && !Za(e)) return [];
  return [{
    path: path_2,
    ...(typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0 && {
      headSeq: e.headSeq
    })
  }];
}
function Za(e) {
  return typeof e.headSubscriptionToken === "string" && e.headSubscriptionToken !== "" || typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0;
}
var Ja = p(() => C(u({
  path: o().regex(Kt),
  sha256: o().regex(/^[0-9a-f]{64}$/).optional().catch(void 0),
  contentType: o().max(255).optional().catch(void 0),
  doc: o().max(64).optional().catch(void 0)
})).max(wi));
function Opi(e) {
  if (e.files === void 0) return;
  let n = Ja().safeParse(e.files);
  if (!n.success) return;
  let r = new Set(Cir(e).map(item => item.path)),
    s = new Map();
  for (let h of n.data) s.set(h.path, {
    ...(h.sha256 !== void 0 && {
      sha256: h.sha256
    }),
    ...(h.contentType !== void 0 && {
      contentType: h.contentType
    }),
    live: h.doc !== void 0 && h.doc !== "" || r.has(h.path)
  });
  return s;
}
function Lm() {
  let e = te();
  if (e.toolsetLatch === null) e.toolsetLatch = i.CLAUDE_CODE_ARTIFACT_TOOLSET ?? v("tengu_cobalt_plinth_damson", !1) === !0, l("tengu_artifact_toolset", {
    on: e.toolsetLatch
  });
  return e.toolsetLatch;
}
function Ipi() {
  return Lm() ? name : Qt;
}
function yJo() {
  return Lm() ? `the ${name} tool (load it with ${as}, query \`select:${name}\`, if it is not loaded)` : `the ${Qt} tool`;
}
function W8(e) {
  return `${name} tool, action "${e === "comments" ? "read" : e}"`;
}
function Wc(e, n) {
  return Lm() ? n() : e;
}
function Mpi(name_2, input) {
  return Lm() ? {
    name: name,
    input: AAt("comments", input)
  } : {
    name: name_2,
    input: input
  };
}
var Qa = "no_file",
  eo = /^[A-Za-z][A-Za-z0-9_-]{0,63}$/,
  xi = 16,
  to = 160;
function Ai() {
  let leaveOutMissingRefusedAt = te().leaveOutMissingRefusedAt;
  return leaveOutMissingRefusedAt !== void 0 && Date.now() - leaveOutMissingRefusedAt < WJo ? {} : {
    leave_out_missing: !0
  };
}
function Gn() {
  te().leaveOutMissingRefusedAt = Date.now();
}
function Ri(e, n) {
  let r = C1(e);
  if (!mCe.test(r)) return;
  if (ELt(r, "leave_out_missing")) return "named";
  return /unknown field ["']/i.test(r) || Object.keys(n).some(item => ELt(r, item)) ? void 0 : "unnamed";
}
function Ti(e, n) {
  return e < 500 && e !== 401 && e !== 403 && e !== 429 && !(e === 400 && mCe.test(C1(n)));
}
function ki({
  mode: mode,
  isFirstPublish: isFirstPublish,
  removedCount: removedCount
}) {
  return removedCount === 0 && (mode === "patch" || isFirstPublish);
}
function Pi(e) {
  let n = e.length,
    r = P(n, "file"),
    s = n === 1 ? "was" : "were";
  return `${n} copied ${r} ${s} left out of this version; the other files in this publish were saved. Tell the user which ${r} ${s} left out${Ci(e)}. At each left-out path the artifact keeps the file it had before; if it had none, the path is empty, so change or remove any reference to it. Left out: ${Oi(e)}.`;
}
function bn(e, n) {
  let r = e.length,
    s = P(r, "file"),
    h = r === 1 ? "was" : "were",
    b = `Nothing was published, and the artifact is unchanged: the server left out ${r} copied ${s}`,
    y = `Tell the user which ${s} ${h} left out${Ci(e)}.`,
    S = `Left out: ${Oi(e)}.`;
  switch (n) {
    case "removes_files":
      return `${b}, and this publish also removes files, so publishing without the copies could remove a file one of them was meant to replace. ${y} To save the rest, publish again without the left-out copies, and keep any file one of them was meant to replace. ${S}`;
    case "replaces_files":
      return `${b}, and this publish replaces every file in the artifact, so publishing without the copies could delete a file it has. ${y} To save the rest, read the artifact to see which files it has, then publish again without the left-out copies. ${S}`;
    case "no_other_file":
      return `${b}, and nothing else in this publish would have changed the artifact. ${y} Send a copy again only when the reason it was left out no longer applies. ${S}`;
  }
}
function Ci(e) {
  let n = e.length - xi;
  return n > 0 ? ` (${n} more are not named here)` : "";
}
function Si(e) {
  let n = Q(e, to);
  return _(n === e ? e : `${n}\u2026`);
}
function Oi(e) {
  return e.slice(0, xi).map(({
    file: file,
    why: why
  }) => {
    let s = why === Qa ? "which has no file there" : eo.test(why) ? `left out by the server for the reason ${_(why)}` : "left out by the server";
    return `${Si(file.path)} (a copy of ${Si(file.from.path)} in artifact ${file.from.slug}, ${s})`;
  }).join("; ");
}
var vAt = ["editor", "commenter", "reader", "viewer"];
function Rir(e) {
  return e === "editor" ? "can edit" : e === "commenter" ? "can comment" : "can view";
}
var maxContentLength = 1048576,
  ro = 50,
  $i = 5000,
  io = p(() => Ft({
    frames: vr(qc()).nullable()
  })),
  so = p(() => Ft({
    slug: ge().regex(hr),
    title: ge().max(4000).optional(),
    role: Ec(vAt).optional().catch(void 0)
  }));
async function Air(e) {
  let n = (S, status) => {
      if (!e.signal?.aborted) c("artifact_list_external", S, {
        ...(status !== void 0 && {
          status: status
        })
      });
      return {
        listed: !1
      };
    },
    r = os(e.signal, {
      timeoutMs: $i
    }),
    s;
  try {
    s = await Au.getRelayBound("/api/frame/frames/external", {
      refreshOAuth: !0,
      credentials: e.credentials,
      headers: xu(),
      timeout: $i,
      maxContentLength: maxContentLength,
      signal: r.signal
    });
  } catch {
    return n("request_error");
  } finally {
    r.cleanup();
  }
  if (!s.ok) return n(s.reason === "relay-unavailable" || s.reason === "relay-not-served" ? "unsent" : "not_ok", "status" in s ? s.status : void 0);
  if (!s.fromFrame) return n("relay_error", s.status);
  if (s.status < 200 || s.status >= 300) return n("refused", s.status);
  let h = io().safeParse(s.data);
  if (!h.success) return n("malformed_body");
  let rows = [],
    y = h.data.frames ?? [];
  for (let S of y) {
    let w = so().safeParse(S);
    if (!w.success) continue;
    rows.push({
      slug: w.data.slug,
      ...(w.data.title !== void 0 && {
        title: w.data.title
      }),
      ...(w.data.role !== void 0 && {
        role: w.data.role
      })
    });
  }
  return g("artifact_list_external", {
    rows: rows.length
  }), {
    listed: !0,
    rows: rows,
    mayHaveMore: y.length >= ro || rows.length < y.length
  };
}
var maxContentLength_2 = 4194304,
  timeout = 15000,
  lo = p(() => Ft({
    artifacts: vr(qc()).nullable(),
    next_page_token: ge().optional().catch(void 0),
    starsEnabled: ws().optional().catch(void 0)
  })),
  co = p(() => Ft({
    kind: ge(),
    id: ge()
  }).passthrough());
async function rEn(e) {
  let {
      rel: rel,
      limit: limit,
      pageToken: s,
      credentials: credentials,
      signal: signal
    } = e,
    uRLSearchParams = new URLSearchParams({
      rel: rel,
      kind: "page,document",
      sort: "last_viewed",
      limit: String(limit),
      ...(s !== void 0 && {
        page_token: s
      })
    }),
    S;
  try {
    S = await Au.getRelayBound(`/api/frame/artifacts?${uRLSearchParams.toString()}`, {
      refreshOAuth: !0,
      credentials: credentials,
      headers: xu(),
      timeout: timeout,
      maxContentLength: maxContentLength_2,
      ...(signal && {
        signal: signal
      })
    });
  } catch {
    return Zt(signal, "request_error");
  }
  if (!S.ok) return Zt(signal, S.reason);
  if (!S.fromFrame) return Zt(signal, "relay_error", S.status);
  if (S.status < 200 || S.status >= 300) return Zt(signal, "http_failed", S.status);
  let w = lo().safeParse(S.data);
  if (!w.success) return Zt(signal, "malformed_body");
  g("artifact_list_paged");
  let rows_2 = [];
  for (let k of w.data.artifacts ?? []) {
    let R = co().safeParse(k);
    if (!R.success || R.data.kind !== "page" && R.data.kind !== "document") continue;
    let {
      id: W,
      updated_at: j,
      source: q,
      soft_deleted: N,
      outside_organization: outside_organization,
      ...O
    } = R.data;
    rows_2.push({
      ...O,
      slug: W,
      updatedAt: j,
      source_surface: q,
      softDeleted: N,
      ...(outside_organization === !0 && {
        external: !0
      })
    });
  }
  return {
    served: !0,
    rows: rows_2,
    ...(w.data.next_page_token && {
      nextPageToken: w.data.next_page_token
    }),
    starsEnabled: w.data.starsEnabled === !0
  };
}
function Zt(e, reason, status_2) {
  if (!e?.aborted && status_2 !== 403) c("artifact_list_paged", reason, {
    ...(status_2 !== void 0 && {
      status: status_2
    })
  });
  return {
    served: !1,
    reason: reason,
    ...(status_2 !== void 0 && {
      status: status_2
    })
  };
}
var Ni = 1e4,
  maxContentLength_3 = 4194304,
  fo = p(() => Ft({
    frames: vr(qc()).nullable()
  }));
function Jt(e, n, status_3) {
  if (!e?.aborted) c("artifact_list_shared_lane", n, {
    ...(status_3 !== void 0 && {
      status: status_3
    })
  });
  return {
    listed: !1
  };
}
async function aXr(e) {
  let {
      credentials: credentials_2,
      signal: signal_2
    } = e,
    s = os(signal_2, {
      timeoutMs: Ni,
      refTimer: !0
    }),
    h;
  try {
    h = await Au.get(`/api/frame/frames?rel=shared&limit=${t5}`, {
      refreshOAuth: !0,
      credentials: credentials_2,
      headers: xu(),
      timeout: Ni,
      maxContentLength: maxContentLength_3,
      signal: s.signal,
      httpOnly: !0
    });
  } catch {
    return Jt(signal_2, "request_error");
  } finally {
    s.cleanup();
  }
  if (!h.ok) return Jt(signal_2, h.reason);
  if (!h.fromFrame) return Jt(signal_2, "relay_error", h.status);
  if (h.status < 200 || h.status >= 300) return Jt(signal_2, "http_failed", h.status);
  let b = fo().safeParse(h.data);
  if (!b.success) return Jt(signal_2, "malformed_body");
  g("artifact_list_shared_lane");
  let rows_3 = b.data.frames ?? [];
  return {
    listed: !0,
    rows: rows_3,
    full: rows_3.length >= t5
  };
}
var Mi = null,
  l_ = 16777216,
  relayProbe = "/api/frame/contract/latest";
function zK() {
  return v("tengu_cobalt_plinth_fern", !0);
}
function EAt() {
  return v("tengu_cobalt_plinth_moss", !0);
}
var mo = 2000;
function _Jo() {
  return mo;
}
function zIe() {
  let e = v("tengu_cobalt_plinth_sill", null);
  return typeof e === "number" && Number.isFinite(e) && e >= 0 ? Math.min(Math.floor(e), xJ) : rLs;
}
function p$() {
  return i.CLAUDE_CODE_ARTIFACT_MULTI_FILE ?? v("tengu_cobalt_plinth_bracken", !1);
}
function Y3e() {
  return v("tengu_cobalt_plinth_samphire", !1);
}
function bJo() {
  return v("tengu_tidy_widget", !0);
}
function SJo() {
  return v("tengu_cobalt_plinth_tansy", !1);
}
function wJo() {
  return v("tengu_cobalt_plinth_mallow", !1);
}
function wve() {
  return v("tengu_slate_lantern", !1);
}
function kve() {
  return v("tengu_slate_lantern_ember", !1);
}
function r6t() {
  return i.CLAUDE_CODE_ARTIFACT_HOT ?? v("tengu_copper_hinge_wren", !1);
}
function bo() {
  return te().frozenHotUpdate ?? r6t();
}
function dre() {
  return v("tengu_cobalt_plinth_campion", !1) === !0;
}
var _o = p(() => u({
    version: o().regex(dee),
    capabilities: C(o().regex(gX)).max(256),
    claude: I().optional().catch(void 0),
    core: C(o().regex(gX)).max(256).optional().catch(void 0),
    features: me(o().regex(gX), me(o().regex(gX), Be([me(o(), oe()), T(!0).transform(() => ({}))]))).optional().catch(void 0)
  })),
  yo = "/api/frame/contract/latest",
  maxContentLength_5 = 262144,
  maxContentLength_6 = 65536,
  timeoutMs = 5000,
  So = "x-contract-missing-caps",
  maxContentLength_4 = 16384;
async function _r(e, n, r) {
  let s;
  try {
    s = await Au.get(e, {
      refreshOAuth: !0,
      ...(n.recoverOAuth401 && {
        recoverOAuth401: !0,
        storageV5: n.storageV5
      }),
      headers: xu(),
      maxContentLength: maxContentLength_4,
      ...r,
      ...(n.timeoutMs !== void 0 && {
        timeout: n.timeoutMs
      }),
      ...(n.signal && {
        signal: n.signal
      }),
      credentials: n.credentials
    });
  } catch (error) {
    return {
      err: d(error),
      cause: "transport"
    };
  }
  if (!s.ok) return {
    err: `unavailable: ${s.reason}`,
    cause: s.reason === "no-auth" ? "no_auth" : "client_policy"
  };
  if (!s.fromFrame) return {
    err: `relay HTTP ${s.status}`,
    cause: "relay",
    status: s.status
  };
  if (s.status < 200 || s.status >= 300) {
    let proxyDeny = DFt({
      status: s.status,
      headers: s.response?.headers,
      data: s.data,
      redact: y => y,
      label: "[artifact] contract fetch"
    });
    return {
      err: `HTTP ${s.status}`,
      cause: s.status === 404 ? "http_404" : s.status >= 500 ? "http_5xx" : "http_4xx",
      status: s.status,
      ...(proxyDeny !== void 0 && {
        proxyDeny: proxyDeny
      })
    };
  }
  let missingCapsHeader = s.response?.headers?.[So];
  return {
    body: s.data,
    ...(typeof missingCapsHeader === "string" && {
      missingCapsHeader: missingCapsHeader
    })
  };
}
async function wge(e) {
  if (e.version !== void 0 && !dee.test(e.version)) return {
    err: "invalid contract version",
    cause: "malformed"
  };
  let n = await _r(e.version !== void 0 ? `/api/frame/contract/${e.version}` : yo, e);
  if ("err" in n) return n;
  let r = _o().safeParse(n.body);
  if (!r.success) return {
    err: "malformed contract response",
    cause: "malformed"
  };
  return r.data;
}
async function kJo(e, n, r) {
  if (!dee.test(e) || !gX.test(n)) return {
    err: "invalid contract version or capability name",
    cause: "malformed"
  };
  let s = await _r(`/api/frame/contract/${e}/${n}.d.ts`, r, {
    responseType: "text",
    maxContentLength: maxContentLength_5
  });
  if ("err" in s) return s;
  if (typeof s.body !== "string" || s.body.trim() === "") return {
    err: "empty or non-text defs body",
    cause: "malformed"
  };
  return {
    dts: s.body
  };
}
async function vJo(e, n) {
  if (!dee.test(e)) return {
    err: "invalid contract version",
    cause: "malformed"
  };
  let r = await _r(`/api/frame/contract/${e}/prompt`, n, {
    responseType: "text",
    maxContentLength: maxContentLength_6
  });
  if ("err" in r) return r;
  if (typeof r.body !== "string" || r.body.trim() === "") return {
    err: "empty or non-text prompt body",
    cause: "malformed"
  };
  let missingCaps = r.missingCapsHeader === void 0 ? [] : r.missingCapsHeader.slice(0, 4096).split(",").map(item => item.trim()).filter(item => gX.test(item));
  return {
    promptMd: r.body,
    missingCaps: missingCaps
  };
}
function vve(e) {
  let n = yf(),
    hasInteractiveUI = !e.isNonInteractiveSession || n === "claude-vscode" || id(),
    publishContext = e.agentType === "teammate" || Fc() ? "teammate" : e.agentId !== void 0 ? "subagent" : Gt() ? "bg_session" : n === "sdk-ts" || n === "sdk-py" ? "sdk" : hasInteractiveUI ? "interactive" : "print";
  return {
    hasInteractiveUI: hasInteractiveUI,
    publishContext: publishContext
  };
}
function GIe(e) {
  return n => {
    let r = e();
    return {
      ver: r.artifactReadVersions?.[n],
      observers: r.artifactReadObservers?.[n]
    };
  };
}
function RQ(e, n, r) {
  return `${e ?? "main"}
${n ?? ""}` + (r === void 0 ? "" : `
${r}`);
}
var Li = {
  summary: 0,
  source: 1
};
function oEn(e, n, r, s) {
  let h = te().readDeliveries.get(z2(e, n));
  return h !== void 0 && s !== void 0 && s !== "" && h.ver === r && h.batch === s && h.kind !== "source" ? h.kind : void 0;
}
function Eve(e, n, r) {
  let s = te().readDeliveries.get(z2(e, n));
  return s !== void 0 && s.ver === r && !s.sourced;
}
var es = "\x00own-mint";
function X3e(e) {
  return `${e ?? "main"}
${es}`;
}
function sEn(e, n) {
  return e.ver === n && e.observers !== void 0 && Object.values(e.observers).includes("");
}
function Jle(e, n) {
  return ts({
    ver: e.artifactReadVersions?.[n],
    observers: e.artifactReadObservers?.[n]
  });
}
function ts(e) {
  return KSr(e.observers) ? e.ver : void 0;
}
function EJo(e, n) {
  return () => ts(e(n));
}
function TJo(e) {
  return (n, ver, s) => {
    if (ver !== void 0 && !MV.test(ver)) return;
    let h = s?.indexOf(`
`) ?? -1,
      b = s === void 0 ? void 0 : s.slice(0, h),
      y = s === void 0 ? "" : s.slice(h + 1),
      S = y.indexOf(`
`),
      w = S < 0 ? y : y.slice(0, S),
      A = y.slice(S + 1),
      k = S < 0 ? void 0 : A === "summary" ? A : void 0,
      R = w === es,
      batch = R ? "" : w;
    if (b !== void 0) {
      let readDeliveries = te().readDeliveries,
        q = z2(b, n),
        N = readDeliveries.get(q),
        kind = k ?? "source",
        sourced = kind === "source" || N !== void 0 && N.ver === ver && N.sourced;
      if (ver === void 0) readDeliveries.delete(q);else if (N === void 0 || N.ver !== ver || N.batch !== batch || Li[kind] > Li[N.kind]) readDeliveries.set(q, {
        ver: ver,
        batch: batch,
        kind: kind,
        sourced: sourced
      });
    }
    if (b !== void 0 && !R) {
      let j = te().refusedPublishBodies.get(z2(b, n));
      if (j !== void 0 && j.observedFrom === void 0 && (batch === "" || batch !== j.batch)) j.observedFrom = batch;
      if (j?.sourceless !== void 0 && !k && ver !== void 0 && (j.live === void 0 || ver === j.live || (T1(ver, j.live) ?? -1) > 0)) delete j.sourceless, j.live ??= ver;
    }
    if (b !== void 0 && ver !== void 0) {
      let j = te().refusedPublishBodies.get(z2(b, n));
      if (j?.withheld) delete j.withheld;
    }
    e(j => {
      let q = j.artifactReadVersions?.[n],
        N = j.artifactReadObservers?.[n],
        z = ver === void 0 || b === void 0 ? void 0 : ver === q ? N === void 0 || Object.hasOwn(N, b) ? N : {
          ...N,
          [b]: batch
        } : {
          [b]: batch
        };
      if (q === ver && N === z) return j;
      let {
          [n]: O,
          ...Y
        } = j.artifactReadVersions ?? {},
        {
          [n]: G,
          ...ue
        } = j.artifactReadObservers ?? {};
      return {
        ...j,
        artifactReadVersions: ver === void 0 ? Y : {
          ...Y,
          [n]: ver
        },
        artifactReadObservers: z === void 0 ? ue : {
          ...ue,
          [n]: z
        }
      };
    });
  };
}
function xir(e, n, r, s) {
  let h = e?.[n];
  if (h === void 0) return {
    observed: !0,
    siblingInFlight: !1
  };
  let b = r ?? "main",
    y = Object.hasOwn(h, b) ? h[b] : void 0,
    siblingInFlight = y !== void 0 && y !== "" && y === s;
  return {
    observed: y !== void 0 && !siblingInFlight,
    siblingInFlight: siblingInFlight
  };
}
function CJo(e) {
  return (slug_2, r, s) => e(h => {
    let b = tz(r),
      y = h.artifactRefs ?? [],
      S = y.find(item => item.slug === slug_2),
      pin = b ?? S?.pin;
    if (s?.cachePinOnly) {
      if (S !== void 0) {
        if (S.pin === pin) return h;
        return {
          ...h,
          artifactRefs: y.map(item => item.slug === slug_2 ? {
            slug: slug_2,
            ...(pin !== void 0 && {
              pin: pin
            })
          } : item)
        };
      }
      if (pin === void 0) return h;
      if (y.length === 0) return h;
      return {
        ...h,
        artifactRefs: [...y, {
          slug: slug_2,
          pin: pin
        }]
      };
    }
    if (y[0]?.slug === slug_2 && y[0].pin === pin) return h;
    return {
      ...h,
      artifactRefs: [{
        slug: slug_2,
        ...(pin !== void 0 && {
          pin: pin
        })
      }, ...y.filter(item => item.slug !== slug_2)]
    };
  });
}
function RJo(e) {
  return () => {
    let n = e().artifactRefs ?? [],
      pins = {};
    for (let s of n) if (s.pin !== void 0) pins[s.slug] = s.pin;
    return {
      targetSlug: n[0]?.slug,
      pins: pins
    };
  };
}
var ns = "body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>",
  Ao = "<style>:root{color-scheme:light}" + ns,
  Ro = "<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}" + ns,
  iEn = 256,
  To = p(() => u({
    contract: o().max(64),
    capabilities: me(o().max(64), oe()).nullish(),
    type: oe().optional()
  })),
  ko = p(() => xt({
    slug: o().regex(hr),
    target: o().max(64).nullish(),
    current: o().max(64),
    latest: oe().optional(),
    blocked: oe().optional()
  })),
  Po = p(() => o().min(1).max(64)),
  Co = p(() => xt({
    to: o().min(1).max(64).optional().catch(void 0),
    reason: o().max(64).catch(""),
    conflict_count: E().int().min(0).max(1e6).optional().catch(void 0),
    paths: C(o().max(o6t)).max(aEn).optional().catch(void 0)
  })),
  o6t = 1024,
  aEn = 4096,
  rs = p(() => xt({
    manifest: me(o().max(o6t), xt({
      src: xt({}).nullish(),
      doc: o().max(64).nullish().catch(void 0)
    })).refine(e => Object.keys(e).length <= aEn)
  }));
function s6t(e) {
  let n = rs().safeParse(e);
  if (!n.success) return;
  let r = [],
    s = [];
  for (let [h, b] of Object.entries(n.data.manifest)) (b.src != null ? s : r).push(h);
  return {
    own: r.sort(),
    type: s.sort()
  };
}
function TAt(e) {
  if (e == null) return;
  let n = ko().safeParse(e);
  if (!n.success) return;
  let r = Po().safeParse(n.data.latest),
    blocked = n.data.blocked,
    h = Co().safeParse(blocked);
  return {
    slug: n.data.slug,
    target: n.data.target ?? null,
    current: n.data.current,
    ...(r.success && {
      latest: r.data
    }),
    ...(h.success ? {
      blocked: {
        ...(h.data.to !== void 0 && {
          to: h.data.to
        }),
        reason: h.data.reason,
        ...(h.data.conflict_count !== void 0 && {
          conflictCount: h.data.conflict_count
        }),
        ...(h.data.paths !== void 0 && {
          paths: h.data.paths
        })
      }
    } : blocked != null && {
      blocked: {
        reason: ""
      }
    })
  };
}
function vn(e) {
  if (e.status !== void 0) return {
    readback_status: e.status
  };
  if (e.relayStatus !== void 0) return {
    readback_relay_status: e.relayStatus
  };
  return e.unsent ? {
    readback_unsent: !0
  } : e.request;
}
function er(e) {
  return e.request?.transport === !0 || e.status !== void 0 && e.status >= 500 || e.relayStatus !== void 0 && e.relayStatus >= 500;
}
var tr = 500;
function Oo(e) {
  let n = e?.mcp?.servers;
  return Array.isArray(n) && n.some(item => typeof item?.server === "string" && Hmt(item.server) !== void 0);
}
function is(e) {
  return {
    ...(e.slug && {
      slug: e.slug
    }),
    title: e.title,
    ...(e.favicon && {
      favicon: e.favicon
    }),
    ...(e.icon && {
      icon: e.icon
    }),
    ...(e.label && {
      label: e.label
    }),
    ...(e.note && {
      note: e.note
    }),
    ...(e.description && {
      description: e.description
    }),
    ...(e.publishContext && {
      publish_context: e.publishContext
    }),
    ...!1,
    ...(e.template && {
      template: e.template
    }),
    ...(e.autoEditAttribution && {
      auto_edit_attribution: {
        thread_id: e.autoEditAttribution.threadId,
        comment_id: e.autoEditAttribution.commentId
      }
    }),
    ...(dre() && e.thumbnail && {
      thumbnail: e.thumbnail.toString("base64")
    }),
    ...(dre() && e.thumbnailDark && {
      thumbnail_dark: e.thumbnailDark.toString("base64")
    }),
    ...(yr(e) && {
      deadline: e.deadline
    }),
    ...RLe(e.requestId)
  };
}
function yr(e) {
  return bo() && e.deadline !== void 0 && e.slug !== void 0;
}
var wn = "a session that is allowed to fetch the contract (when this session is a sandboxed agent acting for the user, the user's own Claude Code session usually is one)";
async function $o(e) {
  let {
      capabilities: capabilities,
      echoPin: r,
      explicitPin: s,
      upgrade: upgrade,
      pageBytes: b,
      credentials: credentials_3
    } = e,
    S = (k, R, W) => {
      let j = L1i(k, R);
      if (j.length === 0) return null;
      m("artifact_publish", "unknown_capability", {
        page_bytes: b,
        unknown_count: j.length
      });
      let q = IF(j, 8, NS).join(", "),
        N = R.capabilities.join(", "),
        z = W === null ? void 0 : nXr()?.roster,
        O = W !== null && z !== void 0 && D1i(z.version, R.version) && j.every(item => z.capabilities.includes(item)) ? ` ${q} ${j.length === 1 ? "exists" : "exist"} in contract ${z.version}; this publish is pinned to ${R.version} by ` + (W === "passed" ? "the `contract` you passed." : "the artifact's stored contract.") : "";
      return `unknown ${P(j.length, "capability", "capabilities")}: ${q} \u2014 contract ${R.version} supports: ${N || "(none)"}.${O} Fix or drop the declaration; the control plane would reject it anyway.`;
    },
    w = (k, R, contract, j) => {
      let q = N1i(k, R);
      if ("errMsg" in q) return m("artifact_publish", "dual_spelling_ambiguous", {
        page_bytes: b
      }), q;
      let errMsg = S(q.caps, R, j);
      if (errMsg !== null) return {
        errMsg: errMsg
      };
      return {
        fields: {
          contract: contract,
          capabilities: q.caps
        }
      };
    },
    A = async k => {
      let session_2 = te(),
        W = session_2.accountEpoch,
        roster_4 = await wge({
          credentials: credentials_3
        });
      if ("err" in roster_4) {
        m("artifact_publish", "contract_fetch_failed", {
          page_bytes: b,
          cause: f(roster_4.cause)
        });
        let q = roster_4.cause === "http_4xx" && roster_4.status === 403 && roster_4.proxyDeny !== "content_scan_transient";
        return {
          errMsg: `couldn't fetch the capability contract (${roster_4.err}) \u2014 ` + (q ? `the server, or a proxy in front of it, refused this request, so retrying from this session will usually not help. ${k.refused}` : k.retry)
        };
      }
      return jIe({
        session: session_2,
        epoch: W,
        roster: roster_4,
        storageV5: void 0
      }), roster_4;
    };
  if (s !== null) {
    if (capabilities !== void 0) {
      let k = await wge({
        version: s,
        credentials: credentials_3
      });
      if (!("err" in k)) return w(capabilities, k, s, "passed");
    }
    return {
      fields: {
        contract: s,
        ...(capabilities !== void 0 && {
          capabilities: lks(capabilities)
        })
      }
    };
  }
  if (capabilities !== void 0 && r !== null) {
    let k = await wge({
      version: r,
      credentials: credentials_3
    });
    if ("err" in k) return {
      fields: {
        contract: r,
        capabilities: lks(capabilities)
      }
    };
    return w(capabilities, k, r, "stored");
  }
  if (capabilities !== void 0) {
    let k = e.latestFetchRemedy ?? (Object.keys(capabilities).length === 0 ? {
        retry: "clearing a stored declaration also needs the current " + "contract. Retry when the contract service is reachable \u2014 " + "until the clear lands, the stored grants stay live.",
        refused: `Nothing was cleared: clearing a stored declaration needs the current contract, so any stored grants are still live. Tell the user that, and that the declaration has to be cleared from ${wn}.`
      } : {
        retry: "a publish that declares capabilities needs the current contract from the server. Retry; or publish without the capabilities field and declare them on a later redeploy (a stored declaration carries forward unchanged).",
        refused: `Nothing was published: a publish that declares capabilities needs the current contract from the server. Tell the user that the declaration has to be published from ${wn}. Do not publish without the capabilities field unless every capability the page needs is already stored or the user asks: a declaration already stored carries forward unchanged, but capabilities declared for the first time are not granted, so a page that depends on them will not work. If you do publish without the field (and without contract: 'latest' if you passed it), tell the user which capabilities were not granted.`
      }),
      R = await A(k);
    if ("errMsg" in R) return R;
    return w(capabilities, R, R.version, null);
  }
  if (r !== null) return {
    fields: {
      contract: r
    }
  };
  if (upgrade) {
    let k = await A({
      retry: "an upgrade stamps the current contract, which requires the contract service. Retry when it is reachable.",
      refused: `Nothing was published: an upgrade stamps the current contract. Tell the user that the upgrade has to be published from ${wn}. To publish the content anyway, publish without the contract field (a stored contract stays as it is; if none is stored the page is published without one).`
    });
    if ("errMsg" in k) return k;
    return {
      fields: {
        contract: k.version
      }
    };
  }
  return {
    fields: {}
  };
}
var lEn = 8192,
  J3e = 300000,
  Ii = 'window.__FRAME_PREAMBLE={"v":1',
  regExp = new RegExp(`^<base[\\t\\n\\f\\r ]+href="\\/_f\\/[^">]*"(?:${qJo})?[\\t\\n\\f\\r ]*\\/?>`),
  regExp_2 = new RegExp(`<base\\s+href="\\/_f\\/[^">]*"(?:${qJo})?\\s*\\/?>\\n?`, "gi");
function Di(e) {
  let n = M1e(e),
    r = n.match(regExp);
  if (r) n = M1e(n.slice(r[0].length));else if (!n.length) return !1;
  let s = r !== null;
  while (n.length) {
    if (!/^<script(?=[\t\n\f\r />])/.test(n)) return !1;
    let h = Q3e(n, 7);
    if (h < 0) return !1;
    let b = n.slice(h);
    if (!s && (Nir(n, 0) !== h || !b.startsWith(Ii) || !",}".includes(b[Ii.length] ?? " "))) return !1;
    s = !0;
    let y = VJo(b);
    if (y < 0) return !1;
    n = M1e(b.slice(y));
  }
  return !0;
}
function ss(e) {
  let n = M1e(e);
  if (n.startsWith("<head>") && n.endsWith("</head>")) return Di(n.slice(6, -7));
  return Di(n);
}
function CAt(e, n = () => !0) {
  let r = 4,
    s = e.indexOf(Ilt);
  while (s >= 0 && s < lEn && r > 0) {
    let h = s + Ilt.length,
      b = e.subarray(0, s + J3e + p6t.length).indexOf(p6t, h);
    if (b >= 0 && ss(e.toString("utf8", h, b))) {
      let y = Buffer.concat([e.subarray(0, s), e.subarray(b + p6t.length)]);
      if (n(y)) return y;
      r--;
    }
    s = e.indexOf(Ilt, h);
  }
  return;
}
var Mo = /^<body(?=[\t\n\f\r />])/i,
  Bi = /^<base(?=[\t\n\f\r />])/i,
  Lo = /^<(script|style|title|textarea|xmp|iframe|noembed|noframes|noscript|plaintext)(?=[\t\n\f\r />])/i;
function sn(e, n, r) {
  let s = /[\t\n\f\r />]/g,
    h = r;
  for (;;) {
    if (h = e.indexOf("<", h), h < 0) return -1;
    if (e.startsWith("<!--", h)) {
      let y = -1;
      if (e.startsWith(">", h + 4)) y = h + 5;else if (e.startsWith("->", h + 4)) y = h + 6;else for (let S = e.indexOf("--", h + 4); S >= 0;) {
        if (e.startsWith(">", S + 2)) y = S + 3;else if (e.startsWith("!>", S + 2)) y = S + 4;else {
          S = e.indexOf("--", S + 1);
          continue;
        }
        break;
      }
      if (y < 0) return -1;
      h = y;
      continue;
    }
    let b = Lo.exec(e.slice(h, h + 11));
    if (b) {
      let y = b[1].toLowerCase(),
        S = y === "plaintext" ? -1 : Q3e(e, h + 1 + y.length),
        regExp_3 = new RegExp(`</${y}(?=[\\t\\n\\f\\r />])`, "gi");
      regExp_3.lastIndex = Math.max(S, 0);
      let A = S < 0 ? null : regExp_3.exec(e),
        k = A === null ? -1 : Q3e(e, A.index + A[0].length);
      if (k < 0 || y === "script" && AXr(e.slice(S, A.index))) return -1;
      h = k;
    } else if (n.test(e.slice(h, h + 8))) return h;else if (/^<\/?[a-zA-Z]/.test(e.slice(h, h + 3))) {
      s.lastIndex = h + 2;
      let y = s.exec(e);
      if (h = y === null ? -1 : Q3e(e, y.index), h < 0) return -1;
    } else if (/^<(?:[?!]|\/(?!>))/.test(e.slice(h, h + 3))) {
      if (h = e.indexOf(">", h + 2), h < 0) return -1;
      h++;
    } else h++;
  }
}
function dEn(e) {
  return us(e, fs, cs(Io, "blocks"));
}
var Io = 64,
  Do = 96,
  ls = 64;
function cs(cap, exhausted) {
  return {
    spent: 0,
    cap: cap,
    exhausted: exhausted
  };
}
function ds(e) {
  if (e.spent === e.cap) throw new kge(e.exhausted, e.spent);
  e.spent++;
}
class kge extends Xe {
  passes;
  constructor(e = "blocks", n) {
    super(jo[e], Bo[e]);
    this.passes = n;
  }
}
var Bo = {
    blocks: "strip_unsettled",
    author: "strip_unsettled",
    levels: "nested_repair_depth_cap"
  },
  jo = {
    blocks: "This page carries `<!-- frame-runtime -->` serve-marker blocks or `data-frame-runtime` attributes nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete those comment blocks and attributes from the source and publish again.",
    author: 'This page carries runtime-marker comment blocks (`<!-- frame-runtime -->\u2026<!-- /frame-runtime -->`, `<!-- chart-runtime -->\u2026<!-- /chart-runtime -->`, `<!--claude-mermaid-runtime-begin\u2026`, `<!--claude-hljs-runtime-begin\u2026`), `data-frame-runtime` attributes, `<base href="/_f/\u2026">` tags, or repeated artifact skeletons (`<!doctype html><html><head>\u2026` wrapped around the page again and again) nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete every such comment block, attribute, tag, and repeated outer skeleton from the source, keep the innermost document, and publish again.',
    levels: `This page is a published artifact page wrapped inside more than ${ls} nested copies of the artifact skeleton (\`<!doctype html><html><head><!-- frame-runtime -->\u2026\` repeated) \u2014 nothing a genuine page contains. Publish the innermost document on its own: delete the repeated outer skeletons from the source and publish again.`
  };
function us(e, n, r) {
  for (;;) {
    ds(r);
    let s = n(e);
    if (s === e) return s;
    e = s;
  }
}
function fs(e) {
  let n = [],
    r = 0,
    s = sn(e, Mo, 0),
    h = s < 0 ? 1 / 0 : s,
    b = e.indexOf(Ilt),
    y = -1;
  while (b >= 0 && b < h && b - r < lEn) {
    let S = b + Ilt.length;
    if (y < S) {
      if (y = e.indexOf(p6t, S), y < 0) break;
    }
    let w = e.indexOf(Ilt, S);
    if ((w < 0 || w > y) && y - b < J3e && ss(e.slice(S, y))) {
      let A = y + p6t.length;
      if (e[A] === `
`) A++;
      n.push([b, A]), r += A - b;
    }
    b = w;
  }
  return e = Ho(Lir(e, n)), e = Uo(e), e.replace(regExp_2, "").replace(/\sdata-frame-runtime="[^">]*"/gi, "");
}
function cEn(e) {
  return ps(e).body;
}
function ps(e) {
  let n = S => Jr(fs(S)),
    r = cs(Do, "author"),
    s = S => us(S, n, r),
    body = s(e),
    b = As(body);
  if (b === null) return {
    body: body,
    unwrapped: !1,
    passes: r.spent
  };
  let y = yl(b.body, b.lang, b.cover, s, r);
  return {
    body: y.body,
    passes: r.spent,
    lang: y.lang,
    cover: y.cover,
    unwrapped: !0,
    ...(y.outcome && {
      repair: y.outcome
    }),
    ...(b.hoistedCommentsDropped && {
      hoistedCommentsDropped: !0
    })
  };
}
function AJo(e) {
  let n;
  try {
    n = dEn(e);
  } catch (error) {
    if (error instanceof kge) return !1;
    throw error;
  }
  let r = As(n);
  return r !== null && Rs(r.body);
}
var zo = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/;
function wr(e) {
  return e.length <= 35 && zo.test(e);
}
async function lXr(e, n = {}) {
  let {
      injectDiagramRuntime: injectDiagramRuntime,
      injectHighlightRuntime: injectHighlightRuntime,
      expectRoundTrippedPage: expectRoundTrippedPage
    } = n,
    b = ps(e),
    {
      body: body_2,
      lang: S,
      cover: w
    } = b,
    unnested;
  switch (b.repair) {
    case "repaired":
    case "partial":
      unnested = b.repair;
      break;
    case "miss":
      c("artifact_publish", "nested_repair_miss");
      break;
    case void 0:
      break;
  }
  if (!b.unwrapped && expectRoundTrippedPage === !0) c("artifact_publish", "round_trip_unwrap_miss");
  if (Hpi(body_2)) c("artifact_publish", "runtime_sentinel_residual");
  let k = ci(body_2),
    R = k.chart && Xr(),
    W = injectDiagramRuntime === !0 && k.mermaid,
    j = injectHighlightRuntime === !0 && k.highlight,
    q = "";
  if (R) {
    let O = await Qr();
    if (O !== null) q += O;
  }
  let mermaidInjected = !1;
  if (W) {
    let O = li();
    if (O !== null) q += O, mermaidInjected = !0;
  }
  let hljsInjected = !1;
  if (j) {
    let O = await ii();
    if (O !== null) q += O, hljsInjected = !0;
  }
  if (q !== "") {
    let {
        runtimeBlockInsertionIndex: runtimeBlockInsertionIndex
      } = await import("B:/~BUN/root/chunk-amrmxc18.js"),
      Y = runtimeBlockInsertionIndex(body_2);
    if (Y === void 0) c("artifact_publish", "runtime_blocks_over_budget"), mermaidInjected = !1, hljsInjected = !1;else body_2 = body_2.slice(0, Y) + q + body_2.slice(Y);
  }
  return {
    body: body_2,
    mermaidInjected: mermaidInjected,
    hljsInjected: hljsInjected,
    roundTripLang: S,
    ...(w !== void 0 && {
      roundTripCover: w
    }),
    unnested: unnested,
    ...(b.hoistedCommentsDropped && {
      hoistedCommentsDropped: !0
    })
  };
}
function Ho(e) {
  return hs(e, ai);
}
function Uo(e) {
  return hs(e, ni);
}
function hs(e, n) {
  let r = [],
    s = e.indexOf(n.beginPrefix);
  while (s >= 0) {
    let h = s + n.beginPrefix.length,
      b = e.indexOf(n.beginPrefix, h),
      y = h,
      S = h + n.lenDigitsMax;
    while (y < S) {
      let w = e.charCodeAt(y);
      if (w < 48 || w > 57) break;
      y++;
    }
    if (y > h && e.startsWith("-->", y)) {
      let w = Number(e.slice(h, y)),
        A = y + 3,
        k = 0,
        R = A + w;
      while (k <= n.openTags && !e.startsWith(n.end, R)) k++, R += KJo;
      if (w < n.maxSpan && k <= n.openTags && (b < 0 || b > R) && n.validate(e.slice(A, R), k)) {
        let W = R + n.end.length;
        if (e[W] === `
`) W++;
        let j = s > 0 && e[s - 1] === `
` ? s - 1 : s;
        r.push([j, W]);
      }
    }
    s = b;
  }
  return Lir(e, r);
}
var maxContentLength_7 = 2097152;
function dXr(e) {
  let n = To().safeParse(e);
  if (!n.success) {
    t(`[artifact] malformed read-back body: ${n.error.message}`);
    return;
  }
  let {
      contract: contract_2,
      capabilities: capabilities_2
    } = n.data,
    typeLock = TAt(n.data.type);
  return {
    contract: contract_2,
    ...(capabilities_2 != null && {
      capabilities: capabilities_2
    }),
    ...(typeLock !== void 0 && {
      typeLock: typeLock
    })
  };
}
async function V0(e, signal_3, credentials_4) {
  let s = performance.now();
  try {
    let h = await Au.get(`/api/frame/read/${encodeURIComponent(e)}`, {
      refreshOAuth: !0,
      headers: xu(),
      timeout: 15000,
      maxContentLength: maxContentLength_7,
      ...(signal_3 && {
        signal: signal_3
      }),
      credentials: credentials_4
    });
    if (!h.ok) return {
      err: `read-back unavailable: ${h.reason}`,
      unsent: !0
    };
    if (!h.fromFrame) return {
      err: `read-back relay HTTP ${h.status}`,
      relayStatus: h.status
    };
    if (h.status === 404) return null;
    if (h.status < 200 || h.status >= 300) return t(`[artifact] read-back ${h.status}: ${oA(h.data)}`), {
      err: `read-back HTTP ${h.status}`,
      status: h.status
    };
    let b = dXr(h.data);
    if (b === void 0) return {
      err: "malformed read-back body",
      status: h.status
    };
    return b;
  } catch (error) {
    return {
      err: error instanceof Error ? error.message : String(error),
      request: t3(error, s)
    };
  }
}
async function ms(e, n, r, s) {
  let h = await e;
  if (h.err !== null || n === void 0 || h.readBackEchoed) return h;
  let b = await V0(n, s, r);
  if (b === null || "err" in b) {
    if (b !== null) t(`[artifact] read-back skipped: ${b.err}`);
    return h;
  }
  let {
      typeLock: typeLock_2,
      ...S
    } = b,
    w = typeLock_2 !== void 0 ? {
      ...h,
      typeLock: typeLock_2
    } : h;
  if (h.stored?.capabilities !== void 0 || !$q(S.capabilities ?? void 0) && tz(S.contract) === null) return w;
  return {
    ...w,
    stored: {
      ...S,
      ...($q(S.capabilities ?? void 0) && {
        carried: !0
      })
    }
  };
}
function Vo(e) {
  let n = /[\t\n\f\r ]/,
    r = sn(e, Bi, 0);
  while (r >= 0) {
    let s = Q3e(e, r + 5);
    if (s < 0) return;
    let h = r + 5;
    while (h < s - 1) {
      let b = e[h];
      if (n.test(b) || b === "/") {
        h++;
        continue;
      }
      let y = h++;
      while (h < s - 1 && !n.test(e[h]) && !"/=".includes(e[h])) h++;
      let S = e.slice(y, h).toLowerCase();
      while (h < s - 1 && n.test(e[h])) h++;
      if (e[h] !== "=") continue;
      h++;
      while (h < s - 1 && n.test(e[h])) h++;
      let w = h,
        A,
        k = e[h];
      if (k === '"' || k === "'") {
        let R = e.indexOf(k, h + 1);
        h = R < 0 ? s : R + 1, A = e.slice(w + 1, h - 1);
      } else {
        while (h < s - 1 && !n.test(e[h])) h++;
        A = e.slice(w, h);
      }
      if (S === "href") {
        if (!A.startsWith("/_f/")) return A;
        break;
      }
    }
    r = sn(e, Bi, s);
  }
  return;
}
var Wo = /^[\f ]*(?:[a-zA-Z][a-zA-Z0-9+.-]*:|[/\\])/;
function Yo(e) {
  let n = Vo(e);
  if (n === void 0) return !1;
  let r = n.replace(/[\t\n\r]/g, "");
  return r.includes("&") || Wo.test(r);
}
var Go = "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and publish those files alongside the page (`files`), referenced by relative path.",
  qo = "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and make those references work without it (inline what the page needs).";
function Xo(e) {
  let n = typeof e === "string" ? e.slice(0, 16384) : e.subarray(0, 16384).toString("utf8"),
    r = n.startsWith("\uFEFF") ? 1 : 0;
  for (;;) {
    while (r < n.length && /\s/.test(n[r])) r++;
    if (!n.startsWith("<!--", r)) break;
    let s = n.indexOf("-->", r + 4);
    if (s === -1) return !1;
    r = s + 3;
  }
  return /^<!doctype html[\s>]/i.test(n.slice(r, r + 16));
}
function Ko(e, n) {
  if (e.err !== null) return e;
  let r = Zo(n).filter(item => !(e.livePaths ?? []).includes(item));
  if (r.length === 0) return e;
  return c("artifact_publish", "files_html_no_doctype", {
    raw_html_pages: r.length
  }), {
    ...e,
    warnings: [...(e.warnings ?? []), Jo(r)]
  };
}
function Zo(e) {
  return e.filter(item => GK(item.contentType) === "text/html" && item.live !== !0 && item.reseed !== !0 && !Xo(item.content)).map(item => item.path);
}
function Jo(e) {
  let n = e.slice(0, 3).map(item => _(item)),
    r = e.length - n.length,
    s = n.join(", ") + (r > 0 ? ` and ${r} more` : ""),
    h = e.length === 1;
  return `files: ${s} ${h ? "has" : "have"} no <!doctype html> \u2014 supporting HTML pages are served exactly as written (only the page itself is wrapped in the skeleton), so if ${h ? "it is a page" : "they are pages"} people open, start ${h ? "it" : "each"} with a doctype, charset and viewport meta and its base styles and publish again (a fragment the page fetches and inserts can stay as written); as published ${h ? "it renders" : "they render"} in quirks mode.`;
}
async function Qo(e, n) {
  let r = await e;
  return r.err === null && n.length > 0 ? {
    ...r,
    warnings: [...(r.warnings ?? []), ...n]
  } : r;
}
var Tn = 8,
  el = 0.7,
  tl = Math.floor(DV * el / (Tn * 2));
function nr(e) {
  let n = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(n)) return [];
  let r = [];
  for (let s of n) {
    if (r.length >= Tn) break;
    if (typeof s !== "string") continue;
    let h = vNn(s, tl);
    if (h !== void 0) r.push(nl(h) ?? h);
  }
  return r;
}
function nl(e) {
  if (/^live_over_budget:(.{1,1024})$/.exec(e)) return e;
  if (/^render_unavailable:(.{1,1024})$/.exec(e)) return e;
  if (e === "render_over_budget") return e;
  return;
}
function bs(e) {
  let n = e !== null && typeof e === "object" && "docs" in e ? iXr(e) : void 0;
  if (n !== void 0) return n.map(item => ({
    path: item.path,
    ...(item.doc !== void 0 && {
      doc: item.doc
    })
  })).sort((itemA, itemB) => itemA.path < itemB.path ? -1 : itemA.path > itemB.path ? 1 : 0);
  let r = rs().safeParse(e);
  if (!r.success) return;
  return Object.entries(r.data.manifest).flatMap(([path_3, h]) => Kt.test(path_3) && h.src == null && typeof h.doc === "string" && h.doc !== "" ? [{
    path: path_3,
    doc: h.doc
  }] : []).sort((itemA, itemB) => itemA.path < itemB.path ? -1 : itemA.path > itemB.path ? 1 : 0);
}
function _s(e) {
  return e.flatMap(item => []);
}
function rl() {
  return [];
}
function il(e) {
  return e.flatMap(item => []);
}
function sl(e, n) {
  return [];
}
function al(e) {
  return e.flatMap(item => []);
}
function ys(e, n) {
  return (e ?? []).filter(item => !n.has(item)).flatMap(item => []);
}
var ol = 32,
  ll = 16,
  cl = 200,
  dl = /^[\w./-]{1,64}$/,
  ul = p(() => u({
    pins: C(oe()).optional().catch(void 0),
    warnings: C(oe()).optional().catch(void 0)
  })),
  fl = p(() => u({
    uuid: o().regex(hr),
    path: o().regex(dl),
    module: I().optional().catch(void 0),
    files: E().int().min(0).max(1e6).optional().catch(void 0)
  })),
  pl = p(() => u({
    src: o().optional().catch(void 0),
    reason: o().regex(Lmt),
    count: E().int().min(1).max(1e5).optional().catch(void 0)
  }));
function rr(e) {
  if (e === null || typeof e !== "object" || !("embeds" in e) || e.embeds === null || e.embeds === void 0) return;
  let n = ul().safeParse(e.embeds);
  if (!n.success) return {
    pins: [],
    warnings: []
  };
  let pins_2 = [];
  for (let h of n.data.pins ?? []) {
    if (pins_2.length >= ol) break;
    let b = fl().safeParse(h);
    if (!b.success) continue;
    let {
      uuid: uuid,
      path: path_4,
      module: module,
      files: files_2
    } = b.data;
    pins_2.push({
      uuid: uuid,
      path: path_4,
      module: module === !0,
      ...(files_2 !== void 0 && {
        files: files_2
      })
    });
  }
  let warnings = [];
  for (let h of n.data.warnings ?? []) {
    if (warnings.length >= ll) break;
    let b = pl().safeParse(h);
    if (!b.success) continue;
    let {
        reason: reason_2,
        count: count
      } = b.data,
      src = b.data.src === void 0 ? void 0 : vNn(b.data.src, cl);
    warnings.push({
      reason: reason_2,
      ...(src !== void 0 && {
        src: src
      }),
      ...(count !== void 0 && {
        count: count
      })
    });
  }
  return {
    pins: pins_2,
    warnings: warnings
  };
}
var Vt = "<!doctype html>",
  vs = "<html",
  xn = Vt + vs,
  regExp_4 = new RegExp(`^${Vt}`, "i"),
  Es = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">',
  Ss = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1">',
  ji = /^<(?:meta|wbr)(?=[\t\n\f\r />])/i,
  qn = /<meta(?=[\t\n\f\r /])/gi,
  gl = 1024,
  ml = /([^\t\n\f\r =,]+)[^=,]*[\t\n\f\r =]*([^\t\n\f\r =,]*)/g;
function En(e) {
  let n = "";
  for (let [, r = "", s = ""] of e.matchAll(ml)) if (r.toLowerCase() === "viewport-fit") n = s.toLowerCase();
  return n === "cover";
}
function ir(e, n, r) {
  let s = new Map(),
    h = r - 1,
    b = n;
  for (;;) {
    while (b < h && /[\t\n\f\r /]/.test(e[b])) b++;
    if (b >= h) return s;
    let y = "";
    do y += e[b].toLowerCase(), b++; while (b < h && !/[\t\n\f\r /=>]/.test(e[b]));
    while (b < h && /[\t\n\f\r ]/.test(e[b])) b++;
    let S = "";
    if (b < h && e[b] === "=") {
      b++;
      while (b < h && /[\t\n\f\r ]/.test(e[b])) b++;
      let w = e[b];
      if (b < h && (w === '"' || w === "'")) {
        let A = e.indexOf(w, b + 1);
        if (A < 0 || A >= h) return s;
        S = e.slice(b + 1, A), b = A + 1;
      } else {
        let A = b;
        while (b < h && !/[\t\n\f\r >]/.test(e[b])) b++;
        S = e.slice(A, b);
      }
    }
    if (!s.has(y)) s.set(y, S);
  }
}
function bl(e, n = !0) {
  if (!/<meta[\t\n\f\r />]/i.test(e)) return n;
  let r,
    s = e + "<wbr>",
    h = 0,
    b = sn(s, ji, 0);
  while (b >= 0 && b < e.length) {
    let y = s[b + 1] === "m" || s[b + 1] === "M" ? 5 : 4,
      S = Q3e(s, b + y);
    if (S < 0 || S > e.length) {
      b = -1;
      break;
    }
    if (y === 5) {
      let w = ir(s, b + y, S);
      if (w.get("name")?.toLowerCase() === "viewport") r = w.get("content") ?? "";
    }
    h = S, b = sn(s, ji, S);
  }
  if (b < 0 && !(r !== void 0 && En(r))) {
    qn.lastIndex = h;
    for (let y = qn.exec(e); y !== null; y = qn.exec(e)) {
      let S = e.slice(y.index, y.index + gl),
        w = S.includes(">") ? Q3e(S, 5) : -1;
      if (w < 0) continue;
      let A = ir(S, 5, w);
      if (A.get("name")?.toLowerCase() === "viewport") {
        if (r = A.get("content") ?? "", En(r)) return !0;
      }
    }
  }
  return r === void 0 ? n : En(r);
}
var xs = `</head><body>
`,
  Sn = `
</body></html>`;
function cXr(e, n, r) {
  let s = n !== void 0 && wr(n) ? ` lang="${n}"` : "",
    h = bl(e, r) ? Es + Ro : Ss + Ao;
  return `${xn}${s}><head>${h}${xs}${e}${Sn}`;
}
function Xn(e, n, r) {
  return Q3e(e, n) === r;
}
function uEn(e) {
  return regExp_4.test(e) && e.startsWith(vs, Vt.length);
}
function As(e) {
  if (!uEn(e)) return null;
  if (!e.startsWith(Vt)) e = Vt + e.slice(Vt.length);
  let n = e.match(/^<!doctype html><html(?=[\t\n\f\r >])([^>]*)><head(?=[\t\n\f\r >])[^>]*>/);
  if (!n) return null;
  let r = xn.length + n[1].length + 1;
  if (!Xn(e, xn.length, r) || !Xn(e, r + 5, n[0].length)) return null;
  let s = e.indexOf("</head><body", n[0].length);
  if (s === -1) return null;
  let b = e.slice(n[0].length, s).match(/^<meta[\t\n\f\r ]+charset="?utf8"?(?=[\t\n\f\r >"])[^>]*>(<meta[\t\n\f\r ]+name="?viewport"?(?=[\t\n\f\r >"])[^>]*>)<style(?:[\t\n\f\r ][^>]*)?>([\s\S]*)<\/style>$/);
  if (!b || /<\/style/i.test(b[2])) return null;
  {
    let q = n[0].length;
    for (let N of ["<meta", "<meta", "<style"]) {
      let z = e.indexOf(">", q + N.length) + 1;
      if (!e.startsWith(N, q) || !Xn(e, q + N.length, z)) return null;
      q = z;
    }
  }
  let y = s + 12,
    S = Q3e(e, y);
  if (S < 0) return null;
  let w = e.slice(y, S - 1);
  if (!/^(?:[\t\n\f\r ][^>]*)?$/.test(w)) return null;
  let A = S;
  if (e[A] === `
`) A++;
  let k = _l(e, A);
  if (!k) return null;
  let bodyEnd = k.bodyEnd;
  if (bodyEnd > A && e[bodyEnd - 1] === `
`) bodyEnd--;
  let lang = n[1].match(/[\t\n\f\r ]lang="([^"]*)"/)?.[1],
    j = ir(b[1], 5, b[1].length);
  return {
    body: e.slice(A, bodyEnd),
    ...(lang !== void 0 && wr(lang) && {
      lang: lang
    }),
    cover: En(j.get("content") ?? ""),
    ...(k.commentsDropped && {
      hoistedCommentsDropped: !0
    })
  };
}
function _l(e, n) {
  let commentsDropped = !1,
    s = e.length,
    h = !1;
  for (;;) {
    while (s > n && `	
\f\r `.includes(e[s - 1])) s--;
    if (e.endsWith("-->", s)) {
      let b = e.lastIndexOf("<!--", s - 7);
      if (b < n || !Vr(e.slice(b, s))) return null;
      commentsDropped = !0, s = b;
    } else if (!h && s - n >= 7 && e.endsWith("</html>", s)) h = !0, s -= 7;else if (h && s - n >= 7 && e.endsWith("</body>", s)) {
      let bodyEnd_2 = s - 7;
      if (commentsDropped) {
        let y = e.lastIndexOf("<!--", bodyEnd_2);
        if (y >= n && e.lastIndexOf("-->", bodyEnd_2) < y + 4) return null;
      }
      return {
        bodyEnd: bodyEnd_2,
        commentsDropped: commentsDropped
      };
    } else return null;
  }
}
function yl(body_3, lang_2, cover, s, h) {
  let b = 0,
    y = !1;
  for (;;) {
    ds(h);
    let w = vl(body_3);
    if (w !== null) {
      if (b === ls) throw new kge("levels", h.spent);
      body_3 = w.body, lang_2 = w.lang ?? lang_2, cover = w.cover, b++, y = !1;
      continue;
    }
    y ||= Rs(body_3);
    let A = s(body_3);
    if (A === body_3) break;
    body_3 = A;
  }
  let outcome = y ? b > 0 ? "partial" : "miss" : b > 0 ? "repaired" : void 0;
  return {
    body: body_3,
    lang: lang_2,
    cover: cover,
    outcome: outcome
  };
}
function Rs(e) {
  if (!uEn(e)) return !1;
  let n = e.indexOf(Ilt);
  return n !== -1 && n < lEn;
}
function vl(e) {
  if (!uEn(e)) return null;
  let n = xn.length,
    r = w => {
      if (!e.startsWith(w, n)) return !1;
      return n += w.length, !0;
    },
    lang_3;
  if (r(' lang="')) {
    let w = e.indexOf('"', n);
    if (w === -1 || !wr(e.slice(n, w))) return null;
    lang_3 = e.slice(n, w), n = w + 1;
  }
  if (!r("><head>" + Ilt)) return null;
  let h = n + J3e,
    b = 0;
  while (b < 2 && r("<script>")) {
    let w = e.indexOf("</script>", n);
    if (w === -1 || w > h) return null;
    let A = e.slice(n, w);
    if (A === "" || A.includes("<!--") || /<\/script/i.test(A)) return null;
    n = w + 9, b++;
  }
  if (b === 0 || !r(p6t)) return null;
  let cover_2 = r(Es);
  if (!cover_2 && !r(Ss)) return null;
  if (!r("<style>")) return null;
  let S = e.indexOf("</style>", n);
  if (S === -1 || e.slice(n, S).includes("<")) return null;
  if (n = S + 8, !r(xs)) return null;
  if (e.length - n < Sn.length || !e.endsWith(Sn)) return null;
  return {
    body: e.slice(n, e.length - Sn.length),
    lang: lang_3,
    cover: cover_2
  };
}
function xJo(slug_3) {
  let n = Object.freeze({
    slug: slug_3
  });
  return te().mintedRoundTripPublishSignals.add(n), n;
}
function PJo(e) {
  return typeof e === "object" && e !== null && te().mintedRoundTripPublishSignals.has(e);
}
function Er(e, n = "supporting file") {
  for (let r of e) {
    if (!Rn.has(r.contentType)) {
      m("artifact_publish", "file_not_servable", mXr(r.path, r.contentType));
      let s = GK(r.contentType),
        h = Rn.has(s) ? s : void 0;
      return F(QJo(n, r.path, r.contentType, h));
    }
    if (P1e.has(r.contentType)) {
      if (typeof r.content === "string" ? r.content.includes("\x1B") : r.content.includes(27)) return m("artifact_publish", "file_esc_byte"), F(`${n} "${r.path}" carries an ESC byte \u2014 publish ` + "text content without escape sequences (nothing was published)");
      if (typeof r.content === "string" ? r.content.includes("\x00") : r.content.includes(0)) return m("artifact_publish", "file_nul_byte"), F(`${n} "${r.path}" carries NUL bytes \u2014 publish ` + "text content as UTF-8 without embedded NULs (nothing was published)");
    }
    if (Dl.has(r.contentType)) {
      let s = typeof r.content === "string" ? r.content : r.content.toString("utf8");
      if (/<!(?:DOCTYPE|ENTITY)/i.test(s)) return m("artifact_publish", "file_dtd"), F(`${n} "${r.path}" carries a DOCTYPE or ENTITY ` + "declaration \u2014 XML supporting files must not use DTD " + "machinery (nothing was published)");
      let h = s.startsWith("\uFEFF") ? s.slice(1) : s,
        b = h.indexOf("<?");
      if (b !== -1) {
        if (!(b === 0 && /^<\?xml[\s?]/i.test(h)) || h.indexOf("<?", 2) !== -1) return m("artifact_publish", "file_pi"), F(`${n} "${r.path}" carries a processing ` + "instruction \u2014 XML supporting files may carry only a " + "leading XML declaration (nothing was published)");
      }
    }
    if (typeof r.content !== "string" && P1e.has(r.contentType) && r.content.length >= 2 && (r.content[0] === 255 && r.content[1] === 254 || r.content[0] === 254 && r.content[1] === 255)) return m("artifact_publish", "file_utf16_bom"), F(`${n} "${r.path}" is UTF-16 encoded \u2014 publish ` + "supporting text files as UTF-8 (nothing was published)");
  }
  return null;
}
async function OJo(e, n) {
  let r = iu();
  if (r !== null) {
    let y = Buffer.byteLength(e, "utf8");
    if (y > l_) return F(`too large: page is ${Math.ceil(y / 1024 / 1024)}MB (max ${l_ / 1024 / 1024}MB)`);
    let S = n.files ?? [],
      w = n.removeFiles ?? [];
    if (S.length > 0 || w.length > 0) {
      let k = kn(e, S, w);
      if (k !== null) return F(k.msg);
    }
    let A = Rr(e, S, n.copiedFiles ?? [], w);
    if (A !== null) return F(A);
    return vi(r, e, n);
  }
  let slug_4 = n.slug,
    h = n.relayOnly === !0 ? {
      count: 0
    } : void 0,
    b;
  try {
    b = !slug_4 ? await zi(e, n, h) : await rXr(n.ownPublishes, slug_4, () => zi(e, n, h));
  } catch (error) {
    if (h?.count === 0 && error instanceof Error) Object.defineProperty(error, Ts, {
      value: !0
    });
    throw error;
  }
  return h !== void 0 && b.err !== null && b.notCarried !== !0 && b.refusedShape !== !0 && h.count === 0 ? {
    ...b,
    refusedBeforeSend: !0
  } : b;
}
var Ts = Symbol("refusedBeforeSend");
function IJo(e) {
  return e instanceof Error && Reflect.get(e, Ts) === !0;
}
async function zi(e, n, relayOnly) {
  let t0 = performance.now(),
    h = relayOnly !== void 0 ? Nl(n) : void 0;
  if (h !== void 0) return m("artifact_publish", "relay_only_not_fresh_page"), {
    ...F(`Nothing was published: a publish made without asking may only create a new artifact, naming no url and setting no capabilities, contract, force, file removals or live files, but this one ${h}. Every publish in this session now goes through the usual permission check, which may need a person's approval.`),
    refusedShape: !0
  };
  let {
      slug: slug_5,
      title: title,
      favicon: favicon,
      icon: icon,
      label: label,
      note: note,
      description: description,
      capabilities: capabilities_3,
      session: session_3,
      hostServers: hostServers,
      readBack: readBack,
      publishContext: publishContext_2,
      originMetadata: originMetadata
    } = n,
    Y = n.copiedFiles ?? [];
  if (n.createPath !== void 0 && (slug_5 !== void 0 || n.force === !0 || n.baseVersion !== void 0 || Y.length > 0 || n.removeFiles !== void 0 && n.removeFiles.length > 0 || n.liveFiles !== void 0)) return m("artifact_publish", "create_bad_combo"), F("invalid publish options");
  let isRedeploy = !!slug_5,
    hasCaps = capabilities_3 !== void 0,
    ae = zK(),
    Z = n.force === !0,
    Ee = (n.files?.length ?? 0) > 0 || Y.length > 0 || (n.removeFiles?.length ?? 0) > 0 || n.liveFiles !== void 0,
    _e = n.autoEditAttribution !== void 0 || Ee ? n.baseVersion : ae ? n.baseVersion : void 0,
    Pe = {
      slug: slug_5,
      title: title,
      favicon: favicon,
      ...(icon && {
        icon: icon
      }),
      label: label,
      note: note,
      ...(slug_5 !== void 0 && n.deadline !== void 0 && {
        deadline: n.deadline
      }),
      ...(n.requestId !== void 0 && {
        requestId: n.requestId
      }),
      createConfirmed: n.createConfirmed,
      description: description,
      publishContext: publishContext_2,
      originMetadata: originMetadata,
      ...(n.autoEditAttribution && {
        autoEditAttribution: n.autoEditAttribution
      }),
      ...(n.createPath === void 0 && n.thumbnail && {
        thumbnail: n.thumbnail
      }),
      ...(n.createPath === void 0 && n.thumbnailDark && {
        thumbnailDark: n.thumbnailDark
      })
    },
    we = Er(n.files ?? []);
  if (we !== null) return we;
  let je = await lXr(e, {
      injectDiagramRuntime: n.injectDiagramRuntime,
      injectHighlightRuntime: n.injectHighlightRuntime,
      expectRoundTrippedPage: n.expectRoundTrippedPage
    }),
    Ne = cXr(je.body, je.roundTripLang, je.roundTripCover),
    M = Buffer.byteLength(Ne, "utf8"),
    {
      body: body_4,
      mermaidInjected: Me,
      hljsInjected: ze,
      unnested: unnested_2,
      hoistedCommentsDropped: hoistedCommentsDropped
    } = je,
    He = Yo(body_4) ? [p$() ? Go : qo] : [];
  if (M > l_) return m("artifact_publish", "too_large", {
    page_bytes: M,
    mermaid_injected: Me,
    hljs_injected: ze
  }), F(`too large: rendered page is ${Math.ceil(M / 1024 / 1024)}MB (max ${l_ / 1024 / 1024}MB)` + (ze ? " \u2014 includes the inline syntax-highlight runtime (~0.6MB), added because the page contains fenced code" : ""));
  Pe.template = "plain";
  let capabilities_4 = capabilities_3,
    Ve = [],
    $e = [];
  if (capabilities_3 !== void 0 && session_3 !== void 0) {
    let {
        connectorNames: connectorNames,
        serverNames: serverNames
      } = session_3,
      X = oks(capabilities_3, connectorNames, serverNames, {
        hostServers: hostServers
      });
    if (X.ok && hostServers === void 0 && X.servers.some(item => Hmt(item) !== void 0)) {
      let session_4 = te(),
        Fe = session_4.accountEpoch,
        roster_5 = await wge({
          timeoutMs: timeoutMs,
          ...(n.signal && {
            signal: n.signal
          }),
          credentials: n.credentials
        });
      if (!("err" in roster_5)) {
        jIe({
          session: session_4,
          epoch: Fe,
          roster: roster_5,
          storageV5: void 0
        });
        let Ue = gEr(roster_5, "mcp", hEr);
        if (n.noteHostServers?.(Ue), !Ue) X = oks(capabilities_3, connectorNames, serverNames, {
          hostServers: !1
        });
      } else c("artifact_publish", "host_roster_fetch_failed", {
        cause: f(roster_5.cause)
      });
    }
    if (!X.ok) {
      let host_unavailable_count = U(X.malformed, be => be.kind === "host_unavailable"),
        unknown_tools_count = U(X.malformed, be => be.kind === "unknown_tools"),
        opaque_id_count = U(X.malformed, be => be.kind === "opaque_id" || be.kind === "known_id" || be.kind === "tool_name" || be.kind === "connector_as_host" || be.kind === "undeclarable_name"),
        Ue = U(X.malformed, be => be.kind === "local_server_as_first_party");
      m("artifact_publish", host_unavailable_count > 0 ? "host_server_unavailable" : X.internal.length > 0 ? "internal_host_server_name" : Ue > 0 ? "first_party_server_collision" : X.unresolved.length > 0 ? "unresolved_mcp_server" : opaque_id_count > 0 ? "opaque_mcp_server_id" : unknown_tools_count > 0 ? "unknown_mcp_tool" : X.malformed.length > 0 ? "malformed_mcp_manifest" : "mcp_manifest_over_caps", {
        page_bytes: M,
        unresolved_count: X.unresolved.length,
        internal_count: X.internal.length,
        malformed_count: X.malformed.length - opaque_id_count - host_unavailable_count - unknown_tools_count,
        opaque_id_count: opaque_id_count,
        host_unavailable_count: host_unavailable_count,
        unknown_tools_count: unknown_tools_count,
        oversized_count: X.oversized.length,
        ...(X.serverCount !== null && {
          server_count: X.serverCount
        })
      });
      let Ke = tc(X.malformed);
      if (X.unresolved.length > 0) {
        let be = IF(X.unresolved, 8, Ye => `"${gg(Ye)}"`),
          ot = connectorNames.filter(Fmt),
          Ze = IF(L(ot.map(item => item.server)), 8, Ye => `"${gg(Ye)}"`),
          dn = Ze.length === 0 ? "" : ` (connectors this session: ${Ze.join(", ")})`,
          un = ot.some(item => Nt(item.toolPrefix) !== null);
        Ke.push(`unknown ${P(X.unresolved.length, "connector")}: ${be.join(", ")} \u2014 ` + (un ? "set `server` to the connector's exact display name" : `set \`server\` to the segment between \`mcp__\` and the next \`__\` of a tool name from this session (for \`mcp__${eEn()}__search\`, use \`${eEn()}\`, copied exactly), or to the connector's exact display name`) + `${dn}. The control plane would accept this manifest, but the page would break at view time`);
      }
      if (X.internal.length > 0) {
        let be = IF(L(X.internal), 8, ot => `"${gg(ot)}"`);
        Ke.push(`built-in ${P(X.internal.length, "server")} ${be.join(", ")} ` + "\u2014 the Claude app's own servers, which it never exposes to " + "pages as host servers; declare only servers from the MCP configuration (host:<name> for the `mcp__<name>__<tool>` tools of a server you configured). The control plane would accept this manifest, but the page would break at view time");
      }
      for (let be of X.oversized) Ke.push(`${Fen(be.server)} "${gg(be.server)}" declares ${be.toolCount} tools, counted after any same-name entries merge (max ${Jws}) \u2014 trim the tools ` + "list; the control plane would reject it anyway");
      if (X.serverCount !== null) Ke.push(`manifest declares ${X.serverCount} servers (max ${Qws}) \u2014 declare only the servers ` + "the page actually calls; the control plane would reject it anyway");
      return F(`mcp manifest rejected: ${Ke.join("; ")}.`);
    }
    capabilities_4 = X.caps, Ve = X.warnings, $e = X.servers;
    let x = [e, ...(n.files ?? []).flatMap(item => P1e.has(item.contentType) ? [Wi(item.content)] : [])],
      ee = X.servers.length > 0 ? sks(x, X.servers, 64) : [],
      D = x1i(x, X.renamed).filter(([ce]) => !ee.includes(ce));
    if (D.length > 0) Ve = [...Ve, `the page source still holds ${P(D.length, "a server name", "server names")} this publish rewrote in the manifest, as ${P(D.length, "a quoted string", "quoted strings")} \u2014 ${IF(D, 8, ([ce, Fe]) => `"${gg(ce)}" (viewers resolve only "${gg(Fe)}")`).join(", ")} \u2014 so if the page passes ${D.length === 1 ? "it" : "them"} to callTool(\u2026) / watchTool(\u2026), those calls fail for every viewer; use the display ${P(D.length, "name")} there.`];
  } else if (capabilities_3 !== void 0) {
    let slug_count = P1i(capabilities_3).length;
    if (slug_count > 0) c("artifact_publish", "slug_without_pairs", {
      page_bytes: M,
      slug_count: slug_count
    });
  }
  let mt = Object.keys(capabilities_4 ?? {}),
    sentCapabilities,
    hostGrant = $mt(i.CLAUDE_ARTIFACT_HOST_GRANT);
  if (capabilities_4 !== void 0) {
    let H = $mo(capabilities_4, hostGrant);
    if (!H.ok) {
      m("artifact_publish", "host_grant_unreadable", {
        page_bytes: M,
        host_server_count: H.refused.length
      });
      let pe = IF(H.refused, 8, X => `"${gg(X)}"`);
      return F(`mcp manifest rejected: this computer's local-server grant (${aks}, set by the app that launched this session; not something to fix from here) could not be read, so ` + `no host: server can be declared from this session \u2014 ${pe.join(", ")}; declare only claude.ai connectors (set "server" to the connector's display name), or to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration).`);
    }
    if (H.dropped.length > 0) {
      c("artifact_publish", "host_grant_narrowed", {
        page_bytes: M,
        dropped_count: H.dropped.length
      }), capabilities_4 = H.caps, $e = $e.filter(item => H.servers.includes(item));
      let pe = H.dropped.length === 1 ? "it" : "them";
      sentCapabilities = H.caps, Ve = [...Ve, `this computer did not grant the page these local tools, so they were left out of the manifest: ${Js(H.dropped)} \u2014 the page's ` + `calls to ${pe} fail for every viewer; tell the user which local tools were left out` + (H.servers.length === 0 ? ', and that the page now has no connector access at all (no declared server remained, so this publish carries no "mcp" and any stored "mcp" declaration is replaced)' : "") + "."];
    }
  }
  if (session_3 !== void 0 && $e.length > 0) {
    let H = [e, ...(n.files ?? []).flatMap(item => P1e.has(item.contentType) ? [Wi(item.content)] : [])],
      pe = sks(H, $e, 64);
    if (pe.length > 0) Ve = [...Ve, `the page calls callTool/watchTool with ${P(pe.length, "a server name", "server names")} not in this manifest \u2014 ${IF(pe, 8, X => `"${gg(X)}"`).join(", ")} \u2014 and ${$en((sentCapabilities ?? capabilities_4)?.mcp) ? "under this dynamic declaration each viewer is asked to approve them at first use (a name the viewer has no connector for is refused)" : "those calls fail for every viewer"}; the manifest declares ${IF($e, 8, X => `"${gg(X)}"`).join(", ")}.`];
  }
  if (n.contract !== void 0 && n.contract !== "latest" && (!dee.test(n.contract) || n.contract === HLt)) return m("artifact_publish", "invalid_contract", {
    page_bytes: M
  }), F(`invalid contract ${_(n.contract)} \u2014 pass 'latest' ` + "or a published version like 0.1.0.");
  let upgrade_2 = n.contract === "latest",
    explicitPin = n.contract !== void 0 && n.contract !== "latest" ? n.contract : null,
    rt = n.contract !== void 0,
    ut = slug_5 && !rt ? n.storedPin : null,
    storedCaps;
  if (slug_5 && !rt && ut === void 0) {
    let H = await V0(slug_5, void 0, n.credentials);
    if (H !== null && "err" in H && n.onPinReadError !== "assume_none" && er(H)) {
      let pe = vn(H);
      if (await J(tr, n.signal), !n.signal?.aborted) H = await V0(slug_5, n.signal, n.credentials), c("artifact_publish", "pin_readback_retried", {
        page_bytes: M,
        ...pe,
        recovered: !(H !== null && "err" in H)
      });
    }
    if (H !== null && "err" in H) {
      if (n.onPinReadError === "assume_none") c("artifact_publish", "pin_readback_assumed_none", {
        page_bytes: M
      }), ut = null;else return m("artifact_publish", "pin_readback_failed", {
        page_bytes: M,
        ...vn(H)
      }), F(`couldn't read the artifact's stored contract pin (${H.err}) \u2014 ` + "a republish preserves the stored pin, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics).");
    } else ut = H === null ? null : tz(H.contract), storedCaps = H?.capabilities ?? {};
  }
  let ie = tz(ut);
  if (slug_5 && storedCaps === void 0 && Object.keys(capabilities_3 ?? {}).length > 0) {
    let H = await V0(slug_5, void 0, n.credentials);
    if (H !== null && "err" in H && n.contract === void 0 && er(H)) {
      if (await J(tr, n.signal), !n.signal?.aborted) H = await V0(slug_5, void 0, n.credentials);
    }
    if (H !== null && "err" in H) {
      if (n.contract === void 0) return m("artifact_publish", "capability_readback_failed", {
        page_bytes: M,
        ...vn(H)
      }), F(`couldn't read the artifact's stored capability declaration (${H.err}) \u2014 ` + "a republish that declares capabilities must not silently revoke stored ones, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics, and the capabilities you send then replace the stored ones).");
      c("artifact_publish", "retrofit_guard_skipped");
    } else storedCaps = H?.capabilities ?? {};
  }
  if (capabilities_3 === void 0 && slug_5) {
    let H = await ln({
      slug: slug_5,
      hostGrant: hostGrant,
      storedCaps: storedCaps,
      signal: n.signal,
      credentials: n.credentials,
      pageBytes: M,
      lane: "page"
    });
    if (!H.ok) return F(H.err);
    storedCaps = H.storedCaps;
  }
  let Se = H => H === cee ? nz : H,
    It = Object.keys(storedCaps ?? {}).map(Se),
    kt = mt.map(Se),
    at = Object.entries(storedCaps ?? {}).filter(([H]) => !kt.includes(Se(H))),
    it = pEr(storedCaps?.db) ?? [],
    Pt = capabilities_4?.db,
    Et = it.length > 0 && (Pt === !0 || i3(Pt) && !Object.hasOwn(Pt, "rules")),
    cn = rks(it),
    st = Zws(storedCaps?.user) ?? [],
    Dt = capabilities_4?.user,
    ft = st.length > 0 && (Dt === !0 || i3(Dt) && !Object.hasOwn(Dt, "scopes")),
    Je = eks(st),
    Qe = () => {
      let H = _(st),
        pe = NS(H, {
          max: 200
        });
      return Je && pe === H ? pe : "";
    };
  if (n.createPath === void 0 && at.length > 0 && kt.some(item => !It.includes(item))) {
    m("artifact_publish", "capability_retrofit_refused");
    let H = IF(at, 8, ([ce]) => NS(ce)),
      pe = _({
        ...Object.fromEntries(at),
        ...capabilities_4,
        ...(Et && {
          db: storedCaps?.db
        }),
        ...(ft && {
          user: storedCaps?.user
        })
      }),
      X = NS(pe, {
        max: 600
      }),
      x = Et || at.some(([ce]) => ce === "db"),
      ee = ft || at.some(([ce]) => ce === "user"),
      D = X === pe && !/[<>]/.test(RE(pe)) && Jd(pe) === pe && (!x || nks(storedCaps?.db)) && (!ee || tks(storedCaps?.user)) ? X : "";
    return F(`your capabilities declaration omits the stored ${P(at.length, "capability", "capabilities")} ${H.join(", ")} while adding new ones \u2014 a sent declaration replaces the stored one, so this publish would have silently revoked ${at.length === 1 ? "it" : "them"}. To keep ${at.length === 1 ? "it" : "them"}, republish declaring the union${D !== "" ? `: ${D}` : " (republish with capabilities omitted to read the stored declaration back, then resend it plus your additions)"}. To revoke on purpose, publish that union first, then republish without the revoked names (a declaration that adds no new name goes out as sent); capabilities: {} clears everything.`);
  }
  if (n.createPath === void 0 && Et) {
    m("artifact_publish", "db_rules_reset_refused");
    let H = _(it),
      pe = NS(H, {
        max: 600
      }),
      X = cn && pe === H ? pe : "",
      x = ft ? ` The sent user block likewise omits its stored scopes${Qe() !== "" ? ` (${Qe()})` : ""}: resend user with them as well, or user: {"scopes": []} to drop them.` : "";
    return F(`your capabilities declaration re-sends db without its rules while the artifact stores ${it.length} ${P(it.length, "access rule")}${X !== "" ? `: ${X}` : ' (not listed here; read the artifact with action "read" to see them)'} \u2014 ` + `a sent db block replaces the stored one, rules included, so this publish would have reset them to the defaults (anyone who can open the artifact can read its shared data, and anyone with more than view-only access can write it). To keep them, ${X !== "" ? "resend db with those rules" : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend db with its rules"}; to reset them on purpose, send db: {"rules": []}.` + x);
  }
  if (n.createPath === void 0 && ft) {
    m("artifact_publish", "user_scopes_reset_refused");
    let H = Qe();
    return F(`your capabilities declaration re-sends user without its scopes while the artifact stores ${st.length} ${P(st.length, "scope")}${H !== "" ? `: ${H}` : ""} \u2014 ` + `a sent user block replaces the stored one, scopes included, so this publish would have dropped ${st.length === 1 ? "it" : "them"} (for profile, the page would no longer receive the viewer's name and avatar). To keep ${st.length === 1 ? "it" : "them"}, ${H !== "" ? `resend user with scopes: ${H}` : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend user with its scopes"}; to drop ${st.length === 1 ? "it" : "them"} on purpose, send user: {"scopes": []}.`);
  }
  let qe = await $o({
    capabilities: capabilities_4,
    echoPin: ie,
    explicitPin: explicitPin,
    upgrade: upgrade_2,
    pageBytes: M,
    ...(n.createPath !== void 0 && {
      latestFetchRemedy: {
        retry: "nothing was created; retry.",
        refused: `Nothing was created; tell the user the page has to be created from ${wn}.`
      }
    }),
    credentials: n.credentials
  });
  if ("errMsg" in qe) return F(qe.errMsg);
  let fields = qe.fields,
    sent = {
      capNames: Object.keys(capabilities_4 ?? {}).map(Se),
      hostDecl: Oo(capabilities_4),
      latestContract: "contract" in fields && explicitPin === null && ie === null
    },
    reservedSlug,
    Ot = H => Qo(ms(H, readBack ? slug_5 : void 0, n.credentials, n.signal), [...Ve, ...He]).then(pe => {
      if (pe.err === null && unnested_2 !== void 0) c("artifact_publish", unnested_2 === "repaired" ? "nested_page_repaired" : "nested_repair_partial");
      if (pe.err === null && hoistedCommentsDropped) c("artifact_publish", "hoisted_comment_dropped");
      if (pe.err !== null) return reservedSlug !== void 0 && pe.strandedSlug === void 0 && !pe.conflict && !pe.gone ? {
        ...pe,
        reservedSlug: reservedSlug
      } : pe;
      return {
        ...Ko(pe, n.files ?? []),
        ...(sentCapabilities !== void 0 && {
          sentCapabilities: sentCapabilities
        })
      };
    }),
    de = n.files ?? [],
    ht = n.removeFiles ?? [];
  if (de.length > 0 || Y.length > 0 || ht.length > 0 || n.liveFiles !== void 0) {
    if (!p$()) return m("artifact_publish", "multifile_flag_off", {
      n_files: de.length + Y.length,
      n_removed: ht.length
    }), F(ht.length > 0 ? "Supporting files can't be published or removed right now, so nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting `files`) would update the page but can't remove a file." : "Supporting files can't be published right now, so nothing was published. Publish the page as a single file instead: inline what it needs and omit `files`.");
    if (Y.length > 0 && !Y3e()) return m("artifact_publish", "copy_from_flag_off", {
      n_copied: Y.length
    }), F(Ar);
    if (n.createPath !== void 0) return Ot(Kn(Pe, H => Vi(Ne, H, fields, void 0, !1, {
      t0: t0,
      pageBytes: M,
      lane: "inline",
      isRedeploy: isRedeploy,
      hasCaps: hasCaps,
      forced: !1,
      ...(ie !== null && {
        echoedPin: ie
      }),
      ...(n.liveFilesGate === !0 && {
        liveFilesOn: !0
      }),
      sent: sent
    }, n.ownPublishes, n.credentials, n.createPath, n.onRetry, n.signal, de)));
    return Ot(Kn(Pe, (H, pe) => Tr(Ne, de, Y, ht, H, fields, {
      baseVersion: pe ?? _e,
      force: Z,
      ...(n.liveFiles !== void 0 && {
        liveFiles: n.liveFiles
      }),
      ...(n.copiedCrossOrgOk === !0 && {
        copiedCrossOrgOk: !0
      }),
      ...(reservedSlug !== void 0 && {
        reservedSlug: reservedSlug
      }),
      ownPublishes: n.ownPublishes,
      tele: {
        t0: t0,
        pageBytes: M,
        lane: "inline",
        isRedeploy: isRedeploy,
        hasCaps: hasCaps,
        forced: Z,
        ...(ie !== null && {
          echoedPin: ie
        }),
        ...(n.liveFilesGate === !0 && {
          liveFilesOn: !0
        }),
        sent: sent
      },
      onRetry: n.onRetry,
      onReserved: X => {
        reservedSlug = X;
      },
      signal: n.signal,
      credentials: n.credentials,
      relayOnly: relayOnly
    })));
  }
  let $t = slug_5 === void 0 && n.createPath === void 0 && p$() ? await wl(n.credentials, n.signal, t0, relayOnly) : void 0;
  if (reservedSlug = $t, n.signal?.aborted) return F("publish cancelled \u2014 nothing was published.");
  return Ot(Kn(Pe, H => Vi(Ne, H, fields, _e, Z, {
    t0: t0,
    pageBytes: M,
    lane: "inline",
    isRedeploy: isRedeploy,
    hasCaps: hasCaps,
    forced: Z,
    ...(ie !== null && {
      echoedPin: ie
    }),
    ...(n.liveFilesGate === !0 && {
      liveFilesOn: !0
    }),
    sent: sent
  }, n.ownPublishes, n.credentials, n.createPath, n.onRetry, n.signal, void 0, $t, relayOnly)));
}
async function wl(credentials_5, n, r, s) {
  if (n?.aborted) return;
  try {
    let h = {
        refreshOAuth: !0,
        headers: xu(),
        timeout: 30000,
        credentials: credentials_5,
        relayOnCredentialRefusal: !0
      },
      b;
    try {
      b = s !== void 0 ? await xr("/api/frame/deploy/prepare", f6t(), h, s, n) : await Au.post("/api/frame/deploy/prepare", f6t(), h);
    } catch (error) {
      if (error instanceof RelayOnlyUnsentError) return;
      throw error;
    }
    if (b.ok && b.status === 200 && typeof b.data?.slug === "string" && hr.test(b.data.slug)) return b.data.slug;
    if (!b.ok || b.status !== 403 && b.status !== 404) c("artifact_publish", "reserve_unavailable", {
      reserve_status: b.ok ? b.status : 0
    });
  } catch (error) {
    c("artifact_publish", "reserve_unavailable", {
      reserve_status: 0,
      ...t3(error, r)
    });
  }
  return;
}
async function Kn(e, n) {
  let r = await n(e);
  if (r.err === null || r.thumbnailRejected === void 0 || r.strandedSlug !== void 0 || r.liveVersion !== void 0) return r;
  if (e.thumbnail === void 0 && e.thumbnailDark === void 0) return m("artifact_publish", "thumbnail_rejected"), r;
  c("artifact_publish", "thumbnail_rejected");
  let {
      thumbnail: thumbnail,
      thumbnailDark: thumbnailDark,
      ...b
    } = e,
    y = r.created === void 0 ? await n(b) : await n({
      ...b,
      slug: r.created.slug
    }, r.created.version);
  return y.err === null ? {
    ...y,
    warnings: [...(y.warnings ?? []), `The custom thumbnail was not accepted by the server (${r.thumbnailRejected}); published with the automatic screenshot instead.`]
  } : y;
}
function MJo() {
  if (yf() === "claude-vscode") return "epitaxy_pane";
  if (id()) return "desktop_pane";
  return "terminal_link";
}
async function uXr(event_name, n) {
  try {
    let r = await Au.post("/api/frame/track", {
      event_name: event_name,
      ...(n.slug && {
        slug: n.slug
      }),
      ...(n.via && {
        via: n.via
      }),
      ...(n.mode && {
        mode: n.mode
      })
    }, {
      refreshOAuth: !0,
      headers: xu(),
      timeout: 5000,
      credentials: n.credentials
    });
    if (!r.ok) t(`[artifact] /track skipped: ${r.reason}`);else if (r.status !== 204) t(`[artifact] /track ${r.status}: ${oA(r.data)}`);
  } catch (error) {
    t(`[artifact] /track failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
var El = ["frame_daily_publish_cap_reached", "frame_daily_push_cap_reached"],
  Sl = {
    frame_daily_publish_cap_reached: "daily_new",
    frame_daily_push_cap_reached: "daily_pushes"
  },
  xl = p(() => u({
    error: B(El),
    message: o().catch("")
  })),
  Al = {
    daily_new: "daily new-artifact limit for your plan reached \u2014 resets at UTC midnight",
    daily_pushes: "daily publish limit for your plan reached \u2014 resets at UTC midnight"
  },
  fXr = "publish 429: ",
  ks = "x-frame-push-remaining";
function Ps(e) {
  let n = typeof e === "string" ? e.trim() : "";
  return /^\d{1,9}$/.test(n) ? Number(n) : void 0;
}
function i6t(e = Date.now()) {
  let date = new Date(e);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1) / 1000;
}
function Cs(e) {
  let n = typeof e === "string" ? Date.parse(e) : Number.NaN;
  return i6t(Number.isFinite(n) ? n : Date.now());
}
function Mt(e) {
  let n = xl().safeParse(e);
  if (!n.success) return;
  let capType = Sl[n.data.error],
    s = LV(n.data.message, 200),
    h = s !== "" ? s : Al[capType];
  return {
    capType: capType,
    message: `${fXr}${h}`
  };
}
var maxAttempts = 3,
  baseMs = 5000,
  Sr = 20000,
  Tl = 30000;
function Os(e) {
  let n = y_(e) ?? 2000;
  return n <= Tl ? n : void 0;
}
function $s(e) {
  return Math.min(y_(e) ?? Cl, Sr);
}
function Fs(e, n) {
  let r = Math.round(Cy({
      attempt: e - 1,
      baseMs: baseMs,
      jitter: {
        kind: "proportional",
        ratio: 0.25
      }
    })),
    s = y_(n) ?? 0;
  return Math.min(Math.max(s, r), Sr);
}
class on extends Error {
  startedAtMs;
  constructor(e, n, r) {
    super(e, r);
    this.startedAtMs = n;
  }
}
class Lt extends on {}
class At extends on {
  seen;
  resent;
  constructor(e, n, r, s, h) {
    super(e, n, r);
    this.seen = s;
    this.resent = h;
  }
}
function kl(e) {
  return e.seen !== void 0 && h8i(e.seen);
}
function Ns(e) {
  let n = 0,
    r = 0;
  return s => {
    if (n += s.json_bytes, r += s.wire_bytes, e.json_bytes = n, e.wire_bytes = r, e.body_gzip = e.body_gzip === !0 || s.body_gzip, s.gzip_skip !== void 0) e.gzip_skip = f(s.gzip_skip);
    if (s.gzip_fallback_status !== void 0) e.gzip_fallback_status ??= s.gzip_fallback_status;
  };
}
function Ms(e, n) {
  let r = [...(e.attemptId === void 0 ? [] : [`attempt_id=${e.attemptId}`]), ...(e.attemptId !== void 0 && e.resend ? ["resend=1"] : []), ...(n.createConfirmed === !0 ? [pen] : [])];
  return r.length === 0 ? "/api/frame/deploy/direct" : `/api/frame/deploy/direct?${r.join("&")}`;
}
async function Pl(e, n, r) {
  let s = {
    ...t3(n.cause, n.startedAtMs),
    ...n.seen
  };
  t(`[artifact] publish request died before its whole body left this machine (socket took ${s.bytes_flushed} of ${s.body_bytes} bytes) \u2014 re-sending once on a fresh connection`);
  let deploy_final_status = 0;
  try {
    let b = await e();
    return deploy_final_status = b.ok ? b.status : 0, b;
  } finally {
    c("artifact_publish", "deploy_resent", {
      ...r,
      ...s,
      deploy_final_status: deploy_final_status
    });
  }
}
var Ls = 2,
  Cl = 2000;
function Is(e) {
  return e.ok && e.fromFrame && e.status === 409 && dt(e.data) === "publish_settling";
}
function Ol(e) {
  return typeof e === "object" && e !== null && "replayed" in e && e.replayed === !0;
}
async function $l(e, n, r, s) {
  let h = {
    ...t3(n.cause, n.startedAtMs),
    ...(n instanceof At && n.seen),
    ...(n.cause instanceof Tmt && {
      deploy_first_status: n.cause.status
    }),
    leg: f(n instanceof Lt ? "relay" : "direct")
  };
  t("[artifact] publish request ended without a clear answer \u2014 re-sending it once, marked as a re-send, so a publish that already landed is answered rather than repeated");
  let deploy_final_status_2 = 0,
    resend_route,
    settle_resends = 0,
    replayed = !1,
    A = !1;
  try {
    let k = await e();
    resend_route = f(k.route);
    while (Is(k) && settle_resends < Ls) {
      let R = $s(k.response?.headers?.["retry-after"]);
      if (t(`[artifact] the first attempt landed and its content is still being stored \u2014 re-sending in ${R}ms`), await J(R, s), s?.aborted) break;
      settle_resends += 1, k = await e(), resend_route = f(k.route);
    }
    if (deploy_final_status_2 = k.ok ? k.status : 0, k.route === "direct" && JLn(k) && n instanceof Lt) throw A = !0, n;
    return replayed = k.ok && k.status >= 200 && k.status < 300 && Ol(k.data), k;
  } finally {
    c("artifact_publish", "deploy_resent", {
      ...r,
      ...h,
      deploy_final_status: deploy_final_status_2,
      ...(resend_route !== void 0 && {
        resend_route: resend_route
      }),
      settle_resends: settle_resends,
      replayed: replayed,
      ...(A && {
        resend_refused: !0
      }),
      ...(s?.aborted && {
        cancelled: !0
      })
    });
  }
}
function Fl(e) {
  if (!e.ok || e.status === 408 || e.status === 499) return !0;
  if (e.status === 429) return Mt(e.data) === void 0;
  return e.status >= 500 && an(e.status, e.data) === null && dt(e.data) !== "render_busy";
}
class Ds extends on {}
async function _n(e) {
  let n = performance.now();
  try {
    return await e();
  } catch (r) {
    if (r instanceof RelayOnlyUnsentError) throw r;
    throw new Ds(r instanceof Error ? r.message : String(r), n, {
      cause: r
    });
  }
}
function sr(e, n) {
  return e instanceof on ? {
    ...t3(e.cause, e.startedAtMs),
    ...(e instanceof At && e.resent && {
      resent: !0
    }),
    ...(e.cause instanceof Tmt && {
      deploy_status: e.cause.status
    })
  } : t3(e, n);
}
async function ar(e, n, credentials_6, s, onEncoding, b = {}, y = void 0, S) {
  let w = {
      refreshOAuth: !0,
      headers: xu(),
      streamUpload: {
        tailFloorMs: tailFloorMs,
        onSettled: R => {
          b.seen = R, s(R);
        }
      },
      gzipBody: {
        tailFloorMs: tailFloorMs(void 0),
        onEncoding: onEncoding
      },
      ...(b.freshConnection && {
        freshConnection: !0
      }),
      relayOnCredentialRefusal: !0,
      maxBodyLength: 2 * l_,
      maxContentLength: maxContentLength_7,
      relayProbe: relayProbe,
      credentials: credentials_6
    },
    k = await (y !== void 0 ? xr(e, n, w, y, S) : Au.post(e, n, w)).catch(R => {
      if (R instanceof Tmt) b.seen = void 0, s(void 0);
      throw R;
    });
  return s(void 0), k;
}
function Nl(e) {
  if (e.slug !== void 0 || e.baseVersion !== void 0) return "names an existing artifact";
  if (e.force === !0) return "sets force";
  if (e.capabilities !== void 0) return "declares capabilities";
  if (e.contract !== void 0) return "sets a contract";
  if ((e.removeFiles?.length ?? 0) > 0) return "removes files";
  if (e.createPath !== void 0 || e.liveFiles !== void 0 || (e.files ?? []).some(item => item.live !== void 0 || item.reseed === !0)) return "makes or changes a live file";
  return;
}
function Ml(e) {
  return tn() && (QLn("POST", e, "only") !== "relay" || !iOr());
}
function Bs(e) {
  return m("artifact_publish", "relay_only_unsent", e), {
    ...F("Nothing was published: a publish made without asking must go through the cloud session's gateway, which could not carry it. Publishing it again now goes through the usual permission check, which may need a person's approval."),
    notCarried: !0
  };
}
function js() {
  return F("publish cancelled \u2014 nothing was published.");
}
function zs(e) {
  return e instanceof Error && e.cause instanceof RelayOnlyCancelledError;
}
class RelayOnlyUnsentError extends Error {
  constructor(e = "this request never reached the artifact server: the session gateway did not carry it") {
    super(e);
    this.name = "RelayOnlyUnsentError";
  }
}
class RelayOnlyCancelledError extends RelayOnlyUnsentError {
  constructor() {
    super("this request was not sent again: the publish was cancelled while the session gateway was busy");
    this.name = "RelayOnlyCancelledError";
  }
}
var pXr = 5000;
async function xr(e, n, r, s, h) {
  for (let b = !1;; b = !0) {
    if (Ml(e)) throw new RelayOnlyUnsentError();
    s.count += 1;
    let y = await Au.postRelayOnly(e, n, r);
    if (JJe(y)) throw new RelayOnlyUnsentError();
    if (!y.ok || y.gatewayRetryAfterMs === void 0) return y;
    if (s.count -= 1, h?.aborted) throw new RelayOnlyCancelledError();
    if (b) throw c("artifact_publish", "relay_only_busy"), new RelayOnlyUnsentError();
    if (await J(Math.min(y.gatewayRetryAfterMs, pXr), h), h?.aborted) throw new RelayOnlyCancelledError();
  }
}
function tailFloorMs(e) {
  return (smo(e) + 30) * 1000;
}
async function Hs(e, n, r, s, h = !1, b = !1, y = !1) {
  let attemptId = ho(),
    w = !1,
    A = async (freshConnection = !1) => {
      let ue = {
          attemptId: attemptId,
          ...(freshConnection && {
            freshConnection: freshConnection
          }),
          ...(w && {
            resend: !0
          })
        },
        ae = performance.now();
      try {
        let Z = await e(ue);
        if (s.wire = _ue(Z), Z.mcpDoubt !== void 0) s.deploy_status = Z.mcpDoubt;
        return Z;
      } catch (Z) {
        if (Z instanceof RelayOnlyUnsentError) {
          if (deploy_attempts === 1 && y) throw Z;
          throw new At(wt(Z instanceof RelayOnlyCancelledError ? "the publish was cancelled before a later send of it went out" : "a later send of this publish could not go through the cloud session's gateway"), ae, {
            cause: Z
          }, ue.seen, freshConnection);
        }
        s.wire = C_e(Z);
        let Ee = oA(Z instanceof Error ? Z.message : String(Z));
        throw ZP(Z) ? new Lt(wt(`relay request failed: ${Ee}`), ae, {
          cause: Z
        }) : new At(Z instanceof Tmt ? Wt() : wt(`deploy request failed: ${Ee}`), ae, {
          cause: Z
        }, ue.seen, freshConnection);
      }
    },
    deploy_attempts = 1,
    R,
    W;
  try {
    R = await A();
  } catch (error) {
    if (r?.aborted) throw error;
    if (error instanceof At && error.cause instanceof Tmt) W = error;
    if (b && (error instanceof Lt || error instanceof At && (Q1(error.cause) || error === W))) deploy_attempts += 1, w = !0, R = await $l(() => A(!0), error, s, r);else if (error instanceof At && Q1(error.cause) && kl(error)) deploy_attempts += 1, R = await Pl(() => A(!0), error, s);else throw error;
  }
  let j = !1,
    q,
    N = G => {
      q ??= G.status === 429 ? 429 : 503, t(`[artifact] /deploy/direct ${G.status} \u2014 retrying in ${G.delayMs}ms (attempt ${G.attempt} of ${G.maxAttempts})`), n?.(G);
    },
    z = async G => {
      if (await J(G, r), r?.aborted) return t("[artifact] /deploy/direct retry cancelled by user"), !1;
      return deploy_attempts += 1, j = !0, R = await A(), j = !1, !0;
    },
    O = () => {
      if (W !== void 0 && Fl(R)) throw W;
      return R;
    },
    Y = R.ok && R.fromFrame && R.status === 503 && dt(R.data) === "render_busy";
  try {
    if (R.ok && R.fromFrame && R.status === 429) {
      if (Mt(R.data) !== void 0) return t("[artifact] /deploy/direct 429 is a plan cap \u2014 not retrying"), O();
      let delayMs = Os(R.response?.headers?.["retry-after"]);
      if (delayMs === void 0) return O();
      return N({
        status: 429,
        attempt: 2,
        maxAttempts: 2,
        delayMs: delayMs
      }), await z(delayMs), O();
    }
    if (Y && R.ok) {
      let delayMs_2 = Math.min(y_(R.response?.headers?.["retry-after"]) ?? 1000, Sr);
      return N({
        status: 503,
        attempt: 2,
        maxAttempts: 2,
        delayMs: delayMs_2
      }), await z(delayMs_2), O();
    }
    let attempt = 2,
      ue = !1;
    while (R.ok && R.fromFrame && R.status === 503 && !(h && an(R.status, R.data)) && attempt <= maxAttempts) {
      let delayMs_3 = Fs(attempt, R.response?.headers?.["retry-after"]);
      if (N({
        status: 503,
        attempt: attempt,
        maxAttempts: maxAttempts,
        delayMs: delayMs_3
      }), b && !w && !an(R.status, R.data)) w = !0, ue = !0;
      if (!(await z(delayMs_3))) break;
      attempt += 1;
    }
    let ae = 0;
    while (ue && Is(R) && ae < Ls) {
      let Z = $s(R.response?.headers?.["retry-after"]);
      if (t(`[artifact] an earlier attempt landed and its content is still being stored \u2014 re-sending in ${Z}ms`), !(await z(Z))) break;
      ae += 1;
    }
    return O();
  } finally {
    if (q !== void 0) c("artifact_publish", q === 503 ? "deploy_503_retried" : "deploy_429_retried", {
      ...s,
      deploy_attempts: deploy_attempts,
      deploy_final_status: j || !R.ok ? 0 : R.status,
      ...(r?.aborted && {
        cancelled: !0
      }),
      ...(Y && {
        render_busy: !0
      })
    }), n?.({
      settled: !0
    });
  }
}
function An(e, n) {
  if (!(n.ok && n.fromFrame && n.status === 400)) return;
  let r = C1(n.data),
    s = mCe.test(r);
  if (yr(e) && s && /["']deadline["']/.test(r)) return "deadline";
  if (RLe(e.requestId).request_id !== void 0 && s && /["']request_id["']/.test(r)) return "request_id";
  if (e.icon && (s && /["']icon["']/.test(r) || /^icon (?:must be|and tint can only)\b/.test(r.trimStart()))) return "icon";
  return;
}
function Us(e, n) {
  switch (n) {
    case "deadline":
      return {
        ...e,
        deadline: void 0
      };
    case "icon":
      return {
        ...e,
        icon: void 0
      };
    case "request_id":
      return {
        ...e,
        requestId: void 0
      };
  }
}
function or() {
  return wt("the server answered for a different artifact than the one targeted, so its answer was not adopted");
}
function Wt() {
  return wt("deploy returned an incomplete or malformed response");
}
async function Vi(content, n, r, s, h, b, y, S, w, A, k, R, W, j = void 0) {
  let q = {
      page_bytes: b.pageBytes,
      lane: f(b.lane),
      forced: b.forced,
      is_redeploy: b.isRedeploy,
      has_base_version: s !== void 0,
      ...(W !== void 0 && {
        reserved: !0
      }),
      template: f("plain"),
      ...Vs(n),
      ...(R !== void 0 && R.length > 0 && {
        n_files: R.length
      })
    },
    files_3;
  if (w !== void 0 && R !== void 0 && R.length > 0) {
    let ae = kn(content, R, []);
    if (ae !== null) return m("artifact_publish", ae.kind, q), F(ae.msg);
    let Z = Object.create(null);
    Z["index.html"] = {
      content: content,
      contentType: "text/html",
      live: !0
    };
    let Ee = lr - Rt(content);
    for (let _e of R) {
      let content_2 = rn(_e);
      if (Ee -= Rt(content_2), Ee < 0) return m("artifact_publish", "too_large", q), F("file too large");
      Z[_e.path] = {
        content: content_2,
        contentType: _e.contentType,
        ...(_e.live === !0 && {
          live: !0
        })
      };
    }
    files_3 = Z;
  }
  let z = null,
    O = "none",
    fresh_publish = !n.slug,
    G,
    ue = Ns(q);
  try {
    let ae = h,
      baseVersion = s,
      Ee = !1,
      _e = W !== void 0 ? {
        ...n,
        slug: W
      } : n;
    t(`[artifact] publish \u2192 ${w ?? "/api/frame/deploy/direct"}${files_3 !== void 0 ? ` (files: ${Object.keys(files_3).length})` : ""}`);
    let Pe = !0,
      we = () => {
        let ie = Pe;
        return Pe = !1, Hs(Se => ar(w ?? Ms(Se, n), {
          ...is(_e),
          ...f6t(),
          ...wXr(),
          ...r,
          ...(w === void 0 && ae && {
            force: !0
          }),
          ...(w === void 0 && baseVersion && {
            baseVersion: baseVersion
          }),
          ...(w === void 0 && Ee && !baseVersion && _e.slug && {
            expectUnpublished: !0
          }),
          ...(files_3 !== void 0 ? {
            files: files_3
          } : {
            content: content
          })
        }, S, It => G = It, ue, Se, j, k), A, k, q, !0, w === void 0 && _e.slug !== void 0, ie);
      },
      je = {
        deadline: !1,
        icon: !1,
        request_id: !1
      },
      Ne = async () => {
        let ie = await we();
        for (let Se = An(_e, ie); Se !== void 0; Se = An(_e, ie)) c("artifact_publish", `${Se}_rejected`, q), t(`[artifact] ${Se} refused upstream \u2014 retrying without it`), _e = Us(_e, Se), je[Se] = !0, ie = await we();
        return ie;
      },
      M = await Ne();
    if (ae && M.ok && M.fromFrame && M.status === 400) {
      let ie = C1(M.data);
      if (mCe.test(ie) && (/\bforce\b/.test(ie) || baseVersion !== void 0 && /\bbaseVersion\b/.test(ie))) c("artifact_publish", "force_field_rejected", q), t("[artifact] CP rejected force/baseVersion as unknown \u2014 retrying without them"), ae = !1, baseVersion = void 0, M = await Ne();
    }
    if (ae && baseVersion && M.ok && M.fromFrame && M.status === 400 && /force and baseVersion are mutually exclusive/.test(C1(M.data))) c("artifact_publish", "exclusivity_retry", q), t("[artifact] pre-relaxation CP rejected force+baseVersion \u2014 retrying without the precondition"), baseVersion = void 0, M = await Ne();
    let Ae = ie => ie.reason === "no-auth" ? Tb(ie.detail) : `publish unavailable: ${ie.reason}`;
    if (!M.ok) return m("artifact_publish", M.reason, q), F(Ae(M));
    if (z = M.fromFrame ? an(M.status, M.data) : null, z && !fresh_publish && z.slug !== n.slug) return m("artifact_publish", "deploy_slug_mismatch", q), F(or());
    if (z && z.kind === void 0 && w === void 0 && !k?.aborted) {
      let delayMs_4 = Fs(2, M.response?.headers?.["retry-after"]);
      t(`[artifact] /deploy/direct 503 after commit (${z.slug}) \u2014 retrying against it in ${delayMs_4}ms`), A?.({
        status: 503,
        attempt: 2,
        maxAttempts: 2,
        delayMs: delayMs_4
      });
      try {
        if (await J(delayMs_4, k), !k?.aborted) {
          if (fresh_publish) _e = {
            ..._e,
            slug: z.slug
          }, Ee = z.live === void 0, ae = !1;
          if (z.live !== void 0) baseVersion = z.live;
          O = "unknown", Pe = !0;
          try {
            M = await Ne();
          } catch (error) {
            if (!(error instanceof RelayOnlyUnsentError)) throw error;
            return O = error instanceof RelayOnlyCancelledError ? "cancelled" : "unsent", vt(F(O === "cancelled" ? "publish cancelled" : "The publish failed with a server error (503)"), z, fresh_publish, O);
          }
          O = "answered";
        }
      } finally {
        c("artifact_publish", "deploy_stranded_retried", {
          ...q,
          fresh_publish: fresh_publish,
          deploy_final_status: O === "answered" && M.ok ? M.status : 0,
          ...(k?.aborted && {
            cancelled: !0
          })
        }), A?.({
          settled: !0
        });
      }
      if (!M.ok) return m("artifact_publish", M.reason, q), vt(F(Ae(M)), z, fresh_publish, O);
    }
    if (!M.fromFrame) return m("artifact_publish", "relay_error", {
      ...q,
      deploy_status: M.status
    }), vt(F(fr(M.status)), z, fresh_publish, O);
    if (((baseVersion ?? s) || Ee || zK()) && M.status === 409) {
      let conflictDetail = Qs(M.data);
      if (conflictDetail) return m("artifact_publish", "conflict", q), vt({
        ...F(Zs(conflictDetail)),
        conflict: !0,
        conflictDetail: conflictDetail
      }, z, fresh_publish, O);
    }
    if (w !== void 0 && M.status === 404) return m("artifact_publish", "create_not_enabled", {
      ...q,
      deploy_status: 404
    }), F("create endpoint not available (404) \u2014 nothing was created");
    if (M.status === 400 && br(C1(M.data), {
      ldx: !1
    })) return m("artifact_publish", "ldx_unsupported", q), vt(F(mr(C1(M.data))), z, fresh_publish, O);
    if (M.status < 200 || M.status >= 300) {
      let ie = gr(M.status, M.data, b.isRedeploy, b.echoedPin !== void 0 ? {
        pin: b.echoedPin,
        declaredCaps: b.hasCaps
      } : void 0, b.liveFilesOn === !0, b.sent, {
        retryAfter: M.response?.headers?.["retry-after"],
        reservedSlug: W,
        created: fresh_publish && z !== null
      });
      if (ie.code !== "thumbnail_rejected") m("artifact_publish", ie.code ?? "deploy_failed", {
        ...q,
        deploy_status: M.status,
        ...ie.extra
      });
      let refusedLivePath = ie.code === "path_is_live" ? oa(M.data) : void 0;
      return vt({
        ...ur(ie, `deploy ${M.status}: ${oA(M.data)}`),
        ...(refusedLivePath !== void 0 && {
          refusedLivePath: refusedLivePath
        })
      }, z, fresh_publish, O);
    }
    let Me = cr().safeParse(M.data);
    if (!Me.success) return m("artifact_publish", "deploy_incomplete", q), vt(F(Wt()), z, fresh_publish, O);
    let {
      slug: slug_6,
      version: version,
      read: read,
      shared: shared,
      kind: kind_2
    } = Me.data;
    if (_e.slug && slug_6 !== _e.slug) return m("artifact_publish", "deploy_slug_mismatch", q), vt(F(or()), z, fresh_publish, O);
    if (w !== void 0 && (Mi == null || kind_2 !== Mi.LIVE_DOC_KIND)) return m("artifact_publish", "deploy_incomplete", q), F(Wt());
    let liveDocs = bs(M.data),
      livePaths = liveDocs?.map(ie => ie.path),
      mt = w === void 0 ? new Set() : new Set(["index.html", ...Object.entries(files_3 ?? {}).filter(([, ie]) => ie.live === !0).map(([ie]) => ie)]),
      bornLive = (livePaths ?? []).filter(item => mt.has(item)),
      warnings_2 = [...nr(M.data), ..._s(bornLive), ...ys(livePaths, new Set(["index.html", ...Object.keys(files_3 ?? {})]))].slice(0, Tn),
      embeds = rr(M.data),
      pushRemaining = Ps(M.response?.headers?.[ks]),
      pushResetAt = Cs(M.response?.headers?.date),
      ut = Ws(Me.data, ae ? void 0 : baseVersion, new Set(["index.html", ...Object.keys(files_3 ?? {}), ...(livePaths ?? [])]));
    t6t(y, slug_6, version, {
      merged: dr(M.data)
    });
    let De = Xs(Me.data);
    return g("artifact_publish", {
      ...q,
      e2e_ms: Math.round(performance.now() - b.t0),
      is_redeploy: b.isRedeploy,
      has_caps: b.hasCaps,
      push_remaining_seen: pushRemaining !== void 0,
      ...Ys(ut.mergedOver),
      read_back_echoed: De.readBackEchoed === !0
    }), {
      url: dg(slug_6),
      slug: slug_6,
      version: version,
      err: null,
      ...(pushRemaining !== void 0 && {
        pushRemaining: pushRemaining,
        pushResetAt: pushResetAt
      }),
      ...(read !== void 0 && {
        read: read
      }),
      ...(shared !== void 0 && {
        shared: shared
      }),
      ...Gs(Me.data, yr(_e)),
      ...ut,
      ...(je.deadline && {
        deadlineDropped: !0
      }),
      ...(je.icon && {
        iconDropped: !0
      }),
      ...qs(Me.data, r, w !== void 0),
      ...De,
      ...(kind_2 !== void 0 && {
        kind: kind_2
      }),
      ...(warnings_2.length > 0 && {
        warnings: warnings_2
      }),
      ...(embeds !== void 0 && {
        embeds: embeds
      }),
      ...(livePaths !== void 0 && {
        livePaths: livePaths
      }),
      ...(liveDocs !== void 0 && {
        liveDocs: liveDocs
      }),
      ...(bornLive.length > 0 && {
        bornLive: bornLive
      })
    };
  } catch (error) {
    if (error instanceof RelayOnlyUnsentError) return error instanceof RelayOnlyCancelledError ? js() : Bs(q);
    if (!zs(error)) m("artifact_publish", error instanceof Lt ? "relay_request_error" : "request_error", {
      ...q,
      ...sr(error, b.t0),
      ...G
    });
    return vt(F(error instanceof Error ? error.message : String(error)), z, fresh_publish, O);
  }
}
var VIe = 4;
function Wi(e) {
  return typeof e === "string" ? e : e.toString("utf8");
}
var P1e = new Set(["text/html", ...[], "text/css", "text/plain", "text/markdown", "text/csv", "text/javascript", "application/javascript", "application/json", "application/manifest+json", "application/xml", "text/xml", "image/svg+xml"]),
  Rn = new Set([...P1e, "application/wasm", "image/png", "image/jpeg", "image/gif", "image/webp", "image/avif", "image/x-icon", "image/vnd.microsoft.icon", "font/woff", "font/woff2", "font/ttf", "font/otf", "application/font-woff", "application/font-woff2", "audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "video/mp4", "video/webm", "video/ogg", "application/pdf"]),
  Ll = ["py", "ipynb", "yaml", "yml", "toml", "ini", "cfg", "conf", "env", "lock", "sh", "bash", "ps1", "bat", "ts", "tsx", "jsx", "vue", "scss", "less", "rs", "go", "java", "kt", "c", "h", "cpp", "cs", "rb", "php", "r", "swift", "lua", "sql", "db", "sqlite", "parquet", "jsonl", "ndjson", "log", "tex", "rtf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "epub", "key", "pages", "numbers", "zip", "tar", "gz", "tgz", "7z", "rar", "mov", "avi", "m4a", "aac", "flac", "heic", "bmp", "tif", "tiff", "psd", "fig", "eot", "xhtml", "htm", "bin", "exe", "dmg", "tsv", "pkl", "npy", "npz", "pt", "onnx", "safetensors", "h5", "svelte", "mdx", "jsonc"],
  Il = ["text/x-python", "text/x-python-script", "application/x-python-code", "application/x-ipynb+json", "application/x-yaml", "application/yaml", "text/yaml", "text/x-yaml", "application/toml", "text/x-toml", "text/x-sh", "text/x-shellscript", "application/x-sh", "application/typescript", "text/typescript", "text/x-typescript", "text/jsx", "text/x-scss", "text/x-sql", "application/sql", "application/x-sqlite3", "application/vnd.apache.parquet", "application/x-ndjson", "application/jsonl", "application/ld+json", "application/geo+json", "application/octet-stream", "text/x-log", "text/rtf", "application/rtf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.oasis.opendocument.text", "application/epub+zip", "application/zip", "application/x-zip-compressed", "application/gzip", "application/x-tar", "application/x-7z-compressed", "video/quicktime", "video/x-msvideo", "audio/mp4", "audio/x-m4a", "audio/aac", "audio/flac", "image/heic", "image/bmp", "image/tiff", "image/vnd.adobe.photoshop", "application/x-figma", "application/vnd.ms-fontobject", "application/xhtml+xml", "application/x-www-form-urlencoded", "multipart/form-data", "image/jpg", "text/json", "text/x-markdown", "application/x-javascript", "text/x-java-source", "text/x-c"];
function mXr(e, n) {
  let r = po(e).toLowerCase().slice(1),
    s = Ll.find(item => item === r),
    refused_ext = r === "" ? f("none") : z8(e) !== void 0 ? f("served") : s !== void 0 ? f(s) : f("other");
  if (n === void 0) return {
    refused_ext: refused_ext
  };
  let b = GK(n),
    y = Il.find(item => item === b),
    refused_type = Rn.has(b) ? f("served_variant") : y !== void 0 ? f(y) : f("other");
  return {
    refused_ext: refused_ext,
    refused_type: refused_type
  };
}
var Dl = new Set(["image/svg+xml", "text/xml", "application/xml"]),
  cre = 67108864,
  a6t = 268435456,
  hXr = 15728640,
  lr = 12582912,
  Bl = 1048576,
  Zn = 20971520,
  Yt = 256,
  Pir = 512,
  Yi = /\b(manifest|mode)\b/;
function rn(e) {
  if (P1e.has(e.contentType)) return typeof e.content === "string" ? e.content : e.content.toString("utf8");
  return (typeof e.content === "string" ? Buffer.from(e.content, "utf8") : e.content).toString("base64");
}
function Vs(e) {
  let thumbnails = (e.thumbnail !== void 0 ? 1 : 0) + (e.thumbnailDark !== void 0 ? 1 : 0);
  return thumbnails > 0 && dre() ? {
    thumbnails: thumbnails
  } : {};
}
function Gi(e) {
  return e !== void 0 && dre() ? Math.ceil(e.length / 3) * 4 : 0;
}
function jl(e) {
  return typeof e.content === "string" ? Buffer.byteLength(e.content, "utf8") : e.content.length;
}
function Rt(e) {
  return Buffer.byteLength(_(e), "utf8") - 2;
}
function zl(e, n) {
  let r = Object.create(null),
    s = Object.keys(e);
  if (s.length === 0) return;
  for (let h of s) {
    let b = e[h],
      ifMatch = n.get(h);
    if (ifMatch === void 0 || b === void 0) return;
    if (b === null) {
      if (ifMatch === null) return;
      r[h] = {
        delete: !0,
        ifMatch: ifMatch
      };
      continue;
    }
    if (!("contentType" in b) || b.live !== void 0 || b.reseed !== void 0) return;
    r[h] = {
      ...b,
      ifMatch: ifMatch
    };
  }
  return r;
}
var Hl = /unknown field "(live|reseed)"/,
  Ul = /manifest must not be empty/;
function kn(e, n, r) {
  let s = msg => ({
      kind: "files_invalid",
      msg: msg
    }),
    h = msg_2 => ({
      kind: "too_large",
      msg: msg_2
    });
  if (n.length + r.length + (e === null ? 0 : 1) > Yt) return s(`This publish lists ${n.length} ${P(n.length, "file")}${r.length > 0 ? ` and ${r.length} ${P(r.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Yt} entries in one publish. Nothing was published: send at most ${Yt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${Pir} in all.`);
  let y = new Set(["index.html"]);
  for (let w of r) {
    if (!w || w === "index.html") return s(w ? `"index.html" is the page itself and can't be removed. Drop that entry.` : "A removal in `files` has an empty path. Name the published path to remove.");
    if (y.has(w)) return s(`${_(w)} is listed more than once in \`files\`. List each path once.`);
    y.add(w);
  }
  let S = e === null ? 0 : Buffer.byteLength(e, "utf8");
  for (let w of n) {
    if (!w.path || w.path === "index.html") return s(w.path ? e === null ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here` : 'files must not contain "index.html" \u2014 the page argument is the index' : "every file needs a non-empty path");
    if (y.has(w.path)) return s(`${_(w.path)} is listed more than once in \`files\`. List each path once.`);
    if (y.add(w.path), typeof w.content === "string" && !P1e.has(w.contentType)) return s(`file ${_(w.path)}: contentType ${_(w.contentType)} ` + "is binary \u2014 pass its content as a Buffer (raw bytes), not a string");
    let A = P1e.has(w.contentType),
      k = jl(w),
      R = A ? l_ : hXr;
    if (k > R) return h(`file ${_(w.path)} is ${Math.ceil(k / 1024 / 1024)}MB (per-file max ${R / 1024 / 1024}MB${A ? "" : " for binary files, which must fit an upload request base64-encoded"})`);
    if (A) {
      let W = typeof w.content === "string" ? w.content : w.content.toString("utf8");
      if (typeof w.content !== "string" && !Buffer.from(W, "utf8").equals(w.content)) return s(`file ${_(w.path)}: contentType ${_(w.contentType)} ` + "is a text type but the Buffer is not valid UTF-8 \u2014 fix the " + "encoding, or use a binary contentType");
      let j = W.indexOf("\uFFFD");
      if (j !== -1 || !nf(W)) return s(`file ${_(w.path)} ` + (j !== -1 ? `has the replacement character U+FFFD at ${gn(W, j)}` : "holds an unpaired surrogate (half of a split character)") + " \u2014 replace it with the intended text" + (w.contentType === "text/html" ? " (in HTML, write an intended U+FFFD as &#xFFFD;)" : ""));
    }
    if (A && k > Zn / 6) {
      let W = Rt(rn(w));
      if (W > Zn) return h(`file ${_(w.path)} is ${Math.ceil(W / 1024 / 1024)}MB JSON-encoded on the wire (per-request max ${Zn / 1024 / 1024}MB) \u2014 ` + "heavily escaped text (quotes, backslashes, control characters) inflates when JSON-encoded; split or shrink the file");
    }
    S += k;
  }
  if (S > cre) return h(`total content is ${Math.ceil(S / 1024 / 1024)}MB \u2014 one publish may send at most ${cre / 1024 / 1024}MB. Nothing was published: send part of the files now and the rest with another publish to the same url (files left out of a later publish are kept; a version may total ${a6t / 1024 / 1024}MB).`);
  return null;
}
var Ar = "copying files from another artifact is not enabled for this account \u2014 nothing was published; publish with local files instead";
function Rr(e, n, r, s) {
  if (r.length === 0) return null;
  if (n.length + r.length + s.length + (e === null ? 0 : 1) > Yt) return `This publish lists ${n.length + r.length} ${P(n.length + r.length, "file")} (copies included)${s.length > 0 ? ` and ${s.length} ${P(s.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Yt} entries in one publish. Nothing was published: send at most ${Yt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${Pir} in all.`;
  let b = new Set(["index.html", ...n.map(item => item.path), ...s]),
    y = new Set();
  for (let S of r) {
    if (!S.path || S.path === "index.html") return S.path ? e === null ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here` : 'files must not contain "index.html" \u2014 the page argument is the index' : "every file needs a non-empty path";
    if (b.has(S.path)) return `${_(S.path)} is listed more than once in \`files\` (once as a copy from another artifact). List each path once.`;
    if (b.add(S.path), !hr.test(S.from.slug) || !S.from.path) return `file ${_(S.path)}: its source must name an artifact and a published path`;
    if (S.from.path === "index.html") return `file ${_(S.path)}: another artifact's page (index.html) is not a copyable file \u2014 read it and publish your own content`;
    for (let w of [S.path, S.from.path]) {
      let A = z8(w);
      if (A !== void 0 && bEn.has(GK(A))) return `file ${_(S.path)}: an HTML or XML document cannot be copied from another artifact \u2014 read it with action "read_file" and publish it as your own file`;
    }
    y.add(`${S.from.slug}@${S.from.ver ?? ""}`);
  }
  if (y.size > VIe) return `files copy from ${y.size} source artifact versions; at most ${VIe} per publish`;
  return null;
}
function DJo(e, n) {
  let r = Er(e, "file");
  if (r !== null) return r.err;
  if (n.length > 0 && !Y3e()) return m("artifact_publish", "copy_from_flag_off", {
    n_copied: n.length
  }), Ar;
  return kn(null, e, [])?.msg ?? Rr(null, e, n, []);
}
async function LJo(e, n) {
  if (iu() !== null) return F("publishing to an Artifact created from an Artifact type is not available in eval stub mode");
  let r = n.copiedFiles ?? [];
  if (!(te().frozenArtifactTypes?.typesOn ?? p$())) {
    let S = n.removeFiles ?? [];
    return m("artifact_publish", "multifile_flag_off", {
      n_files: e.length + r.length,
      n_removed: S.length
    }), F("This artifact was created from an artifact type, so it takes supporting files only, and " + (S.length > 0 ? "its files can't be changed from this session. Nothing was published or removed; the artifact is unchanged." : "supporting files can't be published from this session. Nothing was published; the artifact is unchanged."));
  }
  if (r.length > 0 && !Y3e()) return m("artifact_publish", "copy_from_flag_off", {
    n_copied: r.length
  }), F(Ar);
  let h = Er(e, "file");
  if (h !== null) return h;
  let b = await ln({
    slug: n.slug,
    hostGrant: $mt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: n.signal,
    credentials: n.credentials,
    lane: "files"
  });
  if (!b.ok) return F(b.err);
  let y = {
    slug: n.slug,
    title: n.title,
    favicon: n.favicon,
    ...(n.label !== void 0 && {
      label: n.label
    }),
    ...(n.note !== void 0 && {
      note: n.note
    }),
    ...(n.deadline !== void 0 && {
      deadline: n.deadline
    }),
    ...(n.requestId !== void 0 && {
      requestId: n.requestId
    }),
    ...(n.description !== void 0 && {
      description: n.description
    }),
    ...(n.publishContext !== void 0 && {
      publishContext: n.publishContext
    }),
    ...(n.originMetadata !== void 0 && {
      originMetadata: n.originMetadata
    }),
    ...(n.autoEditAttribution && {
      autoEditAttribution: n.autoEditAttribution
    })
  };
  return rXr(n.ownPublishes, n.slug, () => ms(Tr(null, e, r, n.removeFiles ?? [], y, {}, {
    baseVersion: n.baseVersion,
    force: n.force,
    ownPublishes: n.ownPublishes,
    tele: {
      t0: performance.now(),
      pageBytes: 0,
      lane: "inline",
      isRedeploy: !0,
      hasCaps: !1,
      forced: n.force,
      ...(n.baseRebase !== void 0 && {
        baseRebase: n.baseRebase
      })
    },
    ...(n.copiedCrossOrgOk === !0 && {
      copiedCrossOrgOk: !0
    }),
    ...(n.preconditions !== void 0 && {
      preconditions: n.preconditions
    }),
    onRetry: n.onRetry,
    signal: n.signal,
    credentials: n.credentials
  }), n.slug, n.credentials, n.signal));
}
async function NJo(e) {
  if (iu() !== null) return F("invalid publish options");
  if (!p$()) return m("artifact_publish", "multifile_flag_off", {
    n_files: 0,
    n_removed: 0
  }), F("invalid publish options");
  if (![...e.base.values()].some(item => item.live === !0)) return F("invalid publish options");
  let n = await ln({
    slug: e.slug,
    hostGrant: $mt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "page"
  });
  if (!n.ok) return F(n.err);
  let r = {
    slug: e.slug,
    title: e.title,
    favicon: e.favicon,
    ...(e.label !== void 0 && {
      label: e.label
    }),
    ...(e.deadline !== void 0 && {
      deadline: e.deadline
    }),
    ...(e.requestId !== void 0 && {
      requestId: e.requestId
    }),
    ...(e.publishContext !== void 0 && {
      publishContext: e.publishContext
    })
  };
  return rXr(e.ownPublishes, e.slug, () => Tr(null, [], [], [], r, {}, {
    baseVersion: e.baseVersion,
    force: !1,
    ownPublishes: e.ownPublishes,
    tele: {
      t0: performance.now(),
      pageBytes: 0,
      lane: "inline",
      isRedeploy: !0,
      hasCaps: !1,
      forced: !1,
      liveFilesOn: !0
    },
    liveFiles: {
      detach: [],
      base: e.base
    },
    onRetry: e.onRetry,
    signal: e.signal,
    credentials: e.credentials
  }));
}
async function Tr(content_3, n, r, s, h, b, y) {
  let {
      baseVersion: baseVersion_2,
      force: force,
      tele: tele,
      onRetry: onRetry,
      signal: signal_4,
      credentials: credentials_7
    } = y,
    relayOnly_2 = y.relayOnly,
    q = y.copiedCrossOrgOk === !0,
    liveFiles = y.liveFiles,
    z = liveFiles?.detach ?? [],
    O = {
      page_bytes: tele.pageBytes,
      lane: f(tele.lane),
      n_files: n.length + r.length,
      n_copied: r.length,
      n_removed: s.length,
      forced: tele.forced,
      template: f("plain"),
      is_redeploy: tele.isRedeploy,
      has_base_version: baseVersion_2 !== void 0,
      reserved: !1,
      ...Vs(h),
      ...(tele.baseRebase !== void 0 && {
        base_rebase: f(tele.baseRebase)
      })
    },
    Y = x => (m("artifact_publish", "files_invalid", O), F(x)),
    G = x => (m("artifact_publish", "too_large", O), F(x)),
    mode_2 = content_3 === null || h.slug !== void 0 && baseVersion_2 !== void 0 ? "patch" : "replace";
  if (s.length > 0 && mode_2 === "replace") return Y(h.slug === void 0 ? "A `null` entry in `files` removes a file from an existing artifact, and a first publish has nothing to remove, so nothing was published. Drop the `null` entries." : "A removal applies to the artifact's current version, and this publish didn't name that version (`baseVersion`), so nothing was published. Publish again with the version named, or without the `null` entries.");
  if (liveFiles !== void 0 && h.slug !== void 0 && mode_2 === "replace") return Y("invalid publish options");
  if (liveFiles?.page?.reseed === !0 && liveFiles.page.live !== void 0) return Y("invalid publish options");
  let ae = z.length > 0 || liveFiles?.page?.reseed === !0 || liveFiles?.page?.live === !1 || n.some(item => item.reseed === !0 || item.live === !1);
  if (ae && mode_2 === "replace") return Y("invalid publish options");
  for (let x of n) {
    if (x.reseed === !0 && x.live !== void 0) return Y("invalid publish options");
    if ((x.live === !0 || x.reseed === !0) && !jpi.has(GK(x.contentType))) return Y("invalid publish options");
    let ee = liveFiles?.base?.get(x.path);
    if (liveFiles?.base !== void 0 && ee?.live !== !0 && (x.reseed === !0 || x.live === !1)) return Y("invalid publish options");
  }
  for (let x of z) if (liveFiles?.base !== void 0 && liveFiles.base.get(x)?.live !== !0) return Y("invalid publish options");
  if (liveFiles?.base !== void 0 && liveFiles.base.get("index.html")?.live !== !0 && (liveFiles.page?.reseed === !0 || liveFiles.page?.live === !1)) return Y("invalid publish options");
  for (let x of s) if (liveFiles?.base?.get(x)?.live === !0) return Y("invalid publish options");
  let Z = kn(content_3, n, [...s, ...z]);
  if (Z !== null) return Z.kind === "too_large" ? G(Z.msg) : Y(Z.msg);
  let Ee = Rr(content_3, n, r, [...s, ...z]);
  if (Ee !== null) return Y(Ee);
  for (let x of r) if (liveFiles?.base?.get(x.path)?.live === !0) return Y("invalid publish options");
  let _e = (x, ee) => mode_2 === "patch" && liveFiles?.base?.get(x)?.live === !0 && ee.reseed !== !0 && ee.live !== !1,
    Pe = ae || liveFiles?.page?.live === !0 || n.some(item => item.live === !0) || [...(liveFiles?.base?.values() ?? [])].some(item => item.live),
    je = mode_2 === "patch" && !force && y.preconditions === void 0 && (content_3 !== null || Pe),
    Ne = (x, ee, D) => {
      let ce = je ? liveFiles?.base?.get(x) : void 0;
      return ce !== void 0 && !ce.live && ce.sha256 !== void 0 && ce.contentType === D && ce.sha256 === nt(ee);
    },
    M = [],
    Ae = liveFiles?.page ?? {},
    Me = content_3 !== null && Ae.live === !1,
    ze = Me ? ["index.html", ...z] : z,
    Ce;
  if (_e("index.html", Ae)) M.push("index.html");else if (content_3 !== null && !Me && !(Pe && Ae.live === void 0 && Ae.reseed !== !0 && Ne("index.html", content_3, "text/html"))) Ce = {
    content: content_3,
    contentType: "text/html",
    ...(Ae.live !== void 0 && {
      live: Ae.live
    }),
    ...(Ae.reseed === !0 && {
      reseed: !0
    })
  };
  let ye = Object.create(null);
  if (Ce !== void 0) ye["index.html"] = Ce;
  let He = [],
    Oe = Ce?.content !== void 0 ? Rt(Ce.content) : 0,
    Ve = Gi(h.thumbnail) + Gi(h.thumbnailDark),
    $e = lr - Oe - Ve,
    mt = x => !_e(x.path, x) && (x.live === !0 || x.reseed === !0 || x.live === !1),
    Ie = Object.create(null);
  for (let x of n.filter(mt)) {
    let content_4 = rn(x),
      D = Rt(content_4);
    if (D > $e) {
      let ce = lr - Oe - $e;
      return G("file too large");
    }
    $e -= D, Ie[x.path] = {
      content: content_4,
      contentType: x.contentType,
      ...(x.live !== void 0 && {
        live: x.live
      }),
      ...(x.reseed === !0 && {
        reseed: !0
      })
    }, ye[x.path] = Ie[x.path];
  }
  let bt = [],
    files_omitted = 0;
  for (let x of n) {
    if (mt(x)) continue;
    if (_e(x.path, x)) {
      M.push(x.path);
      continue;
    }
    if (x.live === void 0 && Ne(x.path, x.content, x.contentType)) {
      files_omitted += 1;
      continue;
    }
    bt.push(x);
  }
  let _t = 0;
  for (let f_2 of bt) {
    let ee = rn(f_2),
      D = Rt(ee);
    if (D <= $e) $e -= D, _t += D, ye[f_2.path] = {
      content: ee,
      contentType: f_2.contentType
    };else {
      let ce = nt(f_2.content);
      He.push({
        f: f_2,
        sha: ce,
        wire: ee
      }), ye[f_2.path] = {
        sha256: ce,
        contentType: f_2.contentType
      };
    }
  }
  for (let x of s) ye[x] = null;
  for (let x of ze) ye[x] = {
    live: !1
  };
  let rt = {
      liveKey: ze.length > 0 || Object.keys(Ie).length > 0 || Ce?.live !== void 0 || Ce?.reseed === !0,
      emptyPatch: Pe && Object.keys(ye).length === 0 && r.length === 0,
      ldx: !1
    },
    ut,
    De = x => ut = x,
    ie = Ns(O),
    Se = !1,
    It = x => Hs(ee => ar(Ms(ee, h), x, credentials_7, De, ie, ee, relayOnly_2, signal_4).then(D => (Se = !0, D), D => {
      if (!(D instanceof RelayOnlyUnsentError)) Se = !0;
      throw D;
    }), onRetry, signal_4, O, !1, typeof x.slug === "string", relayOnly_2 !== void 0 && h.slug === void 0 && !Se),
    if_match_sent = !1,
    at = x => {
      let ee = mode_2 === "patch" && !force && y.preconditions !== void 0 ? zl(x, y.preconditions) : void 0;
      return if_match_sent = ee !== void 0, ee ?? x;
    },
    it = {
      ...is(h),
      ...f6t(),
      ...wXr(),
      ...b
    },
    Pt = {
      deadline: !1,
      icon: !1,
      request_id: !1
    },
    Et = async x => {
      let ee = await It(x);
      for (let D = An(h, ee); D !== void 0 && x[D] !== void 0; D = An(h, ee)) {
        c("artifact_publish", `${D}_rejected`, O), t(`[artifact] ${D} refused upstream \u2014 retrying without it`), delete it[D], h = Us(h, D), Pt[D] = !0;
        let {
          [D]: ce,
          ...Fe
        } = x;
        x = Fe, ee = await It(x);
      }
      return ee;
    },
    cn = 15728640,
    st = [];
  {
    let x = [],
      ee = 0;
    for (let D of He) {
      let ce = Rt(D.wire);
      if (x.length > 0 && ee + ce > cn) st.push(x), x = [], ee = 0;
      x.push(D), ee += ce;
    }
    if (x.length > 0) st.push(x);
  }
  let Dt = async x => {
      let ee = Os(x);
      if (ee === void 0) return !1;
      if (await J(ee, signal_4), signal_4?.aborted) return t("[artifact] 429 retry cancelled by user"), !1;
      return !0;
    },
    ft = x => {
      let ee = x.fromFrame && x.status === 429 ? Mt(x.data) : void 0;
      if (ee) m("artifact_publish", "publish_cap_reached", {
        ...O,
        cap_type: f(ee.capType)
      });
      return ee;
    },
    Je = r.map(x => ({
      c: x
    })),
    Qe = [],
    qe = [],
    Ct = {
      askedToLeaveOut: !1
    },
    qt = x => "c" in x ? {
      path: x.c.path,
      from: {
        slug: x.c.from.slug,
        path: x.c.from.path,
        ...(x.c.from.ver !== void 0 && {
          ver: x.c.from.ver
        })
      }
    } : {
      path: x.f.path,
      content: x.wire,
      contentType: x.f.contentType
    },
    pt = async (slug_7, ee) => {
      let D = ee.some(item => "c" in item),
        ce = q && D,
        Fe = D ? Ai() : {},
        We = () => ({
          slug: slug_7,
          ...(ce && {
            cross_org_ok: !0
          }),
          ...Fe,
          files: ee.map(qt)
        }),
        Ue = () => ar("/api/frame/upload", We(), credentials_7, De, ie, {}, relayOnly_2, signal_4),
        Ke = async () => {
          let Ze = await _n(Ue);
          return Ze.ok && Ze.fromFrame && Ze.status === 429 && Mt(Ze.data) === void 0 && (await Dt(Ze.response?.headers?.["retry-after"])) ? _n(Ue) : Ze;
        },
        be = await Ke(),
        ot = "leave_out_missing" in Fe && be.ok && be.fromFrame && be.status === 400 ? Ri(be.data, We()) : void 0;
      if (ot !== void 0 && !signal_4?.aborted) {
        if (ot === "named") Gn(), c("artifact_publish", "copy_leave_out_unsupported", O);
        if (Fe = {}, be = await Ke(), ot === "unnamed" && be.ok && be.fromFrame && Ti(be.status, be.data)) Gn(), c("artifact_publish", "copy_leave_out_unsupported", O);
      }
      if (D) Ct.askedToLeaveOut = "leave_out_missing" in Fe;
      return be;
    },
    Ot = (x, ee, D) => {
      if (ee) t(`[artifact] manifest publish refused (HTTP ${x}): ${oA(ee)}`);
      let ce = D?.maybeGone ? ", or the artifact no longer exists or isn't yours to update" : "";
      if (s.length > 0) return F(`The server didn't accept this update's file changes (HTTP ${x})${ce}. Nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting \`files\`) would update the page but can't remove a file.${D?.debris ?? ""}`);
      let Fe = D?.debris ? " This publish didn't finish." : h.slug !== void 0 ? " Nothing was published; the artifact is unchanged." : " Nothing was published.";
      return F(`The server didn't accept this publish's supporting files (HTTP ${x})${ce}.${Fe} Publish the page as a single file instead: inline what it needs and omit \`files\`.${D?.debris ?? ""}`);
    },
    debris = "",
    reservedSlug_2,
    $t = x => {
      reservedSlug_2 = x, O.reserved = !0, debris = ` (A slug was reserved for it: publish again to slug ${x} rather than publishing fresh.)`, y.onReserved?.(x);
    };
  if (h.slug === void 0 && y.reservedSlug !== void 0) $t(y.reservedSlug);
  let H = x => x.fromFrame && sa(x.status, x.data),
    pe = (x, refusedStep) => (m("artifact_publish", "rate_limited", {
      ...O,
      refused_status: x.status,
      ...ta(x.data)
    }), {
      ...F(ia({
        retryAfter: x.response?.headers?.["retry-after"],
        reservedSlug: reservedSlug_2,
        ...(refusedStep !== void 0 && {
          refusedStep: refusedStep
        })
      })),
      transient: "rate_limited"
    }),
    X = () => F(`publish cancelled \u2014 nothing more was sent.${debris}`);
  try {
    let slug_9 = h.slug ?? y.reservedSlug,
      ee,
      D,
      ce = baseVersion_2,
      Fe = async (slug_8, shas) => {
        let Re = {
            ...(slug_8 !== void 0 && {
              slug: slug_8
            }),
            ...(shas.length > 0 && {
              shas: shas
            }),
            ...(slug_8 === void 0 && f6t())
          },
          le = {
            refreshOAuth: !0,
            headers: xu(),
            timeout: 30000,
            credentials: credentials_7,
            relayOnCredentialRefusal: !0
          },
          he = async () => {
            if (relayOnly_2 === void 0) return Au.post("/api/frame/deploy/prepare", Re, le);
            return xr("/api/frame/deploy/prepare", Re, le, relayOnly_2, signal_4);
          },
          Te = await _n(he);
        if (Te.ok && Te.fromFrame && Te.status === 429 && Mt(Te.data) === void 0 && (await Dt(Te.response?.headers?.["retry-after"]))) Te = await _n(he);
        return Te;
      },
      We = V => typeof V?.slug === "string" && hr.test(V.slug) ? V.slug : void 0,
      Ue = !1,
      Ke = !1,
      be = h.slug !== void 0 && !(je && liveFiles?.base !== void 0),
      ot = He.length > 0 || Je.length > 0 || be && _t > Bl;
    if (ot) {
      let V = bt.map(le => ({
          f: le,
          sha: nt(le.content),
          wire: rn(le)
        })),
        ne,
        Re = "";
      for (let le = 0; le < 2; le++) {
        if (signal_4?.aborted) return X();
        let he = await Fe(slug_9, V.map(item => item.sha));
        if (signal_4?.aborted) {
          let re = debris === "" && slug_9 === void 0 && he.ok && he.status === 200 ? We(he.data) : void 0;
          if (re !== void 0) $t(re);
          return X();
        }
        if (!he.ok) {
          ne = {
            status: 0,
            why: he.reason === "no-auth" ? Tb(he.detail) : `preflight unavailable: ${he.reason}`
          };
          break;
        }
        if (he.status === 404) {
          if (oee(he.data)) return m("artifact_publish", "prepare_not_found", O), {
            ...F("the server does not recognize this artifact for updating (it may no longer exist or may not be yours to update). The files were NOT published."),
            ...(h.slug !== void 0 && {
              gone: !0
            })
          };
          ne = {
            status: 404,
            why: "the preflight route answered 404"
          };
          break;
        }
        let Te = ft(he);
        if (Te) return F(debris ? `${Te.message} \u2014 this publish didn't finish; try again after the reset.${debris}` : `${Te.message} \u2014 nothing was published; try again after the reset.`);
        if (H(he)) {
          if (Je.length > 0 || He.length > 0 || Ke) return pe(he, Je.length > 0 ? hi(Je.length) : void 0);
          t("[artifact] preflight rate-limited \u2014 sending the one inline deploy instead"), ne = {
            status: 429,
            why: "the preflight was rate-limited"
          };
          break;
        }
        if (he.status !== 200) {
          ne = {
            status: he.status,
            why: he.fromFrame ? `preflight ${he.status}: ${oA(he.data)}` : `preflight relay HTTP ${he.status}`
          };
          break;
        }
        let Fn = We(he.data),
          Nn = he.data?.missing;
        if (Fn === void 0 || !Array.isArray(Nn) || !Nn.every(item => typeof item === "string" && /^[0-9a-f]{64}$/.test(item))) {
          ne = {
            status: 200,
            why: "a malformed preflight answer"
          };
          break;
        }
        if (slug_9 !== void 0 && Fn !== slug_9) return m("artifact_publish", "prepare_slug_mismatch", O), F("the server answered the upload preflight for a different " + "artifact \u2014 not publishing.");
        if (Ke = !0, slug_9 = Fn, h.slug === void 0) $t(slug_9);
        let da = new Set(Nn),
          ua = V.filter(item => da.has(item.sha)),
          Mn = [];
        {
          let re = [],
            xe = 0;
          for (let yt of ua) {
            let Xt = Rt(yt.wire);
            if (re.length > 0 && xe + Xt > cn) Mn.push(re), re = [], xe = 0;
            re.push(yt), xe += Xt;
          }
          if (re.length > 0) Mn.push(re);
        }
        for (let re of Mn) {
          if (signal_4?.aborted) return X();
          let xe = await pt(slug_9, re);
          if (!xe.ok) return m("artifact_publish", xe.reason, O), F(xe.reason === "no-auth" ? Tb(xe.detail) + debris : `upload unavailable: ${xe.reason}. The publish was NOT completed; retry publishing to slug ${slug_9}.`);
          if (xe.status !== 200) {
            let yt = ft(xe);
            if (yt) return F(`${yt.message} \u2014 this publish didn't finish. ` + `Publish again to slug ${slug_9} after the reset.`);
            if (H(xe)) return pe(xe);
            return m("artifact_publish", xe.fromFrame ? "prepare_upload_failed" : "prepare_upload_relay_error", {
              ...O,
              upload_status: xe.status
            }), F((xe.fromFrame ? `file upload ${xe.status} after the preflight: ${oA(xe.data)}` : `file upload failed after the preflight (relay HTTP ${xe.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${slug_9}.`);
          }
        }
        if (Je.length > 0) {
          if (signal_4?.aborted) return X();
          let re = await pt(slug_9, Je);
          if (!re.ok) return m("artifact_publish", re.reason, O), F(re.reason === "no-auth" ? Tb(re.detail) + debris : `copying files from another artifact unavailable: ${re.reason}. The publish was NOT completed; retry publishing to slug ${slug_9}.`);
          if (re.status !== 200) {
            let ve = ft(re);
            if (ve) return F(`${ve.message} \u2014 this publish didn't finish. Publish again to slug ${slug_9} after the reset.`);
            if (H(re)) return pe(re, pi(Je.map(({
              c: c_2
            }) => ({
              path: c_2.path,
              fromSlug: c_2.from.slug
            }))));
            let lt = q && re.fromFrame && re.status === 400 && Gvr(re.data, "cross_org_ok");
            m("artifact_publish", lt ? "copy_predates_cross_org" : re.fromFrame ? "copy_upload_failed" : "copy_upload_relay_error", {
              ...O,
              upload_status: re.status
            });
            let ke = oA(re.data),
              Ht = /^files\[(\d+)\]: (.*)$/.exec(ke),
              ct = Ht !== null ? Je[Number(Ht[1])]?.c : void 0,
              Hr = Ht !== null ? Ht[2] : ke,
              copySourceNotFound = re.fromFrame && ct !== void 0 && /not found/.test(Hr) ? ct : void 0,
              pa = " \u2014 the source artifact doesn't exist, this account can't open it, or it can't be copied from (all three get the same answer)";
            if (lt) return F("copying files from another organization's artifact isn't available on this server yet, so nothing was published. Don't retry the copy. Publish without the copied file instead, or tell the user cross-organization copies aren't supported yet.");
            return {
              ...F((re.fromFrame ? ct !== void 0 ? `copying ${_(ct.path)} from artifact ${ct.from.slug} (${_(ct.from.path)}) was refused (${re.status}: ${Hr})${copySourceNotFound !== void 0 ? pa : ""}` : re.status === 404 ? "the server does not recognize this artifact for staging copied files (it may no longer exist, may not be yours to update, or copying is not enabled on this path)" : `staging the copied files was refused (${re.status}: ${ke})` : `staging the copied files failed (relay HTTP ${re.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${slug_9} once the cause is fixed.`),
              ...(copySourceNotFound !== void 0 && {
                copySourceNotFound: copySourceNotFound
              })
            };
          }
          let xe = () => F(`the server staged the copied files but its answer was incomplete, so nothing was published \u2014 retry publishing to slug ${slug_9}.${debris}`),
            yt = re.data?.files;
          if (!Array.isArray(yt) || yt.length !== Je.length) return m("artifact_publish", "copy_echo_malformed", O), xe();
          let Xt = [],
            jt = [];
          for (let [ve, lt] of Je.entries()) {
            let ke = yt[ve];
            if (ke?.leftOut !== void 0) {
              if (!Ct.askedToLeaveOut || typeof ke.leftOut !== "string" || ke.leftOut === "" || ke.sha256 !== void 0 || ke.size !== void 0 || ke.contentType !== void 0 || ke.path !== void 0 && ke.path !== lt.c.path) return m("artifact_publish", "copy_echo_malformed", O), xe();
              jt.push({
                file: lt.c,
                why: ke.leftOut
              });
              continue;
            }
            if (typeof ke?.sha256 !== "string" || !/^[0-9a-f]{64}$/.test(ke.sha256) || typeof ke.contentType !== "string" || !Rn.has(ke.contentType)) return m("artifact_publish", "copy_echo_malformed", O), xe();
            lt.sha = ke.sha256, lt.contentType = ke.contentType, Xt.push(lt);
          }
          Qe = Xt, qe = jt;
          let isFirstPublish_2 = h.slug === void 0 && y.reservedSlug === void 0;
          if (jt.length > 0 && !ki({
            mode: mode_2,
            isFirstPublish: isFirstPublish_2,
            removedCount: s.length
          })) {
            let ve = {
              ...O,
              n_left_out: jt.length
            };
            if (s.length > 0) return m("artifact_publish", "copy_left_out_removes_files", ve), F(bn(jt, "removes_files") + debris);
            return m("artifact_publish", "copy_left_out_replaces_files", ve), F(bn(jt, "replaces_files") + debris);
          }
          let Ln = Qe.filter(item => bEn.has(GK(item.contentType ?? "")));
          if (Ln.length > 0) return m("artifact_publish", "copy_refused_document", O), F(`copied file ${_(Ln[0].c.path)} is ${Ln[0].contentType}: a page or XML document cannot be copied from another artifact into a publish (its content must pass this tool's checks, which a server-side copy skips) \u2014 read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
          let pn = ve => z8(ve) === PXr,
            jr = ve => GK(ve ?? "") === PXr,
            zt = Qe.filter(item => !jr(item.contentType) && (pn(item.c.path) || pn(item.c.from.path)));
          if (zt.length > 0) {
            m("artifact_publish", "copy_refused_svg_mismatch", O);
            let ve = zt.slice(0, 20).map(item => `${_(item.c.path)} (${item.contentType})`),
              lt = zt.length - ve.length,
              ke = zt.length === 1,
              Ht = zt.every(item => !pn(item.c.from.path)) ? `copy ${ke ? "it" : "each"} to a path that does not end .svg, or ` : "";
            return F(`copied ${P(zt.length, "file")} ${ve.join(", ")}${lt > 0 ? ` and ${lt} more` : ""}: a file copied to or from a name ending .svg must be stored as an SVG image \u2014 ${Ht}read ${ke ? "it" : "each"} with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
          }
          let In = Qe.find(item => jr(item.contentType) && !pn(item.c.path));
          if (In !== void 0) return m("artifact_publish", "copy_refused_svg_mismatch", O), F(`copied file ${_(In.c.path)} is ${In.contentType}: an SVG image is copied only to a name ending .svg \u2014 copy it to a path ending .svg, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
          let zr = ve => SEn.has(GK(z8(ve) ?? "")),
            Dn = content_3 === null ? Qe.find(item => SEn.has(GK(item.contentType ?? "")) && !zr(item.c.path) && !zr(item.c.from.path)) : void 0;
          if (Dn !== void 0) return m("artifact_publish", "copy_refused_script", O), F(`copied file ${_(Dn.c.path)} is ${Dn.contentType}: a script its source stores under a name that does not say so cannot be copied into an artifact made from a type (the approval counted it as data) \u2014 copy it to a path with a script extension, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
        }
        if (signal_4?.aborted) return X();
        let St = Object.create(null);
        if (Ce !== void 0) St["index.html"] = Ce;
        for (let [re, xe] of Object.entries(Ie)) St[re] = xe;
        for (let re of V) St[re.f.path] = {
          sha256: re.sha,
          contentType: re.f.contentType
        };
        for (let re of Qe) St[re.c.path] = {
          sha256: re.sha,
          contentType: re.contentType
        };
        for (let re of s) St[re] = null;
        for (let re of ze) St[re] = {
          live: !1
        };
        if (qe.length > 0 && Object.keys(St).length === 0) return m("artifact_publish", "copy_left_out_no_other_file", {
          ...O,
          n_left_out: qe.length
        }), F(bn(qe, "no_other_file") + debris);
        let et = await Et({
            ...it,
            slug: slug_9,
            ...(force && {
              force: !0
            }),
            ...(baseVersion_2 && {
              baseVersion: baseVersion_2
            }),
            manifest: at(St),
            mode: mode_2
          }),
          Br = et.ok ? dt(et.data) : void 0;
        if (et.ok && et.fromFrame && et.status === 422 && le === 0 && (Br === "content_pending" || Br === void 0 && !pr(et.data) && !ra.test(Ut(et.data, 300)) && !(rt.liveKey && typeof et.data === "string"))) {
          Re = oA(et.data);
          continue;
        }
        if (et.ok && et.status === 200 && !et.data?.version) return m("artifact_publish", "prepare_no_version", O), F(Wt() + debris);
        D = et, Ue = !0;
        break;
      }
      if (Je.length > 0 && !Ue && !Ke) return m("artifact_publish", "copy_no_preflight", {
        ...O,
        prepare_status: ne?.status ?? 0
      }), F(`copying files from another artifact needs the upload preflight, which was unavailable here (${ne?.why ?? "no answer"}) \u2014 nothing was published.${debris}`);
      if (Ke && !Ue) return m("artifact_publish", "prepare_rerun_failed", {
        ...O,
        prepare_status: ne?.status ?? 0
      }), F(`the deploy was refused (422: ${Re}), and re-checking with the server before re-sending failed (${ne?.why ?? "no answer"}) \u2014 the publish was NOT ` + `completed. Retry publishing to slug ${slug_9}.`);
    } else if (slug_9 === void 0) {
      if (signal_4?.aborted) return X();
      let V,
        ne = "no answer",
        Re,
        le = !1;
      try {
        V = await Fe(void 0, []);
      } catch (error) {
        if (error instanceof RelayOnlyCancelledError) throw error;
        le = error instanceof RelayOnlyUnsentError, ne = oA(error instanceof Error ? error.message : String(error)), Re = sr(error, tele.t0);
      }
      let he = V?.ok && V.status === 200 ? We(V.data) : void 0;
      if (he !== void 0) slug_9 = he, $t(he);
      if (signal_4?.aborted) return X();
      if (he === void 0) {
        let Te = V?.ok ? ft(V) : void 0;
        if (Te) return F(`${Te.message} \u2014 nothing was published; try again after the reset.`);
        if (!le && (!V?.ok || V.status !== 403 && V.status !== 404)) c("artifact_publish", "reserve_unavailable", {
          ...O,
          reserve_status: V?.ok ? V.status : 0,
          ...Re
        });
        t(`[artifact] could not reserve a slug before publishing (${V === void 0 ? ne : V.ok ? `HTTP ${V.status}` : V.reason}); publishing without one \u2014 the server assigns it`);
      }
    }
    let Ze,
      dn = [],
      un = {};
    if (!Ue && He.length > 0 && !slug_9) {
      let manifest = Object.create(null);
      for (let [le, he] of Object.entries(ye)) if (he !== null && "content" in he && he.content !== void 0) manifest[le] = he;
      if (signal_4?.aborted) return X();
      let ne = await Et({
        ...it,
        ...(force && {
          force: !0
        }),
        manifest: manifest,
        mode: "replace"
      });
      if (!ne.ok) return m("artifact_publish", ne.reason, O), F(`publish unavailable: ${ne.reason}`);
      if (!ne.fromFrame) return m("artifact_publish", "relay_error", {
        ...O,
        deploy_status: ne.status
      }), F(fr(ne.status));
      if (ne.status === 400 || ne.status === 404) {
        let le = C1(ne.data);
        if (ne.status === 400 && Qi(le, rt)) return m("artifact_publish", "live_files_unsupported", O), F(Ji(le, rt.emptyPatch));
        if (ne.status === 400 && br(le, rt)) return m("artifact_publish", "ldx_unsupported", O), F(mr(le));
        if (ne.status === 404 || mCe.test(le) && Yi.test(le)) return m("artifact_publish", "multifile_unsupported", O), Ot(ne.status, le);
      }
      if (ne.status !== 200) {
        let le = gr(ne.status, ne.data, tele.isRedeploy, tele.echoedPin !== void 0 ? {
          pin: tele.echoedPin,
          declaredCaps: tele.hasCaps
        } : void 0, tele.liveFilesOn === !0, tele.sent, {
          retryAfter: ne.response?.headers?.["retry-after"]
        });
        if (le.code !== "thumbnail_rejected") m("artifact_publish", le.code ?? "deploy_failed", {
          ...O,
          deploy_status: ne.status,
          ...le.extra
        });
        return ur(le, `deploy ${ne.status}: ${oA(ne.data)}`);
      }
      let Re = cr().safeParse(ne.data);
      if (!Re.success) return m("artifact_publish", "deploy_incomplete", O), F(Wt());
      slug_9 = Re.data.slug, ee = Re.data.version, Ze = rr(ne.data), dn = nr(ne.data), un = {
        contract: Re.data.contract,
        preferredContract: Re.data.preferredContract,
        capabilities: Re.data.capabilities
      }, t6t(y.ownPublishes, slug_9, ee, {
        merged: dr(ne.data)
      }), debris = ` (The artifact was created with its inline files: to add the remaining files, fix the problem and publish again to slug ${slug_9}.)`;
    }
    if (!Ue && He.length > 0) {
      if (slug_9 === void 0) return m("artifact_publish", "deploy_incomplete", O), F("internal: no slug available for staged upload");
      let V = new Set();
      for (let Re of st) {
        if (signal_4?.aborted) return X();
        let le = await pt(slug_9, Re);
        if (!le.ok) return m("artifact_publish", le.reason, O), F(`upload unavailable: ${le.reason}.${debris}`);
        if (le.status === 404) return m("artifact_publish", "multifile_unsupported", O), Ot(404, "", {
          maybeGone: h.slug !== void 0,
          debris: debris
        });
        if (le.status !== 200) {
          let he = ft(le);
          if (he) return F(`${he.message} \u2014 try again after the reset.${debris}`);
          if (H(le) && ee === void 0) return pe(le);
          return m("artifact_publish", le.fromFrame ? "upload_failed" : "upload_relay_error", {
            ...O,
            upload_status: le.status
          }), F(le.fromFrame ? `file upload ${le.status}: ${oA(le.data)}.${debris}` : `file upload failed (relay HTTP ${le.status}).${debris}`);
        }
        for (let he of le.data?.files ?? []) if (he.sha256) V.add(he.sha256);
      }
      let ne = He.filter(item => !V.has(item.sha));
      if (ne.length > 0) return m("artifact_publish", "upload_hash_mismatch", O), F(`file upload did not stage ${ne.length} file(s) under the ` + "expected content hash \u2014 not publishing a manifest that would " + `reference unstaged content.${debris}`);
    }
    if (!Ue && He.length > 0 && ee !== void 0) {
      let manifest_2 = Object.create(null);
      for (let ne of He) {
        let Re = {
          sha256: ne.sha,
          contentType: ne.f.contentType
        };
        ye[ne.f.path] = Re, manifest_2[ne.f.path] = Re;
      }
      if (signal_4?.aborted) return X();
      ce = ee, D = await Et({
        ...it,
        slug: slug_9,
        manifest: manifest_2,
        mode: "patch",
        baseVersion: ee
      });
    } else if (!Ue) {
      if (signal_4?.aborted) return X();
      D = await Et({
        ...it,
        ...(slug_9 && {
          slug: slug_9
        }),
        ...(force && {
          force: !0
        }),
        ...(baseVersion_2 && {
          baseVersion: baseVersion_2
        }),
        manifest: at(ye),
        mode: mode_2
      });
    }
    if (D === void 0) return m("artifact_publish", "deploy_incomplete", O), F("internal: publish flow completed without a deploy");
    if (!D.ok) return m("artifact_publish", D.reason, O), F((D.reason === "no-auth" ? Tb(D.detail) : `publish unavailable: ${D.reason}`) + debris);
    if (!D.fromFrame) return m("artifact_publish", "relay_error", {
      ...O,
      deploy_status: D.status
    }), F(fr(D.status) + debris);
    if (D.status === 400 || D.status === 404) {
      let V = C1(D.data);
      if (D.status === 400 && Qi(V, rt)) return m("artifact_publish", "live_files_unsupported", O), F(Ji(V, rt.emptyPatch) + debris);
      if (D.status === 400 && br(V, rt)) return m("artifact_publish", "ldx_unsupported", O), F(mr(V) + debris);
      let ne = D.status === 404 && tele.isRedeploy && oee(D.data);
      if (D.status === 404 && !ne || mCe.test(V) && Yi.test(V)) return m("artifact_publish", "multifile_unsupported", O), Ot(D.status, V, {
        maybeGone: D.status === 404 && h.slug !== void 0,
        debris: debris
      });
    }
    if ((baseVersion_2 !== void 0 || ee !== void 0 || zK()) && D.status === 409) {
      let conflictDetail_2 = Qs(D.data) ?? (if_match_sent ? nc(D.data, new Set([...Object.keys(ye), ...Qe.map(item => item.c.path)])) : null);
      if (conflictDetail_2) return m("artifact_publish", "conflict", {
        ...O,
        ...(tele.baseRebase !== void 0 && {
          if_match_sent: if_match_sent
        }),
        ...(conflictDetail_2.paths !== void 0 && {
          conflict_reason: f("precondition_failed"),
          conflict_paths: conflictDetail_2.paths.length
        })
      }), {
        url: null,
        slug: null,
        version: null,
        err: (conflictDetail_2.paths !== void 0 ? ec(conflictDetail_2, conflictDetail_2.paths) : Zs(conflictDetail_2)) + debris,
        conflict: !0,
        conflictDetail: conflictDetail_2
      };
    }
    if (D.status !== 200) {
      let V = gr(D.status, D.data, tele.isRedeploy, tele.echoedPin !== void 0 ? {
        pin: tele.echoedPin,
        declaredCaps: tele.hasCaps
      } : void 0, tele.liveFilesOn === !0, tele.sent, {
        retryAfter: D.response?.headers?.["retry-after"],
        reservedSlug: reservedSlug_2,
        created: reservedSlug_2 === void 0 && debris !== ""
      });
      if (V.code !== "thumbnail_rejected") m("artifact_publish", V.code ?? "deploy_failed", {
        ...O,
        deploy_status: D.status,
        ...V.extra
      });
      let refusedLivePath_2 = V.code === "path_is_live" ? oa(D.data) : void 0;
      return {
        ...ur(V, `deploy ${D.status}: ${oA(D.data)}`, V.code === "rate_limited" && reservedSlug_2 !== void 0 ? "" : debris),
        ...(refusedLivePath_2 !== void 0 && {
          refusedLivePath: refusedLivePath_2
        }),
        ...(h.slug === void 0 && slug_9 !== void 0 && ee !== void 0 && {
          created: {
            slug: slug_9,
            version: ee
          }
        })
      };
    }
    let Ye = cr().safeParse(D.data);
    if (!Ye.success) return m("artifact_publish", "deploy_incomplete", O), F(Wt() + debris);
    let {
      slug: slug_10,
      version: version_2,
      read: read_2,
      shared: shared_2,
      kind: kind_3
    } = Ye.data;
    if (slug_9 && slug_10 !== slug_9) return m("artifact_publish", "deploy_slug_mismatch", O), F(or() + debris);
    let liveDocs_2 = bs(D.data),
      livePaths_2 = liveDocs_2?.map(V => V.path),
      bornLive_2 = (livePaths_2 ?? []).filter(item => (item === "index.html" ? Ce : Ie[item])?.live === !0),
      reseeded = (livePaths_2 ?? []).filter(item => (item === "index.html" ? Ce : Ie[item])?.reseed === !0),
      warnings_3 = L([...(qe.length > 0 ? [Pi(qe)] : []), ...dn, ...nr(D.data), ..._s(bornLive_2), ...il(reseeded), ...al(M.filter(item => item !== "index.html")), ...(Me ? rl() : []), ...sl(z, Object.keys(Ie).filter(item => Ie[item]?.live === !1)), ...ys(livePaths_2?.filter(V => !M.includes(V)), new Set([...Object.keys(ye), ...Qe.map(item => item.c.path)]))]).slice(0, Tn),
      la = M.includes("index.html"),
      embeds_2 = rr(D.data) ?? Ze,
      pushRemaining_2 = Ps(D.response?.headers?.[ks]),
      pushResetAt_2 = Cs(D.response?.headers?.date),
      Mr = Ws(Ye.data, force ? void 0 : ce, new Set([...Object.keys(ye), ...Qe.map(item => item.c.path), ...(livePaths_2 ?? [])]));
    t6t(y.ownPublishes, slug_10, version_2, {
      merged: dr(D.data)
    });
    let Lr = Xs(Ye.data),
      Ir = {
        ...O,
        ...(r.length > 0 && {
          n_left_out: qe.length
        }),
        e2e_ms: Math.round(performance.now() - tele.t0),
        is_redeploy: tele.isRedeploy,
        has_caps: tele.hasCaps,
        push_remaining_seen: pushRemaining_2 !== void 0,
        read_back_echoed: Lr.readBackEchoed === !0,
        staged_files: He.length,
        files_omitted: files_omitted,
        publish_path: f(Ue ? "preflight" : ot ? "legacy" : "inline"),
        ...(tele.baseRebase !== void 0 && {
          if_match_sent: if_match_sent
        }),
        ...Ys(Mr.mergedOver)
      };
    if (qe.length > 0) c("artifact_publish", "copy_left_out", Ir);else g("artifact_publish", Ir);
    let manifestPaths = content_3 === null ? s6t(D.data) : void 0;
    return {
      url: dg(slug_10),
      slug: slug_10,
      version: version_2,
      err: null,
      ...(pushRemaining_2 !== void 0 && {
        pushRemaining: pushRemaining_2,
        pushResetAt: pushResetAt_2
      }),
      ...(qe.length > 0 && {
        copiedLeftOut: qe.map(item => item.file)
      }),
      ...(read_2 !== void 0 && {
        read: read_2
      }),
      ...(shared_2 !== void 0 && {
        shared: shared_2
      }),
      ...Gs(Ye.data, it.deadline !== void 0),
      ...Mr,
      ...(Pt.deadline && {
        deadlineDropped: !0
      }),
      ...(Pt.icon && {
        iconDropped: !0
      }),
      ...qs(Ye.data.contract !== void 0 ? Ye.data : {
        ...Ye.data,
        ...un
      }, b),
      ...Lr,
      ...(kind_3 !== void 0 && {
        kind: kind_3
      }),
      ...(warnings_3.length > 0 && {
        warnings: warnings_3
      }),
      ...(embeds_2 !== void 0 && {
        embeds: embeds_2
      }),
      ...(manifestPaths !== void 0 && {
        manifestPaths: manifestPaths
      }),
      ...(livePaths_2 !== void 0 && {
        livePaths: livePaths_2
      }),
      ...(liveDocs_2 !== void 0 && {
        liveDocs: liveDocs_2
      }),
      ...(bornLive_2.length > 0 && {
        bornLive: bornLive_2
      }),
      ...(reseeded.length > 0 && {
        reseeded: reseeded
      }),
      ...(la && {
        pageCarriedLive: !0
      })
    };
  } catch (error) {
    if (error instanceof RelayOnlyUnsentError) {
      if (!Se && h.slug === void 0) return error instanceof RelayOnlyCancelledError ? js() : Bs(O);
      if (error instanceof RelayOnlyCancelledError) return F(wt("the publish was cancelled before a later request of it went out") + debris);
      return m("artifact_publish", "relay_only_unsent_after_deploy", O), F(wt("a later request could not go through the cloud session's gateway") + debris);
    }
    if (!zs(error)) m("artifact_publish", error instanceof Lt ? "relay_request_error" : "request_error", {
      ...O,
      ...sr(error, tele.t0),
      ...ut
    });
    return F((error instanceof Error ? error.message : String(error)) + debris);
  }
}
function dg(e) {
  return new URL(sCo(e), sKe() ?? nn().CLAUDE_AI_ORIGIN).toString();
}
var RAt = ["mine", "shared"];
function fEn(e) {
  return RAt.includes(e);
}
var pEn = ["mine", "shared", "all"],
  Vl = p(() => u({
    frames: C(oe()).nullable(),
    starsEnabled: I().optional().catch(void 0)
  })),
  Wl = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function gXr(e, n) {
  let r = e === "" || typeof e === "string" && Lmt.test(e) ? e : void 0,
    shared_3 = n === "" || typeof n === "string" && GM.test(n) ? n : void 0;
  return {
    read: n === void 0 || shared_3 !== void 0 ? r : void 0,
    shared: shared_3
  };
}
var cr = p(() => u({
  slug: o().regex(hr),
  version: o().regex(GM),
  read: oe().optional(),
  shared: oe().optional(),
  kind: o().regex(Lmt).optional().catch(void 0),
  contract: o().regex(dee).optional().catch(void 0),
  preferredContract: o().regex(dee).optional().catch(void 0),
  capabilities: me(o().max(64), oe()).optional().catch(void 0),
  typeInstance: I().optional().catch(void 0),
  type: oe().optional(),
  ...Yl(),
  ...Gl()
}).transform(({
  read: read_3,
  shared: shared_4,
  ...r
}) => ({
  ...r,
  ...gXr(read_3, shared_4)
})));
function Yl() {
  return {
    seq: E().int().nonnegative().optional().catch(void 0),
    deadline: u({
      until: E().int().positive().max(l6t)
    }).optional().catch(void 0),
    unchanged: T(!0).optional().catch(void 0),
    replayed: T(!0).optional().catch(void 0)
  };
}
function Gl() {
  return {
    appliedOver: o().regex(GM).optional().catch(void 0),
    mergedFrom: o().regex(GM).optional().catch(void 0),
    changed: C(u({
      path: o().min(1).max(o6t),
      sha256: o().regex(/^[0-9a-f]{64}$/).nullable()
    })).max(2 * aEn).optional().catch(void 0)
  };
}
function dr(e) {
  if (typeof e !== "object" || e === null || !("mergedFrom" in e)) return !1;
  let {
    mergedFrom: mergedFrom
  } = e;
  return typeof mergedFrom === "string" ? mergedFrom !== "" : mergedFrom != null;
}
function Ws(e, n, r) {
  let s = e.mergedFrom;
  if (s === void 0 || s !== n || s === e.version || s === e.appliedOver) return {};
  let changed = e.changed?.filter(b => !r.has(b.path));
  return {
    mergedOver: {
      base: s,
      ...(e.appliedOver !== void 0 && {
        live: e.appliedOver
      }),
      ...(changed !== void 0 && {
        changed: changed
      })
    }
  };
}
function Ys(e) {
  if (e === void 0) return {};
  return {
    merged_over: !0,
    ...(e.changed !== void 0 && {
      merged_changed: e.changed.length
    })
  };
}
var l6t = 253402300799999;
function Gs(e, n) {
  return {
    ...(e.seq !== void 0 && {
      seq: e.seq
    }),
    ...(n && e.deadline !== void 0 && {
      deadline: {
        until: e.deadline.until
      }
    }),
    ...(e.unchanged && !e.replayed && {
      unchanged: !0
    })
  };
}
function qs(e, n, r = !1) {
  let s = "contract" in n ? n.contract : void 0,
    contract_3 = e.contract ?? s,
    capabilities_5 = e.capabilities,
    y = $q(capabilities_5),
    S = !("capabilities" in n) && y,
    stored = e.contract !== void 0 && (y || tz(e.contract) !== null) ? {
      contract: e.contract,
      ...(capabilities_5 !== void 0 && {
        capabilities: capabilities_5,
        ...(S && (r ? {
          declaredByRoute: !0
        } : {
          carried: !0
        }))
      })
    } : void 0;
  return {
    ...(contract_3 !== void 0 && {
      contract: contract_3
    }),
    ...(e.preferredContract !== void 0 && {
      preferredContract: e.preferredContract
    }),
    ...(stored !== void 0 && {
      stored: stored
    })
  };
}
function Xs(e) {
  let typeLock_3 = e.typeInstance === !0 ? TAt(e.type) : void 0;
  return e.typeInstance === !1 || typeLock_3 !== void 0 && (typeLock_3.latest === void 0 || typeLock_3.latest === typeLock_3.current) ? {
    ...(typeLock_3 !== void 0 && {
      typeLock: typeLock_3
    }),
    readBackEchoed: !0
  } : {};
}
var Ks = p(() => u({
    slug: o().regex(hr),
    title: o().max(4000).optional(),
    favicon: oe().optional(),
    rel: o(),
    updatedAt: o().regex(Wl).optional().catch(void 0),
    softDeleted: I().optional(),
    starred: I().optional().catch(void 0),
    outsidersMayHaveWritten: T(!0).optional().catch(e => W2(e.input) ? !0 : void 0)
  })),
  Jn = t5,
  maxContentLength_8 = 4194304;
async function FJo(e, n) {
  let r = await Jl(e, n);
  if (r !== null) return r;
  return Ql(e, n);
}
var Qn = "~",
  Xl = /^(?=[^~]|~.)[A-Za-z0-9_-]*(?:~[A-Za-z0-9_-]*)?$/,
  Kl = 8192,
  Zl = 5;
async function yn(rel_2, n, r, credentials_8, signal_5) {
  let rows_4 = [],
    y = r,
    starsEnabled = !1;
  for (let w = 0; w < Zl; w++) {
    let A = await rEn({
      rel: rel_2,
      limit: n - rows_4.length,
      ...(y !== void 0 && {
        pageToken: y
      }),
      credentials: credentials_8,
      ...(signal_5 && {
        signal: signal_5
      })
    });
    if (!A.served) return w === 0 ? null : {
      rows: rows_4,
      token: y,
      starsEnabled: starsEnabled
    };
    if (starsEnabled = A.starsEnabled, rows_4.push(...A.rows), y = A.nextPageToken, y === void 0 || rows_4.length >= n) break;
  }
  return {
    rows: rows_4,
    ...(y !== void 0 && {
      token: y
    }),
    starsEnabled: starsEnabled
  };
}
async function Jl(e, n) {
  let {
    scope = "mine",
    pins: pins_3 = !1,
    signal: signal_6,
    credentials: credentials_9,
    pageToken: pageToken
  } = n;
  if (pageToken !== void 0 && (pageToken.length > Kl || !Xl.test(pageToken) || pageToken.includes(Qn) !== (scope === "all"))) return {
    err: "not a page token from a listing",
    reason: "bad_page_token"
  };
  let [S, w] = scope === "all" ? (pageToken ?? "").split(Qn) : scope === "mine" ? [pageToken, void 0] : [void 0, pageToken],
    A = pageToken !== void 0,
    k = scope !== "shared" && (!A || !!S),
    R = scope !== "mine" && (!A || !!w),
    W = k && R ? Math.max(1, Math.ceil(e / 2)) : e,
    [j, q] = await Promise.all([k ? yn("mine", W, S || void 0, credentials_9, signal_6) : void 0, R ? yn("shared", e - (k ? W : 0), w || void 0, credentials_9, signal_6) : void 0]);
  if (j === null || q === null) {
    if (A) return {
      err: "artifact listing failed: the next page could not be read",
      reason: "page_unserved"
    };
    return null;
  }
  let N = j,
    z = q,
    O = e - (N?.rows.length ?? 0) - (z?.rows.length ?? 0);
  if (O > 0 && N?.token === void 0 && z?.token !== void 0) {
    let we = await yn("shared", O, z.token, credentials_9, signal_6);
    if (we !== null) z = {
      ...we,
      rows: [...z.rows, ...we.rows]
    };
  } else if (O > 0 && z?.token === void 0 && N?.token !== void 0) {
    let we = await yn("mine", O, N.token, credentials_9, signal_6);
    if (we !== null) N = {
      ...we,
      rows: [...N.rows, ...we.rows]
    };
  }
  let pinsEnabled = (N ?? z)?.starsEnabled === !0,
    rows_5 = [],
    ue = new Set(),
    ae = 0;
  for (let we of [...(N?.rows ?? []), ...(z?.rows ?? [])]) {
    let je = Ks().safeParse(we);
    if (!je.success) {
      ae++;
      continue;
    }
    let {
      slug: slug_11,
      title: title_2,
      rel: rel_3,
      updatedAt: updatedAt,
      softDeleted: softDeleted,
      starred: starred
    } = je.data;
    if (softDeleted === !0 || !fEn(rel_3) || scope !== "all" && rel_3 !== scope || ue.has(slug_11)) continue;
    ue.add(slug_11);
    let favicon_2 = $_t(je.data.favicon);
    rows_5.push({
      title: Fm(title_2 ?? "") ?? "Untitled",
      url: dg(slug_11),
      ...(favicon_2 !== void 0 && rel_3 === "mine" && {
        favicon: favicon_2
      }),
      ...(updatedAt !== void 0 && {
        updatedAt: updatedAt
      }),
      ...(scope !== "mine" && {
        rel: rel_3
      }),
      ...(rel_3 === "shared" && we.external === !0 && {
        external: !0,
        ...(vAt.includes(we.role) && {
          role: we.role
        })
      }),
      ...(pins_3 && pinsEnabled && starred === !0 && {
        pinned: !0
      }),
      ...(rel_3 === "mine" && je.data.outsidersMayHaveWritten === !0 && {
        outsidersMayHaveWritten: !0
      })
    });
  }
  if (rows_5.length === 0 && ae > 0) return m("artifact_list", "all_rows_dropped"), {
    err: "artifact listing failed: response rows were unreadable",
    reason: "all_rows_dropped"
  };
  let nextPageToken = scope === "all" ? N?.token !== void 0 || z?.token !== void 0 ? `${N?.token ?? ""}${Qn}${z?.token ?? ""}` : void 0 : (N ?? z)?.token,
    Ee = scope === "mine" || nextPageToken !== void 0 ? void 0 : await Air({
      credentials: credentials_9,
      ...(signal_6 && {
        signal: signal_6
      })
    });
  for (let we of Ee?.listed ? Ee.rows : []) {
    if (ue.has(we.slug)) continue;
    ue.add(we.slug), rows_5.push({
      title: Fm(we.title ?? "") ?? "Untitled",
      url: dg(we.slug),
      rel: "shared",
      external: !0,
      ...(we.role !== void 0 && {
        role: we.role
      })
    });
  }
  if (g("artifact_list"), scope !== "mine") g(scope === "shared" ? "artifact_list_scope_shared" : "artifact_list_scope_all");
  let _e = nextPageToken !== void 0,
    Pe = _e || ae > 0 || scope !== "mine" && Ee?.listed === !0 && Ee.mayHaveMore;
  return {
    err: null,
    rows: rows_5,
    total: rows_5.length,
    totalAtLeast: Pe,
    truncated: Pe,
    ...(_e && {
      nextPageToken: nextPageToken
    }),
    ...(pins_3 && {
      pinsEnabled: pinsEnabled
    }),
    ...(Ee?.listed === !0 && {
      externalListed: !0
    })
  };
}
async function Ql(e, n) {
  let {
    scope: scope_2 = "mine",
    pins: pins_4 = !1,
    signal: signal_7,
    credentials: credentials_10,
    pageToken: pageToken_2
  } = n;
  if (pageToken_2 !== void 0) return {
    err: "artifact listing failed: the next page could not be read",
    reason: "page_unserved"
  };
  let S = scope_2 === "mine" ? void 0 : Air({
      credentials: credentials_10,
      ...(signal_7 && {
        signal: signal_7
      })
    }),
    w;
  for (let M = 0;; M++) {
    try {
      w = await Au.get(`/api/frame/frames?limit=${Jn}`, {
        refreshOAuth: !0,
        headers: xu(),
        timeout: 15000,
        maxContentLength: maxContentLength_8,
        ...(signal_7 && {
          signal: signal_7
        }),
        credentials: credentials_10
      });
    } catch (error) {
      if (M === 0 && !signal_7?.aborted) {
        await J(300 + Math.random() * 500);
        continue;
      }
      if (!signal_7?.aborted) m("artifact_list", "request_error", {
        wire: C_e(error)
      });
      return {
        err: `artifact listing failed: ${d(error)}`,
        reason: "request_error"
      };
    }
    if (w.ok && w.status >= 500 && M === 0 && !signal_7?.aborted) {
      await J(300 + Math.random() * 500);
      continue;
    }
    break;
  }
  let wire = _ue(w);
  if (!w.ok) return m("artifact_list", "not_ok", {
    wire: wire
  }), {
    err: w.reason === "no-auth" ? Tb(w.detail) : `artifact listing unavailable: ${w.reason}`,
    reason: "not_ok"
  };
  if (!w.fromFrame) return m("artifact_list", "relay_error", {
    wire: wire
  }), {
    err: `artifact listing failed (relay HTTP ${w.status})`,
    reason: "relay_error"
  };
  if (w.status < 200 || w.status >= 300) {
    let reason_3 = w.status >= 500 ? "http_5xx" : "http_4xx";
    return m("artifact_list", reason_3, {
      wire: wire
    }), {
      err: `artifact listing failed (HTTP ${w.status})`,
      reason: reason_3
    };
  }
  let k = Vl().safeParse(w.data);
  if (!k.success) return m("artifact_list", "malformed_body", {
    wire: wire
  }), {
    err: "artifact listing failed: malformed response",
    reason: "malformed_body"
  };
  let R = k.data.frames ?? [],
    W = scope_2 !== "mine" && R.length >= Jn ? await aXr({
      credentials: credentials_10,
      ...(signal_7 && {
        signal: signal_7
      })
    }) : void 0,
    j = [...R, ...(W?.listed ? W.rows : [])],
    pinsEnabled_2 = k.data.starsEnabled === !0,
    rows_6 = [],
    z = new Set(),
    total = 0,
    Y = 0,
    G = 0,
    ue = new Set(),
    ae = !1,
    Z = !1;
  for (let [M, Ae] of j.entries()) {
    let Me = Ks().safeParse(Ae);
    if (!Me.success) {
      if (Y++, M < R.length) G++;
      continue;
    }
    let {
      slug: slug_12,
      title: title_3,
      rel: rel_4,
      updatedAt: updatedAt_2,
      softDeleted: softDeleted_2,
      starred: starred_2,
      outsidersMayHaveWritten: outsidersMayHaveWritten
    } = Me.data;
    if (ue.has(slug_12)) continue;
    if (ue.add(slug_12), M < R.length && fEn(rel_4)) {
      if (rel_4 !== "mine") ae = !0;else if (ae) Z = !0;
    }
    let favicon_3 = $_t(Me.data.favicon);
    if (softDeleted_2 === !0 || !fEn(rel_4)) continue;
    if (scope_2 !== "all" && rel_4 !== scope_2) continue;
    if (z.add(slug_12), total++, rows_6.length >= e) continue;
    let title_4 = Fm(title_3 ?? "") ?? "Untitled";
    rows_6.push({
      title: title_4,
      url: dg(slug_12),
      ...(favicon_3 !== void 0 && rel_4 === "mine" && {
        favicon: favicon_3
      }),
      ...(updatedAt_2 !== void 0 && {
        updatedAt: updatedAt_2
      }),
      ...(scope_2 !== "mine" && {
        rel: rel_4
      }),
      ...(pins_4 && pinsEnabled_2 && starred_2 === !0 && {
        pinned: !0
      }),
      ...(rel_4 === "mine" && outsidersMayHaveWritten === !0 && {
        outsidersMayHaveWritten: outsidersMayHaveWritten
      })
    });
  }
  if (R.length > 0 && G === R.length) return m("artifact_list", "all_rows_dropped", {
    wire: wire
  }), {
    err: "artifact listing failed: response rows were unreadable",
    reason: "all_rows_dropped"
  };
  let Ee = await S;
  for (let M of Ee?.listed ? Ee.rows : []) {
    if (z.has(M.slug)) continue;
    if (z.add(M.slug), total++, rows_6.length >= e) continue;
    rows_6.push({
      title: Fm(M.title ?? "") ?? "Untitled",
      url: dg(M.slug),
      rel: "shared",
      external: !0,
      ...(M.role !== void 0 && {
        role: M.role
      })
    });
  }
  if (g("artifact_list", {
    wire: wire
  }), scope_2 !== "mine") g(scope_2 === "shared" ? "artifact_list_scope_shared" : "artifact_list_scope_all");
  let _e = ae && !Z,
    Pe = R.length >= Jn,
    we = Pe && !_e,
    je = W?.listed ? W.full : Pe,
    totalAtLeast = scope_2 !== "shared" && we || scope_2 !== "mine" && je || Y > 0 || scope_2 !== "mine" && Ee?.listed === !0 && Ee.mayHaveMore;
  return {
    err: null,
    rows: rows_6,
    total: total,
    totalAtLeast: totalAtLeast,
    truncated: rows_6.length < total || totalAtLeast,
    ...(pins_4 && {
      pinsEnabled: pinsEnabled_2
    }),
    ...(Ee?.listed === !0 && {
      externalListed: !0
    })
  };
}
var mEn = "conflict: nothing was published \u2014 ";
function Zs(e) {
  let {
    readRemedy: readRemedy,
    forceAdvisory: forceAdvisory,
    contentReadsBlocked: contentReadsBlocked
  } = Ege();
  return `${mEn}${d6t(e)} is live and this publish was not built on it. ` + (contentReadsBlocked ?? `Re-read it (${readRemedy}), merge your edits on top, then publish again.`) + (e.forceRefused ? BIe : forceAdvisory);
}
function ec(e, n) {
  if (n.length === 0) return `${mEn}${d6t(e)} changed some of the files this publish writes or removes, but its answer named none of them. List the artifact's files, read each file you are changing that changed, re-apply your change to what it holds now, and publish again.`;
  let r = n.slice(0, 20).map(item => _(item.path)),
    s = n.length - r.length;
  return `${mEn}${d6t(e)} changed ${P(n.length, "a file", "files")} this publish writes or removes: ${r.join(", ")}${s > 0 ? ` and ${s} more` : ""}. Read ${n.length === 1 ? "it" : "each one"} again, re-apply your change to what it holds now, and publish again.`;
}
function d6t(e) {
  return `a newer version (${e.live})` + (e.liveEntry === "page" || e.liveEntry === "editor" ? " saved from inside the page (someone's edits or input on it)" : e.liveEntry === "publish" ? " published by another session or agent" : " published elsewhere (by another session, or by someone saving from the page itself)") + (e.createdAt ? ` at ${e.createdAt}` : "");
}
async function ln(e) {
  let {
      hostGrant: hostGrant_2
    } = e,
    storedCaps_2 = e.storedCaps;
  if (hostGrant_2.kind === "absent") return {
    ok: !0,
    storedCaps: storedCaps_2
  };
  let s = e.pageBytes !== void 0 && {
    page_bytes: e.pageBytes
  };
  if (storedCaps_2 === void 0) {
    let h = await V0(e.slug, void 0, e.credentials);
    if (h !== null && "err" in h && er(h)) {
      if (await J(tr, e.signal), !e.signal?.aborted) h = await V0(e.slug, void 0, e.credentials);
    }
    if (h !== null && "err" in h) return m("artifact_publish", "host_grant_readback_failed", {
      ...s,
      ...vn(h)
    }), {
      ok: !1,
      err: `couldn't read the artifact's stored capability declaration (${h.err}) \u2014 ` + "this computer's local-server grant bounds what a publish carries forward, so this publish cannot proceed without it. This is usually transient: retry." + (e.lane === "page" ? " If the read keeps failing, publish the page declaring the capabilities you intend (capabilities: {} clears the stored declaration) together with contract: 'latest', which needs no read." : "")
    };
    storedCaps_2 = h?.capabilities ?? {};
  }
  return yXr(storedCaps_2, hostGrant_2, e.lane, s);
}
function yXr(storedCaps_3, n, r, s = !1) {
  if (n.kind === "absent") return {
    ok: !0,
    storedCaps: storedCaps_3
  };
  let h = $mo(storedCaps_3, n);
  if (!h.ok) {
    m("artifact_publish", "host_grant_carry_unreadable", {
      ...s,
      host_server_count: h.refused.length
    });
    let b = IF(h.refused, 8, S => `"${gg(S)}"`),
      y = $mo(storedCaps_3, {
        kind: "granted",
        tools: new Map()
      });
    return {
      ok: !1,
      err: `this computer's local-server grant (${aks}) could not be read. It is set by the app that launched this session and is not something to fix from here. The artifact's stored declaration names ` + `local servers \u2014 ${b.join(", ")} \u2014 that a publish declaring nothing ` + "would carry forward, so this publish cannot proceed" + (r === "page" ? ". Declare what to send instead: publish the page with capabilities " + Xi(y.ok ? y.caps : {}, "its local servers") + ", or with capabilities: {} to clear the stored declaration." : qi(r))
    };
  }
  if (h.dropped.length === 0) return {
    ok: !0,
    storedCaps: storedCaps_3
  };
  return m("artifact_publish", "host_grant_carry_refused", {
    ...s,
    dropped_count: h.dropped.length
  }), {
    ok: !1,
    err: "the artifact's stored declaration carries local tools this computer " + `did not grant \u2014 ${Js(h.dropped)} \u2014 and a publish ` + "that declares nothing would carry them forward, so this publish cannot proceed" + (r === "page" ? ". Declare what to send instead: publish the page with capabilities " + Xi(h.caps, "them") + ", or with capabilities: {} to clear the stored declaration." : qi(r))
  };
}
function qi(e) {
  return e === "files" ? " from this session: this artifact's declaration comes from its type and cannot be changed from here." : " from this session: an Artifact made from this type carries its declaration, and that cannot be changed from here.";
}
function Xi(e, n) {
  let r = NS(_(e), {
    max: 600
  });
  return r.length < 600 ? `set to the stored declaration without ${n}: ${r}` : `set to the stored declaration without ${n} (it is too long to print here)`;
}
async function HJo(e) {
  return ln({
    slug: e.slug,
    hostGrant: $mt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "files"
  });
}
async function $Jo(e) {
  return ln({
    slug: e.slug,
    hostGrant: $mt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "page"
  });
}
function Js(e) {
  return IF(e, 8, n => n.tool === null ? `all of "${gg(n.server)}"` : `tool "${gg(n.tool, {
    max: 128
  })}" on "${gg(n.server)}"`).join("; ");
}
function F(err) {
  return {
    url: null,
    slug: null,
    version: null,
    err: err
  };
}
function an(e, n) {
  if (e !== 503 || !n || typeof n !== "object" || !("slug" in n) || typeof n.slug !== "string" || !hr.test(n.slug)) return null;
  return {
    slug: n.slug,
    ...("live" in n && typeof n.live === "string" && GM.test(n.live) && {
      live: n.live
    }),
    ...("kind" in n && typeof n.kind === "string" && Lmt.test(n.kind) && {
      kind: n.kind
    })
  };
}
function vt(e, n, r, s) {
  if (!n) return e;
  let h = s === "answered" ? ", and the automatic retry did not repair it" : s === "unknown" ? "; the automatic retry was sent but got no answer, so it may or may not have repaired it" : s === "unsent" ? "; the automatic retry could not go through the cloud session's gateway, so it was not sent" : s === "cancelled" ? "; the publish was cancelled before the automatic retry was sent" : "";
  if (!r) return e.conflict ? e : {
    ...e,
    err: `${e.err} \u2014 the new version was recorded but its content was not stored${h}.`,
    ...(n.live !== void 0 && {
      liveVersion: e.liveVersion ?? n.live
    })
  };
  let b = dg(n.slug);
  if (n.kind !== void 0) return {
    ...e,
    err: `${e.err} \u2014 the server created ${b} but could not store its content, and that artifact cannot be published over: publishing again creates a new one.`
  };
  return {
    ...e,
    err: e.conflict ? `${e.err} \u2014 ${b} is the artifact this publish's first attempt created without storing its content.` : `${e.err} \u2014 the server created ${b} but could not store its content${h}.`,
    strandedSlug: n.slug,
    ...(!e.conflict && (e.liveVersion ?? n.live) !== void 0 && {
      liveVersion: e.liveVersion ?? n.live
    })
  };
}
function tc(e) {
  return IF(e, 8, s => {
    switch (s.kind) {
      case "not_object":
        return `capabilities.mcp must be an object of the form {"servers": [${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}]} \u2014 not an array, a string, or any other shape; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
      case "no_servers":
        return `capabilities.mcp declares no servers \u2014 put one ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'} entry under "servers" for each connector the page calls; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'} \u2014 an empty "servers" list is refused`;
      case "dynamic_not_boolean":
        return 'capabilities.mcp "dynamic" must be the JSON boolean true (or left out) \u2014 no other value is accepted, a string or a number included; with "dynamic": true the page may call connectors the declaration does not list, and "servers" may then be empty';
      case "entry_shape":
        return `servers[${s.index}] has no "server" string \u2014 each entry is ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}` + (s.wrongKey === null ? "" : ` (the key is "server", not "${gg(s.wrongKey)}")`);
      case "tools_shape":
        return `${Fen(s.server)} "${gg(s.server)}": "tools" must be an array of tool-name strings`;
      case "no_tools":
        {
          let h = gg(s.display ?? s.server),
            b = s.display === null ? "" : ` (declared as "${gg(s.server)}")`,
            y = s.available.length === 0 ? "" : ` (available this session: ${IF([...s.available], 12, S => `"${gg(S)}"`).join(", ")})`;
          return `${Fen(s.server)} "${h}"${b} lists no tools \u2014 set "tools" to the upstream names of the "${h}" tools the page calls${y}; an empty or omitted "tools" list is refused and never means "all tools"`;
        }
      case "unknown_tools":
        {
          let h = gg(s.display ?? s.server),
            b = s.display === null ? "" : ` (declared as "${gg(s.server)}")`,
            y = IF([...s.unknown], 8, w => `"${gg(w)}"`),
            S = s.available.length === 0 ? " (none it lists this session fits the manifest grammar)" : `, here: ${IF([...s.available], 12, w => `"${gg(w)}"`).join(", ")}`;
          return `${Fen(s.server)} "${h}"${b} has no ${P(s.unknown.length, "tool")} named ${y.join(", ")} in this session \u2014 "tools" takes that connector's own top-level tool names${S}; if this connector fronts other tools through its own search/execute tools (an MCP gateway), declare those and have the page reach the inner ones through them. The control plane would accept this manifest, but the page's calls would fail for viewers of this connector`;
        }
      case "opaque_id":
        return `"${gg(s.server, {
          max: 70
        })}" is a connector id, which no viewer can resolve \u2014 set "server" to that connector's name exactly as shown in claude.ai (Settings \u2192 Connectors) and pass the same name to callTool/watchTool in the page; if you don't know the name, ask the user, describing the connector by its tools (the user cannot see the id)`;
      case "known_id":
        {
          let h = gg(s.display);
          return `"${gg(s.server)}" is the id of connector "${h}" \u2014 set "server" to "${h}": approval prompts and viewers know connectors by name only, and the page must call it by that name too`;
        }
      case "tool_name":
        return `"${gg(s.server, {
          max: 70
        })}" is a tool name, not a connector name \u2014 "server" takes the connector's display name` + (s.display === null ? "" : `, here "${gg(s.display)}"`) + ', and "tools" takes the bare upstream tool names';
      case "connector_as_host":
        {
          let h = gg(s.display);
          return `"${gg(s.server, {
            max: 70
          })}" names the claude.ai connector "${h}", not a local server \u2014 declare it as {"server": "${h}", "tools": [...]} and call it by that name in the page`;
        }
      case "local_server_as_first_party":
        {
          let h = gg(s.local);
          return `"${gg(s.server, {
            max: 70
          })}" would bind the Claude app's own built-in server, but this session also has an MCP server named "${h}" \u2014 the page may have been built against that server, which no viewer can reach; rename or remove "${h}" (or drop the declaration) and publish again`;
        }
      case "undeclarable_name":
        return `connector "${fEr(s.name)}" cannot be declared until it is renamed in claude.ai (Settings \u2192 Connectors): a manifest "server" must be 1\u201364 characters with no control characters, line breaks, unusual spaces or text-direction controls, must not begin or end with a space or invisible character, and must not read as host: or be shaped like an id or a claude_ai_/mcp__ prefix \u2014 tell the user`;
      case "host_unavailable":
        return `"${gg(s.server, {
          max: 70
        })}" names a locally-configured MCP server, and host servers aren't available in this session \u2014 declare only claude.ai connectors (set "server" to the connector's display name), or ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
    }
  });
}
function ur(e, n, r = "") {
  return {
    ...F((e.msg ?? n) + r),
    ...(e.code === "slug_gone" && {
      gone: !0
    }),
    ...(e.code === "thumbnail_rejected" && {
      thumbnailRejected: e.msg ?? n
    }),
    ...((e.code === "rate_limited" || e.code === "contract_rollout") && {
      transient: e.code
    })
  };
}
function Qs(e) {
  return dt(e) === void 0 ? ea(e) : null;
}
function nc(e, n) {
  if (dt(e) !== "precondition_failed") return null;
  let r = ea(e);
  if (r === null) return null;
  let s = typeof e === "object" && e !== null && "paths" in e ? e.paths : void 0,
    paths = [];
  for (let b of Array.isArray(s) ? s : []) {
    let y = rc().safeParse(b);
    if (y.success && n.has(y.data.path)) paths.push(y.data);
  }
  return {
    ...r,
    paths: paths
  };
}
var rc = p(() => u({
  path: o(),
  expected: o().regex(/^[0-9a-f]{64}$/).nullable(),
  actual: o().regex(/^[0-9a-f]{64}$/).nullable()
}));
function ea(e) {
  if (!e || typeof e !== "object" || !("conflict" in e) || e.conflict !== !0 || !("live" in e) || typeof e.live !== "string" || !MV.test(e.live)) return null;
  let n = e;
  return {
    live: e.live,
    ...(typeof n.createdAt === "string" && /^[\w:.+ -]{1,40}$/.test(n.createdAt) && {
      createdAt: n.createdAt
    }),
    ...((n.liveEntry === "editor" || n.liveEntry === "page" || n.liveEntry === "publish") && {
      liveEntry: n.liveEntry
    }),
    ...(n.forceRefused === !0 && {
      forceRefused: !0
    })
  };
}
function vge(e) {
  if (e && typeof e === "object" && "error" in e && typeof e.error === "string" && "reason" in e && typeof e.reason === "string") return {
    error: e.error,
    reason: e.reason
  };
  return null;
}
var hEn = "publish denied: ",
  ic = ["compliance_restricted", "org_mismatch", "org_toggle_disabled", "summon_foreign_sender", "user_entitlement_denied", "write_gate_disabled"],
  sc = ["acl_unsupported", "artifact_limit_reached", "audience_conflict", "auto_edit_refused", "bad_json", "capability_refused", "cas_link_refused", "cmek_key_disabled", "content_pending", "content_refused", "content_too_large", "contract_refused", "credential_required", "database_org_cap", "database_too_large", "embeds_too_large", "external_sharing_disabled", "group_grant_forbidden", "instance_dup_unavailable", "instance_locked", "invalid_request", "invalid_slug", "live_doc", "live_over_budget", "live_path_cap", "live_path_delete", "live_refused", "multi_file_unavailable", "never_published", "not_found", "not_owner", "one_live_path", "origin_required", "owner_mode_only", "patch_no_base", "path_is_live", "pin_unsupported", "provision_conflict", "public_mode_disabled", "publish_settling", "rate_limited", "read_mode_refused", "read_timeout", "render_busy", "render_embeds_container", "render_over_budget", "render_unavailable", "soft_deleted", "soft_deleted_swept", "source_refused", "title_invalid", "too_many_concurrent", "type_cap_unavailable", "type_cross_org", "type_instances_off", "type_is_instance", "type_no_release", "type_single_file", "unknown_version", "write_conflict"];
function ta(e) {
  let n = dt(e),
    r = sc.find(item => item === n);
  return r ? {
    refusal_reason: f(r)
  } : {};
}
function Ut(e, n) {
  let r = typeof e === "string" ? e.trimEnd().replace(regExp_5, "") : vge(e)?.error ?? C1(e);
  return LV(r, n);
}
var na = /^capabilities\.([a-z][a-z0-9_]*)(?=[:. ])/;
function Ki(e) {
  return /^contract[ :]/.test(e);
}
var ac = / is newer than the preferred /,
  ra = /the artifact's type|built from an artifact type/,
  oc = {
    capNames: [],
    hostDecl: !1
  };
function ia(e) {
  return Un(gi(y_(e.retryAfter)), e.reservedSlug !== void 0 ? dg(e.reservedSlug) : void 0, e.refusedStep);
}
function sa(e, n) {
  let r = dt(n);
  return e === 429 && Mt(n) === void 0 && (r === "rate_limited" || r === "too_many_concurrent");
}
function en(e, n) {
  return /[.!?]$/.test(e) ? `${e} ${n}` : `${e}. ${n}`;
}
function Zi(e, n) {
  let r = na.exec(e)?.[1];
  if (r === void 0) return "Nothing was published; correct the declaration as described and publish again.";
  if (/: unavailable$/.test(e)) {
    if (!n.capNames.includes(r)) return `Nothing was published; an earlier version declares capabilities.${r}, it is not available to this account now, and a declaration that drops it cannot be stored \u2014 publish without a capabilities block to keep the stored set, or tell the user.`;
    return r === "mcp" && n.hostDecl ? "Nothing was published; the connectors declaration names locally-configured (host:) MCP servers, which this session cannot publish \u2014 declare only claude.ai connectors, or publish a version that does not call them." : `Nothing was published; capabilities.${r} is not available to this account here \u2014 publish a version that does not use it instead of retrying the same declaration.`;
  }
  if (e.includes("part of the runtime")) return `Nothing was published; drop capabilities.${r} \u2014 the runtime provides it without a declaration.`;
  return `Nothing was published; correct capabilities.${r} as described and publish again.`;
}
var lc = "Nothing was published. Only the artifact's owner can change who it is shared with (in its share settings on claude.ai), not this session \u2014 if the page can do without what the message names, publish a version without it; otherwise tell the user.",
  msg_3 = "the artifact you're updating was deleted, or you no longer have write access to it";
function fr(e) {
  return wt(`relay HTTP ${e}`);
}
var _Xr = "publish outcome unknown (";
function wt(e) {
  return `${_Xr}${e}) \u2014 it may have published; check the artifact list before publishing again`;
}
var c6t = "this file belongs to the artifact's type and can't be changed here";
function pr(e) {
  return C1(e).includes(c6t);
}
var cc = " \u2014 this Artifact was created from an Artifact type: its page (index.html) and the type's other files can't be changed on it. Publish only its own files (`file_path` naming one, more in `files`, with this `url`); to change the page, publish a new Artifact instead.",
  aa = "Nothing was published and the Artifact is unchanged; retrying cannot help, so tell the user it can't be changed from this session",
  dc = ` \u2014 this Artifact was created from an Artifact type and nothing can be published to it from this session: its page (index.html) and the type's other files can't be changed on it, and publishing its own files is not available. ${aa}.`,
  UJo = `this file can't be published: the Artifact being updated was created from an Artifact type, and no file or page can be published to it from this session. ${aa}`,
  BJo = "If the Artifact being updated was created from an Artifact type, that will be refused too, because nothing can be published to it from this session; in that case tell the user so.";
function gr(e, n, r, s, h = !1, b = oc, y = {}) {
  let S = uc(e, n, r, s, h, b, y),
    w = ta(n);
  return w.refusal_reason === void 0 ? S : {
    ...S,
    extra: {
      ...S.extra,
      ...w
    }
  };
}
function uc(e, n, r, s, h, b, y) {
  let S = pc(e, n, h);
  if (S !== void 0) return S;
  let w = dt(n);
  if (e === 400) {
    let k = C1(n);
    if (/^thumbnail/i.test(k.trimStart()) || mCe.test(k) && /["']thumbnail(?:_dark)?["']/.test(k)) return {
      code: "thumbnail_rejected",
      msg: `deploy 400: ${oA(n)}`
    };
  }
  if (an(e, n)) return {
    code: "publish_stranded"
  };
  if (e === 409 && w === "publish_settling") return {
    code: "publish_settling",
    msg: wt("the first attempt reached claude.ai and its content is still being stored")
  };
  if (e === 422 && dt(n) === "deadline_invalid") return {
    code: "deadline_invalid"
  };
  let A = e === 422 ? Ut(n, 300) : "";
  if (e === 422 && (w === "instance_locked" || pr(n) || ra.test(A))) {
    let k = pr(n) || A.includes("publish its files with a manifest"),
      R = te().frozenArtifactTypes?.typesOn;
    return {
      code: "type_locked",
      msg: `deploy 422: ${A}${!k || R === void 0 ? "" : R ? cc : dc}`
    };
  }
  if (e === 422 && w === "audience_conflict") return {
    code: "audience_conflict",
    msg: `deploy 422: ${en(A, lc)}`
  };
  if (e === 422 && w === "capability_refused") {
    let k = Ut(n, 1500).split(/; (?=capabilities[.: ]|\d+ more\b)/).filter(Boolean),
      R = k.length > 1 && /^\d+ more\b/.test(k.at(-1)) ? k.pop() : void 0;
    if (k.length <= 1 && R === void 0) return {
      code: "capability_refused",
      msg: `deploy 422: ${en(A, Zi(A, b))}`
    };
    let W = "",
      j = 0;
    for (let z of k) {
      let O = W === "" ? z : `${W}; ${z}`;
      if (O.length > 600 && j > 0) break;
      W = O, j++;
    }
    let q = [k.length > j ? `${k.length - j} more not shown` : "", R ?? ""].filter(Boolean),
      N = L(k.filter(item => /: unavailable$/.test(item) && !b.capNames.includes(na.exec(item)?.[1] ?? "") || item.startsWith("capabilities.mcp: unavailable") && b.hostDecl).map(item => Zi(item, b).replace(/^Nothing was published; /, "")));
    return {
      code: "capability_refused",
      msg: `deploy 422: ${en([W, ...q].join("; "), ["Nothing was published; fix each capabilities entry named \u2014 drop the unavailable ones, correct the others as described \u2014 and publish again.", ...N].join(" Also: "))}`
    };
  }
  if (e === 422 && s === void 0 && b.latestContract === !0 && (w === "contract_refused" || w === void 0 && Ki(A)) && ac.test(A)) return {
    code: "contract_rollout",
    msg: `deploy 422: ${en(A, Vn)}`
  };
  if (e === 422 && s !== void 0 && (w === "contract_refused" || w === void 0 && Ki(A))) return {
    code: "contract_echo_rejected",
    extra: {
      echo_declared_caps: s.declaredCaps
    },
    msg: `deploy ${e}: ${Ut(n, 200)} \u2014 this republish echoed the artifact's stored ` + `contract pin (${s.pin}) and nothing was published. If the reason above says the pin was yanked, pass contract: 'latest' to move the artifact to the current contract (this changes the page's runtime semantics); otherwise tell the user what the service said.`
  };
  if (e === 403 && w === "not_owner") return {
    code: "publish_denied",
    msg: `${hEn}this account can open the artifact but is not allowed to publish to it \u2014 nothing was published; ask its owner for edit access, or publish it as a new artifact (omit \`url\`).`
  };
  if (e === 403 && cmo(C1(n))) return {
    code: "ccr_credential_refused"
  };
  if (e === 403 && w !== "credential_required") {
    let k = vge(n);
    if (k) {
      let R = ic.find(item => item === k.reason),
        deny_reason = R ? f(R) : void 0;
      return {
        code: "publish_denied",
        ...(deny_reason && {
          extra: {
            deny_reason: deny_reason
          }
        }),
        msg: hEn + LV(k.error, 300)
      };
    }
  }
  if (e === 404 && r && oee(n)) return {
    code: "slug_gone",
    msg: msg_3
  };
  if (e === 429) {
    let k = Mt(n);
    if (k) return {
      code: "publish_cap_reached",
      extra: {
        cap_type: f(k.capType)
      },
      msg: `${k.message} \u2014 try again after the reset.`
    };
    if (sa(e, n) && y.created !== !0) return {
      code: "rate_limited",
      msg: ia(y)
    };
  }
  if (e === 408 && w === "read_timeout") return {
    msg: `deploy 408: ${en(Ut(n, 200), "Nothing was published; the server stopped waiting for the upload \u2014 retry once.")}`
  };
  return {};
}
function dt(e) {
  if (typeof e === "string") return regExp_5.exec(e.trimEnd())?.[1];
  if (e === null || typeof e !== "object" || !("reason" in e)) return;
  let reason_4 = e.reason;
  return typeof reason_4 === "string" && Lmt.test(reason_4) ? reason_4 : void 0;
}
var regExp_5 = new RegExp(` \\[(${A1i})\\]$`);
function oa(e) {
  if (e === null || typeof e !== "object" || !("path" in e)) return;
  let n = e.path;
  return typeof n === "string" && Kt.test(n) ? n : void 0;
}
function fc(e) {
  if (e === null || typeof e !== "object" || !("max" in e)) return;
  let n = e.max;
  return typeof n === "number" && Number.isSafeInteger(n) && n > 0 ? n : void 0;
}
function pc(e, n, r) {
  let s = dt(n);
  if (e === 409 && s === "path_is_live") return {
    code: "path_is_live",
    msg: `deploy 409: ${oA(n)}`
  };
  if (e === 422 && s === "one_live_path") return {
    code: "one_live_path",
    msg: `deploy 422: ${oA(n)}`
  };
  if (e === 422 && s === "live_path_cap") {
    let h = fc(n);
    return {
      code: "live_path_cap",
      msg: `deploy 422: ${oA(n)}`
    };
  }
  if (e === 422 && s === "live_path_delete") return {
    code: "live_path_delete",
    msg: `deploy 422: ${oA(n)}`
  };
  if (e === 422 && s === "render_over_budget") return {
    code: "live_over_budget",
    msg: `deploy 422: ${oA(n)}`
  };
  if (e === 422 && s === "render_unavailable") return {
    code: "render_unavailable",
    msg: `deploy 422: ${oA(n)}`
  };
  if (e === 422 && s === "live_over_budget") return {
    code: "live_over_budget",
    msg: typeof n === "string" ? `deploy 422: ${LV(n.trimEnd().replace(regExp_5, ""), 500)}` : `deploy 422: ${Ut(n, 500)}`
  };
  if (e === 422 && typeof n === "string" && hc.test(n)) return {
    code: "live_over_budget",
    msg: `deploy 422: ${LV(n, 500)}`
  };
  if (e === 503 && s === "render_busy") return {
    code: "render_busy",
    msg: `deploy 503: ${oA(n)}`
  };
  return;
}
var hc = /exceeds the live-editing budget/;
function Ji(e, n) {
  return `deploy 400: ${LV(e, 200)}`;
}
function mr(e) {
  return `deploy 400: ${LV(e, 200)}`;
}
function br(e, n) {
  return !1;
}
function Qi(e, n) {
  return n.liveKey && Hl.test(e) || n.emptyPatch && Ul.test(e);
}
function oA(e) {
  return LV(C1(e), 200);
}
export { eEn, BIe, tEn, pJo, Tpi, nXr, jIe, mJo, Cpi, Tir, Rpi, Api, xpi, xlt, GM, hJo, eba, t6t, nEn, WIe, gJo, rXr, oXr, sXr, Plt, n6t, Ppi, iXr, Cir, Opi, Lm, Ipi, yJo, W8, Wc, Mpi, vAt, Rir, Air, rEn, aXr, l_, zK, EAt, _Jo, zIe, p$, Y3e, bJo, SJo, wJo, wve, kve, r6t, dre, wge, kJo, vJo, vve, GIe, RQ, oEn, Eve, X3e, sEn, Jle, EJo, TJo, xir, CJo, RJo, iEn, o6t, aEn, s6t, TAt, lEn, J3e, CAt, dEn, kge, cEn, AJo, lXr, dXr, V0, cXr, uEn, xJo, PJo, OJo, IJo, MJo, uXr, fXr, i6t, pXr, VIe, P1e, mXr, cre, a6t, hXr, Pir, DJo, LJo, NJo, dg, RAt, fEn, pEn, gXr, l6t, FJo, mEn, d6t, yXr, HJo, $Jo, vge, hEn, msg_3 as Olt, _Xr, c6t, UJo, BJo, oA };