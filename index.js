const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-btn")
let resetEl = document.getElementById("reset-btn")
let firstPwd = document.getElementById("pwd1")
let secondPwd = document.getElementById("pwd2")

generateEl.addEventListener("click", generatePwd)
resetEl.addEventListener("click", resetPwd)

let password = ""

function renderPwd(){
    let pwd = ""
    for(let i = 0;i < 16;i++){
        pwd += characters[Math.floor(Math.random() * characters.length)]
    }
    return pwd
}
function generatePwd(){
    password = renderPwd()
    firstPwd.textContent = password
}

function resetPwd(){
    password = ""
    firstPwd.textContent = password
}