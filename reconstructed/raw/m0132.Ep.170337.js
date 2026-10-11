function Ep({engine:e,invoke:t,stamped:o},r){let{matcher:n}=r,s=r.catch;if(s===void 0)return;return async(i,p)=>n===void 0||o(()=>vdt(n,i))?await t(s,[e,i,p]):void 0}
