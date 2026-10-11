function cr(e,r,n){let s=e.rows[r]?.in??j;while(s!==j&&s!==n){let a=e.rows[s];if(!a)return!1;if(a.kind==="eval"&&a.fact.topic==="workflow"&&a.fact.child===!0)return!0;s=a.in}return!1}
