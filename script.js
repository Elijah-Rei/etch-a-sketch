
const container = document.querySelector('.container');
container.innerHTML = '';

function makeGrid(grid){
    
    for(let i = 0; i < grid; i++){
        for(let j = 0; j < grid; j++){
            const box = document.createElement('div');
            container.appendChild(box).className = "grid-item";
        }
    }
}
const btnChangeGrid = document.createElement('button');
container.appendChild(btnChangeGrid);
makeGrid(15);

const divs = document.querySelectorAll('.grid-item');

btnChangeGrid.addEventListener('click', () => { // a prompt for asking grid
    let askGrid = prompt("Enter your desired grid");
    //divs.forEach(box => {
    //    container.removeChild(box).className = 'grid-item';
    //})
    document.querySelectorAll('.grid-item').forEach((box) => container.removeChild(box));
    makeGrid(askGrid);
})

divs.forEach(div => { // change the color of grid-item when hovered
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'red'; // Change the color to your desired color
    });
});

