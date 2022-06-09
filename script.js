let gridBox = document.querySelector('.grid-container');
let resizeBtn = document.querySelector('.resizeGridBtn')
let userInput = 16;
let boxArr = [];

// Handles removal and re-addition of grid boxes based on user input
let userPrompt = () => {
  userInput = parseInt(prompt("Set grid area between 8 and 100: "));   

  if (userInput > 100 || userInput < 8 || !userInput) {
    userInput = 16;
    alert("Number too large or too small. Please select a number between 8 and 100. (Default is 16)")
  }

  boxArr.forEach(box => box.remove());
  gridBuilder(userInput);

  for (let i = 0; i < (userInput * userInput); i++) {
    boxArr.push(document.querySelector(`.gridBox${i}`))
  }

  boxArr.forEach(box => box.addEventListener('mouseover', changeColor))
}

if (userInput > 100 || userInput < 8) {
    userInput = 16;
    alert("Number too large or too small. Please select a number between 8 and 100.")
  }

let gridBuilder = (userInput) => {
  for (let i = 0; i < (userInput * userInput); i++) {
    gridBox.appendChild(document.createElement('div')).setAttribute('class', `gridBox${i}`);
  }

  return gridBox.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
}

gridBuilder(userInput);

for (let i = 0; i < (userInput * userInput); i++) {
  boxArr.push(document.querySelector(`.gridBox${i}`))
}


// Sets background color for each hovered grid box.
let changeColor = (e) => {
  let colorNum1 = Math.floor(Math.random() * 255);
  let colorNum2 = Math.floor(Math.random() * 255);
  let colorNum3 = Math.floor(Math.random() * 255);
  let colorChoice = `rgb(${colorNum1}, ${colorNum2}, ${colorNum3})`;

  e.target.style = `background-color: ${colorChoice}`;
}

resizeBtn.addEventListener('click', userPrompt)
boxArr.forEach(box => box.addEventListener('mouseover', changeColor))

