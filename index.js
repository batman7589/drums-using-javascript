


var NumberofClicks = document.querySelectorAll(".drum").length;



for(var i = 0; i < NumberofClicks; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function HandleClick(){
      
    
     var playSound = this.innerHTML;

        Makesound(playSound);
        ButtonAnimation(playSound);
      });

}  

document.addEventListener("keydown", function(event){
      Makesound(event.key);
      ButtonAnimation(event.key);

});


      function Makesound(key){
                    switch (key) {
            case "w":
                 
                 var crash = new Audio("sounds/crash.mp3");
                 crash.play();

                break;
                   case "a":
                     var kick = new Audio("sounds/kick-bass.mp3");
                     kick.play();
                      break;

                        case "s":
                            var snare = new Audio("sounds/snare.mp3");
                            snare.play();
                             break;

                              case "d":
                                var tom1 = new Audio("sounds/tom-1.mp3");
                                tom1.play();
                                break;
                                   
                   case "j":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                                    
                     case "k":
                        var tom3 = new Audio("sounds/tom-3.mp3");
                        tom3.play();
                        break;
                          
                           case "l":
                             var tom4 = new Audio("sounds/tom-4.mp3");
                             tom4.play();
                             break;
        
            default:
            
        }







                  }
                           function ButtonAnimation(currentKey){
                            var activeKey = document.querySelector("." + currentKey);
                            activeKey.classList.add("pressed");

                           setTimeout(function() {
                            activeKey.classList.remove("pressed");
                            
                           }, 100);


                           }


