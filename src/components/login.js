const formulario = () => {
    const content = document.createElement("div");
    content.className = "content";

    const form = document.createElement("form");
    form.className = 'form';
    content.appendChild(form);

    const email = document.createElement ('input')
    email.className = 'email';
    form.appendChild(email);

    return content
}