const containers = document.querySelectorAll('.container');
const gutter = document.querySelector('.gutter');
const knob = document.querySelector('.knob');

function toggleSwitch(e) {
  if (e.target.classList.contains('knob')) {
    e.target.classList.toggle('active');
    e.target.parentNode.classList.toggle('active');
  }
}

containers.forEach(c => {
  c.addEventListener('click', toggleSwitch);
});
