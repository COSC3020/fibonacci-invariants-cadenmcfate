function fib(n) {
    if (n == 0) return [0];
    else if (n == 1) return [0,1];
    var fibArr = fib(n-1);
    fibArr.push(fibArr[n-1]+fibArr[n-2]);
    return fibArr;
}
