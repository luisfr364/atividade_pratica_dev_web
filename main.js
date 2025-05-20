let contactLink = document.querySelectorAll(".contact-sec__ul__li");

contactLink.forEach((element) => {
  element.addEventListener("click", () => {
    const link = element.getAttribute("link");
    console.log(link);
    const newWindow = window.open(link, "_blank");
  });
});
