const createNewPostForm = async (event) => {

    const response = await fetch('/api/blogpost/new', {
        method: 'GET'
    })

    if (response.ok) {
        document.location.replace('/api/blogpost/new')
    } else {
        alert('Oops. Something went wrong!')
    }

    
};

document
    .querySelector('#new-post-btn')
    .addEventListener('click', createNewPostForm);