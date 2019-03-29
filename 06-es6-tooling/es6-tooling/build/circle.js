"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _radius = new WeakMap();

var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    _radius.set(this, radius);
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      console.log('Circle with radius ' + _radius.get(this));
    }
  }]);

  return Circle;
}();

exports.Circle = Circle;