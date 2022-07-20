let colors  = ['#111111','#b2a136','#9a052d','#b6d457','#e252b1','#084010','#8c40f4','#e0e705']

var btn = document.getElementById("btn")
var currColor = document.querySelector(".color")

btn.addEventListener("click" , function(){
    let rand = getRandomNumber();
    
    

    document.body.style.backgroundColor = colors[rand]
    currColor.textContent = colors[rand]

})

function getRandomNumber()
{
    return Math.floor(Math.random() * colors.length)
}
