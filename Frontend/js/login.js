const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Handle Sign In Form Submission
document.querySelector('.sign-in-container form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const email = document.querySelector('.sign-in-container input[placeholder="Email"]').value;
    const password = document.querySelector('.sign-in-container input[placeholder="Password"]').value;

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    // const data = await response.json();
    
    // if (response.ok) {
    //     alert('Sign In Successful!');
        
    //     // Store the token in localStorage for future authentication
    //     window.localStorage.setItem('token', data.token); 

    //     // Optionally, redirect to another page after successful login
    //     window.location.href = '/dashboard'; // Change this to your desired route
    // } else {
    //     alert(data.msg || 'Sign In Failed!');
    // }
	const data = await response.json();
console.log(data); // Log the data to check if the token is received correctly

if (response.ok) {
    alert('Sign In Successful!');
    window.localStorage.setItem('token', data.token); // Ensure 'data.token' exists
    window.location.href = '/dashboard';
} else {
    alert(data.msg || 'Sign In Failed!');
}

});

