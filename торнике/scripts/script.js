document.getElementById('burger-menu').addEventListener('click', function() {
    const navList = document.querySelector('.navigation-list');
    
    // Проверяем, есть ли класс 'hidden'
    if (navList.classList.contains('hidden')) {
        navList.classList.remove('hidden'); // Убираем класс 'hidden', чтобы открыть меню
    } else {
        navList.classList.add('hidden'); // Добавляем класс 'hidden', чтобы закрыть меню
    }
});
document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = "block";
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
}

function validateFIO() {
    const fioInput = document.getElementById('fio');
    
    // Удаляем все символы кроме букв и пробелов
    fioInput.value = fioInput.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, '');
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    
    // Удаляем все символы кроме цифр
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
}