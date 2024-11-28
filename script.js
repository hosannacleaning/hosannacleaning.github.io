document.getElementById("quote-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way
    
    emailjs.sendForm("service_n5ql74e", "template_3izqnqu", this)
    .then(function(response) {
        console.log("Quote request sent:", response);
        alert("Your quote request has been sent successfully!");
    }, function(error) {
        console.log("Failed to send request:", error);
        alert("Sorry, something went wrong. Please try again.");
    });
});

