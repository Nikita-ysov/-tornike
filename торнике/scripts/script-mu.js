document.querySelector('.button-mu').addEventListener('click', function() {
  
    const hiddenItems = document.querySelectorAll('.product-card-m.hidden');
    
   
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });

    if (hiddenItems.length === 0) {
        this.style.display = 'none'; 
    }
});
document.getElementById('burger-menu').addEventListener('click', function() {
    
    const navList = document.querySelector('.navigation-list');
    
    navList.classList.toggle('hidden');
});