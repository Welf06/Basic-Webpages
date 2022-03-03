const playerTurn = document.getElementById('player');
const buttons = document.querySelectorAll('button');
const message = document.querySelector('#msg')
function hide(n) {
   const hide = document.querySelector('.grid');
   hide.classList.add('hidden');
   message.style.padding = '80px';
   if (n===1){
      message.classList.add('red');
   }
   else if (n===2){
      message.classList.add('blue');
   }
   else{
      message.innerHTML = `IT'S A DRAW `;
      return
   }

   message.innerHTML = `Congratulations Player ${n}! `
} 

var game = ['', '', '',
            '', '', '',
            '', '', '',];

const winningConditions = [
               [0, 1, 2],
               [3, 4, 5],
               [6, 7, 8],
               [0, 3, 6],
               [1, 4, 7],
               [2, 5, 8],
               [0, 4, 8],
               [2, 4, 6]
           ];

var count = 0;
var flag = 0;

function clear(){
   document.querySelectorAll('.button').forEach(item => { 
      item.innerHTML = '';
            })
}


function start() {
   if(flag === 0){
   count = 0;
   flag = 1;
   clear()
   playerTurn.innerHTML = "Player 1"
   playerTurn.classList.add('red');
   document.querySelector('.grid').classList.remove('hidden');
   message.innerHTML = ``;
   message.classList.remove('red', 'blue');
   message.style.padding = '0px'
   }
}

function result(){
   for (let i=0; i<8; i++){
      const win = winningConditions[i];
      const a  = game[win[0]];
      const b = game[win[1]];
      const c = game[win[2]];
      if (a==='' || b==='' || c===''){
         continue;
      }

      if (a=== b && b===c){
         flag = 0;
         var playerWon =  Number(a) ;
         hide(playerWon);
         game = ['', '', '',
            '', '', '',
            '', '', '',];
         break;
      }

      let draw = !game.includes('');
      if (draw){
         flag=0;
         console.log("draw");
         setTimeout(hide, 1000);
         hide(0);
         game = ['', '', '',
            '', '', '',
            '', '', '',];
         return;
      }


   }
}


document.querySelectorAll('.button').forEach(item => {
   item.addEventListener('click', event => {
      if (flag === 1 && item.innerHTML === ''){
         if (count%2===0){
            playerTurn.innerHTML = "Player 1"
            playerTurn.classList.remove('blue');
            playerTurn.classList.add('red');
            item.innerHTML = "X";
            item.classList.add('red');
            game[item.id[7] - 1] = '1';
            console.log(game);
         }
         
         else if (count%2===1){
            playerTurn.innerHTML = "Player 2"
            playerTurn.classList.remove('red');
            playerTurn.classList.add('blue');
            item.innerHTML = "O";
            item.classList.add('blue');
            game[item.id[7] - 1] = '2';
         }
         count ++;
         result();
      }
   })

   item.addEventListener('mouseover', event => {
      if (flag === 1 && item.innerHTML === ''){
      item.classList.add('hover')
      setTimeout(function() {
         item.classList.remove('hover');
       }, 500);
      }
     }, false);

   })


