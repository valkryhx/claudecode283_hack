function wt(e){let{keys:t,passed:o,received:r,explanation:n}=e,s=t.find((i)=>$n(o[i])!==$n(r[i]));if(s===void 0)return;return`a changed ${s} (${n})`}
