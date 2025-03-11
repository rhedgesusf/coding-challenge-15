/////////////////////////////////////////
// Task 1: Creating the Base Structure //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating the Base Structure");

// Created Base Structure in HTML

// get access to the dashboard
const riskDashboard = document.getElementById("riskDashboard");

console.log("Risk Dashboard Loaded");

const addRiskButton = document.getElementById("addRiskButton");

// add a click listener to the button
addRiskButton.addEventListener("click", (event) => {
  let riskName = document.getElementById("name").value;
  let riskLevel = document.getElementById("level").value;
  let department = document.getElementById("department").value;

  addRiskItem(riskName, riskLevel, department);
});

///////////////////////////////////////////
// Task 2: Adding Risk Items Dynamically //
///////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Adding Risk Items Dynamically");

function addRiskItem(riskName, riskLevel, department) {
  // get access to the dashboard
  const riskDashboard = document.getElementById("riskDashboard");

  if (riskDashboard) {
    // create a div as base of card
    const card = document.createElement("div");

    // set class
    card.setAttribute("class", "riskCard");

    card.innerHTML = `<div><h3>${riskName}</h3>
    <p>${riskLevel}</p>
    <label>${department}</label>
    </div>`;

    switch (riskLevel) {
      case "High":
        card.style.backgroundColor = "#D2042D";
        break;
      case "Medium":
        card.style.backgroundColor = "gold";
        break;
      case "Low":
        card.style.backgroundColor = "darkgreen";
        break;
      default:
        card.style.backgroundColor = "darkgrey";
    }

    // create a button
    const button = document.createElement("button");
    button.textContent = "Resolve";

    // add click listener
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      // remove from dashboard
      riskDashboard.removeChild(card);
    });
    card.appendChild(button);

    riskDashboard.appendChild(card);
  }
}

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

/////////////////////////////////
// Task 3: Removing Risk Items //
/////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Removing Risk Items");

// Added under task 2 on line 64-73

addRiskItem("Market Fluctuations", "High", "Finance");

/////////////////////////////////////////
// Task 4: Categorizing Risks by Level //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Categorizing Risks by Level");

// Under Task 2 added risk level colors between line 49-61

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

///////////////////////////////////////
// Task 5: Implementing Bulk Updates //
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Implementing Bulk Updates");

// Added button in HTML on line 43

const incRiskLevel = document.getElementById("incRiskLevel");

incRiskLevel.addEventListener("click", (event) => {
  event.stopPropagation();

  const cards = document.querySelectorAll(".riskCard");

  if (cards) {
    // conver to array
    const cardsArray = Array.from(cards);

    // added this so that if you edit a card and change level, color is correct
    cardsArray.forEach((card) => {
      if (card.querySelector("p").textContent === "Low") {
        card.querySelector("p").textContent = "Medium";
        card.style.backgroundColor = "gold";

      } else if (card.querySelector("p").textContent === "Medium") {
        card.querySelector("p").textContent = "High";
        card.style.backgroundColor = "#D2042D";
      }
    });
  }
});


