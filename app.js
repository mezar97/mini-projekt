
$(function () {
    $('form').submit(function (event){
        event.preventDefault();
        var color = $ ('#color').val();

        $('.background').css('background-color',color);

 });        

     $("#hide").click(function(){
     $(".show-hide").hide();
});
    $("#show").click(function(){
    $(".show-hide").show();
});
 });
 
     $('.click').on('click',function() {
    
    $('.remove').remove(); 

});


function myFunction() {
    var person = prompt("Please enter your name", " ");
    if (person != null) {
        document.getElementById("you").innerHTML =
        "";
    }
}


