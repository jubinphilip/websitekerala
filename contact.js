document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contactform');
    const nameBox=document.querySelector('#nameBox');
    const emailBox=document.querySelector('#emailBox');
    const phoneBox=document.querySelector('#phoneBox');
    const msgBox = document.querySelector('#msgBox');

    form.addEventListener('submit', function(event) {
      
        const name = form.querySelector('#name').value.trim();
    if (name === '') {
       nameBox.textContent='Please enter your name.'
        event.preventDefault();
        return;
    }

    // Check if name contains only alphabets
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        nameBox.textContent="Name should only contain alphabets"
        event.preventDefault();
        return;
    }

        
        const email = form.querySelector('#email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            emailBox.textContent='Please enter a valid email address.'
            event.preventDefault();
            return;
        }

     
        const phone = form.querySelector('#phone').value.trim();
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            phoneBox.textContent='Please enter a valid 10-digit phone number.'
            event.preventDefault();
            return;
        }

     
        const message = form.querySelector('#message').value.trim();
        if (message === '') {
            msgBox.textContent='Please enter your message.'
            event.preventDefault();
            return;
        }
    });
});

