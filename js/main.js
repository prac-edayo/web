// JavaScript Document
//para iniciar la programacion en js es necesario iniciar con el $ 
$(document).ready(function () {
	
	//blog
	document.addEventListener("DOMContentLoaded", () => {
  const blogLinks = document.querySelectorAll('.blog-seccion .blog-btn');

  blogLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Este artículo se cargará próximamente.');
    });
  });
});
	//fin de blog

  // === CONTACTO ===
  const form = document.getElementById("contactForm");
  const successMsg = document.querySelector(".success-msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita el envío real

      // Limpiamos mensajes de error previos
      const errorMsgs = form.querySelectorAll(".error-msg");
      errorMsgs.forEach((msg) => (msg.style.display = "none"));

      let hayError = false;

      // Recorremos cada campo requerido
      form.querySelectorAll("[required]").forEach((campo) => {
        if (!campo.value.trim()) {
          mostrarError(campo, "Este campo es obligatorio");
          hayError = true;
        } else if (campo.type === "email" && !emailValido(campo.value)) {
          mostrarError(campo, "Introduce un correo válido");
          hayError = true;
        }
      });

      if (!hayError) {
        successMsg.hidden = false;
        form.reset();

        setTimeout(() => {
          successMsg.hidden = true;
        }, 4000);
      }
    });
  }

  function mostrarError(campo, mensaje) {
    const small = campo.parentElement.querySelector(".error-msg");
    if (small) {
      small.innerText = mensaje;
      small.style.display = "block";
    }
  }

  function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // === LAP ===
  $('.toggle-info').click(function () {
    $(this).siblings('.lap-info').slideToggle();
  });

  // === MENÚ DESPLEGABLE ===
  $('#btnmenu').click(function () {
    if ($(this).hasClass('fa-bars')) {
      $(this).removeClass('fa-bars').addClass('fa-times-circle');
      $('.navegacion .menu').css({ left: '0px' });
      $('.navegacion').css({ width: '100%', background: 'rgba(0,0,0,0.3)' });
    } else {
      $(this).removeClass('fa-times-circle').addClass('fa-bars');
      $('.navegacion .menu').css({ left: '-320px' });
      $('.navegacion').css({ width: '0%', background: 'rgba(0,0,0,0)' });
      $('.submenu').css({ left: '-320px' });
    }
  });

  $('.itemsubmenu > a').click(function () {
    const pos = $(this).parent().attr('vmenu');
    $('.submenu').css({ left: '-320px' });
    $('.itemsubmenu[vmenu="' + pos + '"] .submenu').css({ left: '0px' });
  });

  $('.submenu .regresa').click(function () {
    $(this).parent().css({ left: '-320px' });
  });

  // === CARRUSEL ===
  const numimg = $('.slider li').length;
  let imgpos = 1;

  for (let i = 1; i <= numimg; i++) {
    $('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
  }

  $('.slider li').hide();
  $('.slider li:first').fadeIn();
  $('.paginacion li:first').css({ color: '#9933CC' });

  $('.paginacion li').click(function () {
    imgpos = $(this).index() + 1;

    $('.slider li').hide();
    $('.slider li:nth-child(' + imgpos + ')').fadeIn();
    $('.paginacion li').css({ color: '#00CCFF' });
    $(this).css({ color: '#9933CC' });
  });

  $('.derecha span').click(function () {
    imgpos = imgpos >= numimg ? 1 : imgpos + 1;
    cambiarImagen(imgpos);
  });

  $('.izquierda span').click(function () {
    imgpos = imgpos <= 1 ? numimg : imgpos - 1;
    cambiarImagen(imgpos);
  });

  function cambiarImagen(pos) {
    $('.slider li').hide();
    $('.slider li:nth-child(' + pos + ')').fadeIn();
    $('.paginacion li').css({ color: '#00CCFF' });
    $('.paginacion li:nth-child(' + pos + ')').css({ color: '#9933CC' });
  }
});