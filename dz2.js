function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkProbabilityTheory(count) {
    var evenCount = 0;
    var oddCount = 0;

    for (var i = 0; i < count; i++) {
        var randomNumber = generateRandomNumber(100, 1000);

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    var total = evenCount + oddCount;
    var evenPercentage = (evenCount / total) * 100;
    var oddPercentage = (oddCount / total) * 100;
    var evenToOddRatio = (evenCount / oddCount).toFixed(2);

    console.log("Кількість парних чисел:", evenCount);
    console.log("Кількість непарних чисел:", oddCount);
    console.log("Загальна кількість чисел:", total);
    console.log("Відсоток парних чисел:", evenPercentage.toFixed(2) + "%");
    console.log("Відсоток непарних чисел:", oddPercentage.toFixed(2) + "%");
    console.log("Відсоток парних до непарних:", evenToOddRatio);
}
checkProbabilityTheory(1000);
