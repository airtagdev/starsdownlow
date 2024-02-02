function checkAccess() {
  var userInput = document.getElementById("devAccess").value;

  if (userInput === "spu7nic") {
    window.location.href = "dev.html";
  } else {
    attempts++;

    if (attempts >= maxAttempts) {
      alert("Maximum attempts exceeded. Redirecting to another page.");
      window.location.href = "error.html"; // Redirect to an error page or take another action
    } else {
      // If attempts are less than the maximum, display an error message
      alert("Incorrect key. Please try again. Attempts left: " + (maxAttempts - attempts));
    }
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
    checkAccess();
  }
}

window.onload = function() {
  // Popup is already displayed using CSS, no additional action needed here

  // Attach the event listener for "Enter" key press
  document.getElementById("devAccess").addEventListener("keypress", handleKeyPress);
  // Attach the event listener for the "Submit" button click
  document.getElementById("devLogin").addEventListener("click", checkAccess);
};