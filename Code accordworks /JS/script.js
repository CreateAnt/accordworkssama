document.addEventListener('DOMContentLoaded', function () {
    var accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(function (accordion) {
        accordion.addEventListener('click', function () {
            var content = this.nextElementSibling;
            var toggle = this.querySelector('.accordion-toggle');

            if (content.style.display === 'block' || content.style.display === '') {
                content.style.display = 'none';
                toggle.textContent = '+';
            } else {
                content.style.display = 'block';
                toggle.textContent = '-';
            }
        });
    });
});
