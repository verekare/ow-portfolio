    // SWITCHING THE TABS
            // (tab-content, clicked tab-link)

  // tab-link array
let tabLinks = Array.from(document.querySelectorAll(".tab-link"));
  // find all content
let tabContents = document.querySelectorAll('.tab-content');


for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", ()=> {
    
    if (tabLinks[i].style.display.flex === 0) {
      tabLinks[i].style.display.flex = 1;
      tabContents[i].style.display = "block";
    } else {
      tabLinks[i].style.display.flex = 0;
      tabContents[i].style.display = "none";
    }
  })
}