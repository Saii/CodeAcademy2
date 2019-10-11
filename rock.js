const getUserChoice= function (userInput) {
  userInput=userInput.toLowerCase()
 if (userInput==="rock"||userInput=="paper"||userInput==="scissor"){
  return userInput;} else {    console.log("Escolha um paramentro valido")
}
 } 



const getPcChoice=  function (pcInput){ 
 pcInput=pcInput.toLowerCase();
if (pcInput==="rock"||pcInput=="paper"||pcInput==="scissor"){
  return pcInput;
  } else{
    console.log("Escolha um paramentro valido")
  }
}
function getRandomArbitrary(min,max) {
  return Math.random() * (max - min) + min;
}

function getComputerChoice(){
  var number= getRandomArbitrary(0,3) ;
  console.log(number);
  if( Math.floor(number)===0){
    return 'rock';
  } else if ( Math.floor(number)===1)  {
    return 'paper';
  } else {
    return "scissor";
  }
}

function game(userInput,pcInput){
 console.log(`O usuário escolheu ${userInput}`);
 console.log(`O PC escolheu ${pcInput}`);




if(userInput==='rock' && pcInput ==='paper'){
  console.log("Pc win");
} else if (userInput==="paper"&& pcInput==="scissor") {
  console.log("Pc win");
} else if( userInput==="scissor"&& pcInput==="rock"){
  console.log("Pc win");
} else if ( userInput==="scissor"&& pcInput==="paper"){
  console.log("User win");
} else if (userInput==="rock"&& pcInput==="scissor"){
    console.log("User win");
} else if(userInput==="paper"&& pcInput==="rock"){
      console.log("User win");
} else if( userInput===pcInput){
  console.log("empate");
}
  
}


game('scissor',getComputerChoice());