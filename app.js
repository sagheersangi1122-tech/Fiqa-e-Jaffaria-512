function show(id) {
  const sections = document.querySelectorAll("main > section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// default screen
document.addEventListener("DOMContentLoaded", () => {
  show("home");
});
