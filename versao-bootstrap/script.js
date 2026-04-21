(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  var status = document.getElementById("theme-status");

  if (!button || !status) {
    return;
  }

  function applyTheme(theme) {
    var isDark = theme === "dark";
    root.setAttribute("data-theme", theme);
    button.setAttribute("aria-pressed", String(isDark));
    button.textContent = isDark ? "Tema claro" : "Tema escuro";
    status.textContent = isDark ? "Tema escuro ativado" : "Tema claro ativado";
  }

  var savedTheme = localStorage.getItem("theme-preference");
  var initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  applyTheme(initialTheme);

  button.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") || "light";
    var next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme-preference", next);
    applyTheme(next);
  });
})();
