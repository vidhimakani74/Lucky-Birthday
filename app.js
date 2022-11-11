var birthDate = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#check-number");

function calculateSum(dob) {
  dob = dob.replaceAll("-","");
  let sum = 0;
  for (let i=0; i<dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "yehh.. Your Birthaday is LUCKY!🥳";
  } else {
    outputBox.innerText = "Sorry, Try another Lucky Number 😢";
  }
}

function checkLuckyBirthday() {
  var dob = birthDate.value;
  var sum = calculateSum(dob);
  if (sum && luckyNumber) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText = "Please fillup both fields📢";
  }
}
checkNumberButton.addEventListener("click", checkLuckyBirthday);
