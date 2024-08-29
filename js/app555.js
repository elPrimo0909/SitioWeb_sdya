	function load(page){
		var parametros = {"action":"ajax","page":page};
		$("#loader").fadeIn('slow');
		$.ajax({
			url:'paises_ajax.php',
			data: parametros,
			 beforeSend: function(objeto){
			$("#loader").html("<img src='loader.gif'>");
			},
			success:function(data){
				$(".outer_div").html(data).fadeIn('slow');
				$("#loader").html("");
			}
		})
	}

		$('#dataUpdate').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var codigo = button.data('codigo') // Extraer la información de atributos de datos
		  var id = button.data('id') // Extraer la información de atributos de datos
		  var nombre = button.data('nombre') // Extraer la información de atributos de datos
		  var moneda = button.data('moneda') // Extraer la información de atributos de datos
		  var capital = button.data('capital') // Extraer la información de atributos de datos
		  var continente = button.data('continente') // Extraer la información de atributos de datos
		  var departamento = button.data('departamento') // Extraer la info
		  var municipio = button.data('municipio') // Extraer la info
		  var pais = button.data('pais')
		  var cbx_estado1 = button.data('cbx_estado1')
		  var cbx_municipio1 = button.data('cbx_municipio1')
		  var codigo_pais11 = button.data('codigo_pais11')
		  var codigo_pais = ""
		  var pago3 = "Cerrar"

		  var modal = $(this)
 modal.find('.modal-title').text('Detalles: '+nombre)
 modal.find('.modal-titledepartamento').text(''+departamento+' - '+municipio)
 modal.find('.modal-titlepais').text(''+pais)
		  modal.find('.modal-body #id').val(id)
		  modal.find('.modal-body #codigo').val(codigo)
		  modal.find('.modal-body #pago3').val(pago3)
		  modal.find('.modal-body #cbx_municipio1').val(cbx_municipio1)
		  modal.find('.modal-body #codigo_pais11').val(codigo_pais11)
		  modal.find('.modal-body #cbx_estado1').val(cbx_estado1)
		  modal.find('.modal-body #nombre').val(nombre)
		  modal.find('.modal-body #codigo_pais').val(codigo_pais)
		  modal.find('.modal-body #moneda').val(moneda)
		  modal.find('.modal-body #capital').val(capital)
		  modal.find('.modal-body #continente').val(continente)
		   modal.find('.modal-body #departamento').val(departamento)
		    modal.find('.modal-body #municipio').val(municipio)
		 modal.find('.modal-body #pais').val(pais)
		  $('.alert').hide();//Oculto alert
		})



$('#dataUpdate_electronica1').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var codigo = button.data('codigo') // Extraer la información de atributos de datos
		  var id = button.data('id') // Extraer la información de atributos de datos
		  var nombre = button.data('nombre') // Extraer la información de atributos de datos
		  var moneda = button.data('moneda') // Extraer la información de atributos de datos
		  var capital = button.data('capital') // Extraer la información de atributos de datos
		  var continente = button.data('continente') // Extraer la información de atributos de datos
		   var departamento = button.data('departamento') // Extraer la info
		    var municipio = button.data('municipio') // Extraer la info
		      var dv1 = button.data('dv1') // Extraer la info
		      var apeliano = button.data('apeliano') // Extraer la info
		         var tipoidet = button.data('tipoidet') // Extraer la info
		           var nomempresa = button.data('nomempresa') // Extraer la info
		             var nodepa = button.data('nodepa') // Extraer la info
		              var nomuni = button.data('nomuni') // Extraer la info
  var nopai = button.data('nopai') // Extraer la info
		              var nocodepa = button.data('nocodepa') // Extraer la info
		                 var codmuni = button.data('codmuni') // Extraer la info
		                    var codpail = button.data('codpail') // Extraer la info
		                         var codpos = button.data('codpos') // Extraer la info
		             var respontribu = button.data('respontribu') // Extraer la info
   var tipopersonax = button.data('tipopersonax')
      var ivaresponsable = button.data('ivaresponsable')



		  var modal = $(this)
		  modal.find('.modal-title').text('Modificar país: '+nombre)
		  modal.find('.modal-body #id').val(id)
		  modal.find('.modal-body #codigo').val(codigo)
		  modal.find('.modal-body #nombre').val(nombre)
		  modal.find('.modal-body #moneda').val(moneda)
		  modal.find('.modal-body #capital').val(capital)
		  modal.find('.modal-body #continente').val(continente)
		   modal.find('.modal-body #departamento').val(departamento)
		    modal.find('.modal-body #municipio').val(municipio)
 modal.find('.modal-body #dv1').val(dv1)
  modal.find('.modal-body #apeliano').val(apeliano)
    modal.find('.modal-body #tipoidet').val(tipoidet)

    modal.find('.modal-body #nomempresa').val(nomempresa)

    modal.find('.modal-body #nodepa').val(nodepa)

    modal.find('.modal-body #nomuni').val(nomuni)
  modal.find('.modal-body #nopai').val(nopai)

    modal.find('.modal-body #nocodepa').val(nocodepa)
      modal.find('.modal-body #codmuni').val(codmuni)
          modal.find('.modal-body #codpail').val(codpail)
           modal.find('.modal-body #codpos').val(codpos)
                modal.find('.modal-body #respontribu').val(respontribu)

           modal.find('.modal-body #tipopersonax').val(tipopersonax)
                modal.find('.modal-body #ivaresponsable').val(ivaresponsable)


		  $('.alert').hide();//Oculto alert
		})


		
		$('#dataDelete').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var id = button.data('id') // Extraer la información de atributos de datos
		  var modal = $(this)
		  modal.find('#id_pais').val(id)
		})

	$( "#actualidarDatos" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "modificar.php",
					data: parametros,
					 beforeSend: function(objeto){
$("#datos_ajax").html("<img src='https://www.amonca.com/img/loader_final.gif'><br><br>");
					  },
					success: function(datos){
					$("#datos_ajax").html(datos);
				
					load(1);
				  }
			});
		  event.preventDefault();
		});




	$( "#actualidarDatos_electronica1" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "modificar_electronica_230220.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#datos_electro1").html("Mensaje: actualizando datos...");
					  },
					success: function(datos){
					$("#datos_electro1").html(datos);
					
					load(1);
				  }
			});
		  event.preventDefault();
		});




		
		$( "#guardarDatos" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "agregar.php",
					data: parametros,
					 beforeSend: function(objeto){
$("#datos_ajax_register").html("<img src='https://www.amonca.com/img/loader_final.gif'><br><br>");
					  },
					success: function(datos){
					$("#datos_ajax_register").html(datos);
					
					load(1);
				  }
			});
		  event.preventDefault();
		});
		
		$( "#guardarDatos_electronica" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "agregar_190220.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#datos_ajax_register").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#datos_ajax_register").html(datos);
					
					load(1);
				  }
			});
		  event.preventDefault();
		});



		$( "#eliminarDatos" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "eliminar.php",
					data: parametros,
					 beforeSend: function(objeto){
						$(".datos_ajax_delete").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$(".datos_ajax_delete").html(datos);
					
					$('#dataDelete').modal('hide');
					load(1);
				  }
			});
		  event.preventDefault();
		});
