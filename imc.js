/*
Resultado abaixo de 17 - Muito abaixo do peso;
Resultado entre 17 e 18,49 - Abaixo do peso;
Resultado entre 18,5 e 24,99 - Peso ideal;
Resultado entre 25 e 29,99 - Sobrepeso;
Resultado entre 30 e 34,9 - Obesidade garu I;
Resultado entre 35 e 39,9 - Obesidade grau II (severa);
Resultado acima de 40 - Obesidade grau III (mórbida);
*/

var altura;
var peso;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura * altura);
    // console.log(imc);

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi:" + imc + "<br/> Cuidado você está muito abaixo do peso!";
    }


    /* console.log(peso);
     console.log(altura);

     alert("TESTE")*/

}