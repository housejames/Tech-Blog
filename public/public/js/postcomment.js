
const postNewComment = async (event) => {
    event.preventDefault();
    
    
    const blogpostId = document.querySelector('#blog-post-id').value.trim();
    const newComment = document.querySelector('#blogpost-comment').value.trim();
    console.log(`${blogpostId} and ${newComment}`)
    if (newComment) {
        const response = await fetch(`/api/comment/`, {
            method: 'POST',
            body: JSON.stringify({
                content: newComment,
                blogpostId: blogpostId,

            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        }


    }
};





document.querySelector('.new-comment-form').addEventListener('submit', postNewComment);
