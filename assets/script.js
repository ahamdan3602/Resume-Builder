//form repeater
$(document).ready(function() {
    $('.repeater').repeater({
        initEmpty: true,
        defaultValues: {
            'text-input': ''
        },
        show: function() {
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                // generateCV()
            }, 500);
        },
        isFirstItemUndeletable: false
    });
});