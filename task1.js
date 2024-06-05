function findMin() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = Минимум: ${Math.min(a, b)};
}

function findMax() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = Максимум: ${Math.max(a, b)};
}

function checkEqual() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = Числа равны: ${a === b};
}
