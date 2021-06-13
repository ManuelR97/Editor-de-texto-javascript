$(document).ready(function(){
    ////hover en los botones de edicion 
    $('[data-toggle="tooltip"]').tooltip(); 
  });

function insertUnordered() {
    document.execCommand("insertUnorderedList");
}

function insertOrdered() {
    document.execCommand("insertOrderedList");
}
