'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author -> Dare McAdewole <dare.dev.adewole@gmail.com>
 */

var Binary = function () {
    function Binary() {
        _classCallCheck(this, Binary);
    }

    _createClass(Binary, null, [{
        key: 'convert',
        value: function convert(value) {
            var b = Binary.__dummyConvert(parseInt(value)).split('').reverse().join('');
            for (var pad = ''; pad.length < 8 - b.length; pad += '0') {}
            return '' + pad + b;
        }
    }, {
        key: '__dummyConvert',
        value: function __dummyConvert(v) {
            if (parseInt(v / 2) === 0) return '1';
            return '' + parseInt(v % 2) + Binary.__dummyConvert(parseInt(v / 2));
        }
    }]);

    return Binary;
}();

exports.default = Binary;