if (Meteor.isClient) {
  Template.navbar.onRendered(function(){
        $('.color-block').on('click',function(){
          var color = $(this).css('background-color');
          $('.navbar').find('a').css('background-color',color);
        });
  });
}