document.getElementById('burger-menu').addEventListener('click', function() {
    const navList = document.querySelector('.navigation-list');
    
    // Проверяем, есть ли класс 'hidden'
    if (navList.classList.contains('hidden')) {
        navList.classList.remove('hidden'); // Убираем класс 'hidden', чтобы открыть меню
    } else {
        navList.classList.add('hidden'); // Добавляем класс 'hidden', чтобы закрыть меню
    }
});