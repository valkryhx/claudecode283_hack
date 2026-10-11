function Pe(e,n){for(let r of[n.length-1,n.length,n.length+1]){if(r<=0||r>e.length)continue;for(let s=0;s+r<=e.length;s++)if(be(e.slice(s,s+r),n))return!0}return!1}
