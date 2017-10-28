$(document).ready(function(){

	$('.parallax').parallax();

	// $('.scrollspy').scrollSpy();

	$('#send').click(function() {
		
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();

		var exp_name = /^[a-zA-Z\s]{4,}(?!.*[0-9])(?!.*[\!\"\#\$\%\&\(\)\=\'\¿\¡\<\>\´\+\{\}\-\~\^\`\*\¨\:\;])/;
  		var exp_email = /^[a-zA-Z|0-9|.|_-]+[@][a-zA-Z]{4,}[.][\w.]+(?!.*[\!\"\#\$\%\&\(\)\=\'\¿\¡\<\>\´\+\{\}\-\~\^\`\*\¨\:\;])/;
  		var exp_message = /[a-zA-Z0-9.\s]{4,}(?!.*[\"\#\$\%\&\'\´\{\}\~\^\`\¨])/;

  		if( exp_name.test(name) && exp_email.test(email) && exp_message.test(message) )
  			alert( "Mensaje enviado!" );
  		else
  			alert("Error en los datos");
	});

});