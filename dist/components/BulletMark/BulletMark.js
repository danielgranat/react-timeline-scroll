"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BulletMark;

var _react = _interopRequireDefault(require("react"));

var _StyleModule = _interopRequireDefault(require("./Style.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BulletMark(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, " ").concat(_StyleModule.default.bullet)
  }), children);
}