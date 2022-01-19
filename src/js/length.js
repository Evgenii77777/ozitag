export const lengthCheck = function () {
  const header = document.querySelector('.header__wrapper');
  const ul = document.querySelector('.item');
  let number = document.querySelectorAll(
    'input[type="checkbox"]:checked',
  ).length;
  if (number !== 0) {
    return (header.innerHTML = `<button  class="remove__btn">Реализуемые товары</button> <p class="header__text">Выбранное (${number})`);
  }
  return (header.innerHTML = `<button  class="remove__btn">Реализуемые товары</button>`);
};
