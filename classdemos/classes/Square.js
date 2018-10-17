var Square = /** @class */ (function () {
    function Square(s) {
        this.side = s;
    }
    Object.defineProperty(Square.prototype, "side", {
        get: function () {
            return this.side;
        },
        enumerable: true,
        configurable: true
    });
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}());
