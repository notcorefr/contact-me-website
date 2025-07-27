document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('startOverlay');
    const video = document.querySelector('.background-video');
    
    // Pause video initially
    if (video) {
        video.pause();
    }

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        // Play video after interaction
        if (video) {
            video.play().catch(error => console.log('Video play error:', error));
        }
    });
});