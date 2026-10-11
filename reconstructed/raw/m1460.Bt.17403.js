function Bt(o,l,a){if(l<=a)return{from:0,to:l,above:0,below:0};let u=Math.floor(a/2),d=Math.max(0,Math.min(o-u,l-a)),f=d+a;return{from:d,to:f,above:d,below:l-f}}
