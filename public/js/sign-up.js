
const signupFormHandler = async () => {    
  
    const username = document.getElementById('username-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/sign-up', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };



document.getElementById('btn-signup').addEventListener('click', signupFormHandler);

  