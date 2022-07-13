// window.alert('we have java script')
let ghost = document.querySelector('#ghost')

function setPositon(item,num1,num2){
    let one =  item.style.left = num1 + 'px'
    let two= item.style.bottom = num2 +'px'
    console.log(one,two)
    return one, two
}

setPositon(ghost,100,100)
//assignes ghost current left and bottom position to variables
let x = parseInt(ghost.style.left)
let y = parseInt(ghost.style.bottom)

//moves the main ghost character when user presses arrow keys
document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowLeft'){
        x = x - 3
        ghost.style.left = x + 'px' 
        console.log(x)
    }
    if(e.key ==="ArrowRight"){
        x = x + 3
        ghost.style.left = x + 'px' 
        console.log(x)
    }
    if(e.key ==='ArrowUp'){
        y = y + 3
        if(checkMove()){
        ghost.style.bottom = y + 'px'
        console.log(y)
        }else{
            y = y - 3
        }
    }
    if(e.key ==="ArrowDown"){
        y = y - 3
        ghost.style.bottom = y + 'px'
        console.log(y)
    }
  
})


//find cordinates of mouse click thought would be helpful with layout
document.addEventListener('mousedown', (event)=>{
let a = event.clientX;
let b = event.clientY;
console.log(a,b)
return a,b 
})

document.addEventListener("mouseup",(event)=>{
    let c = event.clientX;
    let d = event.clientY;
    console.log(c,d)
    return(c,d)
})


//set position of walls 
let walls =[
    {x_postion:300, y_position:300, width:300, height:10 },
    {x_postion:300, y_position:500, width:300, height:10 }
]
//loop through and create my walls
walls.forEach( item =>{
  let wall = document.createElement('div')
    wall.style.border = '1px dotted white'
    wall.style.position = 'fixed'
    wall.style.backgroundColor = 'green'
    wall.style.height = `${item.height}px`
    wall.style.width =  `${item.width}px`
    wall.style.left =  `${item.x_postion}px`
    wall.style.bottom = `${item.y_position}px`
    document.body.appendChild(wall)
})
//logic for collision 
function collisionDetect(a,b){
    return(
        (a.y_position + a.width) <= (b.y_position)||
        (a.y_position)>= (b.y_position + b.height)||
        ((a.x_postion + a.width)<= b.x_postion)||
        (a.x_postion >= (b.x_postion + b.width))
    );
}
//function to check if ghost is running into any walls
function checkMove(){
    let result 
    for (let i = 0; i<walls.length; i++){
        if (!collisionDetect(ghost, walls[i])){
             result = false;
             break;
        }else{
             result = true;
        }
    }
    console.log(result)
    return result
}
