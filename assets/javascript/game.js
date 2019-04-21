$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    var totalScore= 0; 
    var wins= 0;
    var losses = 0;
    var snd = new Audio('assets/javascript/youwon.mp3'); 
    var snd2 = new Audio('assets/javascript/youlost.mp3');   


    $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        user= 0;
        $('#finalTotal').text(totalScore);
        } 
  
        function yay(){
            snd .onended = function () { alert("You Won!")};
            snd .play();
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  function loser(){
    snd2 .onended = function () { alert("You lose!")};
    snd2 .play();
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
 
    $('#one').on ('click', function(){
      totalScore = totalScore + num1;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore); 

      if (totalScore == Random){
            yay();
          }
          else if ( totalScore > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      totalScore = totalScore + num2;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore); 
          if (totalScore == Random){
            yay();
          }
          else if ( totalScore > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      totalScore = totalScore + num3;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore);
            if (totalScore == Random){
            yay();
          }
          else if ( totalScore > Random){
            loser();
          } 
    })  

    $('#four').on ('click', function(){
      totalScore = totalScore + num4;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore); 
        
            if (totalScore == Random){
            yay();
          }
          else if ( totalScore > Random){
            loser();
          }
    });   
  }); 