function showDetails(nom, prix, desc) {
    // 1. كود كيبني النافذة المنبثقة وسط الصفحة
    const html = `
        <div class="modal-overlay" id="modal" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <h2 style="margin-top:0; font-family: 'Cinzel', serif; color: #d4af37;">${nom}</h2>
                <p style="color: #d4af37; font-size: 1.5rem; font-weight: bold; margin: 15px 0;">${prix}</p>
                <p style="line-height: 1.6; color: #fff; font-family: 'Poppins', sans-serif;">${desc}</p>
                <button onclick="closeModal()" style="background: #d4af37; border: none; padding: 10px 25px; border-radius: 20px; cursor: pointer; font-weight: bold; margin-top: 20px;">Fermer</button>
            </div>
        </div>
    `;

    // 2. كيزيد هاد الكود لآخر الصفحة باش يظهر للعيان
    document.body.insertAdjacentHTML('beforeend', html);

    // 3. كيبين النافذة بحركة سلسة
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeModal() {
    // 4. كيمسح النافذة فاش كنضغطو على زر الإغلاق أو خارج الإطار
    const modal = document.getElementById('modal');
    if (modal) {
        modal.remove();
    }
}