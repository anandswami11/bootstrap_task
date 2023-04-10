
//show the chat box

let clickbutton = document.querySelector('.button')
clickbutton.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex'

})
//close button
let closebutton = document.querySelector('.close_button')
closebutton.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'none'
})

