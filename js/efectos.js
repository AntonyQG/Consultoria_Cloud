$(document).ready(function() {
    // Scroll Elementos Menu
	var servicios = $('#servicios').offset().top,
    precios = $('#precios').offset().top,
    opiniones = $('#opiniones').offset().top,
    contacto = $('#contacto').offset().top;


    // Acceso a los botones
    // Boton Servicios
	$('#btn-servicios').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios + 1
		}, 500);
	});

    // Boton Precios
    $('#btn-precio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: precios + 1
		}, 600);
	});

    // Boton Opiniones
    $('#btn-opiniones').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: opiniones +1
		});
	});

    // Boton Contacto
    $('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto + 1
		});
	});
});