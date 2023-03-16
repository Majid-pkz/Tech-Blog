// replace with newComsHandler
const newComsHandler = async () => {

   
    
  
    // Get the value of the "Content" input
    var content = document.getElementById("text-area").value;
    var postId=  document.getElementById("text-area").dataset.id;
  
    
    if (content) {
       const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ post_id:postId, content }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
        
          document.location.reload();
        } else {
          alert('Failed to sign up.');       }
   
    
  }
};
document.getElementById("comment").addEventListener("click", newComsHandler)