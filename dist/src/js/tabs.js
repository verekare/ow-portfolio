let tabs = Array.from(document.getElementById('tabs-nav').children)

tabs.forEach( (tab, index) => {
  tab.addEventListener("click", () => {
      if (tab.style.flexGrow === '1' || tab.style.flexGrow === '0') {
          tabs.forEach( (_tab) => {  //all
              _tab.style.flexGrow = '0';
              _tab.lastElementChild.style.display = 'none';
          });
          tab.style.flexGrow = '2';  //sel
          tab.lastElementChild.style.display = 'block'
      }

      else if (tab.style.flexGrow === '2') {
          tabs.forEach( (_tab) => {  //all
              _tab.style.flexGrow = '1';
              _tab.lastElementChild.style.display = 'none';
          });
          tabs[3].style.flexGrow = '0';
      }
  })
})