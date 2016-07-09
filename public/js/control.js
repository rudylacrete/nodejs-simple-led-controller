$(document).ready(function() {
  $(".btnLed").click(function() {
    $.get('/' + $(this).data('action'));
  });
});