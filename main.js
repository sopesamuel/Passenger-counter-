//document.getElementById().innerText = 5

//let count = 0
//count = count + 1
//console.log(count)

//function increment() {

  //  console.log (button)

//}
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0



function increment() {
 count += 1
 countEl.textContent = count 
    console.log(count)
}

function save(){
    let countdash = count + " - "
    saveEl.textContent += countdash
countEl.textContent = 0
    console.log(count)
    count= 0
}



