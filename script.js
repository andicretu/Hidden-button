let max = 0;

function readInput() {
    const inputElement = document.getElementById('userInput');
    const inputText = inputElement.value;
    max = parseInt(inputText, 10) || 0;
}

function getRandomInt() {
  return Math.floor(Math.random() * max);
}

function createButtons () {
    readInput();
    const buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.innerHTML = "";

    for (let i = 0; i < max; ++i) {
    buttonContainer.innerHTML +=`
  <div>
    <button type="button" class="btn btn-primary" id="button${i + 1}">Button ${i + 1}</button>
  </div>
  <br>`;
    }
}

function assignValue() {
  let secretButtonNumber = getRandomInt();
  for (let i = 0; i < max; ++i) {
    const button = document.getElementById(`button${i + 1}`);
    if(button) {
      button.removeEventListener('click', showValueOnClick);
      button.addEventListener('click', function () {
        showValueOnClick(`button${i + 1}`);
      });
    }
    if (i === secretButtonNumber + 1) {
      button.value = "This is the secret button!" 
      } else {
        button.value = "Wrong button.."
      }
  }
}


document.getElementById('button-addon1').addEventListener('click', function() {
  createButtons();
  assignValue();
});

function showValueOnClick(buttonId) {
  const clickedButton = document.getElementById(buttonId);
  if (clickedButton) {
    const buttonValue = clickedButton.value;
    clickedButton.textContent = buttonValue;
  }
}

$(document).ready(function() {
  createButtons();
  assignValue();
});
