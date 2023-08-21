    // SWITCHING THE TABS
const tabLinks = Array.from(document.querySelectorAll(".tab-link"));
const tabContents = Array.from(document.querySelectorAll('.tab-content'));


for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", ()=> {
    
    if (tabLinks[i].style.flex === 1 || tabLinks[i].style.flex === 0) {
      for (let tablink of tabLinks) {
        tablink.style.flex = 1;
      }
      tabLinks[i].style.flex = 2;
      tabLinks[i].lastElementChild.style.display = "block";
    } else if (tabLinks[i].style.flex === 2) {
      for (let i = 0; i < tabLinks.length-1; i++) {
        tabLinks[i].style.flex = 1;
        tabLinks[i].lastElementChild.style.display = "none";
      }
      tabLinks[3].style.flex = 0;
      tabContents[i].style.display = "none";
    }
  })
}