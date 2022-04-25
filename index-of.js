var tF = 0

function indexOf(s, ToFind, num) {
    if (num > 0 && num < s.length) {
        var i = num
    } else {
        var i = 0
    }
    for (i; i < s.length; i++) {
        var find = ""
        for (tF = 0; tF < ToFind.length; tF++) {
            find += s[i + tF]
        }
        if (find == ToFind || s[i] == ToFind) {
            return i
        }
    }
    return -1
}

function lastIndexOf(s, ToFind, num) {
    if (num >= 0 && num < s.length) {
        var i = num
    } else {
        var i = s.length - 1
    }
    for (i; i >= 0; i--) {
        var find = ""
        for (tF = 0; tF < ToFind.length; tF++) {
            find += s[i + tF]
        }
        if (find == ToFind || s[i] == ToFind) {
            return i
        }
    }
    return -1
}

function includes(s, ToFind, num) {
    if (num > 0 && num < s.length) {
        var i = num
    } else {
        var i = 0
    }
    for (i; i < s.length; i++) {
        var find = ""
        for (tF = 0; tF < ToFind.length; tF++) {
            find += s[i + tF]
        }
        if (find == ToFind || s[i] == ToFind) {
            return true
        }
    }
    return false
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 1, 2))