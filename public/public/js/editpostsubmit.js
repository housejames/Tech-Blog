const editPostSubmit = async (event) => {
    event.preventDefault()

    const blogpostId = document.querySelector('#blog-post-id').value.trim()
    console.log(blogpostId)
    const newTitle = document.querySelector('#titleInput').value.trim();
    const newContent = document.querySelector('#blogcontent').value.trim();

    console.log(newTitle)
    console.log(newContent)
    const response = await fetch(`/api/blogpost/edit/${blogpostId}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            title: newTitle,
            content: newContent
        }),
        headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
        console.log('helloworlddddd')
        document.location.replace(`/api/blogpost/${blogpostId}`)
    }

}

document.querySelector('#update-btn').addEventListener('click', editPostSubmit)