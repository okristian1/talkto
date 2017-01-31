var images = [];
images[0] = "../img/banner_2.jpg";
images[1] = "../img/banner_1.jpg";

var i = 0;
setInterval(fadeDivs, 3000);

function fadeDivs() {
    i = i < images.length ? i : 0;
    $('.business_header'.css(('background-image', 'url(' + images[i] + ')'))).fadeOut(100, function(){
        $(this).attr('src', images[i]).fadeIn(100);
    })
    i++;
}
