//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'black', 'gold']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex= parseInt(Math.random()*colors.length)
    bodystyle.backgroundColor = color[colorIndex] 
}