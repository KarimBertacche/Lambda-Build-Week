// Navigation bar scrolling functionality
window.addEventListener('scroll', event => {
    const navBar = document.querySelector('.navigation');
    if(event.currentTarget.scrollY > 1332) { 
        navBar.classList.add('fixed'); 
    } else if(event.currentTarget.scrollY < 1332){
        navBar.classList.remove('fixed');
    }
});

//Quotes slide carousel functionality
const quotes = document.querySelectorAll('.quote-card');
const backArrow = document.querySelector('.back-arrow');
const forwardArrow = document.querySelector('.forward-arrow');
let activeCard;
let counter = 1;
let quoteIdx;
let quoteLength = quotes.length;
let prevCount;

quotes.forEach((quote, index) => {
    quoteIdx = quote.dataset.index = index;
})


backArrow.addEventListener('click', () => {
    // counter = 
    if(counter === 0) {
        //Hold previous counter
        prevCount = counter;
        //Update the counter
        counter = quoteLength - 1;
    } else {
        //Hold previous counter
        prevCount = counter;
        //Update the counter
        --counter;  
    }

    //Remove Active class & prev/next
    removeActive();
    //Add active class to current count
    addActive();
    //Add previous and next class dynamically
    addPrev(prevCount);
    addNext(prevCount);
})

forwardArrow.addEventListener('click', () => {
    if(counter === quoteLength -1) {
        //Hold previous counter
        prevCount = counter;
        //Update the counter
        counter = 0;
    } else {
        //Hold previous counter
        prevCount = counter;
        //Update the counter
        ++counter;
    }

    //Remove Active class & prev/next
    removeActive();
    //Add active class to current count
    addActive();
    //Add previous and next class dynamically
    addPrev(prevCount);
    addNext(prevCount);
})

const removeActive = () => {
    quotes.forEach(quote => {
        quote.className = "quote-card";
    })
}

const addActive = () => {
    let newActive = document.querySelector(`.quote-card[data-index="${counter}"]`);
    newActive.classList.add('active');
}

const addPrev = (prevCount) => {
    if(counter === 0){
        let prevQuote = document.querySelector(`.quote-card[data-index="${quoteLength - 1}`);
        prevQuote.className += " prev";   
    } else if(counter === quoteLength -1) {
        let prevQuote = document.querySelector(`.quote-card[data-index="${counter -1}`);
        prevQuote.className += " prev";   
    } else if(counter < prevCount){
        let prevQuote = document.querySelector(`.quote-card[data-index="${counter - 1}`);
        prevQuote.className += " prev";  
    } else if(counter > prevCount) {
        let prevQuote = document.querySelector(`.quote-card[data-index="${prevCount}`);
        prevQuote.className += " prev";  
    }
} 

const addNext = (prevCount) => {
    if(counter === quoteLength - 1){
        let prevQuote = document.querySelector(`.quote-card[data-index="0"]`);
        prevQuote.className += " next";   
    } else if(counter === 0) {
        let prevQuote = document.querySelector(`.quote-card[data-index="${counter + 1}`);
        prevQuote.className += " next";   
    } else if(counter > prevCount){
        let prevQuote = document.querySelector(`.quote-card[data-index="${counter + 1}`);
        prevQuote.className += " next";  
    } else if(counter < prevCount) {
        let prevQuote = document.querySelector(`.quote-card[data-index="${prevCount}`);
        prevQuote.className += " next";  
    }
}

//Provissory data for books
const booksData = [
    {
        heading: 'Barking Up The Wrong Tree',
        img: 'Wrong-tree.jpg'
    },
    {
        heading: 'Outwitt The Devil',
        img: 'OutwittTheDevil.jpg'
    },
    {
        heading: 'The Power Of Now',
        img: 'ThePowerOfNow.jpg'
    },
    {
        heading: 'Breaking The Habit Of Being Yourself',
        img: 'BreakingHabitYourself.jpg'
    },
    {
        heading: 'Awaken The Giant Within',
        img: 'AwakenTheGiant.jpg'
    }
]

const bookStore = document.querySelector('.main-content');

//Class constructor for generating new books
class GenerateBooks {
    constructor(data, index) {
        this.bookData = data;
        let bookBox = document.createElement('div');
        bookBox.classList.add('book-box');
        bookBox.setAttribute('draggable', 'true');   
        this.headingConstructor(bookBox);
        this.imageConstructor(bookBox);
        this.infoConstructor(bookBox);
        this.ratingConstructor(bookBox);
        bookBox.addEventListener('mouseenter', (event) => this.mouseOver());
        bookBox.addEventListener('mouseleave', (event) => this.mouseLeave());

        bookStore.appendChild(bookBox);

    }

    headingConstructor(bookBox) {
        let heading = document.createElement('h3');
        heading.classList.add('heading-tertiary');
        heading.textContent = this.bookData.heading;
        bookBox.appendChild(heading);
    }

    imageConstructor(bookBox) {
        let figure = document.createElement('figure');
        figure.classList.add('book-figure');
        let image = document.createElement('img');
        image.setAttribute('draggable', 'false');
        image.setAttribute('src', `./images/${this.bookData.img}`);
        figure.append(image);
        bookBox.append(figure);
    }

    infoConstructor(bookBox) {
        let paragraph = document.createElement('p');
        paragraph.classList.add('book-info');
        let spanRate = document.createElement('span');
        spanRate.classList.add('currentRate');
        spanRate.textContent = '4 ⭐️';
        let spanReview = document.createElement('span');
        spanReview.classList.add('reviews');
        spanReview.textContent = '5 💬';

        paragraph.appendChild(spanRate);
        paragraph.appendChild(spanReview);
        bookBox.append(paragraph);
    }

    ratingConstructor(bookBox) {
        let rating = document.createElement('p');
        rating.classList.add('rating', 'hidden');

        rating.textContent = '⭐️⭐️⭐️⭐️⭐️';
        bookBox.append(rating);
    }

    mouseOver() {
        event.target.children[3].className = 'rating shown';
    }

    mouseLeave() {
        event.target.children[3].className = 'rating hidden';
    }
}


booksData.forEach((book, index) => new GenerateBooks(book, index));



//Book section drag & drop functionality
const books = document.querySelectorAll('.book-box');
let curBook;

const dragStart = event => {
    curBook = event.target;
};


books.forEach(book => {
    book.addEventListener('dragstart', dragStart);
});

const dropZone = document.querySelector('.drop-zone');

dropZone.addEventListener('dragenter', (event) => {
    if(event.target.className === "drop-zone"){
        dropZone.style.border = "3px solid #fff";  
    }
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    
})

dropZone.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dropZone.style.border = "3px solid #f67280"; 
})

dropZone.addEventListener('drop', (event) => {
    event.target.append(curBook);
})



