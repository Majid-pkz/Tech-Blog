
const newPostHandler = async () => {

    // Get the value of the "Title" input
    var title = document.getElementById("myTitle").value;
  
    // Get the value of the "Content" input
    var content = document.getElementById("myContent").value;
    
  
    
    if (title && content) {
       const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        document.location.replace('/api/dashboard');   
        if(response.ok) {
              
        }
         else {
          // alert('Failed to create a post.');    
          }
    
  }
};
document.getElementById("create")?.addEventListener("click", newPostHandler)