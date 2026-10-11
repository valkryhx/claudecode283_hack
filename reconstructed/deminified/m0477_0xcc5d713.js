// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, Kg, yQ, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I, Jd } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { MRe } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ld, zc } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { bRe, kYe, nDo, vt, x, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Um } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { bye, yn, I_ as name, Oe, Bn, ON, kD, G$r, D1, YRe, Rc, l3n, m5e, zR, pc, L1 } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { MN } from "B:/~BUN/root/chunk-9xz983aj.js";
import { nl } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { Lq } from "B:/~BUN/root/chunk-33tn3weg.js";
import { JB, ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { GHe as beginPrefix_2, uMr as end_2, K2n as beginPrefix, pMr as end, pcn, Y2n, uPo, hte, Mle, fPo, T6e, X2n, aq, fcn, J2n, fMr, mPo, mcn, yte, bCe, gcn, gPo, hPo, ALt, Dle, lq, oD, mMr, cq, vhe, yPo, PLt, _Mr } from "B:/~BUN/root/chunk-0y3bphdf.js";
import { oh } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { I3e, Ch, azn, XV, cx, Ud, BRo, lHe, ww, X3 as path_2 } from "B:/~BUN/root/chunk-j36yaq51.js";
import { G7 } from "B:/~BUN/root/chunk-bzhr4ppe.js";
import { Rm, $d, rle, ITe, VV, oan } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { zgr, Ggr, Ou, $Xt, J0e, jU, UXt, ylo, Vgr, _lo, blo, qgr, Kgr, Ygr, Slo, wlo, vL, aGe, jXt, WXt, Q0e, Utt, Jgr, Z0e, u0n, gW, Tlo, WU, SM, Clo, yE, xO, Qgr, Alo, Wtt, lR, Sm, tCt, f0n } from "B:/~BUN/root/chunk-r1ja2che.js";
import { BF } from "B:/~BUN/root/chunk-6pevpnkj.js";
import { cGe } from "B:/~BUN/root/chunk-116h9ckm.js";
import { eMe, IG } from "B:/~BUN/root/chunk-3gfdp1nf.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { o1, dPo } from "B:/~BUN/root/chunk-aky7m4ay.js";
import { Wa } from "B:/~BUN/root/chunk-dz2tgns2.js";
import { Pgn } from "B:/~BUN/root/chunk-t1t358ee.js";
import { o, E, M, ae, C, u, ut, $e, fe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { de, Pc, Xn, lt, jl } from "B:/~BUN/root/chunk-8386ms9e.js";
var Ms = 8,
  xA = /^[A-Za-z0-9._-]{1,64}$/,
  Or = {
    ownVers: {},
    inFlight: {}
  },
  hgr = o1("ownPublishes", Or);
function t3o() {
  return dPo(Or);
}
function Ott(e, n, r) {
  if (!xA.test(r)) return;
  e.set(s => {
    let h = s.ownVers[n] ?? [];
    if (h.includes(r)) return s;
    return {
      ...s,
      ownVers: {
        ...s.ownVers,
        [n]: [...h, r].slice(-Ms)
      }
    };
  });
}
function I4(e, n, r) {
  return e.get().ownVers[n]?.includes(r) ?? !1;
}
function ygr(e, n) {
  return (e.get().ownVers[n]?.length ?? 0) > 0;
}
function _gr(e, n, r) {
  return I4(e, n, r) ? "self-session" : "unverified";
}
async function qOn(e, n, r) {
  KOn(e, n);
  try {
    return await r();
  } finally {
    YOn(e, n);
  }
}
function KOn(e, n) {
  e.set(r => ({
    ...r,
    inFlight: {
      ...r.inFlight,
      [n]: (r.inFlight[n] ?? 0) + 1
    }
  }));
}
function YOn(e, n) {
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
function Y0e(e, n) {
  return (e.get().inFlight[n] ?? 0) > 0;
}
import { extname as no } from "path";
function AO(e, n) {
  let r = /^(\d{1,15})-/.exec(e)?.[1],
    s = /^(\d{1,15})-/.exec(n)?.[1];
  return r === void 0 || s === void 0 ? null : Number(r) - Number(s);
}
var Pse = " The server refuses force:true over a version saved from inside the page; only a publish built on that version is accepted.";
function MTt(e) {
  let n = e.trimEnd();
  if (!n.startsWith("<!--") || !n.endsWith("-->") || n.length < 7) return !1;
  let r = n.slice(4, -3);
  return !r.startsWith(">") && !r.startsWith("->") && !r.includes("-->") && !r.includes("--!>") && !r.includes("<!--") && !r.endsWith("<!-");
}
function DTt() {
  let CLAUDE_CODE_ACCOUNT_UUID = a.CLAUDE_CODE_ACCOUNT_UUID,
    CLAUDE_CODE_ORGANIZATION_UUID = a.CLAUDE_CODE_ORGANIZATION_UUID;
  if (CLAUDE_CODE_ACCOUNT_UUID && CLAUDE_CODE_ORGANIZATION_UUID) return {
    accountUuid: CLAUDE_CODE_ACCOUNT_UUID.toLowerCase(),
    organizationUuid: CLAUDE_CODE_ORGANIZATION_UUID.toLowerCase()
  };
  let r = I3e();
  if (!r?.accountUuid) return;
  return {
    accountUuid: r.accountUuid.toLowerCase(),
    organizationUuid: r.organizationUuid?.toLowerCase() ?? null
  };
}
var Ds = f(() => u({
    accountUuid: o(),
    organizationUuid: o().nullable(),
    version: o(),
    capabilities: C(o()),
    fetchedAt: E()
  })),
  Bs = f(() => u({
    accountUuid: o(),
    organizationUuid: o().nullable(),
    status: E(),
    deniedAt: E(),
    tokenExpiresAt: E()
  }));
function Ir(e) {
  let n = DTt();
  if (n === void 0 || !e.success || e.data.accountUuid !== n.accountUuid || e.data.organizationUuid !== n.organizationUuid) return;
  return e.data;
}
function pgr() {
  return Ir(Ds().safeParse(le().cachedArtifactRoster));
}
function slo() {
  return Ir(Bs().safeParse(le().artifactRosterDenied));
}
function WOn() {
  let roster = ee().roster;
  if (roster !== void 0) return {
    roster: roster,
    source: "session"
  };
  let roster_2 = a.CLAUDE_CODE_REMOTE ? void 0 : pgr();
  return roster_2 === void 0 ? void 0 : {
    roster: roster_2,
    source: "disk"
  };
}
function Lr() {
  return !x("tengu_pewter_canteen", !1);
}
var js = "data-chart-runtime";
function Mr(e) {
  return e.includes(js);
}
function Hs(e) {
  return T6e(e);
}
function Dr(e) {
  return ALt(e) >= 0;
}
function Br(e) {
  let n = [],
    r = e.indexOf(pcn),
    s = -1;
  while (r >= 0) {
    let h = r + pcn.length;
    if (s < h) {
      if (s = e.indexOf(Y2n, h), s < 0) break;
    }
    let g = e.indexOf(pcn, h);
    if ((g < 0 || g > s) && Dr(e.slice(h, s))) n.push([r, s + Y2n.length]);
    r = g;
  }
  return fcn(e, n);
}
var Fr = `(function () {
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
async function $n() {
  let e;
  try {
    let {
      loadChartBundleJs: loadChartBundleJs
    } = await import("B:/~BUN/root/chunk-9yvz4w9c.js");
    e = await loadChartBundleJs();
  } catch {
    return p("artifact_publish", "chart_bundle_unreadable"), null;
  }
  if (Hs(e) !== null) return p("artifact_publish", "chart_bundle_unsafe"), null;
  if (T6e(Fr) !== null) return p("artifact_publish", "chart_init_unsafe"), null;
  let n = `
<script>` + e + `</script>
<script>` + Fr + `</script>
`;
  if (!Dr(n)) return p("artifact_publish", "chart_block_unstrippable"), null;
  return pcn + n + Y2n;
}
function zs(e) {
  return T6e(e);
}
var lenDigitsMax = 8;
function Vs(e) {
  return `${beginPrefix}${e}-->`;
}
var maxSpan = 4194304;
function validate(e, n = 0) {
  return e[0] === `
` && gcn(e, 1) > 0 && e.endsWith(`</script>
`) && !e.includes(beginPrefix) && ALt(e) === n;
}
var openTags = 2,
  zr = {
    beginPrefix: beginPrefix,
    end: end,
    lenDigitsMax: lenDigitsMax,
    maxSpan: maxSpan,
    openTags: openTags,
    validate: validate
  },
  Ys = 50000,
  qs = 250000,
  Gs = 4096;
function Ur(e) {
  let n = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (r = n.indexOf("<code", r), r < 0) return !1;
    let s = n[r + 5];
    if (s === void 0) return !1;
    if (!X2n.has(s)) {
      r += 5;
      continue;
    }
    let h = Math.min(r + Gs, n.length),
      g = h;
    for (let v = r + 5; v < h; v++) if (n[v] === ">") {
      g = v;
      break;
    }
    let y = n.slice(r + 5, g);
    for (let v of y.matchAll(/language-([\w.+#-]+)/g)) {
      let w = v[1];
      if (Object.prototype.hasOwnProperty.call(bRe, w) || Object.prototype.hasOwnProperty.call(kYe, w)) return !0;
    }
    r = g;
  }
}
function Ks() {
  return `(function(){
if(typeof hljs==='undefined')return;
var budget=${qs};
var codes=Array.prototype.slice.call(document.querySelectorAll('pre>code'));
for(var i=0;i<codes.length;i++){
var el=codes[i];
if(el.hasAttribute('data-claude-hljs-claimed'))continue;
var m=/(?:^|\\s)language-(\\S+)/.exec(el.className||'');
if(!m||!hljs.getLanguage(m[1]))continue;
if(el.children.length)continue;
var src=(el.textContent||'').replace(/\\n$/,'');
if(src.length>${Ys}||src.length>budget)continue;
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
async function On() {
  let e;
  try {
    let {
      loadHljsBundleJs: loadHljsBundleJs
    } = await import("B:/~BUN/root/chunk-rtyyy093.js");
    e = await loadHljsBundleJs();
  } catch (error) {
    return d(error), p("artifact_publish", "hljs_bundle_unreadable"), null;
  }
  let bundleEmbedVerdicts = ee().bundleEmbedVerdicts;
  if (bundleEmbedVerdicts.hljs === void 0) bundleEmbedVerdicts.hljs = zs(e);
  if (bundleEmbedVerdicts.hljs !== null) return p("artifact_publish", "hljs_bundle_unsafe"), null;
  let r = Ks();
  if (T6e(r) !== null) return p("artifact_publish", "hljs_init_unsafe"), null;
  let s = `
<script>` + e + `</script>
<script>` + r + `</script>
`;
  if (s.length >= maxSpan) return p("artifact_publish", "hljs_bundle_overspan"), null;
  let blockStripVerdicts = ee().blockStripVerdicts;
  if (blockStripVerdicts.hljs === void 0) blockStripVerdicts.hljs = validate(s);
  if (!blockStripVerdicts.hljs) return p("artifact_publish", "hljs_block_unstrippable"), null;
  return `
` + Vs(s.length) + s + end + `
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
  Js = "<style>.mermaid-diagram{margin-block:4px}.mermaid-diagram svg{display:block;margin:0 auto;max-width:100%;height:auto}</style>";
function Zs() {
  return `(function(){
var CFG=` + b({
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
function ea(e) {
  return `${beginPrefix_2}${e}-->`;
}
var maxSpan_2 = 8388608;
function validate_2(e, n = 0) {
  let r = e[0] === `
` ? gPo(e, 1) : 0;
  if (!r || !e.endsWith(`</script>
`) || e.includes(beginPrefix_2)) return !1;
  let s = 1 + r,
    h = mPo(e.slice(s));
  if (h === null || e.indexOf("<", s) !== s + h.data) return !1;
  let g = r > 7 ? 1 : 0,
    y = aq(e.slice(s + h.after)),
    v = hPo(y, 0);
  if (v !== null) {
    if (!y.startsWith("</script>", v.len)) return !1;
    g += v.annotated ? 1 : 0, y = y.slice(v.len + 9);
  }
  let w = ALt(y);
  return w >= 0 && w + g === n;
}
var openTags_2 = 3,
  Wr = {
    beginPrefix: beginPrefix_2,
    end: end_2,
    lenDigitsMax: lenDigitsMax_2,
    maxSpan: maxSpan_2,
    openTags: openTags_2,
    validate: validate_2
  },
  ra = 4096;
function Yr(e) {
  let n = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (r = n.indexOf("<pre", r), r < 0) return !1;
    let s = n[r + 4];
    if (s === void 0) return !1;
    if (!X2n.has(s)) {
      r += 4;
      continue;
    }
    let h = Math.min(r + ra, n.length),
      g = h,
      y = !1;
    for (let v = r + 4; v < h; v++) if (n[v] === ">") {
      g = v, y = !0;
      break;
    }
    if (ia(n.slice(r + 4, g))) return !0;
    r = y ? g + 1 : g;
  }
}
function ia(e) {
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
    let g = s + 5;
    while (g < n && /\s/.test(e[g])) g++;
    if (e[g] !== "=") {
      r = s + 5;
      continue;
    }
    g++;
    while (g < n && /\s/.test(e[g])) g++;
    let y = e[g],
      v;
    if (y === '"' || y === "'") {
      let w = e.indexOf(y, g + 1);
      if (w < 0) return !1;
      v = e.slice(g + 1, w);
    } else {
      let w = g;
      while (w < n && !/[\s>]/.test(e[w])) w++;
      v = e.slice(g, w);
    }
    for (let w of v.split(/\s+/)) if (w === "mermaid") return !0;
    r = s + 5;
  }
  return !1;
}
function kXt() {
  let e = Zs();
  if (T6e(e) !== null) return p("artifact_publish", "mermaid_init_unsafe"), null;
  let n = `
` + Js + `
` + uPo + `</script>
<script>` + e + `</script>
`,
    blockStripVerdicts_2 = ee().blockStripVerdicts;
  if (blockStripVerdicts_2.mermaid === void 0) blockStripVerdicts_2.mermaid = validate_2(n);
  if (!blockStripVerdicts_2.mermaid) return p("artifact_publish", "mermaid_block_unstrippable"), null;
  return `
` + ea(n.length) + n + end_2 + `
`;
}
function rn(e) {
  return {
    chart: Mr(e),
    mermaid: Yr(e),
    highlight: Ur(e)
  };
}
var sn = "// DOC:anchors:begin",
  sa = /^(P|H1|H2|H3|H4|H5|H6|LI|UL|OL|BLOCKQUOTE|ASIDE|SECTION|DIV|TABLE|TR|TD|TH|DL|DT|DD|FIGURE|FIGCAPTION|CAPTION|PRE|HEADER|FOOTER|NAV|SUMMARY|DETAILS|ADDRESS|HGROUP|HR)$/;
function aa(e) {
  let n = 2166136261;
  for (let r = 0; r < e.length; r++) n = Math.imul(n ^ e.charCodeAt(r), 16777619);
  return (n >>> 0).toString(36);
}
function oa(e, n, r, s) {
  let h = "b-" + aa(e + `
` + n);
  if (!r.has(h)) return h;
  let g = s.get(h) || 2;
  while (r.has(h + "-" + g)) g++;
  return s.set(h, g + 1), h + "-" + g;
}
var qr = /^b-[0-9a-z]{1,7}(-[0-9]+)?$/,
  Gr = "<!doctype html>",
  la = 33554432;
function ca(e, n) {
  if (n === void 0) return;
  let r = /([^\t\n\f\r /=>]+)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:"[^"]*"|'[^']*'|[^\t\n\f\r >]*))?/y;
  r.lastIndex = n.startOffset;
  let s = r.exec(e);
  if (s === null || s[1].toLowerCase() !== "id") return;
  let end_3 = n.startOffset + s[0].length;
  return end_3 < n.endOffset ? void 0 : {
    start: n.startOffset,
    end: end_3
  };
}
var Nn = e => e.attrs?.find(n => n.name === "id")?.value,
  da = new Set(["", "text/javascript", "application/javascript", "module"]),
  In = (e, n) => e.attrs?.some(r => r.name === n) ?? !1,
  Xr = e => aq(e.attrs?.find(n => n.name === "type")?.value ?? "").toLowerCase(),
  ua = e => Xr(e) === "module",
  fa = e => e.tagName === "script" && e.namespaceURI === eMe && !In(e, "src") && !In(e, "nomodule") && da.has(Xr(e)) && (e.childNodes ?? []).some(item => item.nodeName === "#text" && (item.value ?? "").includes(sn)),
  pa = (e, n) => (e.attrs?.find(r => r.name === "class")?.value ?? "").split(/[\t\n\f\r ]+/).includes(n),
  ha = (e, n) => {
    for (let parentNode = e.parentNode; parentNode; parentNode = parentNode.parentNode) if (parentNode === n) return !0;
    return !1;
  };
function Kr(e) {
  let n = [],
    r = [...(e.childNodes ?? [])].reverse();
  while (r.length > 0) {
    let s = r.pop();
    if (s.tagName === void 0) continue;
    n.push(s);
    let h = s.childNodes ?? [];
    for (let g = h.length - 1; g >= 0; g--) r.push(h[g]);
  }
  return n;
}
function ga(node) {
  let n = new Map(),
    r = [{
      node: node,
      exit: !1
    }];
  while (r.length > 0) {
    let s = r.pop(),
      h = s.node.childNodes ?? [];
    if (!s.exit) {
      r.push({
        node: s.node,
        exit: !0
      });
      for (let y = h.length - 1; y >= 0; y--) if (h[y].tagName !== void 0) r.push({
        node: h[y],
        exit: !1
      });
      continue;
    }
    let g = "";
    for (let y of h) if (y.nodeName === "#text") g += y.value ?? "";else if (y.tagName !== void 0) g += n.get(y) ?? "";
    n.set(s.node, g);
  }
  return n;
}
function ma(e) {
  let n = v => v.sourceCodeLocation?.startOffset ?? 1 / 0,
    r = e.filter(item => pa(item, "page")),
    s = 1 / 0;
  for (let v of r) s = Math.min(s, n(v));
  let h = r.some(item => n(item) === 1 / 0),
    g = e.filter(fa).sort((itemA, itemB) => n(itemA) - n(itemB)),
    y = !1;
  for (let v of g) {
    if (!v.sourceCodeLocation?.endTag) continue;
    if (ua(v)) {
      if (In(v, "async")) {
        p("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      y = !0;
      continue;
    }
    let w = n(v);
    if (!(s < w)) {
      if (h) {
        p("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      continue;
    }
    let S = r.findIndex(item => n(item) < w),
      page = r[S];
    if (r.slice(0, S).some(item => n(item) === 1 / 0) || ha(v, page)) {
      p("artifact_publish", "block_ids_load_point_unsure");
      return;
    }
    return {
      page: page,
      seen: v.sourceCodeLocation.endOffset
    };
  }
  return y && r[0] !== void 0 ? {
    page: r[0],
    seen: 1 / 0
  } : void 0;
}
function ba(e, n) {
  let r = Kr(n),
    s = ma(r);
  if (s === void 0) return [];
  let {
      page: page_2,
      seen: seen
    } = s,
    y = Kr(page_2),
    v = new Map();
  for (let O of y) {
    let V = Nn(O);
    if (V !== void 0 && !v.has(V)) v.set(V, O);
  }
  let w = new Set(),
    S = [];
  for (let O of r) {
    let V = Nn(O);
    if (V === void 0) continue;
    let k = O.sourceCodeLocation?.attrs?.id?.startOffset;
    if (k === void 0 ? seen === 1 / 0 : k < seen) w.add(V);else if (k === void 0) S.push(V);
  }
  if (S.some(item => !w.has(item) && qr.test(item))) return p("artifact_publish", "block_ids_unplaced_id"), [];
  let T = ga(page_2),
    P = new Map(),
    D = [],
    j = 0;
  for (let O of y) {
    let V = O.tagName.toUpperCase(),
      k = O.namespaceURI === eMe && !/[^a-z0-9]/.test(O.tagName) && sa.test(V),
      H = Nn(O),
      X = H !== void 0 && v.get(H) === O;
    if (!k || X && H !== "") continue;
    let te = T.get(O) ?? "";
    if (j += te.length, j > la) return null;
    let W = oa(V, te, w, P);
    w.add(W);
    let sourceCodeLocation = O.sourceCodeLocation;
    if (!sourceCodeLocation?.startTag || !qr.test(W)) continue;
    let me = ca(e, sourceCodeLocation.attrs?.id);
    if (H !== void 0 && me !== void 0) D.push({
      start: me.start,
      end: me.end,
      text: `id="${W}"`
    });else if (H === void 0) {
      let pe = sourceCodeLocation.startTag.startOffset + 1 + O.tagName.length;
      D.push({
        start: pe,
        end: pe,
        text: ` id="${W}"`
      });
    }
  }
  return D;
}
function _a(e, n) {
  if (n.length === 0) return e;
  n.sort((itemA, itemB) => itemA.start - itemB.start);
  let r = "",
    s = 0;
  for (let h of n) {
    if (h.start < s) continue;
    r += e.slice(s, h.start) + h.text, s = h.end;
  }
  return r + e.slice(s);
}
async function Jr(e) {
  if (!e.includes(sn)) return e;
  try {
    let {
      nestingBudgetExceeded: nestingBudgetExceeded
    } = await import("B:/~BUN/root/chunk-mcm8ej3y.js");
    if (nestingBudgetExceeded(e)) return p("artifact_publish", "block_ids_nesting_budget"), e;
    let {
        parse: parse
      } = await import("B:/~BUN/root/chunk-mkedc3d3.js"),
      s = Gr + e,
      h = IG(parse(s, {
        sourceCodeLocationInfo: !0
      })),
      g = ba(s, h);
    if (g === null) return p("artifact_publish", "block_ids_text_budget"), t("[artifact] doc block ids skipped: too much text to hash"), e;
    return _a(s, g).slice(Gr.length);
  } catch (error) {
    return p("artifact_publish", "block_ids_parse_failed"), t(`[artifact] doc block ids skipped: ${String(error)}`), e;
  }
}
var ya = 10,
  va = 120,
  Zr = "Artifact publishing is rate-limited right now, so nothing was published.",
  Qr = " Nothing is wrong with the call: a publishing rate limit refused it, and this tool already waited and sent it once more.",
  ei = " Send the same call again",
  on = ' with url: "',
  Fn = '"',
  Ln = " after about ",
  wa = e => ` seconds \u2014 publishing limits are shared, so the wait can be longer while others publish; change nothing${e ? " else" : ""} about the call to get past this.`,
  xa = " That artifact was reserved for this publish and nothing has been published to it; targeting it avoids reserving another.",
  Mn = " The refused step was ",
  Sa = /^(?:the upload preflight that copying \d{1,4} files? from another artifact needs|staging this publish's \d{1,4} copied files? \((?:"(?:[^"\\\n]|\\.){0,1100}" from artifact [A-Za-z0-9-]{22,36}(?:, (?=")|))+(?:, and \d{1,4} more)?\)); nothing was staged\.$/;
function ti(e) {
  let n = e.slice(0, 3).map(item => `${b(item.path)} from artifact ${item.fromSlug}`),
    r = e.length > 3 ? `, and ${e.length - 3} more` : "";
  return `staging this publish's ${e.length} copied ${I(e.length, "file")} (${n.join(", ")}${r}); nothing was staged`;
}
function ni(e) {
  return `the upload preflight that copying ${e} ${I(e, "file")} from another artifact needs; nothing was staged`;
}
var Ea = "Not published: artifact publishing is rate-limited right now. Claude can try again shortly.",
  Ra = /^https?:\/\/[A-Za-z0-9.-]{1,100}(?::\d{1,5})?(?:\/[A-Za-z0-9._-]{1,40}){0,4}\/[A-Za-z0-9-]{22,36}$/;
function ri(e) {
  let n = Math.ceil((e ?? 0) / 1000);
  return Math.min(Math.max(n, ya), va);
}
function Dn(e, n, r) {
  let s = n !== void 0;
  return Zr + Qr + ei + (s ? `${on}${n}${Fn}` : "") + `${Ln}${e}${wa(s)}` + (s ? xa : "") + (r !== void 0 ? `${Mn}${r}.` : "");
}
function ilo(e) {
  let n = Zr + Qr + ei;
  if (!e.startsWith(n)) return;
  let r = n.length,
    s;
  if (e.startsWith(on, r)) {
    let v = e.indexOf(Fn, r + on.length);
    if (v === -1) return;
    if (s = e.slice(r + on.length, v), !Ra.test(s)) return;
    r = v + Fn.length;
  }
  if (!e.startsWith(Ln, r)) return;
  let h = /^\d{1,3}/.exec(e.slice(r + Ln.length))?.[0];
  if (h === void 0) return;
  let g = e.indexOf(Mn, r),
    y = g === -1 ? e : e.slice(0, g);
  if (g !== -1 && !Sa.test(e.slice(g + Mn.length))) return;
  return y === Dn(Number(h), s) ? Ea : void 0;
}
var jn = "Nothing was published and nothing is wrong with the call: this tool chose that contract because it is the server's newest, and it has not reached every server yet. Send the same call again in about a minute; do not pin an older contract to get past this.",
  Aa = "Not published: the artifact service is mid-update. Claude can try again in about a minute.",
  ka = /^deploy 422: contract ([0-9A-Za-z.+-]{1,32}) is newer than the preferred ([0-9A-Za-z.+-]{1,32})\. /;
function Ta(e, n) {
  return `deploy 422: contract ${e} is newer than the preferred ${n}. ${jn}`;
}
function alo(e) {
  let n = ka.exec(e);
  if (n === null) return;
  return e === Ta(n[1], n[2]) ? Aa : void 0;
}
function xtt() {
  let prReviewTemplate = ee().prReviewTemplate;
  return prReviewTemplate.chrome ??= import("B:/~BUN/root/chunk-a4vq0k3q.js").then(n => Pa(n.SKILL_FILES["template.html"] ?? "")), prReviewTemplate.chrome;
}
function zOn(e, n) {
  let r = e.indexOf(n);
  if (r === -1) return "";
  let s = /<div\b|<\/div>/g;
  s.lastIndex = r;
  let h = 0;
  for (let g = s.exec(e); g !== null; g = s.exec(e)) if (h += g[0] === "</div>" ? -1 : 1, h === 0) return e.slice(r, g.index + 6);
  return "";
}
function Pa(e) {
  return {
    pinnedMarkup: [{
      label: "stylesheet",
      bytes: e.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? "",
      terminal: "</style>"
    }, {
      label: "stale-banner",
      bytes: zOn(e, '<div class="stale-banner"'),
      terminal: "</div>"
    }, {
      label: "stamp-control",
      bytes: zOn(e, '<div class="stamp"'),
      terminal: "</div>"
    }],
    inlineStyleAllowlist: L([...e.matchAll(/\bstyle\s*=\s*"([^"]*)"/g)].map(item => item[1])),
    linkPlaceholders: L([...e.matchAll(/(?:src|href)\s*=\s*"([^"]*)"/gi)].map(item => item[1]).filter(item => !/^[a-z][a-z0-9+.-]*:|^\/\//i.test(item)))
  };
}
var si = /\bstale-banner\b|\bstamp(-[a-z]+)?\b/i,
  sha256 = "80cb1876b48d73daa3ee6df8dd1124eaa6d07e79d223bd7efec01e98714c4cec";
function Ptt(e, n, r) {
  return `https://github.com/${e}/${n}/pull/${r}`;
}
var id = "prr-anchor";
function GOn(e) {
  let n = Dle(e, 7),
    r = n - 1 - mcn;
  return n > 0 && r > 0 && bCe(e, r) !== 0 ? e.slice(0, r) + e.slice(n - 1) : e;
}
function NTt(e) {
  let n = [],
    r = /<script/gi,
    s = /<\/script/gi,
    h = 0;
  for (;;) {
    r.lastIndex = h;
    let g = r.exec(e);
    if (g === null) break;
    let index = g.index,
      v = e[index + 7];
    if (v !== void 0 && !/[\t\n\f\r />]/.test(v)) {
      h = index + 1;
      continue;
    }
    let w = index + 7,
      S = -1;
    for (;;) {
      s.lastIndex = w;
      let T = s.exec(e);
      if (T === null) break;
      let P = e[T.index + 8];
      if (P === ">") {
        S = T.index + 9;
        break;
      }
      if (P !== void 0 && /[\t\n\f\r /]/.test(P)) {
        let D = e.indexOf(">", T.index + 8);
        if (D === -1) break;
        S = D + 1;
        break;
      }
      w = T.index + 8;
    }
    if (S === -1) break;
    n.push(e.slice(index, S)), h = S;
  }
  return n;
}
var HTt = /^[A-Za-z0-9-]{1,39}$/,
  FTt = /^(?!\.\.?$)[A-Za-z0-9._-]{1,100}$/,
  $Tt = /^[0-9a-f]{40}$/,
  mgr = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
  UTt = /^[A-Za-z0-9_.-]{1,64}$/,
  q0e = /^[A-Za-z0-9_]{1,48}$/,
  EXt = /^[A-Za-z0-9_.-]{1,64}$/,
  oGe = /^method$/i,
  Yt = {
    owner: "owner",
    repo: "repo",
    number: 1,
    headSha: "0".repeat(40),
    publishedAt: "1970-01-01T00:00:00Z"
  };
function ai(e) {
  return e.owner === Yt.owner && e.repo === Yt.repo && e.number === Yt.number && e.headSha === Yt.headSha && e.publishedAt === Yt.publishedAt;
}
var Ca = new Set(["kind", "owner", "repo", "number", "headSha", "publishedAt"]),
  $a = new Set(["tool", "input", "shaPath"]);
function Oa(e) {
  if (!G(e)) return "anchor is missing";
  for (let n of Object.keys(e)) if (!Ca.has(n)) return "anchor carries an unexpected key";
  if (e.kind !== "pr") return 'anchor.kind is not "pr"';
  if (typeof e.owner !== "string" || !HTt.test(e.owner)) return "anchor.owner is not a valid owner";
  if (typeof e.repo !== "string" || !FTt.test(e.repo)) return "anchor.repo is not a valid repository name";
  if (!Number.isSafeInteger(e.number) || e.number < 1) return "anchor.number is not a positive integer";
  if (typeof e.headSha !== "string" || !$Tt.test(e.headSha)) return "anchor.headSha is not 40 lowercase hex";
  if (typeof e.publishedAt !== "string" || !mgr.test(e.publishedAt)) return "anchor.publishedAt is not a UTC ISO-8601 timestamp";
  return null;
}
function Na(e) {
  if (e === null) return null;
  if (!G(e)) return "live is neither null nor an object";
  for (let s of Object.keys(e)) if (!$a.has(s)) return "live carries an unexpected key";
  if (typeof e.tool !== "string" || !UTt.test(e.tool)) return "live.tool is not a tool identifier";
  if (!G(e.input)) return "live.input is not an object";
  let n = Object.keys(e.input);
  if (n.length > 8) return "live.input has too many keys";
  for (let s of n) {
    if (!q0e.test(s)) return "live.input has a non-identifier key";
    let h = e.input[s];
    if (oGe.test(s) && typeof h !== "string") return "live.input carries a non-string value under the method key \u2014 an operation selector is a word";
    if (typeof h === "string") {
      if (!EXt.test(h)) return "live.input carries a non-identifier string value";
    } else if (typeof h === "number") {
      if (!Number.isSafeInteger(h)) return "live.input carries a non-integer number";
    } else return "live.input carries a value that is not a string or integer";
  }
  let shaPath = e.shaPath;
  if (!Array.isArray(shaPath) || shaPath.length === 0 || shaPath.length > 6) return "live.shaPath is not a 1-6 element array";
  for (let s of shaPath) if (typeof s !== "string" || !q0e.test(s)) return "live.shaPath carries a non-identifier segment";
  return null;
}
function validate_3(e) {
  if (Object.keys(e).filter(item => item !== "anchor" && item !== "live").length > 0) return "the prr-anchor island carries unexpected keys";
  let r = Oa(e.anchor);
  if (r) return r;
  return Na(e.live === void 0 ? null : e.live);
}
function llo(e) {
  let n = e.match(/<script type="application\/json" id="prr-anchor">([^<]{2,65536})<\/script>/);
  if (!n) return null;
  let r;
  try {
    r = JSON.parse(n[1]);
  } catch {
    return null;
  }
  if (!G(r) || !G(r.live)) return null;
  let tool = r.live.tool;
  return typeof tool === "string" && UTt.test(tool) ? tool : null;
}
var id_2 = "prr-decisions",
  sha256_2 = "a38faf05e263c3da27c3750139ed41a14d47344b2ca96191b4e9c0440632c8c0",
  TXt = /^[a-z0-9-]{1,24}$/,
  ii = new Set(["id", "opts", "state", "choice"]),
  Fa = new Set(["open", "resolved", "acted"]);
function validate_4(e) {
  if (Object.keys(e).length !== 1 || !Array.isArray(e.items)) return "the decisions island is not {items: [...]}";
  let items = e.items;
  if (items.length > 20) return "the decisions island carries more than 20 items";
  let s = new Set();
  for (let h of items) {
    if (!G(h)) return "a decisions item is not an object";
    let g = Object.keys(h);
    if (g.length !== ii.size || g.some(item => !ii.has(item))) return "a decisions item carries an unexpected or missing key";
    if (typeof h.id !== "string" || !TXt.test(h.id)) return "a decisions item id is not a valid token";
    if (s.has(h.id)) return "decisions item ids are not unique";
    if (s.add(h.id), typeof h.state !== "string" || !Fa.has(h.state)) return "a decisions item state is not open, resolved, or acted";
    let opts = h.opts;
    if (!Array.isArray(opts) || opts.length < 1 || opts.length > 8) return "a decisions item opts is not an array of 1 to 8 tokens";
    for (let v of opts) if (typeof v !== "string" || !TXt.test(v)) return "a decisions option is not a valid token";
    if (h.choice !== null) {
      if (typeof h.choice !== "string" || !TXt.test(h.choice)) return "a decisions choice is not null or a valid token";
      if (!opts.includes(h.choice)) return "a decisions choice is not among its opts";
    }
  }
  return null;
}
var id_3 = "prr-stamp",
  sha256_3 = "a8b6abcc8650343e067901dc560ace5e9095b4ffd106118e718d7566566dfd22",
  Ma = new Set(["tool", "input", "statePath"]);
function Da(e) {
  if (e === null) return null;
  if (!G(e)) return "stamp is neither null nor an object";
  for (let s of Object.keys(e)) if (!Ma.has(s)) return "stamp carries an unexpected key";
  if (typeof e.tool !== "string" || !UTt.test(e.tool)) return "stamp.tool is not a tool identifier";
  if (!G(e.input)) return "stamp.input is not an object";
  let n = Object.keys(e.input);
  if (n.length > 8) return "stamp.input has too many keys";
  for (let s of n) {
    if (!q0e.test(s)) return "stamp.input has a non-identifier key";
    let h = e.input[s];
    if (typeof h === "string") {
      if (!EXt.test(h)) return "stamp.input carries a non-identifier string value";
    } else if (typeof h === "number") {
      if (!Number.isSafeInteger(h)) return "stamp.input carries a non-integer number";
    } else return "stamp.input carries a value that is not a string or integer";
  }
  let statePath = e.statePath;
  if (!Array.isArray(statePath) || statePath.length === 0 || statePath.length > 6) return "stamp.statePath is not a 1-6 element array";
  for (let s of statePath) if (typeof s !== "string" || !q0e.test(s)) return "stamp.statePath carries a non-identifier segment";
  return null;
}
function validate_5(e) {
  if (Object.keys(e).length !== 1 || !("stamp" in e)) return "the prr-stamp island is not {stamp: ...}";
  return Da(e.stamp);
}
var K0e = [{
    id: id,
    validate: validate_3
  }, {
    id: id_2,
    validate: validate_4
  }, {
    id: id_3,
    validate: validate_5
  }],
  BTt = [{
    label: "staleness",
    sha256: sha256
  }, {
    label: "decisions",
    sha256: sha256_2
  }, {
    label: "approve",
    sha256: sha256_3
  }];
function ja(e) {
  return new RegExp(`<script type="application/json" id="${e}">([^<]*)</script>`, "g");
}
function Ha(e) {
  return new RegExp(`<script type="application/json" id="${e}"${yte}>`);
}
function Hn(e) {
  return new RegExp(`(?<!-)\\bid\\s*=\\s*["']?${e}`, "i");
}
function za(e) {
  return new RegExp(`id\\s*=\\s*["']?${e}`, "i");
}
function Ua(e) {
  return e.replace(/&#(?:x0*([0-9a-f]{1,6})|0*(\d{1,7}));?/gi, (n, r, s) => {
    let h = Number.parseInt(r ?? s, r !== void 0 ? 16 : 10);
    return h > 0 && h <= 1114111 ? String.fromCodePoint(h) : n;
  });
}
function Va(e) {
  let n = cn,
    regExp = new RegExp(`(?<!-)\\bid[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"([^"]{0,${n}})"|'([^']{0,${n}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${n}})(?=[\\t\\n\\f\\r >]|$)|([\\s\\S]))`, "gi");
  for (let s = regExp.exec(e); s !== null; s = regExp.exec(e)) {
    if (s[4] !== void 0) {
      if (s[4] === ">") continue;
      return !0;
    }
    let h = s[1] ?? s[2] ?? s[3] ?? "";
    if (!h.includes("&#")) continue;
    let g = Ua(h).toLowerCase();
    if (K0e.some(item => g.startsWith(item.id))) return !0;
  }
  return !1;
}
function ln(e, n, r, s) {
  let regExp_2 = new RegExp(`(${n}[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*)(?:"([^"]{0,${cn}})"|'([^']{0,${cn}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${cn}})(?=[\\t\\n\\f\\r >]|$))?`, "gi");
  for (let g = regExp_2.exec(e); g !== null; g = regExp_2.exec(e)) {
    let y = g[2] ?? g[3] ?? g[4];
    if (y === void 0) {
      let w = g.index + g[1].length;
      if (e[w] === ">") {
        regExp_2.lastIndex = w;
        continue;
      }
      return s;
    }
    let v = r(y);
    if (v !== null) return v;
    regExp_2.lastIndex = g.index + g[1].length;
  }
  return null;
}
function Ya(e, n, r, s) {
  if (/<\/?script/i.test(e)) return "a stray or unclosed <script fragment remains outside the registered blocks";
  if (/\bon[a-z0-9_]+\s*=(?!>)/i.test(e)) return "the body carries an on*= attribute pattern";
  if (/javascript:/i.test(e.replace(/[\t\n\r]/g, ""))) return "the body carries a javascript: URL";
  if (/<(iframe|frame|frameset|embed|object|base|link|img|image|feimage|input|form|meta|video|audio|source|track|use|animate\w*|set|discard|applet|dialog|label)\b/i.test(e)) return "the body carries an element that can reach the network, navigate, or execute";
  if (/\bsrcdoc\s*=(?!>)/i.test(e)) return "the body carries a srcdoc attribute";
  if (/\bhttp-equiv\s*=(?!>)/i.test(e)) return "the body carries an http-equiv attribute";
  if (/\battributename\s*=\s*["']?on/i.test(e)) return "the body carries an SMIL attributeName targeting an event handler";
  if (/[\s/"'](?:srcset|poster|ping|formaction|background)\s*=(?!>)/i.test(e)) return "the body carries a fetch-capable attribute";
  if (/[\s/"']for\s*=(?!>)/i.test(e)) return "the body carries a click-forwarding for attribute";
  if (/[\s/"'](?:transform|pointer-events|overflow)\s*=(?!>)/i.test(e)) return "the body carries an overlay-capable presentation attribute";
  if (/<(template|textarea|noscript|xmp|plaintext|noembed|noframes|select|optgroup|option|math)\b/i.test(e)) return "the body carries a content-inerting container";
  let h = [...e.matchAll(/<title(?=[\t\n\f\r >/]|$)|<\/title(?=[\t\n\f\r >/]|$)/gi)].map(item => item[0][1] !== "/");
  if (h.length > 2 || h.length % 2 !== 0 || h.some((item, index) => item !== (index % 2 === 0))) return "the body carries a missing, extra, stray, or unclosed title element";
  if (/[\s/"'](?:popover(?:target(?:action)?)?|commandfor|interest(?:for|target))\s*=(?!>)/i.test(e)) return "the body carries a popover-family or invoker attribute";
  let g = new Map(),
    y = /data-decision-id[\t\n\f\r ]*=[\t\n\f\r ]*(?:"([^"]{0,256})"|'([^']{0,256})'|([^\t\n\f\r >]{1,256}))/gi;
  for (let P = y.exec(e); P !== null; P = y.exec(e)) {
    let D = P[1] ?? P[2] ?? P[3];
    if (g.set(D, (g.get(D) ?? 0) + 1), g.get(D) > 1) return "a data-decision-id appears on more than one element";
    y.lastIndex = P.index + 1;
  }
  if (e.includes("<![CDATA[")) return "the body carries a CDATA section";
  for (let P = e.indexOf("<!--"); P !== -1;) {
    let D = e.slice(P + 4, P + 6),
      j;
    if (D.startsWith(">")) j = P + 5;else if (D === "->") j = P + 6;else {
      let O = e.indexOf("-->", P + 4),
        V = e.indexOf("--!>", P + 4);
      if (O === -1 && V === -1) return "the body carries an unclosed comment";
      j = O === -1 ? V + 4 : V === -1 ? O + 3 : Math.min(O + 3, V + 4);
    }
    P = e.indexOf("<!--", j);
  }
  if (/@import|url\(|image-set\(/i.test(e)) return "the body carries a CSS network-reaching function";
  if (/<style/i.test(e)) return "a stylesheet other than the pinned template stylesheet";
  let v = ln(e, "\\bclass", P => si.test(P) ? "a counterfeit element carries a script-addressed class" : null, "a class attribute has no capturable value");
  if (v !== null) return v;
  let w = ln(e, "\\bstyle", P => n.includes(P) ? null : "an inline style outside the template allowlist", "a style attribute has no capturable value");
  if (w !== null) return w;
  if (/[^\s"'<>=/]{257,}\s*=/.test(e)) return "an attribute name exceeds the scan bound";
  let S = ln(e, `(?<=[\\s"'</=]|^)[^\\s"'<>=/]{1,256}`, P => /\\|&(?!(?:amp|lt|gt|quot|#39);)[#a-zA-Z]/.test(P) ? "an attribute value carries an escape or character reference outside the mandated set" : null, "an attribute has no capturable value");
  if (S !== null) return S;
  let T = ln(e, "(?:src|href)", P => r.has(P) || s !== null && s.test(P) ? null : "the body carries a src or href that is not the PR link", "a src or href attribute has no capturable value");
  if (T !== null) return T;
  return null;
}
var oi = 524288,
  cn = 2048;
function tfe(e, {
  parsedAsMarkup: parsedAsMarkup
} = {
  parsedAsMarkup: !0
}) {
  if (K0e.some(item => Hn(item.id).test(e)) || parsedAsMarkup && Va(e)) return !0;
  if (e.length > oi) return !1;
  let s = new Set(BTt.map(item => item.sha256));
  return NTt(e).some(item => s.has(Kt(GOn(item))));
}
function li(e, n, r = {}) {
  let s = r.crUrlRe ?? null;
  if (!tfe(e)) return {
    applies: !1
  };
  if (e.length > oi) return {
    applies: !0,
    ok: !1,
    reason: "the page is too large for a review page"
  };
  let h = NTt(e),
    g = new Map(BTt.map(item => [item.sha256, item])),
    y = reason => ({
      applies: !0,
      ok: !1,
      reason: reason
    }),
    v = !Hn(id_3).test(e),
    w = !h.some(item => Kt(item) === sha256_3),
    S = n.pinnedMarkup.find(item => item.label === "stamp-control"),
    T = S !== void 0 && S.bytes !== "" && !e.includes(S.bytes);
  if (v && w && T) return y("the page predates the approve control this CLI requires \u2014 it was published by a different version of this CLI, and a republish cannot reproduce it. Re-run /artifact-pr-review to publish a fresh review (decisions recorded on the old page stay visible there; the fresh page starts with its decisions open).");
  let P = new Set(),
    D = null,
    j = null,
    O = null;
  for (let W of K0e) {
    let re = [...e.matchAll(ja(W.id))];
    if (Hn(W.id).test(e) && re.length === 0) {
      if (Ha(W.id).test(e)) return y(`the ${W.id} island carries the server's element id \u2014 this is the published page read back, not your local copy; republish from the HTML (or payload) you authored, never from bytes you read`);
      return y(`the ${W.id} island is malformed or not a JSON script element`);
    }
    if (re.length !== 1) return y(`the page must carry exactly one ${W.id} island`);
    let me = re[0][1] ?? "";
    if (/[<>&'\\]/.test(me)) return y(`the ${W.id} island carries a disallowed character`);
    let pe;
    try {
      pe = J(me);
    } catch {
      return y(`the ${W.id} island is not valid JSON`);
    }
    if (!G(pe)) return y(`the ${W.id} island is not a JSON object`);
    let ye = W.validate(pe);
    if (ye) return y(ye);
    if (b(pe) !== me) return y(`the ${W.id} island is not in canonical JSON form`);
    if (W.id === id) D = pe.anchor, j = pe.live === void 0 ? null : pe.live;
    if (W.id === id_3) O = pe.stamp === void 0 ? null : pe.stamp;
    P.add(re[0][0]);
  }
  if (O !== null && r.allowStampBinding !== !0) return y('approve-enabled review pages publish only through the composed lane \u2014 set the prr-stamp island to {"stamp":null}, or publish via /artifact-pr-review with a pr_review payload');
  let V = new Map();
  for (let W of h) {
    if (P.has(W)) continue;
    let re = g.get(Kt(W));
    if (re === void 0) return y("a script block matches neither a registered island nor a pinned template script \u2014 the page must carry the template blocks byte-for-byte");
    V.set(re.label, (V.get(re.label) ?? 0) + 1);
  }
  for (let W of BTt) if ((V.get(W.label) ?? 0) !== 1) return y(`the page must carry exactly one pinned ${W.label} script`);
  for (let W of n.pinnedMarkup) {
    if (W.bytes === "") return y(`the ${W.label} template block could not be derived`);
    let re = e.indexOf(W.bytes);
    if (re === -1 || e.indexOf(W.bytes, re + W.bytes.length) !== -1) return y(`the page must carry the template ${W.label} byte-for-byte exactly once`);
  }
  let k = e;
  for (let W of [...P, ...h.filter(item => !P.has(item)), ...n.pinnedMarkup.map(item => item.bytes)]) k = k.replace(W, "");
  for (let W of K0e) if (za(W.id).test(k)) return y(`an element other than the registered island carries the ${W.id} id`);
  let H = new Set(n.linkPlaceholders);
  if (D !== null) H.add(Ptt(D.owner, D.repo, D.number));
  let X = Ya(k, n.inlineStyleAllowlist, H, D !== null && ai(D) && j === null && O === null ? s : null);
  if (X) return y(X);
  let te = rn(e);
  if (r.allowMermaidFence === !0) te.mermaid = !1;
  if (Object.values(te).some(Boolean)) return y("the body would trigger a runtime script injection after validation (mermaid fence, language-tagged code, or chart marker)" + (te.mermaid ? " \u2014 composed review pages with a diagram must republish through the composed lane, not as raw HTML" : ""));
  return {
    applies: !0,
    ok: !0
  };
}
import { randomUUID as ro } from "crypto";
function ci(e) {
  return Pgn(e.subarray(0, 4)) === "utf16le" ? "utf-16le" : "utf-8";
}
function dn(e, n) {
  let r = e.slice(0, n),
    s = 1;
  for (let y = r.indexOf(`
`); y !== -1; y = r.indexOf(`
`, y + 1)) s++;
  let h = 1;
  for (let y of r.slice(r.lastIndexOf(`
`) + 1)) h++;
  let g = 0;
  for (let y = e.indexOf("\uFFFD", n + 1); y !== -1; y = e.indexOf("\uFFFD", y + 1)) g++;
  return `line ${s}, column ${h}${g > 0 ? ` (+${g} more)` : ""}`;
}
function qa(e, n, r) {
  let s = r === "utf-8",
    h = s ? n[0] === 239 && n[1] === 187 && n[2] === 191 ? 3 : 0 : 2;
  for (let g = 0; g < e.length;) {
    let y = e.codePointAt(g) ?? 0;
    if (y === 65533) {
      if (!(s ? n[h] === 239 && n[h + 1] === 191 && n[h + 2] === 189 : n[h] === 253 && n[h + 1] === 255)) return g;
    }
    let v = y > 65535 ? 2 : 1;
    h += s ? y < 128 ? 1 : y < 2048 ? 2 : y < 65536 ? 3 : 4 : v * 2, g += v;
  }
  return -1;
}
function clo(e) {
  return new TextDecoder(ci(e)).decode(e);
}
function RXt(e) {
  let encoding = ci(e);
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
        where: dn(text, s)
      }
    };
  } catch {
    let r = new TextDecoder(encoding).decode(e),
      s = qa(r, e, encoding);
    return {
      problem: {
        kind: "undecodable",
        encoding: encoding,
        where: dn(r, s === -1 ? r.indexOf("\uFFFD") : s)
      }
    };
  }
}
import { randomUUID as Ga } from "crypto";
import { lstat as di, mkdir as ui, realpath as un, rm as Un, unlink as Ka, writeFile as Xa } from "fs/promises";
import Ue from "path";
async function fi(e, n, r) {
  let redeploy = r.slug !== void 0,
    slug = r.slug ?? Ga();
  if (!Bn.test(slug)) return {
    url: null,
    slug: null,
    version: null,
    err: `not an artifact slug: ${slug}`
  };
  let url = `${YRe}${slug}`,
    y = Ue.join(e, slug),
    v = Ue.dirname(e),
    w = await di(v).catch(() => null);
  if (w === null || !w.isDirectory() || (await un(v).catch(() => null)) !== v) return {
    url: null,
    slug: null,
    version: null,
    err: "the stub publish directory is not inside a real directory"
  };
  await zn(e), await zn(y), await Mtt(Ue.join(y, "index.html"), n);
  for (let [X, te] of [["thumbnail.img", r.thumbnail], ["thumbnail_dark.img", r.thumbnailDark]]) if (te !== void 0) await Mtt(Ue.join(y, X), te);else await Un(Ue.join(y, X), {
    recursive: !0,
    force: !0
  });
  let S = Ue.join(y, "files");
  await zn(S);
  let T = await un(S),
    notMaterialized = [],
    D = X => X === T || X.startsWith(T + Ue.sep),
    j = async path => {
      let te = Ue.resolve(S, path);
      if (!te.startsWith(S + Ue.sep)) return null;
      if (Lq(te, S + Ue.sep, BF)) return notMaterialized.push({
        path: path,
        reason: "names a git, IDE/toolchain, or shell configuration component"
      }), null;
      for (let W = Ue.dirname(te);; W = Ue.dirname(W)) try {
        return D(await un(W)) ? te : null;
      } catch (error) {
        if (!B(error) || W === S) throw error;
      }
    },
    O = async X => {
      try {
        return D(await un(Ue.dirname(X)));
      } catch (error) {
        if (B(error)) return "absent";
        throw error;
      }
    },
    removed = [];
  for (let X of r.removeFiles ?? []) try {
    let te = await j(X);
    if (te === null) continue;
    let W = await O(te);
    if (W === !1) continue;
    if (W === "absent") {
      removed.push(X);
      continue;
    }
    await Ka(te).catch(re => {
      if (!B(re)) throw re;
    }), removed.push(X);
  } catch (error) {
    t(`artifact stub: skipping removal of ${X}: ${error}`, {
      level: "warn"
    });
  }
  let files = [];
  for (let X of r.files ?? []) {
    try {
      let te = await j(X.path);
      if (te === null) continue;
      if (await ui(Ue.dirname(te), {
        recursive: !0
      }), (await O(te)) !== !0) continue;
      await Mtt(te, X.content);
    } catch (error) {
      t(`artifact stub: skipping supporting file ${X.path}: ${error}`, {
        level: "warn"
      });
      continue;
    }
    files.push({
      path: X.path,
      contentType: X.contentType,
      bytes: Buffer.byteLength(X.content)
    });
  }
  for (let X of notMaterialized) t(`artifact stub: not materializing ${X.path}: ${X.reason}`, {
    level: "warn"
  });
  let H = {
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
    publishedAtMs: Date.now()
  };
  return await Mtt(Ue.join(y, "manifest.json"), b(H, null, 2)), {
    url: url,
    slug: slug,
    version: "1",
    err: null
  };
}
async function zn(e) {
  try {
    if (!(await di(e)).isDirectory()) await Un(e, {
      force: !0
    });
  } catch (error) {
    if (!B(error)) throw error;
  }
  await ui(e, {
    recursive: !0
  });
}
async function Mtt(e, n) {
  await Un(e, {
    recursive: !0,
    force: !0
  }), await Xa(e, n, {
    flag: "wx"
  });
}
var pi = 4096,
  dlo = /^(?!\/)(?!.*\/\/)(?!.*\/$)(?!(?:^|.*\/)\.\.?(?:\/|$))[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029\\?#%:;]{1,512}$/u,
  qt = /^[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029]{1,1024}$/u,
  hi = f(() => C(u({
    path: o().regex(qt),
    doc: o().max(64).optional().catch(void 0),
    headSeq: E().int().nonnegative().optional().catch(void 0)
  })).max(pi));
function XOn(e) {
  if (e.docs !== void 0) return hi().safeParse(e.docs).success ? AXt(e) : void 0;
  return e.files !== void 0 ? AXt(e) : void 0;
}
function AXt(e) {
  let n = e.docs === void 0 ? void 0 : hi().safeParse(e.docs);
  if (n?.success && n.data.length > 0) return n.data;
  if (e.artifactKind !== ww) return [];
  if (e.files !== void 0 && !Ja(e)) return [];
  return [{
    path: path_2,
    ...(typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0 && {
      headSeq: e.headSeq
    })
  }];
}
function Ja(e) {
  return typeof e.headSubscriptionToken === "string" && e.headSubscriptionToken !== "" || typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0;
}
var Za = f(() => C(u({
  path: o().regex(qt),
  sha256: o().regex(/^[0-9a-f]{64}$/).optional().catch(void 0),
  contentType: o().max(255).optional().catch(void 0),
  doc: o().max(64).optional().catch(void 0)
})).max(pi));
function ulo(e) {
  if (e.files === void 0) return;
  let n = Za().safeParse(e.files);
  if (!n.success) return;
  let r = new Set(AXt(e).map(item => item.path)),
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
function Yu() {
  let e = ee();
  if (e.toolsetLatch === null) e.toolsetLatch = a.CLAUDE_CODE_ARTIFACT_TOOLSET ?? x("tengu_cobalt_plinth_damson", !1) === !0, i("tengu_artifact_toolset", {
    on: e.toolsetLatch
  });
  return e.toolsetLatch;
}
function plo() {
  return Yu() ? name : yn;
}
function jTt() {
  return Yu() ? `the ${name} tool (load it with ${Wa}, query \`select:${name}\`, if it is not loaded)` : `the ${yn} tool`;
}
function BU(e) {
  return `${name} tool, action "${e === "comments" ? "read" : e}"`;
}
function El(e, n) {
  return Yu() ? n() : e;
}
function flo(name_2, input) {
  return Yu() ? {
    name: name,
    input: cGe("comments", input)
  } : {
    name: name_2,
    input: input
  };
}
var bgr = ["editor", "commenter", "reader", "viewer"];
function xXt(e) {
  return e === "editor" ? "can edit" : e === "commenter" ? "can comment" : "can view";
}
var maxContentLength = 1048576,
  gi = 5000,
  eo = f(() => lt({
    frames: Xn(Pc()).nullable()
  })),
  to = f(() => lt({
    slug: de().regex(Bn),
    title: de().max(4000).optional(),
    role: jl(bgr).optional().catch(void 0)
  }));
async function JOn(e) {
  let n = (y, status) => {
      if (!e.signal?.aborted) p("artifact_list_external", y, {
        ...(status !== void 0 && {
          status: status
        })
      });
      return {
        listed: !1
      };
    },
    r = Ao(e.signal, {
      timeoutMs: gi
    }),
    s;
  try {
    s = await Ud.getRelayBound("/api/frame/frames/external", {
      refreshOAuth: !0,
      credentials: e.credentials,
      headers: $d(),
      timeout: gi,
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
  let h = eo().safeParse(s.data);
  if (!h.success) return n("malformed_body");
  let rows = [];
  for (let y of h.data.frames ?? []) {
    let v = to().safeParse(y);
    if (!v.success) continue;
    rows.push({
      slug: v.data.slug,
      ...(v.data.title !== void 0 && {
        title: v.data.title
      }),
      ...(v.data.role !== void 0 && {
        role: v.data.role
      })
    });
  }
  return _("artifact_list_external", {
    rows: rows.length
  }), {
    listed: !0,
    rows: rows
  };
}
function O4(e, n) {
  let err_code = yQ(Um(e)?.code) ?? Kg(e);
  return {
    transport: MRe(e),
    ...(err_code !== void 0 && {
      err_code: err_code
    }),
    elapsed_ms: Math.round(performance.now() - n)
  };
}
var mi = null,
  nu = 16777216,
  relayProbe = "/api/frame/contract/latest";
function SL() {
  return x("tengu_cobalt_plinth_fern", !0);
}
function sGe() {
  return x("tengu_cobalt_plinth_moss", !0);
}
function zwe() {
  let e = x("tengu_cobalt_plinth_sill", null);
  return typeof e === "number" && Number.isFinite(e) && e >= 0 ? Math.min(Math.floor(e), D1) : G$r;
}
function PA() {
  return a.CLAUDE_CODE_ARTIFACT_MULTI_FILE ?? x("tengu_cobalt_plinth_bracken", !1);
}
function Gwe() {
  return x("tengu_cobalt_plinth_samphire", !1);
}
function Sgr() {
  return x("tengu_tidy_widget", !0);
}
function wgr() {
  return x("tengu_cobalt_plinth_tansy", !1);
}
function vgr() {
  return x("tengu_cobalt_plinth_mallow", !1);
}
function U7() {
  return x("tengu_slate_lantern", !1);
}
function B7() {
  return x("tengu_slate_lantern_ember", !1);
}
function Dtt() {
  return a.CLAUDE_CODE_ARTIFACT_HOT ?? x("tengu_copper_hinge_wren", !1);
}
function so() {
  return ee().frozenHotUpdate ?? Dtt();
}
function xG() {
  return x("tengu_cobalt_plinth_campion", !1) === !0;
}
var ao = f(() => u({
    version: o().regex(gW),
    capabilities: C(o().regex(WU)).max(256),
    claude: M().optional().catch(void 0),
    core: C(o().regex(WU)).max(256).optional().catch(void 0),
    features: fe(o().regex(WU), fe(o().regex(WU), $e([fe(o(), ae()), A(!0).transform(() => ({}))]))).optional().catch(void 0)
  })),
  oo = "/api/frame/contract/latest",
  maxContentLength_3 = 262144,
  maxContentLength_4 = 65536,
  timeoutMs = 5000,
  fo = "x-contract-missing-caps",
  maxContentLength_2 = 16384;
async function fr(e, n, r) {
  let s;
  try {
    s = await Ud.get(e, {
      refreshOAuth: !0,
      ...(n.recoverOAuth401 && {
        recoverOAuth401: !0,
        storageV5: n.storageV5
      }),
      headers: $d(),
      maxContentLength: maxContentLength_2,
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
      err: l(error),
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
  if (s.status < 200 || s.status >= 300) return {
    err: `HTTP ${s.status}`,
    cause: s.status === 404 ? "http_404" : s.status >= 500 ? "http_5xx" : "http_4xx",
    status: s.status
  };
  let missingCapsHeader = s.response?.headers?.[fo];
  return {
    body: s.data,
    ...(typeof missingCapsHeader === "string" && {
      missingCapsHeader: missingCapsHeader
    })
  };
}
async function y8(e) {
  if (e.version !== void 0 && !gW.test(e.version)) return {
    err: "invalid contract version",
    cause: "malformed"
  };
  let n = await fr(e.version !== void 0 ? `/api/frame/contract/${e.version}` : oo, e);
  if ("err" in n) return n;
  let r = ao().safeParse(n.body);
  if (!r.success) return {
    err: "malformed contract response",
    cause: "malformed"
  };
  return r.data;
}
async function kgr(e, n, r) {
  if (!gW.test(e) || !WU.test(n)) return {
    err: "invalid contract version or capability name",
    cause: "malformed"
  };
  let s = await fr(`/api/frame/contract/${e}/${n}.d.ts`, r, {
    responseType: "text",
    maxContentLength: maxContentLength_3
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
async function Egr(e, n) {
  if (!gW.test(e)) return {
    err: "invalid contract version",
    cause: "malformed"
  };
  let r = await fr(`/api/frame/contract/${e}/prompt`, n, {
    responseType: "text",
    maxContentLength: maxContentLength_4
  });
  if ("err" in r) return r;
  if (typeof r.body !== "string" || r.body.trim() === "") return {
    err: "empty or non-text prompt body",
    cause: "malformed"
  };
  let missingCaps = r.missingCapsHeader === void 0 ? [] : r.missingCapsHeader.slice(0, 4096).split(",").map(item => item.trim()).filter(item => WU.test(item));
  return {
    promptMd: r.body,
    missingCaps: missingCaps
  };
}
function j7(e) {
  let n = Ld(),
    hasInteractiveUI = !e.isNonInteractiveSession || n === "claude-vscode" || zc(),
    publishContext = e.agentType === "teammate" || nl() ? "teammate" : e.agentId !== void 0 ? "subagent" : vt() ? "bg_session" : n === "sdk-ts" || n === "sdk-py" ? "sdk" : hasInteractiveUI ? "interactive" : "print";
  return {
    hasInteractiveUI: hasInteractiveUI,
    publishContext: publishContext
  };
}
function Ise(e) {
  return n => {
    let r = e();
    return {
      ver: r.artifactReadVersions?.[n],
      observers: r.artifactReadObservers?.[n]
    };
  };
}
function wL(e, n, r) {
  return `${e ?? "main"}
${n ?? ""}` + (r === void 0 ? "" : `
${r}`);
}
var bi = {
  page_data: 0,
  summary: 1,
  source: 2
};
function WTt(e, n, r, s) {
  let h = ee().readDeliveries.get(JB(e, n));
  return h !== void 0 && s !== void 0 && s !== "" && h.ver === r && h.batch === s && h.kind !== "source" ? h.kind : void 0;
}
function W7(e, n, r) {
  let s = ee().readDeliveries.get(JB(e, n));
  return s !== void 0 && s.ver === r && !s.sourced;
}
var Fi = "\x00own-mint";
function Vwe(e) {
  return `${e ?? "main"}
${Fi}`;
}
function zTt(e, n) {
  return e.ver === n && e.observers !== void 0 && Object.values(e.observers).includes("");
}
function M4(e, n) {
  return Li({
    ver: e.artifactReadVersions?.[n],
    observers: e.artifactReadObservers?.[n]
  });
}
function Li(e) {
  let {
    ver: ver,
    observers: observers
  } = e;
  return observers === void 0 || Object.hasOwn(observers, "main") ? ver : void 0;
}
function Tgr(e, n) {
  return () => Li(e(n));
}
function Cgr(e) {
  return (n, ver_2, s) => {
    if (ver_2 !== void 0 && !ON.test(ver_2)) return;
    let h = s?.indexOf(`
`) ?? -1,
      g = s === void 0 ? void 0 : s.slice(0, h),
      y = s === void 0 ? "" : s.slice(h + 1),
      v = y.indexOf(`
`),
      w = v < 0 ? y : y.slice(0, v),
      S = y.slice(v + 1),
      T = v < 0 ? void 0 : S === "summary" || S === "page_data" ? S : void 0,
      P = w === Fi,
      batch = P ? "" : w;
    if (g !== void 0) {
      let readDeliveries = ee().readDeliveries,
        O = JB(g, n),
        V = readDeliveries.get(O),
        kind = T ?? "source",
        sourced = kind === "source" || V !== void 0 && V.ver === ver_2 && V.sourced;
      if (ver_2 === void 0) readDeliveries.delete(O);else if (V === void 0 || V.ver !== ver_2 || V.batch !== batch || bi[kind] > bi[V.kind]) readDeliveries.set(O, {
        ver: ver_2,
        batch: batch,
        kind: kind,
        sourced: sourced
      });
    }
    if (g !== void 0 && !P) {
      let j = ee().refusedPublishBodies.get(JB(g, n));
      if (j !== void 0 && j.observedFrom === void 0 && (batch === "" || batch !== j.batch)) j.observedFrom = batch;
      if (j?.sourceless !== void 0 && !T && ver_2 !== void 0 && (j.live === void 0 || ver_2 === j.live || (AO(ver_2, j.live) ?? -1) > 0)) delete j.sourceless, j.live ??= ver_2;
    }
    if (g !== void 0 && ver_2 !== void 0) {
      let j = ee().refusedPublishBodies.get(JB(g, n));
      if (j?.withheld) delete j.withheld;
    }
    e(j => {
      let O = j.artifactReadVersions?.[n],
        V = j.artifactReadObservers?.[n],
        k = ver_2 === void 0 || g === void 0 ? void 0 : ver_2 === O ? V === void 0 || Object.hasOwn(V, g) ? V : {
          ...V,
          [g]: batch
        } : {
          [g]: batch
        };
      if (O === ver_2 && V === k) return j;
      let {
          [n]: H,
          ...X
        } = j.artifactReadVersions ?? {},
        {
          [n]: te,
          ...W
        } = j.artifactReadObservers ?? {};
      return {
        ...j,
        artifactReadVersions: ver_2 === void 0 ? X : {
          ...X,
          [n]: ver_2
        },
        artifactReadObservers: k === void 0 ? W : {
          ...W,
          [n]: k
        }
      };
    });
  };
}
function PXt(e, n, r, s) {
  let h = e?.[n];
  if (h === void 0) return {
    observed: !0,
    siblingInFlight: !1
  };
  let g = r ?? "main",
    y = Object.hasOwn(h, g) ? h[g] : void 0,
    siblingInFlight = y !== void 0 && y !== "" && y === s;
  return {
    observed: y !== void 0 && !siblingInFlight,
    siblingInFlight: siblingInFlight
  };
}
function Rgr(e) {
  return (slug_2, r, s) => e(h => {
    let g = SM(r),
      y = h.artifactRefs ?? [],
      v = y.find(item => item.slug === slug_2),
      pin = g ?? v?.pin;
    if (s?.cachePinOnly) {
      if (v !== void 0) {
        if (v.pin === pin) return h;
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
function Agr(e) {
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
var Mi = "body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#faf9f5;color:#141413}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>",
  ho = "<style>:root{color-scheme:light}" + Mi,
  go = "<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}" + Mi,
  mo = f(() => u({
    contract: o().max(64),
    capabilities: fe(o().max(64), ae()).nullish(),
    type: ae().optional()
  })),
  bo = f(() => ut({
    slug: o().regex(Bn),
    target: o().max(64).nullish(),
    current: o().max(64),
    latest: ae().optional(),
    blocked: ae().optional()
  })),
  _o = f(() => o().min(1).max(64)),
  yo = f(() => ut({
    to: o().min(1).max(64).optional().catch(void 0),
    reason: o().max(64).catch(""),
    conflict_count: E().int().min(0).max(1e6).optional().catch(void 0),
    paths: C(o().max(IXt)).max(OXt).optional().catch(void 0)
  })),
  IXt = 1024,
  OXt = 4096,
  Di = f(() => ut({
    manifest: fe(o().max(IXt), ut({
      src: ut({}).nullish(),
      doc: o().max(64).nullish().catch(void 0)
    })).refine(e => Object.keys(e).length <= OXt)
  }));
function Ltt(e) {
  let n = Di().safeParse(e);
  if (!n.success) return;
  let r = [],
    s = [];
  for (let [h, g] of Object.entries(n.data.manifest)) (g.src != null ? s : r).push(h);
  return {
    own: r.sort(),
    type: s.sort()
  };
}
function MXt(e) {
  if (e == null) return;
  let n = bo().safeParse(e);
  if (!n.success) return;
  let r = _o().safeParse(n.data.latest),
    blocked = n.data.blocked,
    h = yo().safeParse(blocked);
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
function pn(e) {
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
function Gn(e) {
  return e.request?.transport === !0 || e.status !== void 0 && e.status >= 500 || e.relayStatus !== void 0 && e.relayStatus >= 500;
}
var Kn = 500;
function vo(e) {
  let n = e?.mcp?.servers;
  return Array.isArray(n) && n.some(item => typeof item?.server === "string" && Q0e(item.server) !== void 0);
}
function Bi(e) {
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
    ...(xG() && e.thumbnail && {
      thumbnail: e.thumbnail.toString("base64")
    }),
    ...(xG() && e.thumbnailDark && {
      thumbnail_dark: e.thumbnailDark.toString("base64")
    }),
    ...(pr(e) && {
      deadline: e.deadline
    }),
    ...rle(e.requestId)
  };
}
function pr(e) {
  return so() && e.deadline !== void 0 && e.slug !== void 0;
}
async function wo(e) {
  let {
      capabilities: capabilities,
      echoPin: r,
      explicitPin: s,
      upgrade: upgrade,
      pageBytes: g,
      credentials: credentials
    } = e,
    v = (T, P, D) => {
      let j = Clo(T, P);
      if (j.length === 0) return null;
      m("artifact_publish", "unknown_capability", {
        page_bytes: g,
        unknown_count: j.length
      });
      let O = lR(j, 8, Sm).join(", "),
        V = P.capabilities.join(", "),
        k = D === null ? void 0 : WOn()?.roster,
        H = D !== null && k !== void 0 && Tlo(k.version, P.version) && j.every(item => k.capabilities.includes(item)) ? ` ${O} ${j.length === 1 ? "exists" : "exist"} in contract ${k.version}; this publish is pinned to ${P.version} by ` + (D === "passed" ? "the `contract` you passed." : "the artifact's stored contract.") : "";
      return `unknown ${I(j.length, "capability", "capabilities")}: ${O} \u2014 contract ${P.version} supports: ${V || "(none)"}.${H} Fix or drop the declaration; the control plane would reject it anyway.`;
    },
    w = (T, P, contract, j) => {
      let O = Alo(T, P);
      if ("errMsg" in O) return m("artifact_publish", "dual_spelling_ambiguous", {
        page_bytes: g
      }), O;
      let errMsg = v(O.caps, P, j);
      if (errMsg !== null) return {
        errMsg: errMsg
      };
      return {
        fields: {
          contract: contract,
          capabilities: O.caps
        }
      };
    },
    S = async T => {
      let P = await y8({
        credentials: credentials
      });
      if ("err" in P) return m("artifact_publish", "contract_fetch_failed", {
        page_bytes: g,
        cause: c(P.cause)
      }), {
        errMsg: `couldn't fetch the capability contract (${P.err}) \u2014 ${T}`
      };
      return P;
    };
  if (s !== null) {
    if (capabilities !== void 0) {
      let T = await y8({
        version: s,
        credentials: credentials
      });
      if (!("err" in T)) return w(capabilities, T, s, "passed");
    }
    return {
      fields: {
        contract: s,
        ...(capabilities !== void 0 && {
          capabilities: Qgr(capabilities)
        })
      }
    };
  }
  if (capabilities !== void 0 && r !== null) {
    let T = await y8({
      version: r,
      credentials: credentials
    });
    if ("err" in T) return {
      fields: {
        contract: r,
        capabilities: Qgr(capabilities)
      }
    };
    return w(capabilities, T, r, "stored");
  }
  if (capabilities !== void 0) {
    let T = e.latestFetchRemedy ?? (Object.keys(capabilities).length === 0 ? "clearing a stored declaration also needs the current " + "contract. Retry when the contract service is reachable \u2014 " + "until the clear lands, the stored grants stay live." : "a publish that declares capabilities needs the current contract from the server. Retry; or publish without the capabilities field and declare them on a later redeploy (a stored declaration carries forward unchanged)."),
      P = await S(T);
    if ("errMsg" in P) return P;
    return w(capabilities, P, P.version, null);
  }
  if (r !== null) return {
    fields: {
      contract: r
    }
  };
  if (upgrade) {
    let T = await S("an upgrade stamps the current contract, which requires the contract service. Retry when it is reachable.");
    if ("errMsg" in T) return T;
    return {
      fields: {
        contract: T.version
      }
    };
  }
  return {
    fields: {}
  };
}
var GTt = 8192,
  qwe = 300000,
  _i = 'window.__FRAME_PREAMBLE={"v":1';
function QOn(e) {
  return e.startsWith(_i) && ",}".includes(e[_i.length] ?? " ");
}
var regExp_3 = new RegExp(`^<base[\\t\\n\\f\\r ]+href="\\/_f\\/[^">]*"(?:${yte})?[\\t\\n\\f\\r ]*\\/?>`),
  regExp_4 = new RegExp(`<base\\s+href="\\/_f\\/[^">]*"(?:${yte})?\\s*\\/?>\\n?`, "gi");
function yi(e) {
  let n = aq(e),
    r = n.match(regExp_3);
  if (r) n = aq(n.slice(r[0].length));else if (!n.length) return !1;
  let s = r !== null;
  while (n.length) {
    if (!/^<script(?=[\t\n\f\r />])/.test(n)) return !1;
    let h = Dle(n, 7);
    if (h < 0) return !1;
    let g = n.slice(h);
    if (!s && (gcn(n, 0) !== h || !QOn(g))) return !1;
    s = !0;
    let y = fMr(g);
    if (y < 0) return !1;
    n = aq(g.slice(y));
  }
  return !0;
}
function ji(e) {
  let n = aq(e);
  if (n.startsWith("<head>") && n.endsWith("</head>")) return yi(n.slice(6, -7));
  return yi(n);
}
function VTt(e, n = () => !0) {
  let r = 4,
    s = e.indexOf(hte);
  while (s >= 0 && s < GTt && r > 0) {
    let h = s + hte.length,
      g = e.subarray(0, s + qwe + Mle.length).indexOf(Mle, h);
    if (g >= 0 && ji(e.toString("utf8", h, g))) {
      let y = Buffer.concat([e.subarray(0, s), e.subarray(g + Mle.length)]);
      if (n(y)) return y;
      r--;
    }
    s = e.indexOf(hte, h);
  }
  return;
}
var Eo = /^<body(?=[\t\n\f\r />])/i,
  vi = /^<base(?=[\t\n\f\r />])/i,
  Ro = /^<(script|style|title|textarea|xmp|iframe|noembed|noframes|noscript|plaintext)(?=[\t\n\f\r />])/i;
function Zt(e, n, r) {
  let s = /[\t\n\f\r />]/g,
    h = r;
  for (;;) {
    if (h = e.indexOf("<", h), h < 0) return -1;
    if (e.startsWith("<!--", h)) {
      let y = -1;
      if (e.startsWith(">", h + 4)) y = h + 5;else if (e.startsWith("->", h + 4)) y = h + 6;else for (let v = e.indexOf("--", h + 4); v >= 0;) {
        if (e.startsWith(">", v + 2)) y = v + 3;else if (e.startsWith("!>", v + 2)) y = v + 4;else {
          v = e.indexOf("--", v + 1);
          continue;
        }
        break;
      }
      if (y < 0) return -1;
      h = y;
      continue;
    }
    let g = Ro.exec(e.slice(h, h + 11));
    if (g) {
      let y = g[1].toLowerCase(),
        v = y === "plaintext" ? -1 : Dle(e, h + 1 + y.length),
        regExp_5 = new RegExp(`</${y}(?=[\\t\\n\\f\\r />])`, "gi");
      regExp_5.lastIndex = Math.max(v, 0);
      let S = v < 0 ? null : regExp_5.exec(e),
        T = S === null ? -1 : Dle(e, S.index + S[0].length);
      if (T < 0 || y === "script" && J2n(e.slice(v, S.index))) return -1;
      h = T;
    } else if (n.test(e.slice(h, h + 8))) return h;else if (/^<\/?[a-zA-Z]/.test(e.slice(h, h + 3))) {
      s.lastIndex = h + 2;
      let y = s.exec(e);
      if (h = y === null ? -1 : Dle(e, y.index), h < 0) return -1;
    } else if (/^<(?:[?!]|\/(?!>))/.test(e.slice(h, h + 3))) {
      if (h = e.indexOf(">", h + 2), h < 0) return -1;
      h++;
    } else h++;
  }
}
function qTt(e) {
  return Vi(e, Wi, zi(ko, "blocks"));
}
var ko = 64,
  To = 96,
  Hi = 64;
function zi(cap, exhausted) {
  return {
    spent: 0,
    cap: cap,
    exhausted: exhausted
  };
}
function Ui(e) {
  if (e.spent === e.cap) throw new Ose(e.exhausted, e.spent);
  e.spent++;
}
class Ose extends Oe {
  passes;
  constructor(e = "blocks", n) {
    super(Co[e], Po[e]);
    this.passes = n;
  }
}
var Po = {
    blocks: "strip_unsettled",
    author: "strip_unsettled",
    levels: "nested_repair_depth_cap"
  },
  Co = {
    blocks: "This page carries `<!-- frame-runtime -->` serve-marker blocks or `data-frame-runtime` attributes nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete those comment blocks and attributes from the source and publish again.",
    author: 'This page carries runtime-marker comment blocks (`<!-- frame-runtime -->\u2026<!-- /frame-runtime -->`, `<!-- chart-runtime -->\u2026<!-- /chart-runtime -->`, `<!--claude-mermaid-runtime-begin\u2026`, `<!--claude-hljs-runtime-begin\u2026`), `data-frame-runtime` attributes, `<base href="/_f/\u2026">` tags, or repeated artifact skeletons (`<!doctype html><html><head>\u2026` wrapped around the page again and again) nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete every such comment block, attribute, tag, and repeated outer skeleton from the source, keep the innermost document, and publish again.',
    levels: `This page is a published artifact page wrapped inside more than ${Hi} nested copies of the artifact skeleton (\`<!doctype html><html><head><!-- frame-runtime -->\u2026\` repeated) \u2014 nothing a genuine page contains. Publish the innermost document on its own: delete the repeated outer skeletons from the source and publish again.`
  };
function Vi(e, n, r) {
  for (;;) {
    Ui(r);
    let s = n(e);
    if (s === e) return s;
    e = s;
  }
}
function Wi(e) {
  let n = [],
    r = 0,
    s = Zt(e, Eo, 0),
    h = s < 0 ? 1 / 0 : s,
    g = e.indexOf(hte),
    y = -1;
  while (g >= 0 && g < h && g - r < GTt) {
    let v = g + hte.length;
    if (y < v) {
      if (y = e.indexOf(Mle, v), y < 0) break;
    }
    let w = e.indexOf(hte, v);
    if ((w < 0 || w > y) && y - g < qwe && ji(e.slice(v, y))) {
      let S = y + Mle.length;
      if (e[S] === `
`) S++;
      n.push([g, S]), r += S - g;
    }
    g = w;
  }
  return e = $o(fcn(e, n)), e = Oo(e), e.replace(regExp_4, "").replace(/\sdata-frame-runtime="[^">]*"/gi, "");
}
function KTt(e) {
  return Yi(e).body;
}
function Yi(e) {
  let n = v => Br(Wi(v)),
    r = zi(To, "author"),
    s = v => Vi(v, n, r),
    body = s(e),
    g = as(body);
  if (g === null) return {
    body: body,
    unwrapped: !1,
    passes: r.spent
  };
  let y = ll(g.body, g.lang, g.cover, s, r);
  return {
    body: y.body,
    passes: r.spent,
    lang: y.lang,
    cover: y.cover,
    unwrapped: !0,
    ...(y.outcome && {
      repair: y.outcome
    }),
    ...(g.hoistedCommentsDropped && {
      hoistedCommentsDropped: !0
    })
  };
}
function xgr(e) {
  let n;
  try {
    n = qTt(e);
  } catch (error) {
    if (error instanceof Ose) return !1;
    throw error;
  }
  let r = as(n);
  return r !== null && os(r.body);
}
var qi = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/;
function hr(e) {
  return e.length <= 35 && qi.test(e);
}
async function Gi(e) {
  if (!e.includes(sn) || Buffer.byteLength(e, "utf8") > nu || tfe(e)) return e;
  return Jr(e);
}
async function DXt(e, n = {}) {
  let {
      injectDiagramRuntime: injectDiagramRuntime,
      injectHighlightRuntime: injectHighlightRuntime,
      composedPrReview: composedPrReview,
      previewOnly: previewOnly,
      expectRoundTrippedPage: expectRoundTrippedPage,
      docBlockIds: docBlockIds
    } = n,
    w = Yi(e),
    {
      body: body_2,
      lang: T,
      cover: P
    } = w,
    unnested;
  switch (w.repair) {
    case "repaired":
    case "partial":
      unnested = w.repair;
      break;
    case "miss":
      p("artifact_publish", "nested_repair_miss");
      break;
    case void 0:
      break;
  }
  if (!w.unwrapped && expectRoundTrippedPage === !0) p("artifact_publish", "round_trip_unwrap_miss");
  if (fPo(body_2)) p("artifact_publish", "runtime_sentinel_residual");
  let blockIdBytes = 0;
  if (docBlockIds !== !1) {
    let pe = await Gi(body_2);
    if (pe !== body_2) blockIdBytes = Math.max(0, Buffer.byteLength(pe, "utf8") - Buffer.byteLength(body_2, "utf8")), body_2 = pe;
  }
  let crUrlRe = null,
    V = li(body_2, await xtt(), {
      crUrlRe: crUrlRe,
      allowMermaidFence: composedPrReview === !0 || previewOnly === !0,
      allowStampBinding: composedPrReview === !0 || previewOnly === !0
    });
  if (V.applies && !V.ok) {
    if (previewOnly !== !0) m("artifact_publish", "pr_review_template_mismatch");
    throw new Oe(`This page carries the artifact-pr-review machinery but failed publish-time validation: ${V.reason}. Carry the template blocks byte-for-byte and keep the rest of the page within the skill's contract \u2014 no script fragments or event handlers, no elements or attributes that fetch or navigate, no CSS network functions, and no src/href other than the PR's canonical GitHub URL \u2014 then retry.`, "pr_review_template_mismatch");
  }
  let k = rn(body_2),
    H = k.chart && Lr(),
    X = injectDiagramRuntime === !0 && k.mermaid,
    te = injectHighlightRuntime === !0 && k.highlight,
    W = "";
  if (H) {
    let pe = await $n();
    if (pe !== null) W += pe;
  }
  let mermaidInjected = !1;
  if (X) {
    let pe = kXt();
    if (pe !== null) W += pe, mermaidInjected = !0;
  }
  let hljsInjected = !1;
  if (te) {
    let pe = await On();
    if (pe !== null) W += pe, hljsInjected = !0;
  }
  if (W !== "") {
    let {
        runtimeBlockInsertionIndex: runtimeBlockInsertionIndex
      } = await import("B:/~BUN/root/chunk-kvkjfnrs.js"),
      ye = runtimeBlockInsertionIndex(body_2);
    body_2 = body_2.slice(0, ye) + W + body_2.slice(ye);
  }
  return {
    body: body_2,
    mermaidInjected: mermaidInjected,
    hljsInjected: hljsInjected,
    roundTripLang: T,
    ...(P !== void 0 && {
      roundTripCover: P
    }),
    unnested: unnested,
    blockIdBytes: blockIdBytes,
    ...(w.hoistedCommentsDropped && {
      hoistedCommentsDropped: !0
    })
  };
}
function $o(e) {
  return Ki(e, Wr);
}
function Oo(e) {
  return Ki(e, zr);
}
function Ki(e, n) {
  let r = [],
    s = e.indexOf(n.beginPrefix);
  while (s >= 0) {
    let h = s + n.beginPrefix.length,
      g = e.indexOf(n.beginPrefix, h),
      y = h,
      v = h + n.lenDigitsMax;
    while (y < v) {
      let w = e.charCodeAt(y);
      if (w < 48 || w > 57) break;
      y++;
    }
    if (y > h && e.startsWith("-->", y)) {
      let w = Number(e.slice(h, y)),
        S = y + 3,
        T = 0,
        P = S + w;
      while (T <= n.openTags && !e.startsWith(n.end, P)) T++, P += mcn;
      if (w < n.maxSpan && T <= n.openTags && (g < 0 || g > P) && n.validate(e.slice(S, P), T)) {
        let D = P + n.end.length;
        if (e[D] === `
`) D++;
        let j = s > 0 && e[s - 1] === `
` ? s - 1 : s;
        r.push([j, D]);
      }
    }
    s = g;
  }
  return fcn(e, r);
}
var maxContentLength_5 = 2097152;
async function hE(e, signal, credentials_2) {
  let s = performance.now();
  try {
    let h = await Ud.get(`/api/frame/read/${encodeURIComponent(e)}`, {
      refreshOAuth: !0,
      headers: $d(),
      timeout: 15000,
      maxContentLength: maxContentLength_5,
      ...(signal && {
        signal: signal
      }),
      credentials: credentials_2
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
    if (h.status < 200 || h.status >= 300) return t(`[artifact] read-back ${h.status}: ${uS(h.data)}`), {
      err: `read-back HTTP ${h.status}`,
      status: h.status
    };
    let g = mo().safeParse(h.data);
    if (!g.success) return t(`[artifact] malformed read-back body: ${g.error.message}`), {
      err: "malformed read-back body",
      status: h.status
    };
    let {
        contract: contract_2,
        capabilities: capabilities_2
      } = g.data,
      typeLock = MXt(g.data.type);
    return {
      contract: contract_2,
      ...(capabilities_2 != null && {
        capabilities: capabilities_2
      }),
      ...(typeLock !== void 0 && {
        typeLock: typeLock
      })
    };
  } catch (error) {
    return {
      err: error instanceof Error ? error.message : String(error),
      request: O4(error, s)
    };
  }
}
async function Ji(e, n, r, s) {
  let h = await e;
  if (h.err !== null || n === void 0 || h.readBackEchoed) return h;
  let g = await hE(n, s, r);
  if (g === null || "err" in g) {
    if (g !== null) t(`[artifact] read-back skipped: ${g.err}`);
    return h;
  }
  let {
      typeLock: typeLock_2,
      ...v
    } = g,
    w = typeLock_2 !== void 0 ? {
      ...h,
      typeLock: typeLock_2
    } : h;
  if (h.stored?.capabilities !== void 0 || !vL(v.capabilities ?? void 0) && SM(v.contract) === null) return w;
  return {
    ...w,
    stored: {
      ...v,
      ...(vL(v.capabilities ?? void 0) && {
        carried: !0
      })
    }
  };
}
function No(e) {
  let n = /[\t\n\f\r ]/,
    r = Zt(e, vi, 0);
  while (r >= 0) {
    let s = Dle(e, r + 5);
    if (s < 0) return;
    let h = r + 5;
    while (h < s - 1) {
      let g = e[h];
      if (n.test(g) || g === "/") {
        h++;
        continue;
      }
      let y = h++;
      while (h < s - 1 && !n.test(e[h]) && !"/=".includes(e[h])) h++;
      let v = e.slice(y, h).toLowerCase();
      while (h < s - 1 && n.test(e[h])) h++;
      if (e[h] !== "=") continue;
      h++;
      while (h < s - 1 && n.test(e[h])) h++;
      let w = h,
        S,
        T = e[h];
      if (T === '"' || T === "'") {
        let P = e.indexOf(T, h + 1);
        h = P < 0 ? s : P + 1, S = e.slice(w + 1, h - 1);
      } else {
        while (h < s - 1 && !n.test(e[h])) h++;
        S = e.slice(w, h);
      }
      if (v === "href") {
        if (!S.startsWith("/_f/")) return S;
        break;
      }
    }
    r = Zt(e, vi, s);
  }
  return;
}
var Io = /^[\f ]*(?:[a-zA-Z][a-zA-Z0-9+.-]*:|[/\\])/;
function Fo(e) {
  let n = No(e);
  if (n === void 0) return !1;
  let r = n.replace(/[\t\n\r]/g, "");
  return r.includes("&") || Io.test(r);
}
var Lo = "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and publish those files alongside the page (`files`), referenced by relative path.",
  Mo = "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and make those references work without it (inline what the page needs).";
function Do(e) {
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
function Zi(e, n) {
  if (e.err !== null) return e;
  let r = Bo(n).filter(item => !(e.livePaths ?? []).includes(item));
  if (r.length === 0) return e;
  return p("artifact_publish", "files_html_no_doctype", {
    raw_html_pages: r.length
  }), {
    ...e,
    warnings: [...(e.warnings ?? []), jo(r)]
  };
}
function Bo(e) {
  return e.filter(item => oD(item.contentType) === "text/html" && item.live !== !0 && item.reseed !== !0 && !Do(item.content)).map(item => item.path);
}
function jo(e) {
  let n = e.slice(0, 3).map(item => b(item)),
    r = e.length - n.length,
    s = n.join(", ") + (r > 0 ? ` and ${r} more` : ""),
    h = e.length === 1;
  return `files: ${s} ${h ? "has" : "have"} no <!doctype html> \u2014 supporting HTML pages are served exactly as written (only the page itself is wrapped in the skeleton), so if ${h ? "it is a page" : "they are pages"} people open, start ${h ? "it" : "each"} with a doctype, charset and viewport meta and its base styles and publish again (a fragment the page fetches and inserts can stay as written); as published ${h ? "it renders" : "they render"} in quirks mode.`;
}
async function Ho(e, n) {
  let r = await e;
  return r.err === null && n.length > 0 ? {
    ...r,
    warnings: [...(r.warnings ?? []), ...n]
  } : r;
}
var vn = 8,
  zo = 0.7,
  Uo = Math.floor(kD * zo / (vn * 2));
function Jn(e) {
  let n = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(n)) return [];
  let r = [];
  for (let s of n) {
    if (r.length >= vn) break;
    if (typeof s !== "string") continue;
    let h = ns(s, Uo);
    if (h !== void 0) r.push(Vo(h) ?? h);
  }
  return r;
}
function Vo(e) {
  if (/^live_over_budget:(.{1,1024})$/.exec(e)) return e;
  if (/^render_unavailable:(.{1,1024})$/.exec(e)) return e;
  if (e === "render_over_budget") return e;
  return;
}
function Qi(e) {
  let n = e !== null && typeof e === "object" && "docs" in e ? XOn(e) : void 0;
  if (n !== void 0) return n.map(item => ({
    path: item.path,
    ...(item.doc !== void 0 && {
      doc: item.doc
    })
  })).sort((itemA, itemB) => itemA.path < itemB.path ? -1 : itemA.path > itemB.path ? 1 : 0);
  let r = Di().safeParse(e);
  if (!r.success) return;
  return Object.entries(r.data.manifest).flatMap(([path_3, h]) => qt.test(path_3) && h.src == null && typeof h.doc === "string" && h.doc !== "" ? [{
    path: path_3,
    doc: h.doc
  }] : []).sort((itemA, itemB) => itemA.path < itemB.path ? -1 : itemA.path > itemB.path ? 1 : 0);
}
function es(e) {
  return e.flatMap(item => []);
}
function Wo() {
  return [];
}
function Yo(e) {
  return e.flatMap(item => []);
}
function qo(e, n) {
  return [];
}
function Go(e) {
  return e.flatMap(item => []);
}
function ts(e, n) {
  return (e ?? []).filter(item => !n.has(item)).flatMap(item => []);
}
function ns(e, max) {
  let r = Sm(e, {
    max: max
  }).replace(zR, " ").trim();
  return r !== "" && r !== "?" ? r : void 0;
}
var Ko = 32,
  Xo = 16,
  Jo = 200,
  Zo = /^[\w./-]{1,64}$/,
  Qo = f(() => u({
    pins: C(ae()).optional().catch(void 0),
    warnings: C(ae()).optional().catch(void 0)
  })),
  el = f(() => u({
    uuid: o().regex(Bn),
    path: o().regex(Zo),
    module: M().optional().catch(void 0),
    files: E().int().min(0).max(1e6).optional().catch(void 0)
  })),
  tl = f(() => u({
    src: o().optional().catch(void 0),
    reason: o().regex(lHe),
    count: E().int().min(1).max(1e5).optional().catch(void 0)
  }));
function Zn(e) {
  if (e === null || typeof e !== "object" || !("embeds" in e) || e.embeds === null || e.embeds === void 0) return;
  let n = Qo().safeParse(e.embeds);
  if (!n.success) return {
    pins: [],
    warnings: []
  };
  let pins_2 = [];
  for (let h of n.data.pins ?? []) {
    if (pins_2.length >= Ko) break;
    let g = el().safeParse(h);
    if (!g.success) continue;
    let {
      uuid: uuid,
      path: path_4,
      module: module,
      files: files_2
    } = g.data;
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
    if (warnings.length >= Xo) break;
    let g = tl().safeParse(h);
    if (!g.success) continue;
    let {
        reason: reason_2,
        count: count
      } = g.data,
      src = g.data.src === void 0 ? void 0 : ns(g.data.src, Jo);
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
async function wn() {
  let e = ee(),
    n = e.workshopBlessedHashes ?? (async () => {
      let [{
          extractInlineScriptHashes: extractInlineScriptHashes
        }, s] = await Promise.all([import("B:/~BUN/root/chunk-0ef2ak4t.js"), import("B:/~BUN/root/chunk-2kwvsg42.js")]),
        hashes = extractInlineScriptHashes(s.WORKSHOP_PAGE_TEMPLATE);
      for (let y of extractInlineScriptHashes(s.WORKSHOP_TEMPLATE)) hashes.add(y);
      let complete = !0;
      for (let y of [await $n(), kXt(), await On()]) if (y !== null) for (let v of extractInlineScriptHashes(y)) hashes.add(v);else complete = !1;
      return {
        hashes: hashes,
        complete: complete
      };
    })();
  e.workshopBlessedHashes = n;
  try {
    let {
      hashes: hashes_2,
      complete: complete_2
    } = await n;
    if (!complete_2) e.workshopBlessedHashes = void 0, t("workshopBlessedScriptHashes: a runtime leg degraded \u2014 returning an incomplete (stricter) allowlist for this call only");
    return hashes_2;
  } catch (error) {
    throw e.workshopBlessedHashes = void 0, error;
  }
}
var Rt = "<!doctype html>",
  gr = "<html",
  mn = Rt + gr,
  regExp_6 = new RegExp(`^${Rt}`, "i"),
  rs = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">',
  is = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1">',
  wi = /^<(?:meta|wbr)(?=[\t\n\f\r />])/i,
  Vn = /<meta(?=[\t\n\f\r /])/gi,
  il = 1024,
  sl = /([^\t\n\f\r =,]+)[^=,]*[\t\n\f\r =]*([^\t\n\f\r =,]*)/g;
function hn(e) {
  let n = "";
  for (let [, r = "", s = ""] of e.matchAll(sl)) if (r.toLowerCase() === "viewport-fit") n = s.toLowerCase();
  return n === "cover";
}
function Qn(e, n, r) {
  let s = new Map(),
    h = r - 1,
    g = n;
  for (;;) {
    while (g < h && /[\t\n\f\r /]/.test(e[g])) g++;
    if (g >= h) return s;
    let y = "";
    do y += e[g].toLowerCase(), g++; while (g < h && !/[\t\n\f\r /=>]/.test(e[g]));
    while (g < h && /[\t\n\f\r ]/.test(e[g])) g++;
    let v = "";
    if (g < h && e[g] === "=") {
      g++;
      while (g < h && /[\t\n\f\r ]/.test(e[g])) g++;
      let w = e[g];
      if (g < h && (w === '"' || w === "'")) {
        let S = e.indexOf(w, g + 1);
        if (S < 0 || S >= h) return s;
        v = e.slice(g + 1, S), g = S + 1;
      } else {
        let S = g;
        while (g < h && !/[\t\n\f\r >]/.test(e[g])) g++;
        v = e.slice(S, g);
      }
    }
    if (!s.has(y)) s.set(y, v);
  }
}
function al(e, n = !0) {
  if (!/<meta[\t\n\f\r />]/i.test(e)) return n;
  let r,
    s = e + "<wbr>",
    h = 0,
    g = Zt(s, wi, 0);
  while (g >= 0 && g < e.length) {
    let y = s[g + 1] === "m" || s[g + 1] === "M" ? 5 : 4,
      v = Dle(s, g + y);
    if (v < 0 || v > e.length) {
      g = -1;
      break;
    }
    if (y === 5) {
      let w = Qn(s, g + y, v);
      if (w.get("name")?.toLowerCase() === "viewport") r = w.get("content") ?? "";
    }
    h = v, g = Zt(s, wi, v);
  }
  if (g < 0 && !(r !== void 0 && hn(r))) {
    Vn.lastIndex = h;
    for (let y = Vn.exec(e); y !== null; y = Vn.exec(e)) {
      let v = e.slice(y.index, y.index + il),
        w = v.includes(">") ? Dle(v, 5) : -1;
      if (w < 0) continue;
      let S = Qn(v, 5, w);
      if (S.get("name")?.toLowerCase() === "viewport") {
        if (r = S.get("content") ?? "", hn(r)) return !0;
      }
    }
  }
  return r === void 0 ? n : hn(r);
}
var ss = `</head><body>
`,
  gn = `
</body></html>`,
  regExp_7 = new RegExp(`^(?:${Rt}|${Rt.replace("doctype", "DOCTYPE")})?${gr}(?: lang="(?=[^"]{1,35}")${qi.source.slice(1, -1)}")?(?:${yte})?><head(?:${yte})?>$`);
function LXt(e, n, r) {
  let s = n !== void 0 && hr(n) ? ` lang="${n}"` : "",
    h = al(e, r) ? rs + go : is + ho;
  return `${mn}${s}><head>${h}${ss}${e}${gn}`;
}
function Wn(e, n, r) {
  return Dle(e, n) === r;
}
function YTt(e) {
  return regExp_6.test(e) && e.startsWith(gr, Rt.length);
}
function as(e) {
  if (!YTt(e)) return null;
  if (!e.startsWith(Rt)) e = Rt + e.slice(Rt.length);
  let n = e.match(/^<!doctype html><html(?=[\t\n\f\r >])([^>]*)><head(?=[\t\n\f\r >])[^>]*>/);
  if (!n) return null;
  let r = mn.length + n[1].length + 1;
  if (!Wn(e, mn.length, r) || !Wn(e, r + 5, n[0].length)) return null;
  let s = e.indexOf("</head><body", n[0].length);
  if (s === -1) return null;
  let g = e.slice(n[0].length, s).match(/^<meta[\t\n\f\r ]+charset="?utf8"?(?=[\t\n\f\r >"])[^>]*>(<meta[\t\n\f\r ]+name="?viewport"?(?=[\t\n\f\r >"])[^>]*>)<style(?:[\t\n\f\r ][^>]*)?>([\s\S]*)<\/style>$/);
  if (!g || /<\/style/i.test(g[2])) return null;
  {
    let O = n[0].length;
    for (let V of ["<meta", "<meta", "<style"]) {
      let k = e.indexOf(">", O + V.length) + 1;
      if (!e.startsWith(V, O) || !Wn(e, O + V.length, k)) return null;
      O = k;
    }
  }
  let y = s + 12,
    v = Dle(e, y);
  if (v < 0) return null;
  let w = e.slice(y, v - 1);
  if (!/^(?:[\t\n\f\r ][^>]*)?$/.test(w)) return null;
  let S = v;
  if (e[S] === `
`) S++;
  let T = ol(e, S);
  if (!T) return null;
  let bodyEnd = T.bodyEnd;
  if (bodyEnd > S && e[bodyEnd - 1] === `
`) bodyEnd--;
  let lang = n[1].match(/[\t\n\f\r ]lang="([^"]*)"/)?.[1],
    j = Qn(g[1], 5, g[1].length);
  return {
    body: e.slice(S, bodyEnd),
    ...(lang !== void 0 && hr(lang) && {
      lang: lang
    }),
    cover: hn(j.get("content") ?? ""),
    ...(T.commentsDropped && {
      hoistedCommentsDropped: !0
    })
  };
}
function ol(e, n) {
  let commentsDropped = !1,
    s = e.length,
    h = !1;
  for (;;) {
    while (s > n && `	
\f\r `.includes(e[s - 1])) s--;
    if (e.endsWith("-->", s)) {
      let g = e.lastIndexOf("<!--", s - 7);
      if (g < n || !MTt(e.slice(g, s))) return null;
      commentsDropped = !0, s = g;
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
function ll(body_3, lang_2, cover, s, h) {
  let g = 0,
    y = !1;
  for (;;) {
    Ui(h);
    let w = cl(body_3);
    if (w !== null) {
      if (g === Hi) throw new Ose("levels", h.spent);
      body_3 = w.body, lang_2 = w.lang ?? lang_2, cover = w.cover, g++, y = !1;
      continue;
    }
    y ||= os(body_3);
    let S = s(body_3);
    if (S === body_3) break;
    body_3 = S;
  }
  let outcome = y ? g > 0 ? "partial" : "miss" : g > 0 ? "repaired" : void 0;
  return {
    body: body_3,
    lang: lang_2,
    cover: cover,
    outcome: outcome
  };
}
function os(e) {
  if (!YTt(e)) return !1;
  let n = e.indexOf(hte);
  return n !== -1 && n < GTt;
}
function cl(e) {
  if (!YTt(e)) return null;
  let n = mn.length,
    r = w => {
      if (!e.startsWith(w, n)) return !1;
      return n += w.length, !0;
    },
    lang_3;
  if (r(' lang="')) {
    let w = e.indexOf('"', n);
    if (w === -1 || !hr(e.slice(n, w))) return null;
    lang_3 = e.slice(n, w), n = w + 1;
  }
  if (!r("><head>" + hte)) return null;
  let h = n + qwe,
    g = 0;
  while (g < 2 && r("<script>")) {
    let w = e.indexOf("</script>", n);
    if (w === -1 || w > h) return null;
    let S = e.slice(n, w);
    if (S === "" || S.includes("<!--") || /<\/script/i.test(S)) return null;
    n = w + 9, g++;
  }
  if (g === 0 || !r(Mle)) return null;
  let cover_2 = r(rs);
  if (!cover_2 && !r(is)) return null;
  if (!r("<style>")) return null;
  let v = e.indexOf("</style>", n);
  if (v === -1 || e.slice(n, v).includes("<")) return null;
  if (n = v + 8, !r(ss)) return null;
  if (e.length - n < gn.length || !e.endsWith(gn)) return null;
  return {
    body: e.slice(n, e.length - gn.length),
    lang: lang_3,
    cover: cover_2
  };
}
function Igr(slug_3) {
  let n = Object.freeze({
    slug: slug_3
  });
  return ee().mintedRoundTripPublishSignals.add(n), n;
}
function Ogr(e) {
  return typeof e === "object" && e !== null && ee().mintedRoundTripPublishSignals.has(e);
}
function mr(e, n = "supporting file") {
  for (let r of e) {
    if (!_n.has(r.contentType)) {
      m("artifact_publish", "file_not_servable", t0n(r.path, r.contentType));
      let h = oD(r.contentType),
        g = _n.has(h) ? h : void 0;
      return F(_Mr(n, r.path, r.contentType, g));
    }
    if (Dse.has(r.contentType)) {
      if (typeof r.content === "string" ? r.content.includes("\x1B") : r.content.includes(27)) return m("artifact_publish", "file_esc_byte"), F(`${n} "${r.path}" carries an ESC byte \u2014 publish ` + "text content without escape sequences (nothing was published)");
      if (typeof r.content === "string" ? r.content.includes("\x00") : r.content.includes(0)) return m("artifact_publish", "file_nul_byte"), F(`${n} "${r.path}" carries NUL bytes \u2014 publish ` + "text content as UTF-8 without embedded NULs (nothing was published)");
    }
    if (kl.has(r.contentType)) {
      let h = typeof r.content === "string" ? r.content : r.content.toString("utf8");
      if (/<!(?:DOCTYPE|ENTITY)/i.test(h)) return m("artifact_publish", "file_dtd"), F(`${n} "${r.path}" carries a DOCTYPE or ENTITY ` + "declaration \u2014 XML supporting files must not use DTD " + "machinery (nothing was published)");
      let g = h.startsWith("\uFEFF") ? h.slice(1) : h,
        y = g.indexOf("<?");
      if (y !== -1) {
        if (!(y === 0 && /^<\?xml[\s?]/i.test(g)) || g.indexOf("<?", 2) !== -1) return m("artifact_publish", "file_pi"), F(`${n} "${r.path}" carries a processing ` + "instruction \u2014 XML supporting files may carry only a " + "leading XML declaration (nothing was published)");
      }
    }
    if (typeof r.content !== "string" && Dse.has(r.contentType) && r.content.length >= 2 && (r.content[0] === 255 && r.content[1] === 254 || r.content[0] === 254 && r.content[1] === 255)) return m("artifact_publish", "file_utf16_bom"), F(`${n} "${r.path}" is UTF-16 encoded \u2014 publish ` + "supporting text files as UTF-8 (nothing was published)");
    let s = typeof r.content === "string" ? r.content : Dse.has(r.contentType) ? r.content.toString("utf8") : null;
    if (s !== null && tfe(s, {
      parsedAsMarkup: vhe.has(oD(r.contentType))
    })) return m("artifact_publish", "file_review_machinery"), F(`${n} "${r.path}" carries the artifact-pr-review machinery; review pages publish as a single file through the publish-time guard (nothing was published)`);
  }
  return null;
}
async function Mgr(...e) {
  let n = Rc();
  if (n !== null) {
    let s = Buffer.byteLength(e[0], "utf8");
    if (s > nu) return F(`too large: page is ${Math.ceil(s / 1024 / 1024)}MB (max ${nu / 1024 / 1024}MB)`);
    let h = await Gi(e[0]),
      g = Buffer.byteLength(h, "utf8") > nu ? e[0] : h;
    if (e[1].verifyWorkshopHtml !== void 0) {
      let {
          verifyWorkshopHtml: verifyWorkshopHtml
        } = await import("B:/~BUN/root/chunk-0ef2ak4t.js"),
        T = verifyWorkshopHtml(g, await wn(), e[1].verifyWorkshopHtml);
      if (!T.ok) return F(`workshop page refused by the structural verifier \u2014 fix and republish:
` + T.violations.slice(0, 12).map(item => `- [${item.rule}] ${item.where} \u2014 ${item.hint}`).join(`
`));
    }
    let y = e[1].files ?? [],
      v = e[1].removeFiles ?? [];
    if (y.length > 0 || v.length > 0) {
      let S = xn(g, y, v);
      if (S !== null) return F(S.msg);
    }
    let w = vr(g, y, e[1].copiedFiles ?? [], v);
    if (w !== null) return F(w);
    return fi(n, g, e[1]);
  }
  let slug_4 = e[1].slug;
  if (!slug_4) return xi(...e);
  return qOn(e[1].ownPublishes, slug_4, () => xi(...e));
}
async function xi(e, n) {
  let t0 = performance.now(),
    {
      slug: slug_5,
      title: title,
      favicon: favicon,
      icon: icon,
      label: label,
      note: note,
      description: description,
      capabilities: capabilities_3,
      session: session,
      hostServers: hostServers,
      readBack: readBack,
      publishContext: publishContext_2,
      originMetadata: originMetadata
    } = n,
    k = n.copiedFiles ?? [];
  if (n.createPath !== void 0 && (slug_5 !== void 0 || n.force === !0 || n.baseVersion !== void 0 || k.length > 0 || n.removeFiles !== void 0 && n.removeFiles.length > 0 || n.liveFiles !== void 0)) return m("artifact_publish", "create_bad_combo"), F("invalid publish options");
  let isRedeploy = !!slug_5,
    hasCaps = capabilities_3 !== void 0,
    te = SL(),
    W = n.force === !0,
    re = (n.files?.length ?? 0) > 0 || k.length > 0 || (n.removeFiles?.length ?? 0) > 0 || n.liveFiles !== void 0,
    me = n.composedPrReview === !0 || n.autoEditAttribution !== void 0 || re ? n.baseVersion : te ? n.baseVersion : void 0,
    pe = {
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
    };
  if (n.files !== void 0 && n.files.length > 0 || k.length > 0) {
    if (tfe(e)) return m("artifact_publish", "review_single_file"), F("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
    let N = mr(n.files ?? []);
    if (N !== null) return N;
  }
  let ye = {
      injectDiagramRuntime: n.injectDiagramRuntime,
      injectHighlightRuntime: n.injectHighlightRuntime,
      composedPrReview: n.composedPrReview,
      expectRoundTrippedPage: n.expectRoundTrippedPage
    },
    ke = await DXt(e, ye),
    Le = LXt(ke.body, ke.roundTripLang, ke.roundTripCover),
    be = Buffer.byteLength(Le, "utf8");
  if (be > nu && ke.blockIdBytes > 0 && be - ke.blockIdBytes <= nu) p("artifact_publish", "block_ids_over_cap"), ke = await DXt(e, {
    ...ye,
    docBlockIds: !1,
    expectRoundTrippedPage: !1
  }), Le = LXt(ke.body, ke.roundTripLang, ke.roundTripCover), be = Buffer.byteLength(Le, "utf8");
  let {
      body: body_4,
      mermaidInjected: qe,
      hljsInjected: Ge,
      unnested: unnested_2,
      hoistedCommentsDropped: hoistedCommentsDropped
    } = ke,
    Ne = Fo(body_4) ? [PA() ? Lo : Mo] : [];
  if (be > nu) return m("artifact_publish", "too_large", {
    page_bytes: be,
    mermaid_injected: qe,
    hljs_injected: Ge,
    block_id_bytes: ke.blockIdBytes
  }), F(`too large: rendered page is ${Math.ceil(be / 1024 / 1024)}MB (max ${nu / 1024 / 1024}MB)` + (Ge ? " \u2014 includes the inline syntax-highlight runtime (~0.6MB), added because the page contains fenced code" : ""));
  let workshopSurface = !1,
    count_2 = 0,
    workshopInfo,
    je = [];
  if (n.files !== void 0 && n.files.length > 0) je = n.files.filter(item => mMr(item.contentType)).map(item => `${item.path} (${item.contentType})`);
  if (n.verifyWorkshopHtml !== void 0) {
    let {
        verifyWorkshopHtml: verifyWorkshopHtml_2
      } = await import("B:/~BUN/root/chunk-0ef2ak4t.js"),
      oe = await wn(),
      K = verifyWorkshopHtml_2(Le, oe, n.verifyWorkshopHtml);
    if (!K.ok) {
      p("workshop_html_publish", "verifier_refused"), m("artifact_publish", "workshop_verifier_refused", {
        page_bytes: be
      });
      let Ce = K.violations.slice(0, 12).map(item => `- [${item.rule}] ${item.where} \u2014 ${item.hint}`),
        wt = K.violations.length > 12 ? `
(and ${K.violations.length - 12} more)` : "";
      return {
        url: null,
        slug: null,
        version: null,
        err: `workshop page refused by the structural verifier \u2014 fix and republish:
` + Ce.join(`
`) + wt
      };
    }
    if (workshopSurface = K.workshopSurface, count_2 = K.decisionCount ?? 0, K.workshopSurface) workshopInfo = {
      state: K.workshopState ?? "in-progress",
      deliverables: K.deliverables ?? {
        n: 0,
        pr: 0,
        artifact: 0,
        other: 0
      }
    };
    if (workshopSurface) {
      let Ce = Bl(n.slug, n.refusedSidecarHistory?.());
      if (Ce !== null) {
        if (Ce.kind === "priors") p("workshop_html_publish", "sidecar_refused"), m("artifact_publish", "workshop_sidecar_refused", {
          page_bytes: be
        });else p("workshop_html_publish", "sidecar_contract"), m("artifact_publish", "workshop_sidecar_contract", {
          page_bytes: be
        });
        return F(Ce.err);
      }
    }
    if (n.files !== void 0 && n.files.length > 0) if (workshopSurface) {
      if (je.length > 0) return p("workshop_html_publish", "sidecar_refused"), m("artifact_publish", "workshop_sidecar_refused", {
        page_bytes: be
      }), {
        url: null,
        slug: null,
        version: null,
        err: "workshop pages cannot ship renderable or executable sidecar files \u2014 " + "each is a URL that bypasses the publish-time verifier: " + cq(je.join(", "))
      };
    } else {
      let Ce = await _r(n.files, oe, be);
      if (Ce !== null) return Ce;
    }
    if (workshopSurface) _("workshop_html_publish", {
      count: count_2
    });
  }
  let template = workshopSurface && (n.template === void 0 || n.template === "plain") ? "workshop" : n.template ?? "plain";
  pe.template = template;
  let capabilities_4 = capabilities_3,
    He = [],
    Ke = [];
  if (capabilities_3 !== void 0 && session !== void 0) {
    let {
        connectorNames: connectorNames,
        serverNames: serverNames
      } = session,
      K = Kgr(capabilities_3, connectorNames, serverNames, {
        hostServers: hostServers
      });
    if (K.ok && hostServers === void 0 && K.servers.some(item => Q0e(item) !== void 0)) {
      let xe = await y8({
        timeoutMs: timeoutMs,
        ...(n.signal && {
          signal: n.signal
        }),
        credentials: n.credentials
      });
      if (!("err" in xe)) {
        let Ze = WXt(xe, "mcp", jXt);
        if (n.noteHostServers?.(Ze), !Ze) K = Kgr(capabilities_3, connectorNames, serverNames, {
          hostServers: !1
        });
      } else p("artifact_publish", "host_roster_fetch_failed", {
        cause: c(xe.cause)
      });
    }
    if (!K.ok) {
      let host_unavailable_count = U(K.malformed, Re => Re.kind === "host_unavailable"),
        unknown_tools_count = U(K.malformed, Re => Re.kind === "unknown_tools"),
        opaque_id_count = U(K.malformed, Re => Re.kind === "opaque_id" || Re.kind === "known_id" || Re.kind === "tool_name" || Re.kind === "connector_as_host" || Re.kind === "undeclarable_name"),
        Ot = U(K.malformed, Re => Re.kind === "local_server_as_first_party");
      m("artifact_publish", host_unavailable_count > 0 ? "host_server_unavailable" : K.internal.length > 0 ? "internal_host_server_name" : Ot > 0 ? "first_party_server_collision" : K.unresolved.length > 0 ? "unresolved_mcp_server" : opaque_id_count > 0 ? "opaque_mcp_server_id" : unknown_tools_count > 0 ? "unknown_mcp_tool" : K.malformed.length > 0 ? "malformed_mcp_manifest" : "mcp_manifest_over_caps", {
        page_bytes: be,
        unresolved_count: K.unresolved.length,
        internal_count: K.internal.length,
        malformed_count: K.malformed.length - opaque_id_count - host_unavailable_count - unknown_tools_count,
        opaque_id_count: opaque_id_count,
        host_unavailable_count: host_unavailable_count,
        unknown_tools_count: unknown_tools_count,
        oversized_count: K.oversized.length,
        ...(K.serverCount !== null && {
          server_count: K.serverCount
        })
      });
      let xt = zl(K.malformed);
      if (K.unresolved.length > 0) {
        let Re = lR(K.unresolved, 8, et => `"${Ou(et)}"`),
          Tt = connectorNames.filter(J0e),
          Ut = lR(L(Tt.map(item => item.server)), 8, et => `"${Ou(et)}"`),
          Vt = Ut.length === 0 ? "" : ` (connectors this session: ${Ut.join(", ")})`,
          Pt = Tt.some(item => en(item.toolPrefix) !== null);
        xt.push(`unknown ${I(K.unresolved.length, "connector")}: ${Re.join(", ")} \u2014 ` + (Pt ? "set `server` to the connector's exact display name" : "set `server` to the segment between `mcp__` and the next `__` of a tool name from this session (for `mcp__claude_ai_Slack_beta__search`, use `claude_ai_Slack_beta`, copied exactly), or to the connector's exact display name") + `${Vt}. The control plane would accept this manifest, but the page would break at view time`);
      }
      if (K.internal.length > 0) {
        let Re = lR(L(K.internal), 8, Tt => `"${Ou(Tt)}"`);
        xt.push(`built-in ${I(K.internal.length, "server")} ${Re.join(", ")} ` + "\u2014 the Claude app's own servers, which it never exposes to " + "pages as host servers; declare only servers from the MCP configuration (host:<name> for the `mcp__<name>__<tool>` tools of a server you configured). The control plane would accept this manifest, but the page would break at view time");
      }
      for (let Re of K.oversized) xt.push(`${Utt(Re.server)} "${Ou(Re.server)}" declares ${Re.toolCount} tools, counted after any same-name entries merge (max ${zgr}) \u2014 trim the tools ` + "list; the control plane would reject it anyway");
      if (K.serverCount !== null) xt.push(`manifest declares ${K.serverCount} servers (max ${Ggr}) \u2014 declare only the servers ` + "the page actually calls; the control plane would reject it anyway");
      return F(`mcp manifest rejected: ${xt.join("; ")}.`);
    }
    capabilities_4 = K.caps, He = K.warnings, Ke = K.servers;
    let Ce = [e, ...(n.files ?? []).flatMap(item => Dse.has(item.contentType) ? [rr(item.content)] : [])],
      wt = K.servers.length > 0 ? Ygr(Ce, K.servers, 64) : [],
      Be = Slo(Ce, K.renamed).filter(([xe]) => !wt.includes(xe));
    if (Be.length > 0) He = [...He, `the page source still holds ${I(Be.length, "a server name", "server names")} this publish rewrote in the manifest, as ${I(Be.length, "a quoted string", "quoted strings")} \u2014 ${lR(Be, 8, ([xe, Ze]) => `"${Ou(xe)}" (viewers resolve only "${Ou(Ze)}")`).join(", ")} \u2014 so if the page passes ${Be.length === 1 ? "it" : "them"} to callTool(\u2026) / watchTool(\u2026), those calls fail for every viewer; use the display ${I(Be.length, "name")} there.`];
  } else if (capabilities_3 !== void 0) {
    let slug_count = wlo(capabilities_3).length;
    if (slug_count > 0) p("artifact_publish", "slug_without_pairs", {
      page_bytes: be,
      slug_count: slug_count
    });
  }
  let pt = Object.keys(capabilities_4 ?? {}),
    sentCapabilities,
    hostGrant = Z0e(a.CLAUDE_ARTIFACT_HOST_GRANT);
  if (capabilities_4 !== void 0) {
    let N = u0n(capabilities_4, hostGrant);
    if (!N.ok) {
      m("artifact_publish", "host_grant_unreadable", {
        page_bytes: be,
        host_server_count: N.refused.length
      });
      let oe = lR(N.refused, 8, K => `"${Ou(K)}"`);
      return F(`mcp manifest rejected: this computer's local-server grant (${Jgr}, set by the app that launched this session; not something to fix from here) could not be read, so ` + `no host: server can be declared from this session \u2014 ${oe.join(", ")}; declare only claude.ai connectors (set "server" to the connector's display name), or to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration).`);
    }
    if (N.dropped.length > 0) {
      p("artifact_publish", "host_grant_narrowed", {
        page_bytes: be,
        dropped_count: N.dropped.length
      }), capabilities_4 = N.caps, Ke = Ke.filter(item => N.servers.includes(item));
      let oe = N.dropped.length === 1 ? "it" : "them";
      sentCapabilities = N.caps, He = [...He, `this computer did not grant the page these local tools, so they were left out of the manifest: ${Ss(N.dropped)} \u2014 the page's ` + `calls to ${oe} fail for every viewer; tell the user which local tools were left out` + (N.servers.length === 0 ? ', and that the page now has no connector access at all (no declared server remained, so this publish carries no "mcp" and any stored "mcp" declaration is replaced)' : "") + "."];
    }
  }
  if (session !== void 0 && Ke.length > 0) {
    let N = [e, ...(n.files ?? []).flatMap(item => Dse.has(item.contentType) ? [rr(item.content)] : [])],
      oe = Ygr(N, Ke, 64);
    if (oe.length > 0) He = [...He, `the page calls callTool/watchTool with ${I(oe.length, "a server name", "server names")} not in this manifest \u2014 ${lR(oe, 8, K => `"${Ou(K)}"`).join(", ")} \u2014 and ${Wtt((sentCapabilities ?? capabilities_4)?.mcp) ? "under this dynamic declaration each viewer is asked to approve them at first use (a name the viewer has no connector for is refused)" : "those calls fail for every viewer"}; the manifest declares ${lR(Ke, 8, K => `"${Ou(K)}"`).join(", ")}.`];
  }
  if (n.contract !== void 0 && n.contract !== "latest" && (!gW.test(n.contract) || n.contract === aGe)) return m("artifact_publish", "invalid_contract", {
    page_bytes: be
  }), F(`invalid contract ${b(n.contract)} \u2014 pass 'latest' ` + "or a published version like 0.1.0.");
  let upgrade_2 = n.contract === "latest",
    explicitPin = n.contract !== void 0 && n.contract !== "latest" ? n.contract : null,
    Ht = n.contract !== void 0,
    at = slug_5 && !Ht ? n.storedPin : null,
    storedCaps;
  if (slug_5 && !Ht && at === void 0) {
    let N = await hE(slug_5, void 0, n.credentials);
    if (N !== null && "err" in N && n.onPinReadError !== "assume_none" && Gn(N)) {
      let oe = pn(N);
      if (await Q(Kn, n.signal), !n.signal?.aborted) N = await hE(slug_5, n.signal, n.credentials), p("artifact_publish", "pin_readback_retried", {
        page_bytes: be,
        ...oe,
        recovered: !(N !== null && "err" in N)
      });
    }
    if (N !== null && "err" in N) {
      if (n.onPinReadError === "assume_none") p("artifact_publish", "pin_readback_assumed_none", {
        page_bytes: be
      }), at = null;else return m("artifact_publish", "pin_readback_failed", {
        page_bytes: be,
        ...pn(N)
      }), F(`couldn't read the artifact's stored contract pin (${N.err}) \u2014 ` + "a republish preserves the stored pin, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics).");
    } else at = N === null ? null : SM(N.contract), storedCaps = N?.capabilities ?? {};
  }
  let ze = SM(at);
  if (slug_5 && storedCaps === void 0 && Object.keys(capabilities_3 ?? {}).length > 0 && n.composedPrReview !== !0) {
    let N = await hE(slug_5, void 0, n.credentials);
    if (N !== null && "err" in N && n.contract === void 0 && Gn(N)) {
      if (await Q(Kn, n.signal), !n.signal?.aborted) N = await hE(slug_5, void 0, n.credentials);
    }
    if (N !== null && "err" in N) {
      if (n.contract === void 0) return m("artifact_publish", "capability_readback_failed", {
        page_bytes: be,
        ...pn(N)
      }), F(`couldn't read the artifact's stored capability declaration (${N.err}) \u2014 ` + "a republish that declares capabilities must not silently revoke stored ones, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics, and the capabilities you send then replace the stored ones).");
      p("artifact_publish", "retrofit_guard_skipped");
    } else storedCaps = N?.capabilities ?? {};
  }
  if (capabilities_3 === void 0 && slug_5 && n.composedPrReview !== !0) {
    let N = await tn({
      slug: slug_5,
      hostGrant: hostGrant,
      storedCaps: storedCaps,
      signal: n.signal,
      credentials: n.credentials,
      pageBytes: be,
      lane: "page"
    });
    if (!N.ok) return F(N.err);
    storedCaps = N.storedCaps;
  }
  let gt = N => N === xO ? yE : N,
    $t = Object.keys(storedCaps ?? {}).map(gt),
    zt = pt.map(gt),
    Xe = Object.entries(storedCaps ?? {}).filter(([N]) => !zt.includes(gt(N))),
    mt = UXt(storedCaps?.db) ?? [],
    ot = capabilities_4?.db,
    Te = mt.length > 0 && (ot === !0 || jU(ot) && !Object.hasOwn(ot, "rules")),
    At = qgr(mt),
    nt = ylo(storedCaps?.user) ?? [],
    kt = capabilities_4?.user,
    bt = nt.length > 0 && (kt === !0 || jU(kt) && !Object.hasOwn(kt, "scopes")),
    _e = Vgr(nt),
    ct = () => {
      let N = b(nt),
        oe = Sm(N, {
          max: 200
        });
      return _e && oe === N ? oe : "";
    };
  if (n.createPath === void 0 && n.composedPrReview !== !0 && Xe.length > 0 && zt.some(item => !$t.includes(item))) {
    m("artifact_publish", "capability_retrofit_refused");
    let N = lR(Xe, 8, ([xe]) => Sm(xe)),
      oe = b({
        ...Object.fromEntries(Xe),
        ...capabilities_4,
        ...(Te && {
          db: storedCaps?.db
        }),
        ...(bt && {
          user: storedCaps?.user
        })
      }),
      K = Sm(oe, {
        max: 600
      }),
      Ce = Te || Xe.some(([xe]) => xe === "db"),
      wt = bt || Xe.some(([xe]) => xe === "user"),
      Be = K === oe && !/[<>]/.test(MN(oe)) && pc(oe) === oe && (!Ce || blo(storedCaps?.db)) && (!wt || _lo(storedCaps?.user)) ? K : "";
    return F(`your capabilities declaration omits the stored ${I(Xe.length, "capability", "capabilities")} ${N.join(", ")} while adding new ones \u2014 a sent declaration replaces the stored one, so this publish would have silently revoked ${Xe.length === 1 ? "it" : "them"}. To keep ${Xe.length === 1 ? "it" : "them"}, republish declaring the union${Be !== "" ? `: ${Be}` : " (republish with capabilities omitted to read the stored declaration back, then resend it plus your additions)"}. To revoke on purpose, publish that union first, then republish without the revoked names (a declaration that adds no new name goes out as sent); capabilities: {} clears everything.`);
  }
  if (n.createPath === void 0 && n.composedPrReview !== !0 && Te) {
    m("artifact_publish", "db_rules_reset_refused");
    let N = b(mt),
      oe = Sm(N, {
        max: 600
      }),
      K = At && oe === N ? oe : "",
      Ce = bt ? ` The sent user block likewise omits its stored scopes${ct() !== "" ? ` (${ct()})` : ""}: resend user with them as well, or user: {"scopes": []} to drop them.` : "";
    return F(`your capabilities declaration re-sends db without its rules while the artifact stores ${mt.length} ${I(mt.length, "access rule")}${K !== "" ? `: ${K}` : ' (not listed here; read the artifact with action "read" to see them)'} \u2014 ` + `a sent db block replaces the stored one, rules included, so this publish would have reset them to the defaults (anyone who can open the artifact can read its shared data, and anyone with more than view-only access can write it). To keep them, ${K !== "" ? "resend db with those rules" : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend db with its rules"}; to reset them on purpose, send db: {"rules": []}.` + Ce);
  }
  if (n.createPath === void 0 && n.composedPrReview !== !0 && bt) {
    m("artifact_publish", "user_scopes_reset_refused");
    let N = ct();
    return F(`your capabilities declaration re-sends user without its scopes while the artifact stores ${nt.length} ${I(nt.length, "scope")}${N !== "" ? `: ${N}` : ""} \u2014 ` + `a sent user block replaces the stored one, scopes included, so this publish would have dropped ${nt.length === 1 ? "it" : "them"} (for profile, the page would no longer receive the viewer's name and avatar). To keep ${nt.length === 1 ? "it" : "them"}, ${N !== "" ? `resend user with scopes: ${N}` : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend user with its scopes"}; to drop ${nt.length === 1 ? "it" : "them"} on purpose, send user: {"scopes": []}.`);
  }
  let _t = await wo({
    capabilities: capabilities_4,
    echoPin: ze,
    explicitPin: explicitPin,
    upgrade: upgrade_2,
    pageBytes: be,
    ...(n.createPath !== void 0 && {
      latestFetchRemedy: "nothing was created; retry."
    }),
    credentials: n.credentials
  });
  if ("errMsg" in _t) return F(_t.errMsg);
  let fields = _t.fields,
    sent = {
      capNames: Object.keys(capabilities_4 ?? {}).map(gt),
      hostDecl: vo(capabilities_4),
      latestContract: "contract" in fields && explicitPin === null && ze === null
    },
    reservedSlug,
    R = N => Ho(Ji(N, readBack ? slug_5 : void 0, n.credentials, n.signal), [...He, ...Ne]).then(oe => {
      if (oe.err === null && unnested_2 !== void 0) p("artifact_publish", unnested_2 === "repaired" ? "nested_page_repaired" : "nested_repair_partial");
      if (oe.err === null && hoistedCommentsDropped) p("artifact_publish", "hoisted_comment_dropped");
      let refusedClassSidecarTypes = oe.err === null ? [...je, ...(oe.refusedClassSidecarTypes ?? [])] : [];
      if (oe.err !== null) return reservedSlug !== void 0 && oe.strandedSlug === void 0 && !oe.conflict && !oe.gone && template !== "pr_review" ? {
        ...oe,
        reservedSlug: reservedSlug
      } : oe;
      return {
        ...Zi(oe, n.files ?? []),
        ...(refusedClassSidecarTypes.length > 0 && {
          refusedClassSidecarTypes: refusedClassSidecarTypes
        }),
        ...(sentCapabilities !== void 0 && {
          sentCapabilities: sentCapabilities
        })
      };
    });
  if (n.createPath !== void 0 && tfe(body_4)) return m("artifact_publish", "review_single_file"), F("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
  let Z = n.files ?? [],
    q = n.removeFiles ?? [];
  if (Z.length > 0 || k.length > 0 || q.length > 0 || n.liveFiles !== void 0) {
    if (tfe(body_4)) return m("artifact_publish", "review_single_file"), F("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
    if (!PA()) return m("artifact_publish", "multifile_flag_off", {
      n_files: Z.length + k.length,
      n_removed: q.length
    }), F(q.length > 0 ? "Supporting files can't be published or removed right now, so nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting `files`) would update the page but can't remove a file." : "Supporting files can't be published right now, so nothing was published. Publish the page as a single file instead: inline what it needs and omit `files`.");
    if (k.length > 0 && !Gwe()) return m("artifact_publish", "copy_from_flag_off", {
      n_copied: k.length
    }), F(yr);
    if (n.createPath !== void 0) return R(Yn(pe, N => Ri(Le, N, fields, void 0, !1, {
      t0: t0,
      pageBytes: be,
      lane: "inline",
      isRedeploy: isRedeploy,
      hasCaps: hasCaps,
      template: template,
      ...(workshopInfo && {
        workshopInfo: workshopInfo
      }),
      forced: !1,
      ...(ze !== null && {
        echoedPin: ze
      }),
      ...(n.liveFilesGate === !0 && {
        liveFilesOn: !0
      }),
      sent: sent
    }, n.ownPublishes, n.credentials, workshopSurface, n.createPath, n.onRetry, n.signal, Z)));
    return R(Yn(pe, (N, oe) => wr(Le, Z, k, q, N, fields, {
      workshopSurface: workshopSurface,
      baseVersion: oe ?? me,
      force: W,
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
        pageBytes: be,
        lane: "inline",
        isRedeploy: isRedeploy,
        hasCaps: hasCaps,
        template: template,
        ...(workshopInfo && {
          workshopInfo: workshopInfo
        }),
        forced: W,
        ...(ze !== null && {
          echoedPin: ze
        }),
        ...(n.liveFilesGate === !0 && {
          liveFilesOn: !0
        }),
        sent: sent
      },
      onRetry: n.onRetry,
      onReserved: K => {
        reservedSlug = K;
      },
      signal: n.signal,
      credentials: n.credentials
    })));
  }
  let we = slug_5 === void 0 && n.createPath === void 0 && PA() ? await dl(n.credentials, n.signal, t0) : void 0;
  if (reservedSlug = we, n.signal?.aborted) return F("publish cancelled \u2014 nothing was published.");
  return R(Yn(pe, N => Ri(Le, N, fields, me, W, {
    t0: t0,
    pageBytes: be,
    lane: "inline",
    isRedeploy: isRedeploy,
    hasCaps: hasCaps,
    template: template,
    ...(workshopInfo && {
      workshopInfo: workshopInfo
    }),
    forced: W,
    ...(ze !== null && {
      echoedPin: ze
    }),
    ...(n.liveFilesGate === !0 && {
      liveFilesOn: !0
    }),
    sent: sent
  }, n.ownPublishes, n.credentials, workshopSurface, n.createPath, n.onRetry, n.signal, void 0, we)));
}
async function dl(credentials_3, n, r) {
  if (n?.aborted) return;
  try {
    let s = await Ud.post("/api/frame/deploy/prepare", tCt(), {
      refreshOAuth: !0,
      headers: $d(),
      timeout: 30000,
      credentials: credentials_3
    });
    if (s.ok && s.status === 200 && typeof s.data?.slug === "string" && Bn.test(s.data.slug)) return s.data.slug;
    if (!s.ok || s.status !== 403 && s.status !== 404) p("artifact_publish", "reserve_unavailable", {
      reserve_status: s.ok ? s.status : 0
    });
  } catch (error) {
    p("artifact_publish", "reserve_unavailable", {
      reserve_status: 0,
      ...O4(error, r)
    });
  }
  return;
}
async function Yn(e, n) {
  let r = await n(e);
  if (r.err === null || r.thumbnailRejected === void 0 || r.strandedSlug !== void 0 || r.liveVersion !== void 0) return r;
  if (e.thumbnail === void 0 && e.thumbnailDark === void 0) return m("artifact_publish", "thumbnail_rejected"), r;
  p("artifact_publish", "thumbnail_rejected");
  let {
      thumbnail: thumbnail,
      thumbnailDark: thumbnailDark,
      ...g
    } = e,
    y = r.created === void 0 ? await n(g) : await n({
      ...g,
      slug: r.created.slug
    }, r.created.version);
  return y.err === null ? {
    ...y,
    warnings: [...(y.warnings ?? []), `The custom thumbnail was not accepted by the server (${r.thumbnailRejected}); published with the automatic screenshot instead.`]
  } : y;
}
function Dgr() {
  if (Ld() === "claude-vscode") return "epitaxy_pane";
  if (zc()) return "desktop_pane";
  return "terminal_link";
}
async function ZOn(event_name, n) {
  try {
    let r = await Ud.post("/api/frame/track", {
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
      headers: $d(),
      timeout: 5000,
      credentials: n.credentials
    });
    if (!r.ok) t(`[artifact] /track skipped: ${r.reason}`);else if (r.status !== 204) t(`[artifact] /track ${r.status}: ${uS(r.data)}`);
  } catch (error) {
    t(`[artifact] /track failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
var ul = ["frame_daily_publish_cap_reached", "frame_daily_push_cap_reached"],
  fl = {
    frame_daily_publish_cap_reached: "daily_new",
    frame_daily_push_cap_reached: "daily_pushes"
  },
  pl = f(() => u({
    error: z(ul),
    message: o().catch("")
  })),
  hl = {
    daily_new: "daily new-artifact limit for your plan reached \u2014 resets at UTC midnight",
    daily_pushes: "daily publish limit for your plan reached \u2014 resets at UTC midnight"
  },
  e0n = "publish 429: ",
  ls = "x-frame-push-remaining";
function cs(e) {
  let n = typeof e === "string" ? e.trim() : "";
  return /^\d{1,9}$/.test(n) ? Number(n) : void 0;
}
function Ntt(e = Date.now()) {
  let date = new Date(e);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1) / 1000;
}
function ds(e) {
  let n = typeof e === "string" ? Date.parse(e) : Number.NaN;
  return Ntt(Number.isFinite(n) ? n : Date.now());
}
function Lt(e) {
  let n = pl().safeParse(e);
  if (!n.success) return;
  let capType = fl[n.data.error],
    s = L1(n.data.message, 200),
    h = s !== "" ? s : hl[capType];
  return {
    capType: capType,
    message: `${e0n}${h}`
  };
}
var maxAttempts = 3,
  gl = 5000,
  br = 20000,
  ml = 30000;
function us(e) {
  let n = oh(e) ?? 2000;
  return n <= ml ? n : void 0;
}
function fs(e, n) {
  let r = gl * 2 ** (e - 2),
    s = Math.round(r + Math.random() * 0.25 * r),
    h = oh(n) ?? 0;
  return Math.min(Math.max(h, s), br);
}
class Qt extends Error {
  startedAtMs;
  constructor(e, n, r) {
    super(e, r);
    this.startedAtMs = n;
  }
}
class Bt extends Qt {}
class Mt extends Qt {
  seen;
  resent;
  constructor(e, n, r, s, h) {
    super(e, n, r);
    this.seen = s;
    this.resent = h;
  }
}
function bl(e) {
  return e.seen !== void 0 && nDo(e.seen);
}
function ps(e) {
  let n = 0,
    r = 0;
  return s => {
    if (n += s.json_bytes, r += s.wire_bytes, e.json_bytes = n, e.wire_bytes = r, e.body_gzip = e.body_gzip === !0 || s.body_gzip, s.gzip_skip !== void 0) e.gzip_skip = c(s.gzip_skip);
    if (s.gzip_fallback_status !== void 0) e.gzip_fallback_status ??= s.gzip_fallback_status;
  };
}
function hs(e) {
  return e.attemptId === void 0 ? "/api/frame/deploy/direct" : `/api/frame/deploy/direct?attempt_id=${e.attemptId}${e.resend ? "&resend=1" : ""}`;
}
async function _l(e, n, r) {
  let s = {
    ...O4(n.cause, n.startedAtMs),
    ...n.seen
  };
  t(`[artifact] publish request died before its whole body left this machine (socket took ${s.bytes_flushed} of ${s.body_bytes} bytes) \u2014 re-sending once on a fresh connection`);
  let deploy_final_status = 0;
  try {
    let g = await e();
    return deploy_final_status = g.ok ? g.status : 0, g;
  } finally {
    p("artifact_publish", "deploy_resent", {
      ...r,
      ...s,
      deploy_final_status: deploy_final_status
    });
  }
}
var yl = 2,
  vl = 2000;
function wl(e) {
  return e.ok && e.fromFrame && e.status === 409 && it(e.data) === "publish_settling";
}
function xl(e) {
  return typeof e === "object" && e !== null && "replayed" in e && e.replayed === !0;
}
async function Sl(e, n, r, s) {
  let h = {
    ...O4(n.cause, n.startedAtMs),
    ...(n instanceof Mt && n.seen),
    leg: c(n instanceof Bt ? "relay" : "direct")
  };
  t("[artifact] publish request ended without an answer \u2014 re-sending it once, marked, so a publish that already landed is answered rather than repeated");
  let deploy_final_status_2 = 0,
    settle_resends = 0,
    replayed = !1;
  try {
    let w = await e();
    while (wl(w) && settle_resends < yl) {
      let S = Math.min(oh(w.response?.headers?.["retry-after"]) ?? vl, br);
      if (t(`[artifact] the first attempt landed and its content is still being stored \u2014 re-sending in ${S}ms`), await Q(S, s), s?.aborted) break;
      settle_resends += 1, w = await e();
    }
    return deploy_final_status_2 = w.ok ? w.status : 0, replayed = w.ok && w.status >= 200 && w.status < 300 && xl(w.data), w;
  } finally {
    p("artifact_publish", "deploy_resent", {
      ...r,
      ...h,
      deploy_final_status: deploy_final_status_2,
      settle_resends: settle_resends,
      replayed: replayed,
      ...(s?.aborted && {
        cancelled: !0
      })
    });
  }
}
class gs extends Qt {}
async function fn(e) {
  let n = performance.now();
  try {
    return await e();
  } catch (r) {
    throw new gs(r instanceof Error ? r.message : String(r), n, {
      cause: r
    });
  }
}
function er(e, n) {
  return e instanceof Qt ? {
    ...O4(e.cause, e.startedAtMs),
    ...(e instanceof Mt && e.resent && {
      resent: !0
    })
  } : O4(e, n);
}
async function tr(e, n, credentials_4, s, onEncoding, g = {}) {
  let y = await Ud.post(e, n, {
    refreshOAuth: !0,
    headers: $d(),
    streamUpload: {
      tailFloorMs: tailFloorMs,
      onSettled: v => {
        g.seen = v, s(v);
      }
    },
    gzipBody: {
      tailFloorMs: tailFloorMs(void 0),
      onEncoding: onEncoding
    },
    ...(g.freshConnection && {
      freshConnection: !0
    }),
    maxBodyLength: 2 * nu,
    maxContentLength: maxContentLength_5,
    relayProbe: relayProbe,
    credentials: credentials_4
  });
  return s(void 0), y;
}
function tailFloorMs(e) {
  return (azn(e) + 30) * 1000;
}
async function ms(e, n, r, s, h = !1, g = !1) {
  let attemptId = ro(),
    v = !1,
    w = async (freshConnection = !1) => {
      let H = {
          attemptId: attemptId,
          ...(freshConnection && {
            freshConnection: freshConnection
          }),
          ...(v && {
            resend: !0
          })
        },
        X = performance.now();
      try {
        return await e(H);
      } catch (te) {
        let W = uS(te instanceof Error ? te.message : String(te));
        throw cx(te) ? new Bt(jt(`relay request failed: ${W}`), X, {
          cause: te
        }) : new Mt(jt(`deploy request failed: ${W}`), X, {
          cause: te
        }, H.seen, freshConnection);
      }
    },
    deploy_attempts = 1,
    T;
  try {
    T = await w();
  } catch (error) {
    if (r?.aborted) throw error;
    if (g && (error instanceof Bt || error instanceof Mt && MRe(error.cause))) deploy_attempts += 1, v = !0, T = await Sl(() => w(!0), error, s, r);else if (error instanceof Mt && MRe(error.cause) && bl(error)) deploy_attempts += 1, T = await _l(() => w(!0), error, s);else throw error;
  }
  let P = !1,
    D,
    j = k => {
      D ??= k.status === 429 ? 429 : 503, t(`[artifact] /deploy/direct ${k.status} \u2014 retrying in ${k.delayMs}ms (attempt ${k.attempt} of ${k.maxAttempts})`), n?.(k);
    },
    O = async k => {
      if (await Q(k, r), r?.aborted) return t("[artifact] /deploy/direct retry cancelled by user"), !1;
      return deploy_attempts += 1, P = !0, T = await w(), P = !1, !0;
    },
    V = T.ok && T.fromFrame && T.status === 503 && it(T.data) === "render_busy";
  try {
    if (T.ok && T.fromFrame && T.status === 429) {
      if (Lt(T.data) !== void 0) return t("[artifact] /deploy/direct 429 is a plan cap \u2014 not retrying"), T;
      let delayMs = us(T.response?.headers?.["retry-after"]);
      if (delayMs === void 0) return T;
      return j({
        status: 429,
        attempt: 2,
        maxAttempts: 2,
        delayMs: delayMs
      }), await O(delayMs), T;
    }
    if (V && T.ok) {
      let delayMs_2 = Math.min(oh(T.response?.headers?.["retry-after"]) ?? 1000, br);
      return j({
        status: 503,
        attempt: 2,
        maxAttempts: 2,
        delayMs: delayMs_2
      }), await O(delayMs_2), T;
    }
    let attempt = 2;
    while (T.ok && T.fromFrame && T.status === 503 && !(h && xr(T.status, T.data)) && attempt <= maxAttempts) {
      let delayMs_3 = fs(attempt, T.response?.headers?.["retry-after"]);
      if (j({
        status: 503,
        attempt: attempt,
        maxAttempts: maxAttempts,
        delayMs: delayMs_3
      }), !(await O(delayMs_3))) break;
      attempt += 1;
    }
    return T;
  } finally {
    if (D !== void 0) p("artifact_publish", D === 503 ? "deploy_503_retried" : "deploy_429_retried", {
      ...s,
      deploy_attempts: deploy_attempts,
      deploy_final_status: P || !T.ok ? 0 : T.status,
      ...(r?.aborted && {
        cancelled: !0
      }),
      ...(V && {
        render_busy: !0
      })
    }), n?.({
      settled: !0
    });
  }
}
function bn(e, n) {
  if (!(n.ok && n.fromFrame && n.status === 400)) return;
  let r = VV(n.data),
    s = ITe.test(r);
  if (pr(e) && s && /["']deadline["']/.test(r)) return "deadline";
  if (rle(e.requestId).request_id !== void 0 && s && /["']request_id["']/.test(r)) return "request_id";
  if (e.icon && (s && /["']icon["']/.test(r) || /^icon (?:must be|and tint can only)\b/.test(r.trimStart()))) return "icon";
  return;
}
function bs(e, n) {
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
function nr() {
  return jt("the server answered for a different artifact than the one targeted, so its answer was not adopted");
}
function Xt() {
  return jt("deploy returned an incomplete or malformed response");
}
async function Ri(content, n, r, s, h, g, y, v, w, S, T, P, D, j) {
  let O = {
      page_bytes: g.pageBytes,
      lane: c(g.lane),
      forced: g.forced,
      is_redeploy: g.isRedeploy,
      has_base_version: s !== void 0,
      ...(j !== void 0 && {
        reserved: !0
      }),
      template: c(g.template),
      ..._s(n),
      ...(D !== void 0 && D.length > 0 && {
        n_files: D.length
      })
    },
    files_3;
  if (S !== void 0 && D !== void 0 && D.length > 0) {
    let re = xn(content, D, []);
    if (re !== null) return m("artifact_publish", re.kind, O), F(re.msg);
    let me = Object.create(null);
    me["index.html"] = {
      content: content,
      contentType: "text/html",
      live: !0
    };
    let pe = ir - Et(content);
    for (let ye of D) {
      let content_2 = Jt(ye);
      if (pe -= Et(content_2), pe < 0) return m("artifact_publish", "too_large", O), F("file too large");
      me[ye.path] = {
        content: content_2,
        contentType: ye.contentType,
        ...(ye.live === !0 && {
          live: !0
        })
      };
    }
    files_3 = me;
  }
  let k = null,
    H = "none",
    fresh_publish = !n.slug,
    te,
    W = ps(O);
  try {
    let re = h,
      baseVersion = s,
      pe = !1,
      ye = j !== void 0 ? {
        ...n,
        slug: j
      } : n;
    t(`[artifact] publish \u2192 ${S ?? "/api/frame/deploy/direct"}${files_3 !== void 0 ? ` (files: ${Object.keys(files_3).length})` : ""}`);
    let ke = () => ms(he => tr(S ?? hs(he), {
        ...Bi(ye),
        ...tCt(),
        ...f0n(),
        ...r,
        ...(S === void 0 && re && {
          force: !0
        }),
        ...(S === void 0 && baseVersion && {
          baseVersion: baseVersion
        }),
        ...(S === void 0 && pe && !baseVersion && ye.slug && {
          expectUnpublished: !0
        }),
        ...(files_3 !== void 0 ? {
          files: files_3
        } : {
          content: content
        })
      }, v, Ie => te = Ie, W, he), T, P, O, !0, S === void 0 && ye.slug !== void 0),
      Le = {
        deadline: !1,
        icon: !1,
        request_id: !1
      },
      be = async () => {
        let he = await ke();
        for (let Ie = bn(ye, he); Ie !== void 0; Ie = bn(ye, he)) p("artifact_publish", `${Ie}_rejected`, O), t(`[artifact] ${Ie} refused upstream \u2014 retrying without it`), ye = bs(ye, Ie), Le[Ie] = !0, he = await ke();
        return he;
      },
      ne = await be();
    if (re && ne.ok && ne.fromFrame && ne.status === 400) {
      let he = VV(ne.data);
      if (ITe.test(he) && (/\bforce\b/.test(he) || baseVersion !== void 0 && /\bbaseVersion\b/.test(he))) p("artifact_publish", "force_field_rejected", O), t("[artifact] CP rejected force/baseVersion as unknown \u2014 retrying without them"), re = !1, baseVersion = void 0, ne = await be();
    }
    if (re && baseVersion && ne.ok && ne.fromFrame && ne.status === 400 && /force and baseVersion are mutually exclusive/.test(VV(ne.data))) p("artifact_publish", "exclusivity_retry", O), t("[artifact] pre-relaxation CP rejected force+baseVersion \u2014 retrying without the precondition"), baseVersion = void 0, ne = await be();
    let qe = he => he.reason === "no-auth" ? Ch(he.detail) : `publish unavailable: ${he.reason}`;
    if (!ne.ok) return m("artifact_publish", ne.reason, O), F(qe(ne));
    if (k = ne.fromFrame ? xr(ne.status, ne.data) : null, k && !fresh_publish && k.slug !== n.slug) return m("artifact_publish", "deploy_slug_mismatch", O), F(nr());
    if (k && k.kind === void 0 && S === void 0 && !P?.aborted) {
      let delayMs_4 = fs(2, ne.response?.headers?.["retry-after"]);
      t(`[artifact] /deploy/direct 503 after commit (${k.slug}) \u2014 retrying against it in ${delayMs_4}ms`), T?.({
        status: 503,
        attempt: 2,
        maxAttempts: 2,
        delayMs: delayMs_4
      });
      try {
        if (await Q(delayMs_4, P), !P?.aborted) {
          if (fresh_publish) ye = {
            ...ye,
            slug: k.slug
          }, pe = k.live === void 0, re = !1;
          if (k.live !== void 0) baseVersion = k.live;
          H = "unknown", ne = await be(), H = "answered";
        }
      } finally {
        p("artifact_publish", "deploy_stranded_retried", {
          ...O,
          fresh_publish: fresh_publish,
          deploy_final_status: H === "answered" && ne.ok ? ne.status : 0,
          ...(P?.aborted && {
            cancelled: !0
          })
        }), T?.({
          settled: !0
        });
      }
      if (!ne.ok) return m("artifact_publish", ne.reason, O), St(F(qe(ne)), k, fresh_publish, H);
    }
    if (!ne.fromFrame) return m("artifact_publish", "relay_error", {
      ...O,
      deploy_status: ne.status
    }), St(F(or(ne.status)), k, fresh_publish, H);
    if (((baseVersion ?? s) || pe || SL()) && ne.status === 409) {
      let conflictDetail = Es(ne.data);
      if (conflictDetail) return m("artifact_publish", "conflict", O), St({
        ...F(xs(conflictDetail)),
        conflict: !0,
        conflictDetail: conflictDetail
      }, k, fresh_publish, H);
    }
    if (S !== void 0 && ne.status === 404) return m("artifact_publish", "create_not_enabled", {
      ...O,
      deploy_status: 404
    }), F("create endpoint not available (404) \u2014 nothing was created");
    if (ne.status === 400 && ur(VV(ne.data), {
      ldx: !1
    })) return m("artifact_publish", "ldx_unsupported", O), St(F(dr(VV(ne.data))), k, fresh_publish, H);
    if (ne.status < 200 || ne.status >= 300) {
      let he = cr(ne.status, ne.data, g.isRedeploy, g.echoedPin !== void 0 ? {
        pin: g.echoedPin,
        declaredCaps: g.hasCaps
      } : void 0, g.liveFilesOn === !0, g.sent, {
        retryAfter: ne.response?.headers?.["retry-after"],
        ...(g.template !== "pr_review" && {
          reservedSlug: j
        }),
        created: fresh_publish && k !== null
      });
      if (he.code !== "thumbnail_rejected") m("artifact_publish", he.code ?? "deploy_failed", {
        ...O,
        deploy_status: ne.status,
        ...he.extra
      });
      let refusedLivePath = he.code === "path_is_live" ? $s(ne.data) : void 0;
      return St({
        ...ar(he, `deploy ${ne.status}: ${uS(ne.data)}`),
        ...(refusedLivePath !== void 0 && {
          refusedLivePath: refusedLivePath
        })
      }, k, fresh_publish, H);
    }
    let Ge = sr().safeParse(ne.data);
    if (!Ge.success) return m("artifact_publish", "deploy_incomplete", O), St(F(Xt()), k, fresh_publish, H);
    let {
      slug: slug_6,
      version: version,
      read: read,
      shared: shared,
      kind: kind_2
    } = Ge.data;
    if (ye.slug && slug_6 !== ye.slug) return m("artifact_publish", "deploy_slug_mismatch", O), St(F(nr()), k, fresh_publish, H);
    if (S !== void 0 && (mi == null || kind_2 !== mi.LIVE_DOC_KIND)) return m("artifact_publish", "deploy_incomplete", O), F(Xt());
    let liveDocs = Qi(ne.data),
      livePaths = liveDocs?.map(he => he.path),
      tt = S === void 0 ? new Set() : new Set(["index.html", ...Object.entries(files_3 ?? {}).filter(([, he]) => he.live === !0).map(([he]) => he)]),
      bornLive = (livePaths ?? []).filter(item => tt.has(item)),
      warnings_2 = [...Jn(ne.data), ...es(bornLive), ...ts(livePaths, new Set(["index.html", ...Object.keys(files_3 ?? {})]))].slice(0, vn),
      embeds = Zn(ne.data),
      pushRemaining = cs(ne.response?.headers?.[ls]),
      pushResetAt = ds(ne.response?.headers?.date);
    Ott(y, slug_6, version);
    let ht = ws(Ge.data);
    return _("artifact_publish", {
      ...O,
      e2e_ms: Math.round(performance.now() - g.t0),
      is_redeploy: g.isRedeploy,
      has_caps: g.hasCaps,
      push_remaining_seen: pushRemaining !== void 0,
      read_back_echoed: ht.readBackEchoed === !0
    }), {
      url: Lf(slug_6),
      slug: slug_6,
      version: version,
      err: null,
      ...(pushRemaining !== void 0 && {
        pushRemaining: pushRemaining,
        pushResetAt: pushResetAt
      }),
      ...(w && {
        workshopSurface: !0
      }),
      ...(g.workshopInfo && {
        workshop: g.workshopInfo
      }),
      ...(read !== void 0 && {
        read: read
      }),
      ...(shared !== void 0 && {
        shared: shared
      }),
      ...ys(Ge.data, pr(ye)),
      ...(Le.deadline && {
        deadlineDropped: !0
      }),
      ...(Le.icon && {
        iconDropped: !0
      }),
      ...vs(Ge.data, r, S !== void 0),
      ...ht,
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
    return m("artifact_publish", error instanceof Bt ? "relay_request_error" : "request_error", {
      ...O,
      ...er(error, g.t0),
      ...te
    }), St(F(error instanceof Error ? error.message : String(error)), k, fresh_publish, H);
  }
}
var Mse = 4;
function rr(e) {
  return typeof e === "string" ? e : e.toString("utf8");
}
async function _r(e, n, page_bytes, s = "sidecar file") {
  let h = e.filter(item => vhe.has(oD(item.contentType)));
  if (h.length === 0) return null;
  let {
    verifyWorkshopHtml: verifyWorkshopHtml_3
  } = await import("B:/~BUN/root/chunk-0ef2ak4t.js");
  for (let y of h) {
    let v = verifyWorkshopHtml_3(rr(y.content), n, "probe");
    if (v.ok) continue;
    p("workshop_html_publish", "verifier_refused"), m("artifact_publish", "workshop_verifier_refused", {
      page_bytes: page_bytes,
      sidecar_bytes: Buffer.byteLength(y.content, "utf8")
    });
    let w = v.violations.slice(0, 6).map(item => `- [${item.rule}] ${item.where} \u2014 ${item.hint}`),
      S = v.violations.length > 6 ? `
(and ${v.violations.length - 6} more)` : "";
    return F(`${s} ${cq(y.path)} refused by the workshop structural verifier:
` + w.join(`
`) + S);
  }
  return null;
}
var Dse = new Set(["text/html", ...[], "text/css", "text/plain", "text/markdown", "text/csv", "text/javascript", "application/javascript", "application/json", "application/manifest+json", "application/xml", "text/xml", "image/svg+xml"]),
  _n = new Set([...Dse, "application/wasm", "image/png", "image/jpeg", "image/gif", "image/webp", "image/avif", "image/x-icon", "image/vnd.microsoft.icon", "font/woff", "font/woff2", "font/ttf", "font/otf", "application/font-woff", "application/font-woff2", "audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "video/mp4", "video/webm", "video/ogg", "application/pdf"]),
  Rl = ["py", "ipynb", "yaml", "yml", "toml", "ini", "cfg", "conf", "env", "lock", "sh", "bash", "ps1", "bat", "ts", "tsx", "jsx", "vue", "scss", "less", "rs", "go", "java", "kt", "c", "h", "cpp", "cs", "rb", "php", "r", "swift", "lua", "sql", "db", "sqlite", "parquet", "jsonl", "ndjson", "log", "tex", "rtf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "epub", "key", "pages", "numbers", "zip", "tar", "gz", "tgz", "7z", "rar", "mov", "avi", "m4a", "aac", "flac", "heic", "bmp", "tif", "tiff", "psd", "fig", "eot", "xhtml", "htm", "bin", "exe", "dmg", "tsv", "pkl", "npy", "npz", "pt", "onnx", "safetensors", "h5", "svelte", "mdx", "jsonc"],
  Al = ["text/x-python", "text/x-python-script", "application/x-python-code", "application/x-ipynb+json", "application/x-yaml", "application/yaml", "text/yaml", "text/x-yaml", "application/toml", "text/x-toml", "text/x-sh", "text/x-shellscript", "application/x-sh", "application/typescript", "text/typescript", "text/x-typescript", "text/jsx", "text/x-scss", "text/x-sql", "application/sql", "application/x-sqlite3", "application/vnd.apache.parquet", "application/x-ndjson", "application/jsonl", "application/ld+json", "application/geo+json", "application/octet-stream", "text/x-log", "text/rtf", "application/rtf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.oasis.opendocument.text", "application/epub+zip", "application/zip", "application/x-zip-compressed", "application/gzip", "application/x-tar", "application/x-7z-compressed", "video/quicktime", "video/x-msvideo", "audio/mp4", "audio/x-m4a", "audio/aac", "audio/flac", "image/heic", "image/bmp", "image/tiff", "image/vnd.adobe.photoshop", "application/x-figma", "application/vnd.ms-fontobject", "application/xhtml+xml", "application/x-www-form-urlencoded", "multipart/form-data", "image/jpg", "text/json", "text/x-markdown", "application/x-javascript", "text/x-java-source", "text/x-c"];
function t0n(e, n) {
  let r = no(e).toLowerCase().slice(1),
    s = Rl.find(item => item === r),
    refused_ext = r === "" ? c("none") : lq(e) !== void 0 ? c("served") : s !== void 0 ? c(s) : c("other");
  if (n === void 0) return {
    refused_ext: refused_ext
  };
  let g = oD(n),
    y = Al.find(item => item === g),
    refused_type = _n.has(g) ? c("served_variant") : y !== void 0 ? c(y) : c("other");
  return {
    refused_ext: refused_ext,
    refused_type: refused_type
  };
}
var kl = new Set(["image/svg+xml", "text/xml", "application/xml"]),
  PG = 67108864,
  Htt = 268435456,
  n0n = 15728640,
  ir = 12582912,
  Tl = 1048576,
  qn = 20971520,
  Dt = 256,
  NXt = 512,
  Ai = /\b(manifest|mode)\b/;
function Jt(e) {
  if (Dse.has(e.contentType)) return typeof e.content === "string" ? e.content : e.content.toString("utf8");
  return (typeof e.content === "string" ? Buffer.from(e.content, "utf8") : e.content).toString("base64");
}
function _s(e) {
  let thumbnails = (e.thumbnail !== void 0 ? 1 : 0) + (e.thumbnailDark !== void 0 ? 1 : 0);
  return thumbnails > 0 && xG() ? {
    thumbnails: thumbnails
  } : {};
}
function ki(e) {
  return e !== void 0 && xG() ? Math.ceil(e.length / 3) * 4 : 0;
}
function Pl(e) {
  return typeof e.content === "string" ? Buffer.byteLength(e.content, "utf8") : e.content.length;
}
function Et(e) {
  return Buffer.byteLength(b(e), "utf8") - 2;
}
function Cl(e, n) {
  let r = Object.create(null),
    s = Object.keys(e);
  if (s.length === 0) return;
  for (let h of s) {
    let g = e[h],
      ifMatch = n.get(h);
    if (ifMatch === void 0 || g === void 0) return;
    if (g === null) {
      if (ifMatch === null) return;
      r[h] = {
        delete: !0,
        ifMatch: ifMatch
      };
      continue;
    }
    if (!("contentType" in g) || g.live !== void 0 || g.reseed !== void 0) return;
    r[h] = {
      ...g,
      ifMatch: ifMatch
    };
  }
  return r;
}
var $l = /unknown field "(live|reseed)"/,
  Ol = /manifest must not be empty/;
function xn(e, n, r) {
  let s = msg => ({
      kind: "files_invalid",
      msg: msg
    }),
    h = msg_2 => ({
      kind: "too_large",
      msg: msg_2
    });
  if (n.length + r.length + (e === null ? 0 : 1) > Dt) return s(`This publish lists ${n.length} ${I(n.length, "file")}${r.length > 0 ? ` and ${r.length} ${I(r.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Dt} entries in one publish. Nothing was published: send at most ${Dt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${NXt} in all.`);
  let y = new Set(["index.html"]);
  for (let w of r) {
    if (!w || w === "index.html") return s(w ? `"index.html" is the page itself and can't be removed. Drop that entry.` : "A removal in `files` has an empty path. Name the published path to remove.");
    if (y.has(w)) return s(`${b(w)} is listed more than once in \`files\`. List each path once.`);
    y.add(w);
  }
  let v = e === null ? 0 : Buffer.byteLength(e, "utf8");
  for (let w of n) {
    if (!w.path || w.path === "index.html") return s(w.path ? e === null ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here` : 'files must not contain "index.html" \u2014 the page argument is the index' : "every file needs a non-empty path");
    if (y.has(w.path)) return s(`${b(w.path)} is listed more than once in \`files\`. List each path once.`);
    if (y.add(w.path), typeof w.content === "string" && !Dse.has(w.contentType)) return s(`file ${b(w.path)}: contentType ${b(w.contentType)} ` + "is binary \u2014 pass its content as a Buffer (raw bytes), not a string");
    let S = Dse.has(w.contentType),
      T = Pl(w),
      P = S ? nu : n0n;
    if (T > P) return h(`file ${b(w.path)} is ${Math.ceil(T / 1024 / 1024)}MB (per-file max ${P / 1024 / 1024}MB${S ? "" : " for binary files, which must fit an upload request base64-encoded"})`);
    if (S) {
      let D = typeof w.content === "string" ? w.content : w.content.toString("utf8");
      if (typeof w.content !== "string" && !Buffer.from(D, "utf8").equals(w.content)) return s(`file ${b(w.path)}: contentType ${b(w.contentType)} ` + "is a text type but the Buffer is not valid UTF-8 \u2014 fix the " + "encoding, or use a binary contentType");
      let j = D.indexOf("\uFFFD");
      if (j !== -1 || !Jd(D)) return s(`file ${b(w.path)} ` + (j !== -1 ? `has the replacement character U+FFFD at ${dn(D, j)}` : "holds an unpaired surrogate (half of a split character)") + " \u2014 replace it with the intended text" + (w.contentType === "text/html" ? " (in HTML, write an intended U+FFFD as &#xFFFD;)" : ""));
    }
    if (S && T > qn / 6) {
      let D = Et(Jt(w));
      if (D > qn) return h(`file ${b(w.path)} is ${Math.ceil(D / 1024 / 1024)}MB JSON-encoded on the wire (per-request max ${qn / 1024 / 1024}MB) \u2014 ` + "heavily escaped text (quotes, backslashes, control characters) inflates when JSON-encoded; split or shrink the file");
    }
    v += T;
  }
  if (v > PG) return h(`total content is ${Math.ceil(v / 1024 / 1024)}MB \u2014 one publish may send at most ${PG / 1024 / 1024}MB. Nothing was published: send part of the files now and the rest with another publish to the same url (files left out of a later publish are kept; a version may total ${Htt / 1024 / 1024}MB).`);
  return null;
}
var yr = "copying files from another artifact is not enabled for this account \u2014 nothing was published; publish with local files instead";
function vr(e, n, r, s) {
  if (r.length === 0) return null;
  if (n.length + r.length + s.length + (e === null ? 0 : 1) > Dt) return `This publish lists ${n.length + r.length} ${I(n.length + r.length, "file")} (copies included)${s.length > 0 ? ` and ${s.length} ${I(s.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Dt} entries in one publish. Nothing was published: send at most ${Dt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${NXt} in all.`;
  let g = new Set(["index.html", ...n.map(item => item.path), ...s]),
    y = new Set();
  for (let v of r) {
    if (!v.path || v.path === "index.html") return v.path ? e === null ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here` : 'files must not contain "index.html" \u2014 the page argument is the index' : "every file needs a non-empty path";
    if (g.has(v.path)) return `${b(v.path)} is listed more than once in \`files\` (once as a copy from another artifact). List each path once.`;
    if (g.add(v.path), !Bn.test(v.from.slug) || !v.from.path) return `file ${b(v.path)}: its source must name an artifact and a published path`;
    if (v.from.path === "index.html") return `file ${b(v.path)}: another artifact's page (index.html) is not a copyable file \u2014 read it and publish your own content`;
    for (let w of [v.path, v.from.path]) {
      let S = lq(w);
      if (S !== void 0 && vhe.has(oD(S))) return `file ${b(v.path)}: an HTML, SVG or XML document cannot be copied from another artifact \u2014 read it with action "read_file" and publish it as your own file`;
    }
    y.add(`${v.from.slug}@${v.from.ver ?? ""}`);
  }
  if (y.size > Mse) return `files copy from ${y.size} source artifact versions; at most ${Mse} per publish`;
  return null;
}
async function Lgr(e, n, r) {
  let s = mr(e, "file");
  if (s !== null) return s.err;
  if (n.length > 0 && !Gwe()) return m("artifact_publish", "copy_from_flag_off", {
    n_copied: n.length
  }), yr;
  let h = xn(null, e, [])?.msg ?? vr(null, e, n, []);
  if (h !== null || r === void 0) return h;
  return (await _r(e, await wn(), 0, "file"))?.err ?? null;
}
async function Ngr(e, n) {
  if (Rc() !== null) return F("publishing to an Artifact created from an Artifact type is not available in eval stub mode");
  let r = n.copiedFiles ?? [];
  if (!(ee().frozenArtifactTypes?.typesOn ?? PA())) {
    let v = n.removeFiles ?? [];
    return m("artifact_publish", "multifile_flag_off", {
      n_files: e.length + r.length,
      n_removed: v.length
    }), F("This artifact was created from an artifact type, so it takes supporting files only, and " + (v.length > 0 ? "its files can't be changed from this session. Nothing was published or removed; the artifact is unchanged." : "supporting files can't be published from this session. Nothing was published; the artifact is unchanged."));
  }
  if (r.length > 0 && !Gwe()) return m("artifact_publish", "copy_from_flag_off", {
    n_copied: r.length
  }), F(yr);
  let h = mr(e, "file");
  if (h !== null) return h;
  if (n.verifyWorkshopHtml !== void 0) {
    let v = await _r(e, await wn(), 0, "file");
    if (v !== null) return v;
  }
  let g = await tn({
    slug: n.slug,
    hostGrant: Z0e(a.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: n.signal,
    credentials: n.credentials,
    lane: "files"
  });
  if (!g.ok) return F(g.err);
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
  return qOn(n.ownPublishes, n.slug, async () => Zi(await Ji(wr(null, e, r, n.removeFiles ?? [], y, {}, {
    baseVersion: n.baseVersion,
    force: n.force,
    ownPublishes: n.ownPublishes,
    tele: {
      t0: performance.now(),
      pageBytes: 0,
      lane: "inline",
      isRedeploy: !0,
      hasCaps: !1,
      template: "plain",
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
  }), n.slug, n.credentials, n.signal), e));
}
async function Hgr(e) {
  if (Rc() !== null) return F("invalid publish options");
  if (!PA()) return m("artifact_publish", "multifile_flag_off", {
    n_files: 0,
    n_removed: 0
  }), F("invalid publish options");
  if (![...e.base.values()].some(item => item.live === !0)) return F("invalid publish options");
  let n = await tn({
    slug: e.slug,
    hostGrant: Z0e(a.CLAUDE_ARTIFACT_HOST_GRANT),
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
  return qOn(e.ownPublishes, e.slug, () => wr(null, [], [], [], r, {}, {
    baseVersion: e.baseVersion,
    force: !1,
    ownPublishes: e.ownPublishes,
    tele: {
      t0: performance.now(),
      pageBytes: 0,
      lane: "inline",
      isRedeploy: !0,
      hasCaps: !1,
      template: "plain",
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
async function wr(content_3, n, r, s, h, g, y) {
  let {
      baseVersion: baseVersion_2,
      force: force,
      tele: tele,
      onRetry: onRetry,
      signal: signal_2,
      credentials: credentials_5
    } = y,
    j = y.copiedCrossOrgOk === !0,
    liveFiles = y.liveFiles,
    V = liveFiles?.detach ?? [],
    k = {
      page_bytes: tele.pageBytes,
      lane: c(tele.lane),
      n_files: n.length + r.length,
      n_copied: r.length,
      n_removed: s.length,
      forced: tele.forced,
      template: c(tele.template),
      is_redeploy: tele.isRedeploy,
      has_base_version: baseVersion_2 !== void 0,
      reserved: !1,
      ..._s(h),
      ...(tele.baseRebase !== void 0 && {
        base_rebase: c(tele.baseRebase)
      })
    },
    H = R => (m("artifact_publish", "files_invalid", k), F(R)),
    X = R => (m("artifact_publish", "too_large", k), F(R)),
    mode = content_3 === null || h.slug !== void 0 && baseVersion_2 !== void 0 ? "patch" : "replace";
  if (s.length > 0 && mode === "replace") return H(h.slug === void 0 ? "A `null` entry in `files` removes a file from an existing artifact, and a first publish has nothing to remove, so nothing was published. Drop the `null` entries." : "A removal applies to the artifact's current version, and this publish didn't name that version (`baseVersion`), so nothing was published. Publish again with the version named, or without the `null` entries.");
  if (liveFiles !== void 0 && h.slug !== void 0 && mode === "replace") return H("invalid publish options");
  if (liveFiles?.page?.reseed === !0 && liveFiles.page.live !== void 0) return H("invalid publish options");
  let W = V.length > 0 || liveFiles?.page?.reseed === !0 || liveFiles?.page?.live === !1 || n.some(item => item.reseed === !0 || item.live === !1);
  if (W && mode === "replace") return H("invalid publish options");
  for (let R of n) {
    if (R.reseed === !0 && R.live !== void 0) return H("invalid publish options");
    if ((R.live === !0 || R.reseed === !0) && !yPo.has(oD(R.contentType))) return H("invalid publish options");
    let Z = liveFiles?.base?.get(R.path);
    if (liveFiles?.base !== void 0 && Z?.live !== !0 && (R.reseed === !0 || R.live === !1)) return H("invalid publish options");
  }
  for (let R of V) if (liveFiles?.base !== void 0 && liveFiles.base.get(R)?.live !== !0) return H("invalid publish options");
  if (liveFiles?.base !== void 0 && liveFiles.base.get("index.html")?.live !== !0 && (liveFiles.page?.reseed === !0 || liveFiles.page?.live === !1)) return H("invalid publish options");
  for (let R of s) if (liveFiles?.base?.get(R)?.live === !0) return H("invalid publish options");
  let re = xn(content_3, n, [...s, ...V]);
  if (re !== null) return re.kind === "too_large" ? X(re.msg) : H(re.msg);
  let me = vr(content_3, n, r, [...s, ...V]);
  if (me !== null) return H(me);
  for (let R of r) if (liveFiles?.base?.get(R.path)?.live === !0) return H("invalid publish options");
  let pe = (R, Z) => mode === "patch" && liveFiles?.base?.get(R)?.live === !0 && Z.reseed !== !0 && Z.live !== !1,
    ye = W || liveFiles?.page?.live === !0 || n.some(item => item.live === !0) || [...(liveFiles?.base?.values() ?? [])].some(item => item.live),
    Le = mode === "patch" && !force && y.preconditions === void 0 && (content_3 !== null || ye),
    be = (R, Z, q) => {
      let we = Le ? liveFiles?.base?.get(R) : void 0;
      return we !== void 0 && !we.live && we.sha256 !== void 0 && we.contentType === q && we.sha256 === Kt(Z);
    },
    ne = [],
    qe = liveFiles?.page ?? {},
    Ge = content_3 !== null && qe.live === !1,
    Je = Ge ? ["index.html", ...V] : V,
    Me;
  if (pe("index.html", qe)) ne.push("index.html");else if (content_3 !== null && !Ge && !(ye && qe.live === void 0 && qe.reseed !== !0 && be("index.html", content_3, "text/html"))) Me = {
    content: content_3,
    contentType: "text/html",
    ...(qe.live !== void 0 && {
      live: qe.live
    }),
    ...(qe.reseed === !0 && {
      reseed: !0
    })
  };
  let Ne = Object.create(null);
  if (Me !== void 0) Ne["index.html"] = Me;
  let Ee = [],
    st = Me?.content !== void 0 ? Et(Me.content) : 0,
    We = ki(h.thumbnail) + ki(h.thumbnailDark),
    je = ir - st - We,
    tt = R => !pe(R.path, R) && (R.live === !0 || R.reseed === !0 || R.live === !1),
    ve = Object.create(null);
  for (let R of n.filter(tt)) {
    let content_4 = Jt(R),
      q = Et(content_4);
    if (q > je) {
      let we = ir - st - je;
      return X("file too large");
    }
    je -= q, ve[R.path] = {
      content: content_4,
      contentType: R.contentType,
      ...(R.live !== void 0 && {
        live: R.live
      }),
      ...(R.reseed === !0 && {
        reseed: !0
      })
    }, Ne[R.path] = ve[R.path];
  }
  let He = [],
    files_omitted = 0;
  for (let R of n) {
    if (tt(R)) continue;
    if (pe(R.path, R)) {
      ne.push(R.path);
      continue;
    }
    if (R.live === void 0 && be(R.path, R.content, R.contentType)) {
      files_omitted += 1;
      continue;
    }
    He.push(R);
  }
  let pt = 0;
  for (let f_2 of He) {
    let Z = Jt(f_2),
      q = Et(Z);
    if (q <= je) je -= q, pt += q, Ne[f_2.path] = {
      content: Z,
      contentType: f_2.contentType
    };else {
      let we = Kt(f_2.content);
      Ee.push({
        f: f_2,
        sha: we,
        wire: Z
      }), Ne[f_2.path] = {
        sha256: we,
        contentType: f_2.contentType
      };
    }
  }
  for (let R of s) Ne[R] = null;
  for (let R of Je) Ne[R] = {
    live: !1
  };
  let Ve = {
      liveKey: Je.length > 0 || Object.keys(ve).length > 0 || Me?.live !== void 0 || Me?.reseed === !0,
      emptyPatch: ye && Object.keys(Ne).length === 0 && r.length === 0,
      ldx: !1
    },
    ht,
    he = R => ht = R,
    Ie = ps(k),
    Ht = R => ms(Z => tr(hs(Z), R, credentials_5, he, Ie, Z), onRetry, signal_2, k, !1, typeof R.slug === "string"),
    if_match_sent = !1,
    De = R => {
      let Z = mode === "patch" && !force && y.preconditions !== void 0 ? Cl(R, y.preconditions) : void 0;
      return if_match_sent = Z !== void 0, Z ?? R;
    },
    ze = {
      ...Bi(h),
      ...tCt(),
      ...f0n(),
      ...g
    },
    gt = {
      deadline: !1,
      icon: !1,
      request_id: !1
    },
    $t = async R => {
      let Z = await Ht(R);
      for (let q = bn(h, Z); q !== void 0 && R[q] !== void 0; q = bn(h, Z)) {
        p("artifact_publish", `${q}_rejected`, k), t(`[artifact] ${q} refused upstream \u2014 retrying without it`), delete ze[q], h = bs(h, q), gt[q] = !0;
        let {
          [q]: we,
          ...N
        } = R;
        R = N, Z = await Ht(R);
      }
      return Z;
    },
    zt = 15728640,
    Xe = [];
  {
    let R = [],
      Z = 0;
    for (let q of Ee) {
      let we = Et(q.wire);
      if (R.length > 0 && Z + we > zt) Xe.push(R), R = [], Z = 0;
      R.push(q), Z += we;
    }
    if (R.length > 0) Xe.push(R);
  }
  let mt = async R => {
      let Z = us(R);
      if (Z === void 0) return !1;
      if (await Q(Z, signal_2), signal_2?.aborted) return t("[artifact] 429 retry cancelled by user"), !1;
      return !0;
    },
    ot = R => {
      let Z = R.fromFrame && R.status === 429 ? Lt(R.data) : void 0;
      if (Z) m("artifact_publish", "publish_cap_reached", {
        ...k,
        cap_type: c(Z.capType)
      });
      return Z;
    },
    Te = r.map(R => ({
      c: R
    })),
    refusedClassSidecarTypes_2 = [],
    nt = R => "c" in R ? {
      path: R.c.path,
      from: {
        slug: R.c.from.slug,
        path: R.c.from.path,
        ...(R.c.from.ver !== void 0 && {
          ver: R.c.from.ver
        })
      }
    } : {
      path: R.f.path,
      content: R.wire,
      contentType: R.f.contentType
    },
    kt = async (slug_7, Z) => {
      let q = j && Z.some(item => "c" in item),
        we = () => tr("/api/frame/upload", {
          slug: slug_7,
          ...(q && {
            cross_org_ok: !0
          }),
          files: Z.map(nt)
        }, credentials_5, he, Ie),
        N = await fn(we);
      if (N.ok && N.fromFrame && N.status === 429 && Lt(N.data) === void 0 && (await mt(N.response?.headers?.["retry-after"]))) N = await fn(we);
      return N;
    },
    bt = (R, Z, q) => {
      if (Z) t(`[artifact] manifest publish refused (HTTP ${R}): ${uS(Z)}`);
      let we = q?.maybeGone ? ", or the artifact no longer exists or isn't yours to update" : "";
      if (s.length > 0) return F(`The server didn't accept this update's file changes (HTTP ${R})${we}. Nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting \`files\`) would update the page but can't remove a file.${q?.debris ?? ""}`);
      let N = q?.debris ? " This publish didn't finish." : h.slug !== void 0 ? " Nothing was published; the artifact is unchanged." : " Nothing was published.";
      return F(`The server didn't accept this publish's supporting files (HTTP ${R})${we}.${N} Publish the page as a single file instead: inline what it needs and omit \`files\`.${q?.debris ?? ""}`);
    },
    debris = "",
    reservedSlug_2,
    _t = R => {
      reservedSlug_2 = R, k.reserved = !0, debris = ` (A slug was reserved for it: publish again to slug ${R} rather than publishing fresh.)`, y.onReserved?.(R);
    };
  if (h.slug === void 0 && y.reservedSlug !== void 0) _t(y.reservedSlug);
  let dt = R => R.fromFrame && Cs(R.status, R.data),
    yt = (R, refusedStep) => (m("artifact_publish", "rate_limited", {
      ...k,
      refused_status: R.status,
      ...As(R.data)
    }), {
      ...F(Ps({
        retryAfter: R.response?.headers?.["retry-after"],
        reservedSlug: reservedSlug_2,
        ...(refusedStep !== void 0 && {
          refusedStep: refusedStep
        })
      })),
      transient: "rate_limited"
    }),
    Pe = () => F(`publish cancelled \u2014 nothing more was sent.${debris}`);
  try {
    let slug_9 = h.slug ?? y.reservedSlug,
      Z,
      q,
      we = async (slug_8, shas) => {
        let Ae = () => Ud.post("/api/frame/deploy/prepare", {
            ...(slug_8 !== void 0 && {
              slug: slug_8
            }),
            ...(shas.length > 0 && {
              shas: shas
            }),
            ...(slug_8 === void 0 && tCt())
          }, {
            refreshOAuth: !0,
            headers: $d(),
            timeout: 30000,
            credentials: credentials_5
          }),
          ce = await fn(Ae);
        if (ce.ok && ce.fromFrame && ce.status === 429 && Lt(ce.data) === void 0 && (await mt(ce.response?.headers?.["retry-after"]))) ce = await fn(Ae);
        return ce;
      },
      N = Y => typeof Y?.slug === "string" && Bn.test(Y.slug) ? Y.slug : void 0,
      oe = !1,
      K = !1,
      Ce = h.slug !== void 0 && !(Le && liveFiles?.base !== void 0),
      wt = Ee.length > 0 || Te.length > 0 || Ce && pt > Tl;
    if (wt) {
      let Y = He.map(ce => ({
          f: ce,
          sha: Kt(ce.content),
          wire: Jt(ce)
        })),
        se,
        Ae = "";
      for (let ce = 0; ce < 2; ce++) {
        if (signal_2?.aborted) return Pe();
        let ge = await we(slug_9, Y.map(item => item.sha));
        if (signal_2?.aborted) {
          let ie = debris === "" && slug_9 === void 0 && ge.ok && ge.status === 200 ? N(ge.data) : void 0;
          if (ie !== void 0) _t(ie);
          return Pe();
        }
        if (!ge.ok) {
          se = {
            status: 0,
            why: ge.reason === "no-auth" ? Ch(ge.detail) : `preflight unavailable: ${ge.reason}`
          };
          break;
        }
        if (ge.status === 404) {
          if (XV(ge.data)) return m("artifact_publish", "prepare_not_found", k), {
            ...F("the server does not recognize this artifact for updating (it may no longer exist or may not be yours to update). The files were NOT published."),
            ...(h.slug !== void 0 && {
              gone: !0
            })
          };
          se = {
            status: 404,
            why: "the preflight route answered 404"
          };
          break;
        }
        let Rn = ot(ge);
        if (Rn) return F(debris ? `${Rn.message} \u2014 this publish didn't finish; try again after the reset.${debris}` : `${Rn.message} \u2014 nothing was published; try again after the reset.`);
        if (dt(ge)) {
          if (Te.length > 0 || Ee.length > 0 || K) return yt(ge, Te.length > 0 ? ni(Te.length) : void 0);
          t("[artifact] preflight rate-limited \u2014 sending the one inline deploy instead"), se = {
            status: 429,
            why: "the preflight was rate-limited"
          };
          break;
        }
        if (ge.status !== 200) {
          se = {
            status: ge.status,
            why: ge.fromFrame ? `preflight ${ge.status}: ${uS(ge.data)}` : `preflight relay HTTP ${ge.status}`
          };
          break;
        }
        let An = N(ge.data),
          kn = ge.data?.missing;
        if (An === void 0 || !Array.isArray(kn) || !kn.every(item => typeof item === "string" && /^[0-9a-f]{64}$/.test(item))) {
          se = {
            status: 200,
            why: "a malformed preflight answer"
          };
          break;
        }
        if (slug_9 !== void 0 && An !== slug_9) return m("artifact_publish", "prepare_slug_mismatch", k), F("the server answered the upload preflight for a different " + "artifact \u2014 not publishing.");
        if (K = !0, slug_9 = An, h.slug === void 0) _t(slug_9);
        let Is = new Set(kn),
          Fs = Y.filter(item => Is.has(item.sha)),
          Tn = [];
        {
          let ie = [],
            Se = 0;
          for (let ft of Fs) {
            let Nt = Et(ft.wire);
            if (ie.length > 0 && Se + Nt > zt) Tn.push(ie), ie = [], Se = 0;
            ie.push(ft), Se += Nt;
          }
          if (ie.length > 0) Tn.push(ie);
        }
        for (let ie of Tn) {
          if (signal_2?.aborted) return Pe();
          let Se = await kt(slug_9, ie);
          if (!Se.ok) return m("artifact_publish", Se.reason, k), F(Se.reason === "no-auth" ? Ch(Se.detail) + debris : `upload unavailable: ${Se.reason}. The publish was NOT completed; retry publishing to slug ${slug_9}.`);
          if (Se.status !== 200) {
            let ft = ot(Se);
            if (ft) return F(`${ft.message} \u2014 this publish didn't finish. ` + `Publish again to slug ${slug_9} after the reset.`);
            if (dt(Se)) return yt(Se);
            return m("artifact_publish", Se.fromFrame ? "prepare_upload_failed" : "prepare_upload_relay_error", {
              ...k,
              upload_status: Se.status
            }), F((Se.fromFrame ? `file upload ${Se.status} after the preflight: ${uS(Se.data)}` : `file upload failed after the preflight (relay HTTP ${Se.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${slug_9}.`);
          }
        }
        if (Te.length > 0) {
          if (signal_2?.aborted) return Pe();
          let ie = await kt(slug_9, Te);
          if (!ie.ok) return m("artifact_publish", ie.reason, k), F(ie.reason === "no-auth" ? Ch(ie.detail) + debris : `copying files from another artifact unavailable: ${ie.reason}. The publish was NOT completed; retry publishing to slug ${slug_9}.`);
          if (ie.status !== 200) {
            let Fe = ot(ie);
            if (Fe) return F(`${Fe.message} \u2014 this publish didn't finish. Publish again to slug ${slug_9} after the reset.`);
            if (dt(ie)) return yt(ie, ti(Te.map(({
              c: c_2
            }) => ({
              path: c_2.path,
              fromSlug: c_2.from.slug
            }))));
            let Wt = j && ie.fromFrame && ie.status === 400 && oan(ie.data, "cross_org_ok");
            m("artifact_publish", Wt ? "copy_predates_cross_org" : ie.fromFrame ? "copy_upload_failed" : "copy_upload_relay_error", {
              ...k,
              upload_status: ie.status
            });
            let rt = uS(ie.data),
              nn = /^files\[(\d+)\]: (.*)$/.exec(rt),
              It = nn !== null ? Te[Number(nn[1])]?.c : void 0,
              Cr = nn !== null ? nn[2] : rt,
              copySourceNotFound = ie.fromFrame && It !== void 0 && /not found/.test(Cr) ? It : void 0,
              Ls = " \u2014 the source artifact doesn't exist, this account can't open it, or it can't be copied from (all three get the same answer)";
            if (Wt) return F("copying files from another organization's artifact isn't available on this server yet, so nothing was published. Don't retry the copy. Publish without the copied file instead, or tell the user cross-organization copies aren't supported yet.");
            return {
              ...F((ie.fromFrame ? It !== void 0 ? `copying ${b(It.path)} from artifact ${It.from.slug} (${b(It.from.path)}) was refused (${ie.status}: ${Cr})${copySourceNotFound !== void 0 ? Ls : ""}` : ie.status === 404 ? "the server does not recognize this artifact for staging copied files (it may no longer exist, may not be yours to update, or copying is not enabled on this path)" : `staging the copied files was refused (${ie.status}: ${rt})` : `staging the copied files failed (relay HTTP ${ie.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${slug_9} once the cause is fixed.`),
              ...(copySourceNotFound !== void 0 && {
                copySourceNotFound: copySourceNotFound
              })
            };
          }
          let Se = () => F(`the server staged the copied files but its answer was incomplete, so nothing was published \u2014 retry publishing to slug ${slug_9}.${debris}`),
            ft = ie.data?.files;
          if (!Array.isArray(ft) || ft.length !== Te.length) return m("artifact_publish", "copy_echo_malformed", k), Se();
          for (let [Fe, Wt] of Te.entries()) {
            let rt = ft[Fe];
            if (typeof rt?.sha256 !== "string" || !/^[0-9a-f]{64}$/.test(rt.sha256) || typeof rt.contentType !== "string" || !_n.has(rt.contentType)) return m("artifact_publish", "copy_echo_malformed", k), Se();
            Wt.sha = rt.sha256, Wt.contentType = rt.contentType;
          }
          if (refusedClassSidecarTypes_2 = Te.filter(item => mMr(item.contentType ?? "")).map(item => `${item.c.path} (${item.contentType})`), y.workshopSurface && refusedClassSidecarTypes_2.length > 0) return m("artifact_publish", "copy_refused_sidecar", k), F(`workshop pages cannot ship renderable or executable sidecar files \u2014 each is a URL that bypasses the publish-time verifier: ${cq(refusedClassSidecarTypes_2.join(", "))} (copied). Nothing was published.${debris}`);
          let Nt = Te.filter(item => vhe.has(oD(item.contentType ?? "")));
          if (Nt.length > 0) return m("artifact_publish", "copy_refused_document", k), F(`copied file ${b(Nt[0].c.path)} is ${Nt[0].contentType}: a page, SVG or XML document cannot be copied from another artifact into a publish (its content must pass this tool's checks, which a server-side copy skips) \u2014 read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
          let Pr = Fe => PLt.has(oD(lq(Fe) ?? "")),
            Pn = content_3 === null ? Te.find(item => PLt.has(oD(item.contentType ?? "")) && !Pr(item.c.path) && !Pr(item.c.from.path)) : void 0;
          if (Pn !== void 0) return m("artifact_publish", "copy_refused_script", k), F(`copied file ${b(Pn.c.path)} is ${Pn.contentType}: a script its source stores under a name that does not say so cannot be copied into an artifact made from a type (the approval counted it as data) \u2014 copy it to a path with a script extension, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
        }
        if (signal_2?.aborted) return Pe();
        let Ct = Object.create(null);
        if (Me !== void 0) Ct["index.html"] = Me;
        for (let [ie, Se] of Object.entries(ve)) Ct[ie] = Se;
        for (let ie of Y) Ct[ie.f.path] = {
          sha256: ie.sha,
          contentType: ie.f.contentType
        };
        for (let ie of Te) Ct[ie.c.path] = {
          sha256: ie.sha,
          contentType: ie.contentType
        };
        for (let ie of s) Ct[ie] = null;
        for (let ie of Je) Ct[ie] = {
          live: !1
        };
        let Ye = await $t({
            ...ze,
            slug: slug_9,
            ...(force && {
              force: !0
            }),
            ...(baseVersion_2 && {
              baseVersion: baseVersion_2
            }),
            manifest: De(Ct),
            mode: mode
          }),
          Tr = Ye.ok ? it(Ye.data) : void 0;
        if (Ye.ok && Ye.fromFrame && Ye.status === 422 && ce === 0 && (Tr === "content_pending" || Tr === void 0 && !lr(Ye.data) && !Ts.test(Ft(Ye.data, 300)) && !(Ve.liveKey && typeof Ye.data === "string"))) {
          Ae = uS(Ye.data);
          continue;
        }
        if (Ye.ok && Ye.status === 200 && !Ye.data?.version) return m("artifact_publish", "prepare_no_version", k), F(Xt() + debris);
        q = Ye, oe = !0;
        break;
      }
      if (Te.length > 0 && !oe && !K) return m("artifact_publish", "copy_no_preflight", {
        ...k,
        prepare_status: se?.status ?? 0
      }), F(`copying files from another artifact needs the upload preflight, which was unavailable here (${se?.why ?? "no answer"}) \u2014 nothing was published.${debris}`);
      if (K && !oe) return m("artifact_publish", "prepare_rerun_failed", {
        ...k,
        prepare_status: se?.status ?? 0
      }), F(`the deploy was refused (422: ${Ae}), and re-checking with the server before re-sending failed (${se?.why ?? "no answer"}) \u2014 the publish was NOT ` + `completed. Retry publishing to slug ${slug_9}.`);
    } else if (slug_9 === void 0) {
      if (signal_2?.aborted) return Pe();
      let Y,
        se = "no answer",
        Ae;
      try {
        Y = await we(void 0, []);
      } catch (error) {
        se = uS(error instanceof Error ? error.message : String(error)), Ae = er(error, tele.t0);
      }
      let ce = Y?.ok && Y.status === 200 ? N(Y.data) : void 0;
      if (ce !== void 0) slug_9 = ce, _t(ce);
      if (signal_2?.aborted) return Pe();
      if (ce === void 0) {
        let ge = Y?.ok ? ot(Y) : void 0;
        if (ge) return F(`${ge.message} \u2014 nothing was published; try again after the reset.`);
        if (!Y?.ok || Y.status !== 403 && Y.status !== 404) p("artifact_publish", "reserve_unavailable", {
          ...k,
          reserve_status: Y?.ok ? Y.status : 0,
          ...Ae
        });
        t(`[artifact] could not reserve a slug before publishing (${Y === void 0 ? se : Y.ok ? `HTTP ${Y.status}` : Y.reason}); publishing without one \u2014 the server assigns it`);
      }
    }
    let Be,
      xe = [],
      Ze = {};
    if (!oe && Ee.length > 0 && !slug_9) {
      let manifest = Object.create(null);
      for (let [ce, ge] of Object.entries(Ne)) if (ge !== null && "content" in ge && ge.content !== void 0) manifest[ce] = ge;
      if (signal_2?.aborted) return Pe();
      let se = await $t({
        ...ze,
        ...(force && {
          force: !0
        }),
        manifest: manifest,
        mode: "replace"
      });
      if (!se.ok) return m("artifact_publish", se.reason, k), F(`publish unavailable: ${se.reason}`);
      if (!se.fromFrame) return m("artifact_publish", "relay_error", {
        ...k,
        deploy_status: se.status
      }), F(or(se.status));
      if (se.status === 400 || se.status === 404) {
        let ce = VV(se.data);
        if (se.status === 400 && Ii(ce, Ve)) return m("artifact_publish", "live_files_unsupported", k), F(Ni(ce, Ve.emptyPatch));
        if (se.status === 400 && ur(ce, Ve)) return m("artifact_publish", "ldx_unsupported", k), F(dr(ce));
        if (se.status === 404 || ITe.test(ce) && Ai.test(ce)) return m("artifact_publish", "multifile_unsupported", k), bt(se.status, ce);
      }
      if (se.status !== 200) {
        let ce = cr(se.status, se.data, tele.isRedeploy, tele.echoedPin !== void 0 ? {
          pin: tele.echoedPin,
          declaredCaps: tele.hasCaps
        } : void 0, tele.liveFilesOn === !0, tele.sent, {
          retryAfter: se.response?.headers?.["retry-after"]
        });
        if (ce.code !== "thumbnail_rejected") m("artifact_publish", ce.code ?? "deploy_failed", {
          ...k,
          deploy_status: se.status,
          ...ce.extra
        });
        return ar(ce, `deploy ${se.status}: ${uS(se.data)}`);
      }
      let Ae = sr().safeParse(se.data);
      if (!Ae.success) return m("artifact_publish", "deploy_incomplete", k), F(Xt());
      slug_9 = Ae.data.slug, Z = Ae.data.version, Be = Zn(se.data), xe = Jn(se.data), Ze = {
        contract: Ae.data.contract,
        preferredContract: Ae.data.preferredContract,
        capabilities: Ae.data.capabilities
      }, Ott(y.ownPublishes, slug_9, Z), debris = ` (The artifact was created with its inline files: to add the remaining files, fix the problem and publish again to slug ${slug_9}.)`;
    }
    if (!oe && Ee.length > 0) {
      if (slug_9 === void 0) return m("artifact_publish", "deploy_incomplete", k), F("internal: no slug available for staged upload");
      let Y = new Set();
      for (let Ae of Xe) {
        if (signal_2?.aborted) return Pe();
        let ce = await kt(slug_9, Ae);
        if (!ce.ok) return m("artifact_publish", ce.reason, k), F(`upload unavailable: ${ce.reason}.${debris}`);
        if (ce.status === 404) return m("artifact_publish", "multifile_unsupported", k), bt(404, "", {
          maybeGone: h.slug !== void 0,
          debris: debris
        });
        if (ce.status !== 200) {
          let ge = ot(ce);
          if (ge) return F(`${ge.message} \u2014 try again after the reset.${debris}`);
          if (dt(ce) && Z === void 0) return yt(ce);
          return m("artifact_publish", ce.fromFrame ? "upload_failed" : "upload_relay_error", {
            ...k,
            upload_status: ce.status
          }), F(ce.fromFrame ? `file upload ${ce.status}: ${uS(ce.data)}.${debris}` : `file upload failed (relay HTTP ${ce.status}).${debris}`);
        }
        for (let ge of ce.data?.files ?? []) if (ge.sha256) Y.add(ge.sha256);
      }
      let se = Ee.filter(item => !Y.has(item.sha));
      if (se.length > 0) return m("artifact_publish", "upload_hash_mismatch", k), F(`file upload did not stage ${se.length} file(s) under the ` + "expected content hash \u2014 not publishing a manifest that would " + `reference unstaged content.${debris}`);
    }
    if (!oe && Ee.length > 0 && Z !== void 0) {
      let manifest_2 = Object.create(null);
      for (let se of Ee) {
        let Ae = {
          sha256: se.sha,
          contentType: se.f.contentType
        };
        Ne[se.f.path] = Ae, manifest_2[se.f.path] = Ae;
      }
      if (signal_2?.aborted) return Pe();
      q = await $t({
        ...ze,
        slug: slug_9,
        manifest: manifest_2,
        mode: "patch",
        baseVersion: Z
      });
    } else if (!oe) {
      if (signal_2?.aborted) return Pe();
      q = await $t({
        ...ze,
        ...(slug_9 && {
          slug: slug_9
        }),
        ...(force && {
          force: !0
        }),
        ...(baseVersion_2 && {
          baseVersion: baseVersion_2
        }),
        manifest: De(Ne),
        mode: mode
      });
    }
    if (q === void 0) return m("artifact_publish", "deploy_incomplete", k), F("internal: publish flow completed without a deploy");
    if (!q.ok) return m("artifact_publish", q.reason, k), F((q.reason === "no-auth" ? Ch(q.detail) : `publish unavailable: ${q.reason}`) + debris);
    if (!q.fromFrame) return m("artifact_publish", "relay_error", {
      ...k,
      deploy_status: q.status
    }), F(or(q.status) + debris);
    if (q.status === 400 || q.status === 404) {
      let Y = VV(q.data);
      if (q.status === 400 && Ii(Y, Ve)) return m("artifact_publish", "live_files_unsupported", k), F(Ni(Y, Ve.emptyPatch) + debris);
      if (q.status === 400 && ur(Y, Ve)) return m("artifact_publish", "ldx_unsupported", k), F(dr(Y) + debris);
      let se = q.status === 404 && tele.isRedeploy && XV(q.data);
      if (q.status === 404 && !se || ITe.test(Y) && Ai.test(Y)) return m("artifact_publish", "multifile_unsupported", k), bt(q.status, Y, {
        maybeGone: q.status === 404 && h.slug !== void 0,
        debris: debris
      });
    }
    if ((baseVersion_2 !== void 0 || Z !== void 0 || SL()) && q.status === 409) {
      let conflictDetail_2 = Es(q.data) ?? (if_match_sent ? Ul(q.data, new Set([...Object.keys(Ne), ...r.map(item => item.path)])) : null);
      if (conflictDetail_2) return m("artifact_publish", "conflict", {
        ...k,
        ...(tele.baseRebase !== void 0 && {
          if_match_sent: if_match_sent
        }),
        ...(conflictDetail_2.paths !== void 0 && {
          conflict_reason: c("precondition_failed"),
          conflict_paths: conflictDetail_2.paths.length
        })
      }), {
        url: null,
        slug: null,
        version: null,
        err: (conflictDetail_2.paths !== void 0 ? Hl(conflictDetail_2, conflictDetail_2.paths) : xs(conflictDetail_2)) + debris,
        conflict: !0,
        conflictDetail: conflictDetail_2
      };
    }
    if (q.status !== 200) {
      let Y = cr(q.status, q.data, tele.isRedeploy, tele.echoedPin !== void 0 ? {
        pin: tele.echoedPin,
        declaredCaps: tele.hasCaps
      } : void 0, tele.liveFilesOn === !0, tele.sent, {
        retryAfter: q.response?.headers?.["retry-after"],
        reservedSlug: reservedSlug_2,
        created: reservedSlug_2 === void 0 && debris !== ""
      });
      if (Y.code !== "thumbnail_rejected") m("artifact_publish", Y.code ?? "deploy_failed", {
        ...k,
        deploy_status: q.status,
        ...Y.extra
      });
      let refusedLivePath_2 = Y.code === "path_is_live" ? $s(q.data) : void 0;
      return {
        ...ar(Y, `deploy ${q.status}: ${uS(q.data)}`, Y.code === "rate_limited" && reservedSlug_2 !== void 0 ? "" : debris),
        ...(refusedLivePath_2 !== void 0 && {
          refusedLivePath: refusedLivePath_2
        }),
        ...(h.slug === void 0 && slug_9 !== void 0 && Z !== void 0 && {
          created: {
            slug: slug_9,
            version: Z
          }
        })
      };
    }
    let Qe = sr().safeParse(q.data);
    if (!Qe.success) return m("artifact_publish", "deploy_incomplete", k), F(Xt() + debris);
    let {
      slug: slug_10,
      version: version_2,
      read: read_2,
      shared: shared_2,
      kind: kind_3
    } = Qe.data;
    if (slug_9 && slug_10 !== slug_9) return m("artifact_publish", "deploy_slug_mismatch", k), F(nr() + debris);
    let liveDocs_2 = Qi(q.data),
      livePaths_2 = liveDocs_2?.map(Y => Y.path),
      bornLive_2 = (livePaths_2 ?? []).filter(item => (item === "index.html" ? Me : ve[item])?.live === !0),
      reseeded = (livePaths_2 ?? []).filter(item => (item === "index.html" ? Me : ve[item])?.reseed === !0),
      warnings_3 = L([...xe, ...Jn(q.data), ...es(bornLive_2), ...Yo(reseeded), ...Go(ne.filter(item => item !== "index.html")), ...(Ge ? Wo() : []), ...qo(V, Object.keys(ve).filter(item => ve[item]?.live === !1)), ...ts(livePaths_2?.filter(Y => !ne.includes(Y)), new Set([...Object.keys(Ne), ...r.map(item => item.path)]))]).slice(0, vn),
      Os = ne.includes("index.html"),
      embeds_2 = Zn(q.data) ?? Be,
      pushRemaining_2 = cs(q.response?.headers?.[ls]),
      pushResetAt_2 = ds(q.response?.headers?.date);
    Ott(y.ownPublishes, slug_10, version_2);
    let Ar = ws(Qe.data);
    _("artifact_publish", {
      ...k,
      e2e_ms: Math.round(performance.now() - tele.t0),
      is_redeploy: tele.isRedeploy,
      has_caps: tele.hasCaps,
      push_remaining_seen: pushRemaining_2 !== void 0,
      read_back_echoed: Ar.readBackEchoed === !0,
      staged_files: Ee.length,
      files_omitted: files_omitted,
      publish_path: c(oe ? "preflight" : wt ? "legacy" : "inline"),
      ...(tele.baseRebase !== void 0 && {
        if_match_sent: if_match_sent
      })
    });
    let manifestPaths = content_3 === null ? Ltt(q.data) : void 0;
    return {
      url: Lf(slug_10),
      slug: slug_10,
      version: version_2,
      err: null,
      ...(pushRemaining_2 !== void 0 && {
        pushRemaining: pushRemaining_2,
        pushResetAt: pushResetAt_2
      }),
      ...(y.workshopSurface && {
        workshopSurface: !0
      }),
      ...(y.tele.workshopInfo && {
        workshop: y.tele.workshopInfo
      }),
      ...(refusedClassSidecarTypes_2.length > 0 && {
        refusedClassSidecarTypes: refusedClassSidecarTypes_2
      }),
      ...(read_2 !== void 0 && {
        read: read_2
      }),
      ...(shared_2 !== void 0 && {
        shared: shared_2
      }),
      ...ys(Qe.data, ze.deadline !== void 0),
      ...(gt.deadline && {
        deadlineDropped: !0
      }),
      ...(gt.icon && {
        iconDropped: !0
      }),
      ...vs(Qe.data.contract !== void 0 ? Qe.data : {
        ...Qe.data,
        ...Ze
      }, g),
      ...Ar,
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
      ...(Os && {
        pageCarriedLive: !0
      })
    };
  } catch (error) {
    return m("artifact_publish", error instanceof Bt ? "relay_request_error" : "request_error", {
      ...k,
      ...er(error, tele.t0),
      ...ht
    }), F((error instanceof Error ? error.message : String(error)) + debris);
  }
}
function Lf(e) {
  return new URL(l3n(e), bye() ?? an().CLAUDE_AI_ORIGIN).toString();
}
var iGe = ["mine", "shared"];
function r0n(e) {
  return iGe.includes(e);
}
var XTt = ["mine", "shared", "all"],
  Nl = f(() => u({
    frames: C(ae()).nullable(),
    starsEnabled: M().optional().catch(void 0)
  })),
  Il = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function Fl(e, n) {
  let r = e === "" || typeof e === "string" && lHe.test(e) ? e : void 0,
    shared_3 = n === "" || typeof n === "string" && xA.test(n) ? n : void 0;
  return {
    read: n === void 0 || shared_3 !== void 0 ? r : void 0,
    shared: shared_3
  };
}
var sr = f(() => u({
  slug: o().regex(Bn),
  version: o().regex(xA),
  read: ae().optional(),
  shared: ae().optional(),
  kind: o().regex(lHe).optional().catch(void 0),
  contract: o().regex(gW).optional().catch(void 0),
  preferredContract: o().regex(gW).optional().catch(void 0),
  capabilities: fe(o().max(64), ae()).optional().catch(void 0),
  typeInstance: M().optional().catch(void 0),
  type: ae().optional(),
  ...Ll()
}).transform(({
  read: read_3,
  shared: shared_4,
  ...r
}) => ({
  ...r,
  ...Fl(read_3, shared_4)
})));
function Ll() {
  return {
    seq: E().int().nonnegative().optional().catch(void 0),
    deadline: u({
      until: E().int().positive().max(Ftt)
    }).optional().catch(void 0),
    unchanged: A(!0).optional().catch(void 0),
    replayed: A(!0).optional().catch(void 0)
  };
}
var Ftt = 253402300799999;
function ys(e, n) {
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
function vs(e, n, r = !1) {
  let s = "contract" in n ? n.contract : void 0,
    contract_3 = e.contract ?? s,
    capabilities_5 = e.capabilities,
    y = vL(capabilities_5),
    v = !("capabilities" in n) && y,
    stored = e.contract !== void 0 && (y || SM(e.contract) !== null) ? {
      contract: e.contract,
      ...(capabilities_5 !== void 0 && {
        capabilities: capabilities_5,
        ...(v && (r ? {
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
function ws(e) {
  let typeLock_3 = e.typeInstance === !0 ? MXt(e.type) : void 0;
  return e.typeInstance === !1 || typeLock_3 !== void 0 && (typeLock_3.latest === void 0 || typeLock_3.latest === typeLock_3.current) ? {
    ...(typeLock_3 !== void 0 && {
      typeLock: typeLock_3
    }),
    readBackEchoed: !0
  } : {};
}
var Ml = f(() => u({
    slug: o().regex(Bn),
    title: o().max(4000).optional(),
    favicon: ae().optional(),
    rel: o(),
    updatedAt: o().regex(Il).optional().catch(void 0),
    softDeleted: M().optional(),
    starred: M().optional().catch(void 0)
  })),
  Ti = 200,
  maxContentLength_6 = 4194304;
async function Fgr(e, n) {
  let {
      scope = "mine",
      pins: pins_3 = !1,
      signal: signal_3,
      credentials: credentials_6
    } = n,
    y = scope === "mine" ? void 0 : JOn({
      credentials: credentials_6,
      ...(signal_3 && {
        signal: signal_3
      })
    }),
    v;
  for (let H = 0;; H++) {
    try {
      v = await Ud.get(`/api/frame/frames?limit=${Ti}`, {
        refreshOAuth: !0,
        headers: $d(),
        timeout: 15000,
        maxContentLength: maxContentLength_6,
        ...(signal_3 && {
          signal: signal_3
        }),
        credentials: credentials_6
      });
    } catch (error) {
      if (H === 0 && !signal_3?.aborted) {
        await Q(300 + Math.random() * 500);
        continue;
      }
      if (!signal_3?.aborted) m("artifact_list", "request_error");
      return {
        err: `artifact listing failed: ${l(error)}`,
        reason: "request_error"
      };
    }
    if (v.ok && v.status >= 500 && H === 0 && !signal_3?.aborted) {
      await Q(300 + Math.random() * 500);
      continue;
    }
    break;
  }
  if (!v.ok) return m("artifact_list", "not_ok"), {
    err: v.reason === "no-auth" ? Ch(v.detail) : `artifact listing unavailable: ${v.reason}`,
    reason: "not_ok"
  };
  if (!v.fromFrame) return m("artifact_list", "relay_error"), {
    err: `artifact listing failed (relay HTTP ${v.status})`,
    reason: "relay_error"
  };
  if (v.status < 200 || v.status >= 300) {
    let reason_3 = v.status >= 500 ? "http_5xx" : "http_4xx";
    return m("artifact_list", reason_3), {
      err: `artifact listing failed (HTTP ${v.status})`,
      reason: reason_3
    };
  }
  let w = Nl().safeParse(v.data);
  if (!w.success) return m("artifact_list", "malformed_body"), {
    err: "artifact listing failed: malformed response",
    reason: "malformed_body"
  };
  let S = w.data.frames ?? [],
    pinsEnabled = w.data.starsEnabled === !0,
    rows_2 = [],
    D = new Set(),
    j = 0,
    O = 0;
  for (let H of S) {
    if (rows_2.length >= e) break;
    j++;
    let X = Ml().safeParse(H);
    if (!X.success) {
      O++;
      continue;
    }
    let {
        slug: slug_11,
        title: title_2,
        rel: rel,
        updatedAt: updatedAt,
        softDeleted: softDeleted,
        starred: starred
      } = X.data,
      favicon_2 = m5e(X.data.favicon);
    if (softDeleted === !0 || !r0n(rel)) continue;
    if (scope !== "all" && rel !== scope) continue;
    let title_3 = Rm(title_2 ?? "") ?? "Untitled";
    D.add(slug_11), rows_2.push({
      title: title_3,
      url: Lf(slug_11),
      ...(favicon_2 !== void 0 && rel === "mine" && {
        favicon: favicon_2
      }),
      ...(updatedAt !== void 0 && {
        updatedAt: updatedAt
      }),
      ...(scope !== "mine" && {
        rel: rel
      }),
      ...(pins_3 && pinsEnabled && starred === !0 && {
        pinned: !0
      })
    });
  }
  if (S.length > 0 && rows_2.length === 0 && O === S.length) return m("artifact_list", "all_rows_dropped"), {
    err: "artifact listing failed: response rows were unreadable",
    reason: "all_rows_dropped"
  };
  let V = await y,
    k = !1;
  for (let H of V?.listed ? V.rows : []) {
    if (D.has(H.slug)) continue;
    if (rows_2.length >= e) {
      k = !0;
      break;
    }
    D.add(H.slug), rows_2.push({
      title: Rm(H.title ?? "") ?? "Untitled",
      url: Lf(H.slug),
      rel: "shared",
      external: !0,
      ...(H.role !== void 0 && {
        role: H.role
      })
    });
  }
  if (_("artifact_list"), scope !== "mine") _(scope === "shared" ? "artifact_list_scope_shared" : "artifact_list_scope_all");
  return {
    err: null,
    rows: rows_2,
    truncated: rows_2.length >= e && j < S.length || S.length >= Ti || k,
    ...(pins_3 && {
      pinsEnabled: pinsEnabled
    }),
    ...(V?.listed === !0 && {
      externalListed: !0
    })
  };
}
function $gr(e, n) {
  if (n.err !== null || n.refusedClassSidecarTypes === void 0 || n.refusedClassSidecarTypes.length === 0) return null;
  return {
    ...(e ?? {}),
    [n.slug]: n.refusedClassSidecarTypes
  };
}
function Ugr(e, n) {
  return e?.[n] ?? [];
}
function Bl(e, n) {
  if (e !== void 0 && n === void 0) return {
    kind: "contract",
    err: "workshop publish contract violation: redeploys must pass refusedSidecarHistory (the AppState sidecar record for the target slug; [] when none) \u2014 refusing rather than skipping the sidecar-ordering gate"
  };
  if (n !== void 0 && n.length > 0) return {
    kind: "priors",
    err: `this artifact was previously published with renderable or executable sidecar files (${cq(n.join(", "))}) \u2014 those URLs would remain addressable beside the workshop page. ` + "Publish the workshop to a new artifact, or republish this one without workshop surface."
  };
  return null;
}
function Bgr(e, n) {
  if (n.err !== null || n.workshopSurface !== !0) return null;
  if ((e ?? []).includes(n.slug)) return null;
  return [...(e ?? []), n.slug];
}
var JTt = "conflict: nothing was published \u2014 ";
function xs(e) {
  let {
    readRemedy: readRemedy,
    forceAdvisory: forceAdvisory,
    contentReadsBlocked: contentReadsBlocked
  } = G7();
  return `${JTt}${$tt(e)} is live and this publish was not built on it. ` + (contentReadsBlocked ?? `Re-read it (${readRemedy}), merge your edits on top, then publish again.`) + (e.forceRefused ? Pse : forceAdvisory);
}
function Hl(e, n) {
  if (n.length === 0) return `${JTt}${$tt(e)} changed some of the files this publish writes or removes, but its answer named none of them. List the artifact's files, read each file you are changing that changed, re-apply your change to what it holds now, and publish again.`;
  let r = n.slice(0, 20).map(item => b(item.path)),
    s = n.length - r.length;
  return `${JTt}${$tt(e)} changed ${I(n.length, "a file", "files")} this publish writes or removes: ${r.join(", ")}${s > 0 ? ` and ${s} more` : ""}. Read ${n.length === 1 ? "it" : "each one"} again, re-apply your change to what it holds now, and publish again.`;
}
function $tt(e) {
  return `a newer version (${e.live})` + (e.liveEntry === "page" || e.liveEntry === "editor" ? " saved from inside the page (someone's edits or input on it)" : e.liveEntry === "publish" ? " published by another session or agent" : " published elsewhere (by another session, or by someone saving from the page itself)") + (e.createdAt ? ` at ${e.createdAt}` : "");
}
async function tn(e) {
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
    let h = await hE(e.slug, void 0, e.credentials);
    if (h !== null && "err" in h && Gn(h)) {
      if (await Q(Kn, e.signal), !e.signal?.aborted) h = await hE(e.slug, void 0, e.credentials);
    }
    if (h !== null && "err" in h) return m("artifact_publish", "host_grant_readback_failed", {
      ...s,
      ...pn(h)
    }), {
      ok: !1,
      err: `couldn't read the artifact's stored capability declaration (${h.err}) \u2014 ` + "this computer's local-server grant bounds what a publish carries forward, so this publish cannot proceed without it. This is usually transient: retry." + (e.lane === "page" ? " If the read keeps failing, publish the page declaring the capabilities you intend (capabilities: {} clears the stored declaration) together with contract: 'latest', which needs no read." : "")
    };
    storedCaps_2 = h?.capabilities ?? {};
  }
  return o0n(storedCaps_2, hostGrant_2, e.lane, s);
}
function o0n(storedCaps_3, n, r, s = !1) {
  if (n.kind === "absent") return {
    ok: !0,
    storedCaps: storedCaps_3
  };
  let h = u0n(storedCaps_3, n);
  if (!h.ok) {
    m("artifact_publish", "host_grant_carry_unreadable", {
      ...s,
      host_server_count: h.refused.length
    });
    let g = lR(h.refused, 8, v => `"${Ou(v)}"`),
      y = u0n(storedCaps_3, {
        kind: "granted",
        tools: new Map()
      });
    return {
      ok: !1,
      err: `this computer's local-server grant (${Jgr}) could not be read. It is set by the app that launched this session and is not something to fix from here. The artifact's stored declaration names ` + `local servers \u2014 ${g.join(", ")} \u2014 that a publish declaring nothing ` + "would carry forward, so this publish cannot proceed" + (r === "page" ? ". Declare what to send instead: publish the page with capabilities " + Ci(y.ok ? y.caps : {}, "its local servers") + ", or with capabilities: {} to clear the stored declaration." : Pi(r))
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
    err: "the artifact's stored declaration carries local tools this computer " + `did not grant \u2014 ${Ss(h.dropped)} \u2014 and a publish ` + "that declares nothing would carry them forward, so this publish cannot proceed" + (r === "page" ? ". Declare what to send instead: publish the page with capabilities " + Ci(h.caps, "them") + ", or with capabilities: {} to clear the stored declaration." : Pi(r))
  };
}
function Pi(e) {
  return e === "files" ? " from this session: this artifact's declaration comes from its type and cannot be changed from here." : " from this session: an Artifact made from this type carries its declaration, and that cannot be changed from here.";
}
function Ci(e, n) {
  let r = Sm(b(e), {
    max: 600
  });
  return r.length < 600 ? `set to the stored declaration without ${n}: ${r}` : `set to the stored declaration without ${n} (it is too long to print here)`;
}
async function jgr(e) {
  return tn({
    slug: e.slug,
    hostGrant: Z0e(a.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "files"
  });
}
async function Wgr(e) {
  return tn({
    slug: e.slug,
    hostGrant: Z0e(a.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "page"
  });
}
function Ss(e) {
  return lR(e, 8, n => n.tool === null ? `all of "${Ou(n.server)}"` : `tool "${Ou(n.tool, {
    max: 128
  })}" on "${Ou(n.server)}"`).join("; ");
}
function F(err) {
  return {
    url: null,
    slug: null,
    version: null,
    err: err
  };
}
function xr(e, n) {
  if (e !== 503 || !n || typeof n !== "object" || !("slug" in n) || typeof n.slug !== "string" || !Bn.test(n.slug)) return null;
  return {
    slug: n.slug,
    ...("live" in n && typeof n.live === "string" && xA.test(n.live) && {
      live: n.live
    }),
    ...("kind" in n && typeof n.kind === "string" && lHe.test(n.kind) && {
      kind: n.kind
    })
  };
}
function St(e, n, r, s) {
  if (!n) return e;
  let h = s === "answered" ? ", and the automatic retry did not repair it" : s === "unknown" ? "; the automatic retry was sent but got no answer, so it may or may not have repaired it" : "";
  if (!r) return e.conflict ? e : {
    ...e,
    err: `${e.err} \u2014 the new version was recorded but its content was not stored${h}.`,
    ...(n.live !== void 0 && {
      liveVersion: e.liveVersion ?? n.live
    })
  };
  let g = Lf(n.slug);
  if (n.kind !== void 0) return {
    ...e,
    err: `${e.err} \u2014 the server created ${g} but could not store its content, and that artifact cannot be published over: publishing again creates a new one.`
  };
  return {
    ...e,
    err: e.conflict ? `${e.err} \u2014 ${g} is the artifact this publish's first attempt created without storing its content.` : `${e.err} \u2014 the server created ${g} but could not store its content${h}.`,
    strandedSlug: n.slug,
    ...(!e.conflict && (e.liveVersion ?? n.live) !== void 0 && {
      liveVersion: e.liveVersion ?? n.live
    })
  };
}
function zl(e) {
  return lR(e, 8, s => {
    switch (s.kind) {
      case "not_object":
        return `capabilities.mcp must be an object of the form {"servers": [${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}]} \u2014 not an array, a string, or any other shape; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
      case "no_servers":
        return `capabilities.mcp declares no servers \u2014 put one ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'} entry under "servers" for each connector the page calls; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'} \u2014 an empty "servers" list is refused`;
      case "dynamic_not_boolean":
        return 'capabilities.mcp "dynamic" must be the JSON boolean true (or left out) \u2014 no other value is accepted, a string or a number included; with "dynamic": true the page may call connectors the declaration does not list, and "servers" may then be empty';
      case "entry_shape":
        return `servers[${s.index}] has no "server" string \u2014 each entry is ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}` + (s.wrongKey === null ? "" : ` (the key is "server", not "${Ou(s.wrongKey)}")`);
      case "tools_shape":
        return `${Utt(s.server)} "${Ou(s.server)}": "tools" must be an array of tool-name strings`;
      case "no_tools":
        {
          let h = Ou(s.display ?? s.server),
            g = s.display === null ? "" : ` (declared as "${Ou(s.server)}")`,
            y = s.available.length === 0 ? "" : ` (available this session: ${lR([...s.available], 12, v => `"${Ou(v)}"`).join(", ")})`;
          return `${Utt(s.server)} "${h}"${g} lists no tools \u2014 set "tools" to the upstream names of the "${h}" tools the page calls${y}; an empty or omitted "tools" list is refused and never means "all tools"`;
        }
      case "unknown_tools":
        {
          let h = Ou(s.display ?? s.server),
            g = s.display === null ? "" : ` (declared as "${Ou(s.server)}")`,
            y = lR([...s.unknown], 8, w => `"${Ou(w)}"`),
            v = s.available.length === 0 ? " (none it lists this session fits the manifest grammar)" : `, here: ${lR([...s.available], 12, w => `"${Ou(w)}"`).join(", ")}`;
          return `${Utt(s.server)} "${h}"${g} has no ${I(s.unknown.length, "tool")} named ${y.join(", ")} in this session \u2014 "tools" takes that connector's own top-level tool names${v}; if this connector fronts other tools through its own search/execute tools (an MCP gateway), declare those and have the page reach the inner ones through them. The control plane would accept this manifest, but the page's calls would fail for viewers of this connector`;
        }
      case "opaque_id":
        return `"${Ou(s.server, {
          max: 70
        })}" is a connector id, which no viewer can resolve \u2014 set "server" to that connector's name exactly as shown in claude.ai (Settings \u2192 Connectors) and pass the same name to callTool/watchTool in the page; if you don't know the name, ask the user, describing the connector by its tools (the user cannot see the id)`;
      case "known_id":
        {
          let h = Ou(s.display);
          return `"${Ou(s.server)}" is the id of connector "${h}" \u2014 set "server" to "${h}": approval prompts and viewers know connectors by name only, and the page must call it by that name too`;
        }
      case "tool_name":
        return `"${Ou(s.server, {
          max: 70
        })}" is a tool name, not a connector name \u2014 "server" takes the connector's display name` + (s.display === null ? "" : `, here "${Ou(s.display)}"`) + ', and "tools" takes the bare upstream tool names';
      case "connector_as_host":
        {
          let h = Ou(s.display);
          return `"${Ou(s.server, {
            max: 70
          })}" names the claude.ai connector "${h}", not a local server \u2014 declare it as {"server": "${h}", "tools": [...]} and call it by that name in the page`;
        }
      case "local_server_as_first_party":
        {
          let h = Ou(s.local);
          return `"${Ou(s.server, {
            max: 70
          })}" would bind the Claude app's own built-in server, but this session also has an MCP server named "${h}" \u2014 the page may have been built against that server, which no viewer can reach; rename or remove "${h}" (or drop the declaration) and publish again`;
        }
      case "undeclarable_name":
        return `connector "${$Xt(s.name)}" cannot be declared until it is renamed in claude.ai (Settings \u2192 Connectors): a manifest "server" must be 1\u201364 characters with no control characters, line breaks, unusual spaces or text-direction controls, must not begin or end with a space or invisible character, and must not read as host: or be shaped like an id or a claude_ai_/mcp__ prefix \u2014 tell the user`;
      case "host_unavailable":
        return `"${Ou(s.server, {
          max: 70
        })}" names a locally-configured MCP server, and host servers aren't available in this session \u2014 declare only claude.ai connectors (set "server" to the connector's display name), or ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
    }
  });
}
function ar(e, n, r = "") {
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
function Es(e) {
  return it(e) === void 0 ? Rs(e) : null;
}
function Ul(e, n) {
  if (it(e) !== "precondition_failed") return null;
  let r = Rs(e);
  if (r === null) return null;
  let s = typeof e === "object" && e !== null && "paths" in e ? e.paths : void 0,
    paths = [];
  for (let g of Array.isArray(s) ? s : []) {
    let y = Vl().safeParse(g);
    if (y.success && n.has(y.data.path)) paths.push(y.data);
  }
  return {
    ...r,
    paths: paths
  };
}
var Vl = f(() => u({
  path: o(),
  expected: o().regex(/^[0-9a-f]{64}$/).nullable(),
  actual: o().regex(/^[0-9a-f]{64}$/).nullable()
}));
function Rs(e) {
  if (!e || typeof e !== "object" || !("conflict" in e) || e.conflict !== !0 || !("live" in e) || typeof e.live !== "string" || !ON.test(e.live)) return null;
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
function z7(e) {
  if (e && typeof e === "object" && "error" in e && typeof e.error === "string" && "reason" in e && typeof e.reason === "string") return {
    error: e.error,
    reason: e.reason
  };
  return null;
}
var QTt = "publish denied: ",
  Wl = ["compliance_restricted", "org_mismatch", "org_toggle_disabled", "summon_foreign_sender", "user_entitlement_denied", "write_gate_disabled"],
  Yl = ["acl_unsupported", "artifact_limit_reached", "audience_conflict", "auto_edit_refused", "bad_json", "capability_refused", "cas_link_refused", "cmek_key_disabled", "content_pending", "content_refused", "content_too_large", "contract_refused", "credential_required", "database_org_cap", "database_too_large", "embeds_too_large", "external_sharing_disabled", "group_grant_forbidden", "instance_dup_unavailable", "instance_locked", "invalid_request", "invalid_slug", "live_doc", "live_over_budget", "live_path_cap", "live_path_delete", "live_refused", "multi_file_unavailable", "never_published", "not_found", "not_owner", "one_live_path", "origin_required", "owner_mode_only", "patch_no_base", "path_is_live", "pin_unsupported", "provision_conflict", "public_mode_disabled", "publish_settling", "rate_limited", "read_mode_refused", "read_timeout", "render_busy", "render_embeds_container", "render_over_budget", "render_unavailable", "soft_deleted", "soft_deleted_swept", "source_refused", "title_invalid", "too_many_concurrent", "type_cap_unavailable", "type_cross_org", "type_instances_off", "type_is_instance", "type_no_release", "type_single_file", "unknown_version", "write_conflict"];
function As(e) {
  let n = it(e),
    r = Yl.find(item => item === n);
  return r ? {
    refusal_reason: c(r)
  } : {};
}
function Ft(e, n) {
  let r = typeof e === "string" ? e.trimEnd().replace(regExp_8, "") : z7(e)?.error ?? VV(e);
  return L1(r, n);
}
var ks = /^capabilities\.([a-z][a-z0-9_]*)(?=[:. ])/;
function $i(e) {
  return /^contract[ :]/.test(e);
}
var ql = / is newer than the preferred /,
  Ts = /the artifact's type|built from an artifact type/,
  Gl = {
    capNames: [],
    hostDecl: !1
  };
function Ps(e) {
  return Dn(ri(oh(e.retryAfter)), e.reservedSlug !== void 0 ? Lf(e.reservedSlug) : void 0, e.refusedStep);
}
function Cs(e, n) {
  let r = it(n);
  return e === 429 && Lt(n) === void 0 && (r === "rate_limited" || r === "too_many_concurrent");
}
function Gt(e, n) {
  return /[.!?]$/.test(e) ? `${e} ${n}` : `${e}. ${n}`;
}
function Oi(e, n) {
  let r = ks.exec(e)?.[1];
  if (r === void 0) return "Nothing was published; correct the declaration as described and publish again.";
  if (/: unavailable$/.test(e)) {
    if (!n.capNames.includes(r)) return `Nothing was published; an earlier version declares capabilities.${r}, it is not available to this account now, and a declaration that drops it cannot be stored \u2014 publish without a capabilities block to keep the stored set, or tell the user.`;
    return r === "mcp" && n.hostDecl ? "Nothing was published; the connectors declaration names locally-configured (host:) MCP servers, which this session cannot publish \u2014 declare only claude.ai connectors, or publish a version that does not call them." : `Nothing was published; capabilities.${r} is not available to this account here \u2014 publish a version that does not use it instead of retrying the same declaration.`;
  }
  if (e.includes("part of the runtime")) return `Nothing was published; drop capabilities.${r} \u2014 the runtime provides it without a declaration.`;
  return `Nothing was published; correct capabilities.${r} as described and publish again.`;
}
var Kl = "Nothing was published. Only the artifact's owner can change who it is shared with (in its share settings on claude.ai), not this session \u2014 if the page can do without what the message names, publish a version without it; otherwise tell the user.",
  msg_3 = "the artifact you're updating was deleted, or you no longer have write access to it";
function or(e) {
  return jt(`relay HTTP ${e}`);
}
var s0n = "publish outcome unknown (";
function jt(e) {
  return `${s0n}${e}) \u2014 it may have published; check the artifact list before publishing again`;
}
var ZTt = "this file belongs to the artifact's type and can't be changed here";
function lr(e) {
  return VV(e).includes(ZTt);
}
var Xl = " \u2014 this Artifact was created from an Artifact type: its page (index.html) and the type's other files can't be changed on it. Publish only its own files (`file_path` naming one, more in `files`, with this `url`); to change the page, publish a new Artifact instead.";
function cr(e, n, r, s, h = !1, g = Gl, y = {}) {
  let v = Jl(e, n, r, s, h, g, y),
    w = As(n);
  return w.refusal_reason === void 0 ? v : {
    ...v,
    extra: {
      ...v.extra,
      ...w
    }
  };
}
function Jl(e, n, r, s, h, g, y) {
  let v = Ql(e, n, h);
  if (v !== void 0) return v;
  let w = it(n);
  if (e === 400) {
    let T = VV(n);
    if (/^thumbnail/i.test(T.trimStart()) || ITe.test(T) && /["']thumbnail(?:_dark)?["']/.test(T)) return {
      code: "thumbnail_rejected",
      msg: `deploy 400: ${uS(n)}`
    };
  }
  if (xr(e, n)) return {
    code: "publish_stranded"
  };
  if (e === 409 && w === "publish_settling") return {
    code: "publish_settling",
    msg: jt("the first attempt reached claude.ai and its content is still being stored")
  };
  if (e === 422 && it(n) === "deadline_invalid") return {
    code: "deadline_invalid"
  };
  let S = e === 422 ? Ft(n, 300) : "";
  if (e === 422 && (w === "instance_locked" || lr(n) || Ts.test(S))) {
    let T = (lr(n) || S.includes("publish its files with a manifest")) && ee().frozenArtifactTypes?.typesOn ? Xl : "";
    return {
      code: "type_locked",
      msg: `deploy 422: ${S}${T}`
    };
  }
  if (e === 422 && w === "audience_conflict") return {
    code: "audience_conflict",
    msg: `deploy 422: ${Gt(S, Kl)}`
  };
  if (e === 422 && w === "capability_refused") {
    let T = Ft(n, 1500).split(/; (?=capabilities[.: ]|\d+ more\b)/).filter(Boolean),
      P = T.length > 1 && /^\d+ more\b/.test(T.at(-1)) ? T.pop() : void 0;
    if (T.length <= 1 && P === void 0) return {
      code: "capability_refused",
      msg: `deploy 422: ${Gt(S, Oi(S, g))}`
    };
    let D = "",
      j = 0;
    for (let k of T) {
      let H = D === "" ? k : `${D}; ${k}`;
      if (H.length > 600 && j > 0) break;
      D = H, j++;
    }
    let O = [T.length > j ? `${T.length - j} more not shown` : "", P ?? ""].filter(Boolean),
      V = L(T.filter(item => /: unavailable$/.test(item) && !g.capNames.includes(ks.exec(item)?.[1] ?? "") || item.startsWith("capabilities.mcp: unavailable") && g.hostDecl).map(item => Oi(item, g).replace(/^Nothing was published; /, "")));
    return {
      code: "capability_refused",
      msg: `deploy 422: ${Gt([D, ...O].join("; "), ["Nothing was published; fix each capabilities entry named \u2014 drop the unavailable ones, correct the others as described \u2014 and publish again.", ...V].join(" Also: "))}`
    };
  }
  if (e === 422 && s === void 0 && g.latestContract === !0 && (w === "contract_refused" || w === void 0 && $i(S)) && ql.test(S)) return {
    code: "contract_rollout",
    msg: `deploy 422: ${Gt(S, jn)}`
  };
  if (e === 422 && s !== void 0 && (w === "contract_refused" || w === void 0 && $i(S))) return {
    code: "contract_echo_rejected",
    extra: {
      echo_declared_caps: s.declaredCaps
    },
    msg: `deploy ${e}: ${Ft(n, 200)} \u2014 this republish echoed the artifact's stored ` + `contract pin (${s.pin}) and nothing was published. If the reason above says the pin was yanked, pass contract: 'latest' to move the artifact to the current contract (this changes the page's runtime semantics); otherwise tell the user what the service said.`
  };
  if (e === 403 && w === "not_owner") return {
    code: "publish_denied",
    msg: `${QTt}this account can open the artifact but is not allowed to publish to it \u2014 nothing was published; ask its owner for edit access, or publish it as a new artifact (omit \`url\`).`
  };
  if (e === 403 && w !== "credential_required") {
    let T = z7(n);
    if (T) {
      let P = Wl.find(item => item === T.reason),
        deny_reason = P ? c(P) : void 0;
      return {
        code: "publish_denied",
        ...(deny_reason && {
          extra: {
            deny_reason: deny_reason
          }
        }),
        msg: QTt + L1(T.error, 300)
      };
    }
  }
  if (e === 404 && r && XV(n)) return {
    code: "slug_gone",
    msg: msg_3
  };
  if (e === 429) {
    let T = Lt(n);
    if (T) return {
      code: "publish_cap_reached",
      extra: {
        cap_type: c(T.capType)
      },
      msg: `${T.message} \u2014 try again after the reset.`
    };
    if (Cs(e, n) && y.created !== !0) return {
      code: "rate_limited",
      msg: Ps(y)
    };
  }
  if (e === 408 && w === "read_timeout") return {
    msg: `deploy 408: ${Gt(Ft(n, 200), "Nothing was published; the server stopped waiting for the upload \u2014 retry once.")}`
  };
  return {};
}
function it(e) {
  if (typeof e === "string") return regExp_8.exec(e.trimEnd())?.[1];
  if (e === null || typeof e !== "object" || !("reason" in e)) return;
  let reason_4 = e.reason;
  return typeof reason_4 === "string" && lHe.test(reason_4) ? reason_4 : void 0;
}
var regExp_8 = new RegExp(` \\[(${BRo})\\]$`);
function $s(e) {
  if (e === null || typeof e !== "object" || !("path" in e)) return;
  let n = e.path;
  return typeof n === "string" && qt.test(n) ? n : void 0;
}
function Zl(e) {
  if (e === null || typeof e !== "object" || !("max" in e)) return;
  let n = e.max;
  return typeof n === "number" && Number.isSafeInteger(n) && n > 0 ? n : void 0;
}
function Ql(e, n, r) {
  let s = it(n);
  if (e === 409 && s === "path_is_live") return {
    code: "path_is_live",
    msg: `deploy 409: ${uS(n)}`
  };
  if (e === 422 && s === "one_live_path") return {
    code: "one_live_path",
    msg: `deploy 422: ${uS(n)}`
  };
  if (e === 422 && s === "live_path_cap") {
    let h = Zl(n);
    return {
      code: "live_path_cap",
      msg: `deploy 422: ${uS(n)}`
    };
  }
  if (e === 422 && s === "live_path_delete") return {
    code: "live_path_delete",
    msg: `deploy 422: ${uS(n)}`
  };
  if (e === 422 && s === "render_over_budget") return {
    code: "live_over_budget",
    msg: `deploy 422: ${uS(n)}`
  };
  if (e === 422 && s === "render_unavailable") return {
    code: "render_unavailable",
    msg: `deploy 422: ${uS(n)}`
  };
  if (e === 422 && s === "live_over_budget") return {
    code: "live_over_budget",
    msg: typeof n === "string" ? `deploy 422: ${L1(n.trimEnd().replace(regExp_8, ""), 500)}` : `deploy 422: ${Ft(n, 500)}`
  };
  if (e === 422 && typeof n === "string" && ec.test(n)) return {
    code: "live_over_budget",
    msg: `deploy 422: ${L1(n, 500)}`
  };
  if (e === 503 && s === "render_busy") return {
    code: "render_busy",
    msg: `deploy 503: ${uS(n)}`
  };
  return;
}
var ec = /exceeds the live-editing budget/;
function Ni(e, n) {
  return `deploy 400: ${L1(e, 200)}`;
}
function dr(e) {
  return `deploy 400: ${L1(e, 200)}`;
}
function ur(e, n) {
  return !1;
}
function Ii(e, n) {
  return n.liveKey && $l.test(e) || n.emptyPatch && Ol.test(e);
}
function uS(e) {
  return L1(VV(e), 200);
}
export { AO, Pse, MTt, DTt, pgr, slo, WOn, kXt, ilo, alo, xtt, zOn, sha256 as fgr, Ptt, id as LTt, GOn, NTt, HTt, FTt, $Tt, mgr, UTt, q0e, EXt, oGe, llo, id_2 as VOn, sha256_2 as ggr, TXt, id_3 as Itt, sha256_3 as CXt, K0e, BTt, tfe, clo, RXt, xA, hgr, t3o, Ott, I4, ygr, _gr, qOn, KOn, YOn, Y0e, Mtt, dlo, XOn, AXt, ulo, Yu, plo, jTt, BU, El, flo, bgr, xXt, JOn, O4, nu, SL, sGe, zwe, PA, Gwe, Sgr, wgr, vgr, U7, B7, Dtt, xG, y8, kgr, Egr, j7, Ise, wL, WTt, W7, Vwe, zTt, M4, Tgr, Cgr, PXt, Rgr, Agr, IXt, OXt, Ltt, MXt, GTt, qwe, QOn, VTt, qTt, Ose, KTt, xgr, DXt, hE, regExp_7 as Pgr, LXt, YTt, Igr, Ogr, Mgr, Dgr, ZOn, e0n, Ntt, Mse, Dse, t0n, PG, Htt, n0n, NXt, Lgr, Ngr, Hgr, Lf, iGe, r0n, XTt, Ftt, Fgr, $gr, Ugr, Bgr, JTt, $tt, o0n, jgr, Wgr, z7, QTt, msg_3 as X0e, s0n, ZTt, uS };