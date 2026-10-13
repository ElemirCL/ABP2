document.getElementById('spanSueldoTotal').textContent = sueldoActualizado
sueldoActualizado =parseFloat(saldoDepositado);
const btnDepositar = document.getElementById('btnDepositar')
let saldoDepositado = localStorage.getItem('sueldoDeposito');
let sueldoInicial = document.getElementById('spanSueldoTotal').textContent;


btnDepositar.addEventListener('click',()=>{
    localStorage.setItem('sueldoDeposito', sueldoActualizado);

    window.location = 'deposit.html';
})
