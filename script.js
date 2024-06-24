const urlSumar = 'http://127.0.0.1:5000/sumar';
const urlRestar = 'http://127.0.0.1:5000/restar';
const urlMultiplicar = 'http://127.0.0.1:5000/multiplicar';
const urlDividir = 'http://127.0.0.1:5000/dividir';

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => data.resultado)
        .catch(error => console.error('Error:', error));
}

function sumar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    fetch(`${urlSumar}?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerText = 'Resultado: ' + data.resultado;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function restar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    fetch(`${urlRestar}?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerText = 'Resultado: ' + data.resultado;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function multiplicar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    fetch(`${urlMultiplicar}?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerText = 'Resultado: ' + data.resultado;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function dividir() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    fetch(`${urlDividir}?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('resultado').innerText = data.error;
            } else {
                document.getElementById('resultado').innerText = 'Resultado: ' + data.resultado;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
