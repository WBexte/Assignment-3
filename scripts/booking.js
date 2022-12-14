/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let totalCost = document.getElementById("calculated-cost").innerHTML;
let totalDays = 0;
let cost = 35;
let monButton = document.getElementById("monday");
let tueButton = document.getElementById("tuesday");
let wedButton = document.getElementById("wednesday");
let thurButton = document.getElementById("thursday");
let friButton = document.getElementById("friday")
let clrButton = document.getElementById("clear-button");
let halfButton = document.getElementById("half");
let fullButton = document.getElementById("full");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Checks for click to change background color
monButton.addEventListener("click", () => monButton.style.backgroundColor = '#E5AF42');
tueButton.addEventListener("click", () => tueButton.style.backgroundColor = '#E5AF42');
wedButton.addEventListener("click", () => wedButton.style.backgroundColor = '#E5AF42');
thurButton.addEventListener("click", () => thurButton.style.backgroundColor = '#E5AF42');
friButton.addEventListener("click", () => friButton.style.backgroundColor = '#E5AF42');

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Function will set background colors of all 'day' buttons to white
function clr() {
    monButton.style.backgroundColor = '#fff';
    tueButton.style.backgroundColor = '#fff';
    wedButton.style.backgroundColor = '#fff';
    thurButton.style.backgroundColor = '#fff';
    friButton.style.backgroundColor = '#fff';
    totalDays = 0;
}

// Calls clr() function if 'Clear' button is clicked
clrButton.addEventListener("click", () => clr());

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfSwap() {
    halfButton.style.backgroundColor = '#E5AF42';
    fullButton.style.backgroundColor = '#fff';
    cost = 20;
};

halfButton.addEventListener("click", () => halfSwap());


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullSwap() {
    halfButton.style.backgroundColor = '#fff';
    fullButton.style.backgroundColor = '#E5AF42';
    cost = 35;
};

fullButton.addEventListener("click", () => fullSwap());

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


