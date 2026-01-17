document.addEventListener("click", (e) => {
  if (!e.target.matches(".add, .minus")) return;

  const container = e.target.closest(".info_container");
  const info = container.querySelector(".info");
  const plus = container.querySelector(".add");
  const minus = container.querySelector(".minus");

  info.classList.toggle("hidden");
  minus.classList.toggle("hidden");
  plus.classList.toggle("hidden");
});
