const btn = document.querySelector(".btn"),
  search = document.querySelector(".search-container"),
  input = document.querySelector('.search');

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
