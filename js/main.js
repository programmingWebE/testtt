document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
  this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', function() {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      document.querySelector('.custom-select__trigger').style.backgroundImage = getComputedStyle(this).backgroundImage;
    }
  })
}

window.addEventListener('click', function(e) {
  const select = document.querySelector('.custom-select');
  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});

var el = document.querySelector(".main-header__count");
VMasker(el).maskPattern("999-999-444"); // masking the input
