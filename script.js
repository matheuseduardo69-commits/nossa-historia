const containers = document.querySelectorAll('.container');
window.addEventListener('scroll', () => {
    const trigger = window.innerHeight *0.85;
    containers.forEach(container => {
        const top = container.getBoundingClientRect().top;
        if(top < trigger) {
            container.classList.add('show');
        }
    })
})