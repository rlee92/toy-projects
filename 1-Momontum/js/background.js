const body = document.querySelector("body")
const IMG_NUM = 3

let getImage = (imgNum) => {
  const image = new Image()
  // image.src=`images/${imgNum+1}.jpg`
  image.src = "https://picsum.photos/1920/1080/?random"
  // "https://source.unsplash.com/random"
  image.classList.add("bgImage")
  body.prepend(image)
}

let genRandom = _ => {
  const number = Math.floor(Math.random() * IMG_NUM)
  return number
}

let initBackground = _ => {
  const randomNum = genRandom()
  getImage(randomNum)
}
initBackground()
