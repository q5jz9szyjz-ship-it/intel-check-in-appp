// Get the stuff from the HTML
const checkInForm = document.getElementById("checkInForm");
const attendeeName = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

const waterCount = document.getElementById("waterCount");
const zeroCount = document.getElementById("zeroCount");
const powerCount = document.getElementById("powerCount");

// Starting numbers
let total = 0;
let water = 0;
let zero = 0;
let power = 0;

const goal = 50;

// When somebody checks in
checkInForm.addEventListener("submit", function (event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Get the name and team
  const name = attendeeName.value;
  const team = teamSelect.value;

  // Add one to total attendance
  total++;

  // Update total on page
  attendeeCount.textContent = total;

  // Update the team they picked
  if (team === "water") {
    water++;
    waterCount.textContent = water;
  } else if (team === "zero") {
    zero++;
    zeroCount.textContent = zero;
  } else if (team === "power") {
    power++;
    powerCount.textContent = power;
  }

  // Figure out progress percentage
  const progress = (total / goal) * 100;

  // Update progress bar
  progressBar.style.width = progress + "%";

  // Figure out the team name for the greeting
  let teamName = "";

  if (team === "water") {
    teamName = "Team Water Wise";
  } else if (team === "zero") {
    teamName = "Team Net Zero";
  } else if (team === "power") {
    teamName = "Team Renewables";
  }

  // Personalized greeting
  greeting.textContent = "🎉 Welcome, " + name + " from " + teamName + "!";

  // Clear the form for the next person
  checkInForm.reset();
});
