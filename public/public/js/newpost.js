const createNewPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#blogcontent').value.trim();
    const userId = document.querySelector('#userid').value

    if (title && content && userId) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ title, content, userId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        }

        
    }
};

document
    .querySelector('.blog-post-form')
    .addEventListener('submit', createNewPost);

