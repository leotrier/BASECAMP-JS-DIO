const apigatos = "https://thatcopy.pw/catapi/rest/"
const trocafoto = document.getElementById("change-cat")

const img = async () => {
  const exerc = await fetch(apigatos)
  const json = await exerc.json()
  return json.webpurl /* .webpurl corrigido com exemplo*/
}

const carregato = async () => {
  const foto = document.getElementById("cat")
  foto.src = await img()
}
trocafoto.addEventListener("click", carregato)

carregato() /*corrigido com exemplo*/
