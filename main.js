$(document).ready(function(){
  var $content = $('.content');
  $.ajax({
    type: 'GET',
    url: 'testAPI.php',
    success: function(people){
      $.each(people,function(i,person){
          $content.append(person.name+' goes to '+person.school+'. He is '+person.age+' years old. Does he like bagels? '+person.bagels+'.</br>');
      });
      }
    });

}); //end of jQ
