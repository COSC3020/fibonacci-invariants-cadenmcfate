function fib(n) {
    var fibArr = [];
    for (var i = 0; i <= n; i++) {
	if (i === 0) fibArr[i]=0;
	else if (i === 1) fibArr[i]=1;
	else fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
}
