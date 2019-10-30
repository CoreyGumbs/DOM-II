// Your code goes here
const logoChange= document.querySelector('.logo-heading');


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


window.addEventListener('resize', () =>{
    changeImgs.forEach(img => {
        img.src="../img/beach.jpg";
    });
});


const changeText = document.querySelectorAll('.text-content');
console.log(changeText);

changeText.forEach(element => {
    element.addEventListener('mouseenter', () =>{
        element.style.cssText = ' padding: 10% 0; font-size: 4rem; background-color: red; text-align: center; color: white';
       
        element.textContent = "HA! HA!";
       
    });
})