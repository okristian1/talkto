$(function () {
    var iconA = $('.iconA');
    var iconB = $('.iconB');
    var iconC = $('.iconC');


    var sicon1 = myServerData[1].icons;
    var sicon2 = myServerData[2].icons;
    var sicon3 = myServerData[3].icons;
    var sicon4 = myServerData[4].icons;
    var sicon5 = myServerData[5].icons;
    var sicon6 = myServerData[6].icons;
    
    var current = [];

    function nextIcon() {
        $(".iconA").fadeTo(1000,0.30, function() {
            $(".iconA").attr("src",'img/'+ sicon1 +'.png');
        }).fadeTo(500,1);
        return false;


    }

    setTimeout(nextIcon, 2000);

});
