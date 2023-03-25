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
    /*accordion slide down effect -> manage description's height which seemed impossible in pure css*/
    description = this.nextElementSibling;
    if (description.style.maxHeight) {
      description.style.maxHeight = null;
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
    }
  });
}