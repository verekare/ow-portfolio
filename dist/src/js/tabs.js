    // SWITCHING THE TABS
            // (tab-content, clicked tab-link)

  // tab-link array
let tabLinks = Array.from(document.querySelectorAll(".tab-link"));
  // find all content
let tabContents = document.querySelectorAll('.tab-content');

function closeTabs() { 

  for (let tab of tabLinks) {
    tab.style.flex = 0;
  }

  for (let content of tabContents) {
    content.style.display = 'none';
  }
}

function openTab(tab) { 

  tab.style.flex = 1;
  tab.lastElementChild.style.display = 'block';
}

let COUNT = [0,0,0,0];
for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", ()=> {
    COUNT[i] += 1;
    console.log(COUNT[i]);
    console.log(COUNT[i]/2);
    if (COUNT[i]%2 === 0) {
      closeTabs();
    } else {
      // openTab(`tab{tabLinks[i]+1}`)
      openTab(tabLinks[i])
    }
  })
}