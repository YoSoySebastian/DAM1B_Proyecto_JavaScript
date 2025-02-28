document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("pokemonImage");
    const button = document.getElementById("changeImageButton");
    const imageElement = document.getElementById("pokemonAutoImage");
    const toggleMode = document.getElementById("toggle-mode");
    const body = document.body;
    const images = ["charmander.png", "squirtle.png", "bulbasaur.png"];
    let currentIndex = 0;

    button.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
    });

    setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);

    toggleMode.addEventListener("click", function () {
        body.classList.toggle("dark");
        body.classList.toggle("light");
        toggleMode.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
    });
});
