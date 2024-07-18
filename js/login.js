function validateForm(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Regular expressions for validation
    var usernameRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Clear previous error messages
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmPasswordError').innerHTML = '';

    // Validate email
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').innerHTML = 'Invalid username';
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
    }

    // Validate phone number
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerHTML = 'Invalid phone number (10 digits)';
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters long, contain at least one digit, one lowercase and one uppercase letter';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
    }

    // If all validations pass, you can submit the form
    if (usernameRegex.test(username) && emailRegex.test(email) && phoneRegex.test(phone) && passwordRegex.test(password) && password === confirmPassword) {
        alert("form submitted");
    }
}