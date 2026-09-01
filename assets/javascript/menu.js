let saldoDepositado = localStorage.getItem('sueldoDeposito');
let sueldoInicial = document.getElementById('spanSueldoTotal').textContent;
sueldoActualizado =parseFloat(saldoDepositado);

document.getElementById('spanSueldoTotal').textContent = sueldoActualizado

const btnDepositar = document.getElementById('btnDepositar')
btnDepositar.addEventListener('click',()=>{
    localStorage.setItem('sueldoDeposito', sueldoActualizado);
    window.location = 'deposit.html';
})