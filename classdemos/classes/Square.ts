class Square {
    private side: number;

    constructor(s: number) {
        this.side = s;
    }

    getSide(): number {
        return this.side;
    }

    area(): number {
        return this.side * this.side;
    }
}