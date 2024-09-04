const boxes = document.querySelectorAll('.box')
const numbers = document.querySelectorAll('.number')
const numsContainer = document.querySelector('.nums')

numbers.forEach(number =>{
    number.addEventListener('click',()=>{

        const newNumber = document.createElement('div')
        newNumber.classList.add('num')
        newNumber.innerText = number.innerText

        numsContainer.append(newNumber)

        number.style.display = 'none'
    })
})

let firstClickedBox = null

function transTopMostElement(from, to){

    const numEl = from.querySelectorAll('.num')
    if(numEl.length === 0) return

    const topEl = numEl[numEl.length - 1]
    const numNumsContainer = to.querySelector('.numNums')

    if(numNumsContainer){
        numNumsContainer.append(topEl)
    }
}

boxes.forEach(box =>{

    box.addEventListener('click',(event)=>{

        const nextClickedBox = event.currentTarget

        if(firstClickedBox){
            transTopMostElement(firstClickedBox, nextClickedBox)

            firstClickedBox = null
        } else{

            firstClickedBox = nextClickedBox
        }
    })
})