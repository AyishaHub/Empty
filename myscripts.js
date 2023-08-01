window.addEventListener('load', () => {
  const navList = document.querySelectorAll('#nav__list li');

  navList.forEach((i) => {
    i.addEventListener('click', () => {
      document.getElementById('txt').value = i.innerText;
    });
  });
   navList.forEach(menu => {
    menu.addEventListener('click', () => {
      // eslint-disable-next-line no-undef
      buttons.forEach(btn => btn.classList.remove('active'))
      this.classList.add('active')
    })
  })
});
