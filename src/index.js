module.exports = function toReadable(number) {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const convert = (num) => {
        if (num === 0) {
            return "zero";
        } else if (num < 10) {
            return units[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            const digit = num % 10;
            const ten = Math.floor(num / 10);
            return `${tens[ten]} ${units[digit]}`.trim();
        }
    };

    if (number < 100) {
        return convert(number);
    } else {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        if (remainder === 0) {
            return `${units[hundred]} hundred`;
        } else {
            return `${units[hundred]} hundred ${convert(remainder)}`;
        }
    }
};
