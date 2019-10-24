var acc = document.getElementsByClassName("periodeTitle");
var i;

for (i = 0; i < acc.length; i++) {
  /*for all title with description, change pointer and background*/
  var panel = acc[i].nextElementSibling;
  if(panel){
  	acc[i].style.cursor = "pointer";
  	acc[i].style.background = "#e6e6e6";
  	acc[i].style.padding = ".2rem .5rem";
  }
  /*when title clicked, if there is a description, show it*/
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel){
    	console.log(this.style.background);
    	if(this.style.background === "rgb(230, 230, 230)"){
    		this.style.background = "white";
    	} else {
    		this.style.background = "rgb(230, 230, 230)";
    	}
    	if (panel.style.display === "block") {
      		panel.style.display = "none";
    	} else {
      		panel.style.display = "block";
    	}
	}
  });
}