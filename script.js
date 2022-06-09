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

let randomColor = () => {
  let colorNum1 = Math.floor(Math.random() * 255);
  let colorNum2 = Math.floor(Math.random() * 255);
  let colorNum3 = Math.floor(Math.random() * 255);

  let colorChoice = `rgb(${colorNum1}, ${colorNum2}, ${colorNum3})`;

  let colorArr = [colorNum1, colorNum2, colorNum3]

  return colorArr;
}

// Sets background color for each hovered grid box.
let changeColor = (e) => {
  let colorChoices = randomColor();
  if (e.target.style.backgroundColor === '') {     
    e.target.style = `background-color: rgb(${colorChoices[0]}, ${colorChoices[1]}, ${colorChoices[2]})`;
  }

  e.target.addEventListener('mouseover', changeBlack);  
}

let changeBlack = (e) => {
  let rbg = e.target.style.backgroundColor.match(/\d+/g);

  let colorOne = parseInt(rbg[0]) - 25;
  let colorTwo = parseInt(rbg[1]) - 25;
  let colorThree = parseInt(rbg[2]) -25;

  return e.target.style = `background-color: rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
}

for (let i = 0; i < boxArr.length; i++){
  if (boxArr[i].style.backgroundColor === "") {
    boxArr.forEach(box => box.addEventListener('mouseover', changeColor))
  }
}

resizeBtn.addEventListener('click', userPrompt)
