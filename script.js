// window.alert('we have java script')
let ghostRef = document.querySelector('#ghost')

function setPositon(item,num1,num2){
    let one =  item.style.left = num1 + 'px'
    let two= item.style.bottom = num2 +'px'
    console.log(one,two)
    return one, two
}
let ghost = {
    x_postion : 696,
    y_position :318,
    width: 50,
    height : 50, 
}

ghostRef.style.left = ghost.x_postion + 'px'
ghostRef.style.top = ghost.y_position + 'px'
ghostRef.style.width = ghost.width + 'px'
ghostRef.style.height = ghost.height + 'px'

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowLeft'){
        ghost.x_postion -= 6
        if(checkMove()){
        ghostRef.style.left = ghost.x_postion + 'px' 
        console.log(ghost.x_postion)
        }else{
            ghost.x_postion += 6
        }
    }
    if(e.key ==="ArrowRight"){
        ghost.x_postion += 6
        if(checkMove()){
        ghostRef.style.left = ghost.x_postion + 'px' 
        console.log(ghost.x_postion)
        }else{
            ghost.x_postion -= 6
        }
    }
    if(e.key ==='ArrowUp'){
        ghost.y_position -=6
        if(checkMove()){
        ghostRef.style.top = ghost.y_position + 'px'
        console.log(ghost.y_position)
        }else{
            ghost.y_position += 6
        }
    }
    if(e.key ==="ArrowDown"){
        ghost.y_position += 6
        if(checkMove()){
        ghostRef.style.top = ghost.y_position + 'px'
        console.log(ghost.y_position)
        }else{
            ghost.y_position -= 6
        }
    }
  
})


//find cordinates of mouse click thought would be helpful with layout
document.addEventListener('mousedown', (event)=>{
let a = event.clientX;
let b = event.clientY;
console.log(a,b)
return a,b 
})

// document.addEventListener("mouseup",(event)=>{
//     let c = event.clientX;
//     let d = event.clientY;
//     console.log(c,d)
//     return(c,d)
// })


//set position of walls 
let walls =[
     //box surrounding player in center    
     {x_postion:620, y_position:290, width:10, height:100},
     {x_postion:800, y_position:290, width:10, height:100},
     {x_postion:620, y_position:290, width:60, height:10},
     {x_postion:750, y_position:290, width:60, height:10},
     {x_postion:620, y_position:390, width:60, height:10},
     {x_postion:750, y_position:390, width:60, height:10},
     //border of game 
     {x_postion:170, y_position:620, width:1100, height:10},
     {x_postion:170, y_position:90, width:1100, height:10},
     {x_postion:170, y_position:90, width:10, height:540},
     {x_postion:1270,y_position:90, width:10, height:540},

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
    wall.style.top = `${item.y_position}px`
    document.body.appendChild(wall)
})
//logic for collision 
function collisionDetect(a,b){
    return(
        // (a.y_position + a.width) <= (b.y_position)||
        // (a.y_position)>= (b.y_position + b.height)||
        // ((a.x_postion + a.width)<= b.x_postion)||
        // (a.x_postion >= (b.x_postion + b.width))
     
        a.x_postion > b.x_postion + b.width ||
        a.x_postion + a.width < b.x_postion ||
        a.y_position > b.y_position + b.height ||
        a.y_position + a.height < b.y_position
       
        // a.x_postion < b.x_postion + b.width &&
        // a.x_postion - a.width > b.x_postion &&
        // a.y_position < b.y_position + b.height&&
        // a.y_position + a.height > b.y_position

        // a.x_postion + a.width >= b.x_postion &&
        // a.x_postion <= b.x_postion + b.width
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