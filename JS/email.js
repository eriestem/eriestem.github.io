document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can replace this email address with your own
        const toEmail = 'kimedkim@sas.upenn.edu';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `New Message from ${name} from my website`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    });
});
