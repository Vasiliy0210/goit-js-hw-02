// ------------------task-03

const findLongestWord = function (string) {
    const sentenceForFind = string.split(' ');
    let longestWord = sentenceForFind[0];
    for (const wordForFind of sentenceForFind) {
        if (wordForFind.length > longestWord.length) {
            longestWord = wordForFind;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));