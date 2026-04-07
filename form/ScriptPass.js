<script>
    const form = document.getElementById("registrationForm");
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const formOutput = document.getElementById("formOutput");

    form.addEventListener("submit", function (event) {
        const passwordValue = passwordInput.value.trim();
        let isValid = true;

        // Reset previous messages
        passwordError.textContent = "";
        formOutput.style.color = "#007bff";
        formOutput.textContent = "Checking form...";
        
        // Password length validation
        if (passwordValue.length < 8) {
            isValid = false;
            passwordError.textContent = "Password must be at least 8 characters long.";
            formOutput.textContent = "Error: Fix the highlighted fields before submitting.";
            formOutput.style.color = "red";
        }

        // If not valid, prevent form submission
        if (!isValid) {
            event.preventDefault();
        } else {
            formOutput.textContent = "Form submitted successfully!";
            formOutput.style.color = "green";
            // Optionally show an alert so teacher clearly sees JS is working
            alert("Registration successful!");
            }
        });

</script>