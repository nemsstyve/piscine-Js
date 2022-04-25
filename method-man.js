function words(X) {
    return X.split(" ");
}

function sentence(X) {
    return X.join(' ')
}

function yell(X) {
    return X.toUpperCase();
}

function whisper(X) {
    return "*" + X.toLowerCase() + "*"
}

function capitalize(X) {
    return X[0].toUpperCase() + X.slice(1).toLowerCase();
}