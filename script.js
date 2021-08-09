

const shuffleButton = document.querySelector("#shuffle_btn");
const sortButton = document.querySelector("#sort_btn");

/* var cards = [
    {
        "value" : 1,
        "title" : "1",
        "color" : "#6F98A8"
    },
    {
        "value" : 2,
        "title" : "2",
        "color" : "#2B8EAD"
    },
    {
        "value" : 3,
        "title" : "3",
        "color" : "#2F454E"
    },
    {
        "value" : 4,
        "title" : "4",
        "color" : "#2B8EAD"
    },        
    {
        "value" : 5,
        "title" : "5",
        "color" : "#2F454E"
    },
    {
        "value" : 6,
        "title" : "6",
        "color" : "#BFBFBF"
    },
    {
        "value" : 7,
        "title" : "7",
        "color" : "#BFBFBF"
    },
    {
        "value" : 8,
        "title" : "8",
        "color" : "#6F98A8"
    },
    {
        "value" : 9,
        "title" : "9",
        "color" : "#2F454E"
    }
]; */

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

shuffleButton.addEventListener("click",  () => {
    shuffleArray(cards);

    console.log(cards);
});

sortButton.addEventListener("click",  () => {
    sortArray();

    console.log(cards);

});