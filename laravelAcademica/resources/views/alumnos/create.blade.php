<form action="{{url('/alumnos')}}" method="POST" enctype="multipart/form-data">
    @csrf
<label for="Codigo">Codigo</label>
<input type="text" name="Codigo" id="codigo">
<br>
<label for="Nombre">Nombre</label>
<input type="text" name="Nombre" id="nombre">
<br>
<label for="FNacimiento">Fecha de Nacimiento</label>
<input type="text" name="Fnacimiento" id="fnacimiento">
<br>
<label for="Direccion">Direccion</label>
<input type="text" name="Direccion" id="direccion">
<br>
<label for="Telefono">Telefono</label>
<input type="text" name="Telefono" id="telefono">
<br>
<input type="submit" value="Guardar">
<br>
</form>
