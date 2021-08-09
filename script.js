const shuffleButton = document.querySelector("#shuffle_btn");
const sortButton = document.querySelector("#sort_btn");
const main = document.querySelector("#main");

let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    cards = array;
};

const sortArray = () => {
    cards.sort();
};

const assignArray = array => {
    main.innerHTML = "";

    array.forEach(item => {
        main.innerHTML += `<span class="item item-${item}">${item}</span>`;
    })
}

shuffleButton.addEventListener("click",  () => {
    shuffleArray(cards);
    assignArray(cards);
});

sortButton.addEventListener("click",  () => {
    sortArray();
    assignArray(cards);
});

assignArray(cards);