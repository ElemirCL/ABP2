const emailAdmin = "admin";
const passAdmin = "admin";
const btnSesion = document.getElementById("btnSesion");
const emailIngresado = document.getElementById("correo")
const passIngresada = document.getElementById("contraseña")
const labelInfo = document.createElement('label')
const contenedor = document.getElementById('contenedor')

btnSesion.addEventListener("click", () => {
  if (emailAdmin === emailIngresado.value && passAdmin === passIngresada.value) {
    window.location = "menu.html";
  } else {
    $(function () {
      $("#btnSesion").on("click", () => {
        $('#infoAcceso').show();
        $("#infoAcceso").fadeOut(4000);

      });
    });
  }
});


