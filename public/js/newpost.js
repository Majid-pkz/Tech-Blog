
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

       
   
        if (response.ok) {
         document.location.replace('/api/dashboard');
          
        }
         else {

          alert('Failed to create a post.');    
          }
   
    
  }
};
document.getElementById("create")?.addEventListener("click", newPostHandler)