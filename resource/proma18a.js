/**
 * Renaming to prom.js as many adblocker will blcok promo.js
 */

(function(window) {

    var promos = {
        "hireMe": "<ul class='list'><li style='display: block; line-height: 1.3; border-top-width: 1px; border-top-style: solid; ' class='theme-border-color'><a href='mailto:dharmesh@premii.com?subject=Front-End Engineer' data-track='contact-me' style='padding: 10px 15px 15px 15px; '><h3><div class='theme-color'>Looking for a Front-End Engineer?</div></h3><div  style='font-weight: 300;'>I am the developer of this app, and looking for a job in the bay area! <em class='theme-color' style='font-style: normal;'>Get in touch.</em></div></a></li><li style='display: none; text-align: center;'><a  href='http://premii.com/' target='_blank' class='' data-track='resume' style='width: 50%; display: inline-block; background: rgba(0,0,0,0.04); margin-left: -1px; margin-right: 1px;'>My Resume</a><a href='mailto:dharmesh@premii.com?subject=Front-End Engineer' class='feedback-promo-ios' data-track='contact-me' style='width:50%;display:inline-block;background: rgba(0,0,0,0.04);'>Contact Me</a></li></ul>",
        "download": "<div style='display: block; background: url(a/icon/icon-128.png) no-repeat 15px 50%; background-size: 45px 45px; padding: 15px 20px 15px 75px;'>Available on the <br><a style='display: inline-block; padding: 0;'  href='https://itunes.apple.com/us/app/hacker-news-yc/id713733435' target='_blank' data-track='download-promo-web-ios'><span class='icon-apple' style='padding-left: 0;'></span> App Store </a> &nbsp; & &nbsp; <a  href='https://play.google.com/store/apps/details?id=com.premii.hn' style='display: inline-block; padding: 0;'  target='_blank' data-track='download-promo-web-ios'><span class='icon-android'></span> Play Store</a></div>",
        "downloadAndroid": "<a style='display: block; background: url(a/icon/icon-128.png) no-repeat 15px 50%; background-size: 45px 45px; padding: 25px 20px 25px 75px;' href='https://play.google.com/store/apps/details?id=com.premii.hn' target='_blank' data-track='download-promo-android'>Available on the <span class='icon-android'></span> Play Store</a>",
        "downloadIOs": "<a style='display: block; background: url(a/icon/icon-128.png) no-repeat 15px 50%; background-size: 45px 45px; padding: 25px 20px 25px 75px;' href='https://itunes.apple.com/us/app/hacker-news-yc/id713733435' target='_blank' data-track='download-promo-ios'>Available on the <span class='icon-apple'></span> App Store</a>",
		"interana" : "<div style='padding: 15px;'>Join our team to build an end-to-end platform to analyse 1+ trillion events in a few seconds.<div style='text-align: center;'><a target='_blank' href='mailto:dharmesh@interana.com' class='bubble-icon' data-track='contact-me' style='display:inline-block;padding: 5px 20px;text-align: center; margin: 10px 0;border-radius: 0;font-size: 1rem;'>Let's have coffee in Menlo Park, CA</a></div><div><a target='_blank' href='http://www.interana.com/company/careers?hn.premii.com' class='domain'>Jobs @ Interana.com</a><span class='fright' style='text-transform: uppercase; font-size: 85%; opacity: 0.3;'>Promotion</span></div></div>"
    };

    var content = {
        "web" : {
            "android" : {
                "default" : {
                    "id": 'promo-android',
                    "position": "scroll-bottom",
                    "html" : promos.downloadAndroid,
                    "frequency": 100
                }
            },
            "ios" : {
                "default" : {
                    "id": 'promo-ios',
                    "position": "scroll-bottom",
                    "html" : promos.downloadIOs,
                    "frequency": 100
                }
            },
            "other" : {
                "default" : {
                    "id": 'promo-ios-android',
                    "position": "scroll-bottom",
                    "html" : promos.interana,
                    "frequency": 100
                }
            }
        }
    };

    window.c = content;

    //Uncomment next 2 lines to disable this on native iOS/Android device;
//    content.native.ios = content.generic;
//    content.native.android = content.generic;

    content.web.windows = content.web.other;
    content.web.wp = content.web.other;
    content.web.mac = content.web.other;
    content.web.MacIntel = content.web.other;
    content.web.linux = content.web.other;


    var getPromoContent = function(content) {

        var $config = window.$config,
            appType = $config.nativeApp ? "native" : "web",
            os = $config.os,
            version = $config.v.app + '-' + $config.v.js + '-' + $config.v.css;

        var promoContent = content[appType];
        if (promoContent && promoContent[os]) {
            promoContent = promoContent[os];
            if (promoContent) {
                promoContent = promoContent[version] || promoContent.default || null;
            }
        }
        else {
            promoContent = null;
        }
        return promoContent;
    };

    var isPromoValid = function(promo) {
        var isValid = false,
            promosHistory = window.store.get('notify') || {},
            promoHistory = promo ? promosHistory[promo.id] : null;

        if (promo && !promoHistory) {
            isValid = true;
            promoHistory = {
                count: -1,
                id: promo.id,
                never: false
            };
        }
        else if (promo && promo.frequency && promoHistory && promoHistory.count < promo.frequency) {
            isValid = true;
        }

        if (!isValid && promo.showThis) {
            isValid = promo.showThis();
        }

        if (isValid) {
            promoHistory.count++;
        }

        return isValid;
    };

    var showPromo = function(data) {
        //console.log(data);

        if (isPromoValid(data)) {

            data.position = data.position || 'scroll-bottom';

            $('.fixed-promo').html('');

            $('.scroll-bottom-promo').html('');

            if (data.position == 'fixed-bottom') {
                $('.fixed-promo').html(data.html);
            }
            else if (data.position == 'scroll-bottom') {
                window.setTimeout(function() {
                    $('.scroll-bottom-promo').html(data.html );
                }, 1500);
            }

            if (data.callback) {
                /* only for native ios */
                var onPointerDown = function(link) {
                    // console.log("onPointerDown()", link);
                    //    content.native.ios.default[0].callback(link);
                    data.callback(link);
                };
                $hn.onPointerDown('.scroll-bottom-promo', onPointerDown);
            }
        }
    };

    var promoContent = getPromoContent(content);


    if (promoContent) {
        showPromo(promoContent);
    }

}(window));
console.log('fake');
typeof fake != 'undefined' && fake('what');
