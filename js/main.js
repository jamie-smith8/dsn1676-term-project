var $btn = $('.btn');
var $panel = $('.panel');

$btn.on('click', function () {
    $panel.toggleClass('js-panel-open');
});

var $btnSlide = $('.btn-surf');
var $surf = $('.surf');

$btnSlide.on('click', function () {
    $surf.toggleClass('js-slide');
});

var $btnFade = $('.btn-fade');
var $hula = $('.hula');

$btnFade.on('click' function () {
    $hula.toggleClass('js-fade');
}