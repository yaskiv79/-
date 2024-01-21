var x = 3;
var y = 3;
var result = Pow(x, y);
function Pow(x, y) {
    var result = 1;
    if (y === 0) {
        return result;
    }
    var exponent = y < 0 ? -y : y;
    for (var i = 0; i < exponent; i++) {
        result = result * x;
    }
    if (y < 0) {
        result = 1 / result;
    }
    return result;
}
console.log(result);