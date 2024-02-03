document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('conviteForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const filme = document.getElementById('filme').value;

        // Crie um link que abre o WhatsApp com uma mensagem pré-preenchida
        const whatsappLink = `https://api.whatsapp.com/send?phone=981189301&text=Oiiii, amor! Pra comemorar nossos 2 meses de namoro que tal a gente assistir "${filme}"? Aceita, por favor!`;

        // Abra o link em uma nova janela ou guia
        window.open(whatsappLink, '_blank');
    });
});
