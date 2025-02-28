document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    document.getElementById("toggle-mode").addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");
    });

document.getElementById("validate-email").addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        const validationMessage = document.getElementById("validation-message");
        validationMessage.textContent = `"${email}" ${isValid ? "es" : "no es"} un correo válido.`;
        validationMessage.style.color = isValid ? "green" : "red";
    });

    const country = document.getElementById("country"), province = document.getElementById("province"),
          provinceRow = document.getElementById("province-row"), cityRow = document.getElementById("city-row");

    country.addEventListener("change", () => {
        provinceRow.style.display = country.value === "es" ? "block" : "none";
        cityRow.style.display = "none";
    });

    province.addEventListener("change", () => {
        cityRow.style.display = province.value === "pamplona" ? "block" : "none";
    });
});
