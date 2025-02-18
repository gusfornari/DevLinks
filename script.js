function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")

    img.setAttribute(
      "alt",
      "imagem itachi a luz da lua representando o gustavo.dev"
    )
  } else {
    img.setAttribute("src", "./assets/avatar 01.png")

    img.setAttribute(
      "alt",
      "foto itachi uchiha em representação ao dev gustavo fornari."
    )
  }
}
