//document.getElementById().innerText = 5

//let count = 0
//count = count + 1
//console.log(count)

//function increment() {

  //  console.log (button)

//}
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
 count = count + 1
 countEl.innerText = count 
    console.log(count)
}

function save(){
    console.log(count)
}



