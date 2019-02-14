const body = document.querySelector("body")
const IMG_NUM = 3

let getImage = _ => {
  const image = new Image()
  image.src = "https://picsum.photos/1920/1080/?random"
  image.classList.add("bgImage")
  body.prepend(image)
}

let initBackground = _ => {
  getImage()
}
initBackground()
