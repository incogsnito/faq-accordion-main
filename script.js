
document.addEventListener("click", (e) => {
  if (!e.target.matches(".add")) return;

  const container = e.target.closest(".info_container");
  const info = container.querySelector(".info");

  info.classList.toggle("hidden");
});
