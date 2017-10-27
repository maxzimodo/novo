window.addEventListener("load", function(){
    //wow
    new WOW().init();
    //preloader
    var load_screen = document.getElementById("load_screen");
    load_screen.style = 'opacity: 0;';
    function removePreloader() {
        document.body.removeChild(load_screen);
    }
    var transitionTime = parseFloat(window.getComputedStyle(load_screen,null).getPropertyValue("transition-duration")) * 1000;
    setTimeout(removePreloader, transitionTime);
});

//parallax
$('.parallax-window').parallax({imageSrc: 'img/main_pic2.jpg'});

//remove hover on mobile
function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}
if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

//scrolltoid
$('#lookfor').click(function(){
    $("html, body").animate({ scrollTop: $('#form').offset().top }, 2000);
});


//buttons animation
// var telephone = $('#telephone');
// setInterval(function(){ buzzing() }, 4000);

// function buzzing(){
//     telephone.addClass('phone-buzz');
//     setTimeout(function(){ telephone.removeClass('phone-buzz'); }, 1000);
// };



