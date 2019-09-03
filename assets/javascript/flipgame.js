(function(){
    window.onload = function(){
        // did we connect
        //console.log("hey there");

        

        // get those Dom things
        let cards = [];
        cards.push(document.querySelector("#card0"));
        cards[1] = document.querySelector("#card1");
        cards[2] = document.querySelector("#card2");
        cards[3] = document.querySelector("#card3");
        cards[4] = document.querySelector("#card4");
        cards[5] = document.querySelector("#card5");
        cards[6] = document.querySelector("#card6");
        resetButton = document.querySelector("#resetButton");
        
        // 0 is face down
        // 1 is face up
        // 3 will be removed
        let cardStateStart = [0,1,0,0,1,1,0];
        let cardState = [0];

        // initialize cards
        // note that black is face down
        // note that white is face up
        // function to reset/iniilize
        function startGame(){
            for(let i = 0; i < cardStateStart.length; i++){
                if(cardStateStart[i] == 0){
                    cardState[i] = 0;
                    cards[i].style.backgroundColor = "black";
                }
                else{
                    cardState[i] = 1;
                    cards[i].style.backgroundColor = "white";
                }
            }
        }

        startGame();

        resetButton.addEventListener("click", () => startGame());

        // takes the index location of the cardState/cards
        function flipCard(location){
            // make sure the index location is valid for our number of cards
            if((location >= 0) && (location < cardState.length)){
                // if card is face down mark it as up
                // also change how the card apears to the user
                if(cardState[location] == 0){
                    //console.log("0");
                    cardState[location] = 1;
                    cards[location].style.backgroundColor = "white";
                }
                // do the oposite of above
                else if(cardState[location] == 1){
                    //console.log("1");
                    cardState[location] = 0;
                    cards[location].style.backgroundColor = "black";
                }
            }
        }

        // try to remove cards
        function tryRemove(location){
            // if the card is face up mark the card as removed "3"
            // style the card so that it apeas to disapear
            // also flip the cards around itself
            // note that flidCard handles index locations outside of what is valid
            if(cardState[location] == 1){
                cardState[location] = 3;
                cards[location].style.backgroundColor = "cadetblue";
                flipCard( location-1 );
                flipCard(location+1);
            }
        }

        // eventHandlers
        // each one just trys to remove itselfe
        card0.addEventListener("click", () => tryRemove(0));

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