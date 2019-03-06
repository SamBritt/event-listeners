//Mirror, Mirror in the code

let inputField = document.querySelector('#message');
let section1 = document.getElementById('one');
let section2 = document.getElementById('two');

inputField.addEventListener('keyup', (e)=>{
    section1.textContent= e.target.value;
    section2.textContent = e.target.value;
})

//Scrolling and Scaling

const audrey = document.getElementById("audrey");

audrey.addEventListener("scroll", () =>{
   audrey.style.width = window.scrollY / 3;
   audrey.width = window.scrollY / 4;
   console.log(event.target);
})

    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
