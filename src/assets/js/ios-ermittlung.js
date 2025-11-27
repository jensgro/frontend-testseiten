document.documentElement.setAttribute("lang", "de");

var ua = navigator.userAgent.toLowerCase();
var target = document.getElementById("target");
var uainfo = document.getElementById("uainfo");

var iPad = !!(
    navigator.userAgent.match(/(iPad)/) ||
    (navigator.platform === "MacIntel" &&
        typeof navigator.standalone !== "undefined")
);

var iPhone = ua.indexOf("iphone");

uainfo.innerHTML = ua;
console.log(ua);

if (iPhone != -1) {
    target.classList.add("yes");
    target.innerHTML = "Ja! iPhone";
} else if (iPad) {
    target.classList.add("yes");
    target.innerHTML = "Ja! iPad";
} else {
    target.classList.add("no");
    target.innerHTML = "NEIN!";
}
