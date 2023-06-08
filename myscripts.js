window.addEventListener('load',()=>{
    const navList=document.querySelectorAll("#nav__list li");
    const emptiness=document.querySelector(".empty_area");
  for(let i=0;i<navList.length;i++){
    navList[i].onclick=function(){
        document.getElementById("txt").value=this.innerText;
    };
  };
    });
