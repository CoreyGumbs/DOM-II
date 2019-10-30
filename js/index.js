// Your code goes here
const logoChange= document.querySelector('.logo-heading');
console.log(logoChange);

logoChange.addEventListener('mouseover', () => {
    logoChange.style.transform='scale(1.5)';
    logoChange.style.transform='all 1s ease-in';
    logoChange.style.color='red';
});

logoChange.addEventListener('mouseout', () => {
    logoChange.style.transform='scale(1)';
    logoChange.style.transform='all 1s ease-in';
    logoChange.style.color='blue';
});

const changeImgs = document.querySelectorAll('img');
console.log(changeImgs)

window.addEventListener('resize', () =>{
    changeImgs.forEach(img => {
        img.src="../img/beach.jpg";
    });
});