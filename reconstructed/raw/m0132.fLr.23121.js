async function fLr(e){let t=mt.getStore();if(t===void 0)return e();t.pause();try{return await e()}finally{t.resume()}}
