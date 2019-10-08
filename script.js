
function frame () {
    var newx = Math.random() * 450
    var newy = Math.random() * 450

    target.style.top = newy + "px"
    target.style.left = newx + "px"    
    target.style.transitionDuration = "1s"   
}
 
    
var boardElement = document.body;
var board = document.createElement("section");

var target = document.createElement("div");

board.classList.add("board");
target.classList.add("target")

boardElement.appendChild(target)
document.body.appendChild(board)

var frameInterval = setInterval(frame , 1000);


function killDuck(event){

    boardElement.removeChild(this)
    target = document.createElement("div");
    boardElement.appendChild(target); 
    target.classList.add("target")
    
    var newx = Math.random() * 450
    var newy = Math.random() * 450
    target.style.top = newy + "px"
    target.style.left = newx + "px"    
    target.style.transitionDuration = "1s" 
     
    target.addEventListener("click", killDuck);

}

target.addEventListener("click", killDuck);

