$(function () {
    var header = $('.business-header');
    var backgrounds = [
      'url(../img/banner_2.jpg)', 
      'url(../img/banner_1.jpg)'];
    var current = 0;

    function nextBackground() {
        header.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);
             setTimeout(nextBackground, 5000);

    header.css('background-size', 'cover');
    }

    setTimeout(nextBackground, 5000);
    header.css('background', backgrounds[0]);

});



