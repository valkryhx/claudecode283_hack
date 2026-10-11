async function*YIo(e){let t=!1;try{while(!0){let o=await e.next().catch((r)=>{throw t=!0,r});if(o.done===!0)return t=!0,o.value;yield o.value}}finally{if(!t)await e.return().catch(()=>{return})}}
