alert("I hope you love Crocs. Make sure to visit the links or not.");

function image(x){
  x.style.height = "400px";
  x.style.width = "600px";
}

function link1(){
var str = "Crocs";
var result = str.link("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj2wLnmu6jjAhUKt54KHexTCFgQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FCrocs-Bistro-Swedish-Chef-Clog%2Fdp%2FB071WCWTJJ&psig=AOvVaw0g3IUPLmy_DLP2BpltetjV&ust=1562708630252647");
document.getElementById("main").innerHTML = result;
}
/* original code ends here */

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
