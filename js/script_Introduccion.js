document.addEventListener('DOMContentLoaded', () => {
    
     const images = document.querySelectorAll('.image-column img');

    
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.classList.add('zoomed');
        });

        image.addEventListener('mouseleave', function() {
            this.classList.remove('zoomed');
        });
    });
});