// Отображает сообщение об ошибке
function showInputError(formElement, inputElement, errorMessage, inputClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputClass); // визуальное оформление ошибки
    errorElement.classList.add(errorClass); // текст ошибки
}

// Скрывает сообщение об ошибке
function hideInputError(formElement, inputElement, inputClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(inputClass);
    errorElement.classList.remove(errorClass);
}

// Проверка валидности поля ввода
function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    } else {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((element) => (!element.validity.valid))
}

function toggleButtonState(inputList, buttonElement, buttonClass) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(buttonClass);
    } else {
        buttonElement.classList.remove(buttonClass);
    }
}

function setEventListeners(formElement, validationSettings) {
    const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputClass));
    const buttonElement = formElement.querySelector(validationSettings.buttonClass);
    toggleButtonState(inputList, buttonElement, validationSettings.buttonInactiveClass);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, validationSettings.inputErrorClass, validationSettings.errorClass);
            toggleButtonState(inputList, buttonElement, validationSettings.buttonInactiveClass);
        });
    });
}

// Включает валидацию для всех форм на странице
function enableValidation(validationSettings) {
    const formList = Array.from(document.querySelectorAll(validationSettings.formClass))
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationSettings)
    });
}

export {enableValidation};