
const balloon = document.getElementById('balloon')
const cloud = document.getElementById('cloud')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const mern = document.getElementById('mern')


function move() {
  const incrementer = window.scrollY

  balloon.style.bottom = 10 + incrementer * 0.3 + '%'
  
  cloud.style.bottom = 80 + incrementer * 0.1 + '%'
  cloud.style.left = 0 + incrementer * -0.12 + '%'
  
  javascript.style.left = 20 + incrementer * -1.5 + '%'
  react.style.left = 26 + incrementer * -1 + '%'
  mern.style.left = 32 + incrementer * -.8 + '%'
}

window.addEventListener('scroll', move)
