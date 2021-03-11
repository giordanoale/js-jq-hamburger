var btn = $("a > i");
var hamburger = $(".hamburger-menu");
var visible = false;

btn.click(
    function() {
        if(visible == false){
            hamburger.show();
            visible = true;
        } else {
            hamburger.hide();
            visible = false;
        }
    }
);