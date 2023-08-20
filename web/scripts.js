$(document).ready(function() {
  $('.main').hide();

  const mainElement = document.querySelector('.main');

  window.addEventListener('message', function(event) {
    var item = event.data;

    if (item.menu === "show") {
      $('.main').fadeIn(500);

    } else if (item.menu === "hide") {
      $('.main').fadeOut(500);

    }

  });

  document.querySelector('.button').addEventListener('click', () => {
    axios.post(`https://dd_namechanger/submit`, {
            firstname: document.querySelector('.firstname').value,
            lastname: document.querySelector('.lastname').value,
    });
  });

  document.querySelector('.exit').addEventListener('click', () => {
    axios.post(`https://dd_namechanger/exit`);
  });

});