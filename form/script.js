// A simple function that runs when the form is submitted

// 1. Get the form element by its ID
const form = document.getElementById('registrationForm');

// 2. Get the output element by its ID
const output = document.getElementById('formOutput');

// 3. Attach an event listener for the 'submit' action
form.addEventListener('submit', function(event) {
    // Prevent the default browser action (which is refreshing the page)
    event.preventDefault(); 
    
    // Simple JavaScript to show a success message
    // In a real application, you would send this data to a server here.
    
    // 4. Update the output element
    output.textContent = 'Registration Successful! (Data not sent to server, just displayed locally)';
    output.style.color = '#28a745'; // Change color to green for success

    // Optional: Log the collected data to the console for demonstration
    const formData = new FormData(form);
    console.log("--- Form Data Collected ---");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});

// Optional: Add a simple handler for the Reset button (type="reset" works automatically, but this shows JS usage)
form.addEventListener('reset', function() {
    // Reset the output message when the form is cleared
    output.textContent = 'Form was cleared. Ready to submit.';
    output.style.color = '#007bff';
    console.log("Form has been reset.");
});