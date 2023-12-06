// OPEN/CLOSE ACCORDION
let acc = document.getElementsByClassName("accordion");
let arrows = document.getElementsByClassName("arrow");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.lastElementChild;
    let looksDown = false;
            // for mobile
    if (window.matchMedia("(max-width: 1024px)").matches) {
      if (panel.style.display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    }
            // toggle between hide / show
    if (!looksDown) {
      panel.style.display = "none";
      arrows[i].style.transform = "rotate(0deg)";
      looksDown = false;
    } else {
      panel.style.display = "block";
      arrows[i].style.transform = "rotate(90deg)";
      looksDown = true;
    }

  });
}

let contentPanels = document.getElementsByClassName("panel");
for (let i = 0; i < contentPanels.length; i++) {
  contentPanels[i].addEventListener()
}

if (window.matchMedia("(max-width: 1024px)").matches) {
  for (let i = 0; i < arrAnim.length; i++) {
    arrAnim[i].removeChild(arrAnim[i].firstChild);
  }
}