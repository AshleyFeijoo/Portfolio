
  $(document).ready(function () {
    $(function () {
      $('[data-toggle="popover"]').popover()
      })
      $("#modalBtn").click(function (e) { 
        e.preventDefault();
        $('#centralModalSuccess').modal();
        $('#centralModalSuccess').on('hidden.bs.modal', function (e) {
          e.preventDefault();
          $("#contactForm").addClass('animated bounceOutLeft');
          $('#contactForm').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
            $("#contactForm").toggle(100, function(){
              $( "#submittedForm" ).removeClass('d-none');
              $( "#submittedForm" ).addClass("d-block animated bounceInRight");
            });
            // $("#submittedForm").css('display', 'block');
           

           
          });
          
          })


        
      });
  });