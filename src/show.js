function showDrop(){
    const navListMenu = document.querySelector(".navbar");
    
   if (navListMenu.style.display == "none")
   {
      navListMenu.style.display = "flex";
  
   
   } else {
     navListMenu.style.display = "none";
  }
  }