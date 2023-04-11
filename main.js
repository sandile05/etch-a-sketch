let color = "black";

//function to populate the board with a parameter of size to determine the size of the board
function populateBoard(size) {
  //DOM element to access the board class
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)` ;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");

    //event listener to leave a trail of where the mouse moved
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16); //function call set the size of the board

//change the size of the board using input text
function changeSize(input){
  if(input >= 2 && input <= 100){
    populateBoard(input)
  } else{
    console.log("Invalid input")
  }
}

//function to change the color if the box we mouse over 
function colorSquare(){
  if(color === "random"){
    this.style.backgroundColor = `hsl(${Math.random() * 300}, 100%, 50%)`
  } else {
    this.style.backgroundColor = color;
  }
}

//function to change color on button click
function changeColor(choice){
  color = choice;
}