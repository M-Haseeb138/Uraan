
// let age = prompt("Enter the age in years");

function Convertor() {
    const age = document.getElementById('age').value;
    if (age == '' || age < 0) {
        document.getElementById('result').innerText = 'Please enter a valid age';
        return;
    }
    else {
        const day = age * 365;
        document.getElementById('result').innerText = `You are ${day} days old `;

    }
}

function HourtoSecondConvertor() {

    const hours = document.getElementById('hours').value;
    if (hours == '' || hours < 0) {
        document.getElementById('hoursResult').innerText = 'Please enter a valid hour';
        return;
    }

    else {
        const second = hours * 3600;
        document.getElementById('hoursResult').innerText = `Your hours in seconds is =  ${second} seconds`
    }

}

function findNextNumber(array, number) {
    const index = array.indexOf(number);
    if (index === -1) {
        return `Number ${number} not found in the array.`;
    }
    if (index === array.length - 1) {
        return `Number ${number} is the last element and has no next number.`;
    }
    else {
        return array[index + 1];
    }

}

function findNextNumberHandler() {

    const arrayInput = document.getElementById('array').value;
    const numberInput = parseInt(document.getElementById('number').value);


    if (arrayInput === " " || isNaN(numberInput)) {
        document.getElementById('nextnumberresult').innerText = 'Please enter valid inputs.';
        return;
    }

    const array = arrayInput.split(',').map(num => parseInt(num.trim()));


    const result = findNextNumber(array, numberInput);

    document.getElementById('nextnumberresult').innerText = result;
}


function TransformName() {
    const name = document.getElementById('lowercasename').value;
    if (name) {
        const firstletter = name.charAt(0);
        const firstlettercapital = firstletter.toUpperCase();
        const remainingLetters = name.substring(1)
        const capitalletter = firstlettercapital + remainingLetters;
        document.getElementById('newname').innerText = capitalletter;
    }
    else {
        document.getElementById('newname').innerText = 'please Enter the valid name';
    }




}


function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const BMI = weight / (height * height);
    document.getElementById('BmiResult').innerText = BMI;

}


function generateArray() {
    const size = parseInt(document.getElementById("arraySize").value, 10);
    if (isNaN(size) || size <= 0) {
        document.getElementById("generatedArray").textContent = "Please enter a valid positive number.";
        document.getElementById("firstElement").textContent = "";
        document.getElementById("lastElement").textContent = "";
        return;
    }
    const array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    document.getElementById("generatedArray").textContent = "Generated Array: " + array.join(", ");
    document.getElementById("firstElement").textContent = "First Element: " + array[0];
    document.getElementById("lastElement").textContent = "Last Element: " + array[array.length - 1];
}


function sumofNumbers() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 == "" || num2 == "") {

        document.getElementById('numResult').value = "NaN";
    }
    else {

        const sum = parseInt(num1) + parseInt(num2);
        if (!isNaN(sum)) {
            document.getElementById('numResult').value = sum;
        }
        else {
            document.getElementById('numResult').value = "";
        }

    }

}


document.getElementById('num1').addEventListener('input', sumofNumbers);
document.getElementById('num2').addEventListener('input', sumofNumbers);








// <div class="task7">
//     <h1>Additon of Numbers</h1>
//     <label for="input1" >Enter the first number:</label>
//     <input id="num1" type="text" placeholder="Enter first number"><br>
//     <label for="input2">Enter the second number:</label>
//     <input id="num2" type="text" placeholder="Enter Second number"><br>
//     <label id="Resultlabel" for="Result">Result</label>
//     <input id="numResult" type="text">
// </div>



