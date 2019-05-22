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
        reviews: [],
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi maiores facilis nemo odit harum laudantium aperiam voluptatibus aliquam laborum nulla optio consectetur eligendi dignissimos magni, impedit aut excepturi! Nulla veritatis animi odio, cum libero amet in possimus soluta alias ab molestiae, tempora illum. Illo, error. Deleniti aliquid ut voluptates recusandae saepe exercitationem nesciunt ullam vero debitis? Ad, sequi ducimus, iste nostrum dolorum impedit reiciendis sed maxime, nam laborum temporibus repellat repudiandae magnam nesciunt amet fugit explicabo ullam libero atque sapiente. Quis fuga aperiam et libero nihil saepe ad possimus iste laudantium! Nostrum et, temporibus, ex placeat pariatur non quibusdam sint corporis maiores odit in ea vel voluptate? Perferendis harum saepe molestias perspiciatis necessitatibus officiis iste nulla quaerat, similique dolorum ullam ipsum in deleniti dolores illum fugit ipsam et ea adipisci vel dolorem. Itaque reiciendis consequatur delectus molestiae quos eum aspernatur recusandae eveniet assumenda, rem dolor autem labore. Nisi modi pariatur ut dicta blanditiis deleniti, distinctio placeat voluptates ex impedit labore veniam corporis dolores soluta, error exercitationem amet? Quae, magnam blanditiis, ex in doloremque modi voluptas quidem asperiores excepturi facilis reiciendis earum, aliquam consectetur deserunt assumenda? Consectetur ab soluta accusamus inventore nemo, aliquid recusandae consequatur expedita iusto magnam eveniet, enim eius sapiente exercitationem earum molestiae nisi laboriosam eum, nam rerum quod alias voluptate assumenda dolores. Qui laudantium, quasi libero et dolorem omnis commodi aperiam tempore fugit maiores consequuntur, vero soluta id dolorum veritatis tempora, in adipisci odit architecto nostrum. Ducimus non vel quidem velit obcaecati necessitatibus cum pariatur impedit blanditiis dolores in voluptatem reiciendis, maiores nisi quae culpa adipisci enim odio. Explicabo doloribus iure suscipit cum est animi molestiae error voluptatem facilis, modi tempore repellat a numquam eligendi quia magni ratione optio asperiores. Soluta libero, molestiae fugit perferendis amet quod blanditiis cumque assumenda ab nesciunt possimus omnis voluptatibus repellendus repellat?'
    },
    {
        heading: 'Outwitt The Devil',
        img: 'OutwittTheDevil.jpg',
        rating: [3, 4, 5, 3],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: [],
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi maiores facilis nemo odit harum laudantium aperiam voluptatibus aliquam laborum nulla optio consectetur eligendi dignissimos magni, impedit aut excepturi! Nulla veritatis animi odio, cum libero amet in possimus soluta alias ab molestiae, tempora illum. Illo, error. Deleniti aliquid ut voluptates recusandae saepe exercitationem nesciunt ullam vero debitis? Ad, sequi ducimus, iste nostrum dolorum impedit reiciendis sed maxime, nam laborum temporibus repellat repudiandae magnam nesciunt amet fugit explicabo ullam libero atque sapiente. Quis fuga aperiam et libero nihil saepe ad possimus iste laudantium! Nostrum et, temporibus, ex placeat pariatur non quibusdam sint corporis maiores odit in ea vel voluptate? Perferendis harum saepe molestias perspiciatis necessitatibus officiis iste nulla quaerat, similique dolorum ullam ipsum in deleniti dolores illum fugit ipsam et ea adipisci vel dolorem. Itaque reiciendis consequatur delectus molestiae quos eum aspernatur recusandae eveniet assumenda, rem dolor autem labore. Nisi modi pariatur ut dicta blanditiis deleniti, distinctio placeat voluptates ex impedit labore veniam corporis dolores soluta, error exercitationem amet? Quae, magnam blanditiis, ex in doloremque modi voluptas quidem asperiores excepturi facilis reiciendis earum, aliquam consectetur deserunt assumenda? Consectetur ab soluta accusamus inventore nemo, aliquid recusandae consequatur expedita iusto magnam eveniet, enim eius sapiente exercitationem earum molestiae nisi laboriosam eum, nam rerum quod alias voluptate assumenda dolores. Qui laudantium, quasi libero et dolorem omnis commodi aperiam tempore fugit maiores consequuntur, vero soluta id dolorum veritatis tempora, in adipisci odit architecto nostrum. Ducimus non vel quidem velit obcaecati necessitatibus cum pariatur impedit blanditiis dolores in voluptatem reiciendis, maiores nisi quae culpa adipisci enim odio. Explicabo doloribus iure suscipit cum est animi molestiae error voluptatem facilis, modi tempore repellat a numquam eligendi quia magni ratione optio asperiores. Soluta libero, molestiae fugit perferendis amet quod blanditiis cumque assumenda ab nesciunt possimus omnis voluptatibus repellendus repellat?'
    },
    {
        heading: 'The Power Of Now',
        img: 'ThePowerOfNow.jpg',
        rating: [3, 4, 5, 2],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: [],
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi maiores facilis nemo odit harum laudantium aperiam voluptatibus aliquam laborum nulla optio consectetur eligendi dignissimos magni, impedit aut excepturi! Nulla veritatis animi odio, cum libero amet in possimus soluta alias ab molestiae, tempora illum. Illo, error. Deleniti aliquid ut voluptates recusandae saepe exercitationem nesciunt ullam vero debitis? Ad, sequi ducimus, iste nostrum dolorum impedit reiciendis sed maxime, nam laborum temporibus repellat repudiandae magnam nesciunt amet fugit explicabo ullam libero atque sapiente. Quis fuga aperiam et libero nihil saepe ad possimus iste laudantium! Nostrum et, temporibus, ex placeat pariatur non quibusdam sint corporis maiores odit in ea vel voluptate? Perferendis harum saepe molestias perspiciatis necessitatibus officiis iste nulla quaerat, similique dolorum ullam ipsum in deleniti dolores illum fugit ipsam et ea adipisci vel dolorem. Itaque reiciendis consequatur delectus molestiae quos eum aspernatur recusandae eveniet assumenda, rem dolor autem labore. Nisi modi pariatur ut dicta blanditiis deleniti, distinctio placeat voluptates ex impedit labore veniam corporis dolores soluta, error exercitationem amet? Quae, magnam blanditiis, ex in doloremque modi voluptas quidem asperiores excepturi facilis reiciendis earum, aliquam consectetur deserunt assumenda? Consectetur ab soluta accusamus inventore nemo, aliquid recusandae consequatur expedita iusto magnam eveniet, enim eius sapiente exercitationem earum molestiae nisi laboriosam eum, nam rerum quod alias voluptate assumenda dolores. Qui laudantium, quasi libero et dolorem omnis commodi aperiam tempore fugit maiores consequuntur, vero soluta id dolorum veritatis tempora, in adipisci odit architecto nostrum. Ducimus non vel quidem velit obcaecati necessitatibus cum pariatur impedit blanditiis dolores in voluptatem reiciendis, maiores nisi quae culpa adipisci enim odio. Explicabo doloribus iure suscipit cum est animi molestiae error voluptatem facilis, modi tempore repellat a numquam eligendi quia magni ratione optio asperiores. Soluta libero, molestiae fugit perferendis amet quod blanditiis cumque assumenda ab nesciunt possimus omnis voluptatibus repellendus repellat?'
    },
    {
        heading: 'Breaking The Habit Of Being Yourself',
        img: 'BreakingHabitYourself.jpg',
        rating: [3, 4, 5, 1],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: [],
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi maiores facilis nemo odit harum laudantium aperiam voluptatibus aliquam laborum nulla optio consectetur eligendi dignissimos magni, impedit aut excepturi! Nulla veritatis animi odio, cum libero amet in possimus soluta alias ab molestiae, tempora illum. Illo, error. Deleniti aliquid ut voluptates recusandae saepe exercitationem nesciunt ullam vero debitis? Ad, sequi ducimus, iste nostrum dolorum impedit reiciendis sed maxime, nam laborum temporibus repellat repudiandae magnam nesciunt amet fugit explicabo ullam libero atque sapiente. Quis fuga aperiam et libero nihil saepe ad possimus iste laudantium! Nostrum et, temporibus, ex placeat pariatur non quibusdam sint corporis maiores odit in ea vel voluptate? Perferendis harum saepe molestias perspiciatis necessitatibus officiis iste nulla quaerat, similique dolorum ullam ipsum in deleniti dolores illum fugit ipsam et ea adipisci vel dolorem. Itaque reiciendis consequatur delectus molestiae quos eum aspernatur recusandae eveniet assumenda, rem dolor autem labore. Nisi modi pariatur ut dicta blanditiis deleniti, distinctio placeat voluptates ex impedit labore veniam corporis dolores soluta, error exercitationem amet? Quae, magnam blanditiis, ex in doloremque modi voluptas quidem asperiores excepturi facilis reiciendis earum, aliquam consectetur deserunt assumenda? Consectetur ab soluta accusamus inventore nemo, aliquid recusandae consequatur expedita iusto magnam eveniet, enim eius sapiente exercitationem earum molestiae nisi laboriosam eum, nam rerum quod alias voluptate assumenda dolores. Qui laudantium, quasi libero et dolorem omnis commodi aperiam tempore fugit maiores consequuntur, vero soluta id dolorum veritatis tempora, in adipisci odit architecto nostrum. Ducimus non vel quidem velit obcaecati necessitatibus cum pariatur impedit blanditiis dolores in voluptatem reiciendis, maiores nisi quae culpa adipisci enim odio. Explicabo doloribus iure suscipit cum est animi molestiae error voluptatem facilis, modi tempore repellat a numquam eligendi quia magni ratione optio asperiores. Soluta libero, molestiae fugit perferendis amet quod blanditiis cumque assumenda ab nesciunt possimus omnis voluptatibus repellendus repellat?'
    },
    {
        heading: 'Awaken The Giant Within',
        img: 'AwakenTheGiant.jpg',
        rating: [3, 4, 5, 5],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: [],
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi maiores facilis nemo odit harum laudantium aperiam voluptatibus aliquam laborum nulla optio consectetur eligendi dignissimos magni, impedit aut excepturi! Nulla veritatis animi odio, cum libero amet in possimus soluta alias ab molestiae, tempora illum. Illo, error. Deleniti aliquid ut voluptates recusandae saepe exercitationem nesciunt ullam vero debitis? Ad, sequi ducimus, iste nostrum dolorum impedit reiciendis sed maxime, nam laborum temporibus repellat repudiandae magnam nesciunt amet fugit explicabo ullam libero atque sapiente. Quis fuga aperiam et libero nihil saepe ad possimus iste laudantium! Nostrum et, temporibus, ex placeat pariatur non quibusdam sint corporis maiores odit in ea vel voluptate? Perferendis harum saepe molestias perspiciatis necessitatibus officiis iste nulla quaerat, similique dolorum ullam ipsum in deleniti dolores illum fugit ipsam et ea adipisci vel dolorem. Itaque reiciendis consequatur delectus molestiae quos eum aspernatur recusandae eveniet assumenda, rem dolor autem labore. Nisi modi pariatur ut dicta blanditiis deleniti, distinctio placeat voluptates ex impedit labore veniam corporis dolores soluta, error exercitationem amet? Quae, magnam blanditiis, ex in doloremque modi voluptas quidem asperiores excepturi facilis reiciendis earum, aliquam consectetur deserunt assumenda? Consectetur ab soluta accusamus inventore nemo, aliquid recusandae consequatur expedita iusto magnam eveniet, enim eius sapiente exercitationem earum molestiae nisi laboriosam eum, nam rerum quod alias voluptate assumenda dolores. Qui laudantium, quasi libero et dolorem omnis commodi aperiam tempore fugit maiores consequuntur, vero soluta id dolorum veritatis tempora, in adipisci odit architecto nostrum. Ducimus non vel quidem velit obcaecati necessitatibus cum pariatur impedit blanditiis dolores in voluptatem reiciendis, maiores nisi quae culpa adipisci enim odio. Explicabo doloribus iure suscipit cum est animi molestiae error voluptatem facilis, modi tempore repellat a numquam eligendi quia magni ratione optio asperiores. Soluta libero, molestiae fugit perferendis amet quod blanditiis cumque assumenda ab nesciunt possimus omnis voluptatibus repellendus repellat?'
    },
    {
        heading: 'Awaken The Giant Within',
        img: 'AwakenTheGiant.jpg',
        rating: [3, 4, 5, 5],
        givenRate: ['✩', '✩', '✩', '✩', '✩'],
        reviews: [],
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi maiores facilis nemo odit harum laudantium aperiam voluptatibus aliquam laborum nulla optio consectetur eligendi dignissimos magni, impedit aut excepturi! Nulla veritatis animi odio, cum libero amet in possimus soluta alias ab molestiae, tempora illum. Illo, error. Deleniti aliquid ut voluptates recusandae saepe exercitationem nesciunt ullam vero debitis? Ad, sequi ducimus, iste nostrum dolorum impedit reiciendis sed maxime, nam laborum temporibus repellat repudiandae magnam nesciunt amet fugit explicabo ullam libero atque sapiente. Quis fuga aperiam et libero nihil saepe ad possimus iste laudantium! Nostrum et, temporibus, ex placeat pariatur non quibusdam sint corporis maiores odit in ea vel voluptate? Perferendis harum saepe molestias perspiciatis necessitatibus officiis iste nulla quaerat, similique dolorum ullam ipsum in deleniti dolores illum fugit ipsam et ea adipisci vel dolorem. Itaque reiciendis consequatur delectus molestiae quos eum aspernatur recusandae eveniet assumenda, rem dolor autem labore. Nisi modi pariatur ut dicta blanditiis deleniti, distinctio placeat voluptates ex impedit labore veniam corporis dolores soluta, error exercitationem amet? Quae, magnam blanditiis, ex in doloremque modi voluptas quidem asperiores excepturi facilis reiciendis earum, aliquam consectetur deserunt assumenda? Consectetur ab soluta accusamus inventore nemo, aliquid recusandae consequatur expedita iusto magnam eveniet, enim eius sapiente exercitationem earum molestiae nisi laboriosam eum, nam rerum quod alias voluptate assumenda dolores. Qui laudantium, quasi libero et dolorem omnis commodi aperiam tempore fugit maiores consequuntur, vero soluta id dolorum veritatis tempora, in adipisci odit architecto nostrum. Ducimus non vel quidem velit obcaecati necessitatibus cum pariatur impedit blanditiis dolores in voluptatem reiciendis, maiores nisi quae culpa adipisci enim odio. Explicabo doloribus iure suscipit cum est animi molestiae error voluptatem facilis, modi tempore repellat a numquam eligendi quia magni ratione optio asperiores. Soluta libero, molestiae fugit perferendis amet quod blanditiis cumque assumenda ab nesciunt possimus omnis voluptatibus repellendus repellat?'
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

        //Method for generate heading
        this.headingConstructor(bookBox);

        //Method for generate image and figure container 
        this.imageConstructor(bookBox);

        //Method for generate info section
        this.infoConstructor(bookBox);

        //Method to re-calculate overall rate everytime new rating is inserted 
        this.calcOverAllRate();       

        //Method to create stars to display on page
        this.starsConstructor();
        
        //Method for generate popUp rating
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
        this.image = document.createElement('img');
        //Assign attributes to img element
        this.image.setAttribute('draggable', 'false');
        this.image.setAttribute('src', `./images/${this.bookData.img}`);

        //Append image element to figure container
        figure.append(this.image);
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
        //Create a span element for each star
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
            this.arrRatings.push(1);
            this.calcOverAllRate();  
        })
        this.star2.addEventListener('click', () => {
            this.arrRatings.push(2);
            this.calcOverAllRate(); 
        })
        this.star3.addEventListener('click', () => {
            this.arrRatings.push(3);
            this.calcOverAllRate(); 
        })
        this.star4.addEventListener('click', () => {
            this.arrRatings.push(4);
            this.calcOverAllRate(); 
        })
        this.star5.addEventListener('click', () => {
            this.arrRatings.push(5);
            this.calcOverAllRate(); 
        })
    }

    infoConstructor(bookBox) {
        //Create p tag element
        this.paragraph = document.createElement('p');
        //Assign class to p tag element
        this.paragraph.classList.add('book-info');

        //Create span element for rating
        this.spanRate = document.createElement('span');
        //Assign class to rating span element
        this.spanRate.classList.add('currentRate');

        //Create span element for reviews
        this.spanReview = document.createElement('span');
        //Assign class to review span element
        this.spanReview.classList.add('reviews');

        //Assign some content to the review span element
        this.spanReview.textContent = `${this.bookData.reviews.length} 💬`;
        
        //Append spans for rating and review to p tag
        this.paragraph.appendChild(this.spanRate);
        this.paragraph.appendChild(this.spanReview);
        //Append p tag to bookBox div
        bookBox.append(this.paragraph);
    }

    ratingConstructor(bookBox, arrRatings) {
        //Create p tag for current overall rating
        let rating = document.createElement('p');
        //Assign class to overall rating p tag
        rating.classList.add('rating', 'hidden');
        //Increase font size of rating stars
        rating.style.fontSize = '3rem';
        
        //Append stars to rating p tag
        rating.append(this.star1);
        rating.append(this.star2);
        rating.append(this.star3);
        rating.append(this.star4);
        rating.append(this.star5);

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


class GenerateReviewPopUpPage extends GenerateBooks {
    constructor(data) {
        super(data);

        //Create new div container for popUp screen
        this.popUpScreen = document.createElement('div');
        //Assign class to popUp screen container
        this.popUpScreen.classList.add('popUp-screen');

        //Method to generate heading
        this.headingConstructor2();

        //Mehotd to generate span element close button
        this.closePageConstructor();

        //Method to generate left side of the page review
        this.leftSidePageConstructor();

        //Method to generate right side of the page review
        this.rightSidePageConstructor();

        //Method to append both sides to the div container and DOM
        this.sidesConstructor();

        this.popUpScreen.append(this.sides);

        bookStore.appendChild(this.popUpScreen);

        this.openReviewPage();

        this.closeReviewPage();
    }

    headingConstructor2() {
        //Create new h4 heading element
        this.heading2 = document.createElement('h4');
        //Assign class to new heading
        this.heading2.classList.add('heading-quaternary');
        //Assign content from data set
        this.heading2.textContent = this.bookData.heading;
        //Append heading to popUpScreen div in the DOM
        this.popUpScreen.appendChild(this.heading2);
    }

    closePageConstructor() {
        //Create new span element for close button
        this.closeBtn = document.createElement('span');
        //Assign class to close btn element
        this.closeBtn.classList.add('closeBtn');
        //Assign some content to close btn element
        this.closeBtn.textContent = 'X';
        //Append close btn to the popUpScreen div in the DOM
        this.popUpScreen.appendChild(this.closeBtn);
    }

    leftSidePageConstructor() {
        //Create new div element for left side container
        this.leftSide = document.createElement('div');
        //Assign class to left side container
        this.leftSide.classList.add('left-side');

        //Create figure element for image
        let figure = document.createElement('figure');
        //Assign class to figure element
        figure.classList.add('bookImg');

        //Create img tag for the image
        let bookImg = document.createElement('img');
        //Assign attribute to img tag
        bookImg.setAttribute('src', `./images/${this.bookData.img}`);

        //Create new paragraph element
        let paragraph = document.createElement('p');
        //Assign class to paragraph element
        paragraph.classList.add('book-content');
        //Assign content to paragraph element
        paragraph.textContent = this.bookData.paragraph;
        
        //Append img tag to figure container
        figure.append(bookImg);
        //Append figure to left side container  
        this.leftSide.append(figure);
        //Append paragraph to left side container as second child
        this.leftSide.append(paragraph);
    }

    rightSidePageConstructor() {
        this.rightSide = document.createElement('div');
        this.rightSide.classList.add('right-side');

        let h3Heading = document.createElement('h3');
        h3Heading.classList.add('heading-tertiary');
        h3Heading.textContent = 'Reviews';

        this.reviewsBox = document.createElement('div');
        this.reviewsBox.classList.add('reviews-box');

        this.buttonBoxConstructor();

        this.rightSide.append(h3Heading);
        this.rightSide.append(this.reviewsBox);
        this.rightSide.append(this.btnBox); 
    }

    buttonBoxConstructor() {
        this.btnBox = document.createElement('div');
        this.btnBox.classList.add('btn-box');

        this.textInput = document.createElement('input');
        this.textInput.classList.add('input-field');

        this.btn = document.createElement('button');
        this.btn.classList.add('postBtn');
        this.btn.textContent = 'Post';

        this.postReviews();

        this.btnBox.append(this.textInput);
        this.btnBox.appendChild(this.btn);
    }

    sidesConstructor() {
        this.sides = document.createElement('div');
        this.sides.classList.add('sides');

        this.sides.append(this.leftSide);
        this.sides.append(this.rightSide);
    }

    openReviewPage() {
        this.image.addEventListener('dblclick', (event) => {
            if(this.heading2.textContent === event.target.parentNode.parentNode.children[0].textContent){
                this.popUpScreen.style.display= 'block';
            }
        });
    }

    closeReviewPage() {
        this.closeBtn.addEventListener('click', () => {
            this.popUpScreen.style.display= 'none';
        })
    }

    postReviews() {
        this.btn.addEventListener('click', () => {
            if(this.textInput.value === ''){
                alert('Invalid text!!!');
            } else {
                this.bookData.reviews.push(this.textInput.value);
                this.reviews = document.createElement('p');
                this.reviews.classList.add('review');     
                this.reviews.textContent = this.textInput.value;
                this.reviewsBox.append(this.reviews);
                this.spanReview.textContent = `${this.bookData.reviews.length} 💬`;
            }  
            this.textInput.value = '';   
        })
    }
}


booksData.forEach(book => {
    new GenerateReviewPopUpPage(book)     
});


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