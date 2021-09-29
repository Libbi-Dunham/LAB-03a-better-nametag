const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const bluebutton = document.getElementById('blue');
const hotpinkbutton = document.getElementById('hotpink');
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

hotpinkbutton.addEventListener('click', ()=>{
    header.style.backgroundColor = 'hotpink';
    footer.style.backgroundColor = 'hotpink';

});


button.addEventListener('click', ()=>{
  
    let newName = nameInput.value;
    firstName.textContent = newName;
}); 

