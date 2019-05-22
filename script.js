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
        img: 'Wrong-tree.jpg',
        rating: [3, 4, 5, 5],
        reviews: []
    },
    {
        heading: 'Outwitt The Devil',
        img: 'OutwittTheDevil.jpg',
        rating: [3, 4, 5, 3],
        reviews: []
    },
    {
        heading: 'The Power Of Now',
        img: 'ThePowerOfNow.jpg',
        rating: [3, 4, 5, 2],
        reviews: []
    },
    {
        heading: 'Breaking The Habit Of Being Yourself',
        img: 'BreakingHabitYourself.jpg',
        rating: [3, 4, 5, 1],
        reviews: []
    },
    {
        heading: 'Awaken The Giant Within',
        img: 'AwakenTheGiant.jpg',
        rating: [3, 4, 5, 5],
        reviews: []
    }
]

const bookStore = document.querySelector('.main-content');

//Class constructor for generating new books
class GenerateBooks {
    constructor(data) {
        this.bookData = data;

        //Create div for book-box
        let bookBox = document.createElement('div');
        //Assign class to bookBox
        bookBox.classList.add('book-box');
        //Assign attribute to bookBox
        bookBox.setAttribute('draggable', 'true');  

        //Method for creating heading
        this.headingConstructor(bookBox);

        //Method for creating image and figure container 
        this.imageConstructor(bookBox);

        //Method for creating info section
        this.infoConstructor(bookBox);

        //Method for creating popUp rating
        this.ratingConstructor(bookBox);

        //Event listener for slide in rating
        bookBox.addEventListener('mouseenter', (event) => this.mouseOver());
        //Event listener for slide out rating
        bookBox.addEventListener('mouseleave', (event) => this.mouseLeave());

        //Append bookBox to DOM
        bookStore.appendChild(bookBox);

    }

    headingConstructor(bookBox) {
        //Create new heading element
        let heading = document.createElement('h3');
        //Assign class to heading
        heading.classList.add('heading-tertiary');
        //Assign data content to heading
        heading.textContent = this.bookData.heading;
        //Append heading to bookBox div
        bookBox.appendChild(heading);
    }

    imageConstructor(bookBox) {
        //Create new figure container
        let figure = document.createElement('figure');
        //Assign class to figure container
        figure.classList.add('book-figure');

        //Create new img element 
        let image = document.createElement('img');
        //Assign attributes to img element
        image.setAttribute('draggable', 'false');
        image.setAttribute('src', `./images/${this.bookData.img}`);

        //Append image element to figure container
        figure.append(image);
        //Append figure container to bookBox div
        bookBox.append(figure);
    }

    infoConstructor(bookBox) {
        //Create p tag element
        let paragraph = document.createElement('p');
        //Assign class to p tag element
        paragraph.classList.add('book-info');

        //Create span element for rating
        let spanRate = document.createElement('span');
        //Assign class to rating span element
        spanRate.classList.add('currentRate');




        
        //Assign the rating arrray to a variable
        let arrRatings = this.bookData.rating;
        //Use reduce method to obtain array total rating
        let rating = arrRatings.reduce((acc, currRate) => {
            return acc + currRate;
        }, 0);
        //Divide the total rating by the number of elements present in the array
        let currRating = rating / arrRatings.length;
        //Assign some content to rating span element
        spanRate.textContent = currRating.toFixed(1) + '⭐️';






        //Create span element for reviews
        let spanReview = document.createElement('span');
        //Assign class to review span element
        spanReview.classList.add('reviews');
        //Assign some content to the review span element
        spanReview.textContent = '5 💬';

        //Append spans for rating and review to p tag
        paragraph.appendChild(spanRate);
        paragraph.appendChild(spanReview);
        //Append p tag to bookBox div
        bookBox.append(paragraph);
    }

    ratingConstructor(bookBox) {
        //Create p tag for current overall rating
        let rating = document.createElement('p');
        //Assign class to overall rating p tag
        rating.classList.add('rating', 'hidden');
        //Assign some content to overall rating p tag
        rating.textContent = '⭐️⭐️⭐️⭐️⭐️';
        //Append overall rating p tag to bookBox div
        bookBox.append(rating);
    }

    mouseOver() {
        //Added event listener to each book and toggle shown class on event triggered
        event.target.children[3].className = 'rating shown';
    }

    mouseLeave() {
        //Added event listener to each book and toggle hidden class on event triggered
        event.target.children[3].className = 'rating hidden';
    }
}


booksData.forEach(book => new GenerateBooks(book));



//Book section drag & drop functionality
const books = document.querySelectorAll('.book-box');
let curBook;

const dragStart = event => {
    curBook = event.target;
};


books.forEach(book => {
    book.addEventListener('dragstart', dragStart);
});

const favBox = document.querySelector('.fav-list');
const dropZone = favBox.querySelector('.drop-zone');

dropZone.addEventListener('dragenter', (event) => {
    if(event.target.className === "drop-zone"){
        favBox.style.border = "3px solid #fff";  
    }
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    
})

dropZone.addEventListener('dragleave', (event) => {
    event.preventDefault();
    favBox.style.border = "3px solid #000"; 
})

dropZone.addEventListener('drop', (event) => {
    //Create div for favourite books 
    let favItem = document.createElement('div');
    //Assign class to favourite book item
    favItem.classList.add('fav-item');

    //Creating heading for favourite book title
    let favBox = document.createElement('h3');
    //Assign class to favourite book title
    favBox.classList.add('heading-tertiary');
    //Give favourite book a title content 
    favBox.textContent = curBook.children[0].textContent;
    
    //Append favBox to favItem
    favItem.appendChild(favBox);

    //Select dropzone div
    const dropZone = document.querySelector('.drop-zone');

    //Append favItem to dropzone
    dropZone.appendChild(favItem);

    //Remove current book from main list after adding it to favourite collection
    curBook.remove();
})


// document.maxWidth = '100wv';


// console.log(window.innerWidth = '100wv');

// const docWidth = document.documentElement.offsetWidth;
// [].forEach.call(document.querySelectorAll('*'), (el) => {
//   if (el.offsetWidth > docWidth) {
//     console.log(el);
//   }
// });


// document.documentElement.offsetWidth = 0;