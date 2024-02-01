// Toggle Menu 
$(document).ready(function(){
    $(".toggle-menu").click(function(){
        $(".dropdown").addClass("display-block")
        $(".toggle-overlay").addClass('visible')
        $("body").addClass('overflow')
    }),
    $(".cancel-btn").click(function(){
        $(".dropdown").removeClass("display-block")
        $(".toggle-overlay").removeClass('visible')
        $("body").removeClass('overflow')
    })
})

// Input Label 
$(document).ready(function(){
    $(".f-input").click(function(){
        $(".f-input input").addClass("input-border")
        $(".f-label").addClass("label-top")
    }),
    $(".f-input").focusout(function(){
        $(".f-input input").removeClass("input-border")
        $(".f-label").removeClass("label-top");
    })
})

// Filters 

$(document).ready(function(){
    $(".filter-1-btn").click(function(){
        $(".drop-content-1").toggleClass("opacity-1")
    })
    $(".filter-1-btn").focusout(function(){
        $(".drop-content-1").removeClass("opacity-1")
    })
})
$(document).ready(function(){
    $(".filter-2-btn").click(function(){
        $(".drop-content-2").toggleClass("opacity-1")
    })
    $(".filter-2-btn").focusout(function(){
        $(".drop-content-2").removeClass("opacity-1")
    })
})

// Mobile-filter
$(document).ready(function(){
    $(".sort-by").click(function(){
        $(".m-drop-content-1").addClass("m-block")
        $(".filter-overlay").addClass("f-opacity")
    }),
    $(".cancel-drop").click(function(){
        $(".m-drop-content-1").removeClass("m-block")
        $(".filter-overlay").removeClass("f-opacity")
    })
})
$(document).ready(function(){
    $(".filter-by").click(function(){
        $(".m-drop-content-2").addClass("m-block")
        $(".filter-overlay").addClass("f-opacity")
    }),
    $(".cancel-drop").click(function(){
        $(".m-drop-content-2").removeClass("m-block")
        $(".filter-overlay").removeClass("f-opacity")
    })
})

// Accordian 
$(document).ready(function () {
    $(".at-title").click(function () {
      $(this).toggleClass("active").next(".at-tab").slideToggle().parent().siblings().find(".at-tab").slideUp().prev().removeClass("active");
    });
  });
  
//   Customer Review form 

$(document).ready(function(){
    $('.button-box button').click(function(){
        $('.cr-main-form').toggleClass('com-display-block')
        $('.cancel-war-btn').addClass('com-display-block')
        $('.war-btn').addClass('com-display-none')

        // $('.cr-main-form').removeClass('com-display-block')
        // $('.cancel-war-btn').removeClass('com-display-block')
    })
    $('.cancel-war-btn').click(function(){
        $('.war-btn').removeClass('com-display-none')
        $('.cancel-war-btn').removeClass('com-display-block')
    })
})

// Sticky Header

$(window).scroll(function(){
if($(window).scrollTop()>1000){
    $('.sticky-pro').fadeIn();
}
else{
    $('.sticky-pro').fadeOut();
}
})