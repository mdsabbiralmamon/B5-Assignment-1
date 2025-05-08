function formatString(input, toUpper) {
    if (toUpper === void 0) { toUpper = true; }
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
// console.log(formatString("Hello", false));
