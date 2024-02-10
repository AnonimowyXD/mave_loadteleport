$(document).ready(function(){
    // Hide/show ui function.
    function display(bool) {
        if (bool) {
            $("body").show();
        } else {
            $("body").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {

        // open breathalyzer if message is open.
        var item = event.data;
        if (item.type === "open") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    });
});