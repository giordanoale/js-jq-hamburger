var btn = $("a > i");
var hamburger = $(".hamburger-menu");
var visible = false;


//Prima soluzione

// btn.click(
//     function() {
//         if(visible == false){
//             hamburger.show("500");
//             visible = true;
//         } else {
//             hamburger.hide("500");
//             visible = false;
//         }
//     }
// );


//Seconda Soluzione

btn.click(
    function() {
        if(visible == false){
            hamburger.addClass("active");
            visible = true;
        } else {
            hamburger.removeClass("active");
            visible = false;
        }
    }
);