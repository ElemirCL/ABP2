const btnEnviarDinero = document.getElementById('btnEnviarDinero')
const btnAgregarContacto = document.getElementById('btnAgregarContacto')
let sueldoInicial = parseFloat(localStorage.getItem('sueldoDeposito'))
let retiro = document.getElementById('inputMonto')

const alertaDeposito = document.getElementById("alertaDeposito");
const contactoDeposito = document.getElementById('listaContactos');
const alerta = document.createElement("p");
const nuevoContacto = document.createElement('li');

const nombre = document.getElementById('inputNombre')
const apellido = document.getElementById('inputApellido')
const banco = document.getElementById('inputBanco')
const inputReset = document.getElementById('inputReset')


let cash = parseFloat(sueldoInicial)



btnEnviarDinero.addEventListener('click', () => {
    let num = parseFloat(retiro.value);
    if ((nombre.value == '') && (apellido.value == '') && (banco.value == '')) {
        alerta.className = "alert alert-danger mt-2";
        alerta.textContent = "Completa el formulario.";
        alertaDeposito.appendChild(alerta);
        event.preventDefault();

    } else if ((num < 0) || (num > sueldoInicial)) {
        alerta.className = "alert alert-warning mt-2";
        alerta.textContent = "Monto no válido.";
        alertaDeposito.appendChild(alerta);
        event.preventDefault();

    } else if ((num > 0) && (num < sueldoInicial)) {
        event.preventDefault();
        let total = sueldoInicial - num
        localStorage.setItem('sueldoDeposito', total)
        localStorage.setItem('transferencia', num)
        alerta.className = "alert alert-success mt-2";
        alerta.textContent = "Transferencia realizada.";
        alertaDeposito.appendChild(alerta);
    } else {
        event.preventDefault();
        alerta.add = "alert-warning";
        alerta.textContent = "Completa el formulario.";
        alertaDeposito.appendChild(alerta);
    }
})


btnAgregarContacto.addEventListener('click', () => {
    if ((nombre.value !== '') && (apellido.value !== '') && (banco.value !== '')) {
        localStorage.setItem('banco', banco.value);
        localStorage.setItem('apellido', apellido.value);
        localStorage.setItem('nombre', nombre.value);        
        nuevoContacto.className='list-group-item list-group-item-action'
        nuevoContacto.id='nuevoLi'
        nuevoContacto.textContent=nombre.value +" "+ apellido.value+" "+ banco.value
        listaContactos.appendChild(nuevoContacto);
        alerta.className = "alert alert-success mt-2";
        alerta.textContent = "Contacto guardado";
        alertaDeposito.appendChild(alerta);
        event.preventDefault();

    } else {
        alerta.className = "alert alert-warning mt-2";
        alerta.textContent = "Validar datos del formulario";
        alertaDeposito.appendChild(alerta);
        event.preventDefault();

    }
})
$(function () {
    $(".btn-alerta").on("click", () => {
        $(".alert").fadeIn().slideUp(3000);
    });
});

