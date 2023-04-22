let allStar = document.querySelectorAll('#icons i');
let Star1 = document.querySelector('#icons .Star1');
let Star2 = document.querySelector('#icons .Star2');
let Star3 = document.querySelector('#icons .Star3');
let Star4 = document.querySelector('#icons .Star4');
let Star5 = document.querySelector('#icons .Star5');

Star1.addEventListener("click", function(){
    removeStars();
    Star1.classList.add('Active');
})

Star2.addEventListener("click", function(){
    removeStars();
    Star1.classList.add('Active');
    Star2.classList.add('Active');
})

Star3.addEventListener("click", function(){
    removeStars();
    Star1.classList.add('Active');
    Star2.classList.add('Active');
    Star3.classList.add('Active');
})

Star4.addEventListener("click", function(){
    removeStars();
    Star1.classList.add('Active');
    Star2.classList.add('Active');
    Star3.classList.add('Active');
    Star4.classList.add('Active');
})

Star5.addEventListener("click", function(){
    removeStars();
    Star1.classList.add('Active');
    Star2.classList.add('Active');
    Star3.classList.add('Active');
    Star4.classList.add('Active');
    Star5.classList.add('Active');
})

function removeStars(){
    allStar.forEach( e => {
        e.classList.remove("Active");
    })
}


// allStar.forEach(e => {
//     e.addEventListener("click", function(){
//         console.log('hi');
//     })
// });


// array 
// string = 'sdfsd';
// number = 32423;
// Boolean = true false;
// undefined = undefined;
// null = null;