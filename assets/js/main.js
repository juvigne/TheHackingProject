//document.ready => lance le code js lorsque la page(document) est entierment chargé
$(document).ready(function() {
  setTimeout(function(){
    $( "#dialog" ).dialog();
  }, 10000);
} );

//On ferme la popUp
function closeDiag(){
  $( "#dialog" ).dialog('close');
}
//On redirige vers une autre page
function newTab(){
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  $( "#dialog" ).dialog('close');
}

function myFunction() {
  document.body.style.backgroundColor = "pink";
  document.body.style.fontFamily = "Arial,Charcoal,sans-serif";

  var allH1 = document.getElementsByTagName("h1");
  for(var i = 0; i < allH1.length; i++) {
    allH1[i].style.color = "green";
    allH1[i].style.fontFamily = "Comic Sans";
  }

  var allH2 = document.getElementsByTagName("h2");
  for(var i = 0; i < allH2.length; i++) {
    allH2[i].style.color = "green";
    allH2[i].style.fontFamily = "Comic Sans";
  }

  var allH3 = document.getElementsByTagName("h3");
  for(var i = 0; i < allH3.length; i++) {
    allH3[i].style.color = "green";
    allH3[i].style.fontFamily = "Comic Sans";
  }

  var allP = document.getElementsByTagName("p");
  for(var i = 0; i < allP.length; i++) {
    allP[i].style.color = "blue";
    allP[i].style.fontFamily = "papyrus";
  }

  var allLI = document.getElementsByTagName("li");
  for(var i = 0; i < allLI.length; i++) {
    allLI[i].style.color = "blue";
  }

  var allBlockquate = document.getElementsByTagName("blockquote");
  for(var i = 0; i < allBlockquate.length; i++) {
    allBlockquate[i].style.color = "blue";
  }

}
