// function display(){
//  console.log("add new post")
//  console.log(input_title)
//  console.log(input_content)
// }
 
// const input_title = document.querySelector('#form-title').value.trim();
// const input_content = document.querySelector('#form-content').value.trim();





// document.querySelector('#create').addEventListener('click',display)



const newPostHandler = async (event) => {
    event.preventDefault();
  
    const input_title = document.querySelector('#form-title').value.trim();
    const input_content = document.querySelector('#form-content').value.trim();
  
    if (input_title&& input_content) {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify({ username, email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert('Failed to sign up.');
    //   }
    console.log("add new post")
    console.log(input_title)
    console.log(input_content)


    }
  };

  document.querySelector('#create').addEventListener('click',newPostHandler)

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);