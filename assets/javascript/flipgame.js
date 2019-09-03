(function(){
    window.onload = function(){
        // did we connect
        console.log("hey there");

        // get those Dom things
        let cards = [];
        cards[0] = document.querySelector("#card0");
        cards[1] = document.querySelector("#card1");
        cards[2] = document.querySelector("#card2");
        cards[3] = document.querySelector("#card3");
        cards[4] = document.querySelector("#card4");
        cards[5] = document.querySelector("#card5");
        cards[6] = document.querySelector("#card6");
        
        // 0 is face down
        // 1 is face up
        // 3 will be removed
        let cardState = [0,1,0,0,1,1,0];

        //initialize cards
        for(let i = 0; i < cards.length; i++){
            if(cardState[i] == 0){
                cards[i].style.backgroundColor = "black";
            }
            else{
                cards[i].style.backgroundColor = "white";
            }
        }

        function flipCard(location){
            if((location >= 0) && (location < cardState.length)){
                if(cardState[location] == 0){
                    console.log("0");
                    cardState[location] = 1;
                    cards[location].style.backgroundColor = "white";
                }
                else if(cardState[location] == 1){
                    console.log("1");
                    cardState[location] = 0;
                    cards[location].style.backgroundColor = "black";
                }
            }
        }

        function tryRemove(location){
            if(cardState[location] == 1){
                cardState[location] = 3;
                cards[location].style.backgroundColor = "cadetblue";
                flipCard(location-1);
                flipCard(location+1);
            }
        }
        // eventHandlers
        card0.addEventListener("click",function(){
            
            tryRemove(0);
        });

        card1.addEventListener("click",function(){
            
            tryRemove(1);
        });

        card2.addEventListener("click",function(){
            
            tryRemove(2);
        });

        card3.addEventListener("click",function(){
            
            tryRemove(3);
        });

        card4.addEventListener("click",function(){
            
            tryRemove(4);
        });

        card5.addEventListener("click",function(){
            
            tryRemove(5);
        });

        card6.addEventListener("click",function(){
            
            tryRemove(6);
        });


    };
})();