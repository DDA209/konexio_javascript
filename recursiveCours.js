function doSomething(num, iteration) {
    if (iteration === 0) {
        return num;
    }

    console.log('num = ' + num);

    iteration--;

    num = num + num;

    doSomething(num, iteration);

}

doSomething(2, 4);