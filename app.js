document.getElementById('hamburger').addEventListener('click', function () {
  var nav = document.getElementById('mobile-nav');
  if (nav.style.display === 'none') {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
});