// Write a function that finds the longest word in a sentence
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));

// Output: 'quick'
