'use strict'

// let number1,
//     number2,
//     sign,
//     result;

// function getNumber(x) {
//     number1 === undefined ? number1 = x : number2 = x;
// }

// function getSign(y) {
//     sign = y;
// }

// function getResult() {
//     switch (sign) {
//         case '+': result = number1 + number2; break;
//         case '-': result = number1 - number2; break;
//         case '/': result = number1 / number2; break;
//         case '*': result = number1 * number2; break;
//     }
//     console.log(result);
// }

// let counter = 0,
//     newRange;


// function counterMinus() {
//     if (counter === -newRange) {
//         return
//     } else {
//         counter--;
//         console.log(counter);
//     }
// }

// function counterPlus() {
//     if (counter === newRange) {
//         return;
//     } else {
//         counter++;
//         console.log(counter);
//     }
// }

// function getNewRange(x) {
//     newRange = x;
// }




const el = document.querySelector('#app');
let newCard = '';

//Array with cards

const cards = [
    // {
    //     id: 1,
    //     img: '',
    //     title: 'Indian',
    //     show: false,
    //     price: 10,
    //     model: 'Scout Bobber',
    //     description: 'Новый Indian Scout Bobber способен на нечтo большее, чем обычный мотоцикл. Каждый дюйм этого байка верен классическому стилю Bobber, его внешность - превосходное выражение уличного мотодвижения.',
    // },
    // {
    //     id: 2,
    //     img: '',
    //     title: 'Indian',
    //     show: false,
    //     price: 200,
    //     model: 'Scout Bobber',
    //     description: 'Новый Indian Scout Bobber способен на нечтo большее, чем обычный мотоцикл. Каждый дюйм этого байка верен классическому стилю Bobber, его внешность - превосходное выражение уличного мотодвижения.',
    // },
    // {
    //     id: 3,
    //     img: '',
    //     title: 'Indian',
    //     show: false,
    //     price: 500,
    //     model: 'Scout Bobber',
    //     description: 'Новый Indian Scout Bobber способен на нечтo большее, чем обычный мотоцикл. Каждый дюйм этого байка верен классическому стилю Bobber, его внешность - превосходное выражение уличного мотодвижения.',
    // },
];

//Output cards

const render = (cards) => {
    cards.forEach(i => {
        if (i.show === false) {
            i.show = true;
            newCard +=
                `<div class="card" style="width: 18rem;">
                        <img src="https://static.tildacdn.com/tild3662-3237-4766-b761-393930363834/indian-scout-bobber-.jpg" class="card-img-top" alt="motocycle">
                        <div class="card-body">
                            <h5 class="card-title">${i.title} ${i.model}</h5>
                            <p class="card-text">${i.description}</p>
                            <a href="#" class="btn btn-primary">Заказать за ${i.price}$</a>
                        </div>
                </div>`
        }
    })
    return app.innerHTML = newCard;
}

// render(cards);


//Clear form

const clearInput = () => {
    const form = document.querySelectorAll('.form');

    form.forEach(i => {
        i.value = '';
    })
}


//Add new card

const add = () => {
    const title = document.querySelector('[name="brand"]').value;
    const model = document.querySelector('[name="model"]').value;
    let randomPrice = Math.round(Math.random() * (1000 - 100) + 100);

    if (title === '' || model === '') {
        alert('Введите данные');
    } else {
        cards.push({
            id: cards.length + 1,
            img: '',
            title,
            show: false,
            price: `${randomPrice}`,
            model,
            description: 'Новый Indian Scout Bobber способен на нечтo большее, чем обычный мотоцикл. Каждый дюйм этого байка верен классическому стилю Bobber, его внешность - превосходное выражение уличного мотодвижения.',
        })

        render(cards);
        clearInput();
    }
}


//Filter cards

const filterMyCards = () => {
    const myFilter = document.querySelector('[name="filter"]').value;
    const newFilterCard = cards.filter(item => item.price < myFilter);
    newFilterCard.forEach(i => i.show = false);
    newCard = '';
    render(newFilterCard);
}






