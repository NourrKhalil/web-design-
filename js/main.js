var savedUserInput = prompt ( "hello" ) ;

console. log(savedUserInput) ;

document.getElementById("username") .innerText = savedUserInput; 

//tooltip 

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })