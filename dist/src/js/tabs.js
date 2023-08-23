    // SWITCHING THE TABS
            // (tab-content, clicked tab-link)
function openTab(tabId, elem) { 
            // tab-link collection
  let tabLinks = Array.from(document.querySelector('.tabs-nav').children);

            // make all tabs thin
  for (let tab of tabLinks) {
    tab.style.flex = 0;
  }

            // except the one that was clicked
  elem.style.flex = 1;

            // find all content
  let tabContents = document.querySelectorAll('.tab-content');
  
            // hide everything
  for (let content of tabContents) {
    content.style.display = 'none';
  }

            // except chosen content
  document.getElementById(tabId).style.display = 'block';
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth',
  });
}