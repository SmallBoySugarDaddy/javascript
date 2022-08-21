const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++){
        if (num % i === 0) return false;
    }
       
    return num > 1;
}
function getNumber(str) {
    const arr = str.split('')
    let res = []
    arr.forEach(function (t) {
        if (!isNaN(t) && isPrime(parseInt(t))) {
            res.push(t)
        }

    });
    return res;
}
// getNumber('45 ty 2 5 67 3');
console.log(getNumber('45 ty 2 5 67 3'));  