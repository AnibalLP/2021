  new Vue({
      el: "#app",
      data: {
          client: {
              accion: "nuevo",
              codigo: "",
              nombre: "",
              direccion: "",
              zona: "",
          },

          buscar: "",
      },
      created() {
          this.getUser();
      },

      methods: {
          getUser() {
              const DB = localStorage.getItem("cliente") ?
                  JSON.parse(localStorage.getItem("cliente")) : [];

              return (this.client = DB);
          },
          guardarCliente() {
              if (
                  this.client.codigo.trim() !== "" &&
                  this.client.nombre.trim() !== "" &&
                  this.client.direccion.trim() !== "" &&
                  this.client.zona.trim() !== ""
              ) {
                  // asignamos un valor o recuperamos datos almacenados
                  let DB = localStorage.getItem("cliente") ?
                      JSON.parse(localStorage.getItem("cliente")) : [];
                  delete this.client[0];

                  DB.push({...this.client });


                  localStorage.setItem("cliente", JSON.stringify(DB));
                  Swal.fire({
                      title: "Correcto",
                      text: `El cliente: ${this.client.nombre} se a guardado con exito`,
                      icon: "success"
                  })
                  return this.getUser();

              }
          },
          buscandoCliente() {
              const db = localStorage.getItem("cliente") ?
                  JSON.parse(localStorage.getItem("cliente")) : [];
              if (this.buscar === "") {
                  return [];
              }

              this.buscar = this.buscar.toLocaleLowerCase();
              this.client = db.filter(
                  (item) =>
                  item.codigo.toLocaleLowerCase().includes(this.buscar) ||
                  item.nombre.toLocaleLowerCase().includes(this.buscar) ||
                  item.zona.toLocaleLowerCase().includes(this.buscar)
              );
          },
          mostrarCliente(pro) {
              console.log(pro);
          },
          eliminarCliente() {

          },

          limpiar() {},
      },
  });