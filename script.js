function render () {
    
    var boardElement = document.body;
    var board = document.createElement("section");
    
    var target = document.createElement("div");

    board.classList.add("board");
    target.classList.add("target")

    boardElement.appendChild(target)
    document.body.appendChild(board)

    var position = 0;
    var positionX = 0;
    var positionY = 0;
    var frameInterval = setInterval(frame , 10);

    function frame () {
        position++;
        if (position +50 < 500) {
           target.style.top = positionX + "px"
           target.style.left = positionY + "px"       
        }
            // if (position > 450) {
            //     target.style.bottom = position + "px"
            //     target.style.right = position + "px"
            // }
    }

}

render();