
const addComment = async (id) => {
    document.location.replace(`/api/blogpost/${id}`)
  };

function mouseClickValue(event) {
    console.log(event)
    const moustPointer = event.target.id
    addComment(moustPointer)
}

  const blogPostCards = document.querySelectorAll('#blog-post-card')
  
  blogPostCards.forEach(blog => {
    blog.addEventListener('click', mouseClickValue)
  })