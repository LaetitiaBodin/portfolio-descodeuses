let bookCover = document.getElementById('bookCover');

bookCover.addEventListener('mouseover', 
    function () {
        this.src ='./img/Image_2.png';
    }
);

bookCover.addEventListener('mouseout', function () {
    this.src='./img/Image_1.png';
    }
);