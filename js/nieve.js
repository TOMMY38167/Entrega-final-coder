var snow = document.createElement("div");
snow.className = "snow";

document.body.appendChild(snow); 
 
const crearNeive = () => {
  var flake = document.createElement("div");
  flake.className = "flake";
  let x = innerWidth * Math.random()
  let size = (Math.random() * 5) + 3
  let z = Math.round(Math.random()) * 100
  let delay = Math.random() * 5
  let anima = (Math.random() * 10) + 9

  flake.style.left = x + 'px'
  flake.style.width = size + 'px'
  flake.style.height = size + 'px'
  flake.style.zIndex = z
  flake.style.animationDelay = delay + 's'
  flake.style.animationDuration = anima + 's'

  snow.appendChild(flake)

  setTimeout(() => {
      flake.remove()
  }, anima * 2000)
}

setInterval(crearNeive, 100)