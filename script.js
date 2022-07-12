// window.alert('we have java script')
let ghost = document.querySelector('#ghost')

function setPositon(item,num1,num2){
    let one =  item.style.left = num1 + 'px'
    let two= item.style.bottom = num2 +'px'
    console.log(one,two)
    return one, two
}

setPositon(ghost,100,100)

let x = ghost.style.left
let y = ghost.style.right

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowLeft'){
        direction = 'left'
        console.log('left')
    }
    if(e.key ==='ArrowUp'){
        directon = 'up'
        console.log('up')
    }
    if(e.key ==="ArrowDown"){
        direction = 'down'
        console.log('down')
    }
    if(e.key ==="ArrowRight"){
        direction = 'right'
        console.log("right")
    }
})

// ghost.addEventListener('click',()=> console.log('hi im ghost'))