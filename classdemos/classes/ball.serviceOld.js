"use strict";
exports.__esModule = true;
var BallService = /** @class */ (function () {
    function BallService() {
        // The 'id' that will be auto-generated
        this.nextId = 1;
        this.balls = [];
    }
    BallService.prototype.list = function () {
        return this.balls;
    };
    BallService.prototype.add = function (ball) {
        ball.id = this.nextId++;
        this.balls.push(ball);
    };
    return BallService;
}());
exports.BallService = BallService;
