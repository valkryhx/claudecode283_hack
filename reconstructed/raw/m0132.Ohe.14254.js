function Ohe(e,t="Error",o){let r=()=>`${t}: ${e}`;return Object.setPrototypeOf(r,null),Object.freeze(r),Object.freeze({__proto__:null,name:t,message:e,stack:o??`${t}: ${e}`,toString:r})}
