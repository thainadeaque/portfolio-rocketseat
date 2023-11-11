function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  // }
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Thaina.png.jpg")
  } else {
    img.setAttribute("src", "./assets/perfil.png.jpg")
  }
}
