// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The  'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

//1. create a function take in a string and go through all letters then replace a to 4..
//2. expect strings to equal the new strings with some letters replaced by numbers
//3. Run yarn jest
//4. Got red

describe("secretCode", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("takes in a string and returns a coded message. The  'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

//5. create a function "secretCode" then .split("")
//6. .map() goes through every index looking for a,e,i,o,u (both lowercase and uppercase)
//7. return a, A to 4, e, E to 3, i, I to 1, o, O to 0
//8. .join("") change it into a string again
//9. Run the test yarn jest
//10. Got green

const secretCode = (string) => {
    let stringArray = string.split("")
    let newCodeLet = stringArray.map(value => {
        if(value === "a" || value === "A"){ return 4 }
        else if(value === "e" || value === "E") { return 3 }
        else if(value === "i" || value === "I") { return 1 }
        else if (value === "o" || value === "O") { return 0 }
        else { return value }
    })
        return newCodeLet.join("")
  }

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

//1. crete a function "fruitArray" then takes an array of word and single letter and return all the words that contain the particular letter
//2. expect the input of arrayOfWords1 and letterA to equal ["Apple", "Banana", "Orange"]
//3. Run yarn jest
//4. Got red

describe("fruitArray", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
      expect(fruitArray(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(fruitArray(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

//5. create a function fruitArray has array and letter as parameters
//6. .filter() filters out only the values that include both lowercase and uppercase
//7. return the result (newFruitArray)
//8. Run yarn jest
//9. Got green

const fruitArray = (array, letter) => {
    let newFruitArray = array.filter(value => {
      return value.includes(letter.toLowerCase()) || value.includes(letter.toUpperCase())
    })
      return newFruitArray
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false

//1. create a function fullHouse and take in an array of 5 numbers and determines whether or not the array is a full house
//2. expect [5, 5, 5, 3, 3] to be true (3 cards are the same, 2 cards are the same)
//3. Run the test yarn jest
//4. Got red

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.

//5. create a function fullHouse take array as a parameter
//6. count = 0 (for the start)
//7. use [...new Set(array)] -- spread operator to look for the duplicate indexs if it return 2 numbers (length == 2), it means it's a full house
//8. Use a for loop to run through all indexes in the array
//9. if count === 2 or count === 3 return true, else return false
//10. Run the test yarn jest
//11. Got green

//*** this one is very difficulf .. I'm not sure if I did it right but I got green 
const fullHouse = (array) => {
    let count = 0;
    if ([...new Set(array)].length === 2) {  
       for (let i = 0; i < array.length; i++) {
         if (array[i] === array[0]) {
          count++;
         }
       }
         return count === 2 || count === 3;
       } 
       else {
         return false;
       }
};


