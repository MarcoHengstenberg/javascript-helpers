!function() {
  function e(e,t,n) {
    e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent && e.attachEvent("on" + t, n)
  }

  function t(e) {
    return window.localStorage && localStorage.font_css_cache && localStorage.font_css_cache_file === e
  }

  function n() {
    if (window.localStorage && window.XMLHttpRequest)
    if (t(o))a(localStorage.font_css_cache);

    else {
      var n = new XMLHttpRequest;
      n.open("GET", o, !0), e(n, "load", function() {
        4 === n.readyState && (a(n.responseText),
        localStorage.font_css_cache = n.responseText,
        localStorage.font_css_cache_file = o)
      }),

      n.send()
    }

    else {
      var c = document.createElement("link");
      c.href = o,
      c.rel = "stylesheet",
      c.type = "text/css",
      document.getElementsByTagName("head")[0].appendChild(c),
      document.cookie="whatever_cookie"
    }
  }

  function a(e) {
    var t = document.createElement("style");
    t.innerHTML = e,
    document.getElementsByTagName("head")[0].appendChild(t)
  }

  var o = "yourcssfile.css";

  window.localStorage && localStorage.font_css_cache || document.cookie.indexOf("whatever_cookie") > -1?n():e(window, "load", n)
}();