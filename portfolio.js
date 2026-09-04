const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            form.innerHTML = `<p>Thanks, ${name}! I'll get back to you soon.</p>`;
        } else {
            form.innerHTML = `<p>Oops! Something went wrong. Please try again.</p>`;
        }
    })
    .catch(() => {
        form.innerHTML = `<p>Oops! Something went wrong. Please try again.</p>`;
    });
});
