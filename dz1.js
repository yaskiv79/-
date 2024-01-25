var myObject = {
    property1: 'Значення1',
    property2: 'Значення2',
    property3: 'Значення3',

    getInfo: function () {
        for (var key in this) {
            if (typeof this[key] !== 'function' && key !== 'getInfo') {
                console.log(key + ': ' + this[key]);
            }
        }
    }
};


myObject.newProperty = 'Нова властивість!';

myObject.getInfo();