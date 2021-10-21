$(document).ready(function() {
    console.log("开启FancyBox")
    wrapImageWithFancyBox();
});

/**
 * Wrap images with fancybox support.
 *
 * https://github.com/fancyapps/fancybox/releases
 *
 */
function wrapImageWithFancyBox() {
    /*$('img').not('.sidebar-image img')
        .not('.author img')
        .not(".headimg")
        .not(".mdl-menu img")
        .not(".something-else-logo img").each(function() {
        let $image = $(this);
        let imageCaption = $image.attr('alt');
        let $imageWrapLink = $image.parent('a');
        if ($imageWrapLink.length < 1) {
            var src = this.getAttribute('src');
            var idx = src.lastIndexOf('?');
            if (idx != -1) {
                src = src.substring(0, idx);
            }
            $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
        }

        $imageWrapLink.attr('data-fancybox', 'images');
        if (imageCaption) {
            $imageWrapLink.attr('data-caption', imageCaption);
        }

    });*/

    $('[data-fancybox="images"]').fancybox({//可选
        thumbs : {
            autoStart : true //缩略图
        }
    });
    $('[data-fancybox]').fancybox({//启用函数，必须
        protect: true //图片右键不能下载，可选
    });

    // $().fancybox({
    //     selector: '[data-fancybox="images"]',
    //     thumbs: false,
    //     hash: true,
    //     loop: false,
    //     fullScreen: false,
    //     slideShow: false,
    //     protect: true,
    // });
}