function slice(s, min, max) {
    var finalMin = 0
    var finalMax = 0

    if (min >= 0 && min < s.length) {
        finalMin = min
    } else if (min < 0 && min > -s.length) {
        finalMin = s.length + min
    } else {
        finalMin = 0
    }

    if (max >= 0 && max < s.length) {
        finalMax = max
    } else if (max < 0 && max > -s.length) {
        finalMax = s.length + max
    } else {
        finalMax = s.length
    }

    let result;
    let str = typeof s === 'string';
    if (str) {
        result = ""
    } else {
        result = []
    }

    for (finalMin; finalMin < finalMax; finalMin++) {
        if (str) {
            result += s[finalMin]
        } else {
            result = [...result, s[finalMin]]
        }
    }
    return result
}