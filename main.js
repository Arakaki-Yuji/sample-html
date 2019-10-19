var _window = $(window),
    _header = $('.menu-wrapper'),
    menuTop;
var running = false;


_window.on('scroll',function(){
    if(running === true){
        return;
    }
    running = true;
    menuTop = $('.menu-wrapper').offset().top;
    console.log(menuTop);
    console.log(_window.scrollTop());
    if(_window.scrollTop() > menuTop){
        _header.addClass('fixed');
    }
    else{
        _header.removeClass('fixed');
    }
    running = false;
});

_window.trigger('scroll');
