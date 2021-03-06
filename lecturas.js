new Vue({
  el: "#appLectura",
  data: {
    lectura: {
      lectura_acterior: 0,
      lectura_actual: 0,
      nuevaLectura: "",
    },
    client: {},

    buscar: "",
    itemP: "",
  },
  created() {
    this.getUser();
    this.getLectura();
  },

  methods: {
    getUser() {
      const DB = localStorage.getItem("cliente")
        ? JSON.parse(localStorage.getItem("cliente"))
        : [];

      return (this.client = DB);
    },
    getLectura() {
      const DB = localStorage.getItem("lectura")
        ? JSON.parse(localStorage.getItem("lectura"))
        : [];

      return (this.lectura = DB);
    },
    guardarLectura() {
      console.log(this.lectura);
      if (this.itemP.trim() !== "") {
        const DB = localStorage.getItem("lectura")
          ? JSON.parse(localStorage.getItem("lectura"))
          : [];

        this.client.forEach((element) => {
          if (element.codigo === this.itemP) {
            DB.push({ ...this.lectura, id: element.lectura });
            localStorage.setItem("lectura", JSON.stringify(DB));
            Swal.fire({
              title: "Correcto",
              text: `lecturas guardadas`,
              icon: "success",
            });
          } else {
            console.log("aa no se guardo");
          }
        });
        return this.getLectura();
      }
    },
    buscandoCliente() {
      const db = localStorage.getItem("cliente")
        ? JSON.parse(localStorage.getItem("cliente"))
        : [];
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
      return (this.itemP = pro.codigo);
    },
    eliminarCliente() {},

    limpiar() {},
  },
});
