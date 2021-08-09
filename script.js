//Define variables
const shuffleButton = document.querySelector("#shuffle_btn");
const sortButton = document.querySelector("#sort_btn");
const main = document.querySelector("#main");

//Initiate the Array
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Shuffling function based on Fisher-Yates algorithm
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    cards = array;
};

//Sort function to sort on ascending order
const sortArray = (array) => {
    array.sort();
};

//Function for the DOM manipulation
const assignArray = array => {
    main.innerHTML = "";

    array.forEach(item => {
        main.innerHTML += `<span class="item item-${item}">${item}</span>`;
    })
}

//Listen to the Shuffle button and execute the array shuffle and DOM restructure
shuffleButton.addEventListener("click",  () => {
    shuffleArray(cards);
    assignArray(cards);
});

//Listen to the Sort button and execute the array sorting and DOM restructure
sortButton.addEventListener("click",  () => {
    sortArray(cards);
    assignArray(cards);
});

//Initiate the DOM for the first browser load
assignArray(cards);