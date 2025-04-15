document.getElementById('burger-menu').addEventListener('click', function() {
    const navList = document.querySelector('.navigation-list');
    
    
    if (navList.classList.contains('hidden')) {
        navList.classList.remove('hidden'); 
    } else {
        navList.classList.add('hidden'); 
    }
});

function showHiddenItems() {
    const hiddenItems = document.querySelectorAll('.product-card-m.hidden');


    if (hiddenItems.length > 0) {
        hiddenItems.forEach(item => {
            item.classList.remove('hidden');
        });
    }

    
    if (document.querySelectorAll('.product-card-m.hidden').length === 0) {
        document.querySelector('.button-mu').style.display = 'none';
    }
}

document.querySelector('.button-mu').addEventListener('click', showHiddenItems);