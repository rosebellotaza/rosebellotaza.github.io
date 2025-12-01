
$(document).ready(function() {
    setTimeout(function() {
        $(".se-pre-con").fadeOut(600, function() {
            $("body").css("background", "#bd5d38");
            window.location.href = "main.html"; //path padung sa signin.html human splash screen ni
        });
    }, 3000); // Splash screen display duration, e change lang if gusto ug longer pa
});



