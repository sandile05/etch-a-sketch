//function to populate the board with a parameter of size to determine the size of the board
function populateBoard(size) {
  //DOM element to access the board class
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)` ;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16); //function call set the size of the board