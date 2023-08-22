let changeOne = document.querySelector('.paragraph');
let changeTwo = document.querySelector('.parclick');
let changeThree = document.querySelector('.parclick');

changeTwo.addEventListener('click', chOne);
function chOne(){
    changeOne.style.webkitTextFillColor = "#191919";
}

changeTwo.addEventListener('mouseout', chTwo);
function chTwo(){
    changeOne.style.webkitTextFillColor = "transparent";
}

