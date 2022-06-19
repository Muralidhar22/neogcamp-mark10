const randomMessages = ["YOU Mad or what?", "You come and wash the plates da","This is business"]
const billAmount = document.getElementById("bill-amount");
const cashReceived = document.getElementById("cash-given");
const labelCashReceived = document.querySelector("label[for=cash-given]");
const  displayMessage = document.querySelector(".output-msg");
const checkBtn = document.getElementById("check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

billAmount.addEventListener('input',function valueChange(event){
        if(billAmount.value){
            labelCashReceived.style.display = "block";
            cashReceived.style.display = "block";
        }
        else{
            cashReceived.value= '';
            labelCashReceived.style.display = "none";
            cashReceived.style.display = "none";
        }
});

checkBtn.addEventListener("click", function validateAmount() {
        hideMessage();
        if (Number(billAmount.value) > 0) {
          // 12
          if (Number(cashReceived.value) >= Number(billAmount.value)) {
            console.log(typeof cashReceived.value,typeof billAmount.value)
            const amountToBeReturned = cashReceived.value - billAmount.value; // 2022 - 12 = 2010
            calculateChange(amountToBeReturned);
          } else {
            showMessage(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
          }
        } else {
          showMessage("Invalid Bill Amount");
        }
});


function calculateChange(amountToBeReturned) {
   
    for (let i = 0; i < availableNotes.length; i++) {
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
      amountToBeReturned = amountToBeReturned % availableNotes[i];
      noOfNotes[i].innerText = numberOfNotes;
    }
  }

  
function hideMessage() {
    displayMessage.style.display = "none";
}

function showMessage(msg) {
    displayMessage.style.display = "block";
    displayMessage.innerHTML = `${msg} Pay the bill!`;
  }
