"use strict";
exports.__esModule = true;
var Ball = /** @class */ (function () {
    function Ball(inColor, inSize) {
        this.color = inColor;
        this.size = inSize;
    }
    Ball.prototype.about = function () {
        return ("id = " + this.id + ", color = " + this.color + ", size = " + this.size);
    };
    return Ball;
}());
exports.Ball = Ball;
