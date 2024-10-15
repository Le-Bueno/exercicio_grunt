function calcularIMC() {
   
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos!";
        return;
    }

    
    var imc = peso / (altura * altura);

    
    var classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    
    document.getElementById('resultado').innerHTML = "Seu IMC é " + imc.toFixed(2) + " (" + classificacao + ")";
}