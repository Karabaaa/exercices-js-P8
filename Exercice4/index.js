const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  if (document.querySelector(".message")) {
    return;
  }
  const p = document.createElement("p");
  p.classList.add("message");
  p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  button.after(p);
});
