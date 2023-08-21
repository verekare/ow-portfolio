    // SWITCHING THE TABS
const tabLinks = Array.from(document.querySelectorAll(".tab-link"));
const tabContents = Array.from(document.querySelectorAll('.tab-content'));


for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", ()=> {
    
    if (tabLinks[i].style.flex === 1 || tabLinks[i].style.flex === 0) {
      tabLinks[i].style.flex++;
      tabContents[i].style.display = "block";
    } else {
      tabLinks[i].style.flex--;
      tabContents[i].style.display = "none";
    }
  })
}