$(document).ready(function () {
  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Form submission event
  $("#submit").click(function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const message = $("#message").val();

    // Validate email
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return; // Stop form submission
    }

    // Additional validation can be added here if needed

    // If all validations pass, you can proceed with form submission
    // You can use AJAX to submit the form data to your server
    // Example: $.post("your_server_url", { name, email, subject, message }, function(data) { ... });

    // Clear form fields (or you can redirect to a thank you page)
    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("");

    alert("Message sent successfully!...this is for demo");
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //toogle button navbar script
  $(".btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".btn i").toggleClass("active");
  });

  //knowledge hover script
  $(".skills .skills-content .right .line:nth-child(1)").hover(function () {
    $(".skills .skills-content .right .html-line").toggleClass("active");
  });
  $(".skills .skills-content .right .line:nth-child(2)").hover(function () {
    $(".skills .skills-content .right .css-line").toggleClass("active");
  });
  $(".skills .skills-content .right .line:nth-child(3)").hover(function () {
    $(".skills .skills-content .right .javascript-line").toggleClass("active");
  });
  $(".skills .skills-content .right .line:nth-child(4)").hover(function () {
    $(".skills .skills-content .right .python-line").toggleClass("active");
  });
  $(".skills .skills-content .right .line:nth-child(5)").hover(function () {
    $(".skills .skills-content .right .java-line").toggleClass("active");
  });
  $(".skills .skills-content .right .line:nth-child(6)").hover(function () {
    $(".skills .skills-content .right .react-line").toggleClass("active");
  });

  //owl-carousel script
});
