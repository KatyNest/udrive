$(function(){
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: false,       // default
      live: true        // default
    }
  )
  wow.init();
  $('.price-item__select').each(function () {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
    //  selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
      class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });  

  $(".reviews-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

    ]
  });


  window.onscroll = function () { headerFixedFunction() };

  // Get the header
  var header = document.getElementById("header-top");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function headerFixedFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    }
    else {
      header.classList.remove("sticky");
    }
  }
  $(".menu-btn").on("click", function () {
    $('.mobile-menu').toggleClass("active");
  });

  $(".menu__link").on("click", function () {
    if (!($(this).hasClass('active'))) {
      $('.menu__link').removeClass('active');
      $(this).addClass('active');
      $('.mobile-menu').removeClass('active');
    }
  });


  if (screen.width <= 768) {

    $(".price-items").slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  
  if (screen.width <= 648) {
    $(".how-options").slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  $(".lazy").Lazy();
})