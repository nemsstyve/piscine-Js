function multiply(a, b) {
    let res = 0;
    if (b > 0) {
        for (let i = 1; i <= b; i++) {
            res += a;
        }
    }
    if (b < 0) {
        for (let i = -1; i >= b; i--) {
            res -= a;
        }
    }
    return res;
}

function divide(a, b) {
    let dividande = 0;
    let temoin = b;
    if (a < 0 || b < 0) {
        let signA = Math.sign(a);
        let signB = Math.sign(b);
        a = Math.abs(a);
        b = Math.abs(b);
        temoin = b
        while (temoin <= a) {
            temoin = temoin + b;
            dividande++;
        }
        let sign = multiply(signA, signB);
        let res = multiply(dividande, sign)
        return res;
    }
    while (temoin <= a) {
        temoin = temoin + b;
        dividande++;
    }
    return dividande;
}

function modulo(a, b) {
    let temoin = b;
    if (a < 0 || b < 0) {
        let B = b;
        let A = a;
        a = Math.abs(a);
        b = Math.abs(b);
        temoin = b;

        while (temoin <= a) {
            temoin = temoin + b;
        }
        if (temoin > a) {
            temoin = temoin - b
        }
        let res = temoin - a;
        if (B < 0 && A > 0) {
            let mod = multiply(res, -1)
            return mod;
        } else {
            return res;
        }
    } else {
        let rest = 0;
        let temoin = b;
        while (temoin <= a) {
            temoin = temoin + b;
        }
        if (temoin > a) {
            temoin = temoin - b
        }
        rest = a - temoin;
        return rest;
    }
}

let res = modulo(-123, -22);
console.log(res);