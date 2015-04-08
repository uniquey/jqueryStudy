if (Meteor.isClient) {
  Template.navbar.onRendered(function(){
    $(document).ready(function(){
      $('.color-block').on('click',function(){
        var color = $(this).css('background-color');
        $('.navbar').css('background-color',color);
        $('#result').html('You choose'+color+',');
      });
    });
  });
}