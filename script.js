let encryptedMessage = '';
let choice = ''
let input = false

function encryptMessage() {
    const message1 = document.getElementById('message1').value;
    const message2 = document.getElementById('message2').value;
    if (!message1 || !message2) {
        alert('Please enter both messages.');
        return;
    }
    choice = Math.random() < 0.5 ? message1 : message2; // Randomly select one message to encrypt

    encryptedMessage = CryptoJS.MD5(choice).toString()

    if (!input) {
        document.getElementById('encryptedMessage').textContent = `Mystery Encryption: ${encryptedMessage}`;
        document.getElementById('message1').readOnly = true;
        document.getElementById('message2').readOnly = true;
    } else {
        alert('Guess first or reset the game!')
    }

    input = true
}


function sendEncryptedMessage() {
    const message = document.getElementById('sendField').value;

    if(message === document.getElementById('message1').value || message === document.getElementById('message2').value){
        alert('You cant encrypt your messages')
        return
    }


    if (!message) {
        alert('Please enter a message.');
        return;
    }
    encryptedMessage = CryptoJS.MD5(message).toString()
    document.getElementById('sentMessages').textContent = `Encrypted Message: ${encryptedMessage}`;
}

function checkGuess() {
    if(!input){
        alert('Please encrypt your message first!');
        document.getElementById('guess1').checked = false
        document.getElementById('guess2').checked = false
        return;
    }
    const guess1 = document.getElementById('guess1').checked;
    const guess2 = document.getElementById('guess2').checked;
    if (!guess1 && !guess2) {
        alert('Please make a guess.');
        return;
    }
    let guessResult = '';
    if ((guess1 && choice === document.getElementById('message1').value) ||
        (guess2 && choice === document.getElementById('message2').value)) {
            alert('Congratulations! Your guess is correct.');
    } else {
            alert('Sorry, your guess is incorrect. Try again.');
            reset()
    }
}

function reset(){
    encryptedMessage = '';
    document.getElementById('encryptedMessage').textContent = "";
    document.getElementById('sentMessages').textContent = "";
    document.getElementById('message1').value = "";
    document.getElementById('message2').value = "";
    document.getElementById('sendField').value = "";
    document.getElementById('message1').readOnly = false;
    document.getElementById('message2').readOnly = false;
    document.getElementById('guess1').checked = false
    document.getElementById('guess2').checked = false
    input = false
}
