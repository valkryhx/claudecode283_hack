function es(e,t){if(--e.pendingDownstream>0)return;if(e.beneathMs+=performance.now()-e.beneathSince,!e.settled)t.resume()}
