document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('printerForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation check
        const brand = document.getElementById('brand').value.trim();
        const model = document.getElementById('model').value.trim();
        const serial = document.getElementById('serial').value.trim();
        const ip = document.getElementById('ip').value.trim();
        const location = document.getElementById('location').value.trim();

        if (!brand || !model || !serial || !location) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Simulate data object
        const printerData = {
            brand,
            model,
            serial,
            ip,
            location,
            registrationDate: new Date().toISOString()
        };

        console.log('Impressora Cadastrada:', printerData);

        // Simulate success feedback
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerText;

        submitBtn.innerText = 'Cadastrado com Sucesso!';
        submitBtn.style.backgroundColor = 'var(--success-color)';
        submitBtn.style.color = '#000';

        // Reset form and button after 3 seconds
        setTimeout(() => {
            form.reset();
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.color = '';
        }, 3000);
    });
});
