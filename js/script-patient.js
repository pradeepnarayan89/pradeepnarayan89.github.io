function toggleAccordion(o){$=jQuery;var e=document.getElementsByClassName("accordion-item"),i=$(o).closest(".accordion-item");if(i.hasClass("active"))i.removeClass("active");else{for(var t=0;t<e.length;t++)e[t].classList.remove("active");i.addClass("active")}}function disableScroll(o){console.log("disableScroll"),$("body").addClass("stop-scrolling"),window.lastScroll={x:window.scrollX,y:window.scrollY},$("body").css("position","fixed")}function enableScroll(o){console.log("enableScroll"),$("body").removeClass("stop-scrolling"),$("body").css("position","static"),window.hasOwnProperty("lastScroll")&&window.scrollTo(window.lastScroll.x,window.lastScroll.y)}function isLandscape(){return $(window).innerWidth()>$(window).innerHeight()}!function(l){var i=0,t=!1,n=0,a=[],e=(function(){for(var o,e=[],i=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),t=0;t<i.length;t++)o=i[t].split("="),e.push(o[0]),e[o[0]]=o[1]}(),{uAString:function(){return navigator.userAgent},isAndroidMobile:function(){return-1<e.uAString().indexOf("Android")&&-1<e.uAString().indexOf("Mozilla/5.0")&&-1<e.uAString().indexOf("AppleWebKit")},regExAppleWebKit:function(){return new RegExp(/AppleWebKit\/([\d.]+)/)},resultAppleWebKitRegEx:function(){return e.regExAppleWebKit().exec(e.uAString())},appleWebKitVersion:function(){return null===e.resultAppleWebKitRegEx()?null:parseFloat(e.regExAppleWebKit().exec(e.uAString())[1])},isAndroidBrowser:function(){return e.isAndroidMobile()&&null!==e.appleWebKitVersion()&&e.appleWebKitVersion()<537},getAndroidOSVersion:function(){var o=e.uAString().match(/Android\s([0-9\.]*)/);return!!o&&o[1]}}),s=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);function r(){if(l("#navbarNav").hasClass("show")&&l(window).innerWidth()<=991)return!0;var o=l("#isi"),e=(l(window).height(),l("#pinned-isi").height(),o.offset().top-l(window).scrollTop()+l("#pinned-isi").innerHeight()-l("#bottom-nav > .container").innerHeight()-80);l(window).width(),e<=l(window).height()-l("#pinned-isi").height()&&"none"!==l("#pinned.isi").css("display")?(l("#pinned-isi").hide(),l("#isi").addClass("open")):(l("#pinned-isi").show(),l("#isi").removeClass("open")),l(window).scrollTop()>=e?l("#isi").find(".expand-button").addClass("expand-button-less").removeClass("expand-button-more"):l("#isi").find(".expand-button").addClass("expand-button-more").removeClass("expand-button-less")}function d(){l("#pinned-isi").hide(),l("#mobile-pinned-isi").hide(),l("#isi").addClass("open")}function c(){console.log("open full isi - page doesn't use fullpage.js, or is fullpage section in mobile"),i=l(window).scrollTop(),d();var o=l("#isi").offset().top;0===l(window).scrollTop()&&(o-=143),l("html, body").stop().animate({scrollTop:o},500,"swing",function(){setTimeout(function(){l("body").removeClass("up down").addClass("scrolling down")},1)})}function h(o){var e=o.offset().top;992<=l(window).width()?e-=144:l(".fullpage").length&&(e+=20),e=e<0?0:e,l("body").addClass("lock"),l("html, body").animate({scrollTop:e},1e3,function(){setTimeout(function(){l("body").removeClass("lock")},100)})}function u(){var o=window.innerWidth/6,e=new SplitText("#hero-text-1",{type:"words"}),i=window.innerWidth/2-e.elements[0].scrollWidth/2-o,t=l("#hero-text-2")[0],n=window.innerWidth/2-t.scrollWidth/2-o;(new TimelineMax).delay(.2).set("#hero-text-1",{visibility:"visible"}).addLabel("background-fade-in").addLabel("content-start","+=1").from("#hero-bg",8,{autoAlpha:0,scale:1.1,ease:Power1.easeOut},"background-fade-in").from("#cloud-left",14,{autoAlpha:0,x:"-=100px",ease:Power1.easeOut},"background-fade-in").from("#cloud-right",20,{autoAlpha:0,width:"900px",x:"+=320px",ease:Power1.easeOut},"background-fade-in").staggerFromTo(e.words,.3,{opacity:0,x:i},{opacity:1,x:i},.2,"content-start").fromTo("#hero-text-2",.5,{autoAlpha:0,x:n,y:200},{autoAlpha:1,x:n,y:0},"content-start+=1").from("#hiking-couple",3,{autoAlpha:0,y:30},"content-start+=3").to(e.words,2,{x:0},"content-start+=2",function(){e.revert()}).to("#hero-text-2",2,{x:0},"content-start+=2").from("#no-one-text",2,{autoAlpha:0,x:200},"content-start+=2").from("#combination-text",.5,{autoAlpha:0},"content-start+=4").from("#bratovi-cta",.2,{autoAlpha:0},"content-start+=4")}function o(){var o=l("#understanding").prop("checked")||l("#how").prop("checked")||l("#managing").prop("checked")||l("#staying").prop("checked")||l("#support").prop("checked"),e=l("#radio-patient").prop("checked")||l("#radio-caregiver").prop("checked"),i=!0;return o?l("#patForm-checkboxes-error").hide():(l("#patForm-checkboxes-error").show(),i=!1),e?l("#patForm-patcaregiver-error").hide():(l("#patForm-patcaregiver-error").show(),i=!1),!!i}function p(){return l.Deferred(function(){var o=this;l(".ui-dialog-bg-overlay").css("opacity",0).show();var e="#indicationDialog",i=l(e).data("options");i=Object.assign({create:function(){l('[data-toggle="tooltip"]').tooltip("hide");var o=l(e).parent().find(".ui-dialog-title");o.html(o.text()),disableScroll(window)},open:function(){l(this).mCustomScrollbar({scrollInertia:0}),setTimeout(function(){s&&l(".ui-dialog").each(function(){this.style.setProperty("top","15px","important")})},0)},close:function(){l(this).dialog("destroy"),enableScroll(window),l(".ui-dialog-bg-overlay").css("opacity",1).hide(),o.resolve()},maxWidth:.9*l(window).width(),resizable:!1,draggable:!1},i),l(e).dialog(i)})}function g(){var e=[];l("div.section").each(function(){var o={id:l(this).data("anchor"),text:l(this).data("tooltip")};e.push(o)}),scroll=l(this).scrollTop(),inview={index:0,text:e[0].text||""},l.each(e,function(o,e){var i;l("#"+e.id).offset().top<=scroll+(i=0,["#top-nav","#middle-nav","#bottom-nav","#navbarNav .dropdown-menu"].forEach(function(o,e){jQuery(o).is(":visible")&&(i+=jQuery(o).innerHeight())}),i)+1&&(inview.text=e.text,inview.index=o)}),l("#mobileSecondaryNav .current-section").html(inview.text),l("#"+l(".fullpage").attr("id")+"-dropdown .dropdown-menu-inner .dropdown-item:nth-child("+(inview.index+1)+")").addClass("active").siblings().removeClass("active")}0<=navigator.userAgent.search("Safari")&&navigator.userAgent.search("Chrome")<0&&(document.getElementsByTagName("BODY")[0].className+=" safari"),s&&(document.getElementsByTagName("BODY")[0].className+=" ios"),e.isAndroidMobile()&&(document.getElementsByTagName("BODY")[0].className+=" android"),l('[href="#isi"]').click(function(o){o.preventDefault(),c()}),l(".isi-header").click(function(){var o=l(this).closest(".isi-container").attr("id");i=i||0,l(".navbar-collapse").hasClass("show")&&l(".navbar-toggler").click(),"pinned-isi"==o||"mobile-pinned-isi"==o||"fp-mobile-pinned-isi"==o?c():l("body").hasClass("full-page-scrolling")||(l(window).animate({scrollTop:i},1e3),l("#pinned-isi").show(),l("#mobile-pinned-isi").show(),l("#isi").removeClass("open"))}),l('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href^="#tab"]').not('[href^="#isi"]').click(function(o){if(l(this).hasClass("dropdown-item"))h(l(l(this).attr("href")));else if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=l(this.hash);"#isi"===e.selector&&(i=l(window).scrollTop()),(e=e.length?e:l("[name="+this.hash.slice(1)+"]")).length&&(o.preventDefault(),l("html, body").animate({scrollTop:e.offset().top},1e3,function(){var o=l(e);if(o.focus(),o.is(":focus"))return!1;o.attr("tabindex","-1"),o.focus()}))}}),l(".open-video").click(function(){var o=l(this).data("video-src"),e=null;l("#videoPlayerDialog").dialog({create:function(){l(".ui-dialog-bg-overlay").show(),l(this).closest(".ui-dialog").css("max-width","calc(100% - 30px)"),t=!0,(e=videojs("video-dialog-player")).src(o),e.load(),e.play()},close:function(){l(".ui-dialog-bg-overlay").hide(),e&&(e.pause(),e.currentTime(0)),l(this).dialog("destroy"),t=!1},closeOnEscape:!1,resizable:!1,draggable:!1,width:800,height:410,modal:!0}),l(window).resize(function(){t&&l("#videoPlayerDialog").dialog("option","height","auto")})}),l("#share-your-story-submit-button").click(function(){console.log("clicked submit button");var s=l("#patient-share-your-story");s.parsley().validate(),s.parsley().isValid()&&(console.log("form is valid - sending query",s.serialize()),l.ajax({type:"POST",url:"/php/carespeak_form.php",data:s.serialize(),encode:!0,success:function(o,e,i){console.log("form submitted successfully");var t=JSON.parse(o.substr(0,o.length-4));if(console.log("Response",o,e,i,t),t.hasOwnProperty("success")&&t.success)if(991<l(window).innerWidth()){s.css("visibility","hidden"),l("#share-your-story-confirmation").addClass("show-desktop").show();for(var n=fp_getIScrollInstances(),a=0;a<n.length;a++)n[a].scrollTo(0,0)}else s.hide(),l("#share-your-story-confirmation").show(),l(window).animate({scrollTop:l("#share-your-story-confirmation").closest(".container").offset().top-l("#bottom-nav > .container").innerHeight()},1e3)},error:function(o,e,i){console.log("form error")}}))}),l("#sign-up-button").click(function(){var n=l("#pat-form");n.parsley().validate(),o(),n.parsley().isValid()&&o()?(console.log("form is valid - sending query",n.serialize()),l.ajax({type:"POST",url:"/php/carespeak_form.php",data:n.serialize(),encode:!0,success:function(o,e,i){console.log("form submitted successfully");var t=JSON.parse(o.substr(0,o.length-4));console.log("Response",o,e,i,t),t.hasOwnProperty("success")&&t.success&&(n.hide(),l("#sign-up-header").hide(),l("#sign-up-confirmation").show(),l(window).animate({scrollTop:l("#sign-up-top").offset().top-l("header").innerHeight()},1e3))},error:function(o,e,i){console.log("form error")}})):l('input[type="checkbox"]').click(function(){o()})}),l("#navbarNav").on("shown.bs.collapse",function(){d()}),l("#navbarNav").on("hidden.bs.collapse",function(){r()}),l(window).bind("pageshow",function(o){l("#article-patient_home").length&&o.originalEvent.persisted&&window.location.reload()}),l(document).ready(function(){r(),function(){for(var o=[".set-equal-height-1",".set-equal-height-2",".set-equal-height-3",".set-equal-height-4"],e=0,i=0;i<o.length;i++)l(o[i])&&l(o[i]).each(function(){l(this).css("height","auto")});for(i=0;i<o.length;i++)l(o[i])&&(l(o[i]).each(function(){l(this).height()>e&&(e=l(this).height())}),l(o[i]).each(function(){l(this).height(e)})),e=0}(),991<window.innerWidth?l("#article-patient_home").length&&l.when(p()).done(u):(l("#article-patient_home").length&&p(),l(".animatable").removeClass("animatable")),l(".container-two-thirds-left").prepend('<div class="container-two-thirds-left-backer"></div>'),l(".fullpage .section").each(function(){var o=l(this).data("anchor");l(this).is(":first-child")?l(this).before('<div id="'+o+'" class="section-anchor section-anchor-first-child"></div>'):l(this).before('<div id="'+o+'" class="section-anchor"></div>')}),""!==window.location.hash&&setTimeout(function(){l("#mobileSecondaryNav .dropdown-item").each(function(){l(this).attr("href")===window.location.hash&&h(l(l(this).attr("href")))})},100),l(".fullpage").length&&l("#mobileSecondaryNav").show(),l(".mobile-primary_nav .dropdown-item").click(function(){l(".navbar-toggler").click()}),l("#mobileSecondaryNav .dropdown-item").each(function(){var o={id:l(this).attr("href"),text:l(this).text()};a.push(o)}),l("#mobileSecondaryNav .dropdown-toggle").click(function(o){o.preventDefault(),l(this).toggleClass("open"),l(this).parent().find(".dropdown-menu").toggleClass("always-show")}),l("#mobileSecondaryNav .dropdown-item").click(function(o){var e=l(this).attr("href");l(".dropdown-toggle").removeClass("open"),l("#mobileSecondaryNav").find(".dropdown-menu").removeClass("always-show"),window.scrollTo(0,l(e).offset().top)}),l("#mobilePI-dropdown").click(function(){l(this).find(".dropdown-menu").toggleClass("show"),l(this).find(".dropdown-menu-mobile-toggle_icon").toggleClass("active"),l(this).find(".nav-item span").toggleClass("color-darkblue")}),l(".dropdown-menu-mobile-toggle").click(function(){lastStateWasActive=l(this).parent().find(".dropdown-menu").hasClass("active"),l(".dropdown-menu").removeClass("active"),lastStateWasActive?l(this).parent().find(".dropdown-menu").removeClass("active"):l(this).parent().find(".dropdown-menu").addClass("active")}),l(".open-isi").click(function(){l(".navbar-collapse").removeClass("show"),c()}),l("#navbarNav .dropdown-toggle").parent().hover(function(){var o;o=l(this),991<l(window).width()&&o.find(".dropdown-menu").addClass("show")},function(){!function(o){if(991<l(window).width()){var e=o.find(".dropdown-menu");e.is(":hover")?e.on("mouseleave",function(){e.hasClass("persist")||e.removeClass("show")}):e.hasClass("persist")||e.removeClass("show")}}(l(this))});var o=l("article").attr("id").substr(8);l(".nav-item-"+o+" .dropdown-menu").addClass("show persist");var e=l(".fullpage").attr("id");l("#"+e+"-dropdown"+" .dropdown-menu").addClass("always-show"),l(".open-popup").click(function(o){var e=l(this).data("id"),i=l(e).data("options");i=Object.assign({create:function(){l('[data-toggle="tooltip"]').tooltip("hide");var o=l(e).parent().find(".ui-dialog-title");o.html(o.text()),disableScroll(window)},open:function(){l(this).mCustomScrollbar({scrollInertia:0}),setTimeout(function(){s&&l(".ui-dialog").each(function(){this.style.setProperty("top","15px","important")})},0)},close:function(){l(".ui-dialog-bg-overlay").hide(),l(this).dialog("destroy"),enableScroll(window)},maxWidth:.9*l(window).width(),resizable:!1,draggable:!1},i),l(".ui-dialog-bg-overlay").show(),l(e).dialog(i)}),l(".open-indication").click(function(o){var e="#indicationDialog",i=l(e).data("options");i=Object.assign({create:function(){l('[data-toggle="tooltip"]').tooltip("hide");var o=l(e).parent().find(".ui-dialog-title");o.html(o.text()),l("body").hasClass("ios")||disableScroll(window)},open:function(){l(this).mCustomScrollbar({scrollInertia:0}),setTimeout(function(){l("body").hasClass("ios")||l(".ui-dialog").each(function(){this.style.setProperty("top","15px","important")})},0)},close:function(){l(".ui-dialog-bg-overlay").hide(),l(this).dialog("destroy"),s||enableScroll(window),setTimeout(function(){l("body").removeClass("down").addClass("up")},200)},maxWidth:.9*l(window).width(),resizable:!1,draggable:!1},i),l(".ui-dialog-bg-overlay").show().css("background","none"),l(".ui-dialog-bg-overlay").click(function(){l(e).dialog("isOpen")&&(l(e).dialog("close"),setTimeout(function(){l("body").removeClass("down").addClass("up")},200))}),l(e).dialog(i),l(e).dialog({classes:{"ui-dialog":"ui-dialog-header-indication"}})}),l(".external-link").click(function(o){o.preventDefault();var e=l(this).attr("href");l(".ui-dialog-bg-overlay").show(),l(this).closest(".ui-dialog").find(".btn-grad").wrapInner("<span></span>"),l("#leavingDialog").dialog({buttons:[{text:"Continue",click:function(){l(this).dialog("close"),setTimeout(function(){window.open(e,"_blank")},100)},class:"btn-grad"}],create:function(){l('[data-toggle="tooltip"]').tooltip("hide")},open:function(){disableScroll(window)},close:function(){enableScroll(window),l(".ui-dialog-bg-overlay").hide()},width:600,maxWidth:.9*l(window).width(),resizable:!1,draggable:!1})}),g()}),l(window).resize(function(){r(),g()}),l(window).scroll(function(){var o=l(window).scrollTop(),e=e=n<=o?"down":"up";l("body").hasClass("lock")?l("body").removeClass("scrolling up down"):144<o?l("body").removeClass("up down").addClass("scrolling "+e):l("body").removeClass("scrolling up down"),n=o,r(),g()})}(jQuery);function toggleAccordion(o) {
    $ = jQuery;
    var e = document.getElementsByClassName("accordion-item"),
        i = $(o).closest(".accordion-item");
    if (i.hasClass("active")) i.removeClass("active");
    else {
        for (var t = 0; t < e.length; t++) e[t].classList.remove("active");
        i.addClass("active")
    }
}

function disableScroll(o) {
    console.log("disableScroll"), $("body").addClass("stop-scrolling"), window.lastScroll = {
        x: window.scrollX,
        y: window.scrollY
    }, $("body").css("position", "fixed")
}

function enableScroll(o) {
    console.log("enableScroll"), $("body").removeClass("stop-scrolling"), $("body").css("position", "static"), window.hasOwnProperty("lastScroll") && window.scrollTo(window.lastScroll.x, window.lastScroll.y)
}

function isLandscape() {
    return $(window).innerWidth() > $(window).innerHeight()
}! function(l) {
    var i = 0,
        t = !1,
        n = 0,
        a = [],
        e = (function() {
            for (var o, e = [], i = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), t = 0; t < i.length; t++) o = i[t].split("="), e.push(o[0]), e[o[0]] = o[1]
        }(), {
            uAString: function() {
                return navigator.userAgent
            },
            isAndroidMobile: function() {
                return -1 < e.uAString().indexOf("Android") && -1 < e.uAString().indexOf("Mozilla/5.0") && -1 < e.uAString().indexOf("AppleWebKit")
            },
            regExAppleWebKit: function() {
                return new RegExp(/AppleWebKit\/([\d.]+)/)
            },
            resultAppleWebKitRegEx: function() {
                return e.regExAppleWebKit().exec(e.uAString())
            },
            appleWebKitVersion: function() {
                return null === e.resultAppleWebKitRegEx() ? null : parseFloat(e.regExAppleWebKit().exec(e.uAString())[1])
            },
            isAndroidBrowser: function() {
                return e.isAndroidMobile() && null !== e.appleWebKitVersion() && e.appleWebKitVersion() < 537
            },
            getAndroidOSVersion: function() {
                var o = e.uAString().match(/Android\s([0-9\.]*)/);
                return !!o && o[1]
            }
        }),
        s = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    function r() {
        if (l("#navbarNav").hasClass("show") && l(window).innerWidth() <= 991) return !0;
        var o = l("#isi"),
            e = (l(window).height(), l("#pinned-isi").height(), o.offset().top - l(window).scrollTop() + l("#pinned-isi").innerHeight() - l("#bottom-nav > .container").innerHeight() - 80);
        l(window).width(), e <= l(window).height() - l("#pinned-isi").height() && "none" !== l("#pinned.isi").css("display") ? (l("#pinned-isi").hide(), l("#isi").addClass("open")) : (l("#pinned-isi").show(), l("#isi").removeClass("open")), l(window).scrollTop() >= e ? l("#isi").find(".expand-button").addClass("expand-button-less").removeClass("expand-button-more") : l("#isi").find(".expand-button").addClass("expand-button-more").removeClass("expand-button-less")
    }

    function d() {
        l("#pinned-isi").hide(), l("#mobile-pinned-isi").hide(), l("#isi").addClass("open")
    }

    function c() {
        console.log("open full isi - page doesn't use fullpage.js, or is fullpage section in mobile"), i = l(window).scrollTop(), d();
        var o = l("#isi").offset().top;
        0 === l(window).scrollTop() && (o -= 143), l("html, body").stop().animate({
            scrollTop: o
        }, 500, "swing", function() {
            setTimeout(function() {
                l("body").removeClass("up down").addClass("scrolling down")
            }, 1)
        })
    }

    function h(o) {
        var e = o.offset().top;
        992 <= l(window).width() ? e -= 144 : l(".fullpage").length && (e += 20), e = e < 0 ? 0 : e, l("body").addClass("lock"), l("html, body").animate({
            scrollTop: e
        }, 1e3, function() {
            setTimeout(function() {
                l("body").removeClass("lock")
            }, 100)
        })
    }

    function u() {
        var o = window.innerWidth / 6,
            e = new SplitText("#hero-text-1", {
                type: "words"
            }),
            i = window.innerWidth / 2 - e.elements[0].scrollWidth / 2 - o,
            t = l("#hero-text-2")[0],
            n = window.innerWidth / 2 - t.scrollWidth / 2 - o;
        (new TimelineMax).delay(.2).set("#hero-text-1", {
            visibility: "visible"
        }).addLabel("background-fade-in").addLabel("content-start", "+=1").from("#hero-bg", 8, {
            autoAlpha: 0,
            scale: 1.1,
            ease: Power1.easeOut
        }, "background-fade-in").from("#cloud-left", 14, {
            autoAlpha: 0,
            x: "-=100px",
            ease: Power1.easeOut
        }, "background-fade-in").from("#cloud-right", 20, {
            autoAlpha: 0,
            width: "900px",
            x: "+=320px",
            ease: Power1.easeOut
        }, "background-fade-in").staggerFromTo(e.words, .3, {
            opacity: 0,
            x: i
        }, {
            opacity: 1,
            x: i
        }, .2, "content-start").fromTo("#hero-text-2", .5, {
            autoAlpha: 0,
            x: n,
            y: 200
        }, {
            autoAlpha: 1,
            x: n,
            y: 0
        }, "content-start+=1").from("#hiking-couple", 3, {
            autoAlpha: 0,
            y: 30
        }, "content-start+=3").to(e.words, 2, {
            x: 0
        }, "content-start+=2", function() {
            e.revert()
        }).to("#hero-text-2", 2, {
            x: 0
        }, "content-start+=2").from("#no-one-text", 2, {
            autoAlpha: 0,
            x: 200
        }, "content-start+=2").from("#combination-text", .5, {
            autoAlpha: 0
        }, "content-start+=4").from("#bratovi-cta", .2, {
            autoAlpha: 0
        }, "content-start+=4")
    }

    function o() {
        var o = l("#understanding").prop("checked") || l("#how").prop("checked") || l("#managing").prop("checked") || l("#staying").prop("checked") || l("#support").prop("checked"),
            e = l("#radio-patient").prop("checked") || l("#radio-caregiver").prop("checked"),
            i = !0;
        return o ? l("#patForm-checkboxes-error").hide() : (l("#patForm-checkboxes-error").show(), i = !1), e ? l("#patForm-patcaregiver-error").hide() : (l("#patForm-patcaregiver-error").show(), i = !1), !!i
    }

    function p() {
        return l.Deferred(function() {
            var o = this;
            l(".ui-dialog-bg-overlay").css("opacity", 0).show();
            var e = "#indicationDialog",
                i = l(e).data("options");
            i = Object.assign({
                create: function() {
                    l('[data-toggle="tooltip"]').tooltip("hide");
                    var o = l(e).parent().find(".ui-dialog-title");
                    o.html(o.text()), disableScroll(window)
                },
                open: function() {
                    l(this).mCustomScrollbar({
                        scrollInertia: 0
                    }), setTimeout(function() {
                        s && l(".ui-dialog").each(function() {
                            this.style.setProperty("top", "15px", "important")
                        })
                    }, 0)
                },
                close: function() {
                    l(this).dialog("destroy"), enableScroll(window), l(".ui-dialog-bg-overlay").css("opacity", 1).hide(), o.resolve()
                },
                maxWidth: .9 * l(window).width(),
                resizable: !1,
                draggable: !1
            }, i), l(e).dialog(i)
        })
    }

    function g() {
        var e = [];
        l("div.section").each(function() {
            var o = {
                id: l(this).data("anchor"),
                text: l(this).data("tooltip")
            };
            e.push(o)
        }), scroll = l(this).scrollTop(), inview = {
            index: 0,
            text: e[0].text || ""
        }, l.each(e, function(o, e) {
            var i;
            l("#" + e.id).offset().top <= scroll + (i = 0, ["#top-nav", "#middle-nav", "#bottom-nav", "#navbarNav .dropdown-menu"].forEach(function(o, e) {
                jQuery(o).is(":visible") && (i += jQuery(o).innerHeight())
            }), i) + 1 && (inview.text = e.text, inview.index = o)
        }), l("#mobileSecondaryNav .current-section").html(inview.text), l("#" + l(".fullpage").attr("id") + "-dropdown .dropdown-menu-inner .dropdown-item:nth-child(" + (inview.index + 1) + ")").addClass("active").siblings().removeClass("active")
    }
    0 <= navigator.userAgent.search("Safari") && navigator.userAgent.search("Chrome") < 0 && (document.getElementsByTagName("BODY")[0].className += " safari"), s && (document.getElementsByTagName("BODY")[0].className += " ios"), e.isAndroidMobile() && (document.getElementsByTagName("BODY")[0].className += " android"), l('[href="#isi"]').click(function(o) {
        o.preventDefault(), c()
    }), l(".isi-header").click(function() {
        var o = l(this).closest(".isi-container").attr("id");
        i = i || 0, l(".navbar-collapse").hasClass("show") && l(".navbar-toggler").click(), "pinned-isi" == o || "mobile-pinned-isi" == o || "fp-mobile-pinned-isi" == o ? c() : l("body").hasClass("full-page-scrolling") || (l(window).animate({
            scrollTop: i
        }, 1e3), l("#pinned-isi").show(), l("#mobile-pinned-isi").show(), l("#isi").removeClass("open"))
    }), l('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href^="#tab"]').not('[href^="#isi"]').click(function(o) {
        if (l(this).hasClass("dropdown-item")) h(l(l(this).attr("href")));
        else if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = l(this.hash);
            "#isi" === e.selector && (i = l(window).scrollTop()), (e = e.length ? e : l("[name=" + this.hash.slice(1) + "]")).length && (o.preventDefault(), l("html, body").animate({
                scrollTop: e.offset().top
            }, 1e3, function() {
                var o = l(e);
                if (o.focus(), o.is(":focus")) return !1;
                o.attr("tabindex", "-1"), o.focus()
            }))
        }
    }), l(".open-video").click(function() {
        var o = l(this).data("video-src"),
            e = null;
        l("#videoPlayerDialog").dialog({
            create: function() {
                l(".ui-dialog-bg-overlay").show(), l(this).closest(".ui-dialog").css("max-width", "calc(100% - 30px)"), t = !0, (e = videojs("video-dialog-player")).src(o), e.load(), e.play()
            },
            close: function() {
                l(".ui-dialog-bg-overlay").hide(), e && (e.pause(), e.currentTime(0)), l(this).dialog("destroy"), t = !1
            },
            closeOnEscape: !1,
            resizable: !1,
            draggable: !1,
            width: 800,
            height: 410,
            modal: !0
        }), l(window).resize(function() {
            t && l("#videoPlayerDialog").dialog("option", "height", "auto")
        })
    }), l("#share-your-story-submit-button").click(function() {
        console.log("clicked submit button");
        var s = l("#patient-share-your-story");
        s.parsley().validate(), s.parsley().isValid() && (console.log("form is valid - sending query", s.serialize()), l.ajax({
            type: "POST",
            url: "/php/carespeak_form.php",
            data: s.serialize(),
            encode: !0,
            success: function(o, e, i) {
                console.log("form submitted successfully");
                var t = JSON.parse(o.substr(0, o.length - 4));
                if (console.log("Response", o, e, i, t), t.hasOwnProperty("success") && t.success)
                    if (991 < l(window).innerWidth()) {
                        s.css("visibility", "hidden"), l("#share-your-story-confirmation").addClass("show-desktop").show();
                        for (var n = fp_getIScrollInstances(), a = 0; a < n.length; a++) n[a].scrollTo(0, 0)
                    } else s.hide(), l("#share-your-story-confirmation").show(), l(window).animate({
                        scrollTop: l("#share-your-story-confirmation").closest(".container").offset().top - l("#bottom-nav > .container").innerHeight()
                    }, 1e3)
            },
            error: function(o, e, i) {
                console.log("form error")
            }
        }))
    }), l("#sign-up-button").click(function() {
        var n = l("#pat-form");
        n.parsley().validate(), o(), n.parsley().isValid() && o() ? (console.log("form is valid - sending query", n.serialize()), l.ajax({
            type: "POST",
            url: "/php/carespeak_form.php",
            data: n.serialize(),
            encode: !0,
            success: function(o, e, i) {
                console.log("form submitted successfully");
                var t = JSON.parse(o.substr(0, o.length - 4));
                console.log("Response", o, e, i, t), t.hasOwnProperty("success") && t.success && (n.hide(), l("#sign-up-header").hide(), l("#sign-up-confirmation").show(), l(window).animate({
                    scrollTop: l("#sign-up-top").offset().top - l("header").innerHeight()
                }, 1e3))
            },
            error: function(o, e, i) {
                console.log("form error")
            }
        })) : l('input[type="checkbox"]').click(function() {
            o()
        })
    }), l("#navbarNav").on("shown.bs.collapse", function() {
        d()
    }), l("#navbarNav").on("hidden.bs.collapse", function() {
        r()
    }), l(window).bind("pageshow", function(o) {
        l("#article-patient_home").length && o.originalEvent.persisted && window.location.reload()
    }), l(document).ready(function() {
        r(),
            function() {
                for (var o = [".set-equal-height-1", ".set-equal-height-2", ".set-equal-height-3", ".set-equal-height-4"], e = 0, i = 0; i < o.length; i++) l(o[i]) && l(o[i]).each(function() {
                    l(this).css("height", "auto")
                });
                for (i = 0; i < o.length; i++) l(o[i]) && (l(o[i]).each(function() {
                    l(this).height() > e && (e = l(this).height())
                }), l(o[i]).each(function() {
                    l(this).height(e)
                })), e = 0
            }(), 991 < window.innerWidth ? l("#article-patient_home").length && l.when(p()).done(u) : (l("#article-patient_home").length && p(), l(".animatable").removeClass("animatable")), l(".container-two-thirds-left").prepend('<div class="container-two-thirds-left-backer"></div>'), l(".fullpage .section").each(function() {
                var o = l(this).data("anchor");
                l(this).is(":first-child") ? l(this).before('<div id="' + o + '" class="section-anchor section-anchor-first-child"></div>') : l(this).before('<div id="' + o + '" class="section-anchor"></div>')
            }), "" !== window.location.hash && setTimeout(function() {
                l("#mobileSecondaryNav .dropdown-item").each(function() {
                    l(this).attr("href") === window.location.hash && h(l(l(this).attr("href")))
                })
            }, 100), l(".fullpage").length && l("#mobileSecondaryNav").show(), l(".mobile-primary_nav .dropdown-item").click(function() {
                l(".navbar-toggler").click()
            }), l("#mobileSecondaryNav .dropdown-item").each(function() {
                var o = {
                    id: l(this).attr("href"),
                    text: l(this).text()
                };
                a.push(o)
            }), l("#mobileSecondaryNav .dropdown-toggle").click(function(o) {
                o.preventDefault(), l(this).toggleClass("open"), l(this).parent().find(".dropdown-menu").toggleClass("always-show")
            }), l("#mobileSecondaryNav .dropdown-item").click(function(o) {
                var e = l(this).attr("href");
                l(".dropdown-toggle").removeClass("open"), l("#mobileSecondaryNav").find(".dropdown-menu").removeClass("always-show"), window.scrollTo(0, l(e).offset().top)
            }), l("#mobilePI-dropdown").click(function() {
                l(this).find(".dropdown-menu").toggleClass("show"), l(this).find(".dropdown-menu-mobile-toggle_icon").toggleClass("active"), l(this).find(".nav-item span").toggleClass("color-darkblue")
            }), l(".dropdown-menu-mobile-toggle").click(function() {
                lastStateWasActive = l(this).parent().find(".dropdown-menu").hasClass("active"), l(".dropdown-menu").removeClass("active"), lastStateWasActive ? l(this).parent().find(".dropdown-menu").removeClass("active") : l(this).parent().find(".dropdown-menu").addClass("active")
            }), l(".open-isi").click(function() {
                l(".navbar-collapse").removeClass("show"), c()
            }), l("#navbarNav .dropdown-toggle").parent().hover(function() {
                var o;
                o = l(this), 991 < l(window).width() && o.find(".dropdown-menu").addClass("show")
            }, function() {
                ! function(o) {
                    if (991 < l(window).width()) {
                        var e = o.find(".dropdown-menu");
                        e.is(":hover") ? e.on("mouseleave", function() {
                            e.hasClass("persist") || e.removeClass("show")
                        }) : e.hasClass("persist") || e.removeClass("show")
                    }
                }(l(this))
            });
        var o = l("article").attr("id").substr(8);
        l(".nav-item-" + o + " .dropdown-menu").addClass("show persist");
        var e = l(".fullpage").attr("id");
        l("#" + e + "-dropdown" + " .dropdown-menu").addClass("always-show"), l(".open-popup").click(function(o) {
            var e = l(this).data("id"),
                i = l(e).data("options");
            i = Object.assign({
                create: function() {
                    l('[data-toggle="tooltip"]').tooltip("hide");
                    var o = l(e).parent().find(".ui-dialog-title");
                    o.html(o.text()), disableScroll(window)
                },
                open: function() {
                    l(this).mCustomScrollbar({
                        scrollInertia: 0
                    }), setTimeout(function() {
                        s && l(".ui-dialog").each(function() {
                            this.style.setProperty("top", "15px", "important")
                        })
                    }, 0)
                },
                close: function() {
                    l(".ui-dialog-bg-overlay").hide(), l(this).dialog("destroy"), enableScroll(window)
                },
                maxWidth: .9 * l(window).width(),
                resizable: !1,
                draggable: !1
            }, i), l(".ui-dialog-bg-overlay").show(), l(e).dialog(i)
        }), l(".open-indication").click(function(o) {
            var e = "#indicationDialog",
                i = l(e).data("options");
            i = Object.assign({
                create: function() {
                    l('[data-toggle="tooltip"]').tooltip("hide");
                    var o = l(e).parent().find(".ui-dialog-title");
                    o.html(o.text()), l("body").hasClass("ios") || disableScroll(window)
                },
                open: function() {
                    l(this).mCustomScrollbar({
                        scrollInertia: 0
                    }), setTimeout(function() {
                        l("body").hasClass("ios") || l(".ui-dialog").each(function() {
                            this.style.setProperty("top", "15px", "important")
                        })
                    }, 0)
                },
                close: function() {
                    l(".ui-dialog-bg-overlay").hide(), l(this).dialog("destroy"), s || enableScroll(window), setTimeout(function() {
                        l("body").removeClass("down").addClass("up")
                    }, 200)
                },
                maxWidth: .9 * l(window).width(),
                resizable: !1,
                draggable: !1
            }, i), l(".ui-dialog-bg-overlay").show().css("background", "none"), l(".ui-dialog-bg-overlay").click(function() {
                l(e).dialog("isOpen") && (l(e).dialog("close"), setTimeout(function() {
                    l("body").removeClass("down").addClass("up")
                }, 200))
            }), l(e).dialog(i), l(e).dialog({
                classes: {
                    "ui-dialog": "ui-dialog-header-indication"
                }
            })
        }), l(".external-link").click(function(o) {
            o.preventDefault();
            var e = l(this).attr("href");
            l(".ui-dialog-bg-overlay").show(), l(this).closest(".ui-dialog").find(".btn-grad").wrapInner("<span></span>"), l("#leavingDialog").dialog({
                buttons: [{
                    text: "Continue",
                    click: function() {
                        l(this).dialog("close"), setTimeout(function() {
                            window.open(e, "_blank")
                        }, 100)
                    },
                    class: "btn-grad"
                }],
                create: function() {
                    l('[data-toggle="tooltip"]').tooltip("hide")
                },
                open: function() {
                    disableScroll(window)
                },
                close: function() {
                    enableScroll(window), l(".ui-dialog-bg-overlay").hide()
                },
                width: 600,
                maxWidth: .9 * l(window).width(),
                resizable: !1,
                draggable: !1
            })
        }), g()
    }), l(window).resize(function() {
        r(), g()
    }), l(window).scroll(function() {
        var o = l(window).scrollTop(),
            e = e = n <= o ? "down" : "up";
        l("body").hasClass("lock") ? l("body").removeClass("scrolling up down") : 144 < o ? l("body").removeClass("up down").addClass("scrolling " + e) : l("body").removeClass("scrolling up down"), n = o, r(), g()
    })
}(jQuery);