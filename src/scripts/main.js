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


// let childrenOfPower = allPowers.children;
let activateFlight = document.getElementById('flight');
let activateMind = document.getElementById('mindreading');
let activateXray = document.getElementById('xray');
let allPowers = document.querySelector('#powerList');
let allPowersList = allPowers.querySelectorAll('section');

document.querySelector("#activate-flight").addEventListener('click', (e) => {
    flightHandlerFunction();
});
document.querySelector("#activate-mindreading").addEventListener('click', (e) => {
    mindHandlerFunction();
});
document.querySelector("#activate-xray").addEventListener('click', (e) => {
    xRayHandlerFunction();
});
document.querySelector("#activate-all").addEventListener('click', (e) => {
    activateAllPowers();
});
document.querySelector("#deactivate-all").addEventListener('click', (e) => {
    deactivateAllPowers();
});


function flightHandlerFunction(){
    if(activateFlight.className == 'power disabled'){
        activateFlight.classList = 'power enabled';
    }else if(activateFlight.className == 'power enabled'){
        activateFlight.classList = 'power disabled';
    }
}
function mindHandlerFunction(){
    if(activateMind.className == 'power disabled'){
        activateMind.classList = 'power enabled';
    }else if(activateMind.className == 'power enabled'){
        activateMind.classList = 'power disabled';
    }
}
function xRayHandlerFunction(){
    if(activateXray.className == 'power disabled'){
        activateXray.classList = 'power enabled';
    }else if(activateXray.className == 'power enabled'){
        activateXray.classList = 'power disabled';
    }
}
function activateAllPowers(){
   for(let i = 0; i < allPowersList.length; i++){
    // console.log(allPowersList[i].classList = 'power enabled');
    allPowersList[i].classList = 'power enabled';
   }
}
function deactivateAllPowers(){
    for(let i = 0; i < allPowersList.length; i++){
        allPowersList[i].classList = 'power disabled';
    }
 }

