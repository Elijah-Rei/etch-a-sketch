
const container = document.querySelector('.container');
container.innerHTML = '';

function makeGrid(grid){
    
    for(let i = 0; i < grid; i++){
        for(let j = 0; j < grid; j++){
            const box = document.createElement('div');
            container.appendChild(box).className = "grid-item";
        }
    }
    //container.style.width = grid * 2.10;
    let containerSize = Math.round(grid * 2.10) + '%';
    container.style.width = containerSize;
}
const btn = document.getElementById('btn');

//const btnChangeGrid = document.createElement('button');
//container.appendChild(btnChangeGrid);
makeGrid(16);

const divs = document.querySelectorAll('.grid-item');

btn.addEventListener('click', () => { // a prompt for asking grid
    let askGrid = prompt("Enter your desired grid");
    document.querySelectorAll('.grid-item').forEach((box) => container.removeChild(box));
    makeGrid(askGrid);
})

divs.forEach(div => { // change the color of grid-item when hovered
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'red'; // Change the color to your desired color
    });
});




