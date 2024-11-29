document.addEventListener('DOMContentLoaded', () => {
    const donatePaperButton = document.getElementById('donate-paper');
    const exchangeBooksButton = document.getElementById('exchange-books');
    const donateNewspapersButton = document.getElementById('donate-newspapers');
    const donationForm = document.getElementById('donation-form');
    const donationFormElement = document.getElementById('donationForm');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Show donation form when any button is clicked
    donatePaperButton.addEventListener('click', () => showDonationForm('Donate Paper'));
    exchangeBooksButton.addEventListener('click', () => showDonationForm('Exchange Books'));
    donateNewspapersButton.addEventListener('click', () => showDonationForm('Donate Newspapers'));

    // Show the donation form with the selected donation type
    function showDonationForm(donationType) {
        donationForm.classList.remove('hidden');
        document.getElementById('donation-type').value = donationType.toLowerCase().replace(' ', '-');
    }

    // Handle form submission
    donationFormElement.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simulate donation submission
        const formData = new FormData(donationFormElement);
        const formValues = Object.fromEntries(formData.entries());

        // Log the donation details to the console (you can replace this with actual form submission logic)
        console.log('Donation Received:', formValues);

        // Show confirmation message
        donationForm.classList.add('hidden');
        confirmationMessage.classList.remove('hidden');
    });
});
