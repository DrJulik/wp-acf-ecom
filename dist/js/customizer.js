if (("complete" === document.readyState || "loading" !== document.readyState) && !document.documentElement.doScroll) {
    wdsCustomizer();
} else {
    document.addEventListener("DOMContentLoaded", wdsCustomizer);
}

function wdsCustomizer() {
    const e = document.querySelector("#customize-control-_header_button select");
    if (!e) {
        return;
    }
    const t = document.querySelector("#customize-control-_header_button_url"), o = document.querySelector("#customize-control-_header_button_text");
    e.addEventListener("change", n);
    function n() {
        if ("link" === e.value) {
            t.style.display = "";
            o.style.display = "";
        } else {
            t.style.display = "none";
            o.style.display = "none";
        }
    }
}