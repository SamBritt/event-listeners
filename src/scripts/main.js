//Mirror, Mirror in the code**

// let inputField = document.querySelector('#message');
// let section1 = document.getElementById('one');
// let section2 = document.getElementById('two');

// inputField.addEventListener('keyup', (e) => {
//     section1.textContent = e.target.value;
//     section2.textContent = e.target.value;
// })

//Scrolling and Scaling**

// const audrey = document.getElementById("audrey");

// document.addEventListener('scroll', (e) => {

//     let windowScrollY = window.scrollY / 3;
//     let windowScrollY2 = window.scrollY / 4


//     audrey.style.width = `${windowScrollY}px`;
//     audrey.style.minWidth = '50px';
//     audrey.style.height = `${windowScrollY2}px`;
//     audrey.style.minHeight = '100px';
// })

//Window Powers Activate!**

let activateFlight = document.getElementById('flight');

document.querySelector("#activate-flight").addEventListener('click', (e) => {
    flightHandlerFunction();
});

function flightHandlerFunction(){
    if(activateFlight.className == 'power disabled'){
        activateFlight.classList.toggle('enabled');
    }else if(activateFlight.className == 'power enabled'){
        activateFlight.classList.toggle('disabled');
    }
}


