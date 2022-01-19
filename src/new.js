import { filter } from './js/filter';
import { createSelect } from './js/select';
import { lengthCheck } from './js/length';
import { createMain } from './js/main';

const arr = [
  'Ковры и ковровые изделия',
  'Ковры и ковровые покрытия',
  'Легковые пассажирские автомобили',
  'Напольные покрытия (кроме ковров)',
  'Оборудование и инструменты для садов и парков, включая газонокосилки',
  'Шелковые ткани',
];
const customerSelect = document.querySelector('select[name="customer"]');
const body = document.querySelector('body');

export const createTemplate = function () {
  body.innerHTML = `<header class='header'><div class="header__wrapper"><button class="remove__btn">Реализуемые товары</button></div><div class="search__wrapper"><form class="search-form" action=""><label hidden for="site-search"></label><input placeholder="Начните набирать название..." type="search" name="site-search" id="site-search" class="site-search">
</form></div></header><main><div class='ul__wrapper'></div></main><footer class="footer"><button class="btn__footer">Применить</button> <button class='clear__btn'>Очистить</button></footer>`;
  const ulWrapper = document.querySelector('.ul__wrapper');
  const btnClear = document.querySelector('.clear__btn');

  const ul = `<ul>${arr
    .map(
      el =>
        `<li class="item"><label class="checkbox-other"><input type="checkbox" ></label><h3>${el}</h3></li>`,
    )
    .join('')}</ul>`;
  ulWrapper.insertAdjacentHTML('beforeend', ul);

  let form = document.querySelector('.search-form');

  form.addEventListener('keyup', filter);
  body.addEventListener('click', removePage);
  body.addEventListener('click', lengthCheck);
  btnClear.addEventListener('click', createTemplate);
};


const removePage = function (e) {
  const removeBtn = document.querySelector('.remove__btn');
  const apply = document.querySelector(".btn__footer")
  if (e.target === removeBtn || e.target === apply) {
    body.innerHTML = ` <div class="wrapper">
      <div class="content__wrapper">
        <h2 class="title region">Тендеры в роли Поставщика</h2>
      </div>
      <select name="customer" class="select-checkbox">
        <option class="grey__option" option selected disabled hidden>
          Код ОКРБ или наименование закупаемой продукции
        </option>
        <option value="1">Объект 1</option>
        <option value="2">Объект 2</option>
        <option value="3">Объект 3</option>
        <option value="4">Объект 4</option>
        <option value="5">Объект 5</option>
        <option value="6">Объект 6</option>
      </select>
    </div>`;

    const customerSelect = document.querySelector('select[name="customer"]');
    body.removeEventListener('click', removePage);
    body.removeEventListener('click', lengthCheck);
    customerSelect.addEventListener('click', createSelect);
    customerSelect?.addEventListener('change', createMain);
  } else {
    return;
  }
};

customerSelect.addEventListener('click', createSelect);
customerSelect?.addEventListener('change', createMain);
