document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-popup');
    if (popup) {
        // Animate in the popup
        setTimeout(function() {
            popup.classList.add('popup-visible');
        }, 100);
    }
    if (popup && closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.classList.remove('popup-visible');
            popup.classList.add('popup-closing');
            setTimeout(function() {
                popup.style.display = 'none';
                popup.classList.remove('popup-closing');
            }, 500); // match the CSS transition duration
        });
    }
});
