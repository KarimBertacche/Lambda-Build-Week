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
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: []
    },
    {
        heading: 'Outwitt The Devil',
        img: 'OutwittTheDevil.jpg',
        rating: [3, 4, 5, 3],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: []
    },
    {
        heading: 'The Power Of Now',
        img: 'ThePowerOfNow.jpg',
        rating: [3, 4, 5, 2],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: []
    },
    {
        heading: 'Breaking The Habit Of Being Yourself',
        img: 'BreakingHabitYourself.jpg',
        rating: [3, 4, 5, 1],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: []
    },
    {
        heading: 'Awaken The Giant Within',
        img: 'AwakenTheGiant.jpg',
        rating: [3, 4, 5, 5],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: []
    }
]

const bookStore = document.querySelector('.main-content');

//Class constructor for generating new books
class GenerateBooks {
    constructor(data) {
        this.bookData = data;
        //Assign the rating arrray to a variable
        this.arrRatings = this.bookData.rating;

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

        //Method to re-calculate overall rate everytime new rating is inserted 
        this.calcOverAllRate();       

        //Method to create stars to display on page
        this.starsConstructor();
        
        //Method for creating popUp rating
        this.ratingConstructor(bookBox);

        console.log(this.arrRatings);

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

    calcOverAllRate() {
        //Use reduce method to obtain array total rating
        let rating = this.arrRatings.reduce((acc, currRate) => {
            return acc + currRate;
        }, 0);
        //Divide the total rating by the number of elements present in the array
        this.currRating = rating / this.arrRatings.length;

        //Assign some content to rating span element
        this.spanRate.textContent = this.currRating.toFixed(1) + '⭐️';
    }

    starsConstructor() {
        this.star1 = document.createElement('span');
        this.star2 = document.createElement('span');
        this.star3 = document.createElement('span');
        this.star4 = document.createElement('span');
        this.star5 = document.createElement('span');

        //Assign content to five stars
        this.star1.textContent = this.bookData.givenRate[0];
        this.star2.textContent = this.bookData.givenRate[1];
        this.star3.textContent = this.bookData.givenRate[2];
        this.star4.textContent = this.bookData.givenRate[3];
        this.star5.textContent = this.bookData.givenRate[4];

        //Assign class to five stars
        this.star1.classList.add('star');
        this.star2.classList.add('star');
        this.star3.classList.add('star');
        this.star4.classList.add('star');
        this.star5.classList.add('star');


        //Assign an event listener to each star
        this.star1.addEventListener('click', () => {
            console.log('I was clicked!');
            console.log(event.target);
            this.arrRatings.push(1);
            this.calcOverAllRate();  
            console.log(this.arrRatings);
        })
        this.star2.addEventListener('click', () => {
            console.log('I was clicked!');
            this.arrRatings.push(2);
            this.calcOverAllRate(); 
            console.log(this.arrRatings);
        })
        this.star3.addEventListener('click', () => {
            console.log('I was clicked!');
            this.arrRatings.push(3);
            this.calcOverAllRate(); 
            console.log(this.arrRatings);
        })
        this.star4.addEventListener('click', () => {
            console.log('I was clicked!');
            this.arrRatings.push(4);
            this.calcOverAllRate(); 
            console.log(this.arrRatings);
        })
        this.star5.addEventListener('click', () => {
            console.log('I was clicked!');
            this.arrRatings.push(5);
            this.calcOverAllRate(); 
            console.log(this.arrRatings);
        })
    }

    infoConstructor(bookBox) {
        //Create p tag element
        let paragraph = document.createElement('p');
        //Assign class to p tag element
        paragraph.classList.add('book-info');

        //Create span element for rating
        this.spanRate = document.createElement('span');
        //Assign class to rating span element
        this.spanRate.classList.add('currentRate');

        //Create span element for reviews
        let spanReview = document.createElement('span');
        //Assign class to review span element
        spanReview.classList.add('reviews');
        //Assign some content to the review span element
        spanReview.textContent = '5 💬';

        //Append spans for rating and review to p tag
        paragraph.appendChild(this.spanRate);
        paragraph.appendChild(spanReview);
        //Append p tag to bookBox div
        bookBox.append(paragraph);
    }

    ratingConstructor(bookBox, arrRatings) {
        //Create p tag for current overall rating
        let rating = document.createElement('p');
        //Assign class to overall rating p tag
        rating.classList.add('rating', 'hidden');

        rating.style.fontSize = '3rem';
        //Assign some content to overall rating p tag

        // //Create 5 stars
        // let star1 = document.createElement('span');
        // let star2 = document.createElement('span');
        // let star3 = document.createElement('span');
        // let star4 = document.createElement('span');
        // let star5 = document.createElement('span');

        // //Assign content to five stars
        // star1.textContent = this.bookData.givenRate[0];
        // star2.textContent = this.bookData.givenRate[1];
        // star3.textContent = this.bookData.givenRate[2];
        // star4.textContent = this.bookData.givenRate[3];
        // star5.textContent = this.bookData.givenRate[4];

        // //Assign class to five stars
        // star1.classList.add('star');
        // star2.classList.add('star');
        // star3.classList.add('star');
        // star4.classList.add('star');
        // star5.classList.add('star');


        // //Assign an event listener to each star
        // star1.addEventListener('click', () => {
        //     console.log('I was clicked!');
        //     console.log(event.target);
        //     this.arrRatings.push(1);
        //     console.log(this.arrRatings);
        // })
        // star2.addEventListener('click', () => {
        //     console.log('I was clicked!');
        //     this.arrRatings.push(2);
        //     console.log(this.arrRatings);
        // })
        // star3.addEventListener('click', () => {
        //     console.log('I was clicked!');
        //     this.arrRatings.push(3);
        //     console.log(this.arrRatings);
        // })
        // star4.addEventListener('click', () => {
        //     console.log('I was clicked!');
        //     this.arrRatings.push(4);
        //     console.log(this.arrRatings);
        // })
        // star5.addEventListener('click', () => {
        //     console.log('I was clicked!');
        //     this.arrRatings.push(5);
        //     console.log(this.arrRatings);
        // })

        rating.append(this.star1);
        rating.append(this.star2);
        rating.append(this.star3);
        rating.append(this.star4);
        rating.append(this.star5);


        // newRating.map((star, index) => {
        //     console.log(star, index);
        //     star.addEventListener('mouseenter', () => {
        //         // switch(index){
        //         //     case 0:
        //         //         star[0].style.backgroundColor= 'red';
        //         //         break;
        //         //     case 1:
        //         //         star[0].style.backgroundColor= 'red';
        //         //         break;
        //         //     case 2:
        //         //         star[0].style.backgroundColor= 'red';
        //         //         break;
        //         //     case 3:
        //         //         star[0].style.backgroundColor= 'red';
        //         //         break;
        //         //     case 4:
        //         //         star[0].style.backgroundColor= 'red';
        //         //         break;
        //         // }
        //     })
        //     rating.textContent = star + star + star + star + star;
        // });



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