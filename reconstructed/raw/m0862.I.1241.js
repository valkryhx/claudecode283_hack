function I(e,n){let t=d(e,n);if(e[t]===";")return t+1;if(t>=e.length)return n;if(!v.test(e.slice(n,t)))return;let r=g(e,t);if(r===void 0||r==="in"||r==="instanceof")return;return n}
