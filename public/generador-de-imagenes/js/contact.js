class Contact {
    static toggle() {
        const contactInfo = document.getElementById('contactInfo');
        if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
            contactInfo.style.display = 'block';
        } else {
            contactInfo.style.display = 'none';
        }
    }
}

export default Contact;

