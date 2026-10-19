// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe, ws, hk } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { _, J, l1r, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, nt, Sr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { sc } from "B:/~BUN/root/chunk-bgdxazfn.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, d, k, Fr, Tg, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import { F, L, ui as model, j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { Gd as clock_4, Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z, jn, r_, Ry } from "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { tu } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import { Hp, wy, a, or } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Whe, F5 } from "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { pQ } from "B:/~BUN/root/chunk-yw21pggd.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import { UW, lt, ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-2zk4vqr8.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import { VB, xA, vXn, ns, lDe, kXn, An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { wd } from "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import { vd } from "B:/~BUN/root/chunk-j8w5f307.js";
import { rn as formatDelay } from "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-k9zm82w3.js";
import { ur, SZe, _mn, PA, ro } from "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-fvn1tqbf.js";
import { Gas, lRt, y3t, xOn, bur, POn, OOn, _3t, b3t, I1, gAe, Vas, Eto, qas, Sur, wur, IOn, Tto, Cto, MOn, vur, kur, S3t, Rto, Ato, Kas, Yas, Xas, DOn } from "B:/~BUN/root/chunk-2xrpx96h.js";
import { iL, Wze, ra, wb } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { Ji } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-gyr2a6wz.js";
import "B:/~BUN/root/chunk-ejm0pmyj.js";
import "B:/~BUN/root/chunk-5ygt6t95.js";
import "B:/~BUN/root/chunk-we0fhavr.js";
import "B:/~BUN/root/chunk-a3eqgdv2.js";
import { a0e, l0e, cTe, bf } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import "B:/~BUN/root/chunk-6a9s3k2y.js";
import "B:/~BUN/root/chunk-7c8rc0p5.js";
import "B:/~BUN/root/chunk-8z3a373v.js";
import "B:/~BUN/root/chunk-x50ytcx8.js";
import { Q_t } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { zn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import "B:/~BUN/root/chunk-k8003a0x.js";
import "B:/~BUN/root/chunk-1gpjpba6.js";
import "B:/~BUN/root/chunk-9kme2ye7.js";
import "B:/~BUN/root/chunk-8pmnanyd.js";
import "B:/~BUN/root/chunk-4sfz9tbn.js";
import "B:/~BUN/root/chunk-4qqgabd5.js";
import { dt, Kt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import "B:/~BUN/root/chunk-28dw3zbk.js";
import "B:/~BUN/root/chunk-245a2x6v.js";
import "B:/~BUN/root/chunk-q4sexgb0.js";
import "B:/~BUN/root/chunk-vr6ev6st.js";
import "B:/~BUN/root/chunk-pej55jax.js";
import "B:/~BUN/root/chunk-8w42v0dp.js";
import "B:/~BUN/root/chunk-53tmhe2j.js";
import { Uh, ad } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import "B:/~BUN/root/chunk-m3q01n4y.js";
import "B:/~BUN/root/chunk-mndtcf0c.js";
import "B:/~BUN/root/chunk-rfp1pa77.js";
import "B:/~BUN/root/chunk-h9p45fg5.js";
import "B:/~BUN/root/chunk-jkv8n5r0.js";
import "B:/~BUN/root/chunk-htbmes7q.js";
import "B:/~BUN/root/chunk-v6pbq6dm.js";
import "B:/~BUN/root/chunk-41gwd5bj.js";
import "B:/~BUN/root/chunk-s6czymtt.js";
import "B:/~BUN/root/chunk-236sa1fp.js";
import "B:/~BUN/root/chunk-m94tqsvv.js";
import "B:/~BUN/root/chunk-cx57tr4b.js";
import "B:/~BUN/root/chunk-hvvs3ef6.js";
import "B:/~BUN/root/chunk-qp0344nb.js";
import "B:/~BUN/root/chunk-k2ekj8re.js";
import "B:/~BUN/root/chunk-e4q58xft.js";
import "B:/~BUN/root/chunk-8v3gkznb.js";
import "B:/~BUN/root/chunk-bsjrnca2.js";
import "B:/~BUN/root/chunk-5g9fghtv.js";
import "B:/~BUN/root/chunk-57vwkt3t.js";
import "B:/~BUN/root/chunk-qp2jnaqy.js";
import "B:/~BUN/root/chunk-z1p6g436.js";
import { oYe, tHe, Y9t, xxt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { mXe } from "B:/~BUN/root/chunk-zayh6xmh.js";
import "B:/~BUN/root/chunk-7fsmvr58.js";
import "B:/~BUN/root/chunk-z8fd2x5s.js";
import "B:/~BUN/root/chunk-8y0chnnr.js";
import "B:/~BUN/root/chunk-dq7zfs8r.js";
import "B:/~BUN/root/chunk-gy660jgx.js";
import "B:/~BUN/root/chunk-pmw6knpp.js";
import "B:/~BUN/root/chunk-429xgjya.js";
import "B:/~BUN/root/chunk-j4qesy5s.js";
import "B:/~BUN/root/chunk-7qeqkjr8.js";
import "B:/~BUN/root/chunk-ks7h6f0s.js";
import "B:/~BUN/root/chunk-bn7mrnb3.js";
import "B:/~BUN/root/chunk-3d7bmmrg.js";
import "B:/~BUN/root/chunk-7ybsx93y.js";
import "B:/~BUN/root/chunk-d69870x4.js";
import "B:/~BUN/root/chunk-t78esase.js";
import "B:/~BUN/root/chunk-x73fxyt1.js";
import "B:/~BUN/root/chunk-h6hab5w2.js";
import "B:/~BUN/root/chunk-vm7ta03q.js";
import "B:/~BUN/root/chunk-25j8tcak.js";
import "B:/~BUN/root/chunk-j2ppas05.js";
import "B:/~BUN/root/chunk-9080897a.js";
import { eke } from "B:/~BUN/root/chunk-c44qc88s.js";
import "B:/~BUN/root/chunk-vfmvkxsr.js";
import { IM } from "B:/~BUN/root/chunk-tqyz3ejx.js";
import { hi } from "B:/~BUN/root/chunk-h1tq8zce.js";
import "B:/~BUN/root/chunk-2fccb5hn.js";
import { em, YOe } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import "B:/~BUN/root/chunk-0n2201tc.js";
import "B:/~BUN/root/chunk-q3srk2wz.js";
import "B:/~BUN/root/chunk-nvdqbkrt.js";
import "B:/~BUN/root/chunk-efcxwmhb.js";
import "B:/~BUN/root/chunk-d544j3ga.js";
import { SD, Zf, cVn, RNt, Dj, $9e, uVn, Lj, D1e } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { MPr } from "B:/~BUN/root/chunk-472kxa0t.js";
import "B:/~BUN/root/chunk-qk52d0gf.js";
import "B:/~BUN/root/chunk-ggdk44cm.js";
import "B:/~BUN/root/chunk-z84amwaw.js";
import "B:/~BUN/root/chunk-mgb2hezz.js";
import "B:/~BUN/root/chunk-x4gdh7dq.js";
import "B:/~BUN/root/chunk-f25646gd.js";
import "B:/~BUN/root/chunk-e7tskyjv.js";
import "B:/~BUN/root/chunk-cvj1wxdh.js";
import "B:/~BUN/root/chunk-9w4ppz44.js";
import "B:/~BUN/root/chunk-v1j2tw52.js";
import "B:/~BUN/root/chunk-gjdk1btq.js";
import "B:/~BUN/root/chunk-e3hz52nd.js";
import "B:/~BUN/root/chunk-ses0c36n.js";
import "B:/~BUN/root/chunk-2zdc0br5.js";
import "B:/~BUN/root/chunk-7j5tvnqj.js";
import "B:/~BUN/root/chunk-bp7zxkzq.js";
import "B:/~BUN/root/chunk-k382hx6g.js";
import "B:/~BUN/root/chunk-cw2ph5fw.js";
import "B:/~BUN/root/chunk-fb07w30y.js";
import "B:/~BUN/root/chunk-yjayxywk.js";
import "B:/~BUN/root/chunk-t3p4x0tq.js";
import { ree, yBn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import "B:/~BUN/root/chunk-rx39nt6a.js";
import "B:/~BUN/root/chunk-19m6yp46.js";
import "B:/~BUN/root/chunk-vqar0j99.js";
import "B:/~BUN/root/chunk-tsyp86a9.js";
import "B:/~BUN/root/chunk-pwz0pnkt.js";
import "B:/~BUN/root/chunk-c8j3aby6.js";
import "B:/~BUN/root/chunk-9tkh434c.js";
import { yl } from "B:/~BUN/root/chunk-1xwk1cwp.js";
import "B:/~BUN/root/chunk-r9swysv9.js";
import "B:/~BUN/root/chunk-3tj0rd0x.js";
import "B:/~BUN/root/chunk-j97yjp75.js";
import "B:/~BUN/root/chunk-vd11ggb1.js";
import "B:/~BUN/root/chunk-r81hcemr.js";
import "B:/~BUN/root/chunk-q0t5e1bx.js";
import { $g } from "B:/~BUN/root/chunk-f0ytfwhx.js";
import { kDt, Aee, sAr, iAr } from "B:/~BUN/root/chunk-r0jnxjth.js";
import "B:/~BUN/root/chunk-7qatwz9y.js";
import "B:/~BUN/root/chunk-b0vcwsh9.js";
import "B:/~BUN/root/chunk-r4y1700s.js";
import "B:/~BUN/root/chunk-hcz3kjms.js";
import "B:/~BUN/root/chunk-0m6vvjrw.js";
import "B:/~BUN/root/chunk-183sjefx.js";
import "B:/~BUN/root/chunk-hkh6hras.js";
import "B:/~BUN/root/chunk-vttg4n7q.js";
import "B:/~BUN/root/chunk-7gwemd3j.js";
import "B:/~BUN/root/chunk-h2myanpn.js";
import "B:/~BUN/root/chunk-1fjjnb3f.js";
import "B:/~BUN/root/chunk-r1z1wgpe.js";
import "B:/~BUN/root/chunk-mtfk0qfd.js";
import "B:/~BUN/root/chunk-6vykeeak.js";
import "B:/~BUN/root/chunk-9tx73f8x.js";
import "B:/~BUN/root/chunk-p4t63p2q.js";
import "B:/~BUN/root/chunk-tkcgmvh7.js";
import "B:/~BUN/root/chunk-01qdq3qc.js";
import "B:/~BUN/root/chunk-s6jt7ap6.js";
import "B:/~BUN/root/chunk-8gzvb73z.js";
import "B:/~BUN/root/chunk-72n790j1.js";
import "B:/~BUN/root/chunk-2vhqkymb.js";
import "B:/~BUN/root/chunk-nz6ywek4.js";
import "B:/~BUN/root/chunk-vnmfp48d.js";
import "B:/~BUN/root/chunk-1s3ejbv6.js";
import "B:/~BUN/root/chunk-qegjq8ky.js";
import "B:/~BUN/root/chunk-ervhay8x.js";
import "B:/~BUN/root/chunk-t63e78w2.js";
import "B:/~BUN/root/chunk-66hg7026.js";
import "B:/~BUN/root/chunk-gt1x0gdb.js";
import "B:/~BUN/root/chunk-ydtn2zrk.js";
import "B:/~BUN/root/chunk-2vz2n6bw.js";
import "B:/~BUN/root/chunk-4zxf96ry.js";
import "B:/~BUN/root/chunk-wje8pvrc.js";
import "B:/~BUN/root/chunk-7h4t08m3.js";
import "B:/~BUN/root/chunk-nw686kdq.js";
import "B:/~BUN/root/chunk-w2mafqxc.js";
import "B:/~BUN/root/chunk-pm2vnc51.js";
import "B:/~BUN/root/chunk-rhpppw15.js";
import "B:/~BUN/root/chunk-q5ca2nsw.js";
import "B:/~BUN/root/chunk-0x8xex6w.js";
import "B:/~BUN/root/chunk-p64g0hj8.js";
import "B:/~BUN/root/chunk-0p489043.js";
import "B:/~BUN/root/chunk-9y4mcm7b.js";
import "B:/~BUN/root/chunk-m3ka5wpr.js";
import "B:/~BUN/root/chunk-c0j3f8cc.js";
import "B:/~BUN/root/chunk-w6et565n.js";
import "B:/~BUN/root/chunk-4mz5gtvt.js";
import "B:/~BUN/root/chunk-b0envsq0.js";
import "B:/~BUN/root/chunk-qdaqzk6w.js";
import "B:/~BUN/root/chunk-7z3ndmqr.js";
import "B:/~BUN/root/chunk-aqd86p9a.js";
import "B:/~BUN/root/chunk-m42n0wc9.js";
import "B:/~BUN/root/chunk-74f4ssah.js";
import "B:/~BUN/root/chunk-m1mbrj05.js";
import "B:/~BUN/root/chunk-jwh3r245.js";
import "B:/~BUN/root/chunk-tkkhtfwq.js";
import "B:/~BUN/root/chunk-n0e205s6.js";
import "B:/~BUN/root/chunk-351qj2sm.js";
import "B:/~BUN/root/chunk-3m56hntj.js";
import "B:/~BUN/root/chunk-00v9f07q.js";
import "B:/~BUN/root/chunk-gk5jpppj.js";
import "B:/~BUN/root/chunk-yq5myw2y.js";
import "B:/~BUN/root/chunk-qj8q07z1.js";
import "B:/~BUN/root/chunk-8zz6429p.js";
import "B:/~BUN/root/chunk-pbq7kcha.js";
import "B:/~BUN/root/chunk-1g2t7gtx.js";
import "B:/~BUN/root/chunk-8pqw0dhk.js";
import "B:/~BUN/root/chunk-bvhc5fp3.js";
import "B:/~BUN/root/chunk-raq9cfnw.js";
import "B:/~BUN/root/chunk-8d9x5cx1.js";
import "B:/~BUN/root/chunk-rnh5g2g4.js";
import "B:/~BUN/root/chunk-arcgcnq8.js";
import "B:/~BUN/root/chunk-maccjk0y.js";
import "B:/~BUN/root/chunk-gygbhz84.js";
import "B:/~BUN/root/chunk-5y3z8s12.js";
import "B:/~BUN/root/chunk-6s78sa1b.js";
import "B:/~BUN/root/chunk-78zw0pmb.js";
import "B:/~BUN/root/chunk-89m6ef17.js";
import "B:/~BUN/root/chunk-dbpgrm5a.js";
import "B:/~BUN/root/chunk-kcbxq7ta.js";
import "B:/~BUN/root/chunk-hjwx01fc.js";
import "B:/~BUN/root/chunk-703q5f7c.js";
import "B:/~BUN/root/chunk-fvbmxrbm.js";
import "B:/~BUN/root/chunk-5ec3ghdy.js";
import "B:/~BUN/root/chunk-p7n9drc0.js";
import "B:/~BUN/root/chunk-f06s8ws5.js";
import "B:/~BUN/root/chunk-5vcgesja.js";
import "B:/~BUN/root/chunk-s81ha78q.js";
import "B:/~BUN/root/chunk-esg2vqtm.js";
import "B:/~BUN/root/chunk-k8twyg23.js";
import "B:/~BUN/root/chunk-0sbppzkc.js";
import "B:/~BUN/root/chunk-3thbj98m.js";
import "B:/~BUN/root/chunk-ewwghe6s.js";
import "B:/~BUN/root/chunk-c1tegkb3.js";
import "B:/~BUN/root/chunk-nj6es8gv.js";
import "B:/~BUN/root/chunk-3d6wa55r.js";
import "B:/~BUN/root/chunk-xyxdcn7p.js";
import "B:/~BUN/root/chunk-2wpqgvtg.js";
import "B:/~BUN/root/chunk-xf25v2pj.js";
import "B:/~BUN/root/chunk-2ppwmg0p.js";
import "B:/~BUN/root/chunk-ks90p42g.js";
import "B:/~BUN/root/chunk-nq10jsxs.js";
import "B:/~BUN/root/chunk-45m7jrth.js";
import "B:/~BUN/root/chunk-7abd7f1e.js";
import "B:/~BUN/root/chunk-qvd6ab1g.js";
import "B:/~BUN/root/chunk-0hq7zw7b.js";
import "B:/~BUN/root/chunk-hrf323t4.js";
import "B:/~BUN/root/chunk-t1rttjj3.js";
import { nSe } from "B:/~BUN/root/chunk-trktrhyg.js";
import { Chn, iWr, Aqo, wet, xqo, Pqo, o2e, kQn, jde, Oqo, rCe as shouldRetry, ISt, Ahn, xhn, oCe, aWr, vet, yWt, Iqo, Mqo, Dqo, Lqo, Phn, _Wt, MSt, TQn, CQn, s2e, lWr, RQn, dWr } from "B:/~BUN/root/chunk-abyad2rh.js";
import { N_n, F_n, Q4o, Z4o, eYo, tYo } from "B:/~BUN/root/chunk-e0tkmfhx.js";
import "B:/~BUN/root/chunk-mxxcv7nt.js";
import { Xet as CCR_AGENT_PROXY_RELAY_MODE, L_n, HGr } from "B:/~BUN/root/chunk-pqn7fa64.js";
import { Ehn, sWr, Thn, wQn, vQn } from "B:/~BUN/root/chunk-6s85qtdq.js";
import "B:/~BUN/root/chunk-b5bxtj5p.js";
import "B:/~BUN/root/chunk-qnp3ptkr.js";
import { $St } from "B:/~BUN/root/chunk-ya0wwdf0.js";
import { nyn } from "B:/~BUN/root/chunk-ttmvswg7.js";
import "B:/~BUN/root/chunk-70zp0psh.js";
import { F5o, g2t, QSn } from "B:/~BUN/root/chunk-6zqm9466.js";
import { EYr, AXo } from "B:/~BUN/root/chunk-977wvwz3.js";
import { zar } from "B:/~BUN/root/chunk-enqbzy18.js";
import "B:/~BUN/root/chunk-j62y9z2x.js";
import { w3t, ml, v3t, Xh } from "B:/~BUN/root/chunk-46c1kmhs.js";
import { f8t as timeoutMs_4, Nz } from "B:/~BUN/root/chunk-050gfc4p.js";
import "B:/~BUN/root/chunk-0bjget2c.js";
import "B:/~BUN/root/chunk-gvcmagy5.js";
import "B:/~BUN/root/chunk-wxq7ypdv.js";
import "B:/~BUN/root/chunk-c2nm18xm.js";
import "B:/~BUN/root/chunk-906np0vb.js";
import "B:/~BUN/root/chunk-k798mzph.js";
import "B:/~BUN/root/chunk-mrkvqm9w.js";
import "B:/~BUN/root/chunk-rx9rjzse.js";
import "B:/~BUN/root/chunk-nt0g6kgc.js";
import "B:/~BUN/root/chunk-0x393xyp.js";
import "B:/~BUN/root/chunk-9g7m04dd.js";
import "B:/~BUN/root/chunk-m5caq93p.js";
import "B:/~BUN/root/chunk-4gqhj4xs.js";
import "B:/~BUN/root/chunk-5mwc5s4z.js";
import "B:/~BUN/root/chunk-g52e2dzb.js";
import "B:/~BUN/root/chunk-mbp55gyg.js";
import "B:/~BUN/root/chunk-jcpnv8z5.js";
import "B:/~BUN/root/chunk-3a551r0y.js";
import "B:/~BUN/root/chunk-f29awv9y.js";
import "B:/~BUN/root/chunk-13n9yynj.js";
import "B:/~BUN/root/chunk-pp32733x.js";
import "B:/~BUN/root/chunk-6t9vgqfx.js";
import "B:/~BUN/root/chunk-455kgrq5.js";
import "B:/~BUN/root/chunk-nsa84wqe.js";
import "B:/~BUN/root/chunk-25qdy3nw.js";
import "B:/~BUN/root/chunk-92fjqg3t.js";
import "B:/~BUN/root/chunk-6wyzmyt1.js";
import "B:/~BUN/root/chunk-8vgph9ej.js";
import "B:/~BUN/root/chunk-cxg2mbf6.js";
import "B:/~BUN/root/chunk-cv2x0a47.js";
import "B:/~BUN/root/chunk-0k9rq8e2.js";
import "B:/~BUN/root/chunk-k8727s7d.js";
import "B:/~BUN/root/chunk-7df33jce.js";
import "B:/~BUN/root/chunk-f3f5k3wx.js";
import "B:/~BUN/root/chunk-46bqx6b8.js";
import "B:/~BUN/root/chunk-ma5pke8s.js";
import "B:/~BUN/root/chunk-cc0we03s.js";
import "B:/~BUN/root/chunk-p95zaxtt.js";
import "B:/~BUN/root/chunk-6bmmxtvh.js";
import "B:/~BUN/root/chunk-3hya8nsv.js";
import "B:/~BUN/root/chunk-f561y43v.js";
import "B:/~BUN/root/chunk-xnas864x.js";
import "B:/~BUN/root/chunk-ft39p62b.js";
import "B:/~BUN/root/chunk-nbprdt7j.js";
import "B:/~BUN/root/chunk-th6c28ah.js";
import "B:/~BUN/root/chunk-bhfm57j1.js";
import "B:/~BUN/root/chunk-rzekebyp.js";
import "B:/~BUN/root/chunk-stjjr4k8.js";
import "B:/~BUN/root/chunk-y424etr5.js";
import "B:/~BUN/root/chunk-3npegs3h.js";
import "B:/~BUN/root/chunk-410t5g3b.js";
import "B:/~BUN/root/chunk-b4xxgr0r.js";
import "B:/~BUN/root/chunk-0p1hpv0s.js";
import "B:/~BUN/root/chunk-hdc8p5sh.js";
import "B:/~BUN/root/chunk-hgpj62j5.js";
import "B:/~BUN/root/chunk-4yrr52wq.js";
import "B:/~BUN/root/chunk-9hexkhrt.js";
import "B:/~BUN/root/chunk-2f1s42re.js";
import "B:/~BUN/root/chunk-ac9kwvf4.js";
import "B:/~BUN/root/chunk-6n2cf80v.js";
import "B:/~BUN/root/chunk-asrchj7k.js";
import "B:/~BUN/root/chunk-0zewma8k.js";
import "B:/~BUN/root/chunk-vfvzs0rk.js";
import { Nme } from "B:/~BUN/root/chunk-kt4s0f09.js";
import "B:/~BUN/root/chunk-9929fpp1.js";
import "B:/~BUN/root/chunk-mbz8rhex.js";
import "B:/~BUN/root/chunk-r0sre1ss.js";
import "B:/~BUN/root/chunk-q56gve2c.js";
import "B:/~BUN/root/chunk-6k93vgm0.js";
import "B:/~BUN/root/chunk-g58w39t3.js";
import "B:/~BUN/root/chunk-dyer18a2.js";
import "B:/~BUN/root/chunk-xpy44yvr.js";
import "B:/~BUN/root/chunk-et37ax67.js";
import { QN, jO, Ght, jM } from "B:/~BUN/root/chunk-4qc55bxf.js";
import "B:/~BUN/root/chunk-qd9ks09p.js";
import "B:/~BUN/root/chunk-cqw1xaqm.js";
import "B:/~BUN/root/chunk-c6mbjdcy.js";
import "B:/~BUN/root/chunk-dq3y90rd.js";
import "B:/~BUN/root/chunk-j2tkftkw.js";
import { tS } from "B:/~BUN/root/chunk-7wsxhgty.js";
import "B:/~BUN/root/chunk-j0ghr71r.js";
import "B:/~BUN/root/chunk-b0487zs4.js";
import "B:/~BUN/root/chunk-31x8pa20.js";
import "B:/~BUN/root/chunk-59tbtn9n.js";
import { Us } from "B:/~BUN/root/chunk-t7350kw8.js";
import { _y } from "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import { I5, Cmn, xTe, Bne } from "B:/~BUN/root/chunk-7j1crw74.js";
import "B:/~BUN/root/chunk-80e5c2dj.js";
import "B:/~BUN/root/chunk-648jq7hr.js";
import "B:/~BUN/root/chunk-3m71dqxd.js";
import "B:/~BUN/root/chunk-shj1mfyk.js";
import { constants as _f, createWriteStream as wf, fchmod as Sf } from "fs";
import { lstat as xd, mkdir as qo, open as Ef, readFile as Ud, rm as us, writeFile as kf } from "fs/promises";
import { homedir as Vs, hostname as vf } from "os";
import { dirname as yf, join as ds, resolve as Kr } from "path";
import { createHash as _i, randomUUID as wi } from "crypto";
import { constants as vs } from "fs";
import { chmod as nu, lstat as Vn, mkdir as bs, mkdtemp as ru, open as ys, readdir as As, readFile as qr, rename as gi, rm as Os, stat as ao, unlink as Rs } from "fs/promises";
import { homedir as su, hostname as ou } from "os";
import { basename as so, dirname as Si, isAbsolute as iu, join as at, relative as au, resolve as mi, sep as zr } from "path";
var du = 300000,
  uu = 300000,
  cu = 60000,
  lu = ".host-config-snapshot-",
  Ei = 1048576;
function ki(e = "win32") {
  return e === "win32" ? vs.O_RDONLY : vs.O_RDONLY | vs.O_NOFOLLOW | vs.O_NONBLOCK;
}
var uo = at("skills", SD),
  fu = new Set([Dj, $9e, uVn, uo, Lj, D1e]),
  hu = new Set([".claude.json", ".claude.json.backup", ".credentials.json", "projects", "sessions", "todos", "shell-snapshots", "statsig", "file-history", "history.jsonl", "ide", "logs", "backups", ".session_ingress_token", "policy-limits.json", "remote-settings.json", ...["policy-limits.json", "remote-settings.json"].flatMap(item => [a0e(item), l0e(item)]), mXe("policy-limits.json"), kDt("remote-settings.json"), cTe, yBn, "hfi-auth.json", $St, "daemon", "jobs", "teams", "usage-data", "shares", "state", "uploads", "feedback", "feedback-bundles", "plans", "telemetry", "dump-prompts", "debug", "traces", "startup-perf", "cache", "mcp-discovery-cache", "mcp-needs-auth-cache.json", "gh-pr-status-cache.json", "tasks", "local", "antproto.json", "ccr", "session-env", "bridge-spawn", "active-time.json", "loop.md", "server-sessions.json", "image-cache", "paste-cache", "file-transfers", "mcp-skill-archives", "stats-cache.json", "computer-use.lock", "server.lock", "api-dumps", "chrome", "downloads", "local-settings", "project-settings", "remote", "remote-control", "scratch", "seed-admin", "storage-v2", "systemd", VB]),
  pu = new Set(["settings.json", "settings.local.json", "claude.md"]);
function gu(e) {
  let n = e.indexOf(zr);
  if (n === -1) return pu.has(e.toLowerCase());
  return e.slice(0, n).toLowerCase() === "hooks";
}
class HostConfigOverCapError extends x {
  constructor(e, n) {
    super(`host config exceeds ${e} bytes at ${n} \u2014 reduce it or set SELF_HOSTED_RUNNER_HOST_CONFIG_DIR to a slimmer dir (the limit covers the whole directory with --host-config-snapshot memory, and only settings*.json, CLAUDE.md and hooks/ with --host-config-snapshot disk)`, "host config exceeds the snapshot size limit");
    this.name = "HostConfigOverCapError";
  }
}
class HostConfigSnapshotTamperedError extends x {
  rel;
  what;
  constructor(e, n) {
    super(`Host config snapshot was modified after runner startup (${e}: ${n}) \u2014 restart the runner; it will not start sessions until then`, "host config snapshot modified after startup");
    this.name = "HostConfigSnapshotTamperedError", this.rel = e, this.what = n;
  }
}
class HostConfigSeedTargetError extends x {
  target;
  constructor(e, n = "directory") {
    super(`Session config path ${e} exists and is not a plain ${n} \u2014 refusing to write session config through it; this session was not started. Remove that entry (most likely an earlier pickup of the session left it there). The runner keeps serving other sessions and does not need a restart`, "host config seed target is not a plain directory");
    this.name = "HostConfigSeedTargetError", this.target = e;
  }
}
class HostConfigSeedTimeoutError extends x {
  constructor(e, n) {
    super(`Seeding host config into ${e} did not finish (${n.message}; check --base-dir mount health) \u2014 session not started`, "host config seed timed out");
    this.name = "HostConfigSeedTimeoutError";
  }
}
class HostConfigSnapshotReadError extends x {
  constructor(e, n) {
    super(`Host config snapshot entry ${e} could not be read (${n}) \u2014 session not started; it will be retried on the next session`, "host config snapshot read failed");
    this.name = "HostConfigSnapshotReadError";
  }
}
function Ir(e) {
  return e instanceof HostConfigSnapshotTamperedError || e instanceof HostConfigSeedTargetError || e instanceof HostConfigSeedTimeoutError || e instanceof HostConfigSnapshotReadError;
}
function vi(e, n) {
  return Ri(e, `Host config from ${n.sourceDir} was not applied: ${n.message}. This session has none of the runner operator's user-level settings, skills, plugins or MCP servers. Operators: see --host-config-snapshot in the self-hosted runner guide; large plugin sets can also be pre-populated with CLAUDE_CODE_PLUGIN_SEED_DIR.`);
}
function yi(e, n, r) {
  return Ri(e, `Host config from ${n} was only partially applied: ${r}. Some of the runner operator's user-level settings, skills, plugins or MCP servers may be missing from this session. Operators: check free space and health of the runner's --base-dir.`);
}
function Ri(session_id, content) {
  return {
    type: "system",
    subtype: "informational",
    level: "warning",
    uuid: wi(),
    session_id: session_id,
    content: content
  };
}
function Ti(e) {
  let n = Zf(e);
  return !hu.has(n) && !n.startsWith(".") && !n.startsWith("daemon") && !n.startsWith("agent-memory") && !/^\.claude(-[a-z-]+)?\.json(\.backup)?$/.test(n) && !/^\.config\.json(\.|$)/.test(n) && !/^\.claude(-[a-z-]+)?\.json\./.test(n) && !n.startsWith(".session_ingress_token") && !vXn(n) && !ree(n);
}
function bi(e, n, r, s) {
  if (fu.has(Zf(e))) return !0;
  return Zf(n) === "skills" && (s === "claim-all" || s.has(RNt(r)));
}
async function Ai(e, n) {
  let storageV5 = n.storageV5,
    s = n.maxMemoryBytes ?? Su,
    sourceDir = process.env.SELF_HOSTED_RUNNER_HOST_CONFIG_DIR || process.env.CLAUDE_CONFIG_DIR || at(su(), ".claude"),
    files = new Map(),
    u = {
      bytes: 0
    },
    storage = {
      mode: "memory"
    },
    h = new Set();
  try {
    let U = n.storage.mode === "memory";
    if (n.storage.mode === "disk" && ku(n.storage.baseDir, sourceDir)) e(`[runner:startup] host config dir ${sourceDir} contains --base-dir ${n.storage.baseDir}; using --host-config-snapshot memory for this run`), U = !0;else if (n.storage.mode === "disk") {
      let {
          baseDir: baseDir
        } = n.storage,
        N = {
          cancelled: !1
        },
        B = bu(sourceDir, baseDir, files, u, s, e, N),
        D = await ml(B, uu, `[runner:stuck] host config disk snapshot ${sourceDir} \u2192 ${baseDir}`).catch(M => {
          if (M instanceof w3t) N.cancelled = !0, Eu(B);
          throw M;
        });
      if (D.outcome === "absent") ;else if (D.outcome === "disk_unavailable") e(`[runner:startup] host config disk snapshot under ${baseDir} failed (${d(D.error)}); falling back to memory mode`), p("self_hosted_host_config", "host_config_disk_fallback"), files.clear(), u.bytes = 0, U = !0;else storage = {
        mode: "disk",
        snapshotDir: D.snapshotDir,
        manifest: D.manifest
      }, h = D.legacySkillsClaims;
    }
    if (U) h = await ml((async () => {
      let v = await Oi(sourceDir);
      return await Ci(sourceDir, "", files, u, s, v), v;
    })(), cu, `[runner:stuck] host config snapshot ${sourceDir}`);
    if (h === "claim-all") e(`[runner:startup] ${at(sourceDir, uo)} exists but is unreadable or malformed \u2014 cannot tell org-synced skills from your own, so NO skills were seeded into sessions; delete that file (bookkeeping from an older skills-sync layout) to seed ${at(sourceDir, "skills")} again`);
  } catch (error) {
    if (!G(error)) {
      e(`[runner:startup] host config snapshot from ${sourceDir} failed (sessions will start with empty config): ${error}`);
      let reason = error instanceof HostConfigOverCapError ? "over_cap" : "read_error";
      return m("self_hosted_host_config", reason === "over_cap" ? "host_config_over_cap" : "host_config_read_error"), {
        notApplied: {
          sourceDir: sourceDir,
          reason: reason,
          message: d(error)
        }
      };
    }
  }
  let SELF_HOSTED_RUNNER_HOST_CONFIG_DIR = process.env.SELF_HOSTED_RUNNER_HOST_CONFIG_DIR,
    mcpServers_2;
  try {
    let v = SELF_HOSTED_RUNNER_HOST_CONFIG_DIR ? await (async B => {
        for (let D of B) try {
          let M = await qr(at(sourceDir, D), "utf8");
          if (M !== "") return M;
        } catch (error) {
          let ie = k(error);
          if (ie !== "ENOENT" && ie !== "EISDIR" && ie !== "ELOOP") throw error;
        }
        throw Object.assign(Error("ENOENT"), {
          code: "ENOENT"
        });
      })([".config.json", `.claude${F5()}.json`, ...Whe.map(item => `.claude${item}.json`)]) : W() && storageV5 !== void 0 ? await mu(storageV5) : await qr(wy(), "utf8"),
      N = await J(v);
    if (N !== null && typeof N === "object") {
      let mcpServers = N.mcpServers;
      if (mcpServers !== null && typeof mcpServers === "object" && Object.keys(mcpServers).length > 0) mcpServers_2 = mcpServers;
    }
  } catch {}
  if (mcpServers_2) {
    for (let [U, v] of Object.entries(mcpServers_2)) {
      let N = wu(v);
      if (N !== void 0) e(`[runner:warn] host mcpServers entry "${U}" has ${N} \u2014 ignoring (the Claude child would drop it silently)`), delete mcpServers_2[U];
    }
    if (Object.keys(mcpServers_2).length === 0) mcpServers_2 = void 0;
  }
  let S = files.size + (storage.mode === "disk" ? storage.manifest.size : 0);
  if (S === 0 && !mcpServers_2) {
    if (storage.mode === "disk") await Os(storage.snapshotDir, {
      recursive: !0,
      force: !0
    }).catch(() => {});
    return;
  }
  let E = mcpServers_2 ? `, ${Object.keys(mcpServers_2).length} mcpServer(s)` : "",
    T = (u.bytes / 1024).toFixed(1);
  return e(storage.mode === "disk" ? `[runner:startup] host config snapshot (disk): ${S} file(s), ${T} KiB from ${sourceDir} \u2192 ${storage.snapshotDir}${E}` : `[runner:startup] host config snapshot: ${S} file(s), ${T} KiB from ${sourceDir}${E}`), g("self_hosted_host_config"), {
    snapshot: {
      sourceDir: sourceDir,
      files: files,
      mcpServers: mcpServers_2,
      storage: storage
    }
  };
}
async function mu(e) {
  let n = await e.readText([Be.globalConfig()]);
  if (!n.ok) throw Error("global config not readable through storage");
  let r = n.value.items[0];
  if (!r?.found) throw Object.assign(Error("ENOENT"), {
    code: "ENOENT"
  });
  return r.value;
}
var _u = new Set(["stdio", "sse", "http", "streamable-http", "ws", "sdk", "claudeai-proxy"]);
function wu(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return `a non-object value (${e === null ? "null" : Array.isArray(e) ? "array" : typeof e})`;
  let n = e.type;
  if (n === void 0) {
    if ("url" in e && !("command" in e)) return 'a "url" but no "type" (add "type": "http", "sse", or "ws")';
    return;
  }
  if (typeof n !== "string") return `a non-string type (${typeof n})`;
  if (!_u.has(n)) return `unsupported type "${n}"`;
  return;
}
var Su = 67108864;
async function Oi(e) {
  let n = at(e, uo),
    r;
  try {
    if ((await ao(n)).size > oYe) return "claim-all";
    r = await qr(n, "utf8");
  } catch (error) {
    let o = k(error);
    return o === "ENOENT" || o === "ENOTDIR" ? new Set() : "claim-all";
  }
  return cVn(r, at(e, "skills"));
}
async function Ci(e, n, r, s, o, i) {
  let u = await As(at(e, n), {
    withFileTypes: !0
  });
  for (let l of u) {
    if (n === "" && !Ti(l.name)) continue;
    let h = n === "" ? l.name : at(n, l.name);
    if (bi(h, n, l.name, i)) continue;
    if (l.isDirectory()) await Ci(e, h, r, s, o, i);else if (l.isFile()) {
      let w = at(e, h),
        f = await ao(w);
      if (s.bytes += f.size, s.bytes > o) throw new HostConfigOverCapError(o, h);
      let buf = await qr(w);
      if (s.bytes += buf.length - f.size, s.bytes > o) throw new HostConfigOverCapError(o, h);
      r.set(h, {
        buf: buf,
        mode: f.mode & 511
      });
    }
  }
}
async function Eu(e) {
  try {
    let n = await e;
    if (n.outcome === "captured") await Os(n.snapshotDir, {
      recursive: !0,
      force: !0
    });
  } catch {}
}
function ku(e, n) {
  let r = au(mi(n), mi(e));
  return r === "" || !r.startsWith("..") && !iu(r);
}
class HostConfigCancelledError extends Error {
  constructor() {
    super("host config copy cancelled after timeout");
    this.name = "HostConfigCancelledError";
  }
}
function On(e) {
  if (e.cancelled) throw new HostConfigCancelledError();
}
class SnapshotDirWriteError extends Error {
  original;
  constructor(e) {
    super("host config snapshot directory write failed");
    this.original = e;
    this.name = "SnapshotDirWriteError";
  }
}
var vu = /^\.host-config-snapshot-([A-Za-z0-9_.]{1,64})-(\d+)-[A-Za-z0-9]{6}$/;
function Pi() {
  let e = ou().replace(/[^A-Za-z0-9_.]/g, "_").slice(0, 64);
  return e === "" ? "host" : e;
}
function yu() {
  return `${lu}${Pi()}-${process.pid}-`;
}
var Mi = new Set();
function Ru(e) {
  try {
    return process.kill(e, 0), !0;
  } catch (error) {
    return k(error) === "EPERM";
  }
}
async function Tu(e, n) {
  let r = await As(e),
    s = Pi(),
    o = 0;
  for (let i of r) {
    let u = vu.exec(i);
    if (!u) continue;
    if (u[1] !== s) {
      o++;
      continue;
    }
    let l = at(e, i),
      h = Number(u[2]);
    if (Mi.has(l) || h !== process.pid && Ru(h)) continue;
    try {
      await Os(l, {
        recursive: !0,
        force: !0
      }), n(`[runner:startup] removed stale host config snapshot ${l}`);
    } catch (error) {
      n(`[runner:warn] could not remove stale host config snapshot ${l}: ${d(error)}`);
    }
  }
  if (o > 0) n(`[runner:warn] kept ${o} host config snapshot dir(s) from other hosts under ${e} \u2014 concurrently running runners should not share a --base-dir filesystem`);
}
async function Zr(e, n) {
  let r = 0;
  while (r < n.length) {
    let {
      bytesWritten: bytesWritten
    } = await e.write(n, r, n.length - r);
    r += bytesWritten;
  }
}
async function bu(hostDir, n, files_2, acc, maxHeapBytes, onStatus, cancel) {
  try {
    await Tu(n, onStatus);
  } catch (error_2) {
    return {
      outcome: "disk_unavailable",
      error: error_2
    };
  }
  try {
    await As(hostDir);
  } catch (error) {
    if (G(error)) return {
      outcome: "absent"
    };
    throw error;
  }
  let legacySkillsClaims = await Oi(hostDir),
    snapshotDir;
  try {
    snapshotDir = await ru(at(n, yu()));
  } catch (error_3) {
    return {
      outcome: "disk_unavailable",
      error: error_3
    };
  }
  let w = {
    hostDir: hostDir,
    snapshotDir: snapshotDir,
    files: files_2,
    acc: acc,
    heapBytes: 0,
    maxHeapBytes: maxHeapBytes,
    legacySkillsClaims: legacySkillsClaims,
    manifest: new Map(),
    chunk: Buffer.allocUnsafe(Ei),
    onStatus: onStatus,
    cancel: cancel
  };
  try {
    await Ni(w, "");
  } catch (f) {
    if (await Os(snapshotDir, {
      recursive: !0,
      force: !0
    }).catch(() => {}), f instanceof SnapshotDirWriteError) return {
      outcome: "disk_unavailable",
      error: f.original
    };
    if (G(f)) throw new x(`host config dir changed while it was being captured (${d(f)})`, "host config dir changed during capture");
    throw f;
  }
  return Mi.add(snapshotDir), {
    outcome: "captured",
    snapshotDir: snapshotDir,
    manifest: w.manifest,
    legacySkillsClaims: legacySkillsClaims
  };
}
async function Ni(e, n) {
  let r = await As(at(e.hostDir, n), {
    withFileTypes: !0
  });
  for (let s of r) {
    if (On(e.cancel), n === "" && !Ti(s.name)) continue;
    let o = n === "" ? s.name : at(n, s.name);
    if (bi(o, n, s.name, e.legacySkillsClaims)) continue;
    if (s.isDirectory()) await Ni(e, o);else if (s.isFile()) if (gu(o)) await Au(e, o);else await Ou(e, o);
  }
}
function Li(e, n) {
  e.onStatus(`[runner:startup] host config snapshot: skipping ${n} (disappeared during capture)`);
}
async function Au(e, n) {
  let r = at(e.hostDir, n),
    s,
    buf_2;
  try {
    if (s = await ao(r), e.heapBytes += s.size, e.heapBytes > e.maxHeapBytes) throw new HostConfigOverCapError(e.maxHeapBytes, n);
    buf_2 = await qr(r);
  } catch (error) {
    if (G(error)) {
      Li(e, n);
      return;
    }
    throw error;
  }
  if (e.heapBytes += buf_2.length - s.size, e.heapBytes > e.maxHeapBytes) throw new HostConfigOverCapError(e.maxHeapBytes, n);
  e.files.set(n, {
    buf: buf_2,
    mode: s.mode & 511
  }), e.acc.bytes += buf_2.length;
}
async function Ou(e, n) {
  let r;
  try {
    r = await ys(at(e.hostDir, n), ki());
  } catch (error) {
    if (G(error)) {
      Li(e, n);
      return;
    }
    throw error;
  }
  try {
    let s = await r.stat();
    if (!s.isFile()) return;
    let mode = s.mode & 511,
      i = at(e.snapshotDir, n),
      u;
    try {
      await bs(Si(i), {
        recursive: !0
      }), u = await ys(i, "wx", 384);
    } catch (error) {
      throw new SnapshotDirWriteError(error);
    }
    let l = _i("sha256"),
      size = 0;
    try {
      let {
        chunk: chunk
      } = e;
      for (;;) {
        On(e.cancel);
        let {
          bytesRead: bytesRead
        } = await r.read(chunk, 0, chunk.length, null);
        if (bytesRead === 0) break;
        let S = chunk.subarray(0, bytesRead);
        l.update(S);
        try {
          await Zr(u, S);
        } catch (error) {
          throw new SnapshotDirWriteError(error);
        }
        size += bytesRead;
      }
    } catch (error) {
      throw await u.close().catch(() => {}), error;
    }
    try {
      await u.close();
    } catch (error) {
      throw new SnapshotDirWriteError(error);
    }
    e.manifest.set(n, {
      sha256: l.digest("hex"),
      size: size,
      mode: mode
    }), e.acc.bytes += size;
  } finally {
    await r.close().catch(() => {});
  }
}
var lo = ".ccr-git",
  Cu = [".ccr-launcher", lo];
async function xr(e, n, r = v3t) {
  let s = at(e, "hooks"),
    o = await ml(Vn(s).catch(i => G(i) ? void 0 : Promise.reject(i)), r, `[runner:stuck] fs op 'lstat ${s}' (check mount health)`);
  if (o !== void 0 && !o.isDirectory()) return n(`[runner:session] ${s} exists and is not a plain directory \u2014 not following`), !1;
  return !0;
}
var weakMap = new WeakMap(),
  $u = 1e4,
  Pu = 1e4;
async function Di(e, n, r, s, o = F5()) {
  if (!n) return {
    outcome: "seeded"
  };
  let i = weakMap.get(n);
  if (i !== void 0) {
    let h = new HostConfigSnapshotTamperedError(i.rel, `${i.what}; found by an earlier session on this runner`);
    throw s(`[runner:error] ${h.message}`), m("self_hosted_host_config", "host_config_tampered"), h;
  }
  let u = {
      files: 0,
      bytes: 0,
      names: [],
      published: [],
      cancelTakesBack: n.storage.mode === "disk",
      cancel: {
        cancelled: !1
      }
    },
    l = `[runner:stuck] seed write \u2192 ${e}`;
  try {
    if (await ml(Mu(e, n, o, u, s), du, l), u.files > 0 || n.mcpServers) {
      let h = n.mcpServers ? `.claude.json[mcpServers\xD7${Object.keys(n.mcpServers).length}]` : void 0,
        w = n.storage.mode === "disk" ? [`${u.files} file(s), ${(u.bytes / 1024).toFixed(1)} KiB`, ...(h ? [h] : [])].join(", ") : [...u.names, ...(h ? [h] : [])].join(", ");
      r(`[runner:session] Seeded ${w} from host config snapshot (${n.sourceDir})`);
    }
    return {
      outcome: "seeded"
    };
  } catch (h) {
    let w = h;
    if (h instanceof w3t && n.storage.mode === "disk") u.cancel.cancelled = !0, w = new HostConfigSeedTimeoutError(e, h), s(`[runner:error] ${d(w)}`), m("self_hosted_host_config", "host_config_seed_timeout");
    if (Ir(w)) {
      if (u.published.length > 0) await ml(Nu(u.published), Pu, `[runner:stuck] remove the files seeded into ${e}`).catch(f => s(`[runner:error] could not remove the files seeded into ${e}: ${d(f)}`));
      throw w;
    }
    return s(`[runner:session] Seed write to ${e} failed (best-effort): ${h}`), u.cancel.cancelled = !0, p("self_hosted_host_config", "host_config_seed_partial"), {
      outcome: "partial",
      error: d(h)
    };
  }
}
async function Mu(e, n, r, s, o) {
  let i = n.storage.mode === "disk",
    {
      cancel: cancel_2
    } = s;
  try {
    let l = new Set();
    await fo(e), On(cancel_2);
    let h = await xr(e, o, $u);
    if (On(cancel_2), !h) throw new HostConfigSeedTargetError(at(e, "hooks"));
    for (let [w, {
      buf: buf_3,
      mode: mode_2
    }] of n.files) {
      On(cancel_2);
      let E = w.toLowerCase();
      if (Cu.some(item => E.startsWith("hooks" + zr + item + zr) || E === "hooks" + zr + item)) continue;
      if (await io(e, w, l, cancel_2), await Ts(e, w, mode_2, s, T => Zr(T, buf_3)), !i) s.names.push(w);
      s.files++, s.bytes += buf_3.length;
    }
    if (n.storage.mode === "disk") {
      let {
        snapshotDir: snapshotDir_2,
        manifest: manifest
      } = n.storage;
      if (manifest.size > 0) {
        let E = await Vn(snapshotDir_2).catch(T => {
          if (G(T)) return;
          throw new HostConfigSnapshotReadError(so(snapshotDir_2), k(T) ?? d(T));
        });
        if (E === void 0 || !E.isDirectory()) throw new HostConfigSnapshotTamperedError(so(snapshotDir_2), `the snapshot directory ${snapshotDir_2} was removed or replaced after runner startup (another runner or a cleanup job sharing --base-dir?)`);
      }
      let S = Buffer.allocUnsafe(Ei);
      for (let [E, T] of manifest) On(cancel_2), await io(e, E, l, cancel_2), await Uu(snapshotDir_2, e, E, T, S, s), s.files++, s.bytes += T.size;
    }
    if (n.mcpServers) {
      On(cancel_2);
      let w = await _({
          mcpServers: n.mcpServers
        }),
        f = `.claude${r}.json`;
      await Ts(e, f, 384, s, S => Zr(S, Buffer.from(w)));
    }
  } catch (error) {
    if (error instanceof HostConfigSnapshotTamperedError) {
      let h = !weakMap.has(n);
      if (h) weakMap.set(n, {
        rel: error.rel,
        what: error.what
      });
      if (o(`[runner:error] ${error.message}`), h) o("[runner:error] this runner now refuses to start sessions until it is restarted \u2014 replace it");
      m("self_hosted_host_config", "host_config_tampered");
    } else if (error instanceof HostConfigSeedTargetError) o(`[runner:error] ${error.message}`), m("self_hosted_host_config", "host_config_seed_target");else if (error instanceof HostConfigSnapshotReadError) o(`[runner:error] ${error.message}`), m("self_hosted_host_config", "host_config_seed_io");
    throw error;
  }
}
async function fo(e) {
  let r = await Vn(e).catch(s => G(s) ? void 0 : Promise.reject(s));
  if (r === void 0) try {
    return await bs(e, {
      mode: 448
    }), "made";
  } catch (error) {
    if (k(error) !== "EEXIST") throw error;
    r = await Vn(e);
  }
  if (!r.isDirectory()) throw new HostConfigSeedTargetError(e);
  return "found";
}
async function Ii(e, n) {
  await bs(e, {
    recursive: !0,
    mode: 448
  });
  try {
    let r = [];
    for (let s of n) r.push(await fo(s));
    return r;
  } catch (error) {
    if (error instanceof HostConfigSeedTargetError) m("self_hosted_host_config", "host_config_seed_target");
    throw error;
  }
}
async function io(e, n, r, s) {
  let o = n.split(zr).slice(0, -1),
    i = "";
  for (let u of o) {
    if (i = i === "" ? u : at(i, u), r.has(i)) continue;
    On(s);
    let l = at(e, i),
      h = await Vn(l).catch(w => G(w) ? void 0 : Promise.reject(w));
    if (h === void 0) try {
      await bs(l);
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
      h = await Vn(l);
    }
    if (h !== void 0 && !h.isDirectory()) throw new HostConfigSeedTargetError(l);
    r.add(i);
  }
}
async function gr(e, n, r, s, cancel_3 = {
  cancelled: !1
}) {
  let i = {
    cancel: cancel_3,
    published: [],
    cancelTakesBack: !0
  };
  await fo(e), await io(e, n, new Set(), i.cancel);
  let u = typeof r === "string" ? Buffer.from(r) : r;
  await Ts(e, n, s, i, l => Zr(l, u));
}
async function Ts(e, n, r, s, o) {
  let {
      cancel: cancel_4
    } = s,
    u = at(e, n),
    l = await Vn(u).catch(f => G(f) ? void 0 : Promise.reject(f));
  if (l !== void 0 && !l.isFile() && !l.isSymbolicLink()) throw new HostConfigSeedTargetError(u, "file");
  let h = at(Si(u), `.${so(u)}.seed-${wi().slice(0, 8)}`);
  On(cancel_4);
  let w = await ys(h, "wx", r);
  try {
    if (await o(w), await w.close(), On(cancel_4), await Lu(h, u), s.published.push(u), cancel_4.cancelled) {
      if (s.cancelTakesBack) await Rs(u).catch(() => {});
      On(cancel_4);
    }
  } catch (error) {
    throw await w.close().catch(() => {}), await Rs(h).catch(() => {}), error;
  }
}
async function Nu(e) {
  let n;
  for (let r = e.length - 1; r >= 0; r--) try {
    await Rs(e[r]);
  } catch (error) {
    if (!G(error)) n ??= error;
  }
  if (n !== void 0) throw n;
}
async function Lu(e, n) {
  try {
    await ns(e, n, gi);
    return;
  } catch (error) {
    let o = k(error);
    if (!(o !== void 0 && o !== "EXDEV" && (xA.has(o) || o === "EACCES" && !0))) throw error;
  }
  let r = await Vn(n).catch(s => G(s) ? void 0 : Promise.reject(s));
  if (r !== void 0) {
    if (!r.isFile() && !r.isSymbolicLink()) throw new HostConfigSeedTargetError(n, "file");
    if (r.isFile()) await nu(n, r.mode | 128);
    await Rs(n);
  }
  await ns(e, n, gi);
}
var Du = new Set(["ENOENT", "ELOOP", "ENOTDIR", "EISDIR", "EACCES", "EPERM"]);
async function Iu(e) {
  let n;
  try {
    n = await Vn(e);
  } catch {
    return;
  }
  if (n.isFile()) return;
  if (n.isSocket()) return "replaced by a socket";
  if (n.isCharacterDevice() || n.isBlockDevice()) return "replaced by a device node";
  return "no longer a regular file";
}
function xu(e) {
  switch (e) {
    case "ENOENT":
      return "missing";
    case "ELOOP":
      return "replaced by a symlink";
    case "ENOTDIR":
      return "a parent directory was replaced";
    case "EISDIR":
      return "replaced by a directory";
    default:
      return `no longer readable by the runner (${e})`;
  }
}
async function Uu(e, n, r, s, o, i) {
  let {
      cancel: cancel_5
    } = i,
    l;
  try {
    l = await ys(at(e, r), ki());
  } catch (error) {
    let w = k(error);
    if (w !== void 0 && Du.has(w)) throw new HostConfigSnapshotTamperedError(r, xu(w));
    let f = await Iu(at(e, r));
    if (f !== void 0) throw new HostConfigSnapshotTamperedError(r, f);
    throw new HostConfigSnapshotReadError(r, w ?? d(error));
  }
  try {
    let h;
    try {
      h = await l.stat();
    } catch (error) {
      throw new HostConfigSnapshotReadError(r, k(error) ?? d(error));
    }
    if (!h.isFile()) throw new HostConfigSnapshotTamperedError(r, "no longer a regular file");
    if (h.size !== s.size) throw new HostConfigSnapshotTamperedError(r, `size is ${h.size} bytes, was ${s.size}`);
    await Ts(n, r, s.mode, i, async w => {
      let f = _i("sha256"),
        S = s.size;
      while (S > 0) {
        On(cancel_5);
        let bytesRead_2;
        try {
          ({
            bytesRead: bytesRead_2
          } = await l.read(o, 0, Math.min(o.length, S), null));
        } catch (error) {
          throw new HostConfigSnapshotReadError(r, k(error) ?? d(error));
        }
        if (bytesRead_2 === 0) throw new HostConfigSnapshotTamperedError(r, "shrank while being copied");
        let T = o.subarray(0, bytesRead_2);
        f.update(T), await Zr(w, T), S -= bytesRead_2;
      }
      if (f.digest("hex") !== s.sha256) throw new HostConfigSnapshotTamperedError(r, "content changed");
    });
  } finally {
    await l.close().catch(() => {});
  }
}
function xi({
  baseUrl: baseUrl,
  getRunnerToken: getRunnerToken,
  getRetireAtMs: getRetireAtMs,
  isStopping: isStopping,
  isHeldOff: isHeldOff,
  onGranted: onGranted,
  clock: clock,
  onStatus: onStatus_2,
  onDebug: onDebug
}) {
  return;
}
function Ui({
  clock: clock_2,
  onStatus: onStatus_3
}) {
  return;
}
import { access as Fu, constants as Fi, mkdir as Gu } from "fs/promises";
var Hu = 1e4;
async function Gi(e, n = Hu, r = s => console.error(s)) {
  try {
    await ml(Gu(e, {
      recursive: !0
    }).then(() => Fu(e, Fi.W_OK | Fi.X_OK)), n, `base directory check for ${e}`);
  } catch (error) {
    let o = d(error);
    if (o.includes("timed out after")) r(`[runner:fatal] ${o} \u2014 check NFS/CSI mount health`), process.exit(1);
    throw Error(`cannot create or write to base directory ${e} (${k(error) ?? o}); pass --base-dir <writable path> or set SELF_HOSTED_RUNNER_BASE_DIR`);
  }
}
import { basename as Jp, dirname as Qp, isAbsolute as eg, join as Bu, relative as tg, sep as ng } from "path";
function ho(e) {
  return;
}
function Hi(e, n) {
  return L([Bu(e, "git"), ho(n)].filter(item => item !== void 0));
}
var dg = new Set([...pQ.filter(item => item !== "GIT_CONFIG_GLOBAL"), "GIT_TEMPLATE_DIR", "GIT_EXEC_PATH", "GIT_GRAFT_FILE", "GIT_REPLACE_REF_BASE"]);
import { spawn as xn } from "child_process";
import { randomUUID as Ks } from "crypto";
import { chmod as Cc, lstat as In, mkdir as Vt, mkdtemp as $c, open as od, readdir as Ho, readFile as id, realpath as Hr, rename as Ha, rm as Je, stat as dd, unlink as Zn, writeFile as Er } from "fs/promises";
import { homedir as Lo, tmpdir as Pc } from "os";
import { basename as Mc, dirname as fn, isAbsolute as ud, join as ae, normalize as Nc, resolve as Gr, sep as path_6 } from "path";
import { createInterface as Co } from "readline";
function Wi({
  inheritedEnv: inheritedEnv,
  serverEnv: serverEnv,
  enforcedEnv: enforcedEnv,
  onDropped: onDropped
}) {
  let o = new Set(Object.keys(enforcedEnv).map(Bi)),
    i = String(enforcedEnv.PATH).includes("\x00"),
    u = new Map();
  for (let [l, h] of [["inherited", inheritedEnv], ["server", serverEnv]]) for (let [w, f] of Object.entries(h)) {
    if (f === void 0) continue;
    let S = Bi(w);
    if (w === "" || /[=\0]/.test(w) || String(f).includes("\x00")) onDropped(_(nt(nt(w, "="), "\x00")), "not a usable environment entry", l);else if (!o.has(S) || l === "inherited" && i && S === "PATH") u.set(w, f);else if (!Object.hasOwn(enforcedEnv, w)) onDropped(_(w), "a variant of a runner-enforced name", l);
  }
  for (let [l, h] of Object.entries(enforcedEnv)) {
    if (h === void 0) continue;
    if (String(h).includes("\x00")) onDropped(_(l), "a runner-enforced value that is not a usable environment value", "enforced");else u.set(l, h);
  }
  return Object.fromEntries(u);
}
function Bi(e) {
  return e.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().toUpperCase();
}
import { join as Wu } from "path";
var Ki = /^[a-z][a-z0-9-]{0,63}$/,
  Yi = "remote-agents.json",
  ji = 64,
  Vi = 1048576,
  Ku = 1e4;
function Yu(e) {
  if (!Array.isArray(e)) throw new x(`agent_files is not an array: ${_(typeof e)}`, "agent_files is not an array");
  if (e.length > ji) throw new x(`agent_files has ${e.length} entries (at most ${ji})`, "agent_files has too many entries");
  let n = new Set();
  for (let r of e) {
    let s = r?.name;
    if (typeof s !== "string" || !Ki.test(s)) throw new x(`agent_files entry rejected (name must match ${Ki}): ${_(s)}`, "agent_files entry has an invalid name");
    let content_2 = r.content;
    if (typeof content_2 !== "string" || Buffer.byteLength(content_2) > Vi) throw new x(`agent_files entry '${s}' rejected (content must be a string of at most ${Vi} bytes)`, "agent_files entry has invalid content");
    if (n.has(s)) throw new x(`agent_files contains duplicate name: ${_(s)}`, "agent_files contains a duplicate name");
    n.add(s);
  }
}
function ju(e, n) {
  Yu(e);
  let r = n === void 0 || String(n) === "" ? {} : pt(String(n), !1);
  if (typeof r !== "object" || r === null || Array.isArray(r)) throw new x("claude_code_args agents is not a JSON object", "claude_code_args agents is not a JSON object");
  let s = {
    ...r
  };
  for (let {
    name: name,
    content: content_3
  } of e) s[name] = Vu(name, content_3);
  let o = _(s),
    i = Y9t(o);
  if (i !== null) throw new x(`agent_files do not form a valid --agents value: ${i}`, "agent_files do not form a valid --agents value");
  return o;
}
function Vu(e, n) {
  let r = `${e}.md`,
    {
      frontmatter: frontmatter,
      content: content_4
    } = hi(n, r, {
      normalizeKeys: !0
    }),
    i = xxt(r, "", frontmatter, content_4, "flagSettings");
  if (i === null || i.agentType !== e) throw new x(`agent_files entry '${e}' is not an agent definition named '${e}' (frontmatter needs name: ${e} and a description)`, "agent_files entry is not a matching agent definition");
  let tools = tHe(frontmatter.tools);
  return {
    description: i.whenToUse,
    prompt: content_4.trim(),
    ...(tools !== void 0 && {
      tools: tools
    }),
    ...(i.disallowedTools !== void 0 && {
      disallowedTools: i.disallowedTools
    }),
    ...(i.model !== void 0 && {
      model: i.model
    }),
    ...(i.effort !== void 0 && {
      effort: i.effort
    }),
    ...(i.permissionMode !== void 0 && {
      permissionMode: i.permissionMode
    }),
    ...(i.mcpServers !== void 0 && {
      mcpServers: i.mcpServers
    }),
    ...(i.hooks !== void 0 && {
      hooks: i.hooks
    }),
    ...(i.maxTurns !== void 0 && {
      maxTurns: i.maxTurns
    }),
    ...(i.autoCompactWindow !== void 0 && {
      autoCompactWindow: i.autoCompactWindow
    }),
    ...(i.skills !== void 0 && i.skills.length > 0 && {
      skills: i.skills
    }),
    ...(i.initialPrompt !== void 0 && {
      initialPrompt: i.initialPrompt
    }),
    ...(i.memory !== void 0 && {
      memory: i.memory
    }),
    ...(i.background !== void 0 && {
      background: i.background
    }),
    ...(i.omitClaudeMd !== void 0 && {
      omitClaudeMd: i.omitClaudeMd
    }),
    ...(i.isolation !== void 0 && {
      isolation: i.isolation
    }),
    ...(i.observer !== void 0 && {
      observer: i.observer
    }),
    ...(i.observerMessage !== void 0 && {
      observerMessage: i.observerMessage
    }),
    ...(i.observeSubagents !== void 0 && {
      observeSubagents: i.observeSubagents
    })
  };
}
async function zi(e) {
  let {
    args: args,
    agentFiles: agentFiles,
    serverAgentsArg: serverAgentsArg,
    configDir: configDir,
    stagedPaths: stagedPaths
  } = e;
  if (Array.isArray(agentFiles) && agentFiles.length === 0 && (serverAgentsArg === void 0 || String(serverAgentsArg) === "")) return;
  await po("self_hosted_agent_files", async () => {
    let u = ju(agentFiles, serverAgentsArg),
      l = Wu(configDir, Yi);
    stagedPaths.push(l);
    let h = {
      cancelled: !1
    };
    try {
      await ml(gr(configDir, Yi, u, 384, h), Ku, `[runner:stuck] write ${l} (check NFS/CSI mount health)`);
    } catch (error) {
      throw h.cancelled = !0, new x(`could not write the --agents file for the session (${Tg(error) ?? "unknown error"})`, "could not write the --agents file for the session");
    }
    args.push("--agents", l), e.onDebug(`[runner:session] delivering agents by file: ${l} (${agentFiles.length} server-composed, ${Buffer.byteLength(u)} bytes)`);
  }, () => "deliver_failed");
}
var Ug = `api.${ur}`;
function Xi(e, n, routing, trustBundlePath, otherSessionsShareTheAccount = !1) {
  return {
    operator: Gas(e, n),
    routing: routing,
    trustBundlePath: trustBundlePath,
    trustBundle: {
      status: "unavailable",
      reason: "variable_unset"
    },
    otherSessionsShareTheAccount: otherSessionsShareTheAccount,
    anySourceOnGitMount: !1
  };
}
async function go(e, n) {
  let r = e.operator.certificateFile[0]?.value.trim();
  if (!e.routing || !r) {
    e.trustBundle = {
      status: "unavailable",
      reason: "variable_unset"
    };
    return;
  }
  if (e.otherSessionsShareTheAccount) {
    e.trustBundle = {
      status: "unavailable",
      reason: "shared_with_other_sessions"
    };
    return;
  }
  e.trustBundle = {
    status: "unavailable",
    reason: "bundle_write_failed"
  }, e.trustBundle = await n(r, e.trustBundlePath);
}
function Cs(e, role, target) {
  let {
    envOverrides: envOverrides,
    commandScopeEntries: commandScopeEntries
  } = y3t({
    role: role,
    operator: e.operator,
    routing: e.routing,
    target: target,
    trustBundle: e.trustBundle
  });
  if (Object.keys(envOverrides).length === 0 && commandScopeEntries.length === 0) return;
  return {
    envOverrides: envOverrides,
    commandScopeEntries: commandScopeEntries
  };
}
function qi(e, n) {
  let r = !1;
  for (let s of n) if (s.governedMount && s.url) r = !0, s.gitEnvironment = Cs(e, "prep", {
    url: s.url,
    mountRouted: !0
  });
  return e.anySourceOnGitMount = r, r;
}
var mo = {
  file_unreadable: {
    because: "the file the variable names could not be read (missing, not a regular file, or not readable by the runner's account)",
    first: "Fix the path or its permissions: git cannot read it either."
  },
  file_too_large: {
    because: "the file the variable names is larger than 1 MiB",
    first: "Cut it down to your company's own certificate authorities; the runner adds the public ones itself."
  },
  file_not_pem: {
    because: "the file the variable names holds no certificate in PEM form",
    first: "Put your certificate authorities in it in PEM form: git cannot use it as it is either."
  },
  file_other_certificate_kinds: {
    because: "the file the variable names holds a TRUSTED CERTIFICATE or X509 CERTIFICATE block, which the certificate file the runner builds cannot carry",
    first: "Give every certificate authority in it as a plain CERTIFICATE block (openssl x509 without -trustout)."
  },
  bundle_write_failed: {
    because: "the runner could not finish building the file in the _sessions folder under its --base-dir (a read of the certificate file or a write in that folder failed or did not complete)",
    first: "Check that folder's permissions and free space."
  },
  no_system_roots: {
    because: "this machine keeps no file of public certificate authorities at a standard Linux location",
    first: "On Linux, install your distribution's ca-certificates package."
  },
  shared_with_other_sessions: {
    because: "this runner runs more than one session at a time (--capacity above 1), and another session's process, which runs under the same account, could rewrite a certificate file the runner builds",
    first: "Run with --capacity 1, or put the public certificate authorities into your company's file yourself."
  }
};
function Zi(e) {
  if (!e.routing || e.operator.certificateFile.length === 0 || e.trustBundle.status === "built" || e.trustBundle.reason === "variable_unset") return;
  let {
      because: because,
      first: first
    } = mo[e.trustBundle.reason],
    s = e.trustBundle.reason === "shared_with_other_sessions" ? "Otherwise unset" : "Otherwise add the public certificate authorities to the file, or unset";
  return `[runner:warn] governed git: GIT_SSL_CAINFO is set on this runner and ${because}, so the runner did not build the certificate file it gives its own git for Anthropic-managed git (the git mount): the public certificate authorities plus yours. The runner's own fetches from the mount keep the variable as it is, and fail if the file holds only your company's certificate authority, because the mount presents a public certificate. ${first} ${s} the variable for the runner and name your company's file for your own server in the machine's system git config (an http.<your server's URL>.sslCAInfo entry).`;
}
function Qi(e, role_2, target_2) {
  return y3t({
    role: role_2,
    operator: e.operator,
    routing: e.routing,
    target: target_2,
    trustBundle: e.trustBundle
  }).decision;
}
function ea(e) {
  return Boolean(e.governedMount && !e.upstreamUrl && !e.fetchViaMount);
}
function ta(e) {
  return Boolean(e.governedMount && e.url);
}
function _o(e) {
  return !e.includes("=");
}
function wo(e) {
  return e.governedMount && e.url ? e.url : void 0;
}
function na(e, reachesGitMount) {
  let {
    envOverrides: envOverrides_2,
    commandScopeEntries: commandScopeEntries_2
  } = y3t({
    role: "hook",
    operator: e.operator,
    routing: e.routing,
    reachesGitMount: reachesGitMount
  });
  if (Object.keys(envOverrides_2).length === 0 && commandScopeEntries_2.length === 0) return;
  return {
    envOverrides: envOverrides_2,
    commandScopeEntries: commandScopeEntries_2
  };
}
function sa(e, n) {
  return na(e, wo(n) !== void 0 || e.anySourceOnGitMount);
}
function oa(e) {
  return na(e, e.anySourceOnGitMount);
}
var ia = "2.31";
function aa({
  governedHosts: governedHosts,
  gitConfigArm: gitConfigArm,
  child: child,
  childTrustBundle: childTrustBundle,
  serverSetsCertificateFile: serverSetsCertificateFile,
  runnerMountGit: runnerMountGit,
  rawGitVersion: rawGitVersion,
  hostsCoveredByNoProxy: hostsCoveredByNoProxy,
  clientCertificateVariablesSet: clientCertificateVariablesSet
}) {
  if (governedHosts.length === 0) return [];
  let w = [],
    f = O(governedHosts.length, "that host", "those hosts"),
    S = runnerMountGit.certificateFile !== "left_unset";
  if (gitConfigArm && (child.certificateFile === "moved" || child.certificateFile === "left_old_git" || child.certificateFile === "left_unusable_value")) {
    let T = !serverSetsCertificateFile ? "GIT_SSL_CAINFO is set on this runner" : S ? "GIT_SSL_CAINFO is set on this runner, a value the server delivers with the session (the variables configured on your self-hosted environment) replaces it inside a session," : "GIT_SSL_CAINFO is set for this session by a value the server delivers with it (the variables configured on your self-hosted environment), not on this runner,",
      U = serverSetsCertificateFile ? "take the variable out of the variables configured on your self-hosted environment" : "unset the variable for the runner",
      v = `[runner:warn] governed git: ${T} and the server governs ${O(governedHosts.length, "host")} ${governedHosts.join(", ")}. git lets that variable override the CA file named in git config, for every host, `,
      N;
    if (child.certificateFile === "left_old_git") v += `so inside a session git rejects the session relay's certificate for ${f}. This machine's git (${rawGitVersion || "version not readable"}) could not be confirmed as ${ia} or newer, so the runner leaves the variable as it is.`, N = `Upgrade git, or add your CA to the machine's system certificate bundle and ${U}.`;else if (child.certificateFile === "left_unusable_value") v += `so if git takes a file from it, inside a session git rejects the session relay's certificate for ${f}. Its value cannot be written into git config (it is blank or holds a line break), so the runner leaves the variable as it is.`, N = `Name the file on one line, or ${U}.`;else {
      v += `so inside a session it would make git reject the session relay's certificate for ${f}. For a session the runner takes the variable out of the environment and gives git the same file as http.sslCAInfo instead. Governed hosts use the relay's certificate file. `;
      let B = childTrustBundle.status === "unavailable" && childTrustBundle.reason !== "variable_unset" ? mo[childTrustBundle.reason] : void 0;
      v += child.mountEntries ? "Anthropic-managed git (the git mount) is checked against a certificate file the runner writes for the session: the public certificate authorities plus that file's. " : "For Anthropic-managed git (the git mount) the runner would have written the session a certificate file, the public certificate authorities plus that file's, and did not" + (B ? `: ${B.because}` : "") + ". So git inside the session that goes to the mount checks it against that file alone, as it did under the variable, and fails there if the file holds only your company's certificate authority. ", v += "Hosts the server does not govern keep trusting that file, with differences from the variable that the runner guide lists (Git authentication), the one that matters most being that an http.<url>.sslCAInfo for a host, in any git config file, now takes precedence over that file for that host.", N = child.mountEntries ? "Nothing for you to do for git inside a session unless one of those differences touches one of your hosts." : B?.first ?? "Add the public certificate authorities to that file if git inside a session has to reach the mount.";
    }
    if (runnerMountGit.certificateFile === "moved") v += " The runner's own fetches from Anthropic-managed git (the git mount), before and after the session, do not use the variable: they check the mount against a certificate file the runner builds for the session, the public certificate authorities plus yours.";
    if (S) v += " The runner leaves your lifecycle hooks (checkout, post-session) alone: they inherit this variable from the runner's environment as it is.";
    w.push(`${v} ${N}`);
  }
  if (runnerMountGit.skipVerification === "pinned_off" || child.skipVerification === "left" || child.skipVerification === "moved") {
    let T = runnerMountGit.skipVerification !== "unset",
      U = "[runner:warn] governed git: " + (T ? "GIT_SSL_NO_VERIFY is set on this runner" : "GIT_SSL_NO_VERIFY is set for this session by a value the server delivers with it (the variables configured on your self-hosted environment), not on this runner") + ", which tells git to check no server's certificate.";
    if (runnerMountGit.skipVerification === "pinned_off") U += " The runner's own fetches from Anthropic-managed git (the git mount) ignore it, because they carry the session's token: they check the mount's certificate, and fail if git knows no certificate authority that vouches for what the mount presents (behind a proxy that re-signs traffic, name your company's certificate authority in GIT_SSL_CAINFO).";
    if (child.skipVerification === "moved") U += ` Inside a session the runner takes it out of the environment and gives git http.sslVerify=false instead, which still applies to your own servers (with one exception the runner guide describes: the git that makes a new working copy), and no longer to Anthropic-managed git (the git mount) or to the ${O(governedHosts.length, "host")} the server governs (${governedHosts.join(", ")}): their certificates are checked, because git inside a session carries the session's token to the mount and reaches the governed ${O(governedHosts.length, "host")} through the session's relay. An http.<url>.sslVerify of your own for a server, in any git config file, now takes precedence over it for that server. If git inside a session then fails a certificate check at the mount or a governed host (behind a proxy that re-signs traffic, say), name your company's certificate authority in GIT_SSL_CAINFO.`;else if (child.skipVerification === "left") {
      let v = T ? "unset the switch for the runner" : "take it out of the variables configured on your self-hosted environment";
      U += (gitConfigArm ? ` This machine's git (${rawGitVersion || "version not readable"}) could not be confirmed as ${ia} or newer, so it cannot take the switch's meaning from git config:` : " The session's git is not routed through a git config of the session's own, which is what could carry the switch's meaning:") + ` inside a session the runner leaves it as it is, so git there checks no certificate, for your own servers, for ${O(governedHosts.length, "the governed host", "the governed hosts")}, and for Anthropic-managed git (the git mount), to which it carries the session's token.` + (gitConfigArm ? ` Upgrade git, or ${v}.` : T ? " Unset the switch for the runner if you can." : " Take it out of the variables configured on your self-hosted environment if you can.");
    }
    w.push(T ? `${U} The runner leaves your lifecycle hooks (checkout, post-session) alone, with one exception: the hooks of a session that has a repository on Anthropic-managed git, which can reach it with the session's token. That is every checkout hook of such a session, whether or not the runner hands it an address there (CLAUDE_RUNNER_GIT_MOUNT_URL), and its post-session hook. For such a hook the runner takes the switch out of the environment and gives git http.sslVerify=false instead, with http.<url>.sslVerify=true for the mount: every git that hook starts checks the mount's certificate and, as before, no other server's. The hooks of every other session inherit the switch from the runner's environment as it is. If such a hook's fetch from the mount, or its push to it, then fails a certificate check (behind a proxy that re-signs traffic, say), name your company's certificate authority in GIT_SSL_CAINFO.` : U);
  }
  if (gitConfigArm && hostsCoveredByNoProxy.length > 0) {
    let T = hostsCoveredByNoProxy.length;
    w.push(`[runner:warn] governed git: this machine's NO_PROXY appears to cover governed ${O(T, "host")} ${hostsCoveredByNoProxy.join(", ")}. git hands NO_PROXY to its HTTP library, which may then skip the session relay for ${O(T, "that host", "those hosts")} even though the relay is set in git config. If it does, git inside the session reaches ${O(T, "it", "them")} over this machine's own network path without the relay's credential` + (child.certificateFile === "moved" ? `, and checks ${O(T, "its", "their")} certificate against the relay's certificate file, because GIT_SSL_CAINFO no longer applies inside a session: a host that only that variable's file vouches for fails the certificate check, and fetch or push to a private repository on any other will most likely fail.` : ", and fetch or push to a private repository there will most likely fail.") + ` The clone before the session starts is not affected. To route ${O(T, "the host", "the hosts")} through the relay, take ${O(T, "it", "them")} out of NO_PROXY and no_proxy in the runner's environment; if the entry must stay (a parent domain, say), ask Anthropic to list ${O(T, "the host", "the hosts")} as direct instead.`);
  }
  let E = governedHosts.filter(item => item !== ur);
  if (gitConfigArm && clientCertificateVariablesSet.length > 0 && E.length > 0) {
    let T = E.length;
    w.push(`[runner:warn] governed git: ${clientCertificateVariablesSet.join(" and ")} ${O(clientCertificateVariablesSet.length, "is", "are")} set on this runner, a TLS client certificate that git offers to every server, and the server governs ${O(T, "host")} ${E.join(", ")}. Inside a session git reaches ${O(T, "that host", "those hosts")} through the session's relay, so it is the relay that git would offer the certificate to, and not your company's server: a server that demands a client certificate will refuse the session's git. The runner leaves ${O(clientCertificateVariablesSet.length, "the variable as it is", "both variables as they are")}. If ${O(T, "that host demands", "those hosts demand")} one, ask Anthropic to list ${O(T, "it", "them")} as direct; otherwise unset the ${O(clientCertificateVariablesSet.length, "variable", "variables")} for the runner, or scope the certificate to the servers that need it (http.<url>.sslCert and http.<url>.sslKey in the machine's system git config).`);
  }
  return w;
}
import { constants as zu } from "fs";
import { open as Xu, unlink as ua } from "fs/promises";
var qu = ["/etc/ssl/certs/ca-certificates.crt", "/etc/pki/tls/certs/ca-bundle.crt"],
  Zu = 1048576,
  Ju = 8388608;
async function $s(e, path, r = qu) {
  if (e === void 0) return {
    status: "unavailable",
    reason: "variable_unset"
  };
  let s = await da(e, Zu);
  if (s.kind !== "text") return {
    status: "unavailable",
    reason: s.kind === "too_large" ? "file_too_large" : "file_unreadable"
  };
  if (/^-----BEGIN (?!CERTIFICATE-----)[A-Z0-9 ]*CERTIFICATE-----/m.test(s.text)) return {
    status: "unavailable",
    reason: "file_other_certificate_kinds"
  };
  let o = s.text.match(iL);
  if (!o) return {
    status: "unavailable",
    reason: "file_not_pem"
  };
  let i;
  for (let h of r) {
    let w = await da(h, Ju);
    if (w.kind === "text" && w.text.match(iL)) {
      i = w.text;
      break;
    }
  }
  if (i === void 0) return {
    status: "unavailable",
    reason: "no_system_roots"
  };
  let u = new Set(i.match(iL)),
    l = i.endsWith(`
`) ? i : `${i}
`;
  for (let h of o) if (!u.has(h)) u.add(h), l += `${h}
`;
  try {
    await An(path, l, 384);
  } catch (error) {
    return t(`[runner:session] governed git: the trust bundle could not be written: ${d(error)}`, {
      level: "warn"
    }), await ua(path).catch(() => {}), {
      status: "unavailable",
      reason: "bundle_write_failed"
    };
  }
  return {
    status: "built",
    path: path
  };
}
async function So(e) {
  try {
    await ua(e);
  } catch (error) {
    if (!G(error)) throw error;
  }
}
async function da(e, n) {
  let r;
  try {
    r = await Xu(e, zu.O_RDONLY | kXn);
  } catch {
    return {
      kind: "unreadable"
    };
  }
  try {
    let s = await r.stat();
    if (!s.isFile()) return {
      kind: "unreadable"
    };
    if (s.size > n) return {
      kind: "too_large"
    };
    let o = Buffer.alloc(n + 1),
      i = 0;
    while (i < o.length) {
      let {
        bytesRead: bytesRead_3
      } = await r.read(o, i, o.length - i, i);
      if (bytesRead_3 === 0) break;
      i += bytesRead_3;
    }
    if (i > n) return {
      kind: "too_large"
    };
    return {
      kind: "text",
      text: o.toString("utf8", 0, i)
    };
  } catch {
    return {
      kind: "unreadable"
    };
  } finally {
    await r.close().catch(() => {});
  }
}
function ca(e, n) {
  return {
    serverCertificateFile: Ps(e, "GIT_SSL_CAINFO", n),
    serverSkipVerification: Ps(e, "GIT_SSL_NO_VERIFY", n)
  };
}
function Ps(e, n, r) {
  if (e === void 0) return;
  if (Object.hasOwn(e, n)) return e[n];
  if (!r) return;
  for (let [s, o] of Object.entries(e)) if (s.toUpperCase() === n) return o;
  return;
}
function la(e, n, r) {
  return Ps(e, "GIT_CONFIG_PARAMETERS", r) ?? Ps(n, "GIT_CONFIG_PARAMETERS", r);
}
function fa(e) {
  return typeof e.serverCertificateFile === "string" ? e.serverCertificateFile : void 0;
}
function Eo(e, n, gitReadsEnvironmentConfig, trustBundle) {
  return y3t({
    role: "child",
    operator: e.operator,
    serverCertificateFile: fa(n),
    serverSetsSkipVerification: n.serverSkipVerification !== void 0,
    routing: e.routing,
    gitConfigArm: n.gitConfigArm,
    gitReadsEnvironmentConfig: gitReadsEnvironmentConfig,
    trustBundle: trustBundle
  });
}
async function ha(e, n, r, s) {
  let answer = Eo(e, n, !0, e.trustBundle);
  if (answer.decision.certificateFile !== "moved" && answer.decision.skipVerification !== "moved") return {
    answer: answer,
    trustBundle: e.trustBundle
  };
  if (!(await r())) return {
    answer: Eo(e, n, !1, e.trustBundle),
    trustBundle: e.trustBundle
  };
  if (answer.decision.certificateFile !== "moved") return {
    answer: answer,
    trustBundle: e.trustBundle
  };
  let i = fa(n)?.trim(),
    u = e.operator.certificateFile[0]?.value.trim();
  if (i === void 0 || i === u) return {
    answer: answer,
    trustBundle: e.trustBundle
  };
  let trustBundle_2 = e.otherSessionsShareTheAccount ? {
    status: "unavailable",
    reason: "shared_with_other_sessions"
  } : await s(i, n.serverValueTrustBundlePath);
  return {
    answer: Eo(e, n, !0, trustBundle_2),
    trustBundle: trustBundle_2
  };
}
function Qu(e) {
  return (e?.commandScopeEntries ?? []).filter(([n, r]) => /^http\..+\.sslVerify$/i.test(n) && r === "true" || /^http\..+\.sslCAInfo$/i.test(n));
}
function ec(e, n) {
  if (n.length === 0) return {};
  let r = e === void 0 || e === null ? "" : String(e);
  if (r.trim() === "" || n.some(([o]) => o.includes("="))) return {
    GIT_CONFIG_PARAMETERS: void 0
  };
  let s = n.map(([o, i]) => `'${`${o}=${i}`.replace(/'/g, "'\\''")}'`);
  return {
    GIT_CONFIG_PARAMETERS: [r, ...s].join(" ")
  };
}
function pa(e, n, r, s) {
  let o = [...(r ? [["include.path", r]] : []), ...(e?.commandScopeEntries ?? [])];
  return {
    ...e?.envOverrides,
    ...(o.length > 0 && UW(n, o)),
    ...ec(s, Qu(e))
  };
}
var ga = [2, 31];
var cm = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-"];
import { join as nc } from "path";
var rc = 131072,
  oc = 1e4,
  key = "append-subagent-system-prompt",
  ma = [{
    key: "system-prompt",
    fileName: "remote-system-prompt.txt"
  }, {
    key: "append-system-prompt",
    fileName: "remote-append-system-prompt.txt"
  }, {
    key: key,
    fileName: "remote-append-subagent-system-prompt.txt",
    pinnedChildMayLackFileFlag: !0
  }];
function _a(e, n) {
  let r = {
    ...e
  };
  for (let {
    key: key_2
  } of ma) if (key_2 !== key || !n) delete r[key_2];
  return r;
}
async function wa(e) {
  let {
      args: args_2,
      claudeCodeArgs: claudeCodeArgs,
      configDir: configDir_2,
      stagedPaths: stagedPaths_2,
      onDebug: onDebug_2
    } = e,
    u = {
      ...claudeCodeArgs
    };
  for (let {
    key: key_3,
    fileName: fileName,
    pinnedChildMayLackFileFlag: pinnedChildMayLackFileFlag
  } of ma) {
    let f = claudeCodeArgs[key_3],
      S = f === void 0 ? "" : String(f);
    if (S === "") continue;
    let E = Buffer.byteLength(S, "utf8");
    if (pinnedChildMayLackFileFlag && !e.childIsOwnBinary) {
      let v = [];
      if (g2t(v, key_3, S), v.every(item => Buffer.byteLength(item, "utf8") < rc)) continue;
    }
    delete u[key_3];
    let T = nc(configDir_2, fileName);
    stagedPaths_2.push(T);
    let U = {
      cancelled: !1
    };
    try {
      await ml(gr(configDir_2, fileName, S, 384, U), oc, `[runner:stuck] write ${T} (check NFS/CSI mount health)`);
    } catch (error) {
      throw U.cancelled = !0, new x(`could not write the ${key_3} file for the session (${E} bytes, ${Tg(error) ?? "unknown error"})`, "could not write a system prompt file for the session");
    }
    args_2.push(`--${key_3}-file`, T), onDebug_2(`[runner:session] delivering ${key_3} by file: ${T} (${E} bytes)`);
  }
  return u;
}
var Ea = {
  e2big: "the launch configuration was too large",
  enoent: "the Claude Code executable or working directory was not found",
  eacces: "the Claude Code executable could not be executed",
  enoexec: "the Claude Code executable could not be executed",
  eio: "the system could not start the Claude Code process",
  enomem: "the system could not start the Claude Code process"
};
function ic(e) {
  if (e === void 0 || e === null) return;
  let n = k(e)?.toLowerCase() ?? "";
  return ac(n) ? n : "other";
}
function ac(e) {
  return Object.hasOwn(Ea, e);
}
function ko(e) {
  return {
    start_error_class: e.class,
    max_arg_len: e.maxArgLen,
    max_env_len: e.maxEnvLen
  };
}
function Sa(e) {
  let n = 0;
  for (let r of e) n = Math.max(n, Buffer.byteLength(r, "utf8"));
  return n;
}
function ka(e, n, r) {
  let s = ic(e) ?? "other",
    maxArgLen = Sa(n),
    maxEnvLen = Sa(Object.entries(r).flatMap(([l, h]) => h === void 0 ? [] : [`${l}=${h}`])),
    u = s === "other" ? Fr(e) ?? "unknown error" : `${Ea[s]} (${s.toUpperCase()}${s === "e2big" ? `; longest argument ${maxArgLen} bytes, longest environment entry ${maxEnvLen} bytes` : ""})`;
  return {
    class: s,
    maxArgLen: maxArgLen,
    maxEnvLen: maxEnvLen,
    description: `spawn error: ${u}`
  };
}
import { readdirSync as Qm, readFileSync as dc } from "fs";
import { readFile as uc } from "fs/promises";
var va = 64;
var Ra = 3000;
async function Ta(e, n) {
  let r = [...e.pinned],
    proven = new Map(),
    ownPgrp,
    i = !1,
    u = I(),
    l;
  if (u === "macos") l = hc([process.pid, ...r.map(([w]) => w)], n).then(w => {
    let f = cc(w, process.pid, e.pinned);
    if (f === void 0) {
      i = !0;
      return;
    }
    ownPgrp = f.ownPgrp;
    for (let [S, E] of f.proven) proven.set(S, E);
  });else if (u === "linux" || u === "wsl") ownPgrp = lc(), l = ya(r, async ([w, f]) => {
    let S = await uc(`/proc/${w}/stat`, "utf8").catch(() => {
      return;
    });
    if (S !== void 0 && I5(S) === f && !Bne(xTe(S))) proven.set(w, Cmn(S));
  });else l = ya(r, async ([w, f]) => {
    if ((await Uh(w, f)) === !0) proven.set(w, void 0);
  });
  let h = await je(l.then(() => !0), n).catch(() => {
    return;
  });
  return {
    proven: proven,
    ownPgrp: ownPgrp,
    incomplete: i || h !== !0
  };
}
function cc(e, n, r) {
  let s = e.get(n);
  if (s === void 0) return;
  let proven_2 = new Map();
  for (let [i, u] of r) {
    let l = e.get(i);
    if (l !== void 0 && l.token === u) proven_2.set(i, l.pgrp);
  }
  return {
    proven: proven_2,
    ownPgrp: s.pgrp
  };
}
async function ba(e, n = Ra) {
  let {
    proven: proven_3,
    incomplete: incomplete
  } = await Ta(e, n);
  return {
    live: proven_3.size,
    incomplete: incomplete
  };
}
async function vo(e, n, r = Ra) {
  let {
      proven: proven_4,
      ownPgrp: ownPgrp_2,
      incomplete: incomplete_2
    } = await Ta(e, r),
    groups = 0;
  if (ownPgrp_2 !== void 0) {
    let h = new Set();
    for (let w of proven_4.values()) if (w !== void 0 && w > 1 && w !== e.rootPid && w !== ownPgrp_2 && w !== process.pid) h.add(w);
    for (let w of h) try {
      process.kill(-w, n), groups++;
    } catch {}
  }
  let pids = 0;
  for (let h of proven_4.keys()) try {
    process.kill(h, n), pids++;
  } catch {}
  return {
    proven: proven_4.size,
    pids: pids,
    groups: groups,
    incomplete: incomplete_2
  };
}
function lc() {
  try {
    return Cmn(dc("/proc/self/stat", "utf8"));
  } catch {
    return;
  }
}
function fc() {
  return {
    USER_TYPE: "external",
    NODE_ENV: "production",
    LC_ALL: "C",
    TZ: "UTC"
  };
}
async function hc(e, timeout) {
  let r = await ct("ps", ["-o", "pid=", "-o", "pgid=", "-o", "stat=", "-o", "lstart=", "-p", e.join(",")], {
    timeout: timeout,
    env: fc(),
    cwd: "/",
    stripFinalNewline: !1
  });
  return pc(r.stdout);
}
function pc(e) {
  let n = new Map(),
    r = e.slice(0, e.lastIndexOf(`
`) + 1);
  for (let s of r.split(`
`)) {
    let o = /^\s*(\d+)\s+(\d+)\s+(\S+)\s+(\S.*?)\s*$/.exec(s),
      i = o?.[3],
      token = o?.[4];
    if (o && i !== void 0 && token !== void 0 && !i.startsWith("Z")) n.set(Number(o[1]), {
      pgrp: Number(o[2]),
      token: token
    });
  }
  return n;
}
async function ya(e, n) {
  for (let r = 0; r < e.length; r += va) await Promise.all(e.slice(r, r + va).map(n));
}
function Aa() {
  let e,
    n,
    r = {};
  return {
    start(s = Date.now()) {
      if (e === void 0) e = s, n = s;
    },
    mark(s, o = Date.now()) {
      if (n === void 0) return;
      r[s] = (r[s] ?? 0) + Math.max(0, o - n), n = o;
    },
    lap(s = Date.now()) {
      if (n !== void 0) n = s;
    },
    finish(s = Date.now()) {
      if (e === void 0) return {};
      return {
        ...r,
        runner_prep_total_ms: Math.max(0, s - e)
      };
    }
  };
}
var Oa = "CCR_SHR_START_MARKS";
import { constants as gc } from "fs";
import { lstat as m_, open as mc, opendir as __ } from "fs/promises";
import { join as Qr } from "path";
var Ns = "/tmp",
  _c = "ccr-byoc-prewarm-vda.done",
  wc = "ccr-byoc-prewarm-stat.done",
  Sc = "ccr-byoc-prewarm-idx.done",
  $a = "ccr-byoc-prefetch-network.state";
var Ca = 4096;
var Ec = /(?:^|\s)([a-z_]+)=(\S+)/g;
function Pa(e) {
  let n = new Map();
  for (let [, r, s] of e.matchAll(Ec)) n.set(r, s);
  return n;
}
function Jr(e) {
  if (e === void 0 || !/^\d{1,9}$/.test(e)) return;
  return Number(e);
}
function kc(e) {
  if (e === void 0 || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(e)) return;
  let n = Date.parse(e);
  return Number.isFinite(n) ? n : void 0;
}
function vc(e, n) {
  if (e === void 0) return;
  return Math.max(0, Math.round((n - e) / 1000));
}
function yo(e) {
  if (e === void 0) return {
    outcome: "absent"
  };
  let n = Pa(e),
    r = n.get("aborted");
  return {
    outcome: r !== void 0 ? r === "timeout" ? "timeout" : "aborted" : n.get("yielded") === "1" ? "yielded" : "done",
    elapsedS: Jr(n.get("elapsed_s"))
  };
}
function Ma(e, n) {
  if (e === void 0) return {
    prefetch_phase: "absent"
  };
  let r = Pa(e),
    s = r.get("phase"),
    prefetch_phase,
    prefetch_phase_reason;
  if (s !== void 0) {
    let u = s.indexOf(":");
    prefetch_phase = (u === -1 ? s : s.slice(0, u)).toLowerCase(), prefetch_phase_reason = u === -1 ? void 0 : s.slice(u + 1).toLowerCase();
  }
  return {
    prefetch_phase: prefetch_phase,
    prefetch_phase_reason: prefetch_phase_reason,
    prefetch_runs: Jr(r.get("runs")),
    prefetch_ok: Jr(r.get("ok")),
    prefetch_last_ok_age_s: vc(kc(r.get("last_ok_ts")), n),
    prefetch_last_duration_s: Jr(r.get("last_duration_s")),
    prefetch_midx: Jr(r.get("midx"))
  };
}
async function Na(e = {}) {
  let n = await es(Qr(e.dir ?? Ns, $a));
  return (Ma(n, Date.now()).prefetch_ok ?? 0) >= 1;
}
async function es(e) {
  let n;
  try {
    n = await mc(e, gc.O_RDONLY | Us);
    let r = Buffer.alloc(Ca),
      {
        bytesRead: bytesRead_4
      } = await n.read(r, 0, Ca, 0),
      o = r.subarray(0, bytesRead_4).toString("utf8"),
      i = o.indexOf(`
`);
    return (i === -1 ? o : o.slice(0, i)).trim() || void 0;
  } catch {
    return;
  } finally {
    await n?.close().catch(() => {});
  }
}
async function Ro(e = {}) {
  let n = e.dir ?? Ns,
    [r, s, o] = await Promise.all([es(Qr(n, _c)), es(Qr(n, wc)), es(Qr(n, Sc))]),
    i = yo(r),
    u = yo(s),
    l = yo(o);
  return {
    prewarm_vda_outcome: i.outcome,
    prewarm_vda_elapsed_s: i.elapsedS,
    prewarm_stat_outcome: u.outcome,
    prewarm_stat_elapsed_s: u.elapsedS,
    prewarm_idx_outcome: l.outcome
  };
}
function La(e, n) {
  let r = {
    ...e
  };
  if (e.prewarm_vda_outcome === "absent" && n.prewarm_vda_outcome !== void 0) r.prewarm_vda_outcome = n.prewarm_vda_outcome, r.prewarm_vda_elapsed_s = n.prewarm_vda_elapsed_s;
  if (e.prewarm_stat_outcome === "absent" && n.prewarm_stat_outcome !== void 0) r.prewarm_stat_outcome = n.prewarm_stat_outcome, r.prewarm_stat_elapsed_s = n.prewarm_stat_elapsed_s;
  if (e.prewarm_idx_outcome === "absent" && n.prewarm_idx_outcome !== void 0) r.prewarm_idx_outcome = n.prewarm_idx_outcome;
  return r;
}
async function Da(e = {}) {
  let dir = e.dir ?? Ns,
    r = e.now ?? Date.now(),
    [s, o] = await Promise.all([Ro({
      dir: dir
    }), es(Qr(dir, $a))]);
  return {
    ...s,
    ...Ma(o, r)
  };
}
var yc = 1e4,
  R_ = 4 * yc;
function decodeExpiry(e) {
  return jO(e.replace(/^sk-ant-[a-z]+-/, ""));
}
function Ls(e) {
  let n = e.replace(/^sk-ant-[a-z]+-/, ""),
    r = QN(n);
  if (r === null || typeof r !== "object") return null;
  let act = r.act;
  if (act === null || typeof act !== "object") return null;
  let email = act.email;
  return typeof email === "string" ? email : null;
}
function Ia(e) {
  let n = e.replace(/^sk-ant-[a-z]+-/, ""),
    r = QN(n);
  if (r === null || typeof r !== "object") return null;
  let s = r["ccr:spawn_session_id"];
  return typeof s === "string" && s.length > 0 ? s : null;
}
function ts(e) {
  let n = QN(e.replace(/^sk-ant-[a-z]+-/, ""));
  return n !== null && typeof n === "object" && "ccr:role" in n && n["ccr:role"] === "pool_spawn";
}
function Ds({
  getAccessToken: getAccessToken,
  onRefresh: onRefresh,
  label: label
}) {
  return Ght({
    getAccessToken: getAccessToken,
    onRefresh: onRefresh,
    label: label,
    maxFailures: 1 / 0,
    adaptiveBuffer: !0,
    rescheduleFromNewToken: !0,
    decodeExpiry: decodeExpiry,
    formatDelay: formatDelay
  });
}
import { randomUUID as To } from "crypto";
var xa = 2000;
function mr(e) {
  return e instanceof Error && "isEpochMismatch" in e && e.isEpochMismatch === !0;
}
function bo(e) {
  return e instanceof Error && "isNotFound" in e && e.isNotFound === !0;
}
function Rc(e) {
  return e instanceof Error && "isSessionNotActive" in e && e.isSessionNotActive === !0;
}
function Is(e) {
  return bo(e) || Rc(e);
}
async function Ao(e) {
  let {
    apiClient: apiClient,
    apiBaseUrl: apiBaseUrl,
    sessionId: sessionId,
    sessionToken: sessionToken,
    workerEpoch: workerEpoch,
    exitCode: exitCode,
    exitSignal: exitSignal,
    stderrTail: stderrTail,
    setupTerminal: setupTerminal,
    startError: startError,
    refusedByHostPolicy: refusedByHostPolicy,
    ranAsThread: ranAsThread,
    onDebug: onDebug_3,
    onStatus: onStatus_4,
    signal: signal
  } = e;
  if (signal.aborted) return onDebug_3(`[runner:session] Skipping failure-result post for ${sessionId} \u2014 session was deliberately aborted`), "skipped";
  let N = [...(startError ? [Tc(startError)] : []), ...bc({
      exitCode: exitCode,
      exitSignal: exitSignal,
      stderrTail: stderrTail,
      setupTerminal: setupTerminal,
      startError: startError,
      refusedByHostPolicy: refusedByHostPolicy,
      ranAsThread: ranAsThread
    })],
    B = () => apiClient.postWorkerEvents(apiBaseUrl, sessionId, sessionToken, workerEpoch, N, signal);
  try {
    return await B(), onDebug_3(`[runner:session] Posted failure result for ${sessionId} (exitCode=${exitCode} signal=${exitSignal})`), "posted";
  } catch (error) {
    if (Is(error)) return onDebug_3(`[runner:session] failure-result rejected (session gone) \u2014 ${sessionId} is archived or deleted server-side`), "session_gone";
    if (mr(error)) return onDebug_3(`[runner:session] failure-result rejected (stale epoch) \u2014 another runner has taken over ${sessionId}. This process was the orphan.`), "epoch_stale";
    let M = sc(error instanceof Error ? error.message : String(error));
    onStatus_4(`[runner:stuck] Failed to post failure-result for ${sessionId} (attempt 1): ${M} \u2014 retrying in 2s`), await Y(2000, signal);
  }
  try {
    return await B(), onDebug_3(`[runner:session] Posted failure result for ${sessionId} on retry (exitCode=${exitCode} signal=${exitSignal})`), "posted";
  } catch (error) {
    if (Is(error)) return onDebug_3(`[runner:session] failure-result rejected (session gone on retry) \u2014 ${sessionId} is archived or deleted server-side`), "session_gone";
    if (mr(error)) return onDebug_3(`[runner:session] failure-result rejected (stale epoch on retry) \u2014 another runner has taken over ${sessionId}. This process was the orphan.`), "epoch_stale";
    let M = sc(error instanceof Error ? error.message : String(error));
    return onStatus_4(`[runner:stuck] Failed to post failure-result for ${sessionId} after retry: ${M} \u2014 UI spinner may not stop`), "post_failed";
  }
}
function Tc(e) {
  return {
    type: "env_manager_log",
    uuid: To(),
    data: {
      level: "error",
      category: "execute",
      content: "Claude Code execution failed",
      timestamp: new Date().toISOString(),
      extra: {
        error: e.description,
        exit_code: -1,
        duration_ms: 0,
        stderr_class: "",
        ...ko(e)
      }
    }
  };
}
function bc({
  exitCode: e,
  exitSignal: n,
  stderrTail: stderrTail_2,
  setupTerminal: setupTerminal_2,
  startError: startError_2,
  refusedByHostPolicy: refusedByHostPolicy_2 = !1,
  ranAsThread: ranAsThread_2 = !1
}) {
  let l = e !== null || n !== null,
    h = e === null ? "failed to start" : `exited with code ${e}`,
    w = ranAsThread_2 ? "Claude stopped unexpectedly." : `The session process ${h}.`,
    text = refusedByHostPolicy_2 ? `${w} This machine's managed settings (disableSideloadFlags) refused the launch.` : `${w} You can try again by sending a new message or starting a new session.`;
  if (stderrTail_2.trim().length > 0) {
    let T = stderrTail_2.length > xa ? `\u2026${stderrTail_2.slice(-xa)}` : stderrTail_2;
    text += `

Last output before exit:
${T}`;
  }
  let S = {
      type: "assistant",
      uuid: To(),
      message: {
        role: "assistant",
        model: model,
        content: [{
          type: "text",
          text: text
        }],
        stop_reason: "stop_sequence",
        usage: {
          input_tokens: 0,
          output_tokens: 0
        }
      },
      parent_tool_use_id: null,
      isApiErrorMessage: !0
    },
    E = {
      type: "result",
      uuid: To(),
      subtype: "error_during_execution",
      is_error: !0,
      duration_ms: 0,
      duration_api_ms: 0,
      num_turns: 0,
      total_cost_usd: 0,
      errors: [text],
      runner_exit: l ? {
        phase: "run",
        exit_code: e,
        signal: n
      } : {
        phase: "setup",
        ...(startError_2 && ko(startError_2)),
        ...(setupTerminal_2 && {
          terminal: !0
        })
      },
      modelUsage: {},
      permission_denials: [],
      usage: {
        input_tokens: 0,
        output_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0
      }
    };
  return [S, E];
}
var Ac = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,62}\.(py|sh)$/,
  Oc = new Set(["Stop", "SubagentStop", "UserPromptSubmit", "SessionStart", "SessionEnd", "PreToolUse", "PostToolUse", "PreCompact", "Notification"]),
  Ua = 131072;
function Ur(e) {
  let n = _(e) ?? String(e),
    r = Buffer.byteLength(n, "utf8");
  return r <= 200 ? n : `${n.slice(0, 200)}\u2026 (+${r - 200} bytes)`;
}
function Fa(e) {
  if (!Array.isArray(e)) return `launcher_hooks: not an array (got ${Ur(e)})`;
  let n = new Set();
  for (let [r, s] of e.entries()) {
    if (s === null || typeof s !== "object") return `launcher_hooks[${r}]: not an object (got ${Ur(s)})`;
    if (typeof s.event !== "string" || !Oc.has(s.event)) return `launcher_hooks[${r}]: unknown event ${Ur(s.event)}`;
    if (typeof s.filename !== "string" || !Ac.test(s.filename)) return `launcher_hooks[${r}]: invalid filename ${Ur(s.filename)}`;
    let o = s.filename.toLowerCase();
    if (n.has(o)) return `launcher_hooks[${r}]: duplicate filename ${_(s.filename)} (case-insensitive)`;
    n.add(o);
    let i = typeof s.script === "string" ? Buffer.byteLength(s.script, "utf8") : 0;
    if (i === 0 || i > Ua) return `launcher_hooks[${r}] ${_(s.filename)}: script size ${i} out of range (1..${Ua})`;
  }
  return;
}
function St(e) {
  let n = process.env[e];
  if (n === void 0 || n === "") return 0;
  let r = Number(n);
  if (!Number.isFinite(r) || r <= 0) return 0;
  return Math.min(r, 2147483647);
}
var Oo = 900000;
function Ga() {
  let SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS = process.env.SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS;
  return SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS === void 0 || SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS === "" ? Oo : St("SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS");
}
function xs() {
  let SELF_HOSTED_RUNNER_DRAIN_WAIT_MS = process.env.SELF_HOSTED_RUNNER_DRAIN_WAIT_MS;
  return SELF_HOSTED_RUNNER_DRAIN_WAIT_MS !== void 0 && SELF_HOSTED_RUNNER_DRAIN_WAIT_MS !== "" ? St("SELF_HOSTED_RUNNER_DRAIN_WAIT_MS") : St("SELF_HOSTED_RUNNER_DRAIN_WAIT_BG_TASKS_MS");
}
var Lc = 2000,
  Bn = 1e4,
  _r = 60000,
  Do = "mcp-config.delivered.json",
  Dc = '{"mcpServers":{}}',
  Fs = {
    rm_failed: {
      note: "; its partial checkout could not be removed and may remain visible to this session",
      sad: "context_source_checkout_cleanup_failed"
    },
    kept_prepared_twin: {
      note: "; its checkout path names an already-prepared repository (same name, different casing) and was left in place",
      sad: "context_source_checkout_kept_prepared_twin"
    }
  },
  ir = 30000,
  Ba = 60000,
  Wa = 60000,
  Br = 30000,
  cd = 3000,
  Ka = [2, 26];
function Ic(e, n = Date.now() / 1000) {
  return (decodeExpiry(e) ?? 0) > n;
}
function Bo() {
  return 0;
}
function xc(e) {
  if (a.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  return "";
}
async function ld(e) {
  let GIT_CONFIG_GLOBAL = process.env.GIT_CONFIG_GLOBAL,
    r = process.env.HOME || Lo(),
    s = process.env.XDG_CONFIG_HOME || ae(r, ".config"),
    o = GIT_CONFIG_GLOBAL ? [GIT_CONFIG_GLOBAL] : [ae(s, "git", "config"), ae(r, ".gitconfig")],
    i = [];
  for (let h of o) {
    try {
      await Xh(dd(h), `stat ${h}`);
    } catch (error) {
      if (!G(error)) e(`[runner] governed git: could not read ${h} for gitconfig seed (${error}); skipping it`);
      continue;
    }
    try {
      let w = await Io(["config", "--file", h, "--list", "-z"]);
      for (let f of w.split("\x00")) {
        if (!f) continue;
        let S = f.indexOf(`
`),
          E = S === -1 ? f : f.slice(0, S),
          T = S === -1 ? "true" : f.slice(S + 1);
        i.push([E, T]);
      }
      e(`[runner] governed git: captured gitconfig seed from ${h} (startup snapshot)`);
    } catch (error) {
      e(`[runner] governed git: could not parse ${h} for gitconfig seed (${error}); skipping it`);
    }
  }
  let u = i.filter(([h, w]) => Ya(h, w));
  if (u.length < i.length) {
    let h = S => {
        let E = S.indexOf("."),
          T = S.lastIndexOf(".");
        return E === T ? S : `${S.slice(0, E)}.*${S.slice(T)}`;
      },
      w = i.filter(([S, E]) => !Ya(S, E)),
      f = L(w.map(([S]) => h(S))).sort();
    e(`[runner] governed git: seed filter dropped ${w.length} non-allowlisted gitconfig entries (families: ${f.join(", ")})`);
  }
  if (u.length === 0) return "";
  let l;
  try {
    l = await $c(ae(Pc(), "ccr-govseed-"));
    let h = ae(l, "seed.gitconfig");
    for (let [w, f] of u) await Io(["config", "--file", h, "--add", w, f]);
    return await Xh(id(h, "utf8"), `read ${h}`);
  } catch (error) {
    return e(`[runner] governed git: seed serialization failed (${error}); governed sessions seed an empty gitconfig`), "";
  } finally {
    if (l) await Je(l, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
function Ya(e, n) {
  let r = e.toLowerCase();
  if (r.startsWith("user.")) return !0;
  if (r === "core.autocrlf" || r === "core.safecrlf" || r === "core.eol") return !0;
  if (r === "push.negotiate") return !0;
  if (r.startsWith("url.") && r.endsWith(".insteadof")) {
    let s = e.slice(4, e.length - 10);
    return !/\/\/[^/]*@/.test(s);
  }
  if (r.startsWith("alias.")) return !n.trimStart().startsWith("!");
  if (r.startsWith("http.")) {
    let s = r.slice(5);
    if (s.includes(".")) return !1;
    return Uc.has(s);
  }
  return !1;
}
var Uc = new Set(["postbuffer", "lowspeedlimit", "lowspeedtime", "version"]);
async function Io(e) {
  return await new Promise((n, r) => {
    let s = xn("git", e, {
        cwd: void 0,
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: !0,
        ...vd("helper"),
        env: {
          ...process.env,
          GIT_CONFIG_GLOBAL: "/dev/null",
          GIT_CONFIG_SYSTEM: "/dev/null"
        }
      }),
      o = "",
      i = "";
    s.stdout?.on("data", l => o += String(l)), s.stderr?.on("data", l => i += String(l));
    let u = setTimeout(l => l.kill("SIGKILL"), ir, s);
    s.on("close", l => {
      if (clearTimeout(u), l === 0) n(o);else r(new x(`git ${e[0]} ${e[1] ?? ""} exited ${l}: ${i.trim()}`, "git invocation for the governed per-session gitconfig failed"));
    }), s.on("error", l => {
      clearTimeout(u), r(l);
    });
  });
}
async function Fc(e, n) {
  await An(e, n, 384);
}
function Gc(e) {
  return ae(e, "hooks", lo);
}
async function ja(e) {
  let {
      configDir: configDir_3,
      baseDir: baseDir_2,
      hookStubs: hookStubs,
      signingArtifacts: signingArtifacts,
      onDebug: onDebug_4,
      onStatus: onStatus_5
    } = e,
    l = Gc(configDir_3);
  if (signingArtifacts.length === 0) throw new x(`--configure-git: code-sign artifacts must be present to materialize ${l} (got ${hookStubs.length} stubs, ${signingArtifacts.length} signing artifacts)`, "--configure-git: incomplete startup artifacts for the session-scoped git dir");
  let h = ae(configDir_3, "hooks"),
    w = () => xr(configDir_3, onStatus_5).catch(S => {
      throw new x(`--configure-git: could not inspect ${h} \u2014 ${S instanceof Error ? S.message : String(S)}`, "--configure-git: could not inspect configDir/hooks");
    }),
    f = !1;
  try {
    if (!(await w())) onStatus_5(`[runner:session] ${h} was not a plain directory \u2014 replaced it before materializing session-scoped git artifacts`), await Xh(Je(h, {
      force: !0
    }), `rm ${h}`);
    if (await Xh(Vt(h, {
      recursive: !0,
      mode: 448
    }), `mkdir ${h}`), !(await w())) throw new x(`--configure-git: ${h} is still not a plain directory after repair \u2014 refusing to materialize session-scoped git artifacts`, "--configure-git: configDir/hooks is not a plain directory");
    if (await Xh(Je(l, {
      recursive: !0,
      force: !0
    }), `rm ${l}`), await Xh(Vt(l, {
      mode: 448
    }), `mkdir ${l}`), f = !0, hookStubs.length > 0) await Xh(Vt(ae(l, "git-hooks"), {
      mode: 448
    }), `mkdir ${ae(l, "git-hooks")}`);
    let S = [...wQn(signingArtifacts, baseDir_2, l), ...wQn(hookStubs, baseDir_2, l).map(item => ({
      ...item,
      mode: 493
    }))];
    for (let E of S) await Xh(vl(E.path, E.content, E.mode), `write ${E.path}`);
    return onDebug_4(`[runner:session] materialized ${S.length} session-scoped --configure-git artifacts under ${l}`), l;
  } catch (error) {
    if (f && (await xr(configDir_3, onStatus_5).catch(() => !1))) await Xh(Je(l, {
      recursive: !0,
      force: !0
    }), `rm ${l}`).catch(() => {});
    if (error instanceof x) throw error;
    throw new x(`--configure-git: could not materialize session-scoped git artifacts under ${l} \u2014 ${error instanceof Error ? error.message : String(error)}`, "--configure-git: could not materialize session-scoped git artifacts");
  }
}
function fd(e) {
  return ["core.hooksPath", e?.hooksPath ?? "/dev/null"];
}
function Hc(e, n, r = Wo) {
  return [...Thn(e).map(([s, o]) => s === "core.hooksPath" ? fd(n) : [s, o]), ...TQn, ...CQn(r, !1)];
}
function Bc(e, n) {
  let r = Thn(e);
  return n ? r.filter(([s]) => s !== "core.hooksPath") : r;
}
var Wo = {
  gpg: "/usr/bin/gpg",
  gpgsm: "/usr/bin/gpgsm",
  sshKeygen: "/usr/bin/ssh-keygen"
};
function Va(e, n = Wo) {
  return [fd(e), ...TQn, ...CQn(n, !0), ["commit.gpgsign", "false"], ["tag.gpgsign", "false"]];
}
async function Wc(e, n, r, s) {
  let o = Fa(n);
  if (o !== void 0) {
    s(`[runner:session] launcher_hooks validation failed \u2014 dropping (CCR deploy regression, session continues without CCR-supplied hooks): ${o}`), m("self_hosted_launcher_hooks", "self_hosted_launcher_hooks_validation_failed");
    return;
  }
  let i = {};
  if (!(await xr(e, s))) {
    m("self_hosted_launcher_hooks", "self_hosted_launcher_hooks_hooksdir_not_plain_dir");
    return;
  }
  let u = ae(e, "hooks", ".ccr-launcher");
  await Xh(Je(u, {
    recursive: !0,
    force: !0
  }), `rm ${u}`), await Xh(Vt(u, {
    recursive: !0,
    mode: 448
  }), `mkdir ${u}`);
  for (let l of n) {
    let command = ae(u, l.filename);
    r.push(command), await Xh(Zn(command), `unlink ${command}`).catch(() => {}), await Xh(Er(command, l.script, {
      flag: "wx",
      mode: 448
    }), `writeFile ${command}`), (i[l.event] ??= []).push({
      matcher: "",
      hooks: [{
        type: "command",
        command: command,
        args: []
      }]
    });
  }
  return i;
}
async function Kc(e, n, r, s, o) {
  let hooks = !Array.isArray(n.hooks) || n.hooks.length > 0 ? await Wc(e, n.hooks, r, o) : void 0,
    autoMode = n.autoMode,
    l = _({
      hooks: hooks,
      autoMode: autoMode
    }, null, 2);
  if (autoMode !== void 0 && Buffer.byteLength(l, "utf8") > bf) o(`[runner:warn] the server's auto mode lists would take launcher-settings.json past the ${bf}-byte limit on a --settings file, so none of them apply in this session. Launcher hooks are unaffected (a server-side fault: nothing on this runner needs changing)`), autoMode = void 0, l = _({
    hooks: hooks
  }, null, 2);
  if (hooks === void 0 && autoMode === void 0) return;
  let settingsPath = ae(e, "launcher-settings.json");
  return r.push(settingsPath), await Xh(Zn(settingsPath), `unlink ${settingsPath}`).catch(() => {}), await Xh(Er(settingsPath, l, {
    flag: "wx",
    mode: 384
  }), `writeFile ${settingsPath}`), s(`[runner:session] Wrote ${settingsPath} (${hooks === void 0 ? "no" : Object.keys(hooks).length} launcher hook event(s), autoMode block ${autoMode === void 0 ? "absent" : "present"})`), {
    settingsPath: settingsPath,
    hooksRegistered: hooks !== void 0,
    autoModeWritten: autoMode !== void 0
  };
}
async function za(e, n, r, s) {
  try {
    await Vt(e, {
      recursive: !0,
      mode: 448
    }), await Er(`${e}/${n}`, r, {
      mode: 384
    });
  } catch (error) {
    s(`[runner:debug] failed to write ${n} to ${e} (best-effort): ${error}`);
  }
}
function Xa(e, n) {
  return ae(e, "_sessions", `${n}.tool-server-config`);
}
function $o(e, n) {
  return ae(e, "_sessions", `${n}.claude-config`);
}
function hd(e, n) {
  return ae(e, `.session_ingress_token.e${n}`);
}
async function Po(e, n, r, s, o = Bn) {
  try {
    return await rs(Vt(fn(e), {
      recursive: !0,
      mode: 448
    }), o, "[runner:session] mkdir for session-ingress token file", s), await rs(An(e, n, 384), o, "[runner:session] write session-ingress token file", s), !0;
  } catch (error) {
    return r(`[runner:session] session-ingress token file write failed (staged-file fetches degraded): ${error}`), !1;
  }
}
async function rs(e, n, r, s) {
  let o = !1;
  e.then(() => {
    o = !0;
  }, () => {
    o = !0;
  });
  try {
    return await ml(e, n, r);
  } catch (error) {
    if (!o) s?.(e.then(() => {}, () => {}));
    throw error;
  }
}
async function Mo(e, n, r, s = Bn) {
  try {
    await rs(Zn(e), s, "[runner:session] unlink session-ingress token file", r);
  } catch (error) {
    if (!G(error)) n(`[runner:session] session-ingress token file cleanup failed: ${error}`);
  }
  let o = /\.session_ingress_token\.e(\d+)$/.exec(e);
  if (!o) {
    n("[runner:session] token temp sweep skipped: target path has no parseable epoch");
    return;
  }
  let i = Number(o[1]),
    u = fn(e);
  try {
    let l = await rs(Ho(u), s, "[runner:session] readdir for token temp sweep", r);
    for (let h of l) {
      if (!h.startsWith(".session_ingress_token.")) continue;
      let w = /^\.session_ingress_token\.e(\d+)\.tmp\./.exec(h);
      if (!w) {
        if (h.includes(".tmp.")) n("[runner:session] token temp sweep skipped an unparseable sibling");
        continue;
      }
      if (Number(w[1]) > i) continue;
      try {
        await rs(Zn(ae(u, h)), s, "[runner:session] unlink token temp file", r);
      } catch (error) {
        if (!G(error)) n(`[runner:session] token temp sweep failed for a sibling: ${error}`);
      }
    }
  } catch (error) {
    if (!G(error)) n(`[runner:session] token temp sweep readdir failed: ${error}`);
  }
}
var pd = new Set(["sdk-url", "resume", "print", "input-format", "output-format", "replay-user-messages", "debug-file", "mcp-config", "settings", ...F5o, "agents"]),
  aE = new Set([...pd, "deep-link-origin", "deep-link-cwd-b64", "worktree", "tmux"]);
async function Yc(e, n, r) {
  let s = e.get(n) ?? Promise.resolve(),
    o,
    promise = new Promise(u => {
      o = u;
    });
  e.set(n, promise), await s.catch(() => {});
  try {
    return await r();
  } finally {
    if (o(), e.get(n) === promise) e.delete(n);
  }
}
class SourceRefNotFoundError extends x {
  repo;
  ref;
  constructor(e, n) {
    let r = n ? `'${n}'` : "the configured ref";
    super(`The branch ${r} in ${e} no longer exists on the remote (it was likely deleted after a merge). To resume this session: restore the branch on the merged PR, then click Try again. (couldn't find remote ref)`, "source ref not found on remote (branch deleted after merge)");
    this.name = "SourceRefNotFoundError", this.repo = e, this.ref = n;
  }
}
async function jc(e) {
  let {
      sessionId: sessionId_2,
      targets: targets,
      onStatus: onStatus_6,
      timeoutMs = _r,
      label: label_2 = "--remove-session-state",
      noDeleteInPlace = !1
    } = e,
    l = [];
  return await Promise.allSettled(targets.map(async item => {
    let w = ae(fn(item.path), `.removing-${Mc(item.path)}-${Ks()}`),
      f = w,
      S = noDeleteInPlace ? lDe(item.path, w, Ha) : Ha(item.path, w),
      E = !1;
    S.then(() => E = !0, () => E = !0);
    try {
      await ml(S, timeoutMs, `rename ${item.path}`);
    } catch (error) {
      if (G(error)) {
        l.push(item.path);
        return;
      }
      if (!E || noDeleteInPlace) {
        onStatus_6(`[runner:session] ${sessionId_2}: ${label_2} could not set ${item.path} aside (${error}) \u2014 left for disk recycle${E ? "" : ` (it may appear as ${w})`}`);
        return;
      }
      f = item.path;
    }
    try {
      await ml(Je(f, {
        recursive: item.recursive,
        force: !0,
        maxRetries: 3,
        retryDelay: 100
      }), timeoutMs, `rm ${f}`), l.push(item.path);
    } catch (error) {
      onStatus_6(`[runner:session] ${sessionId_2}: ${label_2} could not remove ${item.path}${f === w ? ` (set aside as ${w})` : ""} \u2014 left for disk recycle: ${error}`);
    }
  })), l;
}
async function gd(sessionId_3, n, signal_2) {
  let {
      apiClient: apiClient_2,
      getRunnerToken: getRunnerToken_2,
      baseDir: baseDir_3,
      execPath: execPath,
      execArgs: execArgs,
      capacity: capacity,
      healthPort: healthPort,
      onDebug: f,
      onStatus: onStatus_7,
      onSessionActivity: onSessionActivity,
      onBgTaskLedger: onBgTaskLedger,
      onBgFollowupPending: onBgFollowupPending,
      onPostTurnSettle: onPostTurnSettle,
      onSessionTokenIssued: onSessionTokenIssued,
      onChildLifecycle: onChildLifecycle,
      clientPlatform: clientPlatform,
      onInitPhase: onInitPhase,
      onSessionStartHookError: onSessionStartHookError,
      onMaxLifetime: onMaxLifetime,
      onChildTerminating: onChildTerminating,
      canonicalLocks: canonicalLocks,
      spawnedSessionIds: spawnedSessionIds,
      tokenFileOpTimeoutMs: tokenFileOpTimeoutMs,
      governedPushRepresentRetryMs: de = Dl,
      gitSshRewriteHosts: gitSshRewriteHosts,
      gitHostRewrites: gitHostRewrites,
      useAnthropicGitProxy: useAnthropicGitProxy,
      gitProxyGlobalConfigPath: De,
      gitProxyGlobalConfigSnapshot: Ce,
      gitProxyCredHelper: Lt,
      configureGitHookStubs: configureGitHookStubs,
      configureGitSigningArtifacts: tt,
      operatorGitSnapshot: operatorGitSnapshot,
      hookGitPrograms = Wo,
      hookGitLegacyParams: Un = !1,
      pushOutcomeOnRelease: pushOutcomeOnRelease,
      trustWorkspace: trustWorkspace,
      removeSessionState = !1,
      confineRepoSettings = "enforce",
      serverAutoModeLists = wet,
      hostConfig: hostConfig,
      governedGitConfigSeed: governedGitConfigSeed,
      debugTokenDir: debugTokenDir,
      standbyIdleMs: standbyIdleMs,
      takeStartCommandPhases: takeStartCommandPhases,
      getHealthzClaimVisibleMs: getHealthzClaimVisibleMs,
      moveWatch: moveWatch,
      clock: clock_3 = clock_4
    } = n,
    yr = void 0,
    skipReset = capacity > 1,
    Fn = configureGitHookStubs !== void 0 && !skipReset;
  f(`[runner:session] Handling session ${sessionId_3}`);
  let yt = !1,
    Zt = !1,
    an = !1,
    xe = yt ? Da().catch(() => ({})) : void 0,
    $n = !1,
    Pn,
    xt = Aa(),
    yn,
    dn = !1,
    failed = !1,
    ue = {
      current: void 0
    },
    ut = {
      current: void 0,
      previous: void 0,
      held: []
    },
    un = st => {
      ut.held = [...ut.held.filter(item => item !== st && Ic(item)), ...(st ? [st] : [])].slice(-32);
    },
    config,
    fe = "failed",
    failureReason,
    setupFailureKind,
    failureKind,
    mcpConfigPath,
    launcherSettingsPath,
    Qe = [],
    stagedPaths_3 = [],
    configDir_4 = $o(baseDir_3, sessionId_3),
    gitConfigPins = tt === void 0 ? Va(operatorGitSnapshot, hookGitPrograms) : void 0,
    Ye,
    governedGitConfigPath = ae(baseDir_3, "_sessions", `${sessionId_3}.gitconfig`),
    childGitEnvironment,
    Pt = ae(baseDir_3, "_sessions", `${sessionId_3}.git-ca-bundle.pem`),
    serverValueTrustBundlePath = ae(baseDir_3, "_sessions", `${sessionId_3}.git-ca-bundle.child.pem`),
    bt,
    Kn = ae(baseDir_3, "_sessions", `${sessionId_3}.gh`),
    Rr = ae(baseDir_3, "_sessions", `${sessionId_3}.gitrules`),
    stageFileRoot = ae(baseDir_3, "_sessions", `${sessionId_3}.uploads`),
    Mn = !1,
    mn = ae(configDir_4, "claude-code-debug.txt"),
    workerEpoch_2,
    cwd,
    tokenFilePath,
    Bt,
    Ut = () => [tokenFilePath, Bt].filter(item => item !== void 0),
    ft = [],
    Wt = !1,
    bn = !1,
    Ie = Promise.resolve(),
    R = !1,
    we = Promise.resolve(),
    Ve = !1,
    Ge,
    worktrees = [],
    ht = [],
    gt = [],
    Pe = [],
    Yt,
    mt,
    X = [],
    he = (st, wt, Qt) => {
      try {
        return ll(st, X, wt, Qt);
      } catch (error) {
        f(`[runner:session] session git rules: the sources in a /remote reply for ${sessionId_3} could not be used (${d(error)}); which repositories are fetched through the git mount is unchanged, and the next reply is read anew`);
        return;
      }
    },
    P,
    _e,
    abortController = new AbortController(),
    signal_3 = AbortSignal.any([signal_2, abortController.signal]),
    workspacePaths = [],
    Tr,
    Jn = !1,
    Nn = !1,
    SELF_HOSTED_RUNNER_HOOKS_DIR = process.env.SELF_HOSTED_RUNNER_HOOKS_DIR,
    _n = [],
    cr = !1,
    br = _l(spawnedSessionIds, sessionId_3),
    lr = new Map(),
    Qn = new Set(),
    qs = [],
    Yn,
    er = Promise.resolve(),
    jt,
    Ar = !1,
    Or = async () => {
      if (await er, Ar = !0, jt !== void 0) throw jt;
    };
  try {
    if (yn = Date.now(), onInitPhase?.({
      kind: "start"
    }), !sessionId_3 || !/^[a-zA-Z0-9_-]+$/.test(sessionId_3)) throw Error("Invalid session_id: contains unsafe characters");
    Mn = !0, cwd = ae(baseDir_3, "_sessions", sessionId_3);
    let st = await wr(() => apiClient_2.issueSessionToken(getRunnerToken_2(), sessionId_3, signal_2), {
      initialDelayMs: 500,
      maxDelayMs: 8000,
      maxAttempts: 5,
      shouldRetry: shouldRetry,
      signal: signal_2,
      onRetry: (se, qe) => {
        f(`[runner:session] issueSessionToken attempt ${se} transient failure (${qe instanceof Error ? qe.message : qe}) \u2014 retrying`);
      }
    });
    if (!st) return {
      result: "abandoned"
    };
    ue.current = st.session_token;
    let tools_host = st.tools_host;
    if (tools_host !== void 0) moveWatch?.holdOff(sessionId_3), configDir_4 = Xa(baseDir_3, sessionId_3), mn = ae(configDir_4, "claude-code-debug.txt");
    let Qt = tools_host === void 0 ? (...se) => apiClient_2.getSessionRemoteConfig(...se) : async () => ({
      sources: [],
      push_targets: [],
      claude_code_args: {},
      environment_variables: {},
      api_base_url: tools_host.api_base_url,
      ...(tools_host.cwd !== void 0 && {
        cwd: tools_host.cwd
      })
    });
    if (Fn) await Rl(configureGitHookStubs, tt, f);
    if (useAnthropicGitProxy) {
      if (st.tools_host === void 0) process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = st.session_token;
      if (Ce !== void 0 && De) {
        let se = process.env.XDG_CONFIG_HOME || ae(Lo(), ".config");
        await Tl({
          globalConfigPath: De,
          globalConfigSnapshot: Ce,
          homeGitconfigPath: ae(Lo(), ".gitconfig"),
          xdgConfigPath: ae(se, "git", "config"),
          credHelper: Lt,
          signingArtifacts: tt
        }, f);
      }
    }
    if (onSessionTokenIssued?.(st.session_token), debugTokenDir && tools_host === void 0) za(debugTokenDir, `session_token_${sessionId_3}.jwt`, st.session_token, onStatus_7);
    if (signal_2.aborted) return f(`[runner:session] Aborted after issueSessionToken for ${sessionId_3} \u2014 skipping registration`), {
      result: "abandoned"
    };
    if (f(`[runner:session] Issued session_token for ${sessionId_3}`), config = await wr(() => Qt(sessionId_3, ue.current, signal_2), {
      initialDelayMs: 500,
      maxDelayMs: 8000,
      maxAttempts: 5,
      shouldRetry: shouldRetry,
      signal: signal_2,
      onRetry: (se, qe) => {
        f(`[runner:session] getSessionRemoteConfig attempt ${se} transient failure (${qe instanceof Error ? qe.message : qe}) \u2014 retrying`);
      }
    }), !config) return {
      result: "abandoned"
    };
    if (f(`[runner:session] Fetched remote config: ${config.sources.length} source(s), ${config.push_targets.length} push target(s), api_base_url=${config.api_base_url}`), signal_2.aborted) return f(`[runner:session] Aborted after getSessionRemoteConfig for ${sessionId_3} \u2014 skipping registration`), {
      result: "abandoned"
    };
    let hintedBeforeRegister = config.worktree_checkpoint_hint != null,
      hosting = void 0,
      proc_start = hosting === void 0 ? void 0 : await ad(process.pid);
    if (tools_host !== void 0 && (hosting === void 0 || proc_start === void 0)) throw m("self_hosted_tools_host", "cannot_host"), new x(`Session ${sessionId_3} needs a tool server, which this runner cannot host`, "session needs a tool server, which this runner cannot host");
    let governedGit = ul(config.governed_git, () => {
      let current = ue.current;
      if (!current) throw Error("governed git credential requested but no session token is available \u2014 token issue/refresh failed?");
      return current;
    }, onStatus_7, void 0);
    if (L_n(config.environment_variables?.CCR_AGENT_PROXY_RELAY_MODE) || tools_host !== void 0 && a.CCR_AGENT_PROXY_STANDALONE_URL !== void 0) {
      let se = sd(sessionId_3, governedGit?.toolConfig);
      if (se) throw se;
    }
    let H = skipReset && governedGit?.toolConfig.gitConfig === !0 && (configureGitHookStubs !== void 0 || tt !== void 0),
      Oe = H && operatorGitSnapshot?.hooksPath !== void 0;
    if (governedGit) {
      let hostSplit = governedGit.toolConfig.hostSplit,
        qe = hostSplit ? `; per-host routing \u2014 governed hosts: ${hostSplit.governed.join(", ") || "(none)"} (git mount + session relay); direct hosts: ${hostSplit.direct.join(", ") || "(none)"} (this machine's own git rewrite and credentials)` : "";
      if (onStatus_7(`[runner:session] governed git ACTIVE for ${sessionId_3}: pre-CLI clone via git mount, in-session git/gh via the session relay (git_config=${governedGit.toolConfig.gitConfig}, gh_path_shim=${governedGit.toolConfig.ghPathShim})` + qe + (skipReset ? " \u2014 capacity>1: shared-canonical prep relies on per-invocation git hardening (no cross-session sanitize)" : "")), hostSplit) {
        let He = dl(hostSplit, !!useAnthropicGitProxy, config.sources.map(item => item.type === "git_repository" && item.url ? Td(item.url) : void 0));
        if (He) onStatus_7(He);
        let Ze = al(hostSplit, Boolean(a.GIT_ASKPASS));
        if (Ze) onStatus_7(Ze);
      }
      if (useAnthropicGitProxy) f(`[runner:session] ${sessionId_3}: governed git delivered for this session (requested with --use-anthropic-git-proxy); the flag's older clone-URL proxy rewrite is skipped`);
      if (pushOutcomeOnRelease) onStatus_7("[runner:warn] --push-outcome-on-release under governed git pushes to the PLAIN upstream URL with customer-managed credentials (the runner's release-time push does not use the session's git-mount push URL, and the session relay ends with the child). If no ambient git credential covers the push target, the release-time push will fail naming this flag.");
    }
    let apiBaseUrl_2 = governedGit ? void 0 : useAnthropicGitProxy;
    if (useAnthropicGitProxy && !governedGit && !config.governed_git && tools_host === void 0) onStatus_7(`[runner:warn] ${sessionId_3}: --use-anthropic-git-proxy is set but the server withheld ` + "Anthropic-managed git for this session (the reason is logged server-side \u2014 for example a " + "source host the server does not route through Anthropic-managed git, or a server that predates the opt-in); falling back to the legacy clone-URL git proxy for this session (deprecated; this fallback will be removed in a future runner release).");
    try {
      let child_2;
      if (hosting !== void 0 && proc_start !== void 0) f(`[runner:session] ${sessionId_3} hosts tools only, no worker`), child_2 = {
        kind: "tool-server",
        hosting: hosting,
        runner: {
          pid: process.pid,
          proc_start: proc_start
        }
      };else {
        if (workerEpoch_2 = await wr(() => apiClient_2.registerWorker(config.api_base_url, sessionId_3, ue.current, signal_2), {
          initialDelayMs: 500,
          maxDelayMs: 8000,
          maxAttempts: 5,
          shouldRetry: shouldRetry,
          signal: signal_2,
          onRetry: (K, V) => {
            f(`[runner:session] registerWorker attempt ${K} transient failure (${V instanceof Error ? V.message : V}) \u2014 retrying`);
          }
        }), workerEpoch_2 === void 0) return {
          result: "interrupted"
        };
        f(`[runner:session] Registered worker, epoch=${workerEpoch_2}`);
        let b = workerEpoch_2;
        if (await wr(() => apiClient_2.updateSessionWorkerState(config.api_base_url, sessionId_3, ue.current, b, void 0, signal_2), {
          initialDelayMs: 500,
          maxDelayMs: 8000,
          maxAttempts: 5,
          shouldRetry: shouldRetry,
          signal: signal_2,
          onRetry: (K, V) => {
            f(`[runner:session] updateSessionWorkerState attempt ${K} transient failure (${V instanceof Error ? V.message : V}) \u2014 retrying`);
          }
        }), signal_2.aborted) return {
          result: "interrupted"
        };
        child_2 = {
          kind: "agent-loop",
          workerEpoch: workerEpoch_2
        };
      }
      let workerEpoch_3 = md(child_2),
        He = [configDir_4],
        [Ze] = await ml(Ii(fn(configDir_4), He), Bn, `[runner:stuck] session config dir check ${configDir_4} (check NFS/CSI mount health)`).catch(b => {
          if (Ir(b)) Wt = !0, onStatus_7(`[runner:error] ${b.message}`);
          throw b;
        });
      if (governedGit) {
        let hostSplit_2 = governedGit.toolConfig.hostSplit;
        bt = Xi(process.env, I() === "windows", hostSplit_2 ? {
          governedHosts: hostSplit_2.governed,
          directHosts: hostSplit_2.direct,
          mountBaseUrl: governedGit.mountBaseUrl,
          pushBaseUrl: governedGit.pushBaseUrl
        } : void 0, Pt, skipReset), await Xh(go(bt, $s), "build the trust bundle").catch(le => {
          f(`[runner:session] governed git: the trust bundle could not be built (${d(le)}); the runner's own git keeps GIT_SSL_CAINFO`);
        });
        let K = ca(config.environment_variables, I() === "windows"),
          rawGitVersion_2 = "",
          ne = await ha(bt, {
            ...K,
            gitConfigArm: governedGit.toolConfig.gitConfig,
            serverValueTrustBundlePath: serverValueTrustBundlePath
          }, async () => {
            rawGitVersion_2 = (await Xh(vQn(), "git --version").catch(() => "")).trim();
            let le = Ehn(rawGitVersion_2),
              [A, oe] = ga;
            return le !== null && (le[0] > A || le[0] === A && le[1] >= oe);
          }, (le, A) => Xh($s(le, A), "build the trust bundle from the server's GIT_SSL_CAINFO").catch(oe => (f(`[runner:session] governed git: the trust bundle for the session's git could not be built (${d(oe)}); git inside the session checks the git mount against the moved file alone`), {
            status: "unavailable",
            reason: "bundle_write_failed"
          })));
        childGitEnvironment = ne.answer;
        for (let le of aa({
          governedHosts: hostSplit_2?.governed ?? [],
          gitConfigArm: governedGit.toolConfig.gitConfig,
          child: ne.answer.decision,
          childTrustBundle: ne.trustBundle,
          serverSetsCertificateFile: typeof K.serverCertificateFile === "string",
          runnerMountGit: Qi(bt, "prep", {
            url: governedGit.mountBaseUrl,
            mountRouted: !0
          }),
          rawGitVersion: rawGitVersion_2,
          clientCertificateVariablesSet: ["GIT_SSL_CERT", "GIT_SSL_KEY"].filter(item => process.env[item] !== void 0),
          hostsCoveredByNoProxy: il(hostSplit_2, Wze())
        })) onStatus_7(le);
      }
      if (tokenFilePath = child_2.kind === "agent-loop" ? hd(configDir_4, workerEpoch_3) : void 0, child_2.kind === "tool-server") {
        for (let b of [$o(baseDir_3, sessionId_3), configDir_4]) await ml(Je(b, {
          recursive: !0,
          force: !0
        }), _r, `[runner:stuck] rm ${b} (check NFS/CSI mount health)`);
        await ml(Vt(fn(configDir_4), {
          recursive: !0,
          mode: 448
        }), Bn, `[runner:stuck] mkdir ${fn(configDir_4)}`), await ml(Vt(configDir_4, {
          mode: 448
        }), Bn, `[runner:stuck] mkdir ${configDir_4}`);
      }
      let At = tokenFilePath,
        en = b => {
          R = !0;
          let K = b.catch(() => {});
          we = Promise.all([we, K]).then(() => {}), K.then(() => {
            if (Ve || At === void 0) return;
            let current_2 = ue.current;
            if (!current_2) return;
            for (let ne of Ut()) Ie = Ie.then(() => Po(ne, current_2, onStatus_7, en, tokenFileOpTimeoutMs));
          });
        };
      if (Ge = en, At !== void 0) Ie = Po(At, st.session_token, onStatus_7, en, tokenFileOpTimeoutMs);
      await Ie, f(`[runner:session] Epoch fence passed for ${sessionId_3} (epoch=${workerEpoch_2})`), Yn = No({
        intervalMs: 30000,
        refresh: async () => {
          if (workerEpoch_2 === void 0 || !ue.current) return;
          await apiClient_2.heartbeat(config.api_base_url, sessionId_3, ue.current, workerEpoch_2, signal_2), f(`[runner:session] prep heartbeat sent for ${sessionId_3}`);
          return;
        },
        onError: b => {
          f(`[runner:session] prep heartbeat failed: ${b}`);
        },
        signal: signal_2
      });
      let Ot = [],
        Hn = (b, K) => {
          if (workerEpoch_2 === void 0 || !ue.current) return Promise.resolve();
          let V = workerEpoch_2,
            current_3 = ue.current,
            le = K.withDeferred ? Ot.splice(0) : [],
            A = async () => {
              try {
                await apiClient_2.postWorkerEvents(config.api_base_url, sessionId_3, current_3, V, [...le, b], signal_2);
              } catch (error) {
                if (mr(error)) throw error;
                let ke = le.length > 0 ? ` (${le.length} deferred step event(s) dropped with it)` : "";
                f(`[runner:session] ${K.kind} event post failed${ke}: ${error}`);
              }
            };
          if (!Zt) return A();
          let oe = () => jt === void 0 ? A() : Promise.resolve();
          if (Ar) return oe();
          if (!K.withDeferred) return er.then(oe);
          return er = er.then(() => oe().catch(Me => {
            jt = Me, Yn?.cancel();
          })), Promise.resolve();
        },
        cs = b => Hn(tf(b), {
          kind: "activity",
          withDeferred: !0
        }),
        Cr = (b, K, V, ne) => Hn(Bs(b, K, V, ne), {
          kind: "step",
          withDeferred: !0
        }),
        Qo = (...b) => {
          if (workerEpoch_2 === void 0 || !ue.current) return;
          Ot.push(Bs(...b));
        },
        Xd,
        ls = () => Xd ??= (async () => {
          let armedAt = performance.now(),
            K = ue.current;
          return {
            config: await Qt(sessionId_3, K, signal_2),
            armedAt: armedAt,
            presentedToken: K
          };
        })().catch(b => {
          f(`[runner:session] early /remote re-fetch failed: ${b} \u2014 step 6 re-fetches if the session continues`);
          return;
        }),
        rh = df({
          gateOn: !1,
          workerEpoch: workerEpoch_3,
          hintedBeforeRegister: hintedBeforeRegister,
          refetch: async () => (await ls())?.config,
          onDebug: f
        }),
        $r = fl(config.sources, gitSshRewriteHosts, gitHostRewrites, f, apiBaseUrl_2 ? {
          apiBaseUrl: apiBaseUrl_2,
          sessionId: sessionId_3
        } : void 0, governedGit, onStatus_7);
      if (bt && qi(bt, $r)) {
        let b = Zi(bt);
        if (b) onStatus_7(b);
      }
      await Cr("provision", "completed", "Runner registered", {
        expected_steps: $r.length > 0 ? "provision,clone,start_cc" : "provision,start_cc"
      });
      let ei = Bl(Hl(config.push_targets));
      await ml(Vt(cwd, {
        recursive: !0
      }), Bn, `[runner:stuck] mkdir ${cwd} (check NFS/CSI mount health)`), await ml(Vt(configDir_4, {
        recursive: !0,
        mode: 448
      }), Bn, `[runner:stuck] mkdir ${configDir_4}`);
      let Zs = xc(config.api_base_url);
      if (hostConfig?.notApplied) await Hn(vi(sessionId_3, hostConfig.notApplied), {
        kind: "notice",
        withDeferred: !0
      });
      try {
        let b = child_2.kind === "agent-loop" ? await Di(configDir_4, hostConfig?.snapshot, f, onStatus_7, Zs) : void 0;
        if (b?.outcome === "partial" && hostConfig?.snapshot) await Hn(yi(sessionId_3, hostConfig.snapshot.sourceDir, sc(b.error)), {
          kind: "notice",
          withDeferred: !0
        });
      } catch (error) {
        if (Ir(error)) await Cr("host_config", "failed", sc(error.message), {
          step_label: "Apply runner host config"
        });
        throw error;
      }
      if (tt !== void 0) Ye = await ja({
        configDir: configDir_4,
        baseDir: baseDir_3,
        hookStubs: H && !Oe && configureGitHookStubs !== void 0 ? configureGitHookStubs : [],
        signingArtifacts: tt,
        onDebug: f,
        onStatus: onStatus_7
      }), gitConfigPins = Hc(Ye, operatorGitSnapshot, hookGitPrograms);
      if (governedGit?.toolConfig.gitConfig) {
        await Fc(governedGitConfigPath, (governedGitConfigSeed ?? "") + (childGitEnvironment?.fileSeedLines ?? ""));
        let b;
        if (Fn) b = sWr(baseDir_3);else if (H) {
          if (configureGitHookStubs === void 0 || Ye === void 0) throw new x(`--configure-git: a governed session at capacity>1 needs both the hook stubs and the code-sign artifacts (hook stubs ${configureGitHookStubs === void 0 ? "missing" : "present"}, session copy ${Ye === void 0 ? "not written" : "written"}); the session was stopped rather than run with unsigned commits`, "--configure-git: incomplete startup artifacts for a governed session at capacity>1");
          b = Bc(Ye, Oe);
        }
        if (b !== void 0) {
          await Je(governedGitConfigPath + ".lock", {
            force: !0
          }).catch(() => {});
          try {
            for (let [K, V] of b) await Io(["config", "--file", governedGitConfigPath, "--replace-all", K, V]);
          } catch (error) {
            throw new x(`--configure-git: could not write the commit-signing settings into this session's git config (${governedGitConfigPath}): ${d(error)}. The session was stopped rather than run with unsigned commits. Check that ${ae(baseDir_3, "_sessions")} is writable and holds no leftover ${sessionId_3}.gitconfig.lock`, "--configure-git: could not write commit-signing settings into the governed per-session gitconfig");
          }
        }
      }
      let cn = cwd,
        addDirs = [],
        We = [],
        fs = await MSt(SELF_HOSTED_RUNNER_HOOKS_DIR, "checkout");
      if (fs && pushOutcomeOnRelease) onStatus_7(`[runner:warn] --push-outcome-on-release does not push repos checked out via the checkout lifecycle hook (${fs}); use the post-session hook to snapshot those`);
      let qd,
        sh = governedGit?.toolConfig.ghPathShim === !0 || governedGit?.toolConfig.gitConfig === !0 || !!config.environment_variables?.AGENT_PROXY_URL,
        oh = config,
        ih,
        ah,
        dh = [],
        baseDir_4 = Tr ?? baseDir_3,
        Zd = !1,
        ni = async () => {};
      if ($r.length > 0) {
        f(`[runner:session] Preparing ${$r.length} git ${$r.length === 1 ? "repository" : "repositories"} (${skipReset ? "worktree" : "canonical-direct"} mode)`);
        let b = [],
          K = [],
          V = [],
          ne,
          le = [];
        for (let A of $r) {
          if (!Eto(A.type)) continue;
          let oe = Ato(baseDir_4, A),
            Me = Kas(A),
            repoUrl = bur(A) ?? A.url;
          if (!oe || !Me) throw new x(`Source '${A.url}' resolved to an unsafe repo path (slug='${A.repo}'). Check for path traversal in the URL.`, "source URL resolved to an unsafe repo path");
          await cs(`Preparing ${A.repo}...`), await Cr("clone", "started", `Preparing ${A.repo}`, {
            step_detail: A.repo
          });
          let kt = (ei.get(Go(A.repo))?.length ?? 0) > 0,
            checkoutPath = ae(cwd, Me),
            Nt = fs ? "hook" : "builtin",
            hookPath = Nt === "builtin" ? null : fs,
            Dt = async () => {
              if (!hookPath) return;
              if (We.includes(checkoutPath)) {
                f(`[runner:hook] not removing ${checkoutPath}: a prepared checkout (in use)`);
                return;
              }
              let Re = We.find(item => IM(item) === IM(checkoutPath));
              if (Re !== void 0) return f(`[runner:hook] not removing ${checkoutPath}: same name as prepared checkout ${Re} modulo case`), ht.push(checkoutPath), {
                cause: "kept_prepared_twin",
                warn: `[runner:warn] not removing ${checkoutPath} for skipped context source ${A.repo}: same name as the prepared checkout ${Re} modulo case (one directory on a case-insensitive filesystem); whatever the hook wrote there may remain visible to this session. Removal is retried when the session ends.`
              };
              let Xe = await ml(Je(checkoutPath, {
                recursive: !0,
                force: !0
              }).then(() => {
                return;
              }, ot => ot), _r, `[runner:hook] rm -rf ${checkoutPath}`);
              if (Xe === void 0) return;
              return ht.push(checkoutPath), {
                cause: "rm_failed",
                warn: `[runner:warn] could not remove the partial checkout the hook left for skipped context source ${A.repo} at ${checkoutPath} (${d(Xe)}); the session may still be able to read it. Removal is retried when the session ends.`
              };
            };
          try {
            if (hookPath) {
              if (A.ref && !hk(A.ref)) throw new x(`[runner:session] refusing to pass unsafe ref to checkout hook: ${A.ref}`, "refusing to pass unsafe ref to checkout hook");
              if (!repoUrl || !S3t(repoUrl)) throw new x(`[runner:session] refusing to pass unsafe repo URL to checkout hook: ${repoUrl}`, "refusing to pass unsafe repo URL to checkout hook");
              let Xe = void 0,
                ot = performance.now();
              await lWr({
                hookPath: hookPath,
                gitConfigPins: gitConfigPins,
                gitConfigLegacyParams: Un,
                cwd: cwd,
                sessionId: sessionId_3,
                repoUrl: repoUrl,
                repoRef: A.ref,
                checkoutPath: checkoutPath,
                sessionAccessToken: ue.current,
                apiBaseUrl: config.api_base_url,
                gitMountUrl: wo(A),
                gitEnvironment: bt && sa(bt, A),
                clientPlatform: clientPlatform,
                onStatus: onStatus_7,
                onDebug: f,
                onStderrLine: Xe?.read,
                signal: signal_2
              });
              let hr = Math.round(performance.now() - ot);
              We.push(checkoutPath), b.push(A.repo), K.push(A), V.push(A.url ?? ""), ht.push(checkoutPath), Qo("clone", "completed", `Prepared ${A.repo}`, {
                step_detail: A.repo,
                ...!1
              });
              continue;
            }
            let worktreePath = skipReset ? ae(cwd, Me) : oe;
            if (await Yc(canonicalLocks, oe, async () => {
              let Xe = lr.get(oe),
                ot = {
                  canonical: oe,
                  repo: A.repo,
                  sessionId: sessionId_3,
                  onStatus: onStatus_7
                },
                hr = void 0,
                Lr = !1,
                Le = !1;
              if ((void 0)?.sanitize || apiBaseUrl_2 || governedGit && !skipReset) {
                if ((void 0)?.sanitize || !Lr && Sl(onStatus_7, oe, br)) await kl(oe, f, repoUrl), Le = !0;
              } else await bl(oe, f, !skipReset);
              let prefetchedTip = void 0,
                standbyCheckout = void 0;
              if (await Vas({
                baseDir: baseDir_4,
                sources: [{
                  ...A,
                  ...(prefetchedTip && {
                    prefetchedTip: prefetchedTip
                  }),
                  ...(standbyCheckout && {
                    standbyCheckout: standbyCheckout
                  }),
                  ...(Le && {
                    sanitized: {
                      onIndexFromHead: () => {
                        Qn.add(oe);
                      }
                    }
                  }),
                  ...!1
                }],
                alwaysFetch: !0,
                skipReset: skipReset,
                initWithoutTemplate: Tr !== void 0,
                skipValidation: or.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM && !skipReset && qd === void 0,
                onDebug: f,
                onPhase: (tn, Ct, rr) => {
                  if (workerEpoch_2 === void 0 || !ue.current) return;
                  let Es = workerEpoch_2,
                    current_4 = ue.current,
                    to = [nf(A.repo, tn, Ct, rr)],
                    ks = () => jt !== void 0 ? Promise.resolve() : apiClient_2.postWorkerEvents(config.api_base_url, sessionId_3, current_4, Es, to, signal_2);
                  (Zt ? er.then(ks) : ks()).catch(no => f(`[runner:session] prep-phase event post failed: ${no}`));
                },
                onProgress: (clone_sub, Ct) => {
                  let rr = Ct.total !== void 0 ? ` (${Ct.done}/${Ct.total})` : "";
                  Hn(Bs("clone", "started", `${A.repo} \u2014 ${Ct.label} ${Ct.pct}%${rr}`, {
                    step_detail: A.repo,
                    clone_sub: clone_sub,
                    progress_label: Ct.label,
                    progress_pct: String(Ct.pct),
                    ...(Ct.done !== void 0 && {
                      progress_done: String(Ct.done)
                    }),
                    ...(Ct.total !== void 0 && {
                      progress_total: String(Ct.total)
                    })
                  }), {
                    kind: "progress",
                    withDeferred: !1
                  }).catch(() => {});
                },
                signal: signal_2
              }), skipReset) await Yas({
                canonicalRepoPath: oe,
                worktreePath: worktreePath,
                ref: A.ref,
                onDebug: f,
                signal: signal_2,
                gitEnvironment: A.gitEnvironment
              });
            }), skipReset) worktrees.push({
              canonicalRepoPath: oe,
              worktreePath: worktreePath
            });
            We.push(worktreePath), b.push(A.repo), K.push(A), V.push(A.url ?? ""), Qo("clone", "completed", `Prepared ${A.repo}`, {
              step_detail: A.repo
            });
          } catch (error) {
            if (error instanceof b3t || error instanceof s2e && OOn(error.message)) {
              if (!kt && Nt !== "required") {
                let Xe = A.ref ? `'${A.ref}'` : "the configured ref";
                f(`[runner:session] context source ${A.repo} ref ${Xe} permanently not found on remote; ` + "skipping (not a work repo \u2014 no push_targets entry)");
                let ot = await Dt();
                if (ot) onStatus_7(ot.warn);
                le.push({
                  repo: A.repo,
                  sads: ot ? [Fs[ot.cause].sad] : [],
                  step: `Skipped ${A.repo} \u2014 source ref ${Xe} no longer exists on remote; continuing without this context repo` + (ot ? Fs[ot.cause].note : "")
                }), ne ??= new SourceRefNotFoundError(A.repo, A.ref);
                continue;
              }
              throw new SourceRefNotFoundError(A.repo, A.ref);
            }
            if (hookPath && Nt !== "required" && !kt && error instanceof s2e && !signal_2.aborted) {
              onStatus_7(`[runner:warn] checkout hook failed for context source ${A.repo} (${error.telemetryMessage}); not a work repo (no push_targets entry), skipping it: ` + sc(error.message));
              let Xe = await Dt();
              if (Xe) onStatus_7(Xe.warn);
              le.push({
                repo: A.repo,
                sads: ["context_source_checkout_hook_failed", ...(Xe ? [Fs[Xe.cause].sad] : [])],
                step: `Skipped ${A.repo} \u2014 its checkout hook ${error.telemetryMessage}; continuing without this context repo` + (Xe ? Fs[Xe.cause].note : "")
              }), ne ??= error;
              continue;
            }
            if (!hookPath && !kt && error instanceof Sur && error.denial !== void 0 && !signal_2.aborted) {
              let Xe = A.getAuthToken ? A.governedMount ? "git mount" : "git proxy" : void 0,
                ot = qas[error.denial];
              onStatus_7(`[runner:warn] could not access context source ${A.repo} (${ot}; auth: ` + (Xe ? `session token via the ${Xe}` : "this runner's own git credentials") + "); not a work repo (no push_targets entry), skipping it: " + sc(error.message).replace(/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]+/gu, " | ")), le.push({
                repo: A.repo,
                sads: ["context_source_access_denied"],
                step: Xe ? `Skipped ${A.repo} \u2014 this session couldn't read it ` + `(${ot}). Check that you've connected a GitHub account that can open it. If so, ask an admin to check that your organization gives Claude access to it.` : `Skipped ${A.repo} \u2014 this runner couldn't read it ` + `(${ot}). Ask the team that manages your runners to check this runner's access.`,
                skipKind: "context_source_access_denied",
                skipReason: error.denial
              }), ne ??= error;
              continue;
            }
            throw error;
          }
        }
        if (We.length === 0 && ne) throw ne;
        for (let A of le) {
          for (let oe of A.sads) p("self_hosted_session_handle", oe);
          await Cr("clone", "completed", A.step, {
            step_detail: A.repo,
            ...(A.skipKind && {
              skip_kind: A.skipKind
            }),
            ...(A.skipReason && {
              skip_reason: A.skipReason
            })
          });
        }
        if (await Cr("clone", "completed", "Finished preparing sources"), xt.start(), ls(), apiBaseUrl_2) {
          let origin = new URL(apiBaseUrl_2).origin;
          for (let oe = 0; oe < We.length; oe++) {
            if (!K[oe]?.getAuthToken) continue;
            if (ht.includes(We[oe])) continue;
            gt.push({
              path: We[oe],
              origin: origin
            }), await Al(We[oe], apiBaseUrl_2, f, signal_2);
          }
        }
        if (xt.mark("runner_prep_git_proxy_config_ms"), governedGit) {
          let A = new Set(),
            oe = [],
            Me = [],
            ke = [],
            kt = [],
            Ne;
          for (let Nt = 0; Nt < We.length; Nt++) {
            let Rt = K[Nt],
              Dt = Rt && bur(Rt);
            if (!Rt || !Dt) continue;
            if (ht.includes(We[Nt])) continue;
            let path_2 = worktrees.find(item => item.worktreePath === We[Nt])?.canonicalRepoPath ?? We[Nt];
            if (A.has(path_2)) continue;
            if (A.add(path_2), kt.push(await Ol(path_2, Dt, f, signal_2)), Rt.fetchViaMount && Rt.url) {
              if (skipReset) {
                oe.push(Rt.repo);
                continue;
              }
              if (Ne === void 0) {
                let raw = (await Xh(vQn(), "git --version").catch(() => "")).trim(),
                  hr = Ehn(raw),
                  [Lr, Le] = Ka;
                Ne = {
                  raw: raw,
                  ok: hr !== null && (hr[0] > Lr || hr[0] === Lr && hr[1] >= Le)
                };
              }
              if (!Ne.ok) {
                Me.push(Rt.repo);
                continue;
              }
              ke.push(Rt.repo), Pe.push({
                path: path_2,
                mountUrl: Rt.url,
                mountBaseUrl: governedGit.mountBaseUrl
              });
              try {
                await Cl(path_2, Rt.url, Dt, governedGit.mountBaseUrl, f, signal_2);
              } catch (error) {
                throw m("self_hosted_governed_mount_read", "config_write_failed"), error;
              }
            }
          }
          if (kt.includes("not_upstream")) p("self_hosted_governed_origin_check", "not_upstream");else if (kt.includes("read_failed")) p("self_hosted_governed_origin_check", "read_failed");else if (kt.length > 0) g("self_hosted_governed_origin_check");
          if (oe.length > 0) onStatus_7(`[runner:warn] governed git: ${oe.join(", ")} ${O(oe.length, "is", "are")} outside the runner's list of directly reachable upstreams, but at --capacity ${capacity} sessions share one git config per repository, so ${O(oe.length, "its", "their")} in-session fetches are NOT routed through the git mount and will fail unless this machine can reach the upstream host. Run with --capacity 1 to route such fetches through the mount.`), p("self_hosted_governed_mount_read", "skipped_capacity_gt1");else if (Me.length > 0) onStatus_7(`[runner:warn] governed git: ${Me.join(", ")} ${O(Me.length, "is", "are")} outside the runner's list of directly reachable upstreams, but this machine's git (${Ne?.raw || "version not readable"}) could not be confirmed as ${Ka.join(".")} or newer, which the mount's path-scoped credential needs, so ${O(Me.length, "its", "their")} in-session fetches are NOT routed through the git mount and will fail unless this machine can reach the upstream host. Upgrade git to route such fetches through the mount.`), p("self_hosted_governed_mount_read", "skipped_git_too_old");else if (ke.length > 0) onStatus_7(`[runner:session] governed git: ${ke.join(", ")} ${O(ke.length, "is", "are")} fetched through the git mount for ${sessionId_3} (not directly reachable from this runner) \u2014 origin keeps its upstream URL; a repo-local insteadOf sends in-session fetches to the mount with the session token`), g("self_hosted_governed_mount_read");
        }
        if (governedGit?.pushBaseUrl !== void 0) {
          let wirings = [],
            oe = new Set(),
            Me = 0;
          for (let ke = 0; ke < We.length; ke++) {
            let kt = K[ke];
            if (!kt?.governedMount || !kt.upstreamUrl) continue;
            if (ht.includes(We[ke])) continue;
            if (!kt.governedPushUrl) {
              Me++;
              continue;
            }
            let canonicalPath = worktrees.find(item => item.worktreePath === We[ke])?.canonicalRepoPath ?? We[ke];
            if (oe.has(canonicalPath)) continue;
            oe.add(canonicalPath), wirings.push({
              canonicalPath: canonicalPath,
              mountPath: kt.governedPushUrl.slice(governedGit.pushBaseUrl.length + 1),
              upstreamUrl: kt.upstreamUrl
            });
          }
          if (Me > 0) p("self_hosted_governed_push_url", "host_not_github");
          if (wirings.length === 0) ;else if (skipReset) onStatus_7(`[runner:warn] governed git: the work item carries a git-mount push URL but this runner runs with --capacity ${capacity} (per-session worktrees share one canonical git config), so the push URL is NOT applied and session pushes keep going to the upstream remote. Run with --capacity 1 to route session pushes through the git mount.`), p("self_hosted_governed_push_url", "skipped_capacity_gt1");else {
            let ke = Nl({
              sessionId: sessionId_3,
              pushBaseUrl: governedGit.pushBaseUrl,
              wirings: wirings,
              getCurrentToken: () => ue.current,
              onStatus: onStatus_7,
              onDebug: f,
              signal: signal_2
            });
            P = ke;
            try {
              await ke.apply();
            } catch (error) {
              throw m("self_hosted_governed_push_url", "config_write_failed"), error;
            }
            onStatus_7(`[runner:session] governed git: push URL ACTIVE for ${sessionId_3} \u2014 session git pushes go through the ` + `git mount (${wirings.length} ${O(wirings.length, "repository", "repositories")}, origin ${new URL(governedGit.pushBaseUrl).origin})` + (Pe.length > 0 ? "" : "; fetches stay on the upstream remote")), g("self_hosted_governed_push_url");
          }
        }
        await ni(), xt.mark("runner_prep_reset_remote_ms");
        for (let A = 0; A < We.length; A++) {
          let oe = ei.get(Go(b[A]));
          if (!oe || oe.length === 0) continue;
          let [branch, ...ke] = oe,
            kt = worktrees.find(item => item.worktreePath === We[A]),
            canonicalPath_2 = kt?.canonicalRepoPath ?? We[A],
            Nt = !1;
          if (ke.length > 0 && !Nt) {
            let Dt = K[A],
              Re = Dt?.getAuthToken && !ht.includes(We[A]);
            await Vl(We[A], ke, f, signal_2, void 0, V[A].startsWith("file://"), apiBaseUrl_2 && Re ? Dt.url : void 0, Dt?.governedMount && Re ? {
              url: Dt.url,
              getToken: Dt.getAuthToken
            } : void 0, Dt?.governedMount && Re ? Dt.gitEnvironment : void 0);
          }
          let Rt;
          if (pushOutcomeOnRelease && workerEpoch_3 > 1 && !Nt && !ht.includes(We[A])) {
            if (await zl(canonicalPath_2, branch, K[A], Br, f, signal_2, K[A].gitEnvironment)) Rt = `refs/remotes/origin/${branch}`;
          }
          if (!Nt) await jl(We[A], branch, f, signal_2, !!useAnthropicGitProxy || Qn.has(canonicalPath_2) && "checkout", Rt, void 0, K[A].gitEnvironment);
          if (ht.includes(We[A])) continue;
          _n.push({
            canonicalPath: canonicalPath_2,
            branch: branch,
            needsDetach: !kt,
            createdSha: pushOutcomeOnRelease && !Nt ? await nd(canonicalPath_2, `refs/heads/${branch}`) : void 0,
            source: K[A]
          });
        }
        xt.mark("runner_prep_outcome_branch_ms"), workspacePaths.push(...We);
      } else if (Zd) await ni();
      if (xt.start(), ls(), {
        childCwd: cn,
        addDirs: addDirs
      } = td(cwd, We, config.cwd), config.cwd) {
        let b = kd(cwd, config.cwd);
        if (!(b !== null && (await ml(Kl(cwd, b), Bn, `[runner:stuck] mkdir ${b} (check NFS/CSI mount health)`).catch(() => !1)) && (await ml(Yl(cwd, b), v3t, `[runner:stuck] realpath ${b} (check NFS/CSI mount health)`).catch(() => !1)))) f(`[runner:session] config.cwd=${config.cwd} rejected (not under ${cwd}, a segment is a symlink, or fs op timed out)`), {
          childCwd: cn,
          addDirs: addDirs
        } = td(cwd, We);
      }
      let uh = void 0;
      if (addDirs.length > 0) f(`[runner:session] cwd=${cn} + ${addDirs.length} --add-dir`);
      qn(configDir_4, "config dir", cn, addDirs), qn(stageFileRoot, "stage-file root", cn, addDirs), qn(Kn, "gh route dir", cn, addDirs);
      let hs = hostConfig?.snapshot?.storage.mode === "disk" ? hostConfig.snapshot.storage.snapshotDir : void 0;
      if (hs !== void 0) qn(hs, "host config snapshot dir", cn, addDirs);
      let ps = [],
        gs = !1,
        ri = !1,
        si = {};
      if (confineRepoSettings !== "off") {
        try {
          ps = await Wl(cn, We, si);
        } catch (error) {
          if (confineRepoSettings === "warn") {
            let ne = error instanceof Error ? error.message : String(error),
              le = error instanceof Tt ? error.entry.kind : "unknown";
            onStatus_7(`[runner:confine] WARN (would refuse): ${ne}`), m("self_hosted_confine", "self_hosted_confine_scan_threw_warn", {
              confine_kind: c(le)
            }), gs = !0, ri = !0;
          } else {
            let ne = error instanceof Tt ? error.entry.kind : "unknown";
            throw m("self_hosted_confine", "self_hosted_confine_scan_threw_enforce", {
              confine_kind: c(ne)
            }), error;
          }
        }
        let b = [...addDirs, ...ps.map(item => item.path)],
          K = () => {
            if (qn(configDir_4, "config dir", cn, b), qn(stageFileRoot, "stage-file root", cn, b), qn(Kn, "gh route dir", cn, b), hs !== void 0) qn(hs, "host config snapshot dir", cn, b);
          };
        if (confineRepoSettings === "warn") try {
          K();
        } catch (error) {
          let ne = error instanceof Error ? error.message : String(error);
          onStatus_7(`[runner:confine] WARN (would refuse under enforce): ${ne}`), m("self_hosted_confine", "self_hosted_confine_overlap_warn"), gs = !0;
        } else try {
          K();
        } catch (error) {
          throw m("self_hosted_confine", "self_hosted_confine_overlap_enforce"), error;
        }
      }
      if (ps.length > 0) {
        let b = ne => ne.toLowerCase(),
          K = new Set();
        for (let ne of [cn, ...addDirs]) {
          K.add(b(ne)), K.add(b(ne.normalize("NFC")));
          let le = await Xh(Hr(ne).catch(() => {
            return;
          }), `realpath ${ne}`);
          if (le !== void 0) K.add(b(le)), K.add(b(le.normalize("NFC")));
        }
        let V = ne => {
          for (let le of K) if (ne === le || ne.startsWith(le.endsWith(path_6) ? le : le + path_6)) return !0;
          return !1;
        };
        for (let ne of ps) if (!V(b(ne.path))) {
          let le = new Tt(ne, ne.kind === "permissions.allow (bare write-tool rule)" ? `grants unbounded file-tool writes (toolAlwaysAllowedRule matches a bare ${ne.raw} rule for ANY path). defaultMode:"acceptEdits" already auto-allows in-workspace edits; drop the bare rule, or use "Edit(/**)" / "Write(/**)" for an explicit workspace-scoped rule, or move it to the operator's user-level settings.json` : "resolves outside this session's own workspace");
          if (confineRepoSettings === "warn") {
            onStatus_7(`[runner:confine] WARN (would refuse): ${le.message}`), m("self_hosted_confine", "self_hosted_confine_violation_warn"), gs = !0;
            continue;
          }
          throw m("self_hosted_confine", "self_hosted_confine_violation_enforce"), le;
        }
      }
      if (confineRepoSettings !== "off" && !gs) g("self_hosted_confine");
      if (qn(configDir_4, "config dir", em().replace(/[/\\]$/, ""), [wd(), YOe().replace(/[/\\]$/, "")]), xt.mark("runner_prep_repo_settings_ms"), trustWorkspace) {
        let projects = {};
        for (let ne of new Set([cn, ...We, ...worktrees.map(item => item.canonicalRepoPath)])) {
          let le = Nc(ne),
            A = await Xh(Hr(ne).catch(() => {
              return;
            }), `realpath ${ne}`);
          for (let oe of [le, le.normalize("NFC"), ...(A !== void 0 ? [A, A.normalize("NFC")] : [])]) projects[oe] = {
            hasTrustDialogAccepted: !0
          };
        }
        let K = await _({
            ...(child_2.kind === "agent-loop" && hostConfig?.snapshot?.mcpServers && {
              mcpServers: hostConfig.snapshot.mcpServers
            }),
            projects: projects
          }),
          V = ae(configDir_4, `.claude${Zs}.json`);
        await ml(gr(configDir_4, `.claude${Zs}.json`, K, 384), Bn, `[runner:stuck] write ${V} (check NFS/CSI mount health)`).catch(ne => {
          if (Ir(ne)) onStatus_7(`[runner:error] ${ne.message}`);
          throw ne;
        }), f(`[runner:session] Seeded persisted trust for ${Object.keys(projects).length} path(s) in ${V}`);
      }
      let oi = Dc;
      if (config.mcp_config?.content) {
        let b = Buffer.from(config.mcp_config.content, "base64").toString("utf-8");
        mcpConfigPath = ae(configDir_4, "mcp-config.json"), await Xh(Zn(mcpConfigPath), `unlink ${mcpConfigPath}`).catch(() => {}), await Xh(Er(mcpConfigPath, b, {
          flag: "wx",
          mode: 384
        }), `writeFile ${mcpConfigPath}`), f(`[runner:session] Wrote MCP config to ${mcpConfigPath} (${b.length} bytes)`), oi = b;
      }
      let ii = ae(configDir_4, Do);
      stagedPaths_3.push(ii);
      let ai = {
        cancelled: !1
      };
      await ml(gr(configDir_4, Do, oi, 384, ai), Bn, `[runner:stuck] write ${ii} (check NFS/CSI mount health)`).catch(b => {
        if (ai.cancelled = !0, Ir(b)) onStatus_7(`[runner:error] ${b.message}`);
        throw b;
      }), xt.mark("runner_prep_config_seed_ms"), f(iWr(config) ? `[runner:session] ${sessionId_3}: the server asked this runner to apply the auto mode lists it sends (${Chn}=1 in /remote)` : `[runner:session] ${sessionId_3}: the server did not ask this runner to apply the auto mode lists it sends (no ${Chn}=1 in /remote), so none is read; nothing on this runner needs changing`);
      let Pr = xqo(Aqo(config), serverAutoModeLists),
        di = serverAutoModeLists === wet,
        allow_withheld_by_setting = Pr.withheld.includes("allow");
      if (Pr.withheld.length > 0) {
        let b = Pr.withheld.map(item => `autoMode.${item}`),
          K = b.length > 1 ? `${b.slice(0, -1).join(", ")} and ${b.at(-1)} lists` : `${b[0]} list`;
        if (di) f(`[runner:session] ${sessionId_3}: not applying the server's ${K} for this session (--server-auto-mode-lists is ${serverAutoModeLists}, the default; set it to all to apply allow)`);else onStatus_7(`[runner:session] ${sessionId_3}: not applying the server's ${K} for this session, because this runner is set to --server-auto-mode-lists ${serverAutoModeLists}`);
      }
      let fr = Pqo(Pr.carried);
      for (let b of fr.statusLines) onStatus_7(`[runner:warn] ${sessionId_3}: ${b}`);
      let lists_written = !1;
      if (config.launcher_hooks || fr.autoMode !== void 0) {
        let b = await Kc(configDir_4, {
          hooks: config.launcher_hooks ?? [],
          autoMode: fr.autoMode
        }, Qe, f, onStatus_7);
        if (b) launcherSettingsPath = b.settingsPath, lists_written = b.autoModeWritten;
        if (b?.hooksRegistered) if (si.repoDisablesAllHooks) onStatus_7("[runner:session] launcher_hooks materialized, but a repo .claude/settings.json or settings.local.json carries disableAllHooks:true \u2014 the child will drop every flagSettings hook (CCR-supplied Stop reply-gate included)"), p("self_hosted_launcher_hooks", "self_hosted_launcher_hooks_disabled_by_repo_disableAllHooks");else if (ri) p("self_hosted_launcher_hooks", "self_hosted_launcher_hooks_confine_scan_aborted");else g("self_hosted_launcher_hooks");
      }
      let Yr = {
        ...fr.refusedCounts,
        allow_withheld_by_setting: allow_withheld_by_setting
      };
      if (!lists_written && fr.autoMode !== void 0) m("self_hosted_auto_mode_lists", "settings_too_large", Yr);else if (fr.grantsWithheld) {
        if (lists_written) p("self_hosted_auto_mode_lists", "grants_withheld", Yr);else m("self_hosted_auto_mode_lists", "grants_withheld", Yr);
      } else if (fr.statusLines.length > 0) {
        if (lists_written) p("self_hosted_auto_mode_lists", "list_ignored", Yr);else m("self_hosted_auto_mode_lists", "all_lists_ignored", Yr);
      } else if (Pr.withheld.length > 0 && !di) p("self_hosted_auto_mode_lists", "operator_withheld", {
        allow_withheld_by_setting: allow_withheld_by_setting
      });else if (Pr.withheld.length > 0 || lists_written) g("self_hosted_auto_mode_lists", {
        allow_withheld_by_setting: allow_withheld_by_setting,
        lists_written: lists_written
      });
      if (signal_2.aborted) return f(`[runner:session] Aborted after git prep for ${sessionId_3} \u2014 bailing before spawn`), {
        result: "abandoned"
      };
      let write,
        pendingAcks = new Map(),
        ci = new Map(),
        Vr = !1,
        li = _({
          type: "control_request",
          request_id: `runner-session-gone-${sessionId_3}`,
          request: {
            subtype: "end_session",
            reason: "session_not_found"
          }
        }) + `
`,
        ms = (b, K) => {
          if (!Is(b)) return !1;
          if (Vr) return !0;
          return Vr = !0, onStatus_7(`[runner:session] ${sessionId_3} ${K} says session gone server-side \u2014 sending end_session to child`), write?.(li), !0;
        },
        _s = async (b, presentedToken) => {
          let governed_git = b.governed_git;
          if (await P?.reconcile(governed_git, presentedToken), mt !== void 0 && governedGit?.directUpstreams !== void 0) {
            let ne = governed_git === void 0 || governed_git.git_mount_push_base_url !== void 0,
              fetchLines = governed_git === void 0 ? void 0 : he(b.sources, governedGit.mountBaseUrl, governedGit.directUpstreams);
            await Xh(mt.reconcile({
              ...(ne && {
                push: {
                  baseUrl: os(governed_git?.git_mount_push_base_url, f)
                }
              }),
              ...(fetchLines !== void 0 && {
                fetchLines: fetchLines
              }),
              presentedToken: presentedToken
            }), "session git rules rewrite").catch(A => {
              f(`[runner:session] session git rules: ${d(A)} (ignored)`);
            });
          }
          if (governed_git !== void 0 && governed_git.rest_mount_base_url === void 0) return;
          await Yt?.reconcile(os(governed_git?.rest_mount_base_url, f, Ed), presentedToken);
        },
        Jd = async (b, K) => {
          ue.current = b;
          let V = K === void 0 ? null : decodeExpiry(K),
            ne = de * Il,
            deadlineMs = V === null ? ne : Math.max(0, Math.min(ne, V * 1000 - Date.now() - xl)),
            A = await Ll({
              represent: () => Qt(sessionId_3, b, signal_3),
              retryDelayMs: de,
              deadlineMs: deadlineMs,
              signal: signal_3,
              onDebug: f
            });
          if (signal_3.aborted) return;
          if (A.outcome === "presented") {
            _e?.cancel(), _e = void 0, await _s(A.config, b);
            return;
          }
          if (A.reason === "permanent" && ms(A.error, "/remote (token re-present)")) return;
          if (onStatus_7(`[runner:warn] governed git: could not re-present the refreshed session token on /remote for ${sessionId_3} (${A.reason === "budget" ? "still failing when the retry budget ran out" : "the request was refused"}); the child gets the token anyway. Session traffic through CCR's mounts (git pushes and fetches, gh writes) may be refused (git_token_mismatch) until a /remote call with this token succeeds` + (A.reason === "budget" ? " \u2014 retrying in the background." : ".")), P !== void 0) p("self_hosted_governed_push_url", "represent_failed");
          if (Pe.length > 0) p("self_hosted_governed_mount_read", "represent_failed");
          if (Yt !== void 0) p("self_hosted_governed_gh_route", "represent_failed");
          if (mt !== void 0) p("self_hosted_session_git_rules", "represent_failed");
          if (_e?.cancel(), _e = void 0, A.reason !== "budget") return;
          let oe = void 0,
            Me = () => {
              if (oe?.cancel(), _e === oe) _e = void 0;
            };
          oe = No({
            intervalMs: de * 4,
            errorRetryMs: de * 4,
            signal: signal_3,
            refresh: async () => {
              let current_5 = ue.current,
                kt = await Qt(sessionId_3, current_5, signal_3);
              if (signal_3.aborted) return;
              if (current_5 === ue.current) Me(), onStatus_7(`[runner:session] governed git: refreshed session token re-presented on /remote for ${sessionId_3}`), await _s(kt, current_5);
              return;
            },
            onError: ke => {
              if (signal_3.aborted) return;
              if (ms(ke, "/remote (token re-present)")) {
                Me();
                return;
              }
              if (!shouldRetry(ke)) {
                Me(), onStatus_7(`[runner:warn] governed git: background re-present of the session token for ${sessionId_3} refused: ${d(ke)}; giving up until the next scheduled /remote read`);
                return;
              }
              f(`[runner:session] governed git: background /remote re-present failed: ${d(ke)}; retrying`);
            }
          }), _e = oe;
        },
        Qd = token_2 => {
          if (ue.current = token_2, ut.previous = ut.current, ut.current = token_2, un(token_2), useAnthropicGitProxy) process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = token_2;
          for (let K of Ut()) Ie = Ie.then(() => Po(K, token_2, onStatus_7, Ge, tokenFileOpTimeoutMs));
          Za({
            pendingAcks: pendingAcks,
            sessionId: sessionId_3,
            onStatus: onStatus_7
          }), qa({
            write: write,
            envVar: "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
            token: token_2,
            sessionId: sessionId_3,
            label: "session_token",
            onStatus: onStatus_7,
            pendingAcks: pendingAcks
          });
        },
        Qs = Ds({
          getAccessToken: async () => {
            let current_6 = ue.current,
              token_3;
            try {
              ({
                token: token_3
              } = await apiClient_2.refreshToken(current_6));
            } catch (error) {
              if (ms(error, "refreshToken")) Qs.cancel(sessionId_3);
              throw error;
            }
            if (ue.current !== current_6) return;
            if (P !== void 0 || Pe.length > 0 || Yt !== void 0 || mt !== void 0) {
              if (await Jd(token_3, current_6), ue.current !== token_3) return;
            }
            return token_3;
          },
          onRefresh: (b, K) => Qd(K),
          label: "self-hosted-runner-session"
        });
      if (hosting === void 0) Qs.schedule(sessionId_3, ue.current);
      let Ft, fi;
      try {
        xt.lap();
        let b = await ls();
        if (Zt && jt !== void 0) throw jt;
        let K = b === void 0 ? void 0 : Math.round(performance.now() - b.armedAt),
          V,
          ne;
        if (b !== void 0 && K !== void 0 && K <= Wa) V = b.config, ne = b.presentedToken;else {
          if (K !== void 0) f(`[runner:session] early /remote result is ${K}ms old (> ${Wa}ms) \u2014 re-fetching for a fresh inference token`);
          V = await wr(() => (ne = ue.current, Qt(sessionId_3, ne, signal_2)), {
            initialDelayMs: 1000,
            maxDelayMs: 30000,
            signal: signal_2,
            ...(Zt && {
              shouldRetry: () => jt === void 0
            }),
            onRetry: (Le, ln) => {
              f(`[runner:session] /remote re-fetch attempt ${Le} failed: ${ln}. Retrying.`);
            }
          });
        }
        if (V) {
          if (config = V, L_n(config.environment_variables?.CCR_AGENT_PROXY_RELAY_MODE)) {
            let Le = sd(sessionId_3, governedGit?.toolConfig);
            if (Le) throw Le;
          }
          f(`[runner:session] Re-fetched /remote for fresh inference token (expires_in=${config.inference_auth?.expires_in_seconds}s)`), await _s(config, ne);
        } else f("[runner:session] /remote re-fetch failed after retries \u2014 using stale step-2 token. Interval refresher will converge.");
        xt.mark("runner_prep_remote_refetch_ms");
        let le = [],
          subagentPromptInline = Object.hasOwn(await wa({
            args: le,
            claudeCodeArgs: config.claude_code_args,
            configDir: configDir_4,
            stagedPaths: stagedPaths_3,
            childIsOwnBinary: execPath === process.execPath,
            onDebug: f
          }), key);
        if (await zi({
          args: le,
          agentFiles: config.agent_files ?? [],
          serverAgentsArg: config.claude_code_args.agents,
          configDir: configDir_4,
          stagedPaths: stagedPaths_3,
          onDebug: f
        }), debugTokenDir && config.inference_auth?.access_token) za(debugTokenDir, `inference_token_${sessionId_3}.txt`, config.inference_auth.access_token, onStatus_7);
        let oe = void 0,
          Me = No({
            intervalMs: Ja(config.inference_auth?.expires_in_seconds),
            ttlMs: Qa(config.inference_auth?.expires_in_seconds),
            ...ed,
            isTransient: isTransient,
            refresh: async () => {
              if (hosting !== void 0) return;
              let current_7 = ue.current,
                ln = oe?.onRemoteCallStarted(),
                Te = await Qt(sessionId_3, current_7, signal_2, {
                  timeoutMs: timeoutMs_2
                });
              ln?.(), await _s(Te, current_7);
              let token_4 = Te.inference_auth?.access_token;
              if (!token_4) throw new RemoteConfigWithoutInferenceAuthError();
              Za({
                pendingAcks: pendingAcks,
                sessionId: sessionId_3,
                onStatus: onStatus_7
              }), qa({
                write: write,
                envVar: "CLAUDE_CODE_OAUTH_TOKEN",
                token: token_4,
                sessionId: sessionId_3,
                label: "inference_token",
                onStatus: onStatus_7,
                expiresInSeconds: Te.inference_auth?.expires_in_seconds,
                pendingAcks: pendingAcks
              });
              let Ct = Te.inference_auth?.expires_in_seconds;
              return {
                intervalMs: Ja(Ct),
                ttlMs: Qa(Ct),
                nextInMs: oe?.takeFollowUpInMs()
              };
            },
            onError: (Le, ln) => {
              if (ms(Le, "/remote")) {
                Me.cancel();
                return;
              }
              let Te = ln.delayMs >= 120000 ? `${Math.round(ln.delayMs / 60000)}m` : `${Math.round(ln.delayMs / 1000)}s`,
                tn = ln.transient ? `Retrying shortly (in ${Te})` : `Not retrying early (${Le instanceof RemoteConfigWithoutInferenceAuthError ? "CCR answered without an inference token" : `HTTP ${jde(Le) ?? "none"}: the request or the session, not the network, is the problem`}); next scheduled attempt in ${Te}`,
                Ct = ln.expired ? " The child's current token has expired or is within a minute of expiring; its turns will fail until a refresh succeeds." : "";
              onStatus_7(`[runner:session] inference_token refresh failed for ${sessionId_3}: ${Le}. ${tn}.${Ct}`);
            },
            signal: signal_2
          }),
          ke,
          kt = (Le, {
            force: force
          } = {
            force: !1
          }) => {
            let Te = Me.refreshNow({
              force: force
            });
            if (Te === "fired") return onStatus_7(`[runner:session] ${Le} for ${sessionId_3} \u2014 requesting a fresh inference_token from CCR now`), Te;
            return f(`[runner:session] ${Le} for ${sessionId_3} \u2014 ${Te === "in_flight" ? "an inference_token refresh is already in progress" : Te === "debounced" ? `an inference_token refresh started under ${ed.minRefreshGapMs / 1000}s ago; not starting another` : "the session is ending; not refreshing"}`), Te;
          },
          Ne = {};
        await ml(Promise.all([xe?.then(Le => Ne.atClaim = Le).catch(() => {}), xe === void 0 ? void 0 : Ro().then(Le => Ne.late = Le).catch(() => {}), Pn?.then(Le => Ne.checkout = Le).catch(() => {})]), Lc, "startup probes").catch(() => {});
        let Nt = Ne.atClaim === void 0 ? void 0 : La(Ne.atClaim, Ne.late ?? {}),
          checkout = Ne.checkout,
          inPrivateCheckout = !1,
          Re,
          Xe,
          ot,
          hr = void 0,
          Lr;
        try {
          if (await Cr("start_cc", "started", "Starting Claude Code"), Zt) await Or();
          Yn?.cancel(), Jn = !0;
          let runnerStartupTiming = void 0;
          Re = child_2.kind === "agent-loop" && tokenFilePath !== void 0 ? nyn({
            sessionId: sessionId_3,
            apiBaseUrl: new URL(bd(config.api_base_url, sessionId_3).sdkUrl).origin,
            tokenFilePath: tokenFilePath,
            binaryResolution: "pinned",
            log: f
          }) : void 0, ut.current = ue.current, un(ut.current);
          let ln;
          spawnedSessionIds?.add(sessionId_3), Ft = await Vc({
            execPath: execPath,
            execArgs: execArgs,
            config: config,
            inPrivateCheckout: inPrivateCheckout,
            sessionId: sessionId_3,
            sessionToken: ue.current,
            child: child_2,
            ghRoutePath: Yt?.path,
            ghRouteBasePath: Yt?.basePath,
            sessionGitRulesPath: mt && Rr,
            runnerStartupTiming: runnerStartupTiming,
            ...!1,
            capacity: capacity,
            healthPort: healthPort,
            clientPlatform: clientPlatform,
            cwd: cn,
            configDir: configDir_4,
            stageFileRoot: stageFileRoot,
            stagedFileArgs: le,
            subagentPromptInline: subagentPromptInline,
            governedGit: governedGit,
            governedGitConfigPath: governedGitConfigPath,
            childGitEnvironment: childGitEnvironment,
            debugFile: mn,
            mcpConfigPath: mcpConfigPath,
            launcherSettingsPath: launcherSettingsPath,
            addDirs: addDirs,
            onDebug: f,
            onStatus: onStatus_7,
            onSessionActivity: onSessionActivity,
            onBgTaskLedger: onBgTaskLedger,
            onBgFollowupPending: onBgFollowupPending,
            onPostTurnSettle: onPostTurnSettle,
            onChildLifecycle: onChildLifecycle ? Te => {
              if (Te === "spawned") onChildLifecycle(Te);else fi = Te;
            } : void 0,
            onChildInit: () => {
              dn = !0, onInitPhase?.({
                kind: "end",
                durationSec: (Date.now() - yn) / 1000
              });
            },
            onSessionStartHookError: onSessionStartHookError,
            onMaxLifetime: onMaxLifetime,
            onChildTerminating: onChildTerminating,
            postSessionHookTimeoutMs: n.postSessionHookTimeoutMs ?? Wr,
            pushOutcomeOnRelease: pushOutcomeOnRelease ?? !1,
            signal: signal_2,
            onTokenAck: Te => {
              ci.get(Te)?.(!0);
              let tn = pendingAcks.get(Te);
              if (tn) pendingAcks.delete(Te), onStatus_7(`[runner:session] ${tn.label} update ${Te} acked by child (${Date.now() - tn.sentAtMs}ms)`);
            },
            onResultApiError: Te => {
              if (Te === 401 || Te === 403) kt(`child turn ended with HTTP ${Te} from the model API`);
            },
            onProxyRefusal: void 0,
            onChildStdinReady: Te => {
              if (write = Te, Vr) Te(li);
            }
          }), oe?.onChildExited(Ft.result);
        } finally {
          Xe?.(), Lr?.();
          for (let Le of ci.values()) Le(!1);
          ke?.abort(), ke = void 0, Me.cancel(), write = void 0, Re?.then(Le => Le?.stop());
        }
      } finally {
        Qs.cancelAll(), abortController.abort();
      }
      fe = Ft.result;
      let stderrTail_3 = _3t(Ft.stderrTail),
        pi = typeof signal_2.reason === "string" ? signal_2.reason : void 0;
      if (Ft.result === "failed") failureReason = Ft.startError ? `child failed to start (${Ft.startError.class}): ${stderrTail_3}` : `child exited ${Ft.exitCode ?? "null"}: ${stderrTail_3}`, failureKind = Ft.startError?.class === "e2big" ? "SESSION_FAILURE_KIND_SESSION_CONFIG_ERROR" : "SESSION_FAILURE_KIND_RUNNER_CRASH", failed = !0;else if (Ft.result === "interrupted") failureReason = `child interrupted (SIGTERM/watchdog): ${stderrTail_3}`;
      if (f(`[runner:session] Session ${sessionId_3} completed: ${fe}`), (fe === "failed" || fe === "interrupted") && workerEpoch_2 !== void 0) {
        let b = await Ao({
          apiClient: apiClient_2,
          apiBaseUrl: config.api_base_url,
          sessionId: sessionId_3,
          sessionToken: ue.current,
          workerEpoch: workerEpoch_2,
          exitCode: Ft.exitCode,
          exitSignal: Ft.exitSignal,
          stderrTail: stderrTail_3,
          startError: Ft.startError,
          refusedByHostPolicy: !dn && Ft.stderrTail.includes(MPr),
          onDebug: f,
          onStatus: onStatus_7,
          signal: signal_2
        });
        if (b === "session_gone") Vr = !0;else if (b === "epoch_stale") Nn = !0, failureKind = void 0;
      }
      if (fe === "failed" && Vr && (Ft.stderrTail.includes("SDKStartup: exiting without result") || Ft.stderrTail.includes("RemoteIO: transport closed permanently") || Ft.stderrTail.includes("worker epoch mismatch (409)"))) onStatus_7(`[runner:session] ${sessionId_3} child exit ${Ft.exitCode ?? "null"} after server end_session \u2014 session archived/deleted; clean close, not a runner failure`), fe = "completed", failureReason = void 0, failureKind = void 0, failed = !1;
      if (fe === "failed") m("self_hosted_session_handle", "self_hosted_session_child_failed");else if (fe === "completed") g("self_hosted_session_handle");
      if (fi !== void 0 && (fe === "completed" || fe === "failed")) onChildLifecycle?.(fe);else if (fe === "interrupted") onChildLifecycle?.(pi === "idle-release" || pi === "deassign" ? "completed" : "interrupted");
    } catch (error) {
      if (Yn?.cancel(), signal_2.aborted) {
        let Ot = typeof signal_2.reason === "string" ? signal_2.reason : "unspecified";
        return f(`[runner:session] ${sessionId_3} aborted during setup (reason=${String(Ot)}) \u2014 not a failure`), fe = "interrupted", {
          result: "interrupted"
        };
      }
      let qe = Zt ? await Or().then(() => !1, Ot => mr(Ot)) : !1;
      if (mr(error) || qe) {
        let Ot = qe && !mr(error) ? ` Setup had meanwhile thrown: ${sc(error instanceof Error ? error.message : String(error))}` : "";
        return f(`[runner:session] epoch fence tripped \u2014 another runner has taken ${sessionId_3} (we got epoch ${workerEpoch_2} but server rejected). Aborting before spawn.${Ot}`), Nn = !0, fe = "abandoned", {
          result: "abandoned"
        };
      }
      let setupTerminal_3 = !1,
        Ze = !setupTerminal_3 && (error instanceof SourceRefNotFoundError || error instanceof b3t),
        At = sc(error instanceof Error ? error.message : String(error)),
        stderrTail_4 = Ze ? At : _3t(At);
      failureReason = `setup threw: ${stderrTail_4}`;
      {
        let Ot = jde(error);
        if (Ot !== void 0 && Ot >= 500) failureKind = "SESSION_FAILURE_KIND_ANTHROPIC_CONTROL_PLANE_5XX";else if (Ze) failureKind = "SESSION_FAILURE_KIND_SESSION_CONFIG_ERROR";
      }
      if (Ze) setupFailureKind = "SETUP_FAILURE_KIND_SOURCE_REF_NOT_FOUND";else if (setupTerminal_3) setupFailureKind = "SETUP_FAILURE_KIND_CHECKOUT_HOOK_TERMINAL";
      if (failed = !0, m("self_hosted_session_handle", "self_hosted_session_setup_failed"), f(`[runner:session] Session ${sessionId_3} threw: ${stderrTail_4}`), workerEpoch_2 === void 0) f(`[runner:session] Session ${sessionId_3} setup failed at/before registerWorker \u2014 skipping best-effort UI failure post (no valid epoch)`);else if ((await Ao({
        apiClient: apiClient_2,
        apiBaseUrl: config.api_base_url,
        sessionId: sessionId_3,
        sessionToken: ue.current,
        workerEpoch: workerEpoch_2,
        exitCode: null,
        exitSignal: null,
        stderrTail: stderrTail_4,
        setupTerminal: setupTerminal_3,
        onDebug: f,
        onStatus: onStatus_7,
        signal: signal_2
      })) === "epoch_stale") Nn = !0;
      fe = "failed";
    }
  } catch (error) {
    if (signal_2.aborted) return f(`[runner:session] ${sessionId_3} aborted during pre-spawn \u2014 not a failure`), {
      result: "interrupted"
    };
    let wt = _3t(sc(error instanceof Error ? error.message : String(error)));
    failureReason = `pre-spawn threw: ${wt}`;
    {
      let Qt = jde(error);
      if (Qt !== void 0 && Qt >= 500) failureKind = "SESSION_FAILURE_KIND_ANTHROPIC_CONTROL_PLANE_5XX";
    }
    if (failed = !0, m("self_hosted_session_handle", "self_hosted_session_prespawn_failed"), ue.current && config) f(`[runner:session] FATAL pre-spawn: ${sessionId_3}: ${wt} \u2014 cannot post failure to UI: no worker epoch obtained`);else if (ue.current) f(`[runner:session] FATAL pre-spawn: ${sessionId_3}: ${wt} \u2014 cannot post failure to UI: config not yet fetched`);else f(`[runner:session] FATAL pre-spawn: ${sessionId_3}: ${wt} \u2014 cannot post failure to UI: no session_token obtained`);
    fe = "failed";
  } finally {
    moveWatch?.release(sessionId_3);
    let timeoutMs_3 = n.postSessionHookTimeoutMs ?? Wr,
      wt = Date.now() + cd;
    for (let y of Pe) {
      let H = wt - Date.now();
      if (H <= 0) {
        onStatus_7(`[runner:warn] governed git: mount-read cleanup budget exhausted; the repo-local mount rewrite stays in ${y.path}, so the post-session hook's fetches of that repository still address the mount (best-effort; the next prep drops it)`);
        continue;
      }
      await $l(y.path, y.mountUrl, y.mountBaseUrl, f, H);
    }
    let Qt = !1,
      tr = async () => {
        if (!bt || Qt) return;
        Qt = !0, await Xh(go(bt, $s), "rebuild the trust bundle").catch(y => {
          f(`[runner:session] governed git: the trust bundle could not be rebuilt (${d(y)}); the runner's own git keeps GIT_SSL_CAINFO`);
        });
      };
    if (pushOutcomeOnRelease && Jn && fe !== "completed" && signal_2.reason !== "deassign" && !Nn && _n.length > 0) {
      onStatus_7(`[runner:session] ${sessionId_3} ${fe}: --push-outcome-on-release pushing ${_n.length} outcome branch(es) to the source remote`);
      let y = Date.now() + Br;
      if (_n.some(item => ea(item.source))) await tr();
      for (let H of _n) {
        let Oe = y - Date.now();
        if (Oe <= 0) {
          f(`[runner:session] push-on-release budget exhausted; skipping '${H.branch}' (best-effort)`);
          continue;
        }
        if (H.createdSha) {
          if ((await nd(H.canonicalPath, `refs/heads/${H.branch}`, Oe)) === H.createdSha) {
            f(`[runner:session] push-on-release '${H.branch}' has no commits since creation; skipping (best-effort)`);
            continue;
          }
        }
        if (H.source.fetchViaMount) {
          onStatus_7(`[runner:warn] push-on-release: '${H.branch}' NOT pushed \u2014 ${H.source.repo} is reachable from this runner only through the session's git mount and the release push addresses the plain upstream; its commits exist only in this runner's checkout, so push from inside the session (those pushes use the mount) or preserve them in a post-session hook`);
          continue;
        }
        let Mt = y - Date.now();
        if (Mt <= 0) {
          f(`[runner:session] push-on-release budget exhausted; skipping '${H.branch}' (best-effort)`);
          continue;
        }
        let se = Rd(H.source);
        await ql(H.canonicalPath, H.branch, H.source, Mt, f, bt && H.source.url ? Cs(bt, "outcome", {
          url: se ? H.source.upstreamUrl : H.source.url,
          mountRouted: H.source.governedMount === !0 && !se
        }) : void 0);
      }
    }
    if (Jn) {
      let hookPath_2 = await MSt(SELF_HOSTED_RUNNER_HOOKS_DIR, "post-session");
      if (hookPath_2) {
        if (Ye !== void 0 && tt !== void 0) await ml(ja({
          configDir: configDir_4,
          baseDir: baseDir_3,
          hookStubs: [],
          signingArtifacts: tt,
          onDebug: f,
          onStatus: onStatus_7
        }), Zc, "[runner:session] refresh session-scoped git artifacts").catch(H => {
          gitConfigPins = Va(operatorGitSnapshot, hookGitPrograms), onStatus_7(`[runner:session] could not refresh session-scoped git artifacts before the post-session hook (${d(H)}); its git runs with commit signing OFF instead`);
        });
        await dWr({
          hookPath: hookPath_2,
          gitConfigPins: gitConfigPins,
          gitConfigLegacyParams: Un,
          gitEnvironment: bt && oa(bt),
          cwd: cwd ?? baseDir_3,
          sessionId: sessionId_3,
          exitReason: fe,
          debugLogPath: mn,
          workspacePaths: workspacePaths,
          sessionAccessToken: workerEpoch_2 === void 0 ? void 0 : ue.current,
          apiBaseUrl: config?.api_base_url,
          clientPlatform: clientPlatform,
          timeoutMs: timeoutMs_3,
          onStatus: onStatus_7,
          onDebug: f
        }).catch(H => {
          f(`[runner:hook:post-session] unexpected rejection (ignored): ${H}`);
        });
      }
    }
    let Gn = !1;
    if (!Wt && workerEpoch_2 !== void 0 && ue.current && config?.api_base_url) Gn = await ef({
      apiClient: apiClient_2,
      apiBaseUrl: config.api_base_url,
      sessionId: sessionId_3,
      sessionToken: ue.current,
      workerEpoch: workerEpoch_2,
      debugFile: mn,
      onDebug: f
    }).catch(y => (f(`[runner:session] debug log flush failed (best-effort): ${y}`), !1));
    if (Wt) ;else if (fe === "completed") await Xh(Zn(mn), `unlink ${mn}`).catch(() => {});else if (removeSessionState && Mn) {
      let y = await Xh(Zn(mn), `unlink ${mn}`).then(() => !0, H => G(H));
      if (Jn) onStatus_7(`[runner:session] ${sessionId_3} ${fe} \u2014 child debug log ${Gn ? "tail forwarded to the session diagnostics on the server" : "NOT forwarded (no log, no worker registration, or the upload failed)"}; ${y ? "not kept on disk" : "could not be unlinked, left to the directory removal below"} (--remove-session-state)`);
    } else onStatus_7(`[runner:session] ${sessionId_3} ${fe} \u2014 child debug log preserved at ${mn}`);
    if (mcpConfigPath) await Xh(Zn(mcpConfigPath), `unlink ${mcpConfigPath}`).catch(() => {});
    for (let y of [...(launcherSettingsPath ? [launcherSettingsPath] : []), ...Qe, ...stagedPaths_3]) await Xh(Zn(y), `unlink ${y}`).catch(() => {});
    if (worktrees.length > 0) await Xas({
      worktrees: worktrees,
      onDebug: f
    }).catch(y => {
      f(`[runner:session] worktree cleanup failed: ${y}`);
    });
    let nr = cr ? [] : _n;
    if (nr.some(item => ta(item.source))) await tr();
    for (let y of nr) await Zl(y.canonicalPath, y.branch, y.needsDetach, f, !!useAnthropicGitProxy || Qn.has(y.canonicalPath) && "checkout", void 0, void 0, bt && y.source.governedMount && y.source.url ? Cs(bt, "outcome", {
      url: y.source.url,
      mountRouted: !0
    }) : void 0);
    if (Mn) await Xh(Promise.all([So(Pt), So(serverValueTrustBundlePath)]), "remove the trust bundle").catch(y => {
      f(`[runner:session] governed git: the trust bundle could not be removed (${d(y)})`);
    });
    for (let y of gt) for (let H of [["credential.helper", "^$"], [`credential.${y.origin}.helper`]]) await new Promise(Oe => {
      let Mt = xn("git", ["-C", y.path, "config", "--local", "--unset-all", ...H], {
          cwd: void 0,
          stdio: "ignore",
          windowsHide: !0,
          ...vd("helper")
        }),
        se = setTimeout(He => He.kill("SIGKILL"), ir, Mt),
        qe = () => {
          clearTimeout(se), Oe();
        };
      Mt.on("close", qe), Mt.on("error", qe);
    });
    if (abortController.abort(), _e?.cancel(), await P?.cleanup(), mt) await ml(mt.remove(), _r, "[runner:stuck] session git rules removal (check the session directory mount)").catch(y => {
      f(`[runner:session] session git rules: ${d(y)} (ignored)`);
    });
    if (Yt) await ml(Yt.close(), _r, "[runner:stuck] gh route teardown (check the session directory mount)").catch(y => {
      f(`[runner:session] gh route: ${d(y)} (ignored)`);
    });
    for (let y of ht) await ml(Je(y, {
      recursive: !0,
      force: !0
    }), _r, `[runner:hook] rm -rf ${y}`).catch(H => {
      f(`[runner:hook] cleanup ${y} failed: ${H}`);
    });
    if (Ye !== void 0) {
      let y = Ye;
      await ml(xr(configDir_4, onStatus_7).then(H => H ? Je(y, {
        recursive: !0,
        force: !0
      }) : void 0), _r, `[runner:session] rm -rf ${y}`).catch(H => {
        f(`[runner:session] cleanup ${y} failed: ${H}`);
      });
    }
    if (useAnthropicGitProxy) delete process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
    if (tokenFilePath) {
      Ve = !0, await Ie;
      let y = Ut();
      for (let H of y) await Mo(H, onStatus_7, Ge, tokenFileOpTimeoutMs).catch(() => {});
      if (await Promise.all(ft.map(item => Mo(item, onStatus_7, Ge, tokenFileOpTimeoutMs).catch(() => {}))), R) we.then(async () => {
        for (let H of [...y, ...ft]) await Mo(H, onStatus_7, void 0, tokenFileOpTimeoutMs).catch(() => {});
      }).catch(() => {});
    }
    if (removeSessionState && Mn && cwd) {
      let targets_2 = [$o(baseDir_3, sessionId_3), Xa(baseDir_3, sessionId_3), stageFileRoot, cwd, governedGitConfigPath, governedGitConfigPath + ".lock", Pt, serverValueTrustBundlePath].map(Oe => ({
          path: Oe,
          recursive: !0
        })),
        H = await jc({
          sessionId: sessionId_3,
          targets: targets_2,
          onStatus: onStatus_7
        });
      f(`[runner:session] ${sessionId_3}: --remove-session-state removed (or found absent) ${H.length}/${targets_2.length} per-session paths${H.length > 0 ? `: ${H.join(", ")}` : ""}`);
    }
    if (yn !== void 0 && !dn) onInitPhase?.({
      kind: "exit-before-init",
      failed: failed
    });
  }
  return {
    result: fe,
    failureReason: failureReason,
    setupFailureKind: setupFailureKind,
    failureKind: failureKind
  };
}
function md(e) {
  return e.kind === "agent-loop" ? e.workerEpoch : e.hosting;
}
function Vc(e) {
  let {
      execPath: execPath_2,
      execArgs: execArgs_2 = [],
      config: config_2,
      sessionId: o,
      sessionToken: i,
      child: child_3,
      cwd: cwd_2,
      configDir: h,
      stageFileRoot: w,
      stagedFileArgs: stagedFileArgs,
      subagentPromptInline: subagentPromptInline_2,
      governedGit: governedGit_2,
      governedGitConfigPath: T,
      childGitEnvironment: childGitEnvironment_2,
      ghRoutePath: v,
      ghRouteBasePath: ghRouteBasePath,
      sessionGitRulesPath: sessionGitRulesPath,
      capacity: capacity_2,
      inPrivateCheckout: inPrivateCheckout_2,
      healthPort: healthPort_2,
      clientPlatform: clientPlatform_2,
      debugFile: debugFile,
      mcpConfigPath: mcpConfigPath_2,
      launcherSettingsPath: launcherSettingsPath_2,
      addDirs: addDirs_2,
      onDebug: onDebug_5,
      onStatus: onStatus_8,
      onBgTaskLedger: onBgTaskLedger_2,
      onBgFollowupPending: onBgFollowupPending_2,
      onPostTurnSettle: onPostTurnSettle_2,
      signal: signal_4,
      onChildStdinReady: onChildStdinReady,
      onTokenAck: onTokenAck,
      onResultApiError: onResultApiError,
      onProxyRefusal: onProxyRefusal,
      onChildLifecycle: onChildLifecycle_2,
      onChildInit: onChildInit,
      onSessionStartHookError: onSessionStartHookError_2,
      onMaxLifetime: onMaxLifetime_2,
      onChildTerminating: En,
      runnerStartupTiming: pn
    } = e,
    sn = {
      current: void 0
    },
    $t = child_3.kind === "agent-loop" ? child_3.workerEpoch : void 0,
    vt = e.onSessionActivity === void 0 ? void 0 : (X, he) => {
      if (X !== "activity" && sn.current?.terminationRequested) {
        onDebug_5(`[runner:session] ${o} ignoring '${X}' from a child that is being terminated`);
        return;
      }
      e.onSessionActivity?.(X, he);
    },
    {
      sdkUrl: sdkUrl,
      resumeUrl: resumeUrl
    } = bd(config_2.api_base_url, o),
    qt = [...execArgs_2, "--print", "--sdk-url", sdkUrl, "--input-format", "stream-json", "--output-format", "stream-json", "--replay-user-messages", `--resume=${resumeUrl}`, "--debug-file", debugFile];
  if (mcpConfigPath_2) qt.push("--mcp-config", mcpConfigPath_2);
  if (launcherSettingsPath_2) qt.push("--settings", launcherSettingsPath_2);
  for (let X of addDirs_2 ?? []) qt.push("--add-dir", X);
  qt.push(...stagedFileArgs);
  let Wn = AXo(config_2.claude_code_args);
  if (EYr(config_2.claude_code_args.tools)) {
    if (onDebug_5("[runner:session] Stripped self-hosted-runner operator tool names from the server-supplied tools arg"), Wn.tools === "") onDebug_5("[runner:warn] server-supplied tools arg contained ONLY self-hosted-runner operator tool names; dropping --tools and using the default pool");
  }
  let wn = QSn(qt, _a(Wn, subagentPromptInline_2), pd, (X, he) => onDebug_5(`[runner:session] Skipping ${X} claude_code_arg: ${he}`));
  if (wn > 0) onDebug_5(`[runner:session] Added ${wn}/${Object.keys(config_2.claude_code_args).length} claude_code_args`);
  let inference_auth = config_2.inference_auth;
  if (child_3.kind === "agent-loop" && !inference_auth?.access_token) throw new x(`Session ${o} /remote response is missing inference_auth.access_token`, "/remote response is missing inference_auth.access_token");
  onDebug_5(`[runner:session] inference_auth ${inference_auth ? `set (expires_in=${inference_auth.expires_in_seconds}s)` : "absent: the child calls no model"}`);
  let yr = o.replace(/^cse_/, "session_"),
    Et = config_2.environment_variables.OTEL_RESOURCE_ATTRIBUTES ?? a.OTEL_RESOURCE_ATTRIBUTES,
    Fn = capacity_2 > 1 && healthPort_2 !== void 0 && healthPort_2 > 0 && a.OTEL_METRICS_EXPORTER === "prometheus" ? {
      OTEL_METRICS_EXPORTER: "otlp",
      OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/json",
      OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: `http://127.0.0.1:${healthPort_2}/v1/metrics`,
      OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "none",
      OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative",
      OTEL_RESOURCE_ATTRIBUTES: (Et ? `${Et},` : "") + `session.id=${yr}` + (clientPlatform_2 ? `,client.platform=${clientPlatform_2}` : "")
    } : {},
    yt = Ls(i);
  if (v !== void 0 && (config_2.environment_variables?.PATH ?? process.env.PATH ?? "") !== ghRouteBasePath) onStatus_8("[runner:warn] governed git: the session's PATH changed after the GitHub API route was set up; the session runs with the earlier PATH, so gh stays routed, and the new PATH is not used");
  let CLAUDE_CODE_SESSION_ACCESS_TOKEN = child_3.kind === "agent-loop" ? i : void 0,
    an = child_3.kind === "tool-server" && a.CCR_AGENT_PROXY_STANDALONE_URL !== void 0,
    xe = an || L_n(config_2.environment_variables?.CCR_AGENT_PROXY_RELAY_MODE),
    enforcedEnv_2 = {
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: CLAUDE_CODE_SESSION_ACCESS_TOKEN,
      ...(child_3.kind === "tool-server" && {
        CLAUDE_CODE_MCP_SERVE_SETTINGS: "{}"
      }),
      CLAUDE_SESSION_INGRESS_TOKEN_FILE: child_3.kind === "agent-loop" ? hd(h, md(child_3)) : void 0,
      CLAUDE_CODE_OAUTH_TOKEN: inference_auth?.access_token,
      CLAUDE_CODE_OAUTH_SCOPES: "user:inference user:ccr_inference user:file_upload",
      CLAUDE_CONFIG_DIR: h,
      CLAUDE_STAGE_FILE_ROOT: w,
      ANTHROPIC_MODEL: void 0,
      ANTHROPIC_DEFAULT_MODEL: void 0,
      CLAUDE_CODE_ENVIRONMENT_KIND: "byoc",
      CLAUDE_CODE_BYOC_ENABLE_DATADOG: process.env.CLAUDE_CODE_BYOC_ENABLE_DATADOG,
      DISABLE_TELEMETRY: process.env.DISABLE_TELEMETRY,
      DO_NOT_TRACK: process.env.DO_NOT_TRACK,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC,
      DISABLE_ERROR_REPORTING: process.env.DISABLE_ERROR_REPORTING,
      DISABLE_GROWTHBOOK: process.env.DISABLE_GROWTHBOOK,
      ...Fn,
      CLAUDE_CODE_OTEL_DIAG_STDERR: "1",
      CLAUDE_CODE_TEE_SDK_STDOUT: "1",
      CLAUDE_RUNNER_ACTIVITY_FD: "3",
      CLAUDE_CODE_REMOTE: "true",
      CLAUDE_CODE_REMOTE_MCP_CONFIG: ae(h, Do),
      CLAUDE_CODE_RETRY_WATCHDOG: "1",
      CLAUDE_CODE_MAX_RETRIES: "",
      CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE: "self_hosted",
      CLAUDE_RUNNER_CLIENT_PLATFORM: vet(clientPlatform_2),
      DISABLE_AUTOUPDATER: "1",
      CLAUDE_ENABLE_STREAM_WATCHDOG: "1",
      CLAUDE_RUNNER_CLAUDE_BIN: process.execPath,
      CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD: "1",
      CLAUDE_CODE_REMOTE_SESSION_ID: o,
      CLAUDE_CODE_REMOTE_SESSION_UUID: jM(o),
      CLAUDE_CODE_ACCOUNT_UUID: config_2.environment_variables?.CLAUDE_CODE_ACCOUNT_UUID ?? void 0,
      CLAUDE_CODE_ORGANIZATION_UUID: config_2.environment_variables?.CLAUDE_CODE_ORGANIZATION_UUID ?? void 0,
      CCR_SESSION_ACCOUNT_EMAIL: yt ?? void 0,
      ...uf(yt),
      ANTHROPIC_BASE_URL: config_2.api_base_url,
      SESSION_INGRESS_URL: config_2.api_base_url,
      ...(config_2.api_base_url.includes("staging") ? {
        USE_STAGING_OAUTH: "1"
      } : {
        USE_STAGING_OAUTH: void 0
      }),
      CLAUDE_CODE_USE_CCR_V2: "1",
      CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG: governedGit_2?.toolConfig.gitConfig ? "1" : void 0,
      CLAUDE_CODE_AGENT_PROXY_GH_SHIM: governedGit_2?.toolConfig.ghPathShim ? "1" : void 0,
      CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS: governedGit_2?.toolConfig.gitConfig && governedGit_2.toolConfig.hostSplit ? governedGit_2.toolConfig.hostSplit.governed.join(",") : void 0,
      ...(governedGit_2?.toolConfig.gitConfig && {
        GIT_CONFIG_GLOBAL: T
      }),
      ...pa(childGitEnvironment_2, config_2.environment_variables?.GIT_CONFIG_COUNT ?? process.env.GIT_CONFIG_COUNT, sessionGitRulesPath, la(config_2.environment_variables, process.env, I() === "windows")),
      ...(v !== void 0 && {
        PATH: v
      }),
      ...(governedGit_2 && (governedGit_2.toolConfig.gitConfig || governedGit_2.toolConfig.ghPathShim) ? {
        CCR_AGENT_PROXY_ENABLED: "1"
      } : config_2.environment_variables?.AGENT_PROXY_URL ? {} : {
        CCR_AGENT_PROXY_ENABLED: void 0
      }),
      CCR_AGENT_PROXY_STANDALONE_URL: a.CCR_AGENT_PROXY_STANDALONE_URL,
      ...(an ? {
        CCR_AGENT_PROXY_RELAY_MODE: CCR_AGENT_PROXY_RELAY_MODE
      } : child_3.kind === "agent-loop" && {
        CCR_AGENT_PROXY_RELAY_MODE: config_2.environment_variables?.CCR_AGENT_PROXY_RELAY_MODE?.trim()
      }),
      ...(xe && HGr(process.env)),
      SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
      SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
      ...Z4o(),
      SELF_HOSTED_RUNNER_HOST_CONFIG_DIR: void 0,
      CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: void 0,
      CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN: void 0,
      CLAUDE_CODE_BRIDGE_PROMPT_SHA256: void 0,
      CLAUDE_CODE_BRIDGE_MCP_CARRIER: void 0,
      CCR_AUTO_MODE_APPLY: void 0,
      CCR_AUTO_MODE_ALLOW: void 0,
      CCR_AUTO_MODE_ENVIRONMENT: void 0,
      CCR_AUTO_MODE_SOFT_DENY: void 0,
      ...{},
      CLAUDE_CODE_WORKER_EPOCH: $t?.toString(),
      CLAUDE_CODE_RESUME_INTERRUPTED_TURN: ($t ?? 0) > 1 ? "1" : void 0,
      CLAUDE_CODE_RESUME_PROMPT: ($t ?? 0) > 1 ? "Continue from where you left off. This session moved to a new runner; files you created earlier may no longer exist, so verify the working directory state before relying on prior edits." : void 0,
      CCR_SPAWN_TIMESTAMP_MS: String(Date.now()),
      CCR_RUNNER_STARTUP_TIMING: pn,
      [Oa]: void 0,
      ...!1
    },
    Pn = child_3.kind === "tool-server" ? [...execArgs_2, "mcp", "serve", "--transport", "http", "--port", "28471", "--result-format", "rendered", "--session-tunnel"] : qt,
    env = Wi({
      inheritedEnv: process.env,
      serverEnv: config_2.environment_variables,
      enforcedEnv: enforcedEnv_2,
      onDropped: (X, he, P) => onDebug_5(`[runner:session] Skipping ${P} environment name ${X}: ${he}`)
    });
  onDebug_5(`[runner:session] Spawning child: ${[execPath_2, ...execArgs_2].join(" ")} (${Pn.length - execArgs_2.length} args) ANTHROPIC_BASE_URL=${config_2.api_base_url} CLAUDE_CODE_WORKER_EPOCH=${$t} cwd=${cwd_2}`);
  let yn = X => {
      let startError_3 = ka(X, [execPath_2, ...Pn], env);
      return onDebug_5(`[runner:session] ${o} spawn error (${startError_3.class}): ${X instanceof Error ? X.message : String(X)}`), {
        result: "failed",
        exitCode: null,
        exitSignal: null,
        stderrTail: startError_3.description,
        startError: startError_3
      };
    },
    dn = {
      cwd: cwd_2,
      stdio: ["pipe", "pipe", "pipe", "pipe"],
      env: env,
      windowsHide: !0,
      detached: !1
    },
    child_4;
  try {
    child_4 = xn(execPath_2, Pn, dn);
  } catch (error) {
    return Promise.resolve(yn(error));
  }
  let input_2;
  try {
    input_2 = child_4.stdio[3], input_2?.on?.("error", X => {
      onDebug_5(`[runner:session] activity pipe error (${X.message}); falling back to stdout readline`), input_2 = void 0;
    });
  } catch (error) {
    onDebug_5(`[runner:session] activity pipe unavailable (${error instanceof Error ? error.message : String(error)}); falling back to stdout readline`), input_2 = void 0;
  }
  if (onStatus_8(`[runner:session] ${o} child spawned pid=${child_4.pid} cwd=${cwd_2}`), onChildLifecycle_2?.("spawned"), vt?.("startup"), child_3.kind === "tool-server") child_4.stdin?.on("error", X => {
    onDebug_5(`[runner:session] ${o} tool server's standard input closed before its line was read (${X.message})`);
  }), child_4.stdin?.write(_({
    v: 1,
    session_id: o,
    session_token: i,
    api_base_url: config_2.api_base_url,
    runner: child_3.runner
  }) + `
`);else onChildStdinReady?.(X => {
    if (child_4.stdin && !child_4.stdin.destroyed) return child_4.stdin.write(X), !0;
    return !1;
  });
  let ut = new xo({
    child: child_4,
    sessionId: o,
    startTokenStale: e.startTokenStale,
    stuckExitCode: e.stuckExitCode,
    maxLifetimeMs: St("SELF_HOSTED_RUNNER_MAX_LIFETIME_MS"),
    maxLifetimeGraceMs: St("SELF_HOSTED_RUNNER_MAX_LIFETIME_GRACE_MS") || Qc,
    sigkillGraceMs: Math.min(Math.max(St("SELF_HOSTED_RUNNER_SIGKILL_GRACE_MS") || 30000, e.postSessionHookTimeoutMs + (e.pushOutcomeOnRelease ? Br : 0) + ar), 2147483647),
    sigkillTimeoutMs: St("SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS") || xo.SIGKILL_TIMEOUT_DEFAULT_MS,
    onMaxLifetime: onMaxLifetime_2,
    onTerminating: En,
    onDebug: onDebug_5,
    onStatus: onStatus_8
  });
  sn.current = ut;
  let un = () => ut.terminate();
  if (signal_4.addEventListener("abort", un, {
    once: !0
  }), signal_4.aborted) ut.terminate();
  let q = new Map(),
    fe = () => {
      let X = 0;
      for (let he of q.values()) if (he !== "monitor_mcp" && he !== "monitor_ws") X++;
      return X;
    },
    Ue = null,
    $e,
    C = !1,
    ee = !1,
    pe = !1,
    Qe = !1,
    Ke = !1,
    te = !1,
    Ht = !1,
    Ye = !1,
    Jt = 120000,
    Rn = () => Ue !== null && Date.now() < Ue,
    Pt = () => ({
      liveTasks: q.size,
      liveTaskIds: Array.from(q, ([X, he]) => `${X}:${he}`),
      wakeupInMs: Ue !== null ? Math.max(0, Ue - Date.now()) : void 0,
      bgResultAwaitingFollowup: bgResultAwaitingFollowup
    }),
    Tn = St("SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS") || Ys,
    bt = St("SELF_HOSTED_RUNNER_POST_TURN_SETTLE_MS") || is,
    Kn = !1,
    Rr = 0,
    gn,
    Mn = (X = !1) => {
      if (gn !== void 0) clearTimeout(gn), gn = void 0;
      if (Kn) Kn = !1, onPostTurnSettle_2?.(!1, X);
    },
    mn = X => {
      let he = Math.min(Date.now() + X, Rr);
      if (gn !== void 0) clearTimeout(gn);
      gn = setTimeout(Mn, Math.max(0, he - Date.now()));
    },
    Q = () => {
      if (Rr = Date.now() + bt, !Kn) Kn = !0, onPostTurnSettle_2?.(!0);
      mn(bt);
    },
    re = new Set(),
    rt = !1,
    Bt = new Set(),
    Ut = new Set(),
    bgResultAwaitingFollowup = !1,
    Wt,
    bn = () => {
      if (Wt !== void 0) clearTimeout(Wt), Wt = void 0;
    },
    Ie = (X, he = !1, P = !1) => {
      if (!he) bn(), rt = !1, Bt.clear();
      if (bgResultAwaitingFollowup) bgResultAwaitingFollowup = !1, onDebug_5(`[runner:session] ${o} background-result follow-up cleared (${X})`), onBgFollowupPending_2?.(!1, P || sn.current?.terminationRequested === !0);
    },
    R = () => {
      bn(), Wt = setTimeout(() => {
        Wt = void 0, onStatus_8(`[runner:session] ${o} no follow-up turn within ${formatDelay(Tn)} of the background task finishing \u2014 ` + "releasing the follow-up hold"), Ie("grace elapsed"), ze();
      }, Tn);
    },
    we = () => {
      if (!bgResultAwaitingFollowup) bgResultAwaitingFollowup = !0, onStatus_8(`[runner:session] ${o} background task finished; follow-up turn ` + "pending \u2014 session still counted as busy (grace " + `${formatDelay(Tn)})`), onBgFollowupPending_2?.(!0);
      if (!C) R();
    },
    Ve = X => {
      if (re.delete(X), Ut.delete(X), rt && fe() === 0 && !Qe && !C) we();
    },
    Ge = X => {
      if (Ut.has(X)) {
        Ve(X);
        return;
      }
      if (re.delete(X)) rt = !0, Bt.add(X);
      if (fe() > 0) return;
      if (Qe) return;
      if (!(rt || !C)) return;
      rt = !0, Bt.add(X), we();
    },
    ze = () => {
      if (C || q.size > 0 || Rn() || bgResultAwaitingFollowup) return;
      if ($e !== void 0) clearTimeout($e), $e = void 0;
      vt?.("turn-end");
    },
    ht = X => {
      let he;
      try {
        he = J(X);
      } catch {
        return;
      }
      if (!he || typeof he !== "object") return;
      let P = he;
      if (P.type === "control_response") {
        let Ee = P.response?.request_id;
        if (typeof Ee === "string" && Ee.startsWith("shr-token-")) onTokenAck?.(Ee);
      }
      if (P.type === "assistant") onDebug_5("[runner:session] Activity: assistant message");else if (P.type === "result") {
        if (onDebug_5(`[runner:session] Result: subtype=${P.subtype}`), P.is_error === !0 && typeof P.api_error_status === "number") onResultApiError?.(P.api_error_status);
      }
      if (P.type === "system" && P.subtype === "task_started") {
        if (typeof P.task_id === "string" && P.task_type !== "in_process_teammate") {
          if (q.set(P.task_id, typeof P.task_type === "string" ? P.task_type : "unknown"), P.owned_by_subagent === !0) Ut.add(P.task_id);else Ut.delete(P.task_id);
          onBgTaskLedger_2?.(fe());
        }
        return;
      }
      if (P.type === "system" && P.subtype === "task_updated") {
        let patch = P.patch,
          Ee = patch?.status;
        if (typeof P.task_id === "string" && patch?.is_backgrounded === !0 && q.has(P.task_id)) re.add(P.task_id);
        if (typeof P.task_id === "string" && (Ee === "completed" || Ee === "failed" || Ee === "killed") && q.delete(P.task_id)) Ge(P.task_id), onBgTaskLedger_2?.(fe()), ze();
        return;
      }
      if (P.type === "system" && P.subtype === "task_notification") {
        if (typeof P.task_id === "string" && q.delete(P.task_id)) {
          if (P.status === "stopped") Ve(P.task_id);else Ge(P.task_id);
          onBgTaskLedger_2?.(fe()), ze();
        }
        return;
      }
      if (P.type === "system" && P.subtype === "background_tasks_changed") {
        let tasks = P.tasks;
        if (Array.isArray(tasks)) for (let Ee of tasks) {
          let _t = Ee?.task_id;
          if (typeof _t === "string") re.add(_t);
        }
        return;
      }
      if (P.type === "system" && P.subtype === "hook_response" && P.hook_event === "SessionStart" && P.outcome === "error") {
        onSessionStartHookError_2?.();
        return;
      }
      if (P.type === "system" && P.subtype === "init") {
        if (!Ke) {
          if (Ke = !0, onChildInit?.(), child_3.kind === "tool-server") g("self_hosted_tools_host");
        }
        vt?.(child_3.kind === "tool-server" ? "init-observed" : "activity");
        return;
      }
      if (P.type === "system" && P.subtype === "turn_starting") {
        if (!Ke) return;
        if (pe = !0, vt?.("activity"), P.mode === void 0 || P.mode === "task-notification" && !("task_id" in P) || P.mode === "task-notification" && typeof P.task_id === "string" && Bt.has(P.task_id)) Ie("follow-up turn starting");else Ie("non-follow-up turn starting", !0), bn();
        return;
      }
      if (P.type === "system" && P.subtype === "session_state_changed") {
        if (te = !0, Kn) mn(zc);
        if (typeof P.waiting_on_user === "boolean") ee = !0, Qe = P.waiting_on_user;
        if (P.state === "idle") {
          if (!Ye) vt?.("turn-end");
          return;
        }
        if (!Ke) {
          if (typeof P.waiting_on_user === "boolean" ? P.waiting_on_user : P.state === "requires_action") Ht = !0;else if (!Ht) return;
        }
        if (typeof P.waiting_on_user === "boolean") vt?.(P.waiting_on_user ? "awaiting-action" : "activity"), Ie(P.waiting_on_user ? "child parked at a prompt" : "child running", !0);else if (P.state === "requires_action") vt?.("awaiting-action"), Ie("child parked at a prompt", !0);else if (P.state === "running") vt?.("activity"), Ie("child running", !0);
        return;
      }
      if (P.type === "assistant") {
        let _e = P.message?.content;
        if (Array.isArray(_e)) {
          for (let Ee of _e) if (Ee && typeof Ee === "object" && Ee.type === "tool_use" && Ee.name === yl) {
            let input = Ee.input,
              Sn = Number(input?.delaySeconds);
            if (Number.isFinite(Sn)) {
              let Tr = Math.min(3600, Math.max(60, Sn));
              Ue = Date.now() + Tr * 1000 + Jt;
            }
          }
        }
      }
      if (P.type === "result") {
        if (Q(), ut.noteTurnEnd(), C = !1, Ye = !0, rt && fe() === 0 && !Qe) we();
        if (q.size === 0 && !Rn() && !bgResultAwaitingFollowup) vt?.("turn-end");else if (Qe && !a.CLAUDE_RUNNER_DISABLE_AWAITING_ACTION_OVERRIDE) vt?.("awaiting-action", Pt()), Ie("child parked at a prompt", !0);else {
          for (let _e of q.keys()) re.add(_e);
          if (vt?.("turn-end-deferred", Pt()), bgResultAwaitingFollowup) R();
          if ($e !== void 0) clearTimeout($e);
          if (Ue !== null) $e = setTimeout(() => {
            $e = void 0, Ue = null, ze();
          }, Math.max(0, Ue - Date.now()));
        }
      } else if (P.type === "user" || P.type === "assistant") {
        if (P.from_subagent === !0) return;
        if (!Ke && !te && !Ye) {
          vt?.("startup", {
            ...Pt(),
            childAlive: !0
          });
          return;
        }
        if (ut.noteTurnStart(), !C && P.type === "user") Ue = null;
        let _e = !C;
        if (C = !0, $e !== void 0) clearTimeout($e), $e = void 0;
        if (!ee) vt?.("activity");
        if (_e) {
          if (Ie("follow-up turn opened", pe), pe) bn();
        }
      }
    };
  if (child_4.stdout) Co({
    input: child_4.stdout
  }).on("line", ht);
  if (input_2) Co({
    input: input_2
  }).on("line", ht);
  let gt = 50,
    Pe = 500,
    Yt = [];
  if (child_4.stderr) Co({
    input: child_4.stderr
  }).on("line", he => {
    if (!Ke && he.startsWith("SDKStartup: phase=system_init_emitted")) Ke = !0, onChildInit?.(), vt?.("init-observed"), onDebug_5(`[runner:session] ${o} sawInit latched via stderr SDKStartup marker`);
    let P = Jc(he, Pe);
    if (P.startsWith(zar)) onStatus_8(`[runner:session] stderr: ${P}`);else onDebug_5(`[runner:session] stderr: ${P}`);
    if (Yt.push(P), Yt.length > gt) Yt.shift();
  });
  let mt = !1;
  return new Promise(X => {
    child_4.on("close", (exitCode_2, exitSignal_2) => {
      if (signal_4.removeEventListener("abort", un), ut.stop(), $e !== void 0) clearTimeout($e), $e = void 0;
      if (q.size > 0) q.clear(), Ut.clear(), onBgTaskLedger_2?.(0);
      Ie("child exited", !1, !0), Mn(!0);
      let stderrTail_5 = Yt.join(`
`);
      if (ut.terminationRequested) onStatus_8(`[runner:session] ${o} child exited pid=${child_4.pid} code=${exitCode_2} signal=${exitSignal_2} (interrupted \u2014 we asked)`), ut.descendantsReaped.then(() => X({
        result: "interrupted",
        exitCode: exitCode_2,
        exitSignal: exitSignal_2,
        stderrTail: stderrTail_5
      }));else if (exitSignal_2 === "SIGTERM" || exitSignal_2 === "SIGINT") onStatus_8(`[runner:session] ${o} child exited pid=${child_4.pid} code=${exitCode_2} signal=${exitSignal_2} (interrupted)`), X({
        result: "interrupted",
        exitCode: exitCode_2,
        exitSignal: exitSignal_2,
        stderrTail: stderrTail_5
      });else if (exitCode_2 === 0) {
        if (onStatus_8(`[runner:session] ${o} child exited pid=${child_4.pid} code=0 (completed)`), !mt) mt = !0, onChildLifecycle_2?.("completed");
        X({
          result: "completed",
          exitCode: 0,
          exitSignal: null,
          stderrTail: stderrTail_5
        });
      } else {
        if (onStatus_8(`[runner:session] ${o} child exited pid=${child_4.pid} code=${exitCode_2} signal=${exitSignal_2} (failed) \u2014 debug log at ${debugFile}`), !mt) mt = !0, onChildLifecycle_2?.("failed");
        X({
          result: "failed",
          exitCode: exitCode_2,
          exitSignal: exitSignal_2,
          stderrTail: stderrTail_5
        });
      }
    }), child_4.on("error", he => {
      if (signal_4.removeEventListener("abort", un), ut.stop(), !mt) mt = !0, onChildLifecycle_2?.("failed");
      if (child_4.pid === void 0) {
        X(yn(he));
        return;
      }
      onDebug_5(`[runner:session] ${o} spawn error: ${he.message}`), X({
        result: "failed",
        exitCode: null,
        exitSignal: null,
        stderrTail: `spawn error: ${he.message}`
      });
    });
  });
}
var Wr = 60000,
  Ys = 30000,
  is = 7000,
  zc = 2000,
  as = 5000;
var Xc = 1000,
  qc = 1500,
  ar = 15000,
  Zc = 1000;
function Ko(e, n, r = 0, s = 0, o = 0) {
  return Math.ceil((e + n + r + s + o + ar) / 1000);
}
function Jc(e, n) {
  let r = sc(e);
  return r.length > n ? r.slice(0, n) + ` \u2026[+${r.length - n} chars]` : r;
}
var Qc = 900000;
class xo {
  maxLifetimeTimer;
  maxLifetimeGraceTimer;
  sigkillTimer;
  sigkillGraceTimer;
  stopped = !1;
  turnInFlight = !1;
  maxLifetimeDeferred = !1;
  maxLifetimeDecidedByHook = !1;
  terminating = !1;
  treeSnapshot;
  reap = Promise.resolve();
  rootToken;
  startTokenStale;
  stuckExitCode;
  terminatedAt = 0;
  child;
  sessionId;
  maxLifetimeGraceMs;
  sigkillTimeoutMs;
  sigkillGraceMs;
  onDebug;
  onStatus;
  onMaxLifetime;
  onTerminating;
  static SIGKILL_TIMEOUT_DEFAULT_MS = as;
  constructor(e) {
    if (this.child = e.child, this.sessionId = e.sessionId, this.maxLifetimeGraceMs = e.maxLifetimeGraceMs, this.sigkillTimeoutMs = e.sigkillTimeoutMs, this.sigkillGraceMs = e.sigkillGraceMs, this.onMaxLifetime = e.onMaxLifetime, this.startTokenStale = e.startTokenStale, this.stuckExitCode = e.stuckExitCode, this.onTerminating = e.onTerminating, this.onDebug = e.onDebug, this.onStatus = e.onStatus, this.child.pid, e.maxLifetimeMs > 0) {
      let maxLifetimeMs = e.maxLifetimeMs;
      this.maxLifetimeTimer = setTimeout(r => {
        if (this.stopped || this.terminating) return;
        let s;
        try {
          s = this.onMaxLifetime?.();
        } catch (error) {
          this.onStatus(`[runner:session] ${this.sessionId} max-lifetime hook threw (${error instanceof Error ? error.message : String(error)}) \u2014 falling back to the watchdog's own decision`);
        }
        if (this.maxLifetimeDecidedByHook = s !== void 0, s ??= this.turnInFlight ? "wait" : "kill", s === "kill") {
          this.onDebug(`[runner:stuck] Session ${this.sessionId} exceeded max lifetime of ${r}ms \u2014 aborting child pid=${this.child.pid}`), this.terminate();
          return;
        }
        this.maxLifetimeDeferred = !0, this.onStatus(s === "release" ? `[runner:session] ${this.sessionId} max session age reached (${r}ms) while not mid-turn \u2014 handing to the poll loop's release instead of terminating (hard stop in ${this.maxLifetimeGraceMs}ms if it is still alive)` : this.maxLifetimeDecidedByHook ? `[runner:session] ${this.sessionId} max session age reached (${r}ms) \u2014 waiting up to ${this.maxLifetimeGraceMs}ms for the in-flight turn to park or finish (it is then released; terminated at the hard stop otherwise)` : `[runner:session] ${this.sessionId} max session age reached (${r}ms) \u2014 waiting up to ${this.maxLifetimeGraceMs}ms for in-flight turn to finish before terminating`), this.maxLifetimeGraceTimer = setTimeout(o => {
          if (this.stopped || this.terminating) return;
          if (this.maxLifetimeDecidedByHook) this.onStatus(`[runner:session] ${this.sessionId} still mid-turn, or its release was not accepted, within ${this.maxLifetimeGraceMs}ms of the max session age (${o}ms) \u2014 terminating (hard stop) pid=${this.child.pid}`);else this.onDebug(`[runner:stuck] Session ${this.sessionId} still mid-turn ${this.maxLifetimeGraceMs}ms after max lifetime of ${o}ms \u2014 aborting child pid=${this.child.pid}`);
          this.terminate();
        }, this.maxLifetimeGraceMs, r);
      }, maxLifetimeMs, maxLifetimeMs);
    }
  }
  noteTurnStart() {
    this.turnInFlight = !0;
  }
  noteTurnEnd() {
    if (this.turnInFlight = !1, this.maxLifetimeDeferred && !this.stopped && !this.terminating) {
      if (this.maxLifetimeDecidedByHook) return;
      this.onStatus(`[runner:session] ${this.sessionId} in-flight turn finished after max session age \u2014 aborting child pid=${this.child.pid}`), this.terminate();
    }
  }
  signalGroup(e) {
    let pid = this.child.pid;
    if (pid === void 0) {
      this.child.kill(e);
      return;
    }
    if (pid <= 1) return;
    try {
      process.kill(-pid, e);
    } catch {
      this.child.kill(e);
    }
  }
  reapDescendants(e) {
    let treeSnapshot = this.treeSnapshot;
    if (treeSnapshot === void 0) return;
    this.treeSnapshot = void 0;
    let pid_2 = this.child.pid,
      s = (async () => {
        let o = await treeSnapshot;
        if (o === void 0) {
          this.onStatus(`[runner:session] ${this.sessionId} could not list the child's process tree \u2014 signals reached its process group only; detached tool trees may survive`);
          return;
        }
        if (o.rootRecycled) {
          this.onStatus(`[runner:session] ${this.sessionId} child pid=${pid_2} now names another process \u2014 no process-tree reap; detached tool trees may survive`);
          return;
        }
        let i;
        if (e > 0) {
          let {
            live: live,
            incomplete: incomplete_3
          } = await ba(o);
          if (live > 0 || incomplete_3) await Y(e), i = await vo(o, "SIGKILL");
        } else i = await vo(o, "SIGKILL");
        if (i?.incomplete) {
          this.onStatus(`[runner:session] ${this.sessionId} process-tree identity check did not complete \u2014 ${o.pinned.size - i.proven} of ${o.pinned.size} descendant(s) unverified and not signalled; they may survive`);
          return;
        }
        let u = i?.pids ?? 0,
          l = i?.groups ?? 0;
        if (o.degraded || o.truncated || o.unpinned > 0) {
          this.onStatus(`[runner:session] ${this.sessionId} process-tree listing incomplete (partial=${o.degraded} truncated=${o.truncated}) \u2014 SIGKILLed ${u} of ${o.pinned.size} identified descendant(s) and ${l} group(s); ${o.unpinned} descendant(s) could not be identified and were not signalled; they, and any unlisted tool trees, may survive`);
          return;
        }
        this.onDebug(i === void 0 ? `[runner:session] process tree pid=${pid_2}: ${o.pinned.size} descendant(s) at SIGTERM (${o.unpinned} unidentifiable), none outlived the child` : `[runner:session] process tree pid=${pid_2}: ${o.pinned.size} descendant(s) at SIGTERM (${o.unpinned} unidentifiable); ${u} outlived the child and were SIGKILLed, with ${l} tool-tree group(s)`);
      })().catch(() => {});
    this.reap = je(s, e + Xc).then(() => {});
  }
  get descendantsReaped() {
    return this.reap;
  }
  terminate() {
    if (this.terminating) return;
    if (this.stopped) return;
    this.terminating = !0, this.terminatedAt = Date.now();
    try {
      this.onTerminating?.();
    } catch {}
    if (this.onDebug(`[runner:session] Abort signal received, killing process tree at pid=${this.child.pid}`), this.child.pid) tS(this.child.pid);else this.child.kill();
  }
  stop() {
    if (this.stopped = !0, this.reapDescendants(Math.max(1, Math.min(qc, this.terminatedAt + this.sigkillTimeoutMs - Date.now()))), this.sigkillTimer) clearTimeout(this.sigkillTimer);
    if (this.sigkillGraceTimer) clearTimeout(this.sigkillGraceTimer);
    if (this.maxLifetimeTimer) clearTimeout(this.maxLifetimeTimer);
    if (this.maxLifetimeGraceTimer) clearTimeout(this.maxLifetimeGraceTimer);
  }
  get terminationRequested() {
    return this.terminating;
  }
}
async function wr(e, n) {
  let initialDelayMs = n.initialDelayMs,
    s = 0;
  for (;;) {
    if (n.signal?.aborted) return;
    s++;
    try {
      return await e();
    } catch (error) {
      if (n.shouldRetry && !n.shouldRetry(error)) throw error;
      if (n.maxAttempts !== void 0 && s >= n.maxAttempts) throw error;
      n.onRetry?.(s, error);
      let i = initialDelayMs * (0.75 + Math.random() * 0.5);
      await Y(i, n.signal), initialDelayMs = Math.min(initialDelayMs * 2, n.maxDelayMs);
    }
  }
}
class _d {
  last = 0;
  next() {
    return ++this.last;
  }
}
var el = new z(() => new _d());
function tl() {
  return el.of(j().host);
}
function qa(e) {
  let n = e.expiresInSeconds !== void 0 ? ` (expires_in=${e.expiresInSeconds}s)` : "";
  if (!e.write) {
    e.onStatus(`[runner:session] ${e.label} refreshed for ${e.sessionId} but child stdin is not wired yet \u2014 token NOT delivered; next interval will retry${n}`);
    return;
  }
  let request_id;
  if (e.pendingAcks) request_id = `shr-token-${e.label}-${tl().next()}`, e.pendingAcks.set(request_id, {
    label: e.label,
    sentAtMs: e.nowMs ?? Date.now()
  });
  e.write(_({
    type: "update_environment_variables",
    variables: {
      [e.envVar]: e.token
    },
    ...(request_id && {
      request_id: request_id
    })
  }) + `
`), e.onStatus(`[runner:session] ${e.label} refreshed for ${e.sessionId} \u2014 pushed to child via stdin${n}${request_id ? ` [${request_id}]` : ""}`);
}
function Za(e) {
  let n = e.nowMs ?? Date.now(),
    r = e.graceMs ?? 90000;
  for (let [s, o] of e.pendingAcks) if (n - o.sentAtMs >= r) e.onStatus(`[runner:session] WARNING: ${o.label} update ${s} for ${e.sessionId} was never acked by the child \u2014 the stdin control channel may be severed (wrapper backgrounding without <&0?). Token rotation is NOT reaching the child; it will 401 at token TTL. See docs/self-hosted-runners-guide.md \xA7 "The child must keep the runner's stdin".`), e.pendingAcks.delete(s);
}
function No(e) {
  let n = e.errorRetryMs ?? 30000,
    r = Math.max(n, e.errorRetryMaxMs ?? 0),
    s = e.jitter ?? 0,
    o = e.expiryMarginMs ?? 60000,
    i = e.expiredRetryMs ?? {
      minMs: 30000,
      maxMs: 60000
    },
    u = e.minRefreshGapMs ?? 30000,
    l = e.now ?? Date.now,
    h = e.random ?? Math.random,
    w,
    f = !1,
    S = !1,
    {
      intervalMs: E,
      ttlMs: ttlMs
    } = e,
    U = ttlMs === void 0 ? void 0 : l() + ttlMs,
    v,
    N = 0,
    B = !1,
    D = () => cancel_6();
  e.signal.addEventListener("abort", D, {
    once: !0
  });
  function cancel_6() {
    if (f = !0, w) clearTimeout(w);
    e.signal.removeEventListener("abort", D);
  }
  function ie(transient) {
    let expired = U !== void 0 && l() >= U - o;
    if (!transient) return {
      delayMs: E,
      expired: expired,
      transient: transient
    };
    let Se;
    if (expired) {
      let {
        minMs: minMs,
        maxMs: maxMs
      } = i;
      Se = Math.round(minMs + h() * Math.max(0, maxMs - minMs));
    } else {
      let de = Math.min(r, n * 2 ** N);
      Se = Math.round(de * (1 - s + 2 * s * h()));
    }
    return {
      delayMs: Math.min(Se, E),
      expired: expired,
      transient: transient
    };
  }
  function ce() {
    if (f || e.signal.aborted || S) return;
    S = !0;
    let ge = l();
    v = ge;
    let be, Se;
    Promise.resolve().then(() => e.refresh()).then(intervalMs => {
      N = 0;
      let Z = typeof intervalMs === "number" ? {
        intervalMs: intervalMs
      } : intervalMs ?? {};
      if (Z.intervalMs !== void 0 && Z.intervalMs > 0) E = Z.intervalMs;
      if (Z.ttlMs !== void 0 && Z.ttlMs > 0) ttlMs = Z.ttlMs;
      if (ttlMs !== void 0) U = ge + ttlMs;
      if (Z.nextInMs !== void 0 && Z.nextInMs > 0) Se = Z.nextInMs;
    }).catch(de => {
      if (f || e.signal.aborted) return;
      if (be = ie(e.isTransient?.(de) ?? !0), B) be = {
        ...be,
        delayMs: 0
      };
      N++, e.onError(de, be);
    }).finally(() => {
      if (S = !1, f || e.signal.aborted) return;
      if (B) {
        B = !1, ce();
        return;
      }
      w = setTimeout(ce, be?.delayMs ?? Se ?? E);
    });
  }
  function refreshNow({
    force: force_2
  } = {
    force: !1
  }) {
    if (f || e.signal.aborted) return "cancelled";
    if (S) return B ||= force_2, "in_flight";
    if (!force_2 && v !== void 0 && l() - v < u) return "debounced";
    if (w) clearTimeout(w), w = void 0;
    return ce(), "fired";
  }
  return w = setTimeout(ce, E), {
    cancel: cancel_6,
    refreshNow: refreshNow
  };
}
function Ja(e) {
  if (!e || e <= 0) return 1440000;
  let s = Math.floor(e * 1000 * 0.8);
  return Math.max(30000, Math.min(1440000, s));
}
function Qa(e) {
  return e && e > 0 ? e * 1000 : 1800000;
}
var timeoutMs_2 = 30000,
  ed = {
    errorRetryMs: 5000,
    errorRetryMaxMs: 60000,
    jitter: 0.2,
    expiryMarginMs: 60000,
    expiredRetryMs: {
      minMs: 30000,
      maxMs: 60000
    },
    minRefreshGapMs: 30000
  };
class RemoteConfigWithoutInferenceAuthError extends Error {
  constructor() {
    super("getSessionRemoteConfig returned no inference_auth.access_token");
    this.name = "RemoteConfigWithoutInferenceAuthError";
  }
}
function isTransient(e) {
  let n = jde(e);
  return !(e instanceof RemoteConfigWithoutInferenceAuthError) && (shouldRetry(e) || n === 401 || n === 403);
}
function sl(e) {
  if (typeof e !== "string") return;
  let n = PA(e);
  if (n === "" || n.length > 255 || !SZe.test(n)) return;
  return ro(n) ? ur : n;
}
function ol(e, n) {
  let r = w => Array.isArray(w) ? w : [],
    s = r(e?.governed_hosts),
    o = r(e?.direct_hosts);
  if (s.length === 0 && o.length === 0) return;
  let i = 0,
    u = w => {
      let f = [];
      for (let S of w) {
        let E = sl(S);
        if (E === void 0) {
          i++;
          continue;
        }
        if (!f.includes(E)) f.push(E);
      }
      return f;
    },
    governed = u(s),
    direct = u(o).filter(item => !governed.includes(item));
  if (i > 0) n(`[runner:warn] the work item's governed-git per-host routing carried ${i} host ${O(i, "entry", "entries")} that ${O(i, "is", "are")} not a bare canonical hostname; ${O(i, "it was", "they were")} ignored (a host the runner cannot validate is served directly with this machine's own git credentials). No operator action is needed for the session to work; please report this warning to Anthropic support so the server-side delivery can be fixed.`);
  return {
    governed: governed,
    direct: direct
  };
}
function Sd(e, n) {
  if (!e) return !0;
  if (!n) return !1;
  let r = PA(n);
  return ro(r) ? e.governed.includes(ur) : e.governed.includes(r);
}
function il(e, n) {
  if (!e || !n) return [];
  let r = n.toLowerCase().split(/[,\s]+/).filter(Boolean);
  if (r.includes("*")) return [...e.governed];
  let s = r.map(item => item.replace(/^\*?\./, "").replace(/:\d+$/, "").replace(/\.$/, "")).filter(item => item !== "");
  return e.governed.filter(item => s.some(i => item === i || item.endsWith(`.${i}`)));
}
function al(e, n) {
  if (!e || !n) return;
  let r = e.governed.filter(item => item !== ur);
  if (r.length === 0) return;
  return `[runner:warn] governed git: GIT_ASKPASS is set on this runner and the server governs ${O(r.length, "host")} ${r.join(", ")}. An askpass program answers for every host. The session's own git config tells git to give up rather than ask for a credential for ${O(r.length, "that host", "those hosts")}, because the session relay supplies it. Do not leave it to that alone: git config read after the session's own (a repository's, the command line, GIT_CONFIG_* variables) can switch that off, and if the program were then asked, this machine's credential would pass through Anthropic's relay. Make the program answer only for the hosts you mean (git passes it the URL in its prompt) or unset it; the same goes for core.askPass in git config and for SSH_ASKPASS.`;
}
function dl(e, n, r) {
  if (!e || !n) return;
  let s = [];
  for (let o of r) {
    if (o === void 0 || Sd(e, o)) continue;
    let i = PA(o);
    if (i === "" || i.length > 255 || !SZe.test(i) || s.includes(i)) continue;
    s.push(i);
  }
  if (s.length === 0) return;
  return `[runner:warn] governed git: this session has ${O(s.length, "a source", "sources")} on ${s.join(", ")}, which the server does not route through Anthropic-managed git; ${O(s.length, "it is", "they are")} cloned with this machine's own git credentials. This runner was started with --use-anthropic-git-proxy, which deletes and replaces the runner account's HOME-level git config at startup and before every session, so a credential for ${O(s.length, "that host", "those hosts")} must live where that flag does not reach (for example /etc/gitconfig, GIT_ASKPASS, or an SSH key with --git-ssh-rewrite). Without one, the clone of a private repository there fails.`;
}
function ul(e, getSessionToken, r, directUpstreams) {
  if (!e) return;
  let git_mount_base_url = e.git_mount_base_url,
    i;
  try {
    i = git_mount_base_url ? new URL(git_mount_base_url) : void 0;
  } catch {
    i = void 0;
  }
  let u = i?.protocol === "http:" && (i.hostname === "localhost" || i.hostname === "127.0.0.1" || i.hostname === "[::1]");
  if (!i || i.protocol !== "https:" && !u || !_o(i.href)) {
    r("[runner:warn] the work item's governed-git configuration carried an unusable git mount URL, so this session continues with the legacy git flow. No operator action is needed for the session to work; please report this warning to Anthropic support so the server-side delivery can be fixed.");
    return;
  }
  let pushBaseUrl = os(e.git_mount_push_base_url, r),
    restMountBaseUrl = os(e.rest_mount_base_url, r, Ed),
    w = e.tool_config?.git_config === !0,
    mountBaseUrl = i.href.replace(/\/+$/, ""),
    S = directUpstreams !== void 0 && !w && i.username === "" && i.password === "" && i.href === i.origin + i.pathname && mountBaseUrl !== i.origin;
  if (directUpstreams !== void 0 && !w && !S) r("[runner:warn] governed git: a direct-upstreams list is set but the git mount URL's shape cannot be kept as a session remote, so every source keeps its upstream URL as origin and no in-session fetches are routed through the git mount");
  let hostSplit_3 = ol(e.tool_config, r),
    gitConfig = w && (!hostSplit_3 || hostSplit_3.governed.length > 0),
    U = !hostSplit_3 || hostSplit_3.governed.includes(ur),
    ghPathShim = e.tool_config?.gh_path_shim === !0 && U;
  return {
    mountBaseUrl: mountBaseUrl,
    toolConfig: {
      gitConfig: gitConfig,
      ghPathShim: ghPathShim,
      ...(hostSplit_3 && {
        hostSplit: hostSplit_3
      })
    },
    getSessionToken: getSessionToken,
    ...(pushBaseUrl !== void 0 && {
      pushBaseUrl: pushBaseUrl
    }),
    ...(S && {
      directUpstreams: directUpstreams
    }),
    ...(restMountBaseUrl !== void 0 && U && {
      restMountBaseUrl: restMountBaseUrl
    })
  };
}
var Ed = "[runner:warn] the work item's governed-git configuration carried an unusable GitHub REST mount URL, so this session's gh keeps this machine's own GitHub access (the clone through the mount is unaffected). No operator action is needed; please report this warning to Anthropic support so the server-side delivery can be fixed.";
function cl(e, n) {
  let r = `${e.host}/${e.owner}`.toLowerCase(),
    s = `${r}/${e.repo.toLowerCase()}`;
  return n.some(item => item === r || item === s);
}
function ll(e, n, r, s) {
  let o = new Set(),
    i = new Set();
  return {
    throughMount: [...o].sort(),
    keptDirect: [...i].sort()
  };
}
function fl(e, n = [], r = [], s, o, i, u) {
  let l = new Set(n.map(item => item.toLowerCase())),
    h = new Set(),
    w = new Map(r.map(([S, E]) => [S.toLowerCase(), E])),
    f = [];
  for (let S of e) {
    if (S.type !== "git_repository" || !S.url) continue;
    let upstreamHost = Td(S.url),
      T = i?.toolConfig.hostSplit,
      U = Sd(T, upstreamHost);
    if (i && T && !U) {
      let M = upstreamHost !== void 0 && T.direct.includes(PA(upstreamHost));
      s?.(M ? `[runner:git] governed git: source ${S.url} is on a direct-class host (server per-host routing); customer-managed handling for this source` : `[runner:git] governed git: source ${S.url} is on a host not named in the ` + "server's per-host routing (unlisted); treating it as direct \u2014 " + "customer-managed handling for this source");
    }
    if (i && U) {
      let M = pl(S.url, i.mountBaseUrl, s);
      if (M) {
        let governedPushUrl = gl(M, i.pushBaseUrl, s),
          fetchViaMount = i.directUpstreams !== void 0 && !cl(M, i.directUpstreams);
        f.push({
          type: "github",
          repo: `${M.owner}/${M.repo}`,
          ref: S.revision,
          url: M.url,
          getAuthToken: i.getSessionToken,
          governedMount: !0,
          upstreamUrl: M.upstreamUrl,
          upstreamHost: upstreamHost,
          ...(governedPushUrl !== void 0 && {
            governedPushUrl: governedPushUrl
          }),
          ...(fetchViaMount && {
            fetchViaMount: fetchViaMount
          })
        });
        continue;
      }
      if (s?.(`[runner:git] governed git: source ${S.url} is not mount-routable; using legacy handling for this source`), T && upstreamHost !== void 0) {
        let ie = PA(upstreamHost);
        if (!h.has(ie)) h.add(ie), u?.(`[runner:warn] governed git: a source on governed host ${ie} could not be routed through the git mount (its URL is not in a form the mount serves, for example a nonstandard port). It takes this machine's own git path instead, so it needs this machine's own credentials for that host although the host is listed as governed. Use the https://host/owner/repo form on the standard port, or keep a credential on this machine that answers only for that URL (for example one scoped to its port, or an SSH key).`);
      }
    }
    let v = hl(S.url, o, s);
    if (v) {
      f.push({
        type: "github",
        repo: `${v.owner}/${v.repo}`,
        ref: S.revision,
        url: v.url,
        getAuthToken: () => {
          let CLAUDE_CODE_SESSION_ACCESS_TOKEN_2 = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
          if (!CLAUDE_CODE_SESSION_ACCESS_TOKEN_2) throw Error("git-proxy credential requested but CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset \u2014 token issue/refresh failed?");
          return CLAUDE_CODE_SESSION_ACCESS_TOKEN_2;
        },
        upstreamHost: upstreamHost
      });
      continue;
    }
    let N = Fl(S.url, w, s),
      url = Ul(N, l, s),
      repo = Jl(url);
    if (!repo) throw new x(`mapSources: cannot extract repo slug from source URL '${S.url}' \u2014 not scp-form (user@host:path) and not a parseable URL`, "mapSources: cannot extract repo slug from source URL");
    f.push({
      type: Gl(url) ? "github-ssh" : "github",
      repo: repo,
      ref: S.revision,
      url: url,
      upstreamHost: upstreamHost
    });
  }
  return f;
}
function hl(e, n, r) {
  if (!n) return;
  let s = e.match(/^https:\/\/[^/@]+\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (!s) {
    if (e.startsWith("https://")) r?.(`[runner:git] git proxy: could not parse owner/repo from ${e}; falling back to customer git auth for this source`);
    return;
  }
  let owner = s[1],
    repo_2 = s[2];
  if (!_mn.test(owner) || !_mn.test(repo_2)) {
    r?.(`[runner:git] git proxy: rejecting unsafe owner/repo in ${e}; falling back to customer git auth for this source`);
    return;
  }
  let url_2 = `${n.apiBaseUrl.replace(/\/+$/, "")}/v1/session_ingress/session/${n.sessionId}/git_proxy/${owner}/${repo_2}.git`;
  return r?.(`[runner:git] rewrote ${e} -> git_proxy/${owner}/${repo_2}.git (--use-anthropic-git-proxy)`), {
    url: url_2,
    owner: owner,
    repo: repo_2
  };
}
function pl(e, n, r) {
  let s = e.match(/^https:\/\/([^/@:]+)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (!s) {
    if (e.startsWith("https://")) r?.(`[runner:git] governed git: could not parse host/owner/repo from ${e}`);
    return;
  }
  let host = s[1].toLowerCase(),
    owner_2 = s[2],
    repo_3 = s[3];
  if (!/^(?!\.{1,2}$)[a-z0-9.-]+$/.test(host) || host.length > 255) {
    r?.(`[runner:git] governed git: rejecting unsafe host in ${e}; falling back to legacy handling for this source`);
    return;
  }
  if (!_mn.test(owner_2) || !_mn.test(repo_3)) {
    r?.(`[runner:git] governed git: rejecting unsafe owner/repo in ${e}; falling back to legacy handling for this source`);
    return;
  }
  let url_3 = `${n}/${host}/${owner_2}/${repo_3}`;
  return r?.(`[runner:git] rewrote ${e} -> git mount /${host}/${owner_2}/${repo_3} (governed git)`), {
    url: url_3,
    host: host,
    owner: owner_2,
    repo: repo_3,
    upstreamUrl: `https://${host}/${owner_2}/${repo_3}`
  };
}
function gl(e, n, r) {
  if (n === void 0) return;
  if (!ro(e.host)) {
    r?.(`[runner:git] governed git: no push URL for ${e.upstreamUrl} \u2014 the git mount accepts pushes for github.com repositories only; this source keeps its current push path`);
    return;
  }
  return `${n}/${e.host}/${e.owner}/${e.repo}`;
}
function _l(e, n) {
  if (e === void 0 || e.size > (e.has(n) ? 1 : 0)) return "another";
  return e.size > 0 ? "own" : "none";
}
function wl(e, n) {
  return or.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM === !0 && St("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS") === 0 && (e === "none" || e === n);
}
function Sl(e, n, r) {
  if (!or.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM) return !0;
  if (!wl(r, "own")) {
    let s = St("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS");
    return e(`[runner:warn] CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM ignored: drain-grace is ${s}ms (> 0), so a prior session ` + "could have written to the canonical \u2014 sanitizing anyway"), !0;
  }
  return e("[runner:session] CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM \u2014 skipping " + `sanitizeCanonicalGitState for ${n} (trusted one-shot prewarm)`), !1;
}
var El = new Map([["objects", "dir"], ["refs", "dir"], ["packed-refs", "file"], ["HEAD", "file"], ["shallow", "file"]]);
async function kl(e, n, r) {
  let s = ae(e, ".git"),
    o;
  try {
    o = await In(s);
  } catch (error) {
    let h = k(error);
    if (h === "ENOENT" || h === "ENOTDIR") return;
    throw new x(`git-proxy: could not sanitize canonical ${e} before prep \u2014 ${error instanceof Error ? error.message : String(error)}`, "git-proxy: could not sanitize canonical before prep");
  }
  if (!o.isDirectory()) {
    await Je(s, {
      force: !0
    }), n(`[runner:session] sanitized canonical at ${e}: .git was not a directory (gitlink/symlink) \u2014 removed, will fresh-init`);
    return;
  }
  let i = r?.replace(/^(https?:\/\/)[^/@]*@/, "$1");
  if (i && /[\x00-\x1f]/.test(i)) throw Error("git-proxy: sanitize refused \u2014 control char in origin URL");
  let u = `[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	checkStat = minimal
	trustctime = false
` + (i ? `[remote "origin"]
	url = ${i}
	fetch = ${xOn}
` : "");
  try {
    let l = await Ho(s);
    for (let T of l) {
      let U = El.get(T);
      if (U) {
        let v = await In(ae(s, T)).catch(() => {
          return;
        });
        if (v && !v.isSymbolicLink() && (U === "dir" ? v.isDirectory() : v.isFile())) continue;
        n(`[runner:session] sanitize: kept entry .git/${T} has unexpected type \u2014 removing`);
      }
      await Je(ae(s, T), {
        recursive: !0,
        force: !0
      });
    }
    try {
      await Je(ae(s, "refs", "heads")), n("[runner:session] sanitize: .git/refs/heads was not a directory \u2014 removed (a reftable repository leaves a placeholder file there)");
    } catch (error) {
      let U = k(error);
      if (U !== "ENOENT" && U !== "ERR_FS_EISDIR") throw error;
    }
    await Uo(ae(s, "refs"), !0), await Uo(ae(s, "objects"), !1), await Je(ae(s, "objects", "info"), {
      recursive: !0,
      force: !0
    }), await Je(ae(s, "objects", "pack", "multi-pack-index"), {
      recursive: !0,
      force: !0
    });
    let h = ae(s, "HEAD"),
      w = await In(h).catch(() => {
        return;
      }),
      f = w && w.size <= 1024 ? await id(h, "utf-8").catch(() => "") : "",
      S = /^ref: (refs\/[A-Za-z0-9._/-]+)\n?$/.exec(f),
      E = S && S[1].split("/").every(item => item.length > 0 && !item.startsWith(".") && !item.endsWith(".") && !item.endsWith(".lock") && !item.includes(".."));
    if (/^ref: refs\/heads\/\.invalid\n?$/.test(f)) await Je(h, {
      force: !0
    }), await Er(h, `ref: refs/heads/main
`, {
      flag: "wx",
      mode: 420
    });else if (!E && !/^[0-9a-f]{40}([0-9a-f]{24})?\n?$/.test(f)) await Je(h, {
      force: !0
    });
    await Er(ae(s, "config"), u, {
      mode: 420
    }), n(`[runner:session] sanitized canonical .git/ at ${e} (git-proxy cross-session isolation)`);
  } catch (error) {
    throw new x(`git-proxy: could not sanitize canonical ${e} before prep \u2014 ${error instanceof Error ? error.message : String(error)}`, "git-proxy: could not sanitize canonical before prep");
  }
}
async function Uo(e, n) {
  let r;
  try {
    r = await Ho(e);
  } catch (error) {
    let o = k(error);
    if (o === "ENOENT" || o === "ENOTDIR") return;
    throw error;
  }
  for (let s of r) {
    let o = ae(e, s),
      i;
    try {
      i = await In(o);
    } catch (error) {
      let l = k(error);
      if (l === "ENOENT" || l === "ENOTDIR") continue;
      throw error;
    }
    if (i.isSymbolicLink()) {
      await Je(o, {
        force: !0
      });
      continue;
    }
    if (n && i.isDirectory()) await Uo(o, !0);
  }
}
async function vl(e, n, r) {
  let s = await od(e, "wx", r);
  try {
    await s.writeFile(n), await s.chmod(r);
  } finally {
    await s.close();
  }
}
async function ss(e, n, mode_3) {
  await Je(e, {
    recursive: !0,
    force: !0
  }), await Vt(fn(e), {
    recursive: !0
  }), await Er(e, n, {
    mode: mode_3
  }), await Cc(e, mode_3);
}
async function Rl(e, n, r) {
  if (e.length === 0) return;
  let s = fn(e[0].path),
    o = fn(s);
  try {
    let i = await In(o).catch(() => {
      return;
    });
    if (!i) await Vt(o, {
      recursive: !0
    });else if (!i.isDirectory() || i.isSymbolicLink()) await Je(o, {
      recursive: !0,
      force: !0
    }), await Vt(o, {
      recursive: !0
    });
    if (n) for (let u of n) await ss(u.path, u.content, u.mode);
    await Je(s, {
      recursive: !0,
      force: !0
    }), await Vt(s, {
      recursive: !0
    });
    for (let u of e) await ss(u.path, u.content, 493);
    r(`[runner:session] clean-slated ${s} and rewrote ${e.length} hook stubs (cross-session isolation)`);
  } catch (error) {
    throw new x(`--configure-git: could not restore hook stubs under ${s} \u2014 ${error instanceof Error ? error.message : String(error)}`, "--configure-git: could not restore git hook stubs");
  }
}
async function Tl(e, n) {
  try {
    await Je(fn(e.xdgConfigPath), {
      recursive: !0,
      force: !0
    });
    let r = e.homeGitconfigPath && ho(fn(e.homeGitconfigPath));
    if (r && r !== fn(e.xdgConfigPath)) await Je(r, {
      recursive: !0,
      force: !0
    });
    if (e.homeGitconfigPath && e.homeGitconfigPath !== e.globalConfigPath) await Je(e.homeGitconfigPath, {
      recursive: !0,
      force: !0
    });
    if (await ss(e.globalConfigPath, e.globalConfigSnapshot, 420), e.credHelper) {
      let s = fn(e.credHelper.path),
        o = await In(s).catch(() => {
          return;
        });
      if (!o) await Vt(s, {
        recursive: !0
      });else if (!o.isDirectory() || o.isSymbolicLink()) await Je(s, {
        recursive: !0,
        force: !0
      }), await Vt(s, {
        recursive: !0
      });
      if (e.signingArtifacts) for (let i of e.signingArtifacts) await ss(i.path, i.content, i.mode);
      await ss(e.credHelper.path, e.credHelper.content, 448);
    }
    n("[runner:session] restored ~/.gitconfig and git-proxy-cred to startup snapshot (git-proxy cross-session isolation)");
  } catch (error) {
    throw new x(`git-proxy: could not sanitize runner HOME-level git state before prep \u2014 ${error instanceof Error ? error.message : String(error)}`, "git-proxy: could not sanitize runner HOME-level git state before prep");
  }
}
async function bl(e, n, r) {
  if (r) await Je(ae(e, ".git", "config.lock"), {
    force: !0
  }).catch(() => {});
  await new Promise(s => {
    let o = xn("git", ["-C", e, "config", "--local", "--unset-all", "credential.helper", "^$"], {
        cwd: void 0,
        stdio: "ignore",
        windowsHide: !0,
        ...vd("helper")
      }),
      i = setTimeout(l => l.kill("SIGKILL"), ir, o),
      u = l => {
        if (clearTimeout(i), l !== 0 && l !== 5 && l !== null) n(`[runner:session] stale git-proxy reset sweep in ${e} exited ${l}`);
        s();
      };
    o.on("close", u), o.on("error", () => u(null));
  });
}
async function Al(e, n, r, s) {
  let o = new URL(n).origin,
    i = [[["credential.helper", ""], ["--replace-all"]], [[`credential.${o}.helper`, ""], ["--replace-all"]], [[`credential.${o}.helper`, Cto("CLAUDE_CODE_SESSION_ACCESS_TOKEN")], ["--add"]]];
  for (let [[u, l], h] of i) await kr(["-C", e, "config", "--local", ...h, u, l], w => new x(`git proxy: 'git config ${u}' in ${e} exited ${w.code}: ${w.stderr}`, "git proxy: repo-local git config write failed"), s);
  r(`[runner:session] git proxy: wired repo-local credential helper for ${o} in ${e}`);
}
async function kr(e, n, r, s = xn, o = ir, i) {
  await new Promise((u, l) => {
    let h = !1,
      w = "",
      f = U => {
        if (h) return;
        if (h = !0, clearTimeout(T), r?.removeEventListener("abort", E), U) l(U);else u();
      },
      S = s("git", e, {
        cwd: void 0,
        stdio: ["ignore", i ? "pipe" : "ignore", "pipe"],
        windowsHide: !0,
        ...vd("helper")
      });
    S.stdout?.on("data", U => i?.(String(U))), S.stderr?.on("data", U => w += String(U));
    let E = () => {
        S.kill("SIGKILL"), f(n({
          code: null,
          stderr: w.trim()
        }));
      },
      T = setTimeout((U, v) => {
        U.kill("SIGKILL"), v(n({
          code: null,
          stderr: w.trim()
        }));
      }, o, S, f);
    if (r?.aborted) E();else r?.addEventListener("abort", E, {
      once: !0
    });
    S.on("close", code => f(code === 0 ? void 0 : n({
      code: code,
      stderr: w.trim()
    }))), S.on("error", U => f(U));
  });
}
async function Ol(e, n, r, s, o, i) {
  let u = "",
    l = {
      code: null
    },
    h = await kr(["-C", e, ...I1, "config", "--local", "--get-all", "remote.origin.url"], f => (l.code = f.code, Error("git config --get-all remote.origin.url failed")), s, o, i, f => {
      u += f;
    }).then(() => !0, () => !1);
  if (!h && l.code !== 1) return "read_failed";
  let w = u.split(`
`).filter(item => item.length > 0);
  if (h && w.length === 1 && w[0] === n) return "ok";
  return r(`[runner:session] governed git: remote.origin.url in ${e} is not the upstream URL after prep; the runner changed nothing here; the next preparation of this repository rewrites origin or fails`), "not_upstream";
}
async function Cl(e, n, r, s, o, i) {
  let u = `credential.${s}.helper`,
    l = r.endsWith(".git") ? r.slice(0, -4) : `${r}.git`,
    h = [[u, "", "--replace-all"], [u, MOn("CLAUDE_CODE_SESSION_ACCESS_TOKEN"), "--add"], [`url.${n}.insteadOf`, r, "--replace-all"], [`url.${n}.insteadOf`, l, "--add"]];
  for (let [w, f, S] of h) await kr(["-C", e, ...I1, "config", "--local", S, w, f], E => new x(`governed git mount read: 'git config ${w}' in ${e} exited ${E.code}: ${E.stderr}`, "governed git mount read: repo-local git config write failed"), i);
  o(`[runner:session] governed git: fetches of ${r} rewritten to the mount (${n}) with a session-token credential helper scoped to ${s} in ${e}`);
}
async function $l(e, n, r, s, o = cd) {
  let i = Date.now() + o;
  for (let u of [`url.${n}.insteadOf`, `credential.${r}.helper`]) if (!(await kr(["-C", e, ...I1, "config", "--local", "--unset-all", u], h => h.code === Yo ? new vr() : new x(`governed git mount read: 'git config --unset-all ${u}' in ${e} exited ${h.code}: ${h.stderr}`, "governed git mount read: repo-local git config cleanup failed"), void 0, void 0, Math.max(1, i - Date.now())).then(() => !0, h => {
    if (h instanceof vr) return !0;
    return s(`[runner:session] governed git: ${d(h)} (best-effort cleanup)`), !1;
  }))) return;
}
function os(e, n, r) {
  let s = e?.trim() ?? "";
  if (s === "") return;
  let o;
  try {
    o = new URL(s);
  } catch {
    o = void 0;
  }
  let i = o?.protocol === "http:" && (o.hostname === "localhost" || o.hostname === "127.0.0.1" || o.hostname === "[::1]"),
    u = o !== void 0 && (o.username !== "" || o.password !== "" || o.href !== o.origin + o.pathname || !_o(o.href));
  if (!o || o.protocol !== "https:" && !i || u) {
    n(r ?? "[runner:warn] the work item's governed-git configuration carried an unusable git mount push URL, so this session's git pushes keep going to the upstream remote instead of the git mount (the clone through the mount is unaffected). No operator action is needed; please report this warning to Anthropic support so the server-side delivery can be fixed.");
    return;
  }
  return o.href.replace(/\/+$/, "");
}
async function Pl(e, n, r, s, o, i) {
  await kr(["-C", e, ...I1, "config", "--local", "--unset-all", "remote.origin.pushurl"], h => h.code === Yo ? new vr() : new x(`governed git push URL: 'git config --unset-all remote.origin.pushurl' in ${e} exited ${h.code}: ${h.stderr}`, "governed git push URL: repo-local git config unset failed"), i).catch(h => {
    if (!(h instanceof vr)) throw h;
  });
  let u = s.endsWith(".git") ? s.slice(0, -4) : `${s}.git`,
    l = [[[Fo(n), s], ["--replace-all"]], [[Fo(n), u], ["--add"]], [[`credential.${r}.helper`, ""], ["--replace-all"]], [[`credential.${r}.helper`, MOn("CLAUDE_CODE_SESSION_ACCESS_TOKEN")], ["--add"]]];
  for (let [[h, w], f] of l) await kr(["-C", e, ...I1, "config", "--local", ...f, h, w], S => new x(`governed git push URL: 'git config ${h}' in ${e} exited ${S.code}: ${S.stderr}`, "governed git push URL: repo-local git config write failed"), i);
  o(`[runner:session] governed git: pushes to ${s} rewritten to ${n} (url.<pushUrl>.pushInsteadOf) with a session-token credential helper scoped to ${r} in ${e}`);
}
function Fo(e) {
  return `url.${e}.pushInsteadOf`;
}
async function Ml(e, n, r, s) {
  let o = !0;
  for (let i of [Fo(n), `credential.${r}.helper`]) await kr(["-C", e, ...I1, "config", "--local", "--unset-all", i], u => u.code === Yo ? new vr() : new x(`governed git push URL: 'git config --unset-all ${i}' in ${e} exited ${u.code}: ${u.stderr}`, "governed git push URL: repo-local git config unset failed")).catch(u => {
    if (u instanceof vr) return;
    o = !1, s(`[runner:session] governed git: ${d(u)} (best-effort; retried at the next reconcile / cleanup)`);
  });
  return o;
}
var Yo = 5;
class vr extends Error {}
function Nl(e) {
  let {
      sessionId: sessionId_4,
      wirings: wirings_2,
      onStatus: onStatus_9,
      onDebug: onDebug_6,
      signal: signal_5
    } = e,
    u,
    l = new Set(),
    h = !1,
    w = !1,
    f = Promise.resolve();
  async function S(N) {
    let B = new URL(N).origin;
    l.add(N), h = !1;
    for (let D of wirings_2) await Pl(D.canonicalPath, `${N}/${D.mountPath}`, B, D.upstreamUrl, onDebug_6, signal_5);
    u = N;
  }
  async function E(N) {
    let B = new URL(N).origin,
      D = !0;
    for (let M of wirings_2) if (!(await Ml(M.canonicalPath, `${N}/${M.mountPath}`, B, onDebug_6))) D = !1;
    if (D) l.delete(N);
    return D;
  }
  async function T() {
    for (let N of [...l]) await E(N);
    return u = void 0, l.size === 0;
  }
  async function U() {
    let N = u,
      B = !1;
    for (let D of [...l]) if (D !== N) await E(D), B = !0;
    if (B && N !== void 0) await S(N);
  }
  function v(N, B) {
    return f = f.then(B).catch(D => {
      onStatus_9(`[runner:warn] governed git: ${N} the push URL for ${sessionId_4} failed: ${d(D)} \u2014 ` + "session pushes may be refused until the next /remote read reconciles again");
    }), f;
  }
  return {
    apply: () => {
      let N = f.then(() => S(e.pushBaseUrl));
      return f = N.catch(() => {}), N;
    },
    reconcile: (N, B) => v("reconciling", async () => {
      if (w) return;
      if (B !== e.getCurrentToken()) {
        onDebug_6(`[runner:session] governed git: ignoring a /remote read for ${sessionId_4} made with a superseded session token (push URL reconcile follows the current token only)`);
        return;
      }
      if (N !== void 0 && N.git_mount_push_base_url === void 0) {
        onDebug_6(`[runner:session] governed git: a /remote read for ${sessionId_4} carried no git_mount_push_base_url key (server predates the field); push URL wiring left as is`);
        return;
      }
      let D = os(N?.git_mount_push_base_url, onDebug_6),
        M = [...l].some(item => item !== u);
      if (D === u && !M) return;
      if (D !== void 0 && D === u) {
        await U();
        return;
      }
      if (D === void 0) {
        let ce = u !== void 0 || h;
        if (!(await T())) {
          h = ce, onStatus_9(`[runner:warn] governed git: could not fully remove the push URL wiring for ${sessionId_4} ` + "(a git config unset failed \u2014 see the debug log); it is retried at the next /remote read and at session end");
          return;
        }
        if (h = !1, ce) onStatus_9(`[runner:session] governed git: push URL WITHDRAWN for ${sessionId_4} \u2014 the session token no longer carries ` + "the git-mount push capability; session git pushes now go to the remote's fetch URL"), p("self_hosted_governed_push_url", "capability_withdrawn");
        return;
      }
      let ie = u === void 0;
      await T();
      try {
        await S(D);
      } catch (error) {
        throw m("self_hosted_governed_push_url", "config_write_failed"), error;
      }
      if (onStatus_9(ie ? `[runner:session] governed git: push URL RESTORED for ${sessionId_4} \u2014 session git pushes go through the git mount again` : `[runner:session] governed git: push URL base changed for ${sessionId_4}; repo-local push wiring rewritten`), ie) p("self_hosted_governed_push_url", "capability_restored");
    }),
    cleanup: () => v("removing", async () => {
      if (w = !0, !(await T())) onStatus_9(`[runner:warn] governed git: could not fully remove the push URL wiring for ${sessionId_4} at session end (a git config unset failed); the residue is token-free and the next session's prep clears it`);
    }),
    get active() {
      return u !== void 0;
    }
  };
}
async function Ll(e) {
  let n = e.isTransient ?? shouldRetry,
    r = e.nowMs ?? Date.now,
    s = r() + e.deadlineMs,
    error_4 = void 0;
  for (let i = 1;; i++) {
    if (e.signal?.aborted) return {
      outcome: "failed",
      reason: "aborted",
      error: error_4
    };
    try {
      return {
        outcome: "presented",
        config: await e.represent()
      };
    } catch (error_5) {
      if (error_4 = error_5, e.signal?.aborted) return {
        outcome: "failed",
        reason: "aborted",
        error: error_5
      };
      let l = n(error_5);
      if (e.onDebug(`[runner:session] governed git: re-presenting the refreshed session token on /remote failed (attempt ${i}, ${l ? "transient" : "permanent"}): ${d(error_5)}`), !l) return {
        outcome: "failed",
        reason: "permanent",
        error: error_5
      };
      let h = e.retryDelayMs * i;
      if (r() + h >= s) return {
        outcome: "failed",
        reason: "budget",
        error: error_5
      };
      await Y(h, e.signal, {
        unref: !0
      }).catch(() => {});
    }
  }
}
var Dl = 15000,
  Il = 4,
  xl = 30000;
function Ul(e, n, r) {
  if (n.size === 0) return e;
  let s = e.match(/^https:\/\/([^/]+)\/(.+?)(?:\.git)?$/);
  if (!s || !n.has(s[1].toLowerCase())) return e;
  let [o] = s[1].split(":"),
    i = `git@${o}:${s[2]}`;
  return r?.(`[runner:git] rewrote ${e} -> ${i} (--git-ssh-rewrite)`), i;
}
function Fl(e, n, r) {
  if (n.size === 0) return e;
  let s = e.match(/^https:\/\/([^/]+)\/(.+)$/);
  if (!s) return e;
  let o = n.get(s[1].toLowerCase());
  if (o === void 0) return e;
  let i = `https://${o}/${s[2]}`;
  return r?.(`[runner:git] rewrote ${e} -> ${i} (--git-host-rewrite)`), i;
}
function Gl(e) {
  if (e.startsWith("ssh://")) return !0;
  return !e.includes("://") && /^[^@]+@[^:]+:.+$/.test(e);
}
function Hl(e) {
  let n = [];
  for (let r of e) {
    if (r.type !== "git_repository" || !r.git_info?.repo) continue;
    n.push({
      repo: r.git_info.repo,
      branches: r.git_info.branches ?? []
    });
  }
  return n;
}
function Bl(e) {
  let n = new Map();
  for (let r of e) {
    let s = Go(r.repo),
      o = n.get(s) ?? [];
    for (let i of r.branches ?? []) if (i && hk(i) && !o.includes(i)) o.push(i);
    if (o.length > 0) n.set(s, o);
  }
  return n;
}
function Go(e) {
  return e.toLowerCase();
}
function td(childCwd_2, n, r) {
  if (r) {
    let childCwd = kd(childCwd_2, r);
    if (childCwd !== null) return {
      childCwd: childCwd,
      addDirs: [...n, childCwd_2]
    };
  }
  if (n.length === 1) return {
    childCwd: n[0],
    addDirs: [...n, childCwd_2]
  };
  if (n.length > 1) return {
    childCwd: n.every(item => item.startsWith(childCwd_2 + path_6)) ? childCwd_2 : n[0],
    addDirs: [...n]
  };
  return {
    childCwd: childCwd_2,
    addDirs: []
  };
}
class Tt extends Error {
  entry;
  detail;
  constructor(e, n) {
    super(`[runner:session] repo-committed ${e.kind} entry '${e.raw}' in ${e.sourceFile} ${n} \u2014 refusing to spawn. Host-specific write-scope entries belong in the operator's user-level settings.json (userSettings source, not trust-gated \u2014 see --trust-workspace docs).`);
    this.entry = e;
    this.detail = n;
  }
}
async function Wl(e, n, r) {
  let s = [],
    o = (path_3, N, B) => D => {
      let M = k(D);
      if (M === "ENOENT" || M === "ENOTDIR") return;
      throw new Tt({
        ...N,
        path: path_3,
        kind: "scan-fs-error"
      }, `could not be probed (${B} failed: ${D instanceof Error ? D.message : String(D)}) \u2014 refusing rather than fold a non-ENOENT error into "does not exist" (fail-closed)`);
    },
    i = v => Ry(v) || r_(v),
    u = 4096,
    l,
    h = () => l ??= Xh(Hr(e).catch(() => null), `realpath ${e}`),
    w = new Map(),
    f = async v => {
      let N = await h(),
        B = w.get(v);
      if (B === void 0) {
        let D = new AbortController();
        B = {
          verdict: l1r(v, N, {
            signal: D.signal
          }),
          walk: D
        }, w.set(v, B);
      }
      try {
        return await ml(B.verdict, v3t, `network-path screen of ${v}`);
      } catch (error) {
        throw B.walk.abort(), error;
      }
    },
    S = async (path_4, N) => {
      if (jn(path_4) || i(path_4)) return;
      if (Buffer.byteLength(path_4) > 4096) throw new Tt({
        ...N,
        path: path_4,
        kind: "scan-fs-error"
      }, `could not be probed (its resolved path is ${Buffer.byteLength(path_4)} bytes; this scan examines paths up to ${"4096"} bytes) \u2014 refusing rather than examine it (fail-closed)`);
      let B = await f(path_4).catch(ie => {
        throw new Tt({
          ...N,
          path: path_4,
          kind: "scan-fs-error"
        }, `could not be probed (${d(ie)} \u2014 a hung mount on that path, or a symlink chain in the checkout too long to examine in time) \u2014 refusing rather than resolve through an unexamined path (fail-closed)`);
      });
      if (B.verdict === "unverified") throw new Tt({
        ...N,
        path: path_4,
        kind: "scan-fs-error"
      }, `could not be probed (its resolved path '${path_4}' could not be inspected without following links \u2014 a permission, I/O or resource error on a directory or link on it, a link whose target could not be read, or too many symlinks on the path; check that path on the runner host) \u2014 refusing rather than resolve through it (fail-closed)`);
      if (B.verdict !== "clean") throw new Tt({
        ...N,
        path: path_4
      }, `resolves to '${path_4}', where a symlink on the path leads to the network path '${B.reaches}' \u2014 resolving it would reach the network before any trust decision; refused without resolving (fail-closed)`);
      let D = await Xh(Hr(path_4).catch(o(path_4, N, "realpath")), `realpath ${path_4}`);
      if (D !== void 0) return D;
      let M = path_4;
      for (let ie = 0; ie < 64; ie++) {
        let ce = await Xh(In(M).catch(o(path_4, N, "lstat")), `lstat ${M}`);
        if (ce?.isSymbolicLink()) throw new Tt({
          ...N,
          path: path_4
        }, `traverses a symlink at ${M} whose target path cannot be realpath'd \u2014 a repo-shipped link (dangling, or pointing outside the workspace with a nonexistent leaf) can be retargeted at use time`);
        if (ce !== void 0) return;
        let ye = fn(M);
        if (ye === M) return;
        M = ye;
      }
      throw new Tt({
        ...N,
        path: path_4
      }, "has too many nonexistent path components (ancestor-walk hop bound exhausted) \u2014 refusing rather than skip the symlink probe");
    },
    E = async (path_5, N) => {
      if (!ud(path_5)) return;
      let B = path_5.split(path_6).filter(item => item.length > 0);
      if (!B.includes("..")) return;
      if (i(path_5)) throw new Tt({
        ...N,
        path: path_5
      }, "names an automount/NT-namespace-transiting spelling with '..' \u2014 the kernel-divergence probe cannot run without performing the automount lookup itself; refusing (fail-closed)");
      let D = path_5.startsWith(path_6) ? path_6 : "";
      for (let M of B) {
        if (M === ".") continue;
        if (M === "..") {
          D = fn(D);
          continue;
        }
        D = D === path_6 ? path_6 + M : ae(D, M);
        let ie = await Xh(In(D).catch(o(path_5, N, "lstat")), `lstat ${D}`);
        if (ie?.isSymbolicLink()) throw new Tt({
          ...N,
          path: path_5
        }, `contains a '..' after symlink ${D} \u2014 the kernel resolves the symlink before the '..' at bind time, diverging from the lexically-collapsed form the confine check saw`);
        if (ie === void 0) return;
      }
    },
    T = v => {
      let N = $g(v) || path_6;
      return it(N, e);
    },
    U = v => $g(v) || path_6;
  for (let v of new Set([e, ...n])) {
    let N = ae(v, ".claude"),
      B = await Xh(In(N).catch(D => {
        if (G(D)) return;
        throw D;
      }), `lstat ${N}`);
    if (B === void 0) continue;
    if (B.isSymbolicLink()) throw new Tt({
      path: N,
      sourceFile: N,
      raw: ".claude",
      kind: "permissions.additionalDirectories"
    }, "is a symlink \u2014 refusing to follow (the settings read below would escape the workspace)");
    for (let raw_2 of ["settings.json", "settings.local.json"]) {
      let M = ae(N, raw_2),
        ie = await Xh(In(M).catch(Z => {
          if (G(Z)) return;
          throw new Tt({
            path: M,
            sourceFile: M,
            raw: raw_2,
            kind: "scan-fs-error"
          }, `could not be lstat'd (${Z instanceof Error ? Z.message : String(Z)}) \u2014 refusing rather than skip the scan`);
        }), `lstat ${M}`);
      if (ie === void 0) continue;
      if (ie.isSymbolicLink()) throw new Tt({
        path: M,
        sourceFile: M,
        raw: raw_2,
        kind: "permissions.additionalDirectories"
      }, "is a symlink \u2014 refusing to follow (the settings read below would escape the workspace; same posture as the .claude-dir lstat guard)");
      let ce;
      try {
        ce = await Xh(_y(M, bf).then(Z => Z.content), `readFile ${M}`);
      } catch (error) {
        if (G(error)) continue;
        throw new Tt({
          path: M,
          sourceFile: M,
          raw: raw_2,
          kind: "scan-fs-error"
        }, `could not be read (${error instanceof Error ? error.message : String(error)}) \u2014 refusing rather than skip the scan`);
      }
      let ge = pt(ce, !1);
      if (r && (v === e || e.startsWith(v + path_6)) && ge?.disableAllHooks === !0) r.repoDisablesAllHooks = !0;
      if (ge?.env !== void 0 && ge?.env !== null && typeof ge.env === "object" && Object.keys(ge.env).length > 0) throw new Tt({
        path: M,
        sourceFile: M,
        raw: `env: {${Object.keys(ge.env).slice(0, 3).join(", ")}${Object.keys(ge.env).length > 3 ? ", \u2026" : ""}}`,
        kind: "operator-posture override"
      }, "sets env vars that reach every child subprocess (BASH_ENV/LD_PRELOAD/NODE_OPTIONS/GIT_* are unsandboxed-exec inlets). Runner-level env belongs in the operator wrapper script or runner env, not repo settings");
      for (let [Z, Ae, me] of [["sandbox.enabled", ge?.sandbox?.enabled, !1], ["disableAllHooks", ge?.disableAllHooks, !1], ["sandbox.allowUnsandboxedCommands", ge?.sandbox?.allowUnsandboxedCommands, !0], ["sandbox.failIfUnavailable", ge?.sandbox?.failIfUnavailable, !1]]) if (Ae === me) throw new Tt({
        path: M,
        sourceFile: M,
        raw: `${Z}: ${String(me)}`,
        kind: "operator-posture override"
      }, `negates the operator's ${Z} posture (projectSettings overrides userSettings in the merged read). Remove it from the repo settings; operator posture belongs in the user-level settings.json`);
      let be = ge?.permissions,
        Se = Array.isArray(be?.allow) ? be.allow : [];
      for (let raw_3 of Se) {
        if (typeof raw_3 !== "string") continue;
        let Ae = zn(raw_3);
        if (![dt, Kt, Ji].includes(Ae.toolName)) continue;
        if (Ae.ruleContent === void 0) {
          s.push({
            path: path_6,
            sourceFile: M,
            raw: raw_3,
            kind: "permissions.allow (bare write-tool rule)"
          });
          continue;
        }
        let {
          root: me
        } = eke(Ae.ruleContent, v);
        {
          let Lt = {
              sourceFile: M,
              raw: raw_3,
              kind: "permissions.allow (sandbox-arm projection)"
            },
            et,
            path_7;
          try {
            et = sAr(Aee(raw_3).ruleContent ?? Ae.ruleContent, v), path_7 = T(et);
          } catch (error) {
            throw new Tt({
              ...Lt,
              path: Ae.ruleContent
            }, `could not be resolved (${error instanceof Error ? error.message : String(error)}) \u2014 refusing rather than trust an entry the confine check cannot project`);
          }
          s.push({
            ...Lt,
            path: path_7
          });
          let path_8 = await S(path_7, Lt);
          if (path_8 !== void 0 && path_8 !== path_7) s.push({
            ...Lt,
            path: path_8
          });
          await E(U(et), Lt);
        }
        if (me === null) continue;
        let De = {
          sourceFile: M,
          raw: raw_3,
          kind: "permissions.allow"
        };
        s.push({
          ...De,
          path: me
        });
        let path_9 = await S(me, De);
        if (path_9 !== void 0 && path_9 !== me) s.push({
          ...De,
          path: path_9
        });
      }
      for (let [Z, Ae] of [["allowWrite", ge?.sandbox?.filesystem?.allowWrite], ["allowRead", ge?.sandbox?.filesystem?.allowRead]]) {
        if (!Array.isArray(Ae)) continue;
        for (let me of Ae) {
          if (typeof me !== "string") continue;
          let De = {
              sourceFile: M,
              raw: me,
              kind: `sandbox.filesystem.${Z}`
            },
            path_10,
            Lt;
          try {
            Lt = iAr(me, v), path_10 = T(Lt);
          } catch (error) {
            throw new Tt({
              ...De,
              path: me
            }, `could not be resolved (${error instanceof Error ? error.message : String(error)}) \u2014 refusing rather than trust an entry the confine check cannot project`);
          }
          s.push({
            ...De,
            path: path_10
          });
          let path_11 = await S(path_10, De);
          if (path_11 !== void 0 && path_11 !== path_10) s.push({
            ...De,
            path: path_11
          });
          await E(U(Lt), De);
        }
      }
      let de = be?.additionalDirectories;
      if (!Array.isArray(de)) continue;
      for (let raw_4 of de) {
        if (typeof raw_4 !== "string") continue;
        let Ae = {
            sourceFile: M,
            raw: raw_4,
            kind: "permissions.additionalDirectories"
          },
          path_12;
        try {
          path_12 = Gr(it(raw_4, e));
        } catch (error) {
          throw new Tt({
            ...Ae,
            path: String(raw_4)
          }, `could not be resolved (${error instanceof Error ? error.message : String(error)}) \u2014 refusing rather than trust an entry the confine check cannot project`);
        }
        s.push({
          ...Ae,
          path: path_12
        });
        let path_13 = await S(path_12, Ae);
        if (path_13 !== void 0 && path_13 !== path_12) s.push({
          ...Ae,
          path: path_13
        });
        await E(U(raw_4), Ae);
      }
    }
  }
  return s;
}
function qn(e, n, r, s) {
  let o = e.toLowerCase(),
    i = u => u.endsWith(path_6) ? u : u + path_6;
  for (let u of [r, ...s]) {
    let l = u.toLowerCase();
    if (o === l || o.startsWith(i(l)) || l.startsWith(i(o))) throw new x(`[runner:session] per-session ${n} ${e} overlaps the child's auto-allowed write scope (${u}) \u2014 refusing to spawn`, "per-session dir overlaps the child auto-allowed write scope \u2014 refusing to spawn");
  }
}
function kd(e, n) {
  let r = Gr(e),
    s = ud(n) ? Gr(n) : Gr(r, n);
  if (s === r) return s;
  if (s.startsWith(r + path_6)) return s;
  return null;
}
async function Kl(e, n) {
  let r = Gr(e),
    s = Gr(n);
  if (s !== r && !s.startsWith(r + path_6)) return !1;
  let o = s.slice(r.length).split(path_6).filter(Boolean);
  for (let i of o) {
    r = ae(r, i);
    try {
      let u = await In(r);
      if (u.isSymbolicLink() || !u.isDirectory()) return !1;
    } catch (error) {
      if (!G(error)) return !1;
      try {
        await Vt(r);
      } catch {
        return !1;
      }
    }
  }
  return !0;
}
async function Yl(e, n) {
  try {
    let r = await Hr(e),
      s = await Hr(n);
    return s === r || s.startsWith(r + path_6);
  } catch {
    return !1;
  }
}
async function jl(e, n, r, s, o, i, u = xn, l) {
  if (s?.aborted) return;
  let h = {
      GIT_CONFIG_GLOBAL: "/dev/null",
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0
    },
    w = {
      ...process.env,
      ...l?.envOverrides,
      ...gAe,
      ...(o === !0 ? h : void 0)
    },
    f = lRt(l?.commandScopeEntries ?? []),
    S = (T, U, v, N = [], env_2 = w) => new Promise(D => {
      let M = !1,
        ie = Se => {
          if (M) return;
          M = !0, clearTimeout(be), s?.removeEventListener("abort", ge), D(Se);
        },
        ce = u("git", [...I1, ...N, ...f, "-C", e, ...T], {
          cwd: void 0,
          stdio: ["ignore", "ignore", "pipe"],
          windowsHide: !0,
          ...vd("helper"),
          env: env_2
        }),
        ye = "";
      ce.stderr?.on("data", Se => ye += String(Se));
      let ge = () => {
          ce.kill("SIGKILL"), ie("unsettled");
        },
        be = setTimeout((Se, de, Z, Ae, me, De) => {
          Se(`[runner:session] ${de} in ${Z} timed out after ${me}ms \u2014 continuing on current HEAD`), Ae.kill("SIGKILL"), De("unsettled");
        }, v, r, U, e, ce, v, ie);
      if (s?.aborted) ge();else s?.addEventListener("abort", ge, {
        once: !0
      });
      ce.on("close", Se => {
        if (Se === 0) r(`[runner:session] created outcome branch '${n}' in ${e} (${U})`), ie("ok");else r(`[runner:session] ${U} in ${e} exited ${Se}: ${ye.trim()}`), ie("failed");
      }), ce.on("error", Se => {
        r(`[runner:session] ${U} spawn failed: ${Se} \u2014 continuing on current HEAD`), ie("unsettled");
      });
    });
  if (!i) {
    if ((await S(["switch", "-q", "-C", n], `switch -C '${n}'`, ir, ["-c", "alias.switch="])) !== "failed" || s?.aborted) return;
    r(`[runner:session] retrying outcome branch '${n}' as checkout -B`);
  }
  if ((await S(["checkout", "-B", n, ...(i ? [i] : [])], `checkout -B '${n}'`, i ? POn : ir, [], o === "checkout" ? {
    ...w,
    ...h,
    ...wur
  } : w)) === "failed") r(`[runner:session] outcome branch '${n}' not created in ${e} \u2014 continuing on current HEAD`);
}
async function Vl(e, n, r, s, o = xn, i = !1, u, l, h) {
  if (u && l) throw Error("fetchOutcomeBranches: hardenedGitUrl and governedAuth are mutually exclusive");
  let w = 0,
    f = l?.url,
    S = lRt(h?.commandScopeEntries ?? []);
  for (let E of n) {
    if (s?.aborted) return;
    let T = `+refs/heads/${E}:refs/remotes/origin/${E}`;
    if ((await new Promise(v => {
      let N = !1,
        B = ye => {
          if (N) return;
          N = !0, clearTimeout(ce), s?.removeEventListener("abort", ie), v(ye);
        },
        D = o("git", ["-C", e, ...I1, ...(u ? kur(u) : []), ...(f ? [...kur(f), ...vur(f), ...Tto] : []), ...S, "-c", "http.proxyAuthMethod=basic", "fetch", "--no-progress", "--no-tags", "--end-of-options", f ?? "origin", T], {
          stdio: ["ignore", "ignore", "pipe"],
          windowsHide: !0,
          ...vd("helper"),
          env: {
            ...process.env,
            ...h?.envOverrides,
            ...gAe,
            ...(u || f ? {
              GIT_CONFIG_GLOBAL: "/dev/null"
            } : void 0),
            ...(l ? {
              [IOn]: l.getToken(),
              CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0
            } : void 0),
            ...(i && {
              GIT_ALLOW_PROTOCOL: `file:${gAe.GIT_ALLOW_PROTOCOL}`
            }),
            GIT_TERMINAL_PROMPT: "0",
            GIT_SSH_COMMAND: `${a.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`
          }
        }),
        M = "";
      D.stderr?.on("data", ye => M += String(ye));
      let ie = () => {
        if (D.pid) tS(D.pid);
        B(null);
      };
      s?.addEventListener("abort", ie, {
        once: !0
      });
      let ce = setTimeout((ye, ge, be, Se) => {
        if (ye(`[runner:session] fetch outcome branch in ${ge} timed out after ${Ba}ms \u2014 continuing`), be.pid) tS(be.pid);
        Se(null);
      }, Ba, r, e, D, B);
      D.on("close", ye => {
        if (ye !== 0) r(`[runner:session] fetch outcome branch in ${e} exited ${ye}: ${M.trim()} \u2014 continuing`);
        B(ye);
      }), D.on("error", ye => {
        r(`[runner:session] fetch outcome branch spawn failed: ${ye} \u2014 continuing`), B(null);
      });
    })) === 0) w++;
  }
  if (n.length > 0) r(`[runner:session] fetched ${w}/${n.length} outcome branch(es) in ${e}`);
}
function yd(e, n) {
  let r = e.url ?? "",
    token_5 = e.getAuthToken ? e.getAuthToken() : e.token,
    authURL = e.getAuthToken ? r : Rto(r, e.token),
    i;
  try {
    let h = new URL(r);
    if (h.protocol === "https:" || h.protocol === "http:") i = h.origin;
  } catch {}
  let u = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.ALL_PROXY || process.env.all_proxy || "",
    args_3 = [...I1];
  if (i) {
    if (args_3.push("-c", "http.sslVerify=true"), args_3.push("-c", `http.${i}.sslVerify=true`), args_3.push("-c", `http.${r}.sslVerify=true`), u) args_3.push("-c", `http.proxy=${u}`), args_3.push("-c", `http.${i}.proxy=${u}`), args_3.push("-c", `http.${r}.proxy=${u}`);
    if (token_5) if (e.getAuthToken) args_3.push(...vur(r));else args_3.push("-c", "credential.helper="), args_3.push("-c", `credential.${i}.helper=`);
  }
  return args_3.push(...lRt(n?.commandScopeEntries ?? [])), {
    args: args_3,
    authURL: authURL,
    token: token_5,
    env: {
      ...process.env,
      ...n?.envOverrides,
      GIT_TERMINAL_PROMPT: "0",
      ...gAe,
      ...(r.startsWith("file://") && {
        GIT_ALLOW_PROTOCOL: `file:${gAe.GIT_ALLOW_PROTOCOL}`
      }),
      GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
      SELF_HOSTED_RUNNER_HOST_CONFIG_DIR: void 0,
      ...(token_5 && {
        GIT_CONFIG_GLOBAL: "/dev/null",
        [IOn]: e.getAuthToken ? token_5 : void 0
      })
    }
  };
}
async function zl(e, n, r, s, o, i, u) {
  if (i?.aborted) return !1;
  if (!hk(n)) return o(`[runner:session] push-on-release resume: branch '${n}' rejected by isSafeRefName (refspec metachar guard); skipping fetch`), !1;
  let l = yd(r, u);
  return new Promise(h => {
    let w = !1,
      f = v => {
        if (w) return;
        w = !0, clearTimeout(U), i?.removeEventListener("abort", S), h(v);
      },
      S = () => {
        E.kill("SIGKILL"), f(!1);
      },
      E = xn("git", [...l.args, "-C", e, "fetch", "--no-write-fetch-head", l.authURL, `+refs/heads/${n}:refs/remotes/origin/${n}`], {
        stdio: ["ignore", "ignore", "pipe"],
        cwd: void 0,
        env: l.env,
        windowsHide: !0,
        ...vd("helper")
      }),
      T = "";
    E.stderr?.on("data", v => T += String(v)), i?.addEventListener("abort", S, {
      once: !0
    });
    let U = setTimeout((v, N, B, D, M) => {
      v(`[runner:session] push-on-release resume: fetch '${N}' timed out after ${B}ms; starting from source HEAD (best-effort)`), D.kill("SIGKILL"), M(!1);
    }, s, o, n, s, E, f);
    E.on("close", v => {
      if (v === 0) o(`[runner:session] push-on-release resume: fetched prior '${n}' from source remote; starting from preserved work`), f(!0);else o(`[runner:session] push-on-release resume: no prior '${n}' on source remote (${DOn(T, l.authURL, l.token).trim() || `exit ${v}`}); starting from source HEAD`), f(!1);
    }), E.on("error", () => f(!1));
  });
}
async function nd(e, n, r = ir) {
  return new Promise(s => {
    let o = !1,
      i = w => {
        if (o) return;
        o = !0, clearTimeout(h), s(w);
      },
      u = xn("git", [...I1, "-C", e, "rev-parse", "--verify", n], {
        stdio: ["ignore", "pipe", "ignore"],
        cwd: void 0,
        env: {
          ...process.env,
          ...gAe
        },
        windowsHide: !0,
        ...vd("helper")
      }),
      l = "";
    u.stdout?.on("data", w => l += String(w));
    let h = setTimeout((w, f) => {
      w.kill("SIGKILL"), f(void 0);
    }, r, u, i);
    u.on("close", w => i(w === 0 ? l.trim() : void 0)), u.on("error", () => i(void 0));
  });
}
function Xl() {
  return `claude-runner-upstream-${Ks()}`;
}
function Rd(e) {
  return Boolean(e.governedMount && e.upstreamUrl);
}
async function ql(e, n, r, s, o, i) {
  if (!hk(n)) {
    o(`[runner:session] push-on-release '${n}' rejected by isSafeRefName (refspec metachar guard); skipping (best-effort)`);
    return;
  }
  let u = Rd(r),
    l = u && r.governedPushUrl !== void 0 ? Xl() : void 0,
    h = u ? {
      ...r,
      url: r.upstreamUrl,
      getAuthToken: void 0,
      governedMount: !1
    } : r,
    w = yd(h, i);
  return new Promise(f => {
    let S = !1,
      E = () => {
        if (S) return;
        S = !0, clearTimeout(v), f();
      },
      T = xn("git", [...w.args, "-C", e, ...(l !== void 0 ? ["-c", `remote.${l}.url=${w.authURL}`, "-c", `remote.${l}.pushurl=${w.authURL}`, "push", l] : ["push", w.authURL]), `refs/heads/${n}:refs/heads/${n}`], {
        stdio: ["ignore", "ignore", "pipe"],
        cwd: void 0,
        env: w.env,
        windowsHide: !0,
        ...vd("helper")
      }),
      U = "";
    T.stderr?.on("data", N => U += String(N));
    let v = setTimeout((N, B, D, M, ie, ce) => {
      N(`[runner:session] push-on-release '${B}' from ${D} timed out after ${M}ms (best-effort)`), ie.kill("SIGKILL"), ce();
    }, s, o, n, e, s, T, E);
    T.on("close", N => {
      if (N === 0) o(`[runner:session] push-on-release pushed '${n}' to source remote from ${e}`);else o(`[runner:session] push-on-release '${n}' from ${e} exited ${N}: ${DOn(U, w.authURL, w.token).trim()} (best-effort)` + (u ? " \u2014 governed git pushes --push-outcome-on-release branches to the plain " + "upstream with customer-managed credentials (this runner-side push does not use the session's git-mount push URL); if this failed with an auth error, provide a git credential for the push target on the runner host or use the post-session hook" + (l !== void 0 ? "; git skips every url.*.pushInsteadOf rule for this push (global and system ones too), so the credential must work without one" : "") : ""));
      E();
    }), T.on("error", N => {
      o(`[runner:session] push-on-release '${n}' spawn failed: ${N} (best-effort)`), E();
    });
  });
}
async function Zl(e, n, r, s, o, i = xn, u = ir, l) {
  let h = lRt(l?.commandScopeEntries ?? []),
    w = (S, E) => new Promise(T => {
      let U = !1,
        v = M => {
          if (U) return;
          U = !0, clearTimeout(D), T(M);
        },
        N = i("git", [...I1, ...h, "-C", e, ...S], {
          stdio: ["ignore", "ignore", "pipe"],
          cwd: void 0,
          windowsHide: !0,
          ...vd("helper"),
          env: {
            ...process.env,
            ...l?.envOverrides,
            ...gAe,
            ...(o ? {
              GIT_CONFIG_GLOBAL: "/dev/null",
              CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0
            } : void 0),
            ...(o === "checkout" ? wur : void 0)
          }
        }),
        B = "";
      N.stderr?.on("data", M => B += String(M));
      let D = setTimeout((M, ie, ce, ye, ge, be) => {
        ce(`[runner:session] ${ye} in ${ge} timed out after ${be}ms (best-effort cleanup)`), M.kill("SIGKILL"), ie(null);
      }, u, N, v, s, E, e, u);
      N.on("close", M => {
        if (M !== 0) s(`[runner:session] ${E} in ${e} exited ${M}: ${B.trim()} (best-effort cleanup)`);
        v(M);
      }), N.on("error", M => {
        s(`[runner:session] ${E} spawn failed: ${M} (best-effort cleanup)`), v(null);
      });
    });
  if (r) await w(["checkout", "--detach"], "checkout --detach");
  if ((await w(["branch", "-D", "--end-of-options", n], `branch -D '${n}'`)) === 0) s(`[runner:session] deleted outcome branch '${n}' from ${e}`);
}
function Td(e) {
  if (!e.includes("://")) {
    let n = e.match(/^[^@]+@([^:/]+):.+$/);
    return n ? n[1].toLowerCase() : void 0;
  }
  try {
    let n = new URL(e).hostname.toLowerCase();
    return n === "" ? void 0 : n;
  } catch {
    return;
  }
}
function Jl(e) {
  if (!e.includes("://")) {
    let s = e.match(/^[^@]+@[^:]+:(.+)$/);
    if (s) return rd(s[1]);
  }
  let n;
  try {
    n = new URL(e);
  } catch {
    return "";
  }
  let r = n.pathname.replace(/^\/+/, "");
  return rd(r);
}
function rd(e) {
  return e.replace(/\.git$/, "").replace(/\/+$/, "");
}
function bd(e, n) {
  let r = e.includes("localhost") || e.includes("127.0.0.1"),
    s = e.replace(/^https?:\/\//, "").replace(/\/+$/, ""),
    i = `${r ? "http" : "https"}://${s}/v1/code/sessions/${n}`;
  return {
    sdkUrl: i,
    resumeUrl: i
  };
}
var Ql = 500;
async function ef(e) {
  let {
      apiClient: apiClient_3,
      apiBaseUrl: apiBaseUrl_3,
      sessionId: sessionId_5,
      sessionToken: sessionToken_2,
      workerEpoch: workerEpoch_4
    } = e,
    u = 262144,
    l;
  try {
    let E = await Xh(dd(e.debugFile), `stat ${e.debugFile}`),
      T = Math.max(0, E.size - 262144),
      U = await Xh(od(e.debugFile, "r"), `open ${e.debugFile}`);
    try {
      let v = Buffer.alloc(Math.min(E.size, 262144)),
        {
          bytesRead: bytesRead_5
        } = await Xh(U.read(v, 0, v.length, T), `read ${e.debugFile}`);
      l = v.toString("utf-8", 0, bytesRead_5);
    } finally {
      await U.close().catch(() => {});
    }
  } catch {
    return !1;
  }
  let w = l.split(`
`).filter(item => item.length > 0).slice(-Ql);
  if (w.length === 0) return !1;
  let timestamp = new Date().toISOString(),
    S = w.map(E => ({
      timestamp: timestamp,
      fields: {
        message: E
      }
    }));
  return await apiClient_3.forwardDiagnostics(apiBaseUrl_3, sessionId_5, sessionToken_2, workerEpoch_4, S), e.onDebug(`[runner:session] forwarded ${w.length} debug log lines to /worker/diagnostics`), !0;
}
function tf(message) {
  return {
    type: "system",
    uuid: Ks(),
    subtype: "init_milestone",
    message: message
  };
}
function Bs(step_id, step_status, content_5, s) {
  return {
    type: "env_manager_log",
    uuid: Ks(),
    data: {
      level: step_status === "failed" ? "error" : "info",
      category: "init",
      content: content_5,
      timestamp: new Date().toISOString(),
      extra: {
        step_id: step_id,
        step_status: step_status,
        ...s
      }
    }
  };
}
function nf(step_detail, clone_phase, r, s) {
  return Bs("clone", "completed", `${step_detail} ${clone_phase} (${r}ms)`, {
    ...s,
    step_detail: step_detail,
    clone_phase: clone_phase,
    duration_ms: String(r)
  });
}
var rf = /^[0-9a-f]{40,64}$/,
  sf = /^[A-Za-z0-9._][A-Za-z0-9._-]{0,399}$/,
  Gs = 64,
  of = 3000;
function af(e, n) {
  if (e === void 0 || e === null) return;
  let r = typeof e === "object" ? e.repos : void 0;
  if (!Array.isArray(r)) {
    n(`[runner:session] worktree_checkpoint_hint: unusable shape (${Ur(e)}) \u2014 ignoring`);
    return;
  }
  let s = [],
    o = 0;
  for (let i of r.slice(0, Gs)) {
    let name_2 = i && typeof i === "object" ? i.name : void 0,
      baseSha = i && typeof i === "object" ? i.base_sha : void 0;
    if (typeof name_2 === "string" && name_2 !== "." && name_2 !== ".." && sf.test(name_2) && typeof baseSha === "string" && rf.test(baseSha)) s.push({
      name: name_2,
      baseSha: baseSha
    });else o++;
  }
  if (o > 0 || r.length > Gs) n(`[runner:session] worktree_checkpoint_hint: ${s.length} usable entr${s.length === 1 ? "y" : "ies"}, ${o} dropped (no/malformed name or base_sha)${r.length > Gs ? `, ${r.length - Gs} beyond the cap ignored` : ""}`);
  return s.length > 0 ? s : void 0;
}
function df({
  gateOn: gateOn,
  workerEpoch: workerEpoch_5,
  hintedBeforeRegister: hintedBeforeRegister_2,
  refetch: refetch,
  onDebug: onDebug_7,
  capMs = of
}) {
  if (!gateOn || !((workerEpoch_5 ?? 0) > 1) || !hintedBeforeRegister_2) return Promise.resolve(void 0);
  return ml(Promise.resolve().then(refetch), capMs, "post-registration /remote re-read").then(u => af(u?.worktree_checkpoint_hint, onDebug_7), u => {
    onDebug_7(`[runner:session] worktree_checkpoint_hint: ${u instanceof Error ? u.message : String(u)} \u2014 this later worker fetches as usual`);
    return;
  });
}
function uf(e) {
  return {};
}
function sd(e, n) {
  if (n?.gitConfig || n?.ghPathShim) return m("agent_proxy_standalone", "governed_git"), new x(`Session ${e} asks for Anthropic-managed git (governed git) and for routing through your own proxy (agent_proxy_standalone), which this runner cannot combine: governed git needs the hosted session relay, which that mode never starts`, "session pairs governed git with the agent_proxy_standalone relay mode, which this runner cannot combine");
  if (Q4o() !== void 0) return m("agent_proxy_standalone", "runner_egress_listener"), new x(`Session ${e} routes through your own proxy (agent_proxy_standalone, CCR_AGENT_PROXY_STANDALONE_URL), which this runner cannot combine with its --proxy-authorization-command / --proxy-authorization-file egress listener: the session would reach that proxy without the listener. Run the runner without one of the two`, "session uses the agent_proxy_standalone relay mode on a runner with a --proxy-authorization-* egress listener");
  return;
}
var Ad = "this work order has already been used, or another runner already has its session",
  cf = new Map([["already_registered", Ad], ["standby_already_redeemed", Ad], ["superseded", "this work order has been superseded, so this runner is not needed"], ["session_paused", "the session is paused, so no runner is needed for it right now"]]),
  lf = 1024,
  Od = "See https://code.claude.com/docs/en/self-hosted-environments-deploy#troubleshooting",
  js = "A work order is single-use and short-lived, so restarting this runner with the same one cannot help. A restarted runner needs a fresh work order, which comes only with a new spawn request.";
function Cd(e, n) {
  let r = jde(e),
    {
      errorType: errorType,
      errorReason: errorReason,
      serverMessage: serverMessage
    } = Oqo(e),
    u = sc([[errorType, errorReason].filter(Nme).join(", "), serverMessage && Q_t(serverMessage, lf) ? serverMessage : void 0].filter(Boolean).join(": ")),
    l = `The server answered (HTTP ${r}) ${u}`.trimEnd(),
    h;
  if (r === 401 && ts(n)) {
    let date = new Date((decodeExpiry(n) ?? NaN) * 1000),
      f = !Number.isNaN(date.getTime());
    if (!f || date.getTime() > Date.now()) return `RegisterRunner refused because the server did not accept this work order${f ? ", which has not expired by this host's clock" : ", which may have expired"}. Check the work order${f ? ", --api-url, and the clock" : " and --api-url"}. A restart alone cannot help. This does not show the environment secret is bad, so do not rotate it. ${Od} ${l}`;
    h = `this work order expired at ${date.toISOString()}`;
  } else if (r === 409 && errorType === "work_order_not_redeemable") h = cf.get(errorReason) ?? "this work order can no longer be used, so this runner is not needed";else if (r === 409 && errorType === "session_not_active" && ts(n)) h = "the session is no longer active, so this runner is not needed";else return null;
  return `RegisterRunner refused because ${h}. ${js} The environment secret is not at fault, so do not rotate it. ${Od} ${l}`;
}
var $d = {
  POLL: "POLL_WAKE_SOURCE_POLL",
  SSE: "POLL_WAKE_SOURCE_SSE",
  LOCAL: "POLL_WAKE_SOURCE_LOCAL"
};
class jo {
  ac = new AbortController();
  pending = null;
  atCapacity = !1;
  wake(e) {
    if (e === "SSE" && this.atCapacity) return;
    if (this.pending !== "SSE") this.pending = e;
    this.ac.abort();
  }
  async wait(e, n) {
    if (this.pending !== null || n.aborted) return;
    let abortController_2 = new AbortController(),
      s = () => abortController_2.abort(),
      o = this.ac.signal;
    n.addEventListener("abort", s, {
      once: !0
    }), o.addEventListener("abort", s, {
      once: !0
    });
    try {
      await Y(e, abortController_2.signal);
    } finally {
      n.removeEventListener("abort", s), o.removeEventListener("abort", s);
    }
  }
  consume() {
    let e = this.pending ?? "POLL";
    return this.pending = null, this.ac = new AbortController(), e;
  }
}
var Pd = 200,
  ff = 1000,
  hf = 30000,
  pf = 45000;
function gf(e) {
  e.abort();
}
function Md(e) {
  let {
      baseUrl: baseUrl_2,
      runnerId: runnerId,
      tokenState: tokenState,
      onWake: onWake,
      onDebug: onDebug_8,
      signal: signal_6
    } = e,
    url_4 = `${baseUrl_2}/v1/code/runners/self-hosted/runners/${encodeURIComponent(runnerId)}/work-hints/stream`,
    h = !1,
    w = 0,
    f = null,
    close = () => {
      h = !0, f?.abort();
    };
  return signal_6.addEventListener("abort", close, {
    once: !0
  }), (async () => {
    while (!h && !signal_6.aborted) {
      f = new AbortController();
      try {
        let U = await fetch(url_4, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenState.runnerToken}`,
            Accept: "text/event-stream",
            "anthropic-version": "2023-06-01",
            "x-self-hosted-runner-version": o2e
          },
          ...ra({
            url: url_4
          }),
          signal: f.signal
        });
        if (!U.ok || !U.body) throw onDebug_8(`[runner:hints] stream HTTP ${U.status} \u2014 degrading to poll, retrying`), Nz(U, {
          timeoutMs: timeoutMs_4
        }), Error(`HTTP ${U.status}`);
        if (onDebug_8("[runner:hints] stream connected"), await mf(U.body, onWake, f)) w = 0;
        onDebug_8("[runner:hints] stream ended \u2014 reconnecting");
      } catch (error) {
        if (h || signal_6.aborted) break;
        if (w === 0) onDebug_8(`[runner:hints] stream error: ${d(error)}`);
      }
      w++;
      let E = Math.min(hf, ff * 2 ** w),
        T = Math.floor(Math.random() * E);
      await Y(T, signal_6);
    }
    signal_6.removeEventListener("abort", close);
  })(), {
    close: close
  };
}
async function mf(e, n, r) {
  let s = e.getReader(),
    textDecoder = new TextDecoder(),
    i = "",
    u = !1,
    l,
    h = () => {
      if (l !== void 0) clearTimeout(l);
      l = setTimeout(gf, pf, r), l.unref?.();
    };
  h();
  try {
    while (!r.signal.aborted) {
      let {
        done: done,
        value: value
      } = await s.read();
      if (done) return u;
      u = !0, h(), i += textDecoder.decode(value, {
        stream: !0
      });
      let S;
      while ((S = i.indexOf(`
`)) >= 0) {
        let E = i.slice(0, S).replace(/\r$/, "");
        if (i = i.slice(S + 1), E.startsWith("event:") && E.slice(6).trimStart() === "work_available") n();
      }
    }
    return u;
  } finally {
    if (l !== void 0) clearTimeout(l);
    s.releaseLock(), e.cancel().catch(() => {});
  }
}
var Rf = "runner",
  apiUrl = "https://api.anthropic.com",
  capacity_3 = 1,
  Bd = !0,
  Vo = !1,
  Xs = 20000,
  Tf = 5000,
  Af = 30000,
  Of = 1000,
  Cf = 20000,
  zo = 20000;
function Wd() {
  let SELF_HOSTED_RUNNER_RETIRE_AT = process.env.SELF_HOSTED_RUNNER_RETIRE_AT;
  if (SELF_HOSTED_RUNNER_RETIRE_AT === void 0 || SELF_HOSTED_RUNNER_RETIRE_AT === "") return 0;
  let n = Number(SELF_HOSTED_RUNNER_RETIRE_AT);
  if (!Number.isSafeInteger(n) || n < Zo || n > Jo) return 0;
  return n * 1000;
}
var Nd = 64,
  $f = 2000,
  Pf = 64;
function Mf() {
  let SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE = process.env.SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE;
  return SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE === void 0 || SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE.trim() === "" ? void 0 : Kr(SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE);
}
async function Nf(e) {
  let n = await xd(e).catch(s => {
    let o = s instanceof Error && "code" in s && typeof s.code === "string" ? s.code : "";
    if (o === "ENOENT" || o === "ENOTDIR") return;
    throw s;
  });
  if (n === void 0) return {
    present: !1,
    deadlineMs: void 0
  };
  let r;
  try {
    if (!n.isFile()) return {
      present: !0,
      deadlineMs: void 0,
      unreadable: "not a regular file"
    };
    r = await Ef(e, _f.O_RDONLY | Us);
    let s = Buffer.alloc(Nd),
      {
        bytesRead: bytesRead_6
      } = await r.read(s, 0, Nd, 0),
      i = Sr(s.toString("utf8", 0, bytesRead_6)).replace(/\r$/, "");
    if (!/^[0-9]+$/.test(i)) return {
      present: !0,
      deadlineMs: void 0
    };
    let u = Number(i);
    if (!Number.isSafeInteger(u) || u < Zo || u > Jo) return {
      present: !0,
      deadlineMs: void 0
    };
    return {
      present: !0,
      deadlineMs: u * 1000
    };
  } catch (error) {
    return {
      present: !0,
      deadlineMs: void 0,
      unreadable: error instanceof Error && "code" in error && typeof error.code === "string" ? error.code : d(error)
    };
  } finally {
    r?.close().catch(() => {});
  }
}
var Lf = 1000,
  Df = 5000,
  Ld = 2000,
  If = Xs,
  xf = kQn + 2000,
  Uf = 5000,
  Ff = 1e4,
  Kd = "/workspace",
  Yd = 8080,
  hn = 10080,
  Xo = 604800,
  Zo = 1e9,
  Jo = 100000000000,
  Gf = 15000,
  zs = 60000;
function Hf(e, n) {
  if (e === void 0 || e === "") return n;
  let r = tu(e);
  if (Number.isNaN(r) || r < 0 || r > 65535) throw Error(`SELF_HOSTED_RUNNER_HEALTH_PORT must be an integer in [0, 65535] (0 disables), got: ${_(e)}`);
  return r;
}
function Dd(e, n, r) {
  if (ws(n)) return !1;
  if (Fe(n)) return !0;
  if (n === void 0 || n.trim() === "") return r;
  throw Error(`${e} must be one of 1/true/yes/on or 0/false/no/off (got: ${_(n)})`);
}
function Bf(e) {
  if (e === void 0 || e.trim() === "") return "warn";
  let n = e.trim().toLowerCase();
  if (n === "enforce" || n === "warn" || n === "off") return n;
  throw Error(`SELF_HOSTED_RUNNER_CONFINE_REPO_SETTINGS must be one of enforce/warn/off (got: ${_(e)})`);
}
var Wf = {
  all: "when the server asks, sessions apply all of its auto mode lists, including allow, its exceptions to soft block rules",
  "no-allow": "when the server asks, sessions apply its auto mode restrictions and facts, but not allow, its exceptions to soft block rules",
  none: "sessions apply none of the server's auto mode lists, not even its soft_deny restrictions"
};
function Kf(e) {
  if (e === void 0 || e.trim() === "") return wet;
  let n = e.trim().toLowerCase();
  if (n === "all" || n === "no-allow" || n === "none") return n;
  throw Error(`SELF_HOSTED_RUNNER_SERVER_AUTO_MODE_LISTS must be one of all/no-allow/none (got: ${_(e)})`);
}
function Yf(e) {
  if (e === void 0 || e.trim() === "") return "disk";
  let n = e.trim().toLowerCase();
  if (n === "disk" || n === "memory") return n;
  throw Error(`SELF_HOSTED_RUNNER_HOST_CONFIG_SNAPSHOT must be one of disk/memory (got: ${_(e)})`);
}
function jf(e) {
  let n = process.env.SELF_HOSTED_RUNNER_BASE_DIR || void 0,
    r = {
      apiUrl: apiUrl,
      capacity: capacity_3,
      baseDir: Kr(n ?? Kd),
      baseDirSource: n === void 0 ? "default" : "env",
      execPath: process.env.SELF_HOSTED_RUNNER_EXEC_PATH,
      logLevel: "info",
      logFile: process.env.SELF_HOSTED_RUNNER_LOG_FILE || void 0,
      healthPort: Hf(process.env.SELF_HOSTED_RUNNER_HEALTH_PORT, Yd),
      debugTokenDir: process.env.SELF_HOSTED_RUNNER_DEBUG_TOKEN_DIR,
      lockToAccountId: process.env.SELF_HOSTED_RUNNER_LOCK_TO_ACCOUNT,
      clientLabel: process.env.SELF_HOSTED_RUNNER_CLIENT_LABEL?.trim() || void 0,
      gitSshRewriteHosts: [],
      gitHostRewrites: [],
      useAnthropicGitProxy: Fe(process.env.CLAUDE_RUNNER_USE_GIT_PROXY),
      configureGit: Fe(process.env.SELF_HOSTED_RUNNER_CONFIGURE_GIT),
      pushOutcomeOnRelease: Fe(process.env.SELF_HOSTED_RUNNER_PUSH_OUTCOME_ON_RELEASE),
      trustWorkspace: Dd("SELF_HOSTED_RUNNER_TRUST_WORKSPACE", process.env.SELF_HOSTED_RUNNER_TRUST_WORKSPACE, Bd),
      removeSessionState: Dd("SELF_HOSTED_RUNNER_REMOVE_SESSION_STATE", process.env.SELF_HOSTED_RUNNER_REMOVE_SESSION_STATE, Vo),
      confineRepoSettings: Bf(process.env.SELF_HOSTED_RUNNER_CONFINE_REPO_SETTINGS),
      serverAutoModeLists: Kf(process.env.SELF_HOSTED_RUNNER_SERVER_AUTO_MODE_LISTS),
      hostConfigSnapshot: Yf(process.env.SELF_HOSTED_RUNNER_HOST_CONFIG_SNAPSHOT),
      envSetByFlag: new Set()
    };
  if (process.env.SELF_HOSTED_RUNNER_HOOKS_DIR) process.env.SELF_HOSTED_RUNNER_HOOKS_DIR = Kr(process.env.SELF_HOSTED_RUNNER_HOOKS_DIR);
  for (let o = 0; o < e.length; o++) {
    let i = e[o],
      u = e[o + 1];
    switch (i) {
      case "--api-url":
        if (u) r.apiUrl = u, o++;
        break;
      case "--pool-secret-file":
      case "--environment-secret-file":
        if (i === "--pool-secret-file") console.error("[runner:warn] --pool-secret-file is deprecated; use --environment-secret-file");
        if (u) r.poolSecretFile = u, o++;
        break;
      case "--capacity":
        if (u) {
          let l = tu(u);
          if (Number.isNaN(l) || l < 1) throw Error(`--capacity must be a positive integer, got: ${u}`);
          r.capacity = l, o++;
        }
        break;
      case "--base-dir":
        if (u) r.baseDir = Kr(u), r.baseDirSource = "flag", o++;
        break;
      case "--exec-path":
        if (u) r.execPath = u, o++;
        break;
      case "--hooks-dir":
        if (u) process.env.SELF_HOSTED_RUNNER_HOOKS_DIR = Kr(u), o++;
        break;
      case "--git-ssh-rewrite":
        if (!u) throw Error("--git-ssh-rewrite requires a hostname");
        r.gitSshRewriteHosts.push(u), o++;
        break;
      case "--git-host-rewrite":
        {
          if (!u) throw Error("--git-host-rewrite requires <from>=<to>");
          let l = u.indexOf("=");
          if (l <= 0 || l === u.length - 1) throw Error(`--git-host-rewrite requires <from>=<to>, got: ${u}`);
          let h = u.slice(0, l).toLowerCase(),
            w = u.slice(l + 1);
          if (h.includes("://") || h.includes("/") || w.includes("://") || w.includes("/")) throw Error(`--git-host-rewrite expects bare hostnames (e.g. ext.example.com=int.example.com), not URLs. Got: ${u}`);
          if (r.gitHostRewrites.some(([f]) => f === h)) throw Error(`duplicate --git-host-rewrite for '${h}'`);
          r.gitHostRewrites.push([h, w]), o++;
          break;
        }
      case "--use-anthropic-git-proxy":
        r.useAnthropicGitProxy = !0;
        break;
      case "--configure-git":
        r.configureGit = !0;
        break;
      case "--push-outcome-on-release":
        r.pushOutcomeOnRelease = !0;
        break;
      case "--trust-workspace":
        if (u === "false" || u === "0") r.trustWorkspace = !1, o++;else if (u === "true" || u === "1") r.trustWorkspace = !0, o++;else r.trustWorkspace = !0;
        break;
      case "--remove-session-state":
        if (u === "false" || u === "0") r.removeSessionState = !1, o++;else if (u === "true" || u === "1") r.removeSessionState = !0, o++;else r.removeSessionState = !0;
        break;
      case "--confine-repo-settings":
        if (u === "enforce" || u === "warn" || u === "off") r.confineRepoSettings = u, o++;else throw Error(`--confine-repo-settings requires one of enforce/warn/off (got: ${_(u)})`);
        break;
      case "--server-auto-mode-lists":
        if (u === "all" || u === "no-allow" || u === "none") r.serverAutoModeLists = u, o++;else throw Error(`--server-auto-mode-lists requires one of all/no-allow/none (got: ${_(u)})`);
        break;
      case "--host-config-snapshot":
        if (u === "disk" || u === "memory") r.hostConfigSnapshot = u, o++;else throw Error(`--host-config-snapshot requires one of disk/memory (got: ${_(u)})`);
        break;
      case "--log-level":
        if (u) r.logLevel = u, o++;
        break;
      case "--log-file":
        if (u) r.logFile = u, o++;
        break;
      case "--health-port":
        if (u) {
          let l = tu(u);
          if (Number.isNaN(l) || l < 0 || l > 65535) throw Error(`--health-port must be an integer in [0, 65535] (0 disables), got: ${u}`);
          r.healthPort = l, o++;
        }
        break;
      case "--kill-session-after-min":
        {
          if (u) {
            let l = Number(u);
            if (!Number.isFinite(l) || l < 0 || l > hn) throw Error(`--kill-session-after-min must be a non-negative number of minutes (0 disables, max ${hn}), got: ${u}`);
            process.env.SELF_HOSTED_RUNNER_MAX_LIFETIME_MS = String(l * 60 * 1000), r.envSetByFlag.add("SELF_HOSTED_RUNNER_MAX_LIFETIME_MS"), o++;
          }
          break;
        }
      case "--exit-if-unused-min":
        {
          if (u) {
            let l = Number(u);
            if (!Number.isFinite(l) || l < 0 || l > hn) throw Error(`--exit-if-unused-min must be a non-negative number of minutes (0 disables, max ${hn}), got: ${u}`);
            process.env.SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS = String(l * 60 * 1000), r.envSetByFlag.add("SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS"), o++;
          }
          break;
        }
      case "--session-stop-grace-sec":
        {
          let l = e[++o],
            h = Number(l);
          if (!l || !Number.isFinite(h) || h <= 0) throw Error(`--session-stop-grace-sec must be a positive number of seconds, got: ${l}`);
          process.env.SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS = String(h * 1000);
          break;
        }
      case "--sigkill-timeout-sec":
        throw Error("--sigkill-timeout-sec was renamed to --session-stop-grace-sec. It controls how long to wait for the Claude process to exit cleanly after a session ends, before force-killing it. The post-session hook runs after this.");
      case "--post-session-hook-timeout-sec":
        {
          let l = e[++o],
            h = Number(l);
          if (!l || !Number.isFinite(h) || h <= 0) throw Error(`--post-session-hook-timeout-sec must be a positive number of seconds, got: ${l}`);
          process.env.SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS = String(h * 1000);
          break;
        }
      case "--drain-wait-bg-tasks-sec":
      case "--drain-wait-sec":
        {
          if (i === "--drain-wait-bg-tasks-sec") console.error("[runner:warn] --drain-wait-bg-tasks-sec is deprecated; use --drain-wait-sec (it now also waits for an in-flight foreground turn, not only background tasks)");
          let l = e[++o],
            h = Number(l);
          if (!l || !Number.isFinite(h) || h < 0 || h > 86400) throw Error(`${i} must be a non-negative number of seconds (max 86400), got: ${l}`);
          process.env.SELF_HOSTED_RUNNER_DRAIN_WAIT_MS = String(h * 1000);
          break;
        }
      case "--drain-marker-file":
        {
          let l = e[++o];
          if (l === void 0 || l.trim() === "" || l.startsWith("--")) throw Error(`${i} requires a file path (the marker your host writes to announce a graceful drain), got: ${l === void 0 ? "nothing" : _(l)}`);
          process.env.SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE = Kr(l);
          break;
        }
      case "--drain-grace-sec":
        {
          if (u) {
            let l = Number(u);
            if (!Number.isFinite(l) || l < 0 || l > Xo) throw Error(`--drain-grace-sec must be a non-negative number of seconds (0 = immediate, max ${Xo}), got: ${u}`);
            process.env.SELF_HOSTED_RUNNER_DRAIN_GRACE_MS = String(l * 1000), o++;
          }
          break;
        }
      case "--release-idle-session-min":
        {
          if (u) {
            let l = Number(u);
            if (!Number.isFinite(l) || l < 0 || l > hn) throw Error(`--release-idle-session-min must be a non-negative number of minutes (0 disables, max ${hn}), got: ${u}`);
            process.env.SELF_HOSTED_RUNNER_SESSION_IDLE_MS = String(l * 60 * 1000), r.envSetByFlag.add("SELF_HOSTED_RUNNER_SESSION_IDLE_MS"), o++;
          }
          break;
        }
      case "--startup-timeout-min":
        {
          if (u) {
            let l = Number(u);
            if (!Number.isFinite(l) || l < 0 || l > hn) throw Error(`--startup-timeout-min must be a non-negative number of minutes (0 disables, max ${hn}), got: ${u}`);
            process.env.SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS = String(l * 60 * 1000), r.envSetByFlag.add("SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS"), o++;
          }
          break;
        }
      case "--defer-shutdown-max-min":
        {
          let l = e[++o],
            h = Number(l);
          if (l === void 0 || l.trim() === "" || !Number.isFinite(h) || h < 0 || h > hn) throw Error(`${i} must be a non-negative number of minutes (0 disables, max ${hn}), got: ${l}`);
          process.env.SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS = String(h * 60 * 1000), r.envSetByFlag.add("SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS");
          break;
        }
      case "--retire-at":
        {
          let l = e[++o],
            h = Number(l);
          if (!l || !Number.isSafeInteger(h) || h < Zo || h > Jo) throw Error(`--retire-at must be an absolute Unix timestamp in whole SECONDS (e.g. the output of 'date +%s' plus the runner's intended lifetime \u2014 not milliseconds, not a duration), got: ${l}`);
          process.env.SELF_HOSTED_RUNNER_RETIRE_AT = String(h);
          break;
        }
      case "--lock-to-account":
        if (u) r.lockToAccountId = u, o++;
        break;
      case "--client-label":
        if (u && !u.startsWith("--")) {
          let l = u.trim();
          if (l) r.clientLabel = l, o++;
        }
        break;
      case "--debug-token-dir":
        if (u) r.debugTokenDir = u, o++;
        break;
      case "--proxy-authorization-command":
      case "--proxy-authorization-file":
        if (u === void 0 || u.startsWith("--")) throw Error("--proxy-authorization-command / --proxy-authorization-file requires a value");
        if (i === "--proxy-authorization-command") r.proxyAuthorizationCommand = u;else r.proxyAuthorizationFile = u;
        o++;
        break;
      default:
        if (i?.startsWith("--")) throw Error(`unknown flag ${i}`);
        if (i === "") throw Error("empty argument \u2014 a flag value may be unset (failed env/K8s substitution?)");
        if (i !== void 0) throw Error(`unexpected argument '${i}' \u2014 this command takes no positional arguments`);
        break;
    }
  }
  let s = new Set(r.gitSshRewriteHosts.map(item => item.toLowerCase()));
  for (let [o, i] of r.gitHostRewrites) if (s.has(o)) console.error(`[runner:warn] --git-ssh-rewrite '${o}' will not match: --git-host-rewrite rewrites it to '${i}' first. Did you mean --git-ssh-rewrite '${i}'?`);
  return r;
}
function Vf(e, n) {
  if (n <= 1) return null;
  if (Ia(e) === null) return null;
  return `[runner:warn] --capacity ${n} has no effect on a session-bound runner: this work order is bound to one session, so this runner will serve exactly one session and the extra ${n - 1} slot(s) will not be used. To run multiple concurrent sessions for the same account ` + "per runner, register a fixed-fleet runner with the environment secret \u2014 see " + 'docs/self-hosted-runners-guide.md \xA7 "Get started".';
}
function zf(e, n = "win32") {
  if (n === "win32" && e === "default") throw Error("--base-dir (or SELF_HOSTED_RUNNER_BASE_DIR) is required on Windows: the built-in default is a POSIX container path that does not apply there. Pass the directory that repositories should be checked out under.");
}
async function Xf(e) {
  await us(e.globalCfgPath, {
    recursive: !0,
    force: !0
  }), await us(e.homeGitconfigPath, {
    recursive: !0,
    force: !0
  });
  for (let n of e.xdgGitDirs) await us(n, {
    recursive: !0,
    force: !0
  });
  await us(e.runnerDir, {
    recursive: !0,
    force: !0
  }), await qo(yf(e.globalCfgPath), {
    recursive: !0
  });
}
async function qf(e, n = r => console.error(r)) {
  if (e.poolSecretFile) {
    let o;
    try {
      o = await ml(Ud(e.poolSecretFile, {
        encoding: "utf-8"
      }), Ff, `environment-secret read from ${e.poolSecretFile}`);
    } catch (error) {
      let u = d(error);
      if (u.includes("timed out after")) n(`[runner:fatal] ${u} \u2014 check CSI/secret mount health`), process.exit(1);
      throw Error(`Failed to read environment secret file ${e.poolSecretFile} (${u})`);
    }
    return o.trim();
  }
  let SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET = process.env.SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET;
  if (SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET) return SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.trim();
  let SELF_HOSTED_RUNNER_POOL_SECRET = process.env.SELF_HOSTED_RUNNER_POOL_SECRET;
  if (SELF_HOSTED_RUNNER_POOL_SECRET) return n("[runner:warn] SELF_HOSTED_RUNNER_POOL_SECRET is deprecated; use SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET"), SELF_HOSTED_RUNNER_POOL_SECRET.trim();
  throw Error("No environment secret provided. Use --environment-secret-file or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.");
}
function Jf(execPath_3) {
  if (execPath_3) return {
    execPath: execPath_3,
    execArgs: []
  };
  return {
    execPath: process.execPath,
    execArgs: Hp() ? [] : [process.argv[1]]
  };
}
async function $k(e) {
  let n = Date.now();
  if (e.includes("--help") || e.includes("-h")) {
    console.log(`Usage: claude self-hosted-runner [options]

Connection:
  --api-url <url>             API base URL (default: ${apiUrl})
  --environment-secret-file <path>
                              Path to environment secret file (or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET)
                              (--pool-secret-file / SELF_HOSTED_RUNNER_POOL_SECRET are deprecated aliases.)
  --lock-to-account <id>      Lock runner to a single account at registration (webhook-driven on-demand
                              spawn). Only that account's sessions are assigned.
                              [env: SELF_HOSTED_RUNNER_LOCK_TO_ACCOUNT]
  --client-label <label>      Observability label sent at registration (default: hostname). Shown
                              beside the runner in the Anthropic console; never used for
                              authorization or routing. Set it when the hostname is not
                              meaningful, e.g. to a VM or container name.
                              [env: SELF_HOSTED_RUNNER_CLIENT_LABEL]
  --proxy-authorization-command <shell command>
                              For egress proxies that require a Proxy-Authorization header (for
                              example a short-lived bearer token) on every CONNECT. The command's
                              stdout is the full header value (e.g. "Bearer <token>"); it is run
                              afresh for each new connection to the proxy, so rotating tokens stay
                              current. Requires HTTPS_PROXY (or HTTP_PROXY) to name that upstream
                              proxy; ALL_PROXY alone is not consulted. When set, the runner starts a
                              small forward proxy on 127.0.0.1 that adds the header, and points
                              itself and every session it runs at it (HTTPS_PROXY/HTTP_PROXY are
                              rewritten for child processes, other proxy variables incl. ALL_PROXY
                              are cleared for them; NO_PROXY is unchanged). The value is never
                              logged. Not supported with the orchestrator subcommand yet.
                              [env: ${N_n}]
  --proxy-authorization-file <path>
                              Same, but the header value is read from a file (re-read for each new
                              connection, so a file rotated in place is picked up). Set only one of
                              the two. [env: ${F_n}]

Runtime:
  --capacity <n>              Max concurrent sessions (default: ${capacity_3})
  --base-dir <path>           Base directory for repo checkouts (default: ${Kd};
                              required on Windows, which has no default)
                              [env: SELF_HOSTED_RUNNER_BASE_DIR]
  --exec-path <path>          Binary to spawn for child sessions. Default: this process's own binary.
                              [env: SELF_HOSTED_RUNNER_EXEC_PATH]
  --hooks-dir <path>          Directory of lifecycle hook scripts (checkout, command, post-session).
                              Absent hooks fall through to built-in behavior.
                              [env: SELF_HOSTED_RUNNER_HOOKS_DIR]
  --session-stop-grace-sec <n>
                              How long to wait for the Claude process to exit cleanly after a
                              session ends, before force-killing it. The post-session hook runs
                              after this. Default: ${as / 1000}.
                              [env: SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS, in ms]
  --post-session-hook-timeout-sec <n>
                              SIGTERM budget for the post-session lifecycle hook, on every session
                              end including runner shutdown. Default: ${Wr / 1000}.
                              [env: SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS, in ms]
  --drain-wait-sec <n>        On SIGTERM/SIGINT, wait up to N seconds for each session's in-flight
                              turn (a foreground tool call) and running background tasks to finish
                              before sending the session process its SIGTERM. Adds N to the
                              advertised shutdown budget.
                              A background task that has JUST finished also counts as
                              in-flight until the follow-up turn that reads its result starts
                              (bounded by SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS, in ms;
                              default: ${Ys / 1000}s; 0 or an unusable value falls back
                              to the default \u2014 the hold cannot be disabled).
                              A turn that has JUST finished likewise counts as in flight until
                              the session process has reported its end to the server (bounded by
                              SELF_HOSTED_RUNNER_POST_TURN_SETTLE_MS, in ms; default: ${is / 1000}s;
                              normally about two seconds), so its result is not lost to the SIGTERM.
                              Default: 0 (send SIGTERM immediately). Max: 86400.
                              [env: SELF_HOSTED_RUNNER_DRAIN_WAIT_MS, in ms]
                              (--drain-wait-bg-tasks-sec is a deprecated alias for this flag.)
  --drain-marker-file <path>  For hosts that announce a graceful drain by writing a marker file
                              inside the machine and then sending the runner SIGTERM: if the
                              file exists when the drain begins, the runner reports its exit to
                              the server as a host drain rather than a plain shutdown signal,
                              with the host's force-delete time when the file's FIRST LINE is
                              that time as a plain integer in Unix seconds (the time is read only
                              from a regular file; anything else at the path \u2014 unreadable, a
                              directory, a symlink, a pipe \u2014 still counts as a host drain, with
                              no time). Telemetry only \u2014 the drain itself behaves exactly as
                              without the flag. No file at the path reads as "no host drain".
                              Name a path on a local filesystem that your sessions cannot write
                              to (a read that hangs on a network mount cannot delay the drain,
                              but can keep the exiting process alive until the mount answers).
                              Default: unset (off). [env: SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE]
  --git-ssh-rewrite <host>    Rewrite https://<host>/... source URLs to git@<host>:... (repeatable).
                              For SSH-only git hosts.
  --git-host-rewrite <f>=<t>  Rewrite https://<f>/... source URLs to https://<t>/... (repeatable).
                              For split-horizon DNS where the runner reaches GHE via a different
                              hostname than the control plane. Applied before --git-ssh-rewrite.
  --use-anthropic-git-proxy   Opt this runner into Anthropic-managed git (clones are authenticated
                              server-side with the session creator's stored GitHub OAuth token, or
                              the org's GitHub App installation token for bot/agent sessions; you
                              don't manage git auth on the runner). Supersedes --git-host-rewrite
                              and --git-ssh-rewrite.
                              WARNING: deletes and replaces the HOME-level git config of the
                              account running the runner: ~/.gitconfig, the GIT_CONFIG_GLOBAL target
                              if set, and the whole $XDG_CONFIG_HOME/git directory (default
                              ~/.config/git; config, ignore, attributes and anything else in it),
                              at startup and before every session, with no backup, so one session's
                              git settings cannot reach the next.
                              The replacement holds only this runner's git credential settings for
                              the Anthropic API host (plus the --configure-git settings, if set) and
                              is left in place when the runner exits. Run this flag only under a
                              dedicated runner account or container, never a personal login; keep
                              operator git config in /etc/gitconfig or use --configure-git.
                              [env: CLAUDE_RUNNER_USE_GIT_PROXY=1]
  --configure-git             Set global git identity to Claude <noreply@anthropic.com> and enable
                              commit signing via Anthropic's signing service, matching 1P sessions.
                              Writes ~/.gitconfig at runner startup. Without this flag, your image
                              must provide its own git identity.
                              [env: SELF_HOSTED_RUNNER_CONFIGURE_GIT=1]
  --push-outcome-on-release   On a runner-initiated non-completed session end (SIGTERM drain,
                              idle-release, failed), push every tracked outcome branch to origin
                              before deleting it, so in-flight commits survive a runner restart.
                              Skipped on server-initiated deassign. On a resumed session (worker
                              epoch > 1), the prep path fetches any previously pushed outcome
                              branch from origin and continues from it, so histories stay
                              linear. CAVEAT: the resume-fetch trusts refs/heads/<outcome-branch>
                              on the source remote \u2014 anyone with push access to that ref can
                              place content into the resumed workspace; if your source revision
                              is protected but claude/* refs are not, that collaborator write
                              surface widens on resume. Repos checked out via the checkout
                              lifecycle hook are NOT pushed \u2014 use the post-session hook to
                              snapshot those. Adds 30s
                              (total, shared across all pushes) to the advertised
                              shutdown budget.
                              [env: SELF_HOSTED_RUNNER_PUSH_OUTCOME_ON_RELEASE=1]
  --trust-workspace [bool]    Seed persisted trust for each session's repo paths so repo-level
                              .claude/settings.json permissions.allow and additionalDirectories
                              are honored by the child. Default: ${Bd}.
                              Set to false for cli#44151's stricter gate: repo-committed grants
                              are dropped with an "Ignoring N permissions.allow" stderr
                              diagnostic; configure host-level grants via the host-config dir's
                              settings.json permissions.allow (userSettings source) instead.
                              [env: SELF_HOSTED_RUNNER_TRUST_WORKSPACE=0 to disable]
  --remove-session-state [bool]
                              Remove a session's per-session state under <base-dir>/_sessions/
                              when it ends on this runner, on every outcome: its Claude config
                              directory (local transcript copy, shell snapshots, session env,
                              file history, debug log), staged uploads, per-session gitconfig
                              and session working directory (worktrees, hook checkouts, no-repo
                              cwd). Default: ${Vo}. Off: they stay on disk until you recycle it,
                              readable by any later session this --base-dir serves (same Unix
                              user). Best-effort: a runner killed before its cleanup leaves
                              them; canonical clones and files written elsewhere (temp dir) are
                              not touched; a fresh filesystem per runner remains the primary
                              control. Copy the debug log from the post-session hook
                              (CLAUDE_RUNNER_DEBUG_LOG_PATH) if you need it locally.
                              [env: SELF_HOSTED_RUNNER_REMOVE_SESSION_STATE=1]
  --confine-repo-settings <mode>
                              Repo-committed-settings confine guard mode: warn (default) logs
                              a would-refuse diagnostic per violation and still spawns;
                              enforce refuses to spawn the session; off disables the scan.
                              Invalid values fail closed at startup.
                              [env: SELF_HOSTED_RUNNER_CONFINE_REPO_SETTINGS]
  --server-auto-mode-lists <mode>
                              Which of the server's auto mode classifier lists a session may
                              receive in its launcher settings, when the server asks this
                              runner to apply them: all applies all three; no-allow (default)
                              withholds allow, the exceptions to soft block rules, and applies
                              environment and soft_deny (an environment entry can make the
                              classifier allow more as well as less); none applies none of
                              them. The choice is reported to the server at registration. An
                              invalid value stops the runner at startup.
                              [env: SELF_HOSTED_RUNNER_SERVER_AUTO_MODE_LISTS]
  [env: SELF_HOSTED_RUNNER_HOST_CONFIG_DIR]
                              Directory seeded into each session's CLAUDE_CONFIG_DIR (settings,
                              agents/, skills/, plugins/, \u2026; runtime state excluded). Default:
                              ~/.claude. Point at an empty dir to disable.
  --host-config-snapshot <disk|memory>
                              Where the startup snapshot of that directory is held. disk
                              (default): copied once into a runner-owned directory under
                              --base-dir and verified against an in-memory manifest at every
                              session start \u2014 no size limit; a session that finds the copy
                              modified fails and the runner must be restarted. memory: held on
                              the heap, limited to 64 MiB in total (over that, sessions start
                              without host config and say so).
                              [env: SELF_HOSTED_RUNNER_HOST_CONFIG_SNAPSHOT]
  --health-port <port>        Port for /healthz HTTP listener (default: ${Yd}). 0 disables.
                              [env: SELF_HOSTED_RUNNER_HEALTH_PORT]
  --log-level <level>         Log level: info or debug (default: info)
  --log-file <path>           Tee runner logs to a file in append mode. Stdout is unchanged.
                              [env: SELF_HOSTED_RUNNER_LOG_FILE]

Runner lifecycle:
  --exit-if-unused-min <n>    Exit the runner if never assigned work for N min (autoscaler scale-down).
                              Default: never. Max: ${hn}.
                              [env: SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS, in ms]
  --drain-grace-sec <n>       Default: 0 \u2014 exit immediately after active sessions finish, WITHOUT
                              polling for more (one-shot when --capacity=1).
                              Set a positive value (e.g. 30) to keep the runner warm and re-poll the
                              locked account's queue for that many seconds before exiting.
                              Max: ${Xo}. [env: SELF_HOSTED_RUNNER_DRAIN_GRACE_MS, in ms]
  --retire-at <epoch-seconds> Retire the runner at the given wall-clock time (absolute Unix timestamp, in
                              seconds): release every active session through the ReleaseSession path that
                              --release-idle-session-min uses (the session parks server-side and a fresh
                              runner picks it up on the user's next message), stop taking new work, and
                              exit 0 once the slots are empty. A session still mid-turn at that time is
                              released as soon as its turn ends; background work a finished turn left
                              running gets up to 60s of grace, then the session parks anyway (perpetual
                              monitor tasks don't hold it at all). Use this when the host hard-kills the
                              runner at a known time (e.g. a sandbox lifetime cap): set it far enough
                              before the kill to cover typical turns PLUS the per-session shutdown
                              budget (--session-stop-grace-sec, the push-outcome window, the full
                              --post-session-hook-timeout-sec, the 60s background-work grace, one poll)
                              so sessions park cleanly and the post-session hook isn't truncated by
                              the kill. Default: never. [env: SELF_HOSTED_RUNNER_RETIRE_AT, in seconds]
  --defer-shutdown-max-min <m>
                              On the FIRST SIGTERM/SIGINT, do not drain: stop taking new work (the runner
                              advertises zero capacity and keeps polling only as its lease heartbeat) and
                              otherwise keep running as it does today, then finish shutting down M minutes
                              later. Until then attached sessions are served normally and leave only the way
                              they would without any signal: --release-idle-session-min, if set, releases a
                              session whose user has gone idle (it parks server-side and a fresh runner
                              resumes it on the user's next message); a session that flag would not release
                              \u2014 it is unset, or the finished turn still has background work running \u2014 simply
                              stays attached. M minutes after the first signal every session still attached
                              is released through that same park path at once regardless of idle time (one
                              mid-turn as soon as its turn ends; background work a finished turn left running
                              gets up to 60s), and anything STILL attached ${(zs + ar) / 1000}s later (that 60s + a 15s
                              margin; --drain-wait-sec + 15s if longer) is drained as on a second signal \u2014
                              the one path that requeues instead of parking. The runner exits 0 as soon as
                              it holds no session, before or after M. A SECOND signal drains immediately, as
                              the first does without this flag; a third force-exits (so does a signal during
                              that last-resort drain). READ THIS BEFORE ENABLING: your supervisor sends one
                              SIGTERM and then SIGKILLs at its stop timeout; if that timeout ends first,
                              every still-attached session is killed WITHOUT its post-session hook or
                              deregister and is requeued to another runner about a minute later \u2014 strictly
                              worse than the default drain. So set the stop timeout
                              (terminationGracePeriodSeconds etc.) to at least M minutes + ${(zs + ar) / 1000}s (that post-ceiling
                              grace; --drain-wait-sec + 15s if longer) + the shutdown budget above \u2014 the runner
                              prints this sum at startup when the flag is set. --startup-timeout-min and
                              --kill-session-after-min keep working unchanged during the wait. Fractional
                              minutes are accepted. Default: 0 (off \u2014 drain on the first signal).
                              Max: ${hn}. [env: SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS, in ms]

Per-session watchdogs:
  --release-idle-session-min <n>  Release a session slot after N min of no user input (turn finished,
                                  or parked at a permission prompt, user idle). Runner exits if this
                                  drops it to zero active sessions.
                                  Default: never. Max: ${hn}.
                                  [env: SELF_HOSTED_RUNNER_SESSION_IDLE_MS, in ms]
  --startup-timeout-min <n>       Release a session slot if the child has not completed initialization
                                  N min after spawn \u2014 covers a child hung during --resume hydration or
                                  MCP connect, and a session assigned with no pending input. Output the
                                  child writes before it has initialized or reported its state restarts
                                  the N min. Cleared once the child emits system:init, after which
                                  --release-idle-session-min takes over. Default: 15. 0 disables.
                                  Max: ${hn}.
                                  [env: SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS, in ms]
  --kill-session-after-min <n>    Cap a session child's wall-clock life at N min (runaway backstop).
                                  At the deadline a session that is waiting on its user (idle, parked
                                  at a permission prompt, or still starting up) is RELEASED \u2014 paused
                                  server-side, resumable \u2014 not killed; a turn in flight is released
                                  when it next parks or finishes; a turn still running (or a release
                                  the server keeps declining) is SIGTERMed at the hard cap, 15 min past
                                  the deadline (override: SELF_HOSTED_RUNNER_MAX_LIFETIME_GRACE_MS, in
                                  ms). Default: never. Max: ${hn}.
                                  [env: SELF_HOSTED_RUNNER_MAX_LIFETIME_MS, in ms]

Debug:
  --debug-token-dir <path>    DEBUG ONLY \u2014 writes live tokens to disk. Do not use in production.
                              [env: SELF_HOSTED_RUNNER_DEBUG_TOKEN_DIR]

  --help, -h                  Show this help message`);
    return;
  }
  wb();
  let r = () => new Date().toISOString(),
    s,
    o = Phn({
      stamp: C => `${r()} [self-hosted-runner] ${sc(C)}`,
      onOwnLine: C => s?.write(C + `
`)
    }),
    i,
    poolSecret,
    l;
  try {
    if (i = jf(e), l = eYo({
      command: i.proxyAuthorizationCommand,
      file: i.proxyAuthorizationFile
    }), process.env.SELF_HOSTED_RUNNER_HOOKS_DIR) _Wt("--hooks-dir");
    zf(i.baseDirSource), nSe(), poolSecret = await qf(i, C => o.write("stderr", C)), await Gi(i.baseDir, void 0, C => o.write("stderr", C));
  } catch (error) {
    o.write("stderr", `error: ${sc(d(error))}
Run 'claude self-hosted-runner --help' for usage.`), process.exit(2);
  }
  let h = i.logLevel === "debug";
  if (i.logFile) s = wf(i.logFile, {
    flags: "a",
    mode: 384
  }), s.on("open", C => {
    Sf(C, 384, () => {});
  }), s.on("error", C => {
    o.write("stderr", `${r()} [runner:warn] log-file write failed (${d(C)}); continuing stdout-only`), s = void 0;
  });
  let w = C => {
      s?.write(C + `
`);
    },
    flushLogSink = async () => {
      if (!s) return;
      let C = s;
      s = void 0, await ml(new Promise(ee => C.end(ee)), 500, "[runner:exit] log-file flush").catch(() => {});
    },
    onDebug_9 = C => {
      if (h) {
        let ee = `${r()} [DEBUG] ${sc(C)}`;
        o.write("stderr", ee), w(ee);
      }
    },
    onStatus_10 = C => {
      let ee = `${r()} [self-hosted-runner] ${sc(C)}`;
      o.write("stdout", ee), w(ee);
    };
  if (onDebug_9(`[runner:log] ${o.describe()}`), process.env.SELF_HOSTED_RUNNER_SIGKILL_TIMEOUT_MS !== void 0) onStatus_10("[runner:fatal] SELF_HOSTED_RUNNER_SIGKILL_TIMEOUT_MS was renamed to SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS. It controls how long to wait for the Claude process to exit cleanly after a session ends, before force-killing it. The post-session hook runs after this."), await flushLogSink(), process.exit(1);
  for (let C of ["RUNNER_RELEASE_IDLE_SESSION_MIN", "SELF_HOSTED_RUNNER_RELEASE_IDLE_SESSION_MIN", "SELF_HOSTED_RUNNER_SESSION_IDLE_MIN", "SELF_HOSTED_RUNNER_SESSION_IDLE_SEC"]) if (process.env[C] !== void 0) onStatus_10(`[runner:warn] ${C} is set but is not a setting this runner ` + "reads \u2014 it is being IGNORED. The session idle-release window " + "is configured with --release-idle-session-min <minutes> (or env SELF_HOSTED_RUNNER_SESSION_IDLE_MS, in milliseconds).");
  let T = Ko(St("SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS") || as, St("SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS") || Wr, xs(), i.pushOutcomeOnRelease ? Br : 0, Bo()),
    U = `[runner] This runner needs up to ${T}s to stop the Claude process and run the post-session hook on shutdown, and force-exits after ${T}s (a session release already in flight when shutdown begins can add up to ${zo / 1000}s, normally well under 1s, before the runner deregisters). Configure your process supervisor's stop timeout to at least ${T}s (e.g. terminationGracePeriodSeconds on Kubernetes, stop_grace_period on Docker Compose, TimeoutStopSec on systemd, or your platform's equivalent).`;
  onStatus_10(U);
  let maxMs_2 = St("SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS"),
    N = St("SELF_HOSTED_RUNNER_SESSION_IDLE_MS"),
    B = Math.max(xs(), zs) + ar,
    D = maxMs_2 > 0 ? `[runner] --defer-shutdown-max-min is set (${formatDelay(maxMs_2, {
      hideTrailingZeros: !0
    })}): the FIRST shutdown signal does not start that ${T}s budget \u2014 the runner stops ` + "taking work but keeps serving the attached sessions; " + (N > 0 ? `each is released (parked, resumable) once its user has been idle ${formatDelay(N, {
      hideTrailingZeros: !0
    })} (--release-idle-session-min)` : "none is released early (--release-idle-session-min is not set)") + `, and the runner exits as soon as it holds no session; ${formatDelay(maxMs_2, {
      hideTrailingZeros: !0
    })} after the signal every remaining session is released at once and anything still attached ${formatDelay(B, {
      hideTrailingZeros: !0
    })} later is drained. If your supervisor's stop timeout ends first, every still-attached session is killed WITHOUT its post-session hook or deregister and is requeued to another runner about a minute later. Size the stop timeout to at least ${Math.ceil((maxMs_2 + B) / 1000) + T}s (M + post-ceiling grace + the budget above). A second signal drains immediately.` : void 0;
  if (D !== void 0) onStatus_10(D);
  let M = (C, ee, pe, Qe = !1) => {
    let Ke = process.env[C];
    if (Ke === void 0 || Ke === "") return pe !== void 0 && pe > 0 ? `${formatDelay(pe, {
      hideTrailingZeros: !0
    })} (default)` : "disabled (not configured)";
    let te = i.envSetByFlag.has(C) ? ee : `env ${C}`,
      Ht = St(C);
    if (Ht > 0) return `${formatDelay(Ht, {
      hideTrailingZeros: !0
    })} (from ${te})`;
    let Ye = Number(Ke);
    if (Qe && pe !== void 0 && pe > 0) {
      let Jt = Number.isFinite(Ye) && Ye === 0 ? "0 is not accepted" : "not a usable ms duration";
      return `${formatDelay(pe, {
        hideTrailingZeros: !0
      })} ` + `(default \u2014 ${te} ignored: ${Jt})`;
    }
    return Number.isFinite(Ye) && Ye === 0 ? `disabled (from ${te})` : `disabled (from ${te} \u2014 not a usable ms duration, treated as 0)`;
  };
  onStatus_10(`[runner] watchdog config: idle-release=${M("SELF_HOSTED_RUNNER_SESSION_IDLE_MS", "--release-idle-session-min")}; startup-timeout=${M("SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS", "--startup-timeout-min", Oo)}; kill-session-after=${M("SELF_HOSTED_RUNNER_MAX_LIFETIME_MS", "--kill-session-after-min")}; exit-if-unused=${M("SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS", "--exit-if-unused-min")}; defer-shutdown-max=${M("SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS", "--defer-shutdown-max-min")}; bg-result-grace=${M("SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS", "SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS", Ys, !0)}; post-turn-settle=${M("SELF_HOSTED_RUNNER_POST_TURN_SETTLE_MS", "SELF_HOSTED_RUNNER_POST_TURN_SETTLE_MS", is, !0)}; drain-marker-file=${process.env.SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE || "unset"}`);
  let ie = i.removeSessionState === Vo ? "default" : "--remove-session-state / SELF_HOSTED_RUNNER_REMOVE_SESSION_STATE";
  onStatus_10(i.removeSessionState ? `[runner] per-session state: REMOVED at session end (${ie}) \u2014 each session's _sessions/<id>.claude-config, .tool-server-config, .uploads, .gitconfig and <id>/ are deleted when it ends, best-effort` : `[runner] per-session state: KEPT at session end (${ie}) \u2014 each session's _sessions/<id>.claude-config, .tool-server-config, .uploads, .gitconfig and <id>/ stay under ${i.baseDir} until the disk is recycled`);
  let SELF_HOSTED_RUNNER_HOOKS_DIR_2 = process.env.SELF_HOSTED_RUNNER_HOOKS_DIR,
    execPath_4 = i.execPath;
  if (!execPath_4) {
    let C = await MSt(SELF_HOSTED_RUNNER_HOOKS_DIR_2, "command");
    if (C) execPath_4 = C, onStatus_10(`[runner:hook] using command hook ${C}`);
  }
  let {
    execPath: execPath_5,
    execArgs: execArgs_3
  } = Jf(execPath_4);
  onStatus_10(`Connecting to ${i.apiUrl} (capacity=${i.capacity}, baseDir=${i.baseDir}, execPath=${[execPath_5, ...execArgs_3].join(" ")})`);
  let Se = Vf(poolSecret, i.capacity);
  if (Se !== null) onStatus_10(Se);
  if (i.debugTokenDir) await qo(i.debugTokenDir, {
    recursive: !0,
    mode: 448
  }).then(() => {
    onStatus_10(`[runner:debug] debug token dir ready: ${i.debugTokenDir}`);
  }).catch(C => {
    onStatus_10(`[runner:debug] failed to create debug token dir (best-effort): ${C}`);
  });
  let de;
  if (l) try {
    de = await tYo(l, {
      onStatus: onStatus_10,
      onDebug: onDebug_9
    }), g("self_hosted_egress_proxy_auth");
  } catch (error) {
    m("self_hosted_egress_proxy_auth", "listener_start_failed"), onStatus_10(`[runner:fatal] could not start the proxy-authorization listener: ${d(error)}`), await flushLogSink(), process.exit(1);
  }
  let Z = xhn({
      baseUrl: i.apiUrl,
      poolSecret: poolSecret,
      onDebug: onDebug_9
    }),
    clientLabel = i.clientLabel ?? vf();
  if (i.lockToAccountId) onStatus_10(`Registering locked to account: ${i.lockToAccountId}`);
  if (i.useAnthropicGitProxy) onStatus_10("Registering as opted in to Anthropic-managed git (--use-anthropic-git-proxy)");
  if (i.serverAutoModeLists !== wet) onStatus_10(`Registering with --server-auto-mode-lists ${i.serverAutoModeLists}: ${Wf[i.serverAutoModeLists]}`);
  let runnerId_2, runnerToken, Ce;
  try {
    Ce = await wr(() => Z.registerRunner({
      clientLabel: clientLabel,
      lockToAccountId: i.lockToAccountId,
      useAnthropicGitProxy: i.useAnthropicGitProxy,
      serverAutoModeLists: i.serverAutoModeLists
    }), {
      initialDelayMs: 1000,
      maxDelayMs: 16000,
      maxAttempts: 5,
      shouldRetry: shouldRetry,
      onRetry: (ee, pe) => {
        onStatus_10(`RegisterRunner attempt ${ee} transient failure (${pe instanceof Error ? pe.message : pe}) \u2014 retrying`);
      }
    }), runnerId_2 = Ce.runner_id, runnerToken = Ce.runner_token, g("self_hosted_register");
  } catch (error) {
    let ee = error instanceof Error ? error.message : String(error),
      pe = Cd(error, poolSecret);
    if (pe !== null) m("self_hosted_register", "self_hosted_register_work_order_refused"), onStatus_10(`[runner:fatal] ${pe}`);else if (error instanceof Error && "isSelfHostedDisabledByOrg" in error && error.isSelfHostedDisabledByOrg === !0) m("self_hosted_register", "self_hosted_register_disabled_by_org"), onStatus_10(`[runner:fatal] RegisterRunner refused because self-hosted environments are not enabled for this organization. Usually the 'Allow self-hosted environments' setting on the Cloud environments admin page (claude.ai/admin-settings/cloud-environments) is off, and an organization Owner can turn it on. Self-hosted environments also need a Team or Enterprise plan, and the setting usually applies within a few minutes. If this message still appears after that, contact your Anthropic account team. The environment secret was accepted, so do not rotate it. (${ee})`);else if (jd(error)) m("self_hosted_register", "self_hosted_register_auth_failed"), onStatus_10(`[runner:fatal] RegisterRunner auth failed \u2014 environment secret invalid or revoked. Check --environment-secret-file or SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET. (${ee})`);else {
      m("self_hosted_register", "self_hosted_register_failed");
      let Qe = Qf(ee);
      onStatus_10(`[runner:fatal] RegisterRunner failed: ${ee}${Qe}`);
    }
    await flushLogSink(), process.exit(1);
  }
  onStatus_10(`Registered: runner_id=${runnerId_2}`);
  let startCommandPhases = void 0,
    abortController_3 = new AbortController(),
    tt = void 0,
    zt = Z,
    apiClient_4 = zt,
    abortController_4 = new AbortController(),
    It = "running",
    Cn = !0,
    En = {},
    pn = {},
    sn = C => {
      let current_8 = En.current,
        pe = current_8 === void 0 ? "session counts not yet initialized (startup in progress)" : `${current_8.sessionIdle.size} active session(s), ${F([...current_8.sessionIdle.values()], Qe => Qe !== null)} of them idle`;
      return `(${C}; uptime ${formatDelay(process.uptime() * 1000)}; ${pe})`;
    },
    $t = C => {
      if (It === "running" && maxMs_2 > 0 && Cn) {
        if (It = "deferring", onStatus_10(`Received shutdown signal, deferring drain: refusing new work, serving the attached sessions until they are released or ${formatDelay(maxMs_2, {
          hideTrailingZeros: !0
        })} passes; a second signal drains immediately ${sn(C)}`), onStatus_10(U), D !== void 0) onStatus_10(D);
        abortController_4.abort(Date.now());
        return;
      }
      vt(C);
    },
    vt = (C, ee = "signal") => {
      if (It === "draining") {
        let Qe = RQn();
        if (Qe > 0) onStatus_10(`[runner] Forced shutdown with ${Qe} post-session hook(s) still running \u2014 they continue in their own process group, but their output is no longer captured and the runner's timeout budget no longer applies.`);else onStatus_10("Forced shutdown");
        flushLogSink().finally(() => process.exit(1));
        return;
      }
      It = "draining", onStatus_10(ee === "signal" ? "Received shutdown signal, draining active sessions... " + sn(C) : `[runner:shutdown] ${C} \u2014 draining active sessions... ` + sn("no new signal")), onStatus_10(U);
      let pe = RQn();
      if (pe > 0) onStatus_10(`[runner] ${pe} post-session hook(s) still running \u2014 waiting for them within the budget above. Another SIGTERM force-exits the runner immediately; make sure your supervisor's stop timeout covers the full budget so hooks are not cut short.`);
      abortController_3.abort();
    },
    kn = () => $t("SIGTERM"),
    vn = () => $t("SIGINT");
  process.on("SIGTERM", kn), process.on("SIGINT", vn);
  let tokenState_2 = {
    runnerToken: runnerToken
  };
  if (i.debugTokenDir) await Id(i.debugTokenDir, "runner_token.jwt", runnerToken, onStatus_10);
  let Wn = Ds({
    getAccessToken: async () => {
      let {
        token: token_6
      } = await zt.refreshToken(tokenState_2.runnerToken);
      return token_6;
    },
    onRefresh: (C, ee) => {
      if (i.debugTokenDir) Id(i.debugTokenDir, "runner_token.jwt", ee, onStatus_10);
      tokenState_2.runnerToken = ee, onDebug_9("[runner:main] runner_token refreshed");
    },
    label: "self-hosted-runner"
  });
  Wn.schedule(Rf, runnerToken);
  let wn = void 0;
  pn.current = wn;
  let gitProxyGlobalConfigPath;
  if (i.useAnthropicGitProxy) {
    if (i.capacity > 1) onStatus_10("[runner:fatal] --use-anthropic-git-proxy requires --capacity 1 (the proxy URL is per-session and linked worktrees share origin). Omit --use-anthropic-git-proxy or set --capacity 1."), await flushLogSink(), process.exit(1);
    if (or.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM && St("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS") > 0) onStatus_10("[runner:fatal] CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM requires --drain-grace-sec 0 (one-shot). With drain-grace > 0 a second session could reuse this VM after the first's child wrote to the canonical .git/, and the skip would bypass the cross-session-isolation sanitize for an untrusted canonical. Unset the env var or set --drain-grace-sec 0."), await flushLogSink(), process.exit(1);
    let {
        parseGitVersion: parseGitVersion,
        readGitVersion: readGitVersion
      } = await import("B:/~BUN/root/chunk-c4c2pzsz.js"),
      pe = await readGitVersion(),
      Qe = parseGitVersion(pe);
    if (!Qe || Qe[0] < 2 || Qe[0] === 2 && Qe[1] < 32) onStatus_10(`[runner:fatal] --use-anthropic-git-proxy requires git >= 2.32 (found ${pe.trim() || "<none>"}). Older git silently ignores GIT_CONFIG_GLOBAL, which this mode relies on for cross-session isolation.`), await flushLogSink(), process.exit(1);
    gitProxyGlobalConfigPath = process.env.GIT_CONFIG_GLOBAL || ds(Vs(), ".gitconfig");
    let globalCfgPath = gitProxyGlobalConfigPath,
      te = await xd(globalCfgPath).catch(() => {
        return;
      });
    if (te && (te.isCharacterDevice() || te.isBlockDevice())) onStatus_10(`[runner:fatal] --use-anthropic-git-proxy requires a writable global git config, but GIT_CONFIG_GLOBAL resolves to ${globalCfgPath} which is not a regular file. The proxy flag writes its credential helper there and restores it at each session start. Unset GIT_CONFIG_GLOBAL or point it at a regular file path.`), await flushLogSink(), process.exit(1);
    let Ht = process.env.XDG_CONFIG_HOME || ds(Vs(), ".config"),
      xdgGitDirs = Hi(Ht, Vs());
    onStatus_10(`[runner:git] --use-anthropic-git-proxy: wiping HOME-level git config (${globalCfgPath}, ${xdgGitDirs.join(", ")}, ${ds(i.baseDir, ".runner")}) for cross-session isolation. Operator-provisioned git config must live in system config (/etc/gitconfig) or via --configure-git; see "Git authentication" in the self-hosted runners guide.`), await Xf({
      globalCfgPath: globalCfgPath,
      homeGitconfigPath: ds(Vs(), ".gitconfig"),
      xdgGitDirs: xdgGitDirs,
      runnerDir: ds(i.baseDir, ".runner")
    });
  }
  let {
      operatorGitSnapshotWarnings: operatorGitSnapshotWarnings,
      quoteConfigValueForLog: quoteConfigValueForLog,
      readOperatorGitSnapshot: readOperatorGitSnapshot,
      resolveHookGitPrograms: resolveHookGitPrograms,
      parseGitVersion: parseGitVersion_2,
      readGitVersion: readGitVersion_2
    } = await import("B:/~BUN/root/chunk-c4c2pzsz.js"),
    operatorGitSnapshot_2 = await readOperatorGitSnapshot({
      baseDir: i.baseDir,
      lifecycleHooks: Boolean(SELF_HOSTED_RUNNER_HOOKS_DIR_2)
    }),
    hookGitPrograms_2 = await resolveHookGitPrograms({
      baseDir: i.baseDir
    }),
    hookGitLegacyParams = !1;
  if (SELF_HOSTED_RUNNER_HOOKS_DIR_2) {
    let {
        envHasGitConfigKey: envHasGitConfigKey,
        lifecycleHookAskpassSource: lifecycleHookAskpassSource,
        operatorGitConfigPairStatus: operatorGitConfigPairStatus,
        withLifecycleHookGitEnv: withLifecycleHookGitEnv,
        LIFECYCLE_HOOK_GIT_ENV: LIFECYCLE_HOOK_GIT_ENV
      } = await import("B:/~BUN/root/chunk-6wdcqqvw.js"),
      GIT_ALLOW_PROTOCOL = LIFECYCLE_HOOK_GIT_ENV.GIT_ALLOW_PROTOCOL,
      envHooksPath = envHasGitConfigKey("core.hooksPath"),
      Ye = withLifecycleHookGitEnv(),
      Jt = Ye.GIT_ALLOW_PROTOCOL !== GIT_ALLOW_PROTOCOL;
    for (let Tn of operatorGitSnapshotWarnings(operatorGitSnapshot_2, {
      isRoot: process.getuid?.() === 0,
      operatorSshInEnv: Ye.GIT_SSH_COMMAND !== LIFECYCLE_HOOK_GIT_ENV.GIT_SSH_COMMAND,
      askpassSource: lifecycleHookAskpassSource(),
      postSessionHook: operatorGitSnapshot_2.lfsFilterScopes !== void 0 && (await MSt(SELF_HOSTED_RUNNER_HOOKS_DIR_2, "post-session")) !== null,
      envHooksPath: envHooksPath
    })) onStatus_10(Tn);
    let Rn = operatorGitConfigPairStatus();
    if (Rn.discarded !== void 0) onStatus_10(`[runner:warn] GIT_CONFIG_COUNT=${Rn.announced} in the runner environment is ${Rn.discarded === "sparse" ? "not backed by that many GIT_CONFIG_KEY_n pairs" : "above the supported maximum"}; the lifecycle hooks' git will NOT receive those operator pairs (only the runner's pins). Fix the count/pairs to have them applied.`);
    onStatus_10("[runner:git] lifecycle hooks: core.hooksPath " + (envHooksPath ? "taken from the GIT_CONFIG_KEY_n pair in the runner's environment" : `pinned to ${quoteConfigValueForLog(operatorGitSnapshot_2.hooksPath ?? "/dev/null")}${operatorGitSnapshot_2.hooksPath ? " (system git config)" : " (no repository or global hooks run inside lifecycle-hook git)"}`) + `; fsmonitor/askpass/templates off${Ye.GIT_ASKPASS !== void 0 && Ye.GIT_ASKPASS === Ye.SSH_ASKPASS ? " (GIT_ASKPASS set from the runner environment's SSH_ASKPASS)" : ""}; GIT_ALLOW_PROTOCOL=${Ye.GIT_ALLOW_PROTOCOL ?? "(unset)"} for hook git${Jt ? " (from the runner environment)" : " (runner default \u2014 local-path/file://, git://, bundle and external-helper remotes refused)"}; gpg programs ${hookGitPrograms_2.gpg}/${hookGitPrograms_2.gpgsm}${hookGitPrograms_2.skipped.length ? ` (skipped session-writable ${hookGitPrograms_2.skipped.length} PATH entries)` : ""}; ` + (i.configureGit ? "hook-made commits signed per session (--configure-git), not co-authored" : "commit/tag signing off for hook-made commits (no --configure-git)"));
    let Pt = parseGitVersion_2(await readGitVersion_2());
    if (Pt !== null && (Pt[0] < 2 || Pt[0] === 2 && Pt[1] < 31)) hookGitLegacyParams = !0, onStatus_10(`[runner:warn] git ${Pt[0]}.${Pt[1]} ignores GIT_CONFIG_COUNT; exporting the lifecycle-hook git configuration pins (and any GIT_CONFIG_KEY_n pairs from the runner environment, after them) via GIT_CONFIG_PARAMETERS instead (upgrade to git >= 2.31 for the documented behaviour).`);
  }
  if (i.configureGit) try {
    let {
      configureGitForSigning: configureGitForSigning
    } = await import("B:/~BUN/root/chunk-c4c2pzsz.js");
    await configureGitForSigning({
      baseDir: i.baseDir,
      execPath: process.execPath,
      onStatus: onStatus_10
    });
  } catch (error) {
    onStatus_10(`[runner:fatal] --configure-git failed: ${d(error)}. Check git is on PATH and ~/.gitconfig is writable.`), await flushLogSink(), process.exit(1);
  }
  if (i.pushOutcomeOnRelease) try {
    let {
        parseGitVersion: parseGitVersion_3
      } = await import("B:/~BUN/root/chunk-c4c2pzsz.js"),
      ee = await lt("git", ["--version"], {
        timeout: 5000,
        useCwd: !1,
        stdin: "ignore",
        stderr: "pipe",
        maxBuffer: 1048576
      });
    if (ee.stderr.trim() !== "") o.write("stderr", sc(ee.stderr.trimEnd()));
    let pe = ee.code === 0 ? parseGitVersion_3(ee.stdout) : null;
    if (pe !== null && (pe[0] < 2 || pe[0] === 2 && pe[1] < 29)) onStatus_10(`[runner:warn] --push-outcome-on-release: git ${pe[0]}.${pe[1]} detected. The drain-push works on any version, but resuming from the preserved branch requires git >= 2.29 (--no-write-fetch-head). Upgrade git for full behavior.`);
  } catch {}
  let configureGitHookStubs_2, configureGitSigningArtifacts;
  if (i.configureGit) {
    let {
      coauthorHookStubs: coauthorHookStubs,
      codeSignArtifacts: codeSignArtifacts
    } = await import("B:/~BUN/root/chunk-c4c2pzsz.js");
    configureGitHookStubs_2 = coauthorHookStubs(i.baseDir), configureGitSigningArtifacts = codeSignArtifacts(i.baseDir, process.execPath);
  }
  let gitProxyGlobalConfigSnapshot, gitProxyCredHelper;
  if (i.useAnthropicGitProxy) try {
    let {
      configureGitProxyCredential: configureGitProxyCredential,
      GIT_PROXY_CRED_HELPER_CONTENT: ee,
      gitProxyCredHelperPath: gitProxyCredHelperPath
    } = await import("B:/~BUN/root/chunk-c4c2pzsz.js");
    await configureGitProxyCredential({
      baseDir: i.baseDir,
      apiBaseUrl: i.apiUrl,
      onStatus: onStatus_10
    }), gitProxyGlobalConfigSnapshot = await Ud(gitProxyGlobalConfigPath, "utf-8").catch(() => ""), gitProxyCredHelper = {
      path: gitProxyCredHelperPath(i.baseDir),
      content: ee
    };
  } catch (error) {
    onStatus_10(`[runner:fatal] --use-anthropic-git-proxy failed: ${d(error)}. Check git is on PATH and ~/.gitconfig is writable.`), await flushLogSink(), process.exit(1);
  }
  let config_3 = {
      apiUrl: i.apiUrl,
      capacity: i.capacity,
      baseDir: i.baseDir,
      logLevel: i.logLevel,
      gitSshRewriteHosts: i.gitSshRewriteHosts,
      gitHostRewrites: i.gitHostRewrites,
      useAnthropicGitProxy: i.useAnthropicGitProxy ? i.apiUrl : void 0,
      gitProxyGlobalConfigPath: gitProxyGlobalConfigPath,
      gitProxyGlobalConfigSnapshot: gitProxyGlobalConfigSnapshot,
      gitProxyCredHelper: gitProxyCredHelper,
      configureGitHookStubs: configureGitHookStubs_2,
      configureGitSigningArtifacts: configureGitSigningArtifacts,
      operatorGitSnapshot: operatorGitSnapshot_2,
      hookGitPrograms: hookGitPrograms_2,
      hookGitLegacyParams: hookGitLegacyParams,
      configureGit: i.configureGit,
      pushOutcomeOnRelease: i.pushOutcomeOnRelease,
      trustWorkspace: i.trustWorkspace,
      removeSessionState: i.removeSessionState,
      confineRepoSettings: i.confineRepoSettings,
      serverAutoModeLists: i.serverAutoModeLists
    },
    healthState = {
      runnerId: runnerId_2,
      activeSessions: 0,
      sessionsStarted: new Map([[oCe, 0]]),
      sessionsCompleted: new Map([[oCe, 0]]),
      sessionsFailed: new Map([[oCe, 0]]),
      sessionsInterrupted: new Map([[oCe, 0]]),
      sessionClientPlatform: new Map(),
      lastPollAt: 0,
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      clientLabel: clientLabel,
      capacity: i.capacity,
      claimVisibility: new Map(),
      lockedAccountEmail: null,
      initializingSessions: 0,
      sessionInitErrors: 0,
      sessionInitDurations: Iqo(),
      sessionStartHookErrors: 0,
      pollErrors: Ahn(),
      sessionIdle: new Map()
    };
  En.current = healthState;
  let moveWatch_2 = Ui({
      clock: clock_4,
      onStatus: onStatus_10
    }),
    q = i.healthPort > 0 ? xi({
      baseUrl: i.apiUrl,
      getRunnerToken: () => tokenState_2.runnerToken,
      getRetireAtMs: () => Wd(),
      isStopping: () => It !== "running" || !Cn,
      isHeldOff: () => moveWatch_2?.isHeldOff() ?? !1,
      onGranted: C => moveWatch_2?.onGranted(C),
      clock: clock_4,
      onStatus: onStatus_10,
      onDebug: onDebug_9
    }) : void 0,
    fe = i.healthPort > 0 ? Lqo(i.healthPort, healthState, onStatus_10, q, void 0) : void 0,
    hostConfig_2 = await Ai(onStatus_10, {
      storage: i.hostConfigSnapshot === "disk" ? {
        mode: "disk",
        baseDir: i.baseDir
      } : {
        mode: "memory"
      }
    }),
    governedGitConfigSeed_2 = await ld(onDebug_9);
  try {
    await eh({
      apiClient: apiClient_4,
      runnerId: runnerId_2,
      tokenState: tokenState_2,
      config: config_3,
      execPath: execPath_5,
      execArgs: execArgs_3,
      startedFromWorkOrder: ts(poolSecret),
      onDebug: onDebug_9,
      onStatus: onStatus_10,
      flushLogSink: flushLogSink,
      healthState: healthState,
      hostConfig: hostConfig_2,
      governedGitConfigSeed: governedGitConfigSeed_2,
      debugTokenDir: i.debugTokenDir,
      startCommandPhases: startCommandPhases,
      moveWatch: moveWatch_2,
      ...!1,
      deferShutdown: {
        signal: abortController_4.signal,
        maxMs: maxMs_2,
        requestDrain: C => {
          if (It !== "draining") vt(C, "loop");
        },
        onClosed: () => {
          Cn = !1;
        }
      }
    }, abortController_3.signal);
  } finally {
    if (Wn.cancelAll(), fe?.close(), moveWatch_2?.stop(), hostConfig_2?.snapshot?.storage.mode === "disk") {
      let snapshotDir_3 = hostConfig_2.snapshot.storage.snapshotDir;
      await ml(us(snapshotDir_3, {
        recursive: !0,
        force: !0
      }), 1e4, `[runner:exit] remove host config snapshot ${snapshotDir_3}`).catch(() => {});
    }
    if (de) await ml(de.close(), 2000, "[runner:exit] egress proxy close").catch(() => {});
    process.removeListener("SIGTERM", kn), process.removeListener("SIGINT", vn), await flushLogSink();
  }
}
function jd(e) {
  return e instanceof Error && "isAuthFailure" in e && e.isAuthFailure === !0;
}
function Qf(e) {
  if (!e.includes("lock_to_account_id")) return "";
  let n = "lock_to_account_id is the value of --lock-to-account / SELF_HOSTED_RUNNER_LOCK_TO_ACCOUNT";
  if (e.includes("is not a member") || e.includes("must be a user_")) return ` (${n}; it must be the user_<id> or email address of a member of the organization that owns this environment)`;
  return ` (${n})`;
}
async function eh(e, signal_7) {
  let {
      apiClient: apiClient_5,
      tokenState: tokenState_3,
      config: config_4,
      execPath: execPath_6,
      execArgs: execArgs_4,
      startedFromWorkOrder: startedFromWorkOrder,
      onDebug: onDebug_10,
      onStatus: onStatus_11,
      healthState: healthState_2
    } = e,
    runnerId_3 = e.runnerId,
    E = e.retireAtMsOverride ?? Wd(),
    T = startedFromWorkOrder ? `Draining and exiting. ${js}` : "Draining and exiting for clean restart.",
    U = startedFromWorkOrder ? js : "Orchestrator will restart.",
    v = new Map(),
    N = St("SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS") || as,
    postSessionHookTimeoutMs = St("SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS") || Wr,
    D = xs(),
    M = Mf(),
    ie = !1,
    ce = !1,
    ye = e.readDrainMarkerOverride ?? Nf,
    ge = e.drainMarkerReadTimeoutMs ?? $f,
    be = Promise.resolve(void 0),
    Se = !1,
    de = () => {
      if (Se || M === void 0) return;
      Se = !0, be = ml(ye(M), ge, "drain-marker read").then(Q => {
        if (Q.present) onStatus_11(`[runner] drain: host-drain marker ${M} present` + (Q.unreadable !== void 0 ? ` but unreadable (${Q.unreadable}) \u2014 reporting a host drain with no deadline` : Q.deadlineMs !== void 0 ? ` (host deadline ${new Date(Q.deadlineMs).toISOString()})` : " (no deadline on its first line)"));
        return Q;
      }, Q => {
        onStatus_11(`[runner] drain: host-drain marker ${M} could not be read (${d(Q)}) \u2014 reporting a plain shutdown signal`);
        return;
      }).catch(() => {
        return;
      });
    };
  if (signal_7.aborted) de();else signal_7.addEventListener("abort", de, {
    once: !0
  });
  let Z,
    Ae = new Set(),
    me = new Map(),
    De = new Set(),
    Ce = 0,
    Lt = 0,
    et,
    tt,
    zt = new Set(),
    canonicalLocks_2 = new Map(),
    spawnedSessionIds_2 = new Set(),
    It = 0,
    Cn = Date.now(),
    En = !1,
    pn = !0,
    sn = 0,
    $t = Date.now(),
    startCommandPhases_2 = e.startCommandPhases,
    takeStartCommandPhases_2 = () => {
      let Q = startCommandPhases_2;
      return startCommandPhases_2 = void 0, Q;
    },
    vn = !1,
    qt = null,
    Wn = St("SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS"),
    wn = St("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS"),
    on = St("SELF_HOSTED_RUNNER_SESSION_IDLE_MS"),
    yr = Ga(),
    Et = e.retireReleaseRetryMsOverride ?? Gf,
    Fn = e.retireDeferredGraceMsOverride ?? zs,
    yt = !1,
    Zt,
    an,
    deferShutdown = e.deferShutdown,
    $n = deferShutdown !== void 0 && deferShutdown.maxMs > 0,
    Pn = deferShutdown?.ceilingGraceMsOverride ?? Math.max(D, Fn),
    xt = deferShutdown?.ceilingGraceMsOverride !== void 0 ? Math.max(10, Math.floor(deferShutdown.ceilingGraceMsOverride / 10)) : 1000,
    yn = deferShutdown?.ceilingGraceMsOverride ?? ar,
    dn,
    ve,
    ue = !1,
    ut = () => F([...v.entries()], ([Q, re]) => !re.controller.signal.aborted && !fe.has(Q)),
    un = () => F([...v.entries()], ([Q, re]) => !re.controller.signal.aborted && fe.has(Q) && !$e.has(Q)),
    q = () => an === "shutdown" ? "[runner:exit] shutdown requested and every attached session has been released \u2014 exiting." : "[runner:exit] retire time passed and no active sessions \u2014 exiting before the host kills this runner.",
    fe = new Set(),
    Ue = new Map(),
    $e = new Map(),
    C = new Set(),
    ee = () => {
      let Q = v.size;
      for (let re of $e.keys()) if (!v.has(re)) Q++;
      for (let re of C) if (!v.has(re) && !$e.has(re)) Q++;
      return Q;
    },
    pe = new Set(),
    Qe = 10,
    Ke = e.sseHintsEnabledOverride ?? Fe(process.env.CCR_SHR_SSE_HINTS),
    te = new jo(),
    Ht = e.moveWatch?.moved.subscribe(() => te.wake("LOCAL")),
    Ye = e.openWorkHintsStream ?? Md,
    Jt = e.warmupReportEnabledOverride ?? !1,
    Rn = e.readWarmupComplete ?? Na,
    Pt = !1,
    Tn;
  (() => {
    if (Ke) onDebug_10("[runner:hints] CCR_SHR_SSE_HINTS enabled \u2014 opening stream"), Tn = Ye({
      baseUrl: config_4.apiUrl,
      runnerId: runnerId_3,
      tokenState: tokenState_3,
      onWake: () => te.wake("SSE"),
      onDebug: onDebug_10,
      signal: signal_7
    });
  })();
  let Kn = !1,
    Rr = !1,
    gn = () => {
      Zt = void 0;
      let Q = E - Date.now();
      if (Q > 0) {
        Zt = setTimeout(gn, Math.min(Q, 2147483647));
        return;
      }
      yt = !0, an = "retire";
      let re = C.size;
      if (C.clear(), g("self_hosted_retire"), onStatus_11(`[runner:retire] retire time reached \u2014 releasing ${v.size} active session(s), refusing new work; exiting once the slots are empty`), re > 0) onStatus_11(`[runner:retire] ${re} declined session(s) held for re-spawn dropped at the retire deadline \u2014 requeued at exit instead`);
      for (let rt of v.values()) rt.releaseForRetire();
      te.wake("LOCAL");
    },
    Mn = () => {
      if (!$n || deferShutdown === void 0) return;
      de();
      let Q = typeof deferShutdown.signal.reason === "number" ? deferShutdown.signal.reason : Date.now();
      if (dn === void 0) {
        let re = Q + deferShutdown.maxMs - Date.now();
        dn = setTimeout(mn, Math.min(Math.max(0, re), 2147483647));
      }
      if (g("self_hosted_defer_shutdown"), yt) {
        onStatus_11("[runner:shutdown] shutdown requested while already retiring \u2014 sessions are already being released");
        return;
      }
      yt = !0, an = "shutdown", onStatus_11(`[runner:shutdown] shutdown requested \u2014 deferring drain: ${v.size} active session(s), refusing new work; ` + (on > 0 ? `each is released once its user has been idle ${formatDelay(on, {
        hideTrailingZeros: !0
      })} (--release-idle-session-min) or when it ends` : "none is released early (--release-idle-session-min is not set)") + `; ${formatDelay(deferShutdown.maxMs, {
        hideTrailingZeros: !0
      })} after the signal every session still attached is released at once; exiting as soon as the slots are empty`), te.wake("LOCAL");
    },
    mn = () => {
      if (dn = void 0, deferShutdown === void 0 || signal_7.aborted) return;
      ue = !0;
      let Q = C.size;
      if (Q > 0) C.clear(), te.wake("LOCAL");
      let re = ut(),
        rt = () => {
          if (Q > 0) onStatus_11(`[runner:shutdown] ${Q} declined session(s) held for re-spawn dropped at the ceiling \u2014 requeued at exit instead`);
        };
      if (re === 0 && un() === 0) {
        rt();
        return;
      }
      g("self_hosted_defer_ceiling"), onStatus_11(`[runner:shutdown] defer ceiling reached (${formatDelay(deferShutdown.maxMs, {
        hideTrailingZeros: !0
      })}) \u2014 ` + (re > 0 ? `releasing the remaining ${re} session(s) now` : `waiting on ${un()} in-flight release(s)`) + `; any still attached after ${formatDelay(Pn + yn, {
        hideTrailingZeros: !0
      })} will be drained`), rt();
      for (let ft of v.values()) ft.releaseForShutdown();
      let Bt = yn,
        Ut = () => {
          if (ve = void 0, signal_7.aborted) return;
          let ft = ut(),
            Wt = un();
          if (ft === 0 && Wt === 0) return;
          if (Bt > 0) {
            Bt -= xt, ve = setTimeout(Ut, xt);
            return;
          }
          onStatus_11(`[runner:shutdown] ${ft + Wt} session(s) still attached after the post-ceiling grace \u2014 falling back to a drain`), deferShutdown.requestDrain("post-ceiling grace expired with sessions still attached");
        };
      ve = setTimeout(Ut, Pn);
    };
  if (E > 0) {
    let Q = E - Date.now();
    onStatus_11(Q > 0 ? `[runner:retire] retire time set for ${new Date(E).toISOString()} (in ${formatDelay(Q)}) \u2014 sessions will be released and the runner will exit then` : `[runner:retire] retire time ${new Date(E).toISOString()} is already in the past \u2014 refusing work and exiting`), gn();
  }
  if ($n && deferShutdown !== void 0) if (deferShutdown.signal.aborted) Mn();else deferShutdown.signal.addEventListener("abort", Mn, {
    once: !0
  });
  try {
    while (!signal_7.aborted) {
      if (yt && ee() === 0) {
        onStatus_11(q());
        return;
      }
      if (wn === 0 && vn && ee() === 0) {
        onStatus_11(`[runner:exit] account workload drained \u2014 exiting (grace=0, no re-poll). ${U}`);
        return;
      }
      let Q = yt ? 0 : Math.max(0, config_4.capacity - ee()),
        re = te.consume();
      if (re === "SSE") {
        if (await Y(Math.floor(Math.random() * Pd), signal_7), signal_7.aborted) break;
      }
      let rt = Cn;
      if (Jt && !Pt && !vn && Q > 0) {
        try {
          Pt = await Rn();
        } catch {
          Pt = !1;
        }
        if (Pt) onStatus_11("[runner:poll] warm-up complete (first network prefetch succeeded) \u2014 reporting warmup_complete=true from this poll on");
      }
      let Bt;
      try {
        let R = await apiClient_5.pollWork(tokenState_3.runnerToken, runnerId_3, Q, signal_7, Ke ? $d[re] : void 0, Jt ? Pt : void 0);
        Bt = R.assignment_ids, me.clear();
        for (let we of R.session_assignments ?? []) {
          if (!we || typeof we.session_id !== "string" || !we.session_id) continue;
          if (typeof we.client_platform === "string" && we.client_platform && aWr.test(we.client_platform)) me.set(we.session_id, we.client_platform);else if (typeof we.client_platform === "string" && we.client_platform && !De.has(we.session_id)) {
            if (De.size > 256) De.clear();
            De.add(we.session_id), onDebug_10(`[runner:session] assignment client_platform rejected by the charset gate (label falls back to "unknown"): "${yWt(we.client_platform)}" (len=${we.client_platform.length}, session=${yWt(we.session_id)})`);
          }
        }
        if (et = R.lease_expires_at, tt = R.suggested_poll_interval, Cn = Date.now(), Ce = 0, Lt = 0, pn || En) g("self_hosted_poll"), pn = !1, En = !1;
        if (healthState_2) healthState_2.lastPollAt = Cn, healthState_2.activeSessions = v.size;
      } catch (error) {
        if (signal_7.aborted) break;
        let we = ISt(error);
        if (healthState_2) healthState_2.pollErrors[we]++;
        let Ve = error instanceof Error ? error.message : String(error);
        if (jd(error)) {
          m("self_hosted_poll", "self_hosted_poll_auth_failed"), onStatus_11(`[runner:fatal] poll auth failed \u2014 token expired or revoked. ${T}`), ce = !0;
          break;
        }
        if (bo(error)) {
          if (Ce++, Ce >= 3) {
            m("self_hosted_poll", "self_hosted_poll_runner_not_found"), onStatus_11(`[runner:fatal] poll returned 404 ${Ce}\xD7 \u2014 runner record gone server-side. ${T}`), ce = !0;
            break;
          }
          let ze = Math.min(Df, Lf * 2 ** (Ce - 1)),
            ht = Math.floor(Math.random() * ze);
          onStatus_11(`Poll failed: ${Ve} \u2014 confirming 404 (${Ce}/3), retrying in ${(ht / 1000).toFixed(1)}s`), await Y(e.pollIntervalOverrideMs ?? ht, signal_7);
          continue;
        }
        if (Ce = 0, pn || !En) p("self_hosted_poll", "self_hosted_poll_failed"), pn = !1, En = !0;
        let Ge;
        if (we === "timeout" || we === "transport") Lt++, Ge = nh(Lt, et, tt);else if (we === "5xx") Ge = zd(Xs, et, Uf, tt);else Ge = Xs;
        onStatus_11(`Poll failed: ${Ve} \u2014 retrying in ${(Ge / 1000).toFixed(1)}s`), await Y(e.pollIntervalOverrideMs ?? Ge, signal_7);
        continue;
      }
      let Ut = Bt.filter(item => !Ae.has(item));
      if (Ut.length === 0 && ee() === 0) {
        qt ??= Date.now();
        let R = Date.now() - qt;
        if (vn) {
          if (R >= wn) {
            onStatus_11(yt ? q() : wn > 0 ? `[runner:exit] account workload drained ${Math.round(R / 1000)}s ago (grace ${Math.round(wn / 1000)}s) \u2014 exiting for fresh disk. ${U}` : `[runner:exit] account workload drained \u2014 exiting for fresh disk. ${U}`);
            return;
          }
        } else if (Wn > 0 && R >= Wn) {
          onStatus_11(`[runner:exit] idle ${Math.round(R / 60000)}min with no work \u2014 exiting for autoscaler scale-down`);
          return;
        }
      } else qt = null;
      let Wt = wn === 0 && vn && ee() === 0;
      if (Ut.length > 0) vn = !0;
      let bn = new Set(Bt);
      for (let [R, we] of v) if (!bn.has(R)) onStatus_11(`[runner:session] ${R} deassigned by server (deleted/archived/requeued) \u2014 aborting child`), we.controller.abort(fe.has(R) ? "idle-release" : "deassign");
      for (let R of fe) if (!bn.has(R)) fe.delete(R);
      for (let R of Ue.keys()) if (!bn.has(R)) Ue.delete(R);
      for (let R of C) if (!bn.has(R) || Ae.has(R)) C.delete(R);
      for (let R of Ut) {
        if (v.has(R)) {
          onDebug_10(`[runner:main] Ignoring duplicate assignment for ${R}`);
          continue;
        }
        if (Ae.has(R)) {
          C.delete(R), onDebug_10(`[runner:main] Ignoring stuck session ${R} \u2014 already failed, not re-spawning`);
          continue;
        }
        if (zt.has(R)) {
          onDebug_10(`[runner:main] Ignoring session ${R} \u2014 failure report in-flight`);
          continue;
        }
        if (fe.has(R) || $e.has(R)) {
          onDebug_10(`[runner:main] Ignoring released session ${R} \u2014 awaiting server deassign (or its in-flight release to settle)`);
          continue;
        }
        let we = yt && an === "shutdown" && !ue;
        if (yt && !we) {
          let y = an === "shutdown" ? `[runner:shutdown] not starting session ${R} \u2014 shutdown requested and the defer ceiling has passed; it will be requeued when this runner exits` : `[runner:retire] not starting session ${R} \u2014 retire time has passed; it will be requeued when this runner exits`;
          if (pe.has(R)) onDebug_10(y);else pe.add(R), onStatus_11(y);
          C.delete(R);
          continue;
        }
        if (we) onStatus_11(C.has(R) ? `[runner:shutdown] ${R} re-spawning after its declined release to serve the pending user event; it is released again like the others (its idle clock, or the ceiling)` : `[runner:shutdown] ${R} was assigned after the shutdown signal \u2014 serving it; it is released like the others (its idle clock, or the ceiling)`);
        C.delete(R), sn++, onStatus_11(`Picked up session ${R} (${v.size + 1}/${config_4.capacity} active)`);
        let Ve = new AbortController(),
          Ge = R.replace(/^cse_/, "session_"),
          clientPlatform_3 = me.get(R) ?? oCe;
        healthState_2?.sessionIdle.set(Ge, null), healthState_2?.sessionClientPlatform.set(Ge, clientPlatform_3);
        let pickedUpAt = Date.now();
        healthState_2?.claimVisibility?.set(Ge, {
          pickedUpAt: pickedUpAt
        });
        let standbyIdleMs_2 = v.size === 0 ? pickedUpAt - $t : void 0;
        if (healthState_2) {
          for (let y of [healthState_2.sessionsStarted, healthState_2.sessionsCompleted, healthState_2.sessionsFailed, healthState_2.sessionsInterrupted]) if (!y.has(clientPlatform_3)) y.set(clientPlatform_3, 0);
        }
        let Pe,
          Yt = !1,
          mt = !1,
          X = !1,
          he = y => {
            X = y;
            let H = v.get(R);
            if (H !== void 0) H.turnInFlight = y;
            Z?.();
          },
          P = !1,
          _e,
          Ee = !1,
          _t = "retire",
          Sn = () => _t === "shutdown" ? "defer ceiling passed" : _t === "max-age" ? "max session age reached" : "retire time passed",
          Tr = () => _t === "shutdown" ? "while shutting down" : _t === "max-age" ? "while at max session age" : "while retiring",
          Jn = () => _t === "shutdown" ? "shutdown grace" : _t === "max-age" ? "max-session-age grace" : "retire grace",
          Nn = 0,
          dr = 0,
          _n,
          cr = () => {
            if (_n !== void 0) clearTimeout(_n), _n = void 0;
          },
          br = !1,
          lr = () => mt || Ve.signal.aborted || br,
          Qn,
          qs = [1800000, 7200000, 28800000],
          Yn = () => {
            if (Qn !== void 0) clearTimeout(Qn), Qn = void 0;
          },
          er = (y, H) => {
            let Oe = y?.liveTasks ?? 0,
              Mt = (y?.liveTaskIds ?? []).slice(0, 5).join(","),
              se = y?.wakeupInMs !== void 0 ? `wakeup pending in ${formatDelay(y.wakeupInMs)}` : void 0,
              qe = y?.bgResultAwaitingFollowup ? "finished background task awaiting the follow-up turn" : void 0,
              He = [Oe > 0 ? `${Oe} background task(s) live [${Mt}${Oe > 5 ? ",\u2026" : ""}]` : void 0, se, qe].filter(Boolean),
              Ze = He.length > 0 ? He.join(" / ") : "planned resumption",
              At = H > 0 ? " still" : "";
            if (onStatus_11(`[runner:session] ${R} turn ended with ${Ze} \u2014 idle clock${At} deferred`), H < qs.length) Qn = setTimeout(er, qs[H], y, H + 1);
          },
          onSessionActivity_2 = (y, H) => {
            if (y === "startup" && H?.childAlive === !0 && _e !== "startup") {
              onDebug_10(`[runner:session] ${R} ignoring child output as a startup-clock restart: the startup phase is over`);
              return;
            }
            if (Pe !== void 0) clearTimeout(Pe), Pe = void 0;
            if (!mt && healthState_2) if (y === "turn-end" || y === "awaiting-action" && !P) {
              if (healthState_2.sessionIdle.get(Ge) === null) healthState_2.sessionIdle.set(Ge, Date.now());
            } else healthState_2.sessionIdle.set(Ge, null);
            if (y === "init-observed") {
              if (Ee && _e !== void 0) onSessionActivity_2(_e);
              return;
            }
            if (y === "activity") {
              he(!0), P = !1, _e = void 0, Nn = 0, Yn(), cr(), Ue.delete(R);
              return;
            }
            if (y === "turn-end-deferred") {
              if (he(!1), P = !0, _e = void 0, Yn(), on > 0) er(H, 0);
              if (Ee) Ar();
              return;
            }
            if (y === "awaiting-action" && P) {
              _e = void 0;
              return;
            }
            Yn(), cr(), he(!1), P = !1, _e = y;
            let Oe = Ee ? Nn === 0 ? 0 : Et : y === "startup" ? yr : on,
              Mt = Ee ? Et : Oe,
              se = () => Ee ? Nn === 0 ? "now" : `in ${formatDelay(Et)}` : `in ${formatDelay(Mt)}`,
              qe = Ee ? Sn() : y === "startup" ? `no child output for ${formatDelay(Oe)}` : y === "awaiting-action" ? `awaiting user action ${formatDelay(Oe)}` : `user idle ${formatDelay(Oe)}`;
            if (!Ee && Oe <= 0) return;
            if (lr()) return;
            if (y === "awaiting-action" && H !== void 0 && (H.liveTasks > 0 || H.wakeupInMs !== void 0 || H.bgResultAwaitingFollowup === !0)) {
              let He = H.liveTaskIds.slice(0, 5).join(","),
                Ze = [H.liveTasks > 0 ? `${H.liveTasks} background task(s) live [${He}${H.liveTasks > 5 ? ",\u2026" : ""}]` : void 0, H.wakeupInMs !== void 0 ? `wakeup pending in ${formatDelay(H.wakeupInMs)}` : void 0, H.bgResultAwaitingFollowup === !0 ? "finished background task awaiting the follow-up turn" : void 0].filter(Boolean);
              onStatus_11(`[runner:session] ${R} awaiting user action overrides deferral (${Ze.join(" / ")}) \u2014 idle clock armed`);
            }
            if (!Ee) {
              let He = y === "startup" && H?.childAlive === !0,
                Ze = `[runner:session] ${R} idle clock armed (${He ? "startup, restarted by child output" : y}): releases in ${formatDelay(Oe, {
                  hideTrailingZeros: !0
                })} at ${new Date(Date.now() + Oe).toISOString()} unless new activity arrives`;
              if (!He) onStatus_11(Ze);else if (Yt) onDebug_10(Ze);else Yt = !0, onStatus_11(`${Ze} (later restarts are logged at debug)`);
            }
            if (Ee && Nn === 0 && v.get(R)?.postTurnSettling === !0) {
              onStatus_11(`[runner:session] ${R} ${Sn()} \u2014 release held until the finished turn has been reported to the server (at most SELF_HOSTED_RUNNER_POST_TURN_SETTLE_MS, default ${is / 1000}s)`);
              return;
            }
            Pe = setTimeout(() => {
              if (Pe = void 0, lr()) return;
              if (fe.has(R)) return;
              if (X) {
                onStatus_11(`[runner:session] ${R} idle timer fired mid-turn \u2014 skipping release (stdout-tee likely broken)`);
                return;
              }
              if (Ee) Nn++;
              if (onStatus_11(`[runner:session] ${R} ${qe} \u2014 releasing`), fe.add(R), y !== "awaiting-action") {
                let Ze = v.get(R)?.liveBgTasks ?? 0,
                  en = (v.get(R)?.task ?? Promise.resolve()).then(() => apiClient_5.releaseSession(tokenState_3.runnerToken, R)).then(({
                    released: released
                  }) => {
                    if ($e.delete(R), fe.delete(R), Ue.delete(R), yt) te.wake("LOCAL");
                    if (released) {
                      if (onStatus_11(`[runner:session] ${R} released after post-session hook \u2014 parked server-side`), X || P || Ze > 0) p("self_hosted_release_session", "released_true_mid_work");else g("self_hosted_release_session");
                      return;
                    }
                    if (an === "shutdown") {
                      let cs = !ue;
                      if (cs) C.add(R);
                      onStatus_11(cs ? `[runner:session] ${R} released=false after post-session hook (pending user event) while shutting down \u2014 the next poll re-spawns it to serve that event (its --release-idle-session-min window, if set, starts over; otherwise it stays until the ceiling)` : `[runner:session] ${R} released=false after post-session hook (pending user event) after the defer ceiling \u2014 not re-spawned; it is requeued, snapshot complete, when this runner exits`), p("self_hosted_release_session", "released_false_shutting_down");
                      return;
                    }
                    let Hn = Ee && _t === "max-age";
                    onStatus_11(yt ? `[runner:session] ${R} released=false after post-session hook (pending user event) while retiring \u2014 not re-spawned; it is requeued, snapshot complete, when this runner exits` : `[runner:session] ${R} released=false after post-session hook (pending user event)${Hn ? " at max session age" : ""} \u2014 respawns on the next poll, or is requeued by this runner's exit if it is draining (grace=0) or retiring`), p("self_hosted_release_session", yt ? "released_false_retiring" : Hn ? "released_false_max_age" : "released_false");
                  }).catch(Ot => {
                    if ($e.delete(R), fe.delete(R), an === "shutdown" && !ue) C.add(R);
                    if (yt) te.wake("LOCAL");
                    let Hn = Ot instanceof Error ? Ot.message : String(Ot);
                    onStatus_11(`[runner:session] ${R} ordered release failed after the post-session hook: ${Hn} \u2014 keeping session; respawns on the next poll, or is requeued by this runner's exit if it is draining (grace=0) or retiring`), m("self_hosted_release_session", "rpc_failed");
                  });
                $e.set(R, en), Ve.abort("idle-release");
                return;
              }
              let He = (Ze, At) => {
                let en = lr(),
                  Ot = !en && !X && !P;
                if (onStatus_11(`[runner:session] ${R} ${Ze} \u2014 ${en ? "not retried, the session is ending on this runner" : `keeping session${Ot ? `, ${At}` : ""}`}`), Ot) onSessionActivity_2(y);
              };
              apiClient_5.releaseSession(tokenState_3.runnerToken, R).then(({
                released: released_2
              }) => {
                if (dr = 0, released_2) {
                  if (mt || Ve.signal.aborted) return;
                  Ue.delete(R), onStatus_11(`[runner:session] ${R} released \u2014 aborting child`);
                  let en = v.get(R)?.liveBgTasks ?? 0;
                  if (Ve.abort("idle-release"), X || P || en > 0) p("self_hosted_release_session", "released_true_mid_work");else g("self_hosted_release_session");
                  return;
                }
                if (mt || Ve.signal.aborted) return;
                if (fe.delete(R), Ee) {
                  let en = y === "awaiting-action" ? "queued event behind the parked prompt" : "pending user event";
                  p("self_hosted_release_session", _t === "shutdown" ? y === "awaiting-action" ? "released_false_shutting_down_parked" : "released_false_shutting_down" : _t === "max-age" ? y === "awaiting-action" ? "released_false_max_age_parked" : "released_false_max_age" : y === "awaiting-action" ? "released_false_retiring_parked" : "released_false_retiring"), He(`release declined (${en}) ${Tr()}`, `retrying ${se()}`);
                  return;
                }
                if (y === "awaiting-action") {
                  p("self_hosted_release_session", "released_false_parked"), He("released=false while parked at prompt (queued event behind prompt)", "re-arming");
                  return;
                }
                let At = (Ue.get(R) ?? 0) + 1;
                if (Ue.set(R, At), At >= 3) {
                  Ue.delete(R), onStatus_11(`[runner:session] ${R} released=false ${At}x \u2014 aborting as backstop`), Ve.abort(), m("self_hosted_release_session", "released_false_backstop");
                  return;
                }
                if (onStatus_11(`[runner:session] ${R} released=false (pending user event) \u2014 keeping session${X || P ? "" : ", re-arming"}`), p("self_hosted_release_session", "released_false"), !X && !P) onSessionActivity_2?.(y);
              }).catch(Ze => {
                fe.delete(R), dr++;
                let At = Ze instanceof Error ? Ze.message : String(Ze);
                m("self_hosted_release_session", "rpc_failed"), He(`releaseSession failed: ${At}${dr > 1 ? ` (${dr} failures in a row)` : ""}`, `retrying ${se()}`);
              });
            }, Oe);
          },
          Ar = () => {
            if (lr() || !P) return;
            let y = v.get(R)?.liveBgTasks ?? 0;
            if (y === 0 && v.get(R)?.bgResultPendingFollowup === !0) {
              onStatus_11(`[runner:session] ${R} ${Sn()} while a finished background task's follow-up turn is pending \u2014 waiting for it before releasing`);
              return;
            }
            if (y === 0) {
              onStatus_11(`[runner:session] ${R} ${Sn()} with only perpetual monitor task(s) / a scheduled wakeup holding the turn \u2014 releasing now`), P = !1, cr(), onSessionActivity_2("turn-end");
              return;
            }
            if (_n !== void 0) return;
            onStatus_11(`[runner:session] ${R} ${Sn()} with ${y} background task(s) live \u2014 allowing ${formatDelay(Fn)} to finish before releasing`), _n = setTimeout(() => {
              if (_n = void 0, lr() || !P) return;
              let H = v.get(R)?.liveBgTasks ?? 0,
                Oe = v.get(R)?.bgResultPendingFollowup === !0;
              if (H === 0 && Oe) {
                onStatus_11(`[runner:session] ${R} ${Jn()} elapsed but a finished background task's follow-up turn is pending \u2014 waiting for it before releasing`);
                return;
              }
              onStatus_11(H === 0 ? `[runner:session] ${R} background work finished during the ${Jn()}; only perpetual monitor task(s) / a scheduled wakeup still hold the turn \u2014 releasing now` : `[runner:session] ${R} ${H} background task(s) still live after the ${Jn()} \u2014 releasing anyway (a parked session beats a lost worker)`), P = !1, onSessionActivity_2("turn-end");
            }, Fn);
          },
          Or = y => {
            if (mt || Ve.signal.aborted) return;
            if (br) {
              onDebug_10(`[runner:session] ${R} ${y} release request while the child is being terminated \u2014 ignored`);
              return;
            }
            if (Ee) {
              onDebug_10(`[runner:session] ${R} ${y} release request adds nothing to the standing ${_t} request \u2014 ignored`);
              return;
            }
            if (Ee = !0, _t = y, _e === void 0) {
              if (P && !X) {
                Ar();
                return;
              }
              let H = X ? "mid-turn \u2014 releasing as soon as the current turn finishes" : "before the child reported an idle state \u2014 releasing on its first idle transition";
              onStatus_11(`[runner:session] ${R} ${Sn()} ${H}`);
              return;
            }
            onStatus_11(`[runner:session] ${R} ${Sn()} while idle \u2014 releasing now`), onSessionActivity_2(_e);
          },
          releaseForRetire = () => Or("retire"),
          releaseForShutdown = () => Or("shutdown"),
          onMaxLifetime_3 = () => {
            if (mt || Ve.signal.aborted) return "kill";
            let y = _e !== void 0 || P && !X ? "release" : "wait";
            return g("self_hosted_max_lifetime", {
              decision: c(y)
            }), Or("max-age"), y;
          },
          onChildTerminating_2 = () => {
            if (br) return;
            br = !0;
            let y = Pe !== void 0 || _n !== void 0;
            if (Pe !== void 0) clearTimeout(Pe), Pe = void 0;
            if (cr(), y || Ee) onDebug_10(`[runner:session] ${R} child is being terminated \u2014 release clock stood down`);
          },
          task = (e.handleSession ?? gd)(R, {
            apiClient: apiClient_5,
            getRunnerToken: () => tokenState_3.runnerToken,
            baseDir: config_4.baseDir,
            execPath: execPath_6,
            execArgs: execArgs_4,
            capacity: config_4.capacity,
            healthPort: healthState_2?.listeningOn,
            gitSshRewriteHosts: config_4.gitSshRewriteHosts,
            gitHostRewrites: config_4.gitHostRewrites,
            useAnthropicGitProxy: config_4.useAnthropicGitProxy,
            gitProxyGlobalConfigPath: config_4.gitProxyGlobalConfigPath,
            gitProxyGlobalConfigSnapshot: config_4.gitProxyGlobalConfigSnapshot,
            gitProxyCredHelper: config_4.gitProxyCredHelper,
            configureGitHookStubs: config_4.configureGitHookStubs,
            configureGitSigningArtifacts: config_4.configureGitSigningArtifacts,
            operatorGitSnapshot: config_4.operatorGitSnapshot,
            hookGitPrograms: config_4.hookGitPrograms,
            hookGitLegacyParams: config_4.hookGitLegacyParams,
            hostConfig: e.hostConfig,
            governedGitConfigSeed: e.governedGitConfigSeed,
            onDebug: onDebug_10,
            onStatus: onStatus_11,
            onSessionActivity: onSessionActivity_2,
            onMaxLifetime: onMaxLifetime_3,
            onChildTerminating: onChildTerminating_2,
            clientPlatform: clientPlatform_3,
            onChildLifecycle: healthState_2 ? y => {
              let H = y === "spawned" ? healthState_2.sessionsStarted : y === "completed" ? healthState_2.sessionsCompleted : y === "failed" ? healthState_2.sessionsFailed : healthState_2.sessionsInterrupted;
              H.set(clientPlatform_3, (H.get(clientPlatform_3) ?? 0) + 1);
            } : void 0,
            onInitPhase: healthState_2 ? y => {
              switch (y.kind) {
                case "start":
                  healthState_2.initializingSessions++;
                  break;
                case "end":
                  healthState_2.initializingSessions--, Mqo(healthState_2.sessionInitDurations, y.durationSec);
                  break;
                case "exit-before-init":
                  if (healthState_2.initializingSessions--, y.failed) healthState_2.sessionInitErrors++;
                  break;
                default:
              }
            } : void 0,
            onSessionStartHookError: healthState_2 ? () => {
              healthState_2.sessionStartHookErrors++;
            } : void 0,
            standbyIdleMs: standbyIdleMs_2,
            takeStartCommandPhases: takeStartCommandPhases_2,
            getHealthzClaimVisibleMs: () => healthState_2?.claimVisibility?.get(Ge)?.visibleMs,
            moveWatch: e.moveWatch,
            ...!1,
            onSessionTokenIssued: y => {
              if (healthState_2 && healthState_2.lockedAccountEmail === null) {
                let H = Ls(y);
                if (H !== null) healthState_2.lockedAccountEmail = H;
              }
            },
            canonicalLocks: canonicalLocks_2,
            spawnedSessionIds: spawnedSessionIds_2,
            postSessionHookTimeoutMs: postSessionHookTimeoutMs,
            pushOutcomeOnRelease: config_4.pushOutcomeOnRelease,
            trustWorkspace: config_4.trustWorkspace,
            removeSessionState: config_4.removeSessionState,
            confineRepoSettings: config_4.confineRepoSettings,
            serverAutoModeLists: config_4.serverAutoModeLists,
            onBgTaskLedger: y => {
              let H = v.get(R);
              if (H) H.liveBgTasks = y;
              Z?.();
            },
            onBgFollowupPending: (y, H) => {
              let Oe = v.get(R);
              if (Oe) Oe.bgResultPendingFollowup = y;
              if (Z?.(), !y && !H && Ee && P) Ar();
            },
            onPostTurnSettle: (y, H) => {
              let Oe = v.get(R);
              if (Oe) Oe.postTurnSettling = y;
              if (Z?.(), !y && !H && Ee && Nn === 0 && _e !== void 0) onSessionActivity_2(_e);
            },
            debugTokenDir: e.debugTokenDir
          }, Ve.signal).then(({
            result: result,
            failureReason: failureReason_2,
            setupFailureKind: setupFailureKind_2,
            failureKind: failureKind_2
          }) => {
            if (failureReason_2) onStatus_11(`Session ${R} finished: ${result} \u2014 reason: ${failureReason_2}`);else onStatus_11(`Session ${R} finished: ${result}`);
            if (result === "failed" || result === "interrupted" && !Ve.signal.aborted) {
              zt.add(R);
              let qe = failureReason_2 ?? "failed (no reason captured)";
              apiClient_5.reportSessionFailure(tokenState_3.runnerToken, R, setupFailureKind_2 === "SETUP_FAILURE_KIND_SOURCE_REF_NOT_FOUND" ? qe : _3t(qe), setupFailureKind_2, failureKind_2).then(He => {
                if (onStatus_11(`[runner:session] ${R} failure reported \xB7 excluded_count=${He.excluded_count} stuck=${He.stuck}`), He.stuck) Ae.add(R), onStatus_11(`[runner:session] ${R} marked stuck \u2014 will not re-spawn on future polls`);
                g("self_hosted_failure_report");
              }).catch(He => {
                let Ze = He instanceof Error ? He.message : String(He);
                onStatus_11(`[runner:session] ${R} reportSessionFailure failed: ${Ze} \u2014 marking stuck to bound respawn`), Ae.add(R), p("self_hosted_failure_report", "rpc_failed");
              }).finally(() => {
                zt.delete(R);
              });
            }
          }).catch(y => {
            let H = y instanceof Error ? y.message : String(y);
            onStatus_11(`Session ${R} handler threw: ${H}`);
          }).finally(() => {
            if (mt = !0, Pe !== void 0) clearTimeout(Pe), Pe = void 0;
            if (Yn(), cr(), !$e.has(R)) fe.delete(R);
            if (Ue.delete(R), healthState_2) healthState_2.sessionIdle.delete(Ge), healthState_2.sessionClientPlatform.delete(Ge), healthState_2.claimVisibility?.delete(Ge), Dqo(healthState_2, Ge);
            let y = v.size >= config_4.capacity;
            if (ie = Ve.signal.aborted && Ve.signal.reason === "idle-release" && !Ee, v.delete(R), Z?.(), healthState_2) healthState_2.activeSessions = v.size;
            if (v.size === 0) {
              if ($t = Date.now(), yt) te.wake("LOCAL");
            }
            if (Ke && y) te.wake("LOCAL");
          });
        if (v.set(R, {
          task: task,
          controller: Ve,
          liveBgTasks: 0,
          bgResultPendingFollowup: !1,
          postTurnSettling: !1,
          turnInFlight: !1,
          releaseForRetire: releaseForRetire,
          releaseForShutdown: releaseForShutdown
        }), healthState_2) healthState_2.activeSessions = v.size;
      }
      let Ie = e.pollIntervalOverrideMs ?? th(et, tt);
      if (It++, It % Qe === 0) {
        let R = v.size,
          we = decodeExpiry(tokenState_3.runnerToken),
          Ve = Date.now(),
          Ge = Ve - rt,
          ze = we !== null ? we * 1000 - Ve : null,
          ht = ze !== null ? `${ze < 0 ? "-" : ""}${formatDelay(Math.abs(ze), {
            mostSignificantOnly: !0
          })}` : "unknown",
          gt = healthState_2?.lockedAccountEmail ?? (vn ? "yes" : "no");
        onStatus_11(`[runner:health] polling ok \xB7 ${R}/${config_4.capacity} slots \xB7 last_poll=${Ge}ms ago \xB7 locked_account=${gt} \xB7 runner_token expires in ${ht} \xB7 ${sn} sessions handled`);
      }
      if (Ke) te.atCapacity = yt || v.size >= config_4.capacity;
      await te.wait(Ie, signal_7);
    }
  } finally {
    if (Rr = !0, Zt !== void 0) clearTimeout(Zt), Zt = void 0;
    if (dn !== void 0) clearTimeout(dn), dn = void 0;
    if (ve !== void 0) clearTimeout(ve), ve = void 0;
    deferShutdown?.signal.removeEventListener("abort", Mn), signal_7.removeEventListener("abort", de), deferShutdown?.onClosed?.(), Tn?.close(), Ht?.();
    let Q = signal_7.aborted;
    if (an === "shutdown") de();
    let drain_hold,
      rt = e.drainTimeoutMs ?? Ko(N, postSessionHookTimeoutMs, 0, config_4.pushOutcomeOnRelease ? Br : 0, Bo()) * 1000,
      Bt = !1,
      Ut = setInterval(() => {
        if (Bt) return;
        Bt = !0, apiClient_5.pollWork(tokenState_3.runnerToken, runnerId_3, 0).then(() => {
          if (healthState_2) healthState_2.lastPollAt = Date.now();
        }).catch(Ie => {
          if (healthState_2) healthState_2.pollErrors[ISt(Ie)]++;
          onDebug_10(`[runner] shutdown: lease heartbeat failed (best-effort): ${Ie}`);
        }).finally(() => {
          Bt = !1;
        });
      }, e.shutdownLeaseHeartbeatMs ?? Cf);
    try {
      if (D > 0 && Q) {
        let Ie = () => [...v.values()].reduce((acc, item) => acc + item.liveBgTasks, 0),
          R = () => [...v.values()].reduce((acc, item) => acc + (item.turnInFlight ? 1 : 0), 0),
          we = () => [...v.values()].reduce((acc, item) => acc + (item.bgResultPendingFollowup ? 1 : 0), 0),
          Ve = () => [...v.values()].reduce((acc, item) => acc + (item.postTurnSettling ? 1 : 0), 0),
          Ge = () => (we() > 0 ? `, ${we()} finished background task(s) awaiting the follow-up turn` : "") + (Ve() > 0 ? `, ${Ve()} finished turn(s) still being reported to the server` : ""),
          ze = () => [...v.entries()].filter(([, gt]) => gt.turnInFlight || gt.liveBgTasks > 0 || gt.bgResultPendingFollowup).map(([gt]) => gt),
          ht = () => ze().length > 0 || Ve() > 0;
        if (drain_hold = {
          outcome: "RUNNER_DRAIN_HOLD_OUTCOME_NOT_NEEDED",
          cap_ms: Math.round(D),
          held_ms: 0,
          busy_session_ids_at_release: []
        }, ht()) {
          let gt = Date.now(),
            Pe = !1;
          onStatus_11(`[runner] drain-wait: ${R()} turn(s) in flight, ${Ie()} background task(s) live${Ge()} across ${v.size} session(s) \u2014 waiting up to ` + `${D / 1000}s before stopping session(s)`), await new Promise(mt => {
            let X = () => {
                Z = void 0, mt();
              },
              he = setTimeout(() => {
                Pe = !0, X();
              }, D);
            Z = () => {
              if (!ht()) clearTimeout(he), X();
            };
          });
          let Yt = ze();
          drain_hold = {
            ...drain_hold,
            outcome: Pe ? "RUNNER_DRAIN_HOLD_OUTCOME_CAP_EXPIRED" : "RUNNER_DRAIN_HOLD_OUTCOME_FINISHED",
            held_ms: Date.now() - gt,
            busy_session_ids_at_release: Yt.slice(0, Pf)
          }, onStatus_11(!Pe ? "[runner] drain-wait: in-flight work finished \u2014 stopping session(s)" : `[runner] drain-wait: timed out with ${R()} turn(s) in flight, ${Ie()} task(s) still live${Ge()} \u2014 stopping session(s)`);
        }
      }
      for (let {
        controller: controller
      } of v.values()) controller.abort();
      if (v.size > 0) {
        onStatus_11(`Draining ${v.size} active session(s)...`);
        try {
          await ml(Promise.allSettled([...v.values()].map(item => item.task)), rt, "[runner:stuck] drain"), onStatus_11("Drain complete"), g("self_hosted_drain");
        } catch {
          m("self_hosted_drain", "shutdown_budget_exceeded"), onStatus_11(`[runner] shutdown exceeded ${rt}ms (session-stop-grace + post-session-hook-timeout` + (config_4.pushOutcomeOnRelease ? " + push-on-release window" : "") + ` + ${ar / 1000}s); force-exiting. The post-session hook had its full budget; post-hook cleanup may have been cut short. ${v.size} session(s) still active.`), await e.flushLogSink?.(), process.exit(1);
        }
      }
      if ($e.size > 0) onStatus_11(`[runner] shutdown: waiting for ${$e.size} in-flight session release(s) to settle before deregistering`), await ml(Promise.allSettled([...$e.values()]), zo, "[runner:exit] release settle").catch(() => {
        onStatus_11(`[runner] shutdown: ${$e.size} session release(s) did not settle within ${zo / 1000}s \u2014 deregistering anyway (those sessions are requeued rather than parked)`);
      });
      await be;
    } finally {
      clearInterval(Ut);
    }
    let ft = !1,
      Wt = await be,
      reason_2 = Q || an === "shutdown" ? Wt?.present ? "host_drain" : "shutdown_signal" : yt ? "retire_at" : ie && !ce ? "idle_release" : "";
    if (drain_hold !== void 0 && Wt?.deadlineMs !== void 0) drain_hold.host_deadline_unix_s = Math.round(Wt.deadlineMs / 1000);
    await ml(apiClient_5.deregisterRunner(tokenState_3.runnerToken, {
      reason: reason_2,
      drain_hold: drain_hold
    }).then(() => {
      if (onStatus_11("[runner:exit] Deregistered"), !ft) ft = !0, g("self_hosted_deregister");
    }).catch(Ie => {
      if (onDebug_10(`[runner:exit] deregisterRunner failed (best-effort): ${Ie}`), !ft) ft = !0, p("self_hosted_deregister", "rpc_failed");
    }), 5000, "[runner:exit] deregister").catch(() => {
      if (onDebug_10("[runner:exit] deregisterRunner timed out (best-effort) \u2014 lease expiry will requeue"), !ft) ft = !0, p("self_hosted_deregister", "timeout");
    });
  }
}
function th(e, n) {
  let r = e ? Date.parse(e) : NaN,
    s = Number.isNaN(r) ? Xs : Math.max(Tf, Math.min(Af, Math.floor((r - Date.now()) / 3))),
    o = Vd(n);
  return o === void 0 ? s : Math.min(s, o);
}
function Vd(e) {
  let n = e === void 0 ? null : /^(\d{1,15})(?:\.(\d{1,9}))?s$/.exec(e);
  if (!n) return;
  let r = n[2] ? Number(n[2].padEnd(9, "0")) : 0,
    s = Number(n[1]) * 1000 + Math.floor(r / 1e6);
  return s > 0 ? Math.max(Of, s) : void 0;
}
function nh(e, n, r) {
  let s = Math.min(If, Ld * 2 ** Math.max(0, e - 1)),
    o = Math.floor(s / 2 + Math.random() * (s / 2));
  return zd(o, n, Ld, r);
}
function zd(e, n, r, s) {
  let o = n === void 0 ? NaN : Date.parse(n) - Date.now();
  if (!(o > 0)) return e;
  let i = Math.min(o - xf, Vd(s) ?? 1 / 0);
  return Math.min(e, Math.max(r, i));
}
async function Id(e, n, r, s) {
  try {
    await qo(e, {
      recursive: !0,
      mode: 448
    }), await kf(`${e}/${n}`, r, {
      mode: 384
    });
  } catch (error) {
    s(`[runner:debug] failed to write ${n} to ${e} (best-effort): ${error}`);
  }
}
export { $k as selfHostedRunnerMain };