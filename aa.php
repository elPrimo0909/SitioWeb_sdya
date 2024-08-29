<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

<form onsubmit="enviar_ajax(); return false" id="form1">
<input type="text" name="nombre"><br>
<textarea name="mensaje"></textarea><br>
<input type="submit" value="Enviar">
</form>

<script>
function enviar_ajax(){	

	$.ajax({
	type: 'POST',
	url: './proccess.php',
	data: $('#form1').serialize(),
	success: function(respuesta) {
		if(respuesta=='ok'){
		alert('enviado');
		}
		else {
		alert('error');
		}
	}
	});
}
</script>