const updatePostHandler = async () => {
  console.log('updatinggggg')
    // Get the value of the "Title" input
    var title = document.getElementById("myTitle").value;
  
    // Get the value of the "Content" input
    var content = document.getElementById("myContent").value;
    var postId=  document.getElementById("seed-id").dataset.id;
  
    
    if (title||content) {
       const response = await fetch(`/api/edit/${postId}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          console.log(title);
          console.log(content);
           document.location.replace('/');
        } else {
          alert('Failed to update.');       }
   
    
  }
};
document.getElementById("update").addEventListener("click", updatePostHandler)

const deletePostHandler = async () => {
    console.log('deleting')    
      
    var postId=  document.getElementById("seed-id").dataset.id;
    
         const response = await fetch(`/api/edit/${postId}`, {
            method: 'DELETE',
          
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            console.log("deleted ");
            
             document.location.replace('/');
          } else {
            alert('Failed to delete.');       }
     
      
    
  };
  document.getElementById("delete").addEventListener("click", deletePostHandler)