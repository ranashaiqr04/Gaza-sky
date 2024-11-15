
/****Task 2 */
var numbers =[10,20,30,40,50];
const result = calculate(numbers);
function calculate(numbers){
    if (numbers.length === 0) {
        return {
            sum: 0,
            average: 0
        };
    }

    var sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    var average = sum/numbers.length;
    return {
        sum: sum,
        average: average
    };

}

console.log(`sum: ${result.sum}`);
console.log(`avarge: ${result.average}`);

/****Task 3 */
/**************************************************** */
const strings = ["apple", "banana", "apple", "orange", "banana", "grape"];
const newStrings = Duplicates(strings);

function Duplicates (strings){
    const uniq = new Set (strings);
    const uniqArray = Array.from(uniq);
    return uniqArray;
}

console.log(newStrings);

/**********task 4 i dont understand  TypeScript  */




