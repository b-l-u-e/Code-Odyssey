/* 
The .every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
Best case: when you need to check if all elements in the array satisfy the condition.

*/

//  examples

let arr = [1, 2, 3, 4, 5];
let result = arr.every((element) => element > 3);
console.log(result); // false


const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
]

const tempResult = temperatures.every(temperature => temperature.isRecordTemp);
console.log(tempResult); // false


const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const checkAllSongstimesStreamed = songs.every(song => song.timesStreamed >= 1.5)
console.log(checkAllSongstimesStreamed) //false

