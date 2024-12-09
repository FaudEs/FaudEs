const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Mode Clair"
        : "🌙 Mode Sombre";
});
