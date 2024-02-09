const myForm = document.getElementById('my-form');


myForm.addEventListener('submit', async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    let formData = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        content: document.getElementById("content").value
    };

    await submitForm(formData);
});

async function submitForm(formData) {
    try {
        await fetch('http://localhost:8080/api/create-blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        alert("Blog uploaded")
        myForm.reset()
        
    } catch (err) {
        alert("Something Went Wrong")
        console.error(err);
    }
}

