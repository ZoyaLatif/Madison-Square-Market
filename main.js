//start by using jQuery to add a ready method call to the document
//Inside of each header’s callback function, use a jQuery method to make the corresponding drop-down menu appear.
//Under the click event handlers, add a mouseleave event handler to each of the '.dropdown-menu's. Add an empty callback function.
//Inside of the callback function, use a jQuery method to make the drop-down menu disappear.

$(document).ready(()=>{
$('#cart').on('click', () => {
   $('#cartMenu').show();
});
$('#account').on('click', () => {
   $('#accountMenu').show();
});
$('#help').on('click', () => {
    $('#helpMenu').show();
});
$('.dropdown-menu').on('mouseleave', () => {
  $('.dropdown-menu').hide();
});

})
 

