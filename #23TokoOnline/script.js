const thumbs = document.querySelectorAll(".img-thumbnail");
const utama = document.querySelector(".gbrUt");

thumbs.forEach(e => {
  e.addEventListener("mouseover", () => {
    const img = e.getAttribute("src");
    utama.removeAttribute("src");
    utama.setAttribute("src", img);
  });
});
