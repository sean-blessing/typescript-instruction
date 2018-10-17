function SquarePerimeterAndArea(side: number) {
    let perimeter = 4*side;
    let area = side * side;
    return [perimeter, area];
}

console.log(SquarePerimeterAndArea(5));