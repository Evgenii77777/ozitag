export const filter = function (evt) {
  evt.preventDefault();
  let input = document.querySelector('#site-search');
  let inputValue = input.value.toUpperCase();
  let cards = document.querySelectorAll('.item');

  cards.forEach(function getMatch(info) {
    let heading = info.querySelector('h3');
    let headingContent = heading.innerHTML.toUpperCase();

    if (headingContent.includes(inputValue)) {
      info.classList.add('show');
      info.classList.remove('hide');
    } else {
      info.classList.add('hide');
      info.classList.remove('show');
    }
  });
};
