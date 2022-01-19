export const createSelect = function () {
  const customerSelect = document.querySelector('select[name="customer"]');
  customerSelect.multiple = true;
  customerSelect.classList.add('form-control');
};
