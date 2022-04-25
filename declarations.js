const escapeStr = "`" + "\\" + "/" + "'" + '"';
const arr = [4, '2'];

const obj = {
    str: "azerty",
    num: 42,
    bool: true,
    undef: undefined,
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "azerty",
        num: 42,
        bool: true,
    }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)