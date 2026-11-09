let pingCount = 0;

const actionButton = document.getElementById("action-btn");
const counterDisplay = document.getElementById("click-counter");

actionButton.addEventListener("click", () => {
  pingCount += 1;
  counterDisplay.textContent = `Pings: ${pingCount}`;
  
  if (pingCount === 1) {
    actionButton.textContent = "Server Active ⚡";
  } else if (pingCount >= 5) {
    actionButton.textContent = "Cluster Online 🚀";
    actionButton.style.background = "linear-gradient(135deg, #10b981, #059669)";
  }
});
