window.addEventListener('load', () => {
  const navList = document.querySelectorAll('#nav__list li');

  navList.forEach((i) => {
    i.addEventListener('click', () => {
      document.getElementById('txt').value = i.innerText;
    });
  });
});
