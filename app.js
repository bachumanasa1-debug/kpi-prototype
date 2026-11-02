// =====================================================================
// app.js: THE "CHEF"
// Takes the raw data from data.js, calculates the 4 KPIs,
// and puts the results into the cards on the page.
// =====================================================================

// ---- Step 1: Find the latest week and the week before it ----
// Look at every row's week number and pick the biggest one (8 in our data).
const latestWeek = Math.max(...ADOPTION_DATA.map(row => row.week));
const previousWeek = latestWeek - 1;

// ---- Step 2: A small helper that adds up one column for one week ----
// Example: sumForWeek(8, "activeUsers") adds activeUsers across all 6 departments in week 8.
// Think of it like a SUMIF in Excel.
function sumForWeek(week, column) {
  return ADOPTION_DATA
    .filter(row => row.week === week)          // keep only rows for that week
    .reduce((total, row) => total + row[column], 0); // add up the chosen column
}

// ---- Step 3: Calculate the 4 KPIs ----

// KPI 1: Active users in the latest week
const activeUsers = sumForWeek(latestWeek, "activeUsers");

// KPI 2: Minutes saved in the latest week (and the same thing in hours)
const minutesSaved = sumForWeek(latestWeek, "minutesSaved");
const hoursSaved = minutesSaved / 60;

// KPI 3: Adoption rate = active users ÷ eligible clinicians, as a percentage
const eligible = sumForWeek(latestWeek, "eligibleClinicians");
const adoptionRate = (activeUsers / eligible) * 100;

// KPI 4: Week-over-week change in active users, as a percentage
const previousActiveUsers = sumForWeek(previousWeek, "activeUsers");
const wowChange = ((activeUsers - previousActiveUsers) / previousActiveUsers) * 100;

// ---- Step 4: Put the numbers on the page ----
// document.getElementById("...") finds the box in index.html with that id.
// .textContent = ... writes text into it.
// toLocaleString() adds thousands separators, e.g. 17118 → "17,118".

document.getElementById("latest-week").textContent = "Week " + latestWeek;

document.getElementById("kpi-active-users").textContent = activeUsers.toLocaleString();

document.getElementById("kpi-minutes-saved").textContent = minutesSaved.toLocaleString();
document.getElementById("kpi-hours-saved").textContent = "≈ " + hoursSaved.toFixed(1) + " hours";

document.getElementById("kpi-adoption-rate").textContent = adoptionRate.toFixed(1) + "%";

// For week-over-week, show an arrow and colour it green (up) or red (down).
const wowBox = document.getElementById("kpi-wow-change");
const arrow = wowChange >= 0 ? "▲ +" : "▼ ";
wowBox.textContent = arrow + wowChange.toFixed(1) + "%";
wowBox.classList.add(wowChange >= 0 ? "up" : "down");
