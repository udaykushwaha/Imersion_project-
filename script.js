let count = 0;
const button = document.getElementById("counterBtn");

button.addEventListener("click", () => {
    count++;
    button.textContent = `Clicks: ${count}`;
});