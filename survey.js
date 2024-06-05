document.getElementById('submitForm').disabled = true;

function validateForm() {
    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value, 10);
    let gender = document.getElementById('gender').value;
    let mathSkill = document.getElementById('mathSkill').checked;
    let progSkill = document.getElementById('progSkill').checked;
    let education = document.getElementById('education').checked;

    if (!name.match(/^[а-яА-ЯёЁa-zA-Z]+$/)  age < 0  !['М', 'Ж'].includes(gender)) {
        alert('Введите правильные данные.');
        return false;
    }

    return { name, age, gender, mathSkill, progSkill, education };
}

function submitSurvey() {
    const formData = validateForm();
    if (formData) {
        document.getElementById('result').textContent = 'Анкета заполнена!';

        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.disabled = true);
        document.getElementById('submitForm').disabled = true;
        document.getElementById('surveyForm').style.display = 'none';
    }
}

function check() {
    const formData = validateForm();
    if (formData.mathSkill && formData.progSkill) {
        return true;
    }
    if (formData.education && formData.mathSkill && formData.progSkill) {
        return true;
    }
    return false;
}

function editSurvey() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.disabled = false);
    document.getElementById('submitForm').disabled = false;
    document.getElementById('surveyForm').style.display = 'block';
}

document.getElementById('surveyForm').addEventListener('input', () => {
    const isValid = validateForm();
    document.getElementById('submitForm').disabled = !isValid;
});
