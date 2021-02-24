var midbalumnos = openDatabase('dbalumnos','1.0','aplicacion de alumnos',5*1024*1024);
window.id=0;
if(!midbalumnos){
         alert("El navegador no soporta web sql")
}
    var appVue= new Vue({
    el:'#appAlumnos',
    data:{
            alumno:{
                id:0,
                codigo:'',
                nombre:'',
                direccion:'',
                municipio:'',
                departamento:'',
                telefono:'',
                fecha:'',
                sexo:''       
            },
            alumnos:[]
        },    
    methods:{  
    guardaraalumno(){
            midbalumnos.transaction(tran=>{ 
                tran.executeSql('INSERT INTO alumnos(id,codigo,nombre,direccion,municipio,departamento,telefono,fecha,sexo) VALUES(?,?,?,?,?,?,?,?,?)', 
                    [++id,this.alumno.codigo,this.alumno.nombre,this.alumno.direccion,this.alumno.municipio,this.alumno.departamento,this.alumno.telefono,this.alumno.fecha,this.alumno.sexo]);
                this.obteneralumnos();
                this.limpiar();
            }, err=>{
                console.log(err);
            });
        
         },
         Eliminar(id){
            midbalumnos.transaction(tran=>{ 
                    tran.executeSql('DELETE FROM alumnos WHERE id='+id);
                    this.obteneralumnos();
                }, err=>{
                    console.log(err);
                });
             },
             
         obteneralumnos(){
            midbalumnos.transaction(tran=>{
                tran.executeSql('select * from alumnos',[],(index,data)=>{
                    this.alumnos = data.rows;
                    id=data.rows.length;
                     });
                }, err=>{
                    console.log(err);
                });
        },
            mostraralumnos(alumn){
            this.alumno=alumn;
        },
        limpiar(){
            this.alumno.codigo='';
            this.alumno.nombre='';
            this.alumno.direccion='';
            this.alumno.municipio='';
            this.alumno.departamento='';
            this.alumno.telefono='';
            this.alumno.fecha='';
            this.alumno.sexo='';
        },

        Modificar(codigo){
            midbalumnos.transaction(tran=>{ 
                tran.executeSql('UPDATE alumnos SET codigo='+this.alumno.codigo);              
                console.log(codigo);
            }, err=>{
                console.log(err);
            });
        },
    },
    created(){
    midbalumnos.transaction(tran=>{
        tran.executeSql('Create table if not exists alumnos(id int primary key not null,codigo varchar(10),nombre varchar(50),direccion varchar(30),municipio varchar(30),departamento varchar(30),telefono varchar(10),fecha varchar(10),sexo varchar(15))');
    }, err=>{
        console.log(err);
    });
    this.obteneralumnos();
        }
});