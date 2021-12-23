let bookCover1 = document.getElementById('bookCover1');
let bookCover2 = document.getElementById('bookCover2');
let bookCover3 = document.getElementById('bookCover3');
let bookCover4 = document.getElementById('bookCover4');
let bookCover5 = document.getElementById('bookCover5');

let bookCovers = [bookCover1, bookCover2, bookCover3, bookCover4, bookCover5];

for (let i = 0; i < bookCovers.length; i++) {
    bookCovers[i].addEventListener('mouseover',
        function () {
            bookCovers[i].src = `./img/Image_${i + 1}b.jpg`;
        }
    );
}


