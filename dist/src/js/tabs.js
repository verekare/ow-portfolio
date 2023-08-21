    // SWITCHING THE TABS
            // (tab-content, clicked tab-link)

  // tab-link array
let tabLinks = Array.from(document.querySelectorAll(".tab-link"));
  // find all content
let tabContents = document.querySelectorAll('.tab-content');

function closeTabs() { 

  for (let tab of tabLinks) {
    tab.style.flex = 0;
    tab.style.width = '100%';
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
    
    console.log(tabLinks[i],': pressed', COUNT[i], 'times, even number means @close');
    if (COUNT[i]%2 === 0) {
      closeTabs();
    } else {
      // openTab(`tab{tabLinks[i]+1}`)
      COUNT[i] += 1;
      openTab(tabLinks[i]);
    }
  })
}