import { createTemplate } from '../new';
const arr = [
  'Ковры и ковровые изделия',
  'Ковры и ковровые покрытия',
  'Легковые пассажирские автомобили',
  'Напольные покрытия (кроме ковров)',
  'Оборудование и инструменты для садов и парков, включая газонокосилки',
  'Шелковые ткани',
];

export const createMain = function (event) {
  const target = event.target;
  const contentWrapper = document.querySelector('.content__wrapper');
  console.log('customerSelect -> value:', target.value);
  contentWrapper.innerHTML = `<h2 class="title region">Тендеры в роли Поставщика</h2>
        <button type="button" class="show">Показать выбранное(${arr.length})</button>`;
  const btn = document.querySelector('.show');
  btn.addEventListener('click', createTemplate);
};
