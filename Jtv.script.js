$(function(){ $(".col-xs-6 sagheeronline").on("click", function() { var player = afterglow.getPlayer('videoplayer'); var link ="https://cdn07isb.tamashaweb.com:8087/tamashatest/"; var q ="/chunks.m3u8";  var new_url = $(this).attr("sagheeronlinejtvfree"); player.src({ type: 'video/mp4', src: link+new_url+q }); player.load(); player.play(); }); });
// JavaScript code
function search_sagheeronlinesearch() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('sagheeronlinesearch');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}filterSelection("Medium")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("sagheeronlinefilter");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// let hasbeenclicked = 0
        // document.getElementById("hasbeenclickedID").innerHTML = hasbeenclicked;
      // Add active class to the current button (highlight it)
      var header = document.getElementById("sagheerso");
      var btns = header.getElementsByClassName("btn");
      // var restBtns = btns.getElementsByClassName("btns") 

      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {

          for (var x = 0; x < btns.length; i++){
           var drugaklasa = document.getElementsByClassName("btn");
           drugaklasa[x].className = drugaklasa[x].className.replace("btn", "sagheeronline");
          }
        

        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      

        

        // return hasbeenclicked = 1;
        });
        
      }
