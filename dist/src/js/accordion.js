    // OPEN/CLOSE ACCORDION
    let acc = document.getElementsByClassName("accordion");
    let arrAnim = document.querySelectorAll("arrow-animation");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        let panel = this.lastElementChild;
                // toggle between hide / show
        if (panel.style.display === "none") {
          panel.style.display = "block";
        } else {
          panel.style.display = "none";
        }
    
      });
      }