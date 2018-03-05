//=include libs/jquery.min.js
//=include libs/rateit.js

$( document ).ready(() => {
  const audioWrap = $('.ringtone__icon');

  for (let i = 0; i < audioWrap.length; i += 1) {
    const el = audioWrap[i];
    $(el).click(function (event) {
      event.stopPropagation();
      const audio = $(this).find('.ringtone__audio')[0];

      if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
        $(el).addClass('is-played');

      } else {
        audio.pause();
        $(el).removeClass('is-played');
      }
    });
  }
});
