let search = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');
let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

search.onclick = () => {
    searchbox.classList.toggle('active');
    navbar.classList.remove('active');
}

menuBar.onclick = () => {
    navbar.classList.toggle('active');
    searchbox.classList.remove('active');
}

// Đóng menu khi click ra ngoài
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header')) {
        searchbox.classList.remove('active');
        navbar.classList.remove('active');
    }
});