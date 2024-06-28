document.getElementById('saveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var formData = new FormData(this);
    console.log('Form Data:', formData); // Log form data to check if it's correctly collected

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response Data:', data); // Log response from server
        if (data.success) {
            document.getElementById('savedArtwork').innerHTML = `<h2>Saved Artwork:</h2><img src="${data.artwork}" alt="Saved Artwork">`;
        } else {
            alert('Failed to save artwork');
        }
    })
    .catch(error => {
        console.error('Error:', error); // Log any fetch API errors
        alert('Failed to save artwork');
    });
});
