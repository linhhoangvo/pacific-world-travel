document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="our-team.html"]').forEach((link) => {
    link.setAttribute("href", "team.html");
  });
});
