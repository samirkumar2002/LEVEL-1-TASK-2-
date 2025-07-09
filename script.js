// Add interactivity if needed later (like dynamic loading)
console.log("Progress page script loaded.");

function increaseProgress(barId, percentId) {
    const progressBar = document.getElementById(barId);
    const percentText = document.getElementById(percentId);

    if (progressBar.value < 100) {
        progressBar.value += 10; // increment by 10%
        percentText.innerText = progressBar.value + "%";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("darkModeToggle");
    const darkClass = "dark-mode";

    // Load saved mode from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add(darkClass);
        toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle(darkClass);

        if (document.body.classList.contains(darkClass)) {
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "🌙 Dark Mode";
        }
    });
});

