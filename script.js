(function (){

    function getRandomInt (max) {
        return Math.floor( Math.random() * max) + 1 ;
    }

    const peopleInClass = 15;
    

    document.getElementById('userGuessLabel').innerHTML = `Guess a number between 1 and ${peopleInClass}   `

    document.getElementById('guessButton').addEventListener('click', function() {

        const secretNumber = (getRandomInt(peopleInClass));
        const  userGuess = document.getElementById ('userGuess').value;

        console.log("generated secret number is " + secretNumber )
        console.log("User guess is " + userGuess)


         if (userGuess == secretNumber ) {
        document.getElementById('result').innerHTML = `Yesssss your guess (${userGuess}) was correct. you won the cake.` ;
    }

        else {
        document.getElementById('result').innerHTML = `Your guess (${userGuess}) was wrong. The secret number was (${secretNumber}) try again.` ;
        
        };
        
    } );
    
})();