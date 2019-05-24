//Book section drag & drop functionality
let books = document.querySelectorAll('.book-box');
let curBook;

books.forEach(book => {
    book.addEventListener('dragstart', event => {
        curBook = event.target;
    });
});

let favBox = document.querySelector('.fav-list');
const dropZone = favBox.querySelector('.drop-zone');

dropZone.addEventListener('dragenter', (event) => {
    if(event.target.className === "drop-zone"){
        favBox.style.border = "3px solid #fff";  
        setTimeout(() => {
            favBox.style.border = "3px solid #900048";       
        }, 3000)
    }
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    
})

dropZone.addEventListener('dragleave', (event) => {
    event.preventDefault();
    favBox.style.border = "3px solid #000"; 
})

let favBok;

dropZone.addEventListener('drop', (event) => {
    //Create div for favourite books 
    let favItem = document.createElement('div');
    //Assign class to favourite book item
    favItem.classList.add('fav-item');

    //Creating heading for favourite book title
    favBox = document.createElement('h3');
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
});

let popUpReview = document.querySelectorAll('.popUp-screen');
let reviewHeading = document.querySelectorAll('.heading-quaternary');

favBox.addEventListener('click', (event) => {

    reviewHeading.forEach(heading => {
        if(heading.textContent === event.target.textContent){
            heading.parentNode.style.display = 'block';
        }
    });
    console.log(popUpReview.children[0].textContent);
    // if(event.target.textContent){
    //     this.popUpScreen.style.display= 'block';
    // } === 
});