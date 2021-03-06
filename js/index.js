
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

const changeBusImg = document.querySelector('.intro img')

changeBusImg.addEventListener('click', () => {
    changeBusImg.src='../img/change-bus.jpg';
});

changeBusImg.addEventListener('dblclick', () => {
    changeBusImg.src='../img/fun-bus.jpg';
});

const changeText = document.querySelectorAll('.text-content');

changeText.forEach(element => {
    element.addEventListener('mouseover', () =>{
        element.style.cssText = ' padding: 10% 0; font-size: 4rem; background-color: red; text-align: center; color: white';   
        element.textContent = "HA! HA!";
    });

    element.addEventListener('click', () =>{
        element.style.cssText = 'background-image: linear-gradient(rgba(23,45,67,1), rgba(123, 56, 78,1)); padding: 10% 0; font-size: 4rem;  text-align: center; color: white';
        element.innerHTML = "You Clicked Me!";
    });
});

const changeColor =  document.querySelectorAll('.destination');
changeColor.forEach(item => {
    item.style.opacity='0';
})

window.addEventListener('scroll', () => {

    if(window.scrollY <= 1500){
        changeColor.forEach(destination => {
            destination.style.opacity = '1';
            destination.style.transition = 'opacity 2s ease-in';
        })
    }
    console.log(window.scrollY);
});

const imgContent =  document.querySelectorAll('.img-content img');

imgContent.forEach(img => {
    img.addEventListener('mouseleave', ()=>{
        img.src='../img/change-bus.jpg';
    })
});

const destinationBGChange = document.querySelector('.content-destination');

destinationBGChange.addEventListener('click', ()=>{
    destinationBGChange.style.backgroundColor = 'red';
});

const destinationHeader = document.querySelector('.content-destination h2');

destinationHeader.addEventListener('click', (e) =>{
    destinationHeader.style.backgroundColor = 'blue';
    e.stopPropagation();
})



///stop nav
const stopNavLinks = document.querySelectorAll('.nav-link')

stopNavLinks.forEach(link =>{
    link.addEventListener('click', e =>{
        link.style.color="#cccccc";
        e.preventDefault();
    });

    link.addEventListener('mouseover', () => {
        link.style.cursor='not-allowed';
    });
})