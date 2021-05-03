<table class="table table-light">
    <thead class="thead-light">
        <tr>
            <th>#</th>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Fecha de Nacimiento</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        @foreach($alumnos as $alumno)
        <tr>
            <td>{{ $alumno->id}}</td>
            <td>{{ $alumno->Codigo}}</td>
            <td>{{ $alumno->Nombre}}</td>
            <td>{{ $alumno->Fnacimiento}}</td>
            <td>{{ $alumno->Direccion}}</td>
            <td>{{ $alumno->Telefono}}</td>
            <td>
<a href="{{url('/alumnos/'.$alumno->id.'/edit')}}">
    Editar
</a>
                 |

<form action="{{url('/alumnos/'.$alumno->id)}}" method="post">
    @csrf
    {{method_field('DELETE')}}
<input type="submit" onclick="return confirm('¿Quires eliminarlo?')" value="Eliminar">
Eliminar
</form>
</td>
        </tr>
        @endforeach
    </tbody>
</table>
