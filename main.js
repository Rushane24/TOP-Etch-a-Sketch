let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(32);
    console.log("Board is being created")

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click != click;
            let draw = document.querySelector("#draw")
            if(click){
                draw.innerHTML = "Now you can Draw!!";
            } else {
                draw.innerHTML = "You are not allowed to Draw";
            }
        }
    })


    let btn_popup = document.querySelector("#popup")
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })

    // getSize();
})

function createBoard(size) {
    let board = document.querySelector(".board");
    console.log("Board element:", board);

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numdivs = size * size;
    for(let i = 0; i<numdivs; i++){
        let div = document.createElement("div")
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div)
    }
}

function getSize(){
    let input = prompt("Enter grid Size: ");
    let message = document.querySelector("#message");
    if(input==" "){
        message.innerHTML = "Please Provide a Number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Please Provide a Number between 0-100";
    } else {
        message.innerHTML = "Now you can Play!";
        return input;
    }
}

function colorDiv(){
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function reset(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = 'white');
}