document.addEventListener('DOMContentLoaded', function () {
    // Store the scroll position when opening lightbox
    let scrollPosition = 0;

    // Handle lightbox opening
    document.querySelectorAll('a[href^="#img-"]').forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            scrollPosition = window.pageYOffset;
        });
    });

    // Close lightbox when clicking outside the image
    document.querySelectorAll('.lightbox').forEach(lightbox => {
        lightbox.addEventListener('click', function (e) {
            if (e.target === this) {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo(0, scrollPosition);
            }
        });
    });

    // Close lightbox when clicking the X button
    document.querySelectorAll('.close').forEach(closeButton => {
        closeButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.hash = '';
            window.scrollTo(0, scrollPosition);
        });
    });

    // Close lightbox when pressing ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.location.hash = '';
            window.scrollTo(0, scrollPosition);
        }
    });
});