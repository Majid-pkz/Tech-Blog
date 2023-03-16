const logout = async () => {
  console.log('button is responsive')
    const response = await fetch('/api/users/sign-out', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
   
  
    if (response.ok) {
      document.location.replace('/');
     console.log("loged out successfully")
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.getElementById('logout-btn')?.addEventListener('click', logout);
  