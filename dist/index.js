'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('logger');

var _base = require('./base64');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger.createLogger)();

logger.log(_base2.default.encode('fellowship'));

exports.default = _base2.default;