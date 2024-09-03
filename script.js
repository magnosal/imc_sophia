document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
});
