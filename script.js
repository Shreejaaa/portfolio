function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.add('show'); // Add class to animate
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('show'); // Remove class to animate
    setTimeout(() => {
        modal.style.display = "none"; // Hide after animation
    }, 300); // Match the duration of the CSS transition
}
