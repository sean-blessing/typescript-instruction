let success: boolean = false;

while (!success) {
    console.log('in the loop');
    let a2: string = '5';
    let a3: number = parseInt(a2);

    if (typeof a3 == "number") {
        console.log('a3 is a number');
        success = true;
    }

}