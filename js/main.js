!function(n){"use strict";var e,l,t,a,i,o,s,c,r,d=800,u="https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc",m=n(window);document.documentElement.setAttribute("data-useragent",navigator.userAgent);n("html").addClass("cl-preload"),m.on("load",function(){n("#loader").fadeOut("slow",function(){n("#preloader").delay(300).fadeOut("slow")}),n("html").removeClass("cl-preload"),n("html").addClass("cl-loaded")}),e=n(".header-menu-toggle"),m.on("scroll",function(){150<m.scrollTop()?e.addClass("opaque"):e.removeClass("opaque")}),s=n(".header-menu-toggle"),c=n(".header-nav").find(".header-nav__close"),r=n("body"),n("section, footer"),s.on("click",function(e){e.preventDefault(),r.toggleClass("menu-is-open")}),c.on("click",function(e){e.preventDefault(),s.trigger("click")}),r.on("click",function(e){n(e.target).is(".header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span")||r.removeClass("menu-is-open")}),l=[],t=n(".pswp")[0],(c=n(".item-folio")).each(function(e){var a=n(this),t=a.find(".thumb-link"),i=a.find(".item-folio__title"),a=a.find(".item-folio__caption"),i="<h4>"+n.trim(i.html())+"</h4>",o=n.trim(a.html()),s=t.attr("href"),t=t.data("size").split("x"),s={src:s,w:t[0],h:t[1]};0<a.length&&(s.title=n.trim(i+o)),l.push(s)}),c.each(function(a){n(this).on("click",function(e){e.preventDefault(),new PhotoSwipe(t,PhotoSwipeUI_Default,l,{index:a,showHideOpacity:!0}).init()})}),c=n(".s-stats"),a=n(".stats__count"),c.waypoint({handler:function(e){"down"===e&&a.each(function(){var a=n(this);n({Counter:0}).animate({Counter:a.text()},{duration:4e3,easing:"swing",step:function(e){a.text(Math.ceil(e))}})}),this.destroy()},offset:"90%"}),(i=n(".masonry")).imagesLoaded(function(){i.masonry({itemSelector:".masonry__brick",resize:!0})}),i.imagesLoaded().progress(function(){i.masonry("layout")}),n(".testimonials__slider").slick({arrows:!1,dots:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,pauseOnFocus:!1,autoplaySpeed:1500,responsive:[{breakpoint:900,settings:{slidesToShow:1,slidesToScroll:1}}]}),n(".smoothscroll").on("click",function(e){var a=this.hash,t=n(a);e.preventDefault(),e.stopPropagation(),n("html, body").stop().animate({scrollTop:t.offset().top},d,"swing").promise().done(function(){n("body").hasClass("menu-is-open")&&n(".header-menu-toggle").trigger("click"),window.location.hash=a})}),n("input, textarea, select").placeholder(),n(".alert-box").on("click",".alert-box__close",function(){n(this).parent().fadeOut(500)}),AOS.init({offset:200,duration:600,easing:"ease-in-sine",delay:300,once:!0,disable:"mobile"}),n("#mc-form").ajaxChimp({language:"es",url:u}),n.ajaxChimp.translations.es={submit:"Submitting...",0:'<i class="fas fa-check"></i> We have sent you a confirmation email',1:'<i class="fas fa-exclamation-circle"></i> You must enter a valid e-mail address.',2:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',3:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',4:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',5:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.'},o=n(".cl-go-top"),n(window).on("scroll",function(){500<=n(window).scrollTop()?o.fadeIn(400):o.fadeOut(400)})}(jQuery);