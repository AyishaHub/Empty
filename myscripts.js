window.addEventListener('load',()=>{
    const navLink=document.querySelectorAll(".navLink");
    const emptiness=document.querySelector(".empty_area");
    navLink.forEach(name=> {
        name.addEventListener('click',()=>{
            emptiness.innerHTML=navLink.value;
        })
    });
    });
