const mbtn = document.querySelector('.mbtn');
const navlist = document.querySelector('.navlist');
mbtn.addEventListener('click', function () {
          navlist.classList.toggle('active');
          mbtn.classList.toggle('bx-x');
})