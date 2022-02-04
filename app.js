const allAccurdion = document.querySelectorAll('.accordion-titel');

allAccurdion.forEach((item) => {
  item.addEventListener('click', function (e) {
    const currentActiveItem = document.querySelector('.active');

    if (currentActiveItem && currentActiveItem != this) {
      currentActiveItem.classList.remove('active');
      currentActiveItem.nextElementSibling.style.height = 0;
    }

    this.classList.toggle('active');

    if (this.classList.contains('active')) {
      this.nextElementSibling.style.height =
        this.nextElementSibling.scrollHeight + 'px';
    } else {
      this.nextElementSibling.style.height = 0;
    }
  });
});
