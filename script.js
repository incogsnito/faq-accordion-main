const add = document.querySelectorAll(".add");

const info = document.querySelectorAll(".info");

add.forEach((add)=> {
  add.addEventListener('click', (e)=>{
    infoSelect = e.target;
    info.forEach((info) =>{
      info.classList.toggle('hidden');
    })
  })
})