function validatePassword(password) {
    const errors = [];
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    if (!/\d{2}/.test(password)) {
        errors.push("The password must contain at least 2 numbers");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one capital letter");
    }
    if (!/[\W_]/.test(password)) {
        errors.push("Password must contain at least one special character");
    }
    return {
        valid: errors.length === 0,
        errors: errors,
    };
}

const form = document.querySelector("form");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const passwordInput = document.querySelector("#password");
    const password = passwordInput.value;
    const validationResult = validatePassword(password);

    if (validationResult.valid) {
        resultDiv.textContent = "Password is valid!";
        resultDiv.style.color = "green";
    } else {
        const errors = validationResult.errors;
        resultDiv.textContent = `Password is invalid: ${errors.join(", ")}`;
        resultDiv.style.color = "red";
    }
});
