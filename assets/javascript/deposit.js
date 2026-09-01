const btnDepositar = document.getElementById("btnDepositar");
const deposito = document.getElementById("deposito");
const alertaDeposito = document.getElementById("alertaDeposito");
const alerta = document.createElement("p");
let sueldoInicial = localStorage.getItem('sueldoDeposito')
let cash = parseFloat(sueldoInicial)


btnDepositar.addEventListener("click", () => {
    const num = parseFloat(deposito.value);
    event.preventDefault();
    if (num > 0) {
        total = cash + num
        localStorage.setItem("sueldoDeposito", total);
        localStorage.setItem("deposito", num);
        alerta.className = "alert alert-success";
        alerta.textContent = "Dinero depositado correctamente.";
        alertaDeposito.appendChild(alerta);
    } else {
        alerta.className = "alert alert-warning";
        alerta.textContent = "monto ingresado no valido.";
        alertaDeposito.appendChild(alerta);
    }
});
