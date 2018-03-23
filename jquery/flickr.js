requirejs.config({
    paths: {
        ramda: 'https://cdn.bootcss.com/ramda/0.25.0/ramda',
        jquery: 'jquery-1.10.2.min'
    }
});
require([
    'ramda',
    'jquery'
], function (_, $) {
    let pageNum = 1;
    let loading = false;
    var Impure = {
        getJSON: _.curry(function (callback, url) {
            loading = true;
            $.getJSON(url, callback);
        }),
        setHtml: _.curry(function (sel, html) {
            loading = false;
            $(sel).append(html);
        }),
        showBig: function (event) {
            event.preventDefault();
            $('body').css({overflow: 'hidden'});
            $('body').append('<div class="abs"> <span class="close">x</span><img src="' + this.src + '" alt=""></div>');
        }
    };
    $("body")
        .on('click', 'img', Impure.showBig)
        .on('click', '.close', function (event) {
            $('body').css({overflow: 'auto'}).find('.abs').remove();
        });
    $(window).scroll(function (event) {
        const bot = 10;
        if ((bot + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {
            pageNum++;
            if (!loading) {
                app(pageNum);
            }
            setTimeout(function () {
                if (!loading) {
                    app(pageNum);
                }
            }, 400);
        }
    });

    var img = function (url) {
        return $('<img />', {src: url});
    };
    var url = function (pageNum) {
        return 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/15/' + pageNum;
    };
    var imgUrl = _.prop('url');
    var srcs = _.compose(_.map(imgUrl), _.prop('results'));
    var images = _.compose(_.map(img), srcs);
    var renderImages = _.compose(Impure.setHtml(".waterfall"), images)
    ;
    var app = _.compose(Impure.getJSON(renderImages), url);
    app(pageNum);
});