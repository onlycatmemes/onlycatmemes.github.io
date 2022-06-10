window.onload = function () {
  
    var seconds = 05; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var bestSec = document.getElementById('bestsec');
    var bestTen = document.getElementById('bestten');
    var bestSeco = 5;
    var bestTens;
    var Interval ;
    let step = 1;
  
    buttonStart.onclick = function()  {
      if (step == 1) {
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       step = 2;
       buttonStart.innerHTML = "Stop";
      return;
      }
      if (step == 2) {
       
         step = 3;
         buttonStart.innerHTML = "Reset";
         if (seconds < bestSeco && seconds > 0){
        
            bestSeco = seconds;
            bestTens = tens;
            bestSec.innerHTML = bestSeco;
            bestTen.innerHTML = bestTens; 
            if (tens < 10){
                bestTen.innerHTML = "0" + bestTens;  
                 }
            if (tens == 0 && seconds == 1) {
                document.getElementById("winner").style.display = "block"; 
            }
            clearInterval(Interval);
            return;
         }
        if (seconds == bestSeco) {
            if (bestTens > tens) {
            bestSeco = seconds;
            bestTens = tens;
            bestSec.innerHTML = bestSeco;
            bestTen.innerHTML = bestTens;
             if (tens < 10){
            bestTen.innerHTML = "0" + bestTens; 
             }
            clearInterval(Interval);
            return;
            }
        }
        clearInterval(Interval);
        return;
      }
    if (step == 3) {
        clearInterval(Interval);
        tens = "00";
        seconds = "05";
        buttonStart.innerHTML = "Start";
        appendSeconds.innerHTML = seconds; 
        appendTens.innerHTML = tens;
        step = 1;
        return;
    }
}
    function startTimer () {
        if (seconds >= 0) 
        tens--; 
        
        if(tens <= 9){
          appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9){
          appendTens.innerHTML = tens;
          
        } 
      
        if (tens < 00) {
          seconds--;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 99;
          appendTens.innerHTML = 99;
        }
        
        if (seconds < 0){
          appendSeconds.innerHTML = "FA";
          appendTens.innerHTML = "IL";
        }
      
    }
}
