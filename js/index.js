
// Your code goes here
window.addEventListener('load', event => {
    console.log('Page Loaded Correctly!');
})

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

changeText.forEach(element => {
    element.addEventListener('mouseenter', () =>{
        element.style.cssText = ' padding: 10% 0; font-size: 4rem; background-color: red; text-align: center; color: white';
       
        element.textContent = "HA! HA!";
       
    });
});


const changeColor =  document.querySelector('.destination');
changeColor.style.opacity='0';

window.addEventListener('scroll', e => {

    if(window.scrollY >= 1130){
        changeColor.style.opacity = '1';
        changeColor.style.transition = 'opacity 2s ease-in';
    }
    console.log(window.scrollY);
})
