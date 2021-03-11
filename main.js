//Prima soluzione

var btn = $("a > i");
var hamburger = $(".hamburger-menu");
var visible = false;

btn.click(
    function() {
        if(visible == false){
            hamburger.show("500");
            visible = true;
        } else {
            hamburger.hide("500");
            visible = false;
        }
    }
);


//Seconda Soluzione

// var btn = $("a > i");
// var hamburger = $(".hamburger-menu");

// btn.click(
//     function() {
//        hamburger.toggleClass("active");  
//     }
// );