(function ($) {
  $(function () {
    $('[data-english-form]').submit(function (ev) {
      var $div = $(this).find('div .active');
      var divId = $div.attr('id');
      switch (divId) {
        case 'words':
        case 'expressions':
        case 'ask-to-briana':
          var content = $div.find('textarea').val();
          if (! content)
          {
            swal('Content required!');
          }
          else
          {
            $.post('http://localhost:8000/expressions', { content: content, id: divId }, function (res) {
              if (res === 'Success') {
                swal('Added!');
              } else {
                swal('Something wrong!');
              }
            }).fail(function () {
              swal('Run Server first!');
            });
          }
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
