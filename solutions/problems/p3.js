function concatenateArrays() {
    var _a;
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return (_a = []).concat.apply(_a, arrays);
}
// console.log(concatenateArrays(["a", "b"], ["c"]));
