//Sidebar navigation for corresponding book category
let all = document.querySelectorAll('.main-link');

class NavLInks {
    constructor(link){
        this.link = link;
        
        //Assign dataset to each link
        this.dataCategory = this.link.dataset.category = this.link.textContent;

        //If dataset for category is equal to all display all of them
        if(this.dataCategory === 'All') {
            this.books = document.querySelectorAll('.book-box');
        //Else display only the one corresponding to dataset
        } else {
            this.books = document.querySelectorAll(`.book-box[data-category=${this.dataCategory}]`);
        }

        this.link.addEventListener('click', (event) => {
            //Prevent default behaviour to stop page reload
            event.preventDefault();
            //Select all li tags within the side bar navigation
            let list = document.querySelectorAll('.nav-list');
            //Iterate through them and removes active class
            list.forEach(link => {
                link.className = 'nav-list';
            });

            //Select all books
            let allBooks = document.querySelectorAll('.book-box');
            //Iterate through all books and remove them from the screen
            allBooks.forEach(book => {
                book.style.display = 'none';
            });

            //Add class active to currently selected tab
            if(this.link.textContent === this.dataCategory) {
                this.link.children[0].className += ' active';
            }

            //Create an array from returned nodelist and loop over each to make them visible
            this.books.forEach(book => {
                book.style.display = 'block';
            })
        });
    }
}

all.forEach(navLink => {
    //Pass links and newly created dataset to the class constructor
    new NavLInks(navLink);  
});