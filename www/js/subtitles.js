
function fun(){
$('.subtitles').css('top', '');
$('.subtitles').animate({top:"-100%"}, 15000, fun);
    
}

fun();