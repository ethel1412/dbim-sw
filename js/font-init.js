jQuery(document).ready(function () {
    $.creaseFont();
});

$(window).keydown(function (e) {
    switch (e.keyCode) {
        case 107:
            $('#fontLarge').click();
            return false;

        case 109:
            $('#fontSmall').click();
            return false;
    }
});