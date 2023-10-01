// SWITCHING THE TABS
        // (tab-content, clicked tab-link)
function openTab(tabId, elem) { 
          // tab-link collection
  let tabLinks = Array.from(document.getElementById('tabs-nav').children);

          // make all tabs thin
  for (let tab of tabLinks) {
    tab.style.flex = 0;
  }

          // except the one that was clicked
  elem.style.flex = 1;
  if (window.innerWidth < 1025) {
    switch (elem) {
      case tab1:
        elem.style.background = '#fff';
        break;
      case tab2:
        elem.style.background = '#ff0';
        break;
      case tab3:
        elem.style.background = '#f00';
        break;
      case about:
        elem.style.background = '#000';
        break;
    }
  }

          // find all content
  let tabContents = document.querySelectorAll('.tab-content');

          // hide everything
  for (let content of tabContents) {
    content.style.display = 'none';
  }

          // except chosen content
  document.getElementById(tabId).style.display = 'block';
}