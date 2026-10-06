(function () {
  var TARGET = "https://cdn.jsdelivr.net/npm/@foxreis/tizentube/dist/userScript.js";
  var s = document.createElement("script");
  s.src = TARGET + "?v=" + Date.now();
  s.async = true;
  document.head.appendChild(s);
})();
