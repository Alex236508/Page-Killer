To use press the big red button and then the page will be completly killed until you clear the cookies. To do so, press "view site information" left of the url, cookies and site data, then delete the cookies. This will permenantly "kill" the page until you do this even if you restart your computer.
## bookmarklet:
###### This version will auto update if i change the file (is vunerable to CORS policy block)
```javascript
javascript:(function(){fetch('https://raw.githubusercontent.com/Alex236508/Page-Killer/refs/heads/main/Website killer.js').then(r=>r.text()).then(t=>eval(t));})();
```
### If fetch for some reason doesn't work use this
###### This version will not update but will get through CORS policy block and other security features
```javascript
javascript:function a(){function a(){Object.assign(b.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"200px",borderRadius:"100px",backgroundColor:"red",color:"white",fontSize:"100px",fontWeight:"bold",cursor:"pointer",zIndex:"2147483647",boxShadow:"0 0 20px black",display:"block",visibility:"visible",opacity:"1",pointerEvents:"auto"}),b.setAttribute("style",Array.from(b.style).map(a=>`${a}: ${b.style[a]} !important;`).join(""))}const b=document.createElement("button");b.textContent="OFF",a(),b.addEventListener("click",function(){if("OFF"===this.textContent){this.style.backgroundColor="#00FF00",this.textContent="ON";const a=new Date(2e14).toUTCString(),b=location.hostname.split(".").slice(-2).join(".");for(let c=0;99>c;c++)document.cookie=`cd${c}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(3168))))).substring(0,3168)};expires=${a};domain=${b};path=/`;alert("Website successfully killed")}}),document.body.appendChild(b),new MutationObserver(()=>{document.body.contains(b)||(document.body.appendChild(b),a())}).observe(document.body,{childList:!0,subtree:!0}),setInterval(a,100)}a();
```
