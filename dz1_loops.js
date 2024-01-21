//Спосіб 1
function drawTriangle1(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}


//Спосіб 2
function drawTriangle2(height, symbol) {
    let row = '';
    for (let i = 1; i <= height; i++) {
        row += symbol;
        console.log(row);
    }
}
drawTriangle2(5, '*');
