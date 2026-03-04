let numero = 0;

document.getElementById('btn').addEventListener('click', function() {
    numero++;
    document.getElementById('contador').innerHTML = numero;
});