// wait for the DOM to finish loading
var turn = "O";
window.addEventListener("load", function () {
  // all your code should go in here.

//turns
function xOrO(){
turn = turn === "X" ? "O" : "X";
return turn;
}

//event listener
for(var i=0; i < 9; i++) {
var box = document.getElementById("box" + i)
box.addEventListener("click", function(event) {
    if (this.innerHTML === "X" || this.innerHTML === "O"){

    } else {
    var turn = xOrO();
    this.innerHTML = turn;
    this.className = turn;
}
})
}

//clear board
var button = document.getElementById("restart")
button.addEventListener("click", function(event){
  window.location.reload();
 

})


//get winner
var winner = [];
document.querySelector

});
