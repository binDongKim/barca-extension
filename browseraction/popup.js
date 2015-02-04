(function ($) {
  $(function () {
    $('#form-expression').submit(function (ev) {
      var expression = $('#expression').val();
      $.post('http://localhost:8000/expressions', { expression: expression }, function (data) {
        console.log(data);
      });
      ev.preventDefault();
    });
  });
})(jQuery);
