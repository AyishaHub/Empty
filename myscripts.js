window.addEventListener('load',()=>{
    const navList=document.querySelectorAll("#nav__list li");
    const emptiness=document.querySelector(".empty_area");
  navList.forEach(i=>{
      i.addEventListener('click',()=>{
          document.getElementById("txt").value=i.innerText;
      
    });
  });
    });
