const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const bluebutton = document.getElementById('blue');
const purplebutton = document.getElementById('purple');
const blackbutton = document.getElementById('black');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

bluebutton.addEventListener('click', ()=>{
    header.style.backgroundColor = 'blue';
    footer.style.backgroundColor = 'blue'; 
  



});

blackbutton.addEventListener('click', ()=>{
    header.style.backgroundColor = 'black';
    footer.style.backgroundColor = 'black';
});

purplebutton.addEventListener('click', ()=>{
    header.style.backgroundColor = 'purple';
    footer.style.backgroundColor = 'purple';

});


button.addEventListener('click', ()=>{
  
    let newName = nameInput.value;
    firstName.textContent = newName;
}); 

