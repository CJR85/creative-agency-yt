const toggle = document.querySelector('.toggle'),
  navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});
