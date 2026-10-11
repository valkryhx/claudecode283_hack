function ho(e,r){let s=new Gt(e,r),g=Y();return{load:()=>s.load(),async append(f){await s.append(f),mMn()?.mirror(po,{entry:f},{sessionId:g,agentId:e}).catch(wo)}}}
