jQuery(document).ready(function() {
        jQuery(".toggle-cat-list").on("click", function(e) {
            e.preventDefault();
            jQuery(".cat-list-menu").slideToggle(600);
        })
        jQuery(".toggle-cat-list").on("blur", function() {
            jQuery(".cat-list-menu").slideUp(600);
        })
    });
