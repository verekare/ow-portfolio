// OPEN/CLOSE ACCORDION
let acc = document.getElementsByClassName("accordion");
let arrAnim = document.getElementsByClassName("arrow-animation");
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
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

  });
}

if (window.matchMedia("(max-width: 1024px)").matches) {
  for (let i=0; i < arrAnim.length; i++) {
    arrAnim[i].remove();
  }
}