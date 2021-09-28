$(document).ready(function(){
   $(window).scroll(function(){
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }
       else{
            $('.navbar').removeClass("sticky");
       }
       if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
       }
       else{
            $('.scroll-up-btn').removeClass("show");
       }
   });

   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
   });   

   //toogle button navbar script
   $('.btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.btn i').toggleClass("active");
   });

   //knowledge hover script
   $('.skills .skills-content .right .line:nth-child(1)').hover(function(){
       $('.skills .skills-content .right .html-line').toggleClass("active");
   });
   $('.skills .skills-content .right .line:nth-child(2)').hover(function(){
       $('.skills .skills-content .right .css-line').toggleClass("active");
   });
   $('.skills .skills-content .right .line:nth-child(3)').hover(function(){
       $('.skills .skills-content .right .javascript-line').toggleClass("active");
   });
   $('.skills .skills-content .right .line:nth-child(4)').hover(function(){
       $('.skills .skills-content .right .python-line').toggleClass("active");
   });
   $('.skills .skills-content .right .line:nth-child(5)').hover(function(){
       $('.skills .skills-content .right .java-line').toggleClass("active");
   });

   //owl-carousel script
   
});