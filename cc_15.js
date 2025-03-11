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

    // create a button
    const button = document.createElement("button");
    button.textContent = "Resolve";

    // add click listener
    button.addEventListener("click", (event) => {
      // remove from dashboard
      riskDashboard.removeChild(card);
      event.stopPropagation();
    });
    card.appendChild(button);


    riskDashboard.appendChild(card);
  }
}

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");