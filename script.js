// Function to show the price in a stylish way
function showPrice(dishName, price) {
    // Create a stylish modal overlay
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="modal-body">
                <h2>${dishName}</h2>
                <div class="price-value">${price}</div>
                <p>Merci de choisir ILHAM FOOD !</p>
                <button class="confirm-btn">D'accord</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close functionality
    const closeBtn = modal.querySelector('.close-btn');
    const confirmBtn = modal.querySelector('.confirm-btn');

    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    };

    closeBtn.onclick = closeModal;
    confirmBtn.onclick = closeModal;
    window.onclick = (event) => {
        if (event.target == modal) closeModal();
    };
}