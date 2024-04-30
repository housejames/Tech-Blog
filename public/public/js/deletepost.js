
const deletePost = async (event) => {
    // delete request to api/blogpost/:id
    const blogpostId = document.querySelector('#blog-post-id').value.trim()
    const response = await fetch(`/api/blogpost/${blogpostId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        document.location.replace(`/dashboard`)
    }
}

document.querySelector('#delete-post-btn').addEventListener('click', deletePost)