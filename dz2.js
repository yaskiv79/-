var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

services.price = function () {
    var total = 0;

    for (var key in this) {
        if (typeof this[key] === 'string' && key !== 'price') {
            var price = parseFloat(this[key].match(/[0-9.]+/)[0]);
            total += price;
        }
    }

    return total;
};

services.minPrice = function () {
    var prices = [];

    for (var key in this) {
        if (typeof this[key] === 'string' && key !== 'price') {
            var price = parseFloat(this[key].match(/[0-9.]+/)[0]);
            prices.push(price);
        }
    }

    return Math.min(...prices);
};

services.maxPrice = function () {
    var prices = [];

    for (var key in this) {
        if (typeof this[key] === 'string' && key !== 'price') {
            var price = parseFloat(this[key].match(/[0-9.]+/)[0]);
            prices.push(price);
        }
    }

    return Math.max(...prices);
};

console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");