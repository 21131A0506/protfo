document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent default form submission

        const formData = new FormData(contactForm);  // Automatically gathers all form fields

        fetch('/submit_form', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();  // Reset form
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        });
    });
});
