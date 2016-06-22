$(document).ready(function(){
  $('#play').click(function(){
    $('body').attr('class','starting-game');
  });

  $('#instruct').click(function(){
    $('#modal-instruct').addClass('show');
  });

  $('.modal').each(function(){
    var $modal = $(this);
    $(this).find('.modal-back').click(function(){
      $modal.removeClass('show');
    });
    $(this).find('.modal-close').click(function(){
      $modal.removeClass('show');
    });
  });
});
