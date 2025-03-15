function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById('toggle-info').addEventListener('click', function() {
    var moreInfo = document.querySelector('.more-info');
    var currentDisplay = moreInfo.style.display;
    
    if (currentDisplay === 'none' || currentDisplay === '') {
        moreInfo.style.display = 'block';
        this.textContent = '-';  
    } else {
        moreInfo.style.display = 'none';
        this.textContent = '...';  
    }
});
