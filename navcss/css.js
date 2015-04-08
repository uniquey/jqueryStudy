if (Meteor.isClient) {
  Template.css.onRendered(function(){
    $(document).ready(function(){
      $('.cssColor').on('click',function(){
        var color = $(this).css('background-color');
        $('#result').html('You choose '+color+',');
      });
      $('.cssCss2')
        .on('mouseenter',function(){
          $(this).css({
            'background-color' : 'yellow' , 
            'font-weight' : 'bolder'
          });
        })
        .on('mouseleave',function(){
          var styles={
            backgroundColor: '#ddd',
            fontWeight:''
          };
          $(this).css(styles);
        })
    

    });
  });
}
