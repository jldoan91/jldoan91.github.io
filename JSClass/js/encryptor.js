//define variables for all html elements needed
const enteredMessage = document.querySelector('#originalMessage');
const enteredKey = document.querySelector('#key');
const decryptKey = document.querySelector('#decryptKey');
const encryptBtn = document.querySelector('#encrypt');
const decryptBtn = document.querySelector('#decrypt');
const displayMessage = document.querySelector('#displayMessage');
const attemptCount = document.querySelector('#attemptCount');
const msgHeader = document.querySelector('#msgHeader');
const encryptBox = document.querySelector('#encryptBox');
const msgBox = document.querySelector('#msgBox');
const decryptBox = document.querySelector('#decryptBox');
//define starting attempt count and initialize the message and key variables
let attempts = 3;
let encryptedMsg = '';

//add event listener to encrypt button
encryptBtn.addEventListener('click', function(){
  //if message or key is blank give alert that both are required
  if(enteredKey.value.length === 0 || enteredMessage.value.length ===0){
    alert('Message and Key is required!');
  } else{
    //encrypt the message using the CryptoJS library
    encryptedMsg = CryptoJS.AES.encrypt(enteredMessage.value, enteredKey.value).toString();
    //update the message box with the encrypted message
    displayMessage.innerHTML = encryptedMsg;
    //disable the button and clear both input fields
    enteredMessage.value = '';
    enteredKey.value = '';
    encryptBtn.setAttribute('disabled', '');
  }
});

decryptBtn.addEventListener('click', function(){
  if(decryptKey.value.length === 0){
    alert('Your key cannot be blank!');
  } else{
    let decryptMsg  = CryptoJS.AES.decrypt(encryptedMsg, decryptKey.value);
    let decryptStr = decryptMsg.toString(CryptoJS.enc.Utf8);
    if(decryptStr.length === 0){
      //if wrong key take one away from attempts and show encrypted message
      attempts -= 1;
      msgHeader.innerHTML = '<strong>That is incorrect</strong>'
      attemptCount.innerHTML = attempts;
      displayMessage.innerHTML = encryptedMsg;
      if(attempts === 0){
        //if no more attempts then make the message null
        encryptedMsg = null;
        //give to many failed attempts message and reset button
        encryptBox.classList.remove('container');
        encryptBox.innerHTML = '';
        msgHeader.innerHTML = '<strong>To many failed attempts!</strong>';
        displayMessage.innerHTML = '<button onClick="window.location.reload(false)">Reset</button>';
        decryptBox.innerHTML = '';
        decryptBox.classList.remove('container');
      }//if decrypt string > 0 length display the decrypted message
    } else{
      msgHeader.innerHTML = '<strong>That is corect!</strong>';
      displayMessage.innerHTML = `${decryptStr} <br> <button onClick="window.location.reload(false)">Reset</button>`;
    }
  }
});