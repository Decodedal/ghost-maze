// window.alert('we have java script')
let ghostRef = document.querySelector('#ghost');
let start = document.querySelector('#button');
let keyCountRef = document.querySelector("#keys-count")
let win = false;
let keyCount = 0;

function updateKeyCount(){
    keyCountRef.textContent = keyCount
    if(keyCount === 3){
       exitSign.x_postion = 666;
       exit.style.left = `${exitSign.x_postion}px`;
    }
}

updateKeyCount()

function setPositon(item,num1,num2){
    let one =  item.style.left = num1 + 'px'
    let two= item.style.bottom = num2 +'px'
    console.log(one,two)
    return one, two
}
let ghost = {
    x_postion : 696,
    y_position :218,
    width: 50,
    height : 50, 
}

ghostRef.style.left = ghost.x_postion + 'px'
ghostRef.style.top = ghost.y_position + 'px'
ghostRef.style.width = ghost.width + 'px'
ghostRef.style.height = ghost.height + 'px'

function ghostHurt(){
    ghostRef.style.transform = 'rotate(360deg)'
    ghostRef.style.filter = 'grayscale(100%)'
}

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowLeft'){
        ghost.x_postion -= 6
        if(checkMove()){
        ghostRef.style.left = ghost.x_postion + 'px' 
        ghostRef.style.transform = 'scaleX(1)'
        // console.log(ghost.x_postion)
        }else{
            ghost.x_postion += 6
        }
    }
    if(e.key ==="ArrowRight"){
        ghost.x_postion += 6
        if(checkMove()){
        ghostRef.style.left = ghost.x_postion + 'px' 
        ghostRef.style.transform = 'scaleX(-1)'
        // console.log(ghost.x_postion)
        }else{
            ghost.x_postion -= 6
        }
       
    }
    if(e.key ==='ArrowUp'){
        ghost.y_position -=6
        if(checkMove()){
        ghostRef.style.top = ghost.y_position + 'px'
        // console.log(ghost.y_position)
        }else{
            ghost.y_position += 6
        }
        
    }
    if(e.key ==="ArrowDown"){
        ghost.y_position += 6
        if(checkMove()){
        ghostRef.style.top = ghost.y_position + 'px'
        // console.log(ghost.y_position)
        }else{
            ghost.y_position -= 6
        }
    }
  checkKeys()
  checkExit()
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
    //pivotal end piece
    {x_postion:1270,y_position:530, width:10, height:100},
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
     {x_postion:1270,y_position:90, width:10, height:440},
     
     //top right 
     {x_postion:900, y_position:100, width:10, height:300},
     {x_postion:900, y_position:400, width:300, height:10},
     {x_postion:1000, y_position:200, width:10, height:100},
     {x_postion:1000, y_position:300, width:270, height:10},
     {x_postion:1000, y_position:200, width:160, height:10},
     {x_postion:330, y_position:500, width:350, height:10},
     {x_postion:750, y_position:500, width:350, height:10},
     {x_postion:750, y_position:400, width:10, height:100},
     //top left
     {x_postion:430, y_position:200, width:10, height:200},
     {x_postion:530, y_position:200, width:10, height:300},
     {x_postion:330, y_position:200, width:10, height:300},
     {x_postion:330, y_position:200, width:100, height:10},

     
    
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
        // additional numbers shrink the ghost hit box so player doesnt get stuck on corner 
        a.x_postion + 7 > b.x_postion + b.width ||
        a.x_postion + a.width - 5 < b.x_postion ||
        a.y_position +6 > b.y_position + b.height ||
        a.y_position + a.height -5 < b.y_position
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
    // console.log(result)
    return result
}

//set enemy paramiters

enemyPos=[]
//create enemy in the dom
function defineEnemy(){
    let enemy = document.createElement('img');
    enemy.src = "assets/imgs/kisspng-mega-man-11-video-games-pixel-art-sprite-mega-man-megaman-x-8-bit-www-imgkid-com-the-image-kid-h-5cd6b5d4a2f441.4503273315575751246675.png" 
    enemy.style.position = 'fixed'
    enemy.style.height = '50px'
    enemy.style.width =  '50px'
    document.body.appendChild(enemy)
    enemyPos.push(enemy)
    return enemy
}

//logic to set enemy movement path 
function newEnemy(x_postion,y_position){
    let sprite = defineEnemy()
    let direction = null;
//sweet sweet glorious success
    function checkEnemyCollision(){ 
        if(
        ghost.x_postion + 7 > x_postion + 50 ||
        ghost.x_postion + ghost.width - 5 < x_postion ||
        ghost.y_position + 6 > y_position + 50 ||
        ghost.y_position + ghost.height - 5 < y_position){
            
            return false
        }
        console.log('touchin a ghosty')
        ghostHurt()
        return true
    }

    function moveEnemy(){
        if (direction === 'left'){
            x_postion -= 1.
            sprite.style.transform = 'scaleX(-1)'
        }
        if( direction === 'right'){
            x_postion += 1
            sprite.style.transform = 'scaleX(1)'
            // console.log(enemyPos[1].style.left)
            checkEnemyCollision()
        }
        if(direction ==='up'){
            y_position -= 1
        }
        if(direction === 'down'){
            y_position += 1
        }
        sprite.style.left = x_postion +'px'
        sprite.style.top = y_position +'px'
    
    }
    setInterval(moveEnemy,10)
   
    function walkUp(time){
        direction = 'up'
        return new Promise((resolve)=>{
            setTimeout(()=>{
                direction = null
                resolve()
            },time)
        })
    }
    function walkDown(time){
        direction = "down"
        return new Promise((resolve)=>{
            setTimeout(()=>{
                direction = null
                resolve()
            },time)
        })
    }
    function walkLeft(time){
        direction = 'left'
        return new Promise((resolve)=>{
            setTimeout(()=>{
                direction = null
                resolve()
            },time)
        })
    }
    function walkRight(time){
        direction = 'right'
        return new Promise((resolve)=>{
            setTimeout(()=>{
                direction = null
                resolve()
            },time)
        })
    }
    function stop(){
        direction = null
    }
    return {
        sprite :sprite,
        walkUp :walkUp,
        walkDown: walkDown,
        walkLeft :walkLeft,
        walkRight :walkRight,
        stop:stop
    }
}
//array of new enemys
let enemyGroup =[ 
    newEnemy(1208, 150),
    newEnemy(560 , 233)
]
//defining enemy trajectorys
// enemyGroup[0].walkLeft(2500)
//       .then(()=> enemyGroup[0].walkDown(1000))
function enemyOneMovment(){
enemyGroup[1].walkRight(2800)
             .then(()=>enemyGroup[1].walkUp(1300))
             .then(()=> enemyGroup[1].walkLeft(2800))
             .then(()=>enemyGroup[1].walkDown(1300))
             .then(()=>enemyGroup[1].stop)
}
console.log(enemyPos[1])
enemyOneMovment()


    //create keys to gather to win game
    let keys = [
        {width:50, height:50, x_postion:1028, y_position:228, display:'block'},
        {width:50, height:50, x_postion:364, y_position:236, display:'block'},
        {width:50, height:50, x_postion:200, y_position:557, display:'block'}
    ]
// creates all keys and adds them to an array whos x and y position we can access
    let keyRef = []
    for(let i = 0; i<keys.length; i++){
    let key = document.createElement('img')
    key.src = "assets/imgs/pngfind.com-zelda-icon-png-6837925.png"
    key.style.position = 'fixed'
    key.style.display =`${keys[i].display}`
    key.style.height = `${keys[i].height}px`
    key.style.width =  `${keys[i].width}px`
    key.style.left =   `${keys[i].x_postion}px`
    key.style.top =    `${keys[i].y_position}px`
    document.body.appendChild(key)
    keyRef.push(key)
    }
    

    
    //checks if the ghost is touching the keys, if so remove key from the board and add to key count
    function checkKeys(){
        let result 
        for (let i = 0; i<keys.length; i++){
            if (!collisionDetect(ghost, keys[i])){
                result = false;
                 keyRef[i].style.width = '0px'
                 keys[i].x_postion = 0
                //  keyRef[i] 
                 keyCount++
                 updateKeyCount()
            }else{
                 result = true;
            }
        }
        console.log(result)
    }
//declare and create exit to win the game
    let exitSign = {
        width:100, height: 50, x_postion : 66666, y_position :318,
    }

    let exit = document.createElement('img');
    exit.src = "assets/imgs/exit.png"
    exit.style.position = 'fixed'
    exit.style.height = `${exitSign.height}px`
    exit.style.width =  `${exitSign.width}px`
    exit.style.left =   `${exitSign.x_postion}px`
    exit.style.top =    `${exitSign.y_position}px`
    document.body.appendChild(exit)

//if the ghost reaches the exit you win.
    function checkExit(){
        if(!collisionDetect(ghost,exitSign)){
            console.log('you win the Game')
        }
    }
    
