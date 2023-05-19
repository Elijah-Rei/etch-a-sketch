
const container = document.querySelector('.container');
container.innerHTML = '';

function makeGrid(grid){
    
    for(let i = 0; i < grid; i++){
        for(let j = 0; j < grid; j++){
            const box = document.createElement('div');
            container.appendChild(box).className = "grid-item";
            box.style.width = `${Math.round(750 / grid)}px`;
            box.style.height = `${Math.round(500 / grid)}px`;
        }
    }
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => { // change the color of grid-item when hovered
        div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red'; // Change the color to your desired color
        });
    });
}
const btn = document.getElementById('btn');
makeGrid(20);
//|| typeof askGrid === 'string'
btn.addEventListener('click', () => { // a prompt for asking grid
    let askGrid = 0;
    while(askGrid > 50 || askGrid <= 0){   
        askGrid = prompt("Enter your desired grid");
    }
    
    document.querySelectorAll('.grid-item').forEach((box) => container.removeChild(box));
    makeGrid(askGrid);
})



