function cutFirst(str = "") {
    let letter = ''
    for (let i = 2; i <= str.length - 1; i++) {
        letter = letter + str[i]
    }
    return letter
}

console.log(cutFirst("Bonjour"))

function cutLast(str = "") {
    let letter = ''
    for (let i = 0; i <= str.length - 3; i++) {
        letter = letter + str[i]
    }
    return letter
}

console.log(cutLast("Bonjour"))

function cutFirstLast(str = "") {
    let first = cutFirst(str)
    let last = cutLast(first)
    return last
}

console.log(cutFirstLast("BONJOUR"))

function keepFirst(str = "") {

    if (str.length < 2) {
        return str
    } else {
        let letter = ''
        for (let i = 0; i <= 2 - 1; i++) {
            letter = letter + str[i]
        }
        return letter
    }
}

console.log(keepFirst("Bonjour"))

function keepLast(str = "") {

    if (str.length <= 2) {
        return str
    } else {

        let letter = ''
        for (let i = str.length - 2; i <= str.length - 1; i++) {
            letter = letter + str[i]
        }
        return letter
    }
}

console.log(keepLast("Bonjour"))

function keepFirstLast(str = "") {

    if (str.length <= 4) {
        return str
    } else {

        let first = keepFirst(str)
        let last = keepLast(str)
        return first + last
    }
}

console.log(keepFirstLast("Whats up man?"))