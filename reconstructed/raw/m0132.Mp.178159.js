var Mp=(e,t=()=>e?.environmentId??0)=>async(o)=>{function r(){if(e)Atomics.store(e.view,_dt,t())}r(),queueMicrotask(r);try{return await o}finally{r()}};
