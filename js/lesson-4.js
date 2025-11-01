//? Task 1

// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector('#title');
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const allTopics = document.querySelectorAll('[data-topic]');
console.log(allTopics);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(allTopics[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(allTopics[allTopics.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log(title.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allH3 = document.querySelectorAll('h3');
console.log(allH3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
allH3.forEach(element => element.classList.add('active'));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const topicNavigation = document.querySelector('[data-topic="navigation"]');
console.log(topicNavigation);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
topicNavigation.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
topicNavigation.querySelector('p').textContent = 'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення,
// яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const currentTopicElem = document.querySelector(
    `[data-topic = ${currentTopic}]`
);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentTopicElem.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const header = document.querySelector('.completed');
console.log(header);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

//? Task 2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const blockElem = document.querySelector('.number-container');

let markup = [];

for (let i = 0; i < 100; i++) {
    const divElem = document.createElement('div');
    divElem.classList.add('number');
    const randomNum = randomNumber();
    divElem.textContent = randomNum;
    if (randomNum % 2 === 0) {
        divElem.classList.add('even');
    } else {
        divElem.classList.add('odd');
    }
    markup.push(divElem);
}

blockElem.append(...markup);
