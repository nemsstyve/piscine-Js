const sign = (A) => {
    if (A < 0) {
        return -1
    } else if (A > 0) {
        return 1
    } else {
        return 0
    }
}

const sameSign = (A, B) => {
    if (sign(A) == sign(B)) {
        return true
    } else {
        return false
    }
}