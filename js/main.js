$(document).ready(function()
{
  $(window).resize(function()
  {
    $('.main-container').css(
    {
      position: 'absolute'
    });

    $('.main-container').css(
    {
      left: ($(window).width() - $('.main-container').outerWidth()) / 2,
      top: ($(window).height() - $('.main-container').outerHeight()) / 2
    });
  });

  // call `resize` to center elements
  $(window).resize();
});
