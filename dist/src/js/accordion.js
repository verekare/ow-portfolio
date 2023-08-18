    // OPEN/CLOSE ACCORDION
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function(event) {
        let panel = this.nextElementSibling;
        event.stopPropagation();
                // toggle between hide / show
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    
      });
      }