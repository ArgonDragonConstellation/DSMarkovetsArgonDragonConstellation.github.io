// Функции для работы с возрастом
function askAge() {
    let age = prompt('Введите ваш возраст:');
    while (age === null || isNaN(age) || age <= 0) {
        age = prompt('Возраст введен неверно. Введите ваш возраст:');
    }
    if (confirm('Ваш возраст ' + age + '?')) {
        document.getElementById('result').textContent = 'Ваш возраст: ' + age;
    }
}

// Функции для изменения фамилии
function changeLastName() {
    let newName = document.getElementById('input-text').value;
    if (newName) {
        document.getElementById('last-name').textContent = newName;
    }
}

// Функция для изменения цвета фона
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Функции для работы с радугой
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let rainbowIndex = 0;
let autoCycleInterval;
let isCycling = false;

function cycleRainbow() {
    if (isCycling) return; // Если уже в цикле, выходим из функции
    isCycling = true;
    let rainbowDivs = document.querySelectorAll('.rainbow div');
    for (let i = 0; i < rainbowDivs.length; i++) {
        rainbowDivs[i].className = colors[(i + rainbowIndex) % colors.length];
    }
    rainbowIndex = (rainbowIndex + 1) % colors.length;
    isCycling = false; // Устанавливаем флаг обратно после завершения цикла
}

function startAutoCycle() {
    stopAllCycles(); // Останавливаем любой предыдущий цикл перед запуском нового
    autoCycleInterval = setInterval(cycleRainbow, 300);
}

function stopAllCycles() {
    clearInterval(autoCycleInterval);
    isCycling = false; // Останавливаем циклическое движение
}

// Функции для калькулятора
function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Некорректные данные';
    } else {
        switch(operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 === 0 ? 'Деление на ноль' : num1 / num2;
                break;
        }
        if (result > 15) {
            document.getElementById('calc-result').style.backgroundColor = 'red';
            result = 'число>15';
        } else {
            document.getElementById('calc-result').style.backgroundColor = 'white';
        }
    }
    document.getElementById('calc-result').textContent = result;
}
