import "./styles.css";
 

















// toggle switch

const toggleSwitch = document.getElementById("toggle");

// Optional: Add event listener to display the state
toggleSwitch.addEventListener("change", () => {
  const state = toggleSwitch.checked ? "F" : "C";
  console.log("Current state:", state); // For debugging
});