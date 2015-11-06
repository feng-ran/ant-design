'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUtil = require('rc-util');

var _rcUtil2 = _interopRequireDefault(_rcUtil);

var Row = _react2['default'].createClass({
  displayName: 'Row',

  propTypes: {
    type: _react2['default'].PropTypes.string,
    align: _react2['default'].PropTypes.string,
    justify: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node
  },
  render: function render() {
    var _rcUtil$classSet;

    var _props = this.props;
    var type = _props.type;
    var justify = _props.justify;
    var align = _props.align;
    var className = _props.className;

    var others = _objectWithoutProperties(_props, ['type', 'justify', 'align', 'className']);

    var classes = _rcUtil2['default'].classSet((_rcUtil$classSet = {
      'row': true
    }, _defineProperty(_rcUtil$classSet, 'row-' + type, type), _defineProperty(_rcUtil$classSet, 'row-' + type + '-' + justify, justify), _defineProperty(_rcUtil$classSet, 'row-' + type + '-' + align, align), _defineProperty(_rcUtil$classSet, className, className), _rcUtil$classSet));
    return _react2['default'].createElement(
      'div',
      _extends({}, others, { className: classes }),
      this.props.children
    );
  }
});

exports['default'] = Row;
module.exports = exports['default'];