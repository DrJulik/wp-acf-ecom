function wdsAccordion() {
    const e = document.querySelectorAll(".accordion-item"), t = document.querySelectorAll(".accordion-item-content");
    e.forEach(e => {
        const t = e.querySelector(".accordion-item-header");
        t.addEventListener("click", n);
    });
    openHashLink();
    function n(e) {
        t.forEach(function(t) {
            const n = e.target.parentNode.closest(".accordion-item-header");
            if (t.previousElementSibling === n) {
                if ("false" === t.getAttribute("aria-hidden")) {
                    t.setAttribute("aria-hidden", "true");
                    t.parentElement.classList.remove("open");
                } else {
                    t.setAttribute("aria-hidden", "false");
                    t.parentElement.classList.add("open");
                }
            } else {
                t.setAttribute("aria-hidden", "true");
                t.parentElement.classList.remove("open");
            }
        });
    }
}

function openHashLink() {
    if (!window.location.hash) {
        return false;
    }
    const e = document.querySelector(window.location.hash), t = e.previousElementSibling, n = t.querySelector(".accordion-item-toggle");
    n.click();
}

if (window.acf) {
    window.acf.addAction("render_block_preview/type=wds-accordion", wdsAccordion);
}

wdsAccordion();

window.wdsCarousel = {};

(function(e, t, n) {
    n.init = function() {
        n.cache();
        if (e.acf) {
            n.doSlick();
        }
        if (n.meetsRequirements()) {
            n.bindEvents();
        }
    };
    n.cache = function() {
        n.$c = {
            window: t(e),
            theCarousel: t(".carousel-block")
        };
    };
    n.bindEvents = function() {
        n.$c.window.on("load", n.doSlick);
        n.$c.window.on("load", n.doFirstAnimation);
    };
    n.meetsRequirements = function() {
        return n.$c.theCarousel.length;
    };
    n.doFirstAnimation = function() {
        const e = n.$c.theCarousel.find("[data-slick-index=0]"), t = e.find(".slide-content"), o = t.attr("data-animation");
        t.addClass(o);
    };
    n.playBackgroundVideos = function() {
        t("video").each(function() {
            this.play();
        });
    };
    n.initializeCarousel = function() {
        t(".carousel-block").not(".slick-initialized").slick({
            autoplay: true,
            autoplaySpeed: 5e3,
            arrows: true,
            dots: true,
            focusOnSelect: true,
            waitForAnimate: true
        });
    };
    n.doSlick = function() {
        t(document).ready(function() {
            n.playBackgroundVideos();
            n.initializeCarousel();
        });
        if (e.acf) {
            e.acf.addAction("render_block_preview", n.initializeCarousel);
        }
    };
    t(n.init);
})(window, jQuery, window.wdsCarousel);

(function() {
    const e = document.querySelector(".site-header-action");
    if (!e) {
        return;
    }
    const t = document.querySelector(".site-header-action .cta-button"), n = document.querySelector(".site-header-action .form-container");
    if (!t || !n) {
        return;
    }
    t.addEventListener("click", i);
    document.body.addEventListener("keyup", s);
    document.body.addEventListener("touchstart", s);
    document.body.addEventListener("click", s);
    function o() {
        if (document.body.classList.contains("search-form-visible")) {
            return true;
        }
        return false;
    }
    function i() {
        document.body.classList.toggle("search-form-visible");
        a();
    }
    function a() {
        if (o()) {
            n.setAttribute("aria-hidden", "false");
            t.setAttribute("aria-expanded", "true");
        } else {
            n.setAttribute("aria-hidden", "true");
            t.setAttribute("aria-expanded", "false");
        }
    }
    function s(t) {
        const n = e.contains(t.target);
        if (!n) {
            document.body.classList.remove("search-form-visible");
            a();
        }
    }
})();

document.body.className = document.body.className.replace("no-js", "js");

if (("complete" === document.readyState || "loading" !== document.readyState) && !document.documentElement.doScroll) {
    wdsMobileMenu();
} else {
    document.addEventListener("DOMContentLoaded", wdsMobileMenu);
}

function wdsMobileMenu() {
    const e = document.querySelectorAll(".mobile-menu li.menu-item-has-children, .utility-navigation li.menu-item-has-children");
    e.forEach(e => {
        const n = e.querySelector("a");
        n.innerHTML += '<button type="button" aria-expanded="false" class="parent-indicator" aria-label="Open submenu"><span class="down-arrow"></span></button>';
        const o = document.querySelectorAll(".parent-indicator");
        o.forEach(e => {
            e.addEventListener("click", t);
        });
    });
    function t(e) {
        e.preventDefault();
        const t = e.target, o = t.parentNode.closest(".menu-item-has-children"), a = o.querySelector("ul.sub-menu");
        i(o);
        n(o, a);
    }
    function n(e, t) {
        if (e.classList.contains("is-visible")) {
            o(e, t);
            return;
        }
        e.classList.add("is-visible");
        e.querySelector(".parent-indicator").setAttribute("aria-expanded", true);
        t.classList.add("is-visible", "animated", "slideInLeft");
    }
    function o(e, t) {
        e.classList.remove("is-visible");
        e.querySelector(".parent-indicator").setAttribute("aria-expanded", false);
        t.classList.remove("is-visible", "animated", "slideInLeft");
    }
    function i(e) {
        const t = a(e);
        t.forEach(e => {
            e.classList.remove("is-visible");
            if (e.querySelector(".parent-indicator")) {
                e.querySelector(".parent-indicator").setAttribute("aria-expanded", false);
            }
            if (e.querySelector(".sub-menu")) {
                e.querySelector(".sub-menu").classList.remove("is-visible", "animated", "slideInLeft");
            }
        });
    }
    const a = function(e) {
        const t = [];
        let n = e.parentNode.firstChild;
        while (n) {
            if (1 === n.nodeType && n !== e) {
                t.push(n);
            }
            n = n.nextSibling;
        }
        return t;
    };
}

if (("complete" === document.readyState || "loading" !== document.readyState) && !document.documentElement.doScroll) {
    wdsModals();
} else {
    document.addEventListener("DOMContentLoaded", wdsModals);
}

function wdsModals() {
    const e = document.querySelectorAll(".modal-trigger"), t = document.querySelectorAll(".modal .close"), n = document.body;
    e.forEach(e => {
        e.addEventListener("click", o);
    });
    t.forEach(e => {
        e.addEventListener("click", i);
    });
    n.addEventListener("keydown", a);
    n.addEventListener("click", s);
    function o(e) {
        const t = e.target, o = t.getAttribute("data-target"), i = document.querySelector(o), a = i.querySelectorAll("a, input, button");
        n.classList.add("modal-open");
        i.classList.add("modal-open");
        i.setAttribute("aria-hidden", false);
        if (0 < a.length) {
            a[0].focus();
        }
    }
    function i(e) {
        const t = e.target, o = t.getAttribute("data-target"), i = document.querySelector(o), a = i.querySelector("iframe");
        n.classList.remove("modal-open");
        i.classList.remove("modal-open");
        i.setAttribute("aria-hidden", true);
        if (a) {
            const e = a.getAttribute("src");
            a.setAttribute("src", "");
            a.setAttribute("src", e);
        }
    }
    function a(e) {
        if (!n.classList.contains("modal-open")) {
            return;
        }
        const t = document.querySelector(".modal.modal-open"), o = t.querySelector("iframe");
        if (27 === e.keyCode) {
            t.setAttribute("aria-hidden", true);
            t.classList.remove("modal-open");
            n.classList.remove("modal-open");
            if (o) {
                const e = o.getAttribute("src");
                o.setAttribute("src", "");
                o.setAttribute("src", e);
            }
        }
    }
    function s(e) {
        const t = e.target;
        if (n.classList.contains("modal-open")) {
            if (t.classList.contains("modal-open")) {
                const e = t.querySelector("iframe");
                n.classList.remove("modal-open");
                t.classList.remove("modal-open");
                t.setAttribute("aria-hidden", true);
                if (e) {
                    const t = e.getAttribute("src");
                    e.setAttribute("src", "");
                    e.setAttribute("src", t);
                }
            }
        }
    }
}

(function() {
    const e = document.querySelectorAll(".main-navigation .menu-item-has-children");
    document.addEventListener("DOMContentLoaded", t);
    document.addEventListener("DOMContentLoaded", n);
    function t() {
        e.forEach(e => {
            const t = e.querySelector("a");
            t.innerHTML += '<span class="caret-down" aria-hidden="true"></span>';
        });
    }
    function n() {
        e.forEach(e => {
            e.addEventListener("focusin", o);
            e.addEventListener("focusout", i);
        });
    }
    function o(e) {
        const t = a(e.target.parentNode, ".menu-item-has-children");
        t.forEach(e => {
            e.classList.add("focus");
        });
    }
    function i(e) {
        const t = a(e.target.parentNode, ".menu-item-has-children");
        t.forEach(e => {
            e.classList.remove("focus");
        });
    }
    const a = function(e, t) {
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                const t = (this.document || this.ownerDocument).querySelectorAll(e);
                let n = t.length;
                while (0 >= --n && t.item(n) !== this) {}
                return -1 > n;
            };
        }
        const n = [];
        for (;e && e !== document; e = e.parentNode) {
            if (t) {
                if (e.matches(t)) {
                    n.push(e);
                }
            } else {
                n.push(e);
            }
        }
        return n;
    };
})();

if (("complete" === document.readyState || "loading" !== document.readyState) && !document.documentElement.doScroll) {
    wdsOffCanvas();
} else {
    document.addEventListener("DOMContentLoaded", wdsOffCanvas);
}

function wdsOffCanvas() {
    const e = document.querySelector(".off-canvas-screen");
    if (!e) {
        return;
    }
    const t = document.querySelector(".off-canvas-close"), n = document.querySelector(".off-canvas-container"), o = document.querySelector(".off-canvas-open");
    o.addEventListener("click", s);
    t.addEventListener("click", a);
    e.addEventListener("click", a);
    document.body.addEventListener("keydown", i);
    function i(e) {
        if (27 === e.keyCode) {
            a();
        }
    }
    function a() {
        n.classList.remove("is-visible");
        o.classList.remove("is-visible");
        e.classList.remove("is-visible");
        n.setAttribute("aria-hidden", true);
        o.setAttribute("aria-expanded", false);
    }
    function s() {
        if (true === o.getAttribute("aria-expanded")) {
            a();
        } else {
            c();
        }
    }
    function c() {
        n.classList.add("is-visible");
        o.classList.add("is-visible");
        e.classList.add("is-visible");
        n.setAttribute("aria-hidden", false);
        o.setAttribute("aria-expanded", true);
    }
}

(function() {
    const e = -1 < navigator.userAgent.toLowerCase().indexOf("webkit"), t = -1 < navigator.userAgent.toLowerCase().indexOf("opera"), n = -1 < navigator.userAgent.toLowerCase().indexOf("msie");
    if ((e || t || n) && document.getElementById && window.addEventListener) {
        window.addEventListener("hashchange", function() {
            const e = location.hash.substring(1);
            if (!/^[A-z0-9_-]+$/.test(e)) {
                return;
            }
            const t = document.getElementById(e);
            if (t) {
                if (!/^(?:a|select|input|button|textarea)$/i.test(t.tagName)) {
                    t.tabIndex = -1;
                }
                t.focus();
            }
        }, false);
    }
})();

(function() {
    document.querySelectorAll("table").forEach(e => {
        const t = e.querySelectorAll("th");
        if (0 === t.length) {
            return;
        }
        const n = e.querySelectorAll("tbody tr");
        n.forEach(e => {
            const n = e.querySelectorAll("td");
            n.forEach((e, n) => {
                if (t[n].textContent) {
                    e.setAttribute("data-label", t[n].textContent);
                }
            });
        });
    });
})();

(function() {
    const e = document.querySelectorAll(".video-toggle");
    e.forEach(e => {
        e.addEventListener("click", t);
    });
    function t(e) {
        const t = e.target.parentNode, n = t.querySelector(".video-background");
        t.classList.toggle("video-toggled");
        if (t.classList.contains("video-toggled")) {
            n.pause();
        } else {
            n.play();
        }
    }
})();

function wdsWindowReady() {
    document.body.classList.add("ready");
}

if (("complete" === document.readyState || "loading" !== document.readyState) && !document.documentElement.doScroll) {
    wdsWindowReady();
} else {
    document.addEventListener("DOMContentLoaded", wdsWindowReady);
}