const cardsTemplate = document.querySelector('#card-template').content;
const listCards = document.querySelector('.places__list');

// Ссылки на модальные окна
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const editProfile = document.querySelector('.profile__edit-button');
const closePopup = document.querySelectorAll('.popup__close');

const newCardPopup = document.querySelector('.profile__add-button');
const formCardElement = document.forms['new-place'];
const nameCard = document.querySelector('.popup__input_type_card-name');
const urlLocation = document.querySelector('.popup__input_type_url');

const imagePopup_src_alt = document.querySelector('.popup__image');
const imagePopup_name = document.querySelector('.popup__caption');

const profileFormElement = document.forms['edit-profile'];

const nameInput = profileFormElement.elements.name;
const jobInput = profileFormElement.elements.description;

const profile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__description');


// Отправка формы, редактирование профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const name = nameInput.value;
    const job = jobInput.value;

    profile.textContent = name;
    jobProfile.textContent = job;

    closeModal(profilePopup);
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

profilePopup.classList.add('popup_is-animated');
cardPopup.classList.add('popup_is-animated');
imagePopup.classList.add('popup_is-animated');

function handleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

function openModal(popup) {
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

// Обработчик кнопки редактирования профиля
editProfile.addEventListener('click', function () {
    nameInput.value = profile.textContent;
    jobInput.value = jobProfile.textContent;
    openModal(profilePopup);
});

// Обработчик кнопок закрытия попапов
closePopup.forEach(function (popup) {
    popup.addEventListener('click', function () {
        const pop = popup.closest('.popup');
        closeModal(pop);
    });
});

function createCard(card_info) {
    const cards = cardsTemplate.querySelector('.places__item').cloneNode(true);

    const card_image = cards.querySelector('.card__image');
    const card_name = cards.querySelector('.card__title');
    const likebutton = cards.querySelector('.card__like-button');
    const deletebutton = cards.querySelector('.card__delete-button');

    card_image.src = card_info.link;
    card_image.alt = card_info.name;
    card_name.textContent = card_info.name;

    likebutton.addEventListener('click', handleLikeButton);
    deletebutton.addEventListener('click', () => {
        const parentcarddel = deletebutton.closest('.places__item');
        parentcarddel.remove();
    })

    card_image.addEventListener('click', function () {
        imagePopup_src_alt.src = card_info.link;
        imagePopup_name.textContent = card_info.name;
        imagePopup_src_alt.alt = card_info.name;

        openModal(imagePopup);
    });

    return cards;
}

// Инициализация карточек
initialCards.forEach(function (item) {
    listCards.append(createCard(item));
});

newCardPopup.addEventListener('click', function () {
    openModal(cardPopup);
});

// Обработка отправки формы для добавления карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const locate = nameCard.value;
    const url = urlLocation.value;

    const new_card = createCard({
        name: locate,
        link: url
    });

    listCards.prepend(new_card);

    closeModal(cardPopup);
    formCardElement.reset();
}

formCardElement.addEventListener('submit', handleCardFormSubmit);