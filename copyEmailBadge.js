var $temp = $('<input>');
$('.copyBadge').on('click', function () {
    var $copyBadge = $(this);
    var $url = $(this).prev().attr('href');
    var $copyBadgeHTML = $(this).html();
    $('body').append($temp);
    $temp.val($url).select();
    document.execCommand('copy');
    $temp.remove();
    $copyBadge.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Email copied');
    window.setTimeout(function () {
        $copyBadge.html($copyBadgeHTML);
    }, 2000);
});