$(document).ready(function () {
  $("#signupBtn").click(function () {
    $("#main").animate({ left: "22.5%" }, 400);
    $("#main").animate({ left: "30%" }, 400);

    $(".login").css("visibility", "hidden");
    $(".login").animate({ left: "25%" }, 400);

    $(".signup").animate({ left: "17%" }, 400);
    $(".signup").animate({ left: "30%" }, 500);
    $(".signup").css("visibility", "visible");
  });

  $("#loginBtn").click(function () {
    $("#main").animate({ left: "77.5%" }, 400);
    $("#main").animate({ left: "70%" }, 500);

    $(".signup").css("visibility", "hidden");
    $(".signup").animate({ left: "75%" }, 400);

    $(".login").animate({ left: "83.5%" }, 400);
    $(".login").animate({ left: "70%" }, 500);
    $(".login").css("visibility", "visible");
  });
});
