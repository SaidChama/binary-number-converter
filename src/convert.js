const decToBin = (num) => {
    i = 0;
    while (2 ** i < num) {
        i++;
    }
    array = [];
    let res = num;

    for (i; i >= 0; i--) {
        if (res - (2 ** i) < 0) {
            array.push(0);
        } else {
            res = res - (2 ** i);
            array.push(1);
        }

    }
    if (array[0] === 0) {
        array.shift();
    }
    let binary = array.join('');
    console.log(typeof(binary));
    return binary;
}

decToBin(10);
