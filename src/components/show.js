function showDrop(){
    const showDropdown = document.querySelector(".navbar");

   if (showDropdown.style.left == "-100%")
   {
    showDropdown.style.left = "0";
     
   
   } else {
    showDropdown.style.width = "-100%";
   
  }
  }