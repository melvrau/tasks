/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numba: number): number => numba * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const allInts = numbers.map((numba: string): string =>
        Number.isNaN(parseInt(numba)) ? (numba = "0") : numba
    );
    const finalInts = allInts.map(Number);
    return finalInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noSymbols = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount
    );
    const allInts = noSymbols.map((amount: string): string =>
        Number.isNaN(parseInt(amount)) ? (amount = "0") : amount
    );
    const numberAmounts = allInts.map(Number);
    return numberAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const shouting = noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return shouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    const shortWordsCount = shortWords.length;
    return shortWordsCount;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const onlyRGB = colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        );
        return onlyRGB;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const total = addends.reduce(
            (currTotal: number, addend: number) => currTotal + addend,
            0
        );
        const numberString = addends.join("+");
        const math = total.toString() + "=" + numberString;
        return math;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegativeIndex = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (firstNegativeIndex === -1) {
        const totalWithoutNegative = values.reduce(
            (currTotal: number, value: number) => currTotal + value,
            0
        );
        return [...values, totalWithoutNegative];
    } else {
        const beforeNegative = values.slice(0, firstNegativeIndex);
        const totalBeforeNegative = beforeNegative.reduce(
            (currTotal: number, value: number) => currTotal + value,
            0
        );
        const valuesInside = [...values];
        valuesInside.splice(firstNegativeIndex + 1, 0, totalBeforeNegative);
        return valuesInside;
    }
}
