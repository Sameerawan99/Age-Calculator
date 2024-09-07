

let calculate = document.querySelector('button');
let birthdateInput = document.querySelector('input');
let output = document.getElementById('output')
let Reset = document.getElementById('reset')

 function age() {
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();

  
  if (today.getMonth() < birthdate.getMonth() || 
      (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    age--;
  }

  output.textContent = `your are ${age} year old`;
};


function reset() {
    output.textContent = '';
    birthdateInput.value = '';
}


calculate.addEventListener("click" , age)
Reset.addEventListener('click', reset)