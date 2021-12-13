let container = document.querySelector('div.container');

for (let i=0; i<64; i++){
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('grid');
    container.appendChild(squareDiv);
}