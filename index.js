const pplEntered = document.getElementById("ppl-entered")
const incrementBtnEl = document.getElementById("increment-btn")
const saveBtnEl = document.getElementById("save-btn")
const entriesEl = document.getElementById("entries")
let num = 0

incrementBtnEl.addEventListener("click", function() {
num ++    
pplEntered.textContent = num

})

saveBtnEl.addEventListener("click", function() {
 entriesEl.textContent += num + " - "
 num = 0
 pplEntered.textContent = 0
 
})

