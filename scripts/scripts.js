var acc = document.getElementsByClassName("accordeonTitle");
var i;

for (i = 0; i < acc.length; i++) {
  /*for all title with description, change pointer and background*/
  var panel = acc[i].nextElementSibling;
  if(panel){
	acc[i].classList.add("clickable");
  }
  /*when title clicked, if there is a description, show it*/
  acc[i].addEventListener("click", function() {
	this.classList.toggle("active");
	this.nextElementSibling.classList.toggle("shown");
    var panel = this.nextElementSibling;
    if(panel){
    	if (panel.style.display === "block") {
      		panel.style.display = "none";
    	} else {
      		panel.style.display = "block";
    	}
	}
  });
}