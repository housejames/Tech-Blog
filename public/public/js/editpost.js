
const editPost = async (event) => {
    // put request to api/blogpost/:id
    const blogpostId = document.querySelector('#blog-post-id').value.trim()
    const response = await fetch(`/api/blogpost/${blogpostId}`, {
        method: 'GET'
    })

    if (response.ok) {
        document.location.replace(`/api/blogpost/edit/${blogpostId}`)
    }
}

document.querySelector('#edit-post-btn').addEventListener('click', editPost)