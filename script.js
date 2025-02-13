// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка к якорям меню
    document.querySelectorAll('nav a[href^="#"], .menu-categories a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Активное состояние для категорий меню (можно доработать, если нужно активное выделение)
    // Пример добавления класса 'active' для первой категории при загрузке страницы
    // const menuCategories = document.querySelectorAll('.menu-categories a');
    // if (menuCategories.length > 0) {
    //     menuCategories[0].classList.add('active');
    // }

    // Можно добавить валидацию форм и другие интерактивные элементы здесь
});