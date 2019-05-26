//Book section drag & drop functionality
let books = document.querySelectorAll('.book-box');
let curBook;

books.forEach(book => {
    book.addEventListener('dragstart', event => {
        curBook = event.target;
    });
});

// let favBox = document.querySelector('');
let dropZone = document.querySelector('.fav-list');

dropZone.addEventListener('dragenter', (event) => {
    if(event.target.className === "fav-list"){
        dropZone.style.border = "3px solid #fff";  
        setTimeout(() => {
            dropZone.style.border = "3px solid #900048";       
        }, 3000)
    }
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    
})

dropZone.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dropZone.style.border = "3px solid #900048"; 
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

    //Append favItem to dropzone
    dropZone.appendChild(favItem);

    //Remove current book from main list after adding it to favourite collection
    curBook.remove();
});

let popUpReview = document.querySelectorAll('.popUp-screen');
let reviewHeading = document.querySelectorAll('.heading-quaternary');

dropZone.addEventListener('click', (event) => {
    reviewHeading.forEach(heading => {
        if(heading.textContent === event.target.textContent){
            heading.parentNode.style.display = 'block';
        }
    });
});