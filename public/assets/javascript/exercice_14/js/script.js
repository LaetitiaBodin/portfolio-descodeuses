let bookCover = document.getElementById('bookCover');

bookCover.addEventListener('mouseover', 
    function () {
        this.className = `border border-dark`;
    }
);

bookCover.addEventListener('mouseout',
    function () {
        this.className = `border-0`;
    }
);