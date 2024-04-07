(function() {
  const elem = document.querySelector(".my-projects");
  const iso = new Isotope(elem, {
    itemSelector: ".projects-item",
    filter: '.montessori'
  });

  const controlls = document.querySelectorAll(".filter__link");
  const activeClass = "filter__link--active";

  controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
      e.preventDefault();
      
      const filterName = control.getAttribute("data-filter");

      controlls.forEach(function(link) {
        link.closest(".filter__item").classList.remove(activeClass);
      });

      control.closest(".filter__item").classList.add(activeClass);

      iso.arrange({
        filter: `.${filterName}`
      })
    });
  });
})();

const reloadFlag = localStorage.getItem('reloadFlag');

if (!reloadFlag) {
    localStorage.setItem('reloadFlag', 'true');
    location.reload();
} else {
    localStorage.removeItem('reloadFlag'); // Опционально, чтобы удалить флаг после первой загрузки
}
  



