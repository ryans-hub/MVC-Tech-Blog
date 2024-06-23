const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#commentText').value.trim();
    
    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: { 'Content-Type': 'application/json' }
        });
        
    }

}

