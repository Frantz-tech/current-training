const toggleDM = document.getElementById("toggleDM"); // Get the toggle element

toggleDM.addEventListener("click", () => {
  // Add a click event listener
  document.body.classList.toggle("darkMode"); // Toggle the dark mode class
  if (toggleDM.checked) {
    // If the toggle is checked
    localStorage.setItem("darkMode", "Enable"); //  Set the dark mode in local storage as "Enable"
  } else {
    // If the toggle is not checked
    localStorage.setItem("darkMode", "Disable"); // Set the dark mode in local storage as "Disable"
  }
});
if (localStorage.getItem("darkMode") === "Enable") {
  // Check if dark mode is enabled
  document.body.classList.add("darkMode"); // Add the dark mode class
  toggleDM.checked = true; // Check the toggle
}
