var elements = [
    "script1.js",
    "script2.js",
    "script3.js"
],

downloadJSAtOnload = function(n) {
    if ("[object Array]" !== Object.prototype.toString.call(n)) return 0;

    var t, e;

    for (t=0; t < n.length; t++) e = document.createElement("script"),
    e.src=n[t],
    document.body.appendChild(e);

    return !0
};

window.addEventListener ? window.addEventListener ("load", function() {
    downloadJSAtOnload(elements)
},
!1):window.attachEvent ? window.attachEvent ("onload", function() {
    downloadJSAtOnload(elements)
}):window.onload = function() {
    downloadJSAtOnload(elements)
};