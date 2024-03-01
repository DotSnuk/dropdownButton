export function hideSibling(id) {
  const element = document.getElementById(id).nextElementSibling;
  if (element.classList.contains('hide')) {
    element.classList.remove('hide');
    return;
  }
  element.classList.add('hide');
}
export function dropdownButton(id) {
  const element = document.getElementById(id);
  hideSibling(id);
  element.addEventListener('click', () => {
    hideSibling(id);
  });
}
