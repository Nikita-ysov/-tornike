document.getElementById('burger-menu').addEventListener('click', function() {
    const navList = document.querySelector('.navigation-list');
    
    
    if (navList.classList.contains('hidden')) {
        navList.classList.remove('hidden'); 
    } else {
        navList.classList.add('hidden'); 
    }
});

function showHiddenItems() {
    const hiddenItems = document.querySelectorAll('.product-card.hidden'); 
    if (hiddenItems.length > 0) {
        hiddenItems.forEach(item => {
            item.classList.remove('hidden'); 
        });
        return true; 
    }
    return false;
}
function handleButtonClick() {
    const itemsShown = showHiddenItems();
    const hiddenItems = document.querySelectorAll('.product-card.hidden');
    if (hiddenItems.length === 0) {
        this.style.display = 'none'; 
    }
}
document.querySelector('.button-mu').addEventListener('click', handleButtonClick);