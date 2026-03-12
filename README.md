To use press the big red button and then the page will be completly killed until you clear the cookies. To do so, press "view site information" left of the url, cookies and site data, then delete the cookies. This will permenantly "kill" the page until you do this even if you restart your computer.
## bookmarklet:
```javascript
javascript:(function(){fetch('https://raw.githubusercontent.com/Alex236508/Page-Killer/refs/heads/main/Website killer.js').then(r=>r.text()).then(t=>eval(t));})();
```
### If fetch for some reason doesn't work use this
```javascript
javascript:function Kill(){const t=document.createElement("button");function e(){Object.assign(t.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"200px",borderRadius:"100px",backgroundColor:"red",color:"white",fontSize:"100px",fontWeight:"bold",cursor:"pointer",zIndex:"2147483647",boxShadow:"0 0 20px black",display:"block",visibility:"visible",opacity:"1",pointerEvents:"auto"}),t.setAttribute("style",Array.from(t.style).map(e=>`${e}: ${t.style[e]} !important;`).join(""))}t.textContent="OFF",e(),t.addEventListener("click",function(){if("OFF"===this.textContent){this.style.backgroundColor="#00FF00%22,this.textContent=%22ON%22;const%20t=new%20Date(2e14).toUTCString(),e=location.hostname.split(%22.%22).slice(-2).join(%22.%22);for(let%20o=0;o%3C99;o++)document.cookie=%60cd${o}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new%20Uint8Array(3168))))).substring(0,3168)};expires=${t};domain=${e};path=/%60;alert(%22Website%20successfully%20killed%22)}}),document.body.appendChild(t),new%20MutationObserver(()=%3E{document.body.contains(t)||(document.body.appendChild(t),e())}).observe(document.body,{childList:!0,subtree:!0}),setInterval(e,100)}Kill();
```
# Do not use to get out of a test in school 😏
