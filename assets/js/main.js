(function($) {
  $(".oxygen-toolbar-button-dropdown").append(
    '<a href="' +
      document.location.origin +
      "/wp-admin/edit.php?post_type=ct_template" +
      '" class="oxygen-toolbar-button-dropdown-option">Templates</a>'
  );
})(jQuery);
