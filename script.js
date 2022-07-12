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