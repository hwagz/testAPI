$(document).ready(function(){
  var $content = $('.content');
  var $click = $('.click');

  function getPerson(){
    var personID = $click.html();
    if(personID){
      $.ajax({
        type: 'GET',
        url: 'testAPI.php',
        success: function(people){
          if(Object.keys(people).length <= personID){
            $content.empty();
            $content.append('ID does not exist.');
          }
          else{
            $.each(people,function(i,person){
                if(person.id==personID){
                  $content.empty();
                  $content.append(person.name+' goes to '+person.school+'. He is '
                  +person.age+' years old. Does he like bagels? '+person.bagels+'.</br>');
                }
            });
          }
          }
        });
    }
  };
  $click.on('click',getPerson);

}); //end of jQ
