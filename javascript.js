const screen_size = 960;
const container = document.querySelector('div.container');
const btn = document.querySelector('button');

/*create 16x16 grid of squares*/
function createSquares(num_squares = 16) {
    let square_width = (screen_size/num_squares);
    for (let i=0; i<(Math.pow(num_squares, 2)); i++){
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('grid');
        container.appendChild(squareDiv);
    }
    /*add hover effect that triggers color change of div element*/
    let squares = document.querySelectorAll(".container > div");
    squares.forEach((square) => {
        square.addEventListener('mouseover', () =>{
            square.classList.remove('grid');
            square.classList.add('hover');
        });
    });
    let squares_grid = document.querySelectorAll("div.grid");
    squares_grid.forEach((square) => {
        square.style['flex-basis'] = `${square_width}px`;
    });
    let squares_hover = document.querySelectorAll("div.hover");
    squares_hover.forEach((square) => {
        square.style['flex-basis'] = `${square_width}px`;
    });
}   

createSquares();

/*create button to clear grid and prompts user to enter value for new grid dimensions*/
btn.addEventListener('click', ()=>{
    let squares = document.querySelectorAll(".container > div");
    squares.forEach((square) => {
        square.remove();
    });
    let user_input = prompt("Enter 1-100 for dimensions of grid:");
    if ((user_input > 1) && (user_input <= 100)){
        createSquares(user_input);
    }
    else {
        createSquares();
    }
});