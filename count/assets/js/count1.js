/*js file*/
$(function(){

  var count = 0;
  var $inc = $(".increment");

  function countUp(){
    count = count + 1;
    console.log(count);
  }

  countUp();



})//end function
$(function(){
    $('.soldout:after').click(function(){
       return false;
    })
});
