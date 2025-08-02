document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('startOverlay');
    const video = document.querySelector('.background-video');
    
    if (video) {
        video.pause();
    }

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        if (video) {
            video.play().catch(error => console.log('Video play error:', error));
        }
    });
});

const customCursor = document.querySelector('.dot-cursor');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});