
const container = document.querySelector('.container');
container.innerHTML = '';

function makeGrid(grid){
    
    for(let i = 0; i < grid; i++){
        for(let j = 0; j < grid; j++){
            const box = document.createElement('div');
            container.appendChild(box).className = "grid-item";
        }
    }
    container.style.width = `${Math.round(grid * 2.1)}%`;
    //changeBg();
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => { // change the color of grid-item when hovered
        div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red'; // Change the color to your desired color
        });
    });
}
const btn = document.getElementById('btn');
makeGrid(16);

btn.addEventListener('click', () => { // a prompt for asking grid
    let askGrid = prompt("Enter your desired grid");
    document.querySelectorAll('.grid-item').forEach((box) => container.removeChild(box));
    makeGrid(askGrid);
})



