// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
/**
 * Write a function that will return
 * - 'Hand one wins!' if hand1 is the winning hand,
 * - 'Hand two wins!' if hand2 is the winning hand,
 * - 'It's a tie!' if hand1 && hand2 are tied
 * 
 * @param {string} hand1 - represents hand1's hand
 * @param {string} hand2 - represents hand2's hand
 * @returns an appropriate message letting you know which play won
 */
const rockPaperScissors = (hand1, hand2) => {

  // Write code here
  // Use the unit test to see what is expected
  if (hand1 === hand2) {
    return "It's a tie!";
  } else if (hand1 === 'Rock' && hand2 === 'Scissors'){
    return "Hand one wins!"
  } else if (hand1 === 'Paper' && hand2 === 'Rock') {
    return "Hand one wins!"
  } else if (hand1 === 'Scissors' && hand2 === 'Paper') {
    return "Hand one wins!"
  } else if (hand1 === 'Scissors' && hand2 === 'Rock') {
    return "Hand two wins!"
  } else if (hand1 === 'Rock' && hand2 === 'Paper') {
    return "Hand two wins!"
  } else if (hand1 === 'Paper' && hand2 === 'Scissors') {
    return "Hand two wins!"
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitespace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
