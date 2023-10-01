    // SWITCHING THE TABS
const tabLinks = Array.from(document.querySelectorAll(".tab-link"));
const tabContents = Array.from(document.querySelectorAll('.tab-content'));


for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", ()=> {
    
    if (tabLinks[i].style.flex == '1' || tabLinks[i].style.flex == '0') {
      for (let tablink of tabLinks) {
        tablink.style.flex = '1';
      }
      tabLinks[i].style.flex = '2'; // selected
      tabLinks[i].lastElementChild.style.display = "block";
    }
    
    else if (tabLinks[i].style.flex == '2') {
      console.log('closing!!!');
      for (let k = 0; k < tabLinks.length-1; k++) {
        tabLinks[k].style.flex = '1';
        tabLinks[k].lastElementChild.style.display = "none";
      }
      tabLinks[3].style.flex = '0';
      tabContents[i].style.display = "none";
    }
  })
}