(function ($) {
  $(function () {
    $('#form-expression').submit(function (ev) {
      var expression = $('#expression').val();
      if (! expression)
      {
        swal('Content required!');
      }
      else
      {
        $.post('http://localhost:8000/expressions', { expression: expression }, function (res) {
          if (res === 'Success') {
            swal('Added!');
          } else {
            swal('Something wrong!');
          }
        }).fail(function () {
          swal('Run Server first!');
        });
      }
      return ev.preventDefault() && false;
    });

    $('[data-clean-button]').click(function (ev) {
      var $div = $('[data-english-form]').find('div .active');
      $div.find('input').val('');
      $div.find('textarea').val('');
    });
  });
})(jQuery);
