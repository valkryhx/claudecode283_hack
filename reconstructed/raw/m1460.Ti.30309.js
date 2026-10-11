function Ti(o,l){let a=0;for(let u of l){let d=u.end+a;if(o<d)break;if(o<d+u.growth)return u.end;a+=u.growth}return o-a}
