/////////////////////////////////////////
// Task 1: Creating the Base Structure //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating the Base Structure");

// Created Base Structure in HTML

// get access to the dashboard
const riskDashboard = document.getElementById("riskDashboard");

console.log("Risk Dashboard Loaded");

// attach click listener to "Add Risk" Button
const addRiskButton = document.getElementById("addRiskButton");

addRiskButton.addEventListener("click", (event) => {
  // get the values from the HTML form
  let riskName = document.getElementById("name").value;
  let riskLevel = document.getElementById("level").value;
  let department = document.getElementById("department").value;

  // call method to add the risk card
  addRiskItem(riskName, riskLevel, department);
});

///////////////////////////////////////////
// Task 2: Adding Risk Items Dynamically //
///////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Adding Risk Items Dynamically");

// method to add a Risk card to the dashboard
function addRiskItem(riskName, riskLevel, department) {
  // get access to the dashboard
  const riskDashboard = document.getElementById("riskDashboard");

  if (riskDashboard) {
    // create a div as base of card
    const card = document.createElement("div");

    // set class
    card.setAttribute("class", "riskCard");

    // set static HTML text
    card.innerHTML = `<div><h3>${riskName}</h3>
    <p>${riskLevel}</p>
    <label>${department}</label>
    </div>`;

    // change card background colors based on risk level
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

    // create a "Resolve" button to delete cards
    const button = document.createElement("button");
    button.textContent = "Resolve";

    // add click listener
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      // remove from dashboard
      riskDashboard.removeChild(card);
    });

    // add a click listener on a card to prevent it bubbling up to parent
    card.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    

    card.appendChild(button);

    // append the card to the dashbaord
    riskDashboard.appendChild(card);
  }
}

// test data
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

/////////////////////////////////
// Task 3: Removing Risk Items //
/////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Removing Risk Items");

// Under Task 2, added "Resolve" logic line 68

// more test data
addRiskItem("Market Fluctuations", "High", "Finance");

/////////////////////////////////////////
// Task 4: Categorizing Risks by Level //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Categorizing Risks by Level");

// Under Task 2, added risk level colors at line 54

// more test data
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

///////////////////////////////////////
// Task 5: Implementing Bulk Updates //
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Implementing Bulk Updates");

// Added "Increase Risk Levels" button in HTML on line 76

// add a click event listener to the "Increase Risk Levels" button
const incRiskLevel = document.getElementById("incRiskLevel");

incRiskLevel.addEventListener("click", (event) => {
  event.stopPropagation();

  // get list of all risk cards
  const cards = document.querySelectorAll(".riskCard");

  if (cards) {
    // convert to array
    const cardsArray = Array.from(cards);

    // loop through all cards and change levels (Low to Medium, Medium to High)
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

////////////////////////////////////////
// Task 6: Handling Event Propagation //
////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 6: Handling Event Propagation");

// add an event listener to the dashboard container to log any clicks that bubble up
riskDashboard.addEventListener("click", (event) => {
    console.log("Parent Card Clicked");
  });

  