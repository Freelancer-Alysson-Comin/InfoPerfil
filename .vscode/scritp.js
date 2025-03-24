function toggleMode() {
  const html = document.documentElement // acessa os elementos da HTML

  html.classList.toggle("light") // Se encontrar "light" no código ele retira, caso não encontrar ele adiciona

  //pegar a tag imagem da meu CSS
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar em Modo Claro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Avatar em Modo Escuro")
  }
}
