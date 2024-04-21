const rsLogo = document.getElementById("logors");
const headerTop = document.getElementById("headertop");

window.addEventListener('scroll', ()=>{
    
    const scrolled = window.scrollY;

    if (scrolled === 0){
        rsLogo.style.display = 'flex';
        headerTop.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } else {
        rsLogo.style.display = 'none';
        headerTop.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
           entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


