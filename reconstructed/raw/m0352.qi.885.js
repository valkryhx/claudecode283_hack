function qi({taskId:n,toolUseId:s,taskType:r,outputFile:e,status:i,summary:t,body:u,trailing:d}){let f=[[XJ,n],[JJ,s],[Cde,r],[Fhn,e],[rT,i],[HD,t]],o=`<${Au}>`;for(let[a,T]of f)if(T)o+=`
<${a}>${T}</${a}>`;return`${o}${u??""}
</${Au}>${d??""}`}
