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
        ghost.style.bottom = y + 'px'
        console.log(y)
    }
    if(e.key ==="ArrowDown"){
        y = y - 3
        ghost.style.bottom = y + 'px'
        console.log(y)
    }
  
})

// ghost.addEventListener('click',()=> console.log('hi im ghost'))

//function to create and place divs or maze walls
// function makeWall(height,width,left,bottom){
//     let wall = document.createElement('div')
//     // wall.style.border = '1px dotted black'
//     wall.style.position = 'fixed'
//     wall.style.backgroundcolor = 'green'
//     wall.style.height = height + 'px'
//     wall.style.width =  width + 'px'
//     wall.style.left = left + 'px'
//     wall.style.botoom = bottom + 'px'
//     document.body.appendChild(wall)   
// }

// makeWall(500,10,700,200)

function makeWall(height,width){
    
// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red"; 
// div.style.color = "white";
// div.innerHTML = "Hello";
// document.body.append(div)
    let wall = document.createElement('div')
    wall.style.border = '1px dotted white'
    wall.style.position = 'fixed'
    wall.style.backgroundColor = 'green'
    wall.style.height = `${height}px`
    wall.style.width =  `${width}px`
    // wall.style.left = '100px'
    // wall.style.bottom = '50px'
    document.body.appendChild(wall) 
    console.log(height)  
}

makeWall(100,200)

function addText(){
    let p = document.createElement('p')
    p.textContent = "hi yo"
    document.body.appendChild(p)
}

addText()

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

// document.addEventListener('keyup', event => {
//     if (event.code === 'Space') {
//       console.log(a)
//     }
// })
async function makediv(){
    await console.log(a)
}