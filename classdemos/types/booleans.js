var success = false;
while (!success) {
    console.log('in the loop');
    var a2 = '5';
    var a3 = parseInt(a2);
    if (typeof a3 == "number") {
        console.log('a3 is a number');
        success = true;
    }
}
