'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binary = require('./binary');

var _binary2 = _interopRequireDefault(_binary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASE64ENCODINGTABLE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];

var Base64 = function () {
    function Base64() {
        _classCallCheck(this, Base64);
    }

    _createClass(Base64, null, [{
        key: 'encode',
        value: function encode(string) {
            var bin = '',
                b;
            var fullBinaryStream = string.split('').map(function (l) {
                return _binary2.default.convert(l.charCodeAt(0));
            }).join('');
            var encodedStreamArray = fullBinaryStream.split(/(.{6})/).filter(function (hex) {
                return hex;
            }).map(function (hex) {
                return BASE64ENCODINGTABLE[parseInt(hex, 2)];
            });
            for (var i = 0; i < encodedStreamArray.length % 4; i++, encodedStreamArray.push('=')) {}
            return encodedStreamArray.join('');
        }
    }]);

    return Base64;
}();

exports.default = Base64;