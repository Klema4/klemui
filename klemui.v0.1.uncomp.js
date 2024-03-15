document.addEventListener('click', function (event) {
    if (event.target.dataset.kuiTarget) {
        const target = document.querySelector(event.target.dataset.kuiTarget);
        const siblings = document.querySelectorAll(`[role="tabpanel"]`);
        siblings.forEach(sibling => {
            sibling.classList.add('visually-hidden');
            sibling.classList.remove('visually-shown');
        });
        target.classList.add('visually-shown');
        target.classList.remove('visually-hidden');
    }
});