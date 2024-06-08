/* 
The .some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

Best case: When need to check if any element of the array satisfies the condition.
*/

//  examples

let arr = [1, 2, 3, 4, 5];
let result = arr.some((element) => element > 3);
console.log(result); // true


const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
]

const tempResult = temperatures.some(temperature => temperature.isRecordTemp);
console.log(tempResult); // true

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const grammyResult = songs.some(song => song.wonGrammy);
console.log(grammyResult); // true
