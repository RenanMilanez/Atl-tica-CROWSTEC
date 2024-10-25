document.addEventListener('DOMContentLoaded', function() {
    // Interação com imagens de esportes
    const sportImages = document.querySelectorAll('.esporte-img');
    sportImages.forEach(img => {
        img.addEventListener('click', function() {
            alert(`Você clicou na imagem de ${this.alt}`);
            this.style.border = '5px solid #333';
        });
    });

    // Interação com imagens de eventos
    const eventImages = document.querySelectorAll('.evento-img');
    eventImages.forEach(img => {
        img.addEventListener('click', function() {
            alert(`Você clicou na imagem do ${this.alt}`);
            this.style.border = '5px solid #333';
        });
    });

    // Geral para todas as imagens
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
        });
        img.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
});
