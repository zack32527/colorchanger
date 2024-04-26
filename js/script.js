const colors = ["#f1f5f8", "#00ff00", "#ff0000", "#ff00ff", "#0000ff", "#ffff00"];

const btn = document.getElementById("btn");

function randomize() {
    
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];

    document.getElementById("currentColor").innerHTML = colors[randomNumber];


}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}