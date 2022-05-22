let arr=["Rock", "Paper", "Scissors"]

function computerPlay(){
  return arr[Math.floor(Math.random()*3)];
}
for(let i=0; i<15; i++){
console.log(computerPlay());
}
