document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contactform');

    form.addEventListener('submit', function(event) {
      
        const name = form.querySelector('#name').value.trim();
    if (name === '') {
        alert('Please enter your name.');
        event.preventDefault();
        return;
    }

    // Check if name contains only alphabets
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert('Name should only contain alphabets.');
        event.preventDefault();
        return;
    }

        
        const email = form.querySelector('#email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

     
        const phone = form.querySelector('#phone').value.trim();
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            event.preventDefault();
            return;
        }

     
        const message = form.querySelector('#message').value.trim();
        if (message === '') {
            alert('Please enter your message.');
            event.preventDefault();
            return;
        }
    });
});

