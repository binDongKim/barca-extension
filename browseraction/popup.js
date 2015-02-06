(function ($) {
  $(function () {
    $('#form-expression').submit(function (ev) {
      var expression = $('#expression').val();
      $.post('http://localhost:8000/expressions', { expression: expression }, function (res) {
        if (res === 'Success') {
          swal('Added!');
        } else {
          swal('Something wrong!');
        }
      }).fail(function() {
        swal('Run Server first!');
      });
      ev.preventDefault();
    });
  });
})(jQuery);
