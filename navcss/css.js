if (Meteor.isClient) {
  Template.css.onRendered(function(){
    $(document).ready(function(){
      $('.cssColor').on('click',function(){
        var cssColor = $(this).css('background-color');
        $('#result').html('You choose '+cssColor+',');
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


 //******Below is used to make a float div*****

   window.onscroll=function(){

    if ($(document).scrollTop() > 250)

    {

    //$("#pf_nav").show();

    $(".bs-docs-sidebar").addClass('float');

    }else{

    //$("#pf_nav").hide();

    $(".bs-docs-sidebar").removeClass('float');

    }

    }


   


  });
}
