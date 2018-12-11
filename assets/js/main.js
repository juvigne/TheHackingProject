//document.ready => lance le code js lorsque la page(document) est entierment chargé
$(document).ready(function() {
  setTimeout(function(){
    $( "#dialog" ).dialog();
  }, 10000);
} );

//On ferme la popUp
function close(){
  $( "#dialog" ).dialog('close');
}
//On redirige vers une autre page
function newTab(){
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}