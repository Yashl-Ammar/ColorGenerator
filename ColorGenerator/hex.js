let hexVals  = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

var btn = document.getElementById("btn")
var currColor = document.querySelector(".color")

btn.addEventListener("click" , function(){
    
    let finalColor = '#'

    for(let i = 0 ; i < 6 ; i++)
    {
        let rand = getRandomNumber();

        finalColor += hexVals[rand]
    }

    document.body.style.backgroundColor = finalColor
    currColor.textContent = finalColor

})

function getRandomNumber()
{
    return Math.floor(Math.random() * hexVals.length)
}
