
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
} else {
if (numeroUsuario < numeroSecreto ){
    alert(" el numero es mas grande");
    numeroUsuario = prompt("Me indicas un n�mero por favor:");
    } else {
        alert(" el numero es mas pequeño");
        numeroUsuario = prompt("Me indicas un n�mero por favor:");
    }
}




