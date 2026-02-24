const checkInForm = document.getElementById("checkInForm");

let totalAttendees = 0;
let teamCounts = {
  water: 0,
  zero: 0,
  power: 0,
};

checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get the values from the input and dropdown
  const attendeeName = document.getElementById("attendeeName").value;
  const selectedTeam = document.getElementById("teamSelect").value;
  // Increment the total attendee count
  totalAttendees++;
  // Update the attendee count display
  document.getElementById("attendeeCount").textContent = totalAttendees;
  // Calculate the progress percentage
  const maxAttendees = 50;
  const progressPercentage = (totalAttendees / maxAttendees) * 100;
  // Update the progress bar width
  document.getElementById("progressBar").style.width = progressPercentage + "%";
  // Update the team count
  teamCounts[selectedTeam]++;
  document.getElementById(selectedTeam + "Count").textContent =
    teamCounts[selectedTeam];
  // Create a personalized greeting
  const teamNames = {
    water: "Team Water Wise",
    zero: "Team Net Zero",
    power: "Team Renewables",
  };
  const fullTeamName = teamNames[selectedTeam];
  const greetingMessage = `Welcome, ${attendeeName}! You are on ${fullTeamName}.`;
  // Display the greeting message
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = greetingMessage;
  greetingElement.classList.add("success-message");
  greetingElement.style.display = "block";
  // Reset the form after submission
  checkInForm.reset();
});
