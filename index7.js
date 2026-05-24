

let countEl = document.getElementById("count-el")

let count =  0

function addOne() {
    count += 1
    countEl.textContent = count
    console.log(count)
    

}


function addTwo() {
    count += 2
    countEl.textContent = count
    console.log(count)
    

}



function addThree() {
    count += 3
    countEl.textContent = count
    console.log(count)
    

}







let countsEl = document.getElementById("countTwo-el")


let counts =  0

function addsOne() {
    counts += 1
    countsEl.textContent = counts
    console.log(counts)
    

}


function addsTwo() {
    counts += 2
    countsEl.textContent = counts
    console.log(counts)
    

}



function addsThree() {
    counts += 3
    countsEl.textContent = counts
    console.log(counts)
    

}

// 

function newGame() {
    let newGAme = document.getElementById("new-game")
    let countPi = document.getElementById("countP-el")


        count = 0;  
        counts = 0;        
        period = 1;
        countEl.textContent = 0;            // Reset current count
        countsEl.textContent = 0;      // Update counter display
        countPi.textContent = 0;  
        newGAme.textContent = "New Game";      // Clear all saved entries
        
}
    



    let countPi = document.getElementById("countP-el")
    let period = 1

function endGame() {
    
    period += 1

    countPi.textContent = period
    console.log(period)
}


endGame()

endGame()
endGame()



























































































































































































































































































