// toggle class active
// jika ada, hilangkan
// jika tidak ada, tambahkan class nya
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav nya
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    // jika bukan hamburger menu dan navbar yang di klik, maka hapus active class

    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

