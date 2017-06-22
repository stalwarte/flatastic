
jQuery(document).ready(function() {
    jQuery('div.messages').append('<i class="icon-cancel message-close"></i>');
    jQuery('body').on('click','.icon-cancel.message-close',function(){
        jQuery(this).parent().animate({
            'opacity':'0'
        },function(){
            jQuery(this).slideUp();
        });
    });
    // Add class contact form
    jQuery('.contact-form .form-text,.contact-form .form-textarea').addClass('f_size_medium m_bottom_10 r_corners full_width');
    jQuery('.contact-form .form-submit').addClass('m-top-20 button_type_4 r_corners mw_0 tr_all_hover color_dark bg_light_color_2');

    // Add class newsletter form
    jQuery('.block-newsletter .form-submit').addClass('m-top-20 button_type_8 r_corners bg_scheme_color color_light tr_all_hover');

    //Add class menu
    jQuery('.main_menu .active').parent().addClass('current');
    jQuery('.main_menu .active').removeClass('active');

    var container = jQuery('.slider-revolution');
    container.find('.tp-leftarrow').append('<i class="fa fa-angle-left"></i>');
    container.find('.tp-rightarrow').append('<i class="fa fa-angle-right"></i>');

    // Out of Stock
    jQuery('.out-of-stock').val('Out of Stock');

	jQuery('.pager-load-more .next a').html('Load More');

    //Menu Carousel
    jQuery('.menu-carousel').owlCarousel({
        loop:true,
        margin:10,
        navigation:true,
        navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoPlay:false,
        singleItem:true,
        autoHeight : true
    });
   //Responsive :

    jQuery('.dropdown-toggle').on('click', function(event) {
        event.preventDefault();
        jQuery(this).siblings('.tb-megamenu-submenu').toggleClass('m-open');
        jQuery(this).parent().toggleClass('m-icon');
    });


});
/*jQuery(window).onload(function(){

});*/

function viewCarousel(quick_view_product_id){
//    alert(quick_view_product_id);
    var pr = jQuery('#'+quick_view_product_id+' .qv_preview > img');
//    $('.popup_wrap .qv_carousel').on('click','li:not(.active)',function(){
            jQuery(this).addClass('active').parent().siblings().children('li').removeClass('active');
            var src = jQuery(this).data('src');
            if(!(jQuery('html').hasClass('ie9'))){
                    pr.addClass('hide');
                    setTimeout(function(){
                            pr.attr('src',src).removeClass('hide');
                    },400);
            }else{
                    pr.attr('src',src);
            }
            jQuery('#'+quick_view_product_id+' [class*="qv_carousel"]').each(function(){
                    var pr = jQuery(this).closest('.qv_carousel_wrap').prev('.qv_preview').children('img');
                    jQuery(this).on('click','li',function(){
                            var src = jQuery(this).data('src');
                            if(!(jQuery('html').hasClass('ie9'))){
                                    pr.addClass('hide');
                                    setTimeout(function(){
                                            pr.attr('src',src).removeClass('hide');
                                    },400);
                            }else{
                            pr.attr('src',src);
                            }
                    });
            });
//    });
}
(function($){
    $(document).ready(function(){
        var wW = $(window).width();
        $('#block-menu-menu-taxonomy-menu .categories_list > li:first-child > a').click();
        $('.view-product-interior-style-2 .views-row-even .col-sm-6:first-child').addClass('col-sm-push-6');
        $('.view-product-interior-style-2 .views-row-even .col-sm-6:last-child').addClass('col-sm-pull-6');
        //Scrool To
        $('nav#navigation-onepage a[href*=#]:not([href=#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('.sect_' + this.hash.slice(1));
                if (target.length) {
                    var scrollto = target.offset().top - 170;
                    $('html,body').animate({
                        scrollTop: scrollto
                    }, 1000);
                    return false;
                }
            }
        });
        $('.contact-wrapper .align-center a[href*=#]:not([href=#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('.sect_' + this.hash.slice(1));
                if (target.length) {
                    var scrollto = target.offset().top - 170;
                    $('html,body').animate({
                        scrollTop: scrollto
                    }, 1000);
                    return false;
                }
            }
        });
        var stickyNavTop = $('body').offset().top;
        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop && !$('.h-onepage').hasClass('fixed_header')) {
                $('.op-header').addClass('fixed_header');
                $('.h_top').addClass('fixed_header');

            } else if (scrollTop <= stickyNavTop + 15) {
                $('.h_top').removeClass('fixed_header');
                $('.op-header').removeClass('fixed_header');
            }
        };

        if ($('.h-onepage').length > 0) {
            $(window).scroll(function () {
                stickyNav();
            });
        }
        $('.navigation-onepage a').on('click', function() {
            $('.navigation-onepage a').removeClass('current');
            $(this).addClass('current');

        });
//reponsive menu onepage
        $('.b-onepage').click(function(){
            $('.navigation-onepage').toggle(800);
            $(this).toggleClass('active');

        });

    //  $('.pane-title').wrap('<div class="featured_wrap"><span>');
      $('.view-id-product_block .view-header h2').wrap('<div class="featured_wrap"><span>');
      $('.view-id-product_block .featured_wrap span').after('<p>Chettinad Cotton saree with hand embroidered readymade blouse</p>');

      $('#block-views-testimonial-block-1 .view-header h2').wrap('<div class="featured_wrap"><span>');
      $('#block-views-testimonial-block-1 .featured_wrap span').after('<p>Chettinad Cotton saree with hand embroidered readymade blouse</p>');



      // Keep only 3 featured collections
      if(wW > 768) {
        $('.view-display-id-block_featured .products_container > div:gt(2)').hide();
        $('.view-display-id-block_featured .products_container').append('<div class="glass_wrap"><div class="glass_inner_wrap"><div class="text_block"><h1>SpatikaSarees</h1><h3>Featured Collections</h3><a class="exploreBtn" href="#">Explore the collection</a></div><ul class="cat_list"><li><a href="/shop/cotton">Cotton</a></li><li><a href="/shop/silk">Silk</a></li><li><a href="/shop/silk-cotton">Silk Cotton</a></li></ul></div></div>');
      }


    //  var placeQuantity = $('.product_quick_view .p-quantity').detach();
    //   $('.field-name-commerce-price').append(placeQuantity);

      // var cat_list = '';
      // $('.tb-megamenu-nav li:first-child').find('.tb-megamenu-submenu .level-1 li').each(function() {
      //   cat_list+= <$(this).context.innerHTML;
      // });
      //
      // console.log(cat_list, $('.glass_wrap .glass_inner_wrap a.exploreBtn:hover .cat_list').length);
      // $('.glass_wrap .glass_inner_wrap a.exploreBtn:hover .cat_list').append(cat_list);


      $('.glass_wrap .glass_inner_wrap a.exploreBtn').mouseover(function() {
        $('.cat_list').css({
          'margin-top': '15px',
          'opacity': 1
        });
      }).mouseleave(function() {
        $('.cat_list').css({
          'margin-top': '15px',
          'opacity': 1
        });
      });

      $('.glass_wrap').mouseleave(function() {
        console.log('hi');
        $('.cat_list').css({
          'margin-top': '0px',
          'opacity': 0
        });
      });

      $('#product_block-block_new_collection .photoframe').removeClass('shadow');
      // $('#product_block-block_new_collection figure').removeClass('photoframe');

      // Nav fix
      $('.tb-megamenu-nav > li:last-child, .not-front .tb-megamenu-nav > li').addClass('active');

       var banner_wrap = $('#block-views-image-product-category-block').detach();
       //alert(banner_wrap);
      // $('.breadcrumbs').append(banner_wrap);
      $('<div class="new_header"></div>').insertAfter('.breadcrumbs');
      $('.new_header').append(banner_wrap);

      // Falls custom_checkBox
      var isChecked = false;
      $('.falls').on('click', function() {
        isChecked = $(this).find('.falls_Check').attr('aria-hidden');
        console.log(isChecked, 'test');
        if (isChecked === "true") {
          console.log(isChecked);
          $(this).find('.falls_Check').attr('aria-hidden', !isChecked);
          $('.defaultFalls .attribute-widgets .form-radios input').eq(0).trigger('click');
          isChecked = false;
        } else {
          isChecked = true;
          $(this).find('.falls_Check').attr('aria-hidden', isChecked);
          $('.defaultFalls .attribute-widgets .form-radios input').eq(1).trigger('click');

        }
      });


      //Stiching checkbox
      var isStichingChecked = false;
      $('.stiching').on('click', function() {
        isStichingChecked = $(this).find('.stiching_Check').attr('aria-hidden');
        if (isStichingChecked === "true") {
          $(this).find('.stiching_Check').attr('aria-hidden', !isStichingChecked);
          isStichingChecked = false;
        } else {
          isStichingChecked = true;
          $(this).find('.stiching_Check').attr('aria-hidden', isStichingChecked);
          $('.custom-popup-cover').fadeIn();
        }
      });


    $(document).keydown(function(e) {
          if (e.keyCode == 27) {
              $('.custom-popup-cover').fadeOut();
          }
      });

      // PopUp
      $('body').append('<div class="custom-popup-cover"><div class="custom_popup"><div class="custom_pop_wrap"><h1>SpatikaSarees</h1><div class="message_pop">Thankyou!! <br> We will contact you within 24 hrs</div><i class="fa fa-window-close" aria-hidden="true"></i></div></div></div>');
      $('.custom-popup-cover').on('click', function() {
        $(this).fadeOut();
      });



  if(wW < 768) {
    var detachHeaderNav = $('.users_nav').children().detach();
    $('.tb-megamenu-nav').append(detachHeaderNav);

    var menuDetach = $('.menu_wrap').detach();
    $('.s_form_wrap_2').prepend(menuDetach).append('<a href="tel:+919940144790"><i class="fa fa-phone" aria-hidden="true"></i></a>');
    $('.h_top_part').hide();

    jQuery('<div class="glass_wrap"><div class="glass_inner_wrap"><div class="text_block"><h1>SpatikaSarees</h1><h3>Featured Collections</h3><a class="exploreBtn" href="#">Explore the collection</a></div><ul class="cat_list"><li><a href="/shop/cotton">Cotton</a></li><li><a href="/shop/silk">Silk</a></li><li><a href="/shop/silk-cotton">Silk Cotton</a></li></ul></div></div>').insertAfter('.panel-pane:first-child');
  }

  if($('.message .container .status').length > 0) {
    // $('.message').fadeIn();
  }

    $('.message-close').on('click', function() {
      if($(this).parent().hasClass('messages')) {
        $('.message').first().fadeOut();
      }
    });
    });


})(jQuery);
