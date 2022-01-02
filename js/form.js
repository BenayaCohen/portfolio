

  const inputEl = document.querySelector(".input");
  const nameEl = document.querySelector(".name");
  const numberEl = document.querySelector(".number");
  const emailEl = document.querySelector(".email");
  const commentEl =document.querySelector(".comment")
  const hourEl =document.querySelector(".hour")




  myForm = [nameEl, numberEl, emailEl, commentEl, hourEl]
  inputEl.addEventListener("click",  () =>{
      for (let i = 0; i < myForm.length; i++) {
          console.log(myForm[i].value);   // this is work!
          
  
      }
  });

  let formValue = {}

  myForm.forEach(change => {
    if (formValue ===  myForm.value) {  
      inputEl.disabled = false; 
    } else {
      inputEl.disabled = true; // but when i put this code to disable the butten its work but its cancel the first one
    }}) 


  
  const codingLanguages = ["HTML", "CSS", "JavaScript"];
  let web = document.getElementById("website");
  codingLanguages.splice(2, 0, "and");

  for (let i = 0; i < codingLanguages.length; i++) {
    web.textContent += "" + " " + codingLanguages[i];
  }