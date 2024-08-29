
<!--

<div id="datos_ajax_register" ></div>
<form onsubmit="enviar_ajax(); return false" id="form1">
<h4>Asunto</h4>

<input  class="form" type="text" name="nombre"><br><br>
<h4>Mensaje</h4>

<textarea  cols="4" name="mensaje"></textarea><br>
<input type="submit" value="Enviar">

</form>

-->

<form onsubmit="enviar_ajax(); return false" id="form1">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div class="single-input">
                    <input type="text" placeholder="Nombre y Apellido*" name="nombre"  required="" >
                  </div> <!-- /.single-input -->
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div class="single-input">
                    <input type="number" placeholder="Número contacto*" name="apellidos" required="">
                  </div> <!-- /.single-input -->
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div class="single-input">
                    <input type="email" placeholder="Tu Email*" name="email" required="">
                  </div> <!-- /.single-input -->
                </div>
              </div> <!-- /.row -->
              <div class="single-input">
                <input type="text" placeholder="Asunto" name="asunto" required="">
              </div> <!-- /.single-input -->
              <textarea placeholder="Mensaje" name="mensaje" required=""></textarea>


              <button class="tran3s p-color-bg"  style="background: #007BB9" >Enviar Mensaje</button>
            </form>