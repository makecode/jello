//=include libs/jquery.min.js
//=include libs/rateit.js

$( document ).ready(() => {
  const openedMenuClass = 'menu-opened';
  const $audioWrap = $('.ringtone__icon');
  const $menuContainer = $('#with-service');
  const $dropDownMenu = $('.dropdown-menu');
  const $mobileDropMenu = $('#with-services');
  const $mobileDrop = $('.dropdown-mobile');

  for (let i = 0; i < $audioWrap.length; i += 1) {
    const el = $audioWrap[i];
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

  // hamburger-menu
  $('#hamburger').on('click',function() {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('is-open')
  });

  // mobile search
  $('#btn-search-mobile').on('click',function () {
    $('#header').toggleClass('search-opened');
  });

  //dropdown-menu
  $menuContainer.on('click',function () {
    $menuContainer.toggleClass(openedMenuClass);
  });

  // Close menu when clicked outside of this menu
  document.addEventListener('click', e => {
    const isClickOnOutside = $menuContainer.has(e.target).length === 0;

    isClickOnOutside && $menuContainer.removeClass(openedMenuClass);
  });

  $mobileDropMenu.on('click',function () {
    $mobileDrop.toggleClass('is-open')
  });

});


