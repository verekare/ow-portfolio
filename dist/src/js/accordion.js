// OPEN/CLOSE ACCORDION
let acc = document.getElementsByClassName("accordion");
let arrows = document.getElementsByClassName("arrow");
let looksDown = false;
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.lastElementChild;
            // for mobile
    if (window.matchMedia("(max-width: 1024px)").matches) {
      if (panel.style.display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    }
            // toggle between hide / show
    if (looksDown) {
      panel.style.display = "none";
      if (!panel.previousElementSibling.classList.contains("list-header")) {
        arrows[i].style.transform = "rotate(0deg)";
        looksDown = false;
      }
    } else {
      panel.style.display = "block";
      if (!panel.previousElementSibling.classList.contains("list-header")) {
        arrows[i].style.transform = "rotate(90deg)";
        looksDown = true;
      }
    }

  });
}

if (window.matchMedia("(max-width: 1024px)").matches) {
  for (let i = 0; i < arrAnim.length; i++) {
    arrAnim[i].removeChild(arrAnim[i].firstChild);
  }
}