$(document).ready(function() {
    // Array to store choices
    const choices = ['rock', 'paper', 'scissors'];

    // Function to get a random choice for the computer
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to determine the winner
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a Tie!😕";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return "You Win!😁🎉";
        } else {
            return "You Lose!😭";
        }
    }

    // Event listener for button clicks
    $('#choices button').on('click', function() {
        // Get the user's choice
        const userChoice = $(this).text().toLowerCase().replace(/[^a-z]/g, '');

        // Get the computer's choice
        const computerChoice = getComputerChoice();

        // Update user and computer choice on the screen
        $('#userchoice').text(`Player: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`);
        $('#compchoice').text(`Computer: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);

        // Update result images
        $('.userresult img').attr('src', `${userChoice}.png`);
        $('.cpuresult img').attr('src', `${computerChoice}.png`);

        // Display the result
        const result = determineWinner(userChoice, computerChoice);
        $('#result').text(result);
    });
});
