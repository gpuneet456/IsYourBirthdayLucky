const dob = document.querySelector("#dob");
const luckynumber = document.querySelector("#luckynumber");
const checkButton = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output");
checkButton.addEventListener("click", function checkNumber() {
    res = calculateSum(dob.value);
    compareValues(res, Number(luckynumber.value));
    // console.log(res);
});

function compareValues(sum, luckynumber) {
    if (sum && luckynumber) {
        if (sum % luckynumber === 0) {
            outputBox.innerText = "Your birthday is lucky ððð";
        } else {
            outputBox.innerText = "Your birthday is not luckyð¢";
        }
    } else {
        outputBox.innerText = "Please enter both the fields";
    }
}

function calculateSum(dateOfBirth) {
    dateOfBirth = dateOfBirth.replaceAll("-", "");
    let sum = 0;
    // console.log(dateOfBirth);
    for (let i = 0; i < dateOfBirth.length; i++) {
        sum += Number(dateOfBirth.charAt(i));
    }
    return sum;
}