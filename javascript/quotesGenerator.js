let quotes = document.querySelectorAll('.quote-card');

//Quotes slide carousel functionality
// let quotes = document.querySelectorAll('.quote-card');
const backArrow = document.querySelector('.back-arrow');
const forwardArrow = document.querySelector('.forward-arrow');
let counter = 1;
let quoteIdx;
let quoteLength = quotes.length;
let prevCount;

quotes.forEach((quote, index) => {
    quoteIdx = quote.dataset.index = index;
})

let backwardsCycle = setInterval(() => {
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
}, 3000); 

backArrow.addEventListener('click', () => {
    clearInterval(backwardsCycle);
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
    clearInterval(backwardsCycle);
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

    setInterval(backwardsCycle, 3000);
})

let removeActive = () => {
    quotes.forEach(quote => {
        quote.className = "quote-card";
    })
}

let addActive = () => {
    let newActive = document.querySelector(`.quote-card[data-index="${counter}"]`);
    newActive.classList.add('active');
}

let addPrev = (prevCount) => {
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

let addNext = (prevCount) => {
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


//Generate quotes 
const quoteCards = [
    {
        quote: 'All that we are is the result of what we have thought.',
        author: 'Buddha'
    },
    {
        quote: 'I have no special talent. I am only passionately curious.',
        author: 'Albert Einstein'
    },
    {
        quote: 'If you judge people, you have no time to love them.',
        author: 'Mother Teresa'
    },
    {
        quote: 'Wisely, and slow. They stumble that run fast.',
        author: 'William Shakespeare '
    }, 
    {
        quote: 'The most courageous act is still to think for yourself. Aloud.',
        author: 'Coco Chanel'
    }, 
    {
        quote: 'Stay hungry, stay foolish.',
        author: 'Steve Jobs'
    }, 
    {
        quote: 'A great man is always willing to be little.',
        author: 'Ralph Waldo Emerson'
    }, 
    {
        quote: 'The greatest wealth is to live content with little.',
        author: 'Plato'
    }, 
    {
        quote: 'The future belongs to those who prepare for it today.',
        author: 'Malcolm X'
    }, 
    {
        quote: 'The successful warrior is the average man, with laser-like focus.',
        author: 'Bruce Lee'
    }, 
    {
        quote: 'It always seems impossible until it’s done.',
        author: 'Nelson Mandela'
    }, 
    {
        quote: 'The unexamined life is not worth living.',
        author: 'Socrates'
    }, 
    {
        quote: 'Our life is frittered away by detail… simplify, simplify.',
        author: 'Henry David Thoreau'
    }, 
    {
        quote: 'Try not to become a man of success but rather to become a man of value.',
        author: 'Albert Einstein'
    }, 
    {
        quote: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
        author: 'Mahatma Gandhi'
    }, 
    {
        quote: 'No matter who you are or what you look like, how you started off, or how and who you love, America is a place where you can write your own destiny.',
        author: 'Barack Obama'
    }, 
    {
        quote: 'Turn your wounds into wisdom.',
        author: 'Oprah Winfrey'
    }, 
    {
        quote: 'I don’t think of all the misery but of the beauty that still remains.',
        author: 'Anne Frank'
    }, 
    {
        quote: 'Whatever you are, be a good one.',
        author: 'Abraham Lincoln'
    }, 
    {
        quote: 'Do what you can, with what you have, where you are.',
        author: 'Theodore Roosevelt'
    }, 
    {
        quote: 'Little by little, one travels far.',
        author: '.R.R. Tolkien'
    }, 
    {
        quote: 'It’s not how much you have that makes people look up to you, it’s who you are.',
        author: 'Elvis Presley'
    }, 
    {
        quote: 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
        author: 'Bruce Lee'
    }, 
    {
        quote: 'A man who stands for nothing will fall for anything.',
        author: 'Malcolm X'
    }, 
    {
        quote: 'In order to be irreplaceable one must always be different.',
        author: 'Coco Chanel'
    }, 
    {
        quote: 'You have power over your mind – not outside events. Realize this, and you will find strength.',
        author: 'Marcus Aurelius'
    }, 
    {
        quote: 'Love all, trust a few, do wrong to none.',
        author: 'William Shakespeare'
    }, 
    {
        quote: 'I have a dream that one day little black boys and girls will be holding hands with little white boys and girls.',
        author: 'Martin Luther King Jr'
    }, 
    {
        quote: 'Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring.',
        author: 'Marilyn Monroe'
    }, 
    {
        quote: 'The path to success is to take massive, determined action.',
        author: 'Tony Robbins'
    }, 
    {
        quote: 'Be kind whenever possible. It is always possible.',
        author: 'Dalai Lama'
    }, 
    {
        quote: 'Life is a flower of which love is the honey.',
        author: 'Victor Hugo'
    }, 
    {
        quote: 'Love the life you live. Live the life you love.',
        author: 'Bob Marley'
    }, 
    {
        quote: 'God helps those that help themselves.',
        author: 'Benjamin Franklin'
    }, 
    {
        quote: 'I came, I saw, I conquered.',
        author: 'Julius Caesar'
    }, 
    {
        quote: 'I think, therefore I am.',
        author: 'René Descartes'
    }, 
    {
        quote: 'To be, or not to be, that is the question.',
        author: 'William Shakespeare'
    }, 
    {
        quote: 'That’s one small step for a man, one giant leap for mankind.',
        author: 'Neil Armstrong'
    }, 
    {
        quote: 'The only thing that interferes with my learning is my education.',
        author: 'Albert Einstein'
    }, 
    {
        quote: 'Ask not what your country can do for you, but what you can do for your country.',
        author: 'John F. Kennedy'
    }, 
    {
        quote: 'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt'
    }, 
    {
        quote: 'Early to bed and early to rise makes a man healthy, wealthy, and wise.',
        author: 'Benjamin Franklin'
    }, 
    {
        quote: 'Family is the most important thing in the world.',
      
        author: 'Diana, Princess of Wales'
    }, 
    {
        quote: 'By failing to prepare, you are preparing to fail.',
        author: 'Benjamin Franklin'
    }, 
    {
        quote: 'The journey of a thousand miles begins with one step.',
        author: 'Lao Tzu'
    }, 
    {
        quote: 'I’ve failed over and over and over again in my life and that is why I succeed.',
        author: 'Michael Jordan'
    }, 
    {
        quote: 'Float like a butterfly, sting like a bee.',
        author: 'Muhammad Ali'
    }, 
    {
        quote: 'Nonviolence is a weapon of the strong.',
        author: 'Mahatma Gandhi'
    }, 
    {
        quote: 'It does not matter how slowly you go so long as you do not stop.',
        author: 'Confucius'
    }, 
    {
        quote: 'Not how long, but how well you have lived is the main thing.',
        author: 'Seneca'
    }, 
    {
        quote: 'It’s not whether you get knocked down, it’s whether you get up.',
        author: 'Vince Lombardi'
    }, 
    {
        quote: 'You miss 100 percent of the shots you never take.',
        author: 'Wayne Gretzky'
    }, 
    {
        quote: 'Peace begins with a smile.',
        author: 'Mother Teresa'
    }, 
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West'
    }, 
    {
        quote: 'Go confidently in the direction of your dreams. Live the life you have imagined.',
        author: 'Henry David Thoreau'
    }, 
    {
        quote: 'Life is either a daring adventure, or nothing.',
        author: 'Helen Keller'
    }, 
    {
        quote: 'Education is the most powerful weapon which you can use to change the world.',
        author: 'Nelson Mandela'
    }, 
    {
        quote: 'Good artists copy, great artists steal.',
        author: 'Pablo Picasso'
    }, 
    {
        quote: 'Genius is one percent inspiration, ninety-nine percent perspiration.',
        author: 'Thomas A. Edison'
    }, 
    {
        quote: 'That which does not kill us makes us stronger.',
        author: 'Friedrich Nietzsche'
    }, 
    {
        quote: 'If you think you can do a thing or think you can’t do a thing, you’re right.',
        author: 'Henry Ford'
    }, 
    {
        quote: 'Better to die standing than to live on your knees.',
        author: 'Ernesto “Che” Guevara'
    }, 
    {
        quote: 'Genius is eternal patience.',
        author: 'Michelangelo'
    }, 
    {
        quote: 'Keep calm and carry on.',
        author: 'Winston Churchill'
    },
];

let quoteSection = document.querySelector('.quote-section');

class QuotesGenerator {
    constructor(quote, index) {
        this.quote = quote;

        this.card = document.createElement('div');
        this.card.classList.add('quote-card');
        this.card.dataset.index = index + 3;


        this.paragraphConstructor();

        this.authorConstructor();

        quoteSection.appendChild(this.card);

    }

    paragraphConstructor() {
        let paragraph = document.createElement('p');
        paragraph.classList.add('quote');
        paragraph.textContent = this.quote.quote;

        this.card.append(paragraph);
    }

    authorConstructor() {
        let h3 = document.createElement('h3');
        h3.classList.add('author');
        h3.textContent = this.quote.author;

        this.card.append(h3);
    }
}

quoteCards.forEach((quote, indexX) => {
    new QuotesGenerator(quote, indexX)
});

quotes = document.querySelectorAll('.quote-card');
quoteLength = quotes.length;
    
quotes.forEach((quote) => {
    quoteIdx = quote.dataset.index;
})

removeActive = () => {
    quotes.forEach(quote => {
        quote.className = "quote-card";
    })
}