var dice1=document.querySelectorAll("#dice1>div>div");
var dice2=document.querySelectorAll("#dice2>div>div");
document.querySelector("button").addEventListener("click",function(){
    clear(dice1);
    clear(dice2);
    var player1 = Math.floor(Math.random() * 6 + 1);
    var player2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".p1").textContent="Player 1 : "+player1;
    document.querySelector(".p2").textContent="Player 2 : "+player2;
    visible(dice1,player1);
    visible(dice2,player2);
    if(player1>player2){
        document.querySelector("h2").textContent="Player 1 WINS."
    }
    else if(player1<player2){
        document.querySelector("h2").textContent="Player 2 WINS."
    }
    else{
        document.querySelector("h2").textContent="DRAW."
    }
    
});
function clear(dice){
    for (let index = 0; index < dice.length; index++) {
        dice[index].classList.remove("visi");
        
    }
}
function visible(a,n){
    switch (n) {
        case 1:
            a[3].classList.add("visi");
            break;
        case 2:
            a[0].classList.add("visi");
            a[6].classList.add("visi");
            break;
        case 3:
            a[0].classList.add("visi");
            a[3].classList.add("visi");
            a[6].classList.add("visi");
            break;
        case 4:
            a[0].classList.add("visi");
            a[1].classList.add("visi");
            a[5].classList.add("visi");
            a[6].classList.add("visi");
            break;
        case 5:
            a[0].classList.add("visi");
            a[1].classList.add("visi");
            a[3].classList.add("visi");
            a[5].classList.add("visi");
            a[6].classList.add("visi");
            break;
        case 6:
            a[0].classList.add("visi");
            a[1].classList.add("visi");
            a[2].classList.add("visi");
            a[4].classList.add("visi");
            a[5].classList.add("visi");
            a[6].classList.add("visi");
            break;
        default:
            break;
    }

}