<form action="{{url('/alumnos')}}" method="POST" enctype="multipart/form-data">
    @csrf
    @include('alumnos.form');
</form>
